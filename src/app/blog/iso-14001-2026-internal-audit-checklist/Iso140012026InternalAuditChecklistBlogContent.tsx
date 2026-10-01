"use client";

import React, { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const CHECKLIST_URL = "https://www.iaudit.global/iso-14001-2026-self-assessment-tool/checklist";
const GAP_ANALYSIS_URL = "https://www.iaudit.global/blog/iso-14001-2026-gap-analysis";
const CHANGES_URL = "https://www.iaudit.global/blog/what-has-changed-in-iso-14001-2026";

const HERO_IMAGE = "/images/blog/iso-14001-2026-internal-audit-checklist.jpg";

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=900&h=480&fit=crop&q=80&fm=webp`;

const sectionImages = {
    cover: unsplash("photo-1450101499163-c8848c66ca85"),
    context: unsplash("photo-1542601906990-b4d3fb778b09"),
    leadership: unsplash("photo-1552664730-d307ca884978"),
    planning: unsplash("photo-1507925921958-8a62f3d1a50d"),
    support: unsplash("photo-1524178232363-1fb2b075b655"),
    operation: unsplash("photo-1532996122724-e3c354a0b15b"),
    performance: unsplash("photo-1581091226825-a6a2a5aee158"),
    evidence: unsplash("photo-1434030216411-0b793f4b4173"),
    update: unsplash("photo-1497435334941-8c899ee9e8e9"),
    results: unsplash("photo-1600880292203-757bb62b4baf"),
};

const tocItems = [
    { id: "tldr", label: "TL;DR" },
    { id: "intro", label: "Introduction" },
    { id: "cover", label: "What should the checklist cover?" },
    { id: "context", label: "1. Context of the organisation" },
    { id: "leadership", label: "2. Leadership" },
    { id: "planning", label: "3. Planning" },
    { id: "support", label: "4. Support" },
    { id: "operation", label: "5. Operation" },
    { id: "performance", label: "6. Performance evaluation" },
    { id: "improvement", label: "7. Improvement" },
    { id: "evidence", label: "What evidence to collect" },
    { id: "update", label: "Updating your checklist for 2026" },
    { id: "results", label: "Turn the checklist into results" },
    { id: "readiness", label: "Check your readiness" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const coverAreas = [
    "Context of the organisation",
    "Leadership",
    "Planning",
    "Support",
    "Operation",
    "Performance evaluation",
    "Improvement",
];

const evidenceFlow = ["Ask", "Observe", "Verify", "Trace", "Record"];

const linkStyle: CSSProperties = {
    color: "#006644",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
};

const faqItems = [
    {
        question: "1. What is an ISO 14001:2026 internal audit checklist?",
        answer:
            "An ISO 14001:2026 internal audit checklist is a structured set of audit questions and checkpoints used to assess whether an organisation's Environmental Management System meets the requirements of ISO 14001:2026 and is effectively implemented. It should cover the relevant clauses while also reflecting the organisation's environmental aspects, risks, processes and operational controls.",
    },
    {
        question: "2. What should an ISO 14001:2026 internal audit check?",
        answer:
            "An internal audit should examine areas including organisational context, leadership, environmental aspects, compliance obligations, risks and opportunities, objectives, competence, operational controls, environmental performance, internal auditing, management review and improvement. Auditors should also consider evidence from documents, interviews and observations rather than relying solely on documented procedures.",
    },
    {
        question: "3. What evidence should auditors collect during an ISO 14001 internal audit?",
        answer:
            "Auditors can collect evidence from documents and records, employee interviews and direct observation. Typical evidence includes environmental policies, aspects registers, compliance evaluations, monitoring results, training records, operational controls, emergency exercises, audit reports, management reviews and corrective-action records.",
    },
    {
        question: "4. How is an ISO 14001:2026 internal audit different from a gap analysis?",
        answer:
            "A gap analysis identifies where an organisation's existing EMS differs from the requirements of ISO 14001:2026. An internal audit goes further by assessing whether the management system is implemented, maintained and effective. A gap analysis can therefore help an organisation prepare for a more focused internal audit.",
    },
    {
        question: "5. Do organisations need to update their ISO 14001 audit checklist for 2026?",
        answer:
            "Organisations transitioning to ISO 14001:2026 should review their existing audit checklists rather than simply continue using an unchanged 2015 checklist. Areas such as environmental context, climate change, biodiversity, lifecycle thinking, planning of changes, external providers and internal audit objectives may require closer consideration under the 2026 edition.",
    },
    {
        question: "6. How often should an ISO 14001 internal audit be conducted?",
        answer:
            "ISO 14001 does not mean that every part of the EMS has to be audited at the same frequency. The internal audit programme should be planned with consideration of the organisation's processes, environmental significance, changes, previous audit results and other relevant factors. Higher-risk or frequently changing areas may warrant greater audit attention.",
    },
    {
        question: "7. What happens after an ISO 14001 internal audit?",
        answer:
            "After an internal audit, the organisation should review the evidence and findings, address nonconformities where necessary, determine appropriate corrective actions and verify their effectiveness. The results can also feed into management review and continual improvement of the Environmental Management System.",
    },
    {
        question: "8. Where can I find an ISO 14001:2026 internal audit checklist?",
        answer: (
            <>
                iAudit Global provides an ISO 14001:2026 checklist that organisations can use to review their environmental management system against the updated requirements. It can help auditors and EMS teams identify areas that need further attention before an internal or certification audit.
                <br />
                <br />
                <a href={CHECKLIST_URL} style={linkStyle}>
                    ISO 14001:2026 Checklist by iAudit Global
                </a>
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

function CheckList({ items, font }: { items: ReactNode[]; font: string }) {
    return (
        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
            {items.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✓</span>
                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                </li>
            ))}
        </ul>
    );
}

function NumberedCard({ items, font, isMobile }: { items: string[]; font: string; isMobile: boolean }) {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "0.875rem",
                border: "1px solid #e8e4df",
                padding: isMobile ? "0.25rem 1.1rem" : "0.25rem 1.25rem",
                margin: "1rem 0 1.25rem",
            }}
        >
            {items.map((item, i, arr) => (
                <div
                    key={item}
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
    );
}

function Callout({ children, font, isMobile }: { children: ReactNode; font: string; isMobile: boolean }) {
    return (
        <div
            style={{
                background: "rgba(0,102,68,0.05)",
                borderRadius: "0.875rem",
                border: "1px solid rgba(0,102,68,0.12)",
                padding: isMobile ? "1.1rem 1.25rem" : "1.25rem 1.5rem",
                margin: "1rem 0 1.25rem",
            }}
        >
            <p style={{ margin: 0, fontSize: "0.95rem", color: "#111827", lineHeight: 1.75, fontFamily: font, fontStyle: "italic" }}>{children}</p>
        </div>
    );
}

export default function Iso140012026InternalAuditChecklistBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("tldr");
    const [tocOpen, setTocOpen] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';
    const sectionStyle = (first = false): CSSProperties => ({
        scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)",
        marginTop: first ? 0 : "2.25rem",
    });

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
                        alt="Auditor using an ISO 14001:2026 internal audit checklist on a tablet beside waste segregation bins and chemical drums"
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
                                October 1, 2026
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                10 Min Read
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
                            ISO 14001:2026 Internal Audit Checklist: What Should Auditors Check?
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

                        <div id="tldr" style={{ ...sectionStyle(true), marginBottom: "2rem" }}>
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
                                    An ISO 14001:2026 internal audit checklist should help auditors assess more than whether documents exist. It should guide the review of environmental aspects, compliance obligations, leadership, operational controls, environmental performance, corrective actions and continual improvement.
                                </p>
                                <p style={para(font)}>
                                    Auditors should verify evidence through documents, interviews and site observations, with particular attention to areas affected by the 2026 requirements, including environmental context, climate change, biodiversity, lifecycle thinking and planned changes.
                                </p>
                                <p style={{ ...para(font), marginBottom: 0 }}>
                                    A practical checklist can help identify gaps before an internal or certification audit.{" "}
                                    <a href={CHECKLIST_URL} style={linkStyle}>
                                        Use the ISO 14001:2026 checklist from iAudit Global
                                    </a>{" "}
                                    to assess your current position and identify areas requiring further attention.
                                </p>
                            </div>
                        </div>

                        <div id="intro" style={sectionStyle(true)}>
                            <p style={para(font)}>
                                An ISO 14001:2026 internal audit checklist should do more than remind an auditor which clauses to cover. It should help establish whether an organisation&apos;s Environmental Management System (EMS) is implemented, effective and appropriate to its actual environmental risks and activities.
                            </p>
                            <p style={para(font)}>
                                As an auditor, I use a checklist as a guide rather than a script. The evidence gathered during the audit should determine where I investigate further.
                            </p>
                            <p style={para(font)}>
                                The 2026 edition also gives organisations some areas that deserve closer attention, including environmental context, climate change, biodiversity, lifecycle thinking, planning of changes and external providers.
                            </p>
                        </div>

                        <div id="cover" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>What should an ISO 14001:2026 internal audit checklist cover?</h2>
                            <SectionImage src={sectionImages.cover} alt="Auditor working through an ISO 14001 internal audit checklist" />
                            <p style={para(font)}>
                                A useful checklist should cover the requirements of the standard while also reflecting the organisation&apos;s processes, environmental aspects, risks and operational controls.
                            </p>
                            <p style={para(font)}>At a minimum, I would expect an internal audit to examine:</p>
                            <NumberedCard items={coverAreas} font={font} isMobile={isMobile} />
                            <p style={para(font)}>
                                The important point is not simply to confirm that each requirement has a corresponding document. The auditor needs to establish whether the system works in practice.
                            </p>
                        </div>

                        <div id="context" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>1. Context of the organisation</h2>
                            <SectionImage src={sectionImages.context} alt="Hands holding a seedling representing environmental conditions and biodiversity" />
                            <p style={para(font)}>Start by understanding the organisation and the environmental conditions that could affect its EMS.</p>
                            <p style={para(font)}>I would check:</p>
                            <CheckList
                                font={font}
                                items={[
                                    "Has the organisation identified relevant internal and external issues?",
                                    "Has it considered relevant environmental conditions?",
                                    "Are climate change, pollution, biodiversity, ecosystem health and resource availability considered where relevant?",
                                    "Have relevant interested parties and their requirements been identified?",
                                    "Is the scope of the EMS appropriate?",
                                ]}
                            />
                            <p style={para(font)}>
                                For example, a manufacturing site may need to consider water availability, extreme weather, pollution or the sensitivity of the surrounding environment.
                            </p>
                            <Callout font={font} isMobile={isMobile}>
                                The key audit question is simple: Have the organisation&apos;s actual environmental circumstances been properly considered?
                            </Callout>
                            <p style={para(font)}>
                                The 2026 edition places greater visibility on these environmental conditions, so an unchanged context review deserves closer examination.
                            </p>
                        </div>

                        <div id="leadership" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>2. Leadership</h2>
                            <SectionImage src={sectionImages.leadership} alt="Management team discussing environmental priorities" />
                            <p style={para(font)}>An environmental policy on its own does not demonstrate effective leadership.</p>
                            <p style={para(font)}>
                                I would look for evidence that top management is involved in the EMS and that environmental considerations are integrated into relevant business processes.
                            </p>
                            <p style={para(font)}>The checklist should ask:</p>
                            <CheckList
                                font={font}
                                items={[
                                    "Is the environmental policy appropriate to the organisation?",
                                    "Are responsibilities and authorities clearly assigned?",
                                    "Can management demonstrate involvement in environmental performance?",
                                    "Are environmental objectives connected to organisational priorities?",
                                    "Are people given the resources needed to maintain the EMS?",
                                ]}
                            />
                            <p style={para(font)}>
                                Interviews are particularly useful here. What management says about environmental priorities should be consistent with what is happening elsewhere in the organisation.
                            </p>
                        </div>

                        <div id="planning" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>3. Planning</h2>
                            <SectionImage src={sectionImages.planning} alt="Planning board for environmental aspects, risks and objectives" />
                            <p style={para(font)}>Planning is one of the areas I would examine closely because several parts of the EMS need to connect.</p>
                            <p style={para(font)}>The audit should cover:</p>
                            <NumberedCard
                                font={font}
                                isMobile={isMobile}
                                items={[
                                    "Environmental aspects and impacts",
                                    "Significant environmental aspects",
                                    "Compliance obligations",
                                    "Risks and opportunities",
                                    "Environmental objectives",
                                    "Plans for achieving objectives",
                                    "Planning of changes",
                                ]}
                            />
                            <p style={para(font)}>
                                The 2026 edition makes planning of changes more explicit through Clause 6.3. That means I would sample recent changes such as new machinery, changes to materials, site expansion, new processes or significant supplier changes and ask whether their environmental implications were considered before implementation.
                            </p>
                            <p style={para(font)}>
                                I would also check whether the organisation&apos;s environmental aspects actually inform its risks, objectives and operational controls. An EMS should operate as a connected system rather than a collection of separate registers.
                            </p>
                        </div>

                        <div id="support" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>4. Support</h2>
                            <SectionImage src={sectionImages.support} alt="Employee training and awareness session" />
                            <p style={para(font)}>
                                The next question is whether people have the competence, information and resources needed to operate the EMS effectively.
                            </p>
                            <p style={para(font)}>An internal audit checklist should cover:</p>
                            <CheckList
                                font={font}
                                items={["Resources", "Competence", "Training", "Awareness", "Communication", "Documented information"]}
                            />
                            <p style={para(font)}>
                                Do not rely entirely on training records. Talk to employees who perform environmentally significant activities.
                            </p>
                            <Callout font={font} isMobile={isMobile}>
                                Can they explain their responsibilities? Do they understand the environmental consequences of their work? Do they know what to do if a control fails?
                            </Callout>
                            <p style={para(font)}>
                                Those conversations can provide evidence that a documented process is actually understood and implemented.
                            </p>
                        </div>

                        <div id="operation" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>5. Operation</h2>
                            <SectionImage src={sectionImages.operation} alt="Waste segregation bins as an example of operational controls" />
                            <p style={para(font)}>This is where I would move beyond the paperwork and look at what is happening on site.</p>
                            <p style={para(font)}>The exact checklist will depend on the organisation, but operational controls could include:</p>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                    gap: "0.5rem 1.5rem",
                                    background: "#fff",
                                    borderRadius: "0.875rem",
                                    border: "1px solid #e8e4df",
                                    padding: isMobile ? "1rem 1.1rem 0.5rem" : "1.1rem 1.4rem 0.6rem",
                                    margin: "1rem 0 1.25rem",
                                }}
                            >
                                {[
                                    "Waste management",
                                    "Emissions",
                                    "Water consumption and discharge",
                                    "Energy use",
                                    "Chemical and hazardous material handling",
                                    "Storage arrangements",
                                    "Contractor controls",
                                    "Procurement",
                                    "Maintenance activities",
                                    "Emergency preparedness and response",
                                ].map((item) => (
                                    <div key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                                        <span style={{ color: "#006644", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                                        <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.6, fontFamily: font }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p style={para(font)}>
                                Lifecycle thinking also needs to be considered. This was already part of ISO 14001:2015, but its application is clearer in the 2026 edition. Depending on the organisation, this could mean looking at procurement, raw materials, suppliers, transport, product use, waste and end-of-life stages.
                            </p>
                            <p style={para(font)}>
                                The auditor is not expected to control every part of a supply chain. The question is where the organisation can control or influence environmental impacts.
                            </p>
                        </div>

                        <div id="performance" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>6. Performance evaluation</h2>
                            <SectionImage src={sectionImages.performance} alt="Monitoring environmental performance on a production site" />
                            <p style={para(font)}>A good EMS should provide evidence that environmental performance is being monitored and evaluated.</p>
                            <p style={para(font)}>I would check:</p>
                            <CheckList
                                font={font}
                                items={[
                                    "What environmental performance is monitored?",
                                    "Are monitoring and measurement methods appropriate?",
                                    "Are results analysed and evaluated?",
                                    "Are compliance obligations evaluated?",
                                    "Is the internal audit programme effective?",
                                    "Is management review receiving relevant information about EMS performance?",
                                ]}
                            />
                            <p style={para(font)}>
                                For internal audits themselves, the 2026 edition provides greater clarity around audit objectives. I would therefore review whether audits have clear objectives, appropriate scope and criteria, sufficient evidence and meaningful findings.
                            </p>
                            <Callout font={font} isMobile={isMobile}>
                                A useful question is: How does the organisation know that its EMS is working?
                            </Callout>
                        </div>

                        <div id="improvement" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>7. Improvement</h2>
                            <p style={para(font)}>
                                Finally, the checklist should establish how the organisation responds when something does not go as planned.
                            </p>
                            <p style={para(font)}>Look for evidence of:</p>
                            <NumberedCard
                                font={font}
                                isMobile={isMobile}
                                items={[
                                    "Nonconformity identification",
                                    "Correction",
                                    "Root-cause analysis",
                                    "Corrective action",
                                    "Effectiveness checks",
                                    "Continual improvement",
                                ]}
                            />
                            <p style={para(font)}>
                                I would not consider a corrective action closed simply because someone has completed an action on a tracker.
                            </p>
                            <p style={para(font)}>
                                If a procedure was changed, for example, I would want to know whether the revised process is actually being followed and whether it has addressed the original problem.
                            </p>
                        </div>

                        <div id="evidence" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>What evidence should an auditor collect?</h2>
                            <SectionImage src={sectionImages.evidence} alt="Auditor recording objective evidence during an internal audit" />
                            <p style={para(font)}>A strong internal audit normally draws on several types of evidence.</p>
                            {[
                                {
                                    label: "Documents and records",
                                    desc: "can include policies, aspects registers, compliance evaluations, objectives, monitoring results, audit reports, management reviews and corrective-action records.",
                                },
                                {
                                    label: "Interviews",
                                    desc: "help establish whether employees understand and follow the processes that affect environmental performance.",
                                },
                                {
                                    label: "Observation",
                                    desc: "allows the auditor to see whether documented controls exist in practice. Site inspections can reveal issues that would not be apparent from reviewing records alone.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    style={{
                                        background: "#fff",
                                        borderRadius: "0.75rem",
                                        padding: "1.1rem 1.4rem",
                                        marginBottom: "0.75rem",
                                        border: "1px solid #e8e4df",
                                        borderLeft: "4px solid #006644",
                                    }}
                                >
                                    <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.label}</p>
                                    <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>
                                        {item.label} {item.desc}
                                    </p>
                                </div>
                            ))}
                            <p style={{ ...para(font), marginTop: "1rem" }}>I find it useful to think of the process as:</p>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    background: "rgba(0,102,68,0.05)",
                                    border: "1px solid rgba(0,102,68,0.12)",
                                    borderRadius: "0.875rem",
                                    padding: isMobile ? "1rem" : "1.1rem 1.4rem",
                                    margin: "0.5rem 0 1.25rem",
                                }}
                            >
                                {evidenceFlow.map((step, i) => (
                                    <React.Fragment key={step}>
                                        <span
                                            style={{
                                                background: "#006644",
                                                color: "#fff",
                                                borderRadius: "999px",
                                                padding: "0.35rem 0.9rem",
                                                fontSize: "0.88rem",
                                                fontWeight: 600,
                                                fontFamily: font,
                                            }}
                                        >
                                            {step}
                                        </span>
                                        {i < evidenceFlow.length - 1 && (
                                            <span aria-hidden style={{ color: "#006644", fontWeight: 700 }}>
                                                →
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <p style={para(font)}>
                                If an employee explains how a control works, observe it where possible. Then verify the supporting evidence and trace it back to the relevant requirement or objective.
                            </p>
                        </div>

                        <div id="update" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>Do you need to update your ISO 14001 audit checklist for 2026?</h2>
                            <SectionImage src={sectionImages.update} alt="Solar farm representing the transition to ISO 14001:2026" />
                            <p style={para(font)}>
                                If you are moving from ISO 14001:2015 to ISO 14001:2026, I would not simply change clause references on an existing checklist.
                            </p>
                            <p style={para(font)}>
                                The revised standard includes areas that should be reflected in your audit programme, including environmental context, lifecycle considerations, planning of changes, external providers and clearer internal audit objectives.
                            </p>
                            <p style={para(font)}>
                                Before revising the checklist, it can be useful to carry out an{" "}
                                <a href={GAP_ANALYSIS_URL} style={linkStyle}>
                                    ISO 14001:2026 gap analysis
                                </a>
                                . A gap analysis establishes where your existing EMS differs from the revised requirements, while an internal audit then evaluates whether the system is implemented and effective.
                            </p>
                            <p style={para(font)}>
                                It is also worth understanding the{" "}
                                <a href={CHANGES_URL} style={linkStyle}>
                                    changes introduced in ISO 14001:2026
                                </a>{" "}
                                before deciding what needs to change in your audit programme.
                            </p>
                        </div>

                        <div id="results" style={sectionStyle()}>
                            <h2 style={h2(font, isMobile)}>Turn the checklist into useful audit results</h2>
                            <SectionImage src={sectionImages.results} alt="Team reviewing internal audit results and next actions" />
                            <p style={para(font)}>
                                The value of an internal audit is not the completed checklist. It is what the organisation learns from the evidence.
                            </p>
                            <p style={para(font)}>
                                Each finding should be supported by objective evidence and linked to the relevant requirement. Where corrective action is required, it should have an owner, a target date and a defined method for verifying effectiveness.
                            </p>
                            <p style={para(font)}>That creates a useful connection between the audit and the wider PDCA cycle.</p>
                            <p style={para(font)}>
                                At iAudit Global, we built our audit management platform around this workflow, from audit planning and evidence capture through to findings, corrective actions and reporting. The aim is to keep the audit process connected rather than leaving evidence and follow-up across separate spreadsheets and documents.
                            </p>
                        </div>

                        <div id="readiness" style={{ ...sectionStyle(), marginTop: "2.5rem" }}>
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)",
                                    borderRadius: "1.1rem",
                                    padding: isMobile ? "2rem 1.5rem" : "2.5rem",
                                    color: "#fff",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)",
                                        backgroundSize: "24px 24px",
                                        pointerEvents: "none",
                                    }}
                                />
                                <h2
                                    style={{
                                        fontSize: isMobile ? "1.45rem" : "1.85rem",
                                        fontWeight: 600,
                                        color: "#fff",
                                        margin: "0 0 0.75rem",
                                        fontFamily: font,
                                        lineHeight: 1.25,
                                        position: "relative",
                                    }}
                                >
                                    Check your ISO 14001:2026 readiness
                                </h2>
                                <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                    If you are preparing for an internal audit or reviewing your EMS for the 2026 edition, start by establishing where you stand.
                                </p>
                                <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: 0, position: "relative", fontFamily: font }}>
                                    <a
                                        href={CHECKLIST_URL}
                                        style={{ color: "#4ade80", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
                                    >
                                        Use the ISO 14001:2026 checklist
                                    </a>{" "}
                                    to work through the relevant requirements and identify areas that may need further attention before your next internal or certification audit.
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

function para(font: string): CSSProperties {
    return {
        fontSize: "0.98rem",
        color: "#374151",
        lineHeight: 1.85,
        margin: "0 0 1rem",
        fontFamily: font,
    };
}
