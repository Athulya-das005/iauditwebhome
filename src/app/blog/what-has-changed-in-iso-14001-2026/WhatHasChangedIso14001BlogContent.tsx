"use client";

import React, { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    changes:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&h=480&fit=crop&q=80&fm=webp",
    context:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=480&fit=crop&q=80&fm=webp",
    climate:
        "https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=900&h=480&fit=crop&q=80&fm=webp",
    biodiversity:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&h=480&fit=crop&q=80&fm=webp",
    lifecycle:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b4b3?w=900&h=480&fit=crop&q=80&fm=webp",
    risks:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
    change:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e7e0?w=900&h=480&fit=crop&q=80&fm=webp",
    providers:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=480&fit=crop&q=80&fm=webp",
    audits:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&h=480&fit=crop&q=80&fm=webp",
    same:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&h=480&fit=crop&q=80&fm=webp",
    next:
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "tldr", label: "TL;DR" },
    { id: "intro", label: "Introduction" },
    { id: "changes", label: "What has changed" },
    { id: "context", label: "1. Environmental context" },
    { id: "climate", label: "2. Climate change" },
    { id: "biodiversity", label: "3. Biodiversity & resources" },
    { id: "lifecycle", label: "4. Lifecycle thinking" },
    { id: "risks", label: "5. Risks & planning" },
    { id: "change", label: "6. Change management" },
    { id: "providers", label: "7. External providers" },
    { id: "audits", label: "8. Audits & review" },
    { id: "same", label: "What has stayed the same" },
    { id: "next-steps", label: "What should you do now?" },
    { id: "meaning", label: "What it means for you" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const comparisonRows = [
    { area: "Environmental context", v2015: "Internal and external issues", v2026: "Broader environmental conditions" },
    { area: "Climate change", v2015: "Added through 2024 amendment", v2026: "Integrated into the 2026 edition" },
    { area: "Biodiversity and resources", v2015: "Considered where relevant", v2026: "Greater visibility" },
    { area: "Lifecycle perspective", v2015: "Already required", v2026: "Application clarified" },
    { area: "Risks and opportunities", v2015: "Existing requirement", v2026: "Planning structure clarified" },
    { area: "Change management", v2015: "Less explicit", v2026: "New Clause 6.3" },
    { area: "External providers", v2015: "Outsourced processes", v2026: "Processes, products and services" },
    { area: "Internal audits", v2015: "Existing requirement", v2026: "Audit objectives clarified" },
    { area: "Management review", v2015: "Existing requirement", v2026: "Information requirements strengthened" },
];

const nextSteps = [
    {
        title: "Understand the ISO 14001:2026 changes.",
        text: "Make sure the people responsible for the EMS know which requirements have changed.",
    },
    {
        title: "Carry out a gap analysis.",
        text: "Compare your current EMS against the 2026 requirements.",
    },
    {
        title: "Review your organisational context.",
        text: "Consider climate change, pollution, biodiversity, ecosystem health and resource availability where relevant.",
    },
    {
        title: "Review environmental aspects and risks.",
        text: "Check that the assessments still reflect the organisation's actual activities and context.",
    },
    {
        title: "Review lifecycle considerations.",
        text: "Look at where the organisation can control or influence environmental impacts.",
    },
    {
        title: "Review change management.",
        text: "Make sure significant changes are assessed before implementation.",
    },
    {
        title: "Review external-provider controls.",
        text: "Consider suppliers, contractors, products and services that can affect environmental performance.",
    },
    {
        title: "Update your internal audit programme.",
        text: "Make sure audit objectives and criteria reflect ISO 14001:2026.",
    },
    {
        title: "Track corrective actions through to completion.",
        text: "Closing the finding is not the same as verifying that the action was effective.",
    },
    {
        title: "Discuss transition arrangements with your certification body.",
        text: "Confirm the timing and requirements that apply to your certification.",
    },
];

const faqItems = [
    {
        question: "What has changed in ISO 14001:2026?",
        answer:
            "ISO 14001:2026 introduces and clarifies several requirements compared with ISO 14001:2015. Key changes include broader consideration of environmental context, greater visibility of climate change and biodiversity, clearer lifecycle thinking, revised planning requirements, new Clause 6.3 on planning of changes, broader requirements for external providers, and clearer expectations around internal audits and management review.",
    },
    {
        question: "Is ISO 14001:2026 a completely new standard?",
        answer:
            "No. ISO 14001:2026 builds on the existing Environmental Management System framework rather than replacing it with a completely different approach. The PDCA cycle, continual improvement, environmental aspects, compliance obligations, risk-based thinking and lifecycle perspective remain important. Organisations certified to ISO 14001:2015 should review and update their existing EMS rather than assume they need to start again.",
    },
    {
        question: "What is the difference between ISO 14001:2015 and ISO 14001:2026?",
        answer:
            "The main difference is the clarification and strengthening of several areas of the Environmental Management System. ISO 14001:2026 gives greater attention to environmental context, climate change, biodiversity, natural resources, lifecycle considerations and change management. It also clarifies requirements relating to external providers, internal audits and management review.",
    },
    {
        question: "When do organisations need to transition to ISO 14001:2026?",
        answer:
            "ISO 14001:2015 certificates are subject to a transition period following publication of ISO 14001:2026. Certification bodies are communicating 14 April 2029 as the end of the three-year transition period. Organisations should speak with their certification body to confirm the transition arrangements and timing that apply to their certificate.",
    },
    {
        question: "Does ISO 14001:2026 introduce new climate change requirements?",
        answer:
            "Climate change is not entirely new to ISO 14001. The 2024 Climate Action Amendment already required organisations to consider whether climate change is a relevant issue. ISO 14001:2026 incorporates those climate-related changes into the revised standard and places them within a broader environmental context that also considers issues such as biodiversity, pollution and resource availability.",
    },
    {
        question: "How can I check if my organisation is ready for ISO 14001:2026?",
        answer: (
            <>
                A gap analysis is a good starting point. Review your current Environmental Management System against the ISO 14001:2026 requirements, paying particular attention to context, environmental aspects, risks and opportunities, lifecycle thinking, change management, external providers and internal auditing.{" "}
                <a
                    href="https://www.iaudit.global/iso-14001-2026-self-assessment-tool"
                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                    You can also use iAudit Global&apos;s free ISO 14001:2026 self-assessment to get an initial view of your organisation&apos;s readiness.
                </a>
            </>
        ),
    },
    {
        question: "Do I need to update my ISO 14001 internal audit checklist for 2026?",
        answer:
            "Yes. Your internal audit programme and checklists should be reviewed against the revised requirements. However, simply adding new clause numbers to an existing checklist is unlikely to be enough. Auditors should consider whether the organisation has effectively addressed areas such as environmental context, climate change, lifecycle perspective, planning of changes, external providers and the revised expectations for audit objectives and evidence.",
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

function Highlight({ children }: { children: ReactNode }) {
    return (
        <span
            style={{
                color: "#111827",
                fontWeight: 700,
            }}
        >
            {children}
        </span>
    );
}

function BulletList({ items, font }: { items: string[]; font: string }) {
    return (
        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
            {items.map((item) => (
                <li
                    key={item}
                    style={{
                        display: "flex",
                        gap: "0.625rem",
                        alignItems: "flex-start",
                        marginBottom: "0.625rem",
                        fontFamily: font,
                    }}
                >
                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✓</span>
                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                        {item}
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default function WhatHasChangedIso14001BlogContent() {
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
                    alt="What has changed in ISO 14001:2026 — key changes explained"
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
                        ISO 14001
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
                            September 2, 2026
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
                            12 Min Read
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
                                        transition: "all 0.2s ease",
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
                        What Has Changed in ISO 14001:2026? Key Changes from the 2015 Edition
                    </h1>

                    <div id="tldr" style={{ scrollMarginTop: "58px", marginBottom: "2rem" }}>
                        <div
                            style={{
                                background: "rgba(0,102,68,0.05)",
                                border: "1px solid rgba(0,102,68,0.14)",
                                borderRadius: "0.875rem",
                                padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                            }}
                        >
                            <h2 style={{ ...h2(font), marginBottom: "0.75rem" }}>TL;DR</h2>
                            <p style={para(font)}>
                                What has changed in ISO 14001:2026? The new edition builds on ISO 14001:2015 rather than replacing the Environmental Management System framework. Key changes include broader consideration of environmental context, climate change, biodiversity, ecosystem health and resource availability. The revision also clarifies lifecycle thinking, risks and opportunities, change management, external providers, internal audit objectives and management review.
                            </p>
                            <p style={para(font)}>
                                Climate change is not entirely new. It was introduced through the 2024 Climate Action Amendment and is now integrated into ISO 14001:2026 alongside wider environmental considerations.
                            </p>
                            <p style={para(font)}>
                                Organisations certified to ISO 14001:2015 should carry out a gap analysis, review their environmental aspects and risks, update relevant processes and controls, and revise their internal audit programme where necessary.
                            </p>
                            <p style={{ ...para(font), marginBottom: 0 }}>
                                If you are preparing for the transition,{" "}
                                <a href="https://www.iaudit.global/iso-14001-2026-self-assessment-tool" style={linkStyle}>
                                    start with iAudit Global&apos;s free ISO 14001:2026 self-assessment
                                </a>{" "}
                                to check your current readiness and identify areas that may need attention.
                            </p>
                        </div>
                    </div>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            The question I am getting most often since ISO 14001:2026 was published is fairly simple: what has actually changed?
                        </p>
                        <p style={para(font)}>
                            The new edition was published on 15 April 2026 and replaces ISO 14001:2015 and its 2024 climate action amendment. If your organisation is already certified to ISO 14001:2015, I would not approach this as if you need to build your Environmental Management System again from scratch.
                        </p>
                        <p style={para(font)}>
                            The basic structure is still familiar. What has changed is the level of clarity and emphasis around several areas, including environmental context, climate change, biodiversity, lifecycle thinking, risks and opportunities, change management, external providers, internal auditing and management review.
                        </p>
                        <p style={para(font)}>So, what has changed in ISO 14001:2026, and what should you actually be doing about it?</p>
                    </div>

                    <div id="changes" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What has changed in ISO 14001:2026?</h2>
                        <SectionImage src={sectionImages.changes} alt="ISO 14001:2026 environmental management landscape" />
                        <p style={para(font)}>
                            I find it useful to separate the changes into two groups. Some are genuinely new requirements. Others clarify or reorganise requirements that organisations were already expected to address under ISO 14001:2015.
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
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr 1fr",
                                    gap: 0,
                                    background: "rgba(0,102,68,0.06)",
                                    borderBottom: "1px solid rgba(0,102,68,0.12)",
                                    padding: isMobile ? "0.9rem 1rem" : "1rem 1.25rem",
                                }}
                            >
                                {["Area", "ISO 14001:2015", "ISO 14001:2026"].map((header) => (
                                    <p
                                        key={header}
                                        style={{
                                            margin: isMobile ? "0 0 0.35rem" : 0,
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
                                        gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr 1fr",
                                        gap: isMobile ? "0.35rem" : 0,
                                        padding: isMobile ? "1rem" : "1rem 1.25rem",
                                        borderBottom: i < comparisonRows.length - 1 ? "1px solid #f0ede8" : "none",
                                        background: i % 2 === 0 ? "#fff" : "rgba(249,247,244,0.65)",
                                    }}
                                >
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: "0.92rem", color: "#111827", fontFamily: font }}>
                                        {row.area}
                                    </p>
                                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.55, fontFamily: font }}>
                                        {isMobile ? <strong style={{ color: "#6b7280" }}>2015: </strong> : null}
                                        {row.v2015}
                                    </p>
                                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#374151", lineHeight: 1.55, fontFamily: font }}>
                                        {isMobile ? <strong style={{ color: "#006644" }}>2026: </strong> : null}
                                        {row.v2026}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p style={para(font)}>
                            There is a lot of information online about the revision, and some of it is based on earlier draft versions. I would be careful with that. The final published standard is what matters now.
                        </p>
                    </div>

                    <div id="context" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>1. Environmental context is broader</h2>
                        <SectionImage src={sectionImages.context} alt="Organisational environmental context and landscape" />
                        <p style={para(font)}>One of the areas I would review first is Clause 4.1 and the context of the organisation.</p>
                        <p style={para(font)}>
                            ISO 14001:2026 puts greater emphasis on environmental conditions such as climate change, pollution, natural resource availability, biodiversity and ecosystem health.
                        </p>
                        <p style={para(font)}>
                            That does not mean every organisation suddenly needs a separate procedure for each of these subjects.
                        </p>
                        <p style={para(font)}>
                            The question is whether these issues are relevant to your organisation and its ability to achieve the intended outcomes of the Environmental Management System.
                        </p>
                        <p style={para(font)}>
                            For example, a manufacturing site may need to consider water availability, extreme weather, resource constraints, local pollution or the sensitivity of the surrounding environment.
                        </p>
                        <p style={para(font)}>I would therefore look at the context review and ask a straightforward question:</p>
                        <div
                            style={{
                                background: "rgba(0,102,68,0.05)",
                                borderRadius: "0.875rem",
                                border: "1px solid rgba(0,102,68,0.12)",
                                padding: "1.25rem 1.5rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            <p style={{ margin: 0, fontSize: "0.98rem", color: "#111827", lineHeight: 1.75, fontFamily: font }}>
                                <Highlight>
                                    Have we properly considered the environmental conditions that affect us, and the environmental conditions that our activities may affect?
                                </Highlight>
                            </p>
                        </div>
                        <p style={para(font)}>
                            If the answer is based on a context review that has not changed for several years, this is a good place to start.
                        </p>
                    </div>

                    <div id="climate" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>2. Climate change is now integrated into ISO 14001:2026</h2>
                        <SectionImage src={sectionImages.climate} alt="Climate change and environmental transition" />
                        <p style={para(font)}>There is an important distinction here.</p>
                        <p style={para(font)}>Climate change is not completely new to ISO 14001.</p>
                        <p style={para(font)}>
                            The 2024 Climate Action Amendment already required organisations to determine whether climate change was a relevant issue when considering organisational context. ISO 14001:2026 now incorporates those climate-related changes into the revised standard.
                        </p>
                        <p style={para(font)}>
                            So I would not tell an organisation that it has suddenly been given a completely new climate requirement.
                        </p>
                        <p style={para(font)}>The bigger point is that climate change now sits within a wider environmental context.</p>
                        <p style={para(font)}>
                            If climate change is relevant to your organisation, I would expect to see that consideration reflected beyond the context statement. It may affect environmental risks, objectives, operational controls, emergency planning, infrastructure, resources or monitoring.
                        </p>
                        <p style={para(font)}>Simply adding the words &ldquo;climate change&rdquo; to a register is unlikely to demonstrate much.</p>
                    </div>

                    <div id="biodiversity" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>3. Biodiversity and natural resources have greater visibility</h2>
                        <SectionImage src={sectionImages.biodiversity} alt="Biodiversity and natural resource considerations" />
                        <p style={para(font)}>
                            Biodiversity, ecosystem health and natural resource availability receive more attention in the 2026 edition.
                        </p>
                        <p style={para(font)}>The practical impact will vary considerably between organisations.</p>
                        <p style={para(font)}>
                            A construction project near a sensitive habitat may have very different considerations from an office-based consultancy. A mining operation may have significant resource and ecosystem considerations that are not relevant to a small professional services organisation.
                        </p>
                        <p style={para(font)}>I would therefore avoid treating this as a tick-box exercise.</p>
                        <p style={para(font)}>
                            The better approach is to consider whether these issues are relevant to your activities, location, environmental aspects and interested parties, and then determine what needs to be addressed through the EMS.
                        </p>
                    </div>

                    <div id="lifecycle" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>4. Lifecycle thinking is clearer</h2>
                        <SectionImage src={sectionImages.lifecycle} alt="Lifecycle thinking across supply chain and operations" />
                        <p style={para(font)}>Lifecycle perspective is another area where I would be careful with the language.</p>
                        <p style={para(font)}>
                            Lifecycle thinking was already part of ISO 14001:2015. It is not a completely new requirement in ISO 14001:2026.
                        </p>
                        <p style={para(font)}>
                            What the revision does is make its application clearer, including its relationship with the scope of the Environmental Management System, environmental aspects and operational controls.
                        </p>
                        <p style={para(font)}>That means looking beyond what happens inside your own site.</p>
                        <p style={para(font)}>Depending on the organisation, relevant lifecycle considerations could include:</p>
                        <BulletList
                            font={font}
                            items={[
                                "Procurement and raw materials",
                                "Product or process design",
                                "Suppliers and contractors",
                                "Transport",
                                "Use of products",
                                "Waste and end-of-life",
                            ]}
                        />
                        <p style={para(font)}>The point is not that you suddenly have control over your entire supply chain.</p>
                        <p style={para(font)}>The point is to understand where you can control or influence environmental impacts.</p>
                    </div>

                    <div id="risks" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>5. Risks, opportunities and planning have been reorganised</h2>
                        <SectionImage src={sectionImages.risks} alt="Environmental risks and opportunities planning" />
                        <p style={para(font)}>There are also changes to the way planning requirements are structured.</p>
                        <p style={para(font)}>
                            The requirements relating to environmental aspects, compliance obligations, risks and opportunities and actions have been reorganised to make the relationship between them clearer.
                        </p>
                        <p style={para(font)}>
                            This is an area where I would resist the temptation to simply change clause numbers in existing documentation.
                        </p>
                        <p style={para(font)}>Instead, look at whether the pieces actually connect.</p>
                        <p style={para(font)}>
                            Does your environmental aspects assessment inform your risks and opportunities? Do those risks influence your objectives and controls? Are actions assigned to someone and followed through?
                        </p>
                        <p style={para(font)}>An EMS should work as a system, rather than a collection of separate registers.</p>
                    </div>

                    <div id="change" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>6. Change management is now explicit</h2>
                        <SectionImage src={sectionImages.change} alt="Planning organisational and operational change" />
                        <p style={para(font)}>
                            One of the clearest changes in ISO 14001:2026 is new Clause 6.3, Planning of changes.
                        </p>
                        <p style={para(font)}>
                            This is worth paying attention to because changes within an organisation can have environmental consequences that are easily missed.
                        </p>
                        <p style={para(font)}>Think about:</p>
                        <BulletList
                            font={font}
                            items={[
                                "New machinery",
                                "New production processes",
                                "Site expansion",
                                "Changes to materials",
                                "Organisational restructuring",
                                "Significant supplier changes",
                                "Changes to operational activities",
                            ]}
                        />
                        <p style={para(font)}>The question I would ask is:</p>
                        <div
                            style={{
                                background: "rgba(0,102,68,0.05)",
                                borderRadius: "0.875rem",
                                border: "1px solid rgba(0,102,68,0.12)",
                                padding: "1.25rem 1.5rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            <p style={{ margin: 0, fontSize: "0.98rem", color: "#111827", lineHeight: 1.75, fontFamily: font }}>
                                <Highlight>
                                    Before we make this change, have we considered what it means for the Environmental Management System?
                                </Highlight>
                            </p>
                        </div>
                        <p style={para(font)}>
                            That consideration should be planned rather than left until after the change has been implemented.
                        </p>
                        <p style={para(font)}>
                            This is a practical requirement. It should connect with how the organisation already manages operational and organisational change.
                        </p>
                    </div>

                    <div id="providers" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>7. External providers are described more broadly</h2>
                        <SectionImage src={sectionImages.providers} alt="External providers and supply chain environmental controls" />
                        <p style={para(font)}>The wording around external providers has also changed.</p>
                        <p style={para(font)}>
                            The focus is no longer simply on &ldquo;outsourced processes&rdquo;. The revised standard refers more broadly to externally provided processes, products and services.
                        </p>
                        <p style={para(font)}>
                            That is important because environmental performance can be affected by much more than outsourced processes.
                        </p>
                        <p style={para(font)}>Consider your:</p>
                        <BulletList
                            font={font}
                            items={[
                                "Raw material suppliers",
                                "Waste contractors",
                                "Logistics providers",
                                "Maintenance providers",
                                "External laboratories",
                                "Contractors",
                                "Other service providers",
                            ]}
                        />
                        <p style={para(font)}>
                            I would review which of these can affect your environmental performance and whether the organisation has appropriate controls or influence over them.
                        </p>
                    </div>

                    <div id="audits" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>8. Internal audits and management review need a closer look</h2>
                        <SectionImage src={sectionImages.audits} alt="Internal audit programme and management review" />
                        <p style={para(font)}>This is particularly relevant during transition.</p>
                        <p style={para(font)}>
                            Internal auditing remains a core part of ISO 14001, but the 2026 edition provides greater clarity around audit objectives. Management review information requirements are also more clearly defined.
                        </p>
                        <p style={para(font)}>
                            For me, this means organisations should review their <Highlight>audit programme</Highlight>, not just update an audit checklist.
                        </p>
                        <p style={para(font)}>
                            Ask whether your audits have clear objectives, defined scope and criteria, appropriate evidence, meaningful findings and proper follow-up.
                        </p>
                        <p style={para(font)}>Then look at what happens after the audit.</p>
                        <p style={para(font)}>
                            Are findings assigned to owners? Are corrective actions tracked? Is effectiveness verified? Does useful information from the audit actually reach management review?
                        </p>
                        <p style={para(font)}>
                            That is where an internal audit becomes useful to the organisation rather than simply another compliance exercise.
                        </p>
                    </div>

                    <div id="same" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What has stayed the same in ISO 14001:2026?</h2>
                        <SectionImage src={sectionImages.same} alt="Continuity of the Environmental Management System framework" />
                        <p style={para(font)}>There is a tendency with a new edition to focus entirely on what is different.</p>
                        <p style={para(font)}>I think it is equally important to understand what has not changed.</p>
                        <p style={para(font)}>
                            The Environmental Management System remains at the centre of ISO 14001. The PDCA approach remains. Continual improvement remains. Environmental aspects, compliance obligations, risk-based thinking and lifecycle perspective remain important parts of the system.
                        </p>
                        <p style={para(font)}>So if you already have a functioning ISO 14001:2015 system, you have a foundation to work from.</p>
                        <p style={para(font)}>
                            The objective should be to understand where the existing system needs to be strengthened or adjusted, not to rewrite every document simply because the standard has been revised.
                        </p>
                    </div>

                    <div id="next-steps" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What should you do now?</h2>
                        <SectionImage src={sectionImages.next} alt="Practical next steps for ISO 14001:2026 transition" />
                        <p style={para(font)}>I would approach the transition in a fairly straightforward order.</p>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: "0.875rem",
                                border: "1px solid #e8e4df",
                                padding: "0.25rem 1.25rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            {nextSteps.map((step, i, arr) => (
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
                                        <strong style={{ color: "#111827" }}>{step.title}</strong> {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            ISO 14001:2026 provides a three-year transition period, with certification bodies communicating 14 April 2029 as the end of the transition period. I would still recommend confirming the specific arrangements with your certification body rather than leaving the transition until the deadline.
                        </p>
                    </div>

                    <div id="meaning" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What Do the ISO 14001:2026 Changes Mean for Your Organisation?</h2>
                        <p style={para(font)}>
                            If you are asking what has changed in ISO 14001:2026, my view is that the revision is more about strengthening the way an Environmental Management System works than starting again with a completely different system.
                        </p>
                        <p style={para(font)}>
                            The areas I would look at first are context, climate change, environmental aspects, lifecycle thinking, change management, external providers and the internal audit programme.
                        </p>
                        <p style={para(font)}>A good transition starts with understanding where you are now.</p>
                        <p style={para(font)}>
                            At iAudit Global, we have built our platform around the practical stages of ISO audit management, including audit planning, evidence capture, findings, corrective actions and reporting. You can{" "}
                            <a href="https://www.iaudit.global/about" style={linkStyle}>
                                learn more about iAudit Global
                            </a>
                            .
                        </p>
                        <p style={para(font)}>
                            If you are planning your transition and want to discuss what ISO 14001:2026 means for your organisation, you can{" "}
                            <a href="https://www.iaudit.global/ISO14001-2026" style={linkStyle}>
                                book a free ISO 14001:2026 transition consultation
                            </a>
                            .
                        </p>
                        <p style={para(font)}>
                            Or, if you want to start by checking your current readiness, you can take our{" "}
                            <a href="https://www.iaudit.global/iso-14001-2026-self-assessment-tool" style={linkStyle}>
                                free ISO 14001:2026 self-assessment
                            </a>
                            .
                        </p>
                    </div>
                </article>

                {!isMobile && <AuthorCard font={font} />}
                {isMobile && <AuthorCard font={font} mobile />}
            </div>

            <div id="faq" style={{ scrollMarginTop: "58px" }}>
                <FAQAccordion items={faqItems} heading="Frequently Asked Questions" sparkleText="FAQ" />
            </div>

            <CTA />
            <Footer />
        </div>
    );
}

function AuthorCard({ font, mobile = false }: { font: string; mobile?: boolean }) {
    return (
        <aside style={mobile ? undefined : { position: "sticky", top: "58px", alignSelf: "start" }}>
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
                    Mathew Chiweda
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

function h2(font: string): CSSProperties {
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

function para(font: string): CSSProperties {
    return {
        fontSize: "0.98rem",
        color: "#374151",
        lineHeight: 1.85,
        margin: "0 0 1rem",
        fontFamily: font,
    };
}
