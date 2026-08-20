"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    admin: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    followup: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
    data: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    evidence: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=480&fit=crop&q=80&fm=webp",
    calendar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=480&fit=crop&q=80&fm=webp",
    leadership: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "administration", label: "It’s Not the Audit. It’s the Administration." },
    { id: "follow-up", label: "Follow-Up Fatigue" },
    { id: "disconnected", label: "Disconnected Data Across Sites" },
    { id: "evidence", label: "Chasing Evidence After the Audit" },
    { id: "calendar", label: "Calendar-Driven Audits" },
    { id: "leadership", label: "When Leadership Only Wants the Certificate" },
    { id: "want", label: "What Auditors Actually Want" },
    { id: "fix", label: "How to Fix Internal Audit Fatigue" },
    { id: "iaudit", label: "How iAudit Global Changes the Audit Experience" },
    { id: "conclusion", label: "Internal Auditing Should Not Feel Like Theatre" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const adminItems = [
    "Rebuilding checklists every year.",
    "Copy-pasting last year’s findings into a new template.",
    "Managing endless spreadsheet versions.",
    "Chasing updated logos on reports.",
];

const auditorWants = [
    "Structure that makes sense",
    "Data that stays connected",
    "Corrective actions that are verified",
    "Risk-based scheduling",
    "Real improvement across projects",
];

const fixItems = [
    "Centralise your audit data so patterns are visible across sites.",
    "Enforce effectiveness checks before closing corrective actions.",
    "Align audit schedules with operational risk.",
    "Capture evidence in real time, not retrospectively.",
    "Standardise clause-mapped templates so checklists do not drift every year.",
];

const iauditFeatures = [
    {
        title: "Automated Reporting",
        text: "Our platform eliminates the manual report-writing grind. Findings, photos and signatures are compiled into a professional, ISO-compliant report as you go. You finish the audit, and the report is ready.",
    },
    {
        title: "Mobile Evidence Capture",
        text: "Use any mobile device to capture evidence while you are on site. Photos and notes are linked directly to the specific clause and finding, meaning no more chasing evidence after the fact.",
    },
    {
        title: "Connected PDCA",
        text: "We don't just track actions to closure; we track them to effectiveness. Our workflow requires a verification step to ensure the root cause was actually addressed, stopping the cycle of repeat NCRs.",
    },
    {
        title: "Centralised Visibility",
        text: "Stop digging through spreadsheets. iAudit Global aggregates your data across every site and project, showing you the trends and hotspots that were previously invisible.",
    },
];

const conclusionIssues = [
    "Disconnected systems.",
    "Tick-and-close corrective actions.",
    "Administrative overload.",
    "And audits that do not influence decisions.",
];

const faqItems = [
    {
        question: "Why do many professionals find internal auditing frustrating?",
        answer:
            'Most frustrations stem from the administrative burden rather than the audit itself. Auditors often spend more time on "busy work" like formatting reports and chasing evidence than they do on actual site inspections or risk analysis. When the process feels like a paperwork exercise rather than a tool for improvement, it leads to significant audit fatigue.',
    },
    {
        question: "What are the most common pain points in the internal audit process?",
        answer:
            'The most frequent issues include "formatting hell," where auditors struggle with Word and Excel layouts, and "follow-up fatigue," caused by writing the same nonconformities year after year. Other major pain points include the manual collection of evidence after an audit is finished and the lack of consolidated data to see patterns across multiple sites.',
    },
    {
        question: "How can we stop repeat nonconformities (NCRs) from reappearing?",
        answer:
            'Repeat issues usually occur because corrective actions are closed without a verification step. To stop the cycle, organisations must move beyond simply "fixing" the problem and implement effectiveness checks. This ensures the root cause has been addressed and the change is permanent across the whole organisation.',
    },
    {
        question: "Why is manual audit reporting so time-consuming?",
        answer:
            "Manual reporting requires an auditor to compile notes, resize photos and manually cross-reference ISO clauses in a static document. This often takes four times longer than the site visit itself. Because the data is disconnected, it is also prone to error and lacks the real-time visibility needed for fast decision-making.",
    },
    {
        question: "How does iAudit Global solve common auditing challenges?",
        answer:
            'iAudit Global was built by auditors to eliminate administrative waste. Key features include an automated report generator that removes "formatting hell," mobile evidence capture to stop the post-audit scramble, and a connected PDCA workflow that ensures corrective actions are verified for effectiveness before closure. It turns fragmented data into a centralised audit memory for the entire business.',
    },
    {
        question: "What is the danger of having disconnected audit data?",
        answer:
            "When audit results are scattered across local drives and email threads, leadership cannot see systemic risks. Disconnected data hides trends, such as a specific subcontractor or department consistently failing on the same requirement. Without centralised visibility, it is impossible to move from reactive troubleshooting to proactive prevention.",
    },
    {
        question: "How can organisations make internal audits more strategic?",
        answer:
            "To make audits meaningful, they must be used as a decision-making tool for leadership rather than just a requirement for a certificate. This involves focusing on risk-based scheduling, involving the shop floor in the process, and ensuring that every audit results in a documented improvement to a process, training standard or site control.",
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

export default function AuditorHateInternalAuditingBlogContent() {
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
                    alt="Why most auditors secretly hate internal auditing"
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
                        Internal Auditing
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
                        Why Most Auditors Secretly Hate Internal Auditing
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Why most auditors secretly hate internal auditing has little to do with auditing itself.
                        </p>
                        <p style={para(font)}>
                            The real frustration comes from repeat NCRs, follow-up fatigue, disconnected data, chasing evidence and excessive administrative work.
                        </p>
                        <p style={para(font)}>
                            When internal audits are calendar-driven and corrective actions are closed without effectiveness checks, improvement stalls and morale drops.
                        </p>
                        <p style={para(font)}>
                            Structured, PDCA-driven systems solve this by centralising audit data, enforcing verified closure and making cross-project trends visible.
                        </p>
                        <p style={para(font)}>
                            iAudit Global was built by certified ISO auditors to reduce audit fatigue through clause-mapped templates, real-time evidence capture and integrated corrective action tracking.
                        </p>
                        <p style={para(font)}>Most auditors will never admit it publicly.</p>
                        <p style={para(font)}>But many quietly dread internal audit season.</p>
                        <p style={para(font)}>Not because they dislike auditing.</p>
                        <p style={para(font)}>Because they dislike what internal auditing has become.</p>
                        <p style={para(font)}>
                            Internal audits are supposed to test whether a management system actually works when people are busy and pressure is high. In practice, they often turn into administrative exercises that drain time and deliver very little improvement.
                        </p>
                        <p style={para(font)}>
                            If you have ever felt frustrated during an internal audit cycle, you are not alone. The issue is rarely the discipline of auditing. It is how organisations execute it.
                        </p>
                    </div>

                    <div id="administration" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>It&apos;s Not the Audit. It&apos;s the Administration.</h2>
                        <SectionImage src={sectionImages.admin} alt="Administrative overload in internal audit reporting and spreadsheet work" />
                        <p style={para(font)}>
                            Most auditors enjoy analysing systems, identifying risk and improving processes.
                        </p>
                        <p style={para(font)}>What they dislike is formatting.</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {adminItems.map((item, i, arr) => (
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
                            Internal auditing becomes frustrating when more time is spent adjusting documents than understanding how the business actually operates.
                        </p>
                        <p style={para(font)}>Formatting hell is not auditing. It is administration.</p>
                    </div>

                    <div id="follow-up" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Follow-Up Fatigue</h2>
                        <SectionImage src={sectionImages.followup} alt="Repeat nonconformities causing follow-up fatigue for internal auditors" />
                        <p style={para(font)}>
                            There is nothing more demoralising than writing the same nonconformity for the third year in a row.
                        </p>
                        <p style={para(font)}>The corrective action was raised.</p>
                        <p style={para(font)}>An action was assigned.</p>
                        <p style={para(font)}>The task was closed.</p>
                        <p style={para(font)}>And six months later, the same issue appears on another site.</p>
                        <p style={para(font)}>
                            Repeat NCRs usually mean one thing: effectiveness was never checked properly.
                        </p>
                        <p style={para(font)}>
                            Internal auditors want to see improvement. When corrective actions are closed without verifying that the systemic cause has been eliminated, the cycle repeats. Over time, that creates follow-up fatigue.
                        </p>
                        <p style={para(font)}>Auditors start asking themselves: does this process actually change anything?</p>
                    </div>

                    <div id="disconnected" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Disconnected Data Across Sites</h2>
                        <SectionImage src={sectionImages.data} alt="Disconnected audit data across sites hidden in separate spreadsheets" />
                        <p style={para(font)}>
                            In many organisations, audit findings sit in separate folders per project or department.
                        </p>
                        <p style={para(font)}>One spreadsheet per site.</p>
                        <p style={para(font)}>One report per audit.</p>
                        <p style={para(font)}>One folder per year.</p>
                        <p style={para(font)}>
                            There is no aggregated view of recurring categories, no cross-project trend analysis and no real visibility at management level.
                        </p>
                        <p style={para(font)}>
                            When data is disconnected, patterns remain hidden. And when patterns remain hidden, systemic problems become normalised.
                        </p>
                        <p style={para(font)}>Auditors do not hate auditing. They hate not being able to see the full picture.</p>
                    </div>

                    <div id="evidence" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Chasing Evidence After the Audit</h2>
                        <SectionImage src={sectionImages.evidence} alt="Chasing site evidence after an internal audit instead of capturing it in real time" />
                        <p style={para(font)}>Another common frustration is reconstructing evidence after the event.</p>
                        <p style={para(font)}>Photos gathered days later.</p>
                        <p style={para(font)}>Signatures collected retrospectively.</p>
                        <p style={para(font)}>Inspection records completed in bulk at the end of the week.</p>
                        <p style={para(font)}>
                            When evidence is not captured in real time, context disappears. The audit becomes a paperwork reconstruction exercise rather than a test of operational control.
                        </p>
                        <p style={para(font)}>
                            Professional auditors know the difference between genuine control and retrospective documentation.
                        </p>
                        <p style={para(font)}>And they find the latter exhausting.</p>
                    </div>

                    <div id="calendar" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Calendar-Driven Audits Instead of Risk-Based Audits</h2>
                        <SectionImage src={sectionImages.calendar} alt="Calendar-driven internal audit programmes instead of risk-based scheduling" />
                        <p style={para(font)}>Many internal audit programmes still operate on fixed annual calendars.</p>
                        <p style={para(font)}>The same departments.</p>
                        <p style={para(font)}>The same frequency.</p>
                        <p style={para(font)}>The same checklist.</p>
                        <p style={para(font)}>Regardless of performance.</p>
                        <p style={para(font)}>
                            ISO standards require risk-based thinking, yet audit schedules often ignore project complexity, recurring NCR trends or complaint spikes.
                        </p>
                        <p style={para(font)}>
                            Auditors want their time to be spent where risk is highest. When programmes are rigid and disconnected from operational signals, the work feels mechanical rather than meaningful.
                        </p>
                    </div>

                    <div id="leadership" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>When Leadership Only Wants the Certificate</h2>
                        <SectionImage src={sectionImages.leadership} alt="Leadership treating internal audits as insurance for the external audit" />
                        <p style={para(font)}>
                            Perhaps the most demotivating factor is when internal audits are treated as insurance for the external audit.
                        </p>
                        <p style={para(font)}>&ldquo;Just make sure we pass surveillance.&rdquo;</p>
                        <p style={para(font)}>
                            When the focus shifts from improvement to appearance, internal auditing becomes theatre. Findings are negotiated down. Corrective actions are softened. Root causes are diluted.
                        </p>
                        <p style={para(font)}>
                            Auditors want impact. They want management review to lead to decisions. Without that, the process feels hollow.
                        </p>
                    </div>

                    <div id="want" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What Auditors Actually Want</h2>
                        <p style={para(font)}>Auditors do not hate internal auditing.</p>
                        <p style={para(font)}>They want:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {auditorWants.map((item, i, arr) => (
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
                            They want internal audits to function as a management tool, not a compliance ritual.
                        </p>
                        <p style={para(font)}>
                            When internal audits are properly structured around the Plan Do Check Act cycle, they become energising. They reveal patterns. They influence decisions. They reduce risk.
                        </p>
                    </div>

                    <div id="fix" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to Fix Internal Audit Fatigue</h2>
                        <p style={para(font)}>
                            If internal auditing feels heavy in your organisation, the solution is not fewer audits.
                        </p>
                        <p style={para(font)}>It is better structure.</p>
                        <ul style={ul(font)}>
                            {fixItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>Most audit frustration is structural, not cultural.</p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global Changes the Audit Experience</h2>
                        <SectionImage src={sectionImages.iaudit} alt="iAudit Global audit management software reducing internal audit fatigue" />
                        <p style={para(font)}>
                            We built iAudit Global because we lived through these frustrations. We spent years in &ldquo;Formatting Hell&rdquo; and &ldquo;Follow-up Fatigue,&rdquo; and we knew there was a better way to manage ISO 9001, 14001 and 45001 programmes.
                        </p>
                        <p style={para(font)}>
                            iAudit Global is Audit Management software designed by auditors to solve these exact pain points:
                        </p>
                        {iauditFeatures.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Internal Auditing Should Not Feel Like Theatre</h2>
                        <p style={para(font)}>
                            Why most auditors secretly hate internal auditing has very little to do with auditing itself.
                        </p>
                        <p style={para(font)}>It has everything to do with:</p>
                        <ul style={ul(font)}>
                            {conclusionIssues.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>When those issues are addressed, internal auditing becomes strategic again.</p>
                        <p style={para(font)}>
                            If you want to move beyond spreadsheet fatigue and repeat NCR cycles, you can explore iAudit Global with a 14-day free trial at{" "}
                            <a href="https://www.iaudit.global/" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                www.iaudit.global
                            </a>
                            .
                        </p>
                        <p style={para(font)}>
                            Because auditing should strengthen your system, not frustrate the people trying to improve it.
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
                                Move beyond spreadsheet fatigue
                            </h3>
                            <p style={greenPara(font)}>
                                Start a 14-day free trial of iAudit Global and see how clause-mapped templates, real-time evidence capture and verified PDCA workflows change the audit experience.
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
                                Helping auditors move from formatting hell and repeat NCRs to structured, PDCA-driven internal audits.
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
                            Helping auditors move from formatting hell and repeat NCRs to structured, PDCA-driven internal audits.
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
