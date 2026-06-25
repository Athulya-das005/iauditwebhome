"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const standards = [
    {
        code: "ISO 9001",
        title: "ISO 9001 Audit Management Software",
        description:
            "Plan and execute quality management system audits with structured reporting and corrective action tracking.",
        href: "/standards/iso-9001-audit-management-software",
        color: "#4f46e5",
        accentBg: "#eef2ff",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="15" x2="15" y2="15" />
                <line x1="9" y1="11" x2="15" y2="11" />
            </svg>
        ),
    },
    {
        code: "ISO 14001",
        title: "ISO 14001 Audit Management Software",
        description:
            "Manage environmental management system audits with risk-based planning and compliance tracking.",
        href: "/standards/iso-14001-audit-management-software",
        color: "#059669",
        accentBg: "#ecfdf5",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
            </svg>
        ),
    },
    {
        code: "ISO 45001",
        title: "ISO 45001 Audit Management Software",
        description:
            "Conduct health and safety audits with structured evidence capture and incident prevention focus.",
        href: "/standards/iso-45001-audit-management-software",
        color: "#d97706",
        accentBg: "#fff7ed",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
];

export default function IsoStandardsSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            id="iso-standards"
            style={{
                background: "linear-gradient(180deg, #ffffff 0%, #f6faf8 50%, #fcfcfc 100%)",
                borderTop: "1px solid rgba(0,0,0,0.03)",
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                fontFamily: '"Pp Neue Montreal", sans-serif',
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(900px, 90vw)",
                    height: "280px",
                    background:
                        "radial-gradient(ellipse at center, rgba(5,140,66,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                    position: "relative",
                    zIndex: 1,
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
                        ISO Standards
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
                            maxWidth: "860px",
                        }}
                    >
                        One audit management system for ISO 9001, ISO 14001, and ISO 45001
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.16 }}
                        style={{
                            fontSize: isMobile ? "1.05rem" : "1.2rem",
                            color: "#6b7280",
                            maxWidth: "720px",
                            lineHeight: 1.55,
                            fontWeight: 400,
                            margin: 0,
                        }}
                    >
                        Select your standard to see how iAudit Global supports structured,
                        evidence-based auditing aligned to ISO requirements.
                    </motion.p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                        gap: isMobile ? "1.25rem" : "1.75rem",
                    }}
                >
                    {standards.map((standard, index) => (
                        <motion.article
                            key={standard.code}
                            initial={{ opacity: 0, y: isMobile ? 40 : 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 18,
                                delay: index * 0.12,
                            }}
                            whileHover={
                                !isMobile
                                    ? {
                                          y: -10,
                                          transition: { duration: 0.22 },
                                      }
                                    : undefined
                            }
                            style={{
                                background: "rgba(255, 255, 255, 0.85)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                borderRadius: isMobile ? "20px" : "28px",
                                border: "1px solid rgba(0,0,0,0.05)",
                                boxShadow: "0 12px 40px rgba(0,0,0,0.04)",
                                padding: isMobile ? "1.5rem" : "2rem",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <motion.div
                                aria-hidden
                                animate={{
                                    scale: [1, 1.08, 1],
                                    opacity: [0.35, 0.55, 0.35],
                                }}
                                transition={{
                                    duration: 4 + index,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    position: "absolute",
                                    top: "-30%",
                                    right: "-20%",
                                    width: "180px",
                                    height: "180px",
                                    borderRadius: "50%",
                                    background: `radial-gradient(circle, ${standard.color}22 0%, transparent 70%)`,
                                    pointerEvents: "none",
                                }}
                            />

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 220 }}
                                style={{
                                    width: "3.5rem",
                                    height: "3.5rem",
                                    borderRadius: "16px",
                                    background: standard.accentBg,
                                    color: standard.color,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.25rem",
                                    boxShadow: `0 8px 20px ${standard.color}18`,
                                }}
                            >
                                {standard.icon}
                            </motion.div>

                            <motion.span
                                initial={{ opacity: 0, x: -8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 + index * 0.1 }}
                                style={{
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: standard.color,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {standard.code}
                            </motion.span>

                            <h3
                                style={{
                                    fontSize: isMobile ? "1.15rem" : "1.25rem",
                                    fontWeight: 600,
                                    color: "#111827",
                                    margin: "0 0 0.75rem 0",
                                    lineHeight: 1.3,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {standard.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: isMobile ? "0.92rem" : "0.95rem",
                                    color: "#6b7280",
                                    lineHeight: 1.6,
                                    margin: "0 0 1.5rem 0",
                                    flexGrow: 1,
                                }}
                            >
                                {standard.description}
                            </p>

                            <Link
                                href={standard.href}
                                className="btn-outline-animate"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.45rem",
                                    padding: "0.65rem 1.25rem",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: "0.9rem",
                                    fontFamily: '"Pp Neue Montreal", sans-serif',
                                    color: standard.color,
                                    borderColor: `${standard.color}40`,
                                    width: "fit-content",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
                                    Learn more
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.2,
                                        }}
                                        style={{ display: "inline-flex" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </motion.span>
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
