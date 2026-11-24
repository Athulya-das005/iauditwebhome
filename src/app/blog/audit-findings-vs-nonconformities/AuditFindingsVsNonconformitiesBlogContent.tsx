"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog/audit-findings-vs-nonconformities.jpg";

const tocItems = [
    { id: "intro", label: "Introduction & TL;DR" },
    { id: "how-to-decide", label: "Deciding If a Finding Is a Nonconformity" },
    { id: "missing-approval-record", label: "Does a Missing Record Always Mean Nonconformity?" },
    { id: "ofi-and-observations", label: "Observations & Opportunities for Improvement" },
    { id: "grading-nonconformities", label: "Do Two Exceptions Make It Major?" },
    { id: "writing-the-finding", label: "Writing the Finding in the Report" },
    { id: "after-nonconformity-confirmed", label: "What Happens After Confirmation?" },
    { id: "manage-findings-iaudit", label: "Manage Findings with iAudit Global" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const scenarioRows = [
    {
        established:
            "The procedure permits electronic approval. The system history confirms both suppliers were approved before their first orders.",
        reported:
            "Conformity with the approval-timing requirement for the two transactions examined.",
        status: "Conformity",
        statusColor: "#006644",
        statusBg: "#f0fdf4",
        statusBorder: "#bbf7d0",
    },
    {
        established:
            "Both approvals happened on time. The procedure also requires an approval reference on each order, and both references are missing.",
        reported:
            "A recordkeeping nonconformity. I can identify exactly which required information was missing.",
        status: "Recordkeeping NC",
        statusColor: "#92400e",
        statusBg: "#fef3c7",
        statusBorder: "#fde68a",
    },
    {
        established:
            "The procedure requires prior approval. The approval history confirms both orders were issued before authorisation, and no exception applied.",
        reported:
            "A nonconformity in the purchasing process. The purchasing team placed two orders before the required approval.",
        status: "Process NC",
        statusColor: "#b91c1c",
        statusBg: "#fef2f2",
        statusBorder: "#fecaca",
    },
    {
        established:
            "The procedure permits a second approval route, and I have yet to examine its records.",
        reported:
            "An open audit question. I need to check that source before drawing a conclusion about approval timing.",
        status: "Open Question",
        statusColor: "#1e40af",
        statusBg: "#eff6ff",
        statusBorder: "#bfdbfe",
    },
];

const decisionQuestions = [
    {
        num: "1",
        title: "What was required?",
        text: "I identify the specific obligation that applied when the work took place. In a purchasing audit, the company’s own procedure may give me a more precise requirement than a broad reference to ISO 9001.",
    },
    {
        num: "2",
        title: "What does the evidence establish?",
        text: "I check the purchase orders, supplier approval history and any authorised exceptions. Dates and transaction references help the process owner verify what I found.",
    },
    {
        num: "3",
        title: "Where is the gap?",
        text: "I write a sentence explaining how the evidence shows the requirement was missed. If I cannot write that sentence without making an assumption, I have more audit work to do.",
    },
];

const faqItems = [
    {
        question: "1. What is the difference between an audit finding and a nonconformity?",
        answer: (
            <span>
                An audit finding is the result of comparing evidence with audit criteria. It can show that a process met
                a requirement or that it fell short. I record a nonconformity when I can identify the applicable
                requirement and show how the evidence establishes that it was missed.
            </span>
        ),
    },
    {
        question: "2. Can a missing record be an ISO audit nonconformity?",
        answer: (
            <span>
                Yes, if an applicable requirement says the organisation must retain that record and the evidence confirms
                it is missing. The wording matters. A missing approval reference can establish a recordkeeping failure. To
                conclude that an order was placed before approval, I would also check the approval history against the
                order date.
            </span>
        ),
    },
    {
        question: "3. When should I record an opportunity for improvement?",
        answer: (
            <span>
                I record an opportunity for improvement when I can explain how a process that meets its requirements
                could work better. For example, linking purchase orders to existing approvals could save staff time. If the
                purchasing procedure already requires that link and it is missing, I would document the unmet
                requirement.
            </span>
        ),
    },
    {
        question: "4. Is an audit observation the same as a minor nonconformity?",
        answer: (
            <span>
                No. An observation may describe something the auditor noticed, or it may be a reporting category defined
                by the organisation. A minor nonconformity means the auditor has established that a requirement was
                missed and has graded the finding under the applicable rules. I check the audit programme’s definitions
                before using either label.
            </span>
        ),
    },
    {
        question: "5. Do repeated findings automatically become a major nonconformity?",
        answer: (
            <span>
                The number of exceptions alone cannot determine the grade. Two orders released before supplier approval
                may point to a wider control failure. I would check how the orders went through, whether the same weakness
                exists elsewhere and how it affects the process before applying the audit programme’s grading criteria.
            </span>
        ),
    },
    {
        question: "6. What should I include when writing a nonconformity?",
        answer: (
            <span>
                I include the specific requirement, the evidence I checked and a clear statement of the gap. Dates,
                transaction references and sample details help the process owner locate the issue. Those details also make
                it easier to{" "}
                <Link
                    href="/blog/how-to-write-an-iso-internal-audit-report-that-matters"
                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                >
                    write an ISO internal audit report the process owner can act on
                </Link>
                .
            </span>
        ),
    },
    {
        question: "7. Do I need to know the root cause before raising a nonconformity?",
        answer: (
            <span>
                No. If the records establish that two orders preceded mandatory supplier approval, I can report that
                finding. The process owner can then investigate why it happened, check whether other orders were affected
                and use the results to{" "}
                <Link
                    href="/blog/corrective-actions-after-an-internal-audit-findings-to-closure"
                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                >
                    agree a corrective action and verify its effectiveness
                </Link>
                .
            </span>
        ),
    },
];

export default function AuditFindingsVsNonconformitiesBlogContent() {
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
                        alt="Audit Findings vs Nonconformities: What Is the Difference?"
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
                            Internal Auditing
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
                                November 24, 2026
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
                            Audit Findings vs Nonconformities: What Is the Difference?
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
                                    An audit finding records what the evidence shows when I check it against a requirement. I raise a
                                    nonconformity when the evidence shows the requirement was missed. A blank approval field, for example,
                                    may reveal a missing reference. Establishing whether approval happened on time means checking the
                                    underlying transaction history.
                                </p>
                            </div>

                            <p style={para(font)}>
                                An audit finding is what I establish when I compare audit evidence with the requirements I’m auditing
                                against. A nonconformity is a finding that shows a requirement was missed. An internal audit can produce
                                findings even when every requirement I examine has been met. That distinction comes from the{" "}
                                <a
                                    href="https://www.iso.org/standard/19011"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#006644", textDecoration: "underline", fontWeight: 500 }}
                                >
                                    ISO 19011 guidance on auditing management systems
                                </a>
                                .
                            </p>
                            <p style={para(font)}>
                                Suppose I’m conducting an ISO 9001 internal audit and find two purchase orders with blank supplier
                                approval fields. Can I raise a nonconformity? First, I want to know what the purchasing procedure requires.
                                Does approval have to appear on the order itself? Can it be recorded electronically? And when were the
                                suppliers approved?
                            </p>
                            <p style={para(font)}>
                                Those questions matter because a missing reference and an order placed without approval are different
                                problems. The purchasing manager needs to know which one to investigate.
                            </p>
                        </div>

                        {/* Section: How do I decide whether an audit finding is a nonconformity? */}
                        <div id="how-to-decide" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How do I decide whether an audit finding is a nonconformity?</h2>
                            <p style={para(font)}>
                                Before raising a nonconformity, I want to be able to answer three questions:
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "1.25rem 0 1.5rem" }}>
                                {decisionQuestions.map((q) => (
                                    <div
                                        key={q.num}
                                        style={{
                                            backgroundColor: "#ffffff",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "12px",
                                            padding: "1.25rem 1.35rem",
                                            display: "flex",
                                            gap: "1rem",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "50%",
                                                backgroundColor: "#e8f5ef",
                                                color: "#006644",
                                                fontWeight: 700,
                                                fontSize: "0.85rem",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {q.num}
                                        </span>
                                        <div>
                                            <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem", fontWeight: 700, color: "#111827" }}>
                                                {q.title}
                                            </h3>
                                            <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
                                                {q.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>
                                These are the three elements described in the{" "}
                                <a
                                    href="https://www.iso.org/files/live/sites/tc176sc2/files/documents/ISO%209001%20Auditing%20Practices%20Group%20docs/Auditing%20General/APG-DocumentNonconformity2015.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#006644", textDecoration: "underline", fontWeight: 500 }}
                                >
                                    ISO 9001 Auditing Practices Group’s guidance on documenting a nonconformity
                                </a>
                                .
                            </p>
                        </div>

                        {/* Section: Does a missing approval record always mean a nonconformity? */}
                        <div id="missing-approval-record" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Does a missing approval record always mean a nonconformity?</h2>
                            <p style={para(font)}>
                                A missing required record can establish a recordkeeping nonconformity. Whether the approval itself took
                                place is a separate question. Here’s how I would assess the same two blank fields under four different
                                circumstances:
                            </p>

                            {/* Comparison Table */}
                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "14px",
                                    border: "1px solid #e5e7eb",
                                    overflowX: "auto",
                                    margin: "1.5rem 0",
                                    boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                                }}
                            >
                                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "600px" }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#0d1117", color: "#ffffff" }}>
                                            <th style={{ padding: "0.9rem 1.1rem", fontSize: "0.85rem", fontWeight: 600, width: "50%" }}>
                                                What I establish during the audit
                                            </th>
                                            <th style={{ padding: "0.9rem 1.1rem", fontSize: "0.85rem", fontWeight: 600, width: "35%" }}>
                                                What I can report
                                            </th>
                                            <th style={{ padding: "0.9rem 1.1rem", fontSize: "0.85rem", fontWeight: 600, width: "15%" }}>
                                                Classification
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scenarioRows.map((row, idx) => (
                                            <tr
                                                key={idx}
                                                style={{
                                                    borderTop: "1px solid #e5e7eb",
                                                    backgroundColor: idx % 2 === 1 ? "#faf8f5" : "#ffffff",
                                                }}
                                            >
                                                <td style={{ padding: "1rem 1.1rem", fontSize: "0.92rem", color: "#1f2937", lineHeight: 1.65 }}>
                                                    {row.established}
                                                </td>
                                                <td style={{ padding: "1rem 1.1rem", fontSize: "0.92rem", color: "#374151", lineHeight: 1.65 }}>
                                                    {row.reported}
                                                </td>
                                                <td style={{ padding: "1rem 1.1rem", verticalAlign: "top" }}>
                                                    <span
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "0.75rem",
                                                            fontWeight: 700,
                                                            color: row.statusColor,
                                                            backgroundColor: row.statusBg,
                                                            border: `1px solid ${row.statusBorder}`,
                                                            padding: "3px 8px",
                                                            borderRadius: "999px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        {row.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p style={para(font)}>
                                If I tell the purchasing manager that two suppliers were unapproved when the evidence only establishes that
                                two references were missing, they could spend the afternoon investigating a control that worked. A
                                precise finding directs their attention to the failure I can demonstrate.
                            </p>
                        </div>

                        {/* Section: Where do observations and opportunities for improvement fit? */}
                        <div id="ofi-and-observations" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Where do observations and opportunities for improvement fit?</h2>
                            <p style={para(font)}>
                                An opportunity for improvement, often shortened to OFI, can arise even where the process meets its
                                requirements. Suppose both suppliers were approved on time and the records met the company’s access
                                requirements. During the audit, staff had to open three systems to match each order with its approval.
                                Linking those records could save time. I can explain the benefit and leave the team to consider the
                                suggestion.
                            </p>
                            <p style={para(font)}>
                                Now change one detail. The procedure already requires a direct link, and neither order contains one. I
                                have evidence of an unmet requirement. Describing it as an OFI would leave the purchasing manager with the
                                impression that adding the links was optional. The Auditing Practices Group cautions against using a softer
                                reporting label when the evidence supports a nonconformity.
                            </p>
                            <p style={para(font)}>
                                <strong>Observation</strong> needs similar care. If your internal audit programme uses it as a formal
                                category, define what it means and what response the recipient should make. In my own notes, “two approval
                                fields were blank” is simply something I observed. Its significance depends on what I establish next.
                            </p>
                        </div>

                        {/* Section: Do two exceptions make it a major nonconformity? */}
                        <div id="grading-nonconformities" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Do two exceptions make it a major nonconformity?</h2>
                            <p style={para(font)}>
                                Suppose I examined eight new suppliers and confirmed that two received orders before approval. I can
                                report two exceptions in the eight cases examined. That figure alone tells me too little to grade the
                                finding.
                            </p>
                            <p style={para(font)}>
                                I would look at how the orders got through. Was the approval control absent across the purchasing system?
                                Did the issue affect one route, site or product group? Could other suppliers receive orders in the same way?
                                Those answers help me assess the extent and significance of the failure.
                            </p>
                            <p style={para(font)}>
                                For management-system certification, the distinction between major and minor nonconformities considers
                                the effect on the system’s ability to achieve its intended results. Several related issues can provide
                                evidence of a wider failure. For an internal audit, I would apply the grading rules adopted for that audit
                                programme. The underlying certification terminology is explained in the{" "}
                                <a
                                    href="https://www.iasonline.org/wp-content/uploads/2021/02/17021-1-2015-Section-3-1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#006644", textDecoration: "underline", fontWeight: 500 }}
                                >
                                    International Accreditation Service guidance on major and minor nonconformities
                                </a>
                                .
                            </p>
                        </div>

                        {/* Section: How should I write the finding in the audit report? */}
                        <div id="writing-the-finding" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How should I write the finding in the audit report?</h2>
                            <p style={para(font)}>
                                “Supplier approval needs improvement” gives the purchasing manager very little to act on. Once I have
                                verified the approval history, I can write a finding like this:
                            </p>

                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #d1fae5",
                                    borderLeft: "4px solid #006644",
                                    borderRadius: "8px",
                                    padding: "1.25rem 1.5rem",
                                    margin: "1.25rem 0",
                                }}
                            >
                                <p style={{ margin: "0 0 0.5rem", fontSize: "0.78rem", fontWeight: 700, color: "#006644", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                                    Example Nonconformity Statement
                                </p>
                                <p style={{ margin: 0, fontSize: "0.98rem", color: "#111827", lineHeight: 1.75, fontStyle: "italic" }}>
                                    &ldquo;Purchasing procedure P-04 requires approval before a supplier’s first order. The first orders
                                    for suppliers A and B were issued on 4 and 7 May respectively. The approval history confirms that
                                    the suppliers were authorised on 6 and 9 May. In both cases, purchasing issued the first order
                                    before supplier approval.&rdquo;
                                </p>
                            </div>

                            <p style={para(font)}>
                                The reader can identify the requirement, locate the transactions and check my conclusion. I would leave the
                                cause open. At this point, I have evidence that the orders went through early. Whether that happened because
                                of a system setting, an unclear responsibility or an exception handled incorrectly is a question for the
                                investigation.
                            </p>
                            <p style={para(font)}>
                                That is the level of detail I aim for when{" "}
                                <Link
                                    href="/blog/how-to-write-an-iso-internal-audit-report-that-matters"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    writing an ISO internal audit report the process owner can act on
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Section: What happens after a nonconformity is confirmed? */}
                        <div id="after-nonconformity-confirmed" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What happens after a nonconformity is confirmed?</h2>
                            <p style={para(font)}>
                                The purchasing manager can begin by reviewing the two affected orders and checking whether other
                                suppliers were affected. The next question is how the process allowed orders to be placed early. If the
                                investigation identifies a gap in the purchasing system, the team can agree a change and decide what
                                evidence will show it worked.
                            </p>
                            <p style={para(font)}>
                                As the auditor, I want the finding to remain traceable through that handover. I record who owns the next step
                                and when I’ll review the evidence. A later sample of live orders may tell me more about whether the change
                                worked than a screenshot taken on the day it was introduced. That distinction matters when{" "}
                                <Link
                                    href="/blog/corrective-actions-after-an-internal-audit-findings-to-closure"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    verifying corrective action before closing an audit finding
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Section: Manage ISO audit findings with iAudit Global */}
                        <div id="manage-findings-iaudit" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Manage ISO audit findings with iAudit Global</h2>
                            <p style={para(font)}>
                                One reason{" "}
                                <Link href="/about" style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}>
                                    we built iAudit Global
                                </Link>{" "}
                                was to keep the finding, evidence and action history together. If a colleague picks up my purchasing
                                audit six months later, they should be able to see why I raised a nonconformity, what the purchasing team
                                changed and how the reviewer reached the closure decision.
                            </p>
                            <p style={para(font)}>
                                With iAudit Global’s nonconformity register, audit evidence capture and reporting tools, you can follow a
                                finding from the original audit through to review. Try it with a finding from your own programme. You can{" "}
                                <Link href="/pricing" style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}>
                                    compare iAudit Global plans and start your 14-day free trial
                                </Link>
                                . No credit card is required.
                            </p>

                            {/* CTA Card */}
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
                                    Trace findings to verified closure
                                </h3>
                                <p style={{ margin: "0 0 1.25rem", fontSize: "0.98rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    Connect audit criteria, evidence, nonconformities and corrective action tracking in one unified
                                    platform built by ISO auditors.
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
                                        Speak to an Auditor
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

