"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog-complex-workflows.webp";

const sectionImages: Record<string, string> = {
    calendar: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    pain: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=480&fit=crop&q=80&fm=webp",
    risk: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    multisite: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=480&fit=crop&q=80&fm=webp",
    living: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "calendar", label: "Calendar vs Programme" },
    { id: "pain", label: "Common Pain Points in Audit Scheduling" },
    { id: "risk", label: "Moving to a Risk-Based Schedule" },
    { id: "multisite", label: "Scheduling for Multi-Site Consistency" },
    { id: "living", label: "Turning the Schedule into a Living Programme" },
    { id: "iaudit", label: "How iAudit Global Strengthens Scheduling" },
    { id: "conclusion", label: "From Static Schedules to Structured Control" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const painPoints = [
    {
        num: "1",
        title: "The Fixed Calendar Trap",
        text: 'Most schedules do not adapt to reality. If a project site has a spike in near-misses or a department has a complete change in leadership, the audit schedule should pivot to address that. Yet, because the schedule is "set," these emerging risks are ignored until their original slot months later.',
    },
    {
        num: "2",
        title: "Follow-Up Fatigue",
        text: 'A major nonconformity (NCR) is found, an action is assigned, and the auditor moves on. The schedule rarely accounts for the time required to re-audit that area to verify effectiveness. Without scheduled follow-ups, the "Act" part of PDCA fails, and the same finding reappears during the certification audit.',
    },
    {
        num: "3",
        title: "Resource Burnout",
        text: 'Most internal auditors have "day jobs." When the schedule is managed in a spreadsheet that isn\'t shared or updated in real-time, audits get bunched up. This leads to rushed audits that fail to find systemic issues, creating a false sense of security for leadership.',
    },
    {
        num: "4",
        title: "The Multi-Site Logistics Nightmare",
        text: "In industries like construction or logistics, scheduling audits across twenty or thirty locations is a massive administrative burden. Aligning auditor travel with project milestones, like mobilisation or handover, is almost impossible to manage effectively via email and Excel.",
    },
];

const riskInputs = [
    {
        title: "Previous Audit Results",
        text: 'If an area had a "clean" audit last year, it might not need a deep dive this year. Conversely, if a department struggled with NCRs, it should be scheduled for more frequent, focused "check-in" audits.',
    },
    {
        title: "The Risk Register",
        text: 'If your organisation\'s risk register identifies "Supply Chain Failure" as a high risk, your audit schedule should reflect that with more frequent audits of procurement and supplier evaluation.',
    },
    {
        title: "Operational Changes",
        text: 'New machinery, new software, or new subcontractors should all trigger a shift in the audit programme. The schedule must be flexible enough to accommodate "triggered" audits without collapsing the rest of the programme.',
    },
];

const pdcaSteps = [
    { stage: "Plan", text: "Define risk-based audit coverage." },
    { stage: "Do", text: "Execute structured audits." },
    { stage: "Check", text: "Analyse findings and trends." },
    { stage: "Act", text: "Adjust the audit programme based on performance and risk." },
];

const iauditFeatures = [
    {
        title: "Centralised Visibility",
        text: "With iAudit, your entire 12-month or 3-year programme is visible in one place. You can see which audits are upcoming, which are overdue, and which auditors are over-stretched across different sites.",
    },
    {
        title: "Risk-Based Tagging",
        text: "Our platform allows you to tag sites or departments by risk level. The system can then help you determine frequency, ensuring your high-risk operations get the attention they require while reducing the burden on low-risk areas.",
    },
    {
        title: "Automated Follow-Up",
        text: 'One of the most powerful features of iAudit is how it handles the "Check" phase. When an NCR is raised, the system can automatically suggest a follow-up audit or "effectiveness check" in the schedule. This ensures the loop is closed and the problem is actually solved.',
    },
    {
        title: "Continuous Audit Memory",
        text: "When people leave or consultants move on, their knowledge often goes with them. iAudit Global maintains a continuous audit history. When you go to schedule next year's programme, all the data from previous years is right there, informing your decisions on where to focus next.",
    },
];

const faqItems = [
    {
        question: "What is an internal audit programme schedule?",
        answer:
            "An internal audit programme schedule is a strategic roadmap that defines when, where, and how often audits will occur across an organisation. Unlike a simple calendar, a professional programme schedule is risk-based, meaning it prioritises high-risk processes and sites while considering the results of previous audits, as guided by ISO 19011.",
    },
    {
        question: "How often should I schedule internal audits for ISO 9001?",
        answer:
            "ISO 9001 Clause 9.2 doesn't mandate a specific frequency, but it does require that the programme considers the importance of the processes and changes affecting the organisation. High-risk areas or those with a history of non-conformities should be scheduled more frequently (e.g., quarterly), while stable, low-risk areas might only need an annual review.",
    },
    {
        question: "What is the difference between an audit calendar and an audit programme?",
        answer:
            "A calendar is a static list of dates, often set once a year and rarely changed. An audit programme is a dynamic management tool that follows the PDCA (Plan-Do-Check-Act) cycle. It adapts to operational changes, spikes in NCRs, or new risks, ensuring the auditor's time is always spent where it provides the most value.",
    },
    {
        question: "How do I manage a multi-site audit programme schedule?",
        answer:
            "Managing multiple sites requires centralised visibility. Using spreadsheets often leads to version control issues and \"audit scrambles.\" Effective multi-site scheduling involves a \"bird's-eye view\" of all locations, allowing you to align audit dates with project milestones—like mobilisation or handover—and ensuring no single site is overlooked.",
    },
    {
        question: "Why is follow-up scheduling critical for ISO compliance?",
        answer:
            "If you don't schedule an \"effectiveness check\" or follow-up audit after a major non-conformity is found, the PDCA loop remains open. Many organisations fail their certification audits because they closed the initial task but never scheduled a check to verify that the systemic problem was actually solved.",
    },
    {
        question: "Can I use Excel to manage my internal audit programme schedule?",
        answer:
            "While many small organisations start with Excel, it quickly becomes an administrative burden as the business grows. Manual spreadsheets lack automated reminders, real-time sharing, and data linkage. Moving to a digital platform reduces admin and ensures your audit memory stays with the business even if a consultant or employee leaves.",
    },
    {
        question: "How does iAudit Global help with audit scheduling?",
        answer:
            "iAudit Global replaces static spreadsheets with a dynamic dashboard for your entire internal audit programme schedule. Key features include Risk-Based Tagging to prioritise high-risk sites, Centralised Visibility to track overdue audits, and Automated Follow-ups to verify corrective actions. You can explore these features by starting a 14-day free trial at www.iaudit.global.",
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

export default function InternalAuditProgrammeScheduleBlogContent() {
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
                    alt="How to schedule an effective internal audit programme"
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
                        Audit Programme
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
                            August 18, 2026
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
                        How to Schedule an Effective Internal Audit Programme
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            A static internal audit programme schedule is a major risk to any organisation. Most businesses fall into the &ldquo;fixed calendar trap&rdquo;, auditing by a set date rather than by operational risk or past performance. This often leads to the &ldquo;audit scramble&rdquo; and poor-quality findings.
                        </p>
                        <p style={para(font)}>
                            To provide genuine oversight, your schedule must be a living document that adapts to NCR trends, operational changes, and the company risk register. iAudit Global replaces administrative spreadsheets with a dynamic dashboard, offering risk-based tagging and automated PDCA follow-ups to ensure your internal audits drive real improvement, rather than just more compliance paperwork.
                        </p>
                        <p style={para(font)}>
                            An internal audit programme schedule is often the most overlooked part of a management system. In many organisations, it is treated as a static document, a list of dates set in January and filed away until the next surveillance audit.
                        </p>
                        <p style={para(font)}>But when a schedule is static, it is almost certainly failing to manage risk.</p>
                        <p style={para(font)}>
                            Working across sectors like steel fabrication, construction, and pharma, I have seen the same scene play out repeatedly: the &ldquo;Audit Scramble.&rdquo; This is where teams realise in October that half the programme is incomplete, leading to a rush of low-quality, &ldquo;tick-box&rdquo; audits performed just to satisfy an external auditor.
                        </p>
                        <p style={para(font)}>
                            A schedule should be a living management tool. If it isn&apos;t providing the business with visibility and control, it is simply more paperwork.
                        </p>
                    </div>

                    <div id="calendar" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Difference Between a Calendar and a Programme</h2>
                        <SectionImage src={sectionImages.calendar} alt="Planning a risk-based internal audit programme instead of a static calendar" />
                        <p style={para(font)}>
                            There is a common misunderstanding that an audit schedule is just a calendar of events. ISO 19011, which provides the guidelines for auditing management systems, makes it clear that an audit programme is much more than that. It is a strategic plan that must consider the importance of the processes being audited and the results of previous audits.
                        </p>
                        <p style={para(font)}>
                            If you audit every department once a year, regardless of performance, you are running a calendar. If you audit your high-risk fabrication shop three times a year and your low-risk head office once every two years, you are running a risk-based programme.
                        </p>
                        <p style={para(font)}>The goal of scheduling is to put the auditor where the risk is highest.</p>
                    </div>

                    <div id="pain" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common Pain Points in Audit Scheduling</h2>
                        <SectionImage src={sectionImages.pain} alt="Common pain points in multi-site internal audit scheduling" />
                        <p style={para(font)}>
                            Why do so many organisations struggle with the &ldquo;Plan&rdquo; phase of the PDCA cycle? Usually, it comes down to four specific challenges:
                        </p>
                        {painPoints.map((item) => (
                            <div key={item.num} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>
                                    {item.num}. {item.title}
                                </h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="risk" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Moving to a Risk-Based Schedule</h2>
                        <SectionImage src={sectionImages.risk} alt="Risk-based internal audit scheduling using performance data" />
                        <p style={para(font)}>
                            To build a schedule that actually strengthens the business, we have to stop treating every process as equal. A risk-based internal audit schedule should be influenced by three primary inputs:
                        </p>
                        {riskInputs.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="multisite" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Scheduling for Multi-Site Consistency</h2>
                        <SectionImage src={sectionImages.multisite} alt="Multi-site internal audit programme scheduling across locations" />
                        <p style={para(font)}>
                            For those managing multiple projects or depots, the schedule must provide a &ldquo;Bird&apos;s Eye View.&rdquo; You need to see at a glance if one region is falling behind on its audits or if one specific trade is being audited more heavily than others.
                        </p>
                        <p style={para(font)}>
                            In construction, for example, the schedule should align with the project lifecycle. Auditing a site during the final handover phase is a completely different exercise than auditing it during mobilisation. A smart schedule ensures you are sampling different stages of the project across your entire portfolio.
                        </p>
                    </div>

                    <div id="living" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Turning the Schedule into a Living Programme</h2>
                        <SectionImage src={sectionImages.living} alt="Turning an internal audit schedule into a living PDCA programme" />
                        <p style={para(font)}>An internal audit schedule should not be static.</p>
                        <p style={para(font)}>It should follow the PDCA cycle:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {pdcaSteps.map((item, i, arr) => (
                                <div
                                    key={item.stage}
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
                                            minWidth: "52px",
                                            borderRadius: "5px",
                                            background: "rgba(0,102,68,0.1)",
                                            color: "#006644",
                                            fontSize: "0.72rem",
                                            fontWeight: 700,
                                            padding: "4px 8px",
                                            textAlign: "center",
                                            flexShrink: 0,
                                            fontFamily: font,
                                        }}
                                    >
                                        {item.stage}
                                    </span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            When audit scheduling is treated as a living programme, it becomes a management tool rather than a compliance checklist.
                        </p>
                        <p style={para(font)}>
                            Management review should also consider whether the audit programme itself remains aligned with organisational risk.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global Strengthens Internal Audit Scheduling</h2>
                        <SectionImage src={sectionImages.iaudit} alt="iAudit Global dashboard for dynamic internal audit programme scheduling" />
                        <p style={para(font)}>
                            The reason most schedules stay static is that they are too difficult to change manually. If you move one date in a complex spreadsheet, you have to email five different people and update three other documents.
                        </p>
                        <p style={para(font)}>
                            We built iAudit Global to move the audit programme from a static file to a dynamic dashboard. We wanted to make the &ldquo;Plan&rdquo; phase as simple as the &ldquo;Do&rdquo; phase.
                        </p>
                        {iauditFeatures.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>From Static Schedules to Structured Audit Control</h2>
                        <p style={para(font)}>
                            Internal audits should not be a paperwork routine. They are the clearest way for a Director to see how the business is performing on the ground. But that insight starts with a schedule that is built around risk, performance, and reality.
                        </p>
                        <p style={para(font)}>
                            If your schedule is just a list of dates in a folder, it is time to rethink your approach. Move away from the administrative scramble and toward a programme that provides real oversight.
                        </p>
                        <p style={para(font)}>
                            If you are ready to move your audit programme out of spreadsheets and into a system that actually understands the PDCA cycle, you can explore iAudit Global with a 14-day free trial.
                        </p>
                        <p style={para(font)}>
                            Start your free trial today at{" "}
                            <a href="https://www.iaudit.global/" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                www.iaudit.global
                            </a>
                            .
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
                                Move your audit programme out of spreadsheets
                            </h3>
                            <p style={greenPara(font)}>
                                Start a 14-day free trial of iAudit Global and see how risk-based tagging, centralised visibility and automated follow-ups turn a static calendar into a living audit programme.
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
                                    backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    overflow: "hidden",
                                    margin: "0 auto 1.1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >

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
                                backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    overflow: "hidden",
                                margin: "0 auto 0.875rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >

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
