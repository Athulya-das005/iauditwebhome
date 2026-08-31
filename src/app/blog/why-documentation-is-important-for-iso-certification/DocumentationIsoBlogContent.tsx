"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    audits: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    memory: "https://images.unsplash.com/photo-1568667256549-094345857637?w=900&h=480&fit=crop&q=80&fm=webp",
    problems: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&h=480&fit=crop&q=80&fm=webp",
    "internal-audits":
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    practical: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What Documentation Really Means" },
    { id: "audits", label: "Why It Matters in Certification Audits" },
    { id: "memory", label: "Documentation as System Memory" },
    { id: "problems", label: "Common Documentation Problems" },
    { id: "internal-audits", label: "How Internal Audits Support Documentation" },
    { id: "practical", label: "Making Documentation Work for You" },
    { id: "iaudit", label: "Where ISO Audit Software Helps" },
    { id: "conclusion", label: "Bringing It Together" },
];

const documentedIdeas = [
    {
        title: "What you say you will do",
        text: "Policies, processes, procedures, work instructions, plans and specifications.",
    },
    {
        title: "Proof of what actually happened",
        text: "Records such as forms, logs, inspection reports, training records, meeting minutes and monitoring results.",
    },
];

const auditPractical = [
    "It shows that your processes are defined, not made up on the spot.",
    "It demonstrates that you meet your own and your customers’ requirements.",
    "It provides proof that monitoring, inspections, training or reviews actually happened.",
];

const memoryShows = [
    "How you used to do something",
    "What went wrong",
    "What you changed",
    "How you now do it instead",
];

const problems = [
    {
        title: "Outdated procedures",
        text: "Documents say one thing, the real process is different. Auditors see this very quickly when they interview staff or watch work being done.",
    },
    {
        title: "Multiple versions across sites",
        text: "Each location has its own “tweaked” copy of a procedure. No one is sure which is current or who approved which change.",
    },
    {
        title: "Sparse or selective records",
        text: "Only “good days” are recorded. Inspection or monitoring records are missing for busy periods or problem times.",
    },
    {
        title: "Over-documentation",
        text: "Long manuals nobody reads. Critical instructions are hidden in dense text, so staff rely on memory and habit instead.",
    },
    {
        title: "No clear ownership",
        text: "Nobody is responsible for reviewing or updating key documents, so they drift out of date without anyone noticing.",
    },
];

const internalAuditDoes = [
    "Compare what documents say to what people actually do",
    "Check whether records match reality on the ground",
    "Highlight where documentation is unclear, missing or no longer relevant",
];

const practicalSteps = [
    {
        title: "Start with risk and importance",
        text: "Focus first on documenting processes where failure has serious consequences for customers, safety, environment or security.",
    },
    {
        title: "Keep documents short and clear",
        text: "Write so that the people who use them can understand and follow them, not to impress an auditor.",
    },
    {
        title: "Assign ownership",
        text: "Make sure each key document has a named owner responsible for keeping it under review.",
    },
    {
        title: "Make the current version easy to find",
        text: "Staff should not have to guess which folder or email has the latest copy.",
    },
    {
        title: "Feed audit findings back into documents",
        text: "When internal or external audits highlight issues, update the relevant procedures, forms or records, not just the corrective action log.",
    },
];

const softwareHelps = [
    "Linking findings directly to the documents and records they relate to",
    "Keeping audit evidence, photos, notes and reports in one structured trail",
    "Supporting clause mapped checklists that prompt auditors to review the right documented information",
    "Showing how documents and controls change over time as part of the PDCA cycle",
];

const togetherPoints = [
    "It makes your way of working visible and understandable",
    "It provides evidence that you do what you say you do",
    "It allows your organisation to learn and improve over time",
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

export default function DocumentationIsoBlogContent() {
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
                    alt="ISO documented information and records for certification"
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
                        ISO Certification
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
                            May 1, 2026
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
                        Why Documentation Is Important for ISO Certification
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Most organisations know ISO requires documentation, but there is often confusion about what that really means in practice. Some teams feel buried under paperwork. Others have almost nothing written down and hope that “everyone knows what to do” will be enough.
                        </p>
                        <p style={para(font)}>
                            Understanding why documentation is important for ISO certification is not about ticking a bureaucratic box. It is about making your management system visible, repeatable and defensible when auditors and customers ask, “How do you know this works?”
                        </p>
                        <p style={para(font)}>
                            This article looks at documentation from an auditor’s point of view and explains how it supports internal audits, external certification and real improvement, not just compliance.
                        </p>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What “documentation” really means in ISO standards</h2>
                        <SectionImage src={sectionImages.what} alt="Reviewing ISO policies, procedures and documented information" />
                        <p style={para(font)}>
                            ISO standards now use the term “documented information” rather than “documents” or “records”. In plain language, it covers two big ideas:
                        </p>
                        {documentedIdeas.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            This applies across ISO 9001, 14001, 45001 and 27001. Each standard has some specific documented information it expects, but all of them share the same logic: if something is important to quality, environment, health and safety or information security, there should be a clear way of doing it and evidence that it is being done.
                        </p>
                        <p style={para(font)}>
                            Once you see documentation in that light, it becomes easier to see why documentation is important for ISO certification, regardless of which standard you are working with.
                        </p>
                    </div>

                    <div id="audits" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why documentation is important for ISO certification audits</h2>
                        <SectionImage src={sectionImages.audits} alt="Auditor reviewing ISO records and certification evidence" />
                        <p style={para(font)}>
                            Auditors work with limited time and sample based evidence. They cannot watch every shift, follow every process or stand on every site. They rely heavily on what your documented information tells them.
                        </p>
                        <p style={para(font)}>
                            For external audits, certification bodies regularly report that a high proportion of nonconformities relate to documentation and records: procedures that are out of date, records that are incomplete, or evidence that does not exist at all. Even when day to day practice is reasonable, the lack of documentation makes it hard to prove.
                        </p>
                        <p style={para(font)}>This is where why documentation is important for ISO certification becomes very practical:</p>
                        <ul style={ul(font)}>
                            {auditPractical.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            Without solid documented information, auditors end up guessing whether your system works. That is never a good place to be.
                        </p>
                    </div>

                    <div id="memory" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Documentation as the memory of your management system</h2>
                        <SectionImage src={sectionImages.memory} alt="Organised records keeping the memory of a management system" />
                        <p style={para(font)}>Documentation is more than a snapshot for audit day. It is the memory of your management system.</p>
                        <p style={para(font)}>Good documentation shows:</p>
                        <ul style={ul(font)}>
                            {memoryShows.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            When this memory is scattered across personal laptops, email threads or consultants’ folders, it becomes fragile. If a key person leaves, a consultant’s contract ends or a server is decommissioned, large parts of that memory can quietly disappear.
                        </p>
                        <p style={para(font)}>
                            In that context, why documentation is important for ISO certification is also about continuity. When new people join, when incidents are investigated or when customers challenge you, documentation is what allows the organisation to explain its decisions with confidence rather than relying on “I think we did it like this”.
                        </p>
                    </div>

                    <div id="problems" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common documentation problems that hurt audits</h2>
                        <SectionImage src={sectionImages.problems} alt="Scattered paperwork and version control problems in ISO documentation" />
                        <p style={para(font)}>Most audit findings about documentation fall into a few familiar patterns:</p>
                        {problems.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            These issues explain a lot of why documentation is important for ISO certification. They do not just annoy auditors; they weaken control and make genuine improvement harder.
                        </p>
                    </div>

                    <div id="internal-audits" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How documentation and internal audits support each other</h2>
                        <SectionImage src={sectionImages["internal-audits"]} alt="Internal audit comparing documented procedures with real practice" />
                        <p style={para(font)}>Internal audits are where your documentation is really tested.</p>
                        <p style={para(font)}>A good internal audit will:</p>
                        <ul style={ul(font)}>
                            {internalAuditDoes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            If your documentation is weak, internal auditors spend their time hunting for files and arguing about versions instead of focusing on effectiveness. If it is strong and accessible, they can look at whether the process works, not just whether it is written down.
                        </p>
                        <p style={para(font)}>
                            Seeing internal audits as a rehearsal for certification makes it very clear why documentation is important for ISO certification. If your own auditors cannot easily find and trust your documented information, an external auditor will struggle too.
                        </p>
                    </div>

                    <div id="practical" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Making documentation work for you, not against you</h2>
                        <SectionImage src={sectionImages.practical} alt="Keeping ISO documents short, current and easy to find" />
                        <p style={para(font)}>
                            The goal is not to create as many documents as possible. It is to have the right documented information, in a usable form, under control.
                        </p>
                        <p style={para(font)}>Practical steps include:</p>
                        {practicalSteps.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            Handled this way, documentation is not a burden. It becomes a tool for control and learning, which is at the heart of why documentation is important for ISO certification.
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
                                Where ISO audit management software helps
                            </h2>
                            <p style={greenPara(font)}>
                                Documentation problems grow quickly when evidence and records are spread across different systems, sites and inboxes. It becomes difficult to know which document was in force at the time of an audit, which records relate to which finding, or how actions changed the underlying process.
                            </p>
                            <p style={greenPara(font)}>ISO audit management software can help by:</p>
                            <ul
                                style={{
                                    ...ul(font),
                                    color: "rgba(255,255,255,0.82)",
                                    position: "relative",
                                }}
                            >
                                {softwareHelps.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p style={greenPara(font)}>
                                iAudit Global is ISO audit management software designed specifically for this world. It centralises audit planning, findings, actions and evidence, while your documentation and audit data remain under your organisation’s control. That kind of structure is a very practical answer to why documentation is important for ISO certification in day to day work, not just at recertification time.
                            </p>
                            <p style={{ ...greenPara(font), marginBottom: "1.25rem" }}>
                                If you want to see what that looks like in practice, you can try iAudit free for 14 days.
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
                                Try iAudit free for 14 days
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
                        <h2 style={h2(font)}>Bringing it together</h2>
                        <p style={para(font)}>
                            In the end, why documentation is important for ISO certification comes down to three simple things:
                        </p>
                        <ul style={ul(font)}>
                            {togetherPoints.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            If your documentation supports clear internal audits, traceable decisions and honest reviews, it will also support a strong certification outcome. If it does not, audits will continue to feel like guesswork.
                        </p>
                        <p style={para(font)}>
                            It is worth asking: if you removed the certificate from the wall tomorrow, would your documentation still help you run the business better? If the answer is yes, you are treating it in the right way.
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
