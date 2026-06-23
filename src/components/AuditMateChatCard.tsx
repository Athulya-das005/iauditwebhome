"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BOT_AVATAR =
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100";

export default function AuditMateChatCard({ isMobile }: { isMobile: boolean }) {
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

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                background: "#064e3b",
                borderRadius: "24px",
                padding: isMobile ? "24px 16px" : "32px",
                position: "relative",
                aspectRatio: isMobile ? "auto" : "1.25/1",
                minHeight: isMobile ? "420px" : "auto",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0, 166, 81, 0.15), 0 4px 12px rgba(0,0,0,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: isMobile ? "30px" : "40px",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        overflow: "hidden",
                        border: "2px solid rgba(255,255,255,0.2)",
                    }}
                >
                    <img
                        src={BOT_AVATAR}
                        alt="Audit Mate AI audit assistant avatar"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div style={{ color: "#fff", fontWeight: 500, fontSize: "1.1rem" }}>Audit Mate</div>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 400 }}>
                        AI agent
                    </div>
                </div>
                <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.4)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="5" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                    </svg>
                </div>
            </div>

            <div
                style={{
                    position: "relative",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "12px",
                }}
            >
                <motion.div
                    style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                    animate={{ y: chatStep >= 3 ? -25 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={chatStep >= 1 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{
                            background: "#fff",
                            color: "#111827",
                            padding: isMobile ? "12px 16px" : "16px 20px",
                            borderRadius: "1.1rem 1.1rem 1.1rem 0",
                            width: "fit-content",
                            maxWidth: "90%",
                            fontSize: isMobile ? "0.85rem" : "0.9rem",
                            fontWeight: 500,
                            alignSelf: "flex-start",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: 500,
                                fontSize: "0.8rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                marginBottom: "6px",
                            }}
                        >
                            <span style={{ fontSize: "0.9rem" }}>✦</span> Audit Mate
                        </div>
                        Welcome to iAudit! How can I assist you today?
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={chatStep >= 2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{
                            background: "#ff7a5c",
                            color: "#fff",
                            padding: isMobile ? "12px 16px" : "16px 24px",
                            borderRadius: "1.1rem 1.1rem 0 1.1rem",
                            width: "fit-content",
                            maxWidth: "90%",
                            fontSize: isMobile ? "0.85rem" : "0.9rem",
                            fontWeight: 500,
                            alignSelf: "flex-end",
                            boxShadow: "0 20px 40px rgba(255, 122, 92, 0.25)",
                            textAlign: "left",
                        }}
                    >
                        Can you help me automate non-conformity tracking?
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={chatStep >= 3 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{
                            background: "#fff",
                            color: "#111827",
                            padding: isMobile ? "12px 16px" : "16px 20px",
                            borderRadius: "1.1rem 1.1rem 1.1rem 0",
                            width: "fit-content",
                            maxWidth: "90%",
                            fontSize: isMobile ? "0.85rem" : "0.9rem",
                            fontWeight: 500,
                            alignSelf: "flex-start",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            lineHeight: 1.4,
                        }}
                    >
                        <div
                            style={{
                                fontWeight: 500,
                                fontSize: "0.8rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                marginBottom: "6px",
                            }}
                        >
                            <span style={{ fontSize: "0.9rem" }}>✦</span> Audit Mate
                        </div>
                        Absolutely! Let me fetch your current audit findings...
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={chatStep >= 3 ? { opacity: 1 } : {}}
                        style={{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "0.9rem",
                            fontWeight: 400,
                            alignSelf: "flex-start",
                            marginTop: "10px",
                        }}
                    >
                        Syncing ISO records...
                    </motion.div>
                </motion.div>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background: "linear-gradient(to top, #064e3b, transparent)",
                    borderRadius: "0 0 1.5rem 1.5rem",
                    pointerEvents: "none",
                    zIndex: 5,
                }}
            />
        </motion.div>
    );
}
