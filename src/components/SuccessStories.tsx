"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const stories = [
    {
        date: "November 20, 2025",
        readTime: "3 min",
        title: "Automate Complex Processes With Adaptive AI To Boost Productivity",
        link: "#"
    },
    {
        date: "November 20, 2025",
        readTime: "3 min",
        title: "The Power Of Multi-Agent Workflows In Modern Businesses",
        link: "#"
    },
    {
        date: "November 20, 2025",
        readTime: "3 min",
        title: "Overcoming Workflow Challenges Using AI Coordination",
        link: "#"
    }
];

export default function SuccessStories() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
            padding: isMobile ? "60px 0" : "100px 0",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 40px" }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ marginBottom: isMobile ? "40px" : "80px" }}
                >
                    <motion.h2
                        custom={0}
                        variants={fadeInUp}
                        style={{
                            fontSize: isMobile ? "2.2rem" : "clamp(2.5rem, 5vw, 3.5rem)",
                            fontWeight: 500,
                            color: "#111827",
                            marginBottom: "1rem",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1
                        }}
                    >
                        Success Stories Powered By Intelligent AI Agents
                    </motion.h2>
                </motion.div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                    gap: isMobile ? "1.25rem" : "24px"
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
                                padding: isMobile ? "32px 24px" : "48px",
                                backgroundColor: "#F8F9FA",
                                borderRadius: isMobile ? "1.5rem" : "2.5rem",
                                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                                border: "1px solid transparent",
                                cursor: "pointer",
                                minHeight: isMobile ? "300px" : "380px"
                            }}
                            whileHover={!isMobile ? {
                                y: -12,
                                backgroundColor: "#fff",
                                borderColor: "#E5E7EB",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.06)"
                            } : {}}
                        >
                            <div style={{
                                display: "flex",
                                gap: "8px",
                                fontSize: "0.9rem",
                                color: "#6B7280",
                                fontWeight: 400,
                                marginBottom: isMobile ? "20px" : "32px",
                                opacity: 0.7
                            }}>
                                <span>{story.date}</span>
                                <span>•</span>
                                <span>{story.readTime}</span>
                            </div>

                            <h3 style={{
                                fontSize: isMobile ? "1.5rem" : "1.85rem",
                                fontWeight: 500,
                                color: "#111827",
                                lineHeight: 1.25,
                                flex: 1,
                                letterSpacing: "-0.01em"
                            }}>
                                {story.title}
                            </h3>

                            <div style={{
                                fontSize: isMobile ? "1rem" : "1.1rem",
                                fontWeight: 500,
                                color: "#111827",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginTop: isMobile ? "30px" : "40px"
                            }}>
                                Learn More
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
