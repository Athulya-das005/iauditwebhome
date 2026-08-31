"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    why: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=480&fit=crop&q=80&fm=webp",
    look: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80&fm=webp",
    tracking: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    avoid: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    iaudit: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "why", label: "Why the Right Audit Software Matters" },
    { id: "look", label: "What to Look For" },
    { id: "avoid", label: "What to Avoid" },
    { id: "iaudit", label: "How iAudit Global Supports Teams" },
    { id: "conclusion", label: "Final Thoughts" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const faqItems = [
    {
        question: "What is ISO audit management software?",
        answer:
            "ISO audit management software helps organisations plan, conduct, track and report internal audits for ISO 9001, ISO 14001, ISO 45001 and ISO 27001. It replaces spreadsheets and email-based workflows with one structured platform for audit programmes, findings, corrective actions and evidence.",
    },
    {
        question: "Why do organisations need ISO audit management software?",
        answer:
            "Manual audit processes using spreadsheets and Word documents lead to lost findings, weak corrective action follow-up and fragmented audit history. ISO audit management software keeps everything in one place, improves traceability, speeds up reporting and helps audit programmes drive real improvement.",
    },
    {
        question: "What features matter most in ISO audit management software?",
        answer:
            "The most important features include PDCA cycle support, audit programme planning, findings and corrective action tracking, evidence collection, real-time reporting, role-based access, cloud and mobile access, and ISO-specific workflows aligned to ISO 9001, ISO 14001 and ISO 45001 requirements.",
    },
    {
        question: "How does Audit Mate help ISO audit teams?",
        answer:
            "Audit Mate is an AI co-pilot built into iAudit Global. It helps auditors draft audit plans, create checklists aligned to ISO clauses, and write clearer findings faster. Audit Mate keeps all conversations private and does not use your audit data to train external models.",
    },
    {
        question: "Can ISO audit management software support multi-site audit programmes?",
        answer:
            "Yes. Good ISO audit management software supports audit planning, execution and follow-up across multiple sites, departments and teams. This is essential for organisations that need central visibility, consistent audit processes and better control over findings and corrective actions.",
    },
    {
        question: "What should I avoid when choosing ISO audit management software?",
        answer:
            "Avoid generic compliance tools that treat audits as simple checklists. Avoid platforms with steep learning curves, software that locks your audit history behind proprietary formats, and tools that require consultants to configure. ISO audits should be straightforward to set up and run.",
    },
    {
        question: "Does iAudit Global offer a free trial?",
        answer:
            "Yes. iAudit Global offers a 14-day free trial that includes Gap Analysis, Self Assessment, Findings Dashboard, Data Analytics Summary and Report Download. No credit card required. You can access the free trial at https://www.iaudit.global/ or reach out at https://www.iaudit.global/contact if you have questions.",
    },
];

const pdcaItems = [
    {
        title: "Plan",
        text: "Build audit programmes. Schedule audits by risk, site, or process. Assign auditors and define scope.",
    },
    {
        title: "Do",
        text: "Conduct audits using structured checklists. Capture evidence digitally. Record findings in real time.",
    },
    {
        title: "Check",
        text: "Analyse findings across audits. Identify recurring issues. Track corrective action progress.",
    },
    {
        title: "Act",
        text: "Close actions with verified evidence. Feed lessons into process improvements. Prepare for the next cycle.",
    },
];

const avoidItems = [
    "Avoid generic compliance tools that treat audits as simple checklists. They miss the structure and rigour ISO standards require.",
    "Avoid platforms with steep learning curves that slow your team down. If auditors need two days of training just to log a finding, adoption will fail.",
    "Avoid software that locks your audit history behind proprietary formats. Your findings, evidence, and corrective actions should belong to your organisation, not the vendor.",
    "Avoid tools that need consultants to configure. ISO audits should be straightforward to set up and run.",
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

export default function ChooseIsoAuditSoftwareBlogContent() {
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
                    alt="Choosing ISO audit management software for planning, findings and reporting"
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
                        Audit Software
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
                            April 8, 2026
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
                            11 Min Read
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
                        How to Choose ISO Audit Management Software That Drives Real Improvement
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Three months ago, I sat in a quality manager’s office watching her toggle between five different Excel files just to prepare for one internal audit.
                        </p>
                        <p style={para(font)}>
                            Audit schedule in one sheet. Findings log in another. Corrective actions tracked somewhere else. Evidence screenshots buried in a shared folder. And when I asked about last year’s audit, she admitted half the follow-up actions had fallen through the cracks.
                        </p>
                        <p style={para(font)}>
                            She was not alone. I have seen this pattern across dozens of organisations over 18 years. Teams running ISO audits without proper tools end up managing complexity instead of improving processes.
                        </p>
                        <p style={para(font)}>
                            The right ISO audit management software changes that. It brings audit planning, execution, findings, actions and evidence into one place so nothing gets lost and improvement actually happens.
                        </p>
                        <p style={para(font)}>
                            But not all software is built the same. Here is what to look for if you are choosing a platform that will actually help your audit programme work better.
                        </p>
                    </div>

                    <div id="why" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why the Right Audit Software Matters</h2>
                        <SectionImage src={sectionImages.why} alt="Spreadsheets and scattered files making ISO audits harder" />
                        <p style={para(font)}>
                            When ISO audits rely on spreadsheets, Word documents and email threads, several things go wrong.
                        </p>
                        <p style={para(font)}>
                            Findings get logged but never closed. Actions are assigned but not tracked. Evidence is saved somewhere but cannot be found six months later when a certification auditor asks for it. Audit history fragments across files, people and systems.
                        </p>
                        <p style={para(font)}>
                            The cost is not just administrative hassle. It is missed nonconformities, weak corrective action follow-up, and audit programmes that fail to drive real improvement.
                        </p>
                        <p style={para(font)}>
                            ISO audit management software should make audits faster, clearer, and more effective. It should support the full PDCA cycle, keep audit history intact, and give managers visibility without adding burden to auditors.
                        </p>
                        <p style={para(font)}>If the tool does not do that, it is not solving the right problem.</p>
                    </div>

                    <div id="look" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What to Look for in ISO Audit Management Software</h2>
                        <SectionImage src={sectionImages.look} alt="Planning ISO audits with structured software instead of spreadsheets" />
                        <p style={para(font)}>Here are the features that actually matter when choosing a platform for ISO internal audits.</p>

                        <h3 style={h3(font)}>Built Around ISO Standards</h3>
                        <p style={para(font)}>
                            Generic compliance tools treat audits as tick-box exercises. ISO audit management software should be designed specifically for ISO 9001, ISO 14001, ISO 45001 and ISO 27001.
                        </p>
                        <p style={para(font)}>
                            That means clause mapping, audit checklist templates aligned to standards, and workflows that reflect how ISO audits actually run in practice.
                        </p>
                        <p style={para(font)}>
                            If the software does not understand the difference between a nonconformity, an observation, and an opportunity for improvement, it is not built for ISO work.
                        </p>

                        <h3 style={h3(font)}>Supports the Full PDCA Cycle</h3>
                        <SectionImage src={sectionImages.pdca} alt="ISO audit software supporting the full Plan Do Check Act cycle" />
                        <p style={para(font)}>Effective audits follow Plan, Do, Check, Act. The software should support that cycle, not just the Do part.</p>
                        {pdcaItems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            If the platform only handles checklists and reports, it is missing three quarters of what makes audits effective.
                        </p>

                        <h3 style={h3(font)}>Audit Planning and Programme Management</h3>
                        <p style={para(font)}>
                            Multi-site organisations need visibility across locations, departments, and standards. The software should let you schedule audits, assign auditors, track coverage, and see where gaps exist.
                        </p>
                        <p style={para(font)}>
                            Risk-based planning is essential. High-risk processes should be audited more frequently. The platform should make that easy to configure and monitor.
                        </p>

                        <h3 style={h3(font)}>Findings and Corrective Action Tracking</h3>
                        <SectionImage src={sectionImages.tracking} alt="Tracking ISO findings and corrective actions in one dashboard" />
                        <p style={para(font)}>This is where most manual systems break down. Findings get logged, but follow-up stalls.</p>
                        <p style={para(font)}>
                            Good ISO audit management software keeps nonconformities, observations, and actions in one place. Assign clear ownership. Set deadlines. Track status from open to closed. Link actions back to the original finding so nothing gets orphaned.
                        </p>
                        <p style={para(font)}>
                            Corrective actions should not live in email threads. They should be visible, traceable, and impossible to ignore.
                        </p>

                        <h3 style={h3(font)}>Evidence Collection and Traceability</h3>
                        <p style={para(font)}>Audit evidence should be captured where the work happens, not recreated later from memory.</p>
                        <p style={para(font)}>
                            The platform should let auditors attach photos, notes, and documents directly to findings. Evidence should be searchable, linked to audit history, and available when certification bodies or customers ask for proof.
                        </p>
                        <p style={para(font)}>
                            If your audit records are scattered across folders and spreadsheets, traceability becomes guesswork.
                        </p>

                        <h3 style={h3(font)}>Real-Time Reporting and Analytics</h3>
                        <p style={para(font)}>Managers need oversight without chasing auditors for updates.</p>
                        <p style={para(font)}>
                            Dashboards should show audit progress, overdue actions, compliance scores, and recurring issues. That visibility helps teams intervene early and keeps the audit programme on track.
                        </p>
                        <p style={para(font)}>
                            Reporting should be automatic. Generate structured audit reports with findings, actions, and evidence already organised. No manual copying and pasting.
                        </p>

                        <h3 style={h3(font)}>Role-Based Access and Collaboration</h3>
                        <p style={para(font)}>
                            Auditors, auditees, and managers each need different views. The software should support role-based access so everyone sees what they need without information overload.
                        </p>
                        <p style={para(font)}>
                            Collaboration matters. Auditees should be able to upload evidence and respond to findings without email back-and-forth. Auditors should be able to work across sites with consistent templates and workflows.
                        </p>

                        <h3 style={h3(font)}>Cloud-Based and Mobile-Friendly</h3>
                        <p style={para(font)}>
                            Audits happen on the shop floor, in warehouses, at construction sites. The platform should work on tablets and phones, not just desktops.
                        </p>
                        <p style={para(font)}>
                            Cloud-based access means auditors can capture evidence on-site and managers can check progress from anywhere. No waiting to return to the office to enter data.
                        </p>

                        <h3 style={h3(font)}>AI-Powered Support</h3>
                        <p style={para(font)}>
                            This is newer, but increasingly valuable. AI tools like Audit Mate can speed up audit planning, draft checklists aligned to ISO clauses, and help auditors write clearer findings.
                        </p>
                        <p style={para(font)}>
                            The key is that AI should support auditors, not replace judgement. And audit data should stay private, not used to train external models.
                        </p>
                    </div>

                    <div id="avoid" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What to Avoid When Choosing Audit Software</h2>
                        <SectionImage src={sectionImages.avoid} alt="Reviewing audit software options that do not fit ISO work" />
                        <p style={para(font)}>Not every platform labelled as ISO audit management software will actually help your team.</p>
                        <ul style={ul(font)}>
                            {avoidItems.map((item) => (
                                <li key={item.slice(0, 40)}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global Supports ISO Audit Teams</h2>
                        <SectionImage src={sectionImages.iaudit} alt="ISO audit teams using a PDCA-driven audit platform" />
                        <p style={para(font)}>
                            After years around internal ISO audits, we tried a lot of tools that claimed to make life easier. Most left us frustrated.
                        </p>
                        <p style={para(font)}>Two patterns kept coming up.</p>
                        <p style={para(font)}>
                            First, almost everything treated audits as one-off events. You ran a checklist, produced a report, closed the file and moved on. Very few tools were built around PDCA or helped you see how findings, actions and lessons linked from one cycle to the next.
                        </p>
                        <p style={para(font)}>
                            Second, audit history often stopped belonging to the organisation. Findings, evidence, closure notes all sat on someone else’s platform, with the vendor able to see everything. When people moved on or a contract ended, context went with them.
                        </p>
                        <p style={para(font)}>That became the starting point for iAudit Global.</p>
                        <p style={para(font)}>
                            We built ISO audit management software around two non-negotiables. It had to follow the PDCA cycle in a simple, practical way, so audits actually support improvement over time. And audit data had to stay with the customer. We host the platform, but we do not mine or inspect findings. Your audit history is yours.
                        </p>
                        <p style={para(font)}>
                            iAudit supports ISO 9001, ISO 14001, and ISO 45001. Audit planning, execution, findings, corrective actions, evidence, and reporting all live in one place.
                        </p>
                        <p style={para(font)}>
                            Audit Mate, our AI co-pilot, helps auditors draft plans, build checklists, and write clearer findings faster, with all conversations staying private.
                        </p>
                        <p style={para(font)}>
                            Our 14-day free trial includes Gap Analysis, Self Assessment, Findings Dashboard, Data Analytics Summary, and Report Download. No credit card required.
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
                                Final Thoughts
                            </h2>
                            <p style={greenPara(font)}>
                                The right ISO audit management software should make audits easier, not harder. It should help you find real risks, close actions faster, and build confidence in your audit programme.
                            </p>
                            <p style={greenPara(font)}>
                                If your current approach relies on spreadsheets and scattered files, the cost is not just time. It is lost findings, weak follow-up, and audit programmes that fail to drive improvement.
                            </p>
                            <p style={greenPara(font)}>
                                When you choose software built around ISO standards, PDCA thinking, and real audit workflows, the difference shows quickly. Audits become tools for improvement, not administrative exercises.
                            </p>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                If you are evaluating audit software, what features matter most to you? I would be interested to hear what challenges your team faces.
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

function ul(font: string): React.CSSProperties {
    return {
        margin: "0 0 1.15rem",
        paddingLeft: "1.25rem",
        color: "#374151",
        fontSize: "0.98rem",
        lineHeight: 1.85,
        fontFamily: font,
        display: "flex",
        flexDirection: "column",
        gap: "0.35rem",
    };
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
