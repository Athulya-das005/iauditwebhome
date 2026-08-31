"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog-auditor-training.webp";
const RBT_URL = "/blog/risk-based-thinking-in-iso-9001";
const CORRECTIVE_ACTIONS_URL = "/blog/corrective-actions-after-an-internal-audit-findings-to-closure";
const ISO9001_URL = "/standards/iso-9001-audit-management-software";
const BUILT_BY_AUDITORS_URL = "/audit-management-software-built-by-auditors";
const PDCA_URL = "/pdca-cycle-audit-software";

const sectionImages: Record<string, string> = {
    why: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    evidence: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    clauses: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=480&fit=crop&q=80&fm=webp",
    interview: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    proportional: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=480&fit=crop&q=80&fm=webp",
    effectiveness: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "why", label: "Why It Is Different" },
    { id: "evidence", label: "Beyond the Risk Register" },
    { id: "clauses", label: "Across ISO 9001 Clauses" },
    { id: "interview", label: "Interview Techniques" },
    { id: "proportional", label: "Proportionality" },
    { id: "effectiveness", label: "Effectiveness: The Final Test" },
    { id: "iaudit", label: "How iAudit Supports This" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const evidenceAreas = [
    {
        title: "Meeting Minutes and Operational Decisions",
        points: [
            "Do meeting records show risk discussions?",
            "Are decisions traceable to risk reasoning?",
            "If a process was changed or a supplier was removed, is there a documented rationale?",
        ],
        extra: "The ISO Certification Group notes that risk-based thinking should be visible across multiple organisational touchpoints, including meeting records, process changes and resource decisions. Look for evidence that risk awareness shaped decisions, not just that risks were listed somewhere.",
    },
    {
        title: "Process Design as Evidence",
        points: ["Why were certain controls chosen?"],
        extra: "The 9000 Store makes an important point here: process design is itself evidence of risk thinking. If a process has no visible rationale for its controls, risk-based thinking may be absent. Ask the process owner why steps exist. If they cannot explain the risk rationale, the control may have been inherited rather than designed.",
    },
    {
        title: "Resource Allocation",
        points: [
            "Did leadership direct resources toward high-risk processes?",
            "If Clause 6.1 identified a significant risk, was it reflected in budget, training or staffing decisions?",
        ],
        extra: "Kevin Brown identifies resource allocation as one of the clearest indicators of whether risk-based thinking is genuinely embedded or simply documented.",
    },
    {
        title: "Supplier and Subcontractor Controls",
        points: [
            "Are higher-risk suppliers monitored more frequently?",
            "Is there a visible rationale for how supplier oversight is tiered?",
        ],
        extra: "supplier",
    },
];

const clauseCards = [
    {
        title: "Clause 4 – Context of the Organisation",
        text: "Is there evidence that internal and external issues were genuinely identified? Are interested parties and their requirements documented with a clear connection to risk?",
    },
    {
        title: "Clause 5 – Leadership",
        text: "Does leadership demonstrate risk awareness in their decisions? Clause 5 requires top management to promote risk-based thinking. Look for evidence in management review outputs, resource decisions and communication.",
    },
    {
        title: "Clause 8 – Operational Control",
        text: "Are operational controls proportionate to identified risks? If a high-risk process has minimal controls, that is a gap. If a low-risk process is over-controlled, that suggests the approach may not be risk-driven.",
    },
    {
        title: "Clause 9 – Performance Evaluation",
        text: "Is monitoring focused on high-risk processes? Are the right metrics being tracked? Monitoring should be concentrated where risk is greatest.",
    },
    {
        title: "Clause 10 – Improvement",
        text: "Does corrective action genuinely eliminate root cause? Clause 10 is where risk-based thinking is tested most directly. If the same nonconformities return, root cause analysis may be superficial.",
    },
];

const auditQuestions = [
    "Why was this control introduced?",
    "How do you decide which suppliers receive closer oversight?",
    "What changed operationally after the last audit finding?",
    "How was this process designed to address identified risks?",
    "Who was involved in identifying these risks?",
];

const iauditFeatures = [
    "Clause-aligned checklists that cover the full standard",
    "Evidence attached directly to findings and clauses",
    "Cross-site trend analysis to identify recurring risks",
    "Corrective action tracking through to verified closure",
    "Dashboards that show compliance performance by site and department",
];

const faqItems = [
    {
        question: "What does it mean to audit risk-based thinking?",
        answer: "Knowing how to audit risk-based thinking involves looking for evidence of a proactive mindset rather than just a signed document. It is about verifying that an organisation identifies uncertainties and plans its processes to prevent failures before they happen.",
    },
    {
        question: "Where should I look for evidence when auditing risk-based thinking?",
        answer: "When considering how to audit risk-based thinking, you should look across multiple sources. Evidence can be found in meeting minutes, operational decisions, process designs, resource allocation and supplier reviews. These outputs prove that risk awareness is embedded in the system.",
    },
    {
        question: "Is a formal risk register required to pass an audit?",
        answer: "The standard does not explicitly mandate a formal risk register. Understanding how to audit risk-based thinking requires looking for proof that risk awareness is integrated into daily decisions and process planning, even if a formal risk matrix is not used.",
    },
    {
        question: "Which ISO 9001 clauses are relevant to risk-based thinking?",
        answer: "To master how to audit risk-based thinking, you must look beyond Clause 6.1. Risk awareness should also be visible in Clause 4 (Context of the Organisation), Clause 5 (Leadership), Clause 8 (Operational Control) and Clause 10 (Improvement).",
    },
    {
        question: "What are good interview questions for auditing risk-based thinking?",
        answer: "Effective questions for how to audit risk-based thinking are usually open ended. Ask questions such as: why was this specific control introduced? Or: how did you decide which processes required the most frequent monitoring?",
    },
    {
        question: "Does the approach to risk-based thinking change for small businesses?",
        answer: "Yes. Learning how to audit risk-based thinking means adjusting expectations based on the scale of the business. A small organisation needs a proportionate approach that fits its context, rather than a complex corporate risk framework.",
    },
    {
        question: "How do I verify if risk-based thinking is effective?",
        answer: "The final step in how to audit risk-based thinking is checking the performance data. Look for evidence that the actions taken actually led to fewer incidents, reduced nonconformities or improved process stability over time.",
    },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div style={{ width: "100%", borderRadius: "0.875rem", overflow: "hidden", margin: "1.5rem 0 2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
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

export default function AuditRiskBasedThinkingBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [tocOpen, setTocOpen] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';
    const lnk: React.CSSProperties = { color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" };

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
            <div style={{ position: "relative", width: "100%", height: isMobile ? "55vw" : "70vh", minHeight: isMobile ? "240px" : "440px", maxHeight: "700px", overflow: "hidden" }}>
                <Image src={HERO_IMAGE} alt="How to audit risk-based thinking in ISO 9001" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)" }} />
                <div style={{ position: "absolute", bottom: isMobile ? "1rem" : "2rem", left: isMobile ? "1.25rem" : "2.5rem", right: isMobile ? "1.25rem" : "2.5rem" }}>
                    <span style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", borderRadius: "999px", padding: "3px 14px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.625rem", fontFamily: font }}>ISO 9001 Auditing</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>August 19, 2026</span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>12 Min Read</span>
                    </div>
                </div>
            </div>

            <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: 0, zIndex: 40 }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.5rem", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "0.79rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: font }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        Back To Blog
                    </Link>
                    {isMobile && (
                        <button onClick={() => setTocOpen((v) => !v)} style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "1px solid #e8e4df", borderRadius: "6px", padding: "4px 10px", cursor: "pointer", color: "#374151", fontSize: "0.79rem", fontFamily: font }}>
                            Contents
                        </button>
                    )}
                </div>
                {isMobile && tocOpen && (
                    <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "0.875rem 1.25rem", display: "flex", flexDirection: "column", gap: "1px" }}>
                        {tocItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", background: isActive ? "rgba(0,102,68,0.07)" : "transparent", border: "none", borderLeft: isActive ? "3px solid #006644" : "3px solid transparent", padding: "0.45rem 0.75rem", borderRadius: "0 5px 5px 0", cursor: "pointer", fontSize: "0.84rem", color: isActive ? "#006644" : "#6B7280", fontWeight: isActive ? 600 : 400, fontFamily: font, lineHeight: 1.4 }}>
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "210px 1fr 240px", gap: isMobile ? "2rem" : "3rem", alignItems: "start" }}>
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#374151", margin: "0 0 0.625rem", fontFamily: font }}>Contents</p>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "1px", background: "#e4e0db" }} />
                            <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                {tocItems.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", border: "none", padding: "0.48rem 0.625rem 0.48rem 1.5rem", cursor: "pointer", fontSize: "0.845rem", fontFamily: font, lineHeight: 1.38, color: isActive ? "#006644" : "#6B7280", fontWeight: isActive ? 600 : 400, background: isActive ? "rgba(0,102,68,0.06)" : "transparent", borderRadius: "0 6px 6px 0", borderLeft: isActive ? "2px solid #006644" : "2px solid transparent" }}>
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>
                )}

                <article>
                    <h1 style={{ fontSize: isMobile ? "2.15rem" : "2.85rem", fontWeight: 600, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1rem", fontFamily: font }}>
                        How to Audit Risk-based Thinking in ISO 9001
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>Auditing risk-based thinking is one of the more challenging aspects of an ISO 9001 internal audit.</p>
                        <p style={para(font)}>Most audit competencies focus on evidence. Show me the procedure. Show me the record. Show me the certificate.</p>
                        <p style={para(font)}>Risk-based thinking does not work that way.</p>
                        <p style={para(font)}>You cannot ask an auditee to &ldquo;show you their risk-based thinking&rdquo; and expect a document to tell the whole story. It is a mindset. It should be visible in how an organisation plans, decides and responds, not just in what it files.</p>
                        <p style={para(font)}>I have sat through many ISO 9001 audits where the auditor asked for the risk register, reviewed it briefly and moved on. That approach misses the point entirely.</p>
                        <p style={para(font)}>This blog explains how to audit risk-based thinking properly, what evidence to look for and where to find it across the standard.</p>
                    </div>

                    <div id="why" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Auditing Risk-based Thinking Is Different</h2>
                        <SectionImage src={sectionImages.why} alt="Why auditing ISO 9001 risk-based thinking is different from traditional audits" />
                        <p style={para(font)}>Traditional ISO auditing is relatively straightforward.</p>
                        <p style={para(font)}>A clause requires a procedure. You find the procedure. You verify it is followed.</p>
                        <p style={para(font)}>Risk-based thinking does not produce a single document you can review in isolation. It produces a pattern of decisions, process designs and operational responses that should be visible across the management system.</p>
                        <p style={para(font)}>As Kevin Brown notes in his analysis of auditing risk-based thinking, the auditor&apos;s job is to look for evidence that people understand why controls exist, not just that they exist. That distinction requires a different approach to questioning and observation.</p>
                        <p style={para(font)}>
                            For context on what risk-based thinking actually requires under ISO 9001:2015, see our earlier article on{" "}
                            <Link href={RBT_URL} style={lnk}>risk-based thinking in ISO 9001</Link>.
                        </p>
                    </div>

                    <div id="evidence" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What Auditors Should Look for Beyond the Risk Register</h2>
                        <SectionImage src={sectionImages.evidence} alt="Audit evidence beyond the ISO 9001 risk register" />
                        <p style={para(font)}>A risk register is useful. It is also only one piece of evidence.</p>
                        <p style={para(font)}>When auditing risk-based thinking, I look across several sources.</p>

                        {evidenceAreas.map((item) => (
                            <div key={item.title} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.1rem 1.4rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                                <h3 style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>{item.title}</h3>
                                {item.points.map((point) => (
                                    <div key={point} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.2rem 0" }}>
                                        <span style={{ color: "#006644", fontWeight: 700 }}>›</span>
                                        <span style={{ fontSize: "0.92rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{point}</span>
                                    </div>
                                ))}
                                {item.extra === "supplier" ? (
                                    <p style={{ margin: "0.75rem 0 0", color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>
                                        Risk-based thinking should inform supply chain decisions. If all suppliers receive identical oversight regardless of their risk profile, the approach may be compliance-driven rather than risk-driven. Where{" "}
                                        <Link href={CORRECTIVE_ACTIONS_URL} style={lnk}>corrective actions arise from supplier failures, it is also worth examining whether they address root cause.</Link>
                                    </p>
                                ) : (
                                    <p style={{ margin: "0.75rem 0 0", color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.extra}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div id="clauses" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to Audit Risk-based Thinking Across ISO 9001 Clauses</h2>
                        <SectionImage src={sectionImages.clauses} alt="Auditing risk-based thinking across ISO 9001 clauses" />
                        <p style={para(font)}>One of the most important insights from Ideagen&apos;s analysis of ISO 9001:2015 is that risk-based thinking is not confined to Clause 6.1. It is distributed across the standard.</p>
                        <p style={para(font)}>When auditing risk-based thinking, I examine multiple clauses.</p>
                        {clauseCards.map((item) => (
                            <div key={item.title} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df" }}>
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            Our <Link href={ISO9001_URL} style={lnk}>ISO 9001 audit management software</Link> is structured around these clauses to ensure audit coverage reflects the full standard.
                        </p>
                    </div>

                    <div id="interview" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Interview Techniques for Auditing Risk-based Thinking</h2>
                        <SectionImage src={sectionImages.interview} alt="Interview techniques for auditing ISO 9001 risk-based thinking" />
                        <p style={para(font)}>How to audit risk-based thinking effectively depends heavily on questioning technique.</p>
                        <p style={para(font)}>Closed questions produce limited evidence.</p>
                        <p style={para(font)}>&ldquo;Do you have a risk register?&rdquo; will get you a yes or no.</p>
                        <p style={para(font)}>Open questions produce richer insight.</p>
                        <p style={para(font)}>&ldquo;How did you decide which risks to prioritise?&rdquo; tells you whether risk-based thinking is genuinely embedded.</p>
                        <p style={para(font)}>Kevin Brown emphasises that auditors should listen for whether people understand the purpose behind controls, not just their existence.</p>
                        <p style={para(font)}>Strong audit questions for risk-based thinking include:</p>
                        <div style={{ background: "rgba(0,102,68,0.04)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.1)", padding: "0.25rem 1.25rem", margin: "0 0 1.25rem" }}>
                            {auditQuestions.map((q) => (
                                <div key={q} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.7rem 0" }}>
                                    <span style={{ color: "#d97706", fontWeight: 700 }}>?</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{q}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>The answers reveal whether risk awareness is a management system feature or a lived operational reality.</p>
                    </div>

                    <div id="proportional" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Proportionality: The Forgotten Element</h2>
                        <SectionImage src={sectionImages.proportional} alt="Proportionate risk-based thinking for small businesses" />
                        <p style={para(font)}>Effivity&apos;s analysis of risk-based thinking makes a point that auditors sometimes overlook.</p>
                        <p style={para(font)}>The standard does not require the same level of risk sophistication from every organisation.</p>
                        <p style={para(font)}>A small business with straightforward processes does not need a complex risk matrix or formal scoring system. What it needs is a proportionate, considered approach to risk that fits its context.</p>
                        <p style={para(font)}>When auditing risk-based thinking in smaller organisations, I adjust my expectations accordingly. The question is not whether the organisation has a sophisticated framework. The question is whether risk awareness is visible in how they operate.</p>
                        <p style={para(font)}>
                            This is also where platform design matters. We built{" "}
                            <Link href={BUILT_BY_AUDITORS_URL} style={lnk}>audit management software built by auditors</Link>{" "}
                            to support organisations at different levels of audit maturity, not just those with formal risk management infrastructure.
                        </p>
                    </div>

                    <div id="effectiveness" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Effectiveness: The Final Test</h2>
                        <SectionImage src={sectionImages.effectiveness} alt="Verifying effectiveness of ISO 9001 risk-based thinking" />
                        <p style={para(font)}>The most important question when auditing risk-based thinking is simple.</p>
                        <p style={{ ...para(font), fontWeight: 600, color: "#111827" }}>Has it worked?</p>
                        <p style={para(font)}>Auditors should look for performance data. Are monitored metrics improving? Have previously identified risks led to actual incidents or nonconformities? Has the same issue recurred after corrective action?</p>
                        <p style={para(font)}>If risks were identified and actions were taken but the situation has not improved, the effectiveness of risk-based thinking must be questioned.</p>
                        <p style={para(font)}>
                            This connects directly to the Act phase of PDCA. Our{" "}
                            <Link href={PDCA_URL} style={lnk}>PDCA cycle audit software</Link>{" "}
                            links findings to verified corrective actions so that effectiveness is tracked rather than assumed.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Supports Risk-based Audit Planning</h2>
                        <SectionImage src={sectionImages.iaudit} alt="iAudit Global risk-based ISO audit planning" />
                        <p style={para(font)}>When I was developing iAudit, one of the core design principles was that audit programmes should reflect risk, not just calendars.</p>
                        <p style={para(font)}>iAudit supports how to audit risk-based thinking by providing:</p>
                        <div style={{ margin: "0 0 1.25rem" }}>
                            {iauditFeatures.map((item) => (
                                <div key={item} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "0.25rem 0" }}>
                                    <span style={{ color: "#006644", fontWeight: 700 }}>✓</span>
                                    <span style={{ fontSize: "0.95rem", color: "#374151", fontFamily: font }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>Audit effort should follow risk. The platform is designed to make that possible.</p>
                        <p style={para(font)}>If you are reviewing how your internal audit programme addresses risk-based thinking, you can explore iAudit Global with a 14-day free trial at iaudit.global.</p>

                        <h2 style={{ ...h2(font), marginTop: "2.5rem" }}>Ensuring Risk-based Thinking Works in Practice</h2>
                        <p style={para(font)}>How to audit risk-based thinking in ISO 9001 requires more than reviewing a risk register.</p>
                        <p style={para(font)}>It requires looking across clauses, meeting records, process designs, resource decisions and supplier controls.</p>
                        <p style={para(font)}>It requires open interview questions that reveal whether people understand why controls exist.</p>
                        <p style={para(font)}>It requires proportionate expectations that reflect the organisation&apos;s context.</p>
                        <p style={para(font)}>And it requires a final effectiveness check that confirms risk controls are actually working.</p>
                        <p style={para(font)}>Risk-based thinking should be visible in how an organisation operates, not just in what it documents.</p>

                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h3 style={{ fontSize: isMobile ? "1.35rem" : "1.55rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 1rem", fontFamily: font, position: "relative" }}>
                                Plan audits around risk, not just calendars
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                Explore iAudit Global with a 14-day free trial and see how clause-aligned audits, evidence and verified actions support risk-based thinking in practice.
                            </p>
                            <a href="https://www.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font }}>
                                Start your free trial
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                        </div>
                    </div>
                </article>

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
function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}
