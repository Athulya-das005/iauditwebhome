"use client";

import { useEffect, useMemo, useState, type CSSProperties, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import SelfAssessmentResults from "@/components/self-assessment/SelfAssessmentResults";
import {
    SELF_SESSION_KEY,
    getSelfAssessmentClauses,
    type SelfAnswer,
    type SelfAssessmentClause,
} from "@/data/self-assessment-clauses";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

type QuestionState = {
    id: string;
    text: string;
    answer: SelfAnswer;
};

const font = '"Pp Neue Montreal", sans-serif';
const YES = "#16a34a";
const NO = "#ef4444";

function makeQuestions(clauses: SelfAssessmentClause[], clauseIndex: number): QuestionState[] {
    return (clauses[clauseIndex]?.questions ?? []).map((text, index) => ({
        id: `c${clauseIndex}-q${index + 1}`,
        text,
        answer: "",
    }));
}

function buildQuestionsByClause(clauses: SelfAssessmentClause[]): QuestionState[][] {
    return clauses.map((_, index) => makeQuestions(clauses, index));
}

export default function SelfAssessmentWorkspace() {
    const router = useRouter();
    const [session, setSession] = useState<GapAnalysisSession | null>(null);
    const [clauses, setClauses] = useState<SelfAssessmentClause[]>([]);
    const [clauseIndex, setClauseIndex] = useState(0);
    const [questionsByClause, setQuestionsByClause] = useState<QuestionState[][]>([]);
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
            const parsed = JSON.parse(raw) as GapAnalysisSession;
            const nextClauses = getSelfAssessmentClauses(parsed.isoStandard);
            setSession(parsed);
            setClauses(nextClauses);
            setQuestionsByClause(buildQuestionsByClause(nextClauses));
            setClauseIndex(0);
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
    const clauseProgress = clauses.length === 0 ? 0 : ((clauseIndex + 1) / clauses.length) * 100;
    const lastClause = clauseIndex === clauses.length - 1;
    const isoBadge = session?.isoStandard?.replace(/\s*[-–:].*$/, "").trim() ?? "ISO";

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

    if (!session || clauses.length === 0) return null;

    if (done && session) {
        return (
            <SelfAssessmentResults
                session={session}
                clauses={clauses}
                questionsByClause={questionsByClause}
                isMobile={isMobile}
            />
        );
    }

    const currentClause = clauses[clauseIndex];

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
                            Clause {clauseIndex + 1} of {clauses.length}
                        </span>
                    </div>
                    <div style={{ marginTop: "0.85rem", height: "8px", background: "#eef2f0", borderRadius: "999px", overflow: "hidden" }}>
                        <div style={{ width: `${clauseProgress}%`, height: "100%", background: YES, borderRadius: "999px" }} />
                    </div>
                </section>

                <section style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "1.05rem", padding: isMobile ? "1.1rem 1rem 0.4rem" : "1.35rem 1.4rem 0.5rem", boxShadow: "0 12px 32px rgba(16,24,40,0.05)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", marginBottom: "0.35rem" }}>
                        <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#111827" }}>{currentClause.label}</h2>
                        <button type="button" onClick={() => setAddOpen(true)} style={addBtn}>
                            + Add Question
                        </button>
                    </div>

                    {questions.length === 0 ? (
                        <p style={{ color: "#6b7280", padding: "1.25rem 0 1.6rem" }}>
                            Questions for this clause will be added next. You can add a custom question, or continue to the next clause.
                        </p>
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
                        style={{
                            width: "100%",
                            maxWidth: "520px",
                            background: "#fff",
                            borderRadius: "1rem",
                            padding: "1.35rem 1.35rem 1.2rem",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
                        }}
                    >
                        <h3 id="add-question-title" style={{ margin: "0 0 0.5rem", color: "#111827", fontSize: "1.15rem" }}>
                            Add custom question
                        </h3>
                        <p style={{ margin: "0 0 0.9rem", color: "#6b7280", fontSize: "0.92rem", lineHeight: 1.55 }}>
                            Add a custom question to <strong>{currentClause.label}.</strong>
                        </p>
                        <textarea
                            required
                            value={newQuestion}
                            onChange={(event) => setNewQuestion(event.target.value)}
                            rows={4}
                            placeholder="Type your question..."
                            style={{
                                width: "100%",
                                boxSizing: "border-box",
                                border: "1px solid #e5e7eb",
                                borderRadius: "0.75rem",
                                padding: "0.85rem",
                                fontFamily: font,
                                fontSize: "0.95rem",
                                resize: "vertical",
                            }}
                        />
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.65rem", marginTop: "1rem" }}>
                            <button type="button" onClick={() => setAddOpen(false)} style={ghostBtn}>
                                Cancel
                            </button>
                            <button type="submit" style={nextBtn}>
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
    return (
        <button
            type="button"
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                width: "100%",
                textAlign: "left",
                border: `1.5px solid ${selected ? color : "#e5e7eb"}`,
                background: selected ? `${color}12` : "#fff",
                borderRadius: "0.85rem",
                padding: "0.85rem 0.95rem",
                cursor: "pointer",
                fontFamily: font,
            }}
        >
            <span
                style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    border: `2px solid ${selected ? color : "#d1d5db"}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
            >
                {selected ? <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} /> : null}
            </span>
            <span style={{ color: selected ? color : "#374151", fontWeight: 700 }}>{label}</span>
            <span style={{ marginLeft: "auto", color: selected ? color : "#9ca3af", display: "inline-flex" }}>
                {tone === "yes" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                )}
            </span>
        </button>
    );
}

const addBtn: CSSProperties = {
    border: "none",
    background: YES,
    color: "#fff",
    borderRadius: "999px",
    padding: "0.55rem 0.95rem",
    fontWeight: 700,
    fontSize: "0.85rem",
    cursor: "pointer",
    fontFamily: font,
};

const trashBtn: CSSProperties = {
    border: "none",
    background: "transparent",
    color: "#9ca3af",
    cursor: "pointer",
    padding: "0.2rem",
};

const prevBtn: CSSProperties = {
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#374151",
    borderRadius: "0.75rem",
    padding: "0.8rem 1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: font,
};

const nextBtn: CSSProperties = {
    border: "none",
    background: YES,
    color: "#fff",
    borderRadius: "0.75rem",
    padding: "0.8rem 1.2rem",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: font,
};

const completeBtn: CSSProperties = {
    ...nextBtn,
    background: "#15803d",
};

const ghostBtn: CSSProperties = {
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#374151",
    borderRadius: "0.75rem",
    padding: "0.7rem 1rem",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: font,
};
