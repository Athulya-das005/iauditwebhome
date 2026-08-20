"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const assessments = [
    {
        title: "ISO Self Assessment",
        subtitle: "Maturity snapshot in minutes",
        description:
            "A fast, clause-aligned check of how mature your management system is today. Ideal for quality, HSE and operations teams who want a first snapshot before a deeper review.",
        href: "/iso-audit-assessments/self-assessment",
        cta: "Start self assessment",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
        accent: "#006644",
        buttonClass: "btn-animate",
    },
    {
        title: "ISO Gap Analysis",
        subtitle: "Structured compliance review",
        description:
            "A structured look at where current practice falls short of ISO 9001, 14001 or 45001. Identify nonconformities, missing evidence and the actions that should come first.",
        href: "/iso-audit-assessments/gap-analysis",
        cta: "Start gap analysis",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
        accent: "#006644",
        buttonClass: "btn-outline-animate",
    },
];

const highlights = [
    "Takes just a few minutes",
    "Completely free",
    "Request your report by email",
];

export default function AssessmentsHomeSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            id="iso-assessments"
            style={{
                background: "#fff",
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
                        marginBottom: isMobile ? "2.25rem" : "3rem",
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
                        Free ISO Readiness Tools
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
                        See where you stand before your next audit
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
                            margin: "0 auto 1.5rem",
                        }}
                    >
                        Take a free ISO self assessment or gap analysis to benchmark your management system against the audit areas that matter most — built by practising ISO auditors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.22 }}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: isMobile ? "0.65rem 1rem" : "1.25rem 2rem",
                        }}
                    >
                        {highlights.map((item) => (
                            <span
                                key={item}
                                style={{
                                    color: "#006644",
                                    fontWeight: 600,
                                    fontSize: isMobile ? "0.88rem" : "0.95rem",
                                }}
                            >
                                ✓ {item}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: isMobile ? "1.25rem" : "1.75rem",
                    }}
                >
                    {assessments.map((item, index) => (
                        <motion.article
                            key={item.title}
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
                                          boxShadow: `0 24px 48px ${item.accent}12`,
                                          borderColor: `${item.accent}33`,
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
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    height: isMobile ? "180px" : "210px",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 540px"
                                    quality={90}
                                    style={{ objectFit: "cover" }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: `linear-gradient(180deg, transparent 40%, ${item.accent}22 100%)`,
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    padding: isMobile ? "1.5rem 1.35rem 1.65rem" : "1.75rem 1.85rem 2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 1,
                                    gap: "0.75rem",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            margin: "0 0 0.35rem",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            color: item.accent,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                        }}
                                    >
                                        {item.subtitle}
                                    </p>
                                    <h3
                                        style={{
                                            margin: 0,
                                            fontSize: isMobile ? "1.2rem" : "1.35rem",
                                            fontWeight: 700,
                                            color: "#111827",
                                            lineHeight: 1.3,
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>

                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: isMobile ? "0.92rem" : "0.98rem",
                                        lineHeight: 1.65,
                                        color: "#6b7280",
                                        flex: 1,
                                    }}
                                >
                                    {item.description}
                                </p>

                                <Link
                                    href={item.href}
                                    className={item.buttonClass}
                                    style={{
                                        padding: "0.85rem 1.35rem",
                                        fontSize: "0.92rem",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        marginTop: "0.35rem",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        fontFamily: '"Pp Neue Montreal", sans-serif',
                                        boxShadow:
                                            item.buttonClass === "btn-animate"
                                                ? "0 2px 12px rgba(5,140,66,0.22)"
                                                : "0 2px 8px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    <span style={{ gap: "0.45rem" }}>
                                        {item.cta}
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
                                    </span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: isMobile ? "2rem" : "2.75rem",
                    }}
                >
                    <Link
                        href="/iso-audit-assessments/self-assessment"
                        className="btn-animate"
                        style={{
                            padding: "0.85rem 1.85rem",
                            borderRadius: "999px",
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            boxShadow: "0 2px 12px rgba(5,140,66,0.22)",
                        }}
                    >
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Start free assessment
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
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
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
