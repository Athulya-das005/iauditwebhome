"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AssessmentDetailsCard from "@/components/assessment/AssessmentDetailsCard";
import { GAP_TOTAL_QUESTIONS, gapAnalysisClauses, type GapFinding } from "@/data/gap-analysis-clauses";
import {
    compliancePercent,
    maturityForPercent,
    maturityTone,
    readinessForNcCount,
} from "@/lib/gap-report-data";
import { getClientReportSendKey } from "@/lib/report-idempotency-client";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

type FindingRow = {
    code?: string;
    title?: string;
    text: string;
    finding: GapFinding | "";
    actionPlan: string;
    evidence: string;
    evidenceImage?: string;
};

type Props = {
    session: GapAnalysisSession;
    questionsByClause: FindingRow[][];
    isMobile: boolean;
};

const font = '"Pp Neue Montreal", sans-serif';
const COMPLY = "#19B681";
const OFI = "#F49C1C";
const NC = "#EF4E4E";
const BAR_BLUE = "#00AEEF";
const TRACK = "#1f2937";

export default function GapAnalysisResults({ session, questionsByClause, isMobile }: Props) {
    const [step, setStep] = useState<"choose" | "sending" | "done">("choose");
    const [format, setFormat] = useState<"pdf" | "word">("pdf");
    const [error, setError] = useState("");
    const [emailNote, setEmailNote] = useState("");
    const [downloadError, setDownloadError] = useState("");
    const [downloading, setDownloading] = useState<"pdf" | "word" | null>(null);
    const sendingRef = useRef(false);
    const stats = useMemo(() => {
        let comply = 0;
        let ofi = 0;
        let nc = 0;
        const clauses = gapAnalysisClauses.map((clause, index) => {
            const rows = questionsByClause[index] ?? [];
            const clauseComply = rows.filter((row) => row.finding === "comply").length;
            const clauseOfi = rows.filter((row) => row.finding === "ofi").length;
            const clauseNc = rows.filter((row) => row.finding === "nc").length;
            const total = rows.length;
            comply += clauseComply;
            ofi += clauseOfi;
            nc += clauseNc;
            const percent = total === 0 ? 0 : Math.round((clauseComply / total) * 100);
            return {
                label: clause.label,
                percent,
                questions: rows.map((row) => ({
                    text: [row.code, row.title, row.text].filter(Boolean).join(" — "),
                    finding: row.finding,
                    actionPlan: row.actionPlan,
                    evidence: row.evidence,
                    evidenceImage: row.evidenceImage || "",
                })),
            };
        });
        const overall = compliancePercent(comply, GAP_TOTAL_QUESTIONS);
        const maturity = maturityForPercent(overall);
        const readiness = readinessForNcCount(nc);
        return { comply, ofi, nc, overall, maturity, readiness, clauses };
    }, [questionsByClause]);

    const tone = maturityTone(stats.maturity.stage);

    const displayName = session.organisation || `${session.firstName} ${session.lastName}`.trim();

    function reportPayload(selectedFormat: "pdf" | "word") {
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
        if (step === "sending" || sendingRef.current) return;
        sendingRef.current = true;
        setError("");
        setStep("sending");
        const idempotencyKey = getClientReportSendKey(`${session.email}:${session.isoStandard}:gap-analysis`);
        try {
            const response = await fetch("/api/gap-analysis-report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...reportPayload(format), sendEmail: true, idempotencyKey }),
            });
            const data = (await response.json()) as {
                error?: string;
                emailed?: boolean;
                warning?: string;
                filename?: string;
                contentType?: string;
                fileBase64?: string;
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
        } finally {
            sendingRef.current = false;
        }
    }

    async function downloadReport(selectedFormat: "pdf" | "word") {
        setDownloadError("");
        setDownloading(selectedFormat);
        try {
            const response = await fetch("/api/gap-analysis-report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...reportPayload(selectedFormat), sendEmail: false }),
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
                        Choose a format. We will email it to <strong>{session.email}</strong> and also download it on this device. You can download PDF or Word again on the next page.
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
                    <button type="button" disabled={step === "sending"} onClick={sendReport} style={{ ...pdfBtn, width: "100%", opacity: step === "sending" ? 0.7 : 1 }}>
                        {step === "sending" ? "Sending and downloading..." : `Email and download ${format === "pdf" ? "PDF" : "Word"}`}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: font, padding: isMobile ? "calc(var(--page-top-offset) + 0.4rem) 0.9rem 4rem" : "calc(var(--page-top-offset) + 0.25rem) 1.5rem 3rem" }}>
            <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                <div style={{ maxWidth: "980px", margin: "0 auto 1.5rem", padding: isMobile ? "0 0.1rem" : 0 }}>
                    <h1 style={{ margin: 0, fontSize: isMobile ? "1.7rem" : "2.2rem", color: "#111827", lineHeight: 1.25 }}>
                        Congratulations on completing the {session.isoStandard} Gap Analysis
                    </h1>
                    <p style={{ margin: "0.85rem 0 0", color: "#6b7280", fontSize: "1.02rem", lineHeight: 1.7 }}>
                        {emailNote || `Your full report has been emailed to ${session.email}.`}
                    </p>
                    <p style={{ margin: "0.85rem 0 0", color: "#4b5563", fontSize: "1rem", lineHeight: 1.75 }}>
                        Compliance % = (Total Comply ÷ {GAP_TOTAL_QUESTIONS}) × 100. Review maturity level and certification readiness by NC count from the ISO 14001:2026 Gap Analysis Checklist.
                    </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "1.15rem" }}>
                    <div>
                        <p style={{ margin: 0, color: "#6b7280" }}>{displayName} · {session.isoStandard}</p>
                        <Link href="/iso-audit-assessments/gap-analysis" style={{ color: "#006644", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
                            ← Back to List
                        </Link>
                    </div>
                    <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap" }}>
                        <button type="button" disabled={downloading !== null} onClick={() => downloadReport("word")} style={wordBtn}>
                            {downloading === "word" ? "Preparing Word..." : "Download Word"}
                        </button>
                        <button type="button" disabled={downloading !== null} onClick={() => downloadReport("pdf")} style={{ ...pdfBtn, padding: "0.55rem 0.9rem" }}>
                            {downloading === "pdf" ? "Preparing PDF..." : "Download PDF"}
                        </button>
                    </div>
                </div>
                {downloadError ? <p style={{ margin: "0 0 1rem", color: "#b91c1c", fontSize: "0.9rem" }}>{downloadError}</p> : null}

                <AssessmentDetailsCard session={session} />
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <section style={cardStyle}>
                        <h2 style={cardTitle}>Scoring Summary</h2>
                        <p style={cardSub}>Compliance Percentage: (Comply ÷ {GAP_TOTAL_QUESTIONS}) × 100</p>
                        <p style={{ margin: "0.35rem 0 0.45rem", fontSize: "3rem", fontWeight: 800, color: tone.accent, textAlign: "center", letterSpacing: "-0.03em" }}>{stats.overall}%</p>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.85rem" }}>
                            <span style={{ background: tone.badgeBg, color: tone.badgeText, borderRadius: "999px", padding: "0.28rem 0.85rem", fontSize: "0.85rem", fontWeight: 700 }}>
                                {stats.maturity.stage} · {stats.maturity.percentLabel}
                            </span>
                        </div>
                        <DonutChart comply={stats.comply} ofi={stats.ofi} nc={stats.nc} />
                    </section>

                    <section style={cardStyle}>
                        <h2 style={cardTitle}>Clause Breakdown</h2>
                        <p style={cardSub}>Comply count by ISO clause.</p>
                        <BarChart clauses={stats.clauses} />
                        <div style={{ marginTop: "1.15rem", display: "grid", gap: "0.65rem" }}>
                            {stats.clauses.map((clause) => (
                                <div key={clause.label} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr auto" : "minmax(0, 1.4fr) 1fr 48px", alignItems: "center", gap: "0.65rem" }}>
                                    <span style={{ color: "#374151", fontSize: "0.82rem" }}>{clause.label}</span>
                                    {!isMobile ? (
                                        <div style={{ height: "8px", background: TRACK, borderRadius: "999px", overflow: "hidden" }}>
                                            <div style={{ width: `${clause.percent}%`, height: "100%", background: COMPLY }} />
                                        </div>
                                    ) : null}
                                    <span style={{ color: "#111827", fontWeight: 700, fontSize: "0.88rem", textAlign: "right" }}>{clause.percent}%</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <section style={{ ...cardStyle, marginBottom: "1rem" }}>
                    <h2 style={{ ...cardTitle, marginBottom: "0.9rem" }}>Detailed Findings Status</h2>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: "0.85rem" }}>
                        <StatusBox label="Comply (☑)" value={stats.comply} background="#e8f8ef" color="#16a34a" />
                        <StatusBox label="OFI (⭕)" value={stats.ofi} background="#fff7e6" color="#d97706" />
                        <StatusBox label="NC (✕)" value={stats.nc} background="#feecec" color="#dc2626" />
                    </div>
                </section>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <section style={{ ...cardStyle, borderColor: tone.softBorder, background: tone.softBg }}>
                        <h2 style={{ ...cardTitle, color: tone.text }}>Maturity Level</h2>
                        <p style={{ margin: "0 0 0.35rem", fontSize: "1.45rem", fontWeight: 800, color: tone.text }}>{stats.maturity.stage}</p>
                        <p style={{ margin: "0 0 0.45rem", color: tone.text, fontWeight: 700 }}>{stats.maturity.percentLabel} · {stats.maturity.status}</p>
                        <p style={{ margin: "0 0 0.35rem", color: "#4b5563", lineHeight: 1.6 }}>{stats.maturity.action}</p>
                        <p style={{ margin: 0, color: tone.text, fontWeight: 700 }}>Timeline: {stats.maturity.timeline}</p>
                    </section>
                    <section style={cardStyle}>
                        <h2 style={cardTitle}>Certification Readiness</h2>
                        <p style={{ margin: "0 0 0.35rem", fontSize: "1.45rem", fontWeight: 800, color: "#111827" }}>{stats.readiness.label}</p>
                        <p style={{ margin: "0 0 0.45rem", color: "#374151", fontWeight: 700 }}>{stats.readiness.ncLabel} · {stats.nc} NC found</p>
                        <p style={{ margin: "0 0 0.35rem", color: "#4b5563", lineHeight: 1.6 }}>{stats.readiness.action}</p>
                        <p style={{ margin: 0, color: "#111827", fontWeight: 700 }}>Timeline: {stats.readiness.timeline}</p>
                    </section>
                </div>
            </div>

            <section style={{ background: "linear-gradient(180deg, #f7faf8 0%, #ffffff 100%)", padding: isMobile ? "2.25rem 1.15rem 0.5rem" : "3.25rem 2rem 0.75rem" }}>
                <div
                    style={{
                        maxWidth: "1180px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
                        borderRadius: isMobile ? "1.25rem" : "1.75rem",
                        overflow: "hidden",
                        background: "#fff",
                        border: "1px solid #dce8df",
                        boxShadow: "0 24px 60px rgba(16, 47, 32, 0.08)",
                    }}
                >
                    <div style={{ padding: isMobile ? "1.75rem 1.35rem 2rem" : "3rem 3.1rem 3.15rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <span
                            style={{
                                display: "inline-flex",
                                alignSelf: "flex-start",
                                background: "#e8f8ef",
                                color: "#006644",
                                borderRadius: "999px",
                                padding: "0.32rem 0.85rem",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                            }}
                        >
                            Discuss your results
                        </span>
                        <h2 style={{ margin: "0.9rem 0 0", fontSize: isMobile ? "1.7rem" : "2.15rem", color: "#143528", lineHeight: 1.2, letterSpacing: "-0.03em" }}>
                            Take the next step toward {session.isoStandard}
                        </h2>
                        <p style={{ margin: "0.95rem 0 0", color: "#4b5563", lineHeight: 1.75, maxWidth: "34rem" }}>
                            Whether you are preparing for certification or strengthening an existing system, our team can walk through this snapshot with you and help you plan the actions that matter.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.75rem", margin: "1.35rem 0 1.5rem" }}>
                            <a href="mailto:info@iaudit.global" style={contactChip}>
                                <span style={contactChipLabel}>Email</span>
                                info@iaudit.global
                            </a>
                            <a href="tel:+447944829129" style={contactChip}>
                                <span style={contactChipLabel}>Call</span>
                                +44 7944 829129
                            </a>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
                            <Link href="/contact" style={{ ...contactPrimaryBtn, display: "inline-flex" }}>
                                Contact us
                            </Link>
                            <a
                                href="https://calendly.com/iauditgloballtd/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ ...contactSecondaryBtn, display: "inline-flex" }}
                            >
                                Book a discovery call
                            </a>
                        </div>
                    </div>
                    <div style={{ position: "relative", minHeight: isMobile ? "240px" : "100%" }}>
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                            alt="iAudit Global team discussing ISO gap analysis next steps"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(180deg, rgba(0, 62, 58, 0.08) 0%, rgba(0, 62, 58, 0.28) 100%)",
                            }}
                        />
                    </div>
                </div>
            </section>
            <CTA
                title={<>Ready to turn this gap analysis into action?</>}
                description="Move beyond a one-off snapshot. Plan, track and close findings in iAudit Global — the same PDCA workflow used by certified auditors."
                buttonText="Start Free Trial"
                buttonHref="https://apps.iaudit.global"
                secondaryButtonText="Book a demo"
                secondaryButtonHref="/contact"
            />
            <Footer />
        </div>
    );
}

function StatusBox({ label, value, background, color }: { label: string; value: number; background: string; color: string }) {
    return (
        <div style={{ background, borderRadius: "0.85rem", padding: "1.15rem 1.1rem", textAlign: "center" }}>
            <p style={{ margin: 0, color, fontSize: "0.92rem", fontWeight: 600 }}>{label}</p>
            <p style={{ margin: "0.45rem 0 0", color, fontSize: "2.35rem", fontWeight: 800, lineHeight: 1 }}>{value}</p>
        </div>
    );
}

function DonutChart({ comply, ofi, nc }: { comply: number; ofi: number; nc: number }) {
    const [tip, setTip] = useState<{ label: string; value: number; x: number; y: number } | null>(null);
    const segments = [
        { label: "Comply", value: comply, color: COMPLY },
        { label: "OFI", value: ofi, color: OFI },
        { label: "NC", value: nc, color: NC },
    ];
    const sum = segments.reduce((acc, item) => acc + item.value, 0);
    const cx = 140;
    const cy = 140;
    const outer = 108;
    const inner = 72;
    const paths = buildDonutPaths(segments, cx, cy, outer, inner);

    return (
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <svg width="280" height="280" viewBox="0 0 280 280" onMouseLeave={() => setTip(null)}>
                {sum === 0 ? (
                    <circle cx={cx} cy={cy} r={(outer + inner) / 2} fill="none" stroke="#e5e7eb" strokeWidth={outer - inner} />
                ) : (
                    paths.map((path) => (
                        <path
                            key={path.label}
                            d={path.d}
                            fill={path.color}
                            style={{ cursor: "pointer" }}
                            onMouseMove={(event) => {
                                const box = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
                                if (!box) return;
                                setTip({
                                    label: path.label,
                                    value: path.value,
                                    x: event.clientX - box.left,
                                    y: event.clientY - box.top,
                                });
                            }}
                        />
                    ))
                )}
            </svg>
            {tip ? (
                <div style={{ ...tooltipStyle, left: tip.x + 12, top: tip.y - 12 }}>
                    {tip.label} : {tip.value}
                </div>
            ) : null}
            <div style={{ display: "flex", gap: "1.1rem", marginTop: "0.35rem" }}>
                <LegendDot color={COMPLY} label="Comply" />
                <LegendDot color={OFI} label="OFI" />
                <LegendDot color={NC} label="NC" />
            </div>
        </div>
    );
}

function shortClauseLabel(label: string) {
    const match = label.match(/Clause\s+(\d+)/i);
    return match ? `Cl. ${match[1]}` : label.slice(0, 8);
}

function clauseBarColor(percent: number) {
    if (percent >= 75) return COMPLY;
    if (percent >= 50) return OFI;
    return NC;
}

function BarChart({ clauses }: { clauses: { label: string; percent: number }[] }) {
    const [tip, setTip] = useState<{ label: string; percent: number; x: number; y: number } | null>(null);
    const width = 520;
    const height = 230;
    const padL = 36;
    const padR = 12;
    const padT = 12;
    const padB = 36;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const barW = plotW / clauses.length * 0.55;
    const gap = plotW / clauses.length;

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="230" onMouseLeave={() => setTip(null)}>
                {[0, 25, 50, 75, 100].map((tick) => {
                    const y = padT + plotH - (tick / 100) * plotH;
                    return (
                        <g key={tick}>
                            <line x1={padL} x2={width - padR} y1={y} y2={y} stroke="#e5e7eb" strokeDasharray="3 4" />
                            <text x={padL - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#9ca3af">{tick}</text>
                        </g>
                    );
                })}
                {clauses.map((clause, index) => {
                    const h = (clause.percent / 100) * plotH;
                    const x = padL + gap * index + (gap - barW) / 2;
                    const y = padT + plotH - h;
                    return (
                        <g key={clause.label}>
                            <rect
                                x={x}
                                y={y}
                                width={barW}
                                height={Math.max(h, 0)}
                                fill={clauseBarColor(clause.percent)}
                                rx="2"
                                style={{ cursor: "pointer" }}
                                onMouseMove={(event) => {
                                    const box = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
                                    if (!box) return;
                                    setTip({
                                        label: clause.label,
                                        percent: clause.percent,
                                        x: event.clientX - box.left,
                                        y: event.clientY - box.top,
                                    });
                                }}
                            />
                            <text x={x + barW / 2} y={height - 10} textAnchor="middle" fontSize="11" fill="#6b7280">
                                {shortClauseLabel(clause.label)}
                            </text>
                        </g>
                    );
                })}
            </svg>
            {tip ? (
                <div style={{ ...tooltipStyle, left: tip.x + 12, top: Math.max(8, tip.y - 48) }}>
                    <div>{tip.label}</div>
                    <div style={{ color: BAR_BLUE, marginTop: "0.15rem" }}>Compliance % : {tip.percent}</div>
                </div>
            ) : null}
        </div>
    );
}

function LegendDot({ color, label }: { color: string; label: string }) {
    return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color, fontWeight: 700, fontSize: "0.88rem" }}>
            <span style={{ width: 10, height: 10, background: color, display: "inline-block" }} />
            {label}
        </span>
    );
}

function polar(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function buildDonutPaths(
    segments: { label: string; value: number; color: string }[],
    cx: number,
    cy: number,
    outer: number,
    inner: number
) {
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

const cardStyle: CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "0.95rem",
    padding: "1.2rem 1.2rem 1.3rem",
};
const cardTitle: CSSProperties = { margin: 0, fontSize: "1.15rem", color: "#111827" };
const cardSub: CSSProperties = { margin: "0.2rem 0 0.85rem", color: "#9ca3af", fontSize: "0.9rem" };
const tooltipStyle: CSSProperties = {
    position: "absolute",
    background: "#fff",
    border: "1px solid #d1d5db",
    borderRadius: "0.35rem",
    padding: "0.4rem 0.55rem",
    fontSize: "0.82rem",
    color: "#111827",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    zIndex: 5,
};
const contactChip: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    textDecoration: "none",
    background: "#f4faf6",
    border: "1px solid #dce8df",
    borderRadius: "0.9rem",
    padding: "0.85rem 0.95rem",
    color: "#143528",
    fontWeight: 700,
    fontSize: "0.92rem",
};
const contactChipLabel: CSSProperties = {
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#006644",
};
const contactPrimaryBtn: CSSProperties = {
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #07a34d 0%, #006644 100%)",
    color: "#fff",
    borderRadius: "0.65rem",
    padding: "0.8rem 1.25rem",
    fontWeight: 700,
    fontFamily: font,
    textDecoration: "none",
};
const contactSecondaryBtn: CSSProperties = {
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    color: "#006644",
    border: "1px solid #006644",
    borderRadius: "0.65rem",
    padding: "0.8rem 1.25rem",
    fontWeight: 700,
    fontFamily: font,
    textDecoration: "none",
};
const wordBtn: CSSProperties = {
    border: "1px solid #2563eb",
    background: "#fff",
    color: "#2563eb",
    borderRadius: "0.5rem",
    padding: "0.55rem 0.9rem",
    fontWeight: 700,
    fontFamily: font,
    cursor: "pointer",
};
const pdfBtn: CSSProperties = {
    border: "1px solid #2563eb",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "0.5rem",
    padding: "0.75rem 1.15rem",
    fontWeight: 700,
    fontFamily: font,
    cursor: "pointer",
};

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
