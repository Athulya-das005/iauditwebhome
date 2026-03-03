"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Security() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="security" style={{
            background: "#fff",
            padding: isMobile ? "3rem 0" : "5.5rem 0",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container" style={{
                maxWidth: "1260px",
                margin: "0 auto",
                padding: isMobile ? "0 1.25rem" : "0 2rem",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "50px" : "80px",
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
                                fontSize: isMobile ? '0.75rem' : '0.82rem',
                                letterSpacing: '0.01em',
                                marginBottom: '0.75rem'
                            }}>
                            <span style={{ fontSize: '1rem' }}>✦</span>
                            Safe And Secure
                            <span style={{ fontSize: '1rem' }}>✦</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: isMobile ? '2.2rem' : '3.2rem',
                                fontWeight: 500,
                                color: "#111827",
                                lineHeight: 1.1,
                                letterSpacing: "-0.02em",
                                marginBottom: "1rem"
                            }}>
                            Your Audit Data Stays Yours. Always.
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: isMobile ? "1rem" : "1.05rem",
                            color: "#4b5563",
                            lineHeight: 1.6,
                            maxWidth: isMobile ? "100%" : "540px",
                            fontWeight: 400,
                            marginBottom: "1rem"
                        }}>
                        We built iAudit Global with a simple principle: your audit data is your business, not ours. We cannot access it, view it, or use it. Ever. Combined with enterprise-grade security, you can operate with complete confidence.
                    </motion.p>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: isMobile ? "24px" : "30px",
                        marginTop: "0.5rem",
                        width: "100%"
                    }}>
                        {/* Feature 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                                alignItems: isMobile ? "center" : "flex-start",
                                textAlign: isMobile ? "center" : "left"
                            }}>
                            <div style={{
                                width: "52px",
                                height: "52px",
                                background: "#f9fafb",
                                borderRadius: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #f3f4f6"
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                                </svg>
                            </div>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827" }}>Zero Access Policy</h3>
                            <p style={{ fontSize: "0.92rem", color: "#6b7280", lineHeight: 1.5, fontWeight: 400 }}>
                                We have no access to your audit data. It is encrypted and visible only to your authorised users.
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                                alignItems: isMobile ? "center" : "flex-start",
                                textAlign: isMobile ? "center" : "left"
                            }}>
                            <div style={{
                                width: "52px",
                                height: "52px",
                                background: "#f9fafb",
                                borderRadius: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #f3f4f6"
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.5 19c.7 0 1.3-.2 1.8-.7s.7-1.1.7-1.8c0-.7-.2-1.3-.7-1.8s-1.1-.7-1.8-.7h-.5c-.3-1.6-1.1-2.9-2.2-3.8s-2.6-1.4-4.2-1.4c-2.2 0-4 1.1-5.3 3.3s-1.4 4.5 1 5.7c.4.2.8.3 1.2.4s.8.1 1.3.1h10.7z"></path>
                                </svg>
                            </div>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827" }}>GDPR Compliant</h3>
                            <p style={{ fontSize: "0.92rem", color: "#6b7280", lineHeight: 1.5, fontWeight: 400 }}>
                                Built to meet global privacy standards and data protection requirements.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{ width: isMobile ? '100%' : 'auto' }}
                    >
                        <Link href="https://apps.iaudit.global" className="btn-outline-animate" style={{
                            marginTop: isMobile ? "1.5rem" : "1rem",
                            padding: "0.75rem 1.6rem",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
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
                <div style={{
                    position: "relative",
                    transform: isMobile ? "scale(1)" : "scale(0.95)",
                    transformOrigin: isMobile ? "center" : "center right",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: isMobile ? "20px" : "0"
                }}>
                    {/* Performance Overview Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            background: "#fff",
                            borderRadius: "1.5rem",
                            padding: isMobile ? "20px" : "30px",
                            boxShadow: "0 40px 100px rgba(0,0,0,0.06)",
                            border: "1px solid #f3f4f6",
                            position: "relative",
                            zIndex: 2,
                            width: "100%",
                            maxWidth: isMobile ? "100%" : "540px"
                        }}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "24px",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "12px" : "0",
                            textAlign: isMobile ? "center" : "left"
                        }}>
                            <div style={{ fontSize: isMobile ? "1rem" : "1.15rem", fontWeight: 500, color: "#111827" }}>Security & Encryption Overview</div>
                            <div style={{
                                background: "#058c42",
                                color: "#fff",
                                padding: "4px 12px",
                                borderRadius: "30px",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px"
                            }}>
                                Weekly <span style={{ fontSize: "0.85rem" }}>↑</span>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            gap: isMobile ? "24px" : "40px",
                            alignItems: "flex-end",
                            flexDirection: isMobile ? "column-reverse" : "row"
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, width: "100%" }}>
                                {[
                                    { label: "AES-256 Encryption", color: "#058c42" },
                                    { label: "TLS 1.3 in transit", color: "#94a3b8" },
                                    { label: "Multi-factor Auth", color: "#e2e8f0" },
                                    { label: "Automatic Backups", color: "#f1f5f9" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (idx * 0.15), duration: 0.8, ease: "easeOut" }}
                                        style={{ display: "flex", alignItems: "center", gap: "10px" }}
                                    >
                                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color }}></div>
                                        <span style={{ fontSize: isMobile ? "0.8rem" : "0.9rem", color: "#4b5563", fontWeight: 400 }}>{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: isMobile ? "8px" : "12px",
                                justifyContent: "center",
                                width: isMobile ? "100%" : "auto"
                            }}>
                                {[
                                    { h: isMobile ? "60px" : "80px", c: "#058c42" },
                                    { h: isMobile ? "80px" : "110px", c: "#94a3b8" },
                                    { h: isMobile ? "100px" : "140px", c: "#058c42" },
                                    { h: isMobile ? "70px" : "90px", c: "#e2e8f0" },
                                    { h: isMobile ? "90px" : "120px", c: "#058c42" }
                                ].map((bar, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: bar.h }}
                                        transition={{ delay: 0.8 + (idx * 0.1), duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            width: isMobile ? "30px" : "24px",
                                            background: bar.c,
                                            borderRadius: "5px"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stepped User Cards */}
                    <div style={{
                        marginTop: "24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: isMobile ? "16px" : "20px",
                        position: "relative",
                        width: "100%",
                        alignItems: isMobile ? "center" : "flex-start"
                    }}>
                        {/* Connecting Path Line - Hidden on mobile for cleaner look */}
                        {!isMobile && (
                            <div style={{
                                position: "absolute",
                                left: "0",
                                top: "0",
                                width: "360px",
                                height: "320px",
                                borderLeft: "2px solid #f3f4f6",
                                borderBottom: "2px solid #f9fafb",
                                borderRadius: "0 0 0 50px",
                                zIndex: 1,
                                marginLeft: "-40px",
                                marginTop: "-30px",
                                pointerEvents: "none"
                            }} />
                        )}

                        {[
                            { count: "256-bit", text: "Military Grade Encryption", x: isMobile ? 0 : 60, delay: 1.0 },
                            { count: "99.9%", text: "Secure System Uptime", x: 0, delay: 1.2 },
                            { count: "Zero", text: "Developer Access To Data", x: isMobile ? 0 : 100, delay: 1.4 },
                            { count: "Real-time", text: "Security Audit Logging", x: isMobile ? 0 : 20, delay: 1.6 }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 20 : 0 }}
                                whileInView={{ opacity: 1, x: card.x, y: 0 }}
                                transition={{ delay: card.delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={!isMobile ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
                                style={{
                                    background: "#fff",
                                    padding: "12px 20px",
                                    borderRadius: "1.25rem",
                                    boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                                    border: "1px solid #f3f4f6",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    width: isMobile ? "100%" : "fit-content",
                                    zIndex: 2,
                                    position: "relative"
                                }}
                            >
                                <div style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    background: "#f3f4f6",
                                    overflow: "hidden",
                                    border: "2px solid #fff",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                    flexShrink: 0
                                }}>
                                    <img
                                        src={`https://i.pravatar.cc/150?u=${idx + 22}`}
                                        alt="Avatar"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontSize: isMobile ? "1rem" : "1.1rem", fontWeight: 500, color: "#111827" }}>{card.count}</span>
                                    <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 400 }}>{card.text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
