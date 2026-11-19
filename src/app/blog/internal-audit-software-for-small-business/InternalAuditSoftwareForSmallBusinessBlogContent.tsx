"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog/internal-audit-software-for-small-business.jpg";

const tocItems = [
    { id: "intro", label: "Introduction & TL;DR" },
    { id: "what-small-business-needs", label: "What Small Businesses Actually Need" },
    { id: "spreadsheets-enough", label: "Are Spreadsheets Still Enough?" },
    { id: "features-that-matter", label: "Features That Matter Most" },
    { id: "features-not-needed", label: "Features You Might Not Need" },
    { id: "pdca-continual-improvement", label: "PDCA & Continual Improvement" },
    { id: "security-data-ownership", label: "Security & Data Ownership" },
    { id: "how-to-choose", label: "How to Choose the Software" },
    { id: "when-worth-it", label: "When Dedicated Software Is Worth It" },
    { id: "try-with-real-audit", label: "Try It with One Real Audit" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const auditEssentials = [
    "Plan and schedule audits across standards and sites",
    "Define clear audit scope and criteria",
    "Capture and link objective evidence on-site",
    "Record findings, observations and nonconformities",
    "Assign corrective action owners with clear due dates",
    "Track deadlines and avoid manual follow-up chasing",
    "Verify action effectiveness before permanent closure",
    "Produce professional audit reports instantly",
    "Retain complete, traceable audit history",
];

const pdcaStages = [
    {
        letter: "P",
        title: "Plan",
        desc: "Decide what needs auditing, set criteria, and establish priorities based on risks and objectives.",
        color: "#006644",
        bg: "#f0f7f3",
    },
    {
        letter: "D",
        title: "Do",
        desc: "Conduct the audit, evaluate operations against requirements, and collect objective evidence directly.",
        color: "#1e3a8a",
        bg: "#eff6ff",
    },
    {
        letter: "C",
        title: "Check",
        desc: "Assess findings, analyse nonconformities, and identify recurring issues across departments or sites.",
        color: "#92400e",
        bg: "#fef3c7",
    },
    {
        letter: "A",
        title: "Act",
        desc: "Close verified corrective actions and use audit lessons to improve future audit programme priorities.",
        color: "#065f46",
        bg: "#ecfdf5",
    },
];

const enterpriseModulesNotNeeded = [
    "Complex financial audit workflows",
    "SOX internal controls testing",
    "Enterprise-wide GRC frameworks",
    "Resource planning modules for dozens of auditors",
    "Complicated audit-universe management systems",
    "Extensive custom development and coding",
    "Separate paid add-on modules for basic audit activities",
];

const faqItems = [
    {
        question: "1. Does a small business really need internal audit software?",
        answer: (
            <span>
                Not always. If your audit programme is simple, findings are limited and one person can manage everything
                easily using spreadsheets, dedicated software may not be necessary yet. It becomes more useful when
                audit complexity, evidence, corrective actions and reporting become harder to control manually.
            </span>
        ),
    },
    {
        question: "2. What should internal audit software for a small business include?",
        answer: (
            <span>
                A small business should look for the essentials: audit planning, structured audit execution, evidence
                capture, findings management, corrective actions, reporting and audit history. The goal should be to
                simplify the audit process rather than add more features than the team needs.
            </span>
        ),
    },
    {
        question: "3. Is internal audit software suitable for ISO 9001, ISO 14001 and ISO 45001?",
        answer: (
            <span>
                Yes. Internal audit software can support management system audits for standards such as ISO 9001, ISO
                14001 and ISO 45001 by helping teams manage audit scope, evidence, findings, nonconformities, corrective
                actions and follow-up in one place.
            </span>
        ),
    },
    {
        question: "4. Can a small business use Excel instead of internal audit software?",
        answer: (
            <span>
                Yes. Excel can still work for smaller and less complex audit programmes. The limitation usually appears
                when more sites, standards, findings or users are involved and the team starts relying on several
                spreadsheets, folders and emails to keep the process together.
            </span>
        ),
    },
    {
        question: "5. How do I know when it is time to move from spreadsheets to audit software?",
        answer: (
            <span>
                Consider dedicated software when version control becomes difficult, evidence is scattered, corrective
                actions need constant chasing, reporting takes too much time or audit history is hard to retrieve.
                These are signs that the current process may be creating unnecessary administration.
            </span>
        ),
    },
    {
        question: "6. How much internal audit software does a small business actually need?",
        answer: (
            <span>
                Most small businesses do not need a large enterprise GRC platform. A simpler system that covers audit
                planning, evidence, findings, corrective actions, reporting and programme visibility may provide more
                value without the cost and complexity of features the team will rarely use.
            </span>
        ),
    },
    {
        question: "7. Can small businesses try iAudit Global before subscribing?",
        answer: (
            <span>
                Yes. iAudit Global offers a 14-day free trial with no credit card required. Small teams can test audit
                planning, evidence capture, findings, corrective actions and reporting using their own audit process
                before deciding whether the platform is suitable.{" "}
                <Link href="/pricing" style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}>
                    Start your 14-day free trial on our pricing page
                </Link>
                .
            </span>
        ),
    },
];

export default function InternalAuditSoftwareForSmallBusinessBlogContent() {
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
                        alt="Internal Audit Software for Small Businesses"
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
                            Audit Management Software
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
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                November 19, 2026
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
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
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
                            <svg
                                width="13"
                                height="13"
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
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
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
                                    margin: "0 0 0.75rem",
                                    fontFamily: font,
                                }}
                            >
                                On this page
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
                            Internal Audit Software for Small Businesses: What Do You Really Need?
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
                                        Key Takeaway
                                    </span>
                                </div>
                                <p style={{ margin: 0, fontSize: "0.98rem", color: "#1f2937", lineHeight: 1.75 }}>
                                    Small businesses do not need complex enterprise audit platforms. The right internal audit software
                                    should make ISO audit planning, evidence, findings, corrective actions and reporting easier to
                                    manage without adding unnecessary administration. Choose based on audit complexity, not company
                                    size. You can{" "}
                                    <Link href="/pricing" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        start a 14-day free trial of iAudit Global
                                    </Link>{" "}
                                    with no credit card required.
                                </p>
                            </div>

                            <p style={para(font)}>
                                A small business does not need internal audit software simply because it runs ISO audits.
                            </p>
                            <p style={para(font)}>
                                When I speak to smaller organisations about internal auditing, the same question comes up quite often:{" "}
                                <em>when does a spreadsheet stop being enough?</em>
                            </p>
                            <p style={para(font)}>
                                There is no fixed answer. A straightforward audit programme can run perfectly well with basic tools. But
                                once evidence starts sitting in different folders, findings are tracked separately, corrective actions
                                need constant chasing and reporting takes longer than it should, the administration starts becoming
                                part of the problem.
                            </p>
                            <p style={para(font)}>
                                For me, that is the point where internal audit software becomes worth considering. Not because the
                                business has reached a certain size, but because the audit process itself has become harder to control.
                            </p>
                            <p style={para(font)}>
                                That is especially relevant for smaller teams managing ISO 9001, ISO 14001 or ISO 45001 alongside their
                                day-to-day responsibilities. The software they choose needs to make that work simpler, not add another
                                layer of complexity.
                            </p>
                            <p style={para(font)}>
                                For ISO management-system auditing,{" "}
                                <a
                                    href="https://www.iso.org/standard/19011"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#006644", textDecoration: "underline", fontWeight: 500 }}
                                >
                                    ISO 19011 provides guidance for auditing management systems
                                </a>
                                , including audit programmes, conducting audits and auditor competence.
                            </p>

                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #e5e7eb",
                                    borderLeft: "4px solid #006644",
                                    borderRadius: "8px",
                                    padding: "1.1rem 1.35rem",
                                    margin: "1.5rem 0",
                                }}
                            >
                                <p style={{ margin: "0 0 0.4rem", fontSize: "0.95rem", color: "#6b7280" }}>
                                    The important question for a smaller organisation is therefore not:
                                </p>
                                <p style={{ margin: "0 0 0.5rem", fontSize: "1.05rem", fontWeight: 600, color: "#111827" }}>
                                    &ldquo;Are we big enough for audit software?&rdquo;
                                </p>
                                <p style={{ margin: "0 0 0.4rem", fontSize: "0.95rem", color: "#6b7280" }}>It is:</p>
                                <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#006644" }}>
                                    Has our audit programme become complex enough that dedicated software would make it easier to control?
                                </p>
                            </div>
                        </div>

                        {/* Section 1: What does a small business actually need */}
                        <div id="what-small-business-needs" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What does a small business actually need from internal audit software?</h2>
                            <p style={para(font)}>
                                Most small ISO audit teams need control and visibility, not a large enterprise system full of modules
                                they will never use.
                            </p>
                            <p style={para(font)}>I would start with the work the audit team actually needs to complete.</p>
                            <p style={para(font)}>That usually means being able to:</p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                    gap: "0.75rem",
                                    margin: "1.25rem 0 1.5rem",
                                }}
                            >
                                {auditEssentials.map((item, idx) => (
                                    <div
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            backgroundColor: "#ffffff",
                                            border: "1px solid #e5e7eb",
                                            padding: "0.75rem 1rem",
                                            borderRadius: "10px",
                                            fontSize: "0.92rem",
                                            color: "#1f2937",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "22px",
                                                height: "22px",
                                                borderRadius: "50%",
                                                backgroundColor: "#e8f5ef",
                                                color: "#006644",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {idx + 1}
                                        </span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>Those are the foundations.</p>
                            <p style={para(font)}>
                                The full lifecycle is also what separates proper{" "}
                                <Link
                                    href="/blog/iso-audit-programme-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    ISO audit programme software
                                </Link>{" "}
                                from a checklist tool. A checklist may help during one audit, but the organisation still needs to manage
                                what happens before and after it.
                            </p>
                        </div>

                        {/* Section 2: Are spreadsheets still enough */}
                        <div id="spreadsheets-enough" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Are spreadsheets still enough for your audit programme?</h2>
                            <p style={para(font)}>
                                They can be, particularly when the audit programme is small and straightforward.
                            </p>
                            <p style={para(font)}>
                                If one person manages a few audits each year, findings are limited, evidence is easy to retrieve and
                                reporting does not take much time, Excel or Google Sheets may still work perfectly well.
                            </p>
                            <p style={para(font)}>I would not recommend changing systems simply because specialist software exists.</p>
                            <p style={para(font)}>The problems tend to appear as the programme grows.</p>
                            <p style={para(font)}>
                                You may start managing ISO 9001 and then add ISO 14001 or ISO 45001. Another location opens. More people
                                become responsible for corrective actions. Evidence starts sitting in different folders, and reporting
                                requires information from several trackers.
                            </p>
                            <p style={para(font)}>
                                The practical difference between{" "}
                                <Link
                                    href="/blog/internal-audit-software-vs-spreadsheets"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    internal audit software vs spreadsheets
                                </Link>{" "}
                                becomes much more noticeable once the team is spending time maintaining connections between files rather
                                than auditing.
                            </p>
                        </div>

                        {/* Section 3: Which features matter most */}
                        <div id="features-that-matter" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Which features matter most for a small ISO audit team?</h2>

                            {/* Sub 1 */}
                            <h3 style={h3(font)}>Can you plan and run structured ISO audits?</h3>
                            <p style={para(font)}>
                                The software should support the audit process without forcing the team to build everything around the
                                tool.
                            </p>
                            <p style={para(font)}>
                                For an ISO 9001 internal audit, for example, you may need to assess areas such as context, leadership,
                                planning, support, operation, performance evaluation and improvement.
                            </p>
                            <p style={para(font)}>
                                The same principle applies to ISO 14001 environmental management audits and ISO 45001 occupational health
                                and safety audits.
                            </p>
                            <p style={para(font)}>
                                The software should make it easy to keep the audit objective, scope, criteria, questions, evidence and
                                conclusions connected.
                            </p>
                            <p style={para(font)}>
                                The{" "}
                                <a
                                    href="https://www.iso.org/standard/9001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#006644", textDecoration: "underline", fontWeight: 500 }}
                                >
                                    ISO 9001 Quality Management System standard
                                </a>{" "}
                                is a useful example of why that structure matters. Internal auditing is not simply asking questions from
                                a checklist. The auditor is evaluating objective evidence against defined requirements.
                            </p>

                            {/* Sub 2 */}
                            <h3 style={h3(font)}>Can you keep evidence, findings and corrective actions together?</h3>
                            <p style={para(font)}>
                                For a small team, reducing separate records is often more valuable than adding more features.
                            </p>
                            <p style={para(font)}>If I raise a nonconformity, I should be able to understand:</p>

                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "10px",
                                    padding: "1.25rem",
                                    margin: "1rem 0",
                                }}
                            >
                                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#374151", lineHeight: 1.8 }}>
                                    <li>What requirement was being audited</li>
                                    <li>What objective evidence supported the finding</li>
                                    <li>Who owns the corrective action</li>
                                    <li>When the action is due</li>
                                    <li>What specific action was completed</li>
                                    <li>Whether the action was independently verified as effective</li>
                                </ul>
                            </div>

                            <p style={para(font)}>
                                That information should not need to be reconstructed from a spreadsheet, an email chain and three
                                separate folders.
                            </p>
                            <p style={para(font)}>
                                A connected audit record makes follow-up much easier, particularly when the same person is balancing
                                auditing with other quality or HSE responsibilities.
                            </p>

                            {/* Sub 3 */}
                            <h3 style={h3(font)}>Can you see what needs attention without building another report?</h3>
                            <p style={para(font)}>The software should help you answer basic audit questions quickly:</p>

                            <ul style={listStyle(font)}>
                                <li>Which audits are due?</li>
                                <li>Which findings remain open?</li>
                                <li>Which corrective actions are overdue?</li>
                                <li>What has been completed?</li>
                                <li>Are the same issues appearing again?</li>
                            </ul>

                            <p style={para(font)}>For a small business, that visibility can be more useful than a complicated dashboard.</p>
                            <p style={para(font)}>
                                If someone still needs to spend half a day bringing the information together for management, the software
                                is not removing enough work.
                            </p>

                            {/* Sub 4 */}
                            <h3 style={h3(font)}>Can the team start using it without a major implementation project?</h3>
                            <p style={para(font)}>A small audit team should not need a large implementation team to run its first audit.</p>
                            <p style={para(font)}>
                                If two people need weeks of configuration, specialist consultants and several training sessions before
                                they can begin, I would question whether the system fits the organisation.
                            </p>
                            <p style={para(font)}>
                                The starting point should be simple: your standards, sites, users, audit programme and findings.
                            </p>
                            <p style={para(font)}>
                                The software should grow with the organisation rather than require the organisation to become more
                                complicated just to use it.
                            </p>
                        </div>

                        {/* Section 4: Features a small business might not need */}
                        <div id="features-not-needed" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Which features might a small business not need?</h2>
                            <p style={para(font)}>More functionality is not automatically more value.</p>
                            <p style={para(font)}>A smaller ISO audit team may not need:</p>

                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #fee2e2",
                                    borderRadius: "10px",
                                    padding: "1.25rem",
                                    margin: "1rem 0",
                                }}
                            >
                                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#991b1b", lineHeight: 1.8 }}>
                                    {enterpriseModulesNotNeeded.map((mod) => (
                                        <li key={mod}>{mod}</li>
                                    ))}
                                </ul>
                            </div>

                            <p style={para(font)}>Those capabilities may be valuable for organisations that genuinely need them.</p>
                            <p style={para(font)}>
                                But if your objective is to manage ISO 9001, ISO 14001 or ISO 45001 internal audits more effectively,
                                paying for a large enterprise platform may introduce complexity without improving the actual audit process.
                            </p>
                        </div>

                        {/* Section 5: PDCA */}
                        <div id="pdca-continual-improvement" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Does the software support PDCA and continual improvement?</h2>
                            <p style={para(font)}>
                                For ISO management systems, the audit programme should help drive improvement rather than simply produce
                                reports.
                            </p>
                            <p style={para(font)}>That is where PDCA becomes useful.</p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
                                    gap: "0.85rem",
                                    margin: "1.5rem 0",
                                }}
                            >
                                {pdcaStages.map((stage) => (
                                    <div
                                        key={stage.letter}
                                        style={{
                                            backgroundColor: stage.bg,
                                            border: `1px solid ${stage.color}25`,
                                            borderRadius: "10px",
                                            padding: "1.1rem 1rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "inline-block",
                                                fontSize: "1.5rem",
                                                fontWeight: 800,
                                                color: stage.color,
                                                marginBottom: "0.25rem",
                                            }}
                                        >
                                            {stage.letter}
                                        </span>
                                        <h4 style={{ margin: "0 0 0.35rem", fontSize: "1rem", fontWeight: 700, color: stage.color }}>
                                            {stage.title}
                                        </h4>
                                        <p style={{ margin: 0, fontSize: "0.85rem", color: "#374151", lineHeight: 1.55 }}>
                                            {stage.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>
                                A connected{" "}
                                <Link
                                    href="/pdca-cycle-audit-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    PDCA audit workflow
                                </Link>{" "}
                                helps prevent every internal audit becoming an isolated event that disappears into a folder once the report
                                is issued.
                            </p>
                        </div>

                        {/* Section 6: Security and data ownership */}
                        <div id="security-data-ownership" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How important are security and audit-data ownership?</h2>
                            <p style={para(font)}>Small business does not mean low-risk audit data.</p>
                            <p style={para(font)}>
                                An internal ISO audit can contain nonconformities, health and safety concerns, supplier issues,
                                environmental compliance information, process weaknesses and corrective actions.
                            </p>
                            <p style={para(font)}>That information needs appropriate protection.</p>
                            <p style={para(font)}>
                                One of the decisions we made when building iAudit Global was that customer audit data should remain
                                customer data. Our{" "}
                                <Link
                                    href="/audit-management-software-built-by-auditors"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    audit management software built by auditors
                                </Link>{" "}
                                uses structured ISO audit workflows while maintaining a zero-access approach to customer audit
                                information.
                            </p>
                            <p style={para(font)}>
                                For me, data ownership should be part of the buying decision from the beginning, not something discussed
                                after implementation.
                            </p>
                        </div>

                        {/* Section 7: How should a small business choose */}
                        <div id="how-to-choose" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How should a small business choose internal audit software?</h2>
                            <p style={para(font)}>Test the essential workflow before comparing long feature lists.</p>
                            <p style={para(font)}>Take one real audit and see how the platform handles it.</p>

                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #d1fae5",
                                    borderRadius: "10px",
                                    padding: "1.25rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <p style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "#065f46", lineHeight: 1.7 }}>
                                    Create the audit → Add evidence → Raise a nonconformity → Assign a corrective action → Upload closure
                                    evidence → Verify effectiveness → Produce the report.
                                </p>
                            </div>

                            <p style={para(font)}>
                                That process will tell you much more than a product demonstration built around the vendor&apos;s best-looking
                                features.
                            </p>
                            <p style={para(font)}>
                                Workflow fit, usability, security, implementation and cost are the areas I would prioritise when{" "}
                                <Link
                                    href="/blog/how-to-choose-internal-audit-management-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    choosing internal audit management software
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Section 8: When is dedicated software worth it */}
                        <div id="when-worth-it" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>When is dedicated software worth it?</h2>
                            <p style={para(font)}>I would make the decision based on audit complexity, not company size.</p>
                            <p style={para(font)}>
                                Dedicated software becomes worth considering when you are managing several ISO standards, multiple
                                locations, increasing audit volume, scattered evidence, overdue corrective actions or time-consuming
                                manual reporting.
                            </p>
                            <p style={para(font)}>A 20-person organisation can have a complicated audit programme.</p>
                            <p style={para(font)}>A much larger business can have a relatively simple one.</p>
                            <p style={{ ...para(font), fontWeight: 600, color: "#111827" }}>Company size alone tells you very little.</p>
                        </div>

                        {/* Section 9: Try it with one real audit (CTA) */}
                        <div id="try-with-real-audit" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Try it with one real audit</h2>
                            <p style={para(font)}>
                                The easiest way to decide whether internal audit software gives a small business enough value is to use it
                                with a real audit.
                            </p>
                            <p style={para(font)}>
                                iAudit Global is built around ISO 9001, ISO 14001 and ISO 45001 auditing, with structured planning,
                                evidence capture, findings, corrective actions, reporting and PDCA built into the workflow.
                            </p>

                            {/* Card */}
                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #cce3d8",
                                    borderRadius: "1rem",
                                    padding: isMobile ? "1.5rem 1.25rem" : "2rem 2.25rem",
                                    margin: "2rem 0",
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
                                    Start testing iAudit Global today
                                </h3>
                                <p style={{ margin: "0 0 1.25rem", fontSize: "0.98rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    You can{" "}
                                    <Link href="/pricing" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        start a 14-day free trial of iAudit Global
                                    </Link>{" "}
                                    and test the platform using your own audit process.
                                </p>
                                <p style={{ margin: "0 0 1.5rem", fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    No credit card is required. The goal is not to give a small business more software. It is to give the
                                    audit team better control without adding unnecessary complexity.
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
                                        Book a Consultation
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
        fontSize: "1.22rem",
        fontWeight: 600,
        color: "#111827",
        lineHeight: 1.35,
        margin: "1.75rem 0 0.75rem",
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

