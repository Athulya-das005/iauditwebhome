"use client";

import { useEffect, useMemo, useState, type CSSProperties, type ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GapAnalysisResults from "@/components/gap-analysis/GapAnalysisResults";
import { gapAnalysisClauses, GAP_SESSION_KEY, type GapFinding } from "@/data/gap-analysis-clauses";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

type QuestionState = {
    id: string;
    text: string;
    note?: string;
    custom: boolean;
    finding: GapFinding | "";
    actionPlan: string;
    evidence: string;
    imageName: string;
    imagePreview: string;
};

const font = '"Pp Neue Montreal", sans-serif';

function makeQuestions(clauseIndex: number): QuestionState[] {
    return gapAnalysisClauses[clauseIndex].questions.map((question) => ({
        id: question.id,
        text: question.text,
        note: question.note,
        custom: false,
        finding: "",
        actionPlan: "",
        evidence: "",
        imageName: "",
        imagePreview: "",
    }));
}

export default function GapAnalysisWorkspace() {
    const router = useRouter();
    const [session, setSession] = useState<GapAnalysisSession | null>(null);
    const [clauseIndex, setClauseIndex] = useState(0);
    const [questionsByClause, setQuestionsByClause] = useState<QuestionState[][]>(() =>
        gapAnalysisClauses.map((_, index) => makeQuestions(index))
    );
    const [addOpen, setAddOpen] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");
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
    const progress = ((clauseIndex + 1) / gapAnalysisClauses.length) * 100;

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

    function deleteQuestion(id: string) {
        setQuestionsByClause((current) =>
            current.map((list, index) => (index === clauseIndex ? list.filter((item) => item.id !== id) : list))
        );
    }

    function addCustomQuestion() {
        const text = newQuestion.trim();
        if (!text) return;
        const question: QuestionState = {
            id: `custom-${Date.now()}`,
            text,
            custom: true,
            finding: "",
            actionPlan: "",
            evidence: "",
            imageName: "",
            imagePreview: "",
        };
        setQuestionsByClause((current) =>
            current.map((list, index) => (index === clauseIndex ? [...list, question] : list))
        );
        setNewQuestion("");
        setAddOpen(false);
    }

    function handleImage(id: string, event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;
        const preview = URL.createObjectURL(file);
        updateQuestion(id, { imageName: file.name, imagePreview: preview });
    }

    if (!session) {
        return (
            <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: font, color: "#6b7280" }}>
                Loading gap analysis...
            </div>
        );
    }

    if (finished) {
        return <GapAnalysisResults session={session} questionsByClause={questionsByClause} isMobile={isMobile} />;
    }

    return (
        <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: font, padding: isMobile ? "calc(var(--page-top-offset) + 0.4rem) 0.9rem 6.5rem" : "calc(var(--page-top-offset) + 0.25rem) 1.5rem 3rem" }}>
            <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "1.1rem" }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: isMobile ? "1.7rem" : "2.1rem", color: "#111827" }}>Gap Analysis</h1>
                        <p style={{ margin: "0.35rem 0 0.7rem", color: "#6b7280" }}>Conduct detailed compliance checks against ISO standards</p>
                        <Link href="/iso-audit-assessments/gap-analysis" style={{ color: "#006644", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
                            ← Back to Setup
                        </Link>
                    </div>
                    <div style={{ textAlign: isMobile ? "left" : "right" }}>
                        <p style={{ margin: 0, fontWeight: 700, color: "#111827" }}>{displayName}</p>
                        <p style={{ margin: "0.2rem 0 0", color: "#6b7280", fontSize: "0.92rem" }}>{session.isoStandard}</p>
                    </div>
                </div>

                <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.9rem", padding: "1.1rem 1.15rem 1.2rem", marginBottom: "1.1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ border: "1px solid #86efac", color: "#166534", background: "#f0fdf4", borderRadius: "999px", padding: "0.28rem 0.7rem", fontSize: "0.82rem", fontWeight: 700 }}>
                            {session.isoStandard} • {displayName}
                        </span>
                        <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>Clause {clauseIndex + 1} of {gapAnalysisClauses.length}</span>
                    </div>
                    <div style={{ height: "6px", background: "#e5e7eb", borderRadius: "999px", margin: "0.85rem 0 1rem", overflow: "hidden" }}>
                        <div style={{ width: `${progress}%`, height: "100%", background: "#16a34a" }} />
                    </div>
                    <h2 style={{ margin: 0, fontSize: isMobile ? "1.45rem" : "1.7rem", color: "#111827" }}>
                        {clause.clauseNumber}. {clause.title}
                    </h2>
                </section>

                {questions.length === 0 ? (
                    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.9rem", padding: "1.4rem", color: "#6b7280", marginBottom: "1rem" }}>
                        Questions for this clause will be added next. Use Previous Clause to continue with 4. Context, or add a custom question below.
                    </div>
                ) : null}

                <div style={{ display: "grid", gap: "0.9rem" }}>
                    {questions.map((question, index) => (
                        <article key={question.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.85rem", overflow: "hidden" }}>
                            <div style={{ padding: "1rem 1rem 0.85rem", background: "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", alignItems: "flex-start" }}>
                                    <p style={{ margin: 0, color: "#9ca3af", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em" }}>QUESTION {index + 1}</p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", flexWrap: "wrap" }}>
                                        <span style={{ color: "#6b7280", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" }}>SELECT FINDING:</span>
                                        <FindingButton active={question.finding === "comply"} color="#16a34a" label="Comply" onClick={() => updateQuestion(question.id, { finding: "comply" })} />
                                        <FindingButton active={question.finding === "ofi"} color="#d97706" label="OFI" onClick={() => updateQuestion(question.id, { finding: "ofi" })} />
                                        <FindingButton active={question.finding === "nc"} color="#dc2626" label="NC" onClick={() => updateQuestion(question.id, { finding: "nc" })} />
                                        <button type="button" aria-label="Delete question" onClick={() => deleteQuestion(question.id)} style={iconBtn}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                                                <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <p style={{ margin: "0.55rem 0 0", color: "#111827", fontWeight: 700, lineHeight: 1.45 }}>{question.text}</p>
                                {question.note ? (
                                    <p style={{ margin: "0.45rem 0 0", color: "#6b7280", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.5 }}>{question.note}</p>
                                ) : null}
                            </div>
                            <div style={{ padding: "1rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.85rem" }}>
                                <label style={{ display: "grid", gap: "0.35rem" }}>
                                    <span style={fieldLabel}>ACTION PLAN</span>
                                    <textarea value={question.actionPlan} onChange={(e) => updateQuestion(question.id, { actionPlan: e.target.value })} placeholder="Corrective action..." style={textareaStyle} />
                                </label>
                                <label style={{ display: "grid", gap: "0.35rem" }}>
                                    <span style={fieldLabel}>EVIDENCE / COMMENTS</span>
                                    <textarea value={question.evidence} onChange={(e) => updateQuestion(question.id, { evidence: e.target.value })} placeholder="Evidence observed..." style={textareaStyle} />
                                </label>
                            </div>
                            <div style={{ padding: "0 1rem 1rem" }}>
                                <p style={{ ...fieldLabel, margin: "0 0 0.4rem" }}>UPLOAD EVIDENCE IMAGE</p>
                                <label style={uploadBtn}>
                                    Choose image...
                                    <input type="file" accept="image/*" onChange={(e) => handleImage(question.id, e)} style={{ display: "none" }} />
                                </label>
                                {question.imageName ? <p style={{ margin: "0.45rem 0 0", color: "#6b7280", fontSize: "0.82rem" }}>{question.imageName}</p> : null}
                                {question.imagePreview ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={question.imagePreview} alt="" style={{ display: "block", marginTop: "0.55rem", maxWidth: "220px", borderRadius: "0.5rem" }} />
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>

                <button type="button" onClick={() => setAddOpen(true)} style={addQuestionBtn}>
                    + Add Custom Question to {clause.clauseNumber}. {clause.title}
                </button>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.1rem" }}>
                    <button type="button" disabled={clauseIndex === 0} onClick={() => setClauseIndex((i) => Math.max(0, i - 1))} style={{ ...navBtn, opacity: clauseIndex === 0 ? 0.5 : 1, cursor: clauseIndex === 0 ? "not-allowed" : "pointer" }}>
                        ← Previous Clause
                    </button>
                    <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>Clause {clauseIndex + 1} of {gapAnalysisClauses.length}</span>
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

            {addOpen ? (
                <div role="dialog" aria-modal="true" onClick={() => setAddOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(8,18,14,0.55)", display: "grid", placeItems: "center", padding: "calc(var(--page-top-offset) + 1rem) 1rem 1rem", zIndex: 2200 }}>
                    <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "520px", background: "#fff", borderRadius: "0.95rem", padding: "1.25rem 1.3rem 1.2rem", boxShadow: "0 24px 50px rgba(0,0,0,0.2)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#111827" }}>Add New Question</h3>
                                <p style={{ margin: "0.35rem 0 0", color: "#6b7280", fontSize: "0.92rem" }}>
                                    Add a custom question to <strong>{clause.clauseNumber}. {clause.title}.</strong>
                                </p>
                            </div>
                            <button type="button" onClick={() => setAddOpen(false)} style={{ ...iconBtn, fontSize: "1.1rem" }}>×</button>
                        </div>
                        <label style={{ display: "grid", gap: "0.4rem", marginTop: "1.1rem" }}>
                            <span style={{ color: "#374151", fontWeight: 600, fontSize: "0.9rem" }}>Question Text</span>
                            <input value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} placeholder="Enter your question here..." style={{ width: "100%", boxSizing: "border-box", border: "1px solid #16a34a", borderRadius: "0.6rem", padding: "0.8rem 0.9rem", fontFamily: font, fontSize: "0.95rem" }} />
                        </label>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem", marginTop: "1.15rem" }}>
                            <button type="button" onClick={() => setAddOpen(false)} style={navBtn}>Cancel</button>
                            <button type="button" onClick={addCustomQuestion} style={{ ...navBtn, background: "#166534", color: "#fff", borderColor: "#166534" }}>Add Question</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

function FindingButton({ active, color, label, onClick }: { active: boolean; color: string; label: string; onClick: () => void }) {
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

const fieldLabel: CSSProperties = { color: "#9ca3af", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" };
const textareaStyle: CSSProperties = { width: "100%", minHeight: "64px", resize: "vertical", border: "1px solid #e5e7eb", borderRadius: "0.55rem", padding: "0.6rem 0.75rem", fontFamily: font, fontSize: "0.9rem", boxSizing: "border-box" };
const uploadBtn: CSSProperties = { display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px dashed #d1d5db", borderRadius: "0.5rem", padding: "0.45rem 0.75rem", color: "#4b5563", fontSize: "0.85rem", cursor: "pointer", background: "#fff" };
const addQuestionBtn: CSSProperties = { width: "100%", marginTop: "1rem", border: "1px dashed #d1d5db", background: "#f9fafb", borderRadius: "0.7rem", padding: "0.95rem", color: "#374151", fontWeight: 600, cursor: "pointer", fontFamily: font };
const navBtn: CSSProperties = { border: "1px solid #d1d5db", background: "#fff", color: "#374151", borderRadius: "0.55rem", padding: "0.7rem 0.95rem", fontWeight: 600, fontFamily: font, cursor: "pointer" };
const iconBtn: CSSProperties = { border: "none", background: "transparent", color: "#9ca3af", cursor: "pointer", fontSize: "1rem", padding: "0.15rem 0.3rem" };
