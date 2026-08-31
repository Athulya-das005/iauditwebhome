"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog-process-automation.webp";

const sectionImages: Record<string, string> = {
    cost: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
    delays: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    iso: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    multisite: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    realtime: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    visibility: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "cost", label: "The Real Cost of Delayed Audit Data" },
    { id: "delays", label: "Where the Delays Actually Happen" },
    { id: "iso", label: "How This Undermines ISO Compliance" },
    { id: "multisite", label: "Multi-Site Audit Data Challenge" },
    { id: "realtime", label: "How Real-Time Data Prevents Repeat Findings" },
    { id: "visibility", label: "Structured Audit Management Improves Visibility" },
    { id: "conclusion", label: "Why Real-Time Audit Management Is Critical" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const delayPoints = [
    {
        title: "Spreadsheets and Manual Consolidation",
        text: "Findings get recorded on-site, often in a notebook. Someone types them into Excel later. If you have multiple locations, you now have multiple spreadsheets. Consolidating them for management review is a manual, time-consuming exercise that takes days or weeks. By the time you have a complete picture, the context is gone. Nobody remembers the urgency that existed on the shop floor.",
    },
    {
        title: "Audit Data Lives in Separate Folders",
        text: "Each project or site keeps its own audit file. Site A has one folder. Site B has another. The pattern that connects them—the fact that the same issue is appearing everywhere—stays invisible until someone manually digs through all the folders. Most teams never do that dig until it is too late.",
    },
    {
        title: "Corrective Actions Get Lost in Email Chains",
        text: 'An action is raised. It is emailed to someone. Status updates come back via email. Nobody is tracking deadlines systematically. Follow-up verification to confirm the fix actually worked? That happens months later, if it happens at all. The PDCA cycle breaks because the "Check" phase is weak or missing.',
    },
    {
        title: "Follow-Up Audits Are Never Scheduled",
        text: "After a major nonconformity, you should schedule a follow-up audit to verify effectiveness. But if that scheduling is manual, it gets delayed. By the time you re-audit the area, months have passed. Either the problem has resurfaced or nobody remembers why it mattered.",
    },
];

const realtimeItems = [
    "Evidence captured on-site during the audit, not reconstructed afterwards.",
    "Findings logged and visible to the right people instantly.",
    "Corrective actions tracked with clear ownership and automated reminders.",
    "Follow-up audits scheduled automatically.",
    "Leadership dashboards showing cross-site trends in real-time.",
];

const faqItems = [
    {
        question: "Why does audit data arrive late in most organisations?",
        answer:
            "Audit data typically arrives late because findings are recorded on-site, manually typed into spreadsheets later, and consolidated across multiple locations manually. Without a centralised system, audit information sits in separate folders and emails. By the time leadership sees a complete picture, days or weeks have passed and the decision window has closed.",
    },
    {
        question: "How does delayed audit data affect ISO 9001 compliance?",
        answer:
            'ISO 9001 Clause 9.2 requires internal audits to inform management review and drive improvement. When audit data arrives late, management review becomes reactive rather than preventive. The "Act" phase of PDCA is weakened because decision-makers are discussing what already happened instead of identifying emerging risks. Late data is actually a compliance failure.',
    },
    {
        question: "What is the cost of repeat nonconformities across multiple sites?",
        answer:
            "When audit data is fragmented across different locations, patterns stay hidden until the annual review. A supervision gap found at Site A gets repeated at Site B and Site C before anyone notices. The cost of fixing the same issue three times is significantly higher than preventing repetition through early visibility.",
    },
    {
        question: "How can real-time audit data prevent repeat findings?",
        answer:
            "Real-time audit systems capture evidence on-site and log findings immediately. This allows leadership to see patterns as they emerge across all locations. When a nonconformity is identified, corrective actions can be implemented across the entire organisation instantly, preventing repetition at other sites.",
    },
    {
        question: "How does audit management software improve visibility across multiple sites?",
        answer:
            "Audit management software centralises all audit activity in one workspace. Instead of separate spreadsheets per location, leadership gets real-time dashboards showing cross-site trends, recurring NCR categories, and overdue corrective actions. This enables informed decision-making based on current data, not historical reports.",
    },
    {
        question: "What is the difference between spreadsheet audits and structured audit systems?",
        answer:
            "Spreadsheet audits are manual, time-consuming, and fragmented. Data arrives weeks later. Corrective actions drift in email chains. Structured audit systems automate data capture, provide real-time visibility, schedule follow-up audits automatically, and track corrective action effectiveness in one connected platform.",
    },
    {
        question: "How does iAudit Global solve the audit data delay problem?",
        answer:
            "iAudit Global centralises your entire audit programme in one system. Findings are logged and visible in real-time. Corrective actions have clear timelines and automated reminders. Follow-up audits are scheduled automatically based on severity and effectiveness requirements. Multi-site dashboards show trends instantly, eliminating the week-long consolidation delay. You can explore these features with a 14-day free trial at www.iaudit.global.",
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

export default function AuditDataDelayBlogContent() {
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
                    alt="Why audit data that arrives too late is costing you control"
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
                        Audit Data
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
                            August 19, 2026
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
                        Why Audit Data That Arrives Too Late Is Costing You Control
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            When internal audit data is delayed, it stops being a preventive tool and becomes a historical record. Most organisations lose critical insight because findings are scattered across spreadsheets, corrective actions lack automated follow-up, and multi-site patterns remain hidden until months later. By the time findings reach leadership, the decision window has closed and problems have already compounded across sites. Real-time audit management systems solve this by centralising all audit activity, automating corrective action tracking, and providing instant cross-site visibility. Late audit data weakens ISO compliance; real-time data strengthens operational control.
                        </p>
                        <p style={para(font)}>
                            I&apos;ve sat in enough management review meetings to know when something is broken.
                        </p>
                        <p style={para(font)}>
                            The Quality Manager presents the audit findings from last month. The Director asks, &ldquo;Why are we only hearing about this now?&rdquo; The answer is usually the same: &ldquo;The data was scattered across spreadsheets. We only consolidated it last week.&rdquo;
                        </p>
                        <p style={para(font)}>
                            By then, the decision window has closed. The problem has already spread to another site. The client is already unhappy.
                        </p>
                        <p style={para(font)}>
                            Internal auditing should be an early warning system. It should help you catch problems before they become expensive. But when audit data arrives weeks after the work happens, you are not preventing anything. You are just documenting what went wrong.
                        </p>
                    </div>

                    <div id="cost" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Real Cost of Delayed Audit Data</h2>
                        <SectionImage src={sectionImages.cost} alt="The real cost of delayed internal audit data across sites" />
                        <p style={para(font)}>
                            Most organisations don&apos;t realise how much they lose when audit findings take time to surface.
                        </p>
                        <p style={para(font)}>
                            An audit identifies a supervision gap on Site A on Tuesday. By Friday, the report is typed up. The following week, it reaches management. By then, Site B has already repeated the same gap. Site C is about to.
                        </p>
                        <p style={para(font)}>
                            If that data had been visible on Wednesday, you could have briefed all three sites immediately. Instead, the problem compounds across the portfolio before anyone even knew it existed.
                        </p>
                        <p style={para(font)}>
                            That is not auditing. That is catching fire after the building is already burning.
                        </p>
                        <p style={para(font)}>
                            The costs are real: client complaints, repeat nonconformities, certification surprises, and leadership losing confidence in the entire audit system.
                        </p>
                    </div>

                    <div id="delays" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Where the Delays Actually Happen</h2>
                        <SectionImage src={sectionImages.delays} alt="Where audit data delays happen in spreadsheets and email chains" />
                        <p style={para(font)}>
                            I see this pattern across construction, manufacturing, pharma. The problem is not auditor laziness. It is the system itself.
                        </p>
                        {delayPoints.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="iso" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How This Undermines ISO Compliance</h2>
                        <SectionImage src={sectionImages.iso} alt="How delayed audit data undermines ISO 9001 compliance" />
                        <p style={para(font)}>
                            ISO 9001, 14001 and 45001 all expect audit results to inform management review and drive improvement. But that only works if the data is timely.
                        </p>
                        <p style={para(font)}>
                            When findings arrive weeks later, management review becomes reactive. You are discussing what already happened instead of what needs to happen next. The &ldquo;Act&rdquo; phase of PDCA gets weak. And ironically, the external auditor often finds repeat nonconformities that your internal system should have prevented.
                        </p>
                        <p style={para(font)}>
                            Late audit data is actually a compliance failure, even if all the paperwork looks complete.
                        </p>
                    </div>

                    <div id="multisite" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Challenge of Managing Audit Data Across Multiple Sites</h2>
                        <SectionImage src={sectionImages.multisite} alt="Managing audit data visibility across multiple sites" />
                        <p style={para(font)}>
                            I work across construction sites, manufacturing depots and pharma facilities. The multi-site problem is brutal.
                        </p>
                        <p style={para(font)}>
                            Site A gets audited. A supervision gap is found. Two weeks later, Site B gets audited. Same gap. A month later, Site C gets audited. Same gap again.
                        </p>
                        <p style={para(font)}>
                            But because audit data sits in separate folders, nobody sees the pattern. The insight that would have prevented repetition stays locked away until the annual consolidation.
                        </p>
                        <p style={para(font)}>
                            By then, you have spent three times the cost fixing the same problem across three locations.
                        </p>
                        <p style={para(font)}>
                            If that data had been visible after the first finding, you would have corrected the process once and avoided the repeat failures.
                        </p>
                    </div>

                    <div id="realtime" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How Real-Time Audit Data Prevents Repeat Findings</h2>
                        <SectionImage src={sectionImages.realtime} alt="Real-time audit data preventing repeat findings across sites" />
                        <p style={para(font)}>
                            The shift is simple in theory but hard in practice without the right tools.
                        </p>
                        <p style={para(font)}>Instead of data arriving weeks later, it should be visible immediately.</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {realtimeItems.map((item, i, arr) => (
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
                            When audit data is current, it becomes protective. When it is late, it becomes administrative.
                        </p>
                    </div>

                    <div id="visibility" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How Structured Audit Management Improves Visibility</h2>
                        <SectionImage src={sectionImages.visibility} alt="Structured audit management improving real-time visibility" />
                        <p style={para(font)}>
                            I&apos;ve watched organisations move from spreadsheet chaos to structured visibility. The difference is remarkable.
                        </p>
                        <p style={para(font)}>
                            Instead of consolidated reports arriving a week later, findings are visible as they happen. Instead of corrective actions drifting in email, they have clear timelines and automated follow-ups. Instead of trends hidden until the annual review, patterns are visible in real-time across all sites.
                        </p>
                        <p style={para(font)}>
                            iAudit Global was built to solve this specific problem. One connected system replaces scattered spreadsheets. Real-time visibility replaces the week-long delay. Automated follow-ups replace email chasing.
                        </p>
                        <p style={para(font)}>
                            Leadership sees patterns as they emerge, not after they have caused damage.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Real-Time Audit Management Is Critical for ISO Compliance</h2>
                        <p style={para(font)}>
                            Audit data that arrives late costs you control. It transforms what should be a preventive system into a reactive one.
                        </p>
                        <p style={para(font)}>
                            By the time findings reach decision-makers, the window to intervene has often closed. The problem has already spread. The cost has already compounded.
                        </p>
                        <p style={para(font)}>
                            The solution is not to audit more frequently. It is to make the data you collect actually visible and actionable in real-time.
                        </p>
                        <p style={para(font)}>
                            If you want to move beyond the spreadsheet delays and into a system that provides instant visibility across your entire audit programme, you can explore iAudit Global with a 14-day free trial.
                        </p>
                        <p style={para(font)}>
                            Start your free trial at{" "}
                            <a href="https://www.iaudit.global/" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                www.iaudit.global
                            </a>
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
                                Stop losing control to delayed audit data
                            </h3>
                            <p style={greenPara(font)}>
                                Start a 14-day free trial of iAudit Global and see how real-time visibility, automated follow-ups and cross-site dashboards turn audit data into a preventive tool.
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
