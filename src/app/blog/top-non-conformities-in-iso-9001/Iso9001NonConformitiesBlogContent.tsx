"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    intro:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80&fm=webp",
    what:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    top:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    common:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    reduce:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "summary", label: "Key Takeaways" },
    { id: "what", label: "What Counts as a Nonconformity" },
    { id: "top", label: "The Top Non-Conformities" },
    { id: "common", label: "What They Have in Common" },
    { id: "reduce", label: "How to Reduce Repeat Findings" },
    { id: "iaudit", label: "Where iAudit Helps" },
    { id: "conclusion", label: "Final Thought" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const pricingFaqs = [
    {
        question: "What are the top Non-Conformities in ISO 9001 found during audits?",
        answer:
            "The most frequent findings usually involve Clause 7.5 (Control of Documented Information), Clause 9.2 (Internal Audits), and Clause 10.2 (Nonconformity and Corrective Action). These top Non-Conformities in ISO 9001 often occur because organisations rely on scattered spreadsheets and manual tracking, making it difficult to maintain version control or prove that corrective actions actually worked.",
    },
    {
        question: "What is the difference between a major and a minor non-conformity?",
        answer:
            "A major non-conformity is a systemic failure or a total absence of a required process that puts the management system at risk. A minor non-conformity is typically an isolated lapse that does not indicate a system-wide breakdown. While a minor non-conformity will not usually stop you from getting certified, a major one will require a follow-up audit before the certificate can be issued.",
    },
    {
        question: "How should an organisation respond to an ISO 9001 non-conformity?",
        answer:
            "The best response follows the PDCA cycle. You must first contain the immediate issue, then perform a genuine root cause analysis to understand why it happened. Once the cause is identified, you implement a corrective action and, most importantly, perform an effectiveness check later to ensure the problem has not returned.",
    },
    {
        question: "Why do we keep getting the same non-conformities every year?",
        answer:
            "Recurring findings are usually a sign of \"paper closure.\" This happens when an organisation marks an action as closed just to tidy up a spreadsheet, without addressing the root cause or verifying the fix. Without a central system to track history, the same top Non-Conformities in ISO 9001 will keep appearing because the underlying process never truly changed.",
    },
    {
        question: "Can internal audits help prevent external non-conformities?",
        answer:
            "Yes, provided they are rigorous and honest. The purpose of an internal audit is to find the top Non-Conformities in ISO 9001 yourself so you can fix them before an external auditor arrives. If your internal audits never find any issues, it is often a sign that your checking process is too shallow.",
    },
    {
        question: "How does ISO audit management software help reduce non-conformities?",
        answer:
            "ISO audit management software like iAudit Global reduces non-conformities by centralising your audit programme. It provides clause-mapped checklists, automates follow-up reminders, and keeps all evidence in one place. By moving away from spreadsheets, you gain the visibility needed to spot trends and fix systemic weaknesses before they become audit findings.",
    },
    {
        question: "Does iAudit Global have access to our non-conformity data?",
        answer:
            "No. At iAudit Global, we operate a strict data sovereignty policy. Your findings, corrective actions, and evidence belong entirely to your organisation. We host the platform, but we have zero access to your data or reports. This ensures that your internal audit history and sensitive operational details remain private and secure.",
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

export default function Iso9001NonConformitiesBlogContent() {
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
                    alt="Top Non-Conformities in ISO 9001 and How to Stop Them Returning"
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
                            March 18, 2026
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
                            10 Min Read
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
                        Top Non-Conformities in ISO 9001 and How to Stop Them Returning
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <h2 style={h2(font)}>Introduction: Why These Non-Conformities Keep Appearing</h2>
                        <SectionImage src={sectionImages.intro} alt="Quality team reviewing ISO 9001 audit findings" />
                        <p style={para(font)}>Most ISO 9001 findings are not surprising.</p>
                        <p style={para(font)}>
                            They show up again and again across different organisations, industries and audit cycles. That is exactly why the top Non-Conformities in ISO 9001 are worth paying attention to. They usually point to the same weak spots: poor control, weak follow-up, unclear ownership and audit programmes that do not really drive improvement.
                        </p>
                        <p style={para(font)}>The good news is that they are fixable.</p>
                        <p style={para(font)}>
                            What matters is not just spotting the finding, but understanding what it says about the system behind it. That is where internal audits, stronger corrective action and a proper PDCA cycle make all the difference.
                        </p>
                    </div>

                    <div id="summary" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Key Takeaways</h2>
                        <p style={para(font)}>
                            Most ISO 9001 audits repeatedly find the same issues, known as top Non-Conformities. The most common include poor document control, weak corrective action follow-up, inadequate training records, lack of process monitoring, unresolved customer complaint trends, and generic internal audits.
                        </p>
                        <p style={para(font)}>
                            These repeat findings usually point to weak PDCA implementation, poor visibility, and lack of ownership rather than isolated mistakes. To prevent recurrence:
                        </p>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: "0.875rem",
                                border: "1px solid #e8e4df",
                                padding: "0.25rem 1.25rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            {[
                                "Ensure corrective actions are effective and tracked.",
                                "Use PDCA cycles consistently.",
                                "Improve internal audits with risk-based and clause-aligned approaches.",
                                "Centralize records and evidence for visibility.",
                            ].map((item, i, arr) => (
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
                        <p style={para(font)}>
                            ISO audit management software like iAudit Global can help track findings, follow-ups, and reports in one place, making audits more effective and stopping repeat non-conformities.
                        </p>
                        <div
                            style={{
                                background: "rgba(0,102,68,0.05)",
                                borderRadius: "0.875rem",
                                border: "1px solid rgba(0,102,68,0.12)",
                                padding: "1.25rem 1.5rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            <p style={{ margin: 0, fontSize: "0.95rem", color: "#111827", lineHeight: 1.75, fontFamily: font, fontStyle: "italic" }}>
                                Stop ISO 9001 findings from returning: better audits, strong follow-up, proper PDCA, and visibility are key.
                            </p>
                        </div>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What Counts as a Nonconformity in ISO 9001?</h2>
                        <SectionImage src={sectionImages.what} alt="Documented evidence and compliance records for ISO 9001" />
                        <p style={para(font)}>
                            A nonconformity is simply evidence that a requirement has not been met. In ISO 9001, that could mean a process is not being followed, a record is missing, training cannot be verified, or a corrective action has not been effective.
                        </p>
                        <p style={para(font)}>Some are minor and isolated. Others point to a wider system problem.</p>
                        <p style={para(font)}>
                            The top Non-Conformities in ISO 9001 usually matter because they are not one-off mistakes. They often show that the organisation has a weak process, poor visibility, or no reliable way of checking whether controls are actually working.
                        </p>
                    </div>

                    <div id="top" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Top Non-Conformities in ISO 9001</h2>
                        <SectionImage src={sectionImages.top} alt="Audit team reviewing recurring ISO 9001 non-conformities" />

                        {[
                            {
                                num: "1",
                                title: "Poor Document Control",
                                body: [
                                    "This is one of the most common findings in any ISO 9001 audit. Old procedures are still in circulation, forms are used without approval, or different teams are working from different versions of the same document.",
                                    "It sounds administrative, but the impact is real. If people are following outdated instructions, the system is no longer under control.",
                                    "Among the top Non-Conformities in ISO 9001, document control is often a sign that processes have drifted away from the documented system.",
                                ],
                            },
                            {
                                num: "2",
                                title: "Weak Corrective Action Follow-Up",
                                body: [
                                    "A lot of organisations are good at logging actions. Fewer are good at proving they worked.",
                                    "This is why weak follow-up appears so often in the top Non-Conformities in ISO 9001. Actions get marked closed because the form is complete, not because the issue is actually resolved. Then the same finding shows up again six months later.",
                                    "If corrective action is not checked for effectiveness, the audit cycle stays open even when the log says otherwise.",
                                ],
                            },
                            {
                                num: "3",
                                title: "Inadequate Competence and Training Records",
                                body: [
                                    "People are doing the job, but there is no clear evidence they were trained, assessed or authorised properly.",
                                    "This is especially common where teams are busy, turnover is high, or training happens informally. The result is one of the most persistent top Non-Conformities in ISO 9001: competence cannot be verified.",
                                    "In audit terms, that means the business cannot prove the right people are doing the right work.",
                                ],
                            },
                            {
                                num: "4",
                                title: "Lack of Process Monitoring and Measurable Objectives",
                                body: [
                                    "Many organisations set quality objectives, but they are too vague to be useful. Others have KPIs in place, but no one reviews them consistently or uses them to improve performance.",
                                    "That is why weak monitoring appears in the top Non-Conformities in ISO 9001. A management system is supposed to measure whether processes are achieving results. If that is missing, the business is relying more on assumption than evidence.",
                                ],
                            },
                            {
                                num: "5",
                                title: "Customer Complaints Handled, but Not Analysed",
                                body: [
                                    "A complaint gets resolved, the customer gets a response, and the issue is considered closed.",
                                    "But if complaint trends are never reviewed, root causes are never explored, and repeat issues are not tracked, the system is only reacting. It is not learning.",
                                    "This is one of the more revealing top Non-Conformities in ISO 9001 because it shows the gap between service recovery and actual improvement.",
                                ],
                            },
                            {
                                num: "6",
                                title: "Internal Audits That Are Too Generic",
                                body: [
                                    "This is not always written exactly this way in an audit report, but it sits behind a lot of weak systems.",
                                    "If internal audits use the same checklist every cycle, focus on paperwork instead of risk, and never really challenge what is happening in the business, they stop finding the issues that matter.",
                                    "A weak audit programme does not just miss the top Non-Conformities in ISO 9001. It helps them survive.",
                                ],
                            },
                        ].map((item) => (
                            <div key={item.num} style={{ marginBottom: "1.75rem" }}>
                                <h3 style={h3(font)}>
                                    {item.num}. {item.title}
                                </h3>
                                {item.body.map((p) => (
                                    <p key={p.slice(0, 40)} style={para(font)}>
                                        {p}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div id="common" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What These Non-Conformities Have in Common</h2>
                        <SectionImage src={sectionImages.common} alt="Dashboard showing patterns across ISO audit findings" />
                        <p style={para(font)}>
                            The top Non-Conformities in ISO 9001 may look different on the surface, but they often come from the same underlying weaknesses.
                        </p>
                        {[
                            {
                                label: "Weak PDCA implementation",
                                desc: "Planning is too generic, controls are not applied consistently, internal checks are too shallow, and corrective actions are closed before anyone proves they worked. On paper, the system appears active. In practice, it is not learning.",
                            },
                            {
                                label: "Poor visibility across the system",
                                desc: "Evidence sits in different folders, findings live in separate reports, and corrective actions are tracked somewhere else entirely. That makes it hard to spot patterns, compare audit cycles, or see whether the same issue is appearing in different parts of the business. When visibility is weak, repeat findings are almost guaranteed.",
                            },
                            {
                                label: "Lack of ownership",
                                desc: "A finding gets raised, but no one is clearly responsible for driving it through to effective closure. Actions may be assigned, but follow-up is vague and accountability is weak. Over time, the audit programme starts producing activity instead of improvement.",
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
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>
                                    {item.label}
                                </p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.desc}</p>
                            </div>
                        ))}
                        <p style={{ ...para(font), marginTop: "0.75rem" }}>
                            That is why organisations often keep seeing the same nonconformities return in different forms. The wording may change, but the weakness underneath usually stays the same until the system around it improves.
                        </p>
                    </div>

                    <div id="reduce" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>How to Reduce Repeat ISO 9001 Nonconformities</h2>
                        <SectionImage src={sectionImages.reduce} alt="Team strengthening corrective action and PDCA follow-up" />
                        <p style={para(font)}>
                            If you want to reduce the top Non-Conformities in ISO 9001, start by looking beyond the individual finding.
                        </p>
                        <p style={para(font)}>
                            Review what keeps repeating. Check whether actions are actually effective. Make internal audits more risk-based and less routine. Keep records, evidence and follow-up in one place so the full audit trail stays visible.
                        </p>
                        <h3 style={h3(font)}>Use the PDCA Cycle Properly</h3>
                        {[
                            { label: "Plan", desc: "Plan around real risk." },
                            { label: "Do", desc: "Do the work consistently." },
                            { label: "Check", desc: "Check what is actually happening, not just what is documented." },
                            { label: "Act", desc: "Act on findings in a way that changes the system, not just the file." },
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
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>
                                    {item.label}
                                </p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.desc}</p>
                            </div>
                        ))}
                        <p style={{ ...para(font), marginTop: "0.5rem" }}>That is how nonconformities become useful.</p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Where iAudit Helps</h2>
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
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)",
                                    backgroundSize: "24px 24px",
                                    pointerEvents: "none",
                                }}
                            />
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.8,
                                    margin: "0 0 0.875rem",
                                    position: "relative",
                                    fontFamily: font,
                                }}
                            >
                                iAudit was built for exactly this problem. It gives teams one place to manage ISO 9001 findings, actions, evidence and reports, so the top Non-Conformities in ISO 9001 do not disappear into spreadsheets and email chains.
                            </p>
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.8,
                                    margin: "0 0 0.875rem",
                                    position: "relative",
                                    fontFamily: font,
                                }}
                            >
                                The platform follows the PDCA cycle, supports clause-aligned internal audits, and makes it easier to see patterns across audit cycles instead of treating every finding as a new issue.
                            </p>
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.8,
                                    margin: "0 0 1.25rem",
                                    position: "relative",
                                    fontFamily: font,
                                }}
                            >
                                During the free 14-day trial, you can run gap analysis and self-assessments, explore audit templates, view findings dashboards, download reports and track actions in one place. Audit Mate can also help you generate checklists faster and work through clause-based audit preparation without starting from a blank page.
                            </p>
                            <a
                                href="https://www.iaudit.global"
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
                                Explore iAudit Global
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                            <div style={{ height: "1px", background: "rgba(255,255,255,0.15)", margin: "1.5rem 0 1.15rem", position: "relative" }} />
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", fontFamily: font, position: "relative", fontWeight: 600 }}>
                                Mathew Chiweda
                            </p>
                            <p style={{ margin: "0.25rem 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", fontFamily: font, position: "relative" }}>
                                Author
                            </p>
                        </div>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.5rem" }}>
                        <h2 style={h2(font)}>Final Thought: Turning Findings into Improvement</h2>
                        <p style={para(font)}>
                            The top Non-Conformities in ISO 9001 are common because the underlying weaknesses are common too.
                        </p>
                        <p style={para(font)}>
                            Better audits, stronger follow-up and clearer visibility will not remove every finding, but they will stop the same ones coming back again and again. That is where the real value of ISO 9001 sits — not just in passing the audit, but in improving how the business works.
                        </p>
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
                                    overflow: "hidden",
                                    margin: "0 auto 1.1rem",
                                    position: "relative",
                                    background: "linear-gradient(135deg, #002e1d, #006644)",
                                }}
                            >
                                <Image
                                    src="/images/mathew-chiweda.webp"
                                    alt="Mathew Chiweda"
                                    fill
                                    sizes="90px"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>
                                Mathew Chiweda
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
                                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance across complex operational environments and multiple sectors.
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
                                overflow: "hidden",
                                margin: "0 auto 0.875rem",
                                position: "relative",
                                background: "linear-gradient(135deg, #002e1d, #006644)",
                            }}
                        >
                            <Image
                                src="/images/mathew-chiweda.webp"
                                alt="Mathew Chiweda"
                                fill
                                sizes="72px"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>
                            Mathew Chiweda
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
                                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance across complex operational environments and multiple sectors.
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

            <div id="faq" style={{ scrollMarginTop: "58px" }}>
                <FAQAccordion items={pricingFaqs} heading="Frequently asked questions" sparkleText="Support" />
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
        fontSize: "1.2rem",
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
