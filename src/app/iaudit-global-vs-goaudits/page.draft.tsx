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
import { PP_NEUE_MONTREAL, comparisonType } from "@/constants/typography";

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
        { src: "/images/clients/stannah.png", alt: "Stannah client logo", title: "Stannah" },
        { src: "/images/clients/fujitec.png", alt: "Fujitec client logo", title: "Fujitec" },
        { src: "/images/clients/construct-lifts.png", alt: "Construct Lifts client logo", title: "Construct Lifts" },
        { src: "/images/clients/peerless.png", alt: "Peerless Lift Services client logo", title: "Peerless Lift Services" },
        { src: "/images/clients/adstone.png", alt: "Adstone Construction Limited client logo", title: "Adstone Construction Limited" },
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
                    paddingTop: "var(--page-top-offset)",
                    paddingLeft: isMobile ? "1.25rem" : "2rem",
                    paddingRight: isMobile ? "1.25rem" : "2rem",
                    paddingBottom: isMobile ? "40px" : "80px",
                    textAlign: "center",
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <motion.div
                        variants={fadeUp}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}
                    >
                        <SectionTag isMobile={isMobile}>GoAudits Alternative</SectionTag>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        style={{
                            ...comparisonType.heroH1(isMobile),
                            marginBottom: "1.5rem",
                        }}
                    >
                        The GoAudit Alternative Built for Structured ISO Audit Programmes
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        style={{
                            ...comparisonType.heroLead(isMobile),
                            maxWidth: "700px",
                            margin: "0 auto 2.5rem",
                        }}
                    >
                        iAudit Global is a GoAudit alternative designed for ISO 9001, 14001 and 45001 audits, embedding PDCA workflows, corrective action verification and full audit data ownership.
                    </motion.p>

                    <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="https://apps.iaudit.global"
                            className="btn-animate"
                            style={{ padding: "14px 28px", borderRadius: "8px", ...comparisonType.ctaButton() }}
                        >
                            <span>Start free gap analysis →</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-outline-animate"
                            style={{ padding: "14px 28px", borderRadius: "8px", ...comparisonType.ctaButton() }}
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
                        ...comparisonType.caption(isMobile),
                        marginBottom: isMobile ? "2rem" : "2.5rem",
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

            {/* GoAudits Overview */}
            <section
                style={{
                    padding: isMobile ? "3.5rem 1.25rem 4rem" : "5.5rem 2rem 6rem",
                    backgroundColor: "#fff",
                    fontFamily: PP_NEUE_MONTREAL,
                    borderTop: "1px solid #f0f0f0",
                }}
            >
                <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}
                    >
                        <SectionTag isMobile={isMobile}>GoAudits Overview</SectionTag>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            ...comparisonType.sectionH2(isMobile),
                            textAlign: "center",
                            marginBottom: isMobile ? "2.5rem" : "3.5rem",
                        }}
                    >
                        GoAudits Overview:
                    </motion.h2>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: isMobile ? "1.25rem" : "1.5rem",
                    }}>
                        {[
                            {
                                title: "What is GoAudits?",
                                body: "GoAudits is a digital inspection platform designed to replace manual paperwork with mobile checklists. It helps frontline teams conduct site checks, capture photos and generate automated reports for operational visibility.",
                            },
                            {
                                title: "Who Typically Uses GoAudits?",
                                body: "The software is frequently adopted by teams in retail, hospitality and facility management. It is designed for operational staff who need to perform high‑volume site inspections and daily safety checks.",
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
                                    ...comparisonType.cardH2(isMobile),
                                    marginBottom: "1rem",
                                    paddingLeft: "0.5rem",
                                }}>
                                    {block.title}
                                </h3>
                                <p style={{
                                    ...comparisonType.body(),
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

            {/* GoAudit Alternative — Structured ISO Control */}
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
                        <SectionTag isMobile={isMobile}>GoAudit Alternative</SectionTag>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        style={{
                            ...comparisonType.sectionH2(isMobile),
                            marginBottom: isMobile ? "2rem" : "2.5rem",
                        }}
                    >
                        The GoAudit Alternative Designed for Structured ISO Control
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
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "4px",
                                background: "linear-gradient(90deg, #058c42 0%, #004d40 100%)",
                                transformOrigin: "left",
                            }}
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.28, duration: 0.5 }}
                            style={{
                            ...comparisonType.bodyLarge(isMobile),
                                margin: "0 0 2rem",
                            }}
                        >
                            iAudit Global is a specialist GoAudits alternative built by certified auditors for professional ISO programmes. Unlike general inspection apps, it integrates the full PDCA cycle, provides clause-level guidance, and ensures your sensitive audit data remains entirely under your own control.
                        </motion.p>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                            gap: isMobile ? "0.75rem" : "1rem",
                            paddingTop: "0.25rem",
                            borderTop: "1px solid #ecfdf5",
                        }}>
                            {[
                                {
                                    label: "Full PDCA cycle",
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "Clause-level guidance",
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "Your data, your control",
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0110 0v4" />
                                        </svg>
                                    ),
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35 + i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.65rem",
                                        padding: isMobile ? "0.65rem 0" : "0.5rem 0",
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                                        style={{
                                            flexShrink: 0,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "10px",
                                            backgroundColor: "rgba(5,140,66,0.08)",
                                            color: "#058c42",
                                        }}
                                    >
                                        {item.icon}
                                    </motion.span>
                                    <span style={{
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        color: "#14532d",
                                        lineHeight: 1.3,
                                    }}>
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
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
                            ...comparisonType.sectionH2(isMobile),
                            textAlign: "center",
                            marginBottom: "1rem",
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
                            ...comparisonType.bodyLarge(isMobile),
                            color: "#6b7280",
                            textAlign: "center",
                            maxWidth: "720px",
                            margin: "0 auto 3.5rem",
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
                                    ...comparisonType.tableCell(isMobile),
                                    color: "#6b7280",
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
                                    ...comparisonType.tableCell(isMobile),
                                    color: "#374151",
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

            {/* Auditor-Led Design & PDCA Architecture */}
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
                            tag: "Auditor-Led Design",
                            title: "Built by Auditors Who Understand ISO Complexity",
                            body: "Unlike generalist tools designed by developers for basic checklists, iAudit Global was created by certified ISO auditors. Every feature, from clause-mapped checklists to the PDCA architecture, is built specifically to satisfy the rigour of professional auditing standards. This makes us the ideal GoAudits alternative for organisations that need more than just a digital form.",
                        },
                        {
                            tag: "PDCA Architecture",
                            title: "The PDCA‑Driven GoAudit Alternative for ISO Teams",
                            body: "Most apps capture data but fail to drive improvement. iAudit Global embeds the Plan-Do-Check-Act cycle into your audits, ensuring findings are linked to verified corrective actions. We don't just help you document a problem; we help you ensure it has been resolved through systematic effectiveness checks.",
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
                                ...comparisonType.cardH2(isMobile),
                                marginBottom: "1rem",
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
                        How to build a smarter audit programme today
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        style={{
                            ...comparisonType.stepBody(),
                            color: "rgba(255,255,255,0.65)",
                            textAlign: "center",
                            maxWidth: "620px",
                            margin: "0 auto 3.5rem",
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
                                title: "Migrate templates and data",
                                desc: "Effortlessly move existing audit checklists and historical findings using our template migration and data import.",
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
                                    ...comparisonType.stepH3(),
                                    color: "#fff",
                                    marginBottom: "0.85rem",
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    ...comparisonType.stepBody(),
                                    color: "rgba(255,255,255,0.65)",
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
                            ...comparisonType.sectionH2(isMobile),
                            textAlign: "center",
                            marginBottom: isMobile ? "2.5rem" : "3.25rem",
                        }}
                    >
                        Structured ISO Audits Across Industries
                    </motion.h2>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
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
                                            alt={`${industry.title} industry for ISO audit management software`}
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
                title="Upgrade to software built for ISO programmes"
                description="Move beyond simple inspections. Visit the app to start your 14 day free self‑assessment and identify system gaps across your organisation."
                buttonText="Start your free trial"
            />

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
        </div>
    );
}
