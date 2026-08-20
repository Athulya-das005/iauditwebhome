"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    meaning: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=480&fit=crop&q=80&fm=webp",
    wrong: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    iso9001: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    mistakes: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=480&fit=crop&q=80&fm=webp",
    digital: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    checklist: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "meaning", label: "What PDCA Really Means" },
    { id: "wrong", label: "Where Fabricators Go Wrong" },
    { id: "iso9001", label: "PDCA for ISO 9001 Compliance" },
    { id: "mistakes", label: "Common PDCA Mistakes" },
    { id: "digital", label: "How Digital Tools Strengthen PDCA" },
    { id: "comparison", label: "Spreadsheets vs. Audit Software" },
    { id: "checklist", label: "Start Your Next PDCA Cycle" },
    { id: "conclusion", label: "PDCA Works When You Give It Structure" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const pdcaStages = [
    {
        stage: "Plan",
        text: "Identify specific issues like weld porosity or machining drift and set measurable targets.",
    },
    {
        stage: "Do",
        text: "Run small, controlled trials of your proposed fix before rolling it out across the workshop.",
    },
    {
        stage: "Check",
        text: "Measure your results against the baseline data to confirm the improvement is real.",
    },
    {
        stage: "Act",
        text: "Standardise successful changes by updating work instructions and training records.",
    },
];

const wrongItems = [
    {
        title: "Skipping the Plan stage",
        text: "A customer complains about weld porosity, so you immediately change the gas flow rate or swap suppliers. No baseline data. No root cause analysis. Just a guess dressed up as action. Planning in PDCA means documenting current performance, mapping where the problem occurs (which shift, which welder, which material grade) and forming a hypothesis you can actually test.",
    },
    {
        title: "Scaling changes before checking results",
        text: "You trial a new cutting parameter on one machine, it looks good, so you update the settings across the entire workshop by the end of the week. Then six weeks later, tool wear has doubled and you don't know why. The Check stage exists for a reason. You measure results over a meaningful sample size, check for side effects and confirm the improvement is real before you make it standard.",
    },
    {
        title: "Leaving operators out of the process",
        text: "A fabricator who has run the same press brake for five years will spot variables an engineer sitting in the office won't. If your PDCA cycles are planned in management meetings and handed down as instructions, you'll struggle to get buy-in on the shop floor.",
    },
    {
        title: "Weak documentation",
        text: "ISO 9001 auditors expect to see objective evidence of continual improvement. That means documented plans, recorded trial results, analysis of findings and proof that successful changes were embedded into procedures. If your PDCA cycles live in someone's notebook or a standalone Excel file that nobody else can find, you've got no audit trail.",
    },
];

const mistakeItems = [
    {
        title: "Vague problem statements don't work",
        text: '"Quality issues in welding" isn\'t a problem you can test. "Porosity in 6mm MIG welds on mild steel, occurring in 12% of joints on night shift" is. The more specific your Plan stage, the easier everything that follows becomes.',
    },
    {
        title: "Changing multiple variables at once",
        text: "If you adjust wire feed speed, preheat temperature and shielding gas mix in the same trial, you won't know which change made the difference. Test one thing at a time, even if it feels slow.",
    },
    {
        title: "Checking results too early",
        text: "Running five test pieces and declaring success isn't enough. Build a sample size that reflects real production conditions, and check results over several days or shifts, not just one morning.",
    },
    {
        title: "No follow-up after Act",
        text: "You've updated the work instruction and retrained the team. Great. But if you don't verify compliance a month later, the change won't stick. Schedule a follow-up audit as part of your Act stage.",
    },
];

const comparisonRows = [
    {
        aspect: "Accessibility",
        spreadsheets:
            "Stored locally or on shared drives. Hard to access from the shop floor.",
        software:
            "Cloud-based. Accessible on mobile, tablet or desktop from any location.",
    },
    {
        aspect: "Version control",
        spreadsheets:
            "Multiple versions across emails and folders. Easy to work from outdated data.",
        software: "Single source of truth. Everyone sees the latest information in real time.",
    },
    {
        aspect: "Evidence capture",
        spreadsheets:
            "Photos taken separately, stored elsewhere, referenced manually if at all.",
        software:
            "Photos attached directly to findings, linked to the relevant PDCA stage.",
    },
    {
        aspect: "Multi-site visibility",
        spreadsheets:
            "Each site typically runs its own file. Comparing performance requires manual consolidation.",
        software:
            "Centralised dashboards show all sites. Filter by location, standard or process.",
    },
    {
        aspect: "Corrective action tracking",
        spreadsheets:
            "Status updates depend on someone remembering to check and update. Actions go stale.",
        software:
            "Automated reminders. Owners notified. Progress tracked to verified closure.",
    },
];

const faqItems = [
    {
        question: "What is the main benefit of using PDCA in metal fabrication?",
        answer:
            "The biggest advantage is moving from reactive troubleshooting to systematic improvement. In an industry where raw material costs are high, PDCA helps reduce scrap and rework by identifying the root cause of defects, such as welding porosity or machining drift, before they affect an entire production run.",
    },
    {
        question: "How does the PDCA cycle support ISO 9001 compliance?",
        answer:
            'ISO 9001 requires organisations to demonstrate "continual improvement." PDCA provides the structured evidence auditors look for. By documenting your Plan, Do, Check, and Act stages, you create a clear audit trail that proves you are actively monitoring processes and taking effective corrective actions.',
    },
    {
        question: "Can PDCA be used for health and safety in the workshop?",
        answer:
            "Absolutely. While often used for quality, the cycle is just as effective for ISO 45001 compliance. For example, if you identify a risk in your manual handling process, you can use PDCA to trial new lifting equipment (Plan/Do), assess its impact on staff safety (Check), and then update your safety procedures (Act).",
    },
    {
        question: "Why do many fabrication businesses struggle to make PDCA work?",
        answer:
            'Most failures happen because the "Check" or "Act" stages are rushed. Companies often implement a change but forget to measure the results over a long enough period, or they fail to update their standard operating procedures, which allows staff to drift back into old, inefficient habits.',
    },
    {
        question: "How does iAudit Global help manage the PDCA cycle?",
        answer:
            "iAudit Global replaces scattered spreadsheets with a centralised platform built specifically for ISO standards. It allows your team to capture shop floor evidence like photos of weld joints or inspection logs directly onto a mobile device, linking those findings to specific ISO clauses and tracking every corrective action through to verified closure.",
    },
    {
        question: "Do we need a dedicated quality manager to run PDCA cycles?",
        answer:
            "While having a quality lead helps, the most successful PDCA cycles involve the people doing the work. Machine operators and welders often have the best insights into why a process is failing. A structured system allows any supervisor or lead hand to start a cycle and document improvements as part of their daily routine.",
    },
    {
        question: "How often should we run a PDCA cycle?",
        answer:
            "PDCA is a continuous loop, not a one-off event. You should trigger a new cycle whenever a nonconformity is identified, a customer complaint is received, or when your data shows a trend of declining performance in areas like material waste or energy consumption.",
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

function ComparisonTable({ font, isMobile }: { font: string; isMobile: boolean }) {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "0.875rem",
                border: "1px solid #e8e4df",
                overflow: "hidden",
                margin: "1.25rem 0 1.75rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
        >
            {!isMobile && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "160px 1fr 1fr",
                        background: "#f3f1ed",
                        borderBottom: "1px solid #e8e4df",
                    }}
                >
                    {["Aspect", "Spreadsheets", "Digital Audit Software"].map((heading) => (
                        <div
                            key={heading}
                            style={{
                                padding: "0.875rem 1rem",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: "#374151",
                                fontFamily: font,
                                borderRight: heading !== "Digital Audit Software" ? "1px solid #e8e4df" : "none",
                            }}
                        >
                            {heading}
                        </div>
                    ))}
                </div>
            )}
            {comparisonRows.map((row, index) => (
                <div
                    key={row.aspect}
                    style={{
                        display: isMobile ? "block" : "grid",
                        gridTemplateColumns: isMobile ? undefined : "160px 1fr 1fr",
                        borderBottom: index < comparisonRows.length - 1 ? "1px solid #e8e4df" : "none",
                    }}
                >
                    <div
                        style={{
                            padding: "1rem",
                            background: isMobile ? "#f3f1ed" : "rgba(0,102,68,0.04)",
                            borderRight: isMobile ? "none" : "1px solid #e8e4df",
                            borderBottom: isMobile ? "1px solid #e8e4df" : "none",
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                fontWeight: 700,
                                color: "#006644",
                                fontSize: "0.95rem",
                                fontFamily: font,
                            }}
                        >
                            {row.aspect}
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "1rem",
                            borderRight: isMobile ? "none" : "1px solid #e8e4df",
                            borderBottom: isMobile ? "1px solid #e8e4df" : "none",
                        }}
                    >
                        {isMobile && (
                            <p
                                style={{
                                    margin: "0 0 0.5rem",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "#9CA3AF",
                                    fontFamily: font,
                                }}
                            >
                                Spreadsheets
                            </p>
                        )}
                        <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                            {row.spreadsheets}
                        </p>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        {isMobile && (
                            <p
                                style={{
                                    margin: "0 0 0.5rem",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "#9CA3AF",
                                    fontFamily: font,
                                }}
                            >
                                Digital Audit Software
                            </p>
                        )}
                        <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                            {row.software}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function PdcaBasicMetalBlogContent() {
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
                    alt="PDCA cycle in basic metal and fabrication industry"
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
                        PDCA &amp; ISO 9001
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
                            April 17, 2026
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
                            10 Min Read
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
                        Using the PDCA Cycle to Improve Performance in the Basic Metal and Fabrication Industry
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Successful metal fabrication depends on precision, but reactive fixes often lead to high scrap rates and wasted material. The PDCA in basic metal industry framework, Plan, Do, Check, Act, provides a structured way to turn these quality challenges into systematic improvements.
                        </p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {pdcaStages.map((item, i, arr) => (
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
                            Implementing this cycle is essential for meeting ISO 9001 requirements for continual improvement. While many businesses struggle with scattered spreadsheets, using digital tools like iAudit Global allows teams to capture photo evidence, track corrective actions in real time, and build a reliable audit trail that proves compliance and drives better operational performance.
                        </p>
                        <p style={para(font)}>
                            Metal fabrication runs on precision. A single measurement error, an inconsistent weld or poorly controlled heat treatment can turn expensive raw material into scrap. Yet many fabricators still manage quality improvement the same way they did twenty years ago: reactive fixes, scattered spreadsheets and the same problems surfacing month after month.
                        </p>
                        <p style={para(font)}>
                            If your rejection rates haven&apos;t moved in the past year, or if corrective actions keep getting logged but never properly closed, the issue isn&apos;t effort. It&apos;s structure. The PDCA cycle offers that structure, and when applied properly in the basic metal industry, it turns firefighting into systematic improvement.
                        </p>
                    </div>

                    <div id="meaning" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What the PDCA Cycle Really Means in Manufacturing</h2>
                        <SectionImage src={sectionImages.meaning} alt="PDCA cycle applied in metal fabrication manufacturing" />
                        <p style={para(font)}>
                            PDCA stands for Plan, Do, Check, Act. It&apos;s a four-step method for testing changes, measuring results and building improvements into your standard operating procedures.{" "}
                            <a
                                href="https://asq.org/quality-resources/pdca-cycle?srsltid=AfmBOooQwCQztAMAMk8HyEPjthta-cH4lKYIqsO3a2OckTjI6swhcu1P"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}
                            >
                                The model was developed by W. Edwards Deming
                            </a>{" "}
                            and has been the backbone of continuous improvement in manufacturing for decades.
                        </p>
                        <p style={para(font)}>Here&apos;s what each stage involves when you apply PDCA in the basic metal industry:</p>
                        <p style={para(font)}>
                            <strong>Plan</strong> means identifying a specific problem, gathering data and deciding what you&apos;re going to test. In metal fabrication, that might be excessive spatter in MIG welding, dimensional drift in CNC machining or high rejection rates in powder coating.
                        </p>
                        <p style={para(font)}>
                            <strong>Do</strong> means running a small, controlled trial of your proposed fix. You change one variable at a time so you know what actually worked. You don&apos;t roll out new welding parameters across three shifts before you&apos;ve tested them on one.
                        </p>
                        <p style={para(font)}>
                            <strong>Check</strong> means comparing your trial results to the baseline. Did defect rates drop? Did cycle time improve? Was there any unintended impact on surface finish, strength or dimensional accuracy?
                        </p>
                        <p style={para(font)}>
                            <strong>Act</strong> means making the change permanent if it worked, updating your work instructions and training records, and building it into your ISO procedures. If it didn&apos;t work, you loop back to Plan with better information.
                        </p>
                        <p style={para(font)}>
                            The cycle doesn&apos;t end. Each improvement becomes the new baseline for the next round. That&apos;s why PDCA in the basic metal industry isn&apos;t a project. It&apos;s how you run operations.
                        </p>
                    </div>

                    <div id="wrong" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Where Fabrication Companies Go Wrong with PDCA</h2>
                        <SectionImage src={sectionImages.wrong} alt="Common PDCA mistakes in metal fabrication companies" />
                        <p style={para(font)}>
                            Most metal fabricators have heard of PDCA. Far fewer use it properly. The gap between knowing the theory and actually improving performance comes down to a handful of repeated mistakes.
                        </p>
                        {wrongItems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="iso9001" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How Metal Fabricators Use PDCA for ISO 9001 Compliance</h2>
                        <SectionImage src={sectionImages.iso9001} alt="PDCA cycle supporting ISO 9001 compliance in metal fabrication" />
                        <p style={para(font)}>
                            ISO 9001 clause 10 requires organisations to continually improve the effectiveness of their quality management system. PDCA is the method most auditors expect to see underpinning that requirement.
                        </p>
                        <p style={para(font)}>
                            <strong>Clause 10.2 (Nonconformity and corrective action)</strong> requires you to react to problems, determine root causes, implement corrections and review effectiveness. That&apos;s PDCA in action. When a batch of welded assemblies fails inspection, your corrective action should follow the four-step cycle: plan the fix, trial it, check it worked, then act by updating procedures and retraining staff.
                        </p>
                        <p style={para(font)}>
                            <strong>Clause 9.3 (Management review)</strong> asks for evidence of continual improvement. A log of completed PDCA cycles, showing what you tested, what you measured and what you standardised, gives management review meetings real substance instead of the same vague bullet points every quarter.
                        </p>
                        <p style={para(font)}>
                            <strong>Clause 6.1 (Risk-based thinking)</strong> expects you to identify risks and opportunities. PDCA provides a structured way to test mitigations. If you&apos;ve identified a risk around inconsistent material traceability, you plan a process change, trial it on one product line, check the results and roll it out if effective.
                        </p>
                        <p style={para(font)}>
                            When auditors ask how you demonstrate continual improvement, pointing to a documented history of PDCA cycles with measurable outcomes is far stronger than saying &ldquo;we have regular meetings&rdquo; or &ldquo;we respond to customer feedback&rdquo;. The cycle also supports multi-site consistency. If you operate several fabrication facilities, standardising your PDCA approach means improvements proven at one site can be tested and adopted at others with a clear methodology and comparable data.
                        </p>
                    </div>

                    <div id="mistakes" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common PDCA Mistakes in Metal Fabrication (and How to Avoid Them)</h2>
                        <SectionImage src={sectionImages.mistakes} alt="Avoiding common PDCA mistakes in metal fabrication" />
                        <p style={para(font)}>Even when fabricators commit to using PDCA properly, a few traps keep showing up.</p>
                        {mistakeItems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="digital" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How Digital Audit Tools Strengthen the PDCA Cycle</h2>
                        <SectionImage src={sectionImages.digital} alt="Digital audit tools for PDCA cycle management" />
                        <p style={para(font)}>
                            Spreadsheets can technically track a PDCA cycle. You can log the plan in one tab, record trial data in another, summarise findings in a third and update a status column when you&apos;ve acted. But as soon as you&apos;re running more than a couple of cycles, or working across multiple sites, the system breaks down.
                        </p>
                        <p style={para(font)}>
                            Digital audit tools built for ISO compliance handle PDCA differently. Instead of scattered files, you get a single platform where every stage of the cycle is documented, linked and visible to the people who need it.
                        </p>
                        <p style={para(font)}>
                            <strong>Plan:</strong> You log the problem, attach baseline data and assign responsibility. If the issue ties to a specific ISO clause (say, 8.5.1 on production control), you link it directly so your audit trail is clear from the start.
                        </p>
                        <p style={para(font)}>
                            <strong>Do:</strong> Field teams can document trial activities on mobile devices, attach photos of welding settings, material labels or finished parts, and log observations in real time.
                        </p>
                        <p style={para(font)}>
                            <strong>Check:</strong> Results are captured against the original target. You can compare performance across shifts, machines or sites using dashboards that pull live data.
                        </p>
                        <p style={para(font)}>
                            <strong>Act:</strong> When a change works, it&apos;s built into the corrective action record with closure evidence, linked training records and updated procedure references.
                        </p>
                        <p style={para(font)}>
                            For metal fabricators running PDCA in the basic metal industry, the practical difference is speed and traceability. You move from monthly improvement cycles to weekly ones because documentation happens as you go, not as a separate admin task.
                        </p>
                    </div>

                    <div id="comparison" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Tracking PDCA Cycles in Metal Fabrication: Spreadsheets vs. Audit Software</h2>
                        <ComparisonTable font={font} isMobile={isMobile} />
                    </div>

                    <div id="checklist" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Start Your Next PDCA Cycle with a Metal Fabrication Audit Checklist</h2>
                        <SectionImage src={sectionImages.checklist} alt="Metal fabrication audit checklist for PDCA planning" />
                        <p style={para(font)}>
                            The easiest way to begin using PDCA in the basic metal industry is to run a structured audit that identifies your current gaps. Once you know where performance is falling short, you&apos;ve got the input you need for the Plan stage.
                        </p>
                        <p style={para(font)}>
                            We&apos;ve built a free audit checklist specifically for metal fabrication and basic metal operations. It covers quality control at each production stage, from material receipt and cutting through welding, machining, finishing and final inspection. The checklist is clause-mapped to ISO 9001 so your findings tie directly to your quality management system.
                        </p>
                        <p style={para(font)}>
                            Visit our{" "}
                            <Link
                                href="/industries/basic-metals-and-fabrication-iso-audit-software"
                                style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}
                            >
                                basic metals and fabrication ISO audit software page
                            </Link>{" "}
                            to download the checklist and see how digital tools support every stage of the PDCA process, from planning through to verified closure.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>PDCA Works When You Give It Structure</h2>
                        <p style={para(font)}>
                            The PDCA cycle isn&apos;t complicated. Plan a test, run it, check the results, then either standardise the improvement or try again with better information. What makes it hard is doing that consistently, documenting it properly and making sure the changes actually stick.
                        </p>
                        <p style={para(font)}>
                            Metal fabricators who succeed with PDCA in the basic metal industry are the ones who&apos;ve moved past informal problem solving and built improvement into their management system. They involve shop floor staff in the Plan stage. They measure results in the Check stage instead of guessing. They track corrective actions to verified closure instead of letting them drift.
                        </p>
                        <p style={para(font)}>
                            And increasingly, they&apos;re using purpose-built audit software to give the whole cycle structure, speed and visibility across every site they operate.
                        </p>
                        <p style={para(font)}>
                            Ready to move your PDCA cycles out of spreadsheets and into a system built for ISO auditors? See how iAudit Global helps metal fabricators document improvement, track corrective actions and prepare for certification audits with clause-mapped checklists, mobile evidence capture and centralised visibility across all your sites.
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
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                Try iAudit free or book a demo to see how PDCA-driven audit workflows work for your fabrication team.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", position: "relative" }}>
                                <a
                                    href="https://apps.iaudit.global/"
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
                                        fontFamily: font,
                                    }}
                                >
                                    Try iAudit free
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                                <Link
                                    href="/contact"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        background: "transparent",
                                        color: "#fff",
                                        padding: "0.85rem 1.4rem",
                                        borderRadius: "999px",
                                        fontWeight: 600,
                                        fontSize: "0.92rem",
                                        textDecoration: "none",
                                        border: "1.5px solid rgba(255,255,255,0.5)",
                                        fontFamily: font,
                                    }}
                                >
                                    Book a demo
                                </Link>
                            </div>
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
                                Helping metal fabricators implement PDCA cycles that drive ISO 9001 compliance and measurable improvement.
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
                            Helping metal fabricators implement PDCA cycles that drive ISO 9001 compliance and measurable improvement.
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
