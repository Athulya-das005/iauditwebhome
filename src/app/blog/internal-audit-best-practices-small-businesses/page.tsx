"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

/* ─── Section images ─────────────────────────────────────────────────────── */
const sectionImages: Record<string, string> = {
    "challenge":
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80",
    "central-function":
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=480&fit=crop&q=80",
    "standardise":
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80",
    "sampling":
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80",
    "technology":
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80",
};

/* ─── TOC ──────────────────────────────────────────────────────────────────── */
const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "challenge", label: "The Challenge of Multi-Site Audits" },
    { id: "central-function", label: "Step 1: Establish a Central Function" },
    { id: "standardise", label: "Step 2: Standardise Checklists & Scoring" },
    { id: "plan-execute", label: "Step 3: Plan Centrally, Execute Locally" },
    { id: "sampling", label: "Step 4: Use Sampling Intelligently" },
    { id: "centralise-findings", label: "Step 5: Centralise Findings & Actions" },
    { id: "technology", label: "The Role of Technology" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "conclusion", label: "Conclusion" },
];

/* ─── FAQ data ────────────────────────────────────────────────────────────── */
const faqs = [
    {
        q: "Do all sites need to be audited every year?",
        a: "Not necessarily. Internal audit programmes can use sampling based on risk and performance, though you must ensure the full scope of the management system is covered over the audit cycle (usually 3 years).",
    },
    {
        q: "Can we use different procedures for different sites?",
        a: "Generally no. For a multi-site certification, the core management system must be common. Sites can have local work instructions, but the high-level policies and procedures should be the same.",
    },
    {
        q: "How do we handle remote sites?",
        a: "Remote audits for multiple sites are a valid tool. You can review documents, interview staff and check systems via video and screen sharing, saving site visits for operational checks.",
    },
];

/* ─── Section image component ────────────────────────────────────────────── */
function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div style={{
            width: "100%", borderRadius: "0.875rem", overflow: "hidden",
            margin: "1.5rem 0 2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
            <img src={src} alt={alt} loading="lazy"
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
export default function BlogPost3() {
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
            setShowScrollTop(window.scrollY > 400);
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

            {/* ── Big Hero Image ───────────────────────────────────────── */}
            <div style={{
                position: "relative", width: "100%",
                height: isMobile ? "55vw" : "70vh",
                minHeight: isMobile ? "240px" : "440px",
                maxHeight: "700px", overflow: "hidden",
            }}>
                <img
                    src="/images/blog-small-business.png"
                    alt="How to Manage ISO Audits Across Multiple Sites Without Losing Visibility"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={e => {
                        e.currentTarget.src =
                            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&h=700&fit=crop&q=85";
                    }}
                />
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)",
                }} />
                <div style={{
                    position: "absolute",
                    bottom: isMobile ? "1rem" : "2rem",
                    left: isMobile ? "1.25rem" : "2.5rem",
                    right: isMobile ? "1.25rem" : "2.5rem",
                }}>
                    <span style={{
                        display: "inline-block", background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)",
                        color: "#fff", borderRadius: "999px", padding: "3px 14px",
                        fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.09em",
                        textTransform: "uppercase", marginBottom: "0.625rem", fontFamily: font,
                    }}>
                        Audit Management
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
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
                            9 Min Read
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Top bar ──────────────────────────────────────────────── */}
            <div style={{
                borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4",
                position: "sticky", top: 0, zIndex: 40,
            }}>
                <div style={{
                    maxWidth: "1260px", margin: "0 auto", padding: "0 1.5rem",
                    height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                    <Link href="/blog" style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        color: "#6B7280", fontSize: "0.79rem", fontWeight: 500,
                        textDecoration: "none", letterSpacing: "0.04em",
                        textTransform: "uppercase", fontFamily: font,
                    }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back To Blog
                    </Link>
                    {isMobile && (
                        <button onClick={() => setTocOpen(v => !v)} style={{
                            display: "flex", alignItems: "center", gap: "5px",
                            background: "none", border: "1px solid #e8e4df",
                            borderRadius: "6px", padding: "4px 10px",
                            cursor: "pointer", color: "#374151", fontSize: "0.79rem", fontFamily: font,
                        }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" />
                            </svg>
                            Contents
                        </button>
                    )}
                </div>
                {isMobile && tocOpen && (
                    <div style={{
                        background: "#fff", borderBottom: "1px solid #e8e4df",
                        padding: "0.875rem 1.25rem", display: "flex", flexDirection: "column", gap: "1px",
                    }}>
                        {tocItems.map(item => {
                            const isActive = activeSection === item.id;
                            return (
                                <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                                    textAlign: "left",
                                    background: isActive ? "rgba(0,102,68,0.07)" : "transparent",
                                    border: "none",
                                    borderLeft: isActive ? "3px solid #006644" : "3px solid transparent",
                                    padding: "0.45rem 0.75rem", borderRadius: "0 5px 5px 0",
                                    cursor: "pointer", fontSize: "0.84rem",
                                    color: isActive ? "#006644" : "#6B7280",
                                    fontWeight: isActive ? 600 : 400,
                                    fontFamily: font, lineHeight: 1.4, transition: "all 0.2s ease",
                                }}>
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ── 3-column body ────────────────────────────────────────── */}
            <div style={{
                maxWidth: "1260px", margin: "0 auto",
                padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "210px 1fr 240px",
                gap: isMobile ? "2rem" : "3rem",
                alignItems: "start",
            }}>

                {/* ── LEFT: TOC ─────────────────────────────────────────── */}
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <p style={{
                            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em",
                            textTransform: "uppercase", color: "#374151", margin: "0 0 0.625rem", fontFamily: font,
                        }}>Contents</p>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "1px", background: "#e4e0db" }} />
                            <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                {tocItems.map(item => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                                            textAlign: "left", border: "none",
                                            padding: "0.48rem 0.625rem 0.48rem 1.5rem",
                                            cursor: "pointer", fontSize: "0.845rem",
                                            fontFamily: font, lineHeight: 1.38,
                                            color: isActive ? "#006644" : "#6B7280",
                                            fontWeight: isActive ? 600 : 400,
                                            background: isActive ? "rgba(0,102,68,0.06)" : "transparent",
                                            borderRadius: "0 6px 6px 0",
                                            borderLeft: isActive ? "2px solid #006644" : "2px solid transparent",
                                            transition: "color 0.25s ease, background 0.25s ease, border-color 0.25s ease",
                                        }}>
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>
                )}

                {/* ── CENTER: Article ───────────────────────────────────── */}
                <article>
                    <h1 style={{
                        fontSize: isMobile ? "1.9rem" : "2.55rem", fontWeight: 400,
                        color: "#111827", lineHeight: 1.2, letterSpacing: "-0.02em",
                        margin: "0 0 1rem", fontFamily: font,
                    }}>
                        How to Manage ISO Audits Across Multiple Sites Without Losing Visibility
                    </h1>

                    {/* ── Intro ─────────────────────────────────────────── */}
                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>If you have ever tried to coordinate a quality or safety audit programme for an organisation with ten, twenty or fifty locations, you know the feeling.</p>
                        <p style={para(font)}>Emails flying back and forth. Spreadsheets that are out of date the moment you save them. Site managers sending reports in three different formats. And the constant worry that a major nonconformity is sitting on someone&rsquo;s laptop where you cannot see it.</p>
                        <p style={para(font)}>The challenge of how to manage ISO audits across multiple sites is not just about logistics. It is about visibility. Without a central view, you are flying blind.</p>
                        <p style={para(font)}>This guide covers practical steps to take back control. Whether you are managing ISO 9001, 14001, 45001 or 27001, the principles are the same: standardise the approach, centralise the data, and use your audit programme to drive improvement everywhere, not just locally.</p>
                    </div>

                    {/* ── Section 1: Challenge ──────────────────────────── */}
                    <div id="challenge" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Challenge of Multi-Site Audit Programmes</h2>
                        <SectionImage src={sectionImages["challenge"]} alt="Multi-site audit challenges" />
                        <p style={para(font)}>The biggest issue with how to manage ISO audits across multiple sites is inconsistency.</p>
                        <p style={para(font)}>Site A might do rigorous monthly checks. Site B might do a quick tick-box exercise once a year before the external auditor arrives. Site C might have excellent findings but never closes its corrective actions.</p>
                        <p style={para(font)}>If you are the quality manager or audit programme lead, this fragmentation is a nightmare. You cannot spot trends because the data is not comparable. You cannot see systemic risks because reports are buried in local folders. And you spend more time chasing admin than actually improving the system.</p>
                        <p style={para(font)}>To solve this, you need to move from a collection of local audits to a single, cohesive multi-site ISO audit programme.</p>
                    </div>

                    {/* ── Section 2: Central Function ───────────────────── */}
                    <div id="central-function" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Step 1: Establish a Strong Central Function</h2>
                        <SectionImage src={sectionImages["central-function"]} alt="Central audit function" />
                        <p style={para(font)}>ISO standards for multi-site certification (like IAF MD1) require a &ldquo;central function&rdquo; that has authority over the management system across all sites. This is not just a certification rule. It is the foundation of how to manage ISO audits across multiple sites effectively.</p>
                        <p style={para(font)}>The central function — usually the QHSE or compliance team — must set the standard. You decide:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {[
                                "The audit schedule and frequency",
                                "The checklists and criteria to be used",
                                "The qualification requirements for auditors",
                                "How findings are graded and reported",
                            ].map((item, i, arr) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ minWidth: "22px", height: "22px", borderRadius: "50%", background: "rgba(0,102,68,0.1)", color: "#006644", fontSize: "0.7rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>{i + 1}</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>You cannot let sites audit themselves in a vacuum. The central function must have oversight of the plan and the results. This ensures that an audit in London means the same thing as an audit in Manchester or Mumbai.</p>
                    </div>

                    {/* ── Section 3: Standardise ────────────────────────── */}
                    <div id="standardise" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Step 2: Standardise Your Audit Checklists and Scoring</h2>
                        <SectionImage src={sectionImages["standardise"]} alt="Standardised audit checklists" />
                        <p style={para(font)}>If one auditor writes &ldquo;Housekeeping is poor&rdquo; and another writes &ldquo;3/5 for 5S implementation&rdquo;, you cannot compare them.</p>
                        <p style={para(font)}>To get visibility, you must standardise audit checklists and scoring criteria. Create a master set of audit templates for your core processes. These should cover the corporate requirements that apply everywhere, plus specific sections for local activities.</p>
                        <p style={para(font)}>Use consistent grading for findings:</p>

                        {/* Grading callout */}
                        <div style={{ margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {[
                                { level: "Major NC", color: "#dc2626", bg: "rgba(220,38,38,0.06)", label: "Major Nonconformity", desc: "System breakdown or serious risk" },
                                { level: "Minor NC", color: "#d97706", bg: "rgba(217,119,6,0.06)", label: "Minor Nonconformity", desc: "Isolated lapse" },
                                { level: "OFI", color: "#006644", bg: "rgba(0,102,68,0.06)", label: "Observation / OFI", desc: "Opportunity for improvement" },
                            ].map(item => (
                                <div key={item.level} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: item.bg, borderRadius: "0.75rem", padding: "0.875rem 1rem", border: `1px solid ${item.color}22` }}>
                                    <span style={{ minWidth: "68px", borderRadius: "5px", background: item.color, color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "3px 6px", textAlign: "center", flexShrink: 0, fontFamily: font }}>
                                        {item.level}
                                    </span>
                                    <div>
                                        <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: "0.9rem", color: "#111827", fontFamily: font }}>{item.label}</p>
                                        <p style={{ margin: 0, fontSize: "0.87rem", color: "#6B7280", fontFamily: font }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p style={para(font)}>When every site uses the same yardstick, you can start to benchmark performance. You can see which sites are struggling with document control, or which region has the best safety culture. This data is gold for management reviews.</p>
                    </div>

                    {/* ── Section 4: Plan Centrally ─────────────────────── */}
                    <div id="plan-execute" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Step 3: Plan Centrally, Execute Locally</h2>
                        <p style={para(font)}>A common question in how to manage ISO audits across multiple sites is who should do the auditing.</p>
                        <p style={para(font)}>Fully central teams are expensive and travel-heavy. Fully local teams can lack independence and rigour.</p>
                        <p style={para(font)}>The best approach is usually a hybrid model:</p>

                        {[
                            { label: "Central Planning", desc: "The audit programme, schedule and scope are set by the central team — ensuring consistency and risk-based prioritisation across all locations." },
                            { label: "Local Execution", desc: "Routine process audits are conducted by trained local auditors or cross-site auditors (e.g. Site A manager audits Site B), keeping costs manageable." },
                            { label: "Central Oversight", desc: "High-risk processes or annual system audits are led by the central team to ensure depth and consistency." },
                        ].map((item, i) => (
                            <div key={i} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.1rem 1.4rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.label}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.desc}</p>
                            </div>
                        ))}

                        <p style={{ ...para(font), marginTop: "0.75rem" }}>This balance keeps costs down while maintaining the integrity of the internal audit across locations.</p>
                    </div>

                    {/* ── Section 5: Sampling ─────────────────────────────── */}
                    <div id="sampling" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Step 4: Use Sampling Intelligently</h2>
                        <SectionImage src={sectionImages["sampling"]} alt="Risk-based audit sampling" />
                        <p style={para(font)}>You do not need to audit every process at every site every year. In fact, trying to do so is a recipe for burnout.</p>
                        <p style={para(font)}>ISO 19011 and multi-site certification rules allow for ISO 19011 multi-site sampling. You can audit a representative sample of sites, provided the management system is centrally controlled and processes are similar.</p>
                        <p style={para(font)}>Use risk-based sampling. If Site X had five major nonconformities last year, audit them more frequently. If Site Y has been clean for three years, audit them less often or focus on different processes.</p>

                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.25rem 1.5rem", margin: "1rem 0 1.25rem" }}>
                            <p style={{ margin: 0, fontSize: "0.95rem", color: "#111827", lineHeight: 1.75, fontFamily: font, fontStyle: "italic" }}>
                                The goal of how to manage ISO audits across multiple sites is not to tick every box, but to provide assurance that the system works. Put your resources where the risk is.
                            </p>
                        </div>
                    </div>

                    {/* ── Section 6: Centralise Findings ────────────────── */}
                    <div id="centralise-findings" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Step 5: Centralise Your Findings and Actions</h2>
                        <p style={para(font)}>This is the most critical step. You must move findings and corrective actions out of local spreadsheets and into a central log.</p>
                        <p style={para(font)}>When you have a single view of all nonconformities, you can spot systemic issues.</p>
                        <p style={para(font)}>For example, if five different sites all fail on &ldquo;Competence records&rdquo; in the same quarter, you do not have five local problems. You have one corporate problem with your HR or training process.</p>
                        <p style={para(font)}>Tracking audit findings across locations allows you to fix the root cause centrally, updating the procedure or system once, rather than fighting the same fire at every site.</p>

                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.5rem 1.75rem", margin: "1.25rem 0" }}>
                            <span style={{ fontSize: "3rem", color: "rgba(0,102,68,0.15)", lineHeight: 1, display: "block", marginBottom: "-0.5rem", fontFamily: "Georgia, serif" }}>&ldquo;</span>
                            <p style={{ margin: "0 0 0.25rem", fontSize: "1.05rem", color: "#111827", lineHeight: 1.7, fontWeight: 500, fontFamily: font, fontStyle: "italic" }}>
                                This is where the real value of a multi-site programme lies: using local data to drive organisational improvement.
                            </p>
                        </div>
                    </div>

                    {/* ── Section 7: Technology ─────────────────────────── */}
                    <div id="technology" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Role of Technology in Multi-Site Audits</h2>
                        <SectionImage src={sectionImages["technology"]} alt="ISO audit management software" />
                        <p style={para(font)}>Let us be honest. You can try to do all of this with Excel, Word and email. For a while it works. Then the admin burden becomes heavier than the audit value.</p>
                        <p style={para(font)}>This is where ISO audit management software actually earns its place. A centralised platform allows you to:</p>
                        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {[
                                "Push standard templates to all sites instantly",
                                "See the status of every audit in real time",
                                "Track overdue actions and escalations automatically",
                                "Generate reports that compare site performance across locations",
                            ].map(item => (
                                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                                </li>
                            ))}
                        </ul>

                        {/* iAudit platform CTA */}
                        <div style={{ background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)", borderRadius: "1.1rem", padding: isMobile ? "1.75rem 1.5rem" : "2.25rem", color: "#fff", position: "relative", overflow: "hidden", margin: "1.25rem 0" }}>
                            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
                            <h3 style={{ fontSize: isMobile ? "1.15rem" : "1.4rem", fontWeight: 400, color: "#fff", margin: "0 0 0.75rem", fontFamily: font, lineHeight: 1.3, position: "relative" }}>
                                iAudit Global: Built for Multi-Site Programmes
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.95rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                iAudit Global is built specifically for this. It gives you a single workspace to plan, execute and track how to manage ISO audits across multiple sites, with:
                            </p>
                            <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                                {[
                                    "PDCA based audit workflows for ISO 9001, 14001, 45001 and 27001",
                                    "Multi-site dashboards showing findings and actions by site, process or standard",
                                    "Role based access so auditors, managers and auditees see what they need, nothing more",
                                ].map(item => (
                                    <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, fontFamily: font, position: "relative" }}>
                                        <span style={{ color: "#4ade80", flexShrink: 0, marginTop: "3px" }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.95rem", lineHeight: 1.8, margin: "0.875rem 0 0", position: "relative", fontFamily: font }}>
                                On top of that, iAudit includes Audit Mate, our AI-powered ISO compliance platform assistant that helps you draft audit plans and checklists while your audit data remains fully under your control.
                            </p>
                        </div>
                    </div>

                    {/* ── FAQ ───────────────────────────────────────────── */}
                    <div id="faq" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Frequently Asked Questions</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {faqs.map((faq, i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div key={i} style={{ background: "#fff", borderRadius: "0.75rem", border: `1px solid ${isOpen ? "#b5d0c4" : "#e8e4df"}`, overflow: "hidden", transition: "border-color 0.25s ease" }}>
                                        <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.3rem", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem", fontFamily: font }}>
                                            <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#111827", lineHeight: 1.4, fontFamily: font }}>
                                                {i + 1}. {faq.q}
                                            </span>
                                            <span style={{ flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%", background: isOpen ? "#006644" : "#f0ede8", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.25s ease" }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "#6B7280"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}>
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div style={{ padding: "0 1.3rem 1rem", color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.78, borderTop: "1px solid #f0ede8", paddingTop: "0.875rem", fontFamily: font }}>
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Conclusion / Pilot CTA ────────────────────────── */}
                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.5rem" }}>
                        <div style={{ background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)", borderRadius: "1.1rem", padding: isMobile ? "2rem 1.5rem" : "2.5rem", color: "#fff", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
                            <h2 style={{ fontSize: isMobile ? "1.35rem" : "1.7rem", fontWeight: 400, color: "#fff", margin: "0 0 0.75rem", fontFamily: font, lineHeight: 1.25, position: "relative" }}>
                                Ready to See This in Practice?
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                If you are currently trying to manage ISO audits across multiple sites with spreadsheets and email, iAudit Global was built for exactly that situation.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 1.25rem", position: "relative", fontFamily: font }}>
                                We are running a pilot programme for audit teams who want to centralise their audit programme, keep PDCA moving across locations and retain full ownership of their audit data.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.5rem", position: "relative", fontFamily: font }}>
                                You can:
                            </p>
                            <ul style={{ margin: "0 0 1.5rem", paddingLeft: 0, listStyle: "none" }}>
                                {[
                                    "Join the pilot and use iAudit free while we gather your feedback",
                                    "Or book a short call to see how it could work for your sites",
                                ].map(item => (
                                    <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, fontFamily: font, position: "relative" }}>
                                        <span style={{ color: "#4ade80", flexShrink: 0, marginTop: "3px" }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ height: "1px", background: "rgba(255,255,255,0.15)", margin: "0 0 1.25rem", position: "relative" }} />
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.625rem", position: "relative", fontFamily: font }}>
                                If you would like to take part, you can register your interest at:
                            </p>
                            <p style={{ margin: 0, position: "relative" }}>
                                <a href="https://surveys.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ color: "#4ade80", fontSize: "0.975rem", fontFamily: font, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                    https://surveys.iaudit.global/
                                </a>
                            </p>
                        </div>
                    </div>
                </article>

                {/* ── RIGHT: Author card ────────────────────────────────── */}
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "2rem 1.5rem", textAlign: "center" }}>
                            <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, #002e1d, #006644)", margin: "0 auto 1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>iAudit Global Team</p>
                            <p style={{ margin: "0 0 1.1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                A team of audit professionals and ISO specialists helping organisations manage multi-site audit programmes with clarity, consistency, and real improvement.
                            </p>
                            <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.8rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
                                Book Consultation
                            </Link>
                        </div>
                    </aside>
                )}

                {/* Mobile author card */}
                {isMobile && (
                    <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "1.75rem 1.5rem", textAlign: "center" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #002e1d, #006644)", margin: "0 auto 0.875rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>iAudit Global Team</p>
                        <p style={{ margin: "0 0 1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                            Audit professionals helping organisations manage multi-site ISO audit programmes effectively.
                        </p>
                        <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
                            Book Consultation
                        </Link>
                    </div>
                )}
            </div>

            <CTA />
            <Footer />

            {/* ── Scroll-to-top button ──────────────────────────────────── */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                style={{
                    position: "fixed", bottom: "2rem", right: "2rem",
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "#006644", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
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

function h2(font: string): React.CSSProperties {
    return { fontSize: "1.45rem", fontWeight: 500, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font };
}
function h3(font: string): React.CSSProperties {
    return { fontSize: "1.15rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.01em", lineHeight: 1.3, margin: "0 0 0.625rem", fontFamily: font };
}
function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}
