"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&q=90&fm=webp";

const RBT_URL = "/blog/risk-based-thinking-in-iso-9001";
const MANUFACTURING_URL = "/industries/manufacturing-iso-audit-software";
const ISO9001_URL = "/standards/iso-9001-audit-management-software";
const PRICING_URL = "/pricing";

const sectionImages: Record<string, string> = {
    equalDepth: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&h=480&fit=crop&q=80&fm=webp",
    cost: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&h=480&fit=crop&q=80&fm=webp",
    highRisk: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=480&fit=crop&q=80&fm=webp",
    predictor: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    conclusion: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "equal-depth", label: "The Failure of Equal-Depth Auditing" },
    { id: "physical-cost", label: "The Physical Cost of Poor Risk Oversight" },
    { id: "high-risk", label: "Identifying High-Risk Nodes" },
    { id: "predictor", label: "Audit Data as a Predictor" },
    { id: "iaudit", label: "How iAudit Structures Oversight" },
    { id: "conclusion", label: "Audits as a Governance Asset" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const highRiskNodes = [
    {
        title: "1. Equipment Calibration and Maintenance",
        body: "The “silent” risk in manufacturing is calibration drift. A gauge that is slightly out of tolerance might not cause a failure today, but over ten thousand units, it creates a systemic defect. Risk-based auditing in manufacturing prioritises the inspection of measuring equipment on high-precision lines over more stable, low-tolerance areas.",
    },
    {
        title: "2. Supplier and Batch Traceability",
        body: "Proving batch integrity from “source to site” is a significant challenge, especially with global supply chains. If a supplier has a history of inconsistent documentation, they should be audited more frequently. You cannot rely on a static approved supplier list; you need a dynamic view of supplier risk.",
    },
    {
        title: "3. Competence and Shift Variability",
        body: "Human error is rarely the root cause, but staff turnover and shift changes are significant risk factors. We often find that the night shift or temporary agency teams have different compliance levels than the core day-shift team. A risk-based approach ensures that audits happen across all shifts, not just when the Quality Manager is in the office.",
    },
];

const iauditFeatures = [
    {
        label: "Standardised Checklists",
        desc: "You can push high-intensity checklists to high-risk sites while keeping routine checks simple for stable sites.",
    },
    {
        label: "Real-Time Dashboards",
        desc: "Spotting patterns across shifts or locations becomes instant. You can see which factory has the highest number of open corrective actions and direct your next audit there.",
    },
    {
        label: "Evidence-Linked Findings",
        desc: "Every risk identified on the shop floor can be evidenced with photos and data attachments, removing the ambiguity that often stalls improvement.",
    },
];

const faqItems = [
    {
        question: "What is risk-based auditing in manufacturing?",
        answer: "Risk-based auditing in manufacturing is the practice of prioritising audit time and resources toward the processes, shifts, and suppliers that represent the highest uncertainty to the business, rather than auditing every area with equal depth on a fixed calendar.",
    },
    {
        question: "Why does equal-depth annual auditing fail on the factory floor?",
        answer: "Manufacturing risk is rarely distributed evenly. A rigid once-a-year schedule can create “Ghost Compliance,” where records look fine but the floor has changed through new shifts, calibration drift, or supplier process changes before the next scheduled audit.",
    },
    {
        question: "Which manufacturing areas should receive more audit attention?",
        answer: "High-risk nodes typically include equipment calibration and maintenance on high-precision lines, supplier and batch traceability, and competence across shifts—especially night or agency teams with different compliance levels than the core day shift.",
    },
    {
        question: "How does iAudit Global support risk-based auditing in manufacturing?",
        answer: "iAudit Global centralises audit data so teams can push high-intensity checklists to high-risk sites, spot patterns across shifts and locations on real-time dashboards, and link shop-floor findings to photos and evidence for clear corrective action.",
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

export default function RiskBasedAuditingManufacturingBlogContent() {
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
                    alt="Risk-based auditing in manufacturing on the factory floor"
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
                        Manufacturing
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>
                            August 21, 2026
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", fontFamily: font }}>
                            10 Min Read
                        </span>
                    </div>
                </div>
            </div>

            <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: 0, zIndex: 40 }}>
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
                        Risk-Based Auditing in Manufacturing: Moving Beyond the Calendar
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            I have seen many internal audit programmes that look perfect on a spreadsheet. Every site or
                            department is scheduled for one audit per year. The checklists are identical, the depth is
                            uniform, and the calendar is neatly blocked out.
                        </p>
                        <p style={para(font)}>
                            It looks organised for a management review, but it often ignores the physical reality of the
                            factory floor.
                        </p>
                        <p style={para(font)}>
                            In a production environment, risk is rarely distributed evenly. If you audit a stable,
                            automated assembly line with the same frequency and intensity as a manual packing station
                            with high staff turnover, you aren&apos;t actually auditing. You are simply performing
                            administrative exercises.
                        </p>
                        <p style={para(font)}>
                            Risk-based auditing in manufacturing is the shift from following a fixed calendar to
                            following the actual data. It is about prioritising your limited audit time and resources
                            toward the processes, shifts, and suppliers that represent the highest uncertainty to your
                            business.
                        </p>
                    </div>

                    <div id="equal-depth" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Failure of &ldquo;Equal-Depth&rdquo; Auditing</h2>
                        <SectionImage
                            src={sectionImages.equalDepth}
                            alt="Equal-depth audit calendar failing on the manufacturing shop floor"
                        />
                        <p style={para(font)}>
                            The traditional &ldquo;once-a-year&rdquo; approach to auditing creates what I call &ldquo;Ghost
                            Compliance.&rdquo; This is where the records show a process is compliant because it was checked
                            six months ago, but the reality on the floor has since drifted.
                        </p>
                        <p style={para(font)}>
                            In manufacturing, things change quickly. A new shift pattern is introduced. An older machine
                            starts to lose calibration. A raw material supplier changes their own internal process. If
                            your audit programme is rigid, you will miss these risks until they show up as a customer
                            complaint or a rejected batch.
                        </p>
                        <p style={para(font)}>
                            By implementing risk-based auditing in manufacturing, you acknowledge that some nodes in
                            your production cycle carry more weight than others. You move away from being a
                            &ldquo;compliance checker&rdquo; and toward being an operational safeguard. This methodology is
                            the practical application of{" "}
                            <Link href={RBT_URL} style={lnk}>
                                risk-based thinking in ISO 9001
                            </Link>
                            , where the depth of the &ldquo;Check&rdquo; phase matches the significance of the risk
                            identified in the &ldquo;Plan&rdquo; phase.
                        </p>
                    </div>

                    <div id="physical-cost" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Physical Cost of Poor Risk Oversight</h2>
                        <SectionImage
                            src={sectionImages.cost}
                            alt="Manufacturing quality cost and unplanned downtime on the production line"
                        />
                        <p style={para(font)}>
                            Risk in manufacturing isn&apos;t abstract; it has a direct impact on the bottom line. To
                            understand why risk-based auditing in manufacturing is essential, we only need to look at the
                            industry data regarding quality and downtime.
                        </p>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                gap: "0.75rem",
                                margin: "0 0 1.25rem",
                            }}
                        >
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "0.875rem",
                                    border: "1px solid #e8e4df",
                                    padding: "1.25rem 1.35rem",
                                }}
                            >
                                <p style={{ margin: "0 0 0.45rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>
                                    The Cost of Poor Quality (COPQ)
                                </p>
                                <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                                    Research from the American Society for Quality (ASQ) indicates that for many
                                    manufacturers, the cost of poor quality—scrap, rework, and warranty claims—can range
                                    from 15% to 20% of sales revenue.
                                </p>
                            </div>
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "0.875rem",
                                    border: "1px solid #e8e4df",
                                    padding: "1.25rem 1.35rem",
                                }}
                            >
                                <p style={{ margin: "0 0 0.45rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>
                                    Unplanned Downtime
                                </p>
                                <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                                    Industrial manufacturers lose an estimated $50 billion annually due to unplanned
                                    downtime (Source: Deloitte). Much of this downtime is preventable through more
                                    rigorous, risk-focused auditing of maintenance and calibration schedules.
                                </p>
                            </div>
                        </div>

                        <p style={para(font)}>
                            A rigid audit calendar cannot react to these costs. Risk-based auditing in manufacturing
                            allows you to see a spike in rework at Site A and immediately trigger a focused audit on
                            their tool maintenance logs, rather than waiting for the &ldquo;scheduled&rdquo; audit next
                            quarter.
                        </p>
                    </div>

                    <div id="high-risk" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Identifying High-Risk Nodes in the Production Cycle</h2>
                        <SectionImage
                            src={sectionImages.highRisk}
                            alt="High-risk manufacturing nodes including calibration, suppliers and shifts"
                        />
                        <p style={para(font)}>
                            To run an effective programme, you must identify where your system is most vulnerable. In my
                            experience, three areas consistently represent the highest risk to ISO 9001 and ISO 45001
                            compliance.
                        </p>

                        {highRiskNodes.map((item, index) => (
                            <div
                                key={item.title}
                                style={{
                                    background: "#fff",
                                    borderRadius: "0.75rem",
                                    padding: "1.1rem 1.4rem",
                                    marginBottom: "0.75rem",
                                    border: "1px solid #e8e4df",
                                    borderLeft: "4px solid #006644",
                                }}
                            >
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>
                                    {item.title}
                                </p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>
                                    {item.body}
                                    {index === 1 ? (
                                        <>
                                            {" "}
                                            This level of oversight is a core component of{" "}
                                            <Link href={MANUFACTURING_URL} style={lnk}>
                                                manufacturing ISO audit software
                                            </Link>{" "}
                                            environments where traceability gaps lead to massive recall risks.
                                        </>
                                    ) : null}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div id="predictor" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Turning Internal Audit Data into a Predictor of Failure</h2>
                        <SectionImage
                            src={sectionImages.predictor}
                            alt="Using internal audit dashboards as leading indicators of manufacturing failure"
                        />
                        <p style={para(font)}>
                            An internal audit report shouldn&apos;t just be a record of what went wrong yesterday. It
                            should be a tool that tells you what is likely to fail tomorrow.
                        </p>
                        <p style={para(font)}>
                            The data captured during an audit is a leading indicator. If an auditor notes an
                            &ldquo;Opportunity for Improvement&rdquo; (OFI) regarding a machine&apos;s hydraulic
                            pressure, that is a risk signal. In a manual system, that OFI is often buried in a PDF and
                            forgotten.
                        </p>
                        <p style={para(font)}>
                            In a system built for risk-based auditing in manufacturing, that finding stays visible on a
                            dashboard. It allows leadership to see that across three different production lines,
                            hydraulic issues are surfacing. This allows for a systemic fix before a pipe bursts and
                            causes three days of unplanned downtime.
                        </p>
                        <p style={para(font)}>
                            This proactive loop ensures that you aren&apos;t just identifying nonconformities, but you
                            are managing the underlying uncertainty of the business. It keeps your{" "}
                            <Link href={ISO9001_URL} style={lnk}>
                                ISO 9001 audit management software
                            </Link>{" "}
                            workflows focused on real-world outcomes rather than just certificate maintenance.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global Structures Risk-Based Oversight</h2>
                        <SectionImage
                            src={sectionImages.iaudit}
                            alt="iAudit Global centralised dashboards for manufacturing risk-based audits"
                        />
                        <p style={para(font)}>
                            We built iAudit Global to solve the &ldquo;File Management&rdquo; problem that prevents many
                            firms from ever reaching audit maturity. You cannot perform risk-based auditing in
                            manufacturing if your data is trapped in 50 different Excel files and three different site
                            folders.
                        </p>
                        <p style={para(font)}>To manage risk, you need a centralised view.</p>

                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "0 0 1.25rem" }}>
                            {iauditFeatures.map((item, i, arr) => (
                                <div
                                    key={item.label}
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
                                            minWidth: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #006644, #058c42)",
                                            color: "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                            fontSize: "0.78rem",
                                            fontFamily: font,
                                            flexShrink: 0,
                                        }}
                                    >
                                        {i + 1}
                                    </span>
                                    <div>
                                        <p style={{ margin: "0 0 0.25rem", fontWeight: 600, fontSize: "0.95rem", color: "#111827", fontFamily: font }}>
                                            {item.label}
                                        </p>
                                        <p style={{ margin: 0, fontSize: "0.92rem", color: "#6B7280", lineHeight: 1.65, fontFamily: font }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Conclusion: Turning Audits into a Governance Asset</h2>
                        <SectionImage
                            src={sectionImages.conclusion}
                            alt="Turning manufacturing audits into a governance asset"
                        />
                        <p style={para(font)}>
                            Risk-based auditing in manufacturing moves the quality and safety function from being a cost
                            centre to being a governance asset. It ensures that the organisation is spending its time and
                            money where it will have the greatest impact on safety, quality, and the environment.
                        </p>
                        <p style={para(font)}>
                            A fixed calendar gives you the illusion of control. A risk-based programme gives you the
                            reality of it.
                        </p>
                        <p style={para(font)}>
                            When you stop treating every process as if it carries the same weight, you begin to see the
                            true patterns in your operation. You move from fixing symptoms to preventing causes.
                        </p>
                        <p style={para(font)}>
                            If you are ready to move beyond the spreadsheet calendar and start managing your ISO
                            programme based on real operational risk, you can explore our{" "}
                            <Link href={PRICING_URL} style={lnk}>
                                pricing
                            </Link>{" "}
                            or start a 14-day free trial today.
                        </p>
                        <p style={{ ...para(font), fontWeight: 600, color: "#111827" }}>
                            Don&apos;t just audit the list. Audit the risk.
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
                                Put risk-based manufacturing audits into practice
                            </h3>
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: "0.975rem",
                                    lineHeight: 1.8,
                                    margin: "0 0 0.875rem",
                                    position: "relative",
                                    fontFamily: font,
                                }}
                            >
                                Move beyond the fixed calendar. Prioritise high-risk processes, shifts and suppliers with
                                evidence-linked findings and live dashboards.
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
                                Start your free 14-day trial
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

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}
