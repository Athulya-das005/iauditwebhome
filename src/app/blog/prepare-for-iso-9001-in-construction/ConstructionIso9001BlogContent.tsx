"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    "why-matters":
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=480&fit=crop&q=80&fm=webp",
    auditors:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=480&fit=crop&q=80&fm=webp",
    scope:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=480&fit=crop&q=80&fm=webp",
    documentation:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    site:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=480&fit=crop&q=80&fm=webp",
    "internal-audits":
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=480&fit=crop&q=80&fm=webp",
    people:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=480&fit=crop&q=80&fm=webp",
    mistakes:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "why-matters", label: "Why ISO 9001 Matters on Construction Projects" },
    { id: "auditors", label: "What Auditors Really Look For" },
    { id: "step-1", label: "Step 1: Map Scope and Key Processes" },
    { id: "step-2", label: "Step 2: Documentation and Records" },
    { id: "step-3", label: "Step 3: Check What Happens on Site" },
    { id: "step-4", label: "Step 4: Internal Audits and PDCA" },
    { id: "step-5", label: "Step 5: People and Subcontractors" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "checklist", label: "A Short Checklist" },
    { id: "conclusion", label: "Making Future Audits Easier" },
];

const processList = [
    "Enquiry and tender",
    "Contract review",
    "Planning and programming",
    "Procurement and subcontractor management",
    "Site setup and construction",
    "Inspections, tests and sign off",
    "Handover and aftercare",
];

const checklistItems = [
    "Scope confirmed and main processes mapped",
    "Quality documentation up to date and aligned with how you work",
    "Key project records complete and easy to find",
    "At least one recent internal audit done, with actions tracked",
    "Site walk completed and obvious issues addressed",
    "Staff and key subcontractors briefed on the audit",
    "Previous findings reviewed and status clearly recorded",
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

export default function ConstructionIso9001BlogContent() {
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
                    alt="Prepare for ISO 9001 in Construction"
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
                        Construction
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
                            April 10, 2026
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
                        Prepare for ISO 9001 in Construction: What You Actually Need
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            When I visit construction sites before an ISO 9001 audit, the pattern is usually the same. People are busy, paperwork is scattered, and a week before the audit someone realises a lot of things are in heads and inboxes, not in a place an auditor can actually see.
                        </p>
                        <p style={para(font)}>
                            If you are in that position, this guide is for you. I want to show you how to prepare for ISO 9001 in construction in a way that fits real projects, not a perfect textbook world.
                        </p>
                    </div>

                    <div id="why-matters" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why ISO 9001 matters on construction projects</h2>
                        <SectionImage src={sectionImages["why-matters"]} alt="Construction site activity supporting quality and project delivery" />
                        <p style={para(font)}>
                            On most jobs, nobody wakes up thinking about clauses. They think about pouring concrete on time, avoiding rework, keeping the client calm, and getting off site without defects or disputes.
                        </p>
                        <p style={para(font)}>ISO 9001 in construction is simply a structured way to support that:</p>
                        <ul style={ul(font)}>
                            <li>Plan the work properly</li>
                            <li>Use the right people, methods and materials</li>
                            <li>Check what you have done</li>
                            <li>Fix problems and learn from them</li>
                        </ul>
                        <p style={para(font)}>
                            If you see the standard as a framework for doing consistent, good quality work, it becomes easier to prepare for ISO 9001 in construction without feeling like you are doing two separate jobs, one for the project and one for the certificate.
                        </p>
                    </div>

                    <div id="auditors" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What auditors really look for in construction companies</h2>
                        <SectionImage src={sectionImages.auditors} alt="Construction project planning and quality review" />
                        <p style={para(font)}>Most auditors want to see three things.</p>
                        <ul style={ul(font)}>
                            <li>You have a clear construction quality management system.</li>
                            <li>People actually use it.</li>
                            <li>It helps you control and improve your projects.</li>
                        </ul>
                        <p style={para(font)}>In practice, that means they will look at:</p>
                        <ul style={ul(font)}>
                            <li>How you move from tender or contract award through planning to handover</li>
                            <li>How you control subcontractors and key suppliers</li>
                            <li>How you plan inspections and tests, and keep records</li>
                            <li>How you handle nonconformities, snags and complaints</li>
                            <li>Whether you use lessons from one project to improve the next</li>
                        </ul>
                        <p style={para(font)}>
                            When you prepare for ISO 9001 in construction, try to follow the same path. Pick a live or recent project and ask, for each step, “What did we say we would do, what did we actually do, and what can we show for it?”
                        </p>
                    </div>

                    <div id="step-1" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 1: Map your scope and key processes</h2>
                        <SectionImage src={sectionImages.scope} alt="Mapping construction project processes and scope" />
                        <p style={para(font)}>Before you touch documents, get clear on what is in and what is out.</p>
                        <ul style={ul(font)}>
                            <li>Which companies and offices are in scope</li>
                            <li>Which activities you cover, for example design, construction, maintenance</li>
                            <li>Which sites or regions are included right now</li>
                        </ul>
                        <p style={para(font)}>
                            Then map the key processes that turn a contract into a finished job. It does not need to be fancy. A simple list is enough:
                        </p>
                        <ul style={ul(font)}>
                            {processList.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            This helps you explain your system in plain language when the auditor sits down and asks, “Talk me through how you run a project here.”
                        </p>
                    </div>

                    <div id="step-2" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 2: Get your documentation and records in shape</h2>
                        <SectionImage src={sectionImages.documentation} alt="Construction quality documentation and project records" />
                        <p style={para(font)}>
                            A lot of stress comes from not knowing where things are. If you want to prepare for ISO 9001 in construction without that last minute scramble, focus on two areas: controlled documents and evidence.
                        </p>
                        <p style={para(font)}>For documents, check that:</p>
                        <ul style={ul(font)}>
                            <li>Your quality manual or framework reflects how you really work</li>
                            <li>Procedures for key activities are up to date and accessible</li>
                            <li>Forms and templates people actually use are controlled, not ten different versions</li>
                        </ul>
                        <p style={para(font)}>For records, pick a sample project and pull together:</p>
                        <ul style={ul(font)}>
                            <li>Project quality plan</li>
                            <li>Approved drawings and revisions</li>
                            <li>Method statements and risk assessments</li>
                            <li>Inspection and test records</li>
                            <li>Material and product certificates</li>
                            <li>Site diaries and photographs</li>
                            <li>Training and competence records for key roles</li>
                        </ul>
                        <p style={para(font)}>
                            Aim for one central place where current documents and important records can be found quickly. It can be digital or physical, as long as it is clear and consistent.
                        </p>
                    </div>

                    <div id="step-3" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 3: Check what is really happening on site</h2>
                        <SectionImage src={sectionImages.site} alt="Construction site walk and inspection readiness" />
                        <p style={para(font)}>Most of the real story is on the site, not in the office.</p>
                        <p style={para(font)}>Before the audit, I like to walk a project with a site manager and look at it as an auditor might:</p>
                        <ul style={ul(font)}>
                            <li>Is housekeeping reasonable, with materials stored and protected properly</li>
                            <li>Are works identified so we know what has been inspected and what has not</li>
                            <li>Does what I see match the method statements and drawings</li>
                            <li>Can the team show recent inspection and test records for critical activities</li>
                            <li>Is measuring and test equipment controlled and, where needed, calibrated</li>
                        </ul>
                        <p style={para(font)}>
                            You do not need to fix everything in a day. The aim is to spot obvious gaps between “what we say” and “what we do” and deal with the ones that would be hard to justify on audit day.
                        </p>
                    </div>

                    <div id="step-4" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 4: How I use internal audits to prepare for ISO 9001 in construction</h2>
                        <SectionImage src={sectionImages["internal-audits"]} alt="Internal audit discussion for construction quality systems" />
                        <p style={para(font)}>
                            Internal audits are one of the simplest ways to prepare for ISO 9001 in construction. Done well, they let you find issues on your own terms, not in front of a client or certification body.
                        </p>
                        <p style={para(font)}>I treat internal audits as a PDCA cycle in miniature:</p>
                        <ul style={ul(font)}>
                            <li>
                                <strong style={{ color: "#111827" }}>Plan:</strong> choose a project or process, define the scope and timing
                            </li>
                            <li>
                                <strong style={{ color: "#111827" }}>Do:</strong> carry out the audit using a structured checklist tied to your processes
                            </li>
                            <li>
                                <strong style={{ color: "#111827" }}>Check:</strong> review the findings, look for patterns and root causes
                            </li>
                            <li>
                                <strong style={{ color: "#111827" }}>Act:</strong> agree actions, owners and dates, then follow up
                            </li>
                        </ul>
                        <p style={para(font)}>
                            In construction, a good internal audit usually follows a project from start to finish rather than just sampling random clauses. It might start with the contract review, look at procurement, then move on to site control, inspections and handover.
                        </p>
                        <p style={para(font)}>
                            If you use repeatable checklists and keep findings in one place, you also start to see trends across sites, not just one job at a time.
                        </p>
                    </div>

                    <div id="step-5" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Step 5: Bring your people and subcontractors with you</h2>
                        <SectionImage src={sectionImages.people} alt="Construction team briefing before an ISO audit" />
                        <p style={para(font)}>
                            I have seen well written systems fail because nobody on site understood what they were for.
                        </p>
                        <p style={para(font)}>Before an audit:</p>
                        <ul style={ul(font)}>
                            <li>Share the audit date and a simple overview of what will happen</li>
                            <li>Make sure project and site managers know the plan and where key records live</li>
                            <li>Let supervisors know they may be asked how they control quality in their area</li>
                            <li>Brief key subcontractors on your expectations and how their work links to your quality requirements</li>
                        </ul>
                        <p style={para(font)}>
                            Encourage straightforward answers. If someone does not know something, it is far better for them to say “I am not sure, let me check” than to invent an answer on the spot.
                        </p>
                    </div>

                    <div id="mistakes" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common mistakes when companies prepare for ISO 9001 in construction</h2>
                        <SectionImage src={sectionImages.mistakes} alt="Avoiding common ISO 9001 preparation mistakes on construction projects" />
                        <p style={para(font)}>
                            A lot of companies try to prepare for ISO 9001 in construction by rewriting documents just before the audit. That usually creates more confusion, not less. Other common issues I see include:
                        </p>
                        <ul style={ul(font)}>
                            <li>Impressive manuals that site teams have never seen</li>
                            <li>Records saved on personal devices with no central backup</li>
                            <li>Old nonconformities left open or weakly closed</li>
                            <li>Procedures copied from a much larger company that do not fit your size</li>
                            <li>Overly complex flowcharts that nobody uses on a live project</li>
                        </ul>
                        <p style={para(font)}>
                            Auditors are more interested in simple, consistent practice than polished documents that do not match reality.
                        </p>
                    </div>

                    <div id="checklist" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>A short checklist to help you prepare for ISO 9001 in construction</h2>
                        <p style={para(font)}>
                            Here is a quick checklist you can use to prepare for ISO 9001 in construction in a more controlled way:
                        </p>
                        <ul style={ul(font)}>
                            {checklistItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            You do not need perfection on every point, but you should be able to explain your position on each one.
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
                                Making future audits easier
                            </h2>
                            <p style={greenPara(font)}>
                                If every audit still feels like a crisis, the problem is usually not the audit day itself, but what happens in between.
                            </p>
                            <p style={greenPara(font)}>
                                Relying on Word, Excel and long email chains can work when you have one or two projects. Once you are juggling several live sites, different auditors and years of records, it becomes much harder to keep a clear picture of what is happening.
                            </p>
                            <p style={greenPara(font)}>
                                That is why I have been working on ISO audit management software that supports structured internal audits, simple planning and clear evidence trails, especially for teams that need to prepare for ISO 9001 in construction across multiple projects.
                            </p>
                            <p style={greenPara(font)}>
                                If you are interested, we are running a pilot programme for iAudit Global and inviting a small number of organisations to try the platform, give feedback and help shape how it works in real construction environments.
                            </p>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                If you would like to be part of that pilot, or just see whether it could make your next audit less painful, you can learn more and register your interest here.
                            </p>
                            <a
                                href="https://surveys.iaudit.global/"
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
                                Register interest at surveys.iaudit.global
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
