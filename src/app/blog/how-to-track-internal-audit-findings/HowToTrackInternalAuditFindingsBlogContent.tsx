"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog/how-to-track-internal-audit-findings.jpg";

const tocItems = [
    { id: "intro", label: "Introduction & TL;DR" },
    { id: "what-to-record", label: "What to Record When a Finding Is Raised" },
    { id: "next-owner", label: "Who Owns the Next Step" },
    { id: "follow-up", label: "Follow Up Without Chasing Everyone" },
    { id: "overdue", label: "When an Audit Action Is Overdue" },
    { id: "evidence", label: "Evidence Enough to Close" },
    { id: "numbers", label: "Numbers That Show Follow-Ups Slipping" },
    { id: "iaudit", label: "Track Findings with iAudit Global" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const statusRows = [
    {
        status: "Awaiting response",
        owner: "Purchasing manager",
        waiting: "The extent of the issue, the cause and the proposed action.",
    },
    {
        status: "Action agreed",
        owner: "Systems administrator",
        waiting: "An approval check that blocks the first order, plus a test result showing it works.",
    },
    {
        status: "Awaiting effectiveness review",
        owner: "Assigned auditor",
        waiting: "A review of live orders placed after the change.",
    },
    {
        status: "Closed",
        owner: "No action outstanding",
        waiting: "The record shows what the reviewer examined, their conclusion and the closure date.",
    },
];

const followUpQuestions = [
    {
        num: "1",
        title: "What was due?",
        text: "An investigation result, a system change and a review of live orders are different commitments. I check the agreed action and date.",
    },
    {
        num: "2",
        title: "What would move it forward?",
        text: "“Please send the approval date and first-order date for each supplier added since 10 June” is a request the purchasing manager can answer. “Any update?” usually leads to another email.",
    },
    {
        num: "3",
        title: "What happens after this review?",
        text: "I record what I received, what I decided, who acts next and when I will check again.",
    },
];

const measureRows = [
    {
        measure: "Open findings with no named next owner or follow-up date",
        decision: "Which findings could sit untouched after today’s review?",
    },
    {
        measure: "Overdue actions, grouped by age and priority",
        decision: "Which delay needs a management decision or an interim control?",
    },
    {
        measure: "Completed actions awaiting verification, including the age of the oldest",
        decision: "Does the team need time to implement changes or time to check work already done?",
    },
];

const faqItems = [
    {
        question: "1. What should an internal audit findings register include?",
        answer: (
            <span>
                I give each finding a reference and link it to the requirement, the evidence and the gap identified in the ISO internal audit report. For follow-up, I record the agreed action, who acts next, the due date and the evidence needed for closure.
            </span>
        ),
    },
    {
        question: "2. Who is responsible for following up on an audit finding?",
        answer: (
            <span>
                The process owner can remain accountable for resolving the finding while someone else handles the next step. For example, purchasing may own a supplier approval finding, IT may implement the change, and an auditor may verify it. I update the register at each handover so reminders reach the right person.
            </span>
        ),
    },
    {
        question: "3. How often should you review open audit findings?",
        answer: (
            <span>
                I set the review date according to the risk and the evidence I expect to see. A significant issue may need attention straight away. If a process runs monthly, I schedule the effectiveness check after its next run and consider whether an interim check is needed.
            </span>
        ),
    },
    {
        question: "4. Can you track internal audit findings in Excel?",
        answer: (
            <span>
                Yes. A shared spreadsheet can work if each finding has a unique reference, a named owner, a next review date and a link to its evidence. My test is simple: can a colleague open the register, identify what is due today and follow it up without searching my inbox?
            </span>
        ),
    },
    {
        question: "5. What should you do when a corrective action is overdue?",
        answer: (
            <span>
                First, establish what has slipped. The action owner may still owe the work, or the auditor may owe the review. If an extension is justified, keep the original deadline and record the reason, the revised date and who agreed it. Escalate any unresolved risk or decision that needs management attention.
            </span>
        ),
    },
    {
        question: "6. What evidence is enough to close an ISO internal audit finding?",
        answer: (
            <span>
                I look for evidence that the change was implemented and that it addressed the original problem. For a supplier approval issue, a system test shows the new check operates. Comparing approval dates with subsequent purchase orders shows whether it works in practice. That distinction matters when verifying a corrective action before closure.
            </span>
        ),
    },
    {
        question: "7. How does iAudit Global help teams track audit findings?",
        answer: (
            <span>
                iAudit Global keeps findings, actions and supporting evidence together in a shared audit history. Its nonconformity register, evidence capture and reporting features help teams follow an issue from the original audit through to review. You can{" "}
                <Link href="/pricing" style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}>
                    compare plans and start a 14-day free trial
                </Link>{" "}
                with no credit card required.
            </span>
        ),
    },
];

export default function HowToTrackInternalAuditFindingsBlogContent() {
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
                        alt="Auditors reviewing an ISO internal audit findings register and follow-up tracker"
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
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                November 18, 2026
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
                            How to Track Internal Audit Findings Without Losing Follow-Ups
                        </h1>

                        <div id="intro" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)" }}>
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
                                </div>
                                <p style={{ margin: 0, fontSize: "0.98rem", color: "#1f2937", lineHeight: 1.75 }}>
                                    For each open audit finding, I record who acts next, what they need to do and when I’ll follow up. I track implementation and effectiveness separately, keep the original deadline visible when dates change, and close the finding once the evidence shows the corrective action worked in the live process.
                                </p>
                            </div>

                            <p style={para(font)}>
                                When I open an ISO internal audit findings register and see “in progress”, my first question is usually, “Who am I waiting for?” The purchasing manager may still be investigating what went wrong. Or the work may already be complete and the team may be waiting for me to check it. Both findings can look identical in a spreadsheet, yet only one needs a reminder from me.
                            </p>
                            <p style={para(font)}>
                                For every open finding, I want to see what happens next, who is responsible and when someone will follow up. Those three details are the basis of a tracking process that works between audits. Here’s how I would apply it to a finding from an ISO 9001 purchasing audit.
                            </p>
                        </div>

                        <div id="what-to-record" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What should you record when an audit finding is raised?</h2>
                            <p style={para(font)}>
                                Suppose a company’s purchasing procedure requires a new supplier to be approved before its first order. During an internal audit, I sample eight new suppliers. For two of them, the first purchase order was issued before approval.
                            </p>
                            <p style={para(font)}>
                                “Supplier approval needs improvement” gives the purchasing manager very little to investigate. A useful finding identifies the procedure, the two order references and the dates that show the gap. That detail belongs in the{" "}
                                <Link href="/blog/how-to-write-an-iso-internal-audit-report-that-matters" style={linkStyle}>
                                    ISO internal audit report
                                </Link>
                                . I would then give the finding a reference in the register and link back to the evidence so the team can follow it without copying the whole report.
                            </p>
                            <p style={para(font)}>
                                At this stage, the purchasing manager may need to check the two orders, establish whether other suppliers were affected and investigate how the orders went through. I would record the manager’s name and agree a date for that response. We can set an implementation deadline once we know what needs to change.
                            </p>
                        </div>

                        <div id="next-owner" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Who owns the next step, and when is it due?</h2>
                            <p style={para(font)}>
                                The purchasing manager can remain accountable for resolving the finding even when someone else needs to act. I find it helpful to make that handover visible in the register.
                            </p>
                            <p style={para(font)}>
                                Suppose the investigation establishes that the purchasing system allows first orders while supplier approval is pending. Here’s how I would track the response.
                            </p>

                            <div
                                style={{
                                    margin: "1.5rem 0 1.75rem",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    overflow: "hidden",
                                    background: "#ffffff",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                }}
                            >
                                {isMobile ? (
                                    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        {statusRows.map((row) => (
                                            <div
                                                key={row.status}
                                                style={{
                                                    background: "#fdfcfb",
                                                    borderRadius: "0.625rem",
                                                    padding: "1rem",
                                                    border: "1px solid #eeebe6",
                                                }}
                                            >
                                                <p style={{ margin: "0 0 0.65rem", fontSize: "0.95rem", color: "#00472f", fontWeight: 700, lineHeight: 1.45 }}>
                                                    {row.status}
                                                </p>
                                                <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#006644" }}>
                                                    Who acts next
                                                </p>
                                                <p style={{ margin: "0 0 0.65rem", fontSize: "0.92rem", color: "#111827", fontWeight: 600, lineHeight: 1.5 }}>
                                                    {row.owner}
                                                </p>
                                                <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6B7280" }}>
                                                    What are we waiting for
                                                </p>
                                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.55 }}>
                                                    {row.waiting}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ overflowX: "auto" }}>
                                        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: font, fontSize: "0.92rem" }}>
                                            <thead>
                                                <tr style={{ background: "#f5f3f0" }}>
                                                    {["Current status", "Who acts next?", "What are we waiting for?"].map((heading) => (
                                                        <th
                                                            key={heading}
                                                            style={{
                                                                textAlign: "left",
                                                                padding: "0.95rem 1.1rem",
                                                                borderBottom: "2px solid #e8e4df",
                                                                color: "#111827",
                                                                fontWeight: 700,
                                                                fontSize: "0.78rem",
                                                                letterSpacing: "0.04em",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            {heading}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {statusRows.map((row, idx) => (
                                                    <tr
                                                        key={row.status}
                                                        style={{
                                                            borderBottom: idx === statusRows.length - 1 ? "none" : "1px solid #f0ede8",
                                                            background: idx % 2 === 1 ? "#faf8f5" : "#ffffff",
                                                        }}
                                                    >
                                                        <td style={{ padding: "1rem 1.1rem", fontWeight: 700, color: "#00472f", verticalAlign: "top", lineHeight: 1.55 }}>
                                                            {row.status}
                                                        </td>
                                                        <td style={{ padding: "1rem 1.1rem", fontWeight: 600, color: "#111827", verticalAlign: "top", lineHeight: 1.55 }}>
                                                            {row.owner}
                                                        </td>
                                                        <td style={{ padding: "1rem 1.1rem", color: "#4B5563", verticalAlign: "top", lineHeight: 1.55 }}>
                                                            {row.waiting}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            <p style={para(font)}>
                                I keep the action due date separate from the effectiveness review date. The administrator might install the approval check on 10 June. I might schedule my review for 30 June to allow time for new suppliers to go through the process. Recording both dates keeps the finding visible after the administrator has finished.
                            </p>
                            <p style={para(font)}>
                                It also helps to agree in advance what the corrective action needs to achieve before closure. In this case, we want evidence that new suppliers receive approval before their first live order.
                            </p>
                        </div>

                        <div id="follow-up" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>How do you follow up without chasing everyone?</h2>
                            <p style={para(font)}>
                                When I review open findings, I start with significant issues, missed commitments and reviews that are due. Then I check the latest evidence before contacting anyone. An owner who uploaded a test result yesterday may already have done everything I asked. The next action could be mine.
                            </p>
                            <p style={para(font)}>For each finding that needs attention, I work through three questions:</p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", margin: "0.5rem 0 1.5rem" }}>
                                {followUpQuestions.map((item) => (
                                    <div
                                        key={item.num}
                                        style={{
                                            background: "#ffffff",
                                            border: "1px solid #e8e4df",
                                            borderRadius: "0.75rem",
                                            padding: "1.1rem 1.2rem",
                                            display: "flex",
                                            gap: "0.9rem",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <span
                                            style={{
                                                flexShrink: 0,
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "50%",
                                                background: "#f0f7f3",
                                                color: "#006644",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 700,
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {item.num}
                                        </span>
                                        <div>
                                            <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem", fontWeight: 700, color: "#111827", fontFamily: font }}>
                                                {item.title}
                                            </h3>
                                            <p style={{ margin: 0, fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.7 }}>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p style={para(font)}>
                                That last step makes a shared register useful. If a colleague covers my next review, they should be able to pick up the finding without searching my inbox.
                            </p>
                        </div>

                        <div id="overdue" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What should you do when an audit action is overdue?</h2>
                            <p style={para(font)}>
                                First, identify which commitment has slipped. “Awaiting effectiveness review, 12 days overdue” tells me whom to contact. A red cell marked overdue leaves me working that out for myself.
                            </p>
                            <p style={para(font)}>
                                I’d then ask what caused the delay and what risk remains while the action is outstanding. If the purchasing system change is delayed, for example, the purchasing manager may need to check new supplier approvals manually until it goes live. If the work is complete and the auditor has missed the review, sending another reminder to purchasing achieves very little.
                            </p>
                            <p style={para(font)}>
                                Where an extension is justified, keep the original due date and record the reason, the revised date and who agreed it. If the same action keeps moving, establish what decision is needed. A manager can act on “the administrator needs an approved release slot”. Another email asking everyone to prioritise the finding is unlikely to resolve it.
                            </p>
                        </div>

                        <div id="evidence" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>What evidence is enough to close an audit finding?</h2>
                            <p style={para(font)}>
                                In the purchasing example, the configuration record and test result show that the administrator installed the approval check. To judge its effectiveness, I would examine what happened to subsequent orders. Did supplier approval predate the first order in the live purchasing records? Did any order bypass the check?
                            </p>
                            <p style={para(font)}>
                                This distinction is central to the ISO 9001 Auditing Practices Group’s guidance on reviewing and closing nonconformities. The reviewer needs objective evidence to assess both implementation and effectiveness. You can read that guidance in{" "}
                                <a
                                    href="https://committee.iso.org/files/live/sites/tc176/files/PDF%20APG%20New%20Disclaimer%2012-2023/ISO-TC%20176-TF_APG-ReviewNonconformity.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                >
                                    Nonconformity – review and closing
                                </a>
                                .
                            </p>
                            <p style={para(font)}>
                                A public-sector follow-up audit illustrates why the closure decision deserves scrutiny. The Australian National Audit Office examined 16 recommendations at Australia’s Department of Industry, Science and Resources. It assessed 12 as implemented, three as largely implemented and one as partly implemented. The department had already closed that last recommendation while work was still under way.{" "}
                                <a
                                    href="https://www.anao.gov.au/work/performance-audit/implementation-of-auditor-general-recommendations-department-of-industry-science-and-resources"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                >
                                    Australian National Audit Office follow-up findings
                                </a>
                                .
                            </p>
                            <p style={para(font)}>
                                Back in our purchasing audit, suppose only one new supplier has been added by 30 June. I would record what that transaction shows, consider whether it gives me enough evidence and set a further review date if needed. If I find an order that bypassed the check, I would record the failed verification and return it to the purchasing manager. Either way, the next person opening the register can see how I reached my decision.
                            </p>
                            <p style={para(font)}>
                                Closing a finding is a separate decision from completing the task. The steps from a finding through verified closure are covered in{" "}
                                <Link href="/blog/corrective-actions-after-an-internal-audit-findings-to-closure" style={linkStyle}>
                                    corrective actions after an internal audit
                                </Link>
                                .
                            </p>
                        </div>

                        <div id="numbers" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Which numbers tell you that follow-ups are slipping?</h2>
                            <p style={para(font)}>For a small ISO audit team, I would start with three figures you can get from a shared register.</p>

                            <div
                                style={{
                                    margin: "1.5rem 0 1.75rem",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    overflow: "hidden",
                                    background: "#ffffff",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                }}
                            >
                                {isMobile ? (
                                    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        {measureRows.map((row) => (
                                            <div
                                                key={row.measure}
                                                style={{
                                                    background: "#fdfcfb",
                                                    borderRadius: "0.625rem",
                                                    padding: "1rem",
                                                    border: "1px solid #eeebe6",
                                                }}
                                            >
                                                <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#006644" }}>
                                                    Measure
                                                </p>
                                                <p style={{ margin: "0 0 0.75rem", fontSize: "0.95rem", color: "#111827", fontWeight: 600, lineHeight: 1.5 }}>
                                                    {row.measure}
                                                </p>
                                                <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6B7280" }}>
                                                    What it helps you decide
                                                </p>
                                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.55 }}>
                                                    {row.decision}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ overflowX: "auto" }}>
                                        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: font, fontSize: "0.92rem" }}>
                                            <thead>
                                                <tr style={{ background: "#f5f3f0" }}>
                                                    {["Measure", "What it helps you decide"].map((heading) => (
                                                        <th
                                                            key={heading}
                                                            style={{
                                                                textAlign: "left",
                                                                padding: "0.95rem 1.25rem",
                                                                borderBottom: "2px solid #e8e4df",
                                                                color: "#111827",
                                                                fontWeight: 700,
                                                                fontSize: "0.78rem",
                                                                letterSpacing: "0.04em",
                                                                textTransform: "uppercase",
                                                                width: "50%",
                                                            }}
                                                        >
                                                            {heading}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {measureRows.map((row, idx) => (
                                                    <tr
                                                        key={row.measure}
                                                        style={{
                                                            borderBottom: idx === measureRows.length - 1 ? "none" : "1px solid #f0ede8",
                                                            background: idx % 2 === 1 ? "#faf8f5" : "#ffffff",
                                                        }}
                                                    >
                                                        <td style={{ padding: "1rem 1.25rem", fontWeight: 600, color: "#00472f", verticalAlign: "top", lineHeight: 1.6 }}>
                                                            {row.measure}
                                                        </td>
                                                        <td style={{ padding: "1rem 1.25rem", color: "#4B5563", verticalAlign: "top", lineHeight: 1.6 }}>
                                                            {row.decision}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            <p style={para(font)}>
                                The third figure is particularly useful. If owners complete their actions on time but verification dates keep slipping, I would protect time in the audit programme for follow-up before asking process owners for more updates.
                            </p>
                        </div>

                        <div id="iaudit" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.75rem" }}>
                            <h2 style={h2(font)}>Track your next ISO audit finding with iAudit Global</h2>
                            <p style={para(font)}>
                                Keeping findings, actions and evidence together was one of the reasons we built iAudit Global. When I return to an audit several weeks later, I want to see the original finding, the response and the evidence behind the closure decision in one shared audit history.
                            </p>
                            <p style={para(font)}>
                                iAudit Global’s nonconformity register helps teams track findings, audit evidence capture keeps supporting records with the audit, and dashboards and downloadable reports help managers review progress. Feature availability varies by plan.
                            </p>
                            <p style={para(font)}>
                                I’d start with one open finding from your last ISO audit. Give it an owner and a review date, attach the evidence you already have and see how easily a colleague can pick up the next step. You can compare iAudit Global plans and start your 14-day free trial. No credit card is required.
                            </p>

                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #cce3d8",
                                    borderRadius: "1rem",
                                    padding: isMobile ? "1.5rem 1.25rem" : "2rem 2.25rem",
                                    margin: "2.25rem 0 0",
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
                                        fontFamily: font,
                                    }}
                                >
                                    Put one open finding into a shared record
                                </h3>
                                <p style={{ margin: "0 0 1.5rem", fontSize: "0.98rem", color: "#4B5563", lineHeight: 1.75 }}>
                                    Start a 14-day free trial of iAudit Global and follow a finding from the original evidence through to the next owner, the review date and the closure decision. No credit card is required.
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
                                        href="/pricing"
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
                                        Compare Plans
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

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
                                    <Image src="/images/mathew-chiweda.webp" alt="Mathew Chiweda" fill sizes="72px" style={{ objectFit: "cover" }} />
                                </div>
                                <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>
                                    <Link href="/author/mathew-chiweda" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
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
                                    }}
                                >
                                    Free consultation
                                </Link>
                            </div>
                        </aside>
                    )}
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

const linkStyle: React.CSSProperties = {
    color: "#006644",
    fontWeight: 600,
    textDecoration: "underline",
};

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
