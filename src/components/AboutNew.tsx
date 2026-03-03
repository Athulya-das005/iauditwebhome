"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CTA from "./CTA";
import Footer from "./Footer";

/* ─── shared box shadow ─────────────────────────────────────────── */
const SHADOW = "0 4px 12px rgba(0, 102, 68, 0.08), 0 16px 48px rgba(0, 102, 68, 0.16)";

/* ─── Oscillating bi-color bar data (Card 1) ───────────────────── */
const BARS1: { v: number; c: string }[] = [
    { v: -0.28, c: "#ED6A5A" },
    { v: 0.55, c: "#ED6A5A" },
    { v: 0.80, c: "#ED6A5A" },
    { v: 1.00, c: "#ED6A5A" },
    { v: 0.65, c: "#ED6A5A" },
    { v: -0.40, c: "#ED6A5A" },
    { v: -0.80, c: "#14664A" },
    { v: -1.00, c: "#14664A" },
    { v: -0.60, c: "#14664A" },
    { v: 0.30, c: "#14664A" },
    { v: 0.90, c: "#14664A" },
    { v: 0.70, c: "#14664A" },
    { v: 0.50, c: "#14664A" },
];

/* ─── Growing teal bar data Mon-Sun (Card 2) ───────────────────── */
const BARS2 = [0.18, 0.26, 0.34, 0.48, 1.0, 0.72, 0.84];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AboutNew() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            id="about-new"
            style={{
                background: `
                    radial-gradient(ellipse 50% 60% at 0% 0%, rgba(0,166,81,0.08) 0%, transparent 100%),
                    radial-gradient(ellipse 50% 60% at 100% 0%, rgba(0,166,81,0.08) 0%, transparent 100%),
                    #fff
                `,
                overflow: "hidden",
                fontFamily: '"Pp Neue Montreal", sans-serif',
                padding: isMobile ? "5rem 0 1rem" : "7rem 0 2rem",
            }}
        >
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>

                {/* ══ Tag ══ */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    style={{ display: "flex", justifyContent: "center", marginBottom: "1.1rem" }}
                >
                    <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.41rem",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: "#006644",
                        letterSpacing: "0.01em",
                    }}>
                        <span>✦</span><span>Who We Are</span><span>✦</span>
                    </span>
                </motion.div>

                {/* ══ H1 ══ */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.07 }}
                    style={{
                        textAlign: "center",
                        fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                        fontWeight: 500,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        color: "#0d1117",
                        maxWidth: "760px",
                        margin: isMobile ? "0 auto 1rem" : "0 auto 1.2rem",
                    }}
                >
                    {isMobile ? "Audit Software That Thinks Like An Auditor" : <>Audit Software That Thinks<br />Like An Auditor</>}
                </motion.h1>

                {/* ══ Description ══ */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.14 }}
                    style={{
                        textAlign: "center",
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        color: "#6b7280",
                        maxWidth: "560px",
                        margin: isMobile ? "0 auto 2.5rem" : "0 auto 4rem",
                    }}
                >
                    We spent years conducting ISO audits before building the platform we wished existed.
                    Grounded in PDCA. Aligned with ISO&nbsp;19011. Your data stays yours.
                </motion.p>

                {/* ══ BENTO GRID ══ */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1.3fr 1fr",
                    gap: "1.1rem",
                    alignItems: "stretch",
                }}>

                    {/* ── LEFT COLUMN ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                        {/* CARD 1 · Oscillating bar chart */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{
                                background: "#fff",
                                borderRadius: "22px",
                                padding: "1.6rem",
                                boxShadow: SHADOW,
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                minHeight: isMobile ? "220px" : "260px",
                            }}
                        >
                            <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0d1117", margin: 0, lineHeight: 1.35 }}>
                                92% Average compliance score
                            </p>

                            {/* oscillating chart */}
                            <div style={{
                                flex: 1,
                                position: "relative",
                                borderRadius: "12px",
                                overflow: "hidden",
                                backgroundImage: [
                                    "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)",
                                    "linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                                ].join(","),
                                backgroundSize: "22px 22px",
                                backgroundColor: "#fff",
                            }}>
                                <div style={{
                                    position: "absolute", top: "50%", left: 0, right: 0,
                                    height: "1px", background: "rgba(0,0,0,0.09)",
                                    transform: "translateY(-50%)",
                                }} />
                                <div style={{
                                    position: "absolute", inset: 0,
                                    display: "flex", alignItems: "center",
                                    padding: "0.5rem 0.7rem", gap: "4px",
                                }}>
                                    {BARS1.map((bar, i) => {
                                        const up = bar.v > 0;
                                        const h = Math.abs(bar.v) * (isMobile ? 40 : 56);
                                        return (
                                            <div key={i} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                                                    {up && (
                                                        <motion.div
                                                            initial={{ scaleY: 0 }}
                                                            whileInView={{ scaleY: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.55, delay: 0.1 + i * 0.045, ease: "easeOut" }}
                                                            style={{ width: "100%", height: `${h}px`, borderRadius: "4px 4px 2px 2px", background: bar.c, transformOrigin: "bottom" }}
                                                        />
                                                    )}
                                                </div>
                                                <div style={{ flex: 1, display: "flex", alignItems: "flex-start", width: "100%" }}>
                                                    {!up && (
                                                        <motion.div
                                                            initial={{ scaleY: 0 }}
                                                            whileInView={{ scaleY: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.55, delay: 0.1 + i * 0.045, ease: "easeOut" }}
                                                            style={{ width: "100%", height: `${h}px`, borderRadius: "2px 2px 4px 4px", background: bar.c, transformOrigin: "top" }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>


                        </motion.div>

                        {/* CARD 4 · Chat bubbles with avatars */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                            style={{
                                background: "#fff",
                                borderRadius: "22px",
                                padding: "1.4rem 1.6rem",
                                boxShadow: SHADOW,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "0.75rem",
                                minHeight: isMobile ? "150px" : "170px",
                            }}
                        >
                            {/* Bubble 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -28 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
                                style={{
                                    alignSelf: "flex-start",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0px",
                                    width: "78%",
                                    height: "48px",
                                    borderRadius: "28px 28px 28px 6px",
                                    background: "#F4A27E",
                                    paddingRight: "14px",
                                    overflow: "hidden",
                                }}
                            >
                                <div style={{
                                    width: "48px", height: "48px", borderRadius: "50%", flexShrink: 0,
                                    background: "#c5784a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                                }}>
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.75)" />
                                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(255,255,255,0.75)" />
                                    </svg>
                                </div>
                                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px", paddingLeft: "10px" }}>
                                    <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.6)", width: "85%" }} />
                                    <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.4)", width: "65%" }} />
                                </div>
                            </motion.div>

                            {/* Bubble 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: 28 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.65, duration: 0.45, ease: "easeOut" }}
                                style={{
                                    alignSelf: "flex-end",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0px",
                                    width: "68%",
                                    height: "48px",
                                    borderRadius: "28px 28px 6px 28px",
                                    background: "#7EC8C4",
                                    paddingRight: "14px",
                                    overflow: "hidden",
                                }}
                            >
                                <div style={{
                                    width: "48px", height: "48px", borderRadius: "50%", flexShrink: 0,
                                    background: "#4a9e9a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                                }}>
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.75)" />
                                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(255,255,255,0.75)" />
                                    </svg>
                                </div>
                                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px", paddingLeft: "10px" }}>
                                    <div style={{ height: "5px", borderRadius: "3px", background: "rgba(50,80,80,0.35)", width: "90%" }} />
                                    <div style={{ height: "5px", borderRadius: "3px", background: "rgba(50,80,80,0.25)", width: "70%" }} />
                                </div>
                            </motion.div>

                            <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0d1117", margin: 0 }}>
                                Centralised audit evidence
                            </p>
                        </motion.div>
                    </div>

                    {/* ── CENTER COLUMN · Tall teal growing bars ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
                        style={{
                            background: "#fff",
                            borderRadius: "22px",
                            padding: isMobile ? "1.25rem" : "1.6rem",
                            boxShadow: SHADOW,
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: isMobile ? "1.1rem" : 0,
                        }}
                    >
                        <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0d1117", margin: "0 0 1.5rem", lineHeight: 1.35 }}>
                            PDCA in every audit
                        </p>

                        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ display: "flex", alignItems: "flex-end", gap: isMobile ? "6px" : "9px", minHeight: isMobile ? "220px" : "290px" }}>
                                {BARS2.map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.65, delay: 0.25 + i * 0.07, ease: "easeOut" }}
                                        style={{
                                            flex: 1,
                                            height: `${h * (isMobile ? 200 : 270)}px`,
                                            borderRadius: "6px 6px 3px 3px",
                                            transformOrigin: "bottom",
                                            background: i === 4
                                                ? "rgba(20,102,74,0.88)"
                                                : `rgba(88,196,192,${0.28 + h * 0.62})`,
                                        }}
                                    />
                                ))}
                            </div>
                            <div style={{ display: "flex", paddingTop: "0.5rem" }}>
                                {DAYS.map((d) => (
                                    <span key={d} style={{ flex: 1, textAlign: "center", fontSize: "0.68rem", color: "#9ca3af" }}>{d}</span>
                                ))}
                            </div>
                        </div>


                    </motion.div>

                    {/* ── RIGHT COLUMN ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                        {/* CARD 3 · Audit deploy */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{
                                background: "#fff",
                                borderRadius: "22px",
                                padding: "1.6rem",
                                boxShadow: SHADOW,
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.1rem",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#0d1117" }}>0 vendor access to audit data</span>
                                <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>View all</span>
                            </div>

                            <div style={{ display: "flex", gap: "8px", alignItems: "flex-end", justifyContent: "flex-start" }}>
                                {([
                                    { bg: "#FDBA74", name: "Victoria" },
                                    { bg: "#93C5FD", name: "David J." },
                                    { bg: "#FDE68A", name: "Mike" },
                                    { bg: "#D8B4FE", name: "Steven" },
                                ] as { bg: string; name: string }[]).map((u, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.09, type: "spring", stiffness: 220, damping: 14 }}
                                        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}
                                    >
                                        <div style={{
                                            width: "50px", height: "58px", borderRadius: "28px",
                                            background: u.bg, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                                        }}>
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="8" r="4" fill="rgba(80,60,40,0.45)" />
                                                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(80,60,40,0.35)" />
                                            </svg>
                                        </div>
                                        <span style={{ fontSize: "0.62rem", color: "#6b7280", fontWeight: 500, whiteSpace: "nowrap" }}>{u.name}</span>
                                    </motion.div>
                                ))}

                                <div style={{
                                    width: "50px", height: "58px", borderRadius: "28px",
                                    border: "2px dashed #d1d5db", display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "1.2rem", color: "#9ca3af", flexShrink: 0,
                                }}>+</div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", padding: "0.55rem 0.85rem", background: "#f9fafb", borderRadius: "10px" }}>
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                                    <path d="M0 7 L4 2 L9 11 L13 5 L18 7" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                                <span style={{ fontWeight: 700, fontSize: "1rem", color: "#0d1117" }}>$2,760</span>
                                <span style={{ marginLeft: "auto", color: "#9ca3af", fontSize: "0.85rem" }}>▶</span>
                            </div>
                        </motion.div>

                        {/* CARD 5 · Circular mic icon */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                            style={{
                                background: "#fff",
                                borderRadius: "22px",
                                padding: "1.6rem",
                                boxShadow: SHADOW,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "1.1rem",
                                textAlign: "center",
                                minHeight: isMobile ? "150px" : "170px",
                            }}
                        >
                            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <motion.div
                                    animate={{ scale: [1, 1.28, 1], opacity: [0.35, 0, 0.35] }}
                                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ position: "absolute", width: "72px", height: "72px", borderRadius: "50%", background: "rgba(249,115,22,0.18)" }}
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.06, 1] }}
                                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        width: "58px", height: "58px", borderRadius: "50%", background: "#f97316",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        boxShadow: "0 6px 22px rgba(249,115,22,0.30)", position: "relative", zIndex: 1,
                                    }}
                                >
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                        <rect x="9" y="2" width="6" height="11" rx="3" fill="white" />
                                        <path d="M5 11a7 7 0 0 0 14 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                                        <line x1="12" y1="18" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="9" y1="22" x2="15" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </motion.div>
                            </div>

                            <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#0d1117", margin: 0, lineHeight: 1.5, maxWidth: "165px" }}>
                                5x Faster execution cycles
                            </p>
                        </motion.div>

                    </div>

                </div>
                {/* end bento grid */}

            </div>

            {/* ══════════════════════════════════════════════════
                SECTION 2 — Why we created iAudit Global
            ══════════════════════════════════════════════════ */}
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: isMobile ? "3rem 1.25rem" : "6rem 2rem 5rem" }}>

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem", color: "#006644", fontWeight: 500, fontSize: "0.8rem" }}
                >
                    <span>✦</span>
                    <span>Built for better audits</span>
                    <span>✦</span>
                </motion.div>

                {/* H2 + description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: isMobile ? "2rem" : "3.5rem", maxWidth: "580px" }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.07 }}
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            color: "#0d1117",
                            margin: 0,
                        }}
                    >
                        Why We Created iAudit Global
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.14 }}
                        style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6b7280", margin: 0 }}
                    >
                        We created iAudit Global after seeing internal audits buried in spreadsheets, emails and
                        consultant files. Our goal is to give organisations one place to run ISO audits, keep their
                        audit history, and turn findings into real improvement.
                    </motion.p>
                </div>

                {/* 3 Feature Cards */}
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "1.2rem" }}>

                    {/* ── CARD A · Structured audits and PDCA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <motion.div
                            whileHover={{ borderColor: "#006644" }}
                            transition={{ duration: 0.25 }}
                            style={{
                                border: isMobile ? "10px solid #fff" : "20px solid #fff",
                                borderRadius: "28px",
                                overflow: "hidden",
                                background: "#fff",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.04), 0 10px 36px rgba(0,0,0,0.08)",
                                cursor: "pointer",
                                transition: "border-color 0.25s ease",
                            }}
                        >
                            <div style={{
                                background: "#f3f4f6",
                                borderRadius: "10px",
                                padding: isMobile ? "1.2rem 1rem" : "1.4rem 1.2rem 1rem",
                                minHeight: isMobile ? "200px" : "240px",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <p style={{ fontWeight: 600, fontSize: "0.8rem", color: "#111827", margin: "0 0 0.2rem" }}>
                                    Audit performance insights simplified
                                </p>
                                <p style={{ fontSize: "0.65rem", color: "#9ca3af", margin: "0 0 1rem" }}>
                                    Track audit actions and findings in real time with clear metrics.
                                </p>
                                <div style={{ flex: 1, position: "relative" }}>
                                    <svg width="100%" height="100" viewBox="0 0 280 80" style={{ overflow: "visible" }}>
                                        {[40, 80, 110, 140, 165, 190, 215, 240, 262].map((x, i) => (
                                            <line key={i} x1={x} y1="0" x2={x} y2="65" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 3" />
                                        ))}
                                        <motion.path
                                            d="M10 55 C40 50,55 35,80 30 C105 25,120 40,145 38 C165 36,185 15,210 10 C230 6,255 20,275 22"
                                            fill="none" stroke="#0d9488" strokeWidth="2.2" strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                                        />
                                        <motion.path
                                            d="M10 65 C35 62,55 52,80 48 C108 44,125 55,148 50 C168 46,190 30,215 44 C235 55,260 50,275 42"
                                            fill="none" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
                                        />
                                        <motion.circle cx="165" cy="38" r="4" fill="#ef4444"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 12 }}
                                        />
                                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((m, i) => (
                                            <text key={m} x={10 + i * 25} y="78" fontSize="6.5" fill="#9ca3af" textAnchor="middle">{m}</text>
                                        ))}
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                        {/* text outside the white card */}
                        <div style={{ padding: isMobile ? "1rem 0" : "1.4rem 0.2rem 0" }}>
                            <h3 style={{ fontWeight: 700, fontSize: isMobile ? "1.1rem" : "1.2rem", color: "#0d1117", margin: "0 0 0.6rem" }}>Structured Audits And PDCA</h3>
                            <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.7, margin: "0 0 1rem" }}>
                                Run ISO 9001, 14001, 45001 and 27001 audits in a platform that follows the full PDCA cycle from planning through to follow up.
                            </p>
                            <a href="#" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#006644", display: "inline-flex", alignItems: "center", gap: "0.3rem", textDecoration: "none" }}>
                                Explore more <span>→</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* ── CARD B · Unified audit history ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <motion.div
                            whileHover={{ borderColor: "#006644" }}
                            transition={{ duration: 0.25 }}
                            style={{
                                border: isMobile ? "10px solid #fff" : "20px solid #fff",
                                borderRadius: "28px",
                                overflow: "hidden",
                                background: "#fff",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.04), 0 10px 36px rgba(0,0,0,0.08)",
                                cursor: "pointer",
                                transition: "border-color 0.25s ease",
                            }}
                        >
                            <div style={{
                                background: "#f3f4f6",
                                borderRadius: "10px",
                                padding: "1.4rem 1.2rem",
                                minHeight: "240px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.7rem",
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
                                    style={{ background: "white", borderRadius: "10px", padding: "0.9rem 1rem", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
                                >
                                    <p style={{ fontWeight: 600, fontSize: "0.75rem", color: "#111827", margin: "0 0 0.6rem" }}>Highlights:</p>
                                    {["Context-aware audit trails", "Personalised audit experience"].map((item, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.15 }}
                                            style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.35rem" }}
                                        >
                                            <svg width="9" height="9" viewBox="0 0 10 10"><polygon points="5,0 10,5 5,10 0,5" fill="#f97316" /></svg>
                                            <span style={{ fontSize: "0.72rem", color: "#374151" }}>{item}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.5 }}
                                    style={{ background: "white", borderRadius: "10px", padding: "0.75rem 1rem", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", display: "flex", alignItems: "center", gap: "0.6rem" }}
                                >
                                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="2">
                                            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600, fontSize: "0.72rem", color: "#111827", margin: 0 }}>Unified audit evidence</p>
                                        <p style={{ fontSize: "0.63rem", color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>One place for all findings and actions.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div style={{ padding: isMobile ? "1rem 0" : "1.4rem 0.2rem 0" }}>
                            <h3 style={{ fontWeight: 700, fontSize: isMobile ? "1.1rem" : "1.2rem", color: "#0d1117", margin: "0 0 0.6rem" }}>Unified Audit History</h3>
                            <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.7, margin: "0 0 1rem" }}>
                                Keep every finding, action and piece of evidence in one shared audit trail, so nothing is lost when people or consultants move on.
                            </p>
                            <a href="#" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#006644", display: "inline-flex", alignItems: "center", gap: "0.3rem", textDecoration: "none" }}>
                                Explore more <span>→</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* ── CARD C · From audits to improvement ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <motion.div
                            whileHover={{ borderColor: "#006644" }}
                            transition={{ duration: 0.25 }}
                            style={{
                                border: isMobile ? "10px solid #fff" : "20px solid #fff",
                                borderRadius: "28px",
                                overflow: "hidden",
                                background: "#fff",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.04), 0 10px 36px rgba(0,0,0,0.08)",
                                cursor: "pointer",
                                transition: "border-color 0.25s ease",
                            }}
                        >
                            <div style={{
                                background: "#f3f4f6",
                                borderRadius: "10px",
                                padding: "1.4rem 1.2rem",
                                minHeight: "240px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "0.75rem",
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.45 }}
                                    style={{ display: "flex", alignItems: "center", width: "82%", height: "46px", borderRadius: "28px 28px 28px 6px", background: "#F4A27E", overflow: "hidden", paddingRight: "12px" }}
                                >
                                    <div style={{ width: "46px", height: "46px", borderRadius: "50%", flexShrink: 0, background: "#c5784a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.75)" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(255,255,255,0.75)" /></svg>
                                    </div>
                                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px", paddingLeft: "10px" }}>
                                        <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.65)", width: "88%" }} />
                                        <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.4)", width: "64%" }} />
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.55, type: "spring", stiffness: 220, damping: 14 }}
                                    style={{ alignSelf: "flex-end", marginRight: "0.3rem", width: "30px", height: "30px", borderRadius: "50%", background: "#d1d5db", display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="#9ca3af" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#9ca3af" /></svg>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.65, duration: 0.45 }}
                                    style={{ display: "flex", alignItems: "center", width: "75%", height: "46px", borderRadius: "28px 28px 28px 6px", background: "#F4A27E", overflow: "hidden", paddingRight: "12px" }}
                                >
                                    <div style={{ width: "46px", height: "46px", borderRadius: "50%", flexShrink: 0, background: "#c5784a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.75)" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(255,255,255,0.75)" /></svg>
                                    </div>
                                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px", paddingLeft: "10px" }}>
                                        <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.65)", width: "78%" }} />
                                        <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.4)", width: "55%" }} />
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ alignSelf: "flex-end", color: "#006644", fontSize: "1rem" }}
                                >▶</motion.div>
                            </div>
                        </motion.div>
                        <div style={{ padding: isMobile ? "1rem 0" : "1.4rem 0.2rem 0" }}>
                            <h3 style={{ fontWeight: 700, fontSize: isMobile ? "1.1rem" : "1.2rem", color: "#0d1117", margin: "0 0 0.6rem" }}>From Audits To Improvement</h3>
                            <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.7, margin: "0 0 1rem" }}>
                                Link audits to clear owners and actions, track progress, and see where risks and nonconformities are reducing over time.
                            </p>
                            <a href="#" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#006644", display: "inline-flex", alignItems: "center", gap: "0.3rem", textDecoration: "none" }}>
                                Explore more <span>→</span>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
            {/* end section 2 */}

            {/* ══════════════════════════════════════════════════
                SECTION 3 — Audit Mate
            ══════════════════════════════════════════════════ */}
            <div style={{
                maxWidth: "1240px",
                margin: "0 auto",
                padding: isMobile ? "3rem 1.25rem 4rem" : "5rem 2rem 7rem",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
                gap: isMobile ? "3rem" : "5rem",
                alignItems: "center",
            }}>

                {/* ── LEFT SIDE · Animated Audit Mate Card ── */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    style={{
                        background: "#fff",
                        borderRadius: "28px",
                        padding: isMobile ? "2rem 1.5rem" : "2.8rem 2.4rem 2.4rem",
                        boxShadow: "0 6px 16px rgba(0, 102, 68, 0.12), 0 24px 64px rgba(0, 102, 68, 0.22)",
                    }}
                >
                    {/* Sparkle icon with pulse */}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.4rem" }}>
                        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: "absolute",
                                    width: "88px", height: "88px",
                                    borderRadius: "50%",
                                    background: "rgba(249,115,22,0.12)",
                                }}
                            />
                            <div style={{
                                width: "68px", height: "68px",
                                borderRadius: "50%",
                                background: "#f9fafb",
                                border: "1px solid #f3f4f6",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                position: "relative", zIndex: 1,
                            }}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 4 L18 13 L27 16 L18 19 L16 28 L14 19 L5 16 L14 13 Z" fill="#f97316" />
                                    <circle cx="25" cy="8" r="2.5" fill="#f97316" opacity="0.6" />
                                    <circle cx="8" cy="25" r="1.8" fill="#f97316" opacity="0.4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        style={{ textAlign: "center", fontWeight: 700, fontSize: "1.25rem", color: "#0d1117", margin: "0 0 2rem" }}
                    >
                        Audit Mate
                    </motion.p>

                    {/* Top bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}
                    >
                        <span style={{ fontSize: "0.82rem", color: "#9ca3af" }}>What can Audit Mate do?</span>
                        <span style={{ fontSize: "0.82rem", color: "#006644", fontWeight: 600, cursor: "pointer" }}>Generate a new report</span>
                    </motion.div>

                    {/* Chat input */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.45 }}
                        style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: "12px",
                            padding: "1rem 1.1rem",
                            background: "#fff",
                            marginBottom: "0.75rem",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "0.75rem" }}>
                            {/* left-side blinking cursor like real input */}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1.1, repeat: Infinity }}
                                style={{ display: "inline-block", width: "2px", height: "16px", background: "#6b7280", borderRadius: "1px", flexShrink: 0 }}
                            />
                            <span style={{ fontSize: "0.9rem", color: "#9ca3af", fontFamily: '"Pp Neue Montreal", sans-serif' }}>Describe your task…</span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 220, damping: 14 }}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "6px",
                                background: "#f3f4f6", borderRadius: "20px",
                                padding: "0.3rem 0.75rem",
                                fontSize: "0.78rem", color: "#374151", fontWeight: 500,
                            }}
                        >
                            <svg width="12" height="12" viewBox="0 0 12 12">
                                <path d="M6 2 L7 5.5 L10.5 6 L7 6.5 L6 10 L5 6.5 L1.5 6 L5 5.5 Z" fill="#f97316" />
                                <circle cx="10" cy="3" r="1" fill="#f97316" opacity="0.55" />
                            </svg>
                            Task type
                        </motion.div>
                    </motion.div>

                    {/* Suggested prompts */}
                    {["Draft ISO 9001 audit checklist", "Summarise clause 8.2 requirements", "Create PDCA action plan"].map((prompt, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.65 + i * 0.12, duration: 0.4 }}
                            style={{
                                display: "flex", alignItems: "center", gap: "0.6rem",
                                padding: "0.7rem 0.9rem",
                                borderRadius: "8px",
                                background: "#f9fafb",
                                marginBottom: "0.45rem",
                                cursor: "pointer",
                                borderLeft: "2px solid transparent",
                            }}
                        >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M6 1.5 L7 5 L10.5 6 L7 7 L6 10.5 L5 7 L1.5 6 L5 5 Z" fill="#f97316" opacity="0.7" />
                            </svg>
                            <span style={{ fontSize: "0.8rem", color: "#374151" }}>{prompt}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── RIGHT SIDE · Tag + H2 + desc + 2 features ── */}
                <div>
                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.2rem", color: "#006644", fontWeight: 500, fontSize: "0.8rem" }}
                    >
                        <span>✦</span>
                        <span>Meet Audit Mate</span>
                        <span>✦</span>
                    </motion.div>

                    {/* H2 */}
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        style={{
                            fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
                            fontWeight: 500,
                            lineHeight: 1.12,
                            letterSpacing: "-0.03em",
                            color: "#0d1117",
                            margin: "0 0 1.2rem",
                        }}
                    >
                        Audit Mate – Your ISO Co-Pilot Inside iAudit
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.22 }}
                        style={{ fontSize: "0.97rem", lineHeight: 1.75, color: "#6b7280", margin: "0 0 2.5rem" }}
                    >
                        Audit Mate lives inside iAudit Global to help you plan and document internal ISO audits faster.
                        It supports ISO 9001, 14001, 45001 and 27001, following ISO&nbsp;19011 and PDCA so auditors
                        spend more time on real risks and less time wrestling with documents.
                    </motion.p>

                    {/* Feature 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                        style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingBottom: "1.8rem", borderBottom: "1px solid #f3f4f6" }}
                    >
                        <div style={{
                            width: "40px", height: "40px", flexShrink: 0,
                            borderRadius: "10px", background: "#f0fdf4",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, fontSize: "1rem", color: "#0d1117", margin: "0 0 0.45rem" }}>
                                Speed Up Audit Planning And Checklists
                            </p>
                            <p style={{ fontSize: "0.92rem", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
                                Use Audit Mate to draft audit plans, clause-aligned checklists and sample questions,
                                giving every audit a structured starting point.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.38 }}
                        style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingTop: "1.8rem" }}
                    >
                        <div style={{
                            width: "40px", height: "40px", flexShrink: 0,
                            borderRadius: "10px", background: "#f0fdf4",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, fontSize: "1rem", color: "#0d1117", margin: "0 0 0.45rem" }}>
                                Keep Audit Data Where It Belongs
                            </p>
                            <p style={{ fontSize: "0.92rem", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
                                Ask Audit Mate for clause guidance, evidence examples and PDCA links,
                                with conversations staying yours.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
            {/* end section 3 */}

            {/* ══════════════════════════════════════════════════
                SECTION 4 — Principles we follow
            ══════════════════════════════════════════════════ */}
            <div style={{ background: "#f7f8f9", padding: isMobile ? "3rem 0" : "4rem 0 2rem" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>

                    {/* ── Center header ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.4rem", marginBottom: "1.2rem", color: "#006644", fontWeight: 500, fontSize: "0.8rem" }}
                    >
                        <span>✦</span><span>Principles We Follow</span><span>✦</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.07 }}
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            color: "#0d1117",
                            margin: "0 auto 1.1rem",
                            maxWidth: "680px",
                        }}
                    >
                        The Principles Behind How We Build iAudit
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.14 }}
                        style={{ textAlign: "center", fontSize: "0.97rem", lineHeight: 1.7, color: "#6b7280", maxWidth: "560px", margin: isMobile ? "0 auto 2.5rem" : "0 auto 3.5rem" }}
                    >
                        Our work is guided by a few simple rules: respect the standards, respect the data, and
                        make audits work in practice, not just on paper.
                    </motion.p>

                    {/* ── 3-card grid ── */}
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: "1.2rem", alignItems: "stretch" }}>

                        {/* CARD 1 · Evidence before assumptions — bar chart */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{
                                background: "#fff",
                                borderRadius: "20px",
                                padding: isMobile ? "1.5rem" : "2rem",
                                boxShadow: "0 4px 12px rgba(30,30,30,0.08), 0 16px 48px rgba(30,30,30,0.14)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                            }}
                        >
                            {/* Oscillating bar chart illustration */}
                            <div style={{ position: "relative", height: "160px", borderRadius: "12px", overflow: "hidden", background: "#f9fafb" }}>
                                {/* grid lines */}
                                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "rgba(0,0,0,0.08)", transform: "translateY(-50%)" }} />
                                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 1rem", gap: "5px" }}>
                                    {([
                                        { v: -0.3, c: "#ED6A5A" }, { v: 0.55, c: "#ED6A5A" }, { v: 0.85, c: "#ED6A5A" },
                                        { v: 1.0, c: "#ED6A5A" }, { v: 0.6, c: "#ED6A5A" }, { v: -0.45, c: "#14664A" },
                                        { v: -0.85, c: "#14664A" }, { v: -1.0, c: "#14664A" }, { v: -0.55, c: "#14664A" },
                                        { v: 0.35, c: "#14664A" }, { v: 0.9, c: "#14664A" }, { v: 0.7, c: "#14664A" },
                                    ] as { v: number; c: string }[]).map((bar, i) => {
                                        const up = bar.v > 0;
                                        const h = Math.abs(bar.v) * 52;
                                        return (
                                            <div key={i} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                                                    {up && <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: "easeOut" }} style={{ width: "100%", height: `${h}px`, borderRadius: "3px 3px 2px 2px", background: bar.c, transformOrigin: "bottom" }} />}
                                                </div>
                                                <div style={{ flex: 1, display: "flex", alignItems: "flex-start", width: "100%" }}>
                                                    {!up && <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: "easeOut" }} style={{ width: "100%", height: `${h}px`, borderRadius: "2px 2px 3px 3px", background: bar.c, transformOrigin: "top" }} />}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0d1117", margin: "0 0 0.5rem", textAlign: "center" }}>Evidence Before Assumptions</h3>
                                <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.7, margin: 0, textAlign: "center" }}>
                                    Every feature starts from how internal ISO audits actually run in the field, not from what looks good in a slide deck.
                                </p>
                            </div>
                        </motion.div>

                        {/* CARD 2 · Customer-owned audit data — feature pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                            style={{
                                background: "#fff",
                                borderRadius: "20px",
                                padding: isMobile ? "1.5rem" : "2rem",
                                boxShadow: "0 4px 12px rgba(30,30,30,0.08), 0 16px 48px rgba(30,30,30,0.14)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                            }}
                        >
                            {/* Animated feature pill rows */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", padding: "1.2rem 0.6rem" }}>
                                {([
                                    { label: "ISO evidence vault", icon: "🗂️", active: true },
                                    { label: "Audit findings log", icon: "📋", active: false },
                                    { label: "PDCA action tracker", icon: "🔄", active: true, highlight: true },
                                ] as { label: string; icon: string; active: boolean; highlight?: boolean }[]).map((pill, i) => (
                                    <motion.div
                                        key={i}
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
                                        {/* settings icon */}
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={pill.highlight ? "rgba(255,255,255,0.8)" : "#9ca3af"} strokeWidth="1.8" strokeLinecap="round">
                                            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                    </motion.div>
                                ))}
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0d1117", margin: "0 0 0.5rem", textAlign: "center" }}>Customer-Owned Audit Data</h3>
                                <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.7, margin: 0, textAlign: "center" }}>
                                    Your findings, evidence and reports stay with your organisation. We host the platform, but we do not access or mine your audit history.
                                </p>
                            </div>
                        </motion.div>

                        {/* CARD 3 · PDCA — dark green with arcs */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
                            style={{
                                background: "#0a4a35",
                                borderRadius: "20px",
                                padding: isMobile ? "1.5rem" : "2.2rem",
                                boxShadow: "0 2px 6px rgba(0,102,68,0.08), 0 10px 32px rgba(0,102,68,0.18)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Decorative arcs */}
                            <div style={{ position: "absolute", bottom: "-40px", right: "-40px", pointerEvents: "none" }}>
                                <motion.div
                                    animate={{ rotate: [0, 6, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                                        <circle cx="180" cy="180" r="120" stroke="rgba(255,255,255,0.06)" strokeWidth="36" fill="none" />
                                        <circle cx="180" cy="180" r="80" stroke="rgba(255,255,255,0.05)" strokeWidth="28" fill="none" />
                                        <circle cx="180" cy="180" r="44" stroke="rgba(255,255,255,0.08)" strokeWidth="18" fill="none" />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* PDCA cycle icons */}
                            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
                                {["Plan", "Do", "Check", "Act"].map((step, i) => (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 200, damping: 14 }}
                                        style={{
                                            width: "42px", height: "42px",
                                            borderRadius: "10px",
                                            background: i === 3 ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.09)",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            display: "flex", flexDirection: "column",
                                            alignItems: "center", justifyContent: "center",
                                            gap: "2px",
                                        }}
                                    >
                                        <span style={{ fontSize: "0.55rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "0.02em" }}>{step}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <h3 style={{ fontWeight: 700, fontSize: "1.45rem", color: "#fff", margin: "0 0 1rem", lineHeight: 1.25 }}>
                                    PDCA In Real Use, Not Just In Diagrams
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                                    iAudit is built so Plan, Do, Check, Act runs through audit planning, execution, follow up and reviews, not just the documentation.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                    {/* end 3-card grid */}

                    {/* ── 2-card grid row ── */}
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.45fr 1fr", gap: "1.2rem", marginTop: "1.2rem" }}>

                        {/* CARD 4 · Clarity over complexity */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            style={{
                                background: "#dcfce7",
                                borderRadius: "20px",
                                padding: "0",
                                boxShadow: "0 4px 12px rgba(30,30,30,0.08), 0 16px 48px rgba(30,30,30,0.14)",
                                display: "flex",
                                overflow: "hidden",
                                minHeight: "280px"
                            }}
                        >
                            {/* Left Text Content (60%) */}
                            <div style={{ flex: isMobile ? "1" : "0 0 48%", padding: isMobile ? "1.5rem" : "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <h3 style={{ fontWeight: 700, fontSize: isMobile ? "1.2rem" : "1.32rem", color: "#0d1117", margin: "0 0 0.8rem", letterSpacing: "-0.02em" }}>
                                    Clarity Over Complexity
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.5, margin: "0 0 1.25rem" }}>
                                    Auditors and auditees see only what they need, with clean workflows across sites and standards instead of layers of configuration.
                                </p>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {(["Simplified auditor dashboards", "Evidence-first workflow design", "Automated clause mapping"]).map((bullet, i) => (
                                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.84rem", color: "#374151", fontWeight: 500 }}>
                                            <div style={{ width: "3.5px", height: "3.5px", borderRadius: "50%", background: "#006644" }} />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Visual — Clean audit illustration */}
                            <div style={{ flex: 1, background: "rgba(255,255,255,0.6)", borderLeft: "1px solid rgba(0,102,68,0.08)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", padding: "1.5rem" }}>
                                {/* Simplified Dashboard Mini */}
                                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} style={{ background: "#fff", borderRadius: "12px", padding: "1rem", marginBottom: "0.6rem", border: "1px solid #e5e7eb" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.7rem" }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                                        <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#111827" }}>Auditor Dashboard</span>
                                    </div>
                                    <div style={{ display: "flex", gap: "0.4rem" }}>
                                        {[65, 82, 45, 90, 70].map((h, i) => <motion.div key={i} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }} style={{ flex: 1, height: `${h * 0.4}px`, borderRadius: "3px", background: i === 3 ? "#006644" : "#d1fae5", transformOrigin: "bottom" }} />)}
                                    </div>
                                </motion.div>
                                {/* Workflow steps */}
                                {(["Evidence uploaded", "Clause mapped", "Finding linked"]).map((step, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.45rem 0.75rem", marginBottom: "0.35rem", background: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                                        <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span style={{ fontSize: "0.7rem", fontWeight: 500, color: "#374151" }}>{step}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CARD 5 · Security by default (Squared) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                            style={{
                                background: "#fff",
                                borderRadius: "20px",
                                padding: isMobile ? "1.5rem" : "1.75rem",
                                boxShadow: "0 4px 12px rgba(30,30,30,0.08), 0 16px 48px rgba(30,30,30,0.14)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <h3 style={{ fontWeight: 700, fontSize: "1.2rem", color: "#0d1117", margin: "0 0 0.5rem", textAlign: "center", letterSpacing: "-0.01em" }}>
                                Security By Default
                            </h3>
                            <p style={{ fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.4, margin: "0 0 1.25rem", textAlign: "center" }}>
                                We align our design with ISO 27001 thinking, using strong access controls.
                            </p>

                            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#111827", textAlign: "center", marginBottom: "0.2rem" }}>
                                    Upgrades for premium agents
                                </p>

                                {([
                                    { label: "AI tools", date: "2nd Jan 2022", value: "-$150", negative: true, icon: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" },
                                    { label: "AI integration", date: "4th Apr 2022", value: "+$290", negative: false, icon: "M3 3h7v7H3V3zM14 3h7v7h-7V3zM14 14h7v7h-7v-7zM3 14h7v7H3v-7z" },
                                    { label: "AI assistant", date: "15th Oct 2022", value: "-$180", negative: true, icon: "M4 6h16M4 12h16M4 18h7" },
                                ] as { label: string; date: string; value: string; negative: boolean; icon: string }[]).map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "0.65rem 0.8rem",
                                            borderRadius: "10px",
                                            background: "#f9fafb",
                                            border: "1px solid #f3f4f6"
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                            <div style={{ width: "26px", height: "26px", borderRadius: "6px", background: "#fff", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5">
                                                    <path d={feature.icon} />
                                                </svg>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#111827", margin: 0 }}>{feature.label}</p>
                                                <p style={{ fontSize: "0.62rem", color: "#9ca3af", margin: 0 }}>{feature.date}</p>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: feature.negative ? "#3b82f6" : "#10b981" }}>{feature.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                    {/* end 2-card grid row */}

                </div>
            </div>
            {/* end section 4 */}

            {/* SECTION 5: Our Journey (Milestones) */}
            <section style={{
                padding: "4rem 0 2.5rem",
                background: "#fff",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "3rem 1.25rem 2rem" : "0 2rem" }}>

                    {/* Section Header */}
                    <div style={{ marginBottom: isMobile ? "2.5rem" : "5rem", maxWidth: "800px", textAlign: "left" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "0.4rem",
                                marginBottom: "1.2rem",
                                color: "#006644",
                                fontWeight: 500,
                                fontSize: "0.8rem"
                            }}
                        >
                            <span>✦</span><span>Our Journey So Far</span><span>✦</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.07 }}
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                color: "#0d1117",
                                letterSpacing: "-0.03em",
                                marginBottom: "1.1rem"
                            }}
                        >
                            How iAudit Global Is Growing
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.14 }}
                            style={{
                                fontSize: "0.97rem",
                                color: "#6b7280",
                                lineHeight: 1.7,
                                maxWidth: "600px"
                            }}
                        >
                            We are still early in our journey but every step has been shaped by real conversations with auditors and real problems worth solving.
                        </motion.p>
                    </div>

                    {/* Milestones Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: isMobile ? "2.5rem" : "4rem",
                        marginTop: "2rem"
                    }}>
                        {([
                            {
                                title: "Founded By Certified ISO Auditors",
                                desc: "iAudit Global was started in 2024 by PDCA ISO audit specialists with over 20 years of hands-on experience in internal audits, implementation and consultancy.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "42px", height: "42px" }}>
                                        <path d="M3 16.5L10 9.5L14 13.5L21 6.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 6.5H21V11.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <rect x="3" y="18" width="4" height="2" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                                        <rect x="9" y="15" width="4" height="5" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                                        <rect x="15" y="12" width="4" height="8" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                                    </svg>
                                )
                            },
                            {
                                title: "Pilot Programme Launched",
                                desc: "We opened our pilot to a small group of ISO professionals across multiple industries and countries to shape the platform with honest, practical feedback.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "42px", height: "42px" }}>
                                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                                        <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                                        <path d="M12 22.08V12" />
                                        <path d="M7 15l5 3 5-3" strokeOpacity="0.5" />
                                    </svg>
                                )
                            },
                            {
                                title: "Global Early Access Community",
                                desc: "Audit professionals from manufacturing, construction, healthcare, logistics and more have joined our early access group to help build what auditors actually need.",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "42px", height: "42px" }}>
                                        <rect x="3" y="4" width="18" height="12" rx="2" strokeLinecap="round" />
                                        <path d="M12 16v4M8 20h8" />
                                        <circle cx="12" cy="10" r="2" />
                                        <path d="M8 13c0-1.5 1-2.5 4-2.5s4 1 4 2.5" />
                                        <path d="M17 7h.01M18 10h.01" />
                                    </svg>
                                )
                            }
                        ]).map((milestone, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                                style={{ position: "relative" }}
                            >
                                <motion.div
                                    whileHover="hover"
                                    initial="initial"
                                    style={{ cursor: "pointer" }}
                                >
                                    {/* Icon Container */}
                                    <motion.div
                                        variants={{
                                            initial: { background: "#f9fafb", scale: 1, color: "#111827" },
                                            hover: { background: "#fff", scale: 1.08, color: "#14664A", boxShadow: "0 15px 35px rgba(20, 102, 74, 0.12)" }
                                        }}
                                        style={{
                                            width: "84px",
                                            height: "84px",
                                            borderRadius: "18px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: isMobile ? "1.25rem" : "2rem",
                                            transition: "box-shadow 0.3s ease"
                                        }}>
                                        {milestone.icon}
                                    </motion.div>

                                    <h3 style={{
                                        fontSize: "1.45rem",
                                        fontWeight: 500,
                                        color: "#0d1117",
                                        marginBottom: "0.75rem",
                                        letterSpacing: "-0.01em"
                                    }}>
                                        {milestone.title}
                                    </h3>

                                    <div style={{ position: "relative", paddingBottom: "1.5rem" }}>
                                        <p style={{
                                            fontSize: "1rem",
                                            color: "#6b7280",
                                            lineHeight: 1.6,
                                            margin: 0
                                        }}>
                                            {milestone.desc}
                                        </p>

                                        {/* Hover Line */}
                                        <motion.div
                                            variants={{
                                                initial: { width: "0%", opacity: 0 },
                                                hover: { width: "100%", opacity: 1 }
                                            }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: "2px",
                                                background: "#14664A",
                                                borderRadius: "2px"
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            <CTA />
            <Footer />
        </section>
    );
}

/* ── end of file ── */
