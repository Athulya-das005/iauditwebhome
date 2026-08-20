"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE = "/images/blog-ai-transform.webp";
const BUILT_BY_AUDITORS_URL = "/audit-management-software-built-by-auditors";
const PRICING_URL = "/pricing";
const CORRECTIVE_ACTIONS_URL = "/blog/corrective-actions-after-an-internal-audit-findings-to-closure";
const PDCA_URL = "/pdca-cycle-audit-software";
const AUDIT_REPORT_URL = "/blog/how-to-write-an-iso-internal-audit-report-that-matters";
const TEMPLATE_URL = "/blog/iso-internal-audit-report-template-free-download";

const sectionImages: Record<string, string> = {
    structure: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    step1: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=480&fit=crop&q=80&fm=webp",
    step2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    step3: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=480&fit=crop&q=80&fm=webp",
    step4: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    step5: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    step6: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "structure", label: "Why Structure Matters" },
    { id: "step1", label: "Step 1 – Secure Your Workspace" },
    { id: "step2", label: "Step 2 – Define Standards" },
    { id: "step3", label: "Step 3 – Multi-Site Setup" },
    { id: "step4", label: "Step 4 – Team Structure" },
    { id: "step5", label: "Step 5 – Self-Assessment" },
    { id: "step6", label: "Step 6 – Gap Analysis" },
    { id: "pdca", label: "Maintaining the PDCA Cycle" },
    { id: "control", label: "Take Control" },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div style={{ width: "100%", borderRadius: "0.875rem", overflow: "hidden", margin: "1.5rem 0 2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <img src={src} alt={alt} loading="lazy" style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "320px" }}
                onError={(e) => { e.currentTarget.style.display = "none"; (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }} />
        </div>
    );
}

export default function SetupGuideBlogContent() {
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

    const ps: React.CSSProperties = { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
    const h2s: React.CSSProperties = { fontSize: "1.6rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font };
    const h3s: React.CSSProperties = { fontSize: "1.2rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.01em", lineHeight: 1.3, margin: "1.5rem 0 0.625rem", fontFamily: font };
    const lnk: React.CSSProperties = { color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: font }}>
            {/* Hero */}
            <div style={{ position: "relative", width: "100%", height: isMobile ? "55vw" : "70vh", minHeight: isMobile ? "240px" : "440px", maxHeight: "700px", overflow: "hidden" }}>
                <Image src={HERO_IMAGE} alt="How to set up iAudit Global ISO audit software step by step guide" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)" }} />
                <div style={{ position: "absolute", bottom: isMobile ? "1rem" : "2rem", left: isMobile ? "1.25rem" : "2.5rem", right: isMobile ? "1.25rem" : "2.5rem" }}>
                    <span style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", borderRadius: "999px", padding: "3px 14px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.625rem", fontFamily: font }}>Setup Guide</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>August 19, 2026</span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>10 Min Read</span>
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
                        How to Set Up iAudit Global ISO Audit Software: Step-by-Step Guide
                    </h1>

                    {/* INTRO */}
                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={ps}>In my experience, the greatest barrier to digital transformation in the ISO world is not budget. It is not desire. It is fear of complexity.</p>
                        <p style={ps}>I have seen many quality and safety teams remain stuck with fragmented spreadsheets simply because the alternative feels like a six-month IT project.</p>
                        <p style={ps}>When we developed iAudit Global, we focused on one principle: <strong>Time to Value.</strong></p>
                        <p style={ps}>We wanted the process for how to set up iAudit Global ISO audit software to follow the logic of the auditor, not the logic of the programmer.</p>
                        <p style={ps}>Implementation should not be a hurdle. It should be the foundation of your digital audit history.</p>
                        <p style={ps}>Whether you manage a single site or multiple depots across regions, here is a structured, practitioner-led guide to getting your programme operational in six steps.</p>
                    </div>

                    {/* WHY STRUCTURE */}
                    <div id="structure" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Why Structure Matters from Day One</h2>
                        <SectionImage src={sectionImages.structure} alt="Why structure matters when setting up ISO audit software" />
                        <p style={ps}>Digital transformation is often misunderstood.</p>
                        <p style={ps}>Putting a paper checklist on a screen is not transformation. It is replication.</p>
                        <p style={ps}>True digital auditing creates continuity. It ensures your audit history remains intact regardless of staff turnover or consultant changes.</p>
                        <p style={ps}>Most teams I speak with are exhausted by file management. Word tables. Email threads. Disconnected spreadsheets.</p>
                        <p style={ps}>Learning how to set up iAudit Global ISO audit software is the first step towards removing that friction.</p>
                        <p style={ps}>By following a structured setup, every finding, evidence file and corrective action stays with your organisation permanently.</p>
                        <p style={ps}>This is exactly why <Link href={BUILT_BY_AUDITORS_URL} style={lnk}>we built audit management software built by auditors.</Link> It supports real compliance work, not document formatting.</p>
                    </div>

                    {/* STEP 1 */}
                    <div id="step1" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Step 1 – Secure Your Private Audit Workspace</h2>
                        <SectionImage src={sectionImages.step1} alt="Secure your private audit workspace with iAudit Global" />
                        <div style={{ background: "#fff", borderRadius: "0.875rem", padding: "1.25rem 1.4rem", border: "1px solid #e8e4df", position: "relative", marginBottom: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", fontFamily: font, flexShrink: 0 }}>1</span>
                                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#111827", fontFamily: font }}>Get Started</h3>
                            </div>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>Start at iaudit.global and select <strong>Get Started Free</strong>.</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>This creates your secure workspace immediately. You only need a professional email address and a password.</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>We provide a <Link href={PRICING_URL} style={lnk}>14-day free trial</Link> because you should see the structure working before committing.</p>
                            <p style={{ ...ps, margin: 0 }}>From the first login, our Zero-Access policy applies. We host the software. We do not access your findings or attachments. Internal audits contain the most honest view of how a business operates. That data must remain yours.</p>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div id="step2" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Step 2 – Define Your ISO Standards and Organisational Context</h2>
                        <SectionImage src={sectionImages.step2} alt="Define ISO standards and organisational context in iAudit" />
                        <div style={{ background: "#fff", borderRadius: "0.875rem", padding: "1.25rem 1.4rem", border: "1px solid #e8e4df", position: "relative", marginBottom: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", fontFamily: font, flexShrink: 0 }}>2</span>
                                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#111827", fontFamily: font }}>Start Onboarding</h3>
                            </div>
                            <p style={{ ...ps, margin: "0 0 0.75rem" }}>Once you enter the dashboard, click <strong>Start Onboarding</strong>. This is the moment you move from a generic workspace to a system built for your specific management framework. In ISO terminology, this is where you establish the context of the organisation.</p>
                            <p style={{ ...ps, margin: "0 0 0.75rem" }}>By selecting your standards early, you ensure that every future checklist, report, and finding is technically grounded in the High-Level Structure of your certification.</p>

                            <h3 style={h3s}>Building Your Company Profile</h3>
                            <p style={{ ...ps, margin: "0 0 0.75rem" }}>First, you will establish your organisation&apos;s professional identity within the system. This ensures that every report generated is custom-branded and technically accurate.</p>

                            {[
                                { label: "Company Logo", text: "Upload your company logo (PNG or JPG up to 10MB). The system automatically compresses the file for efficient storage, ensuring your reports look professional without being oversized." },
                                { label: "General Information", text: "You will enter your company name, select your specific industry, and provide a contact number. There is also a description field with a 500-character limit, which is the perfect space to define the scope of your management system." },
                                { label: "Address Information", text: "Completing the full address details, including street, country, state, and postal code, ensures your audit records meet the formal documentation requirements of Clause 7.5." },
                            ].map((item) => (
                                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "rgba(0,102,68,0.04)", borderRadius: "0.75rem", padding: "0.875rem 1rem", border: "1px solid rgba(0,102,68,0.1)", marginBottom: "0.625rem" }}>
                                    <span style={{ minWidth: "110px", borderRadius: "5px", background: "#006644", color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "3px 8px", textAlign: "center", flexShrink: 0, fontFamily: font }}>{item.label}</span>
                                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div id="step3" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Step 3 – Mapping Multi-Site Infrastructure</h2>
                        <SectionImage src={sectionImages.step3} alt="Map multi-site infrastructure across manufacturing, construction, logistics" />
                        <div style={{ background: "#fff", borderRadius: "0.875rem", padding: "1.25rem 1.4rem", border: "1px solid #e8e4df", position: "relative", marginBottom: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", fontFamily: font, flexShrink: 0 }}>3</span>
                                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#111827", fontFamily: font }}>Add Your Sites</h3>
                            </div>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>One of the most common failures in manual audit programmes is the <strong>Site Silo</strong>.</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>Site A is compliant. Site B struggles. Head office cannot see the difference because records are local.</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>During setup, add each operating location. Manufacturing plants. Construction projects. Logistics depots.</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>When you understand how to set up iAudit Global ISO audit software across sites, you gain comparison capability.</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>You can identify recurring nonconformities across regions. Lessons learned in one site become visible to all.</p>
                            <p style={{ ...ps, margin: 0 }}>This is not about digitising a checklist. It is about operational oversight.</p>
                        </div>
                    </div>

                    {/* STEP 4 */}
                    <div id="step4" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Step 4 – Building a Resilient Team Structure</h2>
                        <SectionImage src={sectionImages.step4} alt="Build resilient audit team structure with clear roles" />
                        <div style={{ background: "#fff", borderRadius: "0.875rem", padding: "1.25rem 1.4rem", border: "1px solid #e8e4df", position: "relative", marginBottom: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", fontFamily: font, flexShrink: 0 }}>4</span>
                                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#111827", fontFamily: font }}>Organise Your Teams</h3>
                            </div>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>Auditing should never depend on memory.</p>
                            <p style={{ ...ps, margin: "0 0 0.75rem" }}>Organise your teams by department. Production. Maintenance. HR. Engineering. Invite your colleagues. Assign clear roles.</p>

                            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.875rem", margin: "0 0 0.75rem" }}>
                                <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.75rem", padding: "1rem 1.25rem", border: "1px solid rgba(0,102,68,0.12)" }}>
                                    <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#006644", fontSize: "0.85rem", fontFamily: font }}>Auditors</p>
                                    <p style={{ margin: 0, color: "#374151", fontSize: "0.9rem", lineHeight: 1.65, fontFamily: font }}>Execute checks and capture evidence.</p>
                                </div>
                                <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.75rem", padding: "1rem 1.25rem", border: "1px solid rgba(0,102,68,0.12)" }}>
                                    <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#006644", fontSize: "0.85rem", fontFamily: font }}>Auditees</p>
                                    <p style={{ margin: 0, color: "#374151", fontSize: "0.9rem", lineHeight: 1.65, fontFamily: font }}>Own the processes and respond to findings.</p>
                                </div>
                            </div>

                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>Clear role assignment eliminates ambiguity. It removes the &ldquo;Who was supposed to do this?&rdquo; conversation. It also prevents corrective actions from drifting into what I often call the <strong>Inbox Grave</strong>.</p>
                            <p style={{ ...ps, margin: 0 }}>You can see how ownership discipline supports <Link href={CORRECTIVE_ACTIONS_URL} style={lnk}>corrective actions after an internal audit.</Link> Structure prevents recurrence.</p>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div id="step5" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Step 5 – Baselining Maturity with a Self-Assessment</h2>
                        <SectionImage src={sectionImages.step5} alt="Baseline maturity with ISO self-assessment in iAudit" />
                        <div style={{ background: "#fff", borderRadius: "0.875rem", padding: "1.25rem 1.4rem", border: "1px solid #e8e4df", position: "relative", marginBottom: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", fontFamily: font, flexShrink: 0 }}>5</span>
                                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#111827", fontFamily: font }}>Run Self-Assessment</h3>
                            </div>
                            <p style={{ ...ps, margin: "0 0 0.75rem" }}>Before conducting formal audits, you need a baseline. The Self-Assessment tool is clause-aligned.</p>

                            <div style={{ background: "rgba(0,102,68,0.04)", borderRadius: "0.75rem", padding: "1rem 1.25rem", border: "1px solid rgba(0,102,68,0.1)", marginBottom: "0.75rem" }}>
                                <p style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "#111827", fontSize: "0.92rem", fontFamily: font }}>Example: ISO 45001 Self-Assessment</p>
                                <p style={{ ...ps, margin: "0 0 0.5rem" }}>Under ISO 45001, you will see structured questions across all auditable clauses:</p>
                                {["Clause 4. Context of the Organisation", "Clause 5. Leadership", "Clause 6. Planning", "Clause 7. Support", "Clause 8. Operation", "Clause 9. Performance Evaluation", "Clause 10. Improvement"].map((c) => (
                                    <div key={c} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.15rem 0" }}>
                                        <span style={{ color: "#006644", fontWeight: 700 }}>›</span>
                                        <span style={{ fontSize: "0.9rem", color: "#374151", fontFamily: font }}>{c}</span>
                                    </div>
                                ))}
                            </div>

                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>Each question uses a clear <strong>Yes or No</strong> format. A progress indicator shows completion status across the standard.</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>This is not a generic checklist. It mirrors the structure of the ISO standard itself.</p>
                            <p style={{ ...ps, margin: 0 }}>The output provides an honest picture of where you stand before any formal audit begins. That insight alone can reshape your next management review.</p>
                        </div>
                    </div>

                    {/* STEP 6 */}
                    <div id="step6" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Step 6 – Identifying Gaps and Planning Action</h2>
                        <SectionImage src={sectionImages.step6} alt="Gap analysis and action planning in iAudit Global" />
                        <div style={{ background: "#fff", borderRadius: "0.875rem", padding: "1.25rem 1.4rem", border: "1px solid #e8e4df", position: "relative", marginBottom: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem" }}>
                                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", fontFamily: font, flexShrink: 0 }}>6</span>
                                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "#111827", fontFamily: font }}>Gap Analysis</h3>
                            </div>
                            <p style={{ ...ps, margin: "0 0 0.75rem" }}>The Gap Analysis moves you from maturity overview to action.</p>

                            <p style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "#111827", fontSize: "0.92rem", fontFamily: font }}>Gap Analysis Outcomes</p>
                            <p style={{ ...ps, margin: "0 0 0.5rem" }}>For each clause question, you select:</p>
                            <div style={{ display: "flex", gap: "0.625rem", margin: "0 0 0.75rem", flexWrap: "wrap" }}>
                                {[{ label: "Comply", color: "#006644" }, { label: "OFI", color: "#d97706" }, { label: "NC", color: "#dc2626" }].map((item) => (
                                    <span key={item.label} style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`, borderRadius: "999px", padding: "4px 14px", fontSize: "0.82rem", fontWeight: 600, fontFamily: font }}>{item.label}</span>
                                ))}
                            </div>

                            <p style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "#111827", fontSize: "0.92rem", fontFamily: font }}>Available Actions</p>
                            {[
                                "Draft an action plan immediately",
                                "Document corrective actions directly within the clause",
                                "Upload evidence images and attach supporting records",
                                "Add custom questions to reflect sector-specific risks",
                            ].map((item) => (
                                <div key={item} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.2rem 0" }}>
                                    <span style={{ color: "#006644", fontWeight: 700 }}>✓</span>
                                    <span style={{ fontSize: "0.9rem", color: "#374151", fontFamily: font }}>{item}</span>
                                </div>
                            ))}

                            <p style={{ ...ps, margin: "0.75rem 0 0" }}>Unlike static spreadsheets, this keeps findings, evidence and action together. By the end of this step, you have transitioned from fragmented files to a structured, operational audit programme.</p>
                        </div>
                    </div>

                    {/* PDCA */}
                    <div id="pdca" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Maintaining the PDCA Cycle</h2>
                        <SectionImage src={sectionImages.pdca} alt="PDCA cycle continuity with iAudit Global audit software" />
                        <p style={ps}>The real purpose of learning how to set up iAudit Global ISO audit software is not setup efficiency. It is <strong>PDCA continuity</strong>.</p>

                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: "0.625rem", margin: "1rem 0 1.25rem" }}>
                            {[
                                { label: "Plan", desc: "Plan your audits", color: "#3b82f6" },
                                { label: "Do", desc: "Do the checks", color: "#10b981" },
                                { label: "Check", desc: "Check the findings", color: "#f59e0b" },
                                { label: "Act", desc: "Act through verified corrective action", color: "#006644" },
                            ].map((item) => (
                                <div key={item.label} style={{ background: "#fff", borderRadius: "0.75rem", padding: "0.875rem", border: "1px solid #e8e4df", textAlign: "center" }}>
                                    <p style={{ margin: "0 0 0.2rem", fontWeight: 700, color: item.color, fontSize: "0.85rem", fontFamily: font }}>{item.label}</p>
                                    <p style={{ margin: 0, color: "#6B7280", fontSize: "0.8rem", lineHeight: 1.45, fontFamily: font }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p style={ps}><Link href={PDCA_URL} style={lnk}>Our PDCA cycle audit software</Link> connects these stages automatically.</p>
                        <p style={ps}>Findings link to actions. Actions link to evidence. Reports are generated using the logic outlined in <Link href={AUDIT_REPORT_URL} style={lnk}>how to write an ISO internal audit report.</Link></p>
                        <p style={ps}>You are no longer rebuilding audit packs manually before external reviews. Your history builds itself.</p>
                    </div>

                    {/* TAKE CONTROL */}
                    <div id="control" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2s}>Take Control of Your Audit History</h2>
                        <p style={ps}>Setting up ISO audit software is not a technical project. It is a structural decision.</p>
                        <p style={ps}>It ensures your audit records stay with the organisation. It protects continuity. It strengthens governance.</p>
                        <p style={ps}>Structure should never be a hurdle to improvement. It should be the engine behind it.</p>
                        <p style={ps}>If you are ready to move beyond formatting Word tables and managing disconnected spreadsheets, start your 14-day free trial at iaudit.global.</p>
                        <p style={ps}>You can complete these six steps and run your first gap analysis in less time than it takes to format a <Link href={TEMPLATE_URL} style={lnk}>single ISO internal audit report template.</Link></p>

                        {/* Green CTA */}
                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h3 style={{ fontSize: isMobile ? "1.35rem" : "1.55rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font, position: "relative" }}>
                                Start Structuring Your ISO Audit Programme Today
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.5rem", position: "relative", fontFamily: font }}>Setting up iAudit Global ISO audit software should not feel like an implementation project. It should feel like putting structure around the work you are already doing.</p>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.5rem", position: "relative", fontFamily: font }}>In six clear steps, you can move from disconnected spreadsheets and scattered evidence to a clause-aligned, centralised audit programme that supports real PDCA continuity.</p>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.5rem", position: "relative", fontFamily: font }}>No credit card. No IT installation. Full access from day one.</p>
                            <a href="https://www.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font, marginTop: "0.5rem" }}>
                                Get Started Free
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                        </div>
                    </div>
                </article>

                {/* RIGHT AUTHOR */}
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "2rem 1.5rem", textAlign: "center" }}>
                            <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, #002e1d, #006644)", margin: "0 auto 1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>iAudit Global Team</p>
                            <p style={{ margin: "0 0 1.1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>Helping organisations set up structured ISO audit programmes that build continuity and operational oversight.</p>
                            <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.8rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>Book Consultation</Link>
                        </div>
                    </aside>
                )}

                {isMobile && (
                    <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "1.75rem 1.5rem", textAlign: "center" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #002e1d, #006644)", margin: "0 auto 0.875rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>iAudit Global Team</p>
                        <p style={{ margin: "0 0 1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>Helping organisations set up structured ISO audit programmes.</p>
                        <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>Book Consultation</Link>
                    </div>
                )}
            </div>

            <CTA />
            <Footer />
        </div>
    );
}
