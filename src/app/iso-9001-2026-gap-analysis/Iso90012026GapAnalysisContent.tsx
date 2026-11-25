"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

const START_GAP_ANALYSIS_URL = "/iso-audit-assessments/iso-9001-gap-analysis";
const CALENDLY_URL = "https://calendly.com/iauditgloballtd/30min";
const TRIAL_URL = "https://apps.iaudit.global";
const CONTACT_URL = "https://iaudit.global/contact";

const EASE = [0.22, 1, 0.36, 1] as const;

const keyAreas = [
    {
        num: "01",
        clause: "Clause 4",
        title: "Organisational Context & Scope",
        description: "Organisational context and the scope of your quality management system.",
        bullets: [
            "Internal and external issues affecting quality",
            "Needs and expectations of interested parties",
            "Defined boundaries and applicability of the QMS",
        ],
    },
    {
        num: "02",
        clause: "Clause 5",
        title: "Leadership & Quality Policy",
        description: "Leadership, responsibilities and quality policy.",
        bullets: [
            "Top management commitment and accountability",
            "Customer focus and quality policy alignment",
            "Organisational roles, responsibilities and authorities",
        ],
    },
    {
        num: "03",
        clause: "Clause 6",
        title: "Risks, Opportunities & Objectives",
        description: "Risks, opportunities and quality objectives.",
        bullets: [
            "Risk-based thinking and opportunity planning",
            "Measurable quality objectives across functions",
            "Planning of changes to maintain QMS integrity",
        ],
    },
    {
        num: "04",
        clause: "Clause 7",
        title: "Resources, Competence & Information",
        description: "Resources, competence and documented information.",
        bullets: [
            "People, infrastructure and environment for operations",
            "Monitoring and measuring resources & calibration",
            "Competence, awareness and documented information control",
        ],
    },
    {
        num: "05",
        clause: "Clause 8",
        title: "Operational Processes & Supplier Controls",
        description: "Operational processes and supplier controls.",
        bullets: [
            "Operational planning, requirement reviews and design",
            "Control of externally provided processes and suppliers",
            "Production, service provision, release and nonconforming outputs",
        ],
    },
    {
        num: "06",
        clause: "Clause 9",
        title: "Performance, Audits & Management Review",
        description: "Performance evaluation, internal audits and management review.",
        bullets: [
            "Customer satisfaction monitoring and analysis",
            "Structured internal audit programme and reporting",
            "Top management review inputs, outputs and action tracking",
        ],
    },
    {
        num: "07",
        clause: "Clause 10",
        title: "Nonconformities & Continual Improvement",
        description: "Nonconformities, corrective actions and continual improvement.",
        bullets: [
            "Root-cause analysis and corrective action workflows",
            "Verification of corrective action effectiveness",
            "Ongoing suitability, adequacy and enhancement of the QMS",
        ],
    },
];

const steps = [
    {
        num: "01",
        title: "Review your current practices",
        description:
            "Work through the questions using what your organisation actually does and the records available to support it.",
    },
    {
        num: "02",
        title: "Identify gaps",
        description:
            "Highlight areas where requirements may not be fully addressed or where evidence needs a closer review.",
    },
    {
        num: "03",
        title: "Plan your next steps",
        description:
            "Use your findings to decide what to investigate, update or implement, and agree priorities with your team.",
    },
];

const faqItems = [
    {
        question: "1. What is an ISO 9001 gap analysis?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                An ISO 9001 gap analysis compares your organisation’s current quality management practices with the standard’s requirements. It helps identify missing processes, incomplete implementation and areas where supporting evidence needs further review.
            </p>
        ),
    },
    {
        question: "2. Is iAudit’s ISO 9001 gap analysis free?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Yes. You can use iAudit’s free gap analysis to review your quality management system and identify areas requiring attention.
            </p>
        ),
    },
    {
        question: "3. Who should complete the gap analysis?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Quality managers, internal auditors, operations managers and people responsible for ISO 9001 implementation can complete it. Involving colleagues who manage the relevant processes helps ensure the answers reflect how the organisation operates.
            </p>
        ),
    },
    {
        question: "4. What information should I have available?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Useful information includes your quality policy, objectives, process documentation, training records, supplier evaluations, customer feedback, audit findings and management review records. The evidence needed will depend on your organisation’s activities and the scope of its quality management system.
            </p>
        ),
    },
    {
        question: "5. How is a gap analysis different from an internal audit?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                A gap analysis helps identify differences between your current arrangements and specified requirements, often during implementation or transition preparation. An internal audit is a planned, systematic evaluation of conformity and effective implementation. A gap analysis does not automatically fulfil your internal audit requirements.
            </p>
        ),
    },
    {
        question: "6. Can an organisation certified to ISO 9001:2015 use it?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Yes. An organisation working to ISO 9001:2015 can use an assessment against ISO 9001:2026 to identify areas requiring review. Your team should also examine the updated standard and agree transition arrangements with its certification body.
            </p>
        ),
    },
    {
        question: "7. Does completing the gap analysis confirm ISO 9001 compliance?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                No. Results depend on the accuracy and completeness of the information supplied. They support preparation and further investigation, but do not confirm conformity or guarantee certification. Findings should be checked against actual processes and supporting evidence.
            </p>
        ),
    },
];

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
}

export default function Iso90012026GapAnalysisContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        const check = () => {
            const width = window.innerWidth;
            setIsMobile(width < 900);
            setIsNarrow(width < 480);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const primaryBtnStyle: CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.55rem",
        background: "#058c42",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: isNarrow ? "0.92rem" : "1rem",
        padding: isNarrow ? "0.85rem 1.4rem" : "0.95rem 1.85rem",
        borderRadius: "8px",
        transition: "all 0.2s ease",
        boxShadow: "0 6px 20px rgba(5, 140, 66, 0.28)",
        border: "none",
        cursor: "pointer",
    };

    const secondaryBtnStyle: CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.55rem",
        background: "transparent",
        color: "#143528",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: isNarrow ? "0.92rem" : "1rem",
        padding: isNarrow ? "0.85rem 1.4rem" : "0.95rem 1.85rem",
        borderRadius: "8px",
        border: "1.5px solid #d1dcd5",
        transition: "all 0.2s ease",
    };

    return (
        <div
            style={{
                background: "#fbfcfb",
                minHeight: "100vh",
                fontFamily: PP_NEUE_MONTREAL,
                color: "#0d1117",
                overflowX: "hidden",
                width: "100%",
            }}
        >
            {/* 1. Hero Section */}
            <section
                style={{
                    position: "relative",
                    paddingTop: "calc(var(--page-top-offset, 90px) + 3.5rem)",
                    paddingBottom: isMobile ? "4rem" : "6rem",
                    paddingLeft: isNarrow ? "1.25rem" : "2rem",
                    paddingRight: isNarrow ? "1.25rem" : "2rem",
                    background: `
                        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(5, 140, 66, 0.12) 0%, transparent 70%),
                        radial-gradient(ellipse 40% 40% at 85% 20%, rgba(0, 62, 58, 0.08) 0%, transparent 60%),
                        #fbfcfb
                    `,
                    borderBottom: "1px solid #e7efe9",
                }}
            >
                <div
                    style={{
                        maxWidth: "1140px",
                        margin: "0 auto",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Reveal>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(5, 140, 66, 0.1)",
                                border: "1px solid rgba(5, 140, 66, 0.2)",
                                padding: "0.4rem 1rem",
                                borderRadius: "999px",
                                color: "#058c42",
                                fontSize: isNarrow ? "0.78rem" : "0.86rem",
                                fontWeight: 600,
                                letterSpacing: "0.02em",
                                marginBottom: "1.75rem",
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: "#058c42",
                                }}
                            />
                            Built by auditors. Free to use.
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1
                            style={{
                                margin: "0 auto 1.35rem",
                                fontSize: isNarrow ? "2.1rem" : isMobile ? "2.75rem" : "4.1rem",
                                fontWeight: 600,
                                lineHeight: isMobile ? 1.15 : 1.08,
                                letterSpacing: "-0.035em",
                                color: "#0d1117",
                                maxWidth: "960px",
                            }}
                        >
                            Free ISO 9001:2026 Gap Analysis
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p
                            style={{
                                margin: "0 auto 2.25rem",
                                fontSize: isNarrow ? "1.02rem" : isMobile ? "1.1rem" : "1.25rem",
                                lineHeight: 1.65,
                                color: "#4b5563",
                                maxWidth: "760px",
                            }}
                        >
                            Identify where your quality management system needs attention. Review your current practices against ISO 9001:2026 requirements and use your findings to plan what needs to happen next.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: isNarrow ? "column" : "row",
                                gap: "0.85rem",
                                alignItems: "center",
                                justifyContent: "center",
                                width: isNarrow ? "100%" : "auto",
                                marginBottom: "2.75rem",
                            }}
                        >
                            <Link
                                href={START_GAP_ANALYSIS_URL}
                                style={{
                                    ...primaryBtnStyle,
                                    width: isNarrow ? "100%" : "auto",
                                }}
                            >
                                Start free gap analysis
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                            <Link
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    ...secondaryBtnStyle,
                                    width: isNarrow ? "100%" : "auto",
                                }}
                            >
                                Book a consultation
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: isMobile ? "1rem" : "2rem",
                                color: "#006644",
                                fontSize: "0.92rem",
                                fontWeight: 600,
                            }}
                        >
                            <span>✓ No credit card required</span>
                            <span>✓ Complete at your own pace</span>
                            <span>✓ Clear priority recommendations</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 2. What Does the ISO 9001 Gap Analysis Cover? */}
            <section
                style={{
                    padding: isMobile ? "4.5rem 1.25rem" : "6.5rem 2rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <div style={{ maxWidth: "860px", margin: "0 auto 3.5rem", textAlign: isMobile ? "left" : "center" }}>
                    <Reveal>
                        <p
                            style={{
                                margin: "0 0 0.75rem",
                                color: "#058c42",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            QMS Scope & Assessment Areas
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2
                            style={{
                                margin: "0 0 1.25rem",
                                fontSize: isNarrow ? "1.85rem" : isMobile ? "2.25rem" : "3rem",
                                fontWeight: 600,
                                letterSpacing: "-0.03em",
                                lineHeight: 1.15,
                                color: "#0d1117",
                            }}
                        >
                            What Does the ISO 9001 Gap Analysis Cover?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p
                            style={{
                                margin: "0 auto 1.25rem",
                                fontSize: isMobile ? "1.05rem" : "1.15rem",
                                lineHeight: 1.7,
                                color: "#4b5563",
                            }}
                        >
                            A gap analysis compares your existing quality management system with ISO 9001 requirements. It helps you identify what is in place, what is missing and where further evidence or investigation is needed.
                        </p>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "1.05rem",
                                fontWeight: 600,
                                color: "#143528",
                            }}
                        >
                            Review key areas including:
                        </p>
                    </Reveal>
                </div>

                {/* 7 Key Area Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                        gap: "1.35rem",
                        marginBottom: "3rem",
                    }}
                >
                    {keyAreas.map((area, index) => {
                        const isLastSingle = !isMobile && index === keyAreas.length - 1;
                        return (
                            <Reveal key={area.num} delay={index * 0.06}>
                                <div
                                    style={{
                                        background: "#ffffff",
                                        border: "1px solid #e3ebe5",
                                        borderRadius: "14px",
                                        padding: isNarrow ? "1.4rem" : "1.85rem",
                                        boxShadow: "0 4px 18px rgba(16, 47, 32, 0.04)",
                                        height: "100%",
                                        boxSizing: "border-box",
                                        display: "flex",
                                        flexDirection: "column",
                                        ...(isLastSingle ? { gridColumn: "1 / -1", maxWidth: "600px", margin: "0 auto", width: "100%" } : {}),
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.85rem",
                                                fontWeight: 700,
                                                color: "#058c42",
                                                letterSpacing: "0.05em",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {area.clause}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "0.85rem",
                                                fontWeight: 600,
                                                color: "#9ca3af",
                                            }}
                                        >
                                            {area.num}
                                        </span>
                                    </div>
                                    <h3
                                        style={{
                                            margin: "0 0 0.65rem",
                                            fontSize: "1.28rem",
                                            fontWeight: 600,
                                            color: "#0d1117",
                                            letterSpacing: "-0.015em",
                                        }}
                                    >
                                        {area.title}
                                    </h3>
                                    <p
                                        style={{
                                            margin: "0 0 1.15rem",
                                            fontSize: "0.98rem",
                                            lineHeight: 1.6,
                                            color: "#4b5563",
                                        }}
                                    >
                                        {area.description}
                                    </p>
                                    <ul
                                        style={{
                                            margin: "auto 0 0",
                                            padding: 0,
                                            listStyle: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.45rem",
                                            borderTop: "1px solid #f0f4f1",
                                            paddingTop: "0.9rem",
                                        }}
                                    >
                                        {area.bullets.map((bullet) => (
                                            <li
                                                key={bullet}
                                                style={{
                                                    fontSize: "0.88rem",
                                                    color: "#6b7280",
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "0.55rem",
                                                    lineHeight: 1.45,
                                                }}
                                            >
                                                <span style={{ color: "#058c42", fontWeight: 700, lineHeight: 1 }}>•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Concluding callout */}
                <Reveal delay={0.4}>
                    <div
                        style={{
                            background: "linear-gradient(135deg, #f0f7f2 0%, #eaf5ed 100%)",
                            border: "1px solid #d4e7d9",
                            borderRadius: "14px",
                            padding: isMobile ? "1.5rem" : "2rem 2.5rem",
                            textAlign: "center",
                            maxWidth: "920px",
                            margin: "0 auto",
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                fontSize: isNarrow ? "1rem" : "1.12rem",
                                lineHeight: 1.7,
                                color: "#143528",
                                fontWeight: 500,
                            }}
                        >
                            Use the findings to focus your preparation, whether you are developing your system or reviewing an existing one.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* 3. How the Gap Analysis Works */}
            <section
                style={{
                    background: "#ffffff",
                    borderTop: "1px solid #e7efe9",
                    borderBottom: "1px solid #e7efe9",
                    padding: isMobile ? "4.5rem 1.25rem" : "6.5rem 2rem",
                }}
            >
                <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto 3.5rem", textAlign: "center" }}>
                        <Reveal>
                            <p
                                style={{
                                    margin: "0 0 0.75rem",
                                    color: "#058c42",
                                    fontWeight: 600,
                                    fontSize: "0.9rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Step-By-Step Process
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2
                                style={{
                                    margin: "0 0 1.25rem",
                                    fontSize: isNarrow ? "1.85rem" : isMobile ? "2.25rem" : "3rem",
                                    fontWeight: 600,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.15,
                                    color: "#0d1117",
                                }}
                            >
                                How the Gap Analysis Works
                            </h2>
                        </Reveal>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                            gap: "1.75rem",
                            marginBottom: "3.5rem",
                        }}
                    >
                        {steps.map((step, index) => (
                            <Reveal key={step.num} delay={index * 0.1}>
                                <div
                                    style={{
                                        background: "#f9faf8",
                                        border: "1px solid #e5ebe6",
                                        borderRadius: "14px",
                                        padding: isNarrow ? "1.6rem 1.35rem" : "2.2rem 1.75rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        boxSizing: "border-box",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "10px",
                                            background: "rgba(5, 140, 66, 0.1)",
                                            color: "#058c42",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            marginBottom: "1.25rem",
                                        }}
                                    >
                                        {step.num}
                                    </div>
                                    <h3
                                        style={{
                                            margin: "0 0 0.85rem",
                                            fontSize: "1.25rem",
                                            fontWeight: 600,
                                            color: "#0d1117",
                                            letterSpacing: "-0.015em",
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: "0.98rem",
                                            lineHeight: 1.65,
                                            color: "#4b5563",
                                        }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <Reveal delay={0.3}>
                            <Link
                                href={START_GAP_ANALYSIS_URL}
                                style={{
                                    ...primaryBtnStyle,
                                    width: isNarrow ? "100%" : "auto",
                                }}
                            >
                                Start free gap analysis
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 4. Start Your Free Gap Analysis Promo Box */}
            <section
                style={{
                    padding: isMobile ? "4.5rem 1.25rem" : "6.5rem 2rem",
                    maxWidth: "1140px",
                    margin: "0 auto",
                }}
            >
                <Reveal>
                    <div
                        style={{
                            background: "linear-gradient(135deg, #003e3a 0%, #10291d 60%, #041c12 100%)",
                            borderRadius: "20px",
                            padding: isMobile ? "2.75rem 1.5rem" : "4.25rem 3.5rem",
                            textAlign: "center",
                            color: "#ffffff",
                            boxShadow: "0 20px 50px rgba(0, 62, 58, 0.22)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-80px",
                                right: "-80px",
                                width: "240px",
                                height: "240px",
                                borderRadius: "50%",
                                background: "rgba(5, 140, 66, 0.2)",
                                filter: "blur(50px)",
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            style={{
                                position: "relative",
                                zIndex: 1,
                                maxWidth: "720px",
                                margin: "0 auto",
                            }}
                        >
                            <h2
                                style={{
                                    margin: "0 0 1.15rem",
                                    fontSize: isNarrow ? "1.85rem" : isMobile ? "2.25rem" : "3rem",
                                    fontWeight: 600,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.15,
                                    color: "#ffffff",
                                }}
                            >
                                Start Your Free Gap Analysis
                            </h2>
                            <p
                                style={{
                                    margin: "0 auto 2.25rem",
                                    fontSize: isMobile ? "1.05rem" : "1.2rem",
                                    lineHeight: 1.65,
                                    color: "rgba(255, 255, 255, 0.88)",
                                }}
                            >
                                Give your team a clearer starting point for ISO 9001 preparation. Review your quality management system and identify the areas that need further work.
                            </p>
                            <Link
                                href={START_GAP_ANALYSIS_URL}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.55rem",
                                    background: "#058c42",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: isNarrow ? "0.95rem" : "1.05rem",
                                    padding: isNarrow ? "0.9rem 1.6rem" : "1.05rem 2.25rem",
                                    borderRadius: "8px",
                                    transition: "all 0.2s ease",
                                    boxShadow: "0 8px 25px rgba(5, 140, 66, 0.4)",
                                    width: isNarrow ? "100%" : "auto",
                                    boxSizing: "border-box",
                                }}
                            >
                                Start free gap analysis
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* 5. Frequently Asked Questions */}
            <FAQAccordion
                items={faqItems}
                heading="Frequently Asked Questions"
                sparkleText="ISO 9001 FAQ"
            />

            {/* 6. Manage Your ISO Audits with iAudit CTA */}
            <CTA
                backgroundColor="#f4faf6"
                tag="ISO Audit Software"
                title="Manage Your ISO Audits with iAudit"
                description="Manage your ISO audits with iAudit. Start your free 14-day trial or contact us today."
                buttonText="Start Your Free Trial"
                buttonHref={TRIAL_URL}
                secondaryButtonText="Contact Us"
                secondaryButtonHref={CONTACT_URL}
                badges={["14-day free trial", "No credit card required", "Ready-to-use ISO checklists"]}
            />

            {/* Footer */}
            <Footer />
        </div>
    );
}

