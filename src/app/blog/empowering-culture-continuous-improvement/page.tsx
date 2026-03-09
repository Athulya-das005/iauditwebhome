"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

/* ─── Section images after headings ─────────────────────────────────────── */
const sectionImages: Record<string, string> = {
    "what-ci-means":
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80",
    "iso-standards":
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80",
    "role-of-audit":
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=480&fit=crop&q=80",
    "closing-loop":
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=480&fit=crop&q=80",
    "audit-software":
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80",
};

/* ─── TOC data ───────────────────────────────────────────────────────────── */
const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what-ci-means", label: "What a CI Culture Really Means" },
    { id: "iso-standards", label: "How ISO Standards Embed CI" },
    { id: "role-of-audit", label: "The Role of Audit in Driving CI" },
    { id: "closing-loop", label: "Closing the Loop" },
    { id: "compliance-to-culture", label: "From Compliance to Culture" },
    { id: "audit-software", label: "How Internal Audit Software Helps" },
    { id: "leadership", label: "Leadership, Risk, and Beyond-Compliance" },
    { id: "building-blocks", label: "Practical Building Blocks" },
    { id: "iaudit", label: "Why iAudit Global Matters" },
    { id: "pilot", label: "Help Shape the Future" },
    { id: "faq", label: "Frequently Asked Questions" },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────── */
const faqs = [
    {
        q: "How do internal audits support continuous improvement?",
        a: "Internal audits support continuous improvement by identifying gaps between intended processes and actual performance. When audit findings are analysed properly and linked to corrective actions, they help organisations understand root causes, prevent recurrence, and strengthen systems over time.",
    },
    {
        q: "Why are audits more than just a compliance requirement in ISO standards?",
        a: "ISO standards position audits as tools for evaluating effectiveness, not just conformity. Standards such as ISO 9001 and ISO 45001 require organisations to use audit results to assess whether processes achieve intended outcomes and to drive continual improvement through evidence-based decisions.",
    },
    {
        q: "What is the link between PDCA and internal auditing?",
        a: "Internal audits sit primarily within the Check phase of the Plan–Do–Check–Act cycle. Audit results then feed directly into the Act phase through corrective actions and improvements. When this loop is closed properly, audits become a structured feedback mechanism that supports learning and adaptation.",
    },
    {
        q: "How do nonconformities contribute to continuous improvement?",
        a: "Nonconformities highlight weaknesses in processes, controls, or behaviours. When treated as improvement opportunities rather than failures, they prompt root cause analysis, corrective action, and system improvements that reduce the likelihood of similar issues recurring in the future.",
    },
    {
        q: "What role does internal audit software play in improvement programmes?",
        a: "Internal audit software helps organisations manage audits, findings, and corrective actions in a consistent and traceable way. By linking audits to risks, actions, and follow-up, software supports a closed-loop improvement process that is difficult to sustain using spreadsheets and emails alone.",
    },
    {
        q: "How can organisations measure whether audits are driving real improvement?",
        a: "Meaningful indicators include the time taken to close corrective actions, recurrence rates of similar findings, improvements in process performance metrics, and evidence that audit outcomes have led to lasting changes rather than temporary fixes.",
    },
    {
        q: "Can one audit programme support multiple ISO standards?",
        a: "Yes. Many organisations operate integrated management systems covering ISO 9001, ISO 14001, ISO 45001 and ISO 27001. A single, well-designed audit programme can assess shared processes and controls across standards, improving efficiency while supporting consistent continuous improvement.",
    },
];

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function SectionImage({ src, alt }: { src: string; alt: string }) {
    const f = '"Pp Neue Montreal", sans-serif';
    return (
        <div style={{
            width: "100%",
            borderRadius: "0.875rem",
            overflow: "hidden",
            margin: "1.5rem 0 2rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "320px" }}
                onError={e => {
                    e.currentTarget.style.display = "none";
                    (e.currentTarget.parentElement as HTMLElement).style.display = "none";
                }}
            />
        </div>
    );
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function BlogPost() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [tocOpen, setTocOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const font = '"Pp Neue Montreal", sans-serif';

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            // Scroll-to-top button
            setShowScrollTop(window.scrollY > 400);

            // Active TOC section
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

            {/* ── Big Hero Image ─────────────────────────────────────────── */}
            <div style={{
                position: "relative",
                width: "100%",
                height: isMobile ? "55vw" : "70vh",
                minHeight: isMobile ? "240px" : "440px",
                maxHeight: "700px",
                overflow: "hidden",
            }}>
                <img
                    src="/images/blog-continuous-improvement.png"
                    alt="Empowering a Culture of Continuous Improvement Through Audit"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={e => {
                        e.currentTarget.src =
                            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=700&fit=crop&q=85";
                    }}
                />
                {/* Gradient overlay at the bottom so the content reads cleanly */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)",
                }} />
                {/* Category + meta overlaid on image */}
                <div style={{
                    position: "absolute",
                    bottom: isMobile ? "1rem" : "2rem",
                    left: isMobile ? "1.25rem" : "2.5rem",
                    right: isMobile ? "1.25rem" : "2.5rem",
                }}>
                    <span style={{
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
                    }}>
                        Internal Audit
                    </span>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                    }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            November 20, 2025
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                            </svg>
                            10 Min Read
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Top bar ─────────────────────────────────────────────────── */}
            <div style={{
                borderBottom: "1px solid #e8e4df",
                backgroundColor: "#f9f7f4",
                position: "sticky",
                top: 0,
                zIndex: 40,
            }}>
                <div style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <Link href="/blog" style={{
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
                    }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back To Blog
                    </Link>

                    {isMobile && (
                        <button
                            onClick={() => setTocOpen(v => !v)}
                            style={{
                                display: "flex", alignItems: "center", gap: "5px",
                                background: "none", border: "1px solid #e8e4df",
                                borderRadius: "6px", padding: "4px 10px",
                                cursor: "pointer", color: "#374151",
                                fontSize: "0.79rem", fontFamily: font,
                            }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" />
                            </svg>
                            Contents
                        </button>
                    )}
                </div>

                {/* Mobile TOC dropdown */}
                {isMobile && tocOpen && (
                    <div style={{
                        background: "#fff",
                        borderBottom: "1px solid #e8e4df",
                        padding: "0.875rem 1.25rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1px",
                    }}>
                        {tocItems.map(item => {
                            const isActive = activeSection === item.id;
                            return (
                                <button key={item.id} onClick={() => scrollTo(item.id)} style={{
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
                                    transition: "all 0.2s ease",
                                }}>
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ── 3-column body ──────────────────────────────────────────── */}
            <div style={{
                maxWidth: "1260px",
                margin: "0 auto",
                padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "210px 1fr 240px",
                gap: isMobile ? "2rem" : "3rem",
                alignItems: "start",
            }}>

                {/* ── LEFT: Table of Contents ─────────────────────────── */}
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <p style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            letterSpacing: "0.13em",
                            textTransform: "uppercase",
                            color: "#374151",
                            margin: "0 0 0.625rem",
                            fontFamily: font,
                        }}>
                            Contents
                        </p>

                        {/* Vertical line + items */}
                        <div style={{ position: "relative" }}>
                            {/* Static vertical line */}
                            <div style={{
                                position: "absolute",
                                left: "10px",
                                top: 0,
                                bottom: 0,
                                width: "1px",
                                background: "#e4e0db",
                            }} />

                            <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                {tocItems.map(item => {
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
                                                position: "relative",
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

                {/* ── CENTER: Article ─────────────────────────────────── */}
                <article>
                    <h1 style={{
                        fontSize: isMobile ? "1.9rem" : "2.55rem",
                        fontWeight: 400,          /* lighter, not heavy bold */
                        color: "#111827",
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                        margin: "0 0 1rem",
                        fontFamily: font,
                    }}>
                        Empowering a Culture of Continuous Improvement Through Audit
                    </h1>

                    {/* ── Intro ────────────────────────────────────────── */}
                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            For many organisations, internal audits are still treated as periodic compliance checks. Something to prepare for, pass, and move on from. Yet ISO standards were never intended to support a tick-box culture. At their core, ISO 9001, ISO 14001, ISO 45001 and ISO 27001 are frameworks for learning, adaptation, and improvement.
                        </p>
                        <p style={para(font)}>
                            When audits are planned, executed, and followed up effectively, they become one of the most powerful drivers of continuous improvement. The difference lies not in the standard itself, but in how audits are used within the management system.
                        </p>
                        <p style={para(font)}>
                            This article explores how organisations can move from audit for compliance to audit for improvement, and how modern internal audit software can help embed a lasting culture of continual improvement.
                        </p>
                    </div>

                    {/* ── Section 1 ─────────────────────────────────────── */}
                    <div id="what-ci-means" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What a Continuous Improvement Culture Really Means</h2>
                        <SectionImage src={sectionImages["what-ci-means"]} alt="Continuous improvement culture" />
                        <p style={para(font)}>
                            Continuous improvement is a mindset grounded in the belief that every process, product, and control can be improved, even when it appears to be working well. It draws heavily on the principles of Kaizen, where many small, incremental improvements compound into meaningful performance gains over time.
                        </p>
                        <p style={para(font)}>
                            Within ISO management systems, continuous improvement is not optional. It is embedded directly into the requirements and reinforced through the Plan–Do–Check–Act cycle. A genuine continuous improvement culture is visible when people at all levels actively look for issues, raise concerns early, suggest improvements, and use audits as learning opportunities rather than compliance rituals.
                        </p>
                        <p style={para(font)}>
                            In such environments, auditing software for auditors is not used simply to record findings, but to support reflection, analysis, and better decision-making.
                        </p>
                    </div>

                    {/* ── Section 2 ─────────────────────────────────────── */}
                    <div id="iso-standards" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>How ISO Standards Embed Continuous Improvement</h2>
                        <SectionImage src={sectionImages["iso-standards"]} alt="ISO standards continuous improvement" />
                        <p style={para(font)}>
                            ISO standards are designed as living systems rather than static rulebooks. ISO 9001, ISO 14001, ISO 45001 and ISO 27001 all require organisations to demonstrate continual improvement of their management systems.
                        </p>
                        <p style={para(font)}>At an operational level, continuous improvement is driven through the PDCA cycle:</p>

                        {/* PDCA Callout */}
                        <div style={{
                            background: "#fff", borderRadius: "0.875rem",
                            border: "1px solid #e8e4df", padding: "0.375rem 1.25rem",
                            margin: "1.25rem 0",
                        }}>
                            {[
                                { label: "Plan", desc: "Define objectives, assess risks and opportunities, and design processes." },
                                { label: "Do", desc: "Implement controls and operate processes." },
                                { label: "Check", desc: "Monitor performance, conduct internal audits, and review nonconformities." },
                                { label: "Act", desc: "Take corrective actions, update processes, and raise performance expectations." },
                            ].map((item, i, arr) => (
                                <div key={item.label} style={{
                                    display: "flex", alignItems: "flex-start", gap: "1rem",
                                    padding: "0.875rem 0",
                                    borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none",
                                }}>
                                    <span style={{
                                        minWidth: "46px", height: "24px", borderRadius: "5px",
                                        background: "#006644", color: "#fff",
                                        fontSize: "0.72rem", fontWeight: 700,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0, fontFamily: font,
                                    }}>{item.label}</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p style={para(font)}>
                            Clause 10 of ISO management system standards makes this explicit. Organisations must react to nonconformities, evaluate causes, implement corrective actions, and continually improve the suitability and effectiveness of the system.
                        </p>
                    </div>

                    {/* ── Section 3 ─────────────────────────────────────── */}
                    <div id="role-of-audit" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Role of Audit in Driving Continuous Improvement</h2>
                        <SectionImage src={sectionImages["role-of-audit"]} alt="Role of internal audit" />
                        <p style={para(font)}>
                            ISO 19011 positions auditing as a tool to assess not only conformity, but also effectiveness and opportunities for improvement. When designed well, audits provide structured feedback that feeds directly into the Check and Act stages of PDCA.
                        </p>
                        <p style={para(font)}>A mature audit programme typically includes a mix of:</p>
                        <ul style={{ margin: "0.5rem 0 1.25rem", paddingLeft: 0, listStyle: "none", fontFamily: font }}>
                            {[
                                ["System audits", "assessing the management system against ISO requirements."],
                                ["Process audits", "evaluating how well processes achieve intended outcomes."],
                                ["Product or output audits", "checking results against defined criteria."],
                                ["Layered process audits", "involving different management levels."],
                            ].map(([bold, rest]) => (
                                <li key={bold} style={{ position: "relative", paddingLeft: "1.25rem", marginBottom: "0.6rem", fontSize: "0.975rem", color: "#374151", lineHeight: 1.7 }}>
                                    <span style={{ position: "absolute", left: 0, top: "0.58em", width: "6px", height: "6px", borderRadius: "50%", background: "#006644", display: "inline-block" }} />
                                    <strong style={{ color: "#111827", fontFamily: font }}>{bold}</strong> {rest}
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            When these audits are risk-based, consistently executed, and supported by appropriate audit software, they move beyond inspection and become a learning mechanism.
                        </p>
                    </div>

                    {/* ── Section 4 ─────────────────────────────────────── */}
                    <div id="closing-loop" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Closing the Loop: From Nonconformance to Improvement</h2>
                        <SectionImage src={sectionImages["closing-loop"]} alt="Closing the loop in audit" />
                        <p style={para(font)}>
                            Every nonconformance represents an opportunity to improve. Treating it as a failure discourages reporting and learning. Treating it as data enables progress.
                        </p>
                        <p style={para(font)}>
                            A robust corrective action system distinguishes between immediate corrections for isolated issues and full corrective actions for significant or recurring problems. Effective corrective action requires understanding why the issue occurred and why it was not detected earlier.
                        </p>
                        <p style={para(font)}>
                            This typically involves root cause analysis covering occurrence causes, escape causes, and systemic weaknesses. Corrective actions should have clear owners, realistic deadlines, and defined acceptance criteria based on effectiveness, not just completion.
                        </p>
                        <p style={para(font)}>
                            Audits then close the loop by verifying that actions have been implemented, remain in place, and actually prevent recurrence. Over time, this creates institutional learning where improvements become embedded rather than temporary fixes.
                        </p>
                    </div>

                    {/* ── Section 5 ─────────────────────────────────────── */}
                    <div id="compliance-to-culture" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>From Compliance to Culture: What High-Maturity Organisations Do Differently</h2>
                        <p style={para(font)}>Organisations with strong continuous improvement cultures share several common behaviours.</p>
                        {[
                            { title: "They go beyond passing audits.", desc: "Certification is treated as a baseline, not a finish line. Audit results are actively linked to risks, objectives, and improvement priorities." },
                            { title: "They embed PDCA in daily work.", desc: "PDCA is applied not only at system level but within processes, projects, and teams. Internal audits validate how work is actually performed, not just how it is documented." },
                            { title: "They empower people to speak up.", desc: "Psychological safety encourages early reporting of issues and improvement ideas. This leads to better audit evidence and faster detection of systemic risks." },
                            { title: "They use meaningful metrics.", desc: "Instead of counting audits or nonconformities, they track time to close corrective actions, recurrence rates, and audit effectiveness." },
                            { title: "They integrate standards.", desc: "Many operate integrated management systems covering ISO 9001, ISO 14001, ISO 45001 and ISO 27001, reducing duplication and focusing improvement where it delivers the greatest benefit." },
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: "#fff", borderRadius: "0.75rem",
                                padding: "1.1rem 1.4rem", marginBottom: "0.75rem",
                                border: "1px solid #e8e4df", borderLeft: "4px solid #006644",
                            }}>
                                <p style={{ margin: "0 0 0.25rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.65, fontFamily: font }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Section 6 ─────────────────────────────────────── */}
                    <div id="audit-software" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>How Internal Audit Software Enables a Culture of Improvement</h2>
                        <SectionImage src={sectionImages["audit-software"]} alt="Audit software dashboard" />
                        <p style={para(font)}>
                            Manual approaches built around spreadsheets, emails, and disconnected documents make it difficult to link audits, nonconformities, risks, and corrective actions in a traceable way.
                        </p>
                        <p style={para(font)}>Modern internal audit software addresses this by providing:</p>
                        <ul style={{ margin: "0.5rem 0 1.25rem", paddingLeft: 0, listStyle: "none", fontFamily: font }}>
                            {[
                                "A central repository for findings, nonconformities, and corrective actions.",
                                "Workflow automation for assigning, tracking, and escalating actions.",
                                "ISO-aligned checklists that support consistent audits over time.",
                                "Dashboards that highlight trends, recurring issues, and improvement progress.",
                            ].map(text => (
                                <li key={text} style={{ position: "relative", paddingLeft: "1.25rem", marginBottom: "0.6rem", fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                                    <span style={{ position: "absolute", left: 0, top: "0.58em", width: "6px", height: "6px", borderRadius: "50%", background: "#006644", display: "inline-block" }} />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Section 7 ─────────────────────────────────────── */}
                    <div id="leadership" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Leadership, Risk, and Beyond-Compliance Thinking</h2>
                        <p style={para(font)}>
                            Leadership commitment is a core principle of ISO 9001. Leaders set priorities, allocate resources, and review performance through the lens of improvement. Evidence from certification bodies consistently shows findings related to planning and risk management, particularly in linking risks to actions.
                        </p>
                        <p style={para(font)}>
                            Risk-based auditing strengthens this link. Risks inform where audits focus. Audit results inform where controls need strengthening. Lessons learned feed back into risk treatment and planning.
                        </p>
                        <p style={para(font)}>
                            This creates a reinforcing cycle where risk management activities and internal audits work together to improve resilience, not just demonstrate compliance.
                        </p>
                    </div>

                    {/* ── Section 8 ─────────────────────────────────────── */}
                    <div id="building-blocks" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Practical Building Blocks of a CI-Through-Audit Programme</h2>
                        <p style={para(font)}>Organisations that successfully embed continuous improvement through audit typically adopt the following practices:</p>
                        <ul style={{ margin: "0.5rem 0 1.25rem", paddingLeft: 0, listStyle: "none", fontFamily: font }}>
                            {[
                                "Risk-based audit planning aligned with performance data and risk registers.",
                                "Structured nonconformance and corrective action processes with defined acceptance criteria.",
                                "Regular management reviews that assess trends and corrective action effectiveness.",
                                "Active sharing of lessons learned across teams and sites.",
                                "Ongoing training that helps people participate confidently in audits.",
                            ].map(text => (
                                <li key={text} style={{ position: "relative", paddingLeft: "1.25rem", marginBottom: "0.6rem", fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                                    <span style={{ position: "absolute", left: 0, top: "0.58em", width: "6px", height: "6px", borderRadius: "50%", background: "#006644", display: "inline-block" }} />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Section 9 ─────────────────────────────────────── */}
                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Why Pilot-Led Platforms Like iAudit Global Matter</h2>
                        <p style={para(font)}>
                            Traditional audit software often treats audits as isolated events. ISO-focused platforms designed around PDCA treat them as part of a continuous improvement loop.
                        </p>
                        <p style={para(font)}>
                            iAudit Global is being developed with this principle at its core. By linking audit planning, execution, findings, corrective actions, and follow-up in one system, it supports organisations in moving from audit for certification to audit for improvement across ISO 9001, ISO 14001, ISO 45001 and ISO 27001.
                        </p>
                        <p style={para(font)}>
                            Rather than adding another tool, the aim is to provide a practical backbone for continuous improvement driven by evidence and learning.
                        </p>
                    </div>

                    {/* ── Section 10: Pilot CTA (no button) ────────────── */}
                    <div id="pilot" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <div style={{
                            background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)",
                            borderRadius: "1.1rem",
                            padding: isMobile ? "2rem 1.5rem" : "2.5rem",
                            color: "#fff",
                            position: "relative",
                            overflow: "hidden",
                        }}>
                            <div style={{
                                position: "absolute", inset: 0,
                                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)",
                                backgroundSize: "24px 24px",
                                pointerEvents: "none",
                            }} />
                            <h2 style={{
                                fontSize: isMobile ? "1.35rem" : "1.7rem",
                                fontWeight: 400,
                                color: "#fff",
                                margin: "0 0 0.75rem",
                                fontFamily: font,
                                lineHeight: 1.25,
                                position: "relative",
                            }}>
                                Help Shape the Future of Audit-Driven Improvement
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                iAudit Global is currently inviting audit managers, internal auditors, and compliance leaders to participate in its pilot programme. Participants receive three months of free access with no credit card and no obligation, while contributing feedback that helps shape a platform built around real audit challenges.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: 0, position: "relative", fontFamily: font }}>
                                For organisations serious about building a culture of continuous improvement through audit, this is an opportunity to influence how the next generation of audit software supports PDCA, risk-based auditing, and meaningful corrective action.
                            </p>
                            {/* No button here as requested */}
                        </div>
                    </div>

                    {/* ── FAQ ──────────────────────────────────────────── */}
                    <div id="faq" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Frequently Asked Questions</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {faqs.map((faq, i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div key={i} style={{
                                        background: "#fff",
                                        borderRadius: "0.75rem",
                                        border: `1px solid ${isOpen ? "#b5d0c4" : "#e8e4df"}`,
                                        overflow: "hidden",
                                        transition: "border-color 0.25s ease",
                                    }}>
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? null : i)}
                                            style={{
                                                width: "100%", display: "flex", alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "1rem 1.3rem",
                                                background: "transparent", border: "none",
                                                cursor: "pointer", textAlign: "left", gap: "1rem",
                                                fontFamily: font,
                                            }}
                                        >
                                            <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#111827", lineHeight: 1.4, fontFamily: font }}>
                                                {i + 1}. {faq.q}
                                            </span>
                                            <span style={{
                                                flexShrink: 0, width: "26px", height: "26px",
                                                borderRadius: "50%",
                                                background: isOpen ? "#006644" : "#f0ede8",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                transition: "background 0.25s ease",
                                            }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                    stroke={isOpen ? "#fff" : "#6B7280"} strokeWidth="2.5"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}>
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div style={{
                                                padding: "0 1.3rem 1rem",
                                                color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.78,
                                                borderTop: "1px solid #f0ede8", paddingTop: "0.875rem",
                                                fontFamily: font,
                                            }}>
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </article>

                {/* ── RIGHT: Author card (desktop only, no pilot card) ── */}
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <div style={{
                            background: "#fff",
                            borderRadius: "1.1rem",
                            border: "1px solid #e8e4df",
                            padding: "2rem 1.5rem",
                            textAlign: "center",
                        }}>
                            {/* Tall avatar */}
                            <div style={{
                                width: "90px",
                                height: "90px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #002e1d, #006644)",
                                margin: "0 auto 1.1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>

                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>
                                iAudit Global Team
                            </p>
                            <p style={{ margin: "0 0 1.1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>
                                Author
                            </p>

                            {/* Divider */}
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />

                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                A team of audit professionals and ISO specialists dedicated to helping organisations build lasting cultures of continuous improvement through structured, effective internal audit programmes.
                            </p>

                            <Link href="/contact" style={{
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
                            }}>
                                Book Consultation
                            </Link>
                        </div>
                    </aside>
                )}

                {/* Mobile: Author card below article */}
                {isMobile && (
                    <div style={{
                        background: "#fff", borderRadius: "1.1rem",
                        border: "1px solid #e8e4df", padding: "1.75rem 1.5rem",
                        textAlign: "center",
                    }}>
                        <div style={{
                            width: "72px", height: "72px", borderRadius: "50%",
                            background: "linear-gradient(135deg, #002e1d, #006644)",
                            margin: "0 auto 0.875rem",
                            display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>iAudit Global Team</p>
                        <p style={{ margin: "0 0 1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                            Audit professionals and ISO specialists helping organisations build lasting cultures of continuous improvement.
                        </p>
                        <Link href="/contact" style={{
                            display: "block", background: "#3d5a47", color: "#fff",
                            padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700,
                            fontSize: "0.75rem", textDecoration: "none",
                            letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font,
                        }}>
                            Book Consultation
                        </Link>
                    </div>
                )}
            </div>

            <CTA />
            <Footer />

            {/* ── Scroll-to-top button ────────────────────────────────── */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "2rem",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#006644",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(0,102,68,0.4)",
                    opacity: showScrollTop ? 1 : 0,
                    pointerEvents: showScrollTop ? "auto" : "none",
                    transform: showScrollTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    zIndex: 100,
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>
        </div>
    );
}

/* ─── Style helpers ───────────────────────────────────────────────────────── */
function h2(font: string): React.CSSProperties {
    return {
        fontSize: "1.45rem",
        fontWeight: 500,
        color: "#111827",
        letterSpacing: "-0.018em",
        lineHeight: 1.28,
        margin: "0 0 0.75rem",
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
