"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog-process-automation.webp";

const ISO9001_URL = "/standards/iso-9001-audit-management-software";
const ISO14001_URL = "/standards/iso-14001-audit-management-software";
const ISO45001_URL = "/standards/iso-45001-audit-management-software";
const PDCA_URL = "/pdca-cycle-audit-software";
const BUILT_BY_AUDITORS_URL = "/audit-management-software-built-by-auditors";
const PRICING_URL = "/pricing";
const AUDIT_REPORT_URL = "/blog/how-to-write-an-iso-internal-audit-report-that-matters";
const FINDINGS_URL = "/blog/internal-audit-findings-explained";

const sectionImages: Record<string, string> = {
    meaning: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    process: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    fail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    industry: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=480&fit=crop&q=80&fm=webp",
    spreadsheets: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "meaning", label: "What They Really Mean" },
    { id: "process", label: "Step-by-Step Process" },
    { id: "fail", label: "Why They Fail" },
    { id: "industry", label: "Industry Examples" },
    { id: "spreadsheets", label: "Why Spreadsheets Struggle" },
    { id: "pdca", label: "PDCA Connection" },
    { id: "closure", label: "From Closure to Control" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const processSteps = [
    { num: "1", title: "Identify and Document the Nonconformity", content: "Everything begins with a clear finding. If the nonconformity is vague, the corrective action will be vague. A strong finding follows the Requirement\u2013Evidence\u2013Gap logic. Without this clarity, root cause analysis becomes guesswork.", hasLinks: true },
    { num: "2", title: "Immediate Correction", content: "The immediate issue must be contained. If a calibration certificate is expired, remove the equipment from service. If a waste container is unlabelled, label it immediately. But stopping here guarantees recurrence." },
    { num: "3", title: "Root Cause Analysis", content: "This is where most corrective actions after an internal audit fail. \u201cHuman error\u201d is not a root cause. It is a symptom. Ask why repeatedly. Why was the training missed? Why was the inspection not done? Why did the supervisor not notice?", hasList: true },
    { num: "4", title: "Define the Corrective Action", content: "Now the action must eliminate the cause.", hasActionList: true },
    { num: "5", title: "Implement and Track", content: "This stage is operational. Many organisations rely on spreadsheets or email reminders to track actions. This works until it does not. Actions drift. Deadlines pass. Visibility fades." },
    { num: "6", title: "Verify Effectiveness", content: "This is the most overlooked stage. A corrective action is not complete when the task is marked done. It is complete when effectiveness is verified.", hasVerifyList: true },
];

const rootCauses = [
    "No automated reminder system",
    "No clear ownership",
    "Overloaded supervisors",
    "Poorly defined procedures",
];

const actionItems = [
    "A named owner",
    "A measurable outcome",
    "A realistic deadline",
    "Clear documentation",
];

const verifyQuestions = [
    "Has the issue recurred?",
    "Has the data improved?",
    "Has the control actually changed behaviour?",
];

const failPatterns = [
    "Root cause analysis is superficial",
    "Actions have no clear owner",
    "Deadlines are unrealistic or invisible",
    "Closure happens without effectiveness checks",
    "Repeat findings appear in the next audit cycle",
];

const MANUFACTURING_URL = "/industries/manufacturing-iso-audit-software";
const CONSTRUCTION_URL = "/industries/construction-iso-audit-software";
const HEALTHCARE_URL = "/industries/healthcare-compliance-software";
const LOGISTICS_URL = "/industries/transport-and-logistics-iso-audit-software";

const spreadsheetLimitations = [
    "Automatically highlight overdue tasks",
    "Provide real-time cross-site visibility",
    "Link actions back to clauses and findings",
    "Support structured PDCA reviews",
];

const controlBenefits = [
    "See recurring patterns",
    "Compare sites",
    "Identify systemic weaknesses",
    "Prove continual improvement",
];

const faqItems = [
    { question: "What are corrective actions after an internal audit?", answer: "Corrective actions after an internal audit are structured steps taken to eliminate the root cause of a nonconformity. Unlike a simple correction, a corrective action prevents the issue from recurring and supports continual improvement under ISO standards." },
    { question: "What is the difference between correction and corrective action?", answer: "A correction fixes the immediate issue, such as completing a missing record. A corrective action addresses the underlying cause, such as implementing a system to prevent records from expiring unnoticed. ISO 9001, ISO 14001 and ISO 45001 all require this distinction." },
    { question: "How do you write effective corrective actions after an internal audit?", answer: "Effective corrective actions after an internal audit should include a clear root cause, a defined action to eliminate that cause, a named owner, a deadline and a method for verifying effectiveness. Without these elements, repeat findings are likely." },
    { question: "Why do corrective actions fail in ISO audits?", answer: "Corrective actions often fail because root cause analysis is superficial, ownership is unclear, deadlines are not tracked or effectiveness is not verified. In multi-site organisations, a lack of central visibility also contributes to recurring issues." },
    { question: "How should corrective action effectiveness be verified?", answer: "Effectiveness should be verified through follow-up audits, performance data review or sampling. A corrective action should only be closed when there is objective evidence that the issue will not recur." },
    { question: "Can spreadsheets manage corrective actions after an internal audit?", answer: "Spreadsheets can list actions, but they struggle with deadline tracking, cross-site visibility and PDCA integration. Over time, corrective actions become fragmented across files and inboxes, reducing accountability and oversight." },
    { question: "How does iAudit Global help manage corrective actions after an internal audit?", answer: "iAudit Global centralises findings, assigns ownership, tracks deadlines and verifies effectiveness through structured PDCA workflows. This improves visibility across sites and helps organisations move from simple closure to controlled, measurable improvement." },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div style={{ width: "100%", borderRadius: "0.875rem", overflow: "hidden", margin: "1.5rem 0 2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <img src={src} alt={alt} loading="lazy" style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "320px" }}
                onError={(e) => { e.currentTarget.style.display = "none"; (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }} />
        </div>
    );
}

export default function CorrectiveActionsBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [tocOpen, setTocOpen] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';

    useEffect(() => { const c = () => setIsMobile(window.innerWidth < 900); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
    useEffect(() => {
        const onScroll = () => { for (let i = tocItems.length - 1; i >= 0; i--) { const el = document.getElementById(tocItems[i].id); if (el && el.getBoundingClientRect().top < 140) { setActiveSection(tocItems[i].id); return; } } setActiveSection(tocItems[0].id); };
        window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); if (isMobile) setTocOpen(false); };

    const p = (extra?: React.CSSProperties): React.CSSProperties => ({ fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font, ...extra });
    const h2s: React.CSSProperties = { fontSize: "1.6rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font };
    const h3s: React.CSSProperties = { fontSize: "1.2rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.01em", lineHeight: 1.3, margin: "1.5rem 0 0.625rem", fontFamily: font };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: font }}>
            {/* Hero */}
            <div style={{ position: "relative", width: "100%", height: isMobile ? "55vw" : "70vh", minHeight: isMobile ? "240px" : "440px", maxHeight: "700px", overflow: "hidden" }}>
                <Image src={HERO_IMAGE} alt="Corrective actions after an internal audit - from findings to closure" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)" }} />
                <div style={{ position: "absolute", bottom: isMobile ? "1rem" : "2rem", left: isMobile ? "1.25rem" : "2.5rem", right: isMobile ? "1.25rem" : "2.5rem" }}>
                    <span style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", borderRadius: "999px", padding: "3px 14px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.625rem", fontFamily: font }}>Corrective Actions</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>August 19, 2026</span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>12 Min Read</span>
                    </div>
                </div>
            </div>

            {/* Top bar */}
            <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: 0, zIndex: 40 }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.5rem", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "0.79rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: font }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        Back To Blog
                    </Link>
                    {isMobile && <button onClick={() => setTocOpen((v) => !v)} style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "1px solid #e8e4df", borderRadius: "6px", padding: "4px 10px", cursor: "pointer", color: "#374151", fontSize: "0.79rem", fontFamily: font }}>Contents</button>}
                </div>
                {isMobile && tocOpen && (
                    <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "0.875rem 1.25rem", display: "flex", flexDirection: "column", gap: "1px" }}>
                        {tocItems.map((item) => { const a = activeSection === item.id; return (<button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", background: a ? "rgba(0,102,68,0.07)" : "transparent", border: "none", borderLeft: a ? "3px solid #006644" : "3px solid transparent", padding: "0.45rem 0.75rem", borderRadius: "0 5px 5px 0", cursor: "pointer", fontSize: "0.84rem", color: a ? "#006644" : "#6B7280", fontWeight: a ? 600 : 400, fontFamily: font, lineHeight: 1.4 }}>{item.label}</button>); })}
                    </div>
                )}
            </div>

            {/* 3-col body */}
            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "210px 1fr 240px", gap: isMobile ? "2rem" : "3rem", alignItems: "start" }}>

                {/* LEFT TOC */}
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#374151", margin: "0 0 0.625rem", fontFamily: font }}>Contents</p>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "1px", background: "#e4e0db" }} />
                            <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                {tocItems.map((item) => { const a = activeSection === item.id; return (<button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", border: "none", padding: "0.48rem 0.625rem 0.48rem 1.5rem", cursor: "pointer", fontSize: "0.845rem", fontFamily: font, lineHeight: 1.38, color: a ? "#006644" : "#6B7280", fontWeight: a ? 600 : 400, background: a ? "rgba(0,102,68,0.06)" : "transparent", borderRadius: "0 6px 6px 0", borderLeft: a ? "2px solid #006644" : "2px solid transparent" }}>{item.label}</button>); })}
                            </nav>
                        </div>
                    </aside>
                )}

                {/* CENTER ARTICLE */}
                <article>
                    <h1 style={{ fontSize: isMobile ? "2.15rem" : "2.85rem", fontWeight: 600, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1rem", fontFamily: font }}>
                        Corrective Actions After an Internal Audit: From Findings to Closure
                    </h1>

                    {/* INTRO */}
                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.25rem 1.5rem", margin: "0 0 1.25rem" }}>
                            <p style={p({ margin: "0 0 0.75rem" })}>Managing corrective actions after an internal audit is the most critical part of the PDCA cycle, yet it is often where compliance programmes fail. While many organisations stop at a &ldquo;correction&rdquo; (the immediate fix), ISO standards require a permanent &ldquo;corrective action&rdquo; that eliminates the root cause to prevent recurrence.</p>
                            <p style={p({ margin: 0 })}>iAudit Global helps teams move beyond fragmented spreadsheets by centralising findings, assigning clear ownership, and ensuring every action is verified for effectiveness. This structured approach to ISO audit management software ensures that nonconformities are actually resolved rather than just recorded, protecting your certification and driving real operational oversight.</p>
                        </div>
                        <p style={p()}>I have seen internal audits that were thorough, well structured and technically sound, yet the same issues returned year after year.</p>
                        <p style={p()}>The audit was not the problem.</p>
                        <p style={p()}>The weakness sat in the corrective actions after an internal audit. Findings were written. Reports were issued. Actions were &ldquo;closed&rdquo;. But nothing fundamentally changed.</p>
                        <p style={p({ fontWeight: 600, color: "#111827" })}>Corrective actions after an internal audit are where the real value of auditing either materialises or quietly disappears.</p>
                    </div>

                    {/* MEANING */}
                    <div id="meaning" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>What Corrective Actions After an Internal Audit Really Mean</h2>
                        <SectionImage src={sectionImages.meaning} alt="Correction vs corrective action after an internal audit" />
                        <p style={p()}>One of the most common misunderstandings I encounter is the confusion between correction and corrective action.</p>

                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.875rem", margin: "1rem 0 1.25rem" }}>
                            <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", border: "1px solid #e8e4df", borderLeft: "4px solid #d97706" }}>
                                <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#d97706", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>Correction</p>
                                <p style={{ margin: 0, color: "#374151", fontSize: "0.92rem", lineHeight: 1.65, fontFamily: font }}>Fixes the <strong>immediate issue</strong>. If a training record is missing and you complete the training, that is a correction.</p>
                            </div>
                            <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                                <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#006644", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>Corrective Action</p>
                                <p style={{ margin: 0, color: "#374151", fontSize: "0.92rem", lineHeight: 1.65, fontFamily: font }}>Removes the <strong>cause</strong>. If you implement a system that prevents training records from expiring unnoticed again, that is corrective action.</p>
                            </div>
                        </div>

                        <p style={p()}>ISO 9001 clause 10.2 makes this distinction clear. The same principle applies under ISO 14001 and ISO 45001. The goal is not to tidy paperwork. It is to prevent recurrence.</p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", margin: "1rem 0 1.25rem" }}>
                            {[
                                { text: "For organisations running quality audits under ISO 9001, corrective action is central to clause 10.2 and continual improvement.", linkText: "ISO 9001 audit management software", linkHref: ISO9001_URL },
                                { text: "Environmental programmes under ISO 14001 often struggle with repeat legal register gaps or spill response failures because actions are closed without verification.", linkText: "ISO 14001 audit management software", linkHref: ISO14001_URL },
                                { text: "The same principle applies in safety management systems under ISO 45001, where corrective action must address underlying hazards rather than simply re-issuing toolbox talks.", linkText: "ISO 45001 audit management software", linkHref: ISO45001_URL },
                            ].map((item) => (
                                <div key={item.linkText} style={{ background: "rgba(0,102,68,0.04)", borderRadius: "0.75rem", padding: "0.875rem 1rem", border: "1px solid rgba(0,102,68,0.1)" }}>
                                    <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.68, fontFamily: font }}>
                                        {item.text}{" "}
                                        <Link href={item.linkHref} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>{item.linkText}</Link>
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p style={p({ fontWeight: 600, color: "#111827" })}>Corrective actions after an internal audit must eliminate root cause, not simply restore compliance on the surface.</p>
                    </div>

                    {/* PROCESS */}
                    <div id="process" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>The Step-by-Step Process: From Finding to Closure</h2>
                        <SectionImage src={sectionImages.process} alt="Step by step corrective action process from finding to closure" />
                        <p style={p()}>If you want corrective actions after an internal audit to work, the process must be structured.</p>

                        {processSteps.map((step) => (
                            <div key={step.num} style={{ background: "#fff", borderRadius: "0.875rem", padding: "1.25rem 1.4rem", marginBottom: "1rem", border: "1px solid #e8e4df", position: "relative" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", fontFamily: font, flexShrink: 0 }}>{step.num}</span>
                                    <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#111827", fontFamily: font }}>{step.title}</h3>
                                </div>
                                <p style={{ fontSize: "0.92rem", color: "#374151", lineHeight: 1.68, margin: "0 0 0.5rem", fontFamily: font }}>{step.content}</p>
                                {step.hasLinks && (
                                    <p style={{ fontSize: "0.92rem", color: "#374151", lineHeight: 1.68, margin: 0, fontFamily: font }}>
                                        <Link href={AUDIT_REPORT_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>I wrote previously about how to structure findings properly and how to write an ISO internal audit report.</Link>
                                    </p>
                                )}
                                {step.hasList && (
                                    <div style={{ margin: "0.5rem 0 0", padding: "0.75rem 1rem", background: "rgba(0,102,68,0.04)", borderRadius: "0.5rem" }}>
                                        <p style={{ margin: "0 0 0.5rem", fontSize: "0.88rem", color: "#374151", fontFamily: font }}>Often the root cause lies in system design:</p>
                                        {rootCauses.map((c) => (<div key={c} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.2rem 0" }}><span style={{ color: "#006644", fontWeight: 700, marginTop: "2px" }}>›</span><span style={{ fontSize: "0.9rem", color: "#374151", fontFamily: font }}>{c}</span></div>))}
                                    </div>
                                )}
                                {step.hasActionList && (
                                    <div style={{ margin: "0.25rem 0 0" }}>
                                        <p style={{ margin: "0 0 0.5rem", fontSize: "0.88rem", color: "#374151", fontFamily: font }}>It should include:</p>
                                        {actionItems.map((a) => (<div key={a} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.2rem 0" }}><span style={{ color: "#006644", fontWeight: 700 }}>✓</span><span style={{ fontSize: "0.9rem", color: "#374151", fontFamily: font }}>{a}</span></div>))}
                                        <p style={{ margin: "0.5rem 0 0", fontSize: "0.92rem", color: "#374151", lineHeight: 1.68, fontFamily: font, fontWeight: 500 }}>Corrective actions after an internal audit should strengthen the system, not create more paperwork.</p>
                                    </div>
                                )}
                                {step.hasVerifyList && (
                                    <div style={{ margin: "0.25rem 0 0" }}>
                                        <p style={{ margin: "0 0 0.5rem", fontSize: "0.88rem", color: "#374151", fontFamily: font }}>Ask:</p>
                                        {verifyQuestions.map((q) => (<div key={q} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.2rem 0" }}><span style={{ color: "#d97706", fontWeight: 700 }}>?</span><span style={{ fontSize: "0.9rem", color: "#374151", fontFamily: font }}>{q}</span></div>))}
                                        <p style={{ margin: "0.5rem 0 0", fontSize: "0.92rem", color: "#6B7280", fontStyle: "italic", fontFamily: font }}>Without verification, closure is an assumption.</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* FAIL */}
                    <div id="fail" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Why Corrective Actions After an Internal Audit Fail in Practice</h2>
                        <SectionImage src={sectionImages.fail} alt="Why corrective actions fail in practice" />
                        <p style={p()}>There are patterns I see repeatedly:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "0 0 1rem" }}>
                            {failPatterns.map((item, i, arr) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ color: "#dc2626", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✕</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={p()}>In multi-site organisations, this becomes even more complex. Each site may manage actions differently, making trend analysis almost impossible.</p>
                        <p style={p()}>This is often where static templates struggle. A document records what should happen, but it does not enforce follow-up.</p>
                    </div>

                    {/* INDUSTRY */}
                    <div id="industry" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Industry Examples of Weak Corrective Action</h2>
                        <SectionImage src={sectionImages.industry} alt="Industry examples of weak corrective action in manufacturing construction healthcare" />
                        <p style={p()}>The risk looks different across sectors. Corrective actions after an internal audit must reflect operational reality, not generic theory.</p>
                        <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                            <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>Manufacturing</p>
                            <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>Recurring calibration failures often trace <Link href={MANUFACTURING_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>back to poor asset tracking rather than individual oversight.</Link> Expired gauges are corrected, but no system exists to prevent recurrence. Over time, repeat nonconformities damage customer confidence and audit credibility.</p>
                        </div>
                        <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                            <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>Construction</p>
                            <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>Permit to work breaches reappear when subcontractor controls are not embedded into site routines. Actions may be issued centrally, but enforcement varies between projects. Without cross-project visibility, <Link href={CONSTRUCTION_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>the same safety failure surfaces repeatedly.</Link></p>
                        </div>
                        <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                            <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>Healthcare</p>
                            <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>Repeated documentation gaps often stem from workload pressure rather than knowledge gaps. A nurse completes missing records, but the staffing model remains unchanged. <Link href={HEALTHCARE_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>Without system-level action, governance risk quietly builds.</Link></p>
                        </div>
                        <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                            <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>Logistics</p>
                            <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>Fleet maintenance issues can reflect weak central visibility rather than local negligence. <Link href={LOGISTICS_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>A depot fixes a missed inspection,</Link> yet head office cannot see whether similar delays exist elsewhere. Corrective action must move beyond local containment to network-wide control.</p>
                        </div>
                    </div>

                    {/* SPREADSHEETS */}
                    <div id="spreadsheets" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Why Spreadsheets Struggle With Corrective Action Tracking</h2>
                        <SectionImage src={sectionImages.spreadsheets} alt="Why spreadsheets fail for corrective action tracking" />
                        <p style={p()}>A spreadsheet can list actions. It cannot:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "0 0 1rem" }}>
                            {spreadsheetLimitations.map((item, i, arr) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ color: "#dc2626", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✕</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={p()}>Over time, corrective actions after an internal audit become fragmented across files and inboxes.</p>
                        <p style={p()}>
                            <Link href={BUILT_BY_AUDITORS_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>This is one of the reasons we built audit management software built by auditors.</Link>{" "}
                            The intention was not to digitise paperwork. It was to remove the friction between finding and closure.
                        </p>
                    </div>

                    {/* PDCA */}
                    <div id="pdca" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Connecting Corrective Actions to the PDCA Cycle</h2>
                        <SectionImage src={sectionImages.pdca} alt="PDCA cycle and corrective action integration" />
                        <p style={p()}>Corrective action sits in the &ldquo;Act&rdquo; phase of PDCA.</p>

                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: "0.625rem", margin: "1rem 0 1.25rem" }}>
                            {[
                                { label: "Plan", desc: "Define objectives and scope", color: "#3b82f6" },
                                { label: "Do", desc: "Execute the audit", color: "#10b981" },
                                { label: "Check", desc: "Analyse findings", color: "#f59e0b" },
                                { label: "Act", desc: "Implement and verify corrective actions", color: "#006644" },
                            ].map((item) => (
                                <div key={item.label} style={{ background: item.label === "Act" ? "rgba(0,102,68,0.08)" : "#fff", borderRadius: "0.75rem", padding: "0.875rem", border: `1px solid ${item.label === "Act" ? "rgba(0,102,68,0.2)" : "#e8e4df"}`, textAlign: "center" }}>
                                    <p style={{ margin: "0 0 0.2rem", fontWeight: 700, color: item.color, fontSize: "0.85rem", fontFamily: font }}>{item.label}</p>
                                    <p style={{ margin: 0, color: "#6B7280", fontSize: "0.8rem", lineHeight: 1.45, fontFamily: font }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p style={p()}>If the &ldquo;Act&rdquo; phase is weak, the entire cycle weakens.</p>
                        <p style={p()}>
                            <Link href={PDCA_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>Our PDCA cycle audit software connects findings directly to verified corrective actions.</Link>{" "}
                            It is designed so that findings flow directly into assigned actions, and those actions feed back into trend analysis and management review.
                        </p>
                        <p style={p({ fontWeight: 600, color: "#111827" })}>Corrective actions after an internal audit should not exist in isolation. They should strengthen the management system over time.</p>
                    </div>

                    {/* CLOSURE */}
                    <div id="closure" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>From Static Closure to Verified Improvement</h2>
                        <p style={p()}>There is a difference between:</p>

                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.875rem", margin: "1rem 0 1.25rem" }}>
                            <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.25rem", border: "1px solid #e8e4df", textAlign: "center" }}>
                                <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#dc2626", fontSize: "1.25rem", fontFamily: font }}>Closed</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.88rem", fontFamily: font }}>The box is ticked.</p>
                            </div>
                            <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.75rem", padding: "1.25rem", border: "1px solid rgba(0,102,68,0.15)", textAlign: "center" }}>
                                <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#006644", fontSize: "1.25rem", fontFamily: font }}>Controlled</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.88rem", fontFamily: font }}>The system has improved.</p>
                            </div>
                        </div>

                        <p style={p()}>Structured corrective action management allows organisations to:</p>
                        <div style={{ margin: "0 0 1rem" }}>
                            {controlBenefits.map((item) => (
                                <div key={item} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.25rem 0" }}>
                                    <span style={{ color: "#006644", fontWeight: 700 }}>✓</span>
                                    <span style={{ fontSize: "0.95rem", color: "#374151", fontFamily: font }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p style={p()}>That shift moves auditing from compliance maintenance to operational governance.</p>
                        <p style={p()}>
                            If you are reviewing how you manage corrective actions after an internal audit, it may be worth examining whether your current process truly verifies effectiveness or simply records activity. You can explore how iAudit Global structures corrective action tracking, visibility and PDCA integration, or{" "}
                            <Link href={PRICING_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>review our pricing here to see what fits your organisation.</Link>
                        </p>

                        {/* Green CTA */}
                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h3 style={{ fontSize: isMobile ? "1.35rem" : "1.55rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font, position: "relative" }}>
                                A template can document a finding.
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.5rem", position: "relative", fontFamily: font }}>A structured system can prevent it from returning.</p>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 1rem", position: "relative", fontFamily: font }}>And that is ultimately the point of corrective actions after an internal audit.</p>
                            <a href="https://www.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font }}>
                                Start your free 14-day trial
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                        </div>
                    </div>
                </article>

                {/* RIGHT AUTHOR */}
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "2rem 1.5rem", textAlign: "center" }}>
                            <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    overflow: "hidden", margin: "0 auto 1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>

                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>Mathew Chiweda</p>
                            <p style={{ margin: "0 0 1.1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance across complex operational environments and multiple sectors.
                            </p>
                            <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.8rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>Free consultation</Link>
                        </div>
                    </aside>
                )}

                {isMobile && (
                    <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "1.75rem 1.5rem", textAlign: "center" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    overflow: "hidden", margin: "0 auto 0.875rem", display: "flex", alignItems: "center", justifyContent: "center" }}>

                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>Mathew Chiweda</p>
                        <p style={{ margin: "0 0 1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance across complex operational environments and multiple sectors.
                            </p>
                        <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>Free consultation</Link>
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
