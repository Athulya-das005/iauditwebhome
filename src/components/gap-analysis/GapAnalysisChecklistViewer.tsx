"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    gapAnalysisClauses,
    GAP_TOTAL_QUESTIONS,
    formatClauseHeading,
    type GapQuestionDef,
} from "@/data/gap-analysis-clauses";
import {
    bandForPercent,
    checklistMeta,
    clauseColors,
    complianceLevels,
    keyChanges,
    maturityBands,
    new2026ClauseReadiness,
    nextSteps,
    quickStartGuide,
    readinessBands,
    whatThisAssesses,
    type GapMaturityBandInfo,
    type GapReadinessBandInfo,
} from "@/data/gap-analysis-checklist-content";
import {
    compliancePercent,
    maturityForPercent,
    maturityTone,
    readinessForNcCount,
} from "@/lib/gap-report-data";

const font = '"Pp Neue Montreal", sans-serif';

type GapChecklistAnswer = "" | "comply" | "ofi" | "nc";
type AnswerMap = Record<string, GapChecklistAnswer>;

export default function GapAnalysisChecklistViewer() {
    const [answers, setAnswers] = useState<AnswerMap>({});
    const [isMobile, setIsMobile] = useState(false);
    const [activeBand, setActiveBand] = useState<GapMaturityBandInfo["id"] | null>(null);
    const [activeReadiness, setActiveReadiness] = useState<GapReadinessBandInfo["id"] | null>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const complyCount = useMemo(
        () => Object.values(answers).filter((value) => value === "comply").length,
        [answers]
    );
    const ofiCount = useMemo(
        () => Object.values(answers).filter((value) => value === "ofi").length,
        [answers]
    );
    const ncCount = useMemo(
        () => Object.values(answers).filter((value) => value === "nc").length,
        [answers]
    );
    const answeredCount = useMemo(
        () => Object.values(answers).filter((value) => value === "comply" || value === "ofi" || value === "nc").length,
        [answers]
    );

    const percent = compliancePercent(complyCount, GAP_TOTAL_QUESTIONS);
    const currentBand = bandForPercent(percent);
    const maturity = maturityForPercent(percent);
    const readiness = readinessForNcCount(ncCount);
    const tone = maturityTone(maturity.stage);

    function setAnswer(id: string, next: GapChecklistAnswer) {
        setAnswers((prev) => {
            const current = prev[id] ?? "";
            return { ...prev, [id]: current === next ? "" : next };
        });
    }

    function resetChecklist() {
        setAnswers({});
        setActiveBand(null);
        setActiveReadiness(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function scrollToBand(id: GapMaturityBandInfo["id"]) {
        setActiveBand(id);
        const el = document.getElementById(`band-${id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function scrollToReadiness(id: GapReadinessBandInfo["id"]) {
        setActiveReadiness(id);
        const el = document.getElementById(`readiness-${id}`);
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
                        {checklistMeta.subtitle}
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
                        Gap Analysis Checklist
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
                        {checklistMeta.note2026}
                    </p>
                </div>
            </section>

            <div style={{ maxWidth: "920px", margin: "0 auto", padding: isMobile ? "0 1.15rem 3rem" : "0 1.5rem 4rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link href="/iso-audit-assessments/gap-analysis" style={{ color: "#4b5563", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>
                        ← Back to gap analysis
                    </Link>
                </div>

                {/* About */}
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
                            ["Standard", checklistMeta.standard],
                            ["Total questions", String(checklistMeta.totalQuestions)],
                            ["Scoring", checklistMeta.scoring],
                            ["Note", checklistMeta.note2026],
                        ].map(([label, value]) => (
                            <div key={label} style={{ background: "#f8faf9", borderRadius: "0.75rem", padding: "0.85rem 1rem" }}>
                                <div style={{ color: "#6b7280", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
                                <div style={{ color: "#111827", fontWeight: 700, marginTop: "0.25rem" }}>{value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Start Guide */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>Quick Start Guide</h2>
                    <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#374151", lineHeight: 1.7 }}>
                        {quickStartGuide.map((step) => (
                            <li key={step} style={{ marginBottom: "0.45rem" }}>
                                {colorFindingLabels(step)}
                            </li>
                        ))}
                    </ol>
                </section>

                {/* What This Checklist Assesses */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>What This Checklist Assesses</h2>
                    <p style={body}>{checklistMeta.purpose}</p>
                    <ul
                        style={{
                            margin: 0,
                            paddingLeft: "1.35rem",
                            color: "#374151",
                            lineHeight: 1.65,
                            listStyleType: "disc",
                            listStylePosition: "outside",
                        }}
                    >
                        {whatThisAssesses.map((item) => (
                            <li key={item} style={{ marginBottom: "0.4rem", display: "list-item" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Three Compliance Assessment Levels */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>Three Compliance Assessment Levels</h2>
                    <div style={{ display: "grid", gap: "1rem" }}>
                        {complianceLevels.map((level) => {
                            const tone =
                                level.label === "COMPLY"
                                    ? { accent: "#16a34a", softBg: "#ecfdf3", softBorder: "#86efac", text: "#166534" }
                                    : level.label === "OFI"
                                      ? { accent: "#ea580c", softBg: "#fff7ed", softBorder: "#fdba74", text: "#c2410c" }
                                      : { accent: "#dc2626", softBg: "#fef2f2", softBorder: "#fca5a5", text: "#b91c1c" };
                            return (
                                <div
                                    key={level.label}
                                    style={{
                                        border: `1.5px solid ${tone.softBorder}`,
                                        borderRadius: "0.9rem",
                                        padding: "1rem 1.1rem",
                                        background: tone.softBg,
                                    }}
                                >
                                    <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap", alignItems: "center", marginBottom: "0.45rem" }}>
                                        <span style={{ fontSize: "1.15rem", fontWeight: 800, color: tone.accent }}>{level.symbol}</span>
                                        <strong style={{ color: tone.accent, letterSpacing: "0.04em" }}>{level.label}</strong>
                                        <span style={{ color: tone.text, fontWeight: 600 }}>— {level.title}</span>
                                    </div>
                                    <p style={{ ...body, marginBottom: "0.75rem" }}>
                                        <strong style={{ color: tone.text }}>Definition:</strong> {level.definition}
                                    </p>
                                    <p style={{ margin: "0 0 0.45rem", fontWeight: 800, color: tone.text, letterSpacing: "0.04em", fontSize: "0.78rem" }}>
                                        EVIDENCE INDICATORS
                                    </p>
                                    <ul
                                        style={{
                                            margin: "0 0 0.85rem",
                                            paddingLeft: "1.35rem",
                                            color: "#374151",
                                            lineHeight: 1.6,
                                            listStyleType: "disc",
                                            listStylePosition: "outside",
                                        }}
                                    >
                                        {level.indicators.map((indicator) => (
                                            <li key={indicator} style={{ marginBottom: "0.3rem", display: "list-item" }}>
                                                {indicator}
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.65, fontSize: "0.95rem" }}>
                                        <strong style={{ color: tone.text }}>Example:</strong> {level.example}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* How to Calculate Your Compliance Score */}
                <section style={{ marginBottom: "1.5rem", borderRadius: "1rem", overflow: "hidden", border: "1px solid #1b3d2f" }}>
                    <div
                        style={{
                            background: "#1b4d3e",
                            padding: isMobile ? "0.9rem 1.1rem" : "0.95rem 1.25rem",
                        }}
                    >
                        <h2 style={{ margin: 0, fontSize: isMobile ? "1.15rem" : "1.35rem", color: "#c8e6d4", letterSpacing: "-0.02em", fontWeight: 800 }}>
                            How to Calculate Your Compliance Score
                        </h2>
                    </div>
                    <div
                        style={{
                            background: "#fff",
                            padding: isMobile ? "1.15rem 1.1rem 1.25rem" : "1.25rem 1.25rem 1.4rem",
                            color: "#111827",
                        }}
                    >
                        <p style={{ margin: "0 0 0.85rem", fontSize: "1.02rem", lineHeight: 1.65, color: "#111827" }}>
                            <strong>Formula:</strong> Compliance % = (Total Comply ÷ 61) × 100
                        </p>
                        <p style={{ margin: "0 0 0.65rem", fontWeight: 700, color: "#111827" }}>Example calculation:</p>
                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: "1.35rem",
                                lineHeight: 1.75,
                                listStyleType: "disc",
                                listStylePosition: "outside",
                                color: "#111827",
                            }}
                        >
                            <li style={{ marginBottom: "0.3rem", display: "list-item" }}>
                                <span style={{ color: "#16a34a", fontWeight: 800 }}>Comply: 42 questions ☑</span>
                            </li>
                            <li style={{ marginBottom: "0.3rem", display: "list-item" }}>
                                <span style={{ color: "#ea580c", fontWeight: 800 }}>OFI: 7 questions ⭕</span>
                            </li>
                            <li style={{ marginBottom: "0.3rem", display: "list-item" }}>
                                <span style={{ color: "#dc2626", fontWeight: 800 }}>NC: 3 questions ✕</span>
                            </li>
                            <li style={{ display: "list-item", color: "#111827" }}>
                                Compliance: (42 ÷ 61) × 100 = <strong>69%</strong>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Maturity Levels & Certification Readiness — document tables */}
                <section style={{ marginBottom: "1.5rem", borderRadius: "1rem", overflow: "hidden", border: "1px solid #1b3d2f" }}>
                    <div
                        style={{
                            background: "#1b4d3e",
                            padding: isMobile ? "0.9rem 1.1rem" : "0.95rem 1.25rem",
                        }}
                    >
                        <h2 style={{ margin: 0, fontSize: isMobile ? "1.15rem" : "1.35rem", color: "#c8e6d4", letterSpacing: "-0.02em", fontWeight: 800 }}>
                            Maturity Levels & Certification Readiness
                        </h2>
                    </div>
                    <div
                        style={{
                            background: "#fff",
                            padding: isMobile ? "1.15rem 0.75rem 1.35rem" : "1.25rem 1.25rem 1.5rem",
                            color: "#111827",
                        }}
                    >
                        <h3 style={{ margin: "0 0 0.75rem", color: "#1b4d3e", fontSize: "1.05rem", fontWeight: 800 }}>
                            Maturity Scale
                        </h3>
                        <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
                            <table style={docTable}>
                                <thead>
                                    <tr>
                                        {["Level", "Percentage", "Status", "Timeline", "Action"].map((col) => (
                                            <th key={col} style={docTh}>
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {maturityBands.map((band, index) => (
                                        <tr key={band.id} style={{ background: maturityRowColors[index] }}>
                                            <td style={{ ...docTd, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>● {band.stage}</td>
                                            <td style={docTd}>{band.min}–{band.max}%</td>
                                            <td style={{ ...docTd, color: "#c8e6d4" }}>{band.status}</td>
                                            <td style={{ ...docTd, color: "#c8e6d4", whiteSpace: "nowrap" }}>{band.timeline}</td>
                                            <td style={docTd}>{band.action}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 style={{ margin: "0 0 0.75rem", color: "#1b4d3e", fontSize: "1.05rem", fontWeight: 800 }}>
                            Certification Readiness by NC Count
                        </h3>
                        <div style={{ overflowX: "auto" }}>
                            <table style={docTable}>
                                <thead>
                                    <tr>
                                        {["NC Count", "Readiness Status", "Timeline", "Action Required"].map((col) => (
                                            <th key={col} style={docTh}>
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {readinessBands.map((band, index) => (
                                        <tr key={band.id} style={{ background: maturityRowColors[index] }}>
                                            <td style={{ ...docTd, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>{band.ncLabel}</td>
                                            <td style={{ ...docTd, fontWeight: 800, color: "#c8e6d4", whiteSpace: "nowrap" }}>{band.label}</td>
                                            <td style={{ ...docTd, color: "#c8e6d4", whiteSpace: "nowrap" }}>{band.timeline}</td>
                                            <td style={docTd}>{band.action}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Interactive checklist */}
                <section id="interactive-checklist" style={{ scrollMarginTop: "6rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                        <div>
                            <h2 style={{ ...h2, marginBottom: "0.35rem" }}>Your EMS Gap Analysis Checklist</h2>
                            <p style={{ margin: 0, color: "#6b7280" }}>
                                Mark Comply, OFI, or NC for each question. Compliance % = (Comply ÷ {GAP_TOTAL_QUESTIONS}) × 100.
                            </p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", color: "#9ca3af" }}>LIVE SCORE</div>
                            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: tone.accent }}>
                                {complyCount} / {GAP_TOTAL_QUESTIONS}
                            </div>
                            <div style={{ fontSize: "0.82rem", color: "#6b7280" }}>{percent}% compliance · {answeredCount} answered</div>
                            <div style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "0.2rem" }}>
                                OFI {ofiCount} · NC {ncCount}
                            </div>
                        </div>
                    </div>

                    {gapAnalysisClauses.map((clause, clauseIndex) => {
                        const clauseComply = clause.questions.filter((q) => answers[q.id] === "comply").length;
                        const bg = clauseColors[clauseIndex % clauseColors.length];
                        return (
                            <div key={clause.id} style={{ marginBottom: "1.75rem" }}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
                                        gap: "0.85rem",
                                        alignItems: "end",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#111827", letterSpacing: "0.02em" }}>
                                        {formatClauseHeading(clause.label)}
                                    </h3>
                                    {!isMobile ? (
                                        <div style={{ display: "flex", gap: "0.45rem", justifyContent: "flex-end", width: 156 }}>
                                            <span style={{ width: 48, textAlign: "center", fontSize: "0.68rem", fontWeight: 800, color: "#6b7280" }}>Comply</span>
                                            <span style={{ width: 48, textAlign: "center", fontSize: "0.68rem", fontWeight: 800, color: "#6b7280" }}>OFI</span>
                                            <span style={{ width: 48, textAlign: "center", fontSize: "0.68rem", fontWeight: 800, color: "#6b7280" }}>NC</span>
                                        </div>
                                    ) : null}
                                </div>
                                <div style={{ display: "grid", gap: "0.55rem" }}>
                                    {clause.questions.map((question) => (
                                        <QuestionRow
                                            key={question.id}
                                            question={question}
                                            answer={answers[question.id] ?? ""}
                                            background={bg}
                                            isMobile={isMobile}
                                            onAnswer={setAnswer}
                                        />
                                    ))}
                                </div>
                                <p style={{ margin: "0.85rem 0 0", color: "#0f766e", fontWeight: 700 }}>
                                    {formatClauseHeading(clause.label)} Subtotal: {clauseComply} / {clause.questions.length} Comply
                                </p>
                            </div>
                        );
                    })}
                </section>

                {/* Score panel */}
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
                            <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: "0.55rem" }}>Compliance %</div>
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
                                    fontSize: "1.85rem",
                                    fontWeight: 800,
                                    color: tone.accent,
                                    border: `2px solid ${tone.softBorder}`,
                                }}
                            >
                                {percent}%
                            </div>
                            <div style={{ marginTop: "0.55rem", fontSize: "0.85rem", color: "#4b5563", fontWeight: 700 }}>
                                {complyCount} / {GAP_TOTAL_QUESTIONS} Comply
                            </div>
                            <button type="button" onClick={resetChecklist} style={{ ...resetBtn, marginTop: "0.85rem" }}>
                                Reset checklist
                            </button>
                        </div>
                        <div style={{ display: "grid", gap: "0.55rem" }}>
                            {maturityBands.map((band) => {
                                const bandTone = maturityTone(band.stage);
                                const active = answeredCount > 0 && percent >= band.min && percent <= band.max;
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
                                Maturity: <strong style={{ color: tone.text }}>{currentBand.stage}</strong>
                                {answeredCount === 0 ? " — answer questions to see your live maturity range." : ` · ${currentBand.status}`}
                            </p>
                            <p style={{ margin: 0, color: "#4b5563", fontSize: "0.92rem", lineHeight: 1.55 }}>
                                Certification readiness: <strong style={{ color: "#111827" }}>{readiness.label}</strong>
                                {answeredCount === 0 ? " — mark NC findings to update readiness." : ` (${readiness.ncLabel})`}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Maturity band detail */}
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
                                If you scored {band.min}–{band.max}%…
                            </p>
                            <h2 style={{ ...h2, color: bandTone.text }}>{band.stage}</h2>
                            <p style={body}>
                                Status: <strong>{band.status}</strong> · Timeline: <strong>{band.timeline}</strong>
                            </p>
                            <p style={{ margin: 0, color: bandTone.text, fontWeight: 700 }}>{band.action}</p>
                        </section>
                    );
                })}

                {/* Readiness band detail */}
                {readinessBands.map((band) => {
                    const highlighted = activeReadiness === band.id || (answeredCount > 0 && readiness.id === band.id);
                    return (
                        <section
                            key={band.id}
                            id={`readiness-${band.id}`}
                            style={{
                                ...panel,
                                marginBottom: "1.25rem",
                                scrollMarginTop: "6rem",
                                borderColor: highlighted ? "#16a34a" : "#e5e7eb",
                                background: highlighted ? "#ecfdf3" : "#fff",
                            }}
                        >
                            <p
                                style={{
                                    display: "inline-block",
                                    margin: "0 0 0.75rem",
                                    background: "#dcfce7",
                                    color: "#15803d",
                                    borderRadius: "999px",
                                    padding: "0.28rem 0.75rem",
                                    fontWeight: 800,
                                    fontSize: "0.82rem",
                                }}
                            >
                                {band.ncLabel}
                            </p>
                            <h2 style={h2}>{band.label}</h2>
                            <p style={body}>
                                Timeline: <strong>{band.timeline}</strong>
                            </p>
                            <p style={{ margin: 0, color: "#166534", fontWeight: 700 }}>{band.action}</p>
                        </section>
                    );
                })}

                {/* Key changes */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>ISO 14001:2026 key changes summary</h2>
                    <p style={body}>
                        The following key changes in ISO 14001:2026 are reflected in this gap analysis. Questions marked ★ 2026 specifically address these updates.
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

                {/* New 2026 Clause Readiness */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>New 2026 Clause Readiness</h2>
                    <ul style={{ margin: 0, paddingLeft: "1.15rem", color: "#374151", lineHeight: 1.65 }}>
                        {new2026ClauseReadiness.map((item) => (
                            <li key={item} style={{ marginBottom: "0.4rem" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Next steps */}
                <section style={{ ...panel, marginBottom: "1.5rem" }}>
                    <h2 style={h2}>Next steps after completing this gap analysis</h2>
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
                        Start the full ISO 14001:2026 Gap Analysis to capture evidence, notes, and email your PDF/Word report.
                    </p>
                    <Link href="/iso-audit-assessments/gap-analysis" style={{ ...darkBtn, background: "#07a34d" }}>
                        Start gap analysis
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
    question: GapQuestionDef;
    answer: GapChecklistAnswer;
    background: string;
    isMobile: boolean;
    onAnswer: (id: string, next: GapChecklistAnswer) => void;
}) {
    const options: { value: Exclude<GapChecklistAnswer, "">; label: string }[] = [
        { value: "comply", label: "Comply" },
        { value: "ofi", label: "OFI" },
        { value: "nc", label: "NC" },
    ];

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
                        minWidth: 52,
                        height: 36,
                        borderRadius: "0.45rem",
                        background: "rgba(16,41,29,0.1)",
                        color: "#10291d",
                        fontWeight: 800,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "0.78rem",
                        padding: "0 0.35rem",
                    }}
                >
                    {question.code}
                </span>
                <div style={{ minWidth: 0 }}>
                    {question.is2026 ? (
                        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
                            <span style={tag2026}>★ 2026</span>
                        </div>
                    ) : null}
                    <p style={{ margin: "0 0 0.35rem", color: "#111827", lineHeight: 1.45, fontWeight: 700 }}>{question.title}</p>
                    <p style={{ margin: 0, color: "#374151", lineHeight: 1.55, fontWeight: 500 }}>{question.text}</p>
                    {question.prompts && question.prompts.length > 0 ? (
                        <ul
                            style={{
                                margin: "0.55rem 0 0",
                                paddingLeft: "1.35rem",
                                color: "#6b7280",
                                lineHeight: 1.55,
                                fontSize: "0.9rem",
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
            </div>
            <div style={{ display: "flex", gap: "0.45rem", justifyContent: isMobile ? "flex-start" : "flex-end", alignItems: "center" }}>
                {options.map((option) =>
                    isMobile ? (
                        <div key={option.value} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#6b7280", marginBottom: "0.25rem" }}>{option.label}</div>
                            <CheckBox
                                label={option.label}
                                selected={answer === option.value}
                                onClick={() => onAnswer(question.id, option.value)}
                            />
                        </div>
                    ) : (
                        <CheckBox
                            key={option.value}
                            label={option.label}
                            selected={answer === option.value}
                            onClick={() => onAnswer(question.id, option.value)}
                        />
                    )
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
                width: 48,
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

function colorFindingLabels(text: string) {
    const parts = text.split(/(☑ Comply|⭕ OFI|✕ NC)/g);
    return parts.map((part, index) => {
        if (part === "☑ Comply") {
            return (
                <span key={index} style={{ color: "#16a34a", fontWeight: 800 }}>
                    ☑ Comply
                </span>
            );
        }
        if (part === "⭕ OFI") {
            return (
                <span key={index} style={{ color: "#ea580c", fontWeight: 800 }}>
                    ⭕ OFI
                </span>
            );
        }
        if (part === "✕ NC") {
            return (
                <span key={index} style={{ color: "#dc2626", fontWeight: 800 }}>
                    ✕ NC
                </span>
            );
        }
        return <span key={index}>{part}</span>;
    });
}

const panel: CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "1rem",
    padding: "1.25rem 1.2rem",
};

const maturityRowColors = ["#5c2a22", "#6b5420", "#3d4a22", "#1b3d2f"];

const docTable: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "720px",
    fontSize: "0.88rem",
};

const docTh: CSSProperties = {
    background: "#c8e6d4",
    color: "#111827",
    fontWeight: 800,
    textAlign: "left",
    padding: "0.7rem 0.75rem",
    border: "1px solid #9ca3af",
};

const docTd: CSSProperties = {
    color: "#f5f5f4",
    padding: "0.75rem 0.75rem",
    border: "1px solid rgba(255,255,255,0.22)",
    verticalAlign: "top",
    lineHeight: 1.5,
};

const h2: CSSProperties = {
    margin: "0 0 0.75rem",
    fontSize: "1.35rem",
    color: "#10291d",
    letterSpacing: "-0.02em",
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
