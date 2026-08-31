"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=480&fit=crop&q=80&fm=webp",
    iso9001: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=480&fit=crop&q=80&fm=webp",
    iso45001: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=480&fit=crop&q=80&fm=webp",
    iso14001: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&h=480&fit=crop&q=80&fm=webp",
    gaps: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    close: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What ISO Certification Means" },
    { id: "core-requirements", label: "Core Requirements" },
    { id: "iso-9001", label: "ISO 9001 for Metal Fabrication" },
    { id: "iso-45001", label: "ISO 45001 for Metal Fabrication" },
    { id: "iso-14001", label: "ISO 14001 for Metal Fabrication" },
    { id: "gaps", label: "Common Gaps in Fabrication Audits" },
    { id: "close-gaps", label: "How to Close the Gaps" },
    { id: "iaudit", label: "How iAudit Global Helps" },
    { id: "trial", label: "Try iAudit Free for 14 Days" },
    { id: "review", label: "Free ISO Programme Review" },
    { id: "summary", label: "Summary" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const requirementsRows = [
    {
        standard: "ISO 9001",
        requirements: [
            "Material traceability (heat numbers, mill certs)",
            "Welding control (WPS, WPQR, welder qualifications)",
            "Inspection and testing (NDT, calibration)",
            "Non-conformance management",
        ],
        evidence: [
            "Mill certificates",
            "Welder continuity records (ISO 9606, EN 287, AWS)",
            "NDT reports (UT, MPI, X-ray)",
            "Calibration certificates",
            "NCR logs and root cause analysis",
        ],
    },
    {
        standard: "ISO 45001",
        requirements: [
            "Welding fume control (LEV systems, RPE)",
            "Machine guarding and LOTO procedures",
            "Lifting equipment safety (LOLER compliance)",
            "Health surveillance (audiometry, lung function)",
        ],
        evidence: [
            "LEV test certificates (14-month intervals)",
            "LOTO procedure records",
            "LOLER inspection certificates (6 or 12-month)",
            "Health surveillance records",
        ],
    },
    {
        standard: "ISO 14001",
        requirements: [
            "Hazardous waste management",
            "REACH compliance (CrVI authorisations)",
            "Effluent and emissions monitoring",
            "Spill containment and emergency preparedness",
        ],
        evidence: [
            "Waste transfer notes",
            "REACH chemical register",
            "Effluent pH monitoring logs",
            "Environmental permit compliance records",
            "Bund inspection records",
        ],
    },
];

const gapItems = [
    {
        title: "Gap 1: Broken Material Traceability",
        text: "Heat numbers are recorded at goods-in but lost during cutting or forming. The final weld can't be traced back to the original mill certificate. This happens because traceability relies on manual records, heat stamps fade or get cut off, and there's no photo evidence at each stage. The impact: client rejects the product, leading to rework or scrap and a certification non-conformance.",
    },
    {
        title: "Gap 2: Expired Welder Qualifications",
        text: "Welder continuity lapses, ISO 9606 or EN 287 certificates expire, and nobody notices until an audit or client spot-check. There's no central tracking, it relies on individual welders or supervisors remembering dates. The result: work done by an unqualified welder, potential product recall, and a major non-conformance.",
    },
    {
        title: "Gap 3: LEV Systems Not Tested on Schedule",
        text: "Local Exhaust Ventilation test certificates expire, fume extraction isn't verified, and the lapse is discovered during an HSE inspection or external audit. LEV tests are scheduled manually with no automated reminder and become low priority until enforcement arrives. The outcome: prohibition notice from HSE, audit non-conformance, and welder health risk.",
    },
    {
        title: "Gap 4: NDT Records Scattered, No Trend Analysis",
        text: "Ultrasonic, MPI, and X-ray reports are filed per job with no visibility of repeat weld defects across projects or welders. NDT evidence is stored in job folders or emails, not centralised. High weld repair rates continue undetected, root causes are never addressed, and rework costs rise.",
    },
    {
        title: "Gap 5: Repeat NCRs Never Root-Caused",
        text: "The same non-conformances, dimensional errors, surface finish issues, weld spatter, appear audit after audit. NCRs are closed with an immediate fix, but there's no investigation into why the problem keeps happening. The result: no continual improvement, audits become tick-box exercises, and operational problems persist.",
    },
];

const closeGapSteps = [
    {
        num: "1",
        title: "Centralise audit evidence",
        text: "Stop storing mill certificates in one folder, NDT reports in another, and welder certificates in a filing cabinet. Put traceability evidence, qualifications, and test certificates in one searchable system where auditors can find everything linked to a specific weld or job.",
    },
    {
        num: "2",
        title: "Automate expiry tracking",
        text: "Flag welder certificate renewals, LEV test dates, LOLER inspections, and REACH sunset dates before they lapse, not after. Automated reminders mean expired qualifications and test certificates don't become audit non-conformances.",
    },
    {
        num: "3",
        title: "Link findings to actions",
        text: "Every non-conformance needs an owner, a deadline, and a verification step. If weld defects keep appearing, root cause analysis should be mandatory, not optional. Follow the PDCA cycle: Plan the fix, Do the action, Check it worked, Act on lessons learnt.",
    },
    {
        num: "4",
        title: "Audit the floor, not just the files",
        text: "Internal audits should include physical checks: photograph heat numbers on-site, verify LEV velocity with an anemometer, inspect lifting tackle, check welder continuity in real time. Auditing reality, not just records, is what finds problems before clients do.",
    },
    {
        num: "5",
        title: "Track trends across projects",
        text: "If three jobs in a row show high weld repair rates with the same welder or WPS, that should trigger investigation. You can't see that pattern if audit findings are buried in separate reports.",
    },
];

const trialFeatures = [
    {
        title: "Gap Analysis",
        text: "Identify where your current ISO programme falls short before certification or surveillance audits",
    },
    {
        title: "Self Assessment",
        text: "Run pre-audit reviews against ISO 9001, 14001, or 45001 requirements",
    },
    {
        title: "Findings Dashboard",
        text: "See all non-conformances, observations, and corrective actions in one centralised view",
    },
    {
        title: "Data Analytics Summary",
        text: "Track trends across sites, standards, and audit cycles to spot recurring issues",
    },
    {
        title: "Report Download",
        text: "Generate audit reports instantly for management review or external auditor handover",
    },
];

const reviewIncludes = [
    "Independent assessment of how your internal audits are structured, scheduled, and documented",
    "Gap identification across material traceability controls, welder qualification tracking, LEV and LOLER compliance, and NCR management",
    "Practical recommendations on where your audit programme can be strengthened to reduce repeat non-conformances and improve certification readiness",
    "Written review report delivered within 5–7 working days of our initial conversation",
];

const faqItems = [
    {
        question: "What is ISO Certification for Metal Fabrication?",
        answer:
            "ISO Certification for Metal Fabrication is independent certification that a metal fabrication business follows an ISO management system (most commonly ISO 9001, ISO 14001 and/or ISO 45001) and can consistently control quality, safety and environmental risks in fabrication work.",
    },
    {
        question: "Which ISO standards are most relevant to metal fabrication companies?",
        answer:
            "Most metal fabrication companies use ISO 9001 for quality management, ISO 45001 for occupational health and safety, and ISO 14001 for environmental management. Many also run an integrated management system to audit the three standards together.",
    },
    {
        question: "What do auditors look for during an ISO 9001 audit in metal fabrication?",
        answer:
            "Auditors typically check evidence of material traceability (heat/cast numbers and mill certificates), welding control (WPS/WPQR and welder qualifications), inspection and test records (including NDT where applicable), calibration control, and how nonconformities are recorded, corrected and prevented from recurring.",
    },
    {
        question: "What are the most common nonconformities in ISO Certification for Metal Fabrication audits?",
        answer:
            "Common nonconformities include broken material traceability, expired welder qualifications, missing or unlinked NDT records, out-of-date calibration, incomplete safety controls on the shop floor (e.g., LEV, LOTO, lifting checks), and corrective actions closed without verifying effectiveness.",
    },
    {
        question: "How often should a metal fabrication business run internal ISO audits?",
        answer:
            "Most businesses run a full internal audit cycle at least annually, with more frequent targeted audits for high-risk areas such as traceability, welding quality, lifting equipment and welding fume controls. Multi-site fabricators often use a rolling programme so each area is sampled several times between surveillance audits.",
    },
    {
        question: "How can metal fabricators improve traceability for ISO audits?",
        answer:
            "Improve traceability by defining clear rules for material identification and ID transfer, linking heat numbers to job packs, weld records and inspection stages, and regularly sampling live jobs during internal audits to confirm the traceability chain remains intact from goods-in to final release.",
    },
    {
        question: "How can iAudit Global help with ISO Certification for Metal Fabrication, and what offers are available?",
        answer:
            "iAudit Global helps metal fabrication teams run ISO 9001, 14001 and 45001 audits with clause-linked checklists, shop-floor evidence capture, centralised findings and corrective actions, and dashboards to identify repeat NCRs. You can also request a free ISO programme review (first 500 companies), or try iAudit with a 14-day free trial that includes Gap Analysis, Self Assessment, Findings Dashboard, Data Analytics Summary and Report Download.",
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

function RequirementsTable({ font, isMobile }: { font: string; isMobile: boolean }) {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "0.875rem",
                border: "1px solid #e8e4df",
                overflow: "hidden",
                margin: "1.25rem 0 1.75rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
        >
            {!isMobile && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr 1fr",
                        background: "#f3f1ed",
                        borderBottom: "1px solid #e8e4df",
                    }}
                >
                    {["ISO Standard", "Key Requirements for Metal Fabrication", "Common Evidence Required"].map((heading) => (
                        <div
                            key={heading}
                            style={{
                                padding: "0.875rem 1rem",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: "#374151",
                                fontFamily: font,
                                borderRight: heading !== "Common Evidence Required" ? "1px solid #e8e4df" : "none",
                            }}
                        >
                            {heading}
                        </div>
                    ))}
                </div>
            )}
            {requirementsRows.map((row, index) => (
                <div
                    key={row.standard}
                    style={{
                        display: isMobile ? "block" : "grid",
                        gridTemplateColumns: isMobile ? undefined : "140px 1fr 1fr",
                        borderBottom: index < requirementsRows.length - 1 ? "1px solid #e8e4df" : "none",
                    }}
                >
                    <div
                        style={{
                            padding: "1rem",
                            background: isMobile ? "#f3f1ed" : "rgba(0,102,68,0.04)",
                            borderRight: isMobile ? "none" : "1px solid #e8e4df",
                            borderBottom: isMobile ? "1px solid #e8e4df" : "none",
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                fontWeight: 700,
                                color: "#006644",
                                fontSize: "0.95rem",
                                fontFamily: font,
                            }}
                        >
                            {row.standard}
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "1rem",
                            borderRight: isMobile ? "none" : "1px solid #e8e4df",
                            borderBottom: isMobile ? "1px solid #e8e4df" : "none",
                        }}
                    >
                        {isMobile && (
                            <p
                                style={{
                                    margin: "0 0 0.5rem",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "#9CA3AF",
                                    fontFamily: font,
                                }}
                            >
                                Key Requirements
                            </p>
                        )}
                        <ul style={tableList(font)}>
                            {row.requirements.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        {isMobile && (
                            <p
                                style={{
                                    margin: "0 0 0.5rem",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "#9CA3AF",
                                    fontFamily: font,
                                }}
                            >
                                Common Evidence Required
                            </p>
                        )}
                        <ul style={tableList(font)}>
                            {row.evidence.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function MetalFabricationIsoBlogContent() {
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
                    alt="ISO certification for metal fabrication audit and traceability"
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
                        Metal Fabrication
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            April 15, 2026
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            14 Min Read
                        </span>
                    </div>
                </div>
            </div>

            <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: 0, zIndex: 40 }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.5rem", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "0.79rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: font }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
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
                        ISO Certification for Metal Fabrication: Requirements, Audits and Common Gaps
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            The certification auditor asks to see material traceability for a structural weld completed three weeks ago. You have the mill certificate. You have the WPS. But the heat number photographed at goods-in doesn't match the one stamped on the finished assembly. The trail is broken. What should have been a routine surveillance audit is now a major non-conformance.
                        </p>
                        <p style={para(font)}>
                            This scenario plays out in fabrication shops across the UK every year. ISO certification for metal fabrication isn't just about passing an audit, it's about proving you can control material traceability, manage welder qualifications, and demonstrate weld integrity before a client audit or product failure forces you to.
                        </p>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What ISO Certification Means for Metal Fabrication</h2>
                        <SectionImage src={sectionImages.what} alt="Metal fabrication workshop preparing for ISO certification" />
                        <p style={para(font)}>
                            ISO certification for metal fabrication is third-party verification that your quality, safety, or environmental management systems meet international standards. For fabrication businesses, three standards matter most:
                        </p>
                        <p style={para(font)}>
                            ISO 9001 (quality management) is the most common and often client-required. It controls how you manage material traceability, welding procedures, welder qualifications, and non-conformances.
                        </p>
                        <p style={para(font)}>
                            ISO 45001 (health and safety) is critical for operations involving welding fumes, heavy machinery, and manual handling. It structures how you protect workers from burns, respiratory hazards, and lifting injuries.
                        </p>
                        <p style={para(font)}>
                            ISO 14001 (environmental management) applies if you use hazardous chemicals, generate metal waste, or operate plating or surface treatment lines. It covers emissions, effluent, REACH compliance, and waste management.
                        </p>
                        <p style={para(font)}>
                            Many fabricators also pursue sector-specific standards like EN 1090 (structural steel), AS9100 (aerospace), or ISO 3834 (welding quality) alongside their core ISO certification.
                        </p>
                        <p style={para(font)}>
                            Fabrication businesses pursue ISO certification for three main reasons: client or tender requirements (especially in automotive, aerospace, and construction), competitive differentiation, and operational risk reduction. When implemented properly, ISO structures how you control processes before problems reach the customer.
                        </p>
                    </div>

                    <div id="core-requirements" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Core Requirements: What ISO Actually Demands from Fabricators</h2>
                        <p style={para(font)}>Here's what each standard requires in a fabrication environment:</p>
                        <RequirementsTable font={font} isMobile={isMobile} />
                    </div>

                    <div id="iso-9001" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>ISO 9001 for Metal Fabrication</h2>
                        <SectionImage src={sectionImages.iso9001} alt="Welding and traceability controls for ISO 9001 in metal fabrication" />
                        <p style={para(font)}>
                            ISO 9001 controls the quality processes that matter most in fabrication: material traceability, welding control, inspection, and non-conformance management.
                        </p>
                        <p style={para(font)}>
                            Material traceability (Clause 8.5.2) requires you to track heat numbers, cast numbers, and mill certificates from receipt through cutting, welding, and final assembly. The most common failure is heat numbers getting lost between operations, the number photographed at goods-in doesn't match the stamped component, and you can't prove material origin.
                        </p>
                        <p style={para(font)}>
                            Welding control (Clause 8.5.1) means Welding Procedure Specifications (WPS) and Welding Procedure Qualification Records (WPQR) must be documented and followed. Welder qualifications, ISO 9606, EN 287, or AWS, must be current and tracked. The typical gap: welder continuity lapses, expired certificates are discovered only during a client audit, and work performed by unqualified welders becomes a major non-conformance.
                        </p>
                        <p style={para(font)}>
                            Inspection and testing (Clause 8.6) covers Non-Destructive Testing (NDT), ultrasonic, magnetic particle inspection, X-ray, performed, recorded, and traceable to specific welds. Measuring equipment must be calibrated. The common problem: NDT reports are scattered across job folders with no link between weld defect trends and corrective action.
                        </p>
                        <p style={para(font)}>
                            Non-conformance management (Clause 10.2) requires weld repairs, dimensional errors, and surface defects to be logged and root-caused. Yet the same NCRs often appear audit after audit because immediate fixes are applied without investigating why the problem keeps recurring.
                        </p>
                        <p style={para(font)}>
                            ISO 9001 doesn't just ask "do you have procedures?" It asks "can you prove this weld was done by a qualified welder, using an approved WPS, with material you can trace back to the original mill certificate?" Most fabrication shops can't answer that in real time.
                        </p>
                    </div>

                    <div id="iso-45001" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>ISO 45001 for Metal Fabrication</h2>
                        <SectionImage src={sectionImages.iso45001} alt="Shop floor safety controls for ISO 45001 in fabrication" />
                        <p style={para(font)}>
                            ISO 45001 controls the high-risk hazards inherent to fabrication: welding fumes, heavy machinery, manual handling, and confined spaces.
                        </p>
                        <p style={para(font)}>
                            Welding fume and respiratory protection (Clause 8.1.2) requires Local Exhaust Ventilation (LEV) systems to be tested, typically every 14 months in the UK. Respiratory Protective Equipment (RPE) must be fit-tested and maintained. Health surveillance (lung function tests, audiometry for noise exposure) must be current. The gap that appears repeatedly: LEV test certificates have expired, discovered only during an HSE inspection or external audit.
                        </p>
                        <p style={para(font)}>
                            Machine guarding and LOTO (Clause 8.1.2) covers Lockout/Tagout procedures for hydraulic presses, shears, and CNC equipment, plus guards on grinders and cutting tools. The common failure: LOTO isn't consistently applied, and near-miss incidents aren't investigated.
                        </p>
                        <p style={para(font)}>
                            Lifting equipment safety (LOLER compliance under Clause 8.1.2) requires cranes, hoists, and lifting tackle to be inspected and certified every 6 or 12 months. The typical problem: LOLER registers are incomplete, and expired certificates are found during audit.
                        </p>
                        <p style={para(font)}>
                            In fabrication, ISO 45001 means auditing the shop floor, checking LEV velocity with an anemometer, verifying LOTO application on live equipment, inspecting lifting tackle, not just reviewing safety policies in an office.
                        </p>
                    </div>

                    <div id="iso-14001" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>ISO 14001 for Metal Fabrication</h2>
                        <SectionImage src={sectionImages.iso14001} alt="Environmental controls for ISO 14001 in metal fabrication" />
                        <p style={para(font)}>
                            ISO 14001 controls the environmental impacts of fabrication: chemical use, waste, emissions, and effluent.
                        </p>
                        <p style={para(font)}>
                            Chemical and waste management (Clause 8.1) requires hazardous waste, cutting fluids, oils, solvents, plating chemicals, to be stored and disposed of legally. If you operate electroplating or chromate conversion coating, you must comply with REACH regulations, tracking hexavalent chromium (CrVI) authorisations and sunset dates. Spill containment (bunding for oil and chemical storage) must be in place. The common gap: REACH chemical registers are out of date, and sunset dates are missed.
                        </p>
                        <p style={para(font)}>
                            Effluent and emissions control (Clause 8.1) applies if you run plating, anodising, or pickling operations. pH monitoring for effluent, VOC emissions from surface treatment, and compliance with environmental permits and trade effluent consents are required. The failure point: monitoring isn't done as frequently as the permit requires, and breaches are discovered during Environment Agency inspections.
                        </p>
                        <p style={para(font)}>
                            Energy and scrap management (Clauses 8.1 and 9.1) covers metal scrap segregation and tracking (part of environmental aspects) and energy consumption monitoring, important given the high use from furnaces, plasma cutters, and welding equipment.
                        </p>
                        <p style={para(font)}>
                            ISO 14001 in fabrication isn't just about recycling bins. It's about proving your plating effluent stays within permit limits and your REACH chemicals are legally authorised.
                        </p>
                    </div>

                    <div id="gaps" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common Gaps in Fabrication ISO Audits</h2>
                        <SectionImage src={sectionImages.gaps} alt="Common ISO audit gaps in metal fabrication businesses" />
                        <p style={para(font)}>
                            Most fabrication shops pass their certification audits. But passing and having real control are different things. These are the gaps that appear again and again in internal and surveillance audits.
                        </p>
                        {gapItems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            These gaps aren't caused by poor welders or lazy supervisors. They're caused by systems that rely on memory, manual tracking, and scattered evidence.
                        </p>
                    </div>

                    <div id="close-gaps" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to Close the Gaps</h2>
                        <SectionImage src={sectionImages.close} alt="Closing ISO audit gaps with centralised evidence and tracking" />
                        <p style={para(font)}>Closing these gaps requires five changes to how fabrication audits are managed:</p>
                        {closeGapSteps.map((item) => (
                            <div key={item.num} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>
                                    {item.num}. {item.title}
                                </h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global Helps</h2>
                        <p style={para(font)}>
                            iAudit Global was built by ISO auditors who worked in fabrication environments. It centralises material traceability evidence, tracks welder and LEV expiry dates, links NDT reports to specific findings, and follows PDCA so corrective actions actually close.
                        </p>
                        <p style={para(font)}>
                            Mobile checklists let you audit on the shop floor, photograph heat numbers, check LEV systems, verify LOTO application, with evidence attached directly to findings. Dashboards show trends across sites and projects, so repeat weld defects or NCRs become visible before they become systemic problems.
                        </p>
                        <p style={para(font)}>Your audit history stays with your organisation. We operate a zero-access policy, so your findings remain private.</p>
                    </div>

                    <div id="trial" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h2 style={{ fontSize: isMobile ? "1.45rem" : "1.7rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 1rem", fontFamily: font, position: "relative" }}>
                                Try iAudit Free for 14 Days
                            </h2>
                            <p style={greenPara(font)}>
                                Start auditing smarter with full access to iAudit's core features, no credit card required.
                            </p>
                            <p style={{ ...greenPara(font), marginBottom: "0.75rem" }}>What's included in your free trial:</p>
                            <ul style={{ ...ul(font), color: "rgba(255,255,255,0.82)", position: "relative", marginBottom: "1.25rem" }}>
                                {trialFeatures.map((item) => (
                                    <li key={item.title}>
                                        <strong style={{ color: "#fff" }}>{item.title}</strong> {item.text}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                No setup fees. No training required. Just sign up and start building better fabrication audits.
                            </p>
                            <a href="https://www.iaudit.global/contact" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font }}>
                                Start your 14-day free trial
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div id="review" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <div style={{ background: "#fff", borderRadius: "1.25rem", border: "1px solid #e8e4df", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                            <h2 style={h2(font)}>Free ISO Programme Review (First 500 Companies Only)</h2>
                            <p style={para(font)}>
                                We're offering an independent review of your current ISO audit programme to the first 500 fabrication and metal industry businesses that request it, completely free, with no obligation.
                            </p>
                            <p style={para(font)}>What you'll receive:</p>
                            <ul style={ul(font)}>
                                {reviewIncludes.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p style={para(font)}>
                                There's no sales pressure. We review your programme, highlight what's working and what isn't, and you decide whether you want to make changes.
                            </p>
                            <p style={para(font)}>
                                This offer is limited to the first 500 requests. Once we reach that number, the free review programme closes.
                            </p>
                            <a href="https://www.iaudit.global/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#006644", color: "#fff", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", fontFamily: font }}>
                                Request your free ISO programme review
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div id="summary" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <p style={para(font)}>
                            ISO certification for metal fabrication requires strict control over material traceability, welder qualifications, and safety compliance. ISO 9001 governs quality processes including heat number tracking, WPS/WPQR documentation, and NDT evidence. ISO 45001 covers welding fume control, LEV testing, LOTO procedures, and LOLER compliance. ISO 14001 manages hazardous waste, REACH chemicals, and effluent monitoring.
                        </p>
                        <p style={para(font)}>
                            Common audit gaps include broken material traceability, expired welder certificates, lapsed LEV tests, scattered NDT records, and repeat non-conformances without root cause analysis. Close these gaps by centralising evidence, automating expiry tracking, linking findings to corrective actions, auditing on the shop floor, and tracking trends across projects.
                        </p>
                        <p style={para(font)}>
                            iAudit Global helps fabrication businesses manage ISO 9001, 45001, and 14001 audits with mobile checklists, automated tracking, and PDCA-driven workflows. Try free for 14 days or request a free ISO programme review.
                        </p>
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
                            <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.8rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
                                Free consultation
                            </Link>
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
                        <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
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
    return { fontSize: "1.6rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font };
}

function h3(font: string): React.CSSProperties {
    return { fontSize: "1.2rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.01em", lineHeight: 1.3, margin: "0 0 0.625rem", fontFamily: font };
}

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}

function ul(font: string): React.CSSProperties {
    return { margin: "0 0 1.15rem", paddingLeft: "1.25rem", color: "#374151", fontSize: "0.98rem", lineHeight: 1.85, fontFamily: font, display: "flex", flexDirection: "column", gap: "0.35rem" };
}

function tableList(font: string): React.CSSProperties {
    return { margin: 0, paddingLeft: "1.1rem", color: "#374151", fontSize: "0.92rem", lineHeight: 1.7, fontFamily: font, display: "flex", flexDirection: "column", gap: "0.3rem" };
}

function greenPara(font: string): React.CSSProperties {
    return { color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font };
}
