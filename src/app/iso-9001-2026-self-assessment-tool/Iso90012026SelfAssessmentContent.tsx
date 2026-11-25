"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

const START_ASSESSMENT_URL = "/iso-audit-assessments/iso-9001-self-assessment";
const CALENDLY_URL = "https://calendly.com/iauditgloballtd/30min";
const TRIAL_URL = "https://apps.iaudit.global";
const CONTACT_URL = "https://iaudit.global/contact";

const EASE = [0.22, 1, 0.36, 1] as const;

const keyAreas = [
    {
        num: "01",
        clause: "Clause 4",
        title: "Context & Scope",
        description: "Your organisation’s context and quality management scope.",
        bullets: [
            "Internal and external factors impacting quality performance",
            "Needs, requirements and expectations of interested parties",
            "Clear boundaries and applicability of your QMS",
        ],
    },
    {
        num: "02",
        clause: "Clause 5",
        title: "Leadership & Responsibility",
        description: "Leadership and responsibility for quality.",
        bullets: [
            "Top management commitment, vision and governance",
            "Quality policy established, communicated and understood",
            "Assigned roles, responsibilities and authorities across teams",
        ],
    },
    {
        num: "03",
        clause: "Clause 6",
        title: "Planning, Risks & Objectives",
        description: "Planning, risks and quality objectives.",
        bullets: [
            "Risk-based thinking and proactive opportunity planning",
            "Measurable, documented quality objectives by department",
            "Systematic management and control of organisational change",
        ],
    },
    {
        num: "04",
        clause: "Clause 7",
        title: "People, Resources & Information",
        description: "People, resources and documented information.",
        bullets: [
            "Competence, skills and training verification",
            "Operational infrastructure, work environment and monitoring equipment",
            "Documented information creation, control and retention",
        ],
    },
    {
        num: "05",
        clause: "Clause 8",
        title: "Operations & Suppliers",
        description: "Day-to-day operations and supplier management.",
        bullets: [
            "Operational planning, customer requirements and review",
            "Evaluation, selection and monitoring of external providers",
            "Process controls, product release and nonconforming outputs",
        ],
    },
    {
        num: "06",
        clause: "Clause 9",
        title: "Performance & Review",
        description: "Performance monitoring and management review.",
        bullets: [
            "Tracking customer satisfaction and process metrics",
            "Internal audit programme planning and execution",
            "Structured management review meetings, inputs and decisions",
        ],
    },
    {
        num: "07",
        clause: "Clause 10",
        title: "Improvement & Actions",
        description: "Corrective action and continual improvement.",
        bullets: [
            "Managing nonconformities and resolving root causes",
            "Verifying the effectiveness of corrective actions",
            "Driving continual improvement throughout the organisation",
        ],
    },
];

const steps = [
    {
        num: "01",
        title: "Answer the questions",
        description:
            "Review the key areas of your quality management system using your knowledge of current practices.",
    },
    {
        num: "02",
        title: "Review your results",
        description:
            "Identify the areas your responses suggest are established and those that may need attention.",
    },
    {
        num: "03",
        title: "Decide what to investigate",
        description:
            "Use the results to guide discussions with your team and identify priorities for a more detailed review.",
    },
];

const faqItems = [
    {
        question: "1. What is an ISO 9001 self-assessment?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                An ISO 9001 self-assessment is a review of your quality management practices against relevant areas of the standard. Your answers help you understand your current position and identify matters that may need further investigation.
            </p>
        ),
    },
    {
        question: "2. Is iAudit’s ISO 9001 self-assessment free?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Yes. iAudit offers a free self-assessment to help you review your quality management practices and identify areas requiring attention.
            </p>
        ),
    },
    {
        question: "3. Who should complete the self-assessment?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Anyone with a working understanding of the organisation’s quality management practices can contribute. Quality managers, business owners and operations managers may lead it, with input from colleagues responsible for individual processes.
            </p>
        ),
    },
    {
        question: "4. Can we use it before implementing ISO 9001?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Yes. It can help you recognise existing practices that may support your quality management system and identify areas requiring development. You do not need to have completed implementation to begin reviewing your current position.
            </p>
        ),
    },
    {
        question: "5. How does self-assessment differ from gap analysis?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Self-assessment describes reviewing your own organisation, while gap analysis focuses on identifying differences between current practice and requirements. The two can overlap. iAudit’s self-assessment provides an initial review, while its gap analysis is intended to support a closer examination of gaps.
            </p>
        ),
    },
    {
        question: "6. Does a good result mean we will pass a certification audit?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                No. Self-assessment results reflect the answers provided and do not independently verify implementation or effectiveness. Certification involves an assessment by a certification body, including examination of relevant evidence.
            </p>
        ),
    },
    {
        question: "7. What should we do after completing the self-assessment?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Review uncertain answers with the relevant process owners, check supporting records and agree which areas need further investigation. Use the findings to guide improvements, a more detailed gap analysis or internal audit planning.
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

export default function Iso90012026SelfAssessmentContent() {
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
                            Free ISO 9001:2026 Self-Assessment Tool
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
                            Understand where your quality management system stands. Review your current practices with iAudit’s free ISO 9001:2026 self-assessment and identify areas that deserve a closer look.
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
                                href={START_ASSESSMENT_URL}
                                style={{
                                    ...primaryBtnStyle,
                                    width: isNarrow ? "100%" : "auto",
                                }}
                            >
                                Start free self-assessment
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
                            <span>✓ Fast readiness evaluation</span>
                            <span>✓ Complete at your own pace</span>
                            <span>✓ Built for QMS managers & teams</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 2. What Does the ISO 9001 Self-Assessment Cover? */}
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
                            What Does the ISO 9001 Self-Assessment Cover?
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
                            The self-assessment provides a structured starting point for reviewing how your organisation manages quality. It helps you consider which practices are established and where you need more information or further improvement.
                        </p>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "1.05rem",
                                fontWeight: 600,
                                color: "#143528",
                            }}
                        >
                            You will review areas such as:
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

                {/* Practical Guidance Callout */}
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
                            Answer based on current practice. Where you are uncertain, check with the people responsible and review the available records.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* 3. How the Self-Assessment Works */}
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
                                How the Self-Assessment Works
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
                                href={START_ASSESSMENT_URL}
                                style={{
                                    ...primaryBtnStyle,
                                    width: isNarrow ? "100%" : "auto",
                                }}
                            >
                                Start free self-assessment
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

            {/* 4. Start Your Free Self-Assessment Box */}
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
                                Start Your Free Self-Assessment
                            </h2>
                            <p
                                style={{
                                    margin: "0 auto 2.25rem",
                                    fontSize: isMobile ? "1.05rem" : "1.2rem",
                                    lineHeight: 1.65,
                                    color: "rgba(255, 255, 255, 0.88)",
                                }}
                            >
                                Take a structured look at how your organisation manages quality. Identify where to focus your attention before your next audit or implementation review.
                            </p>
                            <Link
                                href={START_ASSESSMENT_URL}
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
                                Start free self-assessment
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
