"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { PP_NEUE_MONTREAL, comparisonType } from "@/constants/typography";

type ComparisonRow = {
    id: string;
    software: string;
    mainFocus: string;
    usefulFor: string;
    checkBeforeChoosing: string;
    highlight?: boolean;
};

const comparisonRows: ComparisonRow[] = [
    {
        id: "platform-1",
        software: "iAudit Global",
        mainFocus: "Dedicated ISO audit management",
        usefulFor: "Connected ISO 9001, ISO 14001 and ISO 45001 audit workflows",
        checkBeforeChoosing: "Standards and sites included in your plan",
        highlight: true,
    },
    {
        id: "platform-2",
        software: "isoTracker",
        mainFocus: "Modular quality management",
        usefulFor: "Audits, reusable checklists and corrective actions",
        checkBeforeChoosing: "Required modules and offline workflow",
    },
    {
        id: "platform-3",
        software: "GoAudits",
        mainFocus: "Audits and inspections",
        usefulFor: "Mobile site inspections, reports and follow-up tasks",
        checkBeforeChoosing: "Fit with formal ISO audit and closure requirements",
    },
    {
        id: "platform-4",
        software: "Mitti by SafetyCulture",
        mainFocus: "Operational inspections and audits",
        usefulFor: "Audit activities alongside everyday checks",
        checkBeforeChoosing: "Templates and reporting for your audit scope",
    },
    {
        id: "platform-5",
        software: "Ideagen Quality Management",
        mainFocus: "Broader quality management",
        usefulFor: "Audits linked to documents, training and supplier quality",
        checkBeforeChoosing: "Product configuration and implementation scope",
    },
    {
        id: "platform-6",
        software: "Intelex",
        mainFocus: "EHSQ management",
        usefulFor: "Audits within environmental, safety and quality programmes",
        checkBeforeChoosing: "Applications and connections included",
    },
    {
        id: "platform-7",
        software: "ComplianceQuest",
        mainFocus: "Connected quality management",
        usefulFor: "Manufacturing and life sciences quality processes",
        checkBeforeChoosing: "Modules, integrations and applicable validation needs",
    },
    {
        id: "platform-8",
        software: "Octave Reliance",
        mainFocus: "Enterprise quality management",
        usefulFor: "Configurable audit and quality workflows",
        checkBeforeChoosing: "Configuration and integration requirements",
    },
];

const atAGlanceItems = [
    {
        label: "For a dedicated ISO audit workflow:",
        text: "consider iAudit Global, with support for ISO 9001, ISO 14001 and ISO 45001.",
        href: "#platform-1",
    },
    {
        label: "For audits within a modular QMS:",
        text: "consider isoTracker.",
        href: "#platform-2",
    },
    {
        label: "For site inspections and operational checks:",
        text: "consider GoAudits or Mitti by SafetyCulture.",
        href: "#platform-3",
    },
    {
        label: "For auditing within a broader quality or EHSQ system:",
        text: "consider Ideagen Quality Management, Intelex, ComplianceQuest or Octave Reliance.",
        href: "#platform-5",
    },
];

type PlatformReview = {
    id: string;
    number: string;
    name: string;
    subtitle: string;
    intro: React.ReactNode;
    extraIntro?: React.ReactNode;
    features: { title: string; description: React.ReactNode }[];
    afterFeatures?: React.ReactNode;
    strengths: string;
    considerations: string;
    pricingLabel: string;
    pricingText: React.ReactNode;
    cta?: { label: string; href: string; external?: boolean };
    featured?: boolean;
    image?: { src: string; alt: string; width: number; height: number };
};

const supportedIndustries: { label: string; href: string; image: string }[] = [
    { label: "Manufacturing", href: "/industries/manufacturing-iso-audit-software", image: "/images/manufacturing-bg.webp" },
    { label: "Construction", href: "/industries/construction-iso-audit-software", image: "/images/construction-bg.webp" },
    { label: "Transport and Logistics", href: "/industries/transport-and-logistics-iso-audit-software", image: "/images/logistics-bg.webp" },
    { label: "Healthcare", href: "/industries/healthcare-compliance-software", image: "/images/healthcare-bg.webp" },
    { label: "Food & Beverage", href: "/industries/food-and-beverage-iso-audit-software", image: "/images/food-beverage-bg.webp" },
    { label: "Retail", href: "/industries/retail-iso-audit-software", image: "/images/retail-bg.webp" },
    { label: "Hospitality", href: "/industries/hospitality-iso-audit-software", image: "/images/hospitality-bg.webp" },
    { label: "Facilities Management", href: "/industries/facilities-management-iso-audit-software", image: "/images/facilities-bg.webp" },
];

const linkStyle: React.CSSProperties = {
    color: "#006644",
    fontWeight: 500,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
};

const platformReviews: PlatformReview[] = [
    {
        id: "platform-1",
        number: "01",
        name: "iAudit Global",
        subtitle: "For organisations seeking a dedicated ISO audit workflow",
        featured: true,
        intro: (
            <>
                iAudit Global supports{" "}
                <Link href="/standards/iso-9001-audit-management-software" style={linkStyle}>
                    ISO 9001
                </Link>
                {", "}
                <Link href="/standards/iso-14001-audit-management-software" style={linkStyle}>
                    ISO 14001
                </Link>{" "}
                and{" "}
                <Link href="/standards/iso-45001-audit-management-software" style={linkStyle}>
                    ISO 45001
                </Link>{" "}
                audits, bringing planning, evidence, findings and corrective actions into one platform. Its workflow
                follows Plan, Do, Check, Act, with an emphasis on following findings through to verified action closure.
            </>
        ),
        extraIntro: (
            <>
                Our{" "}
                <Link href="/audit-management-software-built-by-auditors" style={linkStyle}>
                    audit software built by ISO auditors
                </Link>{" "}
                is designed around practical audit work. You can learn more about{" "}
                <Link href="/about" style={linkStyle}>
                    the team behind iAudit Global
                </Link>{" "}
                and its experience in auditing and consultancy.
            </>
        ),
        features: [
            {
                title: "Audit planning:",
                description: "define scope, criteria and responsibilities so teams know what needs to be assessed.",
            },
            {
                title: "Evidence and findings:",
                description: "keep supporting information connected to the audit, reducing the need to search through separate files.",
            },
            {
                title: "Corrective action tracking:",
                description: "assign owners and deadlines, then check whether actions have been effective.",
            },
            {
                title: "Multi-site oversight:",
                description: (
                    <>
                        review findings and performance{" "}
                        <Link href="/blog/how-to-manage-iso-audits-across-multiple-sites" style={linkStyle}>
                            across locations
                        </Link>
                        {", subject to the selected plan."}
                    </>
                ),
            },
            {
                title: "Audit Mate:",
                description: "draft audit plans, checklists and sample questions for auditors to review.",
            },
        ],
        afterFeatures: (
            <>
                The{" "}
                <Link href="/pdca-cycle-audit-software" style={linkStyle}>
                    PDCA-based audit workflow
                </Link>{" "}
                helps connect the work done during an audit with the follow-up required afterwards.
            </>
        ),
        strengths:
            "Its dedicated ISO focus connects the audit programme to evidence and follow-up. This makes it relevant when your main requirement is to manage management system audits in one place.",
        considerations:
            "Plans differ in the number of supported standards, sites and reporting capabilities. Match your requirements to the selected plan.",
        pricingLabel: "Trial and pricing:",
        pricingText: (
            <>
                A 14-day free trial is available with no credit card required.{" "}
                <Link href="/pricing" style={linkStyle}>
                    View iAudit plans and pricing
                </Link>
                {"."}
            </>
        ),
    },
    {
        id: "platform-2",
        number: "02",
        name: "isoTracker",
        image: {
            src: "/images/iso-software/isotracker.jpg",
            alt: "isoTracker document control dashboard with to-do list, document ageing and workflow status chart",
            width: 1440,
            height: 943,
        },
        subtitle: "For organisations considering a modular quality management system",
        intro: (
            <>
                isoTracker offers audit management as a standalone module or alongside other quality management modules.
                It is worth considering if you want to organise audits now and evaluate additional quality processes
                separately.
            </>
        ),
        features: [
            {
                title: "Reusable checklists:",
                description: "adapt previous audit questions instead of rebuilding each audit.",
            },
            {
                title: "Audit scheduling:",
                description: "organise one-off or recurring audits.",
            },
            {
                title: "Integrated corrective actions:",
                description: "assign tasks and deadlines, with reminders and escalation for unresolved issues.",
            },
            {
                title: "Audit reporting:",
                description: "review results and corrective action outcomes in a consistent format.",
            },
        ],
        strengths:
            "The modular approach gives organisations a way to assess audit management separately from other quality functions. Reusable checklists and integrated corrective actions support repeatable audit processes.",
        considerations:
            "Establish which modules you need and how the licensing arrangement fits your team. Its published audit guidance describes downloading Excel checklists for offline completion, so assess whether that process suits your auditors.",
        pricingLabel: "Pricing and evaluation:",
        pricingText: "Review current pricing and trial terms directly with the provider.",
        cta: {
            label: "Explore isoTracker audit management software",
            href: "https://www.isotracker.com/products/audit-management-software/",
            external: true,
        },
    },
    {
        id: "platform-3",
        number: "03",
        name: "GoAudits",
        image: {
            src: "/images/iso-software/goaudits.jpg",
            alt: "GoAudits brand standards audit dashboard showing compliance score, audits completed and open actions by area",
            width: 2000,
            height: 1116,
        },
        subtitle: "For teams carrying out regular site audits and inspections",
        intro: (
            <>
                GoAudits focuses on digital inspections, reporting and follow-up. Its mobile tools make it relevant to
                teams collecting information on site across facilities, stores, production areas or other operational
                locations.
            </>
        ),
        features: [
            {
                title: "Mobile checklists:",
                description: "record answers, photos, annotations and signatures during inspections.",
            },
            {
                title: "Offline inspections:",
                description: "continue collecting information where connectivity is limited.",
            },
            {
                title: "Automatic reports:",
                description: "produce inspection reports without manually assembling every result.",
            },
            {
                title: "Follow-up workflows:",
                description: "assign tasks, send reminders and review recurring issues across sites.",
            },
        ],
        strengths:
            "Mobile and offline inspection tools support on-site work. Automatic reports and assigned follow-up tasks help teams act on what they record.",
        considerations:
            "Demonstrate a complete ISO audit using your own requirements. Assess how you would record clause references, root causes and effectiveness checks, as well as routine inspection results.",
        pricingLabel: "Pricing and evaluation:",
        pricingText: "Check current plans, trial access and reporting options with the provider.",
        cta: {
            label: "Explore GoAudits",
            href: "https://goaudits.com/",
            external: true,
        },
    },
    {
        id: "platform-4",
        number: "04",
        name: "Mitti by SafetyCulture",
        image: {
            src: "/images/iso-software/mitti-safetyculture.jpg",
            alt: "Mitti by SafetyCulture inspection template builder with question and response types",
            width: 2000,
            height: 1116,
        },
        subtitle: "For organisations combining audit activities with operational checks",
        intro: (
            <>
                The SafetyCulture platform is now presented as Mitti by SafetyCulture. Its ISO audit offering includes
                documentation, audit trails and action tracking within a broader operational platform.
            </>
        ),
        features: [
            {
                title: "ISO audit documentation:",
                description: "maintain records that support review and follow-up.",
            },
            {
                title: "Action tracking:",
                description: "monitor progress on work arising from audits.",
            },
            {
                title: "Audit trails:",
                description: "retain a record of audit activity.",
            },
            {
                title: "Broader operational coverage:",
                description: "consider audit activities alongside other safety and quality checks.",
            },
        ],
        strengths:
            "Its broader operational scope makes it relevant where the same teams manage audits alongside regular safety and quality checks.",
        considerations:
            "Distinguish routine inspections from your formal management system audit requirements. Ask the provider to demonstrate how its templates, reporting and follow-up support the standards and audit depth you need.",
        pricingLabel: "Pricing and evaluation:",
        pricingText: "Confirm the current product package, pricing and available evaluation options.",
        cta: {
            label: "Explore Mitti's ISO audit software",
            href: "https://mitti.com/safety-and-compliance/iso-audit",
            external: true,
        },
    },
    {
        id: "platform-5",
        number: "05",
        name: "Ideagen Quality Management",
        subtitle: "For organisations connecting audits with wider quality processes",
        intro: (
            <>
                Ideagen Quality Management brings audit management together with document control, corrective actions,
                training and supplier quality. It is relevant when the purchase involves a wider quality system, rather
                than auditing alone.
            </>
        ),
        features: [
            {
                title: "Connected quality processes:",
                description: "assess audits alongside the documents, training and supplier activities they may relate to.",
            },
            {
                title: "Corrective action management:",
                description: "handle follow-up within the wider quality system.",
            },
            {
                title: "Document control:",
                description: "manage the documented procedures that support consistent work.",
            },
            {
                title: "Training and competency management:",
                description: "maintain visibility of workforce training requirements.",
            },
        ],
        strengths:
            "Its breadth is useful when audit findings need to be considered alongside documents, training and supplier quality processes.",
        considerations:
            "Ideagen offers several products. Make sure the demonstration and proposal cover the specific Quality Management configuration you need. Ask about implementation, data migration and the modules included.",
        pricingLabel: "Pricing and evaluation:",
        pricingText: "Request a demonstration and a proposal based on your audit and quality requirements.",
        cta: {
            label: "Explore Ideagen Quality Management",
            href: "https://www.ideagen.com/solutions/quality/quality-management",
            external: true,
        },
    },
    {
        id: "platform-6",
        number: "06",
        name: "Intelex",
        subtitle: "For organisations managing audits within an EHSQ system",
        intro: (
            <>
                Intelex offers audit management within its environmental, health, safety and quality software portfolio.
                It is relevant to organisations evaluating auditing alongside other EHSQ processes.
            </>
        ),
        features: [
            {
                title: "Audit scheduling and tracking:",
                description: "maintain visibility of planned and ongoing audits.",
            },
            {
                title: "Centralised data collection:",
                description: "keep audit information in a shared web-based system.",
            },
            {
                title: "Internal and external audit management:",
                description: "organise different audit activities within the platform.",
            },
            {
                title: "Reporting:",
                description: "review findings and audit progress without relying entirely on separate records.",
            },
        ],
        strengths:
            "The EHSQ portfolio is relevant to organisations that want to assess auditing alongside environmental, safety and quality management applications.",
        considerations:
            "Identify the applications required for your intended workflow. Ask how audits connect with action management, document control and other selected modules, and confirm what is included in the proposal.",
        pricingLabel: "Pricing and evaluation:",
        pricingText: "Request a demonstration using a representative audit and follow-up process.",
        cta: {
            label: "Explore Intelex applications",
            href: "https://www.intelex.com/products/applications/",
            external: true,
        },
    },
    {
        id: "platform-7",
        number: "07",
        name: "ComplianceQuest",
        image: {
            src: "/images/iso-software/compliancequest.jpg",
            alt: "ComplianceQuest quality dashboard showing overdue audits, NCRs and CAPAs by location",
            width: 2000,
            height: 1116,
        },
        subtitle: "For organisations evaluating audits alongside manufacturing or life sciences quality processes",
        intro: (
            <>
                ComplianceQuest provides quality management capabilities covering audits, non-conformances, corrective
                and preventive actions, documents and training. Its published offerings include manufacturing and life
                sciences applications.
            </>
        ),
        features: [
            {
                title: "Audit management within a QMS:",
                description: "evaluate audit activities alongside other quality records.",
            },
            {
                title: "Non-conformance and CAPA processes:",
                description: "manage identified problems and the actions taken to address them.",
            },
            {
                title: "Document and training management:",
                description: "bring supporting quality processes into the same software environment.",
            },
            {
                title: "Industry-focused offerings:",
                description: "assess the product against manufacturing or life sciences requirements.",
            },
        ],
        strengths:
            "Its quality management scope is relevant when audit work forms part of a wider manufacturing or life sciences software project.",
        considerations:
            "Define your required modules, integrations and implementation scope before comparing costs. For regulated activities, confirm the applicable validation and record-control requirements with the provider.",
        pricingLabel: "Pricing and evaluation:",
        pricingText: "Request a demonstration and pricing for your intended configuration.",
        cta: {
            label: "Explore ComplianceQuest",
            href: "https://www.compliancequest.com/audit-management/software/",
            external: true,
        },
    },
    {
        id: "platform-8",
        number: "08",
        name: "Octave Reliance",
        image: {
            src: "/images/iso-software/octave-reliance.jpg",
            alt: "Octave Reliance (formerly ETQ Reliance) quality homepage with assignments, trainings and calendar",
            width: 2000,
            height: 1116,
        },
        subtitle: "For organisations needing configurable enterprise quality workflows",
        intro: (
            <>
                Octave Reliance, formerly ETQ Reliance, is a quality management system with applications covering audits,
                document control, CAPA, training and supplier quality.
            </>
        ),
        features: [
            {
                title: "Connected quality applications:",
                description: "manage audits alongside related quality processes.",
            },
            {
                title: "Configurable workflows:",
                description: "adapt forms, rules and processes using its application designer.",
            },
            {
                title: "Reporting and analytics:",
                description: "review quality information and performance trends.",
            },
            {
                title: "Enterprise integrations:",
                description: "assess connections with existing business systems.",
            },
        ],
        strengths:
            "Configurable forms and workflows are useful when several teams need consistent quality processes with requirements specific to the organisation.",
        considerations:
            "Agree the configuration, integration and implementation work required. A broader QMS should be evaluated against your full quality requirements as well as the audit process.",
        pricingLabel: "Pricing and evaluation:",
        pricingText: "Request a demonstration and a proposal that identifies the applications and services included.",
        cta: {
            label: "Explore Octave Reliance",
            href: "https://www.octave.com/reliance",
            external: true,
        },
    },
];

const evaluationCriteria = [
    {
        question: "Does it support the audits you actually conduct?",
        paragraphs: [
            "List your standards, locations and audit types before comparing features. Ask providers to show how their product handles your requirements.",
            "A library of ISO checklists can provide a starting point. You should also assess how questions can be adapted to your processes, risks and previous findings.",
        ],
    },
    {
        question: "Can you trace evidence back to a finding?",
        paragraphs: [
            "Use a sample finding during the demonstration. Check whether you can follow it back to the relevant question, supporting evidence and audit record.",
            "This makes it easier to assess how much work will be required when someone reviews or challenges the finding.",
        ],
    },
    {
        question: "What happens after a corrective action is assigned?",
        paragraphs: [
            "Look beyond task completion. Check how the system records responsibility, deadlines, root cause analysis and evidence that the action worked.",
            "Ask the provider to demonstrate an overdue action and an action that needs further work before closure.",
        ],
    },
    {
        question: "Can managers see what needs attention?",
        paragraphs: ["Test whether reports answer practical questions:"],
        bullets: [
            "Which audits are overdue?",
            "Which corrective actions still need attention?",
            "Are similar findings appearing across sites?",
            "Which issues have recurred after previous action?",
        ],
        afterBullets:
            "Use your own reporting requirements to assess whether the available dashboards and exports are sufficient.",
    },
    {
        question: "What will the full arrangement cost?",
        paragraphs: [
            "Compare costs for your intended users, sites and standards. Include any implementation, migration, integration, training and support charges.",
            "Check the contract term and whether occasional users need paid licences. An advertised monthly rate may depend on billing or commitment conditions.",
        ],
    },
    {
        question: "Can your team use it without recreating work elsewhere?",
        paragraphs: [
            "Include auditors, action owners and managers in the evaluation. Ask each person to complete a realistic task.",
            "If your team still needs separate spreadsheets to track important parts of the process, establish whether that is a configuration issue or a product limitation.",
        ],
    },
];

const faqItems = [
    {
        question: "What is ISO audit management software?",
        answer: "ISO audit management software helps organisations plan audits, gather evidence, record findings, track corrective actions and review results. The scope varies between dedicated audit platforms and wider quality or compliance systems.",
    },
    {
        question: "What is the difference between audit management software and a QMS?",
        answer: "Audit management software focuses on the audit process and its follow-up. A quality management system may also cover document control, training, complaints, supplier quality and other processes. Some QMS products include audit management as a module.",
    },
    {
        question: "Can one platform manage ISO 9001, ISO 14001 and ISO 45001 audits?",
        answer: (
            <>
                Some platforms support all three. iAudit Global supports these standards, with availability depending on
                the selected plan. Check the{" "}
                <Link href="/pricing" style={linkStyle}>
                    current plans
                </Link>{" "}
                and confirm how the software handles shared processes and evidence.
            </>
        ),
    },
    {
        question: "What should small organisations look for in ISO audit software?",
        answer: "Start with the work you need to manage: scheduling, evidence, findings, actions and reporting. Assess ease of use, setup effort and total cost. A small team should also check whether occasional auditors and action owners require additional licences.",
    },
    {
        question: "How much does ISO audit management software cost?",
        answer: (
            <>
                Costs depend on the provider, users, sites, modules and contract terms. Compare written proposals using
                the same requirements, and include implementation and support costs.{" "}
                <Link href="/pricing" style={linkStyle}>
                    iAudit&apos;s pricing page
                </Link>{" "}
                sets out its available plans.
            </>
        ),
    },
    {
        question: "Does audit software guarantee ISO certification?",
        answer: "No. Software can help organise audit work and records, but it does not establish that your organisation meets a standard. Certification depends on the management system and the certification body's assessment.",
    },
    {
        question: "Does iAudit Global offer a free trial?",
        answer: (
            <>
                Yes. iAudit Global offers a 14-day free trial with no credit card required. Review the available plans and
                trial details on the{" "}
                <Link href="/pricing" style={linkStyle}>
                    pricing page
                </Link>
                .
            </>
        ),
    },
];

export default function TopIsoAuditSoftwarePageContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: "1060px",
        margin: "0 auto",
        padding: isMobile ? "0 1.25rem" : "0 2rem",
    };

    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, backgroundColor: "#ffffff", color: "#111827", overflowX: "hidden" }}>
            {/* Hero Section */}
            <section
                style={{
                    background: `
                        radial-gradient(ellipse 60% 50% at 20% 0%, rgba(5,140,66,0.12) 0%, transparent 70%),
                        radial-gradient(ellipse 60% 50% at 80% 0%, rgba(0,77,64,0.10) 0%, transparent 70%),
                        #fafffe
                    `,
                    paddingTop: "var(--page-top-offset)",
                    paddingBottom: isMobile ? "3rem" : "4.5rem",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    style={{ ...containerStyle, maxWidth: "880px", textAlign: "center" }}
                >
                    <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
                        <SectionTag isMobile={isMobile}>Software Comparison Guide</SectionTag>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        style={{
                            ...comparisonType.heroH1(isMobile),
                            margin: "0 0 1.5rem 0",
                        }}
                    >
                        Top ISO Audit Management Software: 8 Platforms Compared
                    </motion.h1>

                    <motion.div
                        variants={fadeUp}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            textAlign: "left",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "18px",
                            padding: isMobile ? "1.35rem" : "2rem 2.25rem",
                            boxShadow: "0 14px 36px rgba(0, 77, 64, 0.06)",
                            marginBottom: "2rem",
                        }}
                    >
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            An audit report is only useful if the findings lead to action. For many organisations, the
                            difficult part is keeping the schedule, supporting evidence, responsibilities and follow-up
                            in one place.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            ISO audit management software helps organise that work. But the products available serve
                            different needs. Some focus on ISO audit programmes, some on site inspections, and others
                            include auditing within a wider quality management system.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            This guide compares eight options for organisations researching the top ISO audit management
                            software, with features, strengths and practical considerations to help you choose.
                        </p>
                        <div
                            style={{
                                marginTop: "0.35rem",
                                paddingTop: "1rem",
                                borderTop: "1px solid #f3f4f6",
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                            }}
                        >
                            <p style={{ ...comparisonType.body(), margin: 0, fontSize: "0.95rem", color: "#111827" }}>
                                Want to assess iAudit while you compare? Start a 14-day free trial with no credit card
                                required.
                            </p>
                            <Link
                                href="/pricing"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.7rem 1.35rem",
                                    borderRadius: "9999px",
                                    backgroundColor: "#006644",
                                    color: "#ffffff",
                                    fontWeight: 600,
                                    fontSize: "0.92rem",
                                    textDecoration: "none",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Explore plans and start your free trial
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* At a glance & What is ISO audit management software */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#ffffff" }}>
                <div style={containerStyle}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
                            gap: isMobile ? "2rem" : "3rem",
                            alignItems: "start",
                        }}
                    >
                        {/* At a glance */}
                        <div
                            style={{
                                backgroundColor: "#f8faf9",
                                border: "1px solid #d1fae5",
                                borderRadius: "18px",
                                padding: isMobile ? "1.5rem" : "2rem",
                            }}
                        >
                            <h2 style={{ ...comparisonType.sectionH2(isMobile), fontSize: isMobile ? "1.6rem" : "1.9rem", margin: "0 0 1.25rem 0" }}>
                                At a glance
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                                {atAGlanceItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "0.75rem",
                                            padding: "0.9rem 1rem",
                                            borderRadius: "12px",
                                            backgroundColor: "#ffffff",
                                            border: "1px solid #e5e7eb",
                                            textDecoration: "none",
                                            color: "#374151",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "9999px",
                                                backgroundColor: "#006644",
                                                marginTop: "0.55rem",
                                                flexShrink: 0,
                                            }}
                                        />
                                        <span style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                                            <strong style={{ color: "#0d1117", fontWeight: 600 }}>{item.label}</strong>{" "}
                                            {item.text}
                                        </span>
                                    </a>
                                ))}
                            </div>
                            <p style={{ ...comparisonType.body(), fontSize: "0.95rem", margin: "1.25rem 0 0 0", color: "#374151" }}>
                                Start with the scope you need. Then compare evidence handling, corrective actions,
                                reporting and the full cost of implementation and use.
                            </p>
                        </div>

                        {/* What is ISO audit management software */}
                        <div style={{ paddingTop: isMobile ? 0 : "0.5rem" }}>
                            <h2 style={{ ...comparisonType.sectionH2(isMobile), fontSize: isMobile ? "1.6rem" : "2rem", margin: "0 0 1.25rem 0" }}>
                                What is ISO audit management software?
                            </h2>
                            <p style={{ ...comparisonType.body(), margin: "0 0 1rem 0", color: "#374151" }}>
                                ISO audit management software helps organisations plan audits, record evidence, document
                                findings and track{" "}
                                <Link href="/blog/corrective-actions-after-an-internal-audit-findings-to-closure" style={linkStyle}>
                                    corrective actions
                                </Link>
                                {". "}
                                It gives auditors and managers a shared record of what was checked, what was found and
                                what still needs attention.
                            </p>
                            <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                                A dedicated audit platform concentrates on this process. A broader quality management
                                system may also include document control, training, complaints and supplier management.
                                The appropriate choice depends on whether you are improving your audit process or
                                replacing a wider set of systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <div style={{ maxWidth: "740px", marginBottom: "2rem" }}>
                        <h2 style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem 0" }}>
                            Top ISO audit management software compared
                        </h2>
                        <p style={{ ...comparisonType.body(), margin: 0 }}>
                            The right choice depends on your standards, audit activities and the processes you want to
                            manage alongside them.
                        </p>
                    </div>

                    <div
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            border: "1px solid #e5e7eb",
                            overflowX: "auto",
                            boxShadow: "0 8px 24px rgba(17, 24, 39, 0.04)",
                        }}
                    >
                        <table
                            style={{
                                width: "100%",
                                minWidth: "760px",
                                borderCollapse: "collapse",
                                textAlign: "left",
                                fontFamily: PP_NEUE_MONTREAL,
                            }}
                        >
                            <thead>
                                <tr style={{ backgroundColor: "#0d1117", color: "#ffffff" }}>
                                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.9rem", fontWeight: 600 }}>Software</th>
                                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.9rem", fontWeight: 600 }}>Main focus</th>
                                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.9rem", fontWeight: 600 }}>Useful for</th>
                                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.9rem", fontWeight: 600 }}>Check before choosing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, idx) => (
                                    <tr
                                        key={row.id}
                                        style={{
                                            backgroundColor: row.highlight
                                                ? "#f0fdf4"
                                                : idx % 2 === 1
                                                  ? "#f9fafb"
                                                  : "#ffffff",
                                            borderTop: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <td style={{ padding: "1rem 1.25rem", fontWeight: 600, fontSize: "0.95rem", whiteSpace: "nowrap" }}>
                                            <a
                                                href={`#${row.id}`}
                                                style={{
                                                    color: row.highlight ? "#006644" : "#0d1117",
                                                    textDecoration: "underline",
                                                    textUnderlineOffset: "3px",
                                                }}
                                            >
                                                {row.software}
                                            </a>
                                        </td>
                                        <td style={{ padding: "1rem 1.25rem", fontSize: "0.92rem", color: "#374151" }}>
                                            {row.mainFocus}
                                        </td>
                                        <td style={{ padding: "1rem 1.25rem", fontSize: "0.92rem", color: "#374151" }}>
                                            {row.usefulFor}
                                        </td>
                                        <td style={{ padding: "1rem 1.25rem", fontSize: "0.92rem", color: "#4b5563" }}>
                                            {row.checkBeforeChoosing}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p style={{ ...comparisonType.caption(isMobile), marginTop: "1rem", marginBottom: 0 }}>
                        These are suggested use cases, not performance rankings. Confirm the relevant standards, features
                        and plan restrictions with each provider.
                    </p>

                    {/* How we selected these platforms */}
                    <div
                        style={{
                            marginTop: "2.5rem",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "16px",
                            padding: isMobile ? "1.5rem" : "2rem",
                        }}
                    >
                        <h2 style={{ ...comparisonType.cardH2(isMobile), margin: "0 0 0.9rem 0" }}>
                            How we selected these platforms
                        </h2>
                        <p style={{ ...comparisonType.body(), margin: "0 0 0.85rem 0", color: "#374151" }}>
                            We selected products with published capabilities relevant to ISO auditing, including audit
                            planning, evidence collection, findings, reporting and corrective actions. We also
                            considered whether auditing is the product&apos;s main purpose or part of a wider system.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: "0 0 0.85rem 0", color: "#374151" }}>
                            This guide is published by iAudit Global and includes our own software. It is based on
                            publicly available vendor information, not independent hands-on testing of every platform.
                            The order does not represent a scored ranking.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, fontSize: "0.9rem", fontWeight: 500, color: "#006644" }}>
                            Product information reviewed: 6 November 2026. Features, names, pricing and trial terms can
                            change.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed 8 Platforms */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4.5rem 0", backgroundColor: "#ffffff" }}>
                <div style={containerStyle}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {platformReviews.map((platform) => (
                            <article
                                key={platform.id}
                                id={platform.id}
                                style={{
                                    scrollMarginTop: "110px",
                                    backgroundColor: platform.featured ? "#fafffe" : "#ffffff",
                                    border: platform.featured ? "1.5px solid #006644" : "1px solid #e5e7eb",
                                    borderRadius: "20px",
                                    padding: isMobile ? "1.5rem" : "2.5rem",
                                    boxShadow: platform.featured
                                        ? "0 18px 40px rgba(0, 102, 68, 0.08)"
                                        : "0 6px 20px rgba(17, 24, 39, 0.03)",
                                }}
                            >
                                {/* Platform Header */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "1rem",
                                        marginBottom: "1.25rem",
                                        paddingBottom: "1.25rem",
                                        borderBottom: "1px solid #e5e7eb",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "42px",
                                                height: "42px",
                                                borderRadius: "10px",
                                                backgroundColor: platform.featured ? "#006644" : "#f3f4f6",
                                                color: platform.featured ? "#ffffff" : "#111827",
                                                fontWeight: 700,
                                                fontSize: "1rem",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {Number(platform.number)}.
                                        </span>
                                        <div>
                                            <h2
                                                style={{
                                                    ...comparisonType.cardH2(isMobile),
                                                    fontSize: isMobile ? "1.4rem" : "1.75rem",
                                                    margin: "0 0 0.25rem 0",
                                                }}
                                            >
                                                {platform.name}
                                            </h2>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    fontSize: "0.95rem",
                                                    fontWeight: 500,
                                                    color: "#006644",
                                                }}
                                            >
                                                {platform.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {platform.featured && (
                                        <span
                                            style={{
                                                padding: "0.35rem 0.85rem",
                                                borderRadius: "9999px",
                                                backgroundColor: "#d1fae5",
                                                color: "#065f46",
                                                fontSize: "0.8rem",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Dedicated ISO Platform
                                        </span>
                                    )}
                                </div>

                                {platform.image && (
                                    <div
                                        style={{
                                            margin: "0 0 1.5rem 0",
                                            borderRadius: "14px",
                                            overflow: "hidden",
                                            border: "1px solid #e5e7eb",
                                            backgroundColor: "#f9fafb",
                                            boxShadow: "0 8px 24px rgba(17, 24, 39, 0.06)",
                                        }}
                                    >
                                        <Image
                                            src={platform.image.src}
                                            alt={platform.image.alt}
                                            width={platform.image.width}
                                            height={platform.image.height}
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, 900px"
                                            style={{ width: "100%", height: "auto", display: "block" }}
                                        />
                                    </div>
                                )}

                                {/* Intro */}
                                <p style={{ ...comparisonType.body(), margin: "0 0 0.9rem 0", color: "#374151" }}>
                                    {platform.intro}
                                </p>
                                {platform.extraIntro && (
                                    <p style={{ ...comparisonType.body(), margin: "0 0 1.25rem 0", color: "#374151" }}>
                                        {platform.extraIntro}
                                    </p>
                                )}

                                {/* Key Features */}
                                <div style={{ marginTop: "1.25rem", marginBottom: "1.5rem" }}>
                                    <h3
                                        style={{
                                            fontSize: "1.05rem",
                                            fontWeight: 600,
                                            color: "#0d1117",
                                            margin: "0 0 0.85rem 0",
                                        }}
                                    >
                                        Key features
                                    </h3>
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                            gap: "0.85rem",
                                        }}
                                    >
                                        {platform.features.map((feat) => (
                                            <div
                                                key={feat.title}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "0.65rem",
                                                    padding: "0.85rem 1rem",
                                                    borderRadius: "12px",
                                                    backgroundColor: "#f9fafb",
                                                    border: "1px solid #f3f4f6",
                                                }}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#006644"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    style={{ marginTop: "3px", flexShrink: 0 }}
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span style={{ fontSize: "0.94rem", lineHeight: 1.55, color: "#374151" }}>
                                                    <strong style={{ color: "#111827", fontWeight: 600 }}>
                                                        {feat.title}
                                                    </strong>{" "}
                                                    {feat.description}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {platform.afterFeatures && (
                                    <p style={{ ...comparisonType.body(), margin: "0 0 1.25rem 0", color: "#374151" }}>
                                        {platform.afterFeatures}
                                    </p>
                                )}

                                {platform.featured && (
                                    <div style={{ marginBottom: "1.5rem" }}>
                                        <h3
                                            style={{
                                                fontSize: "1.15rem",
                                                fontWeight: 600,
                                                color: "#0d1117",
                                                margin: "0 0 0.75rem 0",
                                            }}
                                        >
                                            Industries supported by iAudit
                                        </h3>
                                        <p style={{ ...comparisonType.body(), margin: "0 0 1.15rem 0", color: "#374151" }}>
                                            iAudit supports ISO audit programmes across manufacturing, construction,
                                            healthcare and other sectors. Teams can organise audits around the processes
                                            and locations relevant to their operations.
                                        </p>
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                                                gap: isMobile ? "0.75rem" : "0.9rem",
                                            }}
                                        >
                                            {supportedIndustries.map((industry) => (
                                                <Link
                                                    key={industry.href}
                                                    href={industry.href}
                                                    aria-label={`${industry.label} ISO audit software`}
                                                    style={{
                                                        position: "relative",
                                                        display: "block",
                                                        aspectRatio: "4 / 3",
                                                        borderRadius: "12px",
                                                        overflow: "hidden",
                                                        textDecoration: "none",
                                                        backgroundColor: "#0d1117",
                                                    }}
                                                >
                                                    <Image
                                                        src={industry.image}
                                                        alt=""
                                                        fill
                                                        loading="lazy"
                                                        sizes="(max-width: 768px) 45vw, 220px"
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                    <span
                                                        style={{
                                                            position: "absolute",
                                                            inset: 0,
                                                            background:
                                                                "linear-gradient(180deg, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.72) 100%)",
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            position: "absolute",
                                                            left: "0.7rem",
                                                            right: "0.7rem",
                                                            bottom: "0.65rem",
                                                            color: "#ffffff",
                                                            fontWeight: 600,
                                                            fontSize: isMobile ? "0.82rem" : "0.92rem",
                                                            lineHeight: 1.25,
                                                        }}
                                                    >
                                                        {industry.label}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                        <p style={{ margin: "1.15rem 0 0 0" }}>
                                            <Link href="/pricing" style={{ ...linkStyle, fontWeight: 600 }}>
                                                Explore iAudit plans and start your 14-day free trial
                                            </Link>
                                        </p>
                                    </div>
                                )}

                                {/* Strengths, Considerations, Pricing */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                        gap: "1rem",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: "1.1rem 1.25rem",
                                            borderRadius: "12px",
                                            backgroundColor: "#f0fdf4",
                                            border: "1px solid #d1fae5",
                                        }}
                                    >
                                        <h4 style={{ margin: "0 0 0.45rem 0", fontSize: "0.95rem", fontWeight: 600, color: "#065f46" }}>
                                            Strengths
                                        </h4>
                                        <p style={{ margin: 0, fontSize: "0.93rem", lineHeight: 1.6, color: "#374151" }}>
                                            {platform.strengths}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            padding: "1.1rem 1.25rem",
                                            borderRadius: "12px",
                                            backgroundColor: "#f9fafb",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <h4 style={{ margin: "0 0 0.45rem 0", fontSize: "0.95rem", fontWeight: 600, color: "#111827" }}>
                                            Considerations
                                        </h4>
                                        <p style={{ margin: 0, fontSize: "0.93rem", lineHeight: 1.6, color: "#4b5563" }}>
                                            {platform.considerations}
                                        </p>
                                    </div>
                                </div>

                                {/* Pricing & CTA row */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "1rem",
                                        paddingTop: "1rem",
                                        borderTop: "1px solid #f3f4f6",
                                    }}
                                >
                                    <p style={{ margin: 0, fontSize: "0.94rem", lineHeight: 1.6, color: "#374151" }}>
                                        <strong style={{ color: "#111827", fontWeight: 600 }}>
                                            {platform.pricingLabel}
                                        </strong>{" "}
                                        {platform.pricingText}
                                    </p>

                                    {platform.cta &&
                                        (platform.cta.external ? (
                                            <a
                                                href={platform.cta.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.4rem",
                                                    fontSize: "0.92rem",
                                                    fontWeight: 600,
                                                    color: "#006644",
                                                    textDecoration: "none",
                                                    padding: "0.55rem 1.05rem",
                                                    borderRadius: "8px",
                                                    border: "1px solid #bbf7d0",
                                                    backgroundColor: "#f0fdf4",
                                                }}
                                            >
                                                {platform.cta.label}
                                                <span aria-hidden="true">↗</span>
                                            </a>
                                        ) : (
                                            <Link
                                                href={platform.cta.href}
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.4rem",
                                                    fontSize: "0.92rem",
                                                    fontWeight: 600,
                                                    color: "#ffffff",
                                                    textDecoration: "none",
                                                    padding: "0.65rem 1.25rem",
                                                    borderRadius: "9999px",
                                                    backgroundColor: "#006644",
                                                }}
                                            >
                                                {platform.cta.label}
                                                <span aria-hidden="true">→</span>
                                            </Link>
                                        ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Buyer's Guide: How to choose the right ISO audit management software */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4.5rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <div style={{ maxWidth: "720px", marginBottom: "2.25rem" }}>
                        <h2 style={{ ...comparisonType.sectionH2(isMobile), margin: 0 }}>
                            How to choose the right ISO audit management software
                        </h2>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "1.5rem",
                        }}
                    >
                        {evaluationCriteria.map((criterion, index) => (
                            <div
                                key={criterion.question}
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "16px",
                                    padding: isMobile ? "1.35rem" : "1.75rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#006644", letterSpacing: "0.04em" }}>
                                    QUESTION {index + 1}
                                </span>
                                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 600, color: "#0d1117", lineHeight: 1.3 }}>
                                    {criterion.question}
                                </h3>
                                {criterion.paragraphs.map((p) => (
                                    <p key={p} style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.65, color: "#4b5563" }}>
                                        {p}
                                    </p>
                                ))}
                                {criterion.bullets && (
                                    <ul
                                        style={{
                                            margin: "0.25rem 0",
                                            paddingLeft: "1.25rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.4rem",
                                            color: "#374151",
                                            fontSize: "0.94rem",
                                            lineHeight: 1.55,
                                        }}
                                    >
                                        {criterion.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                )}
                                {criterion.afterBullets && (
                                    <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.65, color: "#4b5563" }}>
                                        {criterion.afterBullets}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Try iAudit Global free for 14 days */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#ffffff" }}>
                <div style={containerStyle}>
                    <div
                        style={{
                            borderRadius: "24px",
                            background: "linear-gradient(135deg, #003828 0%, #006644 100%)",
                            color: "#ffffff",
                            padding: isMobile ? "2rem 1.5rem" : "3.5rem 3.25rem",
                            textAlign: "center",
                            boxShadow: "0 24px 50px rgba(0, 77, 64, 0.18)",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: isMobile ? "1.75rem" : "2.4rem",
                                fontWeight: 600,
                                margin: "0 0 1.25rem 0",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.15,
                            }}
                        >
                            Try iAudit Global free for 14 days
                        </h2>
                        <div style={{ maxWidth: "740px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                            <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.92)" }}>
                                A software comparison can narrow your options. Trying the product helps you assess
                                whether it fits the way your team works.
                            </p>
                            <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.92)" }}>
                                Use iAudit&apos;s 14-day free trial to explore its approach to ISO audit management.
                                Start with a representative audit and review the available planning, evidence, findings
                                and follow-up features. Check which plan covers your required standards and sites.
                            </p>
                            <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.92)" }}>
                                Our platform is built around a{" "}
                                <Link
                                    href="/pdca-cycle-audit-software"
                                    style={{ color: "#a7f3d0", fontWeight: 600, textDecoration: "underline" }}
                                >
                                    PDCA-based audit process
                                </Link>
                                , helping teams keep audit work and corrective action follow-up connected.
                            </p>
                            <p style={{ margin: "0.35rem 0 0 0", fontSize: "0.95rem", fontWeight: 600, color: "#6ee7b7" }}>
                                No credit card required.
                            </p>
                        </div>
                        <div style={{ marginTop: "2rem" }}>
                            <Link
                                href="/pricing"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.55rem",
                                    padding: "0.95rem 2rem",
                                    borderRadius: "9999px",
                                    backgroundColor: "#ffffff",
                                    color: "#004d3d",
                                    fontWeight: 600,
                                    fontSize: "0.98rem",
                                    textDecoration: "none",
                                }}
                            >
                                Explore Plans and Start Your Free Trial
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently asked questions */}
            <FAQAccordion items={faqItems} heading="Frequently asked questions" sparkleText="FAQ" />

            <Footer />
        </div>
    );
}

