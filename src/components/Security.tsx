"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Security() {
    return (
        <section id="security" style={{ background: "#fff", padding: "140px 0 0", overflow: "hidden", fontFamily: '"Pp Neue Montreal", sans-serif' }}>
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
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#0d9488", fontSize: "1.2rem" }}>✦</span>
                        <span style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#0d9488",
                            textTransform: "capitalize",
                            letterSpacing: "0.05em"
                        }}>
                            Safe and secure
                        </span>
                        <span style={{ color: "#0d9488", fontSize: "1.2rem" }}>✦</span>
                    </div>

                    <h2 style={{
                        fontSize: "3.2rem",
                        fontWeight: 700,
                        color: "#111827",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em"
                    }}>
                        Your audit data stays yours. Always.
                    </h2>

                    <p style={{
                        fontSize: "1.15rem",
                        color: "#4b5563",
                        lineHeight: 1.6,
                        maxWidth: "540px"
                    }}>
                        We built iAudit Global with a simple principle: your audit data is your business, not ours. We cannot access it, view it, or use it. Ever. Combined with enterprise-grade security, you can operate with complete confidence.
                    </p>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "40px",
                        marginTop: "10px"
                    }}>
                        {/* Feature 1 */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{
                                width: "64px",
                                height: "64px",
                                background: "#f9fafb",
                                borderRadius: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #f3f4f6"
                            }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                                </svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827" }}>Zero access policy</h3>
                            <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.5 }}>
                                We have no access to your audit data. It is encrypted and visible only to your authorised users.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{
                                width: "64px",
                                height: "64px",
                                background: "#f9fafb",
                                borderRadius: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #f3f4f6"
                            }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.5 19c.7 0 1.3-.2 1.8-.7s.7-1.1.7-1.8c0-.7-.2-1.3-.7-1.8s-1.1-.7-1.8-.7h-.5c-.3-1.6-1.1-2.9-2.2-3.8s-2.6-1.4-4.2-1.4c-2.2 0-4 1.1-5.3 3.3s-1.4 4.5 1 5.7c.4.2.8.3 1.2.4s.8.1 1.3.1h10.7z"></path>
                                </svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827" }}>GDPR compliant</h3>
                            <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.5 }}>
                                Built to meet global privacy standards and data protection requirements.
                            </p>
                        </div>
                    </div>

                    <Link href="#" style={{
                        marginTop: "1.5rem",
                        padding: "16px 32px",
                        background: "#fff",
                        border: "1.5px solid #d1d5db",
                        borderRadius: "12px",
                        color: "#111827",
                        fontSize: "1rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "fit-content",
                        transition: "all 0.3s ease"
                    }}>
                        Get started
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </Link>
                </div>

                {/* Right: Visual Mockup */}
                <div style={{ position: "relative" }}>
                    {/* Performance Overview Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            y: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                        }}
                        style={{
                            background: "#fff",
                            borderRadius: "2.5rem",
                            padding: "40px",
                            boxShadow: "0 40px 100px rgba(0,0,0,0.06)",
                            border: "1px solid #f3f4f6",
                            position: "relative",
                            zIndex: 2,
                            width: "580px"
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
                            <div style={{ fontSize: "1.35rem", fontWeight: 700, color: "#111827" }}>Intelligent agent performance overview</div>
                            <div style={{
                                background: "#1e1b4b",
                                color: "#fff",
                                padding: "6px 16px",
                                borderRadius: "30px",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}>
                                Weekly <span style={{ fontSize: "1rem" }}>↑</span>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "60px", alignItems: "flex-end" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
                                {[
                                    { label: "Predictive insights", color: "#0d9488" },
                                    { label: "Workflow automation", color: "#0d9488" },
                                    { label: "Neural process mapping", color: "#fca5a5" },
                                    { label: "Adaptive growth", color: "#e5e7eb" }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color }}></div>
                                        <span style={{ fontSize: "0.95rem", color: "#4b5563", fontWeight: 500 }}>{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
                                {[
                                    { h: "100px", c: "#0d9488" },
                                    { h: "140px", c: "#e5e7eb" },
                                    { h: "180px", c: "#fca5a5" },
                                    { h: "120px", c: "#e5e7eb" },
                                    { h: "150px", c: "#0d9488" }
                                ].map((bar, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: bar.h }}
                                        transition={{ delay: 0.8 + (idx * 0.1), duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            width: "28px",
                                            background: bar.c,
                                            borderRadius: "6px"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stepped User Cards */}
                    <div style={{
                        marginTop: "30px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        position: "relative"
                    }}>
                        {/* Connecting Path Line */}
                        <div style={{
                            position: "absolute",
                            left: "0",
                            top: "0",
                            width: "400px",
                            height: "380px",
                            borderLeft: "2px solid #f3f4f6",
                            borderBottom: "2px solid #f9fafb",
                            borderRadius: "0 0 0 60px",
                            zIndex: 1,
                            marginLeft: "-60px",
                            marginTop: "-40px",
                            pointerEvents: "none"
                        }} />

                        {[
                            { count: "1682+", text: "Scalable solutions for teams", x: 60, delay: 1.0 },
                            { count: "1500+", text: "AI automation for business", x: 0, delay: 1.2 },
                            { count: "1386+", text: "Smart workflows for teams", x: 100, delay: 1.4 },
                            { count: "2460+", text: "Automate tasks with AI", x: 20, delay: 1.6 }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: card.x }}
                                transition={{ delay: card.delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                style={{
                                    background: "#fff",
                                    padding: "20px 28px",
                                    borderRadius: "1.5rem",
                                    boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                                    border: "1px solid #f3f4f6",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "18px",
                                    width: "fit-content",
                                    zIndex: 2,
                                    position: "relative"
                                }}
                            >
                                <div style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    background: "#f3f4f6",
                                    overflow: "hidden",
                                    border: "2px solid #fff",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                                }}>
                                    <img
                                        src={`https://i.pravatar.cc/150?u=${idx + 22}`}
                                        alt="Avatar"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827" }}>{card.count}</span>
                                    <span style={{ fontSize: "0.9rem", color: "#6b7280", fontWeight: 500 }}>{card.text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
