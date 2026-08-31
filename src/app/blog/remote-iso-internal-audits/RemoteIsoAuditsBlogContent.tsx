"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&h=480&fit=crop&q=80&fm=webp",
    when: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&h=480&fit=crop&q=80&fm=webp",
    weaker: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=480&fit=crop&q=80&fm=webp",
    planning: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    tools: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=480&fit=crop&q=80&fm=webp",
    challenges: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=480&fit=crop&q=80&fm=webp",
    evidence: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    pdca: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What Are Remote ISO Internal Audits?" },
    { id: "when", label: "When Remote Audits Make Sense" },
    { id: "planning", label: "Planning in a Risk Based Way" },
    { id: "tools", label: "Tools and Evidence" },
    { id: "challenges", label: "Challenges Auditors Face" },
    { id: "evidence", label: "Collecting Evidence" },
    { id: "pdca", label: "Using PDCA for Remote Programmes" },
    { id: "iaudit", label: "Making Remote Audits Easier" },
    { id: "conclusion", label: "Conclusion" },
];

const workWellItems = [
    {
        title: "The process already lives in systems and documents",
        text: "If most of the work happens in software, forms or workflows, a screen share will usually show you what you need. Reviewing policies, procedures and documented information is often more efficient remotely, because everyone can see the same version on screen and navigate quickly.",
    },
    {
        title: "You are checking how electronic systems are used",
        text: "For example, how nonconformities are logged, how records are approved, how access rights are managed. A user walking you through the system in real time is often clearer than standing behind them on site.",
    },
    {
        title: "You are verifying training and competence records",
        text: "Training matrices, certificates, role profiles and HR records can be reviewed just as well through a shared screen as in a meeting room. The important part is the content and the logic, not where you sit.",
    },
    {
        title: "You are following information security processes, especially for ISO 27001",
        text: "Access control, backups, incident logs, change management systems and monitoring tools are all naturally suited to remote ISO internal audits, because they are digital by design.",
    },
    {
        title: "You need to speak to people who are not all in one place",
        text: "For roles that are office based, hybrid or spread across locations, a remote session may actually give you better access to the right people in one go.",
    },
];

const weakerItems = [
    {
        title: "Housekeeping, layout and safety culture on a busy shopfloor or site",
        text: "A short video clip rarely gives you the same depth as walking the area, noticing what people do when they are not “on show”, or spotting small signs of a strong or weak culture.",
    },
    {
        title: "Use of tools and equipment in high risk environments",
        text: "For tasks with serious safety implications, you may need to see how people work, how supervision is done and how controls are applied in real time, not just how they are described.",
    },
    {
        title: "Storage and labelling of materials and waste",
        text: "Details around segregation, labelling, condition, access routes and signage are far easier to judge in person than through a handheld camera.",
    },
];

const planningBasics = [
    "Define the objectives. Why are you auditing this process now?",
    "Set the scope and criteria. Which locations, activities and requirements are in scope?",
    "Consider risks. What could go wrong if you tried to audit this process remotely?",
];

const planningThinkThrough = [
    "Which parts of the process you can see effectively through documents, screens and conversations",
    "Which parts really need eyes on the ground",
    "Whether the people you need are comfortable and equipped to join remote sessions",
    "How you will manage time zones if you are covering different regions",
];

const typicalTools = [
    "Video conferencing for interviews and virtual tours",
    "Screen sharing to see systems in real time",
    "Secure file sharing for records and screenshots",
    "A central audit system to capture notes, evidence and findings",
];

const evidenceLookFor = [
    "Demonstrations of how a process actually runs, not just written procedures",
    "Records with clear dates, identifiers and links to real work",
    "Visual confirmation where appropriate, for example via a live video walkaround",
];

const challenges = [
    {
        title: "Technology failures.",
        text: "Poor internet, dropped calls and frozen screens can waste time. Have a simple backup plan, such as switching to audio only and sharing documents afterwards.",
    },
    {
        title: "Harder to read the room.",
        text: "On site, you pick up signals from body language and the feel of a workplace. That is much harder through a screen.",
    },
    {
        title: "Selective evidence.",
        text: "There is a risk that auditees only share what they want you to see. Without being physically present, it takes more skill to probe deeper.",
    },
    {
        title: "Video fatigue.",
        text: "Long remote sessions are exhausting for everyone. Shorter blocks with breaks work much better.",
    },
];

const evidenceApproaches = [
    "Screen sharing for reviewing documents, records and system data in real time",
    "Live video walkthroughs where the auditee walks through a site or workspace with a camera",
    "Photographs and videos submitted by auditees, ideally with timestamps and context",
    "Secure file sharing for uploading records, certificates, inspection reports and other evidence",
];

const pdcaItems = [
    {
        title: "Plan",
        text: "Decide which audits will be remote, which will be on site and which will be a mix. Base this on risk, process type and practical factors.",
    },
    {
        title: "Do",
        text: "Conduct the audits using the agreed approach, technology and methods.",
    },
    {
        title: "Check",
        text: "After each cycle, review how the remote ISO internal audits went. Were findings meaningful? Was evidence adequate? Did the technology work?",
    },
    {
        title: "Act",
        text: "Adjust your programme based on what you learned. Move certain processes back to on site if remote did not work. Expand remote coverage where it did.",
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

export default function RemoteIsoAuditsBlogContent() {
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
                    alt="Remote ISO internal audits by video conference"
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
                            April 24, 2026
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
                        Remote ISO Internal Audits: A Practical Guide for Audit Teams
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Remote auditing is no longer something organisations do because they have to. It has become a practical option for internal audit teams managing ISO 9001, ISO 14001, ISO 45001 and ISO 27001 programmes, especially when sites are spread across different locations or countries.
                        </p>
                        <p style={para(font)}>
                            But running remote ISO internal audits well is not as simple as moving from a meeting room to a video call. It takes proper planning, clear communication and the right approach to evidence. This guide looks at what works, what does not, and how to build remote audits into your programme without losing the rigour your management system needs.
                        </p>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What Are Remote ISO Internal Audits?</h2>
                        <SectionImage src={sectionImages.what} alt="Audit team running a remote ISO internal audit by video call" />
                        <p style={para(font)}>
                            In simple terms, remote ISO internal audits are audits conducted without the auditor being physically present at the location being audited. Instead of walking the site, the auditor works through video calls, screen sharing, document reviews and live walkthroughs using a camera or mobile device.
                        </p>
                        <p style={para(font)}>
                            ISO 19011:2018 recognises remote auditing as a valid technique. It is not a shortcut or a lesser version of auditing. When planned properly, it can be just as effective as being on site, particularly for document heavy processes and interviews.
                        </p>
                        <p style={para(font)}>
                            The key difference from remote external audits is that these are your own internal audits. You have more control over how they are run, which gives you flexibility to adapt the approach to what suits your organisation.
                        </p>
                    </div>

                    <div id="when" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>When Remote ISO Internal Audits Make Sense</h2>
                        <SectionImage src={sectionImages.when} alt="Audit team collaborating remotely across locations" />
                        <p style={para(font)}>
                            Remote audits are not second class audits. They are the same work, just using different ways to see and verify what is going on.
                        </p>
                        <h3 style={h3(font)}>Where Remote Audits Work Well</h3>
                        <p style={para(font)}>Remote ISO internal audits tend to work best where:</p>
                        {workWellItems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}

                        <h3 style={h3(font)}>Where Remote Methods Are Weaker</h3>
                        <SectionImage src={sectionImages.weaker} alt="Shopfloor activity that is harder to judge through a remote audit" />
                        <p style={para(font)}>
                            Remote methods become weaker when your judgement depends heavily on what you see, hear and feel in the physical environment, for example:
                        </p>
                        {weakerItems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            In practice, many organisations are moving towards a hybrid model. Office based parts of the audit are done remotely, high risk physical activities are checked in person, and some processes alternate between remote and on site from one cycle to the next. The key is to decide this consciously, not at the last minute.
                        </p>
                    </div>

                    <div id="planning" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Planning Remote ISO Internal Audits in a Risk Based Way</h2>
                        <SectionImage src={sectionImages.planning} alt="Planning a risk based remote ISO internal audit programme" />
                        <p style={para(font)}>The planning step makes or breaks remote work.</p>
                        <p style={para(font)}>Start with the basics from ISO 19011:</p>
                        <ul style={ul(font)}>
                            {planningBasics.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>Then think through:</p>
                        <ul style={ul(font)}>
                            {planningThinkThrough.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            Remote ISO internal audits should be a planned part of your audit programme, not an emergency choice when nobody is available to travel. A simple rule of thumb is to make the remote or on site decision at the planning stage, record your reasoning, and be ready to explain it to external auditors if asked.
                        </p>
                    </div>

                    <div id="tools" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Tools and Evidence for Remote ISO Internal Audits</h2>
                        <SectionImage src={sectionImages.tools} alt="Screen sharing and video tools used in a remote ISO audit" />
                        <p style={para(font)}>
                            You do not need an exotic tech stack to run good remote ISO internal audits, but you do need to be deliberate.
                        </p>
                        <p style={para(font)}>Typical tools include:</p>
                        <ul style={ul(font)}>
                            {typicalTools.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>The bigger issue is the quality of evidence, not the platform. During remote audits, you should still look for:</p>
                        <ul style={ul(font)}>
                            {evidenceLookFor.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            You also need to think about confidentiality and data protection. Avoid sensitive evidence being shared over personal email or chat apps. Set simple rules up front about how information will be exchanged and where it will be stored.
                        </p>
                    </div>

                    <div id="challenges" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Challenges Auditors Face During Remote ISO Audits</h2>
                        <SectionImage src={sectionImages.challenges} alt="Audit team managing technology challenges during a remote session" />
                        <p style={para(font)}>Remote ISO internal audits are not without their problems. Common issues include:</p>
                        <ul style={ul(font)}>
                            {challenges.map((item) => (
                                <li key={item.title}>
                                    <strong style={{ color: "#111827" }}>{item.title}</strong> {item.text}
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            None of these are reasons to avoid remote ISO internal audits. They are reasons to plan them properly, be honest about their limits and balance them with on site work where it matters.
                        </p>
                    </div>

                    <div id="evidence" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Collecting Evidence During Remote Audits</h2>
                        <SectionImage src={sectionImages.evidence} alt="Reviewing audit records and evidence during a remote session" />
                        <p style={para(font)}>
                            Evidence is what separates an audit from a conversation. During remote ISO internal audits, you need to be more deliberate about how you collect and verify it.
                        </p>
                        <p style={para(font)}>Practical approaches include:</p>
                        <ul style={ul(font)}>
                            {evidenceApproaches.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            The most important point is to verify what you are seeing. Ask follow up questions. Request additional records. Cross check what you are told with what the documents show. The same principles apply as on site, you just need to be more intentional about it.
                        </p>
                    </div>

                    <div id="pdca" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Using PDCA for Remote Audit Programmes</h2>
                        <SectionImage src={sectionImages.pdca} alt="Reviewing a remote audit programme using the PDCA cycle" />
                        <p style={para(font)}>
                            The PDCA cycle applies to remote audits just as it does to any other part of your management system.
                        </p>
                        {pdcaItems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            Over time, this gives you a programme that is practical, balanced and based on evidence rather than habit.
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
                                Making Remote Audits Easier with the Right Tools
                            </h2>
                            <p style={greenPara(font)}>
                                Managing remote ISO internal audits across multiple sites using emails, spreadsheets and shared folders gets messy fast. Findings end up in different documents. Evidence sits on someone&apos;s laptop. Actions get lost.
                            </p>
                            <p style={greenPara(font)}>
                                That is one of the reasons we built iAudit Global. It is ISO audit management software designed around the PDCA cycle, where your checklists, findings, evidence and actions all sit in one place, whether the audit is remote or on site.
                            </p>
                            <p style={greenPara(font)}>Your audit data stays with your organisation. We have no access to it.</p>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                If you are looking for a simpler way to manage your audit programme, we are running a pilot. You can register your interest here.
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

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Conclusion</h2>
                        <p style={para(font)}>
                            Remote ISO internal audits are here to stay. They offer real benefits when planned well and used for the right processes, but they are not a replacement for on site audits where physical verification matters.
                        </p>
                        <p style={para(font)}>
                            The key is good planning, clear communication, proper evidence collection and a PDCA approach that helps you refine the programme over time. Get those right and remote audits become a practical, permanent part of how you manage your ISO programme, not a compromise you only use when you have no other choice.
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
