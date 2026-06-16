"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STEPS = [
    {
        key: "planning",
        label: "Planning",
        detail: "Audit scope & criteria defined",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
        ),
    },
    {
        key: "evidence",
        label: "Evidence",
        detail: "Photos & records linked in context",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
            </svg>
        ),
    },
    {
        key: "findings",
        label: "Findings",
        detail: "NCs tied to root cause & owner",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
    },
    {
        key: "closure",
        label: "Verified closure",
        detail: "Effectiveness checked before close",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

export default function FounderAuditFlowCard({ isMobile }: { isMobile: boolean }) {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((s) => (s + 1) % STEPS.length);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                background: "#064e3b",
                borderRadius: "24px",
                padding: isMobile ? "24px 16px" : "32px",
                position: "relative",
                aspectRatio: isMobile ? "auto" : "1.25/1",
                minHeight: isMobile ? "420px" : "auto",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0, 166, 81, 0.15), 0 4px 12px rgba(0,0,0,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: isMobile ? "24px" : "32px",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                </div>
                <div>
                    <div style={{ color: "#fff", fontWeight: 500, fontSize: "1.05rem" }}>
                        Structured audit flow
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>
                        Built by certified ISO auditors
                    </div>
                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    position: "relative",
                    zIndex: 2,
                    paddingBottom: "8px",
                }}
            >
                {STEPS.map((step, i) => {
                    const isActive = i === activeStep;
                    const isPast = i < activeStep;

                    return (
                        <div key={step.key} style={{ display: "flex", gap: "14px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "28px",
                                    flexShrink: 0,
                                }}
                            >
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.08 : 1,
                                        background: isActive || isPast
                                            ? "rgba(255,255,255,0.95)"
                                            : "rgba(255,255,255,0.15)",
                                    }}
                                    transition={{ duration: 0.35 }}
                                    style={{
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: isActive || isPast ? "#064e3b" : "rgba(255,255,255,0.6)",
                                        border: "2px solid rgba(255,255,255,0.25)",
                                    }}
                                >
                                    {isPast ? (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    ) : (
                                        <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>{i + 1}</span>
                                    )}
                                </motion.div>
                                {i < STEPS.length - 1 && (
                                    <div
                                        style={{
                                            flex: 1,
                                            width: "2px",
                                            minHeight: "36px",
                                            background: "rgba(255,255,255,0.12)",
                                            position: "relative",
                                            overflow: "hidden",
                                            margin: "4px 0",
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                height: i < activeStep ? "100%" : i === activeStep ? "55%" : "0%",
                                            }}
                                            transition={{ duration: 0.5 }}
                                            style={{
                                                width: "100%",
                                                background: "#34d399",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            <motion.div
                                animate={{
                                    opacity: isActive ? 1 : isPast ? 0.75 : 0.45,
                                    x: isActive ? 0 : -4,
                                }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    flex: 1,
                                    background: isActive ? "#fff" : "rgba(255,255,255,0.08)",
                                    borderRadius: "14px",
                                    padding: isMobile ? "12px 14px" : "14px 16px",
                                    marginBottom: i < STEPS.length - 1 ? "10px" : 0,
                                    boxShadow: isActive ? "0 12px 32px rgba(0,0,0,0.12)" : "none",
                                    border: isActive
                                        ? "none"
                                        : "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: isActive ? "#064e3b" : "rgba(255,255,255,0.85)",
                                            display: "flex",
                                        }}
                                    >
                                        {step.icon}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.88rem",
                                            fontWeight: 600,
                                            color: isActive ? "#111827" : "#fff",
                                        }}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: "0.78rem",
                                        lineHeight: 1.45,
                                        color: isActive ? "#6b7280" : "rgba(255,255,255,0.6)",
                                    }}
                                >
                                    {step.detail}
                                </p>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    marginTop: "auto",
                    paddingTop: "16px",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                Reconnecting planning → evidence → findings → closure...
            </motion.div>

            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background: "linear-gradient(to top, #064e3b, transparent)",
                    borderRadius: "0 0 1.5rem 1.5rem",
                    pointerEvents: "none",
                    zIndex: 5,
                }}
            />
        </motion.div>
    );
}
