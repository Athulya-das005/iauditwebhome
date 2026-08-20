"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    centralise: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    preaudit: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    physical: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=480&fit=crop&q=80&fm=webp",
    auditday: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=480&fit=crop&q=80&fm=webp",
    postaudit: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "centralise", label: "Centralise Your Documentation" },
    { id: "pre-audit", label: "The Pre-Audit Review" },
    { id: "physical", label: "Inspecting the Physical Site" },
    { id: "audit-day", label: "The Audit Day" },
    { id: "post-audit", label: "Post-Audit Improvement" },
    { id: "iaudit", label: "How iAudit Global Helps" },
    { id: "conclusion", label: "Stop Reacting, Start Controlling" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const documentationItems = [
    "Contracts and Change Orders: Every deviation from the original plan must have a clear, authorised trail.",
    "Subcontractor Approvals: Ensure insurance, RAMS and competence records are up to date and verified.",
    "Project Plans and Specifications: Verify that the versions on site are the same as the ones in the office.",
    "Training and Competence Records: These are often the first things an auditor will ask for, particularly for safety compliance.",
];

const siteWalkItems = [
    "Safety Protocols: Are PPE requirements being followed? Is the signage correct? Are safety hazards like open edges or trip risks being managed effectively?",
    "Material Handling: Are materials stored correctly to prevent damage or environmental contamination?",
    "Workmanship: Is the quality of work matching the project specifications and tolerances?",
    "Staff Awareness: Talk to the people on the tools. If you ask a worker about the quality policy or the site safety rules, do they have a clear answer? Their awareness is a key part of your ISO 45001 and 9001 compliance.",
];

const iauditFeatures = [
    "Centralised Visibility: See the audit status and NCR trends across all your projects from a single dashboard.",
    "Automated Reporting: Generate professional audit reports in minutes, not days.",
    "Risk-Based Scheduling: Focus your internal audits where the risk is highest, ensuring you are always ready for an external review.",
    "Connected PDCA: Track every non-conformity from identification through to verified closure and effectiveness checks.",
];

const faqItems = [
    {
        question: "What is a construction compliance audit?",
        answer:
            "A construction compliance audit is a structured review of whether a project complies with ISO standards, contractual requirements, safety regulations and approved specifications. It examines documentation, site controls, inspections, and nonconformities to confirm that systems are working in practice, not just on paper.",
    },
    {
        question: "How do I prepare for a construction compliance audit?",
        answer:
            "To prepare for a construction compliance audit, centralise project documentation, review ITPs and inspection records, walk the site to verify physical controls, and analyse open nonconformities. Preparation should focus on demonstrating real operational control rather than last-minute paperwork organisation.",
    },
    {
        question: "What documents are required for a construction audit?",
        answer:
            "Common documents required during a construction audit include contracts and change orders, approved drawings, Inspection and Test Plans, subcontractor approvals, training and competence records, health and safety documentation, and evidence of corrective actions linked to nonconformities.",
    },
    {
        question: "How often should construction projects conduct internal audits?",
        answer:
            "Internal audits in construction should be risk-based rather than calendar-based. Higher-value or complex projects may require more frequent audits, especially where there are recurring NCRs, safety incidents or client-specific compliance requirements.",
    },
    {
        question: "What are the most common issues found in construction compliance audits?",
        answer:
            "Common findings include incomplete ITPs, poor traceability of inspections, outdated drawings on site, weak subcontractor documentation, ineffective corrective actions and repeated nonconformities across projects. These issues often stem from fragmented documentation or lack of supervision.",
    },
    {
        question: "How can digital tools improve construction audit preparation?",
        answer:
            "Digital audit tools help centralise documentation, capture site evidence in real time, track corrective actions and monitor trends across multiple projects. This reduces last-minute preparation and ensures compliance evidence is always accessible and up to date.",
    },
    {
        question: "How does iAudit Global help with construction compliance audits?",
        answer:
            "iAudit Global is Audit Management software built by certified ISO auditors. It supports clause-mapped checklists for ISO 9001, 14001 and 45001, mobile evidence capture on site, corrective action tracking with effectiveness checks, and risk-based scheduling across multiple projects. This keeps construction teams audit-ready every day rather than reacting before external reviews.",
    },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div
            style={{
                width: "100%",
                borderRadius: "0.875rem",
                overflow: "hidden",
                margin: "1.5rem 0 2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "320px" }}
                onError={(e) => {
                    e.currentTarget.style.display = "none";
                    (e.currentTarget.parentElement as HTMLElement).style.display = "none";
                }}
            />
        </div>
    );
}

export default function ConstructionComplianceAuditBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [tocOpen, setTocOpen] = useState(false);

    const font = '"Pp Neue Montreal", sans-serif';

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            for (let i = tocItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(tocItems[i].id);
                if (el && el.getBoundingClientRect().top < 140) {
                    setActiveSection(tocItems[i].id);
                    return;
                }
            }
            setActiveSection(tocItems[0].id);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (isMobile) setTocOpen(false);
    };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: font }}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: isMobile ? "55vw" : "70vh",
                    minHeight: isMobile ? "240px" : "440px",
                    maxHeight: "700px",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={HERO_IMAGE}
                    alt="How to prepare for a construction compliance audit"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: isMobile ? "1rem" : "2rem",
                        left: isMobile ? "1.25rem" : "2.5rem",
                        right: isMobile ? "1.25rem" : "2.5rem",
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            background: "rgba(255,255,255,0.18)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.35)",
                            color: "#fff",
                            borderRadius: "999px",
                            padding: "3px 14px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.09em",
                            textTransform: "uppercase",
                            marginBottom: "0.625rem",
                            fontFamily: font,
                        }}
                    >
                        Construction Compliance
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span
                            style={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.82rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                fontFamily: font,
                            }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            April 18, 2026
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span
                            style={{
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.82rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                fontFamily: font,
                            }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            9 Min Read
                        </span>
                    </div>
                </div>
            </div>

            <div
                style={{
                    borderBottom: "1px solid #e8e4df",
                    backgroundColor: "#f9f7f4",
                    position: "sticky",
                    top: 0,
                    zIndex: 40,
                }}
            >
                <div
                    style={{
                        maxWidth: "1260px",
                        margin: "0 auto",
                        padding: "0 1.5rem",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Link
                        href="/blog"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            color: "#6B7280",
                            fontSize: "0.79rem",
                            fontWeight: 500,
                            textDecoration: "none",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            fontFamily: font,
                        }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back To Blog
                    </Link>
                    {isMobile && (
                        <button
                            onClick={() => setTocOpen((v) => !v)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                background: "none",
                                border: "1px solid #e8e4df",
                                borderRadius: "6px",
                                padding: "4px 10px",
                                cursor: "pointer",
                                color: "#374151",
                                fontSize: "0.79rem",
                                fontFamily: font,
                            }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="3" y1="15" x2="21" y2="15" />
                            </svg>
                            Contents
                        </button>
                    )}
                </div>
                {isMobile && tocOpen && (
                    <div
                        style={{
                            background: "#fff",
                            borderBottom: "1px solid #e8e4df",
                            padding: "0.875rem 1.25rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1px",
                        }}
                    >
                        {tocItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    style={{
                                        textAlign: "left",
                                        background: isActive ? "rgba(0,102,68,0.07)" : "transparent",
                                        border: "none",
                                        borderLeft: isActive ? "3px solid #006644" : "3px solid transparent",
                                        padding: "0.45rem 0.75rem",
                                        borderRadius: "0 5px 5px 0",
                                        cursor: "pointer",
                                        fontSize: "0.84rem",
                                        color: isActive ? "#006644" : "#6B7280",
                                        fontWeight: isActive ? 600 : 400,
                                        fontFamily: font,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div
                style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "210px 1fr 240px",
                    gap: isMobile ? "2rem" : "3rem",
                    alignItems: "start",
                }}
            >
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <p
                            style={{
                                fontSize: "0.68rem",
                                fontWeight: 700,
                                letterSpacing: "0.13em",
                                textTransform: "uppercase",
                                color: "#374151",
                                margin: "0 0 0.625rem",
                                fontFamily: font,
                            }}
                        >
                            Contents
                        </p>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "1px", background: "#e4e0db" }} />
                            <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                {tocItems.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollTo(item.id)}
                                            style={{
                                                textAlign: "left",
                                                border: "none",
                                                padding: "0.48rem 0.625rem 0.48rem 1.5rem",
                                                cursor: "pointer",
                                                fontSize: "0.845rem",
                                                fontFamily: font,
                                                lineHeight: 1.38,
                                                color: isActive ? "#006644" : "#6B7280",
                                                fontWeight: isActive ? 600 : 400,
                                                background: isActive ? "rgba(0,102,68,0.06)" : "transparent",
                                                borderRadius: "0 6px 6px 0",
                                                borderLeft: isActive ? "2px solid #006644" : "2px solid transparent",
                                                transition: "color 0.25s ease, background 0.25s ease, border-color 0.25s ease",
                                            }}
                                        >
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>
                )}

                <article>
                    <h1
                        style={{
                            fontSize: isMobile ? "2.15rem" : "2.85rem",
                            fontWeight: 600,
                            color: "#111827",
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            margin: "0 0 1rem",
                            fontFamily: font,
                        }}
                    >
                        How to Prepare for a Construction Compliance Audit and Reduce Risk on Site
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Preparing for a construction compliance audit is not about last-minute paperwork. It is about proving that your project controls work in practice. To stay audit-ready, centralise key documents, verify that Inspection and Test Plans are actively used on site, review nonconformities for repeat issues, and conduct internal construction site audits before the external review. A strong construction compliance audit process focuses on traceability, supervision, safety controls and corrective action effectiveness across ISO 9001, 14001 and 45001 requirements.
                        </p>
                        <p style={para(font)}>
                            iAudit Global is audit management software built by certified ISO auditors that connects evidence, findings and corrective actions in one structured system, helping construction teams remain compliant and reduce risk across multiple projects.
                        </p>
                        <p style={para(font)}>
                            I have spent the best part of two decades on construction sites, and I have seen the same scene play out more times than I can count. An audit is scheduled for the following morning, and the site office descends into chaos. Site managers are hunting for training records, supervisors are frantically updating ITPs, and someone is inevitably trying to find a signature from a subcontractor who left the site three weeks ago.
                        </p>
                        <p style={para(font)}>
                            If this sounds familiar, you are not preparing for an audit. You are reacting to one.
                        </p>
                        <p style={para(font)}>
                            Preparing for a construction compliance audit, whether it is for ISO 9001, 14001 or 45001, should not be a special event. It should be a reflection of how the project is controlled every day. If you have to spend days getting ready, it is a clear sign that your management system is not providing the control it was designed for.
                        </p>
                        <p style={para(font)}>
                            Here is how I approach audit preparation to ensure that when the auditor arrives, you are showing them a controlled site, not a polished version of a messy reality.
                        </p>
                    </div>

                    <div id="centralise" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Foundation: Centralise Your Documentation</h2>
                        <SectionImage src={sectionImages.centralise} alt="Centralised construction project documentation for compliance audits" />
                        <p style={para(font)}>
                            In construction, documentation is your primary evidence. If it isn&apos;t written down, it didn&apos;t happen. The biggest mistake I see is fragmented data. One project has its records on a local drive, another has them in a physical folder in the site hut, and the subcontractor approvals are buried in an email chain at head office.
                        </p>
                        <p style={para(font)}>To prepare effectively, you must centralise your documentation. Before an audit begins, you should have easy access to:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {documentationItems.map((item, i, arr) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: "0.875rem",
                                        alignItems: "flex-start",
                                        padding: "0.875rem 0",
                                        borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none",
                                    }}
                                >
                                    <span
                                        style={{
                                            minWidth: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            background: "rgba(0,102,68,0.1)",
                                            color: "#006644",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginTop: "1px",
                                        }}
                                    >
                                        {i + 1}
                                    </span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            When you centralise these records, you remove the stress of the hunt. You can present evidence in seconds rather than minutes, which immediately builds the auditor&apos;s confidence in your management system.
                        </p>
                    </div>

                    <div id="pre-audit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Pre-Audit: Identifying the Gaps Early</h2>
                        <SectionImage src={sectionImages.preaudit} alt="Pre-audit gap analysis for construction compliance" />
                        <p style={para(font)}>
                            I never recommend waiting for the external auditor to find your problems. A successful audit starts with a thorough internal review.
                        </p>
                        <p style={para(font)}>
                            Start by reviewing your project documentation against the audit scope. Are your Inspection and Test Plans (ITPs) actually being used, or are they being filled in retrospectively? I often see ITPs that have been signed off for work that hasn&apos;t even started, or worse, work that was finished months ago with no signatures at all.
                        </p>
                        <p style={para(font)}>
                            This is the time to identify non-conformities (NCRs) yourself. Identifying a deviation and showing how you are fixing it is actually a positive sign for an auditor. It proves that your system is working and that you have a culture of self-correction.
                        </p>
                    </div>

                    <div id="physical" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Physical Site: Inspecting the Reality</h2>
                        <SectionImage src={sectionImages.physical} alt="Physical site inspection for construction compliance audit" />
                        <p style={para(font)}>
                            Once the paperwork is in order, you must walk the site. An auditor will always compare what the documents say to what the site shows.
                        </p>
                        <p style={para(font)}>
                            If your ISO 14001 plan says you have a controlled waste management system, but the skips are overflowing and contaminated, the paperwork is worthless. During your site walk, focus on:
                        </p>
                        <ul style={ul(font)}>
                            {siteWalkItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div id="audit-day" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Audit Day: Professionalism and Transparency</h2>
                        <SectionImage src={sectionImages.auditday} alt="Construction compliance audit day on site" />
                        <p style={para(font)}>
                            When the auditor arrives, the way you manage the day is as important as the evidence you provide.
                        </p>
                        <p style={para(font)}>
                            Be transparent. If an auditor asks a question, answer it directly. If you try to hide a known issue, a seasoned auditor will find it, and their scrutiny will double. Instead, show them the issue and, more importantly, show them the corrective action you have already put in place.
                        </p>
                        <p style={para(font)}>
                            Use this time as a learning exercise. A good audit is not just about keeping a certificate on the wall. It is about finding ways to make the business run more efficiently. If the auditor identifies a better way to store materials or a more robust way to track training, take it on board.
                        </p>
                    </div>

                    <div id="post-audit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Post-Audit: Turning Findings into Improvement</h2>
                        <SectionImage src={sectionImages.postaudit} alt="Post-audit corrective actions and PDCA improvement in construction" />
                        <p style={para(font)}>
                            The work does not stop when the auditor leaves. In fact, the most important phase of a construction compliance audit is what happens next.
                        </p>
                        <p style={para(font)}>
                            Analyse the findings. If there was a non-conformity, why did it happen? Was it a lack of training, a poor process or simply a lack of supervision? Use the PDCA (Plan-Do-Check-Act) cycle to address the root cause.
                        </p>
                        <p style={para(font)}>
                            Develop actionable recommendations and present them to site management. If you do not change the process, the same finding will reappear in six months. Your goal is to move from fixing symptoms to preventing recurrence across all your projects.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global Simplifies Preparation</h2>
                        <SectionImage src={sectionImages.iaudit} alt="iAudit Global audit management software for construction compliance" />
                        <p style={para(font)}>
                            The reason audit preparation is traditionally so painful is that the data is disconnected. iAudit Global was built to solve this exact problem.
                        </p>
                        <p style={para(font)}>
                            Instead of hunting for evidence, iAudit Global allows you to capture it in real time on the site. Photos, signatures and inspection records are attached to specific locations and dates. Your ITPs and checklists are digitised, meaning they are always up to date and never lost in a site hut.
                        </p>
                        <p style={para(font)}>Our platform provides:</p>
                        <ul style={ul(font)}>
                            {iauditFeatures.map((item) => (
                                <li key={item}>
                                    <strong>{item.split(":")[0]}:</strong>
                                    {item.split(":").slice(1).join(":")}
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            When you use iAudit Global, you are not preparing for an audit for two weeks. You are ready for one every single day.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Stop Reacting, Start Controlling</h2>
                        <p style={para(font)}>
                            A construction compliance audit should be a routine check of a healthy system. If you follow a structured approach by organising your documentation, conducting regular internal reviews and sampling the physical reality of the site, you remove the disruption and risk.
                        </p>
                        <p style={para(font)}>
                            The best audit is the one where you can answer every question with a clear, evidenced piece of data, showing that you are in full control of your project quality, safety and environmental impact.
                        </p>

                        <div
                            style={{
                                background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)",
                                borderRadius: "1.25rem",
                                padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem",
                                position: "relative",
                                overflow: "hidden",
                                marginTop: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-40px",
                                    right: "-40px",
                                    width: "180px",
                                    height: "180px",
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.06)",
                                }}
                            />
                            <h3
                                style={{
                                    fontSize: isMobile ? "1.35rem" : "1.55rem",
                                    fontWeight: 600,
                                    color: "#fff",
                                    letterSpacing: "-0.018em",
                                    lineHeight: 1.28,
                                    margin: "0 0 1rem",
                                    fontFamily: font,
                                    position: "relative",
                                }}
                            >
                                Ready to move beyond the audit panic?
                            </h3>
                            <p style={greenPara(font)}>
                                Start your 14-day free trial of iAudit Global today and see how our audit management software simplifies compliance across your entire project portfolio.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", position: "relative" }}>
                                <a
                                    href="https://apps.iaudit.global/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        background: "#fff",
                                        color: "#006644",
                                        padding: "0.85rem 1.4rem",
                                        borderRadius: "999px",
                                        fontWeight: 600,
                                        fontSize: "0.92rem",
                                        textDecoration: "none",
                                        fontFamily: font,
                                    }}
                                >
                                    Start Your Free Trial
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                                <Link
                                    href="/contact"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        background: "transparent",
                                        color: "#fff",
                                        padding: "0.85rem 1.4rem",
                                        borderRadius: "999px",
                                        fontWeight: 600,
                                        fontSize: "0.92rem",
                                        textDecoration: "none",
                                        border: "1.5px solid rgba(255,255,255,0.5)",
                                        fontFamily: font,
                                    }}
                                >
                                    Book a Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>

                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: "1.1rem",
                                border: "1px solid #e8e4df",
                                padding: "2rem 1.5rem",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #002e1d, #006644)",
                                    margin: "0 auto 1.1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>
                                iAudit Global Team
                            </p>
                            <p
                                style={{
                                    margin: "0 0 1.1rem",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "#9CA3AF",
                                    fontFamily: font,
                                }}
                            >
                                Author
                            </p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                Helping construction teams stay audit-ready with centralised evidence, ITP controls and PDCA-driven corrective actions.
                            </p>
                            <Link
                                href="/contact"
                                style={{
                                    display: "block",
                                    background: "#3d5a47",
                                    color: "#fff",
                                    padding: "0.8rem 1rem",
                                    borderRadius: "999px",
                                    fontWeight: 700,
                                    fontSize: "0.75rem",
                                    textDecoration: "none",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    fontFamily: font,
                                }}
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </aside>
                )}

                {isMobile && (
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "1.1rem",
                            border: "1px solid #e8e4df",
                            padding: "1.75rem 1.5rem",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "72px",
                                height: "72px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #002e1d, #006644)",
                                margin: "0 auto 0.875rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>
                            iAudit Global Team
                        </p>
                        <p
                            style={{
                                margin: "0 0 1rem",
                                fontSize: "0.68rem",
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#9CA3AF",
                                fontFamily: font,
                            }}
                        >
                            Author
                        </p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                            Helping construction teams stay audit-ready with centralised evidence, ITP controls and PDCA-driven corrective actions.
                        </p>
                        <Link
                            href="/contact"
                            style={{
                                display: "block",
                                background: "#3d5a47",
                                color: "#fff",
                                padding: "0.75rem 1rem",
                                borderRadius: "999px",
                                fontWeight: 700,
                                fontSize: "0.75rem",
                                textDecoration: "none",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                fontFamily: font,
                            }}
                        >
                            Book Consultation
                        </Link>
                    </div>
                )}
            </div>

            <div id="faq" style={{ scrollMarginTop: "58px" }}>
                <FAQAccordion items={faqItems} heading="Frequently asked questions" sparkleText="Support" />
            </div>

            <CTA />
            <Footer />
        </div>
    );
}

function h2(font: string): React.CSSProperties {
    return {
        fontSize: "1.6rem",
        fontWeight: 600,
        color: "#111827",
        letterSpacing: "-0.018em",
        lineHeight: 1.28,
        margin: "0 0 0.75rem",
        fontFamily: font,
    };
}

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}

function ul(font: string): React.CSSProperties {
    return {
        margin: "0 0 1.15rem",
        paddingLeft: "1.25rem",
        color: "#374151",
        fontSize: "0.98rem",
        lineHeight: 1.85,
        fontFamily: font,
        display: "flex",
        flexDirection: "column",
        gap: "0.35rem",
    };
}

function greenPara(font: string): React.CSSProperties {
    return {
        color: "rgba(255,255,255,0.82)",
        fontSize: "0.975rem",
        lineHeight: 1.8,
        margin: "0 0 0.875rem",
        position: "relative",
        fontFamily: font,
    };
}
