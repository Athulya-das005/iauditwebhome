"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog-process-automation.webp";
const ISO9001_URL = "/standards/iso-9001-audit-management-software";
const BUILT_BY_AUDITORS_URL = "/audit-management-software-built-by-auditors";
const AUDIT_REPORT_URL = "/blog/how-to-write-an-iso-internal-audit-report-that-matters";
const PDCA_URL = "/pdca-cycle-audit-software";
const PRICING_URL = "/pricing";

const sectionImages: Record<string, string> = {
    shift: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    clause: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    context: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=480&fit=crop&q=80&fm=webp",
    shopfloor: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=480&fit=crop&q=80&fm=webp",
    audits: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    effectiveness: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    conclusion: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "shift", label: "From Preventive Action to Resilience" },
    { id: "clause", label: "Core Requirements of Clause 6.1" },
    { id: "context", label: "Why Context Is the Foundation" },
    { id: "shopfloor", label: "Out of the Spreadsheet" },
    { id: "audits", label: "Internal Audits and Risk Control" },
    { id: "effectiveness", label: "Evaluating Effectiveness" },
    { id: "conclusion", label: "Risk as a Tool for Governance" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const clauseRequirements = [
    "Identify risks and opportunities that need to be addressed to ensure the Quality Management System (QMS) can achieve its intended results.",
    "Plan actions to address these risks and opportunities.",
    "Integrate and implement these actions into the QMS processes.",
    "Evaluate the effectiveness of these actions.",
];

const auditTrails = [
    "Did the organisation change a supplier because of a recurring quality risk?",
    "Did they increase the frequency of inspections on a new machine?",
    "How did they allocate resources after the last management review?",
];

const faqItems = [
    {
        question: "What is Risk-based Thinking in ISO 9001?",
        answer: "Risk-based Thinking in ISO 9001 is a proactive approach to quality management that requires organisations to identify uncertainties that could affect their processes. It ensures that the management system is designed to prevent negative results and take advantage of positive opportunities rather than just reacting to mistakes after they occur.",
    },
    {
        question: "Is a formal risk register mandatory for Risk-based Thinking in ISO 9001 compliance?",
        answer: "No. While Clause 6.1 requires organisations to identify and address risks and opportunities, the standard does not explicitly mandate a formal “Risk Register.” However, you must be able to provide objective evidence that Risk-based Thinking in ISO 9001 has been considered and integrated into your management system.",
    },
    {
        question: "How did Risk-based Thinking in ISO 9001 change from the 2008 version of the standard?",
        answer: "In the previous ISO 9001:2008 version, “Preventive Action” was a standalone clause. In the 2015 update, this was replaced by Risk-based Thinking in ISO 9001 to ensure that prevention is not a separate activity but a continuous mindset embedded in every stage of the Plan-Do-Check-Act cycle.",
    },
    {
        question: "What is the difference between a risk and an opportunity in Risk-based Thinking in ISO 9001?",
        answer: "ISO defines risk as the “effect of uncertainty.” This effect can be negative, which we refer to as a risk, or positive, which we refer to as an opportunity. Risk-based Thinking in ISO 9001 requires organisations to manage both, such as identifying a potential equipment failure (risk) or a new market requirement (opportunity).",
    },
    {
        question: "How do internal auditors verify Risk-based Thinking in ISO 9001?",
        answer: "Auditors look for evidence of risk-based decision making. This includes reviewing how resources are allocated, how suppliers are selected, and whether process changes have been made in response to identified risks. They look for the “why” behind operational controls to verify the effectiveness of Risk-based Thinking in ISO 9001.",
    },
    {
        question: "What is the role of top management in promoting Risk-based Thinking in ISO 9001?",
        answer: "Top management has a specific duty under Clause 5.1 to promote Risk-based Thinking in ISO 9001 across the organisation. This means leadership must ensure that risk is considered during strategic planning and that the management system is supported with the resources necessary to address identified uncertainties.",
    },
    {
        question: "How does iAudit Global support Risk-based Thinking in ISO 9001?",
        answer: "iAudit Global moves risk management away from static files and into the live audit programme. By linking audit findings directly to corrective actions and real-time trend dashboards, the platform provides the objective evidence required to prove that Risk-based Thinking in ISO 9001 is being identified, managed and evaluated for effectiveness.",
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

export default function RiskBasedThinkingBlogContent() {
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

    const lnk: React.CSSProperties = { color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: font }}>
            <div style={{ position: "relative", width: "100%", height: isMobile ? "55vw" : "70vh", minHeight: isMobile ? "240px" : "440px", maxHeight: "700px", overflow: "hidden" }}>
                <Image src={HERO_IMAGE} alt="Risk-based thinking in ISO 9001 quality management" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)" }} />
                <div style={{ position: "absolute", bottom: isMobile ? "1rem" : "2rem", left: isMobile ? "1.25rem" : "2.5rem", right: isMobile ? "1.25rem" : "2.5rem" }}>
                    <span style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", borderRadius: "999px", padding: "3px 14px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.625rem", fontFamily: font }}>ISO 9001</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>August 19, 2026</span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>11 Min Read</span>
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
                        Understanding Risk-based Thinking in ISO 9001:2015
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>The term &ldquo;Risk-based thinking&rdquo; often sounds like academic theory. I have sat in numerous management reviews where the phrase is met with blank stares or, more commonly, a frantic search for the latest version of a risk register spreadsheet.</p>
                        <p style={para(font)}>In reality, Risk-based thinking is the formal name for what every competent manager does every day: planning for the &ldquo;what ifs&rdquo;.</p>
                        <p style={para(font)}>When ISO 9001:2015 was released, it introduced a fundamental shift in how organisations approach quality. It moved away from being a reactive system focused on fixing mistakes to a proactive system focused on preventing them. For any professional involved in internal audits, understanding the practical application of this mindset is essential for moving beyond simple checkbox compliance.</p>
                    </div>

                    <div id="shift" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Understanding the Shift: From Preventive Action to Systemic Resilience</h2>
                        <SectionImage src={sectionImages.shift} alt="Shift from ISO 9001 preventive action to risk-based thinking" />
                        <p style={para(font)}>To understand ISO 9001 Risk-based thinking, we have to look at what came before it. In the 2008 version of the standard, there was a specific clause (8.5.3) for &ldquo;Preventive Action&rdquo;. This often led teams to treat risk as a separate, isolated task, usually a document filled out once a year just before the external auditor arrived.</p>
                        <p style={para(font)}>The 2015 update changed this by removing the standalone clause for preventive action and replacing it with the requirement to integrate risk into the entire management system. This shift was driven by Annex SL, the high-level structure that now governs all ISO management standards. The goal was to make risk part of the organisation&apos;s &ldquo;DNA&rdquo; rather than a side project.</p>
                        <p style={para(font)}>
                            By making Risk-based thinking part of the core requirements, ISO ensures that quality is not just about the final product, but about the resilience of the processes that create it. This is why we focus so heavily on the methodology behind the software in our{" "}
                            <Link href={ISO9001_URL} style={lnk}>ISO 9001 audit management software</Link>{" "}
                            workflows. It is about building a system that can withstand uncertainty.
                        </p>
                    </div>

                    <div id="clause" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Core Requirements of Clause 6.1</h2>
                        <SectionImage src={sectionImages.clause} alt="ISO 9001 Clause 6.1 risks and opportunities requirements" />
                        <p style={para(font)}>ISO defines risk as the &ldquo;effect of uncertainty&rdquo; (Source: ISO 31000:2018). This definition is vital because uncertainty can have both negative and positive effects. ISO 9001 Risk-based thinking requires you to look at both Risks (what might go wrong) and Opportunities (what might go right).</p>
                        <p style={para(font)}>Clause 6.1 of the standard explicitly requires organisations to:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "0 0 1.25rem" }}>
                            {clauseRequirements.map((item, i, arr) => (
                                <div key={item} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ minWidth: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #006644, #058c42)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.78rem", fontFamily: font, flexShrink: 0 }}>{i + 1}</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>The standard does not actually require a formal, documented risk management process or a &ldquo;Risk Register&rdquo; in the traditional sense. However, it does require evidence that the organisation has considered its risks and taken appropriate action. In a professional audit, &ldquo;I thought about it&rdquo; is never enough. Auditors look for the objective evidence of that thinking.</p>
                    </div>

                    <div id="context" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Context Is the Foundation of Risk</h2>
                        <SectionImage src={sectionImages.context} alt="ISO 9001 context of the organisation as the foundation of risk" />
                        <p style={para(font)}>You cannot identify risks if you do not understand where your organisation sits in the world. This is why Clause 6 (Planning) is so closely linked to Clause 4 (Context of the Organisation).</p>
                        <p style={para(font)}>Under Clause 4.1, you must determine external and internal issues that are relevant to your purpose. Under Clause 4.2, you must understand the needs and expectations of your interested parties (customers, regulators, employees, and suppliers).</p>
                        <p style={para(font)}>Risk-based thinking begins here. A logistics firm in the Middle East faces different uncertainties than a manufacturing plant in India. A change in local environmental regulations or a shift in the availability of skilled labour are &ldquo;Contextual Issues&rdquo; that create specific risks to quality.</p>
                        <p style={para(font)}>
                            When we were building the platform, we knew that this connection between context and risk was where most manual systems failed. This is a primary reason we developed{" "}
                            <Link href={BUILT_BY_AUDITORS_URL} style={lnk}>audit management software built by auditors</Link>
                            . We wanted to ensure that the &ldquo;why&rdquo; of an audit was always visible, not buried in a disconnected folder.
                        </p>
                    </div>

                    <div id="shopfloor" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Moving Risk Out of the Spreadsheet and Onto the Shop Floor</h2>
                        <SectionImage src={sectionImages.shopfloor} alt="Moving ISO 9001 risk-based thinking onto the shop floor" />
                        <p style={para(font)}>The most common failure I see in ISO systems is the &ldquo;Spreadsheet Trap&rdquo;. An organisation creates a massive Excel file with 200 line items of potential risks. They assign a score, colour it red or green, and then never look at it again until next year.</p>
                        <p style={{ ...para(font), fontWeight: 600, color: "#111827" }}>This is not Risk-based thinking. This is &ldquo;Ghost Compliance&rdquo;.</p>
                        <p style={para(font)}>True Risk-based thinking should be visible in how work is actually done. If a manufacturing site identifies that &ldquo;Tool Wear&rdquo; is a high risk to product quality, the evidence of RBT shouldn&apos;t just be a line in a spreadsheet. It should be seen in the maintenance schedules, the calibration logs, and the frequency of internal audits on that specific production line.</p>
                        <p style={para(font)}>
                            Objective evidence of risk control is found on the floor, not in the office. It is found in photos of site conditions, data trends in nonconformities, and the records of employee training. This is why we emphasize capturing real-time evidence in our guide on{" "}
                            <Link href={AUDIT_REPORT_URL} style={lnk}>how to write an ISO internal audit report.</Link>{" "}
                            If you cannot prove the risk control is active, the auditor must assume it is not.
                        </p>
                    </div>

                    <div id="audits" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Role of Internal Audits in Verifying Risk Control</h2>
                        <SectionImage src={sectionImages.audits} alt="Internal audits verifying ISO 9001 risk-based thinking" />
                        <p style={para(font)}>Internal audits are the primary tool for verifying that Risk-based thinking is actually functioning. One of the hardest things to audit is a &ldquo;mindset&rdquo;, but you can audit the results of that mindset.</p>
                        <p style={para(font)}>As an internal auditor, you shouldn&apos;t just ask to see the risk register. You should look for the trails of decision-making.</p>
                        <div style={{ background: "rgba(0,102,68,0.04)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.1)", padding: "0.25rem 1.25rem", margin: "0 0 1.25rem" }}>
                            {auditTrails.map((item) => (
                                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem 0" }}>
                                    <span style={{ color: "#006644", fontWeight: 700, flexShrink: 0 }}>?</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>If the &ldquo;Actions to address risk&rdquo; (Clause 6.1.2) are not visible in the operational processes, then the thinking has not been integrated. The internal audit is the &ldquo;Check&rdquo; phase that determines whether the organisation is actually managing its uncertainty or just documenting it.</p>
                    </div>

                    <div id="effectiveness" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Evaluating the Effectiveness of Actions Taken</h2>
                        <SectionImage src={sectionImages.effectiveness} alt="Evaluating effectiveness of ISO 9001 risk actions with PDCA" />
                        <p style={para(font)}>This is arguably the most frequently missed requirement in the entire ISO 9001 standard. Clause 6.1.2.2 requires the organisation to &ldquo;evaluate the effectiveness&rdquo; of the actions taken to address risks.</p>
                        <p style={para(font)}>It is not enough to say, &ldquo;We had a risk, and we bought a new machine to fix it.&rdquo; You must be able to prove, through data, that the new machine actually reduced the risk of defects.</p>
                        <p style={para(font)}>
                            This is where the{" "}
                            <Link href={PDCA_URL} style={lnk}>PDCA cycle audit software</Link>{" "}
                            methodology becomes indispensable. The &ldquo;Act&rdquo; phase is not just about doing something; it is about verifying that what you did actually worked. If you cannot demonstrate that your actions led to an improvement, the PDCA loop is broken, and the risk remains unmanaged.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Conclusion: Risk as a Tool for Governance</h2>
                        <SectionImage src={sectionImages.conclusion} alt="Using ISO 9001 risk-based thinking as a governance tool" />
                        <p style={para(font)}>Risk-based thinking in ISO 9001:2015 is not a compliance burden. It is a tool for better leadership. It provides the data needed to make informed decisions about where to spend time, money, and energy.</p>
                        <p style={para(font)}>When an organisation moves away from seeing risk as a separate spreadsheet and starts seeing it as a way to manage uncertainty, the quality management system transforms. It becomes a mechanism for governance and operational excellence.</p>
                        <p style={para(font)}>
                            For those looking to move beyond the administrative friction of manual risk tracking, seeing the structure in practice is often the best next step. You can explore how we handle these workflows by reviewing our{" "}
                            <Link href={PRICING_URL} style={lnk}>pricing</Link>{" "}
                            or starting a trial.
                        </p>
                        <p style={para(font)}>Ultimately, an audit tells you what happened yesterday. Risk-based thinking tells you what might happen tomorrow. Managing that difference is what defines a resilient organisation.</p>

                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h3 style={{ fontSize: isMobile ? "1.35rem" : "1.55rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 1rem", fontFamily: font, position: "relative" }}>
                                Put Risk-based Thinking into practice
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font }}>
                                Move ISO 9001 risk control out of static spreadsheets and into a live audit programme with evidence, actions and PDCA continuity.
                            </p>
                            <a href="https://www.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font }}>
                                Start your free 14-day trial
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                        </div>
                    </div>
                </article>

                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "2rem 1.5rem", textAlign: "center" }}>
                            <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, #002e1d, #006644)", margin: "0 auto 1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>iAudit Global Team</p>
                            <p style={{ margin: "0 0 1.1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>Helping organisations turn ISO 9001 risk-based thinking into structured, evidence-based audit practice.</p>
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
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>Helping organisations turn ISO 9001 risk-based thinking into structured audit practice.</p>
                        <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>Book Consultation</Link>
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
