"use client";

import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const cardShadow = "0 4px 12px rgba(30,30,30,0.08), 0 16px 48px rgba(30,30,30,0.14)";

export default function PdcaImplementation() {
    const { isMobile } = useIndustriesBreakpoints();
    const cols = isMobile ? 1 : 2;

    const cards = [
        {
            step: "Plan",
            title: "Plan",
            description:
                "Build risk-based audit programmes, define scope and criteria, schedule audits, and assign auditors across sites and standards.",
            variant: "light" as const,
            illustration: (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.55rem",
                        padding: "1rem 0.5rem",
                    }}
                >
                    {[
                        { label: "Audit programme", icon: "📅", highlight: false },
                        { label: "Scope & criteria", icon: "🎯", highlight: true },
                        { label: "Auditor assignments", icon: "👥", highlight: false },
                    ].map((pill, i) => (
                        <motion.div
                            key={pill.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 + i * 0.14, duration: 0.45 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "0.7rem 1rem",
                                borderRadius: "10px",
                                background: pill.highlight ? "#006644" : "#f3f4f6",
                                color: pill.highlight ? "#fff" : "#374151",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <span style={{ fontSize: "1rem" }}>{pill.icon}</span>
                                <span style={{ fontSize: "0.84rem", fontWeight: 500 }}>{pill.label}</span>
                            </div>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={pill.highlight ? "rgba(255,255,255,0.8)" : "#9ca3af"}
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </motion.div>
                    ))}
                </div>
            ),
        },
        {
            step: "Do",
            title: "Do",
            description:
                "Execute audits on site or remotely using clause-linked checklists, capturing photos, notes and documents directly against each question.",
            variant: "light" as const,
            illustration: (
                <div
                    style={{
                        position: "relative",
                        height: "160px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        background: "#f9fafb",
                        padding: "1rem",
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            border: "1px solid #e5e7eb",
                            padding: "0.85rem",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#111827" }}>
                            Clause 8.1 — Operational planning
                        </div>
                        {[
                            { type: "photo", label: "Photo attached" },
                            { type: "note", label: "Auditor note" },
                            { type: "doc", label: "Document linked" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.12 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.4rem 0.6rem",
                                    borderRadius: "8px",
                                    background: "#f0fdf4",
                                    border: "1px solid #bbf7d0",
                                }}
                            >
                                <div
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "6px",
                                        background: "#006644",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2.5"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: "0.68rem", fontWeight: 500, color: "#374151" }}>
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            step: "Check",
            title: "Check",
            description:
                "Generate reports and dashboards instantly, analyse trends across sites and standards, and bring clear insights into management review.",
            variant: "light" as const,
            illustration: (
                <div
                    style={{
                        position: "relative",
                        height: "160px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        background: "#f9fafb",
                    }}
                >
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
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            padding: "0 1rem",
                            gap: "5px",
                        }}
                    >
                        {(
                            [
                                { v: 0.55, c: "#14664A" },
                                { v: 0.85, c: "#14664A" },
                                { v: 1.0, c: "#14664A" },
                                { v: 0.7, c: "#14664A" },
                                { v: -0.45, c: "#ED6A5A" },
                                { v: -0.65, c: "#ED6A5A" },
                                { v: 0.9, c: "#14664A" },
                                { v: 0.6, c: "#14664A" },
                            ] as { v: number; c: string }[]
                        ).map((bar, i) => {
                            const up = bar.v > 0;
                            const h = Math.abs(bar.v) * 52;
                            return (
                                <div
                                    key={i}
                                    style={{
                                        flex: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            flex: 1,
                                            display: "flex",
                                            alignItems: "flex-end",
                                            width: "100%",
                                        }}
                                    >
                                        {up && (
                                            <motion.div
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.1 + i * 0.05,
                                                    ease: "easeOut",
                                                }}
                                                style={{
                                                    width: "100%",
                                                    height: `${h}px`,
                                                    borderRadius: "3px 3px 2px 2px",
                                                    background: bar.c,
                                                    transformOrigin: "bottom",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div
                                        style={{
                                            flex: 1,
                                            display: "flex",
                                            alignItems: "flex-start",
                                            width: "100%",
                                        }}
                                    >
                                        {!up && (
                                            <motion.div
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.1 + i * 0.05,
                                                    ease: "easeOut",
                                                }}
                                                style={{
                                                    width: "100%",
                                                    height: `${h}px`,
                                                    borderRadius: "2px 2px 3px 3px",
                                                    background: bar.c,
                                                    transformOrigin: "top",
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ),
        },
        {
            step: "Act",
            title: "Act",
            description:
                "Convert findings into corrective actions with owners and deadlines, track closure, and verify effectiveness so repeat issues reduce cycle by cycle.",
            variant: "dark" as const,
            illustration: null,
        },
    ];

    return (
        <section
            id="pdca-implementation"
            style={{
                background: "#f7f8f9",
                padding: isMobile ? "3rem 0" : "4rem 0",
                fontFamily: PP_NEUE_MONTREAL,
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1240px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.4rem",
                        marginBottom: "1.2rem",
                        color: "#006644",
                        fontWeight: 500,
                        fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                >
                    <span>✦</span>
                    <span>PDCA in iAudit Global</span>
                    <span>✦</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.07 }}
                    style={{
                        textAlign: "center",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        color: "#0d1117",
                        margin: "0 auto 1.1rem",
                        maxWidth: "720px",
                    }}
                >
                    How iAudit Global Implements the PDCA Cycle
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.14 }}
                    style={{
                        textAlign: "center",
                        fontSize: "0.97rem",
                        lineHeight: 1.7,
                        color: "#6b7280",
                        maxWidth: "640px",
                        margin: isMobile ? "0 auto 2.5rem" : "0 auto 3rem",
                    }}
                >
                    iAudit Global keeps PDCA connected from audit planning to verified action
                    closure, so ISO audits produce clear evidence, visible trends, and measurable
                    improvement.
                </motion.p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gap: "1.2rem",
                        alignItems: "stretch",
                    }}
                >
                    {cards.map((card, index) => {
                        const isDark = card.variant === "dark";

                        return (
                            <motion.div
                                key={card.step}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                style={{
                                    background: isDark ? "#0a4a35" : "#fff",
                                    borderRadius: "20px",
                                    padding: isMobile ? "1.5rem" : "2rem",
                                    boxShadow: isDark
                                        ? "0 2px 6px rgba(0,102,68,0.08), 0 10px 32px rgba(0,102,68,0.18)"
                                        : cardShadow,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.5rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    minHeight: isDark ? "320px" : "auto",
                                }}
                            >
                                {isDark && (
                                    <>
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
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <svg
                                                    width="220"
                                                    height="220"
                                                    viewBox="0 0 220 220"
                                                    fill="none"
                                                >
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
                                                    <circle
                                                        cx="180"
                                                        cy="180"
                                                        r="44"
                                                        stroke="rgba(255,255,255,0.08)"
                                                        strokeWidth="18"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem",
                                                position: "relative",
                                                zIndex: 1,
                                            }}
                                        >
                                            {[
                                                { task: "Assign owner", done: true },
                                                { task: "Set deadline", done: true },
                                                { task: "Verify closure", done: false },
                                            ].map((row, i) => (
                                                <motion.div
                                                    key={row.task}
                                                    initial={{ opacity: 0, x: -12 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.35 + i * 0.12 }}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        padding: "0.65rem 0.9rem",
                                                        borderRadius: "10px",
                                                        background: "rgba(255,255,255,0.1)",
                                                        border: "1px solid rgba(255,255,255,0.12)",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "0.78rem",
                                                            fontWeight: 500,
                                                            color: "rgba(255,255,255,0.9)",
                                                        }}
                                                    >
                                                        {row.task}
                                                    </span>
                                                    <div
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            background: row.done
                                                                ? "rgba(255,255,255,0.25)"
                                                                : "rgba(255,255,255,0.08)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        {row.done && (
                                                            <svg
                                                                width="11"
                                                                height="11"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#fff"
                                                                strokeWidth="3"
                                                            >
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {!isDark && (
                                    <div style={{ minHeight: "160px" }}>{card.illustration}</div>
                                )}

                                <div style={{ position: "relative", zIndex: 1, marginTop: isDark ? "auto" : 0 }}>
                                    <div
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "0.65rem",
                                            width: "100%",
                                        }}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.2 + index * 0.08,
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 14,
                                            }}
                                            style={{
                                                display: "inline-block",
                                                padding: "0.35rem 0.85rem",
                                                borderRadius: "8px",
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.06em",
                                                textTransform: "uppercase",
                                                background: isDark
                                                    ? "rgba(255,255,255,0.15)"
                                                    : "#f0fdf4",
                                                color: isDark ? "#fff" : "#006644",
                                                border: isDark
                                                    ? "1px solid rgba(255,255,255,0.15)"
                                                    : "1px solid #bbf7d0",
                                            }}
                                        >
                                            {card.step}
                                        </motion.span>
                                    </div>
                                    <h3
                                        style={{
                                            fontWeight: 700,
                                            fontSize: isDark ? "1.35rem" : "1.1rem",
                                            color: isDark ? "#fff" : "#0d1117",
                                            margin: "0 0 0.5rem",
                                            textAlign: "center",
                                            lineHeight: 1.25,
                                        }}
                                    >
                                        {card.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.9rem",
                                            color: isDark ? "rgba(255,255,255,0.7)" : "#6b7280",
                                            lineHeight: 1.7,
                                            margin: 0,
                                            textAlign: "center",
                                        }}
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
