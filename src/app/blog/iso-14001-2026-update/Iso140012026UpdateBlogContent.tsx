"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    why: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=480&fit=crop&q=80&fm=webp",
    changes: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
    same: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    prepare: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&h=480&fit=crop&q=80&fm=webp",
    supply: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "why", label: "Why ISO 14001 Is Being Revised" },
    { id: "changes", label: "What Is Likely to Change" },
    { id: "same", label: "What Is Not Changing" },
    { id: "prepare", label: "How to Prepare Your Audit Programme" },
    { id: "iaudit", label: "How iAudit Global Simplifies the Transition" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const faqItems = [
    {
        question: "Is ISO 14001 being updated in 2026?",
        answer:
            "Yes. A formal revision of the ISO 14001 standard is currently underway, with publication expected in 2026. The update will ensure the standard remains relevant to modern environmental challenges.",
    },
    {
        question: "Will organisations need to recertify immediately?",
        answer:
            "No. Whenever an ISO standard is updated, there is a formal transition period. This usually lasts for three years from the date of publication, giving organisations plenty of time to update their systems and complete a transition audit.",
    },
    {
        question: "What are the main changes expected in ISO 14001:2026?",
        answer:
            "While the core structure remains the same, the update is expected to place greater emphasis on climate change risks, lifecycle perspective, sustainable procurement, and the accuracy of external environmental reporting.",
    },
    {
        question: "How can internal auditors prepare for the changes?",
        answer:
            "Internal audit teams should start by reviewing their organisation's environmental context and compliance obligations. It is also a good time to centralise audit records, clear outstanding nonconformities, and move away from manual spreadsheets to a dedicated ISO audit platform.",
    },
];

const likelyChanges = [
    {
        title: "A stronger focus on climate change",
        text: "Earlier this year, ISO introduced a harmonised amendment across multiple management standards requiring organisations to consider climate change as a relevant external issue. The 2026 update will likely weave this requirement more deeply into the environmental management system. You will need to show how climate risks impact your operations and how your operations impact the climate.",
    },
    {
        title: "Clearer lifecycle perspective",
        text: "The 2015 version introduced the concept of lifecycle thinking. The new update is expected to ask for more clarity on this front. Auditors will likely want to see how you manage environmental impacts upstream with your suppliers and downstream with product disposal. It will no longer be enough to only look at what happens inside your own factory walls.",
    },
    {
        title: "Better external reporting and communication",
        text: "Greenwashing is a major concern for regulators right now. The revised standard is expected to tighten the rules around how organisations communicate their environmental performance. If you make an environmental claim, you will need solid, verified data to back it up.",
    },
    {
        title: "Stronger links to business strategy",
        text: "Environmental objectives can no longer sit in a silo. The update will likely place more emphasis on leadership, ensuring that environmental goals are fully integrated into the overall strategic direction of the business.",
    },
];

const prepareSteps = [
    {
        num: "1",
        title: "Review your context and interested parties",
        text: "Look at your current documentation for Clause 4. Does it mention climate change? Does it reflect the current expectations of your investors, clients, and local community? Updating this section early is a simple way to get ahead.",
    },
    {
        num: "2",
        title: "Audit your supply chain controls",
        text: "Start looking at how much influence you actually have over your suppliers and contractors. If an external auditor asks for evidence of your lifecycle perspective next year, you want to have those records ready.",
    },
    {
        num: "3",
        title: "Check your corrective actions",
        text: "A transition period is a bad time to have a backlog of unresolved nonconformities. Clean up your action logs. Make sure old findings are genuinely closed and verified for effectiveness.",
    },
    {
        num: "4",
        title: "Move away from spreadsheets",
        text: "Transitioning to a revised standard is chaotic if your audit history is scattered across different folders, emails, and Excel trackers. You need visibility. You need to know exactly how every site is performing against the current requirements before you add new ones.",
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

export default function Iso140012026UpdateBlogContent() {
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
                    alt="ISO 14001:2026 environmental management system update"
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
                        ISO 14001:2026
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
                            April 1, 2026
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
                        ISO 14001:2026 Update: What Is Changing and How to Prepare
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Every time a major ISO standard undergoes a revision, the reaction is predictable. People worry that they will need to rewrite their entire management system from scratch.
                        </p>
                        <p style={para(font)}>
                            If your organisation is currently certified to ISO 14001, you do not need to panic. The upcoming ISO 14001:2026 update is an evolution, not a complete rebuild. The core framework remains exactly the same. The goal of the revision is simply to clarify existing requirements and bring the standard in line with modern environmental challenges.
                        </p>
                        <p style={para(font)}>
                            However, moving from the 2015 version to the 2026 revision will require some adjustment. Quality and environmental teams need to understand what is likely to change, what is staying the same, and how to start adapting their internal audit programmes now.
                        </p>
                        <p style={para(font)}>
                            Here is a practical look at the ISO 14001 revision 2026 and what you should do to prepare.
                        </p>
                    </div>

                    <div id="why" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why ISO 14001 is being revised</h2>
                        <SectionImage src={sectionImages.why} alt="Why environmental management standards are being updated" />
                        <p style={para(font)}>Standards have to reflect reality. The environmental landscape has shifted significantly since the last major update in 2015.</p>
                        <p style={para(font)}>
                            Organisations are facing stricter regulations, higher expectations from stakeholders, and more complex supply chains. Most importantly, climate change is no longer just a background issue. It is a central operational risk.
                        </p>
                        <p style={para(font)}>
                            The International Organization for Standardization reviews its documents regularly to ensure they remain useful. For ISO 14001, the consensus was clear. The standard did not need a radical overhaul, but it did need sharper focus on climate action, lifecycle thinking, and accurate environmental reporting.
                        </p>
                    </div>

                    <div id="changes" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What is likely to change in the ISO 14001:2026 update</h2>
                        <SectionImage src={sectionImages.changes} alt="Climate action and lifecycle thinking in ISO 14001:2026" />
                        <p style={para(font)}>
                            While the final text is still being developed, industry guidance points to a few key areas of change.
                        </p>
                        {likelyChanges.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="same" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What is not changing</h2>
                        <SectionImage src={sectionImages.same} alt="ISO 14001 Annex SL structure and PDCA cycle remaining in place" />
                        <p style={para(font)}>When you start planning for the ISO 14001 transition, it helps to remember what remains intact.</p>
                        <p style={para(font)}>
                            The fundamental structure is not changing. The standard will still use the Annex SL framework, meaning it will remain perfectly aligned with ISO 9001 and ISO 45001.
                        </p>
                        <p style={para(font)}>
                            The Plan-Do-Check-Act cycle still sits at the heart of the system. You will still need to identify risks, set objectives, train your staff, run internal audits, and hold management reviews. Legal compliance remains an absolute priority.
                        </p>
                        <p style={para(font)}>
                            You will not need to throw out your current procedures. You will just need to view them through a slightly updated lens.
                        </p>
                    </div>

                    <div id="prepare" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to prepare your audit programme right now</h2>
                        <SectionImage src={sectionImages.prepare} alt="Preparing an ISO 14001 audit programme for the 2026 revision" />
                        <p style={para(font)}>
                            The official publication is expected in 2026, which means you have plenty of time. But the best audit teams do not wait for the final release to start looking at their gaps.
                        </p>
                        <p style={para(font)}>Here are four practical steps you can take today.</p>
                        {prepareSteps.map((item) => (
                            <div key={item.num} style={{ marginBottom: "1.35rem" }}>
                                <h3 style={h3(font)}>
                                    {item.num}. {item.title}
                                </h3>
                                {item.num === "2" && (
                                    <SectionImage src={sectionImages.supply} alt="Reviewing supplier and lifecycle controls for ISO 14001" />
                                )}
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
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
                                How iAudit Global simplifies the transition
                            </h2>
                            <p style={greenPara(font)}>
                                We built iAudit Global because we saw too many teams struggling to manage complex ISO audit programmes with disconnected tools.
                            </p>
                            <p style={greenPara(font)}>
                                When the ISO 14001:2026 update arrives, you will need to update your audit checklists, track new types of evidence, and monitor findings across multiple locations. Managing that transition manually is a massive administrative burden.
                            </p>
                            <p style={greenPara(font)}>
                                iAudit Global brings your entire audit programme into one secure workspace. You can plan audits based on risk, capture evidence directly in the platform, and link findings to corrective actions with clear deadlines.
                            </p>
                            <p style={greenPara(font)}>
                                If you are unsure how to audit the new climate or lifecycle requirements, our built-in AI assistant, Audit Mate, can help. You can ask it to draft clause-aligned checklists or suggest specific interview questions for process owners. It handles the heavy lifting of preparation, allowing you to focus on the actual investigation.
                            </p>
                            <p style={greenPara(font)}>
                                And because we operate a zero access policy, your environmental data, findings, and strategic risks remain entirely under your control.
                            </p>
                            <p style={greenPara(font)}>
                                Internal audits should give your business confidence. With the 2026 revision approaching, now is the time to build a smarter, more reliable audit programme.
                            </p>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                You can try iAudit Global free for 14 days.
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
