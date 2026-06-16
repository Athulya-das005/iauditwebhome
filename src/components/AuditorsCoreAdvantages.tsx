"use client";

import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const cards = [
    {
        title: "Cut Reporting Time By 60%",
        description:
            "Stop copy-pasting evidence into Word documents. Our automated report generator compiles your findings instantly.",
        animationKey: "reporting",
    },
    {
        title: "92% Compliance Score",
        description:
            "Organisations using our structured frameworks consistently score higher during external surveillance audits.",
        animationKey: "compliance",
    },
    {
        title: "Zero Implementation Time",
        description:
            "No complex setup required. Sign up, select your standard, and start your first audit in minutes.",
        animationKey: "setup",
    },
];

function ReportingAnimation() {
    return (
        <div
            style={{
                position: "relative",
                height: "130px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "1rem",
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -4, 0] }}
                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                style={{
                    position: "absolute",
                    left: "12%",
                    top: "18%",
                    width: "72px",
                    padding: "10px",
                    background: "#fff",
                    borderRadius: "10px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                }}
            >
                <div style={{ fontSize: "0.5rem", fontWeight: 700, color: "#2563eb", marginBottom: "6px" }}>
                    Word
                </div>
                {[1, 2, 3].map((n) => (
                    <div
                        key={n}
                        style={{
                            height: "3px",
                            background: "#e5e7eb",
                            borderRadius: "2px",
                            marginBottom: "4px",
                            width: `${100 - n * 15}%`,
                        }}
                    />
                ))}
            </motion.div>

            <motion.div
                animate={{ opacity: [0.4, 1, 0.4], x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: "absolute",
                    left: "42%",
                    top: "48%",
                    fontSize: "1.2rem",
                    color: "#f97316",
                    zIndex: 2,
                }}
            >
                →
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                    position: "absolute",
                    right: "10%",
                    top: "22%",
                    width: "100px",
                    background: "#fff",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 12px 28px rgba(99, 102, 241, 0.1)",
                    padding: "12px",
                }}
            >
                <div
                    style={{
                        fontSize: "0.55rem",
                        fontWeight: 700,
                        color: "#4f46e5",
                        marginBottom: "8px",
                    }}
                >
                    Audit Report
                </div>
                {[1, 2, 3, 4].map((n) => (
                    <motion.div
                        key={n}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${100 - n * 8}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + n * 0.12, duration: 0.5 }}
                        style={{
                            height: "4px",
                            background: ["#f97316", "#0d9488", "#6366f1", "#e5e7eb"][n - 1],
                            borderRadius: "2px",
                            marginBottom: "5px",
                        }}
                    />
                ))}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    style={{
                        marginTop: "6px",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: "#f97316",
                    }}
                >
                    60% faster ↓
                </motion.div>
            </motion.div>
        </div>
    );
}

function ComplianceAnimation() {
    return (
        <div
            style={{
                position: "relative",
                height: "130px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "14px 18px",
                    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)",
                    border: "1px solid #f1f5f9",
                }}
            >
                <div style={{ width: "72px", height: "72px", position: "relative" }}>
                    <svg
                        viewBox="0 0 100 100"
                        style={{ transform: "rotate(-90deg)", width: "100%", height: "100%" }}
                    >
                        <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#0d9488"
                            strokeWidth="8"
                            strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 20.1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, type: "spring" }}
                            style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827" }}
                        >
                            92%
                        </motion.div>
                        <div
                            style={{
                                fontSize: "0.5rem",
                                color: "#6b7280",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Score
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "100px" }}>
                    {[
                        { label: "Surveillance", val: 92, color: "#f97316" },
                        { label: "Documentation", val: 88, color: "#6366f1" },
                    ].map((row, i) => (
                        <div key={row.label}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "0.62rem",
                                    color: "#6b7280",
                                    marginBottom: "3px",
                                }}
                            >
                                <span>{row.label}</span>
                                <span>{row.val}%</span>
                            </div>
                            <div
                                style={{
                                    height: "5px",
                                    background: "#f1f5f9",
                                    borderRadius: "3px",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${row.val}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                                    style={{
                                        height: "100%",
                                        background: row.color,
                                        borderRadius: "3px",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            {[
                { color: "#f97316", top: "8%", right: "6%" },
                { color: "#6366f1", top: "72%", right: "12%" },
                { color: "#ec4899", top: "18%", left: "4%" },
            ].map((dot, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: dot.top,
                        right: dot.right,
                        left: dot.left,
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: dot.color,
                        boxShadow: `0 2px 8px ${dot.color}55`,
                    }}
                />
            ))}
        </div>
    );
}

function SetupAnimation() {
    const steps = [
        { label: "Sign up", icon: "user", bg: "#eff6ff", stroke: "#3b82f6", accent: "#3b82f6" },
        { label: "Select ISO", icon: "std", bg: "#fff7ed", stroke: "#f97316", accent: "#f97316" },
        { label: "Start audit", icon: "play", bg: "#0d9488", stroke: "#fff", accent: "#0d9488" },
    ];

    return (
        <div
            style={{
                position: "relative",
                height: "130px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {steps.map((step, i) => (
                    <div key={step.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={
                                i === 2
                                    ? {
                                          scale: [1, 1.06, 1],
                                          boxShadow: [
                                              "0 4px 12px rgba(13,148,136,0.2)",
                                              "0 8px 24px rgba(13,148,136,0.3)",
                                              "0 4px 12px rgba(13,148,136,0.2)",
                                          ],
                                      }
                                    : {}
                            }
                            transition={
                                i === 2
                                    ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                    : { delay: i * 0.15 }
                            }
                            style={{
                                width: "52px",
                                height: "52px",
                                borderRadius: "14px",
                                background: step.bg,
                                border: i === 2 ? "none" : `1px solid ${step.accent}33`,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "2px",
                                boxShadow: `0 6px 16px ${step.accent}18`,
                            }}
                        >
                            {step.icon === "user" && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={step.stroke} strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            )}
                            {step.icon === "std" && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={step.stroke} strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                            )}
                            {step.icon === "play" && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={step.stroke} strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            )}
                            <span
                                style={{
                                    fontSize: "0.45rem",
                                    fontWeight: 600,
                                    color: i === 2 ? "rgba(255,255,255,0.9)" : step.accent,
                                }}
                            >
                                {step.label}
                            </span>
                        </motion.div>
                        {i < 2 && (
                            <div
                                style={{
                                    width: "24px",
                                    height: "2px",
                                    background: "#e5e7eb",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.div
                                    animate={{ left: ["-100%", "100%"] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                        ease: "linear",
                                    }}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: "-100%",
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            i === 0
                                                ? "linear-gradient(90deg, transparent, #3b82f6, transparent)"
                                                : "linear-gradient(90deg, transparent, #f97316, transparent)",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                style={{
                    position: "absolute",
                    bottom: "12px",
                    fontSize: "0.58rem",
                    fontWeight: 600,
                    color: "#6366f1",
                    letterSpacing: "0.04em",
                }}
            >
                READY IN MINUTES
            </motion.div>
        </div>
    );
}

function CardAnimation({ type }: { type: string }) {
    switch (type) {
        case "reporting":
            return <ReportingAnimation />;
        case "compliance":
            return <ComplianceAnimation />;
        case "setup":
            return <SetupAnimation />;
        default:
            return null;
    }
}

export default function AuditorsCoreAdvantages() {
    const { isMobile, isTablet } = useIndustriesBreakpoints();
    const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)";

    return (
        <section
            id="core-advantages"
            style={{
                background: "#ffffff",
                overflow: "hidden",
                fontFamily: PP_NEUE_MONTREAL,
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                borderTop: "1px solid #f0f0f0",
            }}
        >
            <div
                style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: isMobile ? "2.5rem" : "3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            color: "#006644",
                            fontWeight: 500,
                            fontSize: isMobile ? "0.9rem" : "1rem",
                            letterSpacing: "0.01em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        <span style={{ fontSize: "1rem" }}>✦</span>
                        Core Advantages
                        <span style={{ fontSize: "1rem" }}>✦</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            ...aboutType.sectionH2(),
                            fontSize: isMobile ? "2rem" : "clamp(2rem, 3.5vw, 3.2rem)",
                            fontWeight: 500,
                            lineHeight: isMobile ? 1.2 : 1.1,
                            letterSpacing: "-0.02em",
                            maxWidth: "720px",
                            margin: 0,
                        }}
                    >
                        Better Oversight. Stronger Results.
                    </motion.h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: cols,
                        gap: "1rem",
                    }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.55 }}
                            whileHover={{ y: -4 }}
                            style={{
                                background: "#fff",
                                borderRadius: "24px",
                                padding: "1rem",
                                boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
                                border: "1px solid #f1f5f9",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    background: "#f8f9fa",
                                    borderRadius: "12px",
                                    marginBottom: "1rem",
                                    overflow: "hidden",
                                }}
                            >
                                <CardAnimation type={card.animationKey} />
                            </div>
                            <div style={{ padding: "0 0.75rem 1rem 0.75rem", textAlign: "center" }}>
                                <h3
                                    style={{
                                        fontSize: "1.1rem",
                                        marginBottom: "0.5rem",
                                        fontWeight: 600,
                                        color: "#111827",
                                        fontFamily: PP_NEUE_MONTREAL,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    style={{
                                        lineHeight: 1.6,
                                        fontSize: "0.85rem",
                                        color: "#6b7280",
                                        margin: 0,
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
