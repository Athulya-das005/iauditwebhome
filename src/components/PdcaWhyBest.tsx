"use client";

import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const cardShell = (isMobile: boolean) => ({
    border: isMobile ? "10px solid #fff" : "20px solid #fff",
    borderRadius: "28px",
    overflow: "hidden" as const,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.04), 0 10px 36px rgba(0,0,0,0.08)",
    cursor: "pointer" as const,
    transition: "border-color 0.25s ease",
});

const PEACH = "#F4A27E";
const PEACH_DARK = "#c5784a";
const ORANGE = "#f97316";
const TEAL = "#0d9488";
const GREEN = "#006644";

const innerPanel = (isMobile: boolean, minHeight = "240px", tint?: string) => ({
    background: tint ?? "#f3f4f6",
    borderRadius: "10px",
    padding: isMobile ? "1.2rem 1rem" : "1.4rem 1.2rem",
    minHeight: isMobile ? "200px" : minHeight,
    display: "flex" as const,
    flexDirection: "column" as const,
});

export default function PdcaWhyBest() {
    const { isMobile } = useIndustriesBreakpoints();

    const cards = [
        {
            title: "Built by ISO Auditors",
            description:
                "Designed by certified auditors, our ISO 19011-aligned software solves real-world PDCA cycle problems.",
            delay: 0.12,
            illustration: (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.65rem", position: "relative" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.45 }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "92%",
                            height: "46px",
                            borderRadius: "28px 28px 28px 6px",
                            background: PEACH,
                            overflow: "hidden",
                            paddingRight: "12px",
                        }}
                    >
                        <div
                            style={{
                                width: "46px",
                                height: "46px",
                                borderRadius: "50%",
                                flexShrink: 0,
                                background: PEACH_DARK,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.75)" />
                                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(255,255,255,0.75)" />
                            </svg>
                        </div>
                        <div style={{ flex: 1, paddingLeft: "10px" }}>
                            <p style={{ fontWeight: 600, fontSize: "0.72rem", color: "#fff", margin: 0 }}>
                                Certified Lead Auditor
                            </p>
                            <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>
                                ISO 19011 aligned
                            </p>
                        </div>
                    </motion.div>

                    {["Plan", "Do", "Check", "Act"].map((step, i) => {
                        const badgeBg = i === 3 ? GREEN : i % 2 === 0 ? "#fff7ed" : "#f0fdf4";
                        const badgeColor = i === 3 ? "#fff" : i % 2 === 0 ? ORANGE : GREEN;
                        const dotColor = i % 2 === 0 ? ORANGE : GREEN;
                        return (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45 + i * 0.1 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    background: "white",
                                    borderRadius: "8px",
                                    padding: "0.5rem 0.75rem",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                }}
                            >
                                <div
                                    style={{
                                        width: "22px",
                                        height: "22px",
                                        borderRadius: "6px",
                                        background: badgeBg,
                                        color: badgeColor,
                                        fontSize: "0.55rem",
                                        fontWeight: 700,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {i + 1}
                                </div>
                                <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "#374151" }}>
                                    {step} — real audit workflow
                                </span>
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    style={{
                                        marginLeft: "auto",
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: dotColor,
                                    }}
                                />
                            </motion.div>
                        );
                    })}

                    <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ alignSelf: "flex-end", color: GREEN, fontSize: "1rem", marginTop: "0.25rem" }}
                    >
                        ▶
                    </motion.div>
                </div>
            ),
            panelTint: "linear-gradient(160deg, #fff7ed 0%, #f3f4f6 55%, #f0fdf4 100%)",
        },
        {
            title: "Absolute Data Sovereignty",
            description:
                "Our strict zero-access policy means your audit findings are yours alone, ensuring complete confidentiality.",
            delay: 0,
            illustration: (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{
                            background: "white",
                            borderRadius: "10px",
                            padding: "0.9rem 1rem",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                        }}
                    >
                        <p style={{ fontWeight: 600, fontSize: "0.75rem", color: "#111827", margin: "0 0 0.6rem" }}>
                            Highlights:
                        </p>
                        {["Encrypted audit findings", "No vendor data mining"].map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45 + i * 0.15 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    marginBottom: "0.35rem",
                                }}
                            >
                                <svg width="9" height="9" viewBox="0 0 10 10">
                                    <polygon points="5,0 10,5 5,10 0,5" fill={ORANGE} />
                                </svg>
                                <span style={{ fontSize: "0.72rem", color: "#374151" }}>{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.55, duration: 0.5 }}
                        style={{
                            background: "white",
                            borderRadius: "10px",
                            padding: "0.75rem 1rem",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                        }}
                    >
                        <div
                            style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "10px",
                                background: `linear-gradient(135deg, ${PEACH} 0%, ${PEACH_DARK} 100%)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                boxShadow: "0 4px 12px rgba(244,162,126,0.4)",
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0110 0v4" />
                            </svg>
                        </div>
                        <div>
                            <p style={{ fontWeight: 600, fontSize: "0.72rem", color: "#111827", margin: 0 }}>
                                Zero-access policy
                            </p>
                            <p style={{ fontSize: "0.63rem", color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>
                                Your history stays yours — completely private.
                            </p>
                        </div>
                    </motion.div>
                </div>
            ),
            panelTint: "linear-gradient(160deg, #f0fdf4 0%, #f3f4f6 50%, #fff7ed 100%)",
        },
        {
            title: "Integrated Management System Support",
            description:
                "Manage ISO 9001, 14001, and 45001 audits with a single, consistent PDCA workflow.",
            delay: 0.24,
            illustration: (
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ fontWeight: 600, fontSize: "0.8rem", color: "#111827", margin: "0 0 0.2rem" }}>
                        Unified standards performance
                    </p>
                    <p style={{ fontSize: "0.65rem", color: "#9ca3af", margin: "0 0 0.75rem" }}>
                        Track ISO 9001, 14001 and 45001 in one PDCA workflow.
                    </p>
                    <div style={{ flex: 1, position: "relative" }}>
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                right: 0,
                                height: "1px",
                                background: "rgba(0,0,0,0.08)",
                                transform: "translateY(-50%)",
                            }}
                        />
                        <svg width="100%" height="110" viewBox="0 0 280 80" style={{ overflow: "visible" }}>
                            {[40, 80, 110, 140, 165, 190, 215, 240, 262].map((x, i) => (
                                <line
                                    key={i}
                                    x1={x}
                                    y1="0"
                                    x2={x}
                                    y2="65"
                                    stroke="#d1d5db"
                                    strokeWidth="1"
                                    strokeDasharray="4 3"
                                />
                            ))}
                            <motion.path
                                d="M10 55 C40 50,55 35,80 30 C105 25,120 40,145 38 C165 36,185 15,210 10 C230 6,255 20,275 22"
                                fill="none"
                                stroke={TEAL}
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                            />
                            <motion.path
                                d="M10 65 C35 62,55 52,80 48 C108 44,125 55,148 50 C168 46,190 30,215 44 C235 55,260 50,275 42"
                                fill="none"
                                stroke={ORANGE}
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.circle
                                cx="165"
                                cy="38"
                                r="4"
                                fill="#ef4444"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 12 }}
                            />
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map(
                                (m, i) => (
                                    <text
                                        key={m}
                                        x={10 + i * 25}
                                        y="78"
                                        fontSize="6.5"
                                        fill="#9ca3af"
                                        textAnchor="middle"
                                    >
                                        {m}
                                    </text>
                                )
                            )}
                        </svg>
                    </div>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                        {[
                            { label: "ISO 9001", color: TEAL },
                            { label: "ISO 14001", color: GREEN },
                            { label: "ISO 45001", color: ORANGE },
                        ].map((std, i) => (
                            <motion.span
                                key={std.label}
                                initial={{ opacity: 0, y: 6 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                                style={{
                                    fontSize: "0.62rem",
                                    fontWeight: 600,
                                    padding: "0.3rem 0.55rem",
                                    borderRadius: "6px",
                                    background: "#fff",
                                    color: std.color,
                                    border: `1px solid ${std.color}44`,
                                }}
                            >
                                {std.label}
                            </motion.span>
                        ))}
                    </div>
                </div>
            ),
            panelTint: "linear-gradient(160deg, #f3f4f6 0%, #fff7ed 40%, #f0fdf4 100%)",
        },
    ];

    const orderedCards = [cards[1], cards[0], cards[2]];

    return (
        <section
            id="why-best"
            style={{
                background: "#ffffff",
                fontFamily: PP_NEUE_MONTREAL,
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1240px",
                    margin: "0 auto",
                    padding: isMobile ? "3rem 1.25rem" : "5rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        marginBottom: "1rem",
                        color: "#006644",
                        fontWeight: 500,
                        fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                >
                    <span>✦</span>
                    <span>Why choose iAudit</span>
                    <span>✦</span>
                </motion.div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        marginBottom: isMobile ? "2rem" : "3.5rem",
                        maxWidth: "720px",
                    }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.07 }}
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            color: "#0d1117",
                            margin: 0,
                        }}
                    >
                        What Makes iAudit the Best PDCA Cycle Audit Software
                    </motion.h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                        gap: "1.2rem",
                    }}
                >
                    {orderedCards.map((card) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <motion.div
                                whileHover={{ borderColor: "#006644" }}
                                transition={{ duration: 0.25 }}
                                style={cardShell(isMobile)}
                            >
                                <div style={{ ...innerPanel(isMobile), background: card.panelTint }}>
                                    {card.illustration}
                                </div>
                            </motion.div>

                            <div style={{ padding: isMobile ? "1rem 0" : "1.4rem 0.2rem 0" }}>
                                <h3
                                    style={{
                                        fontWeight: 700,
                                        fontSize: isMobile ? "1.1rem" : "1.2rem",
                                        color: "#0d1117",
                                        margin: "0 0 0.6rem",
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#6b7280",
                                        lineHeight: 1.7,
                                        margin: 0,
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
