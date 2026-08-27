"use client";

import { useEffect, useMemo, useState, type CSSProperties, type ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GapAnalysisResults from "@/components/gap-analysis/GapAnalysisResults";
import {
    GAP_SESSION_KEY,
    GAP_TOTAL_QUESTIONS,
    formatClauseHeading,
    gapAnalysisClauses,
    type GapFinding,
} from "@/data/gap-analysis-clauses";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

type QuestionState = {
    id: string;
    code: string;
    title: string;
    text: string;
    prompts?: string[];
    is2026?: boolean;
    finding: GapFinding | "";
    correctiveAction: string;
    improvementRequired: string;
    evidence: string;
    imageName: string;
    imagePreview: string;
};

const font = '"Pp Neue Montreal", sans-serif';

function makeQuestions(clauseIndex: number): QuestionState[] {
    return gapAnalysisClauses[clauseIndex].questions.map((question) => ({
        id: question.id,
        code: question.code,
        title: question.title,
        text: question.text,
        prompts: question.prompts,
        is2026: question.is2026,
        finding: "",
        correctiveAction: "",
        improvementRequired: "",
        evidence: "",
        imageName: "",
        imagePreview: "",
    }));
}

function toResultsRows(questionsByClause: QuestionState[][]) {
    return questionsByClause.map((list) =>
        list.map((item) => {
            const actionParts = [
                item.correctiveAction.trim() ? `Corrective action required: ${item.correctiveAction.trim()}` : "",
                item.improvementRequired.trim() ? `Improvement required: ${item.improvementRequired.trim()}` : "",
            ].filter(Boolean);
            return {
                code: item.code,
                title: item.title,
                text: item.text,
                finding: item.finding,
                actionPlan: actionParts.join("\n"),
                evidence: item.evidence,
                evidenceImage: item.imagePreview.startsWith("data:image/") ? item.imagePreview : "",
            };
        })
    );
}

function readImageAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("Unable to read image"));
        reader.onload = () => {
            const result = typeof reader.result === "string" ? reader.result : "";
            if (!result.startsWith("data:image/")) {
                reject(new Error("Unsupported image"));
                return;
            }
            const img = new window.Image();
            img.onload = () => {
                const maxSide = 900;
                const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
                const width = Math.max(1, Math.round(img.width * scale));
                const height = Math.max(1, Math.round(img.height * scale));
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    resolve(result);
                    return;
                }
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL("image/jpeg", 0.72));
            };
            img.onerror = () => resolve(result);
            img.src = result;
        };
        reader.readAsDataURL(file);
    });
}

export default function GapAnalysisWorkspace() {
    const router = useRouter();
    const [session, setSession] = useState<GapAnalysisSession | null>(null);
    const [clauseIndex, setClauseIndex] = useState(0);
    const [questionsByClause, setQuestionsByClause] = useState<QuestionState[][]>(() =>
        gapAnalysisClauses.map((_, index) => makeQuestions(index))
    );
    const [isMobile, setIsMobile] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 820);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem(GAP_SESSION_KEY);
            if (!raw) {
                router.replace("/iso-audit-assessments/gap-analysis");
                return;
            }
            setSession(JSON.parse(raw) as GapAnalysisSession);
        } catch {
            router.replace("/iso-audit-assessments/gap-analysis");
        }
    }, [router]);

    const clause = gapAnalysisClauses[clauseIndex];
    const questions = questionsByClause[clauseIndex];

    const totals = useMemo(() => {
        let answered = 0;
        let comply = 0;
        let ofi = 0;
        let nc = 0;
        questionsByClause.forEach((list) => {
            list.forEach((item) => {
                if (!item.finding) return;
                answered += 1;
                if (item.finding === "comply") comply += 1;
                if (item.finding === "ofi") ofi += 1;
                if (item.finding === "nc") nc += 1;
            });
        });
        return { answered, comply, ofi, nc };
    }, [questionsByClause]);

    const clauseAnswered = questions.filter((item) => item.finding).length;
    const clauseComply = questions.filter((item) => item.finding === "comply").length;
    const progress = (totals.answered / GAP_TOTAL_QUESTIONS) * 100;

    const displayName = useMemo(() => {
        if (!session) return "";
        return session.organisation || `${session.firstName} ${session.lastName}`.trim();
    }, [session]);

    function updateQuestion(id: string, patch: Partial<QuestionState>) {
        setQuestionsByClause((current) =>
            current.map((list, index) =>
                index === clauseIndex ? list.map((item) => (item.id === id ? { ...item, ...patch } : item)) : list
            )
        );
    }

    async function handleImage(id: string, event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;
        try {
            const preview = await readImageAsDataUrl(file);
            updateQuestion(id, { imageName: file.name, imagePreview: preview });
        } catch {
            updateQuestion(id, { imageName: "", imagePreview: "" });
        } finally {
            event.target.value = "";
        }
    }

    if (!session) {
        return (
            <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: font, color: "#6b7280" }}>
                Loading gap analysis...
            </div>
        );
    }

    if (finished) {
        return <GapAnalysisResults session={session} questionsByClause={toResultsRows(questionsByClause)} isMobile={isMobile} />;
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f3f4f6",
                fontFamily: font,
                padding: isMobile
                    ? "calc(var(--page-top-offset) + 0.4rem) 0.9rem 6.5rem"
                    : "calc(var(--page-top-offset) + 0.25rem) 1.5rem 3rem",
            }}
        >
            <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        marginBottom: "1.1rem",
                    }}
                >
                    <div>
                        <h1 style={{ margin: 0, fontSize: isMobile ? "1.7rem" : "2.1rem", color: "#111827" }}>
                            ISO 14001:2026 Gap Analysis
                        </h1>
                        <p style={{ margin: "0.35rem 0 0.7rem", color: "#6b7280" }}>
                            Mark Comply, OFI or NC across {GAP_TOTAL_QUESTIONS} questions
                        </p>
                        <Link
                            href="/iso-audit-assessments/gap-analysis"
                            style={{ color: "#006644", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}
                        >
                            ← Back to Setup
                        </Link>
                    </div>
                    <div style={{ textAlign: isMobile ? "left" : "right" }}>
                        <p style={{ margin: 0, fontWeight: 700, color: "#111827" }}>{displayName}</p>
                        <p style={{ margin: "0.2rem 0 0", color: "#6b7280", fontSize: "0.92rem" }}>{session.isoStandard}</p>
                    </div>
                </div>

                <section
                    style={{
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "0.9rem",
                        padding: "1.1rem 1.15rem 1.2rem",
                        marginBottom: "1.1rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "0.75rem",
                            flexWrap: "wrap",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                border: "1px solid #86efac",
                                color: "#166534",
                                background: "#f0fdf4",
                                borderRadius: "999px",
                                padding: "0.28rem 0.7rem",
                                fontSize: "0.82rem",
                                fontWeight: 700,
                            }}
                        >
                            {session.isoStandard} • {displayName}
                        </span>
                        <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                            {totals.answered} / {GAP_TOTAL_QUESTIONS} answered · Comply {totals.comply} · OFI {totals.ofi} · NC{" "}
                            {totals.nc}
                        </span>
                    </div>
                    <div style={{ height: "6px", background: "#e5e7eb", borderRadius: "999px", margin: "0.85rem 0 1rem", overflow: "hidden" }}>
                        <div style={{ width: `${progress}%`, height: "100%", background: "#16a34a" }} />
                    </div>
                    <h2 style={{ margin: 0, fontSize: isMobile ? "1.45rem" : "1.7rem", color: "#111827", letterSpacing: "0.02em" }}>
                        {formatClauseHeading(clause.label)}
                    </h2>
                    <p style={{ margin: "0.55rem 0 0", color: "#0f766e", fontWeight: 700, fontSize: "0.92rem" }}>
                        Subtotal: {clauseComply} Comply · {clauseAnswered} / {questions.length} answered
                    </p>
                </section>

                <div style={{ display: "grid", gap: "0.9rem" }}>
                    {questions.map((question, index) => (
                        <article
                            key={question.id}
                            style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.85rem", overflow: "hidden" }}
                        >
                            <div style={{ padding: "1rem 1rem 0.85rem", background: "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: "0.75rem",
                                        flexWrap: "wrap",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", alignItems: "center" }}>
                                        <p
                                            style={{
                                                margin: 0,
                                                color: "#9ca3af",
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.08em",
                                            }}
                                        >
                                            {question.code} · QUESTION {index + 1}
                                        </p>
                                        {question.is2026 ? <span style={tag2026}>★ 2026</span> : null}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", flexWrap: "wrap" }}>
                                        <span style={{ color: "#6b7280", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                                            SELECT FINDING:
                                        </span>
                                        <FindingButton
                                            active={question.finding === "comply"}
                                            color="#16a34a"
                                            label="Comply"
                                            onClick={() => updateQuestion(question.id, { finding: "comply" })}
                                        />
                                        <FindingButton
                                            active={question.finding === "ofi"}
                                            color="#d97706"
                                            label="OFI"
                                            onClick={() => updateQuestion(question.id, { finding: "ofi" })}
                                        />
                                        <FindingButton
                                            active={question.finding === "nc"}
                                            color="#dc2626"
                                            label="NC"
                                            onClick={() => updateQuestion(question.id, { finding: "nc" })}
                                        />
                                    </div>
                                </div>
                                <p style={{ margin: "0.55rem 0 0", color: "#111827", fontWeight: 700, lineHeight: 1.45 }}>
                                    {question.title}
                                </p>
                                <p style={{ margin: "0.45rem 0 0", color: "#374151", lineHeight: 1.55 }}>{question.text}</p>
                                {question.prompts?.length ? (
                                    <ul
                                        style={{
                                            margin: "0.55rem 0 0",
                                            paddingLeft: "1.35rem",
                                            color: "#6b7280",
                                            lineHeight: 1.55,
                                            listStyleType: "disc",
                                            listStylePosition: "outside",
                                        }}
                                    >
                                        {question.prompts.map((prompt) => (
                                            <li key={prompt} style={{ marginBottom: "0.25rem", display: "list-item" }}>
                                                {prompt}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                            <div style={{ borderTop: "1px solid #e5e7eb" }}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr 1fr",
                                        background: "#c8e6d4",
                                    }}
                                >
                                    <div style={docColHeader}>Gap Analysis Findings</div>
                                    <div style={docColHeader}>Actions Plan to address Finding</div>
                                    <div style={docColHeader}>Comments / Feedback</div>
                                </div>
                                <div
                                    style={{
                                        padding: "1rem",
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr 1fr",
                                        gap: "0.85rem",
                                        background: "#fff",
                                        alignItems: "start",
                                    }}
                                >
                                    <div style={{ display: "grid", gap: "0.55rem", alignContent: "start" }}>
                                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.78rem", fontWeight: 700 }}>
                                            Selected finding:{" "}
                                            <span
                                                style={{
                                                    color:
                                                        question.finding === "comply"
                                                            ? "#16a34a"
                                                            : question.finding === "ofi"
                                                              ? "#ea580c"
                                                              : question.finding === "nc"
                                                                ? "#dc2626"
                                                                : "#9ca3af",
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {question.finding === "comply"
                                                    ? "☑ Comply"
                                                    : question.finding === "ofi"
                                                      ? "⭕ OFI"
                                                      : question.finding === "nc"
                                                        ? "✕ NC"
                                                        : "Not selected"}
                                            </span>
                                        </p>
                                        <p style={{ margin: 0, color: "#9ca3af", fontSize: "0.78rem", lineHeight: 1.45 }}>
                                            Use the Comply / OFI / NC buttons above to record the finding for this question.
                                        </p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                        <label style={fieldGroup}>
                                            <span style={fieldLabel}>CORRECTIVE ACTION REQUIRED</span>
                                            <textarea
                                                value={question.correctiveAction}
                                                onChange={(e) => updateQuestion(question.id, { correctiveAction: e.target.value })}
                                                placeholder="Corrective action required"
                                                style={textareaStyle}
                                            />
                                        </label>
                                        <label style={fieldGroup}>
                                            <span style={fieldLabel}>IMPROVEMENT REQUIRED</span>
                                            <textarea
                                                value={question.improvementRequired}
                                                onChange={(e) => updateQuestion(question.id, { improvementRequired: e.target.value })}
                                                placeholder="Improvement required"
                                                style={textareaStyle}
                                            />
                                        </label>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                        <label style={fieldGroup}>
                                            <span style={fieldLabel}>OBJECTIVE EVIDENCE NOTES</span>
                                            <textarea
                                                value={question.evidence}
                                                onChange={(e) => updateQuestion(question.id, { evidence: e.target.value })}
                                                placeholder="Objective evidence notes"
                                                style={textareaStyle}
                                            />
                                        </label>
                                        <div>
                                            <p style={{ ...fieldLabel, margin: "0 0 0.3rem" }}>ADD IMAGE AS EVIDENCE</p>
                                            <label style={uploadBtn}>
                                                Choose image...
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImage(question.id, e)}
                                                    style={{ display: "none" }}
                                                />
                                            </label>
                                            {question.imageName ? (
                                                <p style={{ margin: "0.45rem 0 0", color: "#6b7280", fontSize: "0.82rem" }}>
                                                    {question.imageName}
                                                </p>
                                            ) : null}
                                            {question.imagePreview ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={question.imagePreview}
                                                    alt="Evidence"
                                                    style={{
                                                        display: "block",
                                                        marginTop: "0.55rem",
                                                        maxWidth: "100%",
                                                        maxHeight: "160px",
                                                        objectFit: "cover",
                                                        borderRadius: "0.5rem",
                                                        border: "1px solid #e5e7eb",
                                                    }}
                                                />
                                            ) : null}
                                            {question.imagePreview ? (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateQuestion(question.id, { imageName: "", imagePreview: "" })
                                                    }
                                                    style={{
                                                        marginTop: "0.45rem",
                                                        border: "none",
                                                        background: "transparent",
                                                        color: "#dc2626",
                                                        fontSize: "0.8rem",
                                                        fontWeight: 600,
                                                        cursor: "pointer",
                                                        fontFamily: font,
                                                        padding: 0,
                                                    }}
                                                >
                                                    Remove image
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                        marginTop: "1.1rem",
                    }}
                >
                    <button
                        type="button"
                        disabled={clauseIndex === 0}
                        onClick={() => setClauseIndex((i) => Math.max(0, i - 1))}
                        style={{ ...navBtn, opacity: clauseIndex === 0 ? 0.5 : 1, cursor: clauseIndex === 0 ? "not-allowed" : "pointer" }}
                    >
                        ← Previous Clause
                    </button>
                    <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                        Clause {clauseIndex + 1} of {gapAnalysisClauses.length}
                    </span>
                    {clauseIndex === gapAnalysisClauses.length - 1 ? (
                        <button
                            type="button"
                            onClick={() => setFinished(true)}
                            style={{ ...navBtn, background: "#16a34a", color: "#fff", borderColor: "#16a34a" }}
                        >
                            Finish Analysis
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setClauseIndex((i) => Math.min(gapAnalysisClauses.length - 1, i + 1))}
                            style={{ ...navBtn, background: "#16a34a", color: "#fff", borderColor: "#16a34a" }}
                        >
                            Next Clause →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function FindingButton({
    active,
    color,
    label,
    onClick,
}: {
    active: boolean;
    color: string;
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{
                border: `1px solid ${color}`,
                background: active ? color : "#fff",
                color: active ? "#fff" : color,
                borderRadius: "999px",
                padding: "0.28rem 0.65rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: font,
            }}
        >
            {label}
        </button>
    );
}

const fieldLabel: CSSProperties = {
    color: "#9ca3af",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    display: "block",
    margin: 0,
    lineHeight: 1.3,
};
const fieldGroup: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.28rem",
    margin: 0,
};
const docColHeader: CSSProperties = {
    padding: "0.65rem 0.85rem",
    color: "#111827",
    fontWeight: 800,
    fontSize: "0.82rem",
    borderRight: "1px solid rgba(16,41,29,0.12)",
};
const textareaStyle: CSSProperties = {
    width: "100%",
    minHeight: "64px",
    resize: "vertical",
    border: "1px solid #e5e7eb",
    borderRadius: "0.55rem",
    padding: "0.6rem 0.75rem",
    fontFamily: font,
    fontSize: "0.9rem",
    boxSizing: "border-box",
    margin: 0,
};
const uploadBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    border: "1px dashed #d1d5db",
    borderRadius: "0.5rem",
    padding: "0.45rem 0.75rem",
    color: "#4b5563",
    fontSize: "0.85rem",
    cursor: "pointer",
    background: "#fff",
};
const navBtn: CSSProperties = {
    border: "1px solid #d1d5db",
    background: "#fff",
    color: "#374151",
    borderRadius: "0.55rem",
    padding: "0.7rem 0.95rem",
    fontWeight: 600,
    fontFamily: font,
    cursor: "pointer",
};
const tag2026: CSSProperties = {
    display: "inline-block",
    background: "#ecfdf3",
    color: "#166534",
    border: "1px solid #bbf7d0",
    borderRadius: "999px",
    padding: "0.1rem 0.5rem",
    fontSize: "0.68rem",
    fontWeight: 800,
};
