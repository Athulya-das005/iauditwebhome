"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const pdcaNodes = [
    {
        id: "plan",
        letter: "P",
        label: "Plan",
        sub: "Audit scope & criteria",
        style: { top: "8%", left: "0" },
        linePath: "M166 188 L88 188 L88 52",
        lineIndex: 0,
    },
    {
        id: "do",
        letter: "D",
        label: "Do",
        sub: "Evidence on site",
        style: { top: "8%", right: "0" },
        linePath: "M354 188 L432 188 L432 52",
        lineIndex: 1,
    },
    {
        id: "act",
        letter: "A",
        label: "Act",
        sub: "Verified closure",
        style: { bottom: "8%", left: "0" },
        linePath: "M166 212 L88 212 L88 348",
        lineIndex: 2,
    },
    {
        id: "check",
        letter: "C",
        label: "Check",
        sub: "Findings & trends",
        style: { bottom: "8%", right: "0" },
        linePath: "M354 212 L432 212 L432 348",
        lineIndex: 3,
    },
];

function PdcaNodeInfographic({ isMobile }: { isMobile: boolean }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setActive((a) => (a + 1) % 4), 2200);
        return () => clearInterval(id);
    }, []);

    const boxW = isMobile ? 118 : 148;
    const hubW = isMobile ? 150 : 188;
    const containerH = isMobile ? 340 : 400;
    const containerW = isMobile ? 340 : 520;

    return (
        <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: "relative",
                width: "100%",
                maxWidth: `${containerW}px`,
                height: `${containerH}px`,
                margin: "0 auto",
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 520 400"
                preserveAspectRatio="xMidYMid meet"
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
                fill="none"
            >
                {pdcaNodes.map((node) => (
                    <motion.path
                        key={node.id}
                        d={node.linePath}
                        stroke={active === node.lineIndex ? "#058c42" : "#e5e7eb"}
                        strokeWidth={active === node.lineIndex ? 2 : 1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            stroke: active === node.lineIndex ? "#058c42" : "#e5e7eb",
                            strokeWidth: active === node.lineIndex ? 2.5 : 1.5,
                        }}
                        transition={{ duration: 0.4, delay: 0.2 + node.lineIndex * 0.08 }}
                    />
                ))}
            </svg>

            {/* Hub — flex wrapper keeps center fixed while inner card floats */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 3,
                    pointerEvents: "none",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                        opacity: { duration: 0.5, delay: 0.2 },
                        scale: { duration: 0.5, delay: 0.2, type: "spring" },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    style={{
                        background: "#006644",
                        borderRadius: "14px",
                        padding: isMobile ? "14px 20px" : "18px 28px",
                        boxShadow: "0 14px 36px rgba(0, 102, 68, 0.25)",
                        textAlign: "center",
                        width: hubW,
                        pointerEvents: "auto",
                    }}
                >
                    <div
                        style={{
                            fontSize: isMobile ? "0.82rem" : "0.95rem",
                            fontWeight: 600,
                            color: "#fff",
                            lineHeight: 1.35,
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        PDCA built into every audit
                    </div>
                </motion.div>
            </div>

            {pdcaNodes.map((node, i) => (
                <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                        y: [0, i % 2 === 0 ? -5 : 5, 0],
                        boxShadow:
                            active === node.lineIndex
                                ? "0 12px 28px rgba(5,140,66,0.14), 0 0 0 2px #058c42"
                                : "0 8px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
                    }}
                    transition={{
                        opacity: { delay: 0.35 + i * 0.1, duration: 0.5 },
                        y: {
                            duration: 3.5 + i * 0.35,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.25,
                        },
                        boxShadow: { duration: 0.35 },
                    }}
                    style={{
                        position: "absolute",
                        ...node.style,
                        zIndex: 2,
                        width: boxW,
                        background: active === node.lineIndex ? "#f0fdf4" : "#fff",
                        borderRadius: "14px",
                        padding: isMobile ? "12px 14px" : "14px 18px",
                        fontFamily: PP_NEUE_MONTREAL,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "6px",
                            marginBottom: "4px",
                            flexWrap: "wrap",
                        }}
                    >
                        <span
                            style={{
                                fontSize: isMobile ? "1rem" : "1.15rem",
                                fontWeight: 700,
                                color: active === node.lineIndex ? "#006644" : "#9ca3af",
                                lineHeight: 1,
                            }}
                        >
                            {node.letter}
                        </span>
                        <span
                            style={{
                                fontSize: isMobile ? "0.88rem" : "0.95rem",
                                fontWeight: 600,
                                color: "#111827",
                                lineHeight: 1.2,
                            }}
                        >
                            {node.label}
                        </span>
                    </div>
                    <div
                        style={{
                            fontSize: isMobile ? "0.62rem" : "0.68rem",
                            color: "#6b7280",
                            lineHeight: 1.4,
                        }}
                    >
                        {node.sub}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default function AuditorsPdcaSection() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            id="pdca-built-in"
            style={{
                background: "#fff",
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                overflow: "hidden",
                fontFamily: PP_NEUE_MONTREAL,
                borderTop: "1px solid #f0f0f0",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isStacked ? "1fr" : "1fr 1fr",
                        gap: isStacked ? "2.75rem" : "4rem",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            textAlign: isMobile ? "center" : "left",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: isMobile ? "center" : "flex-start",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                color: "#006644",
                                fontWeight: 500,
                                fontSize: isMobile ? "0.9rem" : "1rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <span>✦</span>
                            Grounded in PDCA
                            <span>✦</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            style={{
                                ...aboutType.sectionH2(),
                                fontSize: isMobile
                                    ? "clamp(1.85rem, 5vw, 2.25rem)"
                                    : "clamp(2rem, 3.5vw, 3rem)",
                                fontWeight: 700,
                                lineHeight: isMobile ? 1.15 : 1.1,
                                letterSpacing: "-0.02em",
                                margin: "0 0 1.25rem 0",
                                maxWidth: "520px",
                            }}
                        >
                            PDCA Built Into Every Audit
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.16 }}
                            style={{
                                ...aboutType.bodyMedium(),
                                margin: "0 0 2rem 0",
                                maxWidth: "520px",
                                paddingLeft: isMobile ? 0 : "16px",
                                borderLeft: isMobile ? "none" : "3px solid #058c42",
                            }}
                        >
                            Drive continual improvement by linking findings to verified corrective
                            actions and effectiveness checks across your entire organisation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.24 }}
                            style={{
                                width: isMobile ? "100%" : "auto",
                                maxWidth: isMobile ? "340px" : "none",
                            }}
                        >
                            <Link
                                href="https://apps.iaudit.global"
                                className="btn-outline-animate"
                                style={{
                                    padding: "0.75rem 1.75rem",
                                    fontSize: "0.9rem",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    fontFamily: PP_NEUE_MONTREAL,
                                    width: isMobile ? "100%" : "auto",
                                    borderRadius: "8px",
                                }}
                            >
                                <span>
                                    Get started free
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ marginLeft: "6px", verticalAlign: "middle" }}
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    <div>
                        <PdcaNodeInfographic isMobile={isMobile} />
                    </div>
                </div>
            </div>
        </section>
    );
}
