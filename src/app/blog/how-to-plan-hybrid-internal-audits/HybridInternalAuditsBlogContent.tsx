"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    mindset: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&h=480&fit=crop&q=80&fm=webp",
    mapping: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    onsite: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=480&fit=crop&q=80&fm=webp",
    remote: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=480&fit=crop&q=80&fm=webp",
    logistics: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=900&h=480&fit=crop&q=80&fm=webp",
    evidence: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&h=480&fit=crop&q=80&fm=webp",
    "audit-mate":
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80&fm=webp",
    auditees: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "mindset", label: "A Shift in Mindset" },
    { id: "step-1", label: "Step 1: Risk-Based Process Mapping" },
    { id: "step-2", label: "Step 2: Logistics and Video Fatigue" },
    { id: "evidence", label: "The Evidence Problem" },
    { id: "iaudit", label: "How iAudit Global Bridges the Gap" },
    { id: "audit-mate", label: "Using Audit Mate for Preparation" },
    { id: "step-3", label: "Step 3: Closing the Loop with PDCA" },
    { id: "step-4", label: "Step 4: Preparing the Auditees" },
    { id: "conclusion", label: "Moving Beyond the Spreadsheet" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const faqItems = [
    {
        question: "What exactly is a hybrid internal audit?",
        answer:
            "A hybrid internal audit is a strategic combination of face to face site visits and remote digital reviews. It allows an organisation to be highly efficient by moving document-heavy tasks to a virtual setting while reserving physical site time for high-risk, operational observations.",
    },
    {
        question: "How do I decide which processes to audit remotely versus on-site?",
        answer:
            "The most important rule in how to plan hybrid internal audits is to let risk drive the decision. Processes that live in systems or documents, such as policy reviews or management meetings, are ideal for remote audits. Activities that require physical verification, such as safety culture, housekeeping, or machinery guarding, should remain on-site.",
    },
    {
        question: "Does ISO 19011 recognise remote and hybrid auditing techniques?",
        answer:
            "Yes. The ISO 19011:2018 guidelines explicitly recognise remote auditing as a valid method. The standard does not mandate a specific location for the auditor, provided that the evidence collected is objective, verifiable, and relevant to the audit criteria.",
    },
    {
        question: "What is the biggest challenge when you plan hybrid internal audits?",
        answer:
            "The biggest hurdle is data fragmentation. When an audit is split between different locations and formats, findings and evidence often end up scattered across emails, notebooks, and shared drives. To make a hybrid model work, you need a central workspace like iAudit Global to keep the audit trail continuous and visible.",
    },
    {
        question: "How can we avoid video fatigue during the remote parts of an audit?",
        answer:
            "Virtual auditing is mentally taxing. A practical tip for how to plan hybrid internal audits is to break remote sessions into shorter, two-hour blocks rather than full-day video calls. This keeps both the auditor and the auditee focused and ensures that small details are not missed.",
    },
    {
        question: "Can Audit Mate AI help with hybrid audit preparation?",
        answer:
            "Audit Mate acts as an intelligent co-pilot during the planning phase. It can instantly generate clause-aligned checklists for both on-site safety walks and remote document reviews. This ensures that your audit criteria remain consistent, regardless of where or how the evidence is being gathered.",
    },
    {
        question: "Why should I move away from spreadsheets for a hybrid audit programme?",
        answer:
            "Spreadsheets were not designed to handle the complexity of a hybrid model. They lack a secure audit trail, make it difficult to attach live evidence like photos, and often result in version control chaos. iAudit Global unifies your entire hybrid programme into one PDCA-driven workspace, ensuring your audit history stays with your organisation.",
    },
];

const onSiteEssentials = [
    {
        title: "Operational Control (Clause 8.1)",
        text: "Housekeeping, machinery guarding, and material flow on a busy shop floor.",
    },
    {
        title: "Health and Safety (ISO 45001)",
        text: "Observing whether staff actually wear PPE when supervision isn't looking or how they handle high-risk tasks.",
    },
    {
        title: "Environmental Controls (ISO 14001)",
        text: "Inspecting the condition of fuel bunds, spill kits, and waste segregation areas.",
    },
];

const remoteFriendly = [
    {
        title: "Policy and Scope (Clause 4 and 5)",
        text: "Reviewing the quality manual, objectives, and leadership commitment.",
    },
    {
        title: "Management Review (Clause 9.3)",
        text: "Discussing high-level strategy and data trends with directors.",
    },
    {
        title: "Documented Information (Clause 7.5)",
        text: "Verifying version control, approval workflows, and record retention.",
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

export default function HybridInternalAuditsBlogContent() {
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
                    alt="Planning hybrid internal audits that mix on-site and remote work"
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
                        Internal Audits
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
                            March 25, 2026
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
                            12 Min Read
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
                        How to Plan Hybrid Internal Audits: A Practical Guide for ISO Standards
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            If you manage an ISO internal audit programme, you have likely moved past the stage of doing remote audits simply because you have to. During the pandemic, virtual assessments were a necessary workaround. Today, they have evolved into a strategic choice. The most effective audit programmes now use a hybrid model, combining the efficiency of remote work with the depth of on-site observation.
                        </p>
                        <p style={para(font)}>
                            However, moving from a traditional approach to a mixed model brings new challenges. Many teams struggle with fragmented data, inconsistent evidence, and a lack of visibility across different sites. Understanding how to plan hybrid internal audits is not just about choosing between a meeting room and a video call. It is about using risk-based thinking to decide where the auditor’s time delivers the most value.
                        </p>
                        <p style={para(font)}>
                            This guide provides a practical roadmap for building a hybrid programme that remains rigorous, audit-ready, and aligned with ISO 19011 guidance.
                        </p>
                    </div>

                    <div id="mindset" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>A Shift in Mindset</h2>
                        <SectionImage src={sectionImages.mindset} alt="Audit team combining remote and on-site planning" />
                        <p style={para(font)}>
                            A hybrid internal audit is a strategic blend of face-to-face site visits and remote virtual assessments. The goal is to focus the physical site time on high-risk, operational activities while moving the administrative and document-heavy parts of the audit to a remote setting.
                        </p>
                        <p style={para(font)}>
                            When you start looking at how to plan hybrid internal audits, you quickly realise that the standard itself does not care how you see the evidence, provided that the evidence is objective and verifiable. Whether you look at a training record via a shared screen or across a desk, the requirement for Clause 7.2 remains the same. The difference is in the logistics and the quality of the observation.
                        </p>
                    </div>

                    <div id="step-1" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 1: Risk-Based Process Mapping</h2>
                        <SectionImage src={sectionImages.mapping} alt="Mapping ISO processes by risk for hybrid audit planning" />
                        <p style={para(font)}>
                            The most important part of how to plan hybrid internal audits is deciding which processes stay on-site and which go remote. You should never make this decision based on auditor convenience alone. It must be driven by risk.
                        </p>
                        <h3 style={h3(font)}>On-Site Essentials</h3>
                        <SectionImage src={sectionImages.onsite} alt="On-site operational checks that need physical observation" />
                        <p style={para(font)}>These are the processes where you need to sense the culture and observe physical conditions.</p>
                        {onSiteEssentials.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <h3 style={h3(font)}>Remote-Friendly Tasks</h3>
                        <SectionImage src={sectionImages.remote} alt="Remote document review and screen-share audit work" />
                        <p style={para(font)}>These are processes that live in systems, documents, and conversations.</p>
                        {remoteFriendly.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            By mapping your audit scope this way, you ensure that your physical presence is reserved for the things that cannot be verified through a webcam.
                        </p>
                    </div>

                    <div id="step-2" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 2: Logistics and Video Fatigue</h2>
                        <SectionImage src={sectionImages.logistics} alt="Shorter remote audit sessions to avoid video fatigue" />
                        <p style={para(font)}>
                            Logistics often slow down a hybrid programme. When you are determining how to plan hybrid internal audits, you have to account for the human element of virtual work.
                        </p>
                        <p style={para(font)}>
                            Remote auditing can be exhausting. Trawling through documents on a shared screen for six hours straight leads to “video fatigue,” which often results in auditors missing key details. A practical tip is to break remote sessions into shorter, two-hour blocks with clear agendas.
                        </p>
                        <p style={para(font)}>
                            You also need to verify that the technology works before the audit starts. This includes site-wide Wi-Fi for live walkthroughs and secure access to the organisation’s shared drives or document management systems. If the auditor spends half the session waiting for a file to load, the efficiency of the remote model is lost.
                        </p>
                    </div>

                    <div id="evidence" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>The Evidence Problem in Hybrid Programmes</h2>
                        <SectionImage src={sectionImages.evidence} alt="Scattered audit records that need a single evidence trail" />
                        <p style={para(font)}>
                            One of the biggest hurdles in how to plan hybrid internal audits is data fragmentation. When an audit is split between site and screen, the evidence often ends up scattered. Findings from the site visit might be in a notebook or a mobile app, while remote findings are buried in email chains or shared drive folders.
                        </p>
                        <p style={para(font)}>
                            This fragmentation makes it very difficult to see the “whole story.” If a nonconformity is found on-site, but the related training records were checked remotely three days earlier, the link between the two can easily be lost. For a management system to be effective, the audit trail must be continuous and centralised.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global Bridges the Gap</h2>
                        <p style={para(font)}>
                            We built iAudit Global because we saw too many hybrid programmes failing at the reporting stage. Our platform acts as the single workspace that unifies the hybrid model.
                        </p>
                        <p style={para(font)}>
                            Whether the auditor is walking a warehouse floor with a mobile device or reviewing a policy via a desktop screen share, all findings, photos, and signatures are stored in one place. This removes the “evidence gap” and ensures that the audit history remains with the organisation, not on a consultant’s laptop or in a personal inbox.
                        </p>
                        <p style={para(font)}>
                            A core principle of our platform is data sovereignty. While we host the workspace, we have zero access to your audit data. Your findings, evidence, and actions belong strictly to you. This is particularly important for organisations auditing sensitive information under ISO 27001 or working on high-security projects.
                        </p>
                    </div>

                    <div id="audit-mate" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Using Audit Mate for Audit Preparation</h2>
                        <SectionImage src={sectionImages["audit-mate"]} alt="Building clause-aligned checklists for hybrid audits" />
                        <p style={para(font)}>
                            Part of how to plan hybrid internal audits effectively involves drafting checklists that work for both environments. This is where Audit Mate, our built-in AI assistant, helps.
                        </p>
                        <p style={para(font)}>
                            Audit Mate can help you generate clause-aligned checklists in seconds. You can ask it to suggest specific questions for an on-site safety walk or a remote document review. This ensures that even if you are splitting the audit across several days and locations, the criteria remain consistent and the auditor knows exactly what evidence to look for at each stage.
                        </p>
                    </div>

                    <div id="step-3" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 3: Closing the Loop with PDCA</h2>
                        <SectionImage src={sectionImages.pdca} alt="Reviewing whether a hybrid audit programme is working" />
                        <p style={para(font)}>
                            A hybrid programme must itself follow the Plan-Do-Check-Act cycle. Once you have realised how to plan hybrid internal audits, you need to check whether the approach is actually working.
                        </p>
                        <p style={para(font)}>
                            During your management review, ask whether the remote elements of the audit programme are catching as many issues as the on-site visits. If the remote audits are consistently coming back with “zero findings” while the site visits find major nonconformities, your virtual technique might be too shallow.
                        </p>
                        <p style={para(font)}>
                            The “Act” phase of the cycle involves adjusting your split. Perhaps you need to move a specific process back to an on-site check or improve the way digital evidence is presented. This continual adjustment is what makes a hybrid programme sustainable over multiple audit cycles.
                        </p>
                    </div>

                    <div id="step-4" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 4: Preparing the Auditees</h2>
                        <SectionImage src={sectionImages.auditees} alt="Briefing site teams before a hybrid internal audit" />
                        <p style={para(font)}>
                            The final step in how to plan hybrid internal audits is managing expectations with the site teams. Auditees often feel more pressured during remote sessions because they feel “on show” during a video call.
                        </p>
                        <p style={para(font)}>
                            Brief your teams in advance. Explain which parts will be remote and which will be face-to-face. Ensure they know how to share their screen and how to upload evidence into a central system like iAudit. When the people being audited feel comfortable with the tools, the conversation becomes more honest and the findings more useful.
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
                                Moving Beyond the Spreadsheet
                            </h2>
                            <p style={greenPara(font)}>
                                If you are currently trying to coordinate a hybrid programme using only spreadsheets and email, you are likely working harder than you need to. The admin burden of stitching together site notes and remote records is the biggest cause of auditor burnout.
                            </p>
                            <p style={greenPara(font)}>
                                A successful hybrid model is built on three things: risk-based planning, the right technology, and a unified audit trail. When these are in place, the audit stops being a disruption and starts being a real management tool.
                            </p>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                If you are ready to see how a specialist platform can simplify how to plan hybrid internal audits, start a 14-day free trial to explore the dashboards, use Audit Mate to build your checklists, and experience a more structured way to audit.
                            </p>
                            <a
                                href="https://apps.iaudit.global/"
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
                                Start your 14-day free trial
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
                                Author
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
