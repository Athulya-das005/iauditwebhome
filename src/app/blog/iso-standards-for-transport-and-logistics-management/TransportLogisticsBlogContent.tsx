"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    "core-standards":
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&h=480&fit=crop&q=80&fm=webp",
    subcontractors:
        "https://images.unsplash.com/photo-1578574577315-52ac167a2d4b?w=900&h=480&fit=crop&q=80&fm=webp",
    regulations:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    "cold-chain":
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&h=480&fit=crop&q=80&fm=webp",
    "common-failures":
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "summary", label: "Key Takeaways" },
    { id: "core-standards", label: "Core ISO Standards" },
    { id: "subcontractors", label: "Sub-Contractor Risk" },
    { id: "regulations", label: "ISO & Transport Regulations" },
    { id: "cold-chain", label: "Cold Chain & Specialist Freight" },
    { id: "common-failures", label: "Why Transport Audits Fail" },
    { id: "pdca", label: "Using PDCA Across Fleets" },
    { id: "conclusion", label: "Taking Control of Logistics Audits" },
];

const pricingFaqs = [
    {
        question: "What are the main ISO standards for transport and logistics management?",
        answer:
            "The four core ISO standards for transport and logistics management are ISO 9001 (quality management), ISO 14001 (environmental management), ISO 45001 (health and safety), and ISO 27001 (information security). Together, they cover service reliability, fleet emissions, yard and driver safety, and protection of customer and shipment data.",
    },
    {
        question: "Why is sub-contractor management so important for ISO compliance in logistics?",
        answer:
            "Many transport companies sub-contract significant volumes to owner-drivers, partner carriers, and third-party warehouses. Under ISO 9001 Clause 8.4, you are responsible for the quality of externally provided services. If a sub-contractor fails to deliver on time, damages cargo, or breaches temperature requirements, auditors will treat it as your non-conformity.",
    },
    {
        question: "How do ISO standards for transport and logistics management overlap with UK transport regulations?",
        answer:
            "In logistics, ISO compliance and legal compliance are closely linked. Your quality management system should actively manage operator licence obligations, tachograph downloads and infringement analysis, drivers' hours compliance, and dangerous goods (ADR) requirements. Auditors expect to see these regulatory processes embedded in your QMS, not managed separately.",
    },
    {
        question: "What are common reasons transport and logistics companies fail ISO audits?",
        answer:
            "Frequent non-conformities include quality objectives not linked to customer SLAs, driver CPC training records not tracked centrally, cargo damage claims resolved commercially without root cause analysis, and sub-contractors used without verifying their operator licence, insurance, or ADR compliance. These gaps appear when ISO is treated as paperwork rather than operational management.",
    },
    {
        question: "How does ISO 9001 apply to cold chain and pharmaceutical logistics?",
        answer:
            "Cold chain operators must demonstrate temperature control throughout the transport process. This means calibrated data loggers, validated transport lanes, and documented breach investigation procedures. ISO 9001 provides the quality management framework, while Good Distribution Practice (GDP) sets the technical requirements for pharmaceutical freight.",
    },
    {
        question: "How often should transport and logistics companies run internal ISO audits?",
        answer:
            "Most logistics organisations use a risk-based internal audit programme. High-volume depots, routes with performance issues, and sub-contractors with poor track records should be audited more frequently. Lower-risk operations can be sampled less often. The key is that your audit schedule reflects actual operational risk, not just a calendar tick.",
    },
    {
        question: "How can iAudit Global help manage ISO standards for transport and logistics management?",
        answer:
            "iAudit Global centralises your audit programme across depots, fleets, and sub-contractors. You can track driver competence (CPCs, ADR certificates), manage sub-contractor approvals and performance, log non-conformances, and run internal audits from one platform. Your audit data stays with your organisation and we have no access to it. Start a 14-day free trial at app.iaudit.global.",
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

export default function TransportLogisticsBlogContent() {
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
                    alt="ISO Standards for Reliable Transport and Logistics Operations"
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
                        Transport & Logistics
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
                            March 20, 2026
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
                            10 Min Read
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
                        ISO Standards for Reliable Transport and Logistics Operations
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Transport and logistics is an industry with zero margin for error. A late delivery, a temperature breach in the cold chain, or a damaged pallet costs money and damages client trust immediately. When your workforce is out on the road and your assets are constantly moving, managing quality and compliance is significantly harder than it is in a fixed office or factory.
                        </p>
                        <p style={para(font)}>
                            Generic advice about quality manuals rarely helps a busy traffic office. This guide breaks down how ISO standards for transport and logistics management actually work in practice, what auditors look for in a depot, and how you can use these frameworks to build a more reliable, resilient operation.
                        </p>
                    </div>

                    <div id="summary" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Key Takeaways</h2>
                        <p style={para(font)}>
                            In logistics, a single compliance failure can ground your fleet or cost you a major contract. Implementing ISO standards for transport and logistics management is not about writing office procedures. It is about proving you have total control over a fast moving, high-risk supply chain.
                        </p>
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
                                    title: "The Core Standards",
                                    desc: "ISO 9001: Ensures on-time delivery and cargo integrity. ISO 14001: Manages fuel and emissions. ISO 45001: Covers yard and driver safety.",
                                },
                                {
                                    title: "The Biggest Audit Risk: Sub-contractors",
                                    desc: "You are responsible for their quality. You must verify their Operator Licences, insurance, and performance.",
                                },
                                {
                                    title: "The Regulatory Overlap",
                                    desc: "ISO compliance equals legal compliance. Auditors will check your tachograph analysis, driver CPCs, and Dangerous Goods (ADR) records.",
                                },
                                {
                                    title: "The Solution",
                                    desc: "Spreadsheets and paper PODs lead to failed audits. You need to centralise your audit findings and corrective actions to track performance across all your depots and vehicles.",
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
                    </div>

                    <div id="core-standards" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Core ISO Standards for Transport and Logistics</h2>
                        <SectionImage src={sectionImages["core-standards"]} alt="Transport fleet and logistics depot operations" />
                        <p style={para(font)}>
                            When we talk about ISO standards for transport and logistics management, we are usually talking about three or four key frameworks. In this sector, they translate directly into operational realities:
                        </p>
                        {[
                            {
                                label: "ISO 9001 (Quality)",
                                desc: "This is all about service reliability. It covers On-Time Delivery (OTD), Proof of Delivery (POD) capture, cargo integrity, and meeting the specific Service Level Agreements (SLAs) you have signed with your customers.",
                            },
                            {
                                label: "ISO 14001 (Environment)",
                                desc: "This moves beyond office recycling. In logistics, it means managing fuel consumption, monitoring fleet emissions, planning efficient routes, and having proper spill response kits in your transport yards.",
                            },
                            {
                                label: "ISO 45001 (Health and Safety)",
                                desc: "This covers the high-risk environments of your business: yard safety, forklift operations, manual handling in the warehouse, and managing driver fatigue on the road.",
                            },
                            {
                                label: "ISO 27001 (Information Security)",
                                desc: "With the rise of cyber threats to supply chains, protecting your Transport Management System (TMS), track-and-trace data, and sensitive customs documentation is now critical.",
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
                    </div>

                    <div id="subcontractors" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Why Sub-Contractor Management is Your Biggest ISO Risk</h2>
                        <SectionImage src={sectionImages.subcontractors} alt="Freight trucks and sub-contractor logistics operations" />
                        <p style={para(font)}>
                            Many transport operators do not own every truck that moves their freight. The industry relies heavily on owner-drivers, 3PLs, and sub-contractors to manage fluctuating volumes.
                        </p>
                        <p style={para(font)}>
                            Under ISO 9001 (specifically Clause 8.4), you are responsible for the quality of externally provided services. If an agency driver damages a load, or a sub-contracted haulier misses a delivery window, that is a failure of your management system.
                        </p>
                        <p style={para(font)}>
                            When auditing ISO standards for transport and logistics management, auditors will heavily scrutinise your supply chain. They will expect to see an approved carrier list. They will want evidence that you verify your sub-contractors&rsquo; Operator Licences, check their goods-in-transit insurance, and actively monitor their performance. If you manage sub-contractors purely on price and availability without tracking quality, you will likely face a major non-conformity.
                        </p>
                    </div>

                    <div id="regulations" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>The Overlap Between ISO and Transport Regulations</h2>
                        <SectionImage src={sectionImages.regulations} alt="Transport compliance documentation and regulatory checks" />
                        <p style={para(font)}>
                            In logistics, you cannot separate ISO compliance from legal compliance. A strong quality management system must embed the strict regulatory requirements of the sector.
                        </p>
                        <p style={para(font)}>Auditors will check how you manage:</p>
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
                                    title: "Operator Licences",
                                    desc: "Is your nominated Transport Manager actually managing compliance day-to-day, or are they a 'sleeping TM' just holding the CPC certificate?",
                                },
                                {
                                    title: "Tachographs and Drivers' Hours",
                                    desc: "Are digital tachograph downloads happening within the legal intervals (90 days for vehicles, 28 days for driver cards)? Are infringements analysed, and are drivers formally debriefed when they break the rules?",
                                },
                                {
                                    title: "Dangerous Goods",
                                    desc: "If you transport hazardous materials, is your Dangerous Goods Safety Adviser (DGSA) formally appointed? Are your drivers' ADR certificates current for the specific classes they are carrying?",
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
                            If your ISO system operates in a silo away from the traffic office and the Transport Manager, it is not functioning correctly.
                        </p>
                    </div>

                    <div id="cold-chain" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Auditing the Cold Chain and Specialist Freight</h2>
                        <SectionImage src={sectionImages["cold-chain"]} alt="Cold chain and warehouse logistics operations" />
                        <p style={para(font)}>
                            Different sectors within logistics carry specific risks. Implementing ISO standards for transport and logistics management requires adapting to these sub-sector nuances.
                        </p>
                        <p style={para(font)}>
                            In cold chain and pharmaceutical logistics, temperature is everything. Auditors will look for evidence of Good Distribution Practice (GDP). They will want to see that temperature data loggers in trailers are regularly calibrated, and they will ask to see the investigation records for any temperature excursions during transit.
                        </p>
                        <p style={para(font)}>
                            In air cargo, the focus shifts heavily to security. Auditors will check your procedures for managing Known Shipper status and complying with Department for Transport (DfT) and IATA dangerous goods regulations. The standard remains ISO 9001, but the evidence required is highly specialised.
                        </p>
                    </div>

                    <div id="common-failures" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Why Transport Audits Fail: Common Non-Conformities</h2>
                        <SectionImage src={sectionImages["common-failures"]} alt="Audit review meeting discussing logistics non-conformities" />
                        <p style={para(font)}>
                            Even experienced logistics companies get caught out during external audits. Understanding how ISO standards for transport and logistics management are applied can help you avoid these common pitfalls:
                        </p>
                        <div style={{ margin: "1rem 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {[
                                {
                                    level: "SLAs",
                                    color: "#dc2626",
                                    bg: "rgba(220,38,38,0.06)",
                                    label: "Disconnect from SLAs",
                                    desc: 'Setting a vague quality objective like "improve customer service" instead of tying objectives directly to hard customer KPIs, like a 98% OTD rate or a 99% POD capture rate.',
                                },
                                {
                                    level: "CPC",
                                    color: "#d97706",
                                    bg: "rgba(217,119,6,0.06)",
                                    label: "Poor CPC Tracking",
                                    desc: "Leaving it up to individual drivers to track their 35 hours of periodic training. If a driver's CPC expires, they cannot legally drive, causing immediate operational and compliance failures.",
                                },
                                {
                                    level: "Claims",
                                    color: "#2563eb",
                                    bg: "rgba(37,99,235,0.06)",
                                    label: "Commercial-Only Issue Resolution",
                                    desc: "When cargo is damaged, the finance team settles the insurance claim, but the quality team never conducts a root-cause analysis to find out why the pallet was crushed and how to stop it happening again.",
                                },
                                {
                                    level: "PODs",
                                    color: "#006644",
                                    bg: "rgba(0,102,68,0.06)",
                                    label: "Paperwork Chaos",
                                    desc: "Relying on physical paper PODs or CMRs that get lost in truck cabs, meaning you cannot prove the delivery was completed successfully.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.level}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "1rem",
                                        background: item.bg,
                                        borderRadius: "0.75rem",
                                        padding: "0.875rem 1rem",
                                        border: `1px solid ${item.color}22`,
                                    }}
                                >
                                    <span
                                        style={{
                                            minWidth: "68px",
                                            borderRadius: "5px",
                                            background: item.color,
                                            color: "#fff",
                                            fontSize: "0.68rem",
                                            fontWeight: 700,
                                            padding: "3px 6px",
                                            textAlign: "center",
                                            flexShrink: 0,
                                            fontFamily: font,
                                        }}
                                    >
                                        {item.level}
                                    </span>
                                    <div>
                                        <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: "0.9rem", color: "#111827", fontFamily: font }}>
                                            {item.label}
                                        </p>
                                        <p style={{ margin: 0, fontSize: "0.87rem", color: "#6B7280", fontFamily: font, lineHeight: 1.6 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="pdca" style={{ scrollMarginTop: "58px", marginTop: "2.25rem" }}>
                        <h2 style={h2(font)}>Using PDCA Across Fleets and Depots</h2>
                        <SectionImage src={sectionImages.pdca} alt="PDCA cycle applied to transport fleet and depot operations" />
                        <p style={para(font)}>
                            The core of any ISO standard is the Plan-Do-Check-Act (PDCA) cycle. In a warehouse or transport yard, this must be a fast, practical process.
                        </p>
                        {[
                            { label: "Plan", desc: "Route optimisation, load planning, checking driver availability, and having adverse weather contingencies ready." },
                            { label: "Do", desc: "Pre-departure driver briefings, safe loading of vehicles, and executing the delivery." },
                            { label: "Check", desc: "Tachograph analysis, internal audits of the depot, and tracking daily OTD metrics." },
                            { label: "Act", desc: "Re-routing based on traffic data, retraining drivers who have tachograph infringements, or removing underperforming sub-contractors from your approved list." },
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
                                Applying ISO standards for transport and logistics management successfully means ensuring this cycle happens continuously, not just in the month before your external auditor arrives.
                            </p>
                        </div>
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
                                Taking Control of Logistics Audits
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
                                Managing ISO standards for transport and logistics management requires complete visibility across a distributed, fast-moving operation. If your audit programme is buried in spreadsheets, paper checklists, and emails to depot managers, things will inevitably fall through the cracks.
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
                                iAudit Global is designed to bring order to complex ISO programmes. Our platform allows you to centralise your sub-contractor checks, track driver competence (like CPC and ADR expiries), and log fleet non-conformances in one secure workspace. With our clause-mapped checklists and Audit Mate AI assistant, you can run multi-depot audits efficiently, applying the PDCA cycle to drive genuine operational improvement.
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
                                Ready to get your compliance out of spreadsheets? Start your 14-day free trial of iAudit Global today and take control of your ISO standards for transport and logistics management.
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
                <FAQAccordion items={pricingFaqs} heading="Frequently asked questions" sparkleText="Support" />
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
