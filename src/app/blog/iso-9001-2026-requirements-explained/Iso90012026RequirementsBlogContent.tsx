"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE = "/images/blog/iso-9001-2026-requirements-explained.jpg";
const TRANSITION_URL = "/iso-9001-2026-transition";
const COMPARISON_URL = "/blog/iso-9001-2015-vs-iso-9001-2026";
const PRICING_URL = "/pricing";
const RISK_REGISTER_URL = "/blog/how-to-maintain-an-iso-9001-risk-register";
const CORRECTIVE_ACTIONS_URL = "/blog/corrective-actions-after-an-internal-audit-findings-to-closure";
const AUDIT_SOFTWARE_URL = "/standards/iso-9001-audit-management-software";

const sectionImages: Record<string, string> = {
    overview: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    leadership: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80&fm=webp",
    planning: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    support: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=480&fit=crop&q=80&fm=webp",
    operation: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=480&fit=crop&q=80&fm=webp",
    evaluation: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    annex: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "tldr", label: "TL;DR Summary" },
    { id: "intro", label: "Introduction" },
    { id: "clauses-overview", label: "Clauses 4 to 10 Structure" },
    { id: "clause-4", label: "Clause 4: Context & Climate" },
    { id: "clause-5", label: "Clause 5: Leadership & Culture" },
    { id: "clause-6", label: "Clause 6: Risks vs Opportunities" },
    { id: "clause-7", label: "Clause 7: Support & Awareness" },
    { id: "clause-8", label: "Clause 8: Operation & Controls" },
    { id: "clause-9", label: "Clause 9: Performance Evaluation" },
    { id: "clause-10", label: "Clause 10: Improvement" },
    { id: "annex-a", label: "Annex A: Key Guidance" },
    { id: "review-first", label: "What to Review First" },
    { id: "audit-process", label: "Audit Management Process" },
    { id: "faq", label: "Frequently Asked Questions" },
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
                    if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.style.display = "none";
                    }
                }}
            />
        </div>
    );
}

export default function Iso90012026RequirementsBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("tldr");
    const [tocOpen, setTocOpen] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';

    useEffect(() => {
        const c = () => setIsMobile(window.innerWidth < 900);
        c();
        window.addEventListener("resize", c);
        return () => window.removeEventListener("resize", c);
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

    const ps: React.CSSProperties = {
        fontSize: "0.98rem",
        color: "#374151",
        lineHeight: 1.85,
        margin: "0 0 1rem",
        fontFamily: font,
    };
    const h2s: React.CSSProperties = {
        fontSize: "1.6rem",
        fontWeight: 600,
        color: "#111827",
        letterSpacing: "-0.018em",
        lineHeight: 1.28,
        margin: "0 0 0.75rem",
        fontFamily: font,
    };
    const h3s: React.CSSProperties = {
        fontSize: "1.2rem",
        fontWeight: 600,
        color: "#111827",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        margin: "1.5rem 0 0.625rem",
        fontFamily: font,
    };
    const lnk: React.CSSProperties = {
        color: "#006644",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
    };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: font }}>
            <div className="blog-reading-scope">
                {/* Hero */}
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
                        alt="ISO 9001:2026 Requirements Explained practitioner review"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.72) 100%)",
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
                                background: "rgba(255,255,255,0.2)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.4)",
                                color: "#fff",
                                borderRadius: "999px",
                                padding: "4px 16px",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                letterSpacing: "0.09em",
                                textTransform: "uppercase",
                                marginBottom: "0.625rem",
                                fontFamily: font,
                            }}
                        >
                            ISO 9001:2026 Guide
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", fontFamily: font }}>
                                October 19, 2026
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", fontFamily: font }}>
                                10 Min Read
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", fontFamily: font }}>
                                By Mathew Chiweda
                            </span>
                        </div>
                    </div>
                </div>

                {/* Top sticky bar */}
                <div
                    style={{
                        borderBottom: "1px solid #e8e4df",
                        backgroundColor: "#f9f7f4",
                        position: "sticky",
                        top: "var(--blog-sticky-top)",
                        zIndex: 50,
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
                                gap: "6px",
                                color: "#6B7280",
                                fontSize: "0.79rem",
                                fontWeight: 500,
                                textDecoration: "none",
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                                fontFamily: font,
                            }}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
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
                                    background: "#fff",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "6px",
                                    padding: "5px 12px",
                                    cursor: "pointer",
                                    color: "#374151",
                                    fontSize: "0.79rem",
                                    fontFamily: font,
                                    fontWeight: 500,
                                }}
                            >
                                Contents
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
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
                                gap: "2px",
                            }}
                        >
                            {tocItems.map((item) => {
                                const a = activeSection === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        style={{
                                            textAlign: "left",
                                            background: a ? "rgba(0,102,68,0.07)" : "transparent",
                                            border: "none",
                                            borderLeft: a ? "3px solid #006644" : "3px solid transparent",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "0 5px 5px 0",
                                            cursor: "pointer",
                                            fontSize: "0.85rem",
                                            color: a ? "#006644" : "#6B7280",
                                            fontWeight: a ? 600 : 400,
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

                {/* 3-col body */}
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
                    {/* LEFT TOC */}
                    {!isMobile && (
                        <aside
                            style={{
                                position: "sticky",
                                top: "calc(var(--blog-sticky-offset) + 8px)",
                                alignSelf: "start",
                            }}
                        >
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
                                Guide Navigation
                            </p>
                            <div style={{ position: "relative" }}>
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "10px",
                                        top: 0,
                                        bottom: 0,
                                        width: "1px",
                                        background: "#e4e0db",
                                    }}
                                />
                                <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                    {tocItems.map((item) => {
                                        const a = activeSection === item.id;
                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollTo(item.id)}
                                                style={{
                                                    textAlign: "left",
                                                    border: "none",
                                                    padding: "0.45rem 0.625rem 0.45rem 1.5rem",
                                                    cursor: "pointer",
                                                    fontSize: "0.835rem",
                                                    fontFamily: font,
                                                    lineHeight: 1.35,
                                                    color: a ? "#006644" : "#6B7280",
                                                    fontWeight: a ? 600 : 400,
                                                    background: a ? "rgba(0,102,68,0.06)" : "transparent",
                                                    borderRadius: "0 6px 6px 0",
                                                    borderLeft: a ? "2px solid #006644" : "2px solid transparent",
                                                    transition: "all 0.2s ease",
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

                    {/* CENTER ARTICLE */}
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
                            ISO 9001:2026 Requirements Explained: What Organisations Need to Review
                        </h1>

                        {/* TL;DR BOX */}
                        <div
                            id="tldr"
                            style={{
                                scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)",
                                background: "#ffffff",
                                borderRadius: "1rem",
                                border: "1px solid #e8e4df",
                                borderLeft: "5px solid #006644",
                                padding: "1.35rem 1.6rem",
                                marginBottom: "2.25rem",
                                boxShadow: "0 4px 18px rgba(0,0,0,0.03)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <span
                                    style={{
                                        fontSize: "0.75rem",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        color: "#006644",
                                        fontFamily: font,
                                    }}
                                >
                                    TL;DR Summary
                                </span>
                            </div>
                            <p style={{ ...ps, margin: "0 0 0.75rem", fontSize: "0.96rem" }}>
                                <strong>ISO 9001:2026</strong> keeps the familiar structure of ISO 9001 but strengthens areas
                                such as leadership, quality culture, ethical behaviour, risks and opportunities, strategic alignment
                                and employee awareness.
                            </p>
                            <p style={{ ...ps, margin: "0 0 0.75rem", fontSize: "0.96rem" }}>
                                Most organisations will not need to rebuild their QMS from scratch. The better approach is to review
                                the existing system, identify where the revised requirements affect current processes, and update only
                                what is necessary.
                            </p>
                            <p style={{ ...ps, margin: 0, fontSize: "0.96rem" }}>
                                Internal audits should also be reviewed so they test the new expectations in practice. If you are
                                preparing for the change, see our{" "}
                                <Link href={TRANSITION_URL} style={lnk}>
                                    ISO 9001:2026 transition guide
                                </Link>{" "}
                                for the next steps.
                            </p>
                        </div>

                        {/* INTRO */}
                        <div id="intro" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)" }}>
                            <p style={ps}>
                                ISO 9001:2026 is now the current edition of the quality management standard, but understanding
                                the new edition is not simply a matter of finding a list of changed clauses.
                            </p>
                            <div
                                style={{
                                    background: "rgba(0,102,68,0.05)",
                                    borderLeft: "3px solid #006644",
                                    padding: "0.85rem 1.25rem",
                                    margin: "1.25rem 0",
                                    borderRadius: "0 0.5rem 0.5rem 0",
                                }}
                            >
                                <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "#111827", fontFamily: font }}>
                                    The more useful question is this: What do the ISO 9001:2026 requirements mean for the way your
                                    organisation actually manages quality?
                                </p>
                            </div>
                            <p style={ps}>
                                If you are already working with ISO 9001:2015, much of the system you have today will remain relevant.
                                The process approach, customer focus, risk-based thinking and continual improvement are still at the
                                heart of ISO 9001. The 2026 edition builds on that foundation while strengthening areas such as
                                leadership, quality culture, strategic alignment, risks and opportunities, and awareness (
                                <a
                                    href="https://www.iso.org/cms/live/live/en/sites/isoorg/contents/news/insights/Quality%20management%20system/iso-9001-2026-what-businesses-need-to-know.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={lnk}
                                >
                                    ISO
                                </a>
                                ).
                            </p>
                            <p style={ps}>
                                If you first want to see how the two editions compare, I have covered that separately in{" "}
                                <Link href={COMPARISON_URL} style={lnk}>
                                    ISO 9001:2015 vs ISO 9001:2026
                                </Link>
                                .
                            </p>
                            <p style={ps}>
                                Here, I want to look at the requirements from a more practical angle: what should you be reviewing in
                                your existing Quality Management System?
                            </p>
                        </div>

                        {/* UNDERSTANDING CLAUSES 4 TO 10 */}
                        <div
                            id="clauses-overview"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Understanding the ISO 9001:2026 Requirements</h2>
                            <SectionImage
                                src={sectionImages.overview}
                                alt="Understanding ISO 9001:2026 requirements and structure"
                            />
                            <p style={ps}>
                                ISO 9001 continues to follow the familiar management system structure. Clauses 4 to 10 cover the main
                                requirements organisations need to address:
                            </p>
                            <p style={{ ...ps, fontWeight: 600, color: "#111827" }}>
                                Context, Leadership, Planning, Support, Operation, Performance Evaluation and Improvement.
                            </p>
                            <p style={ps}>
                                The structure itself has not been reinvented. ISO describes the 2026 revision as targeted rather than a
                                complete redesign. That matters because an existing QMS should normally be reviewed and strengthened,
                                not automatically replaced (
                                <a
                                    href="https://www.iso.org/cms/live/live/en/sites/isoorg/contents/news/insights/Quality%20management%20system/iso-9001-2026-what-businesses-need-to-know.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={lnk}
                                >
                                    ISO
                                </a>
                                ).
                            </p>
                        </div>

                        {/* CLAUSE 4 */}
                        <div
                            id="clause-4"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Clause 4: Context of the Organisation</h2>
                            <p style={ps}>
                                Clause 4 is where the organisation establishes the environment in which its QMS operates.
                            </p>
                            <p style={ps}>
                                This means understanding relevant internal and external issues, interested parties, the scope of the
                                system and the processes needed to manage quality effectively.
                            </p>
                            <div
                                style={{
                                    background: "#fff",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    padding: "1.25rem 1.4rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <h3 style={{ ...h3s, margin: "0 0 0.5rem", color: "#006644" }}>
                                    Climate Change Considerations
                                </h3>
                                <p style={ps}>
                                    One point worth reviewing is climate change. The climate considerations introduced through the 2024
                                    amendment are carried forward into ISO 9001:2026.
                                </p>
                                <p style={ps}>
                                    I would not treat this as an exercise in adding the words &ldquo;climate change&rdquo; to a context
                                    register.
                                </p>
                                <p style={{ ...ps, margin: 0 }}>
                                    The better question is whether climate-related issues could genuinely affect product quality, service
                                    delivery, infrastructure, suppliers, customer expectations or other parts of the QMS. If they are
                                    relevant, you should be able to see that relevance reflected elsewhere in the system.
                                </p>
                            </div>
                        </div>

                        {/* CLAUSE 5 */}
                        <div
                            id="clause-5"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Clause 5: Leadership</h2>
                            <SectionImage
                                src={sectionImages.leadership}
                                alt="Leadership quality culture and ethical behaviour under ISO 9001:2026"
                            />
                            <p style={ps}>
                                This is one of the areas where the 2026 edition deserves closer attention.
                            </p>
                            <p style={ps}>
                                ISO places stronger emphasis on quality culture and ethical behaviour, alongside the leadership
                                responsibilities organisations already know. It also strengthens the connection between the quality
                                policy, organisational context and strategic direction (
                                <a
                                    href="https://www.iso.org/cms/live/live/en/sites/isoorg/contents/news/insights/Quality%20management%20system/iso-9001-2026-what-businesses-need-to-know.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={lnk}
                                >
                                    ISO
                                </a>
                                ).
                            </p>
                            <div
                                style={{
                                    background: "#fff",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    padding: "1.25rem 1.4rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <h3 style={{ ...h3s, margin: "0 0 0.5rem", color: "#111827" }}>
                                    Testing Quality Culture in Practice
                                </h3>
                                <p style={ps}>
                                    For me, quality culture is not something you prove by creating another policy. I would look at what
                                    happens when priorities compete:
                                </p>
                                <ul style={{ ...ps, paddingLeft: "1.5rem", margin: "0 0 1rem" }}>
                                    <li style={{ marginBottom: "0.35rem" }}>
                                        What happens when meeting a deadline puts pressure on quality?
                                    </li>
                                    <li style={{ marginBottom: "0.35rem" }}>Do people feel able to raise concerns?</li>
                                    <li style={{ marginBottom: "0.35rem" }}>
                                        Do management decisions support what the organisation says about quality?
                                    </li>
                                </ul>
                                <p style={{ ...ps, margin: 0 }}>
                                    That tells you far more than whether somebody can recite a quality statement. Organisations should
                                    also review whether the QMS still supports where the business is actually going. If the strategy has
                                    changed but quality objectives and processes have not, there may be a disconnect worth addressing.
                                </p>
                            </div>
                        </div>

                        {/* CLAUSE 6 */}
                        <div
                            id="clause-6"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Clause 6: Planning</h2>
                            <SectionImage
                                src={sectionImages.planning}
                                alt="Planning risks and opportunities in ISO 9001:2026"
                            />
                            <p style={ps}>
                                Risk-based thinking remains part of ISO 9001, but the 2026 edition provides a clearer distinction
                                between risks and opportunities. ISO specifically highlights a stronger expectation that organisations
                                should not only manage potential problems but also actively consider opportunities that could produce
                                beneficial results (
                                <a
                                    href="https://www.iso.org/cms/live/live/en/sites/isoorg/contents/news/insights/Quality%20management%20system/iso-9001-2026-what-businesses-need-to-know.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={lnk}
                                >
                                    ISO
                                </a>
                                ).
                            </p>
                            <p style={ps}>
                                This is worth reviewing carefully. I often see risks and opportunities recorded in the same register,
                                but the opportunity side receives very little attention.
                            </p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                    gap: "1rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <div
                                    style={{
                                        background: "#fff",
                                        borderRadius: "0.875rem",
                                        border: "1px solid #e8e4df",
                                        padding: "1.2rem 1.35rem",
                                        borderTop: "4px solid #DC2626",
                                    }}
                                >
                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>
                                        A Risk Asks:
                                    </span>
                                    <p style={{ margin: "0.5rem 0 0", fontSize: "1.05rem", fontWeight: 600, color: "#111827", lineHeight: 1.4, fontFamily: font }}>
                                        &ldquo;What could stop us achieving the intended result?&rdquo;
                                    </p>
                                </div>
                                <div
                                    style={{
                                        background: "#fff",
                                        borderRadius: "0.875rem",
                                        border: "1px solid #e8e4df",
                                        padding: "1.2rem 1.35rem",
                                        borderTop: "4px solid #006644",
                                    }}
                                >
                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#006644", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>
                                        An Opportunity Asks:
                                    </span>
                                    <p style={{ margin: "0.5rem 0 0", fontSize: "1.05rem", fontWeight: 600, color: "#111827", lineHeight: 1.4, fontFamily: font }}>
                                        &ldquo;What could we do that might improve the result?&rdquo;
                                    </p>
                                </div>
                            </div>
                            <p style={ps}>
                                They are related, but they are not the same question. Learn more in our guide on{" "}
                                <Link href={RISK_REGISTER_URL} style={lnk}>
                                    how to maintain an ISO 9001 risk register
                                </Link>
                                .
                            </p>
                            <p style={ps}>
                                This is also a good time to look at how changes are planned. A new supplier, new site, new software
                                system, restructure or change in process can affect the QMS in ways that are easy to miss if change is
                                handled informally.
                            </p>
                        </div>

                        {/* CLAUSE 7 */}
                        <div
                            id="clause-7"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Clause 7: Support</h2>
                            <SectionImage
                                src={sectionImages.support}
                                alt="Support resources and awareness under ISO 9001:2026"
                            />
                            <p style={ps}>
                                Clause 7 deals with what the organisation needs in order to make the QMS work, including resources,
                                people, competence, communication, documented information and organisational knowledge.
                            </p>
                            <div
                                style={{
                                    background: "#fff",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    padding: "1.25rem 1.4rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <h3 style={{ ...h3s, margin: "0 0 0.5rem", color: "#111827" }}>
                                    Focus on Employee Awareness
                                </h3>
                                <p style={ps}>
                                    The area I would pay particular attention to in 2026 is awareness. ISO now gives greater attention to
                                    people&apos;s understanding of quality culture and ethical behaviour (
                                    <a
                                        href="https://www.iso.org/cms/live/live/en/sites/isoorg/contents/news/insights/Quality%20management%20system/iso-9001-2026-what-businesses-need-to-know.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={lnk}
                                    >
                                        ISO
                                    </a>
                                    ).
                                </p>
                                <p style={ps}>
                                    That does not mean producing more training records for the sake of an audit. What matters is whether
                                    people understand how their own work affects quality.
                                </p>
                                <p style={{ ...ps, margin: 0 }}>
                                    If I speak with somebody in purchasing, operations or customer service, I should be able to understand
                                    how they recognise a quality issue, what they are expected to do about it and how their decisions
                                    contribute to the wider QMS.
                                </p>
                            </div>
                        </div>

                        {/* CLAUSE 8 */}
                        <div
                            id="clause-8"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Clause 8: Operation</h2>
                            <SectionImage
                                src={sectionImages.operation}
                                alt="Operational controls in ISO 9001:2026"
                            />
                            <p style={ps}>
                                Clause 8 remains the practical core of the standard.
                            </p>
                            <p style={ps}>
                                It covers how organisations plan and control the processes used to deliver products and services,
                                including customer requirements, design where applicable, external providers, production or service
                                delivery and control of nonconforming outputs.
                            </p>
                            <p style={ps}>
                                For most organisations, I would not expect Clause 8 to result in a complete redesign of operational
                                processes.
                            </p>
                            <div
                                style={{
                                    background: "rgba(0,102,68,0.04)",
                                    border: "1px solid rgba(0,102,68,0.12)",
                                    borderRadius: "0.75rem",
                                    padding: "1rem 1.25rem",
                                    margin: "1rem 0",
                                }}
                            >
                                <p style={{ margin: 0, fontSize: "0.94rem", color: "#1F2937", lineHeight: 1.6, fontFamily: font }}>
                                    <strong>Key Review Point:</strong> The useful review is whether changes elsewhere in the standard
                                    have implications for how operations are controlled. For example, have changes in suppliers,
                                    technology, customer requirements or organisational risks affected the controls you rely on? It is easy
                                    for procedures to remain unchanged while the operation around them has moved on.
                                </p>
                            </div>
                        </div>

                        {/* CLAUSE 9 */}
                        <div
                            id="clause-9"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Clause 9: Performance Evaluation</h2>
                            <SectionImage
                                src={sectionImages.evaluation}
                                alt="Performance evaluation and internal audits in ISO 9001:2026"
                            />
                            <p style={ps}>
                                Clause 9 is where the organisation checks whether its QMS is doing what it is supposed to do.
                                That includes monitoring and measurement, customer feedback, internal audits and management review.
                            </p>
                            <p style={ps}>
                                The basic mechanisms remain familiar. What changes is the scope of what you may need to evaluate.
                            </p>
                            <div
                                style={{
                                    background: "#fff",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    padding: "1.25rem 1.4rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <h3 style={{ ...h3s, margin: "0 0 0.5rem", color: "#111827" }}>
                                    Updating Internal Audits for 2026 Expectations
                                </h3>
                                <p style={ps}>
                                    If ISO 9001:2026 places greater attention on quality culture, risks and opportunities, strategic
                                    alignment and awareness, your internal audit programme should be capable of testing whether those
                                    things are actually happening.
                                </p>
                                <p style={{ ...ps, margin: 0, fontWeight: 500, color: "#006644" }}>
                                    Simply adding a few new questions to an old checklist may not be enough. I would look at where these
                                    requirements appear in real processes and audit them there.
                                </p>
                            </div>
                        </div>

                        {/* CLAUSE 10 */}
                        <div
                            id="clause-10"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Clause 10: Improvement</h2>
                            <p style={ps}>
                                Corrective action and continual improvement remain central to ISO 9001.
                            </p>
                            <p style={ps}>
                                The important point is not just whether nonconformities are closed. A closed action does not
                                automatically mean the underlying problem has been solved.
                            </p>
                            <p style={ps}>
                                I would want to know whether the action was effective, whether the cause was properly addressed and
                                whether the organisation learned anything that should influence other processes.
                            </p>
                            <p style={ps}>
                                The 2026 edition continues to position quality management as something that should support wider
                                performance and continual improvement, rather than becoming a system maintained mainly for certification (
                                <a
                                    href="https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/news/insights/Quality%20management%20system/iso-9001-2026-what-businesses-need-to-know.html?trk=article-ssr-frontend-pulse_little-text-block&"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={lnk}
                                >
                                    ISO Committee
                                </a>
                                ). Read our guide on{" "}
                                <Link href={CORRECTIVE_ACTIONS_URL} style={lnk}>
                                    corrective actions after an internal audit: from findings to closure
                                </Link>
                                .
                            </p>
                        </div>

                        {/* ANNEX A */}
                        <div
                            id="annex-a"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Do Not Overlook Annex A</h2>
                            <SectionImage
                                src={sectionImages.annex}
                                alt="Expanded Annex A guidance in ISO 9001:2026"
                            />
                            <p style={ps}>
                                ISO 9001:2026 also introduces an expanded Annex A that gives additional guidance on key concepts,
                                terminology and the intent behind requirements. ISO describes this as support for more consistent
                                understanding and application of the standard (
                                <a
                                    href="https://www.iso.org/cms/live/live/en/sites/isoorg/contents/news/insights/Quality%20management%20system/iso-9001-2026-what-businesses-need-to-know.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={lnk}
                                >
                                    ISO
                                </a>
                                ). BSI also highlights the expanded Annex A as an important part of the new edition.
                            </p>
                            <div
                                style={{
                                    background: "#FFFBEB",
                                    border: "1px solid #FDE68A",
                                    borderRadius: "0.875rem",
                                    padding: "1.25rem 1.4rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <p style={{ margin: 0, fontSize: "0.92rem", color: "#92400E", lineHeight: 1.6, fontFamily: font }}>
                                    <strong>Important distinction:</strong> Annex A helps you interpret the requirements. It is not a
                                    separate list of additional certification requirements. For anyone reviewing an existing system, it is
                                    worth reading alongside Clauses 4 to 10 rather than treating it as an appendix to ignore.
                                </p>
                            </div>
                        </div>

                        {/* WHAT TO REVIEW FIRST */}
                        <div
                            id="review-first"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>What Should You Review First?</h2>
                            <p style={ps}>
                                I would not begin by rewriting procedures.
                            </p>
                            <p style={ps}>
                                Start with the areas where the 2026 edition asks organisations to think more carefully:
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1.25rem 0" }}>
                                {[
                                    { text: "Whether the QMS still reflects organisational context and strategy", icon: "🧭" },
                                    { text: "How leadership demonstrates quality culture and ethical behaviour", icon: "🏛️" },
                                    { text: "Whether risks and opportunities are both being addressed properly", icon: "⚖️" },
                                    { text: "Whether people understand their contribution to quality", icon: "👥" },
                                    { text: "Whether internal audits are testing the revised expectations", icon: "📋" },
                                    { text: "Whether improvement activities are producing effective results", icon: "📈" },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            background: "#fff",
                                            borderRadius: "0.75rem",
                                            border: "1px solid #e8e4df",
                                            padding: "0.85rem 1.15rem",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.85rem",
                                        }}
                                    >
                                        <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{item.icon}</span>
                                        <span style={{ fontSize: "0.93rem", color: "#111827", fontWeight: 500, fontFamily: font }}>
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p style={ps}>
                                From there, you can identify where the system already works and where there is a genuine gap.
                            </p>
                            <p style={ps}>
                                If your organisation is preparing for the formal transition, our{" "}
                                <Link href={TRANSITION_URL} style={lnk}>
                                    ISO 9001:2026 transition page
                                </Link>{" "}
                                covers the next steps in more detail. ISO&apos;s own guidance also recommends understanding the changes,
                                assessing the current system, strengthening it where necessary and planning the transition with your
                                certification body.
                            </p>
                        </div>

                        {/* PUT INTO AUDIT PROCESS */}
                        <div
                            id="audit-process"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Put the Requirements into a Working Audit Process</h2>
                            <p style={ps}>
                                Understanding ISO 9001:2026 requirements is only the first part.
                            </p>
                            <p style={ps}>
                                The next challenge is keeping track of what has been reviewed, what evidence supports it, where gaps
                                have been found, who owns the resulting actions and whether those actions have actually been closed
                                effectively.
                            </p>
                            <p style={ps}>
                                That is where a structured audit process helps.
                            </p>
                            <p style={ps}>
                                <Link href={AUDIT_SOFTWARE_URL} style={lnk}>
                                    iAudit Global
                                </Link>{" "}
                                brings audit planning, evidence, findings, corrective actions and follow-up into one place, so your audit
                                programme does not have to depend on separate spreadsheets, files and email threads.
                            </p>

                            {/* Green CTA Box */}
                            <div
                                style={{
                                    background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)",
                                    borderRadius: "1.25rem",
                                    padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    marginTop: "1.5rem",
                                    color: "#fff",
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
                                        margin: "0 0 0.75rem",
                                        fontFamily: font,
                                        position: "relative",
                                    }}
                                >
                                    Manage Your ISO 9001:2026 Audit Reviews in iAudit Global
                                </h3>
                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.85)",
                                        fontSize: "0.975rem",
                                        lineHeight: 1.8,
                                        margin: "0 0 1.25rem",
                                        position: "relative",
                                        fontFamily: font,
                                    }}
                                >
                                    Connect clause evaluations to real audit evidence, assign corrective action owners, and maintain a
                                    complete digital audit history for certification readiness.
                                </p>
                                <Link
                                    href={PRICING_URL}
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
                                        position: "relative",
                                        fontFamily: font,
                                    }}
                                >
                                    Start 14-Day Free Trial
                                    <svg
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
                                </Link>
                                <span
                                    style={{
                                        display: "inline-block",
                                        marginLeft: isMobile ? "0" : "1rem",
                                        marginTop: isMobile ? "0.75rem" : "0",
                                        fontSize: "0.82rem",
                                        color: "rgba(255,255,255,0.75)",
                                        fontFamily: font,
                                    }}
                                >
                                    No credit card required. Full access from day one.
                                </span>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div
                            id="faq"
                            style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)", marginTop: "2.75rem" }}
                        >
                            <h2 style={h2s}>Frequently Asked Questions</h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "1rem" }}>
                                {[
                                    {
                                        q: "1. What are the main ISO 9001:2026 requirements?",
                                        a: "ISO 9001:2026 continues to focus on context, leadership, planning, support, operation, performance evaluation and improvement. The revised edition also places greater emphasis on quality culture, ethical behaviour, risks and opportunities, strategic alignment and employee awareness.",
                                    },
                                    {
                                        q: "2. Do organisations need to rewrite their QMS for ISO 9001:2026?",
                                        a: "Not necessarily. Most organisations should first review their existing Quality Management System against the revised requirements. If current processes already meet the new expectations, they may only need targeted updates rather than a complete rewrite.",
                                    },
                                    {
                                        q: "3. What should organisations review first for the ISO 9001:2026 transition?",
                                        a: "A good starting point is leadership, quality culture, organisational context, risks and opportunities, employee awareness, internal audit criteria and management review. Reviewing these areas early can help identify where the existing QMS already meets the revised standard and where action may be needed.",
                                    },
                                    {
                                        q: "4. How does ISO 9001:2026 change leadership requirements?",
                                        a: "ISO 9001:2026 places greater emphasis on leadership promoting quality culture and ethical behaviour. Organisations should be able to show how quality is supported through management decisions, communication, accountability and the way quality issues are handled in practice.",
                                    },
                                    {
                                        q: "5. Do internal audits need to change for ISO 9001:2026?",
                                        a: "Yes. Internal audit programmes should be reviewed to make sure they reflect the revised requirements. This may include stronger focus on quality culture, ethical behaviour, strategic alignment, risks and opportunities, awareness and how organisational changes are managed.",
                                    },
                                    {
                                        q: "6. How can organisations prepare for the ISO 9001:2026 transition?",
                                        a: (
                                            <>
                                                Start by understanding the revised requirements, comparing them with the current QMS,
                                                identifying gaps and assigning actions. It is also important to update internal audits
                                                and verify that any changes are working before the transition deadline. iAudit Global’s{" "}
                                                <Link href={TRANSITION_URL} style={lnk}>
                                                    ISO 9001:2026 transition page
                                                </Link>{" "}
                                                provides further guidance.
                                            </>
                                        ),
                                    },
                                    {
                                        q: "7. Can I try iAudit Global while preparing for ISO 9001:2026?",
                                        a: (
                                            <>
                                                Yes. iAudit Global offers a 14-day free trial with no credit card required. You can use
                                                the platform to manage audit planning, evidence, findings, corrective actions and follow-up
                                                while reviewing your ISO 9001:2026 readiness. You can view the plans and start your trial
                                                on the{" "}
                                                <Link href={PRICING_URL} style={lnk}>
                                                    iAudit Global pricing page
                                                </Link>
                                                .
                                            </>
                                        ),
                                    },
                                ].map((faq, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            background: "#fff",
                                            borderRadius: "0.875rem",
                                            border: "1px solid #e8e4df",
                                            padding: "1.15rem 1.35rem",
                                        }}
                                    >
                                        <h4
                                            style={{
                                                margin: "0 0 0.4rem",
                                                fontSize: "0.98rem",
                                                fontWeight: 600,
                                                color: "#111827",
                                                fontFamily: font,
                                            }}
                                        >
                                            {faq.q}
                                        </h4>
                                        <p style={{ margin: 0, fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.65, fontFamily: font }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* RIGHT AUTHOR ASIDE (Desktop) */}
                    {!isMobile && (
                        <aside
                            style={{
                                position: "sticky",
                                top: "calc(var(--blog-sticky-offset) + 8px)",
                                alignSelf: "start",
                            }}
                        >
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
                                        backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center top",
                                        overflow: "hidden",
                                        margin: "0 auto 1.1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                />
                                <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>
                                    <Link
                                        href="/author/mathew-chiweda"
                                        style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}
                                    >
                                        Mathew Chiweda
                                    </Link>
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
                                    Author & PDCA Specialist
                                </p>
                                <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                                <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                    Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With
                                    extensive experience across quality, health and safety, environmental management, and auditing,
                                    he supports organisations in implementing practical management systems and preparing for ISO transitions.
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
                                    Free consultation
                                </Link>
                            </div>
                        </aside>
                    )}

                    {/* Mobile Author Card */}
                    {isMobile && (
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: "1.1rem",
                                border: "1px solid #e8e4df",
                                padding: "1.75rem 1.5rem",
                                textAlign: "center",
                                marginTop: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    width: "72px",
                                    height: "72px",
                                    borderRadius: "50%",
                                    backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    overflow: "hidden",
                                    margin: "0 auto 0.875rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>
                                <Link
                                    href="/author/mathew-chiweda"
                                    style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}
                                >
                                    Mathew Chiweda
                                </Link>
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
                                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. He supports
                                organisations in implementing practical management systems and preparing for ISO transitions.
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
                                Free consultation
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <CTA />
            <Footer />
        </div>
    );
}
