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
    insight: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    hotspots: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
    questions: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "insight", label: "Moving from Activity to Insight" },
    { id: "hotspots", label: "Identifying Systemic Hotspots" },
    { id: "pdca", label: "Closing the PDCA Loop at the Board Level" },
    { id: "questions", label: "Three Questions for Your Next Review" },
    { id: "data", label: "Turning Scattered Data into Insight" },
    { id: "conclusion", label: "Management Review Is a Leadership Forum" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const insightQuestions = [
    "Where are we failing most often?",
    "Why are our previous fixes not stopping these failures?",
    "Which projects or departments are trending in the wrong direction?",
];

const reviewQuestions = [
    {
        num: "1",
        title: "What Is the One Thing We Are Most Tired of Seeing in Our Audit Reports?",
        text: "Identifying the recurring \"nuisance\" NCRs often reveals a fundamental process flaw that everyone has been working around for years.",
    },
    {
        num: "2",
        title: "How Do We Know Our Corrective Actions Actually Worked?",
        text: "Do not just look at closure dates. Ask for evidence of effectiveness. If the same issue came back six months later, the action failed.",
    },
    {
        num: "3",
        title: "Are We Auditing Based on Risk or Just a Calendar?",
        text: "If the audit results are always \"Pass,\" you are likely auditing the wrong things. Management should use results to redirect the audit programme toward the areas of highest risk or poorest performance.",
    },
];

const faqItems = [
    {
        question: "Why is it important for management reviews to look at internal audit results?",
        answer:
            "It is essential because internal audits are the \"early warning system\" for any organisation. If leadership teams only see high-level summaries, they miss the systemic risks and hotspots that lead to project failure or costly rework. A proper review ensures the business is improving, not just maintaining a certificate.",
    },
    {
        question: "How should management reviews use internal audit results to identify business risks?",
        answer:
            "Rather than looking at individual reports, management should look for aggregated patterns. If the same type of nonconformity (NCR) is appearing across multiple sites or departments, it indicates a flaw in the central management system that requires a strategic, board-level decision to fix.",
    },
    {
        question: "What does ISO 9001 require regarding audit results in management reviews?",
        answer:
            'Clause 9.3 of ISO 9001 explicitly requires top management to review information on the performance and effectiveness of the quality management system, including "trends in audit results." The standard expects leadership to evaluate these results to decide on opportunities for improvement and any need for changes to the system.',
    },
    {
        question: "How can leadership distinguish between an administrative update and a strategic audit insight?",
        answer:
            "An administrative update focuses on activity, such as the percentage of audits completed. A strategic insight focuses on impact, such as identifying that a specific subcontractor trade is responsible for 40% of all site nonconformities. Management reviews should prioritise the latter to drive real change.",
    },
    {
        question: "How does iAudit Global help leadership teams use internal audit results effectively?",
        answer:
            'iAudit Global centralises scattered audit data into real-time dashboards, allowing directors to move away from "spreadsheet theatre." The platform highlights recurring NCR categories, tracks corrective action effectiveness, and provides the trend visibility needed to make informed, data-driven decisions during management reviews.',
    },
    {
        question: "What is the most common mistake made when reviewing audit data at the board level?",
        answer:
            'The biggest mistake is "reporting in a silo." This happens when management reviews each audit as a standalone event rather than looking at cross-project trends. Without a unified view, the board cannot see the "big picture" of where the organisation\'s quality or safety standards are drifting.',
    },
    {
        question: "How do we prove to external auditors that management is using internal audit results?",
        answer:
            'External auditors look for evidence of "Management Commitment." You can prove this by showing meeting minutes that link an internal audit finding to a specific board-level decision, such as a change in company policy, the purchase of new equipment, or the rollout of a new training programme.',
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

export default function ManagementReviewAuditResultsBlogContent() {
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
                    alt="How management reviews should use internal audit results"
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
                        Management Review
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
                        How Management Reviews Should Use Internal Audit Results
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            How management reviews should use internal audit results is not about reviewing long lists of open and closed NCRs. It is about analysing patterns, recurring themes, severity exposure and trend direction to drive informed leadership decisions. ISO 9001 expects audit results to support continual improvement, risk-based thinking and verified corrective action effectiveness. Effective management reviews focus on systemic insight rather than administrative updates. Structured audit management systems like iAudit Global help organisations aggregate findings across sites, track corrective action effectiveness and embed PDCA workflows, turning internal audit results into board-level decision support.
                        </p>
                        <p style={para(font)}>
                            If you have ever sat through a management review where someone spends forty minutes reading a list of completed audits and closed corrective actions, you have seen a missed opportunity.
                        </p>
                        <p style={para(font)}>
                            On paper, the organisation is compliant. The boxes are ticked. The ISO certificate stays on the wall. But in practice, the leadership team has learned absolutely nothing about the actual health of the business.
                        </p>
                        <p style={para(font)}>
                            ISO 9001, 14001, and 45001 are quite specific about management reviews. Clause 9.3 does not just ask you to &ldquo;read&rdquo; audit results. It asks you to evaluate them. There is a significant difference between reporting on what happened and using that data to decide what needs to change.
                        </p>
                    </div>

                    <div id="insight" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Moving from Activity to Insight</h2>
                        <SectionImage src={sectionImages.insight} alt="Moving management reviews from activity reporting to strategic audit insight" />
                        <p style={para(font)}>
                            The most common mistake in a management review is focusing on activity rather than insight. A director does not need to know that fifteen audits were completed on time. That is an administrative update.
                        </p>
                        <p style={para(font)}>What a director needs to know is the answer to a different set of questions:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {insightQuestions.map((item, i, arr) => (
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
                            When you look at how management reviews should use internal audit results, the goal is to turn raw data into a strategic signal. If your internal audits are the sensors of the business, the management review is the dashboard that tells you when to steer.
                        </p>
                    </div>

                    <div id="hotspots" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Identifying Systemic Hotspots</h2>
                        <SectionImage src={sectionImages.hotspots} alt="Identifying systemic audit hotspots across sites and projects" />
                        <p style={para(font)}>
                            An internal audit result in isolation is a snapshot. It tells you what went wrong on a specific Tuesday on a specific site. On its own, it might look like a one-off human error.
                        </p>
                        <p style={para(font)}>
                            However, when you aggregate those results, patterns emerge. If five different project sites have all raised nonconformities related to drawing control or subcontractor inductions, you are no longer looking at an isolated mistake. You are looking at a system failure.
                        </p>
                        <p style={para(font)}>
                            Management reviews should use these aggregated results to identify &ldquo;hotspots.&rdquo; If the data shows that a specific trade or a particular region is consistently struggling with compliance, the board should not just ask for more audits. They should ask for a change in the process. This might mean updated training, a redesign of the Inspection and Test Plan (ITP), or a change in procurement criteria.
                        </p>
                    </div>

                    <div id="pdca" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Closing the PDCA Loop at the Board Level</h2>
                        <SectionImage src={sectionImages.pdca} alt="Closing the PDCA loop at board level using internal audit results" />
                        <p style={para(font)}>
                            The &ldquo;Act&rdquo; stage of the Plan-Do-Check-Act cycle often happens too far down the chain. A site manager fixes a broken fence or updates a missing record, and the action is closed.
                        </p>
                        <p style={para(font)}>
                            But for true improvement, the &ldquo;Act&rdquo; stage needs to happen in the boardroom. Leadership should use internal audit results to reallocate resources. If audits in the fabrication shop are showing a spike in rework, management review is the time to decide if that shop needs new equipment, better lighting, or more supervision.
                        </p>
                        <p style={para(font)}>
                            When you use audit results to drive strategic decisions, you are moving from reactive firefighting to proactive prevention. An audit finding that leads to a board-level decision to change a company-wide process is the highest form of ISO compliance.
                        </p>
                    </div>

                    <div id="questions" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Three Questions for Your Next Management Review</h2>
                        <SectionImage src={sectionImages.questions} alt="Three strategic questions for your next management review" />
                        <p style={para(font)}>
                            To move away from &ldquo;spreadsheet theatre&rdquo; and toward real oversight, I suggest leadership teams ask three simple questions during their next review:
                        </p>
                        {reviewQuestions.map((item) => (
                            <div key={item.num} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>
                                    {item.num}. {item.title}
                                </h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="data" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Turning Scattered Data into Board-Level Insight</h2>
                        <SectionImage src={sectionImages.iaudit} alt="Turning scattered audit data into board-level insight with iAudit Global" />
                        <p style={para(font)}>
                            The reason many management reviews fail to use audit results effectively is that the data is too hard to reach. If your findings are buried in separate Word documents or scattered across twelve different spreadsheets, it is impossible to see the patterns.
                        </p>
                        <p style={para(font)}>
                            This is why we built iAudit Global. We wanted to move the conversation away from &ldquo;Did we do the audit?&rdquo; to &ldquo;What is the audit telling us?&rdquo;
                        </p>
                        <p style={para(font)}>
                            Our platform aggregates site-level findings into real-time dashboards. It highlights recurring NCR categories, tracks effectiveness checks, and shows trend directions across your entire project portfolio. It turns a week of manual spreadsheet consolidation into a thirty-second visual report.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Management Review Is a Leadership Forum</h2>
                        <p style={para(font)}>Internal audit results should not be treated as paperwork to be filed.</p>
                        <p style={para(font)}>They are a signal.</p>
                        <p style={para(font)}>
                            When management reviews use internal audit data properly, they reveal where the system is strong, where it is fragile and where resources should be focused.
                        </p>
                        <p style={para(font)}>
                            Understanding how management reviews should use internal audit results is not about satisfying a clause. It is about making better decisions.
                        </p>
                        <p style={para(font)}>
                            If your management review still revolves around lists of actions rather than patterns and trends, it may be time to rethink how your audit data is structured.
                        </p>
                        <p style={para(font)}>
                            You can explore how iAudit Global supports structured, PDCA-driven management review with a 14-day free trial at{" "}
                            <a href="https://www.iaudit.global/" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                www.iaudit.global
                            </a>
                            .
                        </p>
                        <p style={para(font)}>
                            Because management review should drive improvement, not just record activity.
                        </p>
                        <p style={para(font)}>Better audits lead to better decisions.</p>

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
                                Turn audit results into leadership decisions
                            </h3>
                            <p style={greenPara(font)}>
                                Start a 14-day free trial of iAudit Global and see how real-time dashboards, recurring NCR tracking and PDCA workflows support smarter management reviews.
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
                                Helping leadership teams turn internal audit results into strategic management review decisions.
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
                            Helping leadership teams turn internal audit results into strategic management review decisions.
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
