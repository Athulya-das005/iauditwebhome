"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const outcomes = [
    {
        title: "Apex Engineering achieved 100% audit continuity",
        description:
            "Unified audit records across locations, eliminating data loss and improving cross-site compliance visibility.",
        color: "#006644",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        title: "Manufacturing team cut reporting time by 60%",
        description:
            "Automated reporting and structured evidence capture significantly reduced manual documentation and formatting effort.",
        color: "#4f46e5",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 16l4-4 4 4 5-6" />
            </svg>
        ),
    },
    {
        title: "Healthcare provider improved corrective action closure rates",
        description:
            "Centralised tracking improved accountability, ensuring faster closure and better audit follow through discipline.",
        color: "#0ea5e9",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

export default function AuditPerformanceSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            id="audit-performance"
            style={{
                background: "#fcfcfc",
                borderTop: "1px solid rgba(0,0,0,0.03)",
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                overflow: "hidden",
                fontFamily: '"Pp Neue Montreal", sans-serif',
            }}
        >
            <div
                style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                }}
            >
                <div
                    style={{
                        marginBottom: isMobile ? "2.5rem" : "3.5rem",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            color: "#006644",
                            fontWeight: 500,
                            fontSize: isMobile ? "0.9rem" : "1rem",
                            letterSpacing: "0.01em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        <span style={{ fontSize: "1rem" }}>✦</span>
                        Audit Performance
                        <span style={{ fontSize: "1rem" }}>✦</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        style={{
                            fontSize: isMobile ? "2rem" : "3.2rem",
                            fontWeight: 600,
                            marginBottom: "1rem",
                            color: "#111827",
                            lineHeight: isMobile ? 1.25 : 1.1,
                            letterSpacing: "-0.02em",
                            maxWidth: "900px",
                        }}
                    >
                        How organisations improve audit performance with iAudit Global
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.16 }}
                        style={{
                            fontSize: isMobile ? "1.05rem" : "1.2rem",
                            color: "#6b7280",
                            maxWidth: "760px",
                            lineHeight: 1.55,
                            fontWeight: 400,
                            margin: 0,
                        }}
                    >
                        See how organisations improve audit visibility, consistency, and corrective action tracking across multiple sites.
                    </motion.p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                        gap: isMobile ? "1.25rem" : "1.75rem",
                    }}
                >
                    {outcomes.map((outcome, index) => (
                        <motion.article
                            key={outcome.title}
                            initial={{ opacity: 0, y: isMobile ? 40 : 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-40px" : "-80px" }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 18,
                                delay: index * 0.1,
                            }}
                            whileHover={
                                !isMobile
                                    ? {
                                          y: -10,
                                          boxShadow: `0 24px 48px ${outcome.color}12`,
                                          borderColor: `${outcome.color}33`,
                                      }
                                    : undefined
                            }
                            style={{
                                background: "rgba(255, 255, 255, 0.78)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                borderRadius: isMobile ? "24px" : "28px",
                                border: "1px solid rgba(0,0,0,0.05)",
                                boxShadow: "0 12px 32px rgba(0,0,0,0.04)",
                                padding: isMobile ? "1.75rem 1.5rem" : "2rem 1.85rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                height: "100%",
                                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                            }}
                        >
                            <motion.div
                                whileHover={!isMobile ? { scale: 1.08, rotate: 4 } : undefined}
                                style={{
                                    width: isMobile ? "3rem" : "3.25rem",
                                    height: isMobile ? "3rem" : "3.25rem",
                                    borderRadius: "14px",
                                    background: `${outcome.color}12`,
                                    color: outcome.color,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: `0 8px 18px ${outcome.color}10`,
                                }}
                            >
                                {outcome.icon}
                            </motion.div>

                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: isMobile ? "1.15rem" : "1.25rem",
                                    fontWeight: 700,
                                    color: "#111827",
                                    lineHeight: 1.35,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {outcome.title}
                            </h3>

                            <p
                                style={{
                                    margin: 0,
                                    fontSize: isMobile ? "0.95rem" : "1rem",
                                    lineHeight: 1.65,
                                    color: "#6b7280",
                                }}
                            >
                                {outcome.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
