"use client";

import React, { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE = "/images/blog-auditor-training.webp";
const PDCA_URL = "/pdca-cycle-audit-software";
const ISO9001_URL = "/standards/iso-9001-audit-management-software";
const ISO14001_URL = "/standards/iso-14001-audit-management-software";
const ISO45001_URL = "/standards/iso-45001-audit-management-software";
const BUILT_BY_AUDITORS_URL = "/audit-management-software-built-by-auditors";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=480&fit=crop&q=80&fm=webp",
    how: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=480&fit=crop&q=80&fm=webp",
    improvement:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What Is an ISO Internal Audit Report?" },
    { id: "why", label: "Why Your Audit Report Matters" },
    { id: "how", label: "How to Write an ISO Internal Audit Report" },
    { id: "mistakes", label: "Common Mistakes to Avoid" },
    { id: "template", label: "A Simple Audit Report Template" },
    { id: "free-template", label: "Free ISO 9001 Audit Report Template" },
    { id: "improvement", label: "Turning Reports into Improvement" },
    { id: "practice", label: "Put Better Reporting into Practice" },
];

const findingTypes = [
    "Conformities",
    "Nonconformities",
    "Opportunities for improvement",
    "Positive observations or good practice",
];

const templateSections = [
    "Audit details",
    "Audit objective",
    "Audit scope",
    "Audit criteria",
    "Evidence collected",
    "Audit findings",
    "Nonconformities",
    "Opportunities for improvement",
    "Corrective actions",
    "Audit conclusion",
    "Auditor sign off",
];

const commonMistakes = [
    "Writing conclusions before presenting evidence. Readers should always be able to understand how the auditor reached each finding.",
    'Describing observations in vague terms such as "insufficient", "poor" or "not satisfactory" without explaining exactly what was observed.',
    "Issuing reports weeks after the audit, which often leads to forgotten details, slower corrective actions and reduced momentum.",
    "Focusing entirely on nonconformities while ignoring areas of good performance.",
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

function TemplateDownloadBox({ isMobile, font }: { isMobile: boolean; font: string }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError("");

        const trimmedEmail = email.trim().toLowerCase();
        const fullName = trimmedEmail.split("@")[0]?.replace(/[._-]+/g, " ").trim() || "Template Download";

        try {
            const response = await fetch("/api/checklist-leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email: trimmedEmail,
                    checklistName: "ISO 9001:2015 Clause Audit Report Template",
                    industrySlug: "blog-iso-audit-report",
                    industryTitle: "How to Write an ISO Internal Audit Report",
                }),
            });

            const data = (await response.json()) as { error?: string };
            if (!response.ok) {
                setError(data.error ?? "Something went wrong. Please try again.");
                return;
            }

            setSubmitted(true);
        } catch {
            setError("Unable to submit right now. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                background: "linear-gradient(145deg, #f4fbf7 0%, #ffffff 55%, #f8fafc 100%)",
                borderRadius: "1.1rem",
                border: "1px solid rgba(0,102,68,0.18)",
                padding: isMobile ? "1.5rem 1.25rem" : "2rem 2rem",
                margin: "1.5rem 0 1.25rem",
                boxShadow: "0 8px 28px rgba(0,102,68,0.08)",
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    background: "rgba(0,102,68,0.08)",
                    color: "#006644",
                    borderRadius: "999px",
                    padding: "3px 12px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    fontFamily: font,
                }}
            >
                Free download
            </span>
            <h3
                style={{
                    fontSize: isMobile ? "1.25rem" : "1.45rem",
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: 1.3,
                    margin: "0 0 0.75rem",
                    fontFamily: font,
                }}
            >
                Free ISO 9001:2015 Clause Audit Report Template
            </h3>
            <p style={{ ...para(font), margin: "0 0 1rem" }}>
                Save time and create audit reports with confidence.
            </p>
            <p style={{ ...para(font), margin: "0 0 1.25rem" }}>
                Download our free ISO Internal Audit Report Template, designed by auditors to help you document evidence, record findings and structure your reports consistently.
            </p>

            {submitted ? (
                <div
                    style={{
                        background: "rgba(0,102,68,0.06)",
                        borderRadius: "0.875rem",
                        border: "1px solid rgba(0,102,68,0.14)",
                        padding: "1.1rem 1.25rem",
                    }}
                >
                    <p style={{ margin: "0 0 0.5rem", fontSize: "1.05rem", fontWeight: 600, color: "#006644", fontFamily: font }}>
                        Thank you for your request!
                    </p>
                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>
                        Our team will review your request and send the ISO Internal Audit Report Template directly to your email address. Please allow up to 24 hours for delivery. If you don&apos;t receive it, please check your spam folder or contact us at{" "}
                        <a href="mailto:support@iaudit.global" style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>support@iaudit.global</a>.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.875rem", maxWidth: "480px" }}>
                    <label style={{ display: "grid", gap: "0.35rem" }}>
                        <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#374151", fontFamily: font }}>
                            Enter your work email to download your free template.
                        </span>
                        <input
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.8rem 0.95rem",
                                borderRadius: "0.625rem",
                                border: "1px solid #d1d5db",
                                fontSize: "0.95rem",
                                fontFamily: font,
                                boxSizing: "border-box",
                            }}
                        />
                    </label>
                    {error ? <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.88rem", fontFamily: font }}>{error}</p> : null}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            background: "linear-gradient(135deg, #058c42 0%, #006644 100%)",
                            color: "#fff",
                            padding: "0.85rem 1.4rem",
                            borderRadius: "999px",
                            fontWeight: 600,
                            fontSize: "0.92rem",
                            border: "none",
                            cursor: loading ? "wait" : "pointer",
                            fontFamily: font,
                            width: isMobile ? "100%" : "auto",
                        }}
                    >
                        {loading ? "Submitting..." : "Download Free Template"}
                    </button>
                </form>
            )}
        </div>
    );
}

export default function IsoAuditReportBlogContent() {
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
                    alt="How to write an ISO internal audit report that matters"
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
                        Audit Reporting
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            August 19, 2026
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            9 Min Read
                        </span>
                    </div>
                </div>
            </div>

            <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: 0, zIndex: 40 }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.5rem", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "0.79rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: font }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back To Blog
                    </Link>
                    {isMobile && (
                        <button onClick={() => setTocOpen((v) => !v)} style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "1px solid #e8e4df", borderRadius: "6px", padding: "4px 10px", cursor: "pointer", color: "#374151", fontSize: "0.79rem", fontFamily: font }}>
                            Contents
                        </button>
                    )}
                </div>
                {isMobile && tocOpen && (
                    <div style={{ background: "#fff", borderBottom: "1px solid #e8e4df", padding: "0.875rem 1.25rem", display: "flex", flexDirection: "column", gap: "1px" }}>
                        {tocItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", background: isActive ? "rgba(0,102,68,0.07)" : "transparent", border: "none", borderLeft: isActive ? "3px solid #006644" : "3px solid transparent", padding: "0.45rem 0.75rem", borderRadius: "0 5px 5px 0", cursor: "pointer", fontSize: "0.84rem", color: isActive ? "#006644" : "#6B7280", fontWeight: isActive ? 600 : 400, fontFamily: font, lineHeight: 1.4 }}>
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "210px 1fr 240px", gap: isMobile ? "2rem" : "3rem", alignItems: "start" }}>
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#374151", margin: "0 0 0.625rem", fontFamily: font }}>Contents</p>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "1px", background: "#e4e0db" }} />
                            <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                {tocItems.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button key={item.id} onClick={() => scrollTo(item.id)} style={{ textAlign: "left", border: "none", padding: "0.48rem 0.625rem 0.48rem 1.5rem", cursor: "pointer", fontSize: "0.845rem", fontFamily: font, lineHeight: 1.38, color: isActive ? "#006644" : "#6B7280", fontWeight: isActive ? 600 : 400, background: isActive ? "rgba(0,102,68,0.06)" : "transparent", borderRadius: "0 6px 6px 0", borderLeft: isActive ? "2px solid #006644" : "2px solid transparent" }}>
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>
                )}

                <article>
                    <h1 style={{ fontSize: isMobile ? "2.15rem" : "2.85rem", fontWeight: 600, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1rem", fontFamily: font }}>
                        How to Write an ISO Internal Audit Report That Your Next Auditor Will Appreciate
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={para(font)}>
                            Most organisations invest time planning an internal audit, interviewing people, reviewing records and gathering evidence. Then, right at the end, they rush the report.
                        </p>
                        <p style={para(font)}>That is often where the real value of the audit is either preserved or lost.</p>
                        <p style={para(font)}>
                            A well written internal audit report does far more than record what happened on the day. It provides objective evidence of how your management system is performing, gives management a clear picture of where improvements are needed, and becomes one of the first documents a certification auditor is likely to review.
                        </p>
                        <p style={para(font)}>
                            If you are wondering how to write an ISO internal audit report, the answer is not to make it longer. It is to make it clearer, evidence based and focused on helping the organisation improve.
                        </p>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What Is an ISO Internal Audit Report?</h2>
                        <SectionImage src={sectionImages.what} alt="What is an ISO internal audit report" />
                        <p style={para(font)}>
                            An ISO internal audit report is the formal record of an internal audit. It brings together the audit objectives, scope, evidence collected, findings, conclusions and any corrective actions that need to follow.
                        </p>
                        <p style={para(font)}>Think of it as the bridge between the audit itself and continual improvement.</p>
                        <p style={para(font)}>
                            Your notes might remind you what you saw during the audit, but the report explains what those observations mean for the management system. It becomes part of the organisation&apos;s documented information and provides a record that management, process owners and future auditors can all rely on.
                        </p>
                        <p style={para(font)}>
                            Whether you are auditing quality, environmental or occupational health and safety management systems, understanding how to write an ISO internal audit report is an essential auditing skill.
                        </p>
                    </div>

                    <div id="why" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Your Audit Report Matters More Than You Think</h2>
                        <p style={para(font)}>A good audit report is not written for the auditor. It is written for the people who need to act on its findings.</p>
                        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {[
                                "Management uses it to understand whether processes are working as intended.",
                                "Process owners use it to address nonconformities and improve performance.",
                                "Certification auditors use previous internal audit reports to understand how effectively the organisation monitors its own management system.",
                            ].map((item) => (
                                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            Most importantly, the report keeps the audit moving through the improvement cycle. Findings should not simply be recorded and forgotten. They should lead to corrective actions, verification and measurable improvement. This is exactly where the{" "}
                            <Link href={PDCA_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                PDCA Cycle Audit Software
                            </Link>{" "}
                            approach becomes valuable, connecting audit findings with meaningful follow up rather than treating the report as the final step.
                        </p>
                    </div>

                    <div id="how" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>How to Write an ISO Internal Audit Report</h2>
                        <SectionImage src={sectionImages.how} alt="How to write an ISO internal audit report with clear evidence" />
                        <p style={para(font)}>
                            Writing a useful report is less about producing pages of text and more about presenting clear evidence that supports your conclusions.
                        </p>

                        <h3 style={h3(font)}>Start with the audit objective and scope</h3>
                        <p style={para(font)}>Begin by explaining why the audit was carried out.</p>
                        <p style={para(font)}>
                            Include the audit objective, scope, audit criteria, locations, dates and the people involved. This gives readers the context they need before reviewing the findings.
                        </p>
                        <p style={para(font)}>
                            A clear scope also prevents confusion later. Anyone reading the report should immediately understand what was audited and, just as importantly, what was outside the scope.
                        </p>

                        <h3 style={h3(font)}>Record evidence, not opinions</h3>
                        <p style={para(font)}>One of the easiest ways to weaken an audit report is to replace evidence with opinion.</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1rem 0 1.25rem" }}>
                            <div style={{ background: "rgba(220,38,38,0.05)", borderRadius: "0.75rem", padding: "1rem 1.15rem", border: "1px solid rgba(220,38,38,0.14)" }}>
                                <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#dc2626", fontFamily: font }}>Avoid</p>
                                <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.65, fontFamily: font, fontStyle: "italic" }}>
                                    &ldquo;Staff appear unfamiliar with the procedure.&rdquo;
                                </p>
                            </div>
                            <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.75rem", padding: "1rem 1.15rem", border: "1px solid rgba(0,102,68,0.14)" }}>
                                <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#006644", fontFamily: font }}>Write instead</p>
                                <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.65, fontFamily: font, fontStyle: "italic" }}>
                                    &ldquo;Two of the five employees interviewed could not explain the documented inspection procedure, and no recent training records were available.&rdquo;
                                </p>
                            </div>
                        </div>
                        <p style={para(font)}>
                            The second example allows anyone reading the report to understand exactly what was observed and why the finding was raised.
                        </p>
                        <p style={para(font)}>
                            Evidence should come from interviews, observations, records, documents and sampling. Every finding should be supported by objective evidence.
                        </p>

                        <h3 style={h3(font)}>Clearly describe every finding</h3>
                        <p style={para(font)}>Every finding should tell a complete story.</p>
                        <p style={para(font)}>
                            Explain what requirement was being assessed, what evidence was reviewed and whether the requirement was met.
                        </p>
                        <p style={para(font)}>Depending on the audit, your findings may include:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {findingTypes.map((item, i, arr) => (
                                <div key={item} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            Not every report should focus only on problems. Recognising effective practices helps organisations understand what is working well and encourages consistency across different teams or sites.
                        </p>

                        <h3 style={h3(font)}>Reference the relevant ISO requirements</h3>
                        <p style={para(font)}>Good reports make it easy for readers to understand why a finding matters.</p>
                        <p style={para(font)}>
                            Where appropriate, reference the relevant clause within the applicable standard or your own documented procedures.
                        </p>
                        <p style={para(font)}>
                            Whether you are auditing a quality management system using{" "}
                            <Link href={ISO9001_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                ISO 9001 Management Software
                            </Link>
                            , an environmental management system using{" "}
                            <Link href={ISO14001_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                ISO 14001 Management Software
                            </Link>
                            , or an occupational health and safety management system using{" "}
                            <Link href={ISO45001_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                ISO 45001 Management Software
                            </Link>
                            , linking findings to the relevant requirements makes corrective actions much easier to prioritise.
                        </p>

                        <h3 style={h3(font)}>Finish with clear conclusions and corrective actions</h3>
                        <p style={para(font)}>
                            The conclusion should provide an overall assessment of the management system rather than simply repeating individual findings.
                        </p>
                        <p style={para(font)}>Ask yourself:</p>
                        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {[
                                "Is the process effective?",
                                "Are the identified issues isolated or recurring?",
                                "Do they represent a wider risk to the management system?",
                            ].map((item) => (
                                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>•</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            Every nonconformity should then be linked to an agreed corrective action, an assigned owner and a realistic completion date.
                        </p>
                        <p style={para(font)}>An audit only delivers value when improvements are implemented and verified.</p>
                    </div>

                    <div id="mistakes" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Common Mistakes That Make Audit Reports Less Useful</h2>
                        <p style={para(font)}>Even experienced auditors can fall into habits that reduce the value of their reports.</p>
                        {commonMistakes.map((item) => (
                            <div key={item} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #d97706" }}>
                                <p style={{ margin: 0, color: "#374151", fontSize: "0.92rem", lineHeight: 1.68, fontFamily: font }}>{item}</p>
                            </div>
                        ))}
                    </div>

                    <div id="template" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>A Simple ISO Internal Audit Report Template</h2>
                        <p style={para(font)}>
                            If you are learning how to write an ISO internal audit report, following a consistent structure makes the process much easier.
                        </p>
                        <p style={para(font)}>A practical report template should include:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {templateSections.map((item, i, arr) => (
                                <div key={item} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ minWidth: "22px", height: "22px", borderRadius: "50%", background: "rgba(0,102,68,0.1)", color: "#006644", fontSize: "0.7rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>{i + 1}</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>
                            The exact format may vary between organisations, but keeping this structure consistent helps management review reports more efficiently and makes future audits easier to compare.
                        </p>
                    </div>

                    <div id="free-template" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <TemplateDownloadBox isMobile={isMobile} font={font} />
                    </div>

                    <div id="improvement" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Turning Audit Reports into Continual Improvement</h2>
                        <SectionImage src={sectionImages.improvement} alt="Turning ISO internal audit reports into continual improvement" />
                        <p style={para(font)}>
                            One thing I still see is organisations doing excellent audit work, only to lose control once the report has been written.
                        </p>
                        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {[
                                "Evidence is stored in one folder.",
                                "Photographs sit on someone's phone.",
                                "Corrective actions end up in spreadsheets.",
                                "Reports are saved as Word documents with different versions being emailed around the business.",
                            ].map((item) => (
                                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                                    <span style={{ color: "#dc2626", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✕</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>By the next audit, everyone is trying to piece the story back together.</p>
                        <p style={para(font)}>That is one of the reasons we built iAudit Global.</p>
                        <p style={para(font)}>
                            Rather than treating reporting as a separate task, we designed the platform to support the entire audit process. Auditors can capture evidence as they work, attach photographs directly to findings, assign corrective actions before leaving site, automatically generate professional Word and PDF reports, and track findings through to verification.
                        </p>
                        <p style={para(font)}>
                            Everything remains connected within the audit programme instead of becoming another disconnected document.
                        </p>
                        <p style={para(font)}>
                            That approach reflects the principles behind{" "}
                            <Link href={BUILT_BY_AUDITORS_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                Built by Auditors
                            </Link>{" "}
                            and supports organisations that want to move beyond paperwork towards meaningful continual improvement through{" "}
                            <Link href={PDCA_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                PDCA Cycle Audit Software
                            </Link>
                            .
                        </p>
                    </div>

                    <div id="practice" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Put Better Audit Reporting into Practice</h2>
                        <p style={para(font)}>
                            Learning how to write an ISO internal audit report is only part of the process. The real value comes from what happens after the report is written.
                        </p>
                        <p style={para(font)}>
                            A good report should create a clear record of what was assessed, the evidence that supports each finding and the corrective actions needed to strengthen your management system.
                        </p>
                        <p style={para(font)}>
                            When reports are structured, evidence based and followed through to completion, they become a driver for continual improvement rather than another document filed away after the audit.
                        </p>
                        <p style={para(font)}>That is exactly why we built iAudit Global.</p>
                        <p style={para(font)}>
                            Built by auditors for auditors, iAudit Global helps you manage the entire audit process in one place.
                        </p>
                        <p style={para(font)}>
                            Capture evidence during the audit, attach photographs to findings, assign corrective actions, generate professional Word and PDF reports, and track every action through to verification.
                        </p>
                        <p style={para(font)}>
                            Instead of juggling spreadsheets, documents and email chains, everything stays connected within a single audit programme.
                        </p>
                        <p style={para(font)}>
                            If you&apos;re looking to move beyond manual audit reporting, start your free 14 day trial and see how iAudit Global can help you simplify ISO audits while keeping the focus on what really matters: continual improvement.
                        </p>

                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h3 style={{ fontSize: isMobile ? "1.35rem" : "1.55rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 1rem", fontFamily: font, position: "relative" }}>
                                Write audit reports that drive real improvement
                            </h3>
                            <p style={greenPara(font)}>
                                Start your free 14 day trial of iAudit Global and see how evidence capture, automated reporting and corrective action tracking keep your audit programme connected from finding to verification.
                            </p>
                            <a href="https://www.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font }}>
                                Start Your Free 14 Day Trial
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
                        <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "2rem 1.5rem", textAlign: "center" }}>
                            <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    overflow: "hidden", margin: "0 auto 1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>

                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>Mathew Chiweda</p>
                            <p style={{ margin: "0 0 1.1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance across complex operational environments and multiple sectors.
                            </p>
                            <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.8rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
                                Free consultation
                            </Link>
                        </div>
                    </aside>
                )}

                {isMobile && (
                    <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "1.75rem 1.5rem", textAlign: "center" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundImage: 'url("/images/mathew-chiweda.webp")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    overflow: "hidden", margin: "0 auto 0.875rem", display: "flex", alignItems: "center", justifyContent: "center" }}>

                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>Mathew Chiweda</p>
                        <p style={{ margin: "0 0 1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive experience across quality, health and safety, environmental management and auditing, he supports organisations in implementing practical management systems, conducting effective audits and improving performance across complex operational environments and multiple sectors.
                            </p>
                        <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
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
    return { fontSize: "1.6rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font };
}

function h3(font: string): React.CSSProperties {
    return { fontSize: "1.2rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.01em", lineHeight: 1.3, margin: "1.5rem 0 0.625rem", fontFamily: font };
}

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}

function greenPara(font: string): React.CSSProperties {
    return { color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font };
}
