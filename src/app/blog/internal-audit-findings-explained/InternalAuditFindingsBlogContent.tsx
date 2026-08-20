"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";

const HERO_IMAGE = "/images/blog-auditor-training.webp";
const AUDIT_REPORT_BLOG_URL = "/blog/how-to-write-an-iso-internal-audit-report-that-matters";

const sectionImages: Record<string, string> = {
    what: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=480&fit=crop&q=80&fm=webp",
    positive: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
    connected: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "what", label: "What Are Internal Audit Findings?" },
    { id: "classifying", label: "Why Classifying Findings Matters" },
    { id: "positive", label: "Positive Findings" },
    { id: "observation", label: "Observation" },
    { id: "ofi", label: "Opportunity for Improvement (OFI)" },
    { id: "nc", label: "Nonconformity (NC)" },
    { id: "comparison", label: "Observation vs OFI vs NC" },
    { id: "lead-somewhere", label: "Every Finding Should Lead Somewhere" },
    { id: "connected", label: "Keep Findings Connected" },
    { id: "improvement", label: "Turning Findings Into Improvement" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const positiveExamples = [
    "Excellent housekeeping standards across production areas",
    "Consistently completed pre-start safety inspections",
    "Strong document control with no outdated procedures found during sampling",
    "Employees demonstrating a clear understanding of emergency procedures",
];

const classificationBenefits = [
    "Corrective actions are proportionate to the issue",
    "Management understands where the biggest risks exist",
    "Improvement opportunities are captured before they become problems",
    "Audit reports become far more useful for decision making",
];

const findingFollowUps = [
    { type: "Nonconformity", action: "Should trigger corrective action." },
    { type: "Observation", action: "Should prompt the organisation to review potential risks." },
    { type: "Opportunity for Improvement", action: "Should encourage better ways of working." },
    { type: "Positive findings", action: "Should be shared so successful practices can be repeated elsewhere." },
];

const comparisonRows = [
    {
        finding: "Positive Finding",
        requirement: "Yes",
        correctiveAction: "No",
        purpose: "Recognise good practice",
    },
    {
        finding: "Observation",
        requirement: "Yes, but future risk exists",
        correctiveAction: "Usually recommended",
        purpose: "Prevent future issues",
    },
    {
        finding: "Opportunity for Improvement",
        requirement: "Yes",
        correctiveAction: "Optional",
        purpose: "Improve an already effective process",
    },
    {
        finding: "Nonconformity",
        requirement: "No",
        correctiveAction: "Yes",
        purpose: "Restore conformity",
    },
];

const faqItems = [
    {
        question: "What are the different types of internal audit findings?",
        answer:
            "Internal audit findings are usually categorised as nonconformities (NCs), observations, opportunities for improvement (OFIs), and positive findings. Each category communicates something different about the management system, from identifying failures against requirements to recognising good practices and improvement opportunities.",
    },
    {
        question: "What is the difference between a nonconformity and an observation in an internal audit?",
        answer:
            "A nonconformity means objective evidence shows that a requirement has not been fulfilled. An observation does not identify a current failure but highlights a potential weakness that could become a problem if it is not addressed. The key difference is whether the requirement has already failed or whether there is a risk of future failure.",
    },
    {
        question: "What is an Opportunity for Improvement (OFI) in an ISO audit?",
        answer:
            "An Opportunity for Improvement (OFI) identifies an area where a process already meets requirements but could become more effective, efficient or controlled. Unlike a nonconformity, an OFI does not require corrective action. It is used to encourage continual improvement within the management system.",
    },
    {
        question: "Should auditors always raise a nonconformity when they find an issue?",
        answer:
            "No. Not every issue identified during an audit is a nonconformity. Auditors should classify findings based on objective evidence. If a requirement has not been met, a nonconformity may be appropriate. If the process meets requirements but could improve, an OFI may be more suitable. The purpose of an audit is not to find as many nonconformities as possible. It is to provide an accurate picture of system performance.",
    },
    {
        question: "What information should be included in an ISO internal audit finding?",
        answer:
            "A well-written audit finding should include the relevant ISO requirement or audit criteria, objective evidence collected during the audit, the area or process affected, a clear description of the finding, and any required follow-up actions where applicable. Good findings are factual, specific and easy for management to understand.",
    },
    {
        question: "How can organisations manage internal audit findings more effectively?",
        answer:
            "Organisations can manage findings more effectively by keeping evidence, findings, corrective actions and follow-up activities connected in one place. Audit management platforms such as iAudit Global help organisations manage ISO 9001, ISO 14001 and ISO 45001 audit findings by providing structured workflows for recording findings, tracking actions and monitoring audit performance.",
    },
    {
        question: "Why are positive findings important in an internal audit report?",
        answer:
            "Positive findings are important because audits should provide a balanced view of the management system. Recognising effective processes, good practices and strong controls helps organisations understand what is working well and allows successful approaches to be shared across teams or locations.",
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

function FindingExampleBox({
    title,
    children,
    accent = "#006644",
}: {
    title?: string;
    children: React.ReactNode;
    accent?: string;
}) {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "0.875rem",
                border: "1px solid #e8e4df",
                padding: "1.25rem 1.35rem",
                margin: "1.25rem 0",
                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                borderTop: `4px solid ${accent}`,
            }}
        >
            {title ? (
                <p
                    style={{
                        margin: "0 0 1rem",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: accent,
                        fontFamily: '"Pp Neue Montreal", sans-serif',
                    }}
                >
                    {title}
                </p>
            ) : null}
            {children}
        </div>
    );
}

function DataTable({
    headers,
    rows,
    isMobile,
}: {
    headers: string[];
    rows: string[][];
    isMobile: boolean;
}) {
    if (isMobile) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {rows.map((row) => (
                    <div
                        key={row[0]}
                        style={{
                            background: "#f9f7f4",
                            borderRadius: "0.625rem",
                            padding: "0.875rem 1rem",
                            border: "1px solid #f0ede8",
                        }}
                    >
                        {headers.map((header, index) => (
                            <div key={header} style={{ marginBottom: index < headers.length - 1 ? "0.5rem" : 0 }}>
                                <p
                                    style={{
                                        margin: "0 0 0.15rem",
                                        fontSize: "0.72rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        color: "#6B7280",
                                        fontFamily: '"Pp Neue Montreal", sans-serif',
                                    }}
                                >
                                    {header}
                                </p>
                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: "0.92rem",
                                        color: "#111827",
                                        lineHeight: 1.55,
                                        fontFamily: '"Pp Neue Montreal", sans-serif',
                                    }}
                                >
                                    {row[index]}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div style={{ overflowX: "auto" }}>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    fontSize: "0.92rem",
                }}
            >
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                style={{
                                    textAlign: "left",
                                    padding: "0.75rem 0.875rem",
                                    borderBottom: "2px solid #e8e4df",
                                    color: "#111827",
                                    fontWeight: 700,
                                    fontSize: "0.82rem",
                                    letterSpacing: "0.02em",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.join("-")}>
                            {row.map((cell, index) => (
                                <td
                                    key={`${row[0]}-${headers[index]}`}
                                    style={{
                                        padding: "0.8rem 0.875rem",
                                        borderBottom: "1px solid #f0ede8",
                                        color: index === 0 ? "#111827" : "#374151",
                                        fontWeight: index === 0 ? 600 : 400,
                                        lineHeight: 1.55,
                                        verticalAlign: "top",
                                    }}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function InternalAuditFindingsBlogContent() {
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
                    alt="Internal audit findings explained: NC, OFI, observation and positive findings"
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
                        Audit Findings
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            August 19, 2026
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: font }}>
                            8 Min Read
                        </span>
                    </div>
                </div>
            </div>

            <div style={{ borderBottom: "1px solid #e8e4df", backgroundColor: "#f9f7f4", position: "sticky", top: 0, zIndex: 40 }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.5rem", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "0.79rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: font }}>
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
                        Internal Audit Findings Explained: NC, OFI, Observation &amp; Positive Findings
                    </h1>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.25rem 1.5rem", margin: "0 0 1.25rem" }}>
                            <p style={{ ...para(font), margin: "0 0 0.75rem" }}>
                                Internal audit findings help organisations understand whether their management systems are working effectively and where improvement is needed. During an ISO audit, findings are typically classified as Nonconformities (NCs), Observations, Opportunities for Improvement (OFIs), or Positive Findings.
                            </p>
                            <p style={{ ...para(font), margin: "0 0 0.75rem" }}>
                                A Nonconformity identifies where a requirement has not been met. An Observation highlights a potential future risk. An Opportunity for Improvement identifies ways to strengthen an existing process, while Positive Findings recognise effective practices that should be maintained.
                            </p>
                            <p style={{ ...para(font), margin: "0 0 0.75rem" }}>
                                Managing these findings properly is essential for ISO 9001, ISO 14001 and ISO 45001 continual improvement. iAudit Global is an ISO audit management software platform built by auditors to help organisations plan audits, capture evidence, manage findings, track corrective actions and maintain visibility across their audit programmes.
                            </p>
                            <p style={{ ...para(font), margin: 0 }}>
                                By keeping audit findings connected from identification through to follow-up, organisations can move beyond compliance paperwork and use audits as a practical tool for improving performance.
                            </p>
                        </div>

                        <p style={para(font)}>
                            One of the questions that comes up regularly during internal audits is surprisingly simple.
                        </p>
                        <p style={{ ...para(font), fontStyle: "italic", color: "#111827" }}>
                            &ldquo;Should this be raised as a nonconformity, an observation or an opportunity for improvement?&rdquo;
                        </p>
                        <p style={para(font)}>The answer isn&apos;t always obvious.</p>
                        <p style={para(font)}>
                            Not every issue deserves a nonconformity, and not every process that meets the requirements should be left without comment. Good auditors don&apos;t categorise findings based on instinct. They follow the evidence and decide what that evidence is actually telling them.
                        </p>
                        <p style={para(font)}>
                            Understanding the difference between a Nonconformity (NC), an Opportunity for Improvement (OFI), an Observation and a Positive Finding helps produce better audit reports and, more importantly, better decisions after the audit.
                        </p>
                    </div>

                    <div id="what" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>What Are Internal Audit Findings?</h2>
                        <SectionImage src={sectionImages.what} alt="What are internal audit findings in ISO audits" />
                        <p style={para(font)}>
                            An audit finding is the outcome of comparing objective evidence against the audit criteria.
                        </p>
                        <p style={para(font)}>
                            The evidence might come from interviews, records, observations, site inspections or sampled activities. Once you&apos;ve gathered that evidence, your job is to determine whether the process conforms to the requirements, presents a potential risk or offers an opportunity to improve.
                        </p>
                        <p style={para(font)}>Every finding should answer one simple question:</p>
                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.1rem 1.35rem", margin: "1rem 0 1.25rem" }}>
                            <p style={{ margin: 0, fontSize: "1rem", color: "#111827", lineHeight: 1.7, fontWeight: 600, fontFamily: font }}>
                                What does the evidence tell us?
                            </p>
                        </div>
                        <p style={para(font)}>
                            That&apos;s why findings should always be factual. Assumptions, opinions and guesswork have no place in an audit report.
                        </p>
                        <p style={para(font)}>
                            If you&apos;re unsure how findings fit into the overall reporting process, read our guide on writing an ISO internal audit report.
                        </p>
                        <p style={para(font)}>
                            <Link href={AUDIT_REPORT_BLOG_URL} style={{ color: "#006644", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 500 }}>
                                How to Write an ISO Internal Audit Report That Matters
                            </Link>
                        </p>
                    </div>

                    <div id="classifying" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Why Classifying Findings Correctly Matters</h2>
                        <p style={para(font)}>It&apos;s tempting to think that every issue should become a nonconformity.</p>
                        <p style={para(font)}>
                            The opposite can happen too. Auditors sometimes avoid raising a nonconformity because it feels easier to record it as an observation instead.
                        </p>
                        <p style={para(font)}>Neither approach helps the organisation.</p>
                        <p style={para(font)}>When findings are classified correctly:</p>
                        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {classificationBenefits.map((item) => (
                                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>
                            The purpose of an internal audit isn&apos;t to find faults. It&apos;s to provide an accurate picture of how well the management system is working.
                        </p>
                    </div>

                    <div id="positive" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Positive Findings</h2>
                        <SectionImage src={sectionImages.positive} alt="Positive findings in internal ISO audits" />
                        <p style={para(font)}>Not every audit finding needs to highlight a weakness.</p>
                        <p style={para(font)}>
                            Positive findings recognise processes that are working particularly well or demonstrate good practice.
                        </p>
                        <p style={para(font)}>Examples might include:</p>
                        <div style={{ background: "#fff", borderRadius: "0.875rem", border: "1px solid #e8e4df", padding: "0.25rem 1.25rem", margin: "1rem 0 1.25rem" }}>
                            {positiveExamples.map((item, i, arr) => (
                                <div key={item} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.875rem 0", borderBottom: i < arr.length - 1 ? "1px solid #f0ede8" : "none" }}>
                                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                                    <p style={{ margin: 0, fontSize: "0.95rem", color: "#374151", lineHeight: 1.65, fontFamily: font }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <p style={para(font)}>Recording positive findings does more than acknowledge good work.</p>
                        <p style={para(font)}>
                            It gives management confidence that effective controls are in place and provides examples that can often be shared across other departments or sites.
                        </p>
                        <p style={para(font)}>
                            An audit should reflect both strengths and weaknesses. If a report only contains problems, it rarely gives a balanced view of the organisation.
                        </p>
                    </div>

                    <div id="observation" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Observation</h2>
                        <p style={para(font)}>
                            An observation identifies something that isn&apos;t currently a nonconformity but could become one if it&apos;s ignored.
                        </p>
                        <p style={para(font)}>Think of it as an early warning.</p>
                        <p style={para(font)}>
                            For example, imagine training records are fully up to date. During the audit, however, you discover there&apos;s no formal process for reminding managers when refresher training is due.
                        </p>
                        <p style={para(font)}>Today, everyone remains competent.</p>
                        <p style={para(font)}>Six months from now, several qualifications may have expired.</p>
                        <p style={para(font)}>That&apos;s an observation.</p>
                        <p style={para(font)}>
                            Nothing has failed yet, but there&apos;s a weakness that deserves attention before it develops into a larger issue.
                        </p>
                        <p style={para(font)}>
                            Observations encourage organisations to act proactively rather than react after a problem has already occurred.
                        </p>
                    </div>

                    <div id="ofi" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Opportunity for Improvement (OFI)</h2>
                        <p style={para(font)}>An Opportunity for Improvement is different.</p>
                        <p style={para(font)}>The requirement has already been met.</p>
                        <p style={para(font)}>The process works.</p>
                        <p style={para(font)}>You&apos;ve simply identified a practical way to make it work even better.</p>
                        <p style={para(font)}>For example:</p>

                        <FindingExampleBox title="Example OFI" accent="#006644">
                            <DataTable
                                isMobile={isMobile}
                                headers={["ID", "Clause", "Area", "Opportunity"]}
                                rows={[["OFI-01", "ISO 9001 Clause 9.1", "Performance Monitoring", "Improve KPI tracking through automated dashboards."]]}
                            />
                        </FindingExampleBox>

                        <p style={para(font)}>The existing process remains compliant.</p>
                        <p style={para(font)}>
                            The suggested improvement could increase efficiency, improve visibility or reduce unnecessary effort.
                        </p>
                        <p style={para(font)}>
                            OFIs often create the greatest long-term value because they encourage continual improvement instead of waiting for weaknesses to appear.
                        </p>
                    </div>

                    <div id="nc" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Nonconformity (NC)</h2>
                        <p style={para(font)}>
                            A nonconformity is raised when objective evidence shows that a requirement has not been fulfilled.
                        </p>
                        <p style={para(font)}>That&apos;s the important part.</p>
                        <p style={para(font)}>A nonconformity isn&apos;t based on opinion or expectation.</p>
                        <p style={para(font)}>It&apos;s based on evidence.</p>
                        <p style={para(font)}>
                            For example, if your calibration procedure requires measuring equipment to be calibrated every 12 months and sampled equipment is found to be overdue, the evidence demonstrates that the requirement hasn&apos;t been met.
                        </p>
                        <p style={para(font)}>Your finding should clearly identify:</p>
                        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
                            {["The requirement", "The objective evidence", "Why the requirement has not been fulfilled"].map((item) => (
                                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: font }}>
                                    <span style={{ color: "#dc2626", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>•</span>
                                    <p style={{ margin: 0, fontSize: "0.975rem", color: "#374151", lineHeight: 1.7, fontFamily: font }}>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <p style={para(font)}>For example:</p>

                        <FindingExampleBox title="Example Nonconformity" accent="#dc2626">
                            <DataTable
                                isMobile={isMobile}
                                headers={["ID", "Clause", "Area", "Statement", "Due Date"]}
                                rows={[["NCR-01", "ISO 9001 Clause 5.1", "Improvement", "Improvement targets were not clearly defined or monitored.", "30 April 2026"]]}
                            />
                        </FindingExampleBox>

                        <p style={para(font)}>Notice what&apos;s missing.</p>
                        <p style={para(font)}>The auditor hasn&apos;t prescribed the solution.</p>
                        <p style={para(font)}>The report identifies the issue.</p>
                        <p style={para(font)}>The organisation decides how it will correct it.</p>
                    </div>

                    <div id="comparison" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Observation vs OFI vs NC</h2>
                        <p style={para(font)}>If you&apos;re unsure how to classify a finding, this simple comparison usually helps.</p>

                        <FindingExampleBox title="Finding comparison guide">
                            <DataTable
                                isMobile={isMobile}
                                headers={["Finding", "Does the requirement meet the standard?", "Corrective Action Required?", "Purpose"]}
                                rows={comparisonRows.map((row) => [row.finding, row.requirement, row.correctiveAction, row.purpose])}
                            />
                        </FindingExampleBox>

                        <p style={para(font)}>
                            Rather than asking &ldquo;What type of finding do I want to raise?&rdquo;, ask yourself:
                        </p>
                        <div style={{ background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.1rem 1.35rem", margin: "1rem 0 1.25rem" }}>
                            <p style={{ margin: 0, fontSize: "1rem", color: "#111827", lineHeight: 1.7, fontWeight: 600, fontFamily: font, fontStyle: "italic" }}>
                                &ldquo;What does the evidence support?&rdquo;
                            </p>
                        </div>
                        <p style={para(font)}>The answer is usually much clearer.</p>
                    </div>

                    <div id="lead-somewhere" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Every Finding Should Lead Somewhere</h2>
                        <p style={para(font)}>One mistake I see is treating audit findings as the end of the process.</p>
                        <p style={para(font)}>They aren&apos;t.</p>
                        <p style={para(font)}>Every finding should lead to a decision.</p>
                        {findingFollowUps.map((item) => (
                            <div key={item.type} style={{ background: "#fff", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
                                <p style={{ margin: "0 0 0.25rem", fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: font }}>{item.type}</p>
                                <p style={{ margin: 0, color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.68, fontFamily: font }}>{item.action}</p>
                            </div>
                        ))}
                        <p style={para(font)}>
                            That&apos;s how audits contribute to continual improvement rather than becoming another compliance exercise.
                        </p>
                        <p style={para(font)}>
                            If your audit programme follows the PDCA cycle, each finding naturally feeds into the next stage of improvement.
                        </p>
                    </div>

                    <div id="connected" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Keep Findings Connected</h2>
                        <SectionImage src={sectionImages.connected} alt="Keeping internal audit findings connected from evidence to follow-up" />
                        <p style={para(font)}>
                            As audit programmes grow, keeping findings connected to evidence, corrective actions and reporting becomes much harder if everything is spread across spreadsheets, Word documents and email threads.
                        </p>
                        <p style={para(font)}>
                            Having one place to record findings, assign actions and monitor progress makes it much easier to ensure nothing gets overlooked.
                        </p>
                        <p style={para(font)}>
                            That&apos;s exactly why we built iAudit Global around the way auditors actually work, keeping every stage of the audit process connected from planning through to follow-up.
                        </p>
                    </div>

                    <div id="improvement" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <h2 style={h2(font)}>Turning Audit Findings Into Real Improvement</h2>
                        <p style={para(font)}>Every audit finding tells a story.</p>
                        <p style={para(font)}>Sometimes that story is about a requirement that hasn&apos;t been met.</p>
                        <p style={para(font)}>Sometimes it&apos;s about a process that could become a future risk.</p>
                        <p style={para(font)}>Sometimes it&apos;s about an opportunity to improve.</p>
                        <p style={para(font)}>And sometimes it&apos;s about recognising something that&apos;s already working exceptionally well.</p>
                        <p style={para(font)}>
                            The important part isn&apos;t choosing the most serious category.
                        </p>
                        <p style={para(font)}>It&apos;s choosing the category that best reflects the evidence.</p>
                        <p style={para(font)}>
                            When findings are objective, clearly explained and followed through properly, audits stop becoming paperwork and start becoming a practical tool for continual improvement.
                        </p>
                        <p style={para(font)}>
                            If you&apos;d like to improve the way your organisation manages audit findings, corrective actions and reporting across ISO 9001, ISO 14001 or ISO 45001, we&apos;d be happy to help.
                        </p>

                        <div style={{ background: "linear-gradient(145deg, #002e1d 0%, #006644 55%, #058c42 100%)", borderRadius: "1.25rem", padding: isMobile ? "1.75rem 1.35rem" : "2.25rem 2rem", position: "relative", overflow: "hidden", marginTop: "1.5rem" }}>
                            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                            <h3 style={{ fontSize: isMobile ? "1.35rem" : "1.55rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 1rem", fontFamily: font, position: "relative" }}>
                                Manage audit findings from evidence to follow-up
                            </h3>
                            <p style={greenPara(font)}>
                                Start a free 14-day trial of iAudit Global and see how structured finding workflows, corrective action tracking and connected audit reporting help your team turn every NC, OFI and observation into real improvement.
                            </p>
                            <a href="https://www.iaudit.global/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#006644", padding: "0.85rem 1.4rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", position: "relative", fontFamily: font }}>
                                Start your free trial
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
                            <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "linear-gradient(135deg, #002e1d, #006644)", margin: "0 auto 1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1.05rem", fontFamily: font }}>iAudit Global Team</p>
                            <p style={{ margin: "0 0 1.1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                            <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />
                            <p style={{ margin: "0 0 1.75rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                                Helping audit teams classify findings correctly and turn NCs, OFIs and observations into meaningful improvement.
                            </p>
                            <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.8rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
                                Book Consultation
                            </Link>
                        </div>
                    </aside>
                )}

                {isMobile && (
                    <div style={{ background: "#fff", borderRadius: "1.1rem", border: "1px solid #e8e4df", padding: "1.75rem 1.5rem", textAlign: "center" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #002e1d, #006644)", margin: "0 auto 0.875rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <p style={{ margin: "0 0 0.3rem", fontWeight: 700, color: "#111827", fontSize: "1rem", fontFamily: font }}>iAudit Global Team</p>
                        <p style={{ margin: "0 0 1rem", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: font }}>Author</p>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, fontFamily: font }}>
                            Helping audit teams classify findings correctly and drive continual improvement.
                        </p>
                        <Link href="/contact" style={{ display: "block", background: "#3d5a47", color: "#fff", padding: "0.75rem 1rem", borderRadius: "999px", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: font }}>
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
    return { fontSize: "1.6rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font };
}

function para(font: string): React.CSSProperties {
    return { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: font };
}

function greenPara(font: string): React.CSSProperties {
    return { color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: font };
}
