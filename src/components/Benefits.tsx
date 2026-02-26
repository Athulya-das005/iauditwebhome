"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

// Sample profile image for Audit Mate
const BOT_AVATAR = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100";

export default function Benefits() {
    const [chatStep, setChatStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setChatStep(1), 800);
        const timer2 = setTimeout(() => setChatStep(2), 2000);
        const timer3 = setTimeout(() => setChatStep(3), 3500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
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
        <section id="benefits" style={{ background: "#fff", padding: "3.5rem 0", overflow: "hidden", fontFamily: '"Pp Neue Montreal", sans-serif' }}>
            <div className="container" style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 2rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
                    gap: "60px",
                    alignItems: "center"
                }}>

                    {/* Left: Chat Interface */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            background: "#064e3b",
                            borderRadius: "24px",
                            padding: "32px",
                            position: "relative",
                            aspectRatio: "1.25/1",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            boxShadow: "0 20px 60px rgba(0, 166, 81, 0.15), 0 4px 12px rgba(0,0,0,0.02)",
                            border: "1px solid rgba(255,255,255,0.05)"
                        }}
                    >
                        {/* Chat Header */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px", position: "relative", zIndex: 10 }}>
                            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", overflow: "hidden", border: "2px solid rgba(255,255,255,0.2)" }}>
                                <img src={BOT_AVATAR} alt="Audit Mate" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                <div style={{ color: "#fff", fontWeight: 500, fontSize: "1.1rem" }}>Audit Mate</div>
                                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 400 }}>
                                    AI agent
                                </div>
                            </div>
                            <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.4)" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
                            </div>
                        </div>

                        {/* Scrolling Chat Container */}
                        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", marginTop: "12px" }}>
                            <motion.div
                                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                                animate={{ y: chatStep >= 3 ? -25 : 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Message 1 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={chatStep >= 1 ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        background: "#fff",
                                        color: "#111827",
                                        padding: "16px 20px",
                                        borderRadius: "1.1rem 1.1rem 1.1rem 0",
                                        width: "fit-content",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        alignSelf: "flex-start",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <div style={{ fontWeight: 500, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                                        <span style={{ fontSize: "0.9rem" }}>✦</span> Audit Mate
                                    </div>
                                    Welcome to iAudit! How can I assist you today?
                                </motion.div>

                                {/* Message 2 (User) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={chatStep >= 2 ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        background: "#ff7a5c",
                                        color: "#fff",
                                        padding: "16px 24px",
                                        borderRadius: "1.1rem 1.1rem 0 1.1rem",
                                        width: "fit-content",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        alignSelf: "flex-end",
                                        boxShadow: "0 20px 40px rgba(255, 122, 92, 0.25)",
                                        whiteSpace: "nowrap",
                                        textAlign: "left"
                                    }}
                                >
                                    Can you help me automate non-conformity tracking?
                                </motion.div>

                                {/* Message 3 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={chatStep >= 3 ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        background: "#fff",
                                        color: "#111827",
                                        padding: "16px 20px",
                                        borderRadius: "1.1rem 1.1rem 1.1rem 0",
                                        width: "fit-content",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        alignSelf: "flex-start",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                        lineHeight: 1.4,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <div style={{ fontWeight: 500, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                                        <span style={{ fontSize: "0.9rem" }}>✦</span> Audit Mate
                                    </div>
                                    Absolutely! Let me fetch your current audit findings...
                                </motion.div>

                                {/* Syncing status */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={chatStep >= 3 ? { opacity: 1 } : {}}
                                    style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", fontWeight: 400, alignSelf: "flex-start", marginTop: "10px" }}
                                >
                                    Syncing ISO records...
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Gradient Fade at bottom */}
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to top, #064e3b, transparent)", borderRadius: "0 0 1.5rem 1.5rem", pointerEvents: "none", zIndex: 5 }} />
                    </motion.div>

                    {/* Right: Content */}
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
                                    fontSize: '0.8rem',
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
                                    fontSize: '2.8rem',
                                    fontWeight: 500,
                                    marginBottom: '1rem',
                                    lineHeight: 1.1,
                                    color: '#111827',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Your AI audit assistant, built into the platform
                            </motion.h2>
                        </div>

                        <div style={{ display: "grid", gap: "1rem" }}>
                            {/* Feature 1 */}
                            <motion.div
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div style={{ fontSize: "1.05rem", color: "#111827", lineHeight: 1.5 }}>
                                    <strong style={{ fontWeight: 500 }}>Integrate with tools like Slack, Notion, and Trello:</strong>{" "}
                                    <span style={{ color: "#4b5563", fontWeight: 400 }}>Connect seamlessly with tools like Slack, Notion, and Trello to enhance workflow efficiency and collaboration.</span>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                custom={3}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                style={{ paddingLeft: "16px", borderLeft: "3px solid var(--primary)" }}
                            >
                                <div style={{ fontSize: "1.05rem", color: "#111827", lineHeight: 1.5 }}>
                                    <strong style={{ fontWeight: 500 }}>Automate real-time responses:</strong>{" "}
                                    <span style={{ color: "#4b5563", fontWeight: 400 }}>Detect triggers, process inputs, and deliver smart actions without manual effort.</span>
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

                </div>
            </div>
        </section>
    );
}
