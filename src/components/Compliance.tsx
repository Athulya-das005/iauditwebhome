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
            padding: "60px 0 100px",
            backgroundColor: "#fff",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{
                maxWidth: "1240px",
                margin: "0 auto",
                padding: "0 40px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "100px",
                alignItems: "center"
            }}>
                {/* Left: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        {/* Icon - Light blue square with ditto hexagonal node */}
                        <div style={{
                            width: "72px",
                            height: "72px",
                            backgroundColor: "#d1e9ea",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "2.5rem"
                        }}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Hexagon vertices and lines */}
                                <g stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10L32.4 16V28L22 34L11.6 28V16L22 10Z" />
                                    {/* Lines to center */}
                                    <path d="M22 10V22" />
                                    <path d="M32.4 16L22 22" />
                                    <path d="M32.4 28L22 22" />
                                    <path d="M22 34V22" />
                                    <path d="M11.6 28L22 22" />
                                    <path d="M11.6 16L22 22" />
                                </g>
                                {/* Vertex circles */}
                                <circle cx="22" cy="10" r="2.5" fill="#d1e9ea" stroke="#111827" strokeWidth="1.8" />
                                <circle cx="32.4" cy="16" r="2.5" fill="#d1e9ea" stroke="#111827" strokeWidth="1.8" />
                                <circle cx="32.4" cy="28" r="2.5" fill="#d1e9ea" stroke="#111827" strokeWidth="1.8" />
                                <circle cx="22" cy="34" r="2.5" fill="#d1e9ea" stroke="#111827" strokeWidth="1.8" />
                                <circle cx="11.6" cy="28" r="2.5" fill="#d1e9ea" stroke="#111827" strokeWidth="1.8" />
                                <circle cx="11.6" cy="16" r="2.5" fill="#d1e9ea" stroke="#111827" strokeWidth="1.8" />
                                {/* Center circle */}
                                <circle cx="22" cy="22" r="2.5" fill="#d1e9ea" stroke="#111827" strokeWidth="1.8" />
                            </svg>
                        </div>

                        <h2 style={{
                            fontSize: "2.8rem",
                            fontWeight: 600,
                            color: "#111827",
                            lineHeight: 1.15,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.01em",
                            maxWidth: "90%"
                        }}>
                            Ensure privacy and regulatory compliance
                        </h2>

                        <p style={{
                            fontSize: "1.1rem",
                            color: "#4b5563",
                            lineHeight: 1.6,
                            marginBottom: "2.5rem",
                            maxWidth: "500px"
                        }}>
                            Ensure privacy and regulatory compliance by enforcing data protection policies and adhering to industry-specific legal standards
                        </p>

                        <Link href="#get-started" style={{
                            padding: "0.8rem 1.8rem",
                            fontSize: "1rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            border: "1.2px solid #0d9488",
                            borderRadius: "10px",
                            color: "#0d9488",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            backgroundColor: "transparent"
                        }}>
                            Get started
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
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
                        background: "#f9fafb", // Reverted to light gray as per reference
                        borderRadius: "2.5rem",
                        padding: "40px",
                        height: "580px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.02)"
                    }}
                >
                    {/* Background floating cards (faint outlines) */}
                    <div style={{
                        position: "absolute",
                        left: "-80px",
                        top: "120px",
                        width: "160px",
                        height: "300px",
                        border: "1.5px solid #f3f4f6",
                        borderRadius: "1.5rem",
                        zIndex: 0
                    }}></div>
                    <div style={{
                        position: "absolute",
                        right: "-60px",
                        top: "80px",
                        width: "140px",
                        height: "400px",
                        border: "1.5px solid #f3f4f6",
                        borderRadius: "1.5rem",
                        zIndex: 0
                    }}></div>
                    <div style={{
                        position: "absolute",
                        right: "-120px",
                        top: "200px",
                        width: "100px",
                        height: "200px",
                        background: "#f9fafb",
                        border: "1px solid #f3f4f6",
                        borderRadius: "1rem",
                        zIndex: 0
                    }}></div>

                    {/* Content area with relative positioning to be above background cards */}
                    <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "24px", width: "100%", height: "100%" }}>
                        {/* Top Pill - Centered and High */}
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "0px" }}>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                style={{
                                    background: "#fff",
                                    padding: "10px 10px 10px 24px",
                                    borderRadius: "3rem",
                                    border: "1.5px solid #ff7a5c33",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px",
                                    boxShadow: "0 15px 45px rgba(255,122,92,0.12)"
                                }}
                            >
                                <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#374151" }}>Imagine and build your intelligent AI agent solution</span>
                                <div style={{
                                    width: "44px",
                                    height: "44px",
                                    background: "#ff7a5c",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    fontSize: "1.2rem",
                                    boxShadow: "0 5px 15px rgba(255,122,92,0.4)"
                                }}>
                                    ✦
                                </div>
                            </motion.div>
                        </div>

                        {/* Browser Mockup */}
                        <div style={{
                            background: "#fff",
                            borderRadius: "2.5rem",
                            border: "1px solid #f0f1f3",
                            flex: 1,
                            padding: "36px",
                            position: "relative",
                            boxShadow: "0 40px 100px rgba(0,0,0,0.05)",
                            overflow: "visible"
                        }}
                        >
                            {/* Browser Header circles */}
                            <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
                                <div style={{ width: "12px", height: "12px", background: "#e5e7eb", borderRadius: "50%" }}></div>
                                <div style={{ width: "12px", height: "12px", background: "#e5e7eb", borderRadius: "50%" }}></div>
                                <div style={{ width: "12px", height: "12px", background: "#e5e7eb", borderRadius: "50%" }}></div>
                            </div>

                            <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "2.5rem", letterSpacing: "-0.01em" }}>
                                Automated task management
                            </div>

                            {/* Background Lines */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "260px" }}>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} style={{ height: "12px", background: "#f9fafb", borderRadius: "6px", width: i === 4 ? "65%" : "100%" }}></div>
                                ))}
                            </div>

                            {/* Right side toggle card like ref */}
                            <div style={{
                                position: "absolute",
                                right: "28px",
                                top: "84px",
                                width: "120px",
                                height: "70px",
                                background: "#fff",
                                border: "1.5px solid #f3f4f6",
                                borderRadius: "3rem",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 10px",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.02)"
                            }}>
                                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <div style={{ height: "6px", width: "40px", background: "#f3f4f6", borderRadius: "3px" }}></div>
                                    <div style={{ height: "6px", width: "30px", background: "#f3f4f6", borderRadius: "3px" }}></div>
                                </div>
                                <div style={{ width: "46px", height: "46px", background: "linear-gradient(135deg, #fff 0%, #f9fafb 100%)", borderRadius: "50%", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}></div>
                            </div>

                            {/* Overlay Card - Final Ditto Adjustment */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                style={{
                                    position: "absolute",
                                    left: "32px",
                                    bottom: "-10px", // Overlaps the bottom edge
                                    width: "230px",
                                    background: "rgba(255, 255, 255, 1)",
                                    border: "5px solid #d1e9ea",
                                    borderRadius: "1.85rem",
                                    padding: "24px",
                                    boxShadow: "0 30px 80px rgba(0, 71, 71, 0.12)",
                                    zIndex: 10
                                }}
                            >
                                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#9ca3af", marginBottom: "20px" }}>About your AI process</div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <div style={{
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "50%",
                                                background: "#0d9488",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#fff",
                                                fontSize: "10px"
                                            }}>
                                                ✓
                                            </div>
                                            <div style={{ height: "4px", background: "#f3f4f6", borderRadius: "2px", flex: 1 }}></div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{
                                    marginTop: "28px",
                                    padding: "14px",
                                    borderRadius: "3rem", // Full pill
                                    background: "#d1e9ea",
                                    color: "#0d9488",
                                    textAlign: "center",
                                    fontSize: "0.95rem",
                                    fontWeight: 700
                                }}>
                                    Activate
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div style={{ position: "absolute", left: "-60px", top: "50%", width: "120px", height: "180px", border: "1.5px solid #f3f4f6", borderRadius: "1.5rem", zIndex: -1 }}></div>
                        <div style={{ position: "absolute", right: "-30px", top: "15%", width: "80px", height: "120px", border: "1.5px solid #f3f4f6", borderRadius: "1.5rem", zIndex: -1 }}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
