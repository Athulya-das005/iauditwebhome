"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog/internal-audit-software-vs-spreadsheets.jpg";

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "why-spreadsheets-work", label: "Why Spreadsheets Still Work" },
    { id: "what-changes", label: "Software vs Spreadsheets: What Changes" },
    { id: "real-problem", label: "The Real Problem Isn't the Spreadsheet" },
    { id: "seven-signs", label: "7 Signs You've Outgrown Spreadsheets" },
    { id: "spreadsheets-enough", label: "When Spreadsheets Are Still Enough" },
    { id: "software-worth-considering", label: "When Software Is Worth Considering" },
    { id: "moving-not-complicated", label: "Moving Doesn't Need to Be Complicated" },
    { id: "try-difference", label: "Try the Difference Before Deciding" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const comparisonTable = {
    headers: ["Audit Activity", "Spreadsheets & Separate Files", "Internal Audit Software"],
    rows: [
        [
            "Audit planning",
            "Schedules maintained manually in workbooks",
            "Audit programme and individual audits connected in real time",
        ],
        [
            "Evidence management",
            "Stored in scattered folders, emails or attachments",
            "Evidence linked directly to the relevant audit or finding",
        ],
        [
            "Findings tracking",
            "Entered manually into separate trackers and registers",
            "Findings permanently connected to the audit record and standard",
        ],
        [
            "Corrective actions",
            "Followed up through manual reminders and ad-hoc emails",
            "Owners, deadlines, status updates and proof managed together",
        ],
        [
            "Audit history",
            "Spread across fragmented annual files and local drives",
            "Previous audits, trends and recurring issues remain in one system",
        ],
        [
            "Reporting",
            "Data copied, checked and consolidated manually",
            "Reports generated instantly from structured live audit data",
        ],
        [
            "Multi-site oversight",
            "Separate workbooks often required per department or site",
            "Central dashboard visibility across all locations, sites and teams",
        ],
    ],
};

const sevenSigns = [
    {
        num: "01",
        title: "You regularly ask which file is current",
        desc: "If several versions of the same tracker exist across team drives or email threads, version control has quietly become part of audit management.",
    },
    {
        num: "02",
        title: "Evidence is separate from the audit record",
        desc: "When photographs, documents, test sheets and supporting evidence live in different folders, somebody has to remember how everything connects.",
    },
    {
        num: "03",
        title: "Corrective actions need constant chasing",
        desc: "If action closure depends on individual emails and calendar reminders, it becomes very easy for an overdue action to remain open longer than it should.",
    },
    {
        num: "04",
        title: "Reporting means copying information between files",
        desc: "The same finding should not need to be typed into an audit checklist, copied to a findings tracker, entered into a corrective-action log, and drafted into a final management report.",
    },
    {
        num: "05",
        title: "Different sites maintain different trackers",
        desc: "Multiple sites often mean multiple formats for recording the same information, making organisation-wide oversight and management reviews difficult and slow.",
    },
    {
        num: "06",
        title: "Audit history depends on particular people",
        desc: "If understanding last year's audits depends on knowing who created the folder or where somebody saved a file, the organisation does not really have a reliable audit history.",
    },
    {
        num: "07",
        title: "Simple questions take too long to answer",
        desc: "When a manager, auditor or certification body asks a straightforward question, you should not need to search through multiple files and inboxes to find the answer.",
    },
];

const diagnosticQuestions = [
    "Which findings are overdue right now?",
    "Who owns each open corrective action?",
    "What evidence has been submitted to verify closure?",
    "Has the corrective action been formally verified by an auditor?",
    "Which nonconformities or issues have appeared before in other audits?",
];

const faqItems = [
    {
        question: "Is internal audit software better than spreadsheets?",
        answer: (
            <span>
                Not always. Spreadsheets can work well for smaller audit programmes with limited audits, findings and users.
                Internal audit software becomes more useful when evidence, corrective actions, reporting and audit history
                become difficult to manage across separate files.
            </span>
        ),
    },
    {
        question: "When should a company move from spreadsheets to internal audit software?",
        answer: (
            <span>
                A good time to consider dedicated software is when version control becomes difficult, findings require constant
                chasing, evidence is scattered, several sites use different trackers, or reporting takes too much manual effort.
            </span>
        ),
    },
    {
        question: "Can Excel be used to manage internal audits?",
        answer: (
            <span>
                Yes. Excel can be used to plan audits, record findings, assign actions and track deadlines. The limitation usually
                appears as the audit programme grows and more people, sites, evidence and follow-up activities need to stay connected.
            </span>
        ),
    },
    {
        question: "What are the main benefits of internal audit software?",
        answer: (
            <span>
                Internal audit software can bring audit planning, evidence, findings, corrective actions, deadlines and reporting
                into one structured system. This can reduce manual administration and make it easier to see what is open, overdue or complete.
            </span>
        ),
    },
    {
        question: "Is internal audit software suitable for small businesses?",
        answer: (
            <span>
                Yes, but it depends on the complexity of the audit programme rather than the size of the company alone. A small
                organisation managing several ISO standards, sites or recurring audits may benefit from dedicated software even with
                a relatively small team.
            </span>
        ),
    },
    {
        question: "How does internal audit software help with corrective actions?",
        answer: (
            <span>
                Dedicated audit software can connect corrective actions directly to the relevant audit finding, assign owners and
                deadlines, store supporting evidence and make follow-up easier. This helps avoid relying on separate spreadsheets,
                emails and reminders to keep actions moving.
            </span>
        ),
    },
    {
        question: "Can I try iAudit Global before moving away from spreadsheets?",
        answer: (
            <span>
                Yes. iAudit Global offers a 14-day free trial with no credit card required. You can use the trial to test audit
                planning, evidence capture, findings, corrective actions and reporting before deciding whether dedicated audit
                software is right for your organisation. You can view the plans and start the trial on the{" "}
                <Link href="/pricing" style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}>
                    iAudit Global pricing page
                </Link>.
            </span>
        ),
    },
];

export default function InternalAuditSoftwareVsSpreadsheetsBlogContent() {
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
                        alt="Internal Audit Software vs Spreadsheets: When Is It Time to Change?"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.65) 100%)",
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
                                October 27, 2026
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
                                6 Min Read
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
                            Internal Audit Software vs Spreadsheets: When Is It Time to Change?
                        </h1>

                        {/* Section: Intro */}
                        <div id="intro" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)" }}>
                            <p style={para(font)}>
                                In the early days of iAudit Global, a lot of our conversations started through direct LinkedIn outreach.
                            </p>
                            <p style={para(font)}>
                                I would connect with auditors, quality managers and HSE professionals and ask how they were actually managing internal audits. Not how the process looked in a procedure, but what happened day to day.
                            </p>
                            <p style={para(font)}>
                                One conversation stayed with me.
                            </p>
                            <p style={para(font)}>
                                I had connected with an internal auditor who had spent more than 20 years working across quality, health and safety, ISO 9001, ISO 14001 and ISO 45001. We spoke about her work for a while and, mostly out of curiosity, I asked how audits, evidence and reporting were managed in her organisation.
                            </p>
                            <p style={para(font)}>
                                Her answer was simple.
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
                                <p
                                    style={{
                                        fontStyle: "italic",
                                        fontSize: "1.15rem",
                                        color: "#003b27",
                                        margin: 0,
                                        fontWeight: 600,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    &ldquo;Word, email and spreadsheets.&rdquo;
                                </p>
                            </div>

                            <p style={para(font)}>
                                It reinforced something we had already started seeing repeatedly. Even very experienced audit teams were still building their audit process around tools that were never designed to manage the whole audit lifecycle.
                            </p>
                            <p style={para(font)}>
                                That does not mean spreadsheets are bad. They are often a perfectly reasonable place to start.
                            </p>

                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #e8e4df",
                                    borderRadius: "0.875rem",
                                    padding: "1.35rem 1.5rem",
                                    margin: "1.75rem 0 2rem",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                }}
                            >
                                <p
                                    style={{
                                        margin: "0 0 0.35rem",
                                        fontSize: "0.75rem",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                        color: "#006644",
                                    }}
                                >
                                    The Core Question
                                </p>
                                <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "#111827", lineHeight: 1.6 }}>
                                    The real question in the Internal Audit Software vs Spreadsheets discussion is whether your audit programme has become more complex than the tools you are using to manage it.
                                </p>
                            </div>
                        </div>

                        {/* Section: Why Spreadsheets Still Work */}
                        <div id="why-spreadsheets-work" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>Why spreadsheets still work for internal audits</h2>
                            <p style={para(font)}>
                                I have no problem with spreadsheets when they are doing the job.
                            </p>
                            <p style={para(font)}>
                                Excel is familiar, flexible and already available in most organisations. You can build an audit schedule quickly, record findings, assign owners and keep track of dates without implementing another system.
                            </p>
                            <p style={para(font)}>
                                For a small organisation running a limited number of audits across one site, that may be enough.
                            </p>
                            <p style={para(font)}>
                                If one person manages the audit programme, findings are relatively limited and evidence is easy to retrieve, introducing specialist software simply because it exists does not automatically improve anything.
                            </p>
                            <p style={para(font)}>
                                The problem usually starts as the programme grows.
                            </p>
                            <p style={para(font)}>
                                More audits mean more files. More people mean more versions. More findings mean more follow-up. Additional sites create separate trackers, and reporting starts to depend on manually bringing all of that information together.
                            </p>
                            <p style={para(font)}>
                                That is when the conversation changes.
                            </p>
                        </div>

                        {/* Section: Software vs Spreadsheets: What Actually Changes */}
                        <div id="what-changes" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>Internal Audit Software vs Spreadsheets: What actually changes?</h2>
                            <p style={para(font)}>
                                The biggest difference is not whether you can record information. Both can do that.
                            </p>
                            <p style={para(font)}>
                                The difference is how well the information stays connected throughout the audit process.
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
                                        {comparisonTable.rows.map((row) => (
                                            <div
                                                key={row[0]}
                                                style={{
                                                    background: "#fdfcfb",
                                                    borderRadius: "0.625rem",
                                                    padding: "1rem",
                                                    border: "1px solid #eeebe6",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        margin: "0 0 0.5rem",
                                                        fontSize: "0.95rem",
                                                        fontWeight: 700,
                                                        color: "#111827",
                                                    }}
                                                >
                                                    {row[0]}
                                                </p>
                                                <div style={{ marginBottom: "0.5rem" }}>
                                                    <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6B7280" }}>
                                                        Spreadsheets:
                                                    </span>
                                                    <p style={{ margin: "0.2rem 0 0", fontSize: "0.88rem", color: "#4B5563", lineHeight: 1.5 }}>
                                                        {row[1]}
                                                    </p>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#006644" }}>
                                                        Internal Audit Software:
                                                    </span>
                                                    <p style={{ margin: "0.2rem 0 0", fontSize: "0.88rem", color: "#00472f", fontWeight: 500, lineHeight: 1.5 }}>
                                                        {row[2]}
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
                                                fontSize: "0.91rem",
                                            }}
                                        >
                                            <thead>
                                                <tr style={{ background: "#f5f3f0" }}>
                                                    {comparisonTable.headers.map((h, i) => (
                                                        <th
                                                            key={h}
                                                            style={{
                                                                textAlign: "left",
                                                                padding: "0.875rem 1.15rem",
                                                                borderBottom: "2px solid #e8e4df",
                                                                color: i === 2 ? "#006644" : "#111827",
                                                                fontWeight: 700,
                                                                fontSize: "0.82rem",
                                                                letterSpacing: "0.03em",
                                                                textTransform: "uppercase",
                                                                width: i === 0 ? "24%" : i === 1 ? "38%" : "38%",
                                                            }}
                                                        >
                                                            {h}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {comparisonTable.rows.map((row, idx) => (
                                                    <tr
                                                        key={row[0]}
                                                        style={{
                                                            borderBottom: idx === comparisonTable.rows.length - 1 ? "none" : "1px solid #f0ede8",
                                                            background: idx % 2 === 1 ? "#faf8f5" : "#ffffff",
                                                        }}
                                                    >
                                                        <td
                                                            style={{
                                                                padding: "0.95rem 1.15rem",
                                                                fontWeight: 600,
                                                                color: "#111827",
                                                                verticalAlign: "top",
                                                            }}
                                                        >
                                                            {row[0]}
                                                        </td>
                                                        <td
                                                            style={{
                                                                padding: "0.95rem 1.15rem",
                                                                color: "#4B5563",
                                                                verticalAlign: "top",
                                                                lineHeight: 1.55,
                                                            }}
                                                        >
                                                            {row[1]}
                                                        </td>
                                                        <td
                                                            style={{
                                                                padding: "0.95rem 1.15rem",
                                                                color: "#00472f",
                                                                fontWeight: 500,
                                                                verticalAlign: "top",
                                                                lineHeight: 1.55,
                                                                background: idx % 2 === 1 ? "#f4f8f5" : "#fbfdfb",
                                                            }}
                                                        >
                                                            {row[2]}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            <p style={para(font)}>
                                If you are already at the stage of comparing platforms, I have covered the features I believe matter most in our guide to{" "}
                                <Link
                                    href="/blog/how-to-choose-iso-audit-management-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    choosing ISO audit management software
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Section: The Real Problem Isn't the Spreadsheet */}
                        <div id="real-problem" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>The real problem is not the spreadsheet</h2>
                            <p style={para(font)}>
                                A spreadsheet can be very good at tracking information.
                            </p>
                            <p style={para(font)}>
                                The difficulty is everything that starts accumulating around it.
                            </p>
                            <p style={para(font)}>
                                You may have the annual audit programme in Excel, the checklist in Word, evidence in a shared folder, findings in another spreadsheet and corrective actions being chased through email.
                            </p>
                            <p style={para(font)}>
                                Then somebody needs a management report.
                            </p>
                            <p style={para(font)}>
                                That means opening several files, checking which version is current, confirming whether actions have been completed and bringing the information together again.
                            </p>
                            <p style={para(font)}>
                                No individual step sounds particularly difficult.
                            </p>
                            <p style={para(font)}>
                                The problem is that keeping those steps connected becomes a process of its own.
                            </p>
                            <p style={para(font)}>
                                And that is time the audit team could be spending looking at evidence, identifying patterns and improving the management system.
                            </p>
                        </div>

                        {/* Section: 7 Signs */}
                        <div id="seven-signs" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>7 signs your audit programme may have outgrown spreadsheets</h2>
                            <p style={para(font)}>
                                There is no fixed number of audits that tells you when to change.
                            </p>
                            <p style={para(font)}>
                                I would look for signs that the way you manage the programme is beginning to create unnecessary work or reduce visibility.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "1.5rem 0 2rem" }}>
                                {sevenSigns.map((item) => (
                                    <div
                                        key={item.num}
                                        style={{
                                            background: "#ffffff",
                                            border: "1px solid #e8e4df",
                                            borderRadius: "0.875rem",
                                            padding: "1.25rem 1.4rem",
                                            display: "flex",
                                            gap: "1.1rem",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.85rem",
                                                fontWeight: 800,
                                                color: "#006644",
                                                background: "rgba(0,102,68,0.08)",
                                                padding: "4px 8px",
                                                borderRadius: "6px",
                                                lineHeight: 1,
                                                letterSpacing: "0.02em",
                                                marginTop: "2px",
                                            }}
                                        >
                                            {item.num}
                                        </span>
                                        <div>
                                            <h3
                                                style={{
                                                    fontSize: "1.08rem",
                                                    fontWeight: 600,
                                                    color: "#111827",
                                                    margin: "0 0 0.35rem",
                                                    fontFamily: font,
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p style={{ margin: 0, fontSize: "0.93rem", color: "#4B5563", lineHeight: 1.65 }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sign 7 Diagnostic Questions Box */}
                            <div
                                style={{
                                    background: "#003b27",
                                    color: "#ffffff",
                                    borderRadius: "1rem",
                                    padding: isMobile ? "1.5rem" : "2rem 2.25rem",
                                    margin: "2rem 0",
                                }}
                            >
                                <p
                                    style={{
                                        margin: "0 0 0.5rem",
                                        fontSize: "0.75rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "#7ce3b6",
                                    }}
                                >
                                    Audit Health Check
                                </p>
                                <h3
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "1.35rem",
                                        fontWeight: 600,
                                        margin: "0 0 1rem",
                                        fontFamily: font,
                                    }}
                                >
                                    Can you quickly answer these 5 questions right now?
                                </h3>
                                <ul
                                    style={{
                                        margin: "0 0 1.25rem",
                                        paddingLeft: "1.25rem",
                                        color: "rgba(255,255,255,0.9)",
                                        fontSize: "0.96rem",
                                        lineHeight: 1.8,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.35rem",
                                    }}
                                >
                                    {diagnosticQuestions.map((q) => (
                                        <li key={q}>{q}</li>
                                    ))}
                                </ul>
                                <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                                    If answering those questions means opening several spreadsheets, searching through email inboxes and checking separate shared folders, your current process may be creating more work than it needs to.
                                </p>
                            </div>
                        </div>

                        {/* Section: When Spreadsheets Are Still Enough */}
                        <div id="spreadsheets-enough" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>When spreadsheets are still enough</h2>
                            <p style={para(font)}>
                                Moving to internal audit software is not the right answer for everyone.
                            </p>
                            <p style={para(font)}>
                                Spreadsheets may still be perfectly suitable if you have a small number of audits, limited findings, straightforward reporting and one or two people managing the programme.
                            </p>
                            <p style={para(font)}>
                                The objective should not be to digitise something simply because a newer tool is available.
                            </p>
                            <p style={para(font)}>
                                The objective is to remove friction when that friction starts affecting control, visibility or improvement.
                            </p>
                            <p style={para(font)}>
                                If your spreadsheet gives you that control and your team can manage the programme without unnecessary administration, there may be no urgent reason to change.
                            </p>
                        </div>

                        {/* Section: When Software Is Worth Considering */}
                        <div id="software-worth-considering" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>When internal audit software becomes worth considering</h2>
                            <p style={para(font)}>
                                I would start looking seriously at dedicated software when audit volume increases, several people or sites are involved, evidence becomes difficult to organise or corrective actions require constant manual follow-up.
                            </p>
                            <p style={para(font)}>
                                Reporting is another good indicator.
                            </p>
                            <p style={para(font)}>
                                If preparing a report means spending hours consolidating information that already exists elsewhere, the process is probably doing more work than it should.
                            </p>
                            <p style={para(font)}>
                                For me, the point to change is not when Excel stops working completely.
                            </p>
                            <p style={para(font)}>
                                It is when keeping Excel working starts taking too much time away from auditing and improvement.
                            </p>
                            <p style={para(font)}>
                                At that stage, the question is no longer whether a spreadsheet can hold the data. It is whether the overall process still gives you the control you need.
                            </p>
                        </div>

                        {/* Section: Moving Doesn't Need to Be Complicated */}
                        <div id="moving-not-complicated" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>Moving from spreadsheets does not need to be complicated</h2>
                            <p style={para(font)}>
                                One reason teams stay with existing systems is understandable: changing them sounds like another project.
                            </p>
                            <p style={para(font)}>
                                It does not need to be.
                            </p>
                            <p style={para(font)}>
                                A dedicated audit platform should follow the way the audit programme already works rather than force the team to rebuild everything around the software.
                            </p>
                            <p style={para(font)}>
                                If you want to see what the setup looks like in practice, I have put together a step-by-step guide on{" "}
                                <Link
                                    href="/blog/how-to-set-up-iaudit-global-iso-audit-software"
                                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    how to set up iAudit Global ISO audit software
                                </Link>
                                .
                            </p>
                            <p style={para(font)}>
                                The important thing is to start with the structure you actually need: your standards, sites, users, audit programme and findings.
                            </p>
                        </div>

                        {/* Section: Try the Difference Before Deciding */}
                        <div id="try-difference" style={{ scrollMarginTop: "calc(var(--blog-sticky-offset) + 16px)", marginTop: "2.5rem" }}>
                            <h2 style={h2(font)}>Try the difference before you decide</h2>
                            <p style={para(font)}>
                                The Internal Audit Software vs Spreadsheets decision does not need to be theoretical.
                            </p>
                            <p style={para(font)}>
                                The easiest way to understand whether dedicated software would improve your audit process is to try managing part of a real audit differently.
                            </p>
                            <p style={para(font)}>
                                Plan an audit. Add evidence. Record a finding. Assign an action. Follow it through to closure.
                            </p>
                            <p style={para(font)}>
                                That will tell you far more than a feature list.
                            </p>
                            <p style={para(font)}>
                                At iAudit Global, we built the platform around the audit workflow itself, bringing planning, evidence, findings, corrective actions and reporting into one place.
                            </p>

                            <div
                                style={{
                                    background: "#f0f5f2",
                                    border: "1px solid #d1e2d8",
                                    borderRadius: "0.875rem",
                                    padding: "1.5rem",
                                    margin: "1.75rem 0",
                                }}
                            >
                                <p style={{ margin: "0 0 1rem", fontSize: "0.98rem", color: "#111827", lineHeight: 1.7 }}>
                                    You can{" "}
                                    <Link href="/pricing" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        start a 14-day free trial of iAudit Global
                                    </Link>{" "}
                                    and see whether that structure makes a practical difference to the way your team works.
                                </p>
                                <p style={{ margin: 0, fontSize: "0.98rem", color: "#374151", lineHeight: 1.7 }}>
                                    If you would rather talk through your current audit process first, you can also{" "}
                                    <Link href="/contact" style={{ color: "#006644", fontWeight: 700, textDecoration: "underline" }}>
                                        contact the iAudit Global team
                                    </Link>
                                    .
                                </p>
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

