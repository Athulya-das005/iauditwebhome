"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    getSelfAssessmentClauses,
    type SelfAnswer,
    type SelfAssessmentQuestion,
} from "@/data/self-assessment-clauses";
import {
    bandForScore,
    checklistMeta,
    clauseColors,
    climateGuidance,
    howToUseSteps,
    keyChanges,
    maturityBands,
    nextSteps,
    scoringGuidance,
    tagNotes,
    type MaturityBandInfo,
} from "@/data/self-assessment-checklist-content";
import { maturityTone } from "@/lib/self-report-data";

const font = '"Pp Neue Montreal", sans-serif';

type AnswerMap = Record<number, SelfAnswer>;

export default function SelfAssessmentChecklistViewer() {
    const clauses = useMemo(() => getSelfAssessmentClauses(), []);
    const [answers, setAnswers] = useState<AnswerMap>({});
    const [isMobile, setIsMobile] = useState(false);
    const [activeBand, setActiveBand] = useState<MaturityBandInfo["id"] | null>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const yesCount = useMemo(
        () => Object.values(answers).filter((value) => value === "yes").length,
        [answers]
    );
    const answeredCount = useMemo(
        () => Object.values(answers).filter((value) => value === "yes" || value === "no").length,
        [answers]
    );
    const currentBand = bandForScore(yesCount);
    const tone = maturityTone(currentBand.stage);

    function setAnswer(number: number, next: SelfAnswer) {
        setAnswers((prev) => {
            const current = prev[number] ?? "";
            return { ...prev, [number]: current === next ? "" : next };
        });
    }

    function resetChecklist() {
        setAnswers({});
        setActiveBand(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function scrollToBand(id: MaturityBandInfo["id"]) {
        setActiveBand(id);
        const el = document.getElementById(`band-${id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <div style={{ minHeight: "100vh", background: "#f7f8f5", fontFamily: font }}>
            {/* Cover-style hero */}
            <section
                style={{
                    width: "100%",
                    paddingTop: "var(--page-top-offset)",
                    marginBottom: isMobile ? "1.5rem" : "2rem",
                }}
            >
                <div
                    style={{
                        background: "linear-gradient(180deg, #b8dcc8 0%, #a1c8b1 100%)",
                        padding: isMobile ? "2.5rem 1.25rem 2.75rem" : "3.25rem 2rem 3.5rem",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        aria-hidden
                        style={{
                            position: "absolute",
                            top: -80,
                            right: -60,
                            width: 220,
                            height: 220,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
                            pointerEvents: "none",
                        }}
                    />
                    <p
                        style={{
                            position: "relative",
                            margin: "0 0 0.35rem",
                            color: "#1f2937",
                            fontSize: isMobile ? "1.35rem" : "1.85rem",
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        ISO 14001:2026
                    </p>
                    <p
                        style={{
                            position: "relative",
                            margin: "0 0 0.85rem",
                            color: "#374151",
                            fontSize: isMobile ? "1.05rem" : "1.35rem",
                            fontWeight: 500,
                            lineHeight: 1.35,
                        }}
                    >
                        Environmental Management System
                    </p>
                    <h1
                        style={{
                            position: "relative",
                            margin: "0 0 0.65rem",
                            color: "#111827",
                            fontSize: isMobile ? "1.75rem" : "2.65rem",
                            fontWeight: 800,
                            letterSpacing: isMobile ? "0.04em" : "0.06em",
                            lineHeight: 1.12,
                            textTransform: "uppercase",
                        }}
                    >
                        Self-Assessment Checklist
                    </h1>
                    <p
                        style={{
                            position: "relative",
                            margin: 0,
                            color: "#4b5563",
                            fontSize: isMobile ? "0.92rem" : "1.05rem",
                            fontWeight: 600,
                            lineHeight: 1.5,
                        }}
                    >
                        {checklistMeta.subtitle}
                    </p>
                </div>
            </section>

            <div style={{ maxWidth: "920px", margin: "0 auto", padding: isMobile ? "0 1.15rem 3rem" : "0 1.5rem 4rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link href="/iso-14001-2026-self-assessment-tool" style={{ color: "#4b5563", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>
                        ← Back to self assessment
                    </Link>
                </div>

                {/* Document snapshot */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>About this checklist</h2>
                    <p style={body}>{checklistMeta.purpose}</p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "0.75rem",
                            marginTop: "1rem",
                        }}
                    >
                        {[
                            ["Standard", "ISO 14001:2026"],
                            ["Total questions", String(checklistMeta.totalQuestions)],
                            ["Scoring", checklistMeta.scoring],
                            ["Typical duration", checklistMeta.duration],
                        ].map(([label, value]) => (
                            <div key={label} style={{ background: "#f8faf9", borderRadius: "0.75rem", padding: "0.85rem 1rem" }}>
                                <div style={{ color: "#6b7280", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
                                <div style={{ color: "#111827", fontWeight: 700, marginTop: "0.25rem" }}>{value}</div>
                            </div>
                        ))}
                    </div>
                    <p style={{ ...body, marginTop: "1rem", marginBottom: 0 }}>{checklistMeta.note2026}</p>
                </section>

                {/* How to use */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>How to use this checklist</h2>
                    <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#374151", lineHeight: 1.7 }}>
                        {howToUseSteps.map((step) => (
                            <li key={step} style={{ marginBottom: "0.45rem" }}>
                                {step}
                            </li>
                        ))}
                    </ol>
                    <div style={{ marginTop: "1rem", display: "grid", gap: "0.55rem" }}>
                        {scoringGuidance.map((item) => (
                            <p key={item.label} style={{ margin: 0, color: "#4b5563", lineHeight: 1.6 }}>
                                <strong style={{ color: "#111827" }}>{item.label}</strong> = {item.text}
                            </p>
                        ))}
                    </div>
                    <div style={{ marginTop: "1rem", display: "grid", gap: "0.75rem" }}>
                        {tagNotes.map((item) => (
                            <div key={item.tag} style={{ background: "#f8faf9", borderRadius: "0.75rem", padding: "0.9rem 1rem", borderLeft: "3px solid #006644" }}>
                                <div style={{ fontWeight: 800, color: "#166534", marginBottom: "0.35rem" }}>{item.tag}</div>
                                <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.65, fontSize: "0.95rem" }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Maturity snapshot */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>Snapshot of EMS maturity scores</h2>
                    <div style={{ display: "grid", gap: "0.85rem" }}>
                        {maturityBands.map((band) => {
                            const bandTone = maturityTone(band.stage);
                            return (
                                <button
                                    key={band.id}
                                    type="button"
                                    onClick={() => scrollToBand(band.id)}
                                    style={{
                                        textAlign: "left",
                                        border: `1.5px solid ${bandTone.softBorder}`,
                                        background: bandTone.softBg,
                                        borderRadius: "0.9rem",
                                        padding: "1rem 1.1rem",
                                        cursor: "pointer",
                                        fontFamily: font,
                                    }}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
                                        <strong style={{ color: bandTone.text }}>{band.stage}</strong>
                                        <span style={{ color: bandTone.accent, fontWeight: 800 }}>{band.min}–{band.max} points</span>
                                    </div>
                                    <p style={{ margin: "0.4rem 0 0", color: "#4b5563", lineHeight: 1.55 }}>{band.readiness}: {band.summary}</p>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Interactive checklist */}
                <section id="interactive-checklist" style={{ scrollMarginTop: "6rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                        <div>
                            <h2 style={{ ...h2, marginBottom: "0.35rem" }}>Your EMS self-assessment checklist</h2>
                            <p style={{ margin: 0, color: "#6b7280" }}>Tick Yes or No for each question. Each Yes adds 1 point.</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", color: "#9ca3af" }}>LIVE SCORE</div>
                            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: tone.accent }}>{yesCount} / 65</div>
                            <div style={{ fontSize: "0.82rem", color: "#6b7280" }}>{answeredCount} answered</div>
                        </div>
                    </div>

                    {clauses.map((clause, clauseIndex) => {
                        const clauseYes = clause.questions.filter((q) => answers[q.number] === "yes").length;
                        const bg = clauseColors[clauseIndex % clauseColors.length];
                        return (
                            <div key={clause.label} style={{ marginBottom: "1.75rem" }}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
                                        gap: "0.85rem",
                                        alignItems: "end",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#111827" }}>{clause.label}</h3>
                                    {!isMobile ? (
                                        <div style={{ display: "flex", gap: "0.55rem", justifyContent: "flex-end", width: 98 }}>
                                            <span style={{ width: 44, textAlign: "center", fontSize: "0.72rem", fontWeight: 800, color: "#6b7280" }}>Yes</span>
                                            <span style={{ width: 44, textAlign: "center", fontSize: "0.72rem", fontWeight: 800, color: "#6b7280" }}>No</span>
                                        </div>
                                    ) : null}
                                </div>
                                <div style={{ display: "grid", gap: "0.55rem" }}>
                                    {clause.questions.map((question) => (
                                        <QuestionRow
                                            key={question.number}
                                            question={question}
                                            answer={answers[question.number] ?? ""}
                                            background={bg}
                                            isMobile={isMobile}
                                            onAnswer={setAnswer}
                                        />
                                    ))}
                                </div>
                                <p style={{ margin: "0.85rem 0 0", color: "#0f766e", fontWeight: 700 }}>
                                    {clause.label} Subtotal: {clauseYes} / {clause.questions.length}
                                </p>
                            </div>
                        );
                    })}
                </section>

                {/* Score panel — BSI style */}
                <section
                    style={{
                        ...panel,
                        marginBottom: "1.5rem",
                        background: "#eef6fb",
                        borderColor: "#cfe3f2",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                            gap: "1rem",
                            alignItems: "stretch",
                        }}
                    >
                        <div
                            style={{
                                background: "#dceef8",
                                borderRadius: "0.85rem",
                                padding: "1rem",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: "0.55rem" }}>Your score</div>
                            <div
                                style={{
                                    margin: "0 auto",
                                    width: 88,
                                    height: 88,
                                    borderRadius: "0.65rem",
                                    background: "#f0f9ff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "2.4rem",
                                    fontWeight: 800,
                                    color: tone.accent,
                                    border: `2px solid ${tone.softBorder}`,
                                }}
                            >
                                {yesCount}
                            </div>
                            <button type="button" onClick={resetChecklist} style={{ ...resetBtn, marginTop: "0.85rem" }}>
                                Reset checklist
                            </button>
                        </div>
                        <div style={{ display: "grid", gap: "0.55rem" }}>
                            {maturityBands.map((band) => {
                                const bandTone = maturityTone(band.stage);
                                const active = yesCount >= band.min && yesCount <= band.max && answeredCount > 0;
                                return (
                                    <button
                                        key={band.id}
                                        type="button"
                                        onClick={() => scrollToBand(band.id)}
                                        style={{
                                            ...scoreLink,
                                            borderColor: active ? bandTone.accent : "#bfdbfe",
                                            background: active ? bandTone.softBg : "#fff",
                                            color: active ? bandTone.text : "#0f172a",
                                        }}
                                    >
                                        <span>{band.scoreLabel}</span>
                                        <span aria-hidden>›</span>
                                    </button>
                                );
                            })}
                            <p style={{ margin: "0.35rem 0 0", color: "#4b5563", fontSize: "0.92rem", lineHeight: 1.55 }}>
                                Current band: <strong style={{ color: tone.text }}>{currentBand.stage}</strong>
                                {answeredCount === 0 ? " — answer questions to see your live maturity range." : null}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Band guidance */}
                {maturityBands.map((band) => {
                    const bandTone = maturityTone(band.stage);
                    const highlighted = activeBand === band.id || (answeredCount > 0 && currentBand.id === band.id);
                    return (
                        <section
                            key={band.id}
                            id={`band-${band.id}`}
                            style={{
                                ...panel,
                                marginBottom: "1.25rem",
                                scrollMarginTop: "6rem",
                                borderColor: highlighted ? bandTone.accent : "#e5e7eb",
                                background: highlighted ? bandTone.softBg : "#fff",
                            }}
                        >
                            <p
                                style={{
                                    display: "inline-block",
                                    margin: "0 0 0.75rem",
                                    background: bandTone.badgeBg,
                                    color: bandTone.badgeText,
                                    borderRadius: "999px",
                                    padding: "0.28rem 0.75rem",
                                    fontWeight: 800,
                                    fontSize: "0.82rem",
                                }}
                            >
                                If you scored {band.min}–{band.max} points…
                            </p>
                            <h2 style={{ ...h2, color: bandTone.text }}>{band.stage}</h2>
                            <p style={body}>{band.description}</p>
                            <p style={{ margin: "0 0 0.65rem", fontWeight: 800, color: bandTone.text, letterSpacing: "0.04em", fontSize: "0.82rem" }}>
                                RECOMMENDED ACTIONS
                            </p>
                            <ul style={{ margin: "0 0 1rem", paddingLeft: "1.15rem", color: "#374151", lineHeight: 1.65 }}>
                                {band.actions.map((action) => (
                                    <li key={action} style={{ marginBottom: "0.4rem" }}>
                                        {action}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ margin: 0, color: bandTone.text, fontWeight: 700 }}>{band.timeline}</p>
                        </section>
                    );
                })}

                {/* Key changes */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>ISO 14001:2026 key changes summary</h2>
                    <p style={body}>
                        The following key changes in ISO 14001:2026 are reflected in this self-assessment. Questions marked ★ 2026 specifically address these updates.
                    </p>
                    <div style={{ display: "grid", gap: "0.65rem" }}>
                        {keyChanges.map((item) => (
                            <div key={`${item.clause}-${item.changeType}`} style={{ border: "1px solid #e5e7eb", borderRadius: "0.75rem", padding: "0.85rem 1rem" }}>
                                <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap", alignItems: "center", marginBottom: "0.35rem" }}>
                                    <strong style={{ color: "#111827" }}>Clause {item.clause}</strong>
                                    <span style={{ background: "#ecfdf3", color: "#166534", borderRadius: "999px", padding: "0.12rem 0.55rem", fontSize: "0.72rem", fontWeight: 800 }}>
                                        {item.changeType}
                                    </span>
                                </div>
                                <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.6 }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Climate */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>Climate change considerations (2024 Annex SL)</h2>
                    <p style={body}>{climateGuidance.intro}</p>
                    <p style={{ ...body, fontStyle: "italic" }}>{climateGuidance.questionRefs}</p>
                    <h3 style={h3}>If you answered &quot;Yes&quot; to climate-related questions</h3>
                    <ul style={{ margin: "0 0 1rem", paddingLeft: "1.15rem", color: "#374151", lineHeight: 1.65 }}>
                        {climateGuidance.ifYes.map((item) => (
                            <li key={item} style={{ marginBottom: "0.35rem" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h3 style={h3}>If you answered &quot;No&quot; to climate-related questions</h3>
                    <ul style={{ margin: 0, paddingLeft: "1.15rem", color: "#374151", lineHeight: 1.65 }}>
                        {climateGuidance.ifNo.map((item) => (
                            <li key={item} style={{ marginBottom: "0.35rem" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Next steps */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>Next steps after completing this self-assessment</h2>
                    <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#374151", lineHeight: 1.7 }}>
                        {nextSteps.map((step) => (
                            <li key={step} style={{ marginBottom: "0.4rem" }}>
                                {step}
                            </li>
                        ))}
                    </ol>
                </section>

                <section
                    style={{
                        background: "#10291d",
                        borderRadius: "1.1rem",
                        padding: isMobile ? "1.4rem 1.2rem" : "1.75rem 1.6rem",
                        textAlign: "center",
                    }}
                >
                    <h2 style={{ margin: "0 0 0.55rem", color: "#fff", fontSize: isMobile ? "1.35rem" : "1.65rem" }}>
                        Ready for a saved report with clause scores?
                    </h2>
                    <p style={{ margin: "0 0 1.1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.65 }}>
                        Start the full ISO 14001:2026 self assessment to capture notes, email your PDF/Word report, and track recommended actions.
                    </p>
                    <Link href="/iso-14001-2026-self-assessment-tool" style={{ ...darkBtn, background: "#07a34d" }}>
                        Start free assessment
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    );
}

function QuestionRow({
    question,
    answer,
    background,
    isMobile,
    onAnswer,
}: {
    question: SelfAssessmentQuestion;
    answer: SelfAnswer;
    background: string;
    isMobile: boolean;
    onAnswer: (number: number, next: SelfAnswer) => void;
}) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
                gap: isMobile ? "0.65rem" : "0.85rem",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    background,
                    borderRadius: "0.75rem",
                    padding: "0.85rem 0.95rem",
                }}
            >
                <span
                    style={{
                        minWidth: 36,
                        height: 36,
                        borderRadius: "0.45rem",
                        background: "rgba(16,41,29,0.1)",
                        color: "#10291d",
                        fontWeight: 800,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    {question.number}
                </span>
                <div style={{ minWidth: 0 }}>
                    {(question.is2026 || question.isClimate) ? (
                        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
                            {question.is2026 ? <span style={tag2026}>★ 2026</span> : null}
                            {question.isClimate ? <span style={tagClimate}>[Climate]</span> : null}
                        </div>
                    ) : null}
                    <p style={{ margin: 0, color: "#111827", lineHeight: 1.55, fontWeight: 600 }}>{question.text}</p>
                </div>
            </div>
            <div style={{ display: "flex", gap: "0.55rem", justifyContent: isMobile ? "flex-start" : "flex-end", alignItems: "center" }}>
                {isMobile ? (
                    <>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#6b7280", marginBottom: "0.25rem" }}>Yes</div>
                            <CheckBox label="Yes" selected={answer === "yes"} onClick={() => onAnswer(question.number, "yes")} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#6b7280", marginBottom: "0.25rem" }}>No</div>
                            <CheckBox label="No" selected={answer === "no"} onClick={() => onAnswer(question.number, "no")} />
                        </div>
                    </>
                ) : (
                    <>
                        <CheckBox label="Yes" selected={answer === "yes"} onClick={() => onAnswer(question.number, "yes")} />
                        <CheckBox label="No" selected={answer === "no"} onClick={() => onAnswer(question.number, "no")} />
                    </>
                )}
            </div>
        </div>
    );
}

function CheckBox({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
    return (
        <button
            type="button"
            aria-pressed={selected}
            aria-label={label}
            onClick={onClick}
            title={label}
            style={{
                width: 44,
                height: 44,
                borderRadius: "0.35rem",
                border: "1.5px solid #111827",
                background: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontFamily: font,
                color: "#111827",
                fontWeight: 800,
                fontSize: "1.15rem",
            }}
        >
            {selected ? "✓" : ""}
        </button>
    );
}

const panel: CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "1rem",
    padding: "1.25rem 1.2rem",
};

const h2: CSSProperties = {
    margin: "0 0 0.75rem",
    fontSize: "1.35rem",
    color: "#10291d",
    letterSpacing: "-0.02em",
};

const h3: CSSProperties = {
    margin: "0 0 0.55rem",
    fontSize: "1.05rem",
    color: "#143528",
};

const body: CSSProperties = {
    margin: "0 0 0.85rem",
    color: "#4b5563",
    lineHeight: 1.7,
};

const darkBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#1f2937",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "0.55rem",
    padding: "0.85rem 1.25rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    fontFamily: font,
};

const resetBtn: CSSProperties = {
    background: "#1f2937",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.65rem 0.85rem",
    fontWeight: 700,
    fontSize: "0.85rem",
    cursor: "pointer",
    fontFamily: font,
};

const scoreLink: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    border: "1.5px solid #bfdbfe",
    background: "#fff",
    borderRadius: "0.65rem",
    padding: "0.85rem 1rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    cursor: "pointer",
    fontFamily: font,
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

const tagClimate: CSSProperties = {
    display: "inline-block",
    background: "#eff6ff",
    color: "#1d4ed8",
    border: "1px solid #bfdbfe",
    borderRadius: "999px",
    padding: "0.1rem 0.5rem",
    fontSize: "0.68rem",
    fontWeight: 800,
};
