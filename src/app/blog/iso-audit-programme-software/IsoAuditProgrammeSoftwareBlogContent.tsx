"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog/iso-audit-programme-software.jpg";

const tocItems = [
    { id: "intro", label: "Introduction & TL;DR" },
    { id: "what-is", label: "What Is ISO Audit Programme Software?" },
    { id: "programme-vs-plan", label: "Audit Programme vs Audit Plan" },
    { id: "what-it-should-do", label: "What the Software Should Actually Do" },
    { id: "what-it-should-not-be", label: "What It Should Not Be" },
    { id: "when-useful", label: "When Software Becomes Useful" },
    { id: "in-practice", label: "A Structured Programme in Practice" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const programmeVsPlanTable = {
    headers: ["Audit Programme", "Audit Plan"],
    rows: [
        [
            "Covers one or more audits over a period",
            "Covers one specific audit",
        ],
        [
            "Defines wider objectives and priorities",
            "Defines arrangements for that audit",
        ],
        [
            "Considers sites, processes, standards and risk",
            "Focuses on the agreed scope and activities",
        ],
        [
            "Helps allocate audits and resources",
            "Helps organise delivery of the individual audit",
        ],
        [
            "Is reviewed and adjusted over time",
            "Usually ends when that audit is completed",
        ],
    ],
};

const pdcaSteps = [
    {
        letter: "P",
        title: "Plan",
        desc: "Decide what needs attention based on risk, changes, past performance and management priorities.",
        color: "#006644",
        bg: "#f0f7f3",
    },
    {
        letter: "D",
        title: "Do",
        desc: "Conduct the audits, review processes against defined criteria and collect supporting evidence.",
        color: "#1e3a8a",
        bg: "#eff6ff",
    },
    {
        letter: "C",
        title: "Check",
        desc: "Review audit findings, analyse recurrence, and evaluate overall programme performance.",
        color: "#92400e",
        bg: "#fef3c7",
    },
    {
        letter: "A",
        title: "Act",
        desc: "Close corrective actions with verified proof and adjust future audit priorities accordingly.",
        color: "#065f46",
        bg: "#ecfdf5",
    },
];

const faqItems = [
    {
        question: "1. What is ISO audit programme software?",
        answer: (
            <span>
                ISO audit programme software is used to plan, organise, conduct, monitor and follow up management system audits across an organisation. It can bring together audit schedules, scope, evidence, findings, corrective actions, reporting and audit history in one structured system.
            </span>
        ),
    },
    {
        question: "2. What is the difference between an audit programme and an audit plan?",
        answer: (
            <span>
                An audit programme covers one or more audits over a defined period and sets wider objectives, priorities and resources. An audit plan focuses on the arrangements for one specific audit, including its scope, timing and activities.
            </span>
        ),
    },
    {
        question: "3. Does ISO require organisations to use audit programme software?",
        answer: (
            <span>
                No. ISO standards do not require organisations to use a particular type of software. Audit programmes can be managed using spreadsheets, documents or other systems, provided the organisation maintains suitable control, evidence and follow-up.
            </span>
        ),
    },
    {
        question: "4. What should ISO audit programme software include?",
        answer: (
            <span>
                Useful ISO audit programme software should support audit planning, scheduling, scope and criteria, evidence capture, findings, corrective actions, reporting and audit history. It should also help users see programme progress and identify overdue or recurring issues.
            </span>
        ),
    },
    {
        question: "5. How does audit programme software help with corrective actions?",
        answer: (
            <span>
                Audit programme software can connect corrective actions directly to the relevant finding, assign owners and due dates, store completion evidence and support follow-up. This reduces the need to manage actions through separate spreadsheets, emails and reminders.
            </span>
        ),
    },
    {
        question: "6. Is audit programme software useful for multi-site organisations?",
        answer: (
            <span>
                Yes. It can be particularly useful where several sites, departments or standards are involved. A central system can provide better visibility of planned audits, findings, overdue actions and audit performance across the organisation.
            </span>
        ),
    },
    {
        question: "7. Can I try iAudit Global before changing my current audit process?",
        answer: (
            <span>
                Yes. iAudit Global offers a 14-day free trial with no credit card required. You can test audit planning, evidence, findings, corrective actions and reporting using your own audit process before deciding whether the platform suits your organisation. You can{" "}
                <Link href="/pricing" style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}>
                    start the free trial on the iAudit Global pricing page
                </Link>.
            </span>
        ),
    },
];

export default function IsoAuditProgrammeSoftwareBlogContent() {
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
            <div className="blog-reading-scope">
                {/* Hero Header */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: isMobile ? "55vw" : "60vh",
                        minHeight: isMobile ? "240px" : "420px",
                        maxHeight: "640px",
                        overflow: "hidden",
                    }}
                >
                    <Image
                        src={HERO_IMAGE}
                        alt="ISO Audit Programme Software: What Should It Do?"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 100%)",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: isMobile ? "1.25rem" : "2.25rem",
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
                                padding: "4px 14px",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "0.75rem",
                                fontFamily: font,
                            }}
                        >
                            Audit Management
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                            <span
                                style={{
                                    color: "rgba(255,255,255,0.9)",
                                    fontSize: "0.84rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontFamily: font,
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                November 1, 2026
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                            <span
                                style={{
                                    color: "rgba(255,255,255,0.9)",
                                    fontSize: "0.84rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontFamily: font,
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                7 Min Read
                            </span>
                        </div>
                    </div>
                </div>

                {/* Sticky Subnav */}
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
                                gap: "2px",
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

                {/* Main 3-Column Layout */}
                <div
                    style={{
                        maxWidth: "1260px",
                        margin: "0 auto",
                        padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem",
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "220px 1fr 250px",
                        gap: isMobile ? "2rem" : "3.25rem",
                        alignItems: "start",
                    }}
                >
                    {/* Left Sticky Table of Contents */}
                    {!isMobile && (
                        <aside style={{ position: "sticky", top: "calc(var(--blog-sticky-offset) + 8px)", alignSelf: "start" }}>
                            <p
                                style={{
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.13em",
                                    textTransform: "uppercase",
                                    color: "#374151",
                                    margin: "0 0 0.75rem",
                                    fontFamily: font,
                                }}
                            >
                                On this page
                            </p>
                            <div style={{ position: "relative" }}>
                                <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "1px", background: "#e4e0db" }} />
                                <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
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
                                                    fontSize: "0.84rem",
                                                    fontFamily: font,
                                                    lineHeight: 1.38,
                                                    color: isActive ? "#006644" : "#6B7280",
                                                    fontWeight: isActive ? 600 : 400,
                                                    background: isActive ? "rgba(0,102,68,0.06)" : "transparent",
                                                    borderRadius: "0 6px 6px 0",
                                                    transition: "color 0.15s, background 0.15s",
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

                    {/* Middle Article Column */}
                    <article style={{ minWidth: 0 }}>
                        <h1
                            style={{
                                fontSize: isMobile ? "1.85rem" : "2.5rem",
                                fontWeight: 700,
                                color: "#111827",
                                letterSpacing: "-0.025em",
                                lineHeight: 1.22,
                                margin: "0 0 1.5rem",
                                fontFamily: font,
                            }}
                        >
                            What Is ISO Audit Programme Software and What Should It Actually Do?
                        </h1>

                        {/* Section: Intro & TL;DR */}
                        <div id="intro" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)" }}>
                            {/* TL;DR Callout Card */}
                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #cce3d8",
                                    borderLeft: "5px solid #006644",
                                    borderRadius: "0.875rem",
                                    padding: "1.35rem 1.5rem",
                                    margin: "0 0 2rem",
                                    boxShadow: "0 3px 12px rgba(0,102,68,0.04)",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
                                    <span
                                        style={{
                                            fontSize: "0.72rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            color: "#006644",
                                            background: "rgba(0,102,68,0.08)",
                                            padding: "2px 8px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        TL;DR
                                    </span>
                                    <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111827" }}>
                                        Executive Summary
                                    </span>
                                </div>
                                <p style={{ margin: 0, fontSize: "0.98rem", color: "#1f2937", lineHeight: 1.75 }}>
                                    ISO audit programme software should do more than digitise checklists. It should connect audit planning, scheduling, evidence, findings, corrective actions, reporting and audit history so teams can manage the full programme in one place. The right platform should also help identify overdue actions, recurring issues and future audit priorities. If your current process is spread across spreadsheets, documents and emails, you can{" "}
                                    <Link href="/pricing" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        start a 14-day free trial of iAudit Global
                                    </Link>{" "}
                                    and test a more structured approach.
                                </p>
                            </div>

                            <p style={para(font)}>
                                I often see the terms <strong>audit</strong>, <strong>audit plan</strong> and <strong>audit programme</strong> used as though they mean the same thing.
                            </p>

                            <div
                                style={{
                                    borderLeft: "4px solid #006644",
                                    padding: "1rem 1.35rem",
                                    background: "#f0f5f2",
                                    borderRadius: "0 0.75rem 0.75rem 0",
                                    margin: "1.25rem 0 1.5rem",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "1.15rem",
                                        color: "#003b27",
                                        margin: 0,
                                        fontWeight: 700,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    They do not.
                                </p>
                            </div>

                            <p style={para(font)}>
                                An <strong>individual audit</strong> looks at a defined area, process, site or management system requirement. An <strong>audit plan</strong> sets out how that particular audit will be carried out. An <strong>audit programme</strong> sits above both. It brings multiple audits together over a period and gives them a purpose, priorities and structure.
                            </p>
                            <p style={para(font)}>
                                That distinction matters when we talk about ISO audit programme software.
                            </p>
                            <p style={para(font)}>
                                A digital checklist may help you carry out an audit, but it does not necessarily help you manage an audit programme. The real question is whether the software can connect planning, scheduling, evidence, findings, corrective actions and future audit priorities into one process.
                            </p>
                        </div>

                        {/* Section: What is ISO audit programme software? */}
                        <div id="what-is" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What is ISO audit programme software?</h2>
                            <p style={para(font)}>
                                <strong>ISO audit programme software</strong> is a system used to plan, organise, conduct, monitor and follow up management system audits across an organisation.
                            </p>
                            <p style={para(font)}>
                                ISO does not require you to use audit software. A programme can be managed using spreadsheets, documents and other tools if those methods give you the control you need.
                            </p>
                            <p style={para(font)}>
                                The difficulty usually appears when the programme becomes more complex.
                            </p>
                            <p style={para(font)}>
                                You may be managing several standards, multiple sites, different audit teams and dozens of findings. At that point, information can quickly become spread across calendars, folders, spreadsheets and email threads.
                            </p>
                            <p style={para(font)}>
                                A useful audit programme platform should bring those pieces together so that an audit remains connected to the programme it belongs to.
                            </p>
                        </div>

                        {/* Section: Audit programme vs audit plan */}
                        <div id="programme-vs-plan" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Audit programme vs audit plan: what is the difference?</h2>
                            <p style={para(font)}>
                                It helps to separate these two before looking at software.
                            </p>

                            {/* Comparison Table */}
                            <div
                                style={{
                                    margin: "1.75rem 0 2rem",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    overflow: "hidden",
                                    background: "#ffffff",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                }}
                            >
                                {isMobile ? (
                                    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        {programmeVsPlanTable.rows.map((row, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    background: "#fdfcfb",
                                                    borderRadius: "0.625rem",
                                                    padding: "1rem",
                                                    border: "1px solid #eeebe6",
                                                }}
                                            >
                                                <div style={{ marginBottom: "0.65rem" }}>
                                                    <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#006644" }}>
                                                        Audit Programme
                                                    </span>
                                                    <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#111827", fontWeight: 600, lineHeight: 1.5 }}>
                                                        {row[0]}
                                                    </p>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6B7280" }}>
                                                        Audit Plan
                                                    </span>
                                                    <p style={{ margin: "0.25rem 0 0", fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.5 }}>
                                                        {row[1]}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ overflowX: "auto" }}>
                                        <table
                                            style={{
                                                width: "100%",
                                                borderCollapse: "collapse",
                                                fontFamily: font,
                                                fontSize: "0.92rem",
                                            }}
                                        >
                                            <thead>
                                                <tr style={{ background: "#f5f3f0" }}>
                                                    {programmeVsPlanTable.headers.map((h, i) => (
                                                        <th
                                                            key={h}
                                                            style={{
                                                                textAlign: "left",
                                                                padding: "0.95rem 1.25rem",
                                                                borderBottom: "2px solid #e8e4df",
                                                                color: i === 0 ? "#006644" : "#111827",
                                                                fontWeight: 700,
                                                                fontSize: "0.85rem",
                                                                letterSpacing: "0.04em",
                                                                textTransform: "uppercase",
                                                                width: "50%",
                                                            }}
                                                        >
                                                            {h}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {programmeVsPlanTable.rows.map((row, idx) => (
                                                    <tr
                                                        key={idx}
                                                        style={{
                                                            borderBottom: idx === programmeVsPlanTable.rows.length - 1 ? "none" : "1px solid #f0ede8",
                                                            background: idx % 2 === 1 ? "#faf8f5" : "#ffffff",
                                                        }}
                                                    >
                                                        <td
                                                            style={{
                                                                padding: "1rem 1.25rem",
                                                                fontWeight: 600,
                                                                color: "#00472f",
                                                                verticalAlign: "top",
                                                                lineHeight: 1.6,
                                                            }}
                                                        >
                                                            {row[0]}
                                                        </td>
                                                        <td
                                                            style={{
                                                                padding: "1rem 1.25rem",
                                                                color: "#4B5563",
                                                                verticalAlign: "top",
                                                                lineHeight: 1.6,
                                                            }}
                                                        >
                                                            {row[1]}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            <p style={para(font)}>
                                If software helps you prepare individual audit checklists but gives you no visibility of the wider programme, it is only solving part of the problem.
                            </p>
                            <p style={para(font)}>
                                The programme should tell you not only what is being audited today, but also why it matters and what needs attention next.
                            </p>
                        </div>

                        {/* Section: What should ISO audit programme software actually do? */}
                        <div id="what-it-should-do" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What should ISO audit programme software actually do?</h2>
                            <p style={para(font)}>
                                Dedicated software should support the entire audit lifecycle, providing clear answers, connected evidence, and actionable continuous improvement.
                            </p>

                            {/* Capability 1 */}
                            <div style={{ marginTop: "1.75rem" }}>
                                <h3 style={h3(font)}>1. Plan audits around objectives and risk</h3>
                                <p style={para(font)}>
                                    I would not build an audit programme by simply copying last year&apos;s schedule and changing the dates.
                                </p>
                                <p style={para(font)}>
                                    Previous findings, organisational changes, process performance, risk and management priorities should influence what gets audited and how often.
                                </p>
                                <p style={para(font)}>
                                    Software should therefore help you see:
                                </p>
                                <ul style={listStyle(font)}>
                                    <li>What needs auditing</li>
                                    <li>Which standard or criteria apply</li>
                                    <li>Which processes or sites deserve more attention</li>
                                    <li>What the programme is trying to achieve</li>
                                    <li>How audits are distributed over time</li>
                                </ul>
                                <p style={para(font)}>
                                    The programme should reflect what is happening in the organisation rather than becoming an annual calendar exercise.
                                </p>
                            </div>

                            {/* Capability 2 */}
                            <div style={{ marginTop: "2rem" }}>
                                <h3 style={h3(font)}>2. Schedule audits without losing the bigger picture</h3>
                                <p style={para(font)}>
                                    Scheduling is important, but a calendar alone is not audit programme management.
                                </p>
                                <p style={para(font)}>
                                    You should be able to see what is:
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "0.75rem 0 1.25rem" }}>
                                    {["Planned", "Scheduled", "In Progress", "Completed", "Overdue"].map((status, i) => (
                                        <span
                                            key={status}
                                            style={{
                                                padding: "4px 12px",
                                                borderRadius: "6px",
                                                fontSize: "0.82rem",
                                                fontWeight: 600,
                                                background: i === 4 ? "#fee2e2" : i === 3 ? "#dcfce7" : i === 2 ? "#dbeafe" : "#f3f4f6",
                                                color: i === 4 ? "#991b1b" : i === 3 ? "#166534" : i === 2 ? "#1e40af" : "#374151",
                                                border: "1px solid rgba(0,0,0,0.06)",
                                            }}
                                        >
                                            {status}
                                        </span>
                                    ))}
                                </div>
                                <p style={para(font)}>
                                    That becomes especially useful when several sites, standards or auditors are involved.
                                </p>
                                <p style={para(font)}>
                                    The benefit is not simply knowing the date of the next audit. It is being able to understand whether the entire programme is progressing as intended.
                                </p>
                            </div>

                            {/* Capability 3 */}
                            <div style={{ marginTop: "2rem" }}>
                                <h3 style={h3(font)}>3. Keep scope, criteria and evidence connected</h3>
                                <p style={para(font)}>
                                    An audit needs a clear objective, scope and criteria.
                                </p>
                                <p style={para(font)}>
                                    The evidence collected during the audit should remain connected to those things.
                                </p>
                                <p style={para(font)}>
                                    If I open an audit record six months later, I should be able to understand what was being assessed, what evidence was reviewed and how the auditor reached the conclusion.
                                </p>
                                <p style={para(font)}>
                                    That becomes difficult when the checklist sits in Word, photographs are in a shared folder and supporting records were sent by email.
                                </p>
                                <p style={para(font)}>
                                    Good audit programme software should keep the evidence close to the part of the audit it supports.
                                </p>
                            </div>

                            {/* Capability 4 */}
                            <div style={{ marginTop: "2rem" }}>
                                <h3 style={h3(font)}>4. Manage findings through to corrective action</h3>
                                <p style={para(font)}>
                                    Recording a finding is not the end of an audit.
                                </p>
                                <p style={para(font)}>
                                    Once a nonconformity or other finding has been raised, the programme needs to know:
                                </p>
                                <ul style={listStyle(font)}>
                                    <li>Who owns the action?</li>
                                    <li>When is it due?</li>
                                    <li>What has been done?</li>
                                    <li>What evidence supports completion?</li>
                                    <li>Has the action actually been effective?</li>
                                </ul>
                                <p style={para(font)}>
                                    A spreadsheet can record a finding, but the wider process often depends on reminders, separate files and individual follow-up.
                                </p>
                                <p style={para(font)}>
                                    Keeping findings, evidence, owners and corrective actions together makes it easier to understand what is genuinely closed and what still needs attention.
                                </p>
                            </div>

                            {/* Capability 5 */}
                            <div style={{ marginTop: "2rem" }}>
                                <h3 style={h3(font)}>5. Preserve audit history and identify patterns</h3>
                                <p style={para(font)}>
                                    Audit history should influence future audit planning.
                                </p>
                                <p style={para(font)}>
                                    If the same process has produced repeated findings, one site consistently has overdue corrective actions or an area of the business has changed significantly, the next audit programme should take that into account.
                                </p>
                                <p style={para(font)}>
                                    This is where audit management starts to support PDCA properly:
                                </p>

                                {/* PDCA Visual Cards */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                                        gap: "1rem",
                                        margin: "1.25rem 0 1.75rem",
                                    }}
                                >
                                    {pdcaSteps.map((s) => (
                                        <div
                                            key={s.title}
                                            style={{
                                                background: "#ffffff",
                                                border: "1px solid #e8e4df",
                                                borderRadius: "0.75rem",
                                                padding: "1.2rem",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                                                <span
                                                    style={{
                                                        width: "28px",
                                                        height: "28px",
                                                        borderRadius: "50%",
                                                        background: s.bg,
                                                        color: s.color,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontWeight: 700,
                                                        fontSize: "0.88rem",
                                                    }}
                                                >
                                                    {s.letter}
                                                </span>
                                                <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#111827" }}>
                                                    {s.title}
                                                </h4>
                                            </div>
                                            <p style={{ margin: 0, fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6 }}>
                                                {s.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p style={para(font)}>
                                    When audit information is spread across yearly spreadsheets and folders, seeing those patterns becomes much harder.
                                </p>
                            </div>

                            {/* Capability 6 */}
                            <div style={{ marginTop: "2rem" }}>
                                <h3 style={h3(font)}>6. Give management useful oversight</h3>
                                <p style={para(font)}>
                                    I do not think organisations need dashboards simply because dashboards look impressive.
                                </p>
                                <p style={para(font)}>
                                    They need visibility.
                                </p>
                                <p style={para(font)}>
                                    Someone responsible for the audit programme should be able to answer questions such as:
                                </p>
                                <ul style={listStyle(font)}>
                                    <li>How many audits have been completed?</li>
                                    <li>What is overdue?</li>
                                    <li>Which findings remain open?</li>
                                    <li>Where are corrective actions being delayed?</li>
                                    <li>Are particular issues recurring?</li>
                                    <li>Which sites or processes need more attention?</li>
                                </ul>
                                <p style={para(font)}>
                                    Management should not need somebody to manually rebuild that picture every time a review meeting approaches.
                                </p>
                            </div>
                        </div>

                        {/* Section: What audit programme software should not be */}
                        <div id="what-it-should-not-be" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What audit programme software should not be</h2>
                            <p style={para(font)}>
                                I would be cautious about calling something audit programme software simply because it contains digital checklists.
                            </p>
                            <p style={para(font)}>
                                A checklist library can be useful, but it is only one part of auditing.
                            </p>
                            <p style={para(font)}>
                                The same applies to a document repository, findings register or scheduling calendar. Each solves a particular problem, but none manages the whole programme by itself.
                            </p>
                            <p style={para(font)}>
                                The value comes from connecting the elements.
                            </p>
                            <p style={para(font)}>
                                Planning should lead into individual audits. Evidence should connect to findings. Findings should lead to corrective actions. Previous results should inform future planning.
                            </p>
                            <p style={para(font)}>
                                Without those connections, you may simply replace several disconnected files with several disconnected digital features.
                            </p>
                        </div>

                        {/* Section: When does dedicated audit programme software become useful? */}
                        <div id="when-useful" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>When does dedicated audit programme software become useful?</h2>
                            <p style={para(font)}>
                                You may not need dedicated software if your programme is small and straightforward.
                            </p>
                            <p style={para(font)}>
                                But the case becomes stronger as audit volume grows, more sites or standards become involved, evidence becomes harder to organise or corrective actions require constant manual follow-up.
                            </p>
                            <p style={para(font)}>
                                The same warning signs are discussed in more detail in our comparison of{" "}
                                <Link
                                    href="/blog/internal-audit-software-vs-spreadsheets"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    internal audit software vs spreadsheets
                                </Link>
                                , particularly when maintaining trackers starts taking time away from auditing itself.
                            </p>
                            <p style={para(font)}>
                                Once you have decided that software may be useful, features should be judged against the audit process you actually need to manage. Planning, evidence, findings, corrective actions, reporting, security and multi-site visibility are some of the areas worth considering when{" "}
                                <Link
                                    href="/blog/how-to-choose-iso-audit-management-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    choosing ISO audit management software
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Section: Structured audit programme in practice */}
                        <div id="in-practice" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What does a structured audit programme look like in practice?</h2>
                            <p style={para(font)}>
                                At iAudit Global, we built the platform around the audit lifecycle itself: programme planning, audit execution, evidence, findings, corrective actions and reporting.
                            </p>
                            <p style={para(font)}>
                                That approach came from the audit problems we had already seen in practice rather than starting with a generic software workflow. The background to that is part of{" "}
                                <Link
                                    href="/about"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    why iAudit Global was built
                                </Link>
                                .
                            </p>
                            <p style={para(font)}>
                                Moving from spreadsheets and separate files also does not need to become a major IT project. Your standards, sites, users and audit programme provide the starting structure, and the{" "}
                                <Link
                                    href="/blog/how-to-set-up-iaudit-global-iso-audit-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    iAudit Global setup process
                                </Link>{" "}
                                shows how that can be put together in practice.
                            </p>

                            {/* Final Callout Card */}
                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #cce3d8",
                                    borderRadius: "1rem",
                                    padding: isMobile ? "1.5rem 1.25rem" : "2rem 2.25rem",
                                    margin: "2.25rem 0",
                                    boxShadow: "0 4px 20px rgba(0,102,68,0.06)",
                                }}
                            >
                                <h3
                                    style={{
                                        margin: "0 0 0.75rem",
                                        fontSize: isMobile ? "1.25rem" : "1.45rem",
                                        fontWeight: 700,
                                        color: "#111827",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    Experience a connected audit programme
                                </h3>
                                <p style={{ margin: "0 0 1.25rem", fontSize: "0.98rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    If you want to see whether a structured audit programme makes a practical difference to your team, you can{" "}
                                    <Link href="/pricing" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        start a 14-day free trial of iAudit Global
                                    </Link>
                                    .
                                </p>
                                <p style={{ margin: "0 0 1.5rem", fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    There is no credit card required. Use the trial to plan an audit, capture evidence, record findings and follow actions through the process, then decide whether it gives you better control than the system you use today.
                                </p>
                                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                                    <Link
                                        href="/pricing"
                                        style={{
                                            display: "inline-block",
                                            background: "#006644",
                                            color: "#fff",
                                            padding: "0.85rem 1.5rem",
                                            borderRadius: "999px",
                                            fontWeight: 700,
                                            fontSize: "0.85rem",
                                            textDecoration: "none",
                                            letterSpacing: "0.04em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Start 14-Day Free Trial
                                    </Link>
                                    <Link
                                        href="/contact"
                                        style={{
                                            display: "inline-block",
                                            background: "transparent",
                                            color: "#006644",
                                            border: "1px solid #006644",
                                            padding: "0.85rem 1.5rem",
                                            borderRadius: "999px",
                                            fontWeight: 700,
                                            fontSize: "0.85rem",
                                            textDecoration: "none",
                                            letterSpacing: "0.04em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Talk to an Auditor
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Author Sidebar */}
                    {!isMobile && (
                        <aside style={{ position: "sticky", top: "calc(var(--blog-sticky-offset) + 8px)", alignSelf: "start" }}>
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
                                    Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems and improving audit performance.
                                </p>
                                <Link
                                    href="/contact"
                                    style={{
                                        display: "block",
                                        background: "#006644",
                                        color: "#fff",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "999px",
                                        fontWeight: 700,
                                        fontSize: "0.75rem",
                                        textDecoration: "none",
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        fontFamily: font,
                                        transition: "background 0.2s",
                                    }}
                                >
                                    Free consultation
                                </Link>
                            </div>
                        </aside>
                    )}
                </div>

                {/* FAQ Section */}
                <div id="faq" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 8px)" }}>
                    <FAQAccordion items={faqItems} heading="Frequently Asked Questions" sparkleText="FAQ" />
                </div>
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
        margin: "0 0 0.85rem",
        fontFamily: font,
    };
}

function h3(font: string): React.CSSProperties {
    return {
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "#111827",
        letterSpacing: "-0.015em",
        lineHeight: 1.35,
        margin: "0 0 0.65rem",
        fontFamily: font,
    };
}

function para(font: string): React.CSSProperties {
    return {
        fontSize: "0.98rem",
        color: "#374151",
        lineHeight: 1.85,
        margin: "0 0 1rem",
        fontFamily: font,
    };
}

function listStyle(font: string): React.CSSProperties {
    return {
        fontSize: "0.98rem",
        color: "#374151",
        lineHeight: 1.85,
        margin: "0 0 1.25rem",
        paddingLeft: "1.5rem",
        fontFamily: font,
    };
}

