"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/manufacturing-bg.webp";

const sectionImages: Record<string, string> = {
    why: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=480&fit=crop&q=80&fm=webp",
    common: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=480&fit=crop&q=80&fm=webp",
    reappearing:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    reduce: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "why", label: "Why Nonconformities Are Common" },
    { id: "common", label: "Common ISO 9001 Nonconformities" },
    { id: "reappearing", label: "Why They Keep Reappearing" },
    { id: "reduce", label: "How to Reduce Nonconformities" },
    { id: "iaudit", label: "How iAudit Supports ISO 9001 Audits" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const nonconformities = [
    {
        num: 1,
        title: "Inadequate Control of Documented Information",
        clause: "Clause 7.5 requires control of documented information.",
        text: "On the shopfloor, this often translates into outdated work instructions pinned to boards, printed procedures with no revision status, or operators following older versions saved locally.",
        extra: "The procedure may exist in the system, but the version being used in production is not controlled. This creates inconsistency and increases the risk of defects.",
    },
    {
        num: 2,
        title: "Weak Process Control and Monitoring",
        clause: "Clause 8.5 focuses on production and service provision.",
        bullets: [
            "Inspection records completed inconsistently",
            "Acceptance criteria not clearly defined",
            "Process parameters not monitored as specified",
            "Deviations corrected informally without documentation",
        ],
        extra: "In manufacturing, process control must be measurable. If monitoring records are incomplete or unclear, auditors will raise nonconformities.",
    },
    {
        num: 3,
        title: "Poor Traceability of Materials and Batches",
        intro: "Traceability is critical in many manufacturing sectors.",
        bullets: [
            "Missing batch numbers",
            "Incomplete material identification",
            "No clear link between raw materials and finished goods",
            "Manual labelling errors",
        ],
        extra: "If a product recall were required, the organisation would struggle to identify affected batches. Auditors test this by sampling traceability records.",
    },
    {
        num: 4,
        title: "Supplier Evaluation Gaps",
        clause: "Clause 8.4 requires control of externally provided processes, products and services.",
        bullets: [
            "An approved supplier list that has not been reviewed",
            "No evidence of supplier performance monitoring",
            "Lack of documented criteria for evaluation or re-evaluation",
        ],
        extra: "Manufacturers often rely heavily on suppliers. If supplier performance is not monitored formally, risks enter the production process unnoticed.",
    },
    {
        num: 5,
        title: "Calibration and Equipment Control Failures",
        intro: "In manufacturing, measurement equipment must be controlled.",
        bullets: [
            "Expired calibration certificates",
            "No identification of calibration status",
            "No assessment of impact when equipment is found out of tolerance",
        ],
        extra: "Auditors will sample gauges and measuring devices directly on the floor. If one is overdue for calibration, the finding is usually straightforward.",
    },
    {
        num: 6,
        title: "Corrective Actions That Do Not Address Root Cause",
        clause: "Clause 10.2 requires organisations to eliminate the cause of nonconformities.",
        flow: [
            "A problem is identified",
            "The immediate issue is fixed",
            "A corrective action is marked as closed",
            "The same issue appears six months later",
        ],
        extra: "Root cause analysis is either superficial or undocumented. Without structured follow up, recurring nonconformities become normal.",
    },
    {
        num: 7,
        title: "Competence and Training Records Not Evidenced",
        clause: "Clause 7.2 requires demonstration of competence.",
        text: "In manufacturing environments, training is sometimes informal. An experienced operator shows a new starter how to perform a task. The skill transfer happens, but the evidence does not.",
        extra: 'During an audit, the question is simple. Can you demonstrate that the person performing this task is competent? If records are incomplete or inconsistent, a nonconformity is likely.',
    },
];

const reduceSteps = [
    "Using clause aligned internal audit checklists",
    "Linking findings directly to documented evidence",
    "Assigning corrective actions with clear owners and deadlines",
    "Reviewing trends across departments and sites",
    "Verifying the effectiveness of corrective actions before closure",
];

const iauditFeatures = [
    {
        title: "Clause-Mapped Templates",
        text: "Our checklists are built around the requirements of ISO 9001, 14001 and 45001, ensuring your internal audits are as rigorous as an external one.",
    },
    {
        title: "Centralised Audit History",
        text: "Every finding, piece of evidence and corrective action is stored in one place. You can see the compliance status of every site in your group from a single dashboard.",
    },
    {
        title: "Corrective Action Tracking",
        text: "Findings are assigned to owners with clear deadlines. The system tracks them through to closure, ensuring that root causes are addressed.",
    },
    {
        title: "Evidence and Photos",
        text: "Auditors can capture and attach photos of shopfloor records or equipment directly to the audit report, creating a transparent audit trail.",
    },
    {
        title: "Zero-Access Data Privacy",
        text: "We host the platform, but we do not have access to your audit data. Your findings and evidence stay within your organisation.",
    },
];

const faqItems = [
    {
        question: "What are the most common ISO 9001 nonconformities in manufacturing?",
        answer:
            "The most common findings usually relate to document control (outdated instructions on the shopfloor), equipment calibration failures, and incomplete traceability records. These often occur because production pressure leads to informal workarounds that bypass the formal quality management system.",
    },
    {
        question: "What is the difference between a major and a minor nonconformity?",
        answer:
            "A minor nonconformity is a single lapse or isolated incident that doesn't indicate a total system failure. A major nonconformity occurs when a specific requirement of the ISO 9001 standard is not being met at all, or when multiple minor nonconformities suggest a significant breakdown in process control.",
    },
    {
        question: "Why do the same ISO 9001 nonconformities keep appearing in every audit?",
        answer:
            "Nonconformities recur when corrective actions focus on fixing the immediate problem rather than addressing the root cause. If the organisation doesn't analyse audit trends across cycles, the same systemic weaknesses remain, leading to the same findings in subsequent audits.",
    },
    {
        question: "How can iAudit Global help reduce recurring nonconformities in manufacturing?",
        answer:
            "iAudit Global centralises your audit history, making it easy to identify recurring patterns across different sites and shifts. By linking evidence directly to findings and using automated corrective action tracking, the platform ensures that root cause analysis is performed and verified, preventing the same issues from reappearing.",
    },
    {
        question: "How should a manufacturer handle a nonconformity identified during an internal audit?",
        answer:
            'Once identified, the nonconformity must be documented with clear evidence. The organisation should then implement an immediate correction (the "quick fix") followed by a formal corrective action process. This involves root cause analysis to understand why the gap occurred and a follow-up check to ensure the solution actually worked.',
    },
    {
        question: 'What is "document control" on a manufacturing shopfloor?',
        answer:
            'Document control ensures that only the latest, approved versions of work instructions, drawings, and procedures are available to operators. A common audit finding is finding old or "unofficial" notes at a workstation, which can lead to production errors and inconsistent quality.',
    },
    {
        question: "Why is traceability so important for ISO 9001 compliance?",
        answer:
            "Traceability allows a manufacturer to track a product from raw materials through to the final delivery. During an audit, you must be able to prove which batch of material went into which product. If these records are missing or incomplete, it is often raised as a major nonconformity because it impacts the ability to manage a product recall.",
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

export default function Iso9001ManufacturingNcBlogContent() {
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
                    alt="Common ISO 9001 nonconformities in manufacturing"
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
                            August 19, 2026
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
                        Common ISO 9001 Nonconformities in Manufacturing
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            When I review internal and external audit reports from manufacturing environments, the same patterns appear again and again.
                        </p>
                        <p style={para(font)}>
                            Most ISO 9001 nonconformities in manufacturing are not dramatic system failures. They are gaps in control. A procedure exists, but it is not followed consistently. A record is required, but it is incomplete. A corrective action is raised, but the root cause is not properly addressed.
                        </p>
                        <p style={para(font)}>
                            Understanding the common ISO 9001 nonconformities in manufacturing is the first step towards preventing them from recurring year after year.
                        </p>
                    </div>

                    <div id="why" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why ISO 9001 Nonconformities Are Common in Manufacturing</h2>
                        <SectionImage src={sectionImages.why} alt="Why ISO 9001 nonconformities are common in manufacturing environments" />
                        <p style={para(font)}>Manufacturing operates under pressure.</p>
                        <p style={para(font)}>
                            Production targets must be met. Shifts change. Temporary staff come in during busy periods. Supervisors focus on output. Documentation can become secondary.
                        </p>
                        <p style={para(font)}>
                            In this environment, the quality management system only works if it is embedded in daily operations. If it lives in folders or separate spreadsheets, gaps appear quickly.
                        </p>
                        <p style={para(font)}>
                            Many ISO 9001 nonconformities in manufacturing arise not because the organisation lacks procedures, but because the controls are not visible, monitored or consistently reviewed.
                        </p>
                    </div>

                    <div id="common" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common ISO 9001 Nonconformities in Manufacturing</h2>
                        <SectionImage src={sectionImages.common} alt="Common ISO 9001 nonconformities found during manufacturing audits" />
                        <p style={para(font)}>
                            Below are the issues I see most often during ISO 9001 audits in manufacturing settings.
                        </p>
                        {nonconformities.map((item) => (
                            <div
                                key={item.num}
                                style={{
                                    background: "#fff",
                                    borderRadius: "0.875rem",
                                    border: "1px solid #e8e4df",
                                    padding: "1.25rem 1.4rem",
                                    marginBottom: "1rem",
                                    borderLeft: "4px solid #006644",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", marginBottom: "0.625rem" }}>
                                    <span
                                        style={{
                                            minWidth: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            background: "rgba(0,102,68,0.1)",
                                            color: "#006644",
                                            fontSize: "0.8rem",
                                            fontWeight: 700,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {item.num}
                                    </span>
                                    <h3 style={{ ...h3(font), margin: 0 }}>{item.title}</h3>
                                </div>
                                {item.clause && <p style={{ ...para(font), fontSize: "0.9rem", color: "#6B7280", fontStyle: "italic" }}>{item.clause}</p>}
                                {item.intro && <p style={para(font)}>{item.intro}</p>}
                                {item.text && <p style={para(font)}>{item.text}</p>}
                                {item.bullets && (
                                    <>
                                        <p style={{ ...para(font), marginBottom: "0.5rem" }}>Common findings include:</p>
                                        <ul style={{ margin: "0 0 0.75rem", paddingLeft: 0, listStyle: "none" }}>
                                            {item.bullets.map((bullet) => (
                                                <li key={bullet} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.5rem", fontFamily: font }}>
                                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>•</span>
                                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{bullet}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {item.flow && (
                                    <>
                                        <p style={{ ...para(font), marginBottom: "0.5rem" }}>What I often see is this:</p>
                                        <div style={{ background: "rgba(0,102,68,0.04)", borderRadius: "0.625rem", padding: "0.75rem 1rem", margin: "0 0 0.75rem" }}>
                                            {item.flow.map((step, i) => (
                                                <div
                                                    key={step}
                                                    style={{
                                                        display: "flex",
                                                        gap: "0.75rem",
                                                        alignItems: "flex-start",
                                                        padding: "0.4rem 0",
                                                        borderBottom: i < item.flow!.length - 1 ? "1px solid rgba(0,102,68,0.08)" : "none",
                                                    }}
                                                >
                                                    <span style={{ color: "#006644", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}.</span>
                                                    <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.6, fontFamily: font }}>{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                                {item.extra && <p style={{ ...para(font), marginBottom: 0 }}>{item.extra}</p>}
                            </div>
                        ))}
                    </div>

                    <div id="reappearing" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why These Nonconformities Keep Reappearing</h2>
                        <SectionImage src={sectionImages.reappearing} alt="Why ISO 9001 nonconformities keep reappearing in manufacturing audits" />
                        <p style={para(font)}>
                            Many manufacturing organisations correct individual findings but do not analyse trends across audit cycles.
                        </p>
                        <p style={para(font)}>
                            Findings are recorded in spreadsheets. Reports are stored in shared drives. Corrective actions are tracked in separate documents. There is no single view of recurring issues across sites or shifts.
                        </p>
                        <p style={para(font)}>
                            As a result, the same ISO 9001 nonconformities in manufacturing appear year after year.
                        </p>
                        <p style={para(font)}>
                            Without structured trend analysis and linked corrective action tracking, improvement remains local rather than systemic.
                        </p>
                    </div>

                    <div id="reduce" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to Reduce ISO 9001 Nonconformities in Manufacturing</h2>
                        <SectionImage src={sectionImages.reduce} alt="How to reduce ISO 9001 nonconformities in manufacturing through structured audits" />
                        <p style={para(font)}>
                            Reducing common ISO 9001 nonconformities in manufacturing requires more than stronger audits. It requires structure.
                        </p>
                        <p style={para(font)}>Practical steps include:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {reduceSteps.map((item, i, arr) => (
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
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            Internal audits should not only confirm compliance. They should identify patterns.
                        </p>
                        <p style={para(font)}>
                            Where multiple sites operate, cross site comparison is particularly valuable. If one factory manages calibration effectively and another struggles, the difference should be visible.
                        </p>
                        <p style={para(font)}>
                            Internal audits should not only confirm compliance. They should identify patterns. Understanding why internal audits are critical in manufacturing is the first step toward moving from reactive document retrieval to structured performance management.
                        </p>
                        <p style={para(font)}>
                            The goal is not to eliminate every minor finding. It is to prevent systemic weaknesses from repeating.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Supports ISO 9001 Internal Audits in Manufacturing</h2>
                        <p style={para(font)}>
                            We built iAudit Global because we saw these exact nonconformities happening in the businesses we were auditing. We realised that spreadsheets and Word documents were part of the problem. They do not allow for the visibility or the follow-up that a modern manufacturing business needs.
                        </p>
                        <p style={para(font)}>Our software is designed to help manufacturing teams stay ahead of these common findings:</p>

                        <div
                            style={{
                                background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)",
                                borderRadius: "1.1rem",
                                padding: isMobile ? "1.75rem 1.5rem" : "2.25rem",
                                color: "#fff",
                                position: "relative",
                                overflow: "hidden",
                                margin: "1.25rem 0",
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
                            <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", position: "relative" }}>
                                {iauditFeatures.map((item, i) => (
                                    <li
                                        key={item.title}
                                        style={{
                                            marginBottom: i < iauditFeatures.length - 1 ? "1rem" : 0,
                                            paddingBottom: i < iauditFeatures.length - 1 ? "1rem" : 0,
                                            borderBottom: i < iauditFeatures.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                                        }}
                                    >
                                        <p style={{ margin: "0 0 0.25rem", fontWeight: 600, color: "#fff", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                        <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.65, fontFamily: font }}>{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p style={para(font)}>
                            If you are reviewing your internal audit process and want to move away from scattered spreadsheets, you can explore how we structure manufacturing audits at{" "}
                            <a href="https://www.iaudit.global/" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                iaudit.global
                            </a>
                            .
                        </p>
                        <p style={para(font)}>
                            We offer a 14-day free trial so you can see how a structured system can help you identify and close out nonconformities before they become a risk to your certification.
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
                                Stop recurring ISO 9001 nonconformities before your next audit
                            </h3>
                            <p style={greenPara(font)}>
                                Start a 14-day free trial of iAudit Global and see how clause-mapped checklists, centralised audit history and corrective action tracking help manufacturing teams close gaps before they become certification risks.
                            </p>
                            <a
                                href="https://www.iaudit.global/"
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
                                    position: "relative",
                                    fontFamily: font,
                                }}
                            >
                                Start your free trial
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
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
                                Helping manufacturing teams identify, track and prevent recurring ISO 9001 nonconformities through structured internal audits.
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
                            Helping manufacturing teams prevent recurring ISO 9001 nonconformities through structured internal audits.
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

function h3(font: string): React.CSSProperties {
    return {
        fontSize: "1.15rem",
        fontWeight: 600,
        color: "#111827",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        margin: "0 0 0.625rem",
        fontFamily: font,
    };
}

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
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
