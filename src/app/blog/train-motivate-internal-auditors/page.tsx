"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

/* ─── Section images after headings ─────────────────────────────────────── */
const sectionImages: Record<string, string> = {
    "hidden-cost":
        "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=900&h=480&fit=crop&q=80",
    "training-works":
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=480&fit=crop&q=80",
    "motivation":
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&h=480&fit=crop&q=80",
    "sustainable":
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80",
    "path-forward":
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=480&fit=crop&q=80",
};

/* ─── TOC ──────────────────────────────────────────────────────────────────── */
const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "hidden-cost", label: "The Hidden Cost of Auditor Burnout" },
    { id: "training-works", label: "Training That Actually Works" },
    { id: "structured-foundation", label: "Structured Foundation" },
    { id: "practical-experience", label: "Practical Experience" },
    { id: "ongoing-development", label: "Ongoing Development" },
    { id: "motivation", label: "Motivation That Lasts" },
    { id: "sustainable", label: "Building Sustainable Programmes" },
    { id: "path-forward", label: "The Path Forward" },
    { id: "pilot", label: "An Invitation to Join the Pilot" },
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
export default function BlogPost2() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
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
                    src="/images/blog-training-auditors.png"
                    alt="How To Train And Motivate Internal Auditors Without Burning Them Out"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={e => {
                        e.currentTarget.src =
                            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=700&fit=crop&q=85";
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
                        Auditor Development
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
                            8 Min Read
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
                        How to Train and Motivate Internal Auditors Without Burning Them Out
                    </h1>

                    {/* Intro */}
                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>After 18 years of implementing management systems and conducting internal audits across manufacturing, construction, and lift engineering, I have seen a pattern that concerns me.</p>
                        <p style={para(font)}>Internal auditors are burning out. And most organisations do not even notice until it is too late.</p>
                        <p style={para(font)}>The signs are familiar: auditors going through the motions, findings becoming superficial, the same observations appearing year after year without real improvement. When I ask these auditors what happened, the answer is almost always the same. They started enthusiastic, received minimal training, got little recognition, and eventually stopped caring.</p>
                        <p style={para(font)}>This is not an auditor problem. It is a management problem. And it is one we can fix.</p>
                    </div>

                    {/* Section 1 */}
                    <div id="hidden-cost" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Hidden Cost of Auditor Burnout</h2>
                        <SectionImage src={sectionImages["hidden-cost"]} alt="Auditor burnout" />
                        <p style={para(font)}>Internal auditors sit in an unusual position. They are expected to be critical friends, identifying weaknesses in processes run by their colleagues. They need technical knowledge of ISO 9001, 14001, or 45001 standards. They must write clear reports, handle difficult conversations, and follow up on corrective actions. All this while often doing their &ldquo;real job&rdquo; alongside audit duties, frequently without the support of effective internal audit software.</p>
                        <p style={para(font)}>When we overload auditors without proper support, we do not just lose their enthusiasm. We compromise the entire audit programme. Audits become tick-box exercises. Nonconformities get missed. The management system stops driving improvement and becomes paperwork for certification.</p>
                        <p style={para(font)}>I have watched organisations spend thousands on certification fees while their internal audit programme delivers almost no value. The root cause is nearly always the same: undertrained, unsupported, and unmotivated auditors.</p>
                    </div>

                    {/* Section 2 */}
                    <div id="training-works" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Training That Actually Works</h2>
                        <SectionImage src={sectionImages["training-works"]} alt="Auditor training session" />
                        <p style={para(font)}>Let me be direct. A one-day ISO awareness course does not create a competent auditor. It creates someone who knows the standard exists.</p>
                        <p style={para(font)}>Effective auditor training requires three elements working together.</p>
                    </div>

                    {/* Sub-section: Structured Foundation */}
                    <div id="structured-foundation" style={{ scrollMarginTop: "58px", marginTop: "1.5rem" }}>
                        <h3 style={h3(font)}>Structured Foundation</h3>
                        <p style={para(font)}>Before anyone conducts an audit, they need to understand the standard they are auditing against, the principles in ISO 19011, and the specific processes within your organisation. This is not optional background reading. It is essential knowledge.</p>
                        <p style={para(font)}>At iAudit Global, we built our platform around the PDCA cycle because that is how effective auditing works, supported by practical audit software for internal audit that reduces administrative burden.</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.375rem 1.25rem", margin: "1.25rem 0" }}>
                            {[
                                { label: "Plan", desc: "Plan the audit properly — know the scope, criteria, and what good looks like." },
                                { label: "Do", desc: "Do the audit with structured methods, good questions, and real observation." },
                                { label: "Check", desc: "Check whether findings lead to real improvements, not just paperwork." },
                                { label: "Act", desc: "Act on what you learn for the next cycle — adjust approach, update checklists." },
                            ].map((item, i, arr) => (
                                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ minWidth: "46px", height: "24px", borderRadius: "5px", background: "#006644", color: "#fff", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: font }}>{item.label}</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>Training should follow the same logic. Plan what competencies auditors need. Deliver training in manageable stages. Check whether they can apply what they learned. Adjust your approach based on results.</p>
                    </div>

                    {/* Sub-section: Practical Experience */}
                    <div id="practical-experience" style={{ scrollMarginTop: "58px", marginTop: "1.5rem" }}>
                        <h3 style={h3(font)}>Practical Experience</h3>
                        <p style={para(font)}>Theory without practice creates auditors who know the right words but cannot apply them.</p>
                        <p style={para(font)}>Pair new auditors with experienced ones. Let them observe before they lead. Give them smaller, lower-risk audits first. Provide immediate feedback after each audit.</p>
                        <p style={para(font)}>I learned more from my first ten audits than from any course. But those audits were supervised, and someone took time to explain what I did well and what I needed to improve. That combination of doing and reflecting is where real competence develops.</p>
                    </div>

                    {/* Sub-section: Ongoing Development */}
                    <div id="ongoing-development" style={{ scrollMarginTop: "58px", marginTop: "1.5rem" }}>
                        <h3 style={h3(font)}>Ongoing Development</h3>
                        <p style={para(font)}>Standards change. Organisations change. Auditors need regular updates, not a course every five years when recertification comes around.</p>
                        <p style={para(font)}>This does not mean expensive external training for every session. Internal knowledge sharing, reviewing audit reports together, discussing challenging findings as a team. These activities build competence without significant cost.</p>
                    </div>

                    {/* Section 3: Motivation */}
                    <div id="motivation" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Motivation That Lasts</h2>
                        <SectionImage src={sectionImages["motivation"]} alt="Team motivation" />
                        <p style={para(font)}>Training gives auditors the skills. Motivation gives them the reason to use those skills well.</p>
                        <p style={para(font)}>I have seen every approach to auditor motivation, from doing nothing to elaborate reward schemes. The approaches that work share common elements.</p>
                        {[
                            { title: "Connect Audits to Real Improvement", desc: "Nothing demotivates an auditor faster than seeing their findings ignored. When corrective actions get implemented and processes actually improve, auditors see their work matters. This requires management commitment. If audit findings disappear into a spreadsheet and nothing changes, auditors learn that their effort is pointless. If findings lead to visible improvements, auditors become invested in finding more opportunities for change." },
                            { title: "Recognise the Role Properly", desc: "Internal auditors often feel caught between two worlds. Management sees them as critics who create work. Colleagues see them as rule enforcers who slow things down. Neither view is fair, and both are damaging. Publicly recognising audit work helps. Mentioning auditors' contributions in management reviews, acknowledging good findings, treating audit competence as a valued skill." },
                            { title: "Provide Variety", desc: "Auditing the same processes every cycle leads to fatigue. Auditors stop seeing problems because everything looks familiar. Rotating assignments, involving auditors in different sites or standards, bringing fresh perspectives into the programme. These practices keep auditors engaged and improve audit quality." },
                            { title: "Respect Their Time", desc: "Most internal auditors have other responsibilities. When audit duties pile on top of an already full workload, something has to give. Usually, it is audit quality, followed by auditor wellbeing. Planning audit schedules realistically, allowing adequate preparation time, not scheduling audits during peak operational periods." },
                        ].map((item, i) => (
                            <div key={i} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.1rem 1.4rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Section 4: Sustainable Programmes */}
                    <div id="sustainable" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Building Sustainable Programmes</h2>
                        <SectionImage src={sectionImages["sustainable"]} alt="Sustainable audit programme" />
                        <p style={para(font)}>The PDCA approach applies here too.</p>
                        <ul style={{ margin: "0.75rem 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {[
                                ["Plan", "your auditor training and motivation strategy. What competencies do your auditors need? How will you develop them? What will keep them engaged?"],
                                ["Do", "the training and implement your motivation approach. Use the right tools. At iAudit Global, we designed features specifically to reduce administrative burden on auditors."],
                                ["Check", "the results. Are auditors more competent? Are audits finding meaningful issues? Are corrective actions being implemented? Is auditor turnover reducing?"],
                                ["Act", "on what you learn. Adjust training content, change recognition approaches, modify workload distribution."],
                            ].map(([label, rest]) => (
                                <li key={String(label)} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingBottom: "0.875rem", marginBottom: "0.875rem", borderBottom: "1px solid #f0ede8" }}>
                                    <span style={{ minWidth: "46px", height: "24px", borderRadius: "5px", background: "#006644", color: "#fff", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: font, marginTop: "2px" }}>{label}</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{rest}</p>
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>This is not a one-time project. It is an ongoing commitment to the people who make your management system work.</p>
                    </div>

                    {/* Section 5: Path Forward */}
                    <div id="path-forward" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Path Forward</h2>
                        <SectionImage src={sectionImages["path-forward"]} alt="Path to better audit programmes" />
                        <p style={para(font)}>Organisations that get this right gain a significant advantage. Their internal audits actually drive improvement. Their management systems deliver value beyond the certificate on the wall. Their auditors become advocates for quality, environmental responsibility, and safety rather than reluctant participants in a compliance exercise.</p>
                        <p style={para(font)}>The investment required is not primarily financial. It is attention, commitment, and respect for the audit function.</p>
                        <p style={para(font)}>After nearly two decades in this field, I remain convinced that internal auditing is one of the most powerful tools for organisational improvement. But only when we train auditors properly, motivate them sustainably, and stop treating their wellbeing as an afterthought.</p>
                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.5rem 1.75rem", margin: "1.5rem 0" }}>
                            <span style={{ fontSize: "3rem", color: "rgba(0,102,68,0.15)", lineHeight: 1, display: "block", marginBottom: "-0.5rem", fontFamily: "Georgia, serif" }}>&ldquo;</span>
                            <p style={{ margin: "0 0 0.25rem", fontSize: "1.05rem", color: "#111827", lineHeight: 1.7, fontWeight: 500, fontFamily: font, fontStyle: "italic" }}>
                                Your auditors deserve better. And so does your management system.
                            </p>
                        </div>
                    </div>

                    {/* Section 6: Pilot CTA */}
                    <div id="pilot" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <div style={{ background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)", borderRadius: "1.1rem", padding: isMobile ? "2rem 1.5rem" : "2.5rem", color: "#fff", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
                            <h2 style={{ fontSize: isMobile ? "1.35rem" : "1.7rem", fontWeight: 400, color: "#fff", margin: "0 0 0.75rem", fontFamily: font, lineHeight: 1.25, position: "relative" }}>
                                An Invitation to Shape the Future of ISO Internal Auditing
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                We believe internal audit should be simple, effective and meaningful. Built by auditors who understand the challenges you face every day, iAudit is purpose-built for ISO 9001, ISO 14001, ISO 45001 and ISO 27001 internal audits.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                We are launching the iAudit Global Pilot Programme to co-design the future of audit programme management with professionals like you.
                            </p>
                            <ul style={{ margin: "0 0 1.5rem", paddingLeft: 0, listStyle: "none" }}>
                                {[
                                    "Help shape features grounded in real audit needs",
                                    "Access iAudit for three months free",
                                    "Experience audit planning, execution and reporting in one place",
                                    "Influence how ISO 19011 and PDCA are embedded into audit workflows",
                                ].map(item => (
                                    <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.5rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.6, fontFamily: font, position: "relative" }}>
                                        <span style={{ color: "#4ade80", flexShrink: 0, marginTop: "3px" }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {/* Divider */}
                            <div style={{ height: "1px", background: "rgba(255,255,255,0.15)", margin: "0 0 1.25rem", position: "relative" }} />
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.625rem", position: "relative", fontFamily: font }}>
                                This is not a sales trial. It is a collaborative opportunity for internal audit leaders, programme managers and auditors who want audit work to be more effective and more impactful.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.625rem", position: "relative", fontFamily: font }}>
                                If you lead or manage internal audits and want to be part of this journey, we would love to hear from you.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.975rem", lineHeight: 1.8, margin: 0, position: "relative", fontFamily: font, fontStyle: "italic" }}>
                                Comment &ldquo;interested&rdquo; or send us a direct message to learn more.
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
                                A team of audit professionals and ISO specialists dedicated to helping organisations train, motivate, and retain effective internal auditors for lasting improvement.
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
                            Audit professionals dedicated to helping organisations train and retain effective internal auditors.
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
