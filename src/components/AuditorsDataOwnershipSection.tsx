"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const bullets = [
    "Zero vendor access to data.",
    "Complete ownership of audit history.",
    "Encrypted and secure by design.",
];

const orbitIcons = [
    {
        color: "#f97316",
        bg: "#fff7ed",
        node: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
        ),
    },
    {
        color: "#3b82f6",
        bg: "#eff6ff",
        node: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        color: "#10b981",
        bg: "#ecfdf5",
        node: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
    },
    {
        color: "#ef4444",
        bg: "#fef2f2",
        node: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
        ),
    },
    {
        color: "#8b5cf6",
        bg: "#f5f3ff",
        node: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
        ),
    },
];

function DataOwnershipVisual({ isMobile }: { isMobile: boolean }) {
    const orbitSize = isMobile ? 280 : 380;
    const orbitR = isMobile ? 108 : 148;
    const cardWidth = isMobile ? 158 : 252;
    const iconSize = isMobile ? 40 : 48;

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: "relative",
                background: "#f4f4f5",
                borderRadius: isMobile ? "24px" : "32px",
                padding: isMobile ? "24px 16px" : "48px 40px",
                minHeight: isMobile ? "340px" : "480px",
                overflow: "hidden",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: isMobile ? "100%" : orbitSize + 120,
                    maxWidth: "100%",
                    height: orbitSize,
                    marginLeft: isMobile ? 0 : "auto",
                    marginRight: isMobile ? 0 : "4%",
                }}
            >
                {/* Dashed orbit rings + icons */}
                <div
                    style={{
                        position: "absolute",
                        right: isMobile ? "50%" : 0,
                        top: "50%",
                        transform: isMobile
                            ? "translate(50%, -50%)"
                            : "translateY(-50%)",
                        width: orbitSize,
                        height: orbitSize,
                        pointerEvents: "none",
                    }}
                >
                    <svg
                        width={orbitSize}
                        height={orbitSize}
                        viewBox={`0 0 ${orbitSize} ${orbitSize}`}
                        style={{ position: "absolute", inset: 0, overflow: "visible" }}
                        aria-hidden
                    >
                        {[0, 1, 2, 3].map((ring) => {
                            const radius =
                                (orbitSize * (1 - ring * 0.22)) / 2 - 1.5;
                            return (
                                <circle
                                    key={ring}
                                    cx={orbitSize / 2}
                                    cy={orbitSize / 2}
                                    r={radius}
                                    fill="none"
                                    stroke="#c4c4c8"
                                    strokeWidth="1.5"
                                    strokeDasharray="7 9"
                                    strokeLinecap="round"
                                />
                            );
                        })}
                    </svg>

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: "absolute",
                            inset: 0,
                        }}
                    >
                        {orbitIcons.map((item, i) => {
                            const angle = (i / orbitIcons.length) * 360;
                            return (
                                <div
                                    key={i}
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        width: iconSize,
                                        height: iconSize,
                                        marginLeft: -iconSize / 2,
                                        marginTop: -iconSize / 2,
                                        transform: `rotate(${angle}deg) translate(${orbitR}px)`,
                                    }}
                                >
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: 26,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        style={{
                                            width: iconSize,
                                            height: iconSize,
                                            borderRadius: "12px",
                                            background: item.bg,
                                            border: `1px solid ${item.color}22`,
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.node}
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* White list card — top-left of orbit (Flovity) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{
                        position: "absolute",
                        top: isMobile ? "6%" : "6%",
                        left: isMobile ? "50%" : "0",
                        transform: isMobile ? "translateX(-50%)" : undefined,
                        zIndex: 2,
                        width: cardWidth,
                        background: "#fff",
                        borderRadius: isMobile ? "14px" : "18px",
                        padding: isMobile ? "14px 12px" : "26px 22px",
                        boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
                        border: "1px solid #f0f0f0",
                    }}
                >
                    {[0, 1, 2].map((row) => (
                        <div
                            key={row}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: isMobile ? "10px" : "14px",
                                marginBottom: row < 2 ? (isMobile ? "12px" : "18px") : isMobile ? "14px" : "22px",
                            }}
                        >
                            <div
                                style={{
                                    width: isMobile ? "24px" : "34px",
                                    height: isMobile ? "24px" : "34px",
                                    borderRadius: "50%",
                                    flexShrink: 0,
                                    background: row === 1 ? "#004d40" : "#dbeafe",
                                    border: row === 1 ? "none" : "1px solid #e0e7ff",
                                }}
                            />
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        height: isMobile ? "5px" : "7px",
                                        background: "#f3f4f6",
                                        borderRadius: "4px",
                                        marginBottom: isMobile ? "5px" : "7px",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    style={{
                                        height: isMobile ? "5px" : "7px",
                                        background: "#f3f4f6",
                                        borderRadius: "4px",
                                        width: row === 1 ? "75%" : "55%",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                    <div
                        style={{
                            width: "100%",
                            padding: isMobile ? "8px 0" : "12px 0",
                            borderRadius: isMobile ? "8px" : "10px",
                            background: "#004d40",
                            color: "#fff",
                            fontSize: isMobile ? "0.72rem" : "0.88rem",
                            fontWeight: 600,
                            textAlign: "center",
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        Know more
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function AuditorsDataOwnershipSection() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            id="data-ownership"
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
                    <div style={{ order: isStacked ? 2 : 1 }}>
                        <DataOwnershipVisual isMobile={isMobile} />
                    </div>

                    <div
                        style={{
                            order: isStacked ? 1 : 2,
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
                            Data Ownership
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
                                fontWeight: 500,
                                lineHeight: isMobile ? 1.15 : 1.1,
                                letterSpacing: "-0.02em",
                                margin: "0 0 1.75rem 0",
                                maxWidth: "480px",
                            }}
                        >
                            Your audit findings are your business
                        </motion.h2>

                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: "0 0 2rem 0",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                width: "100%",
                                maxWidth: "480px",
                            }}
                        >
                            {bullets.map((text, i) => (
                                <motion.li
                                    key={text}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.1 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "12px",
                                        textAlign: "left",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            background: "#006644",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginTop: "2px",
                                        }}
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: isMobile ? "0.95rem" : "1.05rem",
                                            color: "#374151",
                                            lineHeight: 1.5,
                                            fontWeight: 400,
                                        }}
                                    >
                                        {text}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45 }}
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
                </div>
            </div>
        </section>
    );
}
