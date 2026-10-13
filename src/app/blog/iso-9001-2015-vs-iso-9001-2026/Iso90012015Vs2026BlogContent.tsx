"use client";

import React, { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog/iso-9001-2015-vs-iso-9001-2026.jpg";

const sectionImages: Record<string, string> = {
    overview: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    differences: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80&fm=webp",
    unchanged: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    review: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=480&fit=crop&q=80&fm=webp",
    prepare: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=480&fit=crop&q=80&fm=webp",
    qms: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "glance", label: "2015 vs 2026 At a Glance" },
    { id: "differences", label: "Main Differences" },
    { id: "unchanged", label: "What Has Not Changed" },
    { id: "review-now", label: "What to Review Now" },
    { id: "preparing", label: "Preparing for the Move" },
    { id: "applying-qms", label: "Applying to Your QMS" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const comparisonData = [
    {
        area: "Overall approach",
        v2015: "Established QMS framework",
        v2026: "Same foundation with targeted updates",
        practice: "Existing systems can be reviewed and improved rather than replaced",
    },
    {
        area: "Leadership",
        v2015: "Leadership and commitment required",
        v2026: "Greater emphasis on quality culture and ethical behaviour",
        practice: "Leadership needs to demonstrate how quality is supported in practice",
    },
    {
        area: "Strategic alignment",
        v2015: "Quality policy linked to strategic direction",
        v2026: "Stronger connection between the QMS, context and business direction",
        practice: "Quality should form part of wider business decisions",
    },
    {
        area: "Risks and opportunities",
        v2015: "Addressed through risk-based thinking",
        v2026: "Clearer distinction between risks and opportunities",
        practice: "Both need to be considered deliberately",
    },
    {
        area: "Awareness",
        v2015: "Employees understand policy, objectives and their contribution",
        v2026: "Greater attention to quality culture and ethical behaviour",
        practice: "Awareness needs to go beyond simply knowing the quality policy",
    },
    {
        area: "Guidance",
        v2015: "Supporting guidance provided",
        v2026: "Expanded Annex A guidance",
        practice: "Organisations have more support when interpreting requirements",
    },
];

const reviewAreas = [
    {
        num: "01",
        title: "Leadership and quality culture",
        desc: "Is quality visible in management decisions and day-to-day behaviour?",
    },
    {
        num: "02",
        title: "Business direction",
        desc: "Does the QMS still reflect the organisation's context, priorities and strategic direction?",
    },
    {
        num: "03",
        title: "Risks and opportunities",
        desc: "Are both being considered properly, rather than treated as the same exercise?",
    },
    {
        num: "04",
        title: "People and awareness",
        desc: "Do employees understand how their work contributes to quality outcomes?",
    },
    {
        num: "05",
        title: "Internal audits",
        desc: "Do your audit criteria, questions and evidence reflect the revised requirements?",
    },
];

const faqItems = [
    {
        question: "1. What is the main difference between ISO 9001:2015 and ISO 9001:2026?",
        answer:
            "The main difference is that ISO 9001:2026 builds on the existing 2015 framework while strengthening areas such as leadership, quality culture, ethical behaviour, strategic alignment, risks and opportunities, and employee awareness. Organisations can usually adapt their existing Quality Management System rather than rebuild it from scratch.",
    },
    {
        question: "2. Does ISO 9001:2026 replace ISO 9001:2015?",
        answer:
            "Yes. ISO 9001:2026 is the current edition of the standard and replaces ISO 9001:2015. Organisations certified to the 2015 edition will need to transition to the 2026 version within the applicable transition period.",
    },
    {
        question: "3. Do organisations need to rewrite their QMS for ISO 9001:2026?",
        answer:
            "Not necessarily. Most organisations should begin by comparing their current QMS against the revised requirements, identifying genuine gaps and updating only the areas that need attention. Existing processes that remain effective and compliant may not need significant changes.",
    },
    {
        question: "4. What new areas should organisations review for ISO 9001:2026?",
        answer:
            "Key areas to review include leadership involvement, quality culture, ethical behaviour, alignment between quality and business strategy, the treatment of risks and opportunities, employee awareness and internal audit criteria.",
    },
    {
        question: "5. How have risks and opportunities changed in ISO 9001:2026?",
        answer:
            "ISO 9001:2026 provides a clearer distinction between risks and opportunities. Organisations should not only consider what could prevent intended results, but also identify opportunities that could improve performance, customer outcomes or the effectiveness of the Quality Management System.",
    },
    {
        question: "6. How should internal audits change for ISO 9001:2026?",
        answer:
            "Internal audits should be updated to reflect the revised requirements and areas of emphasis. Auditors may need to look more closely at leadership behaviour, quality culture, strategic alignment, risks and opportunities, employee awareness and the evidence showing how these are applied in practice.",
    },
    {
        question: "7. When should organisations start preparing for ISO 9001:2026?",
        answer:
            "Organisations should begin reviewing the differences between ISO 9001:2015 and ISO 9001:2026 as early as possible. Starting early gives teams more time to identify gaps, assign actions, update processes where necessary and use internal audits to confirm that changes are working before the transition deadline.",
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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

export default function Iso90012015Vs2026BlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [tocOpen, setTocOpen] = useState(false);
    const [copied, setCopied] = useState(false);

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

    const handleCopyLinkedin = () => {
        const text = `ISO 9001:2026 is here, but what has actually changed from ISO 9001:2015?

In this article, we compare the two editions side by side, look at the changes that matter in practice, and highlight the areas organisations should review in their existing Quality Management Systems.

If you are preparing for the transition, this is a useful place to start.

What part of the ISO 9001:2026 update do you think will require the most attention in practice?

Read the full comparison: https://www.iaudit.global/blog/iso-9001-2015-vs-iso-9001-2026`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: font }}>
            <div className="blog-reading-scope">
                {/* Hero section */}
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
                        alt="ISO 9001:2015 vs ISO 9001:2026 comparison"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%)",
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
                            ISO 9001 Comparison
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                            <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                October 12, 2026
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                            <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                11 Min Read
                            </span>
                        </div>
                    </div>
                </div>

                {/* Sub-header navigation bar */}
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

                {/* Main 3-column / 1-column responsive layout */}
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
                    {/* Desktop sticky table of contents */}
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

                    {/* Article content */}
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
                            ISO 9001:2015 vs ISO 9001:2026: What Really Changed?
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

                        {/* Intro */}
                        <div id="intro" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)" }}>
                            <p style={para(font)}>
                                ISO 9001:2026 has replaced ISO 9001:2015, but that does not mean organisations need to rebuild their Quality Management Systems from scratch.
                            </p>
                            <p style={para(font)}>
                                The more useful question is this: what has actually changed, and where should organisations using ISO 9001:2015 pay closer attention?
                            </p>
                            <p style={para(font)}>
                                The 2026 edition keeps much of the structure and thinking organisations already know. Customer focus, the process approach, risk-based thinking and continual improvement remain central. The changes are more targeted, with greater emphasis on leadership, quality culture, ethical behaviour, risks and opportunities, and the connection between quality and business direction.
                            </p>
                            <p style={para(font)}>
                                I covered the wider revision and transition process in our{" "}
                                <Link href="/blog/iso-9001-2026-key-changes-transition" style={linkStyle}>
                                    ISO 9001:2026 key changes and transition guide
                                </Link>
                                . Here, I want to focus specifically on ISO 9001:2015 vs ISO 9001:2026, what is different between the two editions, and what those differences mean in practice.
                            </p>
                        </div>

                        {/* Comparison at a glance table */}
                        <div id="glance" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font, isMobile)}>ISO 9001:2015 vs ISO 9001:2026 at a glance</h2>
                            <p style={para(font)}>
                                The easiest way to understand the revision is to compare the areas that have been strengthened rather than assume the entire standard has changed.
                            </p>

                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "1rem",
                                    border: "1px solid #e8e4df",
                                    overflow: "hidden",
                                    margin: "1.25rem 0 1.5rem",
                                    boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                                }}
                            >
                                <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                                    <div style={{ minWidth: "680px" }}>
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "1.2fr 1.3fr 1.5fr 1.6fr",
                                                background: "rgba(0,102,68,0.06)",
                                                borderBottom: "1px solid rgba(0,102,68,0.12)",
                                                padding: isMobile ? "0.9rem 1rem" : "1rem 1.25rem",
                                            }}
                                        >
                                            {["Area", "ISO 9001:2015", "ISO 9001:2026", "What it means in practice"].map((h) => (
                                                <p
                                                    key={h}
                                                    style={{
                                                        margin: 0,
                                                        fontWeight: 700,
                                                        fontSize: "0.85rem",
                                                        color: "#064e3b",
                                                        fontFamily: font,
                                                    }}
                                                >
                                                    {h}
                                                </p>
                                            ))}
                                        </div>
                                        {comparisonData.map((row, i) => (
                                            <div
                                                key={row.area}
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "1.2fr 1.3fr 1.5fr 1.6fr",
                                                    padding: isMobile ? "0.95rem 1rem" : "1.05rem 1.25rem",
                                                    borderBottom: i < comparisonData.length - 1 ? "1px solid #f0ede8" : "none",
                                                    background: i % 2 === 0 ? "#fff" : "rgba(249,247,244,0.65)",
                                                }}
                                            >
                                                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.9rem", color: "#111827", fontFamily: font }}>
                                                    {row.area}
                                                </p>
                                                <p style={{ margin: 0, fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.55, fontFamily: font }}>
                                                    {row.v2015}
                                                </p>
                                                <p style={{ margin: 0, fontSize: "0.88rem", color: "#064e3b", fontWeight: 500, lineHeight: 1.55, fontFamily: font }}>
                                                    {row.v2026}
                                                </p>
                                                <p style={{ margin: 0, fontSize: "0.88rem", color: "#374151", lineHeight: 1.55, fontFamily: font }}>
                                                    {row.practice}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p style={{ ...para(font), fontStyle: "italic", color: "#4b5563" }}>
                                ISO describes the 2026 edition as building on the existing framework rather than introducing a fundamentally different approach.
                            </p>
                        </div>

                        {/* Main differences */}
                        <div id="differences" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font, isMobile)}>What are the main differences between ISO 9001:2015 and ISO 9001:2026?</h2>
                            <SectionImage src={sectionImages.differences} alt="Quality team assessing management review and risk-based processes" />

                            <h3 style={h3(font)}>Leadership, quality culture and ethical behaviour</h3>
                            <p style={para(font)}>
                                Leadership was already a significant part of ISO 9001:2015. What changes in the 2026 edition is the stronger emphasis on quality culture and ethical behaviour.
                            </p>
                            <p style={para(font)}>
                                For me, this is an important distinction.
                            </p>
                            <p style={para(font)}>
                                I would not expect an organisation to create a new procedure called &ldquo;Quality Culture&rdquo; simply because the wording of the standard has changed. What matters is whether quality can be seen in the way the organisation is actually managed.
                            </p>
                            <p style={para(font)}>
                                How are quality concerns handled when there is pressure to meet a deadline? Do people feel responsible for quality within their own roles? Do management decisions support what the quality policy says?
                            </p>
                            <p style={para(font)}>
                                Those questions tell us much more about quality culture than another document ever could.
                            </p>
                            <p style={para(font)}>
                                ISO specifically identifies stronger leadership, quality culture and ethical behaviour as part of the changes in Clause 5.1.
                            </p>

                            <h3 style={h3(font)}>A stronger link between quality and business strategy</h3>
                            <p style={para(font)}>
                                ISO 9001:2026 also reinforces the relationship between the Quality Management System and the organisation&apos;s wider direction.
                            </p>
                            <p style={para(font)}>
                                A QMS should not operate as a separate compliance exercise managed only by the quality department.
                            </p>
                            <p style={para(font)}>
                                If an organisation is changing markets, introducing new technology, restructuring operations or dealing with new customer expectations, I would expect the quality system to reflect those changes.
                            </p>
                            <p style={para(font)}>
                                The revised standard strengthens the connection between the quality policy, organisational context and strategic direction.
                            </p>
                            <p style={para(font)}>
                                For organisations reviewing their existing system, this is a good opportunity to ask whether quality objectives still reflect what the business is actually trying to achieve.
                            </p>

                            <h3 style={h3(font)}>A clearer distinction between risks and opportunities</h3>
                            <p style={para(font)}>
                                ISO 9001:2015 brought risk-based thinking firmly into quality management. The 2026 edition keeps that approach but provides clearer separation between risks and opportunities.
                            </p>
                            <p style={para(font)}>
                                The difference is useful:
                            </p>

                            {/* Risk vs Opportunity interactive comparison card */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                    gap: "1rem",
                                    margin: "1.25rem 0 1.5rem",
                                }}
                            >
                                <div
                                    style={{
                                        background: "#fff",
                                        borderRadius: "12px",
                                        padding: "1.25rem",
                                        border: "1px solid #fee4e2",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "inline-block",
                                            background: "#fef3f2",
                                            color: "#b42318",
                                            fontWeight: 700,
                                            fontSize: "0.75rem",
                                            padding: "2px 8px",
                                            borderRadius: "6px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        A Risk Asks
                                    </span>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: "1.02rem", color: "#111827", lineHeight: 1.45, fontFamily: font }}>
                                        &ldquo;What could prevent us from achieving the intended result?&rdquo;
                                    </p>
                                </div>

                                <div
                                    style={{
                                        background: "#fff",
                                        borderRadius: "12px",
                                        padding: "1.25rem",
                                        border: "1px solid #b2efcc",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "inline-block",
                                            background: "#ecfdf3",
                                            color: "#027a48",
                                            fontWeight: 700,
                                            fontSize: "0.75rem",
                                            padding: "2px 8px",
                                            borderRadius: "6px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        An Opportunity Asks
                                    </span>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: "1.02rem", color: "#111827", lineHeight: 1.45, fontFamily: font }}>
                                        &ldquo;What could we actively pursue to improve performance or achieve a better result?&rdquo;
                                    </p>
                                </div>
                            </div>

                            <p style={para(font)}>
                                In practice, I have seen risk registers where opportunities are added almost as an afterthought. A business may be very good at documenting what could go wrong while spending far less time considering what could be improved.
                            </p>
                            <p style={para(font)}>
                                The revised wording gives organisations a reason to look at both more deliberately.
                            </p>

                            <h3 style={h3(font)}>Greater attention to people and awareness</h3>
                            <p style={para(font)}>
                                The 2026 edition also gives more attention to people&apos;s understanding of quality culture and ethical behaviour.
                            </p>
                            <p style={para(font)}>
                                Knowing that a quality policy exists is not the same as understanding what quality means within your role.
                            </p>
                            <p style={para(font)}>
                                During an audit, I would be more interested in whether people understand how their work affects customers, process performance and quality outcomes.
                            </p>
                            <p style={para(font)}>
                                That may show up through interviews, operational decisions, competence, communication and the way issues are reported and resolved.
                            </p>
                            <p style={para(font)}>
                                The point is not to create more awareness records. It is to make sure awareness exists where it matters.
                            </p>

                            <h3 style={h3(font)}>More guidance through Annex A</h3>
                            <p style={para(font)}>
                                The new edition also provides additional guidance through Annex A, intended to clarify concepts, terminology and the intent behind requirements.
                            </p>
                            <p style={para(font)}>
                                That should help organisations interpret requirements in a way that makes sense for their own context rather than assuming there is only one acceptable way to comply.
                            </p>
                        </div>

                        {/* What has not changed */}
                        <div id="unchanged" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font, isMobile)}>What has not changed in ISO 9001:2026?</h2>
                            <SectionImage src={sectionImages.unchanged} alt="Auditor reviewing process map and documentation" />
                            <p style={para(font)}>
                                This part matters just as much as understanding what has changed.
                            </p>
                            <p style={para(font)}>
                                ISO 9001:2026 retains the core principles that organisations already know, including:
                            </p>

                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    padding: "1.25rem 1.5rem",
                                    border: "1px solid #e8e4df",
                                    margin: "1rem 0 1.5rem",
                                }}
                            >
                                <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {[
                                        "Customer focus",
                                        "The process approach",
                                        "Risk-based thinking",
                                        "Continual improvement",
                                        "The Harmonized Structure used across ISO management system standards",
                                    ].map((item) => (
                                        <li key={item} style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.6, fontFamily: font }}>
                                            <strong style={{ color: "#111827" }}>{item}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p style={para(font)}>
                                Climate change considerations introduced through the 2024 amendment are also carried forward.
                            </p>
                            <p style={para(font)}>
                                So I would not begin an ISO 9001:2026 transition by rewriting procedures.
                            </p>
                            <p style={para(font)}>
                                Start by understanding the revised requirements. Then look at the existing system and establish whether there is actually a gap.
                            </p>
                            <p style={para(font)}>
                                If a process already works and meets the requirement, there is little value in changing it simply because a new edition has been published.
                            </p>
                        </div>

                        {/* What should organisations review now */}
                        <div id="review-now" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font, isMobile)}>What should organisations using ISO 9001:2015 review now?</h2>
                            <SectionImage src={sectionImages.review} alt="Quality team performing gap review and internal audit prep" />
                            <p style={para(font)}>
                                If your organisation currently works to ISO 9001:2015, I would start by reviewing five areas:
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", margin: "1.25rem 0 1.5rem" }}>
                                {reviewAreas.map((area) => (
                                    <div
                                        key={area.num}
                                        style={{
                                            background: "#fff",
                                            borderRadius: "12px",
                                            padding: "1rem 1.25rem",
                                            border: "1px solid #e8e4df",
                                            display: "flex",
                                            gap: "1rem",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "8px",
                                                background: "rgba(0,102,68,0.08)",
                                                color: "#006644",
                                                fontWeight: 700,
                                                fontSize: "0.85rem",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {area.num}
                                        </span>
                                        <div>
                                            <h4 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 700, color: "#111827", fontFamily: font }}>
                                                {area.title}
                                            </h4>
                                            <p style={{ margin: 0, fontSize: "0.92rem", color: "#4b5563", lineHeight: 1.5, fontFamily: font }}>
                                                {area.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>
                                This gives you a much better starting point than updating documents before you know what needs to change.
                            </p>
                        </div>

                        {/* Preparing for the move */}
                        <div id="preparing" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font, isMobile)}>Preparing for the move to ISO 9001:2026</h2>
                            <SectionImage src={sectionImages.prepare} alt="Audit timeline and transition milestone planning" />
                            <p style={para(font)}>
                                ISO 9001:2026 was published on 16 September 2026. NQA&apos;s current transition guidance identifies 30 September 2029 as the end of the transition period for ISO 9001:2015 certification. Organisations should still confirm the arrangements that apply to them with their own certification body.
                            </p>
                            <p style={para(font)}>
                                You can also refer directly to{" "}
                                <a
                                    href="https://www.iso.org/quality-management/iso-9001-2026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                >
                                    ISO&apos;s ISO 9001:2026 overview
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://www.nqa.com/en-gb/transitions/iso-9001-2026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                >
                                    NQA&apos;s ISO 9001:2026 transition guidance
                                </a>{" "}
                                when planning your review.
                            </p>
                            <p style={para(font)}>
                                The important thing is not to leave the comparison until the transition deadline is close. Understanding the differences early gives you time to identify genuine gaps, make proportionate changes and use internal audits to check whether those changes are working.
                            </p>
                        </div>

                        {/* Applying to your QMS */}
                        <div id="applying-qms" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font, isMobile)}>Applying ISO 9001:2026 to Your QMS</h2>
                            <SectionImage src={sectionImages.qms} alt="iAudit dashboard managing findings and corrective action workflow" />
                            <p style={para(font)}>
                                Comparing the two editions is usually the straightforward part.
                            </p>
                            <p style={para(font)}>
                                The harder part is keeping track of what has been reviewed, where gaps have been identified, what evidence supports the assessment, who owns each action and whether those actions have actually been completed.
                            </p>
                            <p style={para(font)}>
                                That is where a structured audit process becomes useful.
                            </p>
                            <p style={para(font)}>
                                At iAudit Global, we have built the platform around ISO audit planning, evidence, findings, corrective actions and follow-up so organisations can keep that information together rather than spreading it across spreadsheets, emails and separate files.
                            </p>
                            <p style={para(font)}>
                                The software does not replace auditor judgement. It gives the audit process a clearer structure so people can spend more time looking at what the evidence is actually telling them.
                            </p>
                            <p style={para(font)}>
                                If you are reviewing how ISO 9001:2015 vs ISO 9001:2026 affects your Quality Management System or internal audit programme, you can{" "}
                                <Link href="/contact" style={linkStyle}>
                                    contact the iAudit Global team
                                </Link>{" "}
                                to discuss your approach.
                            </p>

                            {/* Share / LinkedIn Post card */}
                            <div
                                style={{
                                    background: "rgba(0,102,68,0.05)",
                                    border: "1px solid rgba(0,102,68,0.15)",
                                    borderRadius: "1rem",
                                    padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                                    marginTop: "2rem",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                    <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#064e3b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                        Share on LinkedIn
                                    </span>
                                    <button
                                        onClick={handleCopyLinkedin}
                                        style={{
                                            background: copied ? "#027a48" : "#006644",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "6px",
                                            padding: "6px 12px",
                                            fontSize: "0.8rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            transition: "background-color 0.15s ease",
                                        }}
                                    >
                                        {copied ? "Copied!" : "Copy Post Text"}
                                    </button>
                                </div>
                                <p style={{ margin: "0 0 0.5rem", fontSize: "0.92rem", color: "#111827", fontWeight: 600, fontFamily: font }}>
                                    ISO 9001:2026 is here, but what has actually changed from ISO 9001:2015?
                                </p>
                                <p style={{ margin: 0, fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.6, fontFamily: font }}>
                                    In this article, we compare the two editions side by side, look at the changes that matter in practice, and highlight the areas organisations should review in their existing Quality Management Systems. What part of the update do you think will require the most attention?
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Author cards */}
                    {!isMobile && <AuthorCard font={font} />}
                    {isMobile && <AuthorCard font={font} mobile />}
                </div>

                {/* FAQ section */}
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
                    <Link href="/author/mathew-chiweda" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        Mathew Chiweda
                    </Link>
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
                    Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance.
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
