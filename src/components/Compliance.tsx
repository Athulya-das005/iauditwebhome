"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Compliance() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            } as any
        })
    };

    return (
        <section style={{
            padding: isMobile ? "3rem 0" : "5rem 0",
            backgroundColor: "#fff",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container" style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? "40px" : "80px",
                    alignItems: "center"
                }}>
                    {/* Left: Content */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: isMobile ? "1.25rem" : "1.5rem",
                        textAlign: isMobile ? "center" : "left",
                        alignItems: isMobile ? "center" : "flex-start"
                    }}>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    color: '#006644',
                                    fontWeight: 500,
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                    letterSpacing: '0.01em',
                                    marginBottom: '0.75rem'
                                }}>
                                <span style={{ fontSize: '1rem' }}>✦</span>
                                Real-Time Insights
                                <span style={{ fontSize: '1rem' }}>✦</span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                style={{
                                    fontSize: isMobile ? '2.4rem' : '3.6rem',
                                    fontWeight: 500,
                                    marginBottom: '1rem',
                                    lineHeight: 1.1,
                                    color: '#111827',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Audit Oversight Across Every Location
                            </motion.h2>
                        </div>

                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: isMobile ? 'center' : 'flex-start'
                            }}
                        >
                            <p style={{
                                fontSize: isMobile ? "1rem" : "1.05rem",
                                color: "#4b5563",
                                lineHeight: 1.6,
                                marginBottom: isMobile ? "1.5rem" : "2rem",
                                fontWeight: 400
                            }}>
                                Track scores and findings across sites or teams with flexible dashboards that show exactly where your audit programme stands.
                            </p>

                            <Link href="https://apps.iaudit.global" className="btn-outline-animate" style={{
                                padding: "0.75rem 1.6rem",
                                fontSize: "0.9rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                fontWeight: 600,
                                textDecoration: "none",
                                width: isMobile ? "100%" : "fit-content",
                                justifyContent: "center"
                            }}>
                                <span>
                                    Get started
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? 40 : 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "relative",
                            background: "radial-gradient(circle at top right, #00664408, transparent), #fdfdfd",
                            borderRadius: isMobile ? "1.5rem" : "2.5rem",
                            padding: isMobile ? "24px" : "40px",
                            height: isMobile ? "auto" : "540px",
                            minHeight: isMobile ? "400px" : "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03), 0 20px 60px -10px rgba(5, 140, 66, 0.3), 0 8px 24px -6px rgba(5, 140, 66, 0.15)",
                            width: "100%",
                            overflow: "hidden"
                        }}
                    >
                        {/* Background floating glow */}
                        <div style={{
                            position: "absolute",
                            right: "10%",
                            top: "15%",
                            width: isMobile ? "140px" : "180px",
                            height: isMobile ? "140px" : "180px",
                            background: "radial-gradient(circle, rgba(5,140,66,0.05) 0%, transparent 70%)",
                            filter: "blur(20px)",
                            zIndex: 0
                        }}></div>

                        {/* Top Scanning Pill */}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: isMobile ? "20px" : "30px",
                            position: "relative",
                            zIndex: 2
                        }}>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                style={{
                                    background: "rgba(255,255,255,0.8)",
                                    backdropFilter: "blur(12px)",
                                    padding: isMobile ? "6px 6px 6px 16px" : "10px 10px 10px 24px",
                                    borderRadius: "3rem",
                                    border: "1px solid rgba(5,140,66,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: isMobile ? "10px" : "18px",
                                    boxShadow: "0 15px 35px rgba(0,0,0,0.05)"
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{ width: "6px", height: "6px", background: "#058c42", borderRadius: "50%" }}
                                    />
                                    <span style={{ fontSize: isMobile ? "0.75rem" : "0.88rem", fontWeight: 500, color: "#374151" }}>
                                        {isMobile ? "Scanning: Security" : "Scanning: ISO 27001, GDPR, SOC 2"}
                                    </span>
                                </div>
                                <div style={{
                                    width: isMobile ? "30px" : "38px",
                                    height: isMobile ? "30px" : "38px",
                                    background: "#058c42",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    fontSize: isMobile ? "0.9rem" : "1.1rem",
                                    boxShadow: "0 8px 16px rgba(5,140,66,0.2)",
                                    flexShrink: 0
                                }}>
                                    <svg width={isMobile ? "14" : "18"} height={isMobile ? "14" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                    </svg>
                                </div>
                            </motion.div>
                        </div>

                        {/* Main UI Mockup */}
                        <div style={{ position: "relative", flex: isMobile ? "none" : 1, display: "flex", justifyContent: "center", width: "100%" }}>
                            {/* Browser Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                style={{
                                    background: "#fff",
                                    borderRadius: isMobile ? "1.5rem" : "2.5rem",
                                    border: "1px solid #f0f1f3",
                                    width: "100%",
                                    maxWidth: "420px",
                                    padding: isMobile ? "20px" : "32px",
                                    boxShadow: "0 40px 80px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.1)",
                                    position: "relative",
                                    zIndex: 1
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: isMobile ? "20px" : "32px" }}>
                                    <div style={{ display: "flex", gap: "6px" }}>
                                        <div style={{ width: "8px", height: "8px", background: "#f1f5f9", borderRadius: "50%" }}></div>
                                        <div style={{ width: "8px", height: "8px", background: "#f1f5f9", borderRadius: "50%" }}></div>
                                        <div style={{ width: "8px", height: "8px", background: "#f1f5f9", borderRadius: "50%" }}></div>
                                    </div>
                                    <div style={{ background: "#f8fafc", padding: "4px 10px", borderRadius: "10px", border: "1px solid #f1f5f9", fontSize: "0.65rem", fontWeight: 600, color: "#64748b" }}>
                                        v2.4.0
                                    </div>
                                </div>

                                <div style={{ fontSize: isMobile ? "1.1rem" : "1.35rem", fontWeight: 600, color: "#111827", marginBottom: isMobile ? "1.5rem" : "2.5rem", letterSpacing: "-0.02em" }}>
                                    Auto-Pilot Compliance
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "18px" }}>
                                    {[
                                        { label: "Data classification", status: "Active" },
                                        { label: "Privacy assessment", status: "Completed" },
                                        { label: "Risk treatment", status: "In progress" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 + i * 0.15 }}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: isMobile ? "10px" : "12px",
                                                background: "#f8fafc",
                                                borderRadius: "12px",
                                                border: "1px solid rgba(0,0,0,0.02)"
                                            }}>
                                            <div style={{
                                                width: "16px",
                                                height: "16px",
                                                borderRadius: "50%",
                                                background: "#058c42",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#fff",
                                                fontSize: "8px",
                                                flexShrink: 0
                                            }}>
                                                ✓
                                            </div>
                                            <div style={{ fontSize: isMobile ? "0.75rem" : "0.85rem", fontWeight: 500, color: "#475569", flex: 1 }}>{item.label}</div>
                                            <div style={{ height: "3px", width: "30px", background: i === 2 ? "#e2e8f0" : "#058c42", borderRadius: "2px" }}></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating "Ready" Card */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: "absolute",
                                    right: isMobile ? "-10px" : "-60px",
                                    bottom: isMobile ? "-20px" : "-10px",
                                    width: isMobile ? "130px" : "180px",
                                    background: "rgba(5, 140, 66, 0.95)",
                                    backdropFilter: "blur(8px)",
                                    borderRadius: "1.5rem",
                                    padding: isMobile ? "16px" : "24px",
                                    boxShadow: "0 25px 45px rgba(5, 140, 66, 0.25)",
                                    zIndex: 5,
                                    border: "1px solid rgba(255,255,255,0.2)"
                                }}
                            >
                                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                                    Readiness
                                </div>
                                <div style={{ color: "#fff", fontSize: isMobile ? "1.4rem" : "1.8rem", fontWeight: 600 }}>98%</div>
                                <div style={{ marginTop: "8px", height: "1px", background: "rgba(255,255,255,0.1)", width: "100%" }}></div>
                                <div style={{ marginTop: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                                    <div style={{ width: "4px", height: "4px", background: "#fff", borderRadius: "50%" }}></div>
                                    <div style={{ color: "#fff", fontSize: "0.65rem", fontWeight: 500 }}>All gaps addressed</div>
                                </div>
                            </motion.div>

                            {/* Floating "Secure" Pill */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                style={{
                                    position: "absolute",
                                    left: isMobile ? "-10px" : "-60px",
                                    top: isMobile ? "-20px" : "-10px",
                                    background: "#fff",
                                    padding: isMobile ? "8px 12px" : "12px 20px",
                                    borderRadius: "1rem",
                                    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                                    border: "1px solid #f1f5f9",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    zIndex: 5
                                }}
                            >
                                <div style={{ width: "10px", height: "10px", background: "#058c4220", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ width: "5px", height: "5px", background: "#058c42", borderRadius: "50%" }}></div>
                                </div>
                                <span style={{ fontSize: isMobile ? "0.7rem" : "0.85rem", fontWeight: 600, color: "#111827" }}>Secured</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
