"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog/how-to-choose-internal-audit-management-software.jpg";

const tocItems = [
    { id: "intro", label: "Introduction & TL;DR" },
    { id: "what-it-should-do", label: "What the Software Should Actually Do" },
    { id: "fit-workflow", label: "Fitting Your Real Audit Workflow" },
    { id: "findings-actions", label: "Managing Findings & Corrective Actions" },
    { id: "usability", label: "Usability for Real Users" },
    { id: "testing-before-buying", label: "Testing Before You Buy" },
    { id: "data-security", label: "Data Security & Ownership" },
    { id: "implementation", label: "Implementation & Setup" },
    { id: "software-cost", label: "Software Cost vs Real Process Cost" },
    { id: "built-for-auditors", label: "Built Specifically for Auditors" },
    { id: "best-way-to-decide", label: "The Best Way to Decide" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const auditWorkflowSteps = [
    { num: "01", label: "Audit programme", detail: "Annual plan, priorities, risk & resources" },
    { num: "02", label: "Individual audit", detail: "Specific date, auditor allocation & site" },
    { num: "03", label: "Scope & criteria", detail: "Clauses, processes & requirements" },
    { num: "04", label: "Evidence", detail: "Interviews, records, photos & samples" },
    { num: "05", label: "Findings", detail: "Conformity, observations & nonconformities" },
    { num: "06", label: "Corrective action", detail: "Root cause, owner, due date & action" },
    { num: "07", label: "Verification", detail: "Review proof & verify effectiveness" },
    { num: "08", label: "Reporting", detail: "Live reports & management review insight" },
];

const correctiveActionWorkflow = [
    "Raise a finding with clear criteria",
    "Link supporting objective evidence",
    "Assign a named action owner",
    "Set an agreed target completion date",
    "Record the specific action taken",
    "Add verifiable evidence of completion",
    "Verify action effectiveness independently",
    "Close the finding permanently in the audit history",
];

const pdcaStages = [
    {
        letter: "P",
        title: "Plan",
        desc: "Set the audit programme based on objectives, organizational risk, changes, and past performance.",
        color: "#006644",
        bg: "#f0f7f3",
    },
    {
        letter: "D",
        title: "Do",
        desc: "Conduct audits against agreed criteria and collect objective supporting evidence directly.",
        color: "#1e3a8a",
        bg: "#eff6ff",
    },
    {
        letter: "C",
        title: "Check",
        desc: "Review findings, evaluate nonconformities, and identify recurring issues across departments.",
        color: "#92400e",
        bg: "#fef3c7",
    },
    {
        letter: "A",
        title: "Act",
        desc: "Complete verified corrective actions and use findings to adjust future audit programme priorities.",
        color: "#065f46",
        bg: "#ecfdf5",
    },
];

const faqItems = [
    {
        question: "1. What should I look for in internal audit management software?",
        answer: (
            <span>
                Look for software that supports the complete audit workflow, including programme planning, audit execution, evidence capture, findings, corrective actions, verification and reporting. It should also be easy for auditors, auditees and managers to use without creating unnecessary administration.
            </span>
        ),
    },
    {
        question: "2. How do I compare internal audit management software?",
        answer: (
            <span>
                Start by mapping your current audit process and use the same real-world scenario to test each platform. Compare how easily each system handles planning, evidence, findings, corrective actions, reporting, permissions and programme oversight rather than comparing feature lists alone.
            </span>
        ),
    },
    {
        question: "3. What features are most important in internal audit software?",
        answer: (
            <span>
                The most useful features are those that keep audit information connected. This includes audit planning, evidence management, findings tracking, corrective-action ownership, due dates, effectiveness verification, reporting and access to previous audit history.
            </span>
        ),
    },
    {
        question: "4. How important is usability when choosing audit management software?",
        answer: (
            <span>
                Usability is critical because auditors, auditees and managers may all interact with the platform. If common tasks such as uploading evidence, responding to findings or closing actions are difficult, users may avoid the system or create workarounds outside it.
            </span>
        ),
    },
    {
        question: "5. How secure should internal audit management software be?",
        answer: (
            <span>
                Audit software should provide strong access controls, encryption, secure data storage and clear data ownership. Organisations should also understand whether vendor staff can access audit information and what happens to their data if they stop using the platform.
            </span>
        ),
    },
    {
        question: "6. Is internal audit management software suitable for small audit teams?",
        answer: (
            <span>
                Yes, if the complexity of the audit programme justifies it. A small team managing several standards, sites, recurring audits or numerous corrective actions may benefit from dedicated software even if the number of users is limited.
            </span>
        ),
    },
    {
        question: "7. Can I try iAudit Global before choosing audit management software?",
        answer: (
            <span>
                Yes. iAudit Global offers a 14-day free trial with no credit card required. You can test audit planning, evidence capture, findings, corrective actions and reporting using your own audit workflow before deciding whether the platform suits your team.{" "}
                <Link href="/pricing" style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}>
                    Start your 14-day free trial on the pricing page
                </Link>.
            </span>
        ),
    },
];

export default function HowToChooseInternalAuditSoftwareBlogContent() {
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
                        alt="How to Choose Internal Audit Management Software"
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
                                November 4, 2026
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
                                8 Min Read
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
                            How to Choose Internal Audit Management Software
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
                                        Quick Recommendation
                                    </span>
                                </div>
                                <p style={{ margin: 0, fontSize: "0.98rem", color: "#1f2937", lineHeight: 1.75 }}>
                                    Choose internal audit management software by testing how well it supports your real audit workflow, from planning and evidence to findings, corrective actions and reporting. Check usability, security, implementation and cost before deciding. You can{" "}
                                    <Link href="/pricing" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        start a 14-day free trial of iAudit Global
                                    </Link>{" "}
                                    with no credit card required.
                                </p>
                            </div>

                            <p style={para(font)}>
                                The best internal audit management software is not necessarily the platform with the longest feature list.
                            </p>
                            <p style={para(font)}>
                                I would start with the audit process itself.
                            </p>
                            <p style={para(font)}>
                                Can the software help you plan the programme, conduct audits, collect evidence, record findings, manage corrective actions, verify closure and understand what needs attention next?
                            </p>
                            <p style={para(font)}>
                                If it cannot support that workflow without creating extra administration, the dashboard, automation and additional features matter far less.
                            </p>

                            <div
                                style={{
                                    borderLeft: "4px solid #006644",
                                    padding: "1.1rem 1.4rem",
                                    background: "#f0f5f2",
                                    borderRadius: "0 0.75rem 0.75rem 0",
                                    margin: "1.5rem 0 1.75rem",
                                }}
                            >
                                <p style={{ margin: "0 0 0.4rem", fontWeight: 700, color: "#003b27", fontSize: "1.02rem" }}>
                                    ISO 19011 Framework
                                </p>
                                <p style={{ margin: 0, fontSize: "0.95rem", color: "#166534", lineHeight: 1.65 }}>
                                    ISO 19011 provides guidance on audit programme management and conducting management system audits. When I assess audit software, I would expect the system to support that structured approach rather than simply turn an audit checklist into an online form. You can see the wider auditing framework in{" "}
                                    <a
                                        href="https://www.iso.org/standard/19011"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}
                                    >
                                        ISO 19011 guidance for auditing management systems
                                    </a>.
                                </p>
                            </div>

                            <p style={para(font)}>
                                So, if you are choosing internal audit management software, these are the areas I would test first.
                            </p>
                        </div>

                        {/* Section 1: What should internal audit management software actually do? */}
                        <div id="what-it-should-do" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What should internal audit management software actually do?</h2>
                            <p style={para(font)}>
                                It should connect the full audit process, not manage isolated parts of it.
                            </p>
                            <p style={para(font)}>
                                Planning, execution, evidence, findings, corrective actions and follow-up should form one continuous audit record.
                            </p>
                            <p style={para(font)}>
                                This is where PDCA becomes useful in practice.
                            </p>
                            <p style={para(font)}>
                                You plan the audit programme based on objectives and priorities. You conduct the audit and collect evidence. You check findings and performance. You act on what has been identified and use the results to improve future audits.
                            </p>

                            {/* PDCA Cards */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                                    gap: "1rem",
                                    margin: "1.5rem 0 1.75rem",
                                }}
                            >
                                {pdcaStages.map((s) => (
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
                                            <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#111827" }}>
                                                {s.title}
                                            </h3>
                                        </div>
                                        <p style={{ margin: 0, fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6 }}>
                                            {s.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>
                                A structured{" "}
                                <Link
                                    href="/pdca-cycle-audit-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    PDCA audit workflow
                                </Link>{" "}
                                helps keep those stages connected rather than leaving planning in one system, findings in another and corrective actions in somebody&apos;s inbox.
                            </p>
                            <p style={para(font)}>
                                If the software only gives you checklists and reports, I would question how much of the audit programme it is actually managing.
                            </p>
                        </div>

                        {/* Section 2: Does the software fit the way your audits actually work? */}
                        <div id="fit-workflow" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Does the software fit the way your audits actually work?</h2>
                            <p style={para(font)}>
                                Your audit team should not have to redesign its entire process to accommodate the software.
                            </p>
                            <p style={para(font)}>
                                I would map the workflow before comparing platforms:
                            </p>

                            {/* Sequential Workflow Grid */}
                            <div
                                style={{
                                    margin: "1.5rem 0 1.75rem",
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                                    gap: "0.75rem",
                                }}
                            >
                                {auditWorkflowSteps.map((step) => (
                                    <div
                                        key={step.num}
                                        style={{
                                            background: "#ffffff",
                                            border: "1px solid #e8e4df",
                                            borderRadius: "0.625rem",
                                            padding: "0.9rem 1.1rem",
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "12px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                color: "#006644",
                                                background: "rgba(0,102,68,0.08)",
                                                padding: "3px 8px",
                                                borderRadius: "4px",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {step.num}
                                        </span>
                                        <div>
                                            <p style={{ margin: "0 0 0.15rem", fontWeight: 700, color: "#111827", fontSize: "0.95rem" }}>
                                                {step.label}
                                            </p>
                                            <p style={{ margin: 0, fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.4 }}>
                                                {step.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>
                                Then test whether the platform follows that sequence naturally.
                            </p>
                            <p style={para(font)}>
                                The distinction becomes clearer when you look at what proper{" "}
                                <Link
                                    href="/blog/iso-audit-programme-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    ISO audit programme software
                                </Link>{" "}
                                needs to manage. An audit programme is wider than a single checklist or audit plan. It needs visibility across audits, sites, findings and follow-up over time.
                            </p>
                            <p style={para(font)}>
                                If common tasks require workarounds, duplicate data entry or several unrelated screens, those problems will become more noticeable once the team starts using the platform every week.
                            </p>
                        </div>

                        {/* Section 3: How well does it manage findings and corrective actions? */}
                        <div id="findings-actions" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How well does it manage findings and corrective actions?</h2>
                            <p style={para(font)}>
                                A finding should remain connected to the audit and evidence that created it.
                            </p>
                            <p style={para(font)}>
                                I would test this workflow during any software evaluation:
                            </p>

                            {/* Step list for findings and actions */}
                            <div
                                style={{
                                    background: "#ffffff",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    padding: "1.25rem 1.5rem",
                                    margin: "1.25rem 0 1.5rem",
                                }}
                            >
                                <ol style={{ margin: 0, paddingLeft: "1.35rem", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                                    {correctiveActionWorkflow.map((item) => (
                                        <li key={item} style={{ color: "#374151", fontSize: "0.94rem", lineHeight: 1.6 }}>
                                            {item}
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <p style={para(font)}>
                                That sounds straightforward, but it is often where audit processes become fragmented.
                            </p>
                            <p style={para(font)}>
                                If findings live in one tracker, evidence sits in folders and action closure depends on email reminders, there is no single audit history.
                            </p>
                            <p style={para(font)}>
                                Internal audit management software should make it easy to understand not only whether an action is marked complete, but also why it was raised, what was done and whether the response actually worked.
                            </p>
                        </div>

                        {/* Section 4: Is the software easy enough for people to actually use? */}
                        <div id="usability" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Is the software easy enough for people to actually use?</h2>
                            <p style={para(font)}>
                                A feature only creates value if people use it properly.
                            </p>
                            <p style={para(font)}>
                                I would spend less time looking at the most impressive screen in a sales demonstration and more time testing the tasks auditors and auditees perform regularly.
                            </p>
                            <ul style={listStyle(font)}>
                                <li>Can an auditor add evidence quickly?</li>
                                <li>Can an auditee understand what action has been assigned?</li>
                                <li>Can a manager see what is overdue without asking someone to prepare another report?</li>
                                <li>Can occasional users navigate the system without extensive training?</li>
                            </ul>
                            <p style={para(font)}>
                                If the platform makes simple audit tasks feel complicated, adoption will become a problem regardless of how many features it offers.
                            </p>
                        </div>

                        {/* Section 5: How should you test internal audit software before buying? */}
                        <div id="testing-before-buying" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How should you test internal audit software before buying?</h2>
                            <p style={para(font)}>
                                Use a real audit scenario rather than relying on a generic product tour.
                            </p>
                            <p style={para(font)}>
                                For example, ask the vendor to show you how to:
                            </p>

                            <div
                                style={{
                                    backgroundColor: "#fdfcfb",
                                    border: "1px solid #e8e4df",
                                    borderLeft: "4px solid #1e40af",
                                    borderRadius: "0.75rem",
                                    padding: "1.1rem 1.4rem",
                                    margin: "1.25rem 0 1.5rem",
                                }}
                            >
                                <p style={{ margin: 0, fontSize: "0.98rem", color: "#1e3a8a", fontWeight: 600, lineHeight: 1.7 }}>
                                    Schedule an ISO 9001 audit, define the scope, collect evidence, raise a nonconformity, assign a corrective action, receive completion evidence and verify closure.
                                </p>
                            </div>

                            <p style={para(font)}>
                                That tells you much more than watching somebody move through dashboards.
                            </p>
                            <p style={para(font)}>
                                I would also use the same scenario when comparing different products. It makes it much easier to see which system genuinely fits the audit workflow and which one simply has more functions.
                            </p>
                            <p style={para(font)}>
                                The difference between software and manual tracking is easier to judge once you understand where{" "}
                                <Link
                                    href="/blog/internal-audit-software-vs-spreadsheets"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    internal audit software differs from spreadsheets
                                </Link>
                                , particularly around evidence, reporting and corrective-action follow-up.
                            </p>
                        </div>

                        {/* Section 6: How secure is your audit data? */}
                        <div id="data-security" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How secure is your audit data?</h2>
                            <p style={para(font)}>
                                Security and data ownership should be part of the buying decision from the beginning.
                            </p>
                            <p style={para(font)}>
                                Audit records can contain nonconformities, control weaknesses, operational risks, employee information, supplier issues and other information an organisation may not want exposed.
                            </p>
                            <p style={para(font)}>
                                I would ask:
                            </p>
                            <ul style={listStyle(font)}>
                                <li>Where is the data stored?</li>
                                <li>Who can access it?</li>
                                <li>Can vendor staff view audit findings?</li>
                                <li>How are permissions managed?</li>
                                <li>How is data protected in transit and at rest?</li>
                                <li>Who owns the audit history?</li>
                            </ul>
                            <p style={para(font)}>
                                This mattered when we built iAudit Global.
                            </p>
                            <p style={para(font)}>
                                Our{" "}
                                <Link
                                    href="/audit-management-software-built-by-auditors"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    audit management software was built by auditors
                                </Link>
                                , with structured ISO audits and a zero-access approach to customer audit data. Your audit information stays yours.
                            </p>
                            <p style={para(font)}>
                                ISO also treats auditing as a fundamental part of management systems, with ISO 19011 providing the supporting guidance for audit management. The broader relationship between management systems and auditing is outlined in{" "}
                                <a
                                    href="https://www.iso.org/management-system-standards.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    ISO&apos;s management system standards guidance
                                </a>.
                            </p>
                        </div>

                        {/* Section 7: How difficult will the software be to implement? */}
                        <div id="implementation" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How difficult will the software be to implement?</h2>
                            <p style={para(font)}>
                                A good audit platform should reduce administration quickly rather than create another long implementation project.
                            </p>
                            <p style={para(font)}>
                                Before choosing a system, ask what is required to configure:
                            </p>
                            <ul style={listStyle(font)}>
                                <li>Standards</li>
                                <li>Sites and locations</li>
                                <li>Users and access roles</li>
                                <li>Audit programmes and schedules</li>
                                <li>Existing historical records</li>
                            </ul>
                            <p style={para(font)}>
                                You should also understand how quickly the team can run its first audit.
                            </p>
                            <p style={para(font)}>
                                The{" "}
                                <Link
                                    href="/blog/how-to-set-up-iaudit-global-iso-audit-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    iAudit Global setup process
                                </Link>{" "}
                                shows how standards, company information, users and audit structures can be configured before moving into live auditing.
                            </p>
                            <p style={para(font)}>
                                Implementation should support the audit process, not interrupt it.
                            </p>
                        </div>

                        {/* Section 8: How much should internal audit management software cost? */}
                        <div id="software-cost" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How much should internal audit management software cost?</h2>
                            <p style={para(font)}>
                                Compare the software cost with the cost of the process it replaces.
                            </p>
                            <p style={para(font)}>
                                Subscription price matters, but it is only one part of the decision.
                            </p>
                            <p style={para(font)}>
                                Consider how much time is currently spent:
                            </p>
                            <ul style={listStyle(font)}>
                                <li>Copying information between files</li>
                                <li>Preparing audit reports manually</li>
                                <li>Chasing overdue corrective actions</li>
                                <li>Finding scattered evidence across emails and drives</li>
                                <li>Consolidating multi-site data</li>
                                <li>Rebuilding audit history before external assessments</li>
                            </ul>
                            <p style={para(font)}>
                                Then compare that against the cost of the platform and the value of having those activities connected.
                            </p>
                            <p style={para(font)}>
                                The cheapest option is not necessarily the lowest-cost process. Equally, paying more for features the team will never use does not create value.
                            </p>
                        </div>

                        {/* Section 9: Should you choose software built specifically for auditors? */}
                        <div id="built-for-auditors" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Should you choose software built specifically for auditors?</h2>
                            <p style={para(font)}>
                                For ISO audit teams, software designed around audit workflows can reduce the amount of adaptation required.
                            </p>
                            <p style={para(font)}>
                                That was one of the reasons we built iAudit Global around structured audits and PDCA rather than starting with a generic task-management system.
                            </p>
                            <p style={para(font)}>
                                The software supports programme planning, evidence, findings, corrective actions and reporting while keeping those elements connected throughout the audit lifecycle.
                            </p>
                            <p style={para(font)}>
                                For me, that is the standard I would apply when choosing any platform.
                            </p>
                            <p style={para(font)}>
                                Does it help the team audit better, or does it simply give them another system to maintain?
                            </p>
                        </div>

                        {/* Section 10: What is the best way to decide? */}
                        <div id="best-way-to-decide" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What is the best way to decide?</h2>
                            <p style={para(font)}>
                                Use the software with a real audit before committing to it.
                            </p>
                            <p style={para(font)}>
                                Take one of your own audit scenarios and test the complete workflow:
                            </p>
                            <p style={para(font)}>
                                <strong>Plan it. Add evidence. Raise a finding. Assign an action. Verify closure. Produce the report.</strong>
                            </p>
                            <p style={para(font)}>
                                That will expose strengths and weaknesses very quickly.
                            </p>

                            {/* CTA Card */}
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
                                    Test iAudit Global with your real workflow
                                </h3>
                                <p style={{ margin: "0 0 1.25rem", fontSize: "0.98rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    You can{" "}
                                    <Link href="/pricing" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        start a 14-day free trial of iAudit Global
                                    </Link>{" "}
                                    and test that process using your own audit programme.
                                </p>
                                <p style={{ margin: "0 0 1.5rem", fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    No credit card is required. The goal is not to choose software because it has more features. It is to choose a system that gives your audit team better control, clearer evidence and less administrative work.
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
                                        Speak to an Audit Specialist
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

