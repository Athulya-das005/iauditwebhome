"use client";

import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const cardShadow =
    "0 4px 12px rgba(30,30,30,0.08), 0 16px 48px rgba(30,30,30,0.14)";

const cardBase = (
    isMobile: boolean,
    variant: "white" | "green" | "darkGreen" = "white"
) => ({
    background:
        variant === "green" ? "#dcfce7" : variant === "darkGreen" ? "#0a4a35" : "#fff",
    borderRadius: "20px",
    padding: isMobile ? "1.5rem" : variant === "darkGreen" ? "2rem" : "2rem",
    boxShadow:
        variant === "darkGreen"
            ? "0 2px 6px rgba(0,102,68,0.08), 0 10px 32px rgba(0,102,68,0.18)"
            : cardShadow,
    border: variant === "green" ? "1px solid #bbf7d0" : "none",
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "1.5rem",
    position: variant === "darkGreen" ? ("relative" as const) : undefined,
    overflow: variant === "darkGreen" ? ("hidden" as const) : undefined,
});

function CardText({
    title,
    description,
    light,
}: {
    title: string;
    description: string;
    light?: boolean;
}) {
    return (
        <div>
            <h3
                style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: light ? "#fff" : "#0d1117",
                    margin: "0 0 0.5rem",
                    textAlign: "center",
                    fontFamily: PP_NEUE_MONTREAL,
                    lineHeight: 1.3,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: "0.9rem",
                    color: light ? "rgba(255,255,255,0.75)" : "#6b7280",
                    lineHeight: 1.7,
                    margin: 0,
                    textAlign: "center",
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                {description}
            </p>
        </div>
    );
}

export default function AuditorsPainPoints() {
    const { isMobile, isTablet } = useIndustriesBreakpoints();
    const topCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr";

    return (
        <section
            style={{
                background: "#f7f8f9",
                padding: isMobile ? "1.5rem 0 3rem" : "2.5rem 0 2rem",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <div
                style={{
                    maxWidth: "1240px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        textAlign: "center",
                        ...aboutType.sectionH2(),
                        fontSize: isMobile
                            ? "clamp(1.65rem, 5vw, 2rem)"
                            : "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 500,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        margin: "0 auto 1.1rem",
                        maxWidth: "780px",
                    }}
                >
                    Audit time should reduce risk, not increase your paperwork
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    style={{
                        textAlign: "center",
                        fontSize: isMobile ? "0.95rem" : "0.97rem",
                        lineHeight: 1.7,
                        color: "#6b7280",
                        maxWidth: "620px",
                        margin: isMobile ? "0 auto 2.5rem" : "0 auto 3.5rem",
                        fontFamily: PP_NEUE_MONTREAL,
                    }}
                >
                    Audits should improve performance, but they usually end up buried in
                    admin and scattered spreadsheets.
                </motion.p>

                {/* Top row — 3 cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: topCols,
                        gap: "1.2rem",
                        alignItems: "stretch",
                    }}
                >
                    {/* Card 1 — Checklists */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={cardBase(isMobile, "green")}
                    >
                        <div
                            style={{
                                position: "relative",
                                height: "160px",
                                borderRadius: "12px",
                                overflow: "hidden",
                                background: "rgba(255,255,255,0.55)",
                            }}
                        >
                            {[
                                { label: "2023 v1", top: "18%", left: "8%", rot: -6 },
                                { label: "2024 v3", top: "42%", left: "32%", rot: 4 },
                                { label: "2025 draft", top: "22%", left: "58%", rot: -3 },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    animate={{
                                        y: [0, i % 2 === 0 ? -5 : 5, 0],
                                        rotate: [item.rot, item.rot + 2, item.rot],
                                    }}
                                    transition={{
                                        duration: 3.5 + i * 0.4,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        position: "absolute",
                                        top: item.top,
                                        left: item.left,
                                        width: "88px",
                                        padding: "10px 8px",
                                        background: "#fff",
                                        borderRadius: "10px",
                                        border: "1px dashed #d1d5db",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "0.55rem",
                                            fontWeight: 700,
                                            color: "#9ca3af",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                    {[1, 2, 3].map((n) => (
                                        <div
                                            key={n}
                                            style={{
                                                height: "3px",
                                                background: "#e5e7eb",
                                                borderRadius: "2px",
                                                marginBottom: "4px",
                                                width: `${100 - n * 12}%`,
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                        <CardText
                            title="Rebuilding Checklists Every Year"
                            description="Formats change, questions drift, and consistency disappears across sites and audit cycles."
                        />
                    </motion.div>

                    {/* Card 2 — Evidence after audit */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                        style={cardBase(isMobile)}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "160px",
                                borderRadius: "12px",
                                background: "#f9fafb",
                                padding: "1rem",
                                gap: "0.75rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1.5rem",
                                    width: "100%",
                                    justifyContent: "center",
                                }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "12px",
                                        background: "#fff",
                                        border: "1px solid #e5e7eb",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#6366f1"
                                        strokeWidth="2"
                                    >
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </motion.div>
                                <motion.div
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ fontSize: "1.2rem", color: "#d1d5db" }}
                                >
                                    →
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0.3 }}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "12px",
                                        background: "#fef2f2",
                                        border: "1px solid #fecaca",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ef4444"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </motion.div>
                            </div>
                            <span
                                style={{
                                    fontSize: "0.65rem",
                                    fontWeight: 600,
                                    color: "#9ca3af",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                EVIDENCE GATHERED LATER
                            </span>
                        </div>
                        <CardText
                            title="Evidence Collected After the Audit"
                            description="Photos and records gathered later lose context, weakening findings and credibility."
                        />
                    </motion.div>

                    {/* Card 3 — Reports */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
                        style={{
                            ...cardBase(isMobile, "darkGreen"),
                            ...(isTablet && !isMobile
                                ? { gridColumn: "1 / -1", maxWidth: "480px", margin: "0 auto", width: "100%" }
                                : {}),
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-30px",
                                right: "-30px",
                                pointerEvents: "none",
                            }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 6, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg width="160" height="160" viewBox="0 0 220 220" fill="none">
                                    <circle
                                        cx="180"
                                        cy="180"
                                        r="100"
                                        stroke="rgba(255,255,255,0.06)"
                                        strokeWidth="32"
                                        fill="none"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                        <div
                            style={{
                                position: "relative",
                                height: "160px",
                                borderRadius: "12px",
                                overflow: "hidden",
                                background: "rgba(255,255,255,0.1)",
                                padding: "1rem 1.25rem",
                                zIndex: 1,
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -24, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    background: "#fff",
                                    borderRadius: "10px",
                                    border: "1px solid #e5e7eb",
                                    padding: "12px",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "0.65rem",
                                        fontWeight: 700,
                                        color: "#111827",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Audit Report — 47 pages
                                </div>
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            height: "4px",
                                            background: i === 2 ? "#d1fae5" : "#e5e7eb",
                                            borderRadius: "2px",
                                            marginBottom: "5px",
                                            width: `${95 - (i % 3) * 15}%`,
                                        }}
                                    />
                                ))}
                            </motion.div>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "12px",
                                    right: "12px",
                                    fontSize: "0.6rem",
                                    fontWeight: 600,
                                    color: "#ef4444",
                                    background: "#fef2f2",
                                    padding: "4px 8px",
                                    borderRadius: "6px",
                                }}
                            >
                                Key finding buried on p.38
                            </div>
                        </div>
                        <div style={{ position: "relative", zIndex: 1 }}>
                        <CardText
                            light
                            title="Reports That Bury the Point"
                            description="Lengthy write‑ups consume time but rarely drive clear decisions or measurable improvement."
                        />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom row — 2 cards (wide + compact), matching About principles */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1.45fr 1fr",
                        gap: "1.2rem",
                        marginTop: "1.2rem",
                    }}
                >
                    {/* Card 4 — CAPA closed too easily (dark green) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        style={{
                            background: "#0a4a35",
                            borderRadius: "20px",
                            padding: isMobile ? "1.5rem" : "2.2rem",
                            boxShadow:
                                "0 2px 6px rgba(0,102,68,0.08), 0 10px 32px rgba(0,102,68,0.18)",
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "1.5rem" : "2rem",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",
                            minHeight: isMobile ? "auto" : "280px",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-40px",
                                right: "-40px",
                                pointerEvents: "none",
                            }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 6, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                                    <circle
                                        cx="180"
                                        cy="180"
                                        r="120"
                                        stroke="rgba(255,255,255,0.06)"
                                        strokeWidth="36"
                                        fill="none"
                                    />
                                    <circle
                                        cx="180"
                                        cy="180"
                                        r="80"
                                        stroke="rgba(255,255,255,0.05)"
                                        strokeWidth="28"
                                        fill="none"
                                    />
                                </svg>
                            </motion.div>
                        </div>

                        <div
                            style={{
                                flex: isMobile ? "none" : "0 0 200px",
                                position: "relative",
                                zIndex: 1,
                                width: isMobile ? "100%" : "auto",
                            }}
                        >
                            <div
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    borderRadius: "14px",
                                    padding: "1.25rem",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                }}
                            >
                                {[
                                    { label: "Action assigned", done: true },
                                    { label: "Marked complete", done: true },
                                    { label: "Effectiveness verified", done: false },
                                ].map((step, i) => (
                                    <motion.div
                                        key={step.label}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.12 }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.6rem",
                                            marginBottom: i < 2 ? "0.65rem" : 0,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "22px",
                                                height: "22px",
                                                borderRadius: "50%",
                                                background: step.done
                                                    ? "rgba(255,255,255,0.2)"
                                                    : "rgba(239,68,68,0.3)",
                                                border: step.done
                                                    ? "1px solid rgba(255,255,255,0.3)"
                                                    : "1px dashed rgba(239,68,68,0.6)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {step.done ? (
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="3"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            ) : (
                                                <span style={{ color: "#fca5a5", fontSize: "0.7rem" }}>
                                                    ?
                                                </span>
                                            )}
                                        </div>
                                        <span
                                            style={{
                                                fontSize: "0.78rem",
                                                color: step.done
                                                    ? "rgba(255,255,255,0.85)"
                                                    : "rgba(255,255,255,0.55)",
                                                fontWeight: 500,
                                                textDecoration: step.done ? "line-through" : "none",
                                            }}
                                        >
                                            {step.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
                            <h3
                                style={{
                                    fontWeight: 700,
                                    fontSize: isMobile ? "1.2rem" : "1.45rem",
                                    color: "#fff",
                                    margin: "0 0 1rem",
                                    lineHeight: 1.25,
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                Corrective Actions Closed Too Easily
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "rgba(255,255,255,0.7)",
                                    lineHeight: 1.7,
                                    margin: 0,
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                Actions marked complete without effectiveness checks allow the same
                                issues to return.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5 — Scattered findings */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                        style={{
                            ...cardBase(isMobile),
                            justifyContent: "space-between",
                            minHeight: isMobile ? "auto" : "280px",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                height: "160px",
                                borderRadius: "12px",
                                overflow: "hidden",
                                background: "#f9fafb",
                            }}
                        >
                            {[
                                { label: "Excel", icon: "sheet", top: "12%", left: "6%" },
                                { label: "Email", icon: "mail", top: "55%", left: "18%" },
                                { label: "Drive", icon: "folder", top: "20%", left: "52%" },
                                { label: "PDF", icon: "file", top: "58%", left: "62%" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    animate={{
                                        y: [0, i % 2 === 0 ? -6 : 6, 0],
                                        x: [0, i % 2 === 0 ? 4 : -4, 0],
                                    }}
                                    transition={{
                                        duration: 3.2 + i * 0.4,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        position: "absolute",
                                        top: item.top,
                                        left: item.left,
                                        width: "68px",
                                        height: "68px",
                                        background: "#fff",
                                        borderRadius: "12px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "4px",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                                        border: "1px dashed #d1d5db",
                                    }}
                                >
                                    {item.icon === "sheet" && (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#22c55e"
                                            strokeWidth="2"
                                        >
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <path d="M3 9h18M9 21V9" />
                                        </svg>
                                    )}
                                    {item.icon === "mail" && (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#f59e0b"
                                            strokeWidth="2"
                                        >
                                            <path d="M4 4h16v16H4z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    )}
                                    {item.icon === "folder" && (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#6366f1"
                                            strokeWidth="2"
                                        >
                                            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                                        </svg>
                                    )}
                                    {item.icon === "file" && (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#ef4444"
                                            strokeWidth="2"
                                        >
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                        </svg>
                                    )}
                                    <span
                                        style={{
                                            fontSize: "0.5rem",
                                            fontWeight: 600,
                                            color: "#6b7280",
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <CardText
                            title="Findings Scattered Across Systems"
                            description="Spreadsheets, emails and folders fragment audit history, hiding trends and repeat nonconformities."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
