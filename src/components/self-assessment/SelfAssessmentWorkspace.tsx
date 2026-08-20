"use client";

import { useEffect, useMemo, useState, type CSSProperties, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import SelfAssessmentResults from "@/components/self-assessment/SelfAssessmentResults";
import { SELF_SESSION_KEY, selfAssessmentClauses, type SelfAnswer } from "@/data/self-assessment-clauses";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

type QuestionState = {
    id: string;
    text: string;
    answer: SelfAnswer;
};

const font = '"Pp Neue Montreal", sans-serif';
const YES = "#16a34a";
const NO = "#ef4444";

function makeQuestions(clauseIndex: number): QuestionState[] {
    return selfAssessmentClauses[clauseIndex].questions.map((text, index) => ({
        id: `c${clauseIndex}-q${index + 1}`,
        text,
        answer: "",
    }));
}

export default function SelfAssessmentWorkspace() {
    const router = useRouter();
    const [session, setSession] = useState<GapAnalysisSession | null>(null);
    const [clauseIndex, setClauseIndex] = useState(0);
    const [questionsByClause, setQuestionsByClause] = useState<QuestionState[][]>(() =>
        selfAssessmentClauses.map((_, index) => makeQuestions(index))
    );
    const [addOpen, setAddOpen] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");
    const [done, setDone] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 800);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const raw = sessionStorage.getItem(SELF_SESSION_KEY);
        if (!raw) {
            router.replace("/iso-audit-assessments/self-assessment");
            return;
        }
        try {
            setSession(JSON.parse(raw) as GapAnalysisSession);
        } catch {
            router.replace("/iso-audit-assessments/self-assessment");
        }
    }, [router]);

    const questions = questionsByClause[clauseIndex] ?? [];
    const totals = useMemo(() => {
        const all = questionsByClause.flat();
        return {
            total: all.length,
            answered: all.filter((item) => item.answer).length,
        };
    }, [questionsByClause]);
    const clauseProgress = selfAssessmentClauses.length === 0 ? 0 : ((clauseIndex + 1) / selfAssessmentClauses.length) * 100;
    const lastClause = clauseIndex === selfAssessmentClauses.length - 1;
    const isoBadge = session?.isoStandard?.replace(/:.*$/, "") ?? "ISO";

    function setAnswer(id: string, answer: SelfAnswer) {
        setQuestionsByClause((prev) =>
            prev.map((clause, index) =>
                index === clauseIndex ? clause.map((item) => (item.id === id ? { ...item, answer } : item)) : clause
            )
        );
    }

    function deleteQuestion(id: string) {
        setQuestionsByClause((prev) =>
            prev.map((clause, index) => (index === clauseIndex ? clause.filter((item) => item.id !== id) : clause))
        );
    }

    function addQuestion(event: FormEvent) {
        event.preventDefault();
        const text = newQuestion.trim();
        if (!text) return;
        setQuestionsByClause((prev) =>
            prev.map((clause, index) =>
                index === clauseIndex
                    ? [...clause, { id: `c${clauseIndex}-custom-${Date.now()}`, text, answer: "" }]
                    : clause
            )
        );
        setNewQuestion("");
        setAddOpen(false);
    }

    if (!session) return null;

    if (done && session) {
        return <SelfAssessmentResults session={session} questionsByClause={questionsByClause} isMobile={isMobile} />;
    }

    return (
        <div style={{ minHeight: "100vh", background: "#f4f5f7", fontFamily: font, padding: isMobile ? "calc(var(--page-top-offset) + 0.75rem) 1rem 3rem" : "calc(var(--page-top-offset) + 1.1rem) 1.75rem 3.5rem" }}>
            <div style={{ maxWidth: "920px", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.15rem" }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: isMobile ? "1.85rem" : "2.15rem", color: "#111827", letterSpacing: "-0.03em" }}>Self Assessment</h1>
                        <p style={{ margin: "0.4rem 0 0", color: "#6b7280" }}>Evaluate your organization&apos;s compliance with ISO standards</p>
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.85rem", padding: "0.55rem 0.85rem", minWidth: "92px", textAlign: "right" }}>
                        <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", color: "#9ca3af" }}>PROGRESS</div>
                        <div style={{ color: YES, fontWeight: 800, fontSize: "1.05rem" }}>
                            {totals.answered} / {totals.total}
                        </div>
                    </div>
                </div>

                <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1rem 1.15rem 1.05rem", marginBottom: "1rem", boxShadow: "0 8px 24px rgba(16,24,40,0.04)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
                            <span style={{ background: "#e8f8ef", color: "#166534", borderRadius: "999px", padding: "0.28rem 0.75rem", fontWeight: 700, fontSize: "0.82rem" }}>
                                {isoBadge}
                            </span>
                            <span style={{ color: "#111827", fontWeight: 600 }}>{session.organisation}</span>
                        </div>
                        <span style={{ color: "#6b7280", fontSize: "0.92rem" }}>
                            Clause {clauseIndex + 1} of {selfAssessmentClauses.length}
                        </span>
                    </div>
                    <div style={{ marginTop: "0.85rem", height: "8px", background: "#eef2f0", borderRadius: "999px", overflow: "hidden" }}>
                        <div style={{ width: `${clauseProgress}%`, height: "100%", background: YES, borderRadius: "999px" }} />
                    </div>
                </section>

                <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "1.05rem", padding: isMobile ? "1.1rem 1rem 0.4rem" : "1.35rem 1.4rem 0.5rem", boxShadow: "0 12px 32px rgba(16,24,40,0.05)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", marginBottom: "0.35rem" }}>
                        <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#111827" }}>{selfAssessmentClauses[clauseIndex].label}</h2>
                        <button type="button" onClick={() => setAddOpen(true)} style={addBtn}>
                            + Add Question
                        </button>
                    </div>

                    {questions.length === 0 ? (
                        <p style={{ color: "#6b7280", padding: "1.25rem 0 1.6rem" }}>No questions in this clause yet. Add one to get started.</p>
                    ) : (
                        questions.map((question, index) => (
                            <article key={question.id} style={{ padding: "1.15rem 0", borderTop: index === 0 ? "none" : "1px solid #f3f4f6" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
                                    <p style={{ margin: 0, color: "#374151", fontWeight: 600, lineHeight: 1.55, flex: 1 }}>
                                        Q{index + 1}. {question.text}
                                    </p>
                                    <button type="button" aria-label="Delete question" onClick={() => deleteQuestion(question.id)} style={trashBtn}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="3 6 5 6 21 6" />
                                            <path d="M19 6l-1 14H6L5 6" />
                                            <path d="M10 11v6M14 11v6" />
                                            <path d="M9 6V4h6v2" />
                                        </svg>
                                    </button>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.7rem", marginTop: "0.85rem" }}>
                                    <YesNoButton
                                        label="Yes"
                                        selected={question.answer === "yes"}
                                        tone="yes"
                                        onClick={() => setAnswer(question.id, question.answer === "yes" ? "" : "yes")}
                                    />
                                    <YesNoButton
                                        label="No"
                                        selected={question.answer === "no"}
                                        tone="no"
                                        onClick={() => setAnswer(question.id, question.answer === "no" ? "" : "no")}
                                    />
                                </div>
                            </article>
                        ))
                    )}
                </section>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", marginTop: "1.15rem" }}>
                    <button type="button" disabled={clauseIndex === 0} onClick={() => setClauseIndex((value) => value - 1)} style={{ ...prevBtn, opacity: clauseIndex === 0 ? 0.45 : 1 }}>
                        ← Previous
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            if (lastClause) setDone(true);
                            else setClauseIndex((value) => value + 1);
                        }}
                        style={lastClause ? completeBtn : nextBtn}
                    >
                        {lastClause ? "✓  Complete Assessment" : "Next Clause →"}
                    </button>
                </div>
            </div>

            {addOpen ? (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="add-question-title"
                    onClick={() => setAddOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 2200,
                        background: "rgba(17, 24, 39, 0.55)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.25rem",
                    }}
                >
                    <form
                        onClick={(event) => event.stopPropagation()}
                        onSubmit={addQuestion}
                        style={{ width: "100%", maxWidth: "520px", background: "#fff", borderRadius: "1rem", padding: "1.35rem 1.35rem 1.2rem", boxShadow: "0 24px 60px rgba(0,0,0,0.2)" }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
                            <div>
                                <h2 id="add-question-title" style={{ margin: 0, fontSize: "1.25rem", color: "#111827" }}>Add New Question</h2>
                                <p style={{ margin: "0.4rem 0 0", color: "#6b7280", fontSize: "0.92rem" }}>
                                    Add a custom question to <strong>{selfAssessmentClauses[clauseIndex].label}.</strong>
                                </p>
                            </div>
                            <button type="button" onClick={() => setAddOpen(false)} aria-label="Close" style={{ ...trashBtn, fontSize: "1.2rem" }}>
                                ×
                            </button>
                        </div>
                        <label style={{ display: "grid", gap: "0.4rem", margin: "1.2rem 0 1.25rem" }}>
                            <span style={{ fontWeight: 700, color: "#111827", fontSize: "0.92rem" }}>Question Text</span>
                            <input
                                autoFocus
                                value={newQuestion}
                                onChange={(event) => setNewQuestion(event.target.value)}
                                placeholder="Enter your question here..."
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                    border: "2px solid #16a34a",
                                    borderRadius: "0.65rem",
                                    padding: "0.75rem 0.85rem",
                                    fontFamily: font,
                                    fontSize: "0.95rem",
                                }}
                            />
                        </label>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.65rem" }}>
                            <button type="button" onClick={() => setAddOpen(false)} style={prevBtn}>
                                Cancel
                            </button>
                            <button type="submit" style={{ ...nextBtn, background: "#166534" }}>
                                Add Question
                            </button>
                        </div>
                    </form>
                </div>
            ) : null}
        </div>
    );
}

function YesNoButton({
    label,
    selected,
    tone,
    onClick,
}: {
    label: string;
    selected: boolean;
    tone: "yes" | "no";
    onClick: () => void;
}) {
    const color = tone === "yes" ? YES : NO;
    const background = !selected ? "#fff" : tone === "yes" ? "#f0fdf4" : "#fef2f2";
    const border = selected ? `1.5px solid ${color}` : "1px solid #e5e7eb";
    const iconColor = selected ? color : "#9ca3af";
    return (
        <button
            type="button"
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.7rem",
                width: "100%",
                background,
                border,
                borderRadius: "0.85rem",
                padding: "0.9rem 1rem",
                cursor: "pointer",
                fontFamily: font,
                color: selected ? color : "#6b7280",
                fontWeight: 700,
            }}
        >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem" }}>
                <span
                    style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        border: `1.5px solid ${iconColor}`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: selected ? "#fff" : iconColor,
                        background: selected ? color : "transparent",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                    }}
                >
                    {tone === "yes" ? "✓" : "!"}
                </span>
                {label}
            </span>
            <span
                style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: `2px solid ${selected ? color : "#d1d5db"}`,
                    boxShadow: selected ? `inset 0 0 0 3px ${selected ? background : "#fff"}` : "none",
                    background: selected ? color : "#fff",
                }}
            />
        </button>
    );
}

const addBtn: CSSProperties = {
    background: "none",
    border: "none",
    color: "#166534",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: font,
    fontSize: "0.92rem",
};
const trashBtn: CSSProperties = {
    background: "none",
    border: "none",
    color: "#9ca3af",
    cursor: "pointer",
    padding: "0.15rem",
    lineHeight: 1,
};
const prevBtn: CSSProperties = {
    background: "#fff",
    border: "1px solid #d1d5db",
    color: "#374151",
    borderRadius: "0.7rem",
    padding: "0.7rem 1.05rem",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: font,
};
const nextBtn: CSSProperties = {
    background: "#111827",
    border: "none",
    color: "#fff",
    borderRadius: "0.7rem",
    padding: "0.7rem 1.15rem",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: font,
};
const completeBtn: CSSProperties = {
    background: "#166534",
    border: "none",
    color: "#fff",
    borderRadius: "0.7rem",
    padding: "0.75rem 1.2rem",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: font,
};
