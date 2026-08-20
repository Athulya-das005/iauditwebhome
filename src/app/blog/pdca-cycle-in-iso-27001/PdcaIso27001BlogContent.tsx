"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    "what-pdca":
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    "why-matters":
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=480&fit=crop&q=80&fm=webp",
    plan: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80&fm=webp",
    do: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=480&fit=crop&q=80&fm=webp",
    check: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    act: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=480&fit=crop&q=80&fm=webp",
    mistakes:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    daily: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what-pdca", label: "What is the PDCA Cycle?" },
    { id: "why-matters", label: "Why PDCA Matters More Than Controls" },
    { id: "plan", label: "Plan – Setting Up Your ISMS" },
    { id: "do", label: "Do – Putting Controls into Practice" },
    { id: "check", label: "Check – Measuring Whether It Works" },
    { id: "act", label: "Act – Fixing and Improving" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "daily", label: "Making PDCA Part of Daily Work" },
    { id: "iaudit", label: "Making PDCA Practical with iAudit" },
    { id: "conclusion", label: "Bringing It All Together" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const faqItems = [
    {
        question: "Is the PDCA cycle in ISO 27001 optional?",
        answer:
            "No. ISO 27001 is built around a management system model that uses PDCA. You will not always see the words on every page, but the structure of the clauses and Annex A assumes a plan do check act approach.",
    },
    {
        question: "How often should we complete one PDCA cycle in ISO 27001?",
        answer:
            "In practice, parts of the cycle run continuously. Risk assessments may be updated annually or when major changes occur. Internal audits are usually spread across the year. Management reviews are often held at least once a year. The important point is that all four phases happen regularly, not just before certification.",
    },
    {
        question: "Do small companies really need the full PDCA cycle in ISO 27001?",
        answer:
            "Smaller organisations can keep the documentation lighter, but the logic of PDCA still applies. Even a simple ISMS benefits from planning, implementation, checking and improvement. Skipping parts of the PDCA cycle in ISO 27001 tends to create more work later when issues pile up.",
    },
];

const planActivities = [
    {
        title: "Understanding context and interested parties",
        text: "What kind of organisation are you? What information is critical? Who would be affected if it was lost, altered or made unavailable?",
    },
    {
        title: "Defining the scope",
        text: "Are you covering the entire organisation, a set of locations, or a specific product or service, such as a SaaS platform?",
    },
    {
        title: "Carrying out a risk assessment",
        text: "Identify information assets, threats, vulnerabilities and impacts. Decide what matters most in your environment.",
    },
    {
        title: "Planning risk treatment",
        text: "Choose how you will handle each significant risk. Avoid, reduce, share or accept. This is where Annex A controls come into play.",
    },
    {
        title: "Setting information security objectives",
        text: "Decide what improvement looks like. Fewer incidents, faster recovery times, better access control, clearer supplier management and so on.",
    },
];

const doActivities = [
    "Implementing technical controls such as access management, network security, logging and backups.",
    "Rolling out policies so people actually know what is expected of them.",
    "Running awareness and training so staff understand their role in protecting information.",
    "Updating procedures for activities like onboarding, offboarding, software changes, supplier onboarding and incident handling.",
    "Making sure records are produced as planned, for example access reviews, backup tests and change approvals.",
];

const checkActivities = [
    {
        title: "Monitoring and measurement",
        text: "Tracking incident numbers, response times, completion of access reviews, patching times, supplier review results and similar metrics.",
    },
    {
        title: "Internal audits",
        text: "Structured checks to see whether real practice matches policies and procedures. Internal audits should cover both design and operation of controls.",
    },
    {
        title: "Management review",
        text: "Top management looks at the performance of the ISMS. This includes risks, opportunities, audit findings, incidents, nonconformities and progress towards objectives.",
    },
];

const actActivities = [
    {
        title: "Deal with nonconformities and incidents",
        text: "For each issue, you look at what went wrong, why it happened and what needs to change to stop it happening again.",
    },
    {
        title: "Implement corrective actions",
        text: "Not just a quick patch, but measures that tackle root causes. For example, tightening a process, improving training, changing a tool or adjusting a control.",
    },
    {
        title: "Review and adjust risks and controls",
        text: "If the business changes or threats evolve, you may need to update your risk assessment and your choice of Annex A controls.",
    },
    {
        title: "Capture lessons learned",
        text: "From incidents, failed tests, audits and near misses.",
    },
];

const mistakes = [
    {
        title: "Treating PDCA as a one off project plan",
        text: "Companies do a big Plan and Do to get certified, but Check and Act are minimal. After certification, activity drops until the next external audit.",
    },
    {
        title: "Overcomplicating the Plan stage",
        text: "Long risk reports and detailed documents, but little clarity about what actually needs to change in day to day work.",
    },
    {
        title: "Internal audits that do not lead to action",
        text: "Findings are recorded, but corrective actions are weak, late or never really checked for effectiveness.",
    },
    {
        title: "No meaningful metrics",
        text: 'Stating that controls are "implemented" without measuring how well they perform.',
    },
    {
        title: "Focusing only on Annex A",
        text: "Choosing controls without linking them clearly back to business risks and objectives.",
    },
];

const dailyWays = [
    "Build risk and security considerations into project kick off and change management, not just annual reviews.",
    "Schedule short, focused internal audits throughout the year. Each one can look at a specific process or department rather than trying to cover everything at once.",
    "Use regular team meetings to review a small set of ISMS metrics, such as incident trends or access review completion.",
    "Keep a simple, visible log of improvements made as a result of audits, incidents and reviews. This shows staff and auditors that the cycle is active.",
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

export default function PdcaIso27001BlogContent() {
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
                    alt="PDCA cycle in ISO 27001 for information security management"
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
                        ISO 27001
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
                            April 17, 2026
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
                        PDCA cycle in ISO 27001: How to make your ISMS actually work
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            A lot of organisations start ISO 27001 with a simple aim: “get the certificate”. Policies are written, controls are chosen, audits are booked. Then, once the certificate arrives, the whole thing quietly drifts into the background until the next surveillance visit.
                        </p>
                        <p style={para(font)}>The PDCA cycle in iso 27001 is there to stop exactly that.</p>
                        <p style={para(font)}>
                            Plan, Do, Check, Act is what turns ISO 27001 from a one off project into a living information security management system. In this article we will look at what the PDCA cycle in iso 27001 actually means in practice, why it matters more than individual controls, and how to make it part of day to day work rather than a diagram in the manual.
                        </p>
                    </div>

                    <div id="what-pdca" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What is the PDCA cycle in ISO 27001?</h2>
                        <SectionImage
                            src={sectionImages["what-pdca"]}
                            alt="Planning and reviewing an information security management system"
                        />
                        <p style={para(font)}>The PDCA cycle in iso 27001 is a simple loop.</p>
                        <ul style={ul(font)}>
                            <li>Plan your information security management system (ISMS).</li>
                            <li>Do what you planned.</li>
                            <li>Check that it is working.</li>
                            <li>Act on what you learn so you can improve.</li>
                        </ul>
                        <p style={para(font)}>
                            ISO 27001 is built around this structure. The clauses that talk about context, leadership, planning, support and operation sit largely in Plan and Do. The clauses on performance evaluation and improvement sit in Check and Act.
                        </p>
                        <p style={para(font)}>
                            When people skip or rush parts of the PDCA cycle in iso 27001, they often end up with a lot of documents but very little change in how security is managed day to day.
                        </p>
                    </div>

                    <div id="why-matters" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why PDCA matters more than a controls checklist</h2>
                        <SectionImage
                            src={sectionImages["why-matters"]}
                            alt="Cybersecurity controls and systems monitoring"
                        />
                        <p style={para(font)}>
                            It is easy to fall into the habit of treating ISO 27001 as an Annex A checklist. You go through the 93 controls, decide which ones apply, and write a few policies to match.
                        </p>
                        <p style={para(font)}>
                            The problem is that without the PDCA cycle in iso 27001, controls become a static list. You may have a password policy, an access control procedure, a backup process and an incident form, but:
                        </p>
                        <ul style={ul(font)}>
                            <li>Risks are not reviewed regularly.</li>
                            <li>Controls are not adjusted as the business changes.</li>
                            <li>Incidents are closed, but the system does not really learn from them.</li>
                        </ul>
                        <p style={para(font)}>
                            The plan do check act iso 27001 approach is there to keep everything moving. It is less about perfection at the start and more about a consistent way to review and refine how you protect information over time.
                        </p>
                        <p style={para(font)}>
                            If you ignore the PDCA cycle in iso 27001, you risk treating certification as a badge rather than a working management system.
                        </p>
                    </div>

                    <div id="plan" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Plan – setting up your ISMS with intention</h2>
                        <SectionImage src={sectionImages.plan} alt="Team planning ISMS scope, risks and objectives" />
                        <p style={para(font)}>
                            In the planning phase of the PDCA cycle in iso 27001, you decide what your ISMS is actually about.
                        </p>
                        <p style={para(font)}>Key activities here include:</p>
                        {planActivities.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            The quality of your planning shapes everything that follows. A rushed or generic Plan stage leads to an ISMS full of controls that do not really match your risks.
                        </p>
                    </div>

                    <div id="do" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Do – putting controls into practice</h2>
                        <SectionImage src={sectionImages.do} alt="Implementing information security controls in daily work" />
                        <p style={para(font)}>
                            The Do phase of the PDCA cycle in iso 27001 is where the theory either becomes reality or stays in the manual.
                        </p>
                        <p style={para(font)}>Typical activities include:</p>
                        <ul style={ul(font)}>
                            {doActivities.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            This is where you move from “we say we do this” to “we can show that we do this”. If the Do stage is weak, the PDCA cycle in iso 27001 breaks early and Check has nothing solid to work with.
                        </p>
                    </div>

                    <div id="check" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Check – measuring whether your ISMS works</h2>
                        <SectionImage src={sectionImages.check} alt="Monitoring ISMS performance with metrics and audits" />
                        <p style={para(font)}>The Check phase of the PDCA cycle in iso 27001 is about evidence.</p>
                        <p style={para(font)}>You are asking: “Is what we planned actually happening, and is it effective?”</p>
                        <p style={para(font)}>Key activities here:</p>
                        {checkActivities.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            The PDCA cycle in iso 27001 depends heavily on this stage. Many organisations write good plans and implement reasonable controls, but only do a light touch Check. They may hold a brief management review and a basic internal audit once a year, without really digging into patterns.
                        </p>
                        <p style={para(font)}>
                            This is also the phase where a central approach to audits and evidence helps. If internal audits, findings and actions are scattered across spreadsheets and email, it becomes much harder to see how well the system is really working.
                        </p>
                    </div>

                    <div id="act" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Act – fixing problems and improving the ISMS</h2>
                        <SectionImage src={sectionImages.act} alt="Team reviewing findings and improving the ISMS" />
                        <p style={para(font)}>
                            The Act phase is often the most neglected part of the PDCA cycle in iso 27001, yet it is where genuine improvement happens.
                        </p>
                        <p style={para(font)}>Here you:</p>
                        {actActivities.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            When the Act phase is taken seriously, the PDCA cycle in iso 27001 becomes a routine. Small, regular changes are made throughout the year instead of a burst of activity just before an external audit.
                        </p>
                    </div>

                    <div id="mistakes" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common mistakes with the PDCA cycle in ISO 27001</h2>
                        <SectionImage src={sectionImages.mistakes} alt="Common pitfalls when running an ISO 27001 PDCA cycle" />
                        <p style={para(font)}>There are some familiar patterns that break the PDCA cycle in iso 27001:</p>
                        {mistakes.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            These issues leave you with a certificate on the wall, but a management system that does not add much value.
                        </p>
                    </div>

                    <div id="daily" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Making the PDCA cycle part of daily work</h2>
                        <SectionImage
                            src={sectionImages.daily}
                            alt="Embedding information security into everyday team routines"
                        />
                        <p style={para(font)}>
                            The PDCA cycle in iso 27001 works best when it is woven into normal business activities rather than treated as something separate.
                        </p>
                        <p style={para(font)}>Some practical ways to do that:</p>
                        <ul style={ul(font)}>
                            {dailyWays.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            Tools can help here. An internal audit programme that follows the PDCA cycle in iso 27001, supported by ISO audit management software, makes it easier to plan audits, track findings and follow up actions without losing the thread between cycles. The aim is not more paperwork, but clearer oversight and a more consistent way to improve.
                        </p>
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
                                Making PDCA Practical with iAudit ISO Audit Management Software
                            </h2>
                            <p style={greenPara(font)}>
                                Managing the PDCA cycle in iso 27001 becomes harder when your audit data, findings and corrective actions are scattered across spreadsheets, emails and shared drives.
                            </p>
                            <p style={greenPara(font)}>
                                That is why we built iAudit Global. It is ISO audit management software designed around the PDCA cycle, so your audit programme, findings, actions and evidence all live in one place.
                            </p>
                            <p style={greenPara(font)}>Your audit data stays with your organisation. We have no access to it.</p>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                If you want to see how a structured approach to PDCA can work in practice, we are running a pilot programme for organisations managing ISO 27001 and other management system audits.
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
                                Co-founder, iAudit Global
                            </p>
                        </div>
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Bringing it all together</h2>
                        <p style={para(font)}>
                            The PDCA cycle in iso 27001 is not a theoretical model. It is the basic rhythm that keeps an ISMS alive.
                        </p>
                        <p style={para(font)}>
                            Plan with a clear view of your business and risks. Do what you said you would do in a way people can actually follow. Check using evidence from monitoring, audits and reviews. Act on what you find so that controls, processes and behaviour improve over time.
                        </p>
                        <p style={para(font)}>
                            If you look at your current ISO 27001 work and find that most effort sits in Plan and Do, with light Check and almost no Act, then the cycle is not complete. Strengthening those last two stages is often where the real gains in security and resilience appear, and where audits start to confirm progress rather than expose surprises.
                        </p>
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
                                Helping teams turn ISO 27001 into a living ISMS through practical PDCA cycles.
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
                            Helping teams turn ISO 27001 into a living ISMS through practical PDCA cycles.
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
                <FAQAccordion
                    items={faqItems}
                    heading="Frequently asked questions about the PDCA cycle in ISO 27001"
                    sparkleText="Support"
                />
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
        fontSize: "0.95rem",
        lineHeight: 1.75,
        margin: "0 0 0.85rem",
        fontFamily: font,
        position: "relative",
    };
}
