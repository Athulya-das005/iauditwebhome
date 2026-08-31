"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog-complex-workflows.webp";

const ISO9001_URL = "/standards/iso-9001-audit-management-software";
const ISO14001_URL = "/standards/iso-14001-audit-management-software";
const ISO45001_URL = "/standards/iso-45001-audit-management-software";
const PDCA_URL = "/pdca-cycle-audit-software";
const BUILT_BY_AUDITORS_URL = "/audit-management-software-built-by-auditors";
const PRICING_URL = "/pricing";
const CONTACT_URL = "/contact";

const INDUSTRY_URLS: Record<string, string> = {
    manufacturing: "/industries/manufacturing-iso-audit-software",
    construction: "/industries/construction-iso-audit-software",
    logistics: "/industries/transport-and-logistics-iso-audit-software",
    healthcare: "/industries/healthcare-compliance-software",
    food: "/industries/food-and-beverage-iso-audit-software",
};

const sectionImages: Record<string, string> = {
    templates: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    professional: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    industry: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=480&fit=crop&q=80&fm=webp",
    mistakes: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    multisite: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "templates", label: "Access Our Templates" },
    { id: "professional", label: "What Makes a Professional Report?" },
    { id: "industry", label: "Industry-Specific Nuances" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "multisite", label: "Why Static Templates Fail" },
    { id: "iaudit", label: "Moving from Check to Act" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const templateStandards = [
    {
        title: "ISO 9001:2015 Internal Audit Report Template",
        text: "Focuses on quality management, process control and customer satisfaction.",
        linkText: "ISO 9001 audit management software",
        linkHref: ISO9001_URL,
    },
    {
        title: "ISO 14001:2015 Internal Audit Report Template",
        text: "Designed for environmental management, focusing on legal registers, waste controls and spill readiness.",
        linkText: "ISO 14001 audit management software",
        linkHref: ISO14001_URL,
    },
    {
        title: "ISO 45001:2018 Internal Audit Report Template",
        text: "Structured for occupational health and safety, focusing on hazard identification and worker participation.",
        linkText: "ISO 45001 audit management software",
        linkHref: ISO45001_URL,
    },
];

const regFields = [
    { label: "The Requirement", text: "State exactly what the procedure or ISO clause requires." },
    { label: "The Evidence", text: "State what you actually saw, including specific record IDs, equipment numbers, or batch codes." },
    { label: "The Gap", text: "Explain exactly why the evidence does not meet the requirement." },
];

const industrySections: { title: string; slug: string }[] = [
    { title: "Construction and Civil Engineering", slug: "construction" },
    { title: "Transport and Logistics", slug: "logistics" },
    { title: "Healthcare and Clinical Services", slug: "healthcare" },
    { title: "Food and Beverage Manufacturing", slug: "food" },
    { title: "General Manufacturing and Fabrication", slug: "manufacturing" },
];

const commonMistakes = [
    {
        title: "Vague Evidence",
        text: "Saying \u201cmaintenance logs were reviewed\u201d does not provide traceability. You must record exactly which assets were checked. If an external auditor cannot replicate your sample, the internal audit loses its credibility.",
    },
    {
        title: "Ambiguous Ownership",
        text: "A finding without a named owner is just an observation. Every corrective action must be assigned to a specific individual with a defined deadline. Without this, the report will sit in a folder and the same issues will reappear next year.",
    },
    {
        title: "The Reporting Lag",
        text: "If an audit happens on Monday but the report isn\u2019t issued until two weeks later, the momentum is gone. The most effective reports are those issued as close to the audit as possible, while the findings are still fresh in the minds of the team.",
    },
];

const staticProblems = [
    "Data silos \u2014 a report saved on a local drive at one plant is invisible to the rest of the organisation. Head office cannot see whether a trend is developing across the group.",
    "No easy way to perform trend analysis \u2014 you cannot easily compare the findings of ten different PDF reports to see if you have a recurring problem with a specific supplier or a piece of equipment.",
    "Chasing actions \u2014 a static template does not remind an owner that a corrective action is overdue. This leads to the \u201cadmin chase\u201d where the quality manager spends more time sending emails than on actual improvement.",
];

const faqItems = [
    {
        question: "What should be included in a professional ISO internal audit report?",
        answer: "An effective report must follow the principles of ISO 19011 and include the audit scope, objectives, and criteria. Beyond the basics, it should feature clear nonconformity statements, positive findings to reinforce good culture, and opportunities for improvement. Most importantly, every finding must be linked to a named owner and a specific deadline to ensure the PDCA cycle audit software methodology is maintained.",
    },
    {
        question: "How do I write a nonconformity statement that drives action?",
        answer: "A nonconformity statement should never be vague. We recommend the Requirement, Evidence, Gap model. First, state the specific requirement from your procedure or the standard. Second, provide the objective evidence found during the audit, such as specific record IDs or batch codes. Finally, explain the gap between the two. This structured approach is a core feature of our ISO 9001 audit management software workflows.",
    },
    {
        question: "Why is it better to use audit software instead of a Word or Excel template?",
        answer: "While a template is a good starting point for a single audit, it often leads to a \u201cfile management\u201d burden. Static documents create data silos where findings are hidden on local drives. Audit management software built by auditors centralises your history, allowing you to perform trend analysis across sites and automatically chase overdue corrective actions, which is impossible with manual spreadsheets.",
    },
    {
        question: "How soon should an internal audit report be issued after the site visit?",
        answer: "To maintain momentum, a report should be issued as soon as possible, ideally within a few days. The \u201creporting lag\u201d is a common issue where the context of a finding is lost because the report takes weeks to format. Our platform removes this delay by allowing for instant report generation, ensuring that the Construction Industry or manufacturing site teams can act on findings while they are still fresh.",
    },
    {
        question: "What is the difference between a nonconformity and an opportunity for improvement?",
        answer: "A nonconformity is a verified failure to meet a requirement of the standard or your own internal procedures. An opportunity for improvement (OFI) is an area where you are technically compliant, but the process is inefficient or carries a future risk. Tracking both is essential for ISO 14001 audit management software users who need to prevent environmental incidents before they occur.",
    },
    {
        question: "Why is evidence capture so critical in manufacturing and logistics audits?",
        answer: "In sectors like the Logistics Industry, evidence provides the \u201cproof of life\u201d for your audit. Without specific record IDs, photos of site conditions, or calibration dates, a report is just a collection of opinions. Structured evidence ensures your internal audits hold up under the scrutiny of an external certification body and provides a clear trail for future reviews.",
    },
    {
        question: "How do I manage corrective actions once the audit report is finished?",
        answer: "The report is only the beginning. Every nonconformity must be assigned to an owner who is responsible for root cause analysis and implementing a fix. Using a centralised system like our ISO 45001 audit management software allows you to monitor the status of these actions in real time, ensuring that improvements are verified and sustained across the entire organisation.",
    },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div style={{ width: "100%", borderRadius: "0.875rem", overflow: "hidden", margin: "1.5rem 0 2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <img src={src} alt={alt} loading="lazy" style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "320px" }}
                onError={(e) => { e.currentTarget.style.display = "none"; (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }} />
        </div>
    );
}

export default function IsoAuditReportTemplateBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [tocOpen, setTocOpen] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';

    useEffect(() => { const check = () => setIsMobile(window.innerWidth < 900); check(); window.addEventListener("resize", check); return () => window.removeEventListener("resize", check); }, []);

    useEffect(() => {
        const onScroll = () => {
            for (let i = tocItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(tocItems[i].id);
                if (el && el.getBoundingClientRect().top < 140) { setActiveSection(tocItems[i].id); return; }
            }
            setActiveSection(tocItems[0].id);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); if (isMobile) setTocOpen(false); };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: font }}>
            {/* Hero */}
            <div style={{ position: "relative", width: "100%", height: isMobile ? "55vw" : "70vh", minHeight: isMobile ? "240px" : "440px", maxHeight: "700px", overflow: "hidden" }}>
                <Image src={HERO_IMAGE} alt="ISO internal audit report template free download and best practices" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)" }} />
                <div style={{ position: "absolute", bottom: isMobile ? "1rem" : "2rem", left: isMobile ? "1.25rem" : "2.5rem", right: isMobile ? "1.25rem" : "2.5rem" }}>
                    <span style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", borderRadius: "999px", padding: "3px 14px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.625rem", fontFamily: font }}>Audit Reporting</span>
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
                        {tocItems.map((item) => { const isActive = activeSection === item.id; return (<button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", background: isActive ? "rgba(0,102,68,0.07)" : "transparent", border: "none", borderLeft: isActive ? "3px solid #006644" : "3px solid transparent", padding: "0.45rem 0.75rem", borderRadius: "0 5px 5px 0", cursor: "pointer", fontSize: "0.84rem", color: isActive ? "#006644" : "#6B7280", fontWeight: isActive ? 600 : 400, fontFamily: font, lineHeight: 1.4 }}>{item.label}</button>); })}
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
                                {tocItems.map((item) => { const isActive = activeSection === item.id; return (<button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", border: "none", padding: "0.48rem 0.625rem 0.48rem 1.5rem", cursor: "pointer", fontSize: "0.845rem", fontFamily: font, lineHeight: 1.38, color: isActive ? "#006644" : "#6B7280", fontWeight: isActive ? 600 : 400, background: isActive ? "rgba(0,102,68,0.06)" : "transparent", borderRadius: "0 6px 6px 0", borderLeft: isActive ? "2px solid #006644" : "2px solid transparent" }}>{item.label}</button>); })}
                            </nav>
                        </div>
                    </aside>
                )}

                {/* CENTER ARTICLE */}
                <article>
                    <h1 style={{ fontSize: isMobile ? "2.15rem" : "2.85rem", fontWeight: 600, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1rem", fontFamily: font }}>
                        ISO Internal Audit Report Template: Free Download and Best Practices
                    </h1>

                    {/* INTRO */}
                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.25rem 1.5rem", margin: "0 0 1.25rem" }}>
                            <p style={{ ...para(font), margin: "0 0 0.75rem" }}>
                                An effective ISO internal audit report template is more than just a record of compliance; it is a tool for organisational oversight. To drive real improvement, reports must move beyond vague observations and follow a structured &ldquo;Requirement-Evidence-Gap&rdquo; model.
                            </p>
                            <p style={{ ...para(font), margin: 0 }}>
                                While our free editable templates for ISO 9001, 14001, and 45001 provide a solid foundation for individual audits, static files often create data silos in multi-site organisations. iAudit Global helps teams move beyond &ldquo;file management&rdquo; by centralising audit history, automating professional reporting, and ensuring every finding is linked to a verified corrective action through the full PDCA cycle.
                            </p>
                        </div>
                        <p style={para(font)}>I have sat through hundreds of management reviews where the internal audit report was treated as a history lesson rather than a tool for improvement.</p>
                        <p style={para(font)}>In many organisations, the audit itself is thorough, but the reporting phase becomes a bottleneck. Most auditors I know prefer being on the shop floor or in the warehouse rather than sitting behind a screen formatting tables in Word or chasing updates in Excel.</p>
                        <p style={para(font)}>An effective ISO internal audit report template should simplify the administration so you can focus on the findings. It needs to satisfy an external certification body while providing the site manager with a clear plan of action.</p>
                        <p style={para(font)}>Below, you can download the templates we use, along with the logic behind how to fill them out properly.</p>
                    </div>

                    {/* TEMPLATES */}
                    <div id="templates" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to Access iAudit ISO Internal Audit Report Templates</h2>
                        <SectionImage src={sectionImages.templates} alt="ISO internal audit report templates for ISO 9001, 14001 and 45001" />
                        <p style={para(font)}>We have developed a suite of editable internal audit report templates designed to follow the principles of ISO 19011. These are structured to ensure you capture the objective evidence required for compliance while identifying the specific risks that matter to your operations.</p>
                        <p style={para(font)}>Because reporting requirements vary significantly between sectors like manufacturing, construction and logistics, we prefer to share these templates individually to ensure they are the right fit for your specific environment.</p>
                        <p style={{ ...para(font), fontWeight: 600, color: "#111827" }}>You can request the editable versions for the following standards through our contact page:</p>

                        {templateStandards.map((item) => (
                            <div key={item.title} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.1rem 1.4rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>
                                    {item.text} It is built to handle the structured requirements of{" "}
                                    <Link href={item.linkHref} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>{item.linkText}</Link>.
                                </p>
                            </div>
                        ))}

                        <div style={{ background: "linear-gradient(145deg, #f4fbf7 0%, #ffffff 55%, #f8fafc 100%)", borderRadius: "1.1rem", border: "1px solid rgba(0,102,68,0.18)", padding: isMobile ? "1.5rem 1.25rem" : "1.75rem 2rem", margin: "1.5rem 0", boxShadow: "0 8px 28px rgba(0,102,68,0.08)" }}>
                            <span style={{ display: "inline-block", background: "rgba(0,102,68,0.08)", color: "#006644", borderRadius: "999px", padding: "3px 12px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem", fontFamily: font }}>Request your templates</span>
                            <p style={{ ...para(font), margin: "0 0 0.75rem" }}>When you reach out, please just mention which standards and industry you are focused on so we can send the most relevant version to you.</p>
                            <Link href={CONTACT_URL} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #058c42 0%, #006644 100%)", color: "#fff", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", fontFamily: font }}>
                                Request your templates here
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* PROFESSIONAL REPORT */}
                    <div id="professional" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What Makes a Professional ISO Audit Report?</h2>
                        <SectionImage src={sectionImages.professional} alt="What makes a professional ISO audit report with clear evidence" />
                        <p style={para(font)}>A template is only as good as the information you put into it. If your reports are being ignored, it is usually because the findings lack context or clarity.</p>
                        <p style={para(font)}>A professional report should follow a structured logic that moves from the requirement to the evidence and, finally, to the gap.</p>

                        <h3 style={h3(font)}>Clear Nonconformity (NC) Statements</h3>
                        <p style={para(font)}>A vague finding like &ldquo;training records were missing&rdquo; is easy to dismiss. An effective nonconformity statement uses the Requirement-Evidence-Gap model.</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", margin: "1rem 0 1.25rem" }}>
                            {regFields.map((item) => (
                                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "rgba(0,102,68,0.05)", borderRadius: "0.75rem", padding: "0.875rem 1rem", border: "1px solid rgba(0,102,68,0.12)" }}>
                                    <span style={{ minWidth: "100px", borderRadius: "5px", background: "#006644", color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "3px 8px", textAlign: "center", flexShrink: 0, fontFamily: font }}>{item.label}</span>
                                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <h3 style={h3(font)}>Documenting Positive Findings</h3>
                        <p style={para(font)}>Internal audits should not be a search for what is wrong. Documenting good practices is vital for two reasons. It reinforces a positive safety and quality culture, and it provides a benchmark that other departments can learn from. If one production line has a superior setup for tool calibration, that should be highlighted as a strength.</p>

                        <h3 style={h3(font)}>Opportunities for Improvement (OFI)</h3>
                        <p style={para(font)}>
                            These are your &ldquo;yellow flags.&rdquo; An OFI is an area where the organisation is technically compliant but where a process is inefficient or carries an unnecessary risk of future failure. In{" "}
                            <Link href={INDUSTRY_URLS.manufacturing} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>Manufacturing</Link>{" "}
                            environments, these often relate to process drift that hasn&apos;t yet caused a defect but likely will if left unaddressed.
                        </p>
                    </div>

                    {/* INDUSTRY SPECIFIC */}
                    <div id="industry" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Industry-Specific Reporting Nuances</h2>
                        <SectionImage src={sectionImages.industry} alt="Industry-specific ISO audit report nuances for manufacturing, construction, healthcare" />
                        <p style={para(font)}>A generic audit report often fails because it ignores the operational reality of the environment being audited. To be truly effective, the structure of your report must capture the specific risks inherent to your sector. Whether you are auditing a factory floor, a construction site, or a clinical ward, the &ldquo;So What?&rdquo; of your findings depends on this context.</p>

                        <div style={{ marginBottom: "1.15rem" }}>
                            <h3 style={h3(font)}>Construction and Civil Engineering</h3>
                            <p style={para(font)}><Link href={INDUSTRY_URLS.construction} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>In the Construction Industry, internal audit reports must bridge the gap between head office policy and site-level reality.</Link> Your report should focus heavily on site-specific hazard identification, subcontractor competence, and the latest ITP (Inspection and Test Plan) results. A professional construction audit doesn&apos;t just check for a signature; it verifies that the physical controls on-site match the documented safety and quality plans.</p>
                        </div>
                        <div style={{ marginBottom: "1.15rem" }}>
                            <h3 style={h3(font)}>Transport and Logistics</h3>
                            <p style={para(font)}><Link href={INDUSTRY_URLS.logistics} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>For organisations in the Logistics Industry, the audit report is a vital tool for managing fleet compliance and yard safety.</Link> Beyond basic ISO clauses, your report should provide clear oversight of vehicle maintenance records, driver fatigue management protocols, and pedestrian segregation in high-traffic depots. The goal is to move from local &ldquo;checks&rdquo; to a centralised view of risk across your entire distribution network.</p>
                        </div>
                        <div style={{ marginBottom: "1.15rem" }}>
                            <h3 style={h3(font)}>Healthcare and Clinical Services</h3>
                            <p style={para(font)}><Link href={INDUSTRY_URLS.healthcare} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>In the Healthcare Industry, the audit report is a core component of clinical governance.</Link> High priority must be given to infection control, medication management, and patient handover protocols. A clinical audit report should be structured to show not just compliance with a standard, but the actual impact on patient safety and service quality across different wards and departments.</p>
                        </div>
                        <div style={{ marginBottom: "1.15rem" }}>
                            <h3 style={h3(font)}>Food and Beverage Manufacturing</h3>
                            <p style={para(font)}><Link href={INDUSTRY_URLS.food} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>For the Food and Beverage Industry, the audit report is fundamentally about brand protection and traceability.</Link> Your reports must provide indisputable evidence of batch integrity, from raw material receipt through to final dispatch. This includes auditing cold chain monitoring, allergen controls, and hygiene schedules, ensuring that every link in the &ldquo;farm to fork&rdquo; chain is evidenced and traceable.</p>
                        </div>
                        <div style={{ marginBottom: "1.15rem" }}>
                            <h3 style={h3(font)}>General Manufacturing and Fabrication</h3>
                            <p style={para(font)}>In a production environment, the report should highlight process drift, machine calibration status, and material traceability. Effective manufacturing audits focus on ensuring that production output remains consistent and that nonconformities are caught before they reach the customer. <Link href={INDUSTRY_URLS.manufacturing} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>This level of detail is exactly what we have built into our Manufacturing Industry Page workflows.</Link></p>
                        </div>
                    </div>

                    {/* MISTAKES */}
                    <div id="mistakes" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common Mistakes in Internal Audit Reporting</h2>
                        <SectionImage src={sectionImages.mistakes} alt="Common mistakes in internal audit report writing" />
                        <p style={para(font)}>Over the years, I have seen the same three mistakes slow down audit programmes.</p>
                        {commonMistakes.map((item) => (
                            <div key={item.title} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #d97706" }}>
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* MULTI-SITE */}
                    <div id="multisite" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Static Templates Fail for Multi-Site Programmes</h2>
                        <SectionImage src={sectionImages.multisite} alt="Why static Word and Excel templates fail for multi-site audit programmes" />
                        <p style={para(font)}>A Word or Excel template is a good starting point for a single audit, but it is a difficult way to manage a whole programme. If you are managing multiple sites, static templates create several hidden problems.</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {staticProblems.map((item, i, arr) => (
                                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ color: "#dc2626", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✕</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            <Link href={BUILT_BY_AUDITORS_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>This is why we built audit management software built by auditors.</Link>{" "}
                            We wanted to move away from &ldquo;file management&rdquo; and get back to the actual purpose of auditing.
                        </p>
                    </div>

                    {/* IAUDIT CTA */}
                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Moving from &ldquo;Check&rdquo; to &ldquo;Act&rdquo; with iAudit Global</h2>
                        <SectionImage src={sectionImages.iaudit} alt="iAudit Global PDCA cycle audit software for ISO audit reporting" />
                        <p style={para(font)}>
                            The real value of an audit is not the report itself, but the action that follows. This is the core of the PDCA cycle.{" "}
                            <Link href={PDCA_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>Our PDCA cycle audit software ensures that every finding is linked to a corrective action and tracked through to a verified closure.</Link>
                        </p>
                        <p style={para(font)}>Instead of manual reformatting, iAudit generates professional reports instantly. It allows management to see compliance trends across every site on a single dashboard, making it easier to identify systemic risks before they escalate.</p>
                        <p style={para(font)}>A template is a useful tool for a single day, but a structured system is what provides long-term control.</p>
                        <p style={para(font)}>
                            <Link href={PRICING_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>If you are ready to move beyond spreadsheets and see how your audit data can actually drive your organisation forward, you can view our Pricing</Link>{" "}
                            or start a trial today.
                        </p>

                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h3 style={{ fontSize: isMobile ? "1.35rem" : "1.55rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 1rem", fontFamily: font, position: "relative" }}>
                                Structure your audit programme with iAudit Global
                            </h3>
                            <p style={greenPara(font)}>Explore how iAudit Global can centralise your audit history, automate professional reporting, and track every corrective action from finding to verified closure.</p>
                            <a href="https://www.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font }}>
                                Start your free trial
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

function h2(font: string): React.CSSProperties {
    return { fontSize: "1.6rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font };
}
function h3(font: string): React.CSSProperties {
    return { fontSize: "1.2rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.01em", lineHeight: 1.3, margin: "1.5rem 0 0.625rem", fontFamily: font };
}
function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}
function greenPara(font: string): React.CSSProperties {
    return { color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font };
}
