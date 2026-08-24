"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type SelfAnswer, type SelfAssessmentClause } from "@/data/self-assessment-clauses";
import { maturityForYesCount, maturityTone } from "@/lib/self-report-data";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

type QuestionRow = { text: string; answer: SelfAnswer; notes?: string };

type Props = {
    session: GapAnalysisSession;
    clauses: SelfAssessmentClause[];
    questionsByClause: QuestionRow[][];
    isMobile: boolean;
};

const font = '"Pp Neue Montreal", sans-serif';
const YES = "#16a34a";
const NO = "#ef4444";
const ORANGE = "#f59e0b";
const GREY = "#e5e7eb";

export default function SelfAssessmentResults({ session, clauses, questionsByClause, isMobile }: Props) {
    const router = useRouter();
    const [step, setStep] = useState<"choose" | "sending" | "done">("choose");
    const [format, setFormat] = useState<"pdf" | "word">("pdf");
    const [error, setError] = useState("");
    const [emailNote, setEmailNote] = useState("");
    const [downloadError, setDownloadError] = useState("");
    const [downloading, setDownloading] = useState<"pdf" | "word" | null>(null);

    const stats = useMemo(() => {
        const clauseStats = clauses.map((clause, index) => {
            const rows = questionsByClause[index] ?? [];
            const yes = rows.filter((row) => row.answer === "yes").length;
            const no = rows.filter((row) => row.answer === "no").length;
            const unanswered = rows.filter((row) => row.answer !== "yes" && row.answer !== "no").length;
            const total = rows.length;
            return {
                label: clause.label,
                yes,
                no,
                unanswered,
                total,
                percent: total === 0 ? 0 : Math.round((yes / total) * 100),
                questions: rows,
            };
        });
        const yes = clauseStats.reduce((acc, item) => acc + item.yes, 0);
        const no = clauseStats.reduce((acc, item) => acc + item.no, 0);
        const unanswered = clauseStats.reduce((acc, item) => acc + item.unanswered, 0);
        const total = yes + no + unanswered;
        const overall = total === 0 ? 0 : Math.round((yes / total) * 100);
        return { clauses: clauseStats, yes, no, unanswered, total, overall, maturity: maturityForYesCount(yes, session.isoStandard) };
    }, [clauses, questionsByClause, session.isoStandard]);

    const tone = maturityTone(stats.maturity.stage);

    function payload(selectedFormat: "pdf" | "word") {
        return {
            format: selectedFormat,
            session,
            clauses: stats.clauses.map((clause) => ({
                label: clause.label,
                questions: clause.questions,
            })),
        };
    }

    function saveFile(fileBase64: string, filename: string, contentType: string) {
        const bytes = Uint8Array.from(atob(fileBase64), (char) => char.charCodeAt(0));
        const blob = new Blob([bytes], { type: contentType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    async function sendReport() {
        setError("");
        setStep("sending");
        try {
            const response = await fetch("/api/self-assessment-report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...payload(format), sendEmail: true }),
            });
            const data = (await response.json()) as {
                error?: string;
                emailed?: boolean;
                filename?: string;
                contentType?: string;
                fileBase64?: string;
                warning?: string;
            };
            if (!response.ok) {
                setError(data.error ?? "Unable to send the report.");
                setStep("choose");
                return;
            }
            if (data.fileBase64 && data.filename && data.contentType) {
                saveFile(data.fileBase64, data.filename, data.contentType);
            }
            setEmailNote(
                data.emailed
                    ? `Your full ${format === "pdf" ? "PDF" : "Word"} report has been emailed to ${session.email}, and the same file has started downloading.`
                    : `Your ${format === "pdf" ? "PDF" : "Word"} report has started downloading. Email was not sent to ${session.email}.${
                          data.warning ? ` ${data.warning}` : " Mail settings are missing on the live server — add SMTP or Resend env vars and redeploy."
                      }`
            );
            setStep("done");
        } catch {
            setError("Unable to send the report. Please try again.");
            setStep("choose");
        }
    }

    async function downloadReport(selectedFormat: "pdf" | "word") {
        setDownloadError("");
        setDownloading(selectedFormat);
        try {
            const response = await fetch("/api/self-assessment-report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...payload(selectedFormat), sendEmail: false }),
            });
            const data = (await response.json()) as {
                error?: string;
                filename?: string;
                contentType?: string;
                fileBase64?: string;
            };
            if (!response.ok || !data.fileBase64 || !data.filename || !data.contentType) {
                setDownloadError(data.error ?? "Unable to download the report.");
                return;
            }
            saveFile(data.fileBase64, data.filename, data.contentType);
        } catch {
            setDownloadError("Unable to download the report. Please try again.");
        } finally {
            setDownloading(null);
        }
    }

    if (step !== "done") {
        return (
            <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: font, padding: isMobile ? "calc(var(--page-top-offset) + 0.4rem) 0.9rem 4rem" : "calc(var(--page-top-offset) + 0.25rem) 1.5rem 3rem" }}>
                <div style={{ maxWidth: "560px", margin: "0 auto", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: isMobile ? "1.4rem 1.2rem" : "1.8rem 1.6rem", boxShadow: "0 12px 32px rgba(16,47,32,0.06)" }}>
                    <h1 style={{ margin: "0 0 0.5rem", fontSize: "1.55rem", color: "#111827" }}>How would you like your report?</h1>
                    <p style={{ margin: "0 0 1.2rem", color: "#6b7280", lineHeight: 1.6 }}>
                        Choose a format. We will email it to <strong>{session.email}</strong> and also download it on this device.
                    </p>
                    <div style={{ display: "grid", gap: "0.7rem", marginBottom: "1.1rem" }}>
                        <label style={formatOption(format === "pdf")}>
                            <input type="radio" name="report-format" checked={format === "pdf"} onChange={() => setFormat("pdf")} />
                            PDF report
                        </label>
                        <label style={formatOption(format === "word")}>
                            <input type="radio" name="report-format" checked={format === "word"} onChange={() => setFormat("word")} />
                            Word report
                        </label>
                    </div>
                    {error ? <p style={{ margin: "0 0 0.85rem", color: "#b91c1c", fontSize: "0.9rem" }}>{error}</p> : null}
                    <button type="button" disabled={step === "sending"} onClick={sendReport} style={{ ...greenBtn, width: "100%", opacity: step === "sending" ? 0.7 : 1 }}>
                        {step === "sending" ? "Sending report..." : "Email and download report"}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: "100vh", background: "#f4f5f7", fontFamily: font, padding: isMobile ? "calc(var(--page-top-offset) + 0.6rem) 1rem 3rem" : "calc(var(--page-top-offset) + 0.8rem) 1.75rem 4rem" }}>
            <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                    <Link href="/iso-audit-assessments/self-assessment" style={{ color: "#4b5563", textDecoration: "none", fontWeight: 600 }}>
                        ← Back to assessment page
                    </Link>
                    <div style={{ display: "flex", gap: "0.55rem" }}>
                        <button type="button" disabled={downloading !== null} onClick={() => downloadReport("pdf")} style={pdfOutline}>
                            {downloading === "pdf" ? "Preparing..." : "Download PDF"}
                        </button>
                        <button type="button" disabled={downloading !== null} onClick={() => downloadReport("word")} style={wordOutline}>
                            {downloading === "word" ? "Preparing..." : "Download Word"}
                        </button>
                    </div>
                </div>
                {emailNote ? <p style={{ margin: "0 0 1rem", color: "#166534", background: "#ecfdf3", borderRadius: "0.75rem", padding: "0.85rem 1rem" }}>{emailNote}</p> : null}
                {downloadError ? <p style={{ margin: "0 0 1rem", color: "#b91c1c" }}>{downloadError}</p> : null}

                <section
                    style={{
                        background: tone.softBg,
                        border: `1px solid ${tone.softBorder}`,
                        borderRadius: "1rem",
                        padding: isMobile ? "1.1rem 1rem" : "1.25rem 1.4rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                        marginBottom: "1rem",
                    }}
                >
                    <div>
                        <h1 style={{ margin: 0, fontSize: isMobile ? "1.45rem" : "1.75rem", color: "#0f172a" }}>Maturity Assessment Result</h1>
                        <p style={{ margin: "0.35rem 0 0", color: "#6b7280" }}>
                            {session.isoStandard} | {session.organisation} | {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </p>
                    </div>
                    <div style={{ color: tone.accent, fontWeight: 800, fontSize: "1.7rem" }}>
                        {stats.yes} / {stats.total}
                    </div>
                </section>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <section style={card}>
                        <h2 style={cardTitle}>Total Score</h2>
                        <ScoreDonut yes={stats.yes} rest={Math.max(stats.total - stats.yes, 0)} total={stats.total} stageColor={tone.accent} />
                        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
                            <span
                                style={{
                                    display: "inline-block",
                                    background: tone.badgeBg,
                                    color: tone.badgeText,
                                    border: `1px solid ${tone.softBorder}`,
                                    borderRadius: "999px",
                                    padding: "0.28rem 0.8rem",
                                    fontSize: "0.78rem",
                                    fontWeight: 800,
                                    letterSpacing: "0.04em",
                                }}
                            >
                                {stats.maturity.stage.toUpperCase()}
                            </span>
                        </div>
                    </section>
                    <section
                        style={{
                            ...card,
                            background: tone.softBg,
                            border: `1.5px solid ${tone.softBorder}`,
                        }}
                    >
                        <h2 style={{ ...cardTitle, color: tone.text }}>Your Position: {stats.maturity.stage}</h2>
                        <p style={{ margin: "0 0 1rem", color: "#4b5563", lineHeight: 1.7 }}>{stats.maturity.description}</p>
                        <p style={{ margin: "0 0 0.7rem", fontWeight: 800, color: tone.text, fontSize: "0.82rem", letterSpacing: "0.04em" }}>RECOMMENDED ACTIONS:</p>
                        <div style={{ display: "grid", gap: "0.55rem" }}>
                            {stats.maturity.actions.map((action, index) => (
                                <div key={action} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", color: "#374151", lineHeight: 1.6 }}>
                                    <span
                                        style={{
                                            width: 18,
                                            height: 18,
                                            borderRadius: "50%",
                                            background: tone.accent,
                                            color: "#fff",
                                            fontSize: "0.7rem",
                                            fontWeight: 800,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginTop: "0.12rem",
                                        }}
                                    >
                                        {index + 1}
                                    </span>
                                    <span>{action}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ margin: "1rem 0 0", color: tone.text, fontWeight: 600 }}>
                            <strong>Timeline:</strong> {stats.maturity.timeline}
                        </p>
                    </section>
                </div>

                <section style={{ ...card, marginBottom: "1rem" }}>
                    <h2 style={cardTitle}>Final Score Calculation</h2>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                {["Clause", "Subtotal", "Max"].map((label) => (
                                    <th key={label} style={{ textAlign: label === "Clause" ? "left" : "right", padding: "0.55rem 0.4rem", borderBottom: "1px solid #e5e7eb", color: "#6b7280", fontSize: "0.82rem" }}>
                                        {label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {stats.clauses.map((clause) => (
                                <tr key={clause.label}>
                                    <td style={{ padding: "0.55rem 0.4rem", borderBottom: "1px solid #f3f4f6" }}>{clause.label}</td>
                                    <td style={{ padding: "0.55rem 0.4rem", borderBottom: "1px solid #f3f4f6", textAlign: "right" }}>{clause.yes}</td>
                                    <td style={{ padding: "0.55rem 0.4rem", borderBottom: "1px solid #f3f4f6", textAlign: "right" }}>{clause.total}</td>
                                </tr>
                            ))}
                            <tr>
                                <td style={{ padding: "0.7rem 0.4rem", fontWeight: 800 }}>TOTAL SCORE</td>
                                <td style={{ padding: "0.7rem 0.4rem", textAlign: "right", fontWeight: 800, color: tone.accent }}>{stats.yes}</td>
                                <td style={{ padding: "0.7rem 0.4rem", textAlign: "right", fontWeight: 800 }}>{stats.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section style={{ ...card, marginBottom: "1rem" }}>
                    <h2 style={cardTitle}>Score by Clause</h2>
                    <ClauseBarChart clauses={stats.clauses} />
                </section>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: "0.7rem", marginBottom: "1.25rem" }}>
                    <button type="button" onClick={() => router.push("/iso-audit-assessments/self-assessment")} style={ghostWide}>
                        Start New
                    </button>
                    <button type="button" disabled={downloading !== null} onClick={() => downloadReport("pdf")} style={{ ...pdfOutline, width: "100%" }}>
                        Download PDF
                    </button>
                    <button type="button" disabled={downloading !== null} onClick={() => downloadReport("word")} style={{ ...wordOutline, width: "100%" }}>
                        Download Word
                    </button>
                </div>

                {stats.clauses.map((clause) => (
                    <section key={clause.label} style={{ marginBottom: "1.15rem" }}>
                        <h2 style={{ margin: "0 0 0.65rem", background: "#f3f4f6", borderRadius: "0.7rem", padding: "0.7rem 0.9rem", fontSize: "1.05rem", color: "#0f172a", display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
                            <span>{clause.label}</span>
                            <span style={{ color: "#0f766e", fontWeight: 800, fontSize: "0.95rem" }}>
                                Subtotal: {clause.yes} / {clause.total}
                            </span>
                        </h2>
                        <div style={{ background: "#fff", borderRadius: "0.9rem", border: "1px solid #e5e7eb", overflow: "hidden" }}>
                            {clause.questions.map((question, index) => {
                                const compliant = question.answer === "yes";
                                const note = question.notes?.trim();
                                return (
                                    <article key={`${clause.label}-${index}`} style={{ padding: "0.95rem 1rem", borderTop: index === 0 ? "none" : "1px solid #f3f4f6" }}>
                                        <div style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                                            <span
                                                style={{
                                                    width: 22,
                                                    height: 22,
                                                    borderRadius: "50%",
                                                    background: compliant ? YES : NO,
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "0.75rem",
                                                    fontWeight: 800,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {compliant ? "✓" : "!"}
                                            </span>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <p style={{ margin: 0, color: "#111827", lineHeight: 1.55 }}>{question.text}</p>
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        marginTop: "0.45rem",
                                                        background: compliant ? "#ecfdf3" : "#fef2f2",
                                                        color: compliant ? "#166534" : "#b91c1c",
                                                        borderRadius: "999px",
                                                        padding: "0.18rem 0.65rem",
                                                        fontSize: "0.72rem",
                                                        fontWeight: 800,
                                                        letterSpacing: "0.04em",
                                                    }}
                                                >
                                                    {compliant ? "COMPLIANT" : "NON-COMPLIANT"}
                                                </span>
                                                {note ? (
                                                    <p style={{ margin: "0.65rem 0 0", color: "#4b5563", lineHeight: 1.55, fontSize: "0.9rem" }}>
                                                        <strong style={{ color: "#6b7280" }}>Notes:</strong> {note}
                                                    </p>
                                                ) : null}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

function ScoreDonut({ yes, rest, total, stageColor }: { yes: number; rest: number; total: number; stageColor: string }) {
    const [tip, setTip] = useState<{ label: string; value: number; x: number; y: number } | null>(null);
    const segments = [
        { label: "Yes", value: yes, color: stageColor },
        { label: "Remaining", value: rest, color: GREY },
    ];
    const paths = donutPaths(segments, 80, 80, 70, 42);
    return (
        <div style={{ position: "relative", width: 200, margin: "0 auto" }}>
            <svg viewBox="0 0 160 160" width="200" height="200" onMouseLeave={() => setTip(null)}>
                {paths.map((item) => (
                    <path
                        key={item.label}
                        d={item.d}
                        fill={item.color}
                        style={{ cursor: "pointer" }}
                        onMouseMove={(event) => {
                            const box = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
                            if (!box) return;
                            setTip({ label: item.label, value: item.value, x: event.clientX - box.left, y: event.clientY - box.top });
                        }}
                    />
                ))}
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <div style={{ fontWeight: 800, fontSize: "1.35rem", color: "#111827" }}>
                    {yes} / {total}
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.82rem" }}>{yes} questions yes</div>
            </div>
            {tip ? (
                <div style={{ ...tooltip, left: tip.x + 10, top: Math.max(8, tip.y - 42) }}>
                    <div>{tip.label}</div>
                    <div style={{ color: tip.label === "Yes" ? stageColor : "#6b7280" }}>Count: {tip.value}</div>
                </div>
            ) : null}
        </div>
    );
}

function ClauseBarChart({ clauses }: { clauses: { label: string; percent: number; yes: number; total: number }[] }) {
    const [tip, setTip] = useState<{ label: string; percent: number; yes: number; total: number; x: number; y: number } | null>(null);
    const width = 640;
    const height = 260;
    const padL = 40;
    const padR = 16;
    const padT = 16;
    const padB = 42;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const gap = plotW / Math.max(clauses.length, 1);
    const barW = gap * 0.48;
    return (
        <div style={{ position: "relative" }}>
            <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="260" onMouseLeave={() => setTip(null)}>
                {[0, 15, 30, 45, 60].map((tick) => {
                    const y = padT + plotH - (tick / 60) * plotH;
                    return (
                        <g key={tick}>
                            <line x1={padL} x2={width - padR} y1={y} y2={y} stroke="#e5e7eb" strokeDasharray="4 4" />
                            <text x={padL - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#9ca3af">
                                {tick}
                            </text>
                        </g>
                    );
                })}
                {clauses.map((clause, index) => {
                    const mapped = (clause.percent / 100) * 60;
                    const h = (mapped / 60) * plotH;
                    const x = padL + gap * index + (gap - barW) / 2;
                    const y = padT + plotH - h;
                    return (
                        <g key={clause.label}>
                            <rect
                                x={x}
                                y={y}
                                width={barW}
                                height={Math.max(h, 1)}
                                fill={ORANGE}
                                rx="2"
                                style={{ cursor: "pointer" }}
                                onMouseMove={(event) => {
                                    const box = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
                                    if (!box) return;
                                    setTip({
                                        label: clause.label,
                                        percent: clause.percent,
                                        yes: clause.yes,
                                        total: clause.total,
                                        x: event.clientX - box.left,
                                        y: event.clientY - box.top,
                                    });
                                }}
                            />
                            <text x={x + barW / 2} y={height - 12} textAnchor="middle" fontSize="11" fill="#6b7280">
                                Cl. {clause.label.split(".")[0]}
                            </text>
                        </g>
                    );
                })}
            </svg>
            {tip ? (
                <div style={{ ...tooltip, left: tip.x + 12, top: Math.max(8, tip.y - 58), background: "#111827", color: "#fff", border: "none" }}>
                    <div style={{ fontWeight: 700 }}>{tip.label}</div>
                    <div>
                        Score: <span style={{ color: YES }}>{tip.percent}%</span>
                    </div>
                    <div>Count: {tip.yes}/{tip.total}</div>
                </div>
            ) : null}
        </div>
    );
}

function polar(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutPaths(segments: { label: string; value: number; color: string }[], cx: number, cy: number, outer: number, inner: number) {
    const sum = segments.reduce((acc, item) => acc + item.value, 0);
    if (sum === 0) return [];
    let angle = 0;
    return segments
        .filter((item) => item.value > 0)
        .map((item) => {
            const sweep = (item.value / sum) * 360;
            const start = angle;
            const end = angle + sweep;
            angle = end;
            const large = sweep > 180 ? 1 : 0;
            const p1 = polar(cx, cy, outer, start);
            const p2 = polar(cx, cy, outer, end);
            const p3 = polar(cx, cy, inner, end);
            const p4 = polar(cx, cy, inner, start);
            const d =
                sweep >= 359.99
                    ? `M ${cx} ${cy - outer} A ${outer} ${outer} 0 1 1 ${cx - 0.01} ${cy - outer} L ${cx - 0.01} ${cy - inner} A ${inner} ${inner} 0 1 0 ${cx} ${cy - inner} Z`
                    : `M ${p1.x} ${p1.y} A ${outer} ${outer} 0 ${large} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${inner} ${inner} 0 ${large} 0 ${p4.x} ${p4.y} Z`;
            return { ...item, d };
        });
}

function formatOption(selected: boolean): CSSProperties {
    return {
        display: "flex",
        alignItems: "center",
        gap: "0.65rem",
        border: selected ? "2px solid #006644" : "1px solid #d1d5db",
        background: selected ? "#f0fdf4" : "#fff",
        borderRadius: "0.75rem",
        padding: "0.85rem 1rem",
        fontWeight: 600,
        color: "#111827",
        cursor: "pointer",
    };
}

const card: CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "1rem",
    padding: "1.2rem 1.2rem 1.3rem",
};
const cardTitle: CSSProperties = { margin: "0 0 0.85rem", fontSize: "1.1rem", color: "#111827" };
const tooltip: CSSProperties = {
    position: "absolute",
    background: "#fff",
    border: "1px solid #d1d5db",
    borderRadius: "0.4rem",
    padding: "0.4rem 0.6rem",
    fontSize: "0.82rem",
    color: "#111827",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    zIndex: 5,
};
const greenBtn: CSSProperties = {
    background: "#166534",
    color: "#fff",
    border: "none",
    borderRadius: "0.7rem",
    padding: "0.85rem 1.15rem",
    fontWeight: 700,
    fontFamily: font,
    cursor: "pointer",
};
const pdfOutline: CSSProperties = {
    background: "#fff",
    color: "#166534",
    border: "1px solid #16a34a",
    borderRadius: "0.65rem",
    padding: "0.55rem 0.9rem",
    fontWeight: 700,
    fontFamily: font,
    cursor: "pointer",
};
const wordOutline: CSSProperties = {
    background: "#fff",
    color: "#2563eb",
    border: "1px solid #2563eb",
    borderRadius: "0.65rem",
    padding: "0.55rem 0.9rem",
    fontWeight: 700,
    fontFamily: font,
    cursor: "pointer",
};
const ghostWide: CSSProperties = {
    background: "#fff",
    color: "#4b5563",
    border: "1px solid #d1d5db",
    borderRadius: "0.65rem",
    padding: "0.7rem 0.9rem",
    fontWeight: 700,
    fontFamily: font,
    cursor: "pointer",
};
