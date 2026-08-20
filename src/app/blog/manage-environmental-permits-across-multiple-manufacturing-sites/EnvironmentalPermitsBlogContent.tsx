"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/manufacturing-bg.webp";

const sectionImages: Record<string, string> = {
    complexity:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=480&fit=crop&q=80&fm=webp",
    register:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    tasks: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    calendar:
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=900&h=480&fit=crop&q=80&fm=webp",
    audit: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
    regulatory:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=480&fit=crop&q=80&fm=webp",
    visibility:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "complexity", label: "Why Multi-Site Compliance Is Complex" },
    { id: "register", label: "Centralised Environmental Permit Register" },
    { id: "tasks", label: "Translate Permit Conditions into Tasks" },
    { id: "ownership", label: "Assign Clear Ownership" },
    { id: "calendar", label: "Compliance Calendar Across All Sites" },
    { id: "audit", label: "Audit Environmental Permit Compliance" },
    { id: "regulatory", label: "Monitor Regulatory Changes" },
    { id: "visibility", label: "Develop Executive Visibility" },
    { id: "conclusion", label: "Building Structured Environmental Compliance" },
    { id: "iaudit", label: "How iAudit Supports Environmental Compliance" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const complexityPoints = [
    {
        title: "Different Permit Conditions Across Facilities",
        text: "Two factories producing the same product may have entirely different permit requirements based on their location. One site might have strict wastewater discharge limits due to its proximity to a watercourse, while another might focus heavily on air emissions due to local air quality zones. This variability makes it impossible to use a \"one size fits all\" checklist for every plant.",
    },
    {
        title: "Multiple Regulatory Authorities and Reporting Deadlines",
        text: "Manufacturing sites often deal with different regional or national regulators. Each authority has its own reporting formats, submission portals and deadline cycles. Keeping track of these across five, ten or fifty sites requires more than a simple spreadsheet.",
    },
    {
        title: "Operational Changes That Trigger Permit Modifications",
        text: "Manufacturing is rarely static. New production lines, changes in raw materials or equipment upgrades can all invalidate an existing permit. Managing these modifications proactively is essential to prevent unpermitted operations, which can lead to heavy fines or forced shutdowns.",
    },
];

const registerItems = [
    "All environmental permits for every site.",
    "Permit numbers and issuing authorities.",
    "Clear expiration and renewal dates.",
    "Applicable regional and national regulations.",
    "Specific reporting requirements and monitoring obligations.",
    "Emission and discharge limits.",
    "Assigned responsible personnel at the site level.",
];

const obligationFields = [
    { label: "The Requirement", example: "What must be done? (e.g., Stack emissions testing)." },
    { label: "The Frequency", example: "How often? (e.g., Annually)." },
    { label: "The Owner", example: "Who is responsible? (e.g., Site EHS Manager)." },
    { label: "The Evidence", example: "What proves compliance? (e.g., Third-party laboratory report)." },
];

const governanceRoles = [
    {
        title: "Corporate EHS Team",
        text: "Responsible for oversight, internal audit programmes, policy development and tracking high-level regulatory changes.",
    },
    {
        title: "Site EHS Manager",
        text: "Responsible for daily permit compliance, maintaining records, coordinating sampling and hosting regulatory inspections.",
    },
    {
        title: "Plant Leadership",
        text: "Responsible for resource allocation and ensuring environmental management is integrated into operational decisions.",
    },
];

const calendarItems = [
    "Permit renewal deadlines.",
    "Monitoring and sampling schedules.",
    "Regulatory report submission dates.",
    "Required environmental training for staff.",
    "Internal and external audit windows.",
];

const auditTiers = [
    {
        title: "Monthly Site Self-Assessments",
        text: "Site teams perform quick checks against their core permit conditions.",
    },
    {
        title: "Quarterly Compliance Reviews",
        text: "A more thorough look at data, laboratory results and record retention.",
    },
    {
        title: "Annual Corporate Audits",
        text: "An independent review of the site’s performance against both legal permits and ISO 14001 standards.",
    },
];

const dashboardItems = [
    "Permit renewal status across the group.",
    "Overdue or upcoming compliance actions.",
    "Results from recent regulatory inspections.",
    "Environmental incident trends.",
    "Site-by-site compliance performance scores.",
];

const iauditFeatures = [
    {
        title: "Centralised Audit History",
        text: "Keep every ISO 14001 audit, permit check and evidence file in one shared, structured record.",
    },
    {
        title: "Multi-Site Dashboards",
        text: "Compare compliance scores and findings across every factory in your group from a single view.",
    },
    {
        title: "Evidence-Linked Audits",
        text: "Capture photos of site conditions, waste records and emission monitors directly against audit clauses.",
    },
    {
        title: "Corrective Action Tracking",
        text: "Assign findings to site owners with clear deadlines and track them through to closure with a full evidence trail.",
    },
    {
        title: "Standardised Checklists",
        text: "Push consistent environmental audit templates to every site to ensure brand and regulatory standards are met everywhere.",
    },
    {
        title: "Zero-Access Data Privacy",
        text: "We host your platform, but we never access or mine your audit data. Your compliance history belongs entirely to you.",
    },
];

const faqItems = [
    {
        question: "What is multi site environmental compliance in manufacturing?",
        answer:
            "Multi site environmental compliance in manufacturing refers to managing environmental permits, reporting obligations and regulatory requirements across more than one production facility. It involves maintaining visibility of permit conditions, renewal dates, monitoring activities and compliance performance at both site and corporate level.",
    },
    {
        question: "How do you manage environmental permits across multiple manufacturing sites?",
        answer:
            "To manage environmental permits across multiple manufacturing sites, organisations should maintain a centralised permit register, assign clear ownership, implement a compliance calendar, standardise procedures and conduct regular internal audits. Corporate oversight combined with site level accountability reduces the risk of missed obligations.",
    },
    {
        question: "What should be included in a manufacturing environmental permit register?",
        answer:
            "A manufacturing environmental permit register should include permit numbers, issuing authorities, expiry and renewal dates, emission or discharge limits, monitoring requirements, reporting deadlines, responsible personnel and evidence of compliance. This ensures all obligations are visible and traceable.",
    },
    {
        question: "How does ISO 14001 support environmental permit management in manufacturing?",
        answer:
            "ISO 14001 requires organisations to identify and comply with legal and other environmental requirements. In manufacturing, this includes maintaining an up to date legal register, evaluating compliance regularly and taking corrective action where gaps are identified. Internal audits play a key role in verifying permit compliance.",
    },
    {
        question: "How often should environmental permits be audited in manufacturing facilities?",
        answer:
            "Environmental permit compliance should be reviewed at planned intervals. Many manufacturers conduct site level checks monthly or quarterly, with annual corporate audits. The frequency should reflect the level of environmental risk, regulatory exposure and operational complexity.",
    },
    {
        question: "What are the risks of poor environmental permit tracking in manufacturing?",
        answer:
            "Poor environmental permit tracking in manufacturing can lead to missed renewals, late regulatory reports, unapproved operational changes and potential fines or enforcement action. It can also weaken ISO 14001 certification if compliance obligations are not properly controlled and documented.",
    },
    {
        question: "How can software help manage environmental permits across multiple manufacturing sites?",
        answer:
            "Environmental compliance software can centralise permit registers, track deadlines, store evidence, manage corrective actions and provide dashboards across sites. Platforms such as iAudit support ISO 14001 internal audits, link findings to actions and maintain a structured audit history across multiple manufacturing facilities.",
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

export default function EnvironmentalPermitsBlogContent() {
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
                    alt="How to manage environmental permits across multiple manufacturing sites"
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
                        ISO 14001
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
                            August 19, 2026
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
                        How to Manage Environmental Permits Across Multiple Manufacturing Sites
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <div
                            style={{
                                background: "rgba(0,102,68,0.05)",
                                borderRadius: "0.875rem",
                                border: "1px solid rgba(0,102,68,0.12)",
                                padding: "1.25rem 1.5rem",
                                margin: "0 0 1.25rem",
                            }}
                        >
                            <p style={{ ...para(font), margin: "0 0 0.75rem", fontWeight: 500, color: "#111827" }}>
                                Managing Environmental Compliance at Scale
                            </p>
                            <p style={{ ...para(font), margin: "0 0 0.75rem" }}>
                                To successfully manage environmental permits across multiple manufacturing sites, organisations must move away from siloed spreadsheets and personal folders. Effective compliance depends on a centralised permit register, clearly assigned ownership at the site level, and a structured internal audit programme that translates legal language into operational tasks.
                            </p>
                            <p style={{ ...para(font), margin: 0 }}>
                                iAudit Global helps manufacturing teams maintain a unified audit history across all locations, ensuring permit compliance is visible, tracked and secure even when personnel move on.
                            </p>
                        </div>
                        <p style={para(font)}>
                            Managing environmental permits across multiple manufacturing sites is fundamentally a governance, compliance and data management challenge. In a single-site operation, permit conditions are often managed through local knowledge and personal folders. However, as an organisation scales across different regions or countries, that approach carries significant risk.
                        </p>
                        <p style={para(font)}>
                            The goal for any multi site environmental compliance manufacturing programme is to ensure every facility operates within its specific permit conditions while maintaining visibility, consistency and accountability at a corporate level. Without a structured system, the risk of missed renewals, unmonitored emissions or regulatory breaches increases.
                        </p>
                    </div>

                    <div id="complexity" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Multi Site Environmental Compliance Is Complex in Manufacturing</h2>
                        <SectionImage src={sectionImages.complexity} alt="Multi-site environmental compliance complexity in manufacturing" />
                        <p style={para(font)}>
                            In our experience working with ISO 14001 systems, manufacturing organisations face a unique set of variables that make environmental management difficult to centralise.
                        </p>
                        {complexityPoints.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="register" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Create a Centralised Environmental Permit Register for All Sites</h2>
                        <SectionImage src={sectionImages.register} alt="Centralised environmental permit register for manufacturing sites" />
                        <p style={para(font)}>
                            The first step in gaining control is to move away from site-level silos. You need a centralised manufacturing permit register that provides a master view of every environmental obligation across the organisation.
                        </p>
                        <p style={para(font)}>This master database should include:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {registerItems.map((item, i, arr) => (
                                <div
                                    key={item}
                                    style={{
                                        display: "flex",
                                        gap: "0.875rem",
                                        alignItems: "flex-start",
                                        padding: "0.875rem 0",
                                        borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none",
                                    }}
                                >
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            A centralised inventory ensures that if a site-level manager leaves, the organisation does not lose its compliance history or awareness of upcoming deadlines.
                        </p>
                    </div>

                    <div id="tasks" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Translate Permit Conditions into Actionable Compliance Tasks</h2>
                        <SectionImage src={sectionImages.tasks} alt="Translating environmental permit conditions into operational compliance tasks" />
                        <p style={para(font)}>
                            One of the most common gaps we see in ISO 14001 legal register manufacturing setups is the failure to &ldquo;operationalise&rdquo; permit language. Legal permits are often written in complex, technical language that does not easily translate to daily tasks for a shopfloor operator or a maintenance team.
                        </p>
                        <p style={para(font)}>
                            To manage environmental permits across multiple manufacturing sites effectively, you must convert permit conditions into a structured obligation register.
                        </p>
                        <h3 style={h3(font)}>From Legal Language to Operational Control</h3>
                        <p style={para(font)}>Each permit condition should be broken down into:</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", margin: "1rem 0 1.25rem" }}>
                            {obligationFields.map((item) => (
                                <div
                                    key={item.label}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "1rem",
                                        background: "rgba(0,102,68,0.05)",
                                        borderRadius: "0.75rem",
                                        padding: "0.875rem 1rem",
                                        border: "1px solid rgba(0,102,68,0.12)",
                                    }}
                                >
                                    <span
                                        style={{
                                            minWidth: "110px",
                                            borderRadius: "5px",
                                            background: "#006644",
                                            color: "#fff",
                                            fontSize: "0.68rem",
                                            fontWeight: 700,
                                            padding: "3px 8px",
                                            textAlign: "center",
                                            flexShrink: 0,
                                            fontFamily: font,
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item.example}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            This conversion ensures that compliance is based on clear actions rather than an individual&apos;s interpretation of a legal document.
                        </p>
                    </div>

                    <div id="ownership" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Assign Clear Ownership Across Corporate and Site Levels</h2>
                        <p style={para(font)}>
                            Responsibility for environmental compliance often becomes blurred in multi-site organisations. To avoid &ldquo;compliance gaps,&rdquo; you need a clear governance model.
                        </p>
                        {governanceRoles.map((item) => (
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
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            Every requirement in your manufacturing permit register must have a named owner. When ownership is clear, accountability follows.
                        </p>
                    </div>

                    <div id="calendar" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Implement a Compliance Calendar Across All Manufacturing Facilities</h2>
                        <SectionImage src={sectionImages.calendar} alt="Environmental compliance calendar across manufacturing facilities" />
                        <p style={para(font)}>
                            Timing is everything in environmental management. Missing a renewal window or a quarterly report deadline is one of the easiest ways to trigger regulatory scrutiny.
                        </p>
                        <p style={para(font)}>A centralised compliance calendar allows you to track:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {calendarItems.map((item, i, arr) => (
                                <div
                                    key={item}
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
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            Using environmental permit tracking manufacturing tools to automate reminders can significantly reduce the risk of human error. Visibility of these dates at a corporate level allows head office to provide support to sites before a deadline is missed.
                        </p>
                    </div>

                    <div id="audit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Audit Environmental Permit Compliance Regularly</h2>
                        <SectionImage src={sectionImages.audit} alt="Auditing environmental permit compliance in manufacturing" />
                        <p style={para(font)}>
                            You cannot manage what you do not measure. Regular auditing is the &ldquo;Check&rdquo; phase of the Plan-Do-Check-Act cycle and is vital for ISO 14001 environmental audit manufacturing programmes.
                        </p>
                        <p style={para(font)}>We recommend a tiered approach to auditing:</p>
                        {auditTiers.map((item) => (
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
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            All audit findings should be recorded in a central system, with corrective actions assigned, tracked and verified through to closure.
                        </p>
                    </div>

                    <div id="regulatory" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Monitor Regulatory Changes and Manage Permit Modifications</h2>
                        <SectionImage src={sectionImages.regulatory} alt="Monitoring regulatory changes and environmental permit modifications" />
                        <p style={para(font)}>
                            Environmental regulations are not static. New legislation, such as changes to waste categorisation or emission limits, can impact your permits overnight. Corporate EHS teams should coordinate regulatory monitoring to ensure that every site is made aware of changes that affect their specific operations.
                        </p>
                        <p style={para(font)}>
                            Furthermore, a formal Management of Change (MOC) process is necessary. Before a plant manager adds a new boiler or changes a chemical process, there must be a check to see if it requires a permit modification. Managing this proactively prevents the risk of operating outside of legal limits.
                        </p>
                    </div>

                    <div id="visibility" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Develop Executive Visibility Across All Sites</h2>
                        <SectionImage src={sectionImages.visibility} alt="Executive visibility dashboard for multi-site environmental compliance" />
                        <p style={para(font)}>
                            Environmental compliance should not be a &ldquo;hidden&rdquo; activity. Leadership needs visibility to ensure resources are being directed where risks are highest.
                        </p>
                        <p style={para(font)}>Dashboards should be used to show:</p>
                        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {dashboardItems.map((item) => (
                                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            When leadership can see compliance data in real time, environmental management moves from being a &ldquo;box-ticking&rdquo; exercise to a core part of operational excellence.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Building Structured Environmental Compliance Across Multiple Manufacturing Sites</h2>
                        <p style={para(font)}>
                            Effective multi site environmental compliance manufacturing relies on moving away from fragmented, person-dependent systems. By centralising your permit inventory, standardising how obligations are tracked and maintaining a rigorous audit programme, you protect your organisation from both legal and operational risks.
                        </p>
                        <p style={para(font)}>
                            This structured approach ensures that whether you operate three facilities or thirty, your environmental performance remains consistent and your ISO 14001 certification stays secure.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Supports Environmental Compliance in Manufacturing</h2>
                        <p style={para(font)}>
                            iAudit Global is an ISO audit management platform built by certified Lead Auditors who understand the complexity of manufacturing compliance. We created the software to solve the exact problem of fragmented audit data and scattered compliance records.
                        </p>
                        <p style={para(font)}>For manufacturing organisations managing environmental permits, iAudit provides:</p>

                        <div
                            style={{
                                background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)",
                                borderRadius: "1.1rem",
                                padding: isMobile ? "1.75rem 1.5rem" : "2.25rem",
                                color: "#fff",
                                position: "relative",
                                overflow: "hidden",
                                margin: "1.25rem 0",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)",
                                    backgroundSize: "24px 24px",
                                    pointerEvents: "none",
                                }}
                            />
                            <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", position: "relative" }}>
                                {iauditFeatures.map((item) => (
                                    <li
                                        key={item.title}
                                        style={{
                                            marginBottom: "1rem",
                                            paddingBottom: "1rem",
                                            borderBottom: "1px solid rgba(255,255,255,0.12)",
                                        }}
                                    >
                                        <p style={{ margin: "0 0 0.25rem", fontWeight: 600, color: "#fff", fontSize: "0.95rem", fontFamily: font }}>{item.title}</p>
                                        <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.65, fontFamily: font }}>{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p style={para(font)}>
                            If you are reviewing how you manage environmental permits across multiple manufacturing sites, you can explore our structured approach to ISO auditing at{" "}
                            <a href="https://www.iaudit.global/" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                iaudit.global
                            </a>
                            . We also offer a 14-day free trial, so you can see firsthand how iAudit Global helps your organisation centralise its compliance history and protect its audit trail.
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
                                Centralise environmental permit compliance across every site
                            </h3>
                            <p style={greenPara(font)}>
                                Start a 14-day free trial of iAudit Global and see how centralised permit registers, multi-site dashboards and evidence-linked ISO 14001 audits keep your manufacturing compliance visible and secure.
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
                                Start your free trial
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
                                    background: "linear-gradient(135deg, #002e1d, #006644)",
                                    margin: "0 auto 1.1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>
                                iAudit Global Team
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
                                Helping manufacturing teams manage environmental permits, ISO 14001 audits and multi-site compliance with clarity and control.
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
                                background: "linear-gradient(135deg, #002e1d, #006644)",
                                margin: "0 auto 0.875rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>
                            iAudit Global Team
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
                            Helping manufacturing teams manage environmental permits and ISO 14001 compliance across multiple sites.
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

function h3(font: string): React.CSSProperties {
    return {
        fontSize: "1.2rem",
        fontWeight: 600,
        color: "#111827",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        margin: "0 0 0.625rem",
        fontFamily: font,
    };
}

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}

function greenPara(font: string): React.CSSProperties {
    return {
        color: "rgba(255,255,255,0.82)",
        fontSize: "0.975rem",
        lineHeight: 1.8,
        margin: "0 0 0.875rem",
        position: "relative",
        fontFamily: font,
    };
}
