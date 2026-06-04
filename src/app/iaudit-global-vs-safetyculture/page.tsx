"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import LogoLoop from "@/components/LogoLoop/LogoLoop";
import SectionTag from "@/components/SectionTag";

const PP_NEUE_MONTREAL = '"Pp Neue Montreal", sans-serif';

const industryHighlights = [
    { title: "Manufacturing", slug: "manufacturing-iso-audit-software", image: "/images/manufacturing-bg.jpg" },
    { title: "Construction", slug: "construction-iso-audit-software", image: "/images/construction-bg.jpg" },
    { title: "Healthcare", slug: "healthcare-compliance-software", image: "/images/healthcare-bg.png" },
    { title: "Logistics & Transport", slug: "transport-and-logistics-iso-audit-software", image: "/images/logistics-bg.jpg" },
    { title: "Basic Metal & Fabrication", slug: "basic-metals-and-fabrication-iso-audit-software", image: "/images/metal-fabrication-bg.jpg" },
    { title: "Engineering Services", slug: "engineering-iso-audit-software", image: "/images/engineering-bg.jpg" },
];

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
        quote: "We expected a long setup, but the onboarding with iAudit was surprisingly smooth. The team helped us move our existing templates over, and our site managers were up and running within days without needing any complex training.",
        author: "Sarah Mitchell",
        role: "Head of Quality Assurance",
        company: "Meridian Manufacturing",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Certified Lead Auditor"
    },
    {
        quote: "The 14-day free trial allowed us to run a full gap analysis against ISO 9001 before committing. It was great to identify our nonconformities ourselves and see exactly how the platform unifies our audit evidence in real time.",
        author: "James Okafor",
        role: "Compliance Manager",
        company: "Veridian Group",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "ISO 9001 Lead Auditor"
    },
    {
        quote: "Switching to iAudit was the best move for our programme. We moved away from a generic inspection app that was getting too expensive and finally got a system that actually understands the PDCA cycle and professional ISO standards.",
        author: "Amira El-Sayed",
        role: "EHS Programme Lead",
        company: "Global Pharma Co.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "ISO 14001 Auditor"
    },
    {
        quote: "Audit Mate has been a total game changer for our planning. It drafts our checklists in seconds and provides instant clause guidance, meaning we spend far less time on admin and more time on the actual audit work.",
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
        <div style={{ fontFamily: PP_NEUE_MONTREAL }}>
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
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <motion.div
                        variants={fadeUp}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}
                    >
                        <SectionTag isMobile={isMobile}>SafetyCulture Alternative</SectionTag>
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
                        The SafetyCulture Alternative Built for Professional ISO Audits
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
                        iAudit Global is a SafetyCulture alternative designed specifically for ISO 9001, 14001 and 45001 audit programmes, with integrated PDCA workflows and full audit data ownership.
                    </motion.p>

                    <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="https://apps.iaudit.global"
                            className="btn-animate"
                            style={{ padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "1rem" }}
                        >
                            <span>Start 14-day free gap analysis →</span>
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
                fontFamily: PP_NEUE_MONTREAL,
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

            {/* SafetyCulture Overview */}
            <section
                style={{
                    padding: isMobile ? "3.5rem 1.25rem 4rem" : "5.5rem 2rem 6rem",
                    backgroundColor: "#fff",
                    fontFamily: PP_NEUE_MONTREAL,
                    borderTop: "1px solid #f0f0f0",
                }}
            >
                <div style={{ maxWidth: "960px", margin: "0 auto", fontFamily: PP_NEUE_MONTREAL }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}
                    >
                        <SectionTag isMobile={isMobile}>SafetyCulture Overview</SectionTag>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            fontSize: isMobile ? "1.85rem" : "2.5rem",
                            fontWeight: 500,
                            fontFamily: PP_NEUE_MONTREAL,
                            color: "#0d1117",
                            textAlign: "center",
                            marginBottom: isMobile ? "2.5rem" : "3.5rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.15,
                        }}
                    >
                        A Closer Look at SafetyCulture
                    </motion.h2>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: isMobile ? "1.25rem" : "1.5rem",
                    }}>
                        {[
                            {
                                title: "What Is SafetyCulture?",
                                body: "SafetyCulture is a mobile‑first inspection and operations platform designed to help teams conduct workplace checks, record observations and manage tasks. It is widely used for safety inspections, quality checks and operational compliance activities across frontline environments.",
                            },
                            {
                                title: "Who Typically Uses SafetyCulture?",
                                body: "SafetyCulture is commonly adopted by organisations in manufacturing, retail, hospitality, logistics and transport. It supports frontline teams who need structured digital checklists, issue reporting tools and basic compliance tracking across distributed operational sites.",
                            },
                        ].map((block, i) => (
                            <motion.article
                                key={block.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.12 + i * 0.1, duration: 0.5 }}
                                style={{
                                    backgroundColor: "#f8fafc",
                                    border: "1px solid #e8edf2",
                                    borderRadius: "16px",
                                    padding: isMobile ? "1.75rem 1.5rem" : "2.25rem 2rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "4px",
                                    height: "100%",
                                    background: "linear-gradient(180deg, #058c42 0%, rgba(5,140,66,0.35) 100%)",
                                    borderRadius: "16px 0 0 16px",
                                }} />
                                <h3 style={{
                                    fontSize: isMobile ? "1.15rem" : "1.3rem",
                                    fontWeight: 500,
                                    fontFamily: PP_NEUE_MONTREAL,
                                    color: "#0d1117",
                                    marginBottom: "1rem",
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1.25,
                                    paddingLeft: "0.5rem",
                                }}>
                                    {block.title}
                                </h3>
                                <p style={{
                                    fontSize: "1rem",
                                    fontWeight: 400,
                                    fontFamily: PP_NEUE_MONTREAL,
                                    color: "#4b5563",
                                    lineHeight: 1.7,
                                    margin: 0,
                                    paddingLeft: "0.5rem",
                                }}>
                                    {block.body}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Built for ISO Audits */}
            <section
                style={{
                    padding: isMobile ? "3.5rem 1.25rem 4rem" : "5rem 2rem 5.5rem",
                    background: `
                        radial-gradient(ellipse 70% 60% at 15% 50%, rgba(5,140,66,0.08) 0%, transparent 65%),
                        radial-gradient(ellipse 60% 50% at 85% 50%, rgba(0,77,64,0.06) 0%, transparent 65%),
                        #f0fdf4
                    `,
                    fontFamily: PP_NEUE_MONTREAL,
                    borderTop: "1px solid #e8f5e9",
                }}
            >
                <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}
                    >
                        <SectionTag isMobile={isMobile}>Built for ISO Audits</SectionTag>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            fontSize: isMobile ? "1.75rem" : "2.35rem",
                            fontWeight: 500,
                            fontFamily: PP_NEUE_MONTREAL,
                            color: "#0d1117",
                            marginBottom: isMobile ? "2rem" : "2.5rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                        }}
                    >
                        The SafetyCulture Alternative for Structured ISO Audit Programmes
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14, duration: 0.55 }}
                        style={{
                            backgroundColor: "#fff",
                            border: "1px solid #d1fae5",
                            borderRadius: "20px",
                            padding: isMobile ? "2rem 1.5rem" : "2.75rem 3rem",
                            boxShadow: "0 12px 40px rgba(5,140,66,0.06)",
                            textAlign: "left",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "4px",
                            background: "linear-gradient(90deg, #058c42 0%, #004d40 100%)",
                        }} />
                        <p style={{
                            fontSize: isMobile ? "1.05rem" : "1.15rem",
                            fontWeight: 400,
                            fontFamily: PP_NEUE_MONTREAL,
                            color: "#374151",
                            lineHeight: 1.75,
                            margin: 0,
                        }}>
                            iAudit Global is a SafetyCulture alternative designed specifically for ISO 9001, 14001 and 45001 audit programmes. Unlike generic inspection apps, it manages the full audit lifecycle, integrates PDCA workflows and ensures corrective actions are verified, not simply closed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Compare the Fit — Two-Column Section */}
            <section
                style={{
                    padding: isMobile ? "3rem 1rem 4rem" : "5rem 2rem 6rem",
                    backgroundColor: "#f8fafc",
                    fontFamily: PP_NEUE_MONTREAL,
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
                        <SectionTag isMobile={isMobile}>Compare the fit</SectionTag>
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
                        See which platform is built for ISO audits
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
                        Both platforms support operational checks, but only one is purpose-built for ISO audit programmes, PDCA workflows and audit data ownership.
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
                                    <span style={{ fontWeight: 700, fontSize: "1rem", color: "#991b1b" }}>SafetyCulture</span>
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
                            sc: "Checklists without PDCA – Static forms focus on the inspection moment but fail to connect planning to systematic follow up.",
                            ia: "Integrated PDCA workflows – Every feature follows the Plan Do Check Act cycle to ensure your audit programme drives improvement.",
                        },
                        {
                            sc: "Expensive seat-based pricing – Costs scale with every new user which creates a financial barrier to collaboration across sites.",
                            ia: "Collaborative site-based pricing – Fixed pricing per site lets you involve your whole organisation without increasing your monthly bill.",
                        },
                        {
                            sc: "No data sovereignty – Standard SaaS model gives the platform vendor technical access to your sensitive internal audit history.",
                            ia: "Zero vendor access – We operate a strict zero access policy so your findings and evidence belong only to you.",
                        },
                        {
                            sc: "Generic AI form tools – AI features can build basic checklists but lack the specialised knowledge required for ISO clauses.",
                            ia: "Specialist ISO AI co-pilot – Audit Mate provides specific clause guidance and drafts structured plans based on ISO 19011 principles.",
                        },
                        {
                            sc: "Missing effectiveness checks – Tracking focuses on closing tasks rather than verifying that the systemic problem has been resolved.",
                            ia: "Verified systemic closure – Forces a verification step to ensure corrective actions genuinely stop the same findings from repeating.",
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
                                    <span style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.75rem" }}>✕ SafetyCulture</span>
                                </div>
                            )}

                            {/* SafetyCulture cell */}
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

            {/* Data Sovereignty & PDCA Lifecycle */}
            <section
                style={{
                    padding: isMobile ? "3.5rem 1.25rem 4.5rem" : "5rem 2rem 6rem",
                    backgroundColor: "#fff",
                    fontFamily: PP_NEUE_MONTREAL,
                    borderTop: "1px solid #f0f0f0",
                }}
            >
                <div style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? "1.5rem" : "2rem",
                }}>
                    {[
                        {
                            tag: "Data Sovereignty",
                            title: "A SafetyCulture Alternative with a Zero‑Access Policy",
                            body: "iAudit Global operates a strict Zero Access policy. As a SafetyCulture alternative built for ISO audits, we never access, mine or review your findings, ensuring full data ownership for regulated industries.",
                        },
                        {
                            tag: "PDCA Lifecycle",
                            title: "ISO Audit Management Software Built on Plan Do Check Act",
                            body: "iAudit Global embeds the entire Plan, Do, Check, Act cycle into your workflow. Unlike generic apps, we connect every finding to verified corrective actions, ensuring your audits drive actual improvement.",
                        },
                    ].map((block, i) => (
                        <motion.article
                            key={block.tag}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={isMobile ? undefined : { y: -4, transition: { duration: 0.25 } }}
                            style={{
                                backgroundColor: "#fafdfc",
                                border: "1px solid #e8edf2",
                                borderRadius: "20px",
                                padding: isMobile ? "2rem 1.5rem" : "2.5rem 2.25rem",
                                position: "relative",
                                overflow: "hidden",
                                fontFamily: PP_NEUE_MONTREAL,
                            }}
                        >
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "3px",
                                background: "linear-gradient(90deg, #058c42 0%, rgba(5,140,66,0.25) 100%)",
                            }} />
                            <SectionTag isMobile={isMobile} style={{ marginBottom: "1.25rem" }}>
                                {block.tag}
                            </SectionTag>
                            <h2 style={{
                                fontSize: isMobile ? "1.35rem" : "1.55rem",
                                fontWeight: 500,
                                fontFamily: PP_NEUE_MONTREAL,
                                color: "#0d1117",
                                marginBottom: "1rem",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.25,
                            }}>
                                {block.title}
                            </h2>
                            <p style={{
                                fontSize: "1rem",
                                fontWeight: 400,
                                fontFamily: PP_NEUE_MONTREAL,
                                color: "#4b5563",
                                lineHeight: 1.7,
                                margin: 0,
                            }}>
                                {block.body}
                            </p>
                        </motion.article>
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
                    fontFamily: PP_NEUE_MONTREAL,
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
                        <SectionTag isMobile={isMobile} variant="onDark">Get started</SectionTag>
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
                        Upgrade your audit programme in three steps
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
                        Start running structured, PDCA‑driven audits across every site in minutes, not months.
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
                                desc: "Start your 14-day free trial to run a gap analysis and identify your system gaps.",
                            },
                            {
                                step: "02",
                                title: "Migrate templates and data",
                                desc: "Effortlessly move your existing audit checklists and historical findings from your current inspection app.",
                            },
                            {
                                step: "03",
                                title: "Improve and report",
                                desc: "Track findings to verified closure and generate ISO-compliant reports using built-in PDCA workflows.",
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

            {/* Industries */}
            <section
                style={{
                    padding: isMobile ? "3.5rem 1.25rem 4.5rem" : "5.5rem 2rem 6rem",
                    backgroundColor: "#f8fafc",
                    fontFamily: PP_NEUE_MONTREAL,
                    borderTop: "1px solid #f0f0f0",
                }}
            >
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}
                    >
                        <SectionTag isMobile={isMobile}>Industries</SectionTag>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            fontSize: isMobile ? "1.85rem" : "2.4rem",
                            fontWeight: 500,
                            fontFamily: PP_NEUE_MONTREAL,
                            color: "#0d1117",
                            textAlign: "center",
                            marginBottom: isMobile ? "2.5rem" : "3.25rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.15,
                        }}
                    >
                        Structured ISO Audits Across Industries
                    </motion.h2>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile
                            ? "1fr"
                            : "repeat(3, 1fr)",
                        gap: isMobile ? "1rem" : "1.25rem",
                    }}>
                        {industryHighlights.map((industry, i) => (
                            <motion.div
                                key={industry.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    href={`/industries/${industry.slug}`}
                                    style={{
                                        display: "block",
                                        position: "relative",
                                        height: isMobile ? "200px" : "220px",
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        textDecoration: "none",
                                        fontFamily: PP_NEUE_MONTREAL,
                                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                                    }}
                                >
                                    <motion.div
                                        style={{ position: "absolute", inset: 0 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Image
                                            src={industry.image}
                                            alt={industry.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </motion.div>
                                    <div style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.08) 100%)",
                                        zIndex: 1,
                                    }} />
                                    <div style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: isMobile ? "1.25rem 1.25rem" : "1.5rem 1.5rem",
                                        zIndex: 2,
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "space-between",
                                        gap: "0.75rem",
                                    }}>
                                        <h3 style={{
                                            fontSize: isMobile ? "1.05rem" : "1.15rem",
                                            fontWeight: 500,
                                            fontFamily: PP_NEUE_MONTREAL,
                                            color: "#fff",
                                            margin: 0,
                                            lineHeight: 1.25,
                                            letterSpacing: "-0.01em",
                                        }}>
                                            {industry.title}
                                        </h3>
                                        <span style={{
                                            flexShrink: 0,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            backgroundColor: "rgba(255,255,255,0.15)",
                                            color: "#fff",
                                            backdropFilter: "blur(4px)",
                                        }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                backgroundColor="#f8fafc"
                tag="Ready to upgrade"
                title="Switch to the audit platform built by ISO auditors"
                description="Start free today and run gap analysis, audits, actions and reports in one structured platform."
            />

            {/* FAQ Section */}
            <FAQAccordion
                sparkleText="Frequently asked questions"
                heading="Frequently Asked Questions"
                items={[
                    {
                        question: "Can I migrate my existing templates from another tool to iAudit Global?",
                        answer: "Yes. Our team helps you move your current checklists into our PDCA‑driven system. You can also use Audit Mate to refine those templates, ensuring they are properly aligned with the specific requirements of ISO 9001, 14001 or 45001.",
                    },
                    {
                        question: "Why is site‑based pricing better than seat‑based pricing?",
                        answer: "Generalist apps often charge per user, which punishes you for involving more people in your audit programme. iAudit Global uses a fixed per‑site model so you can add as many auditors, managers and auditees as you need without your monthly bill increasing.",
                    },
                    {
                        question: "What makes iAudit Global a specialist ISO tool rather than a generic app?",
                        answer: "Most apps are designed for simple site checks. iAudit Global is built around the ISO 19011 standard and the PDCA cycle. It links your planning to your findings, and your findings to verified corrective actions, ensuring your programme drives continuous improvement.",
                    },
                    {
                        question: "How does the 14‑day free trial help with gap analysis?",
                        answer: "The trial gives you full access to our ISO‑aligned templates. You can use this period to run a complete self‑assessment of your current system, identifying nonconformities and building a roadmap to certification before you even commit to a plan.",
                    },
                    {
                        question: "Can iAudit Global see our internal audit findings and evidence?",
                        answer: "No. Unlike most SaaS vendors, we operate a strict zero‑access policy. Your audit history, photos and sensitive records are encrypted and belong entirely to your organisation. We host the workspace, but we cannot view or mine your data.",
                    },
                    {
                        question: "Do I need extensive training to use Audit Mate?",
                        answer: "Not at all. Audit Mate is a conversational AI assistant built into the platform. You simply ask it to draft a checklist, suggest evidence or explain a clause. It is designed to be intuitive for auditors and managers, regardless of their technical background.",
                    },
                ]}
            />

            <Footer />
        </div>
    );
}
