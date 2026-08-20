"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    neglected:
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&h=480&fit=crop&q=80&fm=webp",
    challenges:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&h=480&fit=crop&q=80&fm=webp",
    benefits:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    mistakes:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "neglected", label: "When Audits Are Neglected" },
    { id: "challenges", label: "Unique Manufacturing Challenges" },
    { id: "benefits", label: "Real Benefits of Effective Audits" },
    { id: "pdca", label: "What Good Looks Like: PDCA" },
    { id: "mistakes", label: "Common Mistakes to Avoid" },
    { id: "conclusion", label: "Final Thoughts" },
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

export default function ManufacturingAuditsBlogContent() {
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
                    alt="Why Internal Audits Are Critical in Manufacturing"
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
                            March 27, 2026
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
                            9 Min Read
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
                        Why Internal Audits Are Critical in Manufacturing
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            A few years ago, I walked into a steel fabrication facility for a routine internal audit. The quality manager greeted me with a familiar line: &ldquo;We only do this because we have to for ISO.&rdquo;
                        </p>
                        <p style={para(font)}>
                            That single sentence told me everything about their audit culture. And sure enough, within two hours, I found calibration records three months overdue, a welding procedure that no longer matched actual practice, and a near-miss incident that had never been investigated.
                        </p>
                        <p style={para(font)}>
                            None of this was malicious. The team was busy. Production targets were pressing. But internal audit in manufacturing exists precisely for moments like this. It catches what daily pressures cause us to miss.
                        </p>
                        <p style={para(font)}>
                            After 18 years of consulting across steel fabrication, lift installation, pharma and construction, I have seen this pattern repeat. Organisations that treat internal audits as a box-ticking exercise eventually pay the price. Those that embrace them as improvement tools build stronger operations.
                        </p>
                    </div>

                    <div id="neglected" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What Happens When Internal Audits Are Neglected</h2>
                        <SectionImage src={sectionImages.neglected} alt="Manufacturing facility where process gaps go unnoticed" />
                        <p style={para(font)}>
                            The consequences of weak internal audit in manufacturing are rarely immediate. They accumulate quietly until something breaks.
                        </p>
                        <p style={para(font)}>
                            Nonconformities slip through to customer delivery. Regulatory gaps go unnoticed until a certification body or customer auditor finds them. The same problems appear year after year because no one closed the loop on corrective actions.
                        </p>
                        <p style={para(font)}>
                            According to Smithers, internal audits are essential for identifying issues before they escalate into costly failures or compliance breaches. The cost of reactive fixes is almost always higher than proactive prevention.
                        </p>
                        <p style={para(font)}>
                            I have seen manufacturers lose key contracts because a customer audit revealed systemic gaps that should have been caught internally. I have seen certification audits turn into major nonconformity exercises because internal audits had become superficial.
                        </p>
                        <div
                            style={{
                                background: "rgba(0,102,68,0.05)",
                                borderRadius: "0.875rem",
                                border: "1px solid rgba(0,102,68,0.12)",
                                padding: "1.25rem 1.5rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            <p style={{ margin: 0, fontSize: "0.95rem", color: "#111827", lineHeight: 1.75, fontFamily: font, fontStyle: "italic" }}>
                                The reality is simple. If your internal audit programme is not finding issues, it is not working properly. Every process has room for improvement. Effective audits surface those opportunities.
                            </p>
                        </div>
                    </div>

                    <div id="challenges" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Why Manufacturing Presents Unique Audit Challenges</h2>
                        <SectionImage src={sectionImages.challenges} alt="Shop floor manufacturing environment with production equipment" />
                        <p style={para(font)}>
                            Internal audit in manufacturing is not the same as auditing an office environment. The shop floor brings complexities that require a different approach.
                        </p>
                        <p style={para(font)}>
                            Production pressures dominate. Shift patterns mean key personnel are not always available. Machines cannot stop for an auditor&rsquo;s convenience. Evidence lives in calibration logs, work instructions at workstations, and the tacit knowledge of experienced operators.
                        </p>
                        <p style={para(font)}>
                            Supply chains add another layer. Incoming materials, supplier approvals, traceability records. A single component failure can cascade into product recalls or customer complaints.
                        </p>
                        <p style={para(font)}>
                            Deloitte highlights that manufacturing internal audit must address operational technology risks, supply chain vulnerabilities, and process controls that span multiple sites and systems. Generic audit approaches often miss these nuances.
                        </p>
                        <p style={para(font)}>
                            Then there is culture. Production teams sometimes view audits as fault-finding exercises rather than improvement opportunities. Getting genuine engagement from operators requires trust, clear communication, and auditors who understand manufacturing realities.
                        </p>
                        <p style={para(font)}>
                            Tervene notes that effective manufacturing process audits require structured approaches tailored to production environments, not templates designed for administrative functions.
                        </p>
                        <p style={para(font)}>
                            This is why internal audit in manufacturing demands auditors with sector experience. Someone who understands what a control chart should look like, why traceability matters, and how shift handovers can create gaps.
                        </p>
                    </div>

                    <div id="benefits" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Real Benefits of Effective Internal Audits</h2>
                        <SectionImage src={sectionImages.benefits} alt="Quality engineer reviewing manufacturing process controls" />
                        <p style={para(font)}>
                            When done properly, internal audit in manufacturing delivers tangible returns. Not just compliance, but operational improvement.
                        </p>

                        <h3 style={h3(font)}>Early Detection of Process Gaps</h3>
                        <p style={para(font)}>
                            The primary function of any internal audit is finding issues before they reach customers or regulators. In manufacturing, this means catching deviations in process parameters, identifying equipment maintenance gaps, and spotting documentation that no longer reflects actual practice.
                        </p>
                        <p style={para(font)}>
                            IsoTracker research indicates that routine quality audits help manufacturers identify problems before products leave the facility, reducing customer complaints and returns.
                        </p>
                        <p style={para(font)}>
                            I have personally seen audits uncover calibration drift that would have caused out-of-spec products. That single finding saved one client thousands in potential rework and preserved a key customer relationship.
                        </p>

                        <h3 style={h3(font)}>Regulatory and Certification Readiness</h3>
                        <p style={para(font)}>
                            ISO 9001, ISO 14001, ISO 45001. These certifications require ongoing conformance, not just initial implementation. Internal audit in manufacturing is how you verify that conformance between surveillance visits.
                        </p>
                        <p style={para(font)}>
                            Organisations with strong internal audit programmes rarely face surprises during certification audits. They know their weak points. They have evidence of corrective actions. They can demonstrate continual improvement.
                        </p>

                        <h3 style={h3(font)}>Cost Reduction</h3>
                        <p style={para(font)}>
                            Poor quality costs money. Scrap, rework, warranty claims, customer penalties. Internal audits help identify root causes of waste and inefficiency.
                        </p>
                        <p style={para(font)}>
                            According to IsoTracker, manufacturers who conduct regular audits see improved operational efficiency and reduced waste through early identification of process deviations.
                        </p>
                        <p style={para(font)}>
                            One manufacturing client I worked with reduced their scrap rate by 15% within a year of implementing a robust internal audit programme. The audits identified that a significant portion of defects originated from a single process step that had drifted from the documented method.
                        </p>

                        <h3 style={h3(font)}>Building a Continuous Improvement Culture</h3>
                        <p style={para(font)}>
                            Internal audit in manufacturing should feed directly into your improvement cycle. Findings become corrective actions. Corrective actions become process changes. Process changes become better results.
                        </p>
                        <p style={para(font)}>
                            When teams see that audit findings lead to real improvements rather than blame, engagement increases. Operators start raising issues proactively. The audit becomes a tool everyone values.
                        </p>

                        <h3 style={h3(font)}>Supply Chain Confidence</h3>
                        <p style={para(font)}>
                            Customers and partners want assurance that your processes are controlled. A mature internal audit programme demonstrates that you verify your own operations. It builds trust and can be a competitive advantage in supplier selection.
                        </p>
                        <p style={para(font)}>
                            Smithers emphasises that internal audits help organisations stay ahead of potential issues, which is particularly valuable when demonstrating due diligence to customers and regulators.
                        </p>
                    </div>

                    <div id="pdca" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>What Good Looks Like: The PDCA Approach</h2>
                        <SectionImage src={sectionImages.pdca} alt="PDCA planning for manufacturing internal audit programmes" />
                        <p style={para(font)}>
                            Effective internal audit in manufacturing follows the PDCA cycle. Plan, Do, Check, Act. This is not just theory. It is the structure that turns audits into improvement drivers.
                        </p>
                        {[
                            {
                                label: "Plan",
                                desc: "Define your audit objectives and scope based on risk. Which processes are most critical? Where have issues occurred before? Build an annual programme that covers high-priority areas with appropriate frequency.",
                            },
                            {
                                label: "Do",
                                desc: "Conduct audits using structured checklists, interviews, and sampling. Gather real evidence from operations. Observe actual practice, not just what documentation says should happen.",
                            },
                            {
                                label: "Check",
                                desc: "Analyse findings. Look for patterns across audits. Are the same issues appearing in different areas? What does this tell you about systemic risks or training gaps?",
                            },
                            {
                                label: "Act",
                                desc: "Assign corrective actions with clear owners and deadlines. Follow up to verify effectiveness. Embed lessons learned into procedures and training so improvements stick.",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
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
                                    {item.label}
                                </p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.desc}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            ISO 19011 provides guidance on audit programme management based on these principles. When internal audit in manufacturing follows PDCA, it stops being a periodic check and becomes a continuous improvement engine.
                        </p>
                        <p style={para(font)}>
                            This approach transforms audits from something people endure into something that genuinely helps operations perform better.
                        </p>
                    </div>

                    <div id="mistakes" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Common Mistakes to Avoid</h2>
                        <SectionImage src={sectionImages.mistakes} alt="Audit team discussing manufacturing process findings" />
                        <p style={para(font)}>Over 18 years, I have seen internal audit programmes fail for predictable reasons.</p>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: "0.875rem",
                                border: "1px solid #e8e4df",
                                padding: "0.25rem 1.25rem",
                                margin: "1rem 0 1.25rem",
                            }}
                        >
                            {[
                                {
                                    title: "Auditing only for certification",
                                    desc: "If you only audit to satisfy your certification body, you miss the real value. Audits should serve your business first.",
                                },
                                {
                                    title: "No follow-up on corrective actions",
                                    desc: "Findings mean nothing if actions are not completed and verified. Closed-loop accountability is essential.",
                                },
                                {
                                    title: "Auditors without manufacturing experience",
                                    desc: "Generic auditors often miss industry-specific risks. Internal audit in manufacturing requires understanding of production processes, equipment, and shop floor realities.",
                                },
                                {
                                    title: "Treating audits as fault-finding",
                                    desc: "The goal is fact-finding, not blame. When people feel judged, they hide problems instead of surfacing them.",
                                },
                                {
                                    title: "Poor communication with production teams",
                                    desc: "If operators do not understand why audits matter, engagement suffers. Explain the purpose. Share positive findings, not just nonconformities.",
                                },
                            ].map((item, i, arr) => (
                                <div
                                    key={item.title}
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
                                            minWidth: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            background: "rgba(0,102,68,0.1)",
                                            color: "#006644",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            marginTop: "1px",
                                        }}
                                    >
                                        {i + 1}
                                    </span>
                                    <div>
                                        <p style={{ margin: "0 0 0.2rem", fontWeight: 600, fontSize: "0.95rem", color: "#111827", fontFamily: font }}>
                                            {item.title}
                                        </p>
                                        <p style={{ margin: 0, fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.65, fontFamily: font }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            The Elsmar Quality Forum discussions highlight that smaller manufacturers often struggle with audit culture, viewing audits as bureaucratic rather than beneficial. Overcoming this requires consistent communication and visible follow-through on improvements.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.5rem" }}>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)",
                                borderRadius: "1.1rem",
                                padding: isMobile ? "2rem 1.5rem" : "2.5rem",
                                color: "#fff",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)",
                                    backgroundSize: "24px 24px",
                                    pointerEvents: "none",
                                }}
                            />
                            <h2
                                style={{
                                    fontSize: isMobile ? "1.45rem" : "1.85rem",
                                    fontWeight: 600,
                                    color: "#fff",
                                    margin: "0 0 0.75rem",
                                    fontFamily: font,
                                    lineHeight: 1.25,
                                    position: "relative",
                                }}
                            >
                                Final Thoughts
                            </h2>
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
                                Internal audit in manufacturing is not a regulatory burden. It is an investment in operational resilience.
                            </p>
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
                                The manufacturers who thrive are those who use audits to find problems before customers do, to drive genuine improvements, and to build a culture where quality is everyone&rsquo;s responsibility.
                            </p>
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
                                This thinking is exactly what shaped how we built iAudit. Every feature connects to the PDCA cycle because that is what makes audits effective.
                            </p>
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: "0.975rem",
                                    lineHeight: 1.8,
                                    margin: "0 0 1.25rem",
                                    position: "relative",
                                    fontFamily: font,
                                }}
                            >
                                If you are looking to strengthen your audit programme, we are currently offering 3 months of free access to iAudit for audit managers willing to share feedback on their current challenges. No credit card required.
                            </p>
                            <a
                                href="https://app.iaudit.global/"
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
                                Start free at app.iaudit.global
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                            <div style={{ height: "1px", background: "rgba(255,255,255,0.15)", margin: "1.5rem 0 1.15rem", position: "relative" }} />
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", fontFamily: font, position: "relative", fontWeight: 600 }}>
                                Mathew Chiweda
                            </p>
                            <p style={{ margin: "0.25rem 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", fontFamily: font, position: "relative" }}>
                                Co-founder, iAudit Global
                            </p>
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
                                    overflow: "hidden",
                                    margin: "0 auto 1.1rem",
                                    position: "relative",
                                    background: "linear-gradient(135deg, #002e1d, #006644)",
                                }}
                            >
                                <Image
                                    src="/images/mathew-chiweda.webp"
                                    alt="Mathew Chiweda"
                                    fill
                                    sizes="90px"
                                    style={{ objectFit: "cover" }}
                                />
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
                                Co-founder, iAudit Global
                            </p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                18 years consulting across steel fabrication, lift installation, pharma and construction — helping manufacturers turn audits into improvement tools.
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
                                overflow: "hidden",
                                margin: "0 auto 0.875rem",
                                position: "relative",
                                background: "linear-gradient(135deg, #002e1d, #006644)",
                            }}
                        >
                            <Image
                                src="/images/mathew-chiweda.webp"
                                alt="Mathew Chiweda"
                                fill
                                sizes="72px"
                                style={{ objectFit: "cover" }}
                            />
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
                            Co-founder, iAudit Global
                        </p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                            Helping manufacturers turn internal audits into operational improvement.
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
        margin: "1.5rem 0 0.625rem",
        fontFamily: font,
    };
}

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}
