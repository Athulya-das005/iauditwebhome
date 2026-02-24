"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const stories = [
    {
        date: "November 20, 2025",
        readTime: "3 min",
        title: "Automate complex processes with adaptive AI to boost productivity",
        link: "#"
    },
    {
        date: "November 20, 2025",
        readTime: "3 min",
        title: "The power of multi-agent workflows in modern businesses",
        link: "#"
    },
    {
        date: "November 20, 2025",
        readTime: "3 min",
        title: "Overcoming workflow challenges using AI coordination",
        link: "#"
    }
];

export default function SuccessStories() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            } as any
        })
    };

    return (
        <section style={{
            padding: "100px 0",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ marginBottom: "80px" }}
                >
                    <motion.h2
                        custom={0}
                        variants={fadeInUp}
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                            fontWeight: 500,
                            color: "#111827",
                            marginBottom: "1rem",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1
                        }}
                    >
                        Success stories powered by intelligent AI agents
                    </motion.h2>
                </motion.div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "24px"
                }}>
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            custom={index + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "48px",
                                backgroundColor: "#F8F9FA",
                                borderRadius: "2.5rem",
                                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                                border: "1px solid transparent",
                                cursor: "pointer",
                                minHeight: "380px"
                            }}
                            whileHover={{
                                y: -12,
                                backgroundColor: "#fff",
                                borderColor: "#E5E7EB",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.06)"
                            }}
                        >
                            <div style={{
                                display: "flex",
                                gap: "8px",
                                fontSize: "1rem",
                                color: "#6B7280",
                                fontWeight: 400,
                                marginBottom: "32px",
                                opacity: 0.7
                            }}>
                                <span>{story.date}</span>
                                <span>•</span>
                                <span>{story.readTime}</span>
                            </div>

                            <h3 style={{
                                fontSize: "1.85rem",
                                fontWeight: 500,
                                color: "#111827",
                                lineHeight: 1.25,
                                flex: 1,
                                letterSpacing: "-0.01em"
                            }}>
                                {story.title}
                            </h3>

                            <div style={{
                                fontSize: "1.1rem",
                                fontWeight: 500,
                                color: "#111827",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginTop: "40px"
                            }}>
                                Learn more
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
