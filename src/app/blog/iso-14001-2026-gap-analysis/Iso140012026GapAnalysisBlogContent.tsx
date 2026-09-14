"use client";

import React, { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    why: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&h=480&fit=crop&q=80&fm=webp",
    check: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=480&fit=crop&q=80&fm=webp",
    how: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&h=480&fit=crop&q=80&fm=webp",
    mistakes: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=900&h=480&fit=crop&q=80&fm=webp",
    after: "https://images.unsplash.com/photo-1497435334941-8c899ee9e7e0?w=900&h=480&fit=crop&q=80&fm=webp",
    start: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "tldr", label: "TL;DR" },
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What is a gap analysis?" },
    { id: "why", label: "Why carry one out?" },
    { id: "check", label: "What should it check?" },
    { id: "how", label: "How to conduct it" },
    { id: "mistakes", label: "Common mistakes" },
    { id: "after", label: "What to do after" },
    { id: "start", label: "Start free gap analysis" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const howSteps = [
    {
        title: "Establish your current position",
        text: "Gather the information that describes your existing EMS. This might include your environmental policy, aspects register, compliance obligations, objectives, operational controls, audit records, management reviews and corrective actions.",
    },
    {
        title: "Compare your EMS with ISO 14001:2026",
        text: "Work through the requirements systematically. For each area, determine whether the requirement is adequately addressed, partly addressed or not addressed. Do not rely on memory or assumptions. Record the evidence behind your assessment.",
    },
    {
        title: "Record the gaps",
        text: "A useful gap analysis should tell you exactly what needs attention. Instead of writing \"Clause needs updating,\" record what is actually missing or inadequate — for example, a process that exists but is not consistently implemented, incomplete evidence, or a new requirement not yet incorporated.",
    },
    {
        title: "Prioritise the actions",
        text: "Not every gap needs the same response. Consider environmental significance, compliance implications, operational risks and resources required. Some actions may need immediate attention; others can be incorporated into planned system improvements.",
    },
    {
        title: "Assign responsibility",
        text: "Every significant action should have someone responsible for taking it forward. Give it a target date and define what evidence will demonstrate that the action has been completed.",
    },
    {
        title: "Verify effectiveness",
        text: "Completing an action does not necessarily mean the gap is closed. If you update a procedure, you still need to establish whether the revised process is being followed and whether it is achieving the intended result.",
    },
];

const faqItems = [
    {
        question: "What is an ISO 14001:2026 gap analysis?",
        answer:
            "An ISO 14001:2026 gap analysis is a structured comparison between an organisation's existing Environmental Management System and the requirements of ISO 14001:2026. It helps identify requirements that are already addressed, areas needing improvement, missing evidence and actions required for transition.",
    },
    {
        question: "Why is an ISO 14001:2026 gap analysis important?",
        answer:
            "An ISO 14001:2026 gap analysis helps organisations understand what needs to change before transitioning to the revised standard. It provides a clear view of compliance gaps so teams can prioritise actions rather than making changes without first assessing their current EMS.",
    },
    {
        question: "How do you conduct an ISO 14001:2026 gap analysis?",
        answer:
            "Start by reviewing the existing EMS and comparing it with the requirements of ISO 14001:2026. Assess relevant processes, documented information and objective evidence, record any gaps, prioritise actions, assign responsibilities and verify that corrective actions have been effective.",
    },
    {
        question: "What areas should an ISO 14001:2026 gap analysis cover?",
        answer:
            "A gap analysis should consider the requirements across clauses 4 to 10, including organisational context, leadership, environmental aspects, risks and opportunities, planning, support, operational controls, performance evaluation, internal auditing and improvement.",
    },
    {
        question: "Is an ISO 14001:2026 gap analysis the same as an ISO 14001 audit?",
        answer:
            "No. A gap analysis is a readiness assessment used to identify areas that need attention. An ISO 14001 audit evaluates conformity and the effectiveness of the management system against defined audit criteria. A gap analysis does not result in ISO 14001 certification.",
    },
    {
        question: "How should compliance gaps identified during the assessment be prioritised?",
        answer:
            "Prioritise gaps according to factors such as environmental significance, compliance obligations, operational risk, potential impact on the EMS and the effort required to address them. Significant or high-risk gaps should generally be addressed before lower-priority improvements.",
    },
    {
        question: "Can I do an ISO 14001:2026 gap analysis for free?",
        answer:
            "Yes. iAudit Global provides a free ISO 14001:2026 gap analysis covering 61 auditable questions across clauses 4 to 10. It can help you identify areas of compliance, opportunities for improvement and potential nonconformities before planning your transition actions.",
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

export default function Iso140012026GapAnalysisBlogContent() {
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
                    alt="ISO 14001:2026 gap analysis — identify and close compliance gaps"
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
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            September 14, 2026
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            11 Min Read
                        </span>
                    </div>
                </div>
            </div>

            <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: 0, zIndex: 40 }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.5rem", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                    <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "0.875rem 1.25rem", display: "flex", flexDirection: "column", gap: "1px" }}>
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
                        ISO 14001:2026 Gap Analysis: How to Identify and Close Compliance Gaps
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
                                An ISO 14001:2026 gap analysis gives you a clear picture of how your existing Environmental Management System (EMS) compares with the requirements of the revised standard. It helps identify compliance gaps, missing evidence, outdated processes and areas that may need to be strengthened before transition.
                            </p>
                            <p style={para(font)}>
                                A useful ISO 14001 gap analysis looks beyond documents and procedures. It considers environmental context, climate change, biodiversity, environmental aspects, risks and opportunities, lifecycle thinking, operational controls, external providers, internal audits and management review.
                            </p>
                            <p style={{ ...para(font), marginBottom: 0 }}>
                                Once the gaps are identified, you can prioritise actions, assign responsibility and track progress towards transition.{" "}
                                <a href="https://www.iaudit.global/iso-audit-assessments/gap-analysis" style={linkStyle}>
                                    iAudit Global offers a free ISO 14001:2026 gap analysis
                                </a>{" "}
                                covering 61 auditable questions across clauses 4 to 10, helping you see where your EMS needs attention.
                            </p>
                        </div>
                    </div>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            If you already have an ISO 14001 environmental management system in place, I would not start your transition to ISO 14001:2026 by rewriting everything.
                        </p>
                        <p style={para(font)}>I would start by finding out where you actually stand.</p>
                        <p style={para(font)}>
                            That is what an ISO 14001:2026 gap analysis is for. It gives you a structured way to compare your existing Environmental Management System (EMS) with the requirements of the 2026 edition and identify where something needs to change, where evidence is missing, or where your existing arrangements need strengthening.
                        </p>
                        <p style={para(font)}>
                            The important thing is to treat the gap analysis as more than a checklist exercise. You are trying to understand how well your management system works against the revised requirements.
                        </p>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What is an ISO 14001:2026 gap analysis?</h2>
                        <SectionImage src={sectionImages.what} alt="Structured ISO 14001 gap analysis review" />
                        <p style={para(font)}>An ISO 14001:2026 gap analysis compares your current EMS with the requirements of ISO 14001:2026.</p>
                        <p style={para(font)}>The purpose is straightforward:</p>
                        <BulletList
                            font={font}
                            items={[
                                "Identify what you already have in place",
                                "Find requirements that are not adequately addressed",
                                "Identify where further evidence is needed",
                                "Highlight processes or controls that need updating",
                                "Prioritise the actions that need to be taken before transition",
                            ]}
                        />
                        <p style={para(font)}>
                            A gap analysis is not the same thing as a certification audit. It is a readiness exercise that helps you understand what needs attention before a formal audit.
                        </p>
                        <p style={para(font)}>
                            I also would not treat the existence of a procedure as proof that a requirement has been met. If your procedure says something happens, I want to see evidence that it actually happens.
                        </p>
                    </div>

                    <div id="why" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Why carry out an ISO 14001:2026 gap analysis?</h2>
                        <SectionImage src={sectionImages.why} alt="Preparing EMS for ISO 14001:2026 transition" />
                        <p style={para(font)}>
                            ISO 14001:2026 builds on the existing Environmental Management System framework rather than asking organisations to start again.
                        </p>
                        <p style={para(font)}>
                            There are, however, areas that deserve a closer look, including environmental context, climate change, biodiversity, natural resources, lifecycle thinking, planning of changes, external providers, internal auditing and management review.
                        </p>
                        <p style={para(font)}>
                            <a href="https://www.iaudit.global/blog/what-has-changed-in-iso-14001-2026" style={linkStyle}>
                                I have covered the detail of what has changed in ISO 14001:2026 separately, but understanding those changes is only the first step.
                            </a>
                        </p>
                        <p style={para(font)}>The next question is:</p>
                        <p style={{ ...para(font), fontWeight: 700, color: "#111827" }}>What do those changes mean for your own EMS?</p>
                        <p style={para(font)}>
                            That is where the gap analysis becomes useful. It gives you a way to move from understanding the revised standard to identifying specific actions within your organisation.
                        </p>
                    </div>

                    <div id="check" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What should an ISO 14001:2026 gap analysis check?</h2>
                        <SectionImage src={sectionImages.check} alt="Environmental context and EMS review areas" />
                        <p style={para(font)}>
                            I would look at the whole management system rather than focusing only on the clauses that appear to have changed.
                        </p>

                        <h3 style={h3(font)}>Context and environmental conditions</h3>
                        <p style={para(font)}>Start with the organisation&apos;s context.</p>
                        <p style={para(font)}>
                            Has the organisation considered the environmental conditions that affect its ability to achieve the intended outcomes of the EMS?
                        </p>
                        <p style={para(font)}>
                            Depending on the organisation, that could include climate change, pollution, biodiversity, ecosystem health and resource availability.
                        </p>
                        <p style={para(font)}>
                            The relevance will vary. A manufacturing site, construction project and professional services business will not have the same environmental considerations.
                        </p>
                        <p style={para(font)}>
                            I would therefore avoid adding topics simply because they appear in the revised standard. The question is whether they are relevant to the organisation and whether that relevance has been properly considered.
                        </p>

                        <h3 style={h3(font)}>Environmental aspects, risks and opportunities</h3>
                        <p style={para(font)}>Review your existing environmental aspects and impacts.</p>
                        <p style={para(font)}>Do they still reflect what the organisation actually does?</p>
                        <p style={para(font)}>
                            Have significant changes to activities, processes, materials, sites or suppliers affected the assessment?
                        </p>
                        <p style={para(font)}>
                            I would also look at how environmental aspects connect with risks, opportunities, objectives and operational controls.
                        </p>
                        <p style={para(font)}>
                            An EMS should work as a system. The registers should not exist as separate documents that never influence one another.
                        </p>

                        <h3 style={h3(font)}>Planning and change management</h3>
                        <p style={para(font)}>ISO 14001:2026 makes planning of changes more explicit.</p>
                        <p style={para(font)}>This is worth checking carefully.</p>
                        <p style={para(font)}>Consider changes such as:</p>
                        <BulletList
                            font={font}
                            items={[
                                "New machinery",
                                "New production processes",
                                "Site expansion",
                                "Changes to materials",
                                "Changes in suppliers",
                                "Organisational changes",
                                "Changes to operational activities",
                            ]}
                        />
                        <p style={para(font)}>
                            The question I would ask is whether environmental implications are considered before significant changes are implemented.
                        </p>
                        <p style={para(font)}>If the answer is no, there may be a gap worth addressing.</p>

                        <h3 style={h3(font)}>Lifecycle perspective and external providers</h3>
                        <p style={para(font)}>
                            Lifecycle thinking was already part of ISO 14001:2015, but its application is clearer in the 2026 edition.
                        </p>
                        <p style={para(font)}>Look beyond the physical boundaries of your site.</p>
                        <p style={para(font)}>
                            Depending on your organisation, relevant considerations may include procurement, raw materials, suppliers, contractors, transport, product use, waste and end-of-life.
                        </p>
                        <p style={para(font)}>
                            You do not control everything your suppliers do. What matters is understanding where you can control or influence environmental impacts.
                        </p>
                        <p style={para(font)}>
                            The same applies to external providers. Review suppliers, waste contractors, logistics providers, maintenance providers, laboratories and other external organisations that can affect environmental performance.
                        </p>

                        <h3 style={h3(font)}>Performance evaluation and internal audit</h3>
                        <p style={para(font)}>Finally, look at how you know that your EMS is working.</p>
                        <p style={para(font)}>
                            Review monitoring and measurement, evaluation of compliance, internal audits and management review.
                        </p>
                        <p style={para(font)}>I would pay particular attention to the internal audit programme.</p>
                        <p style={para(font)}>
                            Are audit objectives clear? Is the scope appropriate? Is there enough objective evidence? Are findings meaningful? Are corrective actions followed through?
                        </p>
                        <p style={para(font)}>And perhaps most importantly, are you checking whether actions have actually been effective?</p>
                    </div>

                    <div id="how" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>How to conduct an ISO 14001:2026 gap analysis</h2>
                        <SectionImage src={sectionImages.how} alt="Step-by-step gap analysis process" />
                        <p style={para(font)}>There is no need to make the process unnecessarily complicated.</p>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: "0.875rem",
                                border: "1px solid #e8e4df",
                                padding: "0.25rem 1.25rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            {howSteps.map((step, i, arr) => (
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
                                    <div>
                                        <p style={{ margin: "0 0 0.35rem", fontWeight: 700, fontSize: "0.95rem", color: "#111827", fontFamily: font }}>
                                            {step.title}
                                        </p>
                                        <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                                            {step.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="mistakes" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Common mistakes in an ISO 14001:2026 gap analysis</h2>
                        <SectionImage src={sectionImages.mistakes} alt="Avoiding common gap analysis mistakes" />
                        <p style={para(font)}>I see a few approaches that are worth avoiding.</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1rem 0 1.25rem" }}>
                            {[
                                {
                                    title: "Treating the exercise as a document review",
                                    desc: "An EMS is not just a collection of procedures. Evidence of implementation matters.",
                                },
                                {
                                    title: "Changing clause references without reviewing the process",
                                    desc: "Updating a document because the standard has changed does not necessarily improve the system.",
                                },
                                {
                                    title: "Turning new environmental topics into tick boxes",
                                    desc: "Climate change, biodiversity and resource availability should be considered for their relevance to the organisation.",
                                },
                                {
                                    title: "Closing actions without checking effectiveness",
                                    desc: "A completed task is not automatically an effective corrective action.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    style={{
                                        background: "#fff",
                                        borderRadius: "0.75rem",
                                        padding: "1.1rem 1.4rem",
                                        border: "1px solid #e8e4df",
                                        borderLeft: "4px solid #006644",
                                    }}
                                >
                                    <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>
                                        {item.title}
                                    </p>
                                    <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            A good ISO 14001:2026 gap analysis should leave you with a much clearer picture of what needs to happen next.
                        </p>
                    </div>

                    <div id="after" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What should you do after the gap analysis?</h2>
                        <SectionImage src={sectionImages.after} alt="Turning gap analysis results into a transition plan" />
                        <p style={para(font)}>Once the assessment is complete, turn the results into a transition plan.</p>
                        <p style={para(font)}>
                            Prioritise the significant gaps, assign actions and update the relevant processes and controls. Then gather evidence as the changes are implemented.
                        </p>
                        <p style={para(font)}>
                            I would also review the internal audit programme. Your auditors need to understand the revised requirements and make sure the audit programme is capable of assessing them.
                        </p>
                        <p style={para(font)}>
                            Finally, do not leave the transition arrangements until the last minute. Discuss the applicable transition requirements and timing with your certification body.
                        </p>
                        <p style={para(font)}>
                            The purpose of the gap analysis is not to produce a good-looking score. It is to give you an honest picture of where the EMS needs attention.
                        </p>
                    </div>

                    <div id="start" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Start your free ISO 14001:2026 gap analysis</h2>
                        <SectionImage src={sectionImages.start} alt="Free ISO 14001:2026 gap analysis with iAudit Global" />
                        <p style={para(font)}>
                            If you want to see where your Environmental Management System currently stands, we have made an ISO 14001:2026 gap analysis available for free through iAudit Global.
                        </p>
                        <p style={para(font)}>
                            The assessment covers 61 auditable questions across clauses 4 to 10 and identifies areas that may need further evidence, process changes or additional controls.
                        </p>
                        <p style={para(font)}>You can use the results to prioritise actions and build a clearer transition plan.</p>
                        <p style={para(font)}>
                            <a href="https://www.iaudit.global/iso-audit-assessments/gap-analysis" style={linkStyle}>
                                Start your free ISO 14001:2026 gap analysis
                            </a>
                        </p>
                        <p style={para(font)}>
                            You do not need to rewrite your entire EMS to prepare for ISO 14001:2026. Start by understanding what you already have, identify the gaps, and then work through them systematically.
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

function h3(font: string): CSSProperties {
    return {
        fontSize: "1.2rem",
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
