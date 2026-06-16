"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const isoStandards = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001"];

const clauseLabels = [
    "Clause 4 — Context",
    "Clause 6 — Planning",
    "Clause 9 — Performance",
    "Clause 10 — Improvement",
];

const evolutionSteps = [
    { label: "Internal auditor tool", sub: "Built for practising auditors" },
    { label: "Full audit platform", sub: "End-to-end cycle connected" },
    { label: "Operational excellence", sub: "Findings → measurable outcomes" },
];

export default function AuditorsPlatformSection() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            id="built-by-auditors-platform"
            style={{
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                background:
                    "linear-gradient(180deg, #f0fdf7 0%, #ffffff 50%, #f7f8f9 100%)",
                fontFamily: PP_NEUE_MONTREAL,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(90vw, 700px)",
                    height: "400px",
                    background:
                        "radial-gradient(ellipse, rgba(5,140,66,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: isStacked ? "1fr" : "1fr 1fr",
                        gap: isStacked ? "2.75rem" : "3.5rem",
                        alignItems: "center",
                        background: "#fff",
                        borderRadius: isMobile ? "20px" : "28px",
                        border: "1px solid #dcfce7",
                        boxShadow:
                            "0 4px 24px rgba(5, 140, 66, 0.07), 0 24px 64px rgba(5, 140, 66, 0.09)",
                        padding: isMobile ? "2rem 1.5rem" : "3rem 3.5rem",
                        overflow: "hidden",
                    }}
                >
                    {/* Copy */}
                    <div
                        style={{
                            textAlign: isMobile ? "center" : "left",
                            order: isStacked ? 1 : 1,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -14 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                color: "#006644",
                                fontWeight: 500,
                                fontSize: "0.9rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <span>✦</span>
                            <span>Built by Auditors</span>
                            <span>✦</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.15 }}
                            style={{
                                ...aboutType.sectionH2(),
                                margin: "0 0 1.25rem 0",
                                lineHeight: isMobile ? 1.15 : 1.1,
                            }}
                        >
                            Finally, an audit platform that speaks the language of ISO
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.22 }}
                            style={{
                                ...aboutType.bodyMedium(),
                                margin: 0,
                                maxWidth: "520px",
                                marginLeft: isMobile ? "auto" : undefined,
                                marginRight: isMobile ? "auto" : undefined,
                            }}
                        >
                            iAudit Global began as an internal tool for practising auditors who
                            needed to connect planning with verified closure. It evolved into a
                            full platform that simplifies the entire audit cycle, helping
                            organisations turn scattered findings into measurable, long-term
                            operational excellence.
                        </motion.p>

                        {/* Animated ISO standard pills — visible on mobile below text */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.5rem",
                                marginTop: "1.75rem",
                                justifyContent: isMobile ? "center" : "flex-start",
                            }}
                        >
                            {isoStandards.map((std, i) => (
                                <motion.span
                                    key={std}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.08 }}
                                    whileHover={{ scale: 1.04 }}
                                    style={{
                                        fontSize: "0.72rem",
                                        fontWeight: 600,
                                        padding: "0.4rem 0.75rem",
                                        borderRadius: "8px",
                                        background: "#f0fdf4",
                                        color: "#006644",
                                        border: "1px solid #bbf7d0",
                                    }}
                                >
                                    {std}
                                </motion.span>
                            ))}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.72 }}
                                style={{
                                    fontSize: "0.72rem",
                                    fontWeight: 600,
                                    padding: "0.4rem 0.75rem",
                                    borderRadius: "8px",
                                    background: "#003E3A",
                                    color: "#fff",
                                }}
                            >
                                ISO 19011
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Animated visual */}
                    <div
                        style={{
                            position: "relative",
                            minHeight: isMobile ? "300px" : "360px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            order: isStacked ? 2 : 2,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.75, delay: 0.15 }}
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: "420px",
                                margin: "0 auto",
                            }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: "320px",
                                    height: "320px",
                                    marginTop: "-160px",
                                    marginLeft: "-160px",
                                    borderRadius: "50%",
                                    border: "1px dashed rgba(5, 140, 66, 0.2)",
                                    pointerEvents: "none",
                                    zIndex: 0,
                                }}
                            />

                            {/* Orbiting clause chips */}
                            {clauseLabels.map((clause, i) => {
                                const angle = (i / clauseLabels.length) * 360;
                                const radius = isMobile ? 130 : 150;
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;
                                return (
                                    <motion.div
                                        key={clause}
                                        initial={{ opacity: 0, scale: 0.6 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        animate={{
                                            x: [x, x + 4, x],
                                            y: [y, y - 5, y],
                                        }}
                                        transition={{
                                            opacity: { delay: 0.3 + i * 0.1 },
                                            scale: { delay: 0.3 + i * 0.1, type: "spring" },
                                            x: {
                                                duration: 3.5 + i * 0.3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                            y: {
                                                duration: 3.5 + i * 0.3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                        }}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            marginLeft: x,
                                            marginTop: y,
                                            padding: "0.35rem 0.65rem",
                                            borderRadius: "8px",
                                            background: "rgba(255,255,255,0.95)",
                                            border: "1px solid #e5e7eb",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                                            fontSize: "0.58rem",
                                            fontWeight: 600,
                                            color: "#374151",
                                            whiteSpace: "nowrap",
                                            zIndex: 1,
                                        }}
                                    >
                                        {clause}
                                    </motion.div>
                                );
                            })}

                            {/* Central platform card */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: "relative",
                                    zIndex: 2,
                                    background: "#fff",
                                    borderRadius: "20px",
                                    padding: isMobile ? "1.25rem" : "1.5rem",
                                    boxShadow: "0 20px 50px rgba(5, 140, 66, 0.14)",
                                    border: "1px solid #e5e7eb",
                                    margin: "0 auto",
                                    maxWidth: "300px",
                                }}
                            >
                                <Image
                                    src="/iAudit Global-01.png"
                                    alt="iAudit Global"
                                    width={110}
                                    height={36}
                                    style={{
                                        height: "auto",
                                        objectFit: "contain",
                                        marginBottom: "1rem",
                                    }}
                                />

                                <div
                                    style={{
                                        fontSize: "0.65rem",
                                        fontWeight: 700,
                                        color: "#9ca3af",
                                        letterSpacing: "0.06em",
                                        marginBottom: "0.65rem",
                                    }}
                                >
                                    PLATFORM EVOLUTION
                                </div>

                                {evolutionSteps.map((step, i) => (
                                    <motion.div
                                        key={step.label}
                                        initial={{ opacity: 0, x: 12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.45 + i * 0.15 }}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "0.65rem",
                                            marginBottom: i < 2 ? "0.75rem" : 0,
                                        }}
                                    >
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <motion.div
                                                animate={
                                                    i === 2
                                                        ? {
                                                              boxShadow: [
                                                                  "0 0 0 0 rgba(5,140,66,0.4)",
                                                                  "0 0 0 8px rgba(5,140,66,0)",
                                                              ],
                                                          }
                                                        : {}
                                                }
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.5,
                                                }}
                                                style={{
                                                    width: "22px",
                                                    height: "22px",
                                                    borderRadius: "50%",
                                                    background:
                                                        i === 2 ? "#006644" : i === 1 ? "#0d9488" : "#e5e7eb",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {i < 2 ? (
                                                    <svg
                                                        width="11"
                                                        height="11"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke={i === 0 ? "#6b7280" : "#fff"}
                                                        strokeWidth="3"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                ) : (
                                                    <span style={{ color: "#fff", fontSize: "0.55rem" }}>★</span>
                                                )}
                                            </motion.div>
                                            {i < 2 && (
                                                <div
                                                    style={{
                                                        width: "2px",
                                                        height: "20px",
                                                        background: "#d1fae5",
                                                        marginTop: "4px",
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <div
                                                style={{
                                                    fontSize: "0.78rem",
                                                    fontWeight: 600,
                                                    color: i === 2 ? "#006644" : "#111827",
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {step.label}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "0.65rem",
                                                    color: "#6b7280",
                                                    marginTop: "2px",
                                                }}
                                            >
                                                {step.sub}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.8 }}
                                    style={{
                                        height: "4px",
                                        background: "linear-gradient(90deg, #e5e7eb, #006644)",
                                        borderRadius: "2px",
                                        marginTop: "1rem",
                                    }}
                                />
                            </motion.div>

                            {/* Floating badges */}
                            {[
                                { label: "Verified closure", top: "2%", right: "0%", delay: 0.7 },
                                { label: "Audit planning", bottom: "8%", left: "-4%", delay: 1 },
                            ].map((badge, bi) => (
                                <motion.div
                                    key={badge.label}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        opacity: { delay: badge.delay, type: "spring", stiffness: 200 },
                                        scale: { delay: badge.delay, type: "spring", stiffness: 200 },
                                        y: {
                                            duration: 3 + bi * 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: badge.delay,
                                        },
                                    }}
                                    style={{
                                        position: "absolute",
                                        top: badge.top,
                                        right: badge.right,
                                        bottom: badge.bottom,
                                        left: badge.left,
                                        background: "rgba(255,255,255,0.95)",
                                        backdropFilter: "blur(8px)",
                                        WebkitBackdropFilter: "blur(8px)",
                                        padding: "0.45rem 0.8rem",
                                        borderRadius: "10px",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                        border: "1px solid rgba(5,140,66,0.12)",
                                        fontSize: "0.68rem",
                                        fontWeight: 600,
                                        color: "#006644",
                                        zIndex: 3,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {badge.label}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
