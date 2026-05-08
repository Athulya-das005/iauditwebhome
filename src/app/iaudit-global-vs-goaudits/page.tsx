"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import LogoLoop from "@/components/LogoLoop/LogoLoop";

const comparisonData = [
    { feature: "Built by certified ISO auditors", iaudit: true, competitor: false },
    { feature: "PDCA-driven audit workflow", iaudit: true, competitor: false },
    { feature: "ISO 19011 aligned methodology", iaudit: true, competitor: false },
    { feature: "ISO 9001 audit support", iaudit: true, competitor: true },
    { feature: "ISO 14001 audit support", iaudit: true, competitor: true },
    { feature: "ISO 45001 audit support", iaudit: true, competitor: true },
    { feature: "ISO 27001 audit support", iaudit: true, competitor: false },
    { feature: "ISO 14001:2026 transition ready", iaudit: true, competitor: false },
    { feature: "Gap analysis tools", iaudit: true, competitor: false },
    { feature: "Self-assessment module", iaudit: true, competitor: false },
    { feature: "Findings dashboard & analytics", iaudit: true, competitor: true },
    { feature: "Corrective action tracking (CAPA)", iaudit: true, competitor: true },
    { feature: "Multi-site management", iaudit: true, competitor: true },
    { feature: "Evidence capture (photos & notes)", iaudit: true, competitor: true },
    { feature: "Audit report generation", iaudit: true, competitor: true },
    { feature: "Zero-access data policy", iaudit: true, competitor: false },
    { feature: "AI-powered Audit Mate assistant", iaudit: true, competitor: false },
    { feature: "Clause-mapped checklists", iaudit: true, competitor: false },
    { feature: "Supplier audit management", iaudit: true, competitor: true },
    { feature: "Free 14-day trial", iaudit: true, competitor: true },
    { feature: "Dedicated onboarding support", iaudit: true, competitor: false },
    { feature: "Transparent, flat-rate pricing", iaudit: true, competitor: false },
];

const comparisonTestimonials = [
    {
        quote: "Setting up iAudit across our various depots was remarkably straightforward. We did not need a massive implementation plan or an external consultant. Our auditors were running their first digital reports within the same week, which was a huge result for us.",
        author: "Sarah Mitchell",
        role: "Head of Quality Assurance",
        company: "Meridian Manufacturing",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Certified Lead Auditor"
    },
    {
        quote: "We used the 14 day trial to run a mock gap analysis. It was eye opening to see our nonconformities in a live dashboard rather than a messy spreadsheet. It gave us the clarity we needed to commit to the full system.",
        author: "James Okafor",
        role: "Compliance Manager",
        company: "Veridian Group",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "ISO 9001 Lead Auditor"
    },
    {
        quote: "We moved to iAudit because our previous inspection app was not handling the PDCA cycle well enough. Now, our findings actually link to follow up actions, and nothing is left open or forgotten between our audit cycles.",
        author: "Amira El-Sayed",
        role: "EHS Programme Lead",
        company: "Global Pharma Co.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "ISO 14001 Auditor"
    },
    {
        quote: "I was skeptical about using AI in auditing, but Audit Mate is brilliant. It helps me draft site specific checklists in minutes. It does not do the audit for me, but it certainly handles the tedious documentation part.",
        author: "Daniel Gomez",
        role: "Internal Audit Lead",
        company: "FinTrust Bank",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Verified Audit Expert"
    },
];

export default function ComparisonPage() {
    const [isMobile, setIsMobile] = useState(false);

    const partnerLogos = [
        { src: "/images/clients/stannah.png", alt: "Stannah", title: "Stannah" },
        { src: "/images/clients/fujitec.png", alt: "Fujitec", title: "Fujitec" },
        { src: "/images/clients/construct-lifts.png", alt: "Construct Lifts", title: "Construct Lifts" },
        { src: "/images/clients/peerless.png", alt: "Peerless Lift Services", title: "Peerless Lift Services" },
        { src: "/images/clients/adstone.png", alt: "Adstone Construction Limited", title: "Adstone Construction Limited" },
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <>
            {/* Hero */}
            <section
                style={{
                    background: `
                        radial-gradient(ellipse 60% 50% at 20% 0%, rgba(5,140,66,0.12) 0%, transparent 70%),
                        radial-gradient(ellipse 60% 50% at 80% 0%, rgba(0,77,64,0.10) 0%, transparent 70%),
                        #fafffe
                    `,
                    padding: isMobile ? "60px 1.25rem 40px" : "100px 2rem 80px",
                    textAlign: "center",
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                }}
            >
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <motion.div
                        variants={fadeUp}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#058c42",
                            backgroundColor: "rgba(5,140,66,0.08)",
                            padding: "0.4rem 1.2rem",
                            borderRadius: "20px",
                            marginBottom: "1.5rem",
                        }}
                    >
                        iAudit Global vs GoAudits
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        style={{
                            fontSize: isMobile ? "2rem" : "3.2rem",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            color: "#0d1117",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Move beyond site checklists to <span style={{ color: "#058c42" }}>structured ISO audit control</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        style={{
                            fontSize: "1.15rem",
                            color: "#4b5563",
                            maxWidth: "700px",
                            margin: "0 auto 2.5rem",
                            lineHeight: 1.6,
                        }}
                    >
                        GoAudits is built for simple site inspections. iAudit Global is built by auditors for professional ISO programmes where PDCA, finding tracking and data ownership come as standard.
                    </motion.p>

                    <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="https://apps.iaudit.global"
                            className="btn-animate"
                            style={{ padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "1rem" }}
                        >
                            <span>Start free gap analysis →</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-outline-animate"
                            style={{ padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "1rem" }}
                        >
                            <span>Book a demo</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Logo Loop */}
            <section style={{
                width: "100%",
                padding: isMobile ? "2rem 1rem 2.5rem" : "2.5rem 0 3rem",
                background: "#fff",
                fontFamily: '"Pp Neue Montreal", sans-serif',
            }}>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                        fontWeight: 500,
                        color: "#6b7280",
                        marginBottom: isMobile ? "2rem" : "2.5rem",
                        letterSpacing: "0.01em",
                    }}
                >
                    Trusted by global organisations. Preferred by lead auditors.
                </motion.p>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0" }}>
                    <LogoLoop
                        logos={partnerLogos}
                        speed={isMobile ? 30 : 50}
                        direction="left"
                        logoHeight={isMobile ? 45 : 70}
                        gap={isMobile ? 80 : 140}
                        scaleOnHover
                        ariaLabel="Our trusted partners"
                    />
                </div>
            </section>

            {/* Compare the Fit — Two-Column Section */}
            <section
                style={{
                    padding: isMobile ? "3rem 1rem 4rem" : "5rem 2rem 6rem",
                    backgroundColor: "#f8fafc",
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    borderTop: "1px solid #f0f0f0",
                }}
            >
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1.25rem",
                        }}
                    >
                        <span style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "#058c42",
                            backgroundColor: "rgba(5,140,66,0.08)",
                            padding: "0.35rem 1rem",
                            borderRadius: "20px",
                            letterSpacing: "0.02em",
                            textTransform: "uppercase",
                        }}>
                            Compare the fit
                        </span>
                    </motion.div>

                    {/* H2 */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            fontSize: isMobile ? "1.75rem" : "2.4rem",
                            fontWeight: 500,
                            color: "#0d1117",
                            textAlign: "center",
                            marginBottom: "1rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.15,
                        }}
                    >
                        The difference between simple inspections and real ISO control
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        style={{
                            fontSize: "1.05rem",
                            color: "#6b7280",
                            textAlign: "center",
                            maxWidth: "720px",
                            margin: "0 auto 3.5rem",
                            lineHeight: 1.65,
                        }}
                    >
                        Compare how iAudit Global provides the structure, AI‑powered guidance and data sovereignty that generalist inspection tools cannot match.
                    </motion.p>

                    {/* Column Headers */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: isMobile ? "0" : "0",
                        marginBottom: "0",
                    }}>
                        {!isMobile && (
                            <>
                                <div style={{
                                    backgroundColor: "#fff1f2",
                                    border: "1px solid #fecdd3",
                                    borderBottom: "none",
                                    borderRadius: "16px 0 0 0",
                                    padding: "1.25rem 2rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}>
                                    <span style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        backgroundColor: "#fee2e2",
                                        color: "#ef4444",
                                        fontSize: "0.9rem",
                                        fontWeight: 700,
                                    }}>✕</span>
                                    <span style={{ fontWeight: 700, fontSize: "1rem", color: "#991b1b" }}>GoAudits</span>
                                </div>
                                <div style={{
                                    backgroundColor: "#f0fdf4",
                                    border: "1px solid #bbf7d0",
                                    borderBottom: "none",
                                    borderLeft: "none",
                                    borderRadius: "0 16px 0 0",
                                    padding: "1.25rem 2rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}>
                                    <span style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(5,140,66,0.15)",
                                        color: "#058c42",
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    <span style={{ fontWeight: 700, fontSize: "1rem", color: "#14532d" }}>iAudit Global</span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Rows */}
                    {[
                        {
                            sc: "Inspections without PDCA – Focuses on capturing site data and checklists without a connected Plan Do Check Act cycle.",
                            ia: "Integrated PDCA workflows – Every feature follows the Plan Do Check Act cycle to ensure your programme drives improvement.",
                        },
                        {
                            sc: "Generic chat support – Provides a standard assistant for platform navigation but lacks deep knowledge of ISO clause requirements.",
                            ia: "ISO specialist AI co-pilot – Audit Mate provides specific clause guidance and drafts structured, risk based plans for your audits.",
                        },
                        {
                            sc: "Standard SaaS data model – Operates on a standard cloud model where the software provider has technical access to data.",
                            ia: "Strict zero access policy – We operate a model where your findings and evidence belong entirely to your organisation.",
                        },
                        {
                            sc: "All-purpose inspection tool – Designed for simple checks like cleaning or retail standards rather than professional ISO management systems.",
                            ia: "Specialist ISO system – Built by auditors specifically for ISO 9001, 14001 and 45001 internal audit programmes.",
                        },
                        {
                            sc: "Disjointed audit reports – Acts as a digital filing cabinet for individual reports rather than a continuous audit memory.",
                            ia: "Continuous audit memory – History stays with your business, ensuring context is never lost when people or consultants leave.",
                        },
                    ].map((row, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                border: "1px solid #e5e7eb",
                                borderTop: idx === 0 ? (isMobile ? "1px solid #e5e7eb" : "none") : "none",
                                borderRadius: isMobile
                                    ? (idx === 0 ? "16px 16px 0 0" : idx === 4 ? "0 0 16px 16px" : "0")
                                    : (idx === 4 ? "0 0 16px 16px" : "0"),
                                overflow: "hidden",
                            }}
                        >
                            {/* Mobile label */}
                            {isMobile && (
                                <div style={{
                                    backgroundColor: "#fff1f2",
                                    borderBottom: "1px solid #fecdd3",
                                    padding: "0.5rem 1.25rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}>
                                    <span style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.75rem" }}>✕ GoAudits</span>
                                </div>
                            )}

                            {/* GoAudits cell */}
                            <div style={{
                                backgroundColor: "#fff9f9",
                                borderRight: isMobile ? "none" : "1px solid #fecdd3",
                                padding: isMobile ? "1.25rem 1.25rem 1rem" : "1.75rem 2rem",
                                display: "flex",
                                gap: "1rem",
                                alignItems: "flex-start",
                            }}>
                                <span style={{
                                    flexShrink: 0,
                                    marginTop: "2px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "22px",
                                    height: "22px",
                                    borderRadius: "50%",
                                    backgroundColor: "#fee2e2",
                                    color: "#ef4444",
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                }}>✕</span>
                                <p style={{
                                    fontSize: isMobile ? "0.88rem" : "0.95rem",
                                    color: "#6b7280",
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}>
                                    <strong style={{ color: "#991b1b", fontWeight: 600 }}>
                                        {row.sc.split(" – ")[0]}
                                    </strong>
                                    {" – "}
                                    {row.sc.split(" – ")[1]}
                                </p>
                            </div>

                            {/* Mobile label */}
                            {isMobile && (
                                <div style={{
                                    backgroundColor: "#f0fdf4",
                                    borderTop: "1px solid #bbf7d0",
                                    borderBottom: "1px solid #bbf7d0",
                                    padding: "0.5rem 1.25rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#058c42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span style={{ color: "#14532d", fontWeight: 700, fontSize: "0.75rem" }}>iAudit Global</span>
                                </div>
                            )}

                            {/* iAudit cell */}
                            <div style={{
                                backgroundColor: "#f9fffe",
                                padding: isMobile ? "1rem 1.25rem 1.25rem" : "1.75rem 2rem",
                                display: "flex",
                                gap: "1rem",
                                alignItems: "flex-start",
                            }}>
                                <span style={{
                                    flexShrink: 0,
                                    marginTop: "2px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "22px",
                                    height: "22px",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(5,140,66,0.12)",
                                    color: "#058c42",
                                }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                <p style={{
                                    fontSize: isMobile ? "0.88rem" : "0.95rem",
                                    color: "#374151",
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}>
                                    <strong style={{ color: "#14532d", fontWeight: 600 }}>
                                        {row.ia.split(" – ")[0]}
                                    </strong>
                                    {" – "}
                                    {row.ia.split(" – ")[1]}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials
                items={comparisonTestimonials}
                title="Why ISO teams choose iAudit Global"
                backgroundColor="#f0fdf4"
            />

            {/* 3-Step Get Started Section */}
            <section
                style={{
                    backgroundColor: "#004d40",
                    padding: isMobile ? "4rem 1.25rem" : "5rem 2rem",
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    color: "#fff",
                }}
            >
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}
                    >
                        <span style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#6ee7b7",
                            backgroundColor: "rgba(110,231,183,0.12)",
                            padding: "0.35rem 1rem",
                            borderRadius: "20px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}>
                            Get started
                        </span>
                    </motion.div>

                    {/* H2 */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            fontSize: isMobile ? "1.75rem" : "2.4rem",
                            fontWeight: 500,
                            color: "#fff",
                            textAlign: "center",
                            marginBottom: "1rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.15,
                        }}
                    >
                        How to build a smarter audit programme today
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        style={{
                            fontSize: "1.05rem",
                            color: "rgba(255,255,255,0.65)",
                            textAlign: "center",
                            maxWidth: "620px",
                            margin: "0 auto 3.5rem",
                            lineHeight: 1.65,
                        }}
                    >
                        Move your audit programme from basic forms to a specialist ISO management system today.
                    </motion.p>

                    {/* 3 Steps Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                        gap: "1.5rem",
                        marginBottom: "3.5rem",
                    }}>
                        {[
                            {
                                step: "01",
                                title: "Sign up and assess",
                                desc: "Start your free 14 day trial to run a gap analysis and identify nonconformities instantly.",
                            },
                            {
                                step: "02",
                                title: "Plan and execute",
                                desc: "Use Audit Mate to build clause‑mapped checklists and capture digital evidence on any device.",
                            },
                            {
                                step: "03",
                                title: "Improve and report",
                                desc: "Track findings to verified closure and generate ISO‑compliant reports using built‑in PDCA workflows.",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "20px",
                                    padding: isMobile ? "2rem 1.5rem" : "2.5rem 2rem",
                                    position: "relative",
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                                    e.currentTarget.style.borderColor = "rgba(110,231,183,0.3)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Step number badge */}
                                <div style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "14px",
                                    backgroundColor: "#058c42",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.5rem",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#fff",
                                    letterSpacing: "0.02em",
                                    boxShadow: "0 4px 16px rgba(5,140,66,0.35)",
                                }}>
                                    {item.step}
                                </div>

                                {/* Step label */}
                                <div style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    color: "#6ee7b7",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    marginBottom: "0.6rem",
                                }}>
                                    Step {idx + 1}
                                </div>

                                <h3 style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    color: "#fff",
                                    marginBottom: "0.85rem",
                                    lineHeight: 1.25,
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    fontSize: "0.95rem",
                                    color: "rgba(255,255,255,0.65)",
                                    lineHeight: 1.65,
                                    margin: 0,
                                }}>
                                    {item.desc}
                                </p>

                                {/* Connector line (desktop only, not on last card) */}
                                {!isMobile && idx < 2 && (
                                    <div style={{
                                        position: "absolute",
                                        top: "3.5rem",
                                        right: "-0.85rem",
                                        width: "1.7rem",
                                        height: "1px",
                                        backgroundColor: "rgba(110,231,183,0.25)",
                                        zIndex: 1,
                                    }} />
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Ready to Upgrade Section */}
            <section
                style={{
                    padding: isMobile ? "5rem 1.25rem" : "7rem 2rem",
                    backgroundColor: "#f8fafc",
                    textAlign: "center",
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    borderTop: "1px solid #f0f0f0",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: "760px", margin: "0 auto" }}
                >
                    {/* Tag */}
                    <div style={{ marginBottom: "1.25rem" }}>
                        <span style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#058c42",
                            backgroundColor: "rgba(5,140,66,0.08)",
                            padding: "0.35rem 1rem",
                            borderRadius: "20px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}>
                            Ready to upgrade
                        </span>
                    </div>

                    {/* H2 */}
                    <h2
                        style={{
                            fontSize: isMobile ? "2rem" : "3rem",
                            fontWeight: 500,
                            color: "#0d1117",
                            marginBottom: "1.25rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                        }}
                    >
                        Upgrade to software <span style={{ color: "#058c42" }}>built for ISO programmes</span>
                    </h2>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: "1.1rem",
                            color: "#6b7280",
                            lineHeight: 1.65,
                            maxWidth: "580px",
                            margin: "0 auto 2.75rem",
                        }}
                    >
                        Move beyond simple inspections. Visit the app to start your 14 day free self‑assessment and identify system gaps across your organisation.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="https://apps.iaudit.global"
                        className="btn-animate"
                        style={{
                            padding: "16px 40px",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "1.05rem",
                            display: "inline-flex",
                        }}
                    >
                        <span>Start your free trial →</span>
                    </Link>

                    {/* Trust note */}
                    <p style={{
                        marginTop: "1.25rem",
                        fontSize: "0.85rem",
                        color: "#9ca3af",
                        fontWeight: 500,
                    }}>
                        No credit card required · 14-day free trial · Cancel anytime
                    </p>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <FAQAccordion
                sparkleText="Frequently asked questions"
                heading="Frequently Asked Questions"
                items={[
                    {
                        question: "What is the difference between iAudit Global and GoAudits?",
                        answer: "GoAudits is built as a general inspection platform for day-to-day site checks and operational forms. iAudit Global is built specifically for ISO 9001, 14001 and 45001 audit programmes, with PDCA workflows, structured corrective actions, and specialist audit planning tools.",
                    },
                    {
                        question: "Is iAudit Global better than a generic inspection app for ISO audits?",
                        answer: "If you are managing a professional ISO audit programme, yes. Generic inspection apps can handle simple checks, but they usually stop at forms and reporting. iAudit Global supports planning, findings, follow-up, and audit continuity across cycles and sites.",
                    },
                    {
                        question: "Can I move my existing checklists into iAudit Global?",
                        answer: "Yes. You can recreate your current checklists in iAudit Global or use Audit Mate to draft clause-aligned versions more quickly. This makes it easier to move from a general inspection setup to a structured ISO audit programme.",
                    },
                    {
                        question: "Does iAudit Global offer a free trial?",
                        answer: "Yes. iAudit Global includes a 14-day free trial with no credit card required. During that period, you can run a gap analysis, try self-assessments, test checklists and see how the platform works for your audit programme.",
                    },
                    {
                        question: "How does Audit Mate differ from a generic AI form builder?",
                        answer: "Audit Mate is designed specifically for ISO audits. It helps build clause-aligned checklists, draft audit plans and explain ISO requirements in context. Generic AI tools can create forms, but they usually do not understand ISO 19011 or the full PDCA cycle.",
                    },
                    {
                        question: "Is our audit data secure with iAudit Global?",
                        answer: "Yes. iAudit Global follows a zero-access policy, which means your findings, evidence and audit history stay entirely under your organisation’s control. Unlike typical SaaS models, we do not view, mine or use your audit data.",
                    },
                ]}
            />

            <Footer />
        </>
    );
}
