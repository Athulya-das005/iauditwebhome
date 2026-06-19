"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

const TEAL = "#003E3A";
const TEAL_MID = "#058c42";
const MINT = "rgba(5,140,66,0.22)";
const CORAL = "#e8846a";
const SLATE = "#64748b";
const CARD_BG = "rgba(255,255,255,0.94)";

const float = (duration: number, delay = 0) => ({
    animate: { y: [0, -10, 0] },
    transition: { repeat: Infinity, duration, ease: "easeInOut" as const, delay },
});

export default function CaseStudyAuditAnimation() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const scale = isMobile ? 0.72 : 1;

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                borderRadius: "24px",
                background: "linear-gradient(180deg, #f4f7f6 0%, #eef6f2 100%)",
                padding: isMobile ? "1.25rem 0.75rem 2rem" : "2rem 1.5rem 2.5rem",
                overflow: "hidden",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85 }}
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "640px",
                    height: isMobile ? "340px" : "400px",
                    margin: "0 auto",
                    transform: `scale(${scale})`,
                    transformOrigin: "top center",
                }}
            >
                {/* Main dashboard */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -48%)",
                        width: "100%",
                        maxWidth: "580px",
                        height: "300px",
                        background: "#f8fafc",
                        borderRadius: "20px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 24px 80px -24px rgba(0, 62, 58, 0.22)",
                        overflow: "hidden",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            height: "26px",
                            borderBottom: "1px solid #e2e8f0",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 12px",
                            gap: "5px",
                            background: "#f1f5f9",
                        }}
                    >
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#cbd5e1" }}
                            />
                        ))}
                    </div>

                    <div style={{ padding: "18px 20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
                                    <div style={{ display: "flex" }}>
                                        {["#003E3A", "#34d399", "#a7f3d0"].map((c, i) => (
                                            <div
                                                key={c}
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                    borderRadius: "50%",
                                                    background: c,
                                                    border: "2px solid #fff",
                                                    marginLeft: i ? "-7px" : 0,
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#334155" }}>
                                        Audit performance update
                                    </span>
                                </div>
                                <div style={{ fontSize: "0.62rem", color: SLATE, maxWidth: "220px", lineHeight: 1.4 }}>
                                    3 production sites · 100% audit history linked across every finding
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    fontSize: "0.62rem",
                                    color: TEAL_MID,
                                    fontWeight: 600,
                                }}
                            >
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: TEAL_MID }} />
                                3 active sites
                            </div>
                        </div>

                        <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#111827", marginBottom: "6px" }}>
                            3-site compliance trend
                        </div>

                        <div style={{ position: "relative", height: "120px" }}>
                            <svg viewBox="0 0 400 110" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="csAuditGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor={TEAL} stopOpacity="0.22" />
                                        <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <motion.path
                                    d="M0,88 L55,78 L110,72 L165,58 L220,52 L275,38 L330,32 L400,22"
                                    fill="none"
                                    stroke={TEAL}
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.8, delay: 0.3 }}
                                />
                                <motion.path
                                    d="M0,88 L55,78 L110,72 L165,58 L220,52 L275,38 L330,32 L400,22 L400,110 L0,110 Z"
                                    fill="url(#csAuditGrad)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.7 }}
                                />
                            </svg>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "0.58rem",
                                    color: "#94a3b8",
                                    fontWeight: 500,
                                }}
                            >
                                {["May", "Jun", "Jul"].map((m) => (
                                    <span key={m}>{m}</span>
                                ))}
                            </div>
                        </div>

                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                marginTop: "8px",
                                fontSize: "0.62rem",
                                fontWeight: 600,
                                color: TEAL,
                                background: "#ecfdf5",
                                padding: "3px 8px",
                                borderRadius: "6px",
                            }}
                        >
                            30 Days ↑
                        </div>
                    </div>
                </div>

                {/* Top right — audit trail donut */}
                <motion.div
                    {...float(4.5, 0.2)}
                    style={{
                        position: "absolute",
                        top: "-4px",
                        right: isMobile ? "-8px" : "-24px",
                        width: isMobile ? "190px" : "215px",
                        background: CARD_BG,
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        borderRadius: "16px",
                        padding: "14px 16px",
                        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.6)",
                        zIndex: 4,
                        border: "1px solid rgba(255,255,255,0.6)",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#111827" }}>Audit trail continuity</span>
                        <span
                            style={{
                                fontSize: "0.58rem",
                                padding: "2px 6px",
                                borderRadius: "8px",
                                border: "1px solid #e2e8f0",
                                color: SLATE,
                            }}
                        >
                            Weekly ↑
                        </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ position: "relative", width: "72px", height: "72px", flexShrink: 0 }}>
                            <svg viewBox="0 0 36 36" style={{ width: "72px", height: "72px" }}>
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#e2e8f0"
                                    strokeWidth="3"
                                />
                                <motion.path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke={TEAL}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ strokeDasharray: "0, 100" }}
                                    whileInView={{ strokeDasharray: "88, 100" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                />
                                <motion.path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke={CORAL}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ strokeDasharray: "0, 100" }}
                                    whileInView={{ strokeDasharray: "12, 100" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    style={{ transform: "rotate(316deg)", transformOrigin: "center" }}
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
                                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", lineHeight: 1 }}>100%</span>
                                <span style={{ fontSize: "0.5rem", color: SLATE }}>linked</span>
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            {[
                                { color: TEAL, label: "Audit history linked" },
                                { color: CORAL, label: "Weekly improvement" },
                                { color: "#cbd5e1", label: "Continuity target" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        fontSize: "0.52rem",
                                        color: "#334155",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                                    {item.label}
                                </div>
                            ))}
                            <div style={{ fontSize: "0.58rem", color: SLATE, marginTop: "4px" }}>Performance score</div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom left — unified audit bar chart */}
                <motion.div
                    {...float(3.8, 0.6)}
                    style={{
                        position: "absolute",
                        bottom: "8px",
                        left: isMobile ? "-12px" : "-28px",
                        width: isMobile ? "210px" : "235px",
                        background: CARD_BG,
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderRadius: "14px",
                        padding: "14px 16px",
                        boxShadow: "0 18px 36px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.6)",
                        zIndex: 3,
                        border: "1px solid rgba(255,255,255,0.6)",
                    }}
                >
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#111827", marginBottom: "12px", lineHeight: 1.35 }}>
                        Unified audit history across every site
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "68px", gap: "5px" }}>
                        {[38, 52, 44, 58, 72, 82].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    flex: 1,
                                    background: i === 4 ? TEAL : MINT,
                                    borderRadius: "4px 4px 0 0",
                                    minHeight: "4px",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Bottom right — NCR closure */}
                <motion.div
                    {...float(5, 1)}
                    style={{
                        position: "absolute",
                        bottom: "4px",
                        right: isMobile ? "-8px" : "-20px",
                        width: isMobile ? "175px" : "195px",
                        background: CARD_BG,
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderRadius: "14px",
                        padding: "14px 16px",
                        boxShadow: "0 18px 36px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.6)",
                        zIndex: 3,
                        border: "1px solid rgba(255,255,255,0.6)",
                    }}
                >
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#111827", marginBottom: "10px" }}>
                        NCR closure activity
                    </div>
                    {[
                        { label: "Site A", val: 92 },
                        { label: "Site B", val: 88 },
                        { label: "Site C", val: 96 },
                    ].map((row, i) => (
                        <div key={row.label} style={{ marginBottom: i < 2 ? "8px" : 0 }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "0.58rem",
                                    color: SLATE,
                                    marginBottom: "3px",
                                }}
                            >
                                <span>{row.label}</span>
                                <span>{row.val}%</span>
                            </div>
                            <div style={{ height: "5px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${row.val}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
                                    style={{
                                        height: "100%",
                                        background: i === 1 ? "#a7f3d0" : TEAL,
                                        borderRadius: "3px",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* QUICK OVERVIEW pill */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.8 }}
                    style={{
                        position: "absolute",
                        bottom: "42px",
                        left: "38%",
                        background: TEAL,
                        color: "#fff",
                        fontSize: "0.58rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        zIndex: 6,
                        boxShadow: "0 8px 20px rgba(0,62,58,0.35)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                    }}
                >
                    QUICK OVERVIEW
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
}
