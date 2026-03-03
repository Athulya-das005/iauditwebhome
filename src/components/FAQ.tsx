"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "How Does The AI Agent Protect My Data?",
        answer: "Our AI agent protects your data with encryption, secure access controls, minimal data storage, continuous monitoring, and strict privacy policies to prevent misuse."
    },
    {
        question: "Can The AI Agent Manage Confidential Information?",
        answer: "Yes, our AI agent can manage confidential information by applying strong security measures like encryption, strict data access controls, and privacy-focused handling to ensure sensitive details remain fully protected."
    },
    {
        question: "How Does The AI Assistant Operate In Real Time?",
        answer: "The AI assistant operates by analyzing your inputs, understanding intent, accessing relevant data securely, and delivering accurate automated actions or responses in real time."
    },
    {
        question: "Can I Integrate The AI Agent With My Existing Tools?",
        answer: "Yes, our AI agent can integrate with your existing tools through APIs and automation workflows, ensuring seamless data exchange and efficient operations without disrupting your current systems."
    },
    {
        question: "What Support Does Your Agency Provide For Candidates?",
        answer: "Our recruitment agency connects skilled candidates with the right employers, handling sourcing, screening, interviews, onboarding support, and ensuring a smooth, efficient hiring experience from start to finish."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
            } as any
        })
    };

    return (
        <section id="faq" style={{
            padding: isMobile ? "60px 0" : "120px 0",
            backgroundColor: "#fff",
            borderTop: "1px solid #f3f4f6",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 20px" }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "60px" }}
                >
                    <motion.h2
                        custom={0}
                        variants={fadeInUp}
                        style={{
                            fontSize: isMobile ? "2.2rem" : "3rem",
                            fontWeight: 600,
                            color: "#111827",
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.12
                        }}
                    >
                        Get Answers To Common Questions
                    </motion.h2>
                    <motion.p
                        custom={1}
                        variants={fadeInUp}
                        style={{
                            fontSize: isMobile ? "1rem" : "1.15rem",
                            color: "#4b5563",
                            maxWidth: "600px",
                            margin: "0 auto",
                            lineHeight: 1.6
                        }}
                    >
                        Find solutions to frequently asked questions regarding AI agents, onboarding, customization, pricing, and ongoing support
                    </motion.p>
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "16px" }}>
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index + 2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{
                                border: "1px solid #e5e7eb",
                                borderRadius: isMobile ? "1rem" : "1.25rem",
                                overflow: "hidden",
                                transition: "all 0.3s ease",
                                backgroundColor: activeIndex === index ? "#f9fafb" : "#fff",
                                boxShadow: activeIndex === index ? "0 10px 30px rgba(0,0,0,0.03)" : "none"
                            }}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                style={{
                                    width: "100%",
                                    padding: isMobile ? "20px" : "24px 32px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left"
                                }}
                            >
                                <span style={{
                                    fontSize: isMobile ? "1rem" : "1.15rem",
                                    fontWeight: 600,
                                    color: "#111827",
                                    paddingRight: "15px",
                                    lineHeight: 1.4
                                }}>
                                    {item.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ color: "#6b7280", flexShrink: 0 }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div style={{
                                            padding: isMobile ? "0 20px 24px" : "0 32px 32px",
                                            fontSize: isMobile ? "0.95rem" : "1.05rem",
                                            color: "#4b5563",
                                            lineHeight: 1.6,
                                            maxWidth: "100%"
                                        }}>
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
