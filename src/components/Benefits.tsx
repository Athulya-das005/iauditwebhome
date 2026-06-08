"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import AuditMateChatCard from "@/components/AuditMateChatCard";

export default function Benefits() {
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
                ease: [0.215, 0.61, 0.355, 1] as any
            }
        })
    };

    return (
        <section id="benefits" style={{
            background: "#fff",
            padding: isMobile ? "3.5rem 0" : "5rem 0",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container" style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.2fr) minmax(0, 1fr)",
                    gap: isMobile ? "40px" : "60px",
                    alignItems: "center"
                }}>

                    <div style={{ order: isMobile ? 2 : 1 }}>
                        <AuditMateChatCard isMobile={isMobile} />
                    </div>

                    {/* Right: Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", order: isMobile ? 1 : 2 }}>
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
                                    fontSize: isMobile ? "0.75rem" : '0.8rem',
                                    letterSpacing: '0.01em',
                                    marginBottom: '0.75rem'
                                }}>
                                <span style={{ fontSize: '1rem' }}>✦</span>
                                Meet Audit Mate
                                <span style={{ fontSize: '1rem' }}>✦</span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                style={{
                                    fontSize: isMobile ? "2.0rem" : '3.2rem',
                                    fontWeight: 500,
                                    marginBottom: '1rem',
                                    lineHeight: isMobile ? 1.25 : 1.1,
                                    color: '#111827',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Your AI Audit Assistant, Built Into The Platform
                            </motion.h2>
                        </div>

                        <div style={{ display: "grid", gap: "1rem" }}>
                            <motion.div
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div style={{ fontSize: isMobile ? "0.95rem" : "1.05rem", color: "#111827", lineHeight: 1.5 }}>
                                    <strong style={{ fontWeight: 500 }}>Generate audit templates and checklists instantly:</strong>{" "}
                                    <span style={{ color: "#4b5563", fontWeight: 400 }}>Build clause-aligned checklists, draft audit plans, and create sample questions for any standard or process in seconds.</span>
                                </div>
                            </motion.div>

                            <motion.div
                                custom={3}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                style={{ paddingLeft: "16px", borderLeft: "3px solid var(--primary)" }}
                            >
                                <div style={{ fontSize: isMobile ? "0.95rem" : "1.05rem", color: "#111827", lineHeight: 1.5 }}>
                                    <strong style={{ fontWeight: 500 }}>Get ISO guidance without leaving your workspace:</strong>{" "}
                                    <span style={{ color: "#4b5563", fontWeight: 400 }}>Ask Audit Mate to explain clauses, suggest evidence, and clarify PDCA links while your data stays entirely with you.</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            custom={4}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <Link href="https://apps.iaudit.global" className="btn-outline-animate" style={{
                                padding: "0.75rem 1.6rem",
                                fontSize: "0.9rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                fontWeight: 600,
                                textDecoration: "none",
                            }}>
                                <span>
                                    Get Started
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
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
