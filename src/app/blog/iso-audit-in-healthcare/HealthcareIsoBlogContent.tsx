"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    "why-iso":
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=480&fit=crop&q=80&fm=webp",
    standards:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=480&fit=crop&q=80&fm=webp",
    different:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "why-iso", label: "Why Healthcare Needs ISO Standards" },
    { id: "standards", label: "Key ISO Standards for Healthcare" },
    { id: "different", label: "What Makes Healthcare Audits Different" },
    { id: "pdca", label: "Making Audits Effective: PDCA" },
    { id: "conclusion", label: "Building Trust Through Quality Systems" },
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

export default function HealthcareIsoBlogContent() {
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
                    alt="ISO Audit in Healthcare Is Not Like Other Audits"
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
                        Healthcare
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
                            April 3, 2026
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
                        ISO Audit in Healthcare Is Not Like Other Audits. Here Is Why.
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            When a manufacturing process fails, you get a defective product. When a healthcare process fails, you risk patient safety.
                        </p>
                        <p style={para(font)}>
                            That difference shapes everything about ISO audit in healthcare. The stakes are higher. The environment is more complex. The margin for error is smaller.
                        </p>
                        <p style={para(font)}>
                            I have spent 18 years consulting on ISO management systems across regulated industries. Healthcare presents unique challenges that generic audit approaches simply cannot address. From clinical workflows to patient data protection, ISO for healthcare industry demands a tailored approach that balances rigour with the realities of medical service delivery.
                        </p>
                    </div>

                    <div id="why-iso" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Healthcare Needs ISO Standards</h2>
                        <SectionImage src={sectionImages["why-iso"]} alt="Healthcare professionals collaborating on patient care quality" />
                        <p style={para(font)}>
                            Healthcare organisations face pressures from every direction. Regulators demand compliance. Patients expect safety. Staff need clear processes to deliver consistent care.
                        </p>
                        <p style={para(font)}>
                            ISO standards for healthcare provide the framework to meet these demands systematically.
                        </p>
                        <p style={para(font)}>
                            Consider what is at stake. Clinical outcomes depend on reliable processes. Patient trust depends on data protection. Operational efficiency depends on well-documented workflows. Reputation depends on all of the above.
                        </p>
                        <p style={para(font)}>
                            According to NQA, ISO standards give healthcare organisations a structured approach to quality management, risk reduction, and continual improvement. They are not bureaucratic burdens. They are tools for delivering better care.
                        </p>
                        <p style={para(font)}>
                            ISO healthcare frameworks help organisations move from reactive problem-solving to proactive risk management. That shift matters when lives are involved.
                        </p>
                    </div>

                    <div id="standards" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Key ISO Standards for Healthcare</h2>
                        <SectionImage src={sectionImages.standards} alt="Healthcare technology and clinical systems supporting ISO quality frameworks" />
                        <p style={para(font)}>
                            Several ISO standards apply directly to healthcare settings. Understanding which ones matter for your organisation is the first step.
                        </p>

                        <h3 style={h3(font)}>ISO 9001 Healthcare</h3>
                        <p style={para(font)}>
                            ISO 9001 healthcare standards focus on quality management systems. They ensure processes are documented, measured, and improved consistently.
                        </p>
                        <p style={para(font)}>
                            The current version, ISO 9001 2015 healthcare, emphasises risk-based thinking and leadership engagement. It applies across clinical and administrative functions.
                        </p>
                        <p style={para(font)}>
                            ISO 9000 healthcare provides the foundational vocabulary and principles that underpin ISO 9001 implementation.
                        </p>
                        <p style={para(font)}>
                            For medical services, ISO 9001 helps standardise patient pathways, reduce errors, and improve satisfaction scores.
                        </p>

                        <h3 style={h3(font)}>ISO 27001 Healthcare</h3>
                        <p style={para(font)}>
                            Patient data is sensitive. Breaches destroy trust and attract regulatory penalties.
                        </p>
                        <p style={para(font)}>
                            ISO 27001 healthcare addresses information security management. It provides a systematic approach to protecting patient records, clinical systems, and digital infrastructure.
                        </p>
                        <p style={para(font)}>
                            With electronic health records now standard, ISO 27001 healthcare has become essential rather than optional.
                        </p>

                        <h3 style={h3(font)}>Other Relevant Standards</h3>
                        <p style={para(font)}>
                            ISO 15189 applies specifically to medical laboratories, ensuring accuracy and reliability of test results.
                        </p>
                        <p style={para(font)}>
                            ISO 45001 covers occupational health and safety, protecting healthcare workers from workplace hazards.
                        </p>
                        <p style={para(font)}>
                            Together, these standards create a comprehensive framework for ISO for medical services that addresses quality, safety, and security.
                        </p>
                    </div>

                    <div id="different" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What Makes ISO Audit in Healthcare Different</h2>
                        <SectionImage src={sectionImages.different} alt="Hospital corridor reflecting the complexity of clinical audit environments" />
                        <p style={para(font)}>
                            Auditing a hospital is not like auditing a factory. The environment demands a different approach.
                        </p>
                        <p style={para(font)}>
                            Clinical workflows cannot stop for an auditor. Patients need care regardless of audit schedules. Staff work shifts, making interviews difficult to coordinate. Sensitive areas like theatres and wards require careful access planning.
                        </p>
                        <p style={para(font)}>
                            Documentation in healthcare is complex. Clinical records, consent forms, medication logs, traceability systems. Auditors need to understand what they are looking at.
                        </p>
                        <p style={para(font)}>
                            The Elsmar Quality Forum discussions highlight that auditors without healthcare experience often struggle. They may focus on paperwork while missing risks that matter.
                        </p>
                        <p style={para(font)}>
                            ISO audit in healthcare also requires sensitivity. Patients are present. Confidentiality is paramount. Auditors must observe without disrupting care.
                        </p>
                        <p style={para(font)}>
                            Multi-departmental coordination adds another layer. A single patient journey might touch reception, clinical teams, pharmacy, and discharge planning. Auditing that process means understanding how departments connect.
                        </p>
                        <p style={para(font)}>
                            ISO certification healthcare bodies expect auditors to navigate these complexities competently. Preparation matters more here than in most sectors.
                        </p>
                    </div>

                    <div id="pdca" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Making Audits Effective: The PDCA Approach</h2>
                        <SectionImage src={sectionImages.pdca} alt="Quality team planning a PDCA-based healthcare audit programme" />
                        <p style={para(font)}>
                            Effective ISO audit in healthcare follows the PDCA cycle. Plan, Do, Check, Act. This is not theory. It is how audits drive real improvement.
                        </p>
                        <p style={para(font)}>
                            <strong style={{ color: "#111827" }}>Plan.</strong> Build your audit programme around risk. Which clinical processes have the highest impact on patient safety? Where have incidents occurred before? Target those areas with appropriate frequency.
                        </p>
                        <p style={para(font)}>
                            <strong style={{ color: "#111827" }}>Do.</strong> Conduct audits with sensitivity to the healthcare environment. Use structured checklists but remain flexible. Gather evidence from real practice, not just documentation.
                        </p>
                        <p style={para(font)}>
                            <strong style={{ color: "#111827" }}>Check.</strong> Analyse findings across audits. Look for patterns. Are similar issues appearing in different departments? What systemic risks does this reveal?
                        </p>
                        <p style={para(font)}>
                            <strong style={{ color: "#111827" }}>Act.</strong> Assign corrective actions with clear owners and deadlines. Follow up to verify effectiveness. Embed lessons into training and procedures.
                        </p>
                        <p style={para(font)}>
                            ISO 19011 provides guidance on audit programme management based on these principles. When ISO audit in healthcare follows PDCA, it becomes a tool for improvement rather than a compliance exercise.
                        </p>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <div
                            style={{
                                background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)",
                                borderRadius: "1.25rem",
                                padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem",
                                position: "relative",
                                overflow: "hidden",
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
                            <h2
                                style={{
                                    fontSize: isMobile ? "1.45rem" : "1.7rem",
                                    fontWeight: 600,
                                    color: "#fff",
                                    letterSpacing: "-0.018em",
                                    lineHeight: 1.28,
                                    margin: "0 0 1rem",
                                    fontFamily: font,
                                    position: "relative",
                                }}
                            >
                                Building Trust Through Quality Systems
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
                                ISO audit in healthcare is ultimately about trust. Patients trust that processes protect their safety. Regulators trust that systems meet standards. Staff trust that their organisation supports them with clear procedures.
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
                                That trust is built through consistent, effective auditing that identifies risks and drives improvement.
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
                                This thinking shaped how we built iAudit. As an ISO audit management software, every feature connects to the PDCA cycle. Our AI-powered ISO compliance platform helps healthcare organisations plan, execute, and report audits in one place.
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
                                We are currently running a pilot programme for quality managers and internal auditors. Share 5 minutes of feedback on your current audit challenges and get 3 months of free access to our ISO automation platform. No credit card. No commitment.
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
                                If you work in healthcare quality, I would be interested to hear your experience. What makes ISO audit in healthcare challenging for your organisation?
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
                                18 years consulting on ISO management systems across regulated industries — helping healthcare quality teams audit with rigour and care.
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
                            Helping healthcare quality teams turn ISO audits into safer, more reliable care.
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
