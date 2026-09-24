"use client";

import React, { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
    changes: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    organisations: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    prepare: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=480&fit=crop&q=80&fm=webp",
    audits: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=480&fit=crop&q=80&fm=webp",
    support: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "tldr", label: "TL;DR" },
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What is ISO 9001:2026?" },
    { id: "changes", label: "What has changed?" },
    { id: "comparison", label: "2015 vs 2026" },
    { id: "organisations", label: "What it means for organisations" },
    { id: "prepare", label: "How to prepare" },
    { id: "audits", label: "Internal audits" },
    { id: "support", label: "How iAudit can help" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const comparisonRows = [
    { area: "Overall framework", v2015: "Established QMS framework", v2026: "Familiar framework with targeted updates" },
    { area: "Leadership", v2015: "Leadership and commitment", v2026: "Stronger emphasis on leadership and quality culture" },
    { area: "Risks and opportunities", v2015: "Risk-based thinking", v2026: "Clearer treatment of risks and opportunities" },
    { area: "Organisational context", v2015: "Context of the organisation", v2026: "Updated clarity and guidance" },
    { area: "ISO alignment", v2015: "Existing Harmonized Structure", v2026: "Latest Harmonized Structure" },
    { area: "Guidance", v2015: "Existing supporting guidance", v2026: "Additional Annex A guidance" },
];

const prepareSteps = [
    {
        title: "Understand the revised requirements",
        text: "Begin by reviewing ISO 9001:2026 and identifying the areas that are relevant to your organisation.",
    },
    {
        title: "Carry out a gap assessment",
        text: "Compare the current QMS with the revised requirements. Focus on actual processes as well as documented information.",
    },
    {
        title: "Review your internal audit programme",
        text: "Check that your audit programme covers the areas affected by the revision and gives auditors enough scope to gather objective evidence.",
    },
    {
        title: "Involve the people responsible for the QMS",
        text: "Those responsible for processes need to understand what has changed and how their responsibilities may be affected. A transition is much easier to manage when the people operating the processes understand what is expected of them.",
    },
    {
        title: "Track actions through to completion",
        text: "A gap assessment is only useful if identified actions are followed through. Findings, corrective actions and follow-up should provide a clear record of what was identified, what was done and whether the action was effective.",
    },
];

const faqItems = [
    {
        question: "What is ISO 9001:2026?",
        answer:
            "ISO 9001:2026 is the sixth edition of the international standard for Quality Management Systems. It was published on 16 September 2026 and replaces ISO 9001:2015. The revised edition keeps the familiar QMS framework while introducing targeted changes to improve clarity, usability and relevance.",
    },
    {
        question: "What are the key changes in ISO 9001:2026?",
        answer:
            "Key changes include a stronger focus on leadership, quality culture and ethical behaviour, clearer treatment of risks and opportunities, updated considerations around organisational context and improved alignment with other ISO management system standards. The revised standard also includes additional guidance to help organisations understand its requirements.",
    },
    {
        question: "Does ISO 9001:2026 replace ISO 9001:2015?",
        answer:
            "Yes. ISO 9001:2026 replaces ISO 9001:2015 as the current edition of the standard. Organisations certified to the previous edition will need to plan their transition according to the requirements and timeline set by their certification body.",
    },
    {
        question: "When do organisations need to transition to ISO 9001:2026?",
        answer:
            "The transition period runs after publication of the revised standard, with the applicable deadline depending on accreditation and certification arrangements. Under the current UKAS transition arrangements, certification bodies are required to transition certified customers by 30 September 2029. Organisations should confirm the specific transition requirements with their certification body.",
    },
    {
        question: "How should organisations prepare for ISO 9001:2026?",
        answer:
            "A good starting point is a gap assessment against the revised standard. Organisations should then review affected processes, documented information, responsibilities and internal audit programmes. Any identified actions should be tracked through to completion, with evidence that changes have been implemented and are effective.",
    },
    {
        question: "Will internal audits need to change for ISO 9001:2026?",
        answer:
            "Internal audit programmes should be reviewed to ensure they address the revised requirements and relevant areas of the organisation's QMS. Auditors should consider audit criteria, evidence, findings and corrective actions rather than simply updating checklists. The focus should remain on whether requirements are understood, implemented and effective.",
    },
    {
        question: "Can iAudit help with the ISO 9001:2026 transition?",
        answer: (
            <>
                Yes. iAudit is built by auditors, for ISO audits, and provides tools for audit planning, ISO-focused checklists, evidence capture, findings management, corrective actions and reporting. Organisations preparing for ISO 9001:2026 can use a structured audit process to identify gaps, document evidence and track actions throughout the transition. iAudit also offers a{" "}
                <a
                    href="https://www.iaudit.global/contact"
                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                    free consultation
                </a>{" "}
                to discuss your transition and audit requirements.
            </>
        ),
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

export default function Iso90012026KeyChangesBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("tldr");
    const [tocOpen, setTocOpen] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';
    const linkStyle: CSSProperties = {
        color: "#006644",
        fontWeight: 600,
        textDecoration: "underline",
        textUnderlineOffset: "3px",
    };

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
            <div className="blog-reading-scope">
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
                        alt="ISO 9001:2026 key changes, transition and what organisations need to do"
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
                            ISO 9001
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                September 23, 2026
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                12 Min Read
                            </span>
                        </div>
                    </div>
                </div>

                <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: "var(--blog-sticky-top)", zIndex: 50 }}>
                    <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.25rem", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                        <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "0.875rem 1.25rem", display: "flex", flexDirection: "column", gap: "1px", maxHeight: "60vh", overflowY: "auto" }}>
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
                        <aside style={{ position: "sticky", top: "calc(var(--blog-sticky-offset) + 8px)", alignSelf: "start" }}>
                            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#374151", margin: "0 0 0.625rem", fontFamily: font }}>
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

                    <article style={{ minWidth: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
                        <h1
                            style={{
                                fontSize: isMobile ? "1.85rem" : "2.85rem",
                                fontWeight: 600,
                                color: "#111827",
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                                margin: "0 0 0.75rem",
                                fontFamily: font,
                            }}
                        >
                            ISO 9001:2026: Key Changes, Transition and What Organisations Need to Do
                        </h1>
                        <p
                            style={{
                                margin: "0 0 1.5rem",
                                fontSize: isMobile ? "0.88rem" : "0.95rem",
                                color: "#6B7280",
                                lineHeight: 1.55,
                                fontFamily: font,
                            }}
                        >
                            By Mathew Chiweda, Co-founder &amp; Managing Director, iAudit Global
                        </p>

                        <div id="tldr" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginBottom: "2rem" }}>
                            <div
                                style={{
                                    background: "rgba(0,102,68,0.05)",
                                    border: "1px solid rgba(0,102,68,0.14)",
                                    borderRadius: "0.875rem",
                                    padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                                }}
                            >
                                <h2 style={{ ...h2(font, isMobile), marginBottom: "0.75rem" }}>TL;DR</h2>
                                <p style={para(font)}>
                                    ISO 9001:2026 is the new edition of the Quality Management System standard, replacing ISO 9001:2015. This guide explains the key changes, including stronger emphasis on leadership, quality culture, ethical behaviour, risks and opportunities, and alignment with other ISO management system standards.
                                </p>
                                <p style={para(font)}>
                                    It also covers what the changes mean for organisations, how to assess gaps, prepare internal audits and manage the transition. From an auditor&apos;s perspective, the focus should be on understanding how the revised requirements affect real processes, evidence and continual improvement, not simply updating documents.
                                </p>
                                <p style={{ ...para(font), marginBottom: 0 }}>
                                    iAudit Global can help organisations prepare through structured ISO audit management and offers a{" "}
                                    <a href="https://www.iaudit.global/contact" style={linkStyle}>
                                        free consultation to discuss the transition
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <div id="intro" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)" }}>
                            <p style={para(font)}>
                                ISO 9001:2026 has now been published, replacing ISO 9001:2015 as the current edition of the international standard for Quality Management Systems. For organisations already working with ISO 9001, the arrival of a new edition naturally raises questions about what has changed, what needs to be updated and how the transition should be managed.
                            </p>
                            <p style={para(font)}>
                                From an audit perspective, I think the most useful place to start is by separating the actual changes from the assumptions that can quickly build up around a new edition. ISO 9001:2026 is not a complete rewrite of the standard. It builds on the familiar framework while introducing targeted changes intended to improve clarity, usability and relevance. The emphasis is stronger in areas such as leadership, quality culture, ethical behaviour, risks and opportunities, and alignment with other ISO management system standards.
                            </p>
                            <p style={para(font)}>
                                For organisations preparing for the transition, the important question is not simply, &ldquo;What are the new clauses?&rdquo; It is how those changes affect the way the Quality Management System is managed, implemented and audited.
                            </p>
                        </div>

                        <div id="what" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.25rem" }}>
                            <h2 style={h2(font, isMobile)}>What is ISO 9001:2026?</h2>
                            <SectionImage src={sectionImages.what} alt="Quality management team reviewing ISO 9001 requirements" />
                            <p style={para(font)}>
                                ISO 9001 is the internationally recognised standard for Quality Management Systems. It provides a framework that organisations can use to establish, implement, maintain and continually improve a system for managing quality.
                            </p>
                            <p style={para(font)}>
                                ISO 9001:2026 is the sixth edition of the standard. It was published on 16 September 2026 and replaces ISO 9001:2015 and its 2024 amendment. The revised edition continues to provide a framework for organisations of different sizes and sectors, while updating the standard to reflect the way organisations operate today.
                            </p>
                            <p style={para(font)}>
                                For organisations already using ISO 9001:2015, I would not approach the transition as though the existing QMS needs to be replaced. There is an established foundation to build on. The first step is to understand the changes and assess their impact before deciding what actually needs to be updated.
                            </p>
                        </div>

                        <div id="changes" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.25rem" }}>
                            <h2 style={h2(font, isMobile)}>What has changed in ISO 9001:2026?</h2>
                            <SectionImage src={sectionImages.changes} alt="Leadership and quality culture discussion in a meeting" />
                            <p style={para(font)}>
                                The changes in ISO 9001:2026 are focused on making the standard clearer and strengthening areas that have become increasingly important to effective quality management.
                            </p>

                            <h3 style={h3(font)}>A stronger focus on leadership and quality culture</h3>
                            <p style={para(font)}>
                                Leadership has always been part of ISO 9001, but the 2026 edition places greater emphasis on quality culture, ethical behaviour and accountability.
                            </p>
                            <p style={para(font)}>
                                From an audit perspective, this is important because a QMS cannot be effective if quality is treated as the responsibility of one department. I look at how leaders make decisions, communicate expectations and support quality across the organisation because these factors have a direct effect on how the system works in practice.
                            </p>

                            <h3 style={h3(font)}>Clearer treatment of risks and opportunities</h3>
                            <p style={para(font)}>
                                ISO 9001:2026 provides greater clarity around risks and opportunities, including a clearer distinction between the two. This supports a more proactive approach to decision-making.
                            </p>
                            <p style={para(font)}>
                                For auditors and organisations, I would look beyond whether a risk register exists. The more useful question is whether risks and opportunities are actually considered when planning, making decisions and improving processes.
                            </p>

                            <h3 style={h3(font)}>Greater attention to organisational context</h3>
                            <p style={para(font)}>
                                The revised standard continues to recognise that a Quality Management System needs to reflect the organisation and the environment in which it operates.
                            </p>
                            <p style={para(font)}>
                                Climate change considerations introduced through the 2024 amendment also continue to be relevant. Organisations should consider whether climate change is a relevant issue for their QMS and whether it affects their ability to achieve intended results.
                            </p>

                            <h3 style={h3(font)}>Better alignment with other ISO standards</h3>
                            <p style={para(font)}>
                                ISO 9001:2026 adopts the latest Harmonized Structure used across ISO management system standards. For organisations operating integrated systems, this can make it easier to align quality management activities with other management system requirements.
                            </p>

                            <h3 style={h3(font)}>More guidance for users</h3>
                            <p style={para(font)}>
                                The new edition also includes a new Annex A intended to help users understand key concepts, terminology and the intent behind requirements.
                            </p>
                            <p style={para(font)}>
                                I see this as useful where organisations need to interpret how a requirement should be applied within their own context. Understanding the intent behind a requirement is often just as important as knowing the wording itself.
                            </p>
                        </div>

                        <div id="comparison" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.25rem" }}>
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "1rem",
                                    border: "1px solid #e8e4df",
                                    overflow: "hidden",
                                    margin: "0 0 1.5rem",
                                    boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                                }}
                            >
                                <div style={{ padding: isMobile ? "1.25rem 1.1rem 1rem" : "1.5rem 1.5rem 1.15rem" }}>
                                    <h2 style={{ ...h2(font, isMobile), marginBottom: "0.75rem" }}>ISO 9001:2015 vs ISO 9001:2026</h2>
                                    <p style={{ ...para(font), marginBottom: 0 }}>
                                        The easiest way to understand the revision is to look at what has been strengthened rather than assuming that the previous framework has been replaced.
                                    </p>
                                </div>

                                <div style={{ overflowX: isMobile ? "auto" : "visible", WebkitOverflowScrolling: "touch" }}>
                                    <div style={{ minWidth: isMobile ? "560px" : undefined }}>
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "1.1fr 1fr 1fr",
                                                gap: 0,
                                                background: "rgba(0,102,68,0.06)",
                                                borderTop: "1px solid rgba(0,102,68,0.1)",
                                                borderBottom: "1px solid rgba(0,102,68,0.12)",
                                                padding: isMobile ? "0.9rem 1rem" : "1rem 1.25rem",
                                            }}
                                        >
                                            {["Area", "ISO 9001:2015", "ISO 9001:2026"].map((header) => (
                                                <p
                                                    key={header}
                                                    style={{
                                                        margin: 0,
                                                        fontWeight: 700,
                                                        fontSize: "0.88rem",
                                                        color: "#064e3b",
                                                        fontFamily: font,
                                                    }}
                                                >
                                                    {header}
                                                </p>
                                            ))}
                                        </div>
                                        {comparisonRows.map((row, i) => (
                                            <div
                                                key={row.area}
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "1.1fr 1fr 1fr",
                                                    gap: 0,
                                                    padding: isMobile ? "0.95rem 1rem" : "1rem 1.25rem",
                                                    borderBottom: i < comparisonRows.length - 1 ? "1px solid #f0ede8" : "none",
                                                    background: i % 2 === 0 ? "#fff" : "rgba(249,247,244,0.65)",
                                                }}
                                            >
                                                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.92rem", color: "#111827", fontFamily: font }}>
                                                    {row.area}
                                                </p>
                                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.55, fontFamily: font }}>
                                                    {row.v2015}
                                                </p>
                                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#374151", lineHeight: 1.55, fontFamily: font }}>
                                                    {row.v2026}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p style={para(font)}>
                                The overall direction is continuity with greater clarity. For organisations already working with ISO 9001, I would therefore avoid treating the transition as a complete restart.
                            </p>
                            <p style={para(font)}>
                                The more useful approach is to identify where the revised requirements affect the existing QMS and then determine what needs to change.
                            </p>
                        </div>

                        <div id="organisations" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.25rem" }}>
                            <h2 style={h2(font, isMobile)}>What does ISO 9001:2026 mean for organisations?</h2>
                            <SectionImage src={sectionImages.organisations} alt="Gap assessment and QMS transition planning" />
                            <p style={para(font)}>
                                For an organisation already certified to ISO 9001:2015, I see the transition as an opportunity to assess how well the current QMS supports the business.
                            </p>
                            <p style={para(font)}>
                                I would start with a gap assessment. Identify which requirements have changed and then look at the processes, responsibilities, documented information and controls connected to those requirements.
                            </p>
                            <p style={para(font)}>
                                It is important not to turn the transition into a document-editing exercise. Updating a procedure does not, by itself, demonstrate that a requirement is effectively implemented.
                            </p>
                            <p style={para(font)}>
                                The same applies to internal audits. If the revised standard changes what needs to be considered, the audit programme, audit criteria, questions, evidence and findings should reflect those changes.
                            </p>
                            <p style={para(font)}>
                                Organisations should also discuss their specific transition arrangements with their certification body. Under the current UKAS transition arrangements, certification bodies are required to transition certified customers to the revised standard by 30 September 2029. Certification arrangements can vary by accreditation and certification body, so I recommend confirming the requirements that apply to your organisation directly with your certification body.
                            </p>
                        </div>

                        <div id="prepare" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.25rem" }}>
                            <h2 style={h2(font, isMobile)}>How should you prepare for ISO 9001:2026?</h2>
                            <SectionImage src={sectionImages.prepare} alt="Preparing a practical ISO 9001 transition plan" />
                            <p style={para(font)}>I would approach the transition in five practical steps.</p>

                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "1rem",
                                    border: "1px solid #e8e4df",
                                    padding: isMobile ? "0.5rem 1.1rem" : "0.5rem 1.35rem",
                                    margin: "1.25rem 0 1.5rem",
                                }}
                            >
                                {prepareSteps.map((step, i, arr) => (
                                    <div
                                        key={step.title}
                                        style={{
                                            display: "flex",
                                            gap: "0.875rem",
                                            alignItems: "flex-start",
                                            padding: "0.95rem 0",
                                            borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none",
                                        }}
                                    >
                                        <span
                                            style={{
                                                minWidth: "26px",
                                                height: "26px",
                                                borderRadius: "50%",
                                                background: "rgba(0,102,68,0.1)",
                                                color: "#006644",
                                                fontSize: "0.75rem",
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
                                        <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                                            <strong style={{ color: "#111827" }}>{step.title}</strong>
                                            <br />
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>
                                This is where I believe a structured audit process becomes particularly useful. A transition should produce evidence that the organisation has understood the revised requirements and acted on them.
                            </p>
                        </div>

                        <div id="audits" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.25rem" }}>
                            <h2 style={h2(font, isMobile)}>What does ISO 9001:2026 mean for internal audits?</h2>
                            <SectionImage src={sectionImages.audits} alt="Internal audit team reviewing evidence and findings" />
                            <p style={para(font)}>
                                Internal auditing will continue to be an important part of evaluating whether the QMS is working as intended.
                            </p>
                            <p style={para(font)}>
                                For the transition, I would encourage organisations to look beyond checklist completion. An audit should establish whether requirements are understood, implemented and supported by objective evidence.
                            </p>
                            <p style={para(font)}>
                                That means considering the audit programme, criteria, questions, evidence, findings and corrective actions as parts of the same process.
                            </p>
                            <p style={para(font)}>
                                A useful audit should help an organisation see where its system is working, where gaps exist and what needs attention next. I do not see the purpose of an internal audit as simply producing a report. It should give management useful information for making decisions and improving the system.
                            </p>
                        </div>

                        <div id="support" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.25rem" }}>
                            <h2 style={h2(font, isMobile)}>How iAudit can support your ISO 9001:2026 transition</h2>
                            <SectionImage src={sectionImages.support} alt="ISO audit management software dashboard and reporting" />
                            <p style={para(font)}>
                                At iAudit Global, we built the platform around the way ISO audits are actually planned and carried out. We are built by auditors, for ISO audits.
                            </p>
                            <p style={para(font)}>
                                The platform supports audit planning, ISO-focused checklists, evidence capture, findings management, corrective actions and reporting.
                            </p>
                            <p style={para(font)}>
                                For organisations preparing for ISO 9001:2026, this provides a structured way to organise internal audits, document evidence and track actions throughout the transition.
                            </p>
                            <p style={para(font)}>
                                The technology should support the audit process, not replace the auditor&apos;s judgement. I believe a well-designed audit workflow should give auditors the structure and visibility they need while allowing them to focus on what the evidence is actually showing.
                            </p>
                            <p style={para(font)}>
                                If your organisation is reviewing its Quality Management System or preparing to transition from ISO 9001:2015, we can help you understand what needs to be reviewed and where internal auditing fits into the process.
                            </p>

                            <div
                                style={{
                                    background: "rgba(0,102,68,0.05)",
                                    border: "1px solid rgba(0,102,68,0.14)",
                                    borderRadius: "0.875rem",
                                    padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                                    marginTop: "1.5rem",
                                }}
                            >
                                <h3 style={{ ...h3(font), marginTop: 0 }}>Need help with your ISO 9001:2026 transition?</h3>
                                <p style={para(font)}>
                                    Book a free consultation with iAudit Global to discuss your transition and audit requirements.
                                </p>
                                <p style={{ ...para(font), marginBottom: 0 }}>
                                    <a href="https://www.iaudit.global/contact" style={linkStyle}>
                                        Contact iAudit Global
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>

                    {!isMobile && <AuthorCard font={font} />}
                    {isMobile && <AuthorCard font={font} mobile />}
                </div>

                <div id="faq" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)" }}>
                    <FAQAccordion items={faqItems} heading="Frequently Asked Questions" sparkleText="FAQ" />
                </div>
            </div>

            <CTA />
            <Footer />
        </div>
    );
}

function AuthorCard({ font, mobile = false }: { font: string; mobile?: boolean }) {
    return (
        <aside style={mobile ? undefined : { position: "sticky", top: "calc(var(--blog-sticky-offset) + 8px)", alignSelf: "start" }}>
            <div
                style={{
                    background: "#fff",
                    borderRadius: "1.1rem",
                    border: "1px solid #e8e4df",
                    padding: mobile ? "1.75rem 1.5rem" : "2rem 1.5rem",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        width: mobile ? "72px" : "90px",
                        height: mobile ? "72px" : "90px",
                        borderRadius: "50%",
                        backgroundImage: 'url("/images/mathew-chiweda.webp")',
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        overflow: "hidden",
                        margin: mobile ? "0 auto 0.875rem" : "0 auto 1.1rem",
                    }}
                />
                <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: mobile ? "1rem" : "1.05rem", fontFamily: font }}>
                    <Link href="/author/mathew-chiweda" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>Mathew Chiweda</Link>
                </p>
                <p
                    style={{
                        margin: mobile ? "0 0 1rem" : "0 0 1.1rem",
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
                {!mobile && <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />}
                <p
                    style={{
                        margin: mobile ? "0 0 1.25rem" : "0 0 1.75rem",
                        fontSize: "0.875rem",
                        color: "#6B7280",
                        lineHeight: 1.7,
                        fontFamily: font,
                    }}
                >
                    Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance across complex operational environments and multiple sectors.
                </p>
                <Link
                    href="/contact"
                    style={{
                        display: "block",
                        background: "#3d5a47",
                        color: "#fff",
                        padding: mobile ? "0.75rem 1rem" : "0.8rem 1rem",
                        borderRadius: "999px",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        textDecoration: "none",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: font,
                    }}
                >
                    Free consultation
                </Link>
            </div>
        </aside>
    );
}

function h2(font: string, isMobile = false): CSSProperties {
    return {
        fontSize: isMobile ? "1.35rem" : "1.6rem",
        fontWeight: 600,
        color: "#111827",
        letterSpacing: "-0.018em",
        lineHeight: 1.28,
        margin: "0 0 0.75rem",
        fontFamily: font,
    };
}

function h3(font: string): CSSProperties {
    return {
        fontSize: "1.15rem",
        fontWeight: 700,
        color: "#111827",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        margin: "1.5rem 0 0.625rem",
        fontFamily: font,
    };
}

function para(font: string): CSSProperties {
    return {
        fontSize: "0.98rem",
        color: "#374151",
        lineHeight: 1.85,
        margin: "0 0 1rem",
        fontFamily: font,
    };
}
