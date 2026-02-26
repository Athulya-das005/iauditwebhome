"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Compliance() {
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
            padding: "3.5rem 0",
            backgroundColor: "#fff",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container" style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 2rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "60px",
                    alignItems: "center"
                }}>
                    {/* Left: Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
                                    fontSize: '0.82rem',
                                    letterSpacing: '0.01em',
                                    marginBottom: '0.75rem'
                                }}>
                                <span style={{ fontSize: '1rem' }}>✦</span>
                                Privacy & Compliance
                                <span style={{ fontSize: '1rem' }}>✦</span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                style={{
                                    fontSize: '2.8rem',
                                    fontWeight: 500,
                                    marginBottom: '1rem',
                                    lineHeight: 1.1,
                                    color: '#111827',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Ensure privacy and regulatory compliance
                            </motion.h2>
                        </div>

                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <p style={{
                                fontSize: "1.05rem",
                                color: "#4b5563",
                                lineHeight: 1.6,
                                marginBottom: "2rem",
                                fontWeight: 400
                            }}>
                                Ensure privacy and regulatory compliance by enforcing data protection policies and adhering to industry-specific legal standards.
                            </p>

                            <Link href="#get-started" className="btn-outline-animate" style={{
                                padding: "0.75rem 1.6rem",
                                fontSize: "0.9rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                fontWeight: 600,
                                textDecoration: "none",
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
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "relative",
                            background: "#f9fafb",
                            borderRadius: "2rem",
                            padding: "32px",
                            height: "500px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.02)"
                        }}
                    >
                        {/* Background floating cards (faint outlines) */}
                        <div style={{
                            position: "absolute",
                            left: "-60px",
                            top: "100px",
                            width: "140px",
                            height: "260px",
                            border: "1.5px solid #f3f4f6",
                            borderRadius: "1.5rem",
                            zIndex: 0
                        }}></div>

                        {/* Content area */}
                        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "20px", width: "100%", height: "100%" }}>
                            {/* Top Pill - Centered and High */}
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    style={{
                                        background: "#fff",
                                        padding: "8px 8px 8px 20px",
                                        borderRadius: "3rem",
                                        border: "1.5px solid #ff7a5c33",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "16px",
                                        boxShadow: "0 10px 30px rgba(255,122,92,0.1)"
                                    }}
                                >
                                    <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#374151" }}>Imagine and build your AI agent solution</span>
                                    <div style={{
                                        width: "36px",
                                        height: "36px",
                                        background: "#ff7a5c",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        boxShadow: "0 4px 12px rgba(255,122,92,0.3)"
                                    }}>
                                        ✦
                                    </div>
                                </motion.div>
                            </div>

                            {/* Browser Mockup */}
                            <div style={{
                                background: "#fff",
                                borderRadius: "2rem",
                                border: "1px solid #f0f1f3",
                                flex: 1,
                                padding: "28px",
                                position: "relative",
                                boxShadow: "0 30px 80px rgba(0,0,0,0.04)",
                                overflow: "visible"
                            }}
                            >
                                {/* Browser Header circles */}
                                <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
                                    <div style={{ width: "10px", height: "10px", background: "#f3f4f6", borderRadius: "50%" }}></div>
                                    <div style={{ width: "10px", height: "10px", background: "#f3f4f6", borderRadius: "50%" }}></div>
                                    <div style={{ width: "10px", height: "10px", background: "#f3f4f6", borderRadius: "50%" }}></div>
                                </div>

                                <div style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827", marginBottom: "2rem", letterSpacing: "-0.01em" }}>
                                    Automated task management
                                </div>

                                {/* Background Lines */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "200px" }}>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} style={{ height: "10px", background: "#f9fafb", borderRadius: "5px", width: i === 3 ? "60%" : "100%" }}></div>
                                    ))}
                                </div>

                                {/* Overlay Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    style={{
                                        position: "absolute",
                                        left: "24px",
                                        bottom: "-20px",
                                        width: "210px",
                                        background: "#fff",
                                        border: "4px solid #d1e9ea",
                                        borderRadius: "1.5rem",
                                        padding: "20px",
                                        boxShadow: "0 25px 60px rgba(0, 102, 71, 0.12)",
                                        zIndex: 10
                                    }}
                                >
                                    <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#9ca3af", marginBottom: "16px" }}>About your AI process</div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        {[1, 2].map(i => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                <div style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    borderRadius: "50%",
                                                    background: "#0d9488",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontSize: "9px"
                                                }}>
                                                    ✓
                                                </div>
                                                <div style={{ height: "4px", background: "#f3f4f6", borderRadius: "2px", flex: 1 }}></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{
                                        marginTop: "24px",
                                        padding: "10px",
                                        borderRadius: "2rem",
                                        background: "#d1e9ea",
                                        color: "#0d9488",
                                        textAlign: "center",
                                        fontSize: "0.85rem",
                                        fontWeight: 500
                                    }}>
                                        Activate
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
