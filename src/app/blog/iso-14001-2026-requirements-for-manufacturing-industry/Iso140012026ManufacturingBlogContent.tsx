"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=480&fit=crop&q=80&fm=webp",
    why: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=480&fit=crop&q=80&fm=webp",
    priority: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&h=480&fit=crop&q=80&fm=webp",
    weak: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=480&fit=crop&q=80&fm=webp",
    prepare: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    start: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=480&fit=crop&q=80&fm=webp",
    shopfloor: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What ISO 14001:2026 Means for Manufacturing" },
    { id: "why", label: "Why the Update Matters" },
    { id: "priority", label: "Priority Areas to Address" },
    { id: "weak", label: "Where Weak Evidence Will Fail" },
    { id: "prepare", label: "How to Prepare for Transition" },
    { id: "start-now", label: "Why Start the Transition Now" },
    { id: "iaudit", label: "How iAudit Global Supports Transition" },
    { id: "cta", label: "Start Your Transition Today" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const whySubsections = [
    {
        title: "Stronger leadership accountability",
        text: "Top management can no longer delegate environmental responsibility to an EHS manager and walk away. The 2026 update requires evidence that leadership is actively using environmental data to make strategic decisions. If your management review is just a tick-box exercise, it will be an easy non-conformance.",
    },
    {
        title: "Greater focus on value chain impacts",
        text: "Your environmental responsibility does not stop at your factory gate. The new standard requires you to consider environmental impacts across your supply chain, including suppliers, contractors, and outsourced processes. If you outsource powder coating or electroplating, you must have evidence that those contractors manage environmental impacts legally.",
    },
    {
        title: "Measurable performance, not vague goals",
        text: 'Environmental objectives like "reduce waste" or "improve energy efficiency" are no longer acceptable. The 2026 update demands specific, measurable targets backed by data. If you cannot show measurable progress, you cannot claim compliance.',
    },
];

const priorityAreas = [
    {
        title: "Environmental aspects and impacts",
        text: "Identifying the environmental aspects of your operations (emissions, effluent, waste, energy use, noise, hazardous materials) and evaluating their significance is still core to the standard. What is new in 2026 is the greater emphasis on life-cycle thinking and value chain impacts. You must consider not just what happens inside your plant, but also upstream (raw materials, suppliers) and downstream (product use, disposal).",
        extra: "If you use chromium plating, you must consider the environmental impact of sourcing chromium, the effluent from your plating process, and what happens to the finished product when it reaches end-of-life. Your aspect register must reflect the full life cycle, not just what happens on-site.",
    },
    {
        title: "Compliance obligations and legal requirements",
        text: "The new standard places a stronger focus on demonstrating compliance, not just documenting it. Auditors will ask for evidence that you are meeting the conditions of your permits, not just that you know what they are.",
        extra: 'If your effluent consent limits pH to 6 to 9, you must have data to prove you are within limits consistently. A file saying you "monitor effluent" is not enough. Auditors will want to see monthly pH logs, trend analysis, and evidence of what you did when limits were breached.',
    },
    {
        title: "Environmental objectives and planning",
        text: 'Vague objectives are no longer acceptable. Objectives must be specific, measurable, time-bound, and tracked with data. Instead of "reduce energy use," your objective must be "reduce energy consumption per unit produced by 5% by Q4 2027, measured monthly via meter readings and reported in management review." You must have the data to prove progress, not just a statement of intent.',
    },
    {
        title: "Operational controls on the shop floor",
        text: "Auditors will check that controls are working in practice, not just documented in procedures. This is where the shift from \"paperwork ISO\" to \"real control\" is most visible.",
        extra: "If you have a chemical storage area, auditors will check bunding integrity, spill kit availability, and proof of regular inspections. They will look for evidence that the controls are maintained, not just that a procedure exists. If the bunding is cracked or the spill kit is missing absorbent, that is a non-conformance, even if your procedure is perfectly written.",
        image: "shopfloor",
    },
    {
        title: "Monitoring and measurement",
        text: "The 2026 update places greater emphasis on using data to drive improvement, not just collecting it. If you monitor environmental performance but never analyse trends or take action, you are not meeting the requirement.",
        extra: "If you monitor VOC emissions from your paint booth, the data must be analysed and used to identify trends. If emissions are increasing, the management review should show that leadership reviewed the data and approved a plan to address it (e.g., equipment maintenance, process changes, or supplier evaluation).",
    },
    {
        title: "Contractor, supplier, and value chain controls",
        text: "Auditors will ask for evidence of environmental performance from key suppliers and contractors. A copy of their ISO 14001 certificate is not enough. You need proof that they manage environmental impacts legally and effectively.",
        extra: "If you outsource powder coating, you must have evidence that the contractor manages hazardous waste legally, complies with air emissions permits, and tracks environmental performance. This could include waste transfer notes, emissions monitoring data, or audit reports.",
    },
];

const faqItems = [
    {
        question: "What are the main changes in ISO 14001:2026 for manufacturing?",
        answer:
            "The main changes focus on moving from environmental intent to measurable performance. For manufacturing, this means a stronger emphasis on data-backed evidence for controlling emissions, effluent, and waste; greater leadership accountability in management reviews; and considering environmental impacts across your entire value chain, including suppliers and contractors.",
    },
    {
        question: "When does my manufacturing company need to transition to ISO 14001:2026?",
        answer:
            "Organisations have a three-year transition window from the publication date in April 2026. This means your manufacturing company must be certified to the new standard by April 2029. We recommend starting your transition planning now to avoid a last-minute scramble.",
    },
    {
        question: "What evidence will auditors look for in ISO 14001:2026 manufacturing audits?",
        answer:
            "Auditors will look for measurable environmental objectives with supporting data, evidence that operational controls on the shop floor are working in practice (e.g., bunding integrity, spill kit availability), monitoring records that are analysed to drive improvement, and proof of how you manage environmental risks with key suppliers and contractors.",
    },
    {
        question: "How should I start my ISO 14001:2026 transition in manufacturing?",
        answer:
            "The best place to start is with a gap analysis. This will help you identify where your current environmental management system falls short of the 2026 requirements. Focus on your objectives, monitoring data, and value chain controls. We are currently offering a free ISO 14001:2026 transition consultation to help manufacturing teams build a clear and practical roadmap.",
    },
    {
        question: "Can audit software help with the ISO 14001:2026 transition?",
        answer:
            "Yes. Purpose-built audit software helps you conduct gap analyses with clause-mapped checklists, capture on-site evidence with mobile devices, track corrective actions to closure, and analyse environmental performance trends. This centralises your evidence and makes the transition process much smoother.",
    },
    {
        question: "What is iAudit Global and how does it support manufacturing?",
        answer:
            "iAudit Global is ISO audit management software built by certified auditors. It helps manufacturing teams move away from spreadsheets by providing a single platform to manage environmental audits. It centralises evidence for traceability, emissions, waste and safety controls, tracks findings to closure using a PDCA workflow, and gives you real-time visibility of performance across all your sites.",
    },
    {
        question: "Does iAudit Global support integrated management systems?",
        answer:
            "Yes. iAudit Global is designed for integrated management systems. You can manage your ISO 9001 (Quality), ISO 14001 (Environmental), and ISO 45001 (Health and Safety) audits all within the same platform, using specific checklists and workflows for each standard.",
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

export default function Iso140012026ManufacturingBlogContent() {
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
                    alt="ISO 14001:2026 requirements for manufacturing industry"
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
                            April 15, 2026
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
                        ISO 14001:2026 requirements for manufacturing industry: what to review first (and how to transition)
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            The new ISO 14001:2026 requirements for the manufacturing industry shift the focus from environmental intent to measurable performance, demanding data-backed evidence for emissions, waste, and resource efficiency. Key changes include a stronger emphasis on leadership accountability, value chain and supplier controls, and setting specific, measurable environmental objectives. Start your transition early with a gap analysis to avoid the last-minute scramble before the 2029 deadline. iAudit Global&apos;s tools support this process with a free 14-day trial at{" "}
                            <a href="https://www.iaudit.global/" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                https://www.iaudit.global/
                            </a>
                            .
                        </p>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What ISO 14001:2026 means for manufacturing companies</h2>
                        <SectionImage src={sectionImages.what} alt="Manufacturing plant environmental management under ISO 14001:2026" />
                        <p style={para(font)}>
                            ISO 14001:2026 was published in April 2026, and manufacturing organisations now have three years to transition from the 2015 edition. If you are responsible for environmental compliance in a manufacturing plant, understanding the ISO 14001:2026 requirements for the manufacturing industry is not optional. It is urgent.
                        </p>
                        <p style={para(font)}>
                            I have been conducting ISO 14001 audits in manufacturing plants since before the 2015 revision. The 2026 update changes something I have been waiting for someone to fix: it stops letting organisations pass audits with good intentions and thin evidence.
                        </p>
                        <p style={para(font)}>
                            This is not a minor update. It represents a fundamental shift from &ldquo;having an environmental policy&rdquo; to &ldquo;proving environmental performance with data.&rdquo; For manufacturing, that shift is significant. Your emissions, effluent, energy use, waste streams, and hazardous materials are now under tighter scrutiny. Auditors will ask for measurable proof that your controls are working, not just that they exist on paper.
                        </p>
                    </div>

                    <div id="why" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why the ISO 14001:2026 update matters for manufacturing operations</h2>
                        <SectionImage src={sectionImages.why} alt="Environmental performance and value chain impacts in manufacturing" />
                        <p style={para(font)}>
                            The ISO 14001:2026 requirements for manufacturing industry are not just about updating your procedures. They are about proving your environmental controls are working with objective data.
                        </p>
                        <p style={para(font)}>
                            The 2026 revision moves the focus from &ldquo;intent&rdquo; to &ldquo;measurable performance.&rdquo; It strengthens expectations around leadership accountability, value chain impacts, and integration with climate action and circular economy principles. For manufacturing, this means auditors will dig deeper into how you manage emissions from your processes, effluent from surface treatment, energy consumption from machinery, and hazardous waste streams.
                        </p>
                        {whySubsections.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.15rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                <p style={para(font)}>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div id="priority" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>ISO 14001:2026 requirements for manufacturing: priority areas to address</h2>
                        <SectionImage src={sectionImages.priority} alt="Priority environmental areas for ISO 14001:2026 in manufacturing" />
                        {priorityAreas.map((item) => (
                            <div key={item.title} style={{ marginBottom: "1.35rem" }}>
                                <h3 style={h3(font)}>{item.title}</h3>
                                {item.image && (
                                    <SectionImage
                                        src={sectionImages[item.image]}
                                        alt="Shop floor operational controls for ISO 14001:2026 manufacturing audits"
                                    />
                                )}
                                <p style={para(font)}>{item.text}</p>
                                {item.extra && <p style={para(font)}>{item.extra}</p>}
                            </div>
                        ))}
                    </div>

                    <div id="weak" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Where weak evidence will fail ISO 14001:2026 audits in manufacturing</h2>
                        <SectionImage src={sectionImages.weak} alt="Common ISO 14001:2026 audit evidence gaps in manufacturing" />
                        <p style={para(font)}>
                            The ISO 14001:2026 requirements for manufacturing industry are designed to close the gap between what organisations say they do and what they can prove they do. Audits will no longer stop at your factory gate. If you outsource electroplating, powder coating, or waste disposal, auditors will ask for evidence that your contractors manage environmental impacts legally.
                        </p>
                        <p style={para(font)}>
                            Management review minutes must demonstrate that leadership is actively using environmental data to make strategic decisions. If your management review is just a tick-box exercise where the EHS manager presents slides and nobody asks questions, it will fail the 2026 standard.
                        </p>
                        <p style={para(font)}>
                            Environmental objectives must be measurable and backed by data. If you cannot show a clear target, a measurement method, and evidence of progress, you cannot claim compliance.
                        </p>
                    </div>

                    <div id="prepare" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to prepare for ISO 14001:2026 transition in manufacturing</h2>
                        <SectionImage src={sectionImages.prepare} alt="Preparing for ISO 14001:2026 transition in manufacturing" />
                        <p style={para(font)}>
                            The transition to ISO 14001:2026 does not have to be overwhelming. Start by conducting a gap analysis to compare your current environmental management system to the 2026 requirements. Identify where evidence is weak: environmental objectives, monitoring data, supplier controls, or management review effectiveness.
                        </p>
                        <p style={para(font)}>
                            Update your environmental aspects and impacts register with a life-cycle and value chain lens. Add supplier and contractor impacts if they are missing. Consider upstream impacts (raw materials, energy sources) and downstream impacts (product use, disposal).
                        </p>
                        <p style={para(font)}>
                            Strengthen your monitoring and measurement by ensuring you have data for energy, waste, emissions, and effluent. Set up automated tracking if you are still using manual logs. The 2026 standard expects data to be analysed and used, not just collected.
                        </p>
                        <p style={para(font)}>
                            Set measurable environmental objectives. Replace vague goals with specific, time-bound, data-driven targets. Link objectives to operational KPIs: waste per unit, energy per tonne, water consumption per shift.
                        </p>
                        <p style={para(font)}>
                            Update your internal audit programme. Train internal auditors on the 2026 changes. Ensure audits check evidence on the shop floor, not just in the office. If your audits never leave the meeting room, they are not checking whether controls are working in practice.
                        </p>
                    </div>

                    <div id="start-now" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why manufacturing companies should start the transition now</h2>
                        <SectionImage src={sectionImages.start} alt="Starting ISO 14001:2026 transition early in manufacturing" />
                        <p style={para(font)}>
                            The three-year transition window sounds generous, but most companies wait until 18 months before their next certification audit. That creates the &ldquo;annual audit drama&rdquo; I have seen for years: rushed documentation, missed gaps, and stressful audits.
                        </p>
                        <p style={para(font)}>
                            I have represented companies through dozens of ISO 14001 certification audits. The ones that struggle all have one thing in common: they wait. The ones that succeed start early and use the transition window to get their evidence in order.
                        </p>
                        <p style={para(font)}>
                            Early movers have time to conduct a proper gap analysis and fix the gaps before the auditor arrives, update audit programmes and checklists to reflect the 2026 requirements, train internal auditors on what has changed, and build the evidence trail so it is ready when the external auditor asks.
                        </p>
                        <p style={para(font)}>
                            If you wait until year three, you will be scrambling. If you start now, you will be ready.
                        </p>
                    </div>

                    <div id="iaudit" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How iAudit Global supports ISO 14001:2026 transition for manufacturing</h2>
                        <p style={para(font)}>
                            The patterns I kept seeing in real audits, fragmented evidence, weak follow-up, repeat non-conformities, are exactly why we started building iAudit Global. We built it to keep the audit trail connected from planning to evidence, to findings, to verified closure.
                        </p>
                        <p style={para(font)}>
                            iAudit supports ISO 14001:2026 transition for manufacturing with gap analysis tools, ISO 14001:2026 checklists that are clause-mapped and built for manufacturing environmental audits, mobile evidence capture to photograph emissions monitors, waste segregation areas, and bunding on-site, Audit Mate AI to generate environmental aspect checklists in seconds, trend dashboards to spot recurring non-conformities across sites, and a PDCA workflow to ensure every finding links to a verified corrective action.
                        </p>
                        <p style={para(font)}>
                            Your audit history stays with your organisation. We operate a strict zero-access policy, so your findings remain private.
                        </p>
                    </div>

                    <div id="cta" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
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
                                Start your ISO 14001:2026 transition today
                            </h2>
                            <p style={greenPara(font)}>
                                If you are rethinking how to prepare your manufacturing team for ISO 14001:2026, we are happy to walk you through how we help organisations get their evidence in order before the auditors arrive.
                            </p>
                            <p style={greenPara(font)}>
                                Start a 14-day free trial with full access to Gap Analysis, ISO 14001:2026 checklists, Findings Dashboard, Data Analytics Summary, and Report Download. No credit card required.
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
                                Visit https://www.iaudit.global/ to get started
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
                                Helping manufacturing teams prepare for ISO 14001:2026 with measurable evidence and practical audit workflows.
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
                            Helping manufacturing teams prepare for ISO 14001:2026 with measurable evidence and practical audit workflows.
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
