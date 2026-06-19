"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function PdcaBrokenCycle() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const arrowRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (arrowRef.current && containerRef.current) {
            const btn = containerRef.current.querySelector(".btn-pdca-broken");
            const arrow = arrowRef.current;

            if (btn) {
                const handleMouseEnter = () => {
                    gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
                };
                const handleMouseLeave = () => {
                    gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
                };

                btn.addEventListener("mouseenter", handleMouseEnter);
                btn.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    btn.removeEventListener("mouseenter", handleMouseEnter);
                    btn.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        }
    }, []);

    const cards = [
        {
            title: "Fragmented Workflows",
            description:
                "Your audit plan, checklists, and evidence live in separate places, creating gaps.",
            animation: (
                <div
                    style={{
                        position: "relative",
                        height: "110px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        padding: "1rem",
                    }}
                >
                    {[
                        { label: "Audit Plan", icon: "calendar", top: "18%", left: "8%", delay: 0 },
                        { label: "Checklists", icon: "list", top: "55%", left: "22%", delay: 0.4 },
                        { label: "Evidence", icon: "folder", top: "12%", left: "58%", delay: 0.8 },
                        { label: "Email", icon: "mail", top: "62%", left: "68%", delay: 1.2 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, i % 2 === 0 ? -6 : 6, 0],
                                x: [0, i % 2 === 0 ? 4 : -4, 0],
                            }}
                            transition={{
                                duration: 3.5 + i * 0.5,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "easeInOut",
                            }}
                            style={{
                                position: "absolute",
                                top: item.top,
                                left: item.left,
                                width: "72px",
                                height: "72px",
                                background: "white",
                                borderRadius: "14px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                                border: "1px dashed #d1d5db",
                                zIndex: 10 - i,
                            }}
                        >
                            {item.icon === "calendar" && (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <path d="M16 2v4M8 2v4M3 10h18" />
                                </svg>
                            )}
                            {item.icon === "list" && (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <line x1="3" y1="6" x2="3.01" y2="6" />
                                    <line x1="3" y1="12" x2="3.01" y2="12" />
                                    <line x1="3" y1="18" x2="3.01" y2="18" />
                                </svg>
                            )}
                            {item.icon === "folder" && (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                                </svg>
                            )}
                            {item.icon === "mail" && (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            )}
                            <span style={{ fontSize: "0.55rem", fontWeight: 600, color: "#64748b" }}>
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "1.5rem",
                            color: "#ef4444",
                            fontWeight: 700,
                        }}
                    >
                        ?
                    </motion.div>
                </div>
            ),
        },
        {
            title: "No Real-Time Visibility",
            description:
                "You cannot spot recurring trends without hours of manual data consolidation and report building.",
            animation: (
                <div
                    style={{
                        position: "relative",
                        height: "110px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {[
                        { text: "Excel", color: "#ecfdf5", textColor: "#059669", delay: 0, top: "18%", left: "12%" },
                        { text: "Manual", color: "#fff7ed", textColor: "#d97706", delay: 0.6, top: "50%", left: "8%" },
                        { text: "Reports", color: "#fef2f2", textColor: "#dc2626", delay: 1.2, top: "15%", left: "52%" },
                        { text: "Hours", color: "#f0f9ff", textColor: "#0284c7", delay: 1.8, top: "48%", left: "55%" },
                        { text: "No trends", color: "#f5f3ff", textColor: "#7c3aed", delay: 2.4, top: "72%", left: "32%" },
                    ].map((tag, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, i % 2 === 0 ? -10 : 10, 0],
                                x: [0, i % 3 === 0 ? 6 : -6, 0],
                            }}
                            transition={{
                                duration: 5 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: tag.delay,
                            }}
                            style={{
                                position: "absolute",
                                padding: "0.55rem 1.1rem",
                                background: tag.color,
                                color: tag.textColor,
                                borderRadius: "2rem",
                                fontWeight: 600,
                                fontSize: "0.78rem",
                                boxShadow: "0 8px 15px rgba(0,0,0,0.04)",
                                top: tag.top,
                                left: tag.left,
                                whiteSpace: "nowrap",
                                zIndex: 10 - i,
                                border: "1px solid rgba(0,0,0,0.02)",
                            }}
                        >
                            {tag.text}
                        </motion.div>
                    ))}
                </div>
            ),
        },
        {
            title: "Weak Corrective Actions",
            description:
                "There is no automated way to assign owners, track deadlines, or verify effectiveness.",
            animation: (
                <div
                    style={{
                        position: "relative",
                        height: "110px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            width: "280px",
                            height: "160px",
                            background: "white",
                            borderRadius: "20px",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                            padding: "1.25rem 1.5rem",
                            position: "relative",
                            border: "1px solid rgba(0,0,0,0.03)",
                            backgroundImage: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "1rem",
                            }}
                        >
                            <div style={{ fontWeight: 600, fontSize: "0.82rem", color: "#111827" }}>
                                Action Tracker
                            </div>
                            <div
                                style={{
                                    fontSize: "0.65rem",
                                    padding: "2px 8px",
                                    borderRadius: "10px",
                                    background: "#fef2f2",
                                    color: "#dc2626",
                                    fontWeight: 600,
                                }}
                            >
                                Overdue
                            </div>
                        </div>

                        {[
                            { task: "Assign owner", status: "—", overdue: true },
                            { task: "Set deadline", status: "—", overdue: false },
                            { task: "Verify closure", status: "—", overdue: true },
                        ].map((row, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + i * 0.15 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "0.45rem 0",
                                    borderBottom: i < 2 ? "1px solid #f1f5f9" : "none",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "16px",
                                            height: "16px",
                                            borderRadius: "4px",
                                            border: "2px solid #d1d5db",
                                            background: row.overdue ? "#fef2f2" : "#fff",
                                        }}
                                    />
                                    <span style={{ fontSize: "0.72rem", color: "#334155", fontWeight: 500 }}>
                                        {row.task}
                                    </span>
                                </div>
                                <span
                                    style={{
                                        fontSize: "0.68rem",
                                        color: row.overdue ? "#dc2626" : "#94a3b8",
                                        fontWeight: 600,
                                    }}
                                >
                                    {row.status}
                                </span>
                            </motion.div>
                        ))}

                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                position: "absolute",
                                bottom: "1rem",
                                right: "1.25rem",
                                width: "28px",
                                height: "28px",
                                background: "rgba(239,68,68,0.1)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            ),
        },
    ];

    return (
        <section
            id="broken-cycle"
            style={{
                background: "#ffffff",
                overflow: "hidden",
                fontFamily: PP_NEUE_MONTREAL,
                padding: isMobile ? "1.5rem 0 3rem" : "2.5rem 0 3rem",
            }}
            ref={containerRef}
        >
            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "1.5rem" : "3rem",
                        marginBottom: isMobile ? "2.5rem" : "1.5rem",
                    }}
                >
                    <div style={{ flex: "1 1 auto" }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
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
                            The Broken Cycle
                            <span style={{ fontSize: "1rem" }}>✦</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: isMobile ? "2.2rem" : "3.2rem",
                                lineHeight: 1.1,
                                fontWeight: 500,
                                maxWidth: "650px",
                                letterSpacing: "-0.02em",
                                color: "#111827",
                                margin: isMobile ? "0 0 1rem 0" : "0",
                            }}
                        >
                            Why the PDCA Cycle Breaks with Spreadsheets and Generic Tools
                        </motion.h2>
                    </div>

                    <div
                        style={{
                            flex: "1 1 auto",
                            paddingTop: isMobile ? "0" : "1.25rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                marginBottom: "1rem",
                                lineHeight: 1.6,
                                fontSize: "0.95rem",
                                color: "#6b7280",
                            }}
                        >
                            PDCA looks simple in theory, but most audit programmes are split across
                            calendars, folders, spreadsheets and email. When the trail is fragmented,
                            evidence goes missing, actions drift, and repeat findings become normal.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="https://apps.iaudit.global"
                                className="btn-outline-animate btn-pdca-broken"
                                style={{
                                    padding: "0.65rem 1.6rem",
                                    fontSize: "0.925rem",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    borderRadius: "6px",
                                    fontFamily: PP_NEUE_MONTREAL,
                                    width: isMobile ? "100%" : "fit-content",
                                    textDecoration: "none",
                                }}
                            >
                                <span>
                                    Start 14-day free trial
                                    <span
                                        ref={arrowRef}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            marginLeft: "4px",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1rem",
                        padding: isMobile ? "1.25rem" : "1.5rem",
                        borderRadius: "28px",
                        background:
                            "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(5, 140, 66, 0.07) 0%, rgba(240, 253, 244, 0.5) 55%, transparent 100%)",
                    }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: "white",
                                borderRadius: "24px",
                                padding: "1rem",
                                boxShadow:
                                    "0 4px 16px rgba(5, 140, 66, 0.1), 0 20px 48px rgba(5, 140, 66, 0.18), 0 0 0 1px rgba(5, 140, 66, 0.06)",
                                border: "none",
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
                                {card.animation}
                            </div>
                            <div style={{ padding: "0 0.75rem 1rem 0.75rem", textAlign: "center" }}>
                                <h3
                                    style={{
                                        fontSize: "1.1rem",
                                        marginBottom: "0.4rem",
                                        fontWeight: 500,
                                        color: "#111827",
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: "0.85rem",
                                        color: "#6b7280",
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
