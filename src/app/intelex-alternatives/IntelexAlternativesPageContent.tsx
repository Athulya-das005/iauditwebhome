"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, comparisonType } from "@/constants/typography";

const glanceRows = [
    {
        id: "iaudit",
        software: "iAudit",
        requirement: "ISO audit programme management",
        capabilities: "Planning, evidence, findings, corrective actions and PDCA workflows",
    },
    {
        id: "cority",
        software: "Cority",
        requirement: "Audits within broader EHS and quality processes",
        capabilities: "Audits, inspections and connections with wider operational records",
    },
    {
        id: "velocityehs",
        software: "VelocityEHS",
        requirement: "Safety and compliance audit programmes",
        capabilities: "Scheduling, configurable checklists, corrective actions and reporting",
    },
    {
        id: "ecoonline",
        software: "EcoOnline",
        requirement: "Workplace audits and inspections",
        capabilities: "Offline fieldwork, recurring schedules, action tracking and dashboards",
    },
    {
        id: "ehsinsight",
        software: "EHS Insight",
        requirement: "Audits alongside daily EHS activities",
        capabilities: "Inspection forms, findings, corrective actions and connected EHS modules",
    },
    {
        id: "enablon",
        software: "Enablon",
        requirement: "Audits and compliance across locations",
        capabilities: "Standardised audits, document control, action plans and performance metrics",
    },
    {
        id: "benchmark",
        software: "Benchmark Gensuite",
        requirement: "Audit planning and regulatory compliance",
        capabilities: "Auditor allocation, scheduling, field execution and follow-up tools",
    },
];

const industries = [
    { label: "Manufacturing", href: "/industries/manufacturing-iso-audit-software" },
    { label: "Construction", href: "/industries/construction-iso-audit-software" },
    { label: "Transport and Logistics", href: "/industries/transport-and-logistics-iso-audit-software" },
    { label: "Healthcare", href: "/industries/healthcare-compliance-software" },
    { label: "Food & Beverage", href: "/industries/food-and-beverage-iso-audit-software" },
    { label: "Retail", href: "/industries/retail-iso-audit-software" },
    { label: "Hospitality", href: "/industries/hospitality-iso-audit-software" },
    { label: "Facilities Management", href: "/industries/facilities-management-iso-audit-software" },
];

const linkStyle: React.CSSProperties = {
    color: "#006644",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
};

const faqItems = [
    {
        question: "Which Intelex alternatives should I consider?",
        answer: (
            <span>
                iAudit, Cority, VelocityEHS, EcoOnline, EHS Insight, Enablon and Benchmark Gensuite are relevant options for different requirements. iAudit focuses on ISO audit programmes, while the other platforms offer wider EHS or compliance capabilities. Choose according to the functions your team needs to retain.
            </span>
        ),
    },
    {
        question: "Is iAudit a suitable alternative to Intelex?",
        answer: (
            <span>
                iAudit is worth considering when your main requirement is managing ISO 9001, ISO 14001 and ISO 45001 audits. It supports planning, evidence, findings, reporting and corrective-action follow-up. Assess the wider functions you use in Intelex before deciding whether an audit-focused platform covers your replacement scope.
            </span>
        ),
    },
    {
        question: "Can iAudit replace an entire EHS management system?",
        answer: (
            <span>
                Do not assume that an ISO audit platform replaces every EHS function. iAudit’s documented focus is audit management. If you also need incident reporting, occupational health, chemical management, training or environmental monitoring, assess those requirements separately and confirm the available capabilities.
            </span>
        ),
    },
    {
        question: "Which alternatives support offline audits and inspections?",
        answer: (
            <span>
                EcoOnline and EHS Insight document offline audit or inspection capabilities. Benchmark Gensuite’s Audit Assistant also supports field auditing without connectivity. Offline coverage can differ by function, so test checklists, attachments and synchronisation on the devices your team uses.
            </span>
        ),
    },
    {
        question: "What should we check before migrating from Intelex?",
        answer: (
            <span>
                Confirm your current export options and the replacement platform’s import capabilities. Include attachments, open actions, historical reports and relationships between records in the assessment. Test a sample migration, agree how archived information will remain accessible and verify results before withdrawing access to the previous system.
            </span>
        ),
    },
    {
        question: "Can iAudit support ISO audits across multiple sites?",
        answer: (
            <span>
                Yes. Relevant iAudit plans include multi-site audits and dashboards. Its industry offering includes{" "}
                <Link href="/industries/manufacturing-iso-audit-software" style={linkStyle}>manufacturing ISO audit management</Link>,{" "}
                <Link href="/industries/construction-iso-audit-software" style={linkStyle}>construction ISO audits</Link> and other sectors. Confirm the standards and site allowances included in your selected plan.
            </span>
        ),
    },
    {
        question: "Does iAudit offer a free trial?",
        answer: (
            <span>
                Yes. You can{" "}
                <Link href="/pricing" style={linkStyle}>try iAudit free for 14 days</Link> without providing credit card details. Use the trial to assess planning, evidence capture, findings and corrective-action follow-up against your organisation’s requirements.
            </span>
        ),
    },
];

export default function IntelexAlternativesPageContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const containerStyle: React.CSSProperties = {
        maxWidth: "1060px",
        margin: "0 auto",
        padding: isMobile ? "0 1.25rem" : "0 2rem",
    };

    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, backgroundColor: "#ffffff", color: "#111827", overflowX: "hidden" }}>
            {/* Hero / Intro */}
            <section
                style={{
                    background: `
                        radial-gradient(ellipse 60% 50% at 20% 0%, rgba(5,140,66,0.12) 0%, transparent 70%),
                        radial-gradient(ellipse 60% 50% at 80% 0%, rgba(0,77,64,0.10) 0%, transparent 70%),
                        #fafffe
                    `,
                    paddingTop: "var(--page-top-offset)",
                    paddingBottom: isMobile ? "2.5rem" : "4.5rem",
                }}
            >
                <div style={{ ...containerStyle, maxWidth: "880px", textAlign: "center", paddingTop: isMobile ? "2.5rem" : "4rem" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
                        <SectionTag isMobile={isMobile}>Intelex alternatives</SectionTag>
                    </div>
                    <h1 style={{ ...comparisonType.heroH1(isMobile), margin: "0 0 1.5rem" }}>
                        7 Intelex Alternatives for ISO Audits and EHS Management
                    </h1>
                    <div
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
                        }}
                    >
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            Looking for Intelex alternatives? Start by identifying the work your replacement needs to support. Managing an ISO audit programme involves different requirements from running incident reporting, environmental monitoring and employee training across an organisation.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            If ISO audits are your priority, iAudit connects planning, evidence, findings and corrective-action follow-up in one platform. You can assess its workflow with a 14-day free trial, with no credit card required.
                        </p>
                        <div style={{ marginTop: "0.35rem", paddingTop: "1rem", borderTop: "1px solid #f3f4f6", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                            <p style={{ ...comparisonType.body(), margin: 0, fontSize: "0.95rem", color: "#111827" }}>
                                Start your 14-day iAudit free trial. No credit card required.
                            </p>
                            <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.35rem", borderRadius: "9999px", backgroundColor: "#006644", color: "#ffffff", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                                Start your 14-day free trial
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <p style={{ ...comparisonType.body(), margin: "0.35rem 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                            Intelex covers environmental, health, safety and quality management, often shortened to EHSQ. The seven alternatives below range from focused ISO audit software to broader EHS platforms, giving you options based on the functions you need to retain.
                        </p>
                    </div>
                </div>
            </section>

            {/* At a glance */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="glance" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        Intelex alternatives at a glance
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 1.5rem", maxWidth: "780px" }}>
                        Published by iAudit. This shortlist is based on publicly documented product capabilities, not hands-on testing or an independent ranking. Features and plan inclusions may change.
                    </p>
                    <GlanceTable isMobile={isMobile} />
                    <p style={{ ...comparisonType.body(), margin: "1.5rem 0 0", fontSize: "0.98rem" }}>
                        When assessing{" "}
                        <Link href="/top-iso-audit-management-software" style={linkStyle}>
                            top ISO audit management software
                        </Link>
                        , follow the process beyond the completed report. Check how findings become assigned actions, what evidence is required for closure and how results inform the next audit.
                    </p>
                </div>
            </section>

            {/* Platform deep dives */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0" }}>
                <div style={{ ...containerStyle, display: "flex", flexDirection: "column", gap: isMobile ? "2.75rem" : "3.5rem" }}>
                    {/* 1. iAudit */}
                    <article id="iaudit" style={{ scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        <h2 style={comparisonType.cardH2(isMobile)}>1. iAudit for ISO audit programmes</h2>
                        <p style={body}>
                            iAudit supports ISO 9001, ISO 14001 and ISO 45001 audit programmes. It brings planning, evidence, findings and corrective actions into a connected process, helping auditors record their work and managers follow up the results.
                        </p>
                        <p style={body}>
                            Developed by{" "}
                            <Link href="/about" style={linkStyle}>certified ISO auditors and consultants</Link>, the platform is designed around the practical stages of an audit. Teams can define the scope, collect supporting evidence, review findings and verify whether actions have addressed the issues identified.
                        </p>

                        <div style={{ background: "#f8faf9", border: "1px solid #e5e7eb", borderRadius: "14px", padding: isMobile ? "1.25rem" : "1.75rem", margin: "1.25rem 0" }}>
                            <h3 style={{ ...comparisonType.cardH2(isMobile), fontSize: "1.2rem", margin: "0 0 0.85rem", color: "#00472f" }}>
                                What your team can do
                            </h3>
                            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Set clear audit responsibilities.</strong> Define scope and criteria, schedule work and assign auditors across relevant sites and standards.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Keep evidence connected to each check.</strong> Capture photographs, notes and documents against audit questions so findings have supporting context.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Assign and track corrective actions.</strong> Record owners and deadlines, monitor progress and verify effectiveness.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Review results across audits.</strong> Use reports and dashboards to identify patterns and support management reviews.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Use findings in future planning.</strong> A <Link href="/pdca-cycle-audit-software" style={linkStyle}>PDCA-based audit workflow</Link> connects audit results with the next round of planning and improvement.</span>
                                </li>
                            </ul>
                        </div>

                        <p style={body}>
                            For organisations evaluating{" "}
                            <Link href="/audit-management-software-built-by-auditors" style={linkStyle}>audit management software built by auditors</Link>, iAudit provides a focused option for organising ISO audit work.
                        </p>
                        <p style={body}>
                            <strong>Consider iAudit if:</strong> your main requirement is a structured audit programme with evidence, accountable action owners and follow-up through to verified closure.
                        </p>
                        <p style={body}>
                            <strong>Check before choosing:</strong> the standards, site allowances and user roles included in your chosen plan. If you currently use Intelex for incident management, occupational health, training or environmental records, assess those requirements alongside the audit workflow.
                        </p>

                        {/* Industry badges */}
                        <div style={{ marginTop: "1.25rem", marginBottom: "1.5rem" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 650, color: "#111827", margin: "0 0 0.5rem" }}>
                                Industries supported by iAudit
                            </h3>
                            <p style={{ ...body, margin: "0 0 0.85rem", fontSize: "0.95rem" }}>
                                iAudit supports ISO audit programmes across manufacturing, construction, healthcare and other sectors. Teams can organise audit scope, evidence and follow-up around their sites and operational processes.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                                {industries.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            padding: "0.4rem 0.85rem",
                                            borderRadius: "9999px",
                                            backgroundColor: "#f3faf6",
                                            border: "1px solid #cce3d8",
                                            color: "#00472f",
                                            fontSize: "0.88rem",
                                            fontWeight: 500,
                                            textDecoration: "none",
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/pricing"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.75rem 1.45rem",
                                borderRadius: "8px",
                                backgroundColor: "#006644",
                                color: "#ffffff",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                textDecoration: "none",
                            }}
                        >
                            Explore iAudit plans and start your 14-day free trial →
                        </Link>
                    </article>

                    {/* 2. Cority */}
                    <PlatformCard
                        id="cority"
                        title="2. Cority for audits within broader EHS and quality processes"
                        intro={[
                            "Cority provides audit and inspection management within a broader platform covering environmental, health, safety, quality and sustainability processes. It is relevant when audits depend on information held across several operational functions.",
                            "Its audit offering addresses safety, environmental, quality and compliance audits. This gives organisations a way to assess whether they can maintain a consistent approach to different audit types within a wider system.",
                        ]}
                        features={[
                            "Audit and inspection management across several operational disciplines.",
                            "Wider incident, risk and compliance management capabilities.",
                            "Document control and reporting within the broader platform.",
                            "Support for organisations managing operations across multiple sites.",
                        ]}
                        consider="you need audits to sit alongside wider EHS and quality processes."
                        check="how findings connect with actions and supporting records, which capabilities are included in the proposed scope and how site-level access will work. Ask the vendor to demonstrate the connections using a process your team already follows."
                        customClosing={
                            <>
                                <a href="https://www.cority.com/corityone/audit-inspections/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Cority’s audit and inspection software
                                </a>{" "}
                                provides the starting point for assessing its audit capabilities.
                            </>
                        }
                    />

                    {/* 3. VelocityEHS */}
                    <PlatformCard
                        id="velocityehs"
                        title="3. VelocityEHS for safety and compliance audit programmes"
                        intro={[
                            "VelocityEHS supports audit planning, scheduling, checklist configuration and reporting across departments and locations. Its audit offering covers compliance audits and internal audits against corporate requirements and management system standards, including ISO 14001 and ISO 45001.",
                            "Teams can assign actions against individual audit items and use notifications to support follow-up. Summary reports and programme-level metrics help managers review results across the audit programme.",
                        ]}
                        features={[
                            "Centralised audit schedules, requirements and reports.",
                            "Configurable checklists for different audit types.",
                            "Corrective-action assignment and automated notifications.",
                            "Regulatory-content integrations available with a subscription.",
                        ]}
                        consider="you need safety and compliance audits with consistent scheduling, action ownership and reporting."
                        check="which audit functions, content subscriptions and wider modules are included. Confirm whether the proposed setup supports the standards and internal criteria your organisation needs to assess."
                        customClosing={
                            <>
                                <a href="https://www.ehs.com/solution/safety/audit/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    VelocityEHS audit management
                                </a>{" "}
                                documents its approach to internal audits, compliance checks and follow-up.
                            </>
                        }
                    />

                    {/* 4. EcoOnline */}
                    <PlatformCard
                        id="ecoonline"
                        title="4. EcoOnline for workplace audits and inspections"
                        intro={[
                            "EcoOnline offers EHS audit and inspection software with recurring schedules, configurable questions and corrective-action tracking. Teams can complete work in the field, including offline in areas with limited connectivity.",
                            "Its reporting brings audit, inspection and observation data into a central system. Managers can review emerging patterns and track whether the actions raised have been completed.",
                        ]}
                        features={[
                            "Recurring audit schedules and automatic notifications.",
                            "Dynamic questions for adjusting audit and inspection forms.",
                            "Offline fieldwork.",
                            "Corrective-action tracking and dashboards.",
                        ]}
                        consider="your team carries out regular workplace audits and inspections and needs consistent follow-up across locations."
                        check="how the mobile process works on your team’s devices, what information is available offline and how records synchronise. Also test the evidence and review steps required to close an action."
                        customClosing={
                            <>
                                <a href="https://www.ecoonline.com/ehs-software/audits-inspections/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    EcoOnline’s EHS audits and inspections software
                                </a>{" "}
                                is relevant to organisations connecting field checks with wider safety processes.
                            </>
                        }
                    />

                    {/* 5. EHS Insight */}
                    <PlatformCard
                        id="ehsinsight"
                        title="5. EHS Insight for audits alongside daily EHS activities"
                        intro={[
                            "EHS Insight provides audit and inspection management alongside modules for incidents, training, compliance and other EHS activities. Its audit tools support custom inspection forms, findings and corrective actions.",
                            "The platform is relevant when audit work needs to form part of day-to-day EHS management. Its mobile offering supports audits, inspections and incident reporting with or without an internet connection.",
                        ]}
                        features={[
                            "Custom forms for audits and inspections.",
                            "Findings and corrective-action management.",
                            "Mobile working with offline capabilities.",
                            "Additional EHS modules for related processes.",
                        ]}
                        consider="you need to coordinate audits with daily safety and compliance activities."
                        check="the modules required for your workflow, the relationship between audit findings and other EHS records, and the reporting available across sites. Test offline behaviour with a representative inspection and its attachments."
                        customClosing={
                            <>
                                <a href="https://www.ehsinsight.com/solutions/modules/safety-audit-software" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    EHS Insight’s audit and inspection management module
                                </a>{" "}
                                explains how these activities fit within the platform.
                            </>
                        }
                    />

                    {/* 6. Enablon */}
                    <PlatformCard
                        id="enablon"
                        title="6. Enablon for audits and compliance across locations"
                        intro={[
                            "Enablon supports audits and compliance alongside document control, inspections and corrective-action plans. Its offering is relevant to organisations that need consistent processes across locations.",
                            "Teams can assess compliance against internal policies and regulatory requirements, maintain controlled documents and review action-plan progress. Performance metrics support the collection and reporting of information from multiple sites.",
                        ]}
                        features={[
                            "Standardised audits through desktop and mobile tools.",
                            "Compliance management at organisational and site levels.",
                            "Document control with version history.",
                            "Corrective and preventive action plans.",
                        ]}
                        consider="you need a broad system for audits, compliance and related operational processes across locations."
                        check="the configuration, integrations and implementation services required. Ask how local requirements can be represented while retaining consistent reporting across the organisation."
                        customClosing={
                            <>
                                <a href="https://www.wolterskluwer.com/en/solutions/enablon/quality-software" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Enablon’s quality and audit management capabilities
                                </a>{" "}
                                cover several functions that may need to remain connected when replacing Intelex.
                            </>
                        }
                    />

                    {/* 7. Benchmark Gensuite */}
                    <PlatformCard
                        id="benchmark"
                        title="7. Benchmark Gensuite for audit planning and regulatory compliance"
                        intro={[
                            "Benchmark Gensuite offers a set of regulatory compliance and auditing applications. Its Audit Planner supports programme scheduling, resource allocation and the management of qualified auditors, while other applications support audit execution and assessments.",
                            "Its field auditing tools include mobile working without connectivity and photo and video capture. The distinction between applications matters when evaluating the complete process from planning to follow-up.",
                        ]}
                        features={[
                            "Audit programme planning and scheduling.",
                            "Auditor qualification records and participation history.",
                            "Mobile field audits with photographic and video evidence.",
                            "Connected tools for regulatory assessments and follow-up.",
                        ]}
                        consider="you need to coordinate audit resources, fieldwork and regulatory compliance activities across an organisation."
                        check="which applications are included and how records move between them. Demonstrate one audit from scheduling through findings and follow-up to confirm the full proposed scope."
                        customClosing={
                            <>
                                <a href="https://benchmarkgensuite.com/regulatory-compliance-auditing/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Benchmark Gensuite’s compliance and auditing tools
                                </a>{" "}
                                outline the separate functions within its offering.
                            </>
                        }
                    />
                </div>
            </section>

            {/* How to choose an Intelex alternative */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="how-to-choose" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 1rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        How to choose an Intelex alternative
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 2rem", maxWidth: "780px" }}>
                        A useful shortlist reflects the parts of Intelex your team actually uses. Before arranging demonstrations, map the processes, people and records that the replacement must support.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Identify the functions you need to retain</h3>
                            <p style={body}>
                                List your active audit, incident, training, document, environmental and quality processes. Identify which teams use them and where information moves between functions.
                            </p>
                            <p style={body}>
                                For example, an audit finding may link to a controlled procedure, a training requirement and a corrective action. Your evaluation should establish how those connections will be maintained.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                If your scope is limited to ISO audit management, prioritise audit criteria, evidence, findings and action verification.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Test an audit from planning to verified closure</h3>
                            <p style={body}>
                                Give each vendor the same example. Ask them to demonstrate scheduling, auditor assignment, evidence capture, findings, corrective actions and final review.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Check what happens when an action becomes overdue, ownership changes or the reviewer decides that the evidence is insufficient. These situations reveal more about the workflow than a completed report alone.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Check field access and permissions</h3>
                            <p style={body}>
                                Where your teams work on site, test the software on the devices and connections they use. Confirm what must be downloaded before working offline and how completed records synchronise.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Review permissions for auditors, managers, action owners and external participants. Establish who can view sensitive records, change findings and approve closure.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Plan migration around records and relationships</h3>
                            <p style={body}>
                                Confirm how existing audit reports, attachments, action histories and other records can be exported and retained. Ask the replacement vendor which information can be imported and what may require a separate archive.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Use a sample migration to check completeness. An imported file is only part of the picture if its connection to a finding or action has been lost.
                            </p>
                        </div>

                        <div style={{ ...adviceCard, ...(isMobile ? {} : { gridColumn: "1 / -1", maxWidth: "600px", margin: "0 auto", width: "100%" }) }}>
                            <h3 style={adviceCardTitle}>Compare the complete implementation scope</h3>
                            <p style={body}>
                                Account for modules, user access, site allowances, configuration, migration, integrations, training and support. Establish who will administer the system after launch.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                For a focused ISO audit programme, assess whether the selected software provides the required workflow without adding processes your team does not need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section style={{ background: "linear-gradient(160deg, #004d3d 0%, #006644 55%, #0b7a52 100%)", padding: isMobile ? "3rem 0" : "4.5rem 0" }}>
                <div style={{ ...containerStyle, textAlign: "center" }}>
                    <h2 style={{ ...comparisonType.sectionH2(isMobile), color: "#ffffff", margin: "0 0 1rem" }}>
                        Try iAudit free for 14 days
                    </h2>
                    <p style={{ margin: "0 auto 1rem", maxWidth: "740px", fontSize: "1.02rem", lineHeight: 1.7, color: "rgba(255,255,255,0.92)" }}>
                        If ISO audit management is your priority, use iAudit’s 14-day free trial to assess the platform with your own audit process.
                    </p>
                    <p style={{ margin: "0 auto 1.25rem", maxWidth: "740px", fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
                        Choose a representative audit, define the scope and review how evidence and findings are recorded. Involve the people responsible for corrective actions so you can assess assignment, follow-up and review from their perspective. Select from{" "}
                        <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>iAudit plans for ISO audit programmes</Link> according to your standards, site requirements and team structure.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
                        <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.95rem 2rem", borderRadius: "9999px", backgroundColor: "#ffffff", color: "#004d3d", fontWeight: 600, fontSize: "0.98rem", textDecoration: "none" }}>
                            Start your 14-day free trial
                            <span aria-hidden="true">→</span>
                        </Link>
                        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>No credit card required.</span>
                    </div>
                </div>
            </section>

            <FAQAccordion items={faqItems} heading="Frequently asked questions" sparkleText="FAQ" />
            <Footer />
        </div>
    );
}

const body: React.CSSProperties = {
    ...comparisonType.body(),
    margin: "0 0 1rem",
    color: "#374151",
};

const bulletItem: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.6rem",
    fontSize: "0.98rem",
    lineHeight: 1.6,
    color: "#374151",
};

const bulletDot: React.CSSProperties = {
    color: "#006644",
    fontWeight: 700,
    lineHeight: 1.3,
};

const adviceCard: React.CSSProperties = {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "1.5rem",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
    boxSizing: "border-box",
};

const adviceCardTitle: React.CSSProperties = {
    fontSize: "1.15rem",
    fontWeight: 650,
    color: "#111827",
    margin: "0 0 0.75rem",
};

function PlatformCard({
    id,
    title,
    intro,
    features,
    consider,
    check,
    customClosing,
}: {
    id: string;
    title: string;
    intro: string[];
    features: string[];
    consider: string;
    check: string;
    customClosing: React.ReactNode;
}) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <article id={id} style={{ scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
            <h2 style={{ ...comparisonType.cardH2(isMobile), margin: "0 0 0.85rem" }}>{title}</h2>
            {intro.map((p) => (
                <p key={p} style={body}>{p}</p>
            ))}

            <div style={{ background: "#f8faf9", border: "1px solid #e5e7eb", borderRadius: "14px", padding: isMobile ? "1.25rem" : "1.5rem", margin: "1.25rem 0" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 650, margin: "0 0 0.75rem", color: "#00472f" }}>
                    Features to consider
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {features.map((f) => (
                        <li key={f} style={bulletItem}>
                            <span style={bulletDot}>•</span>
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <p style={body}>
                <strong>Consider {title.split(" ")[1]} if:</strong> {consider}
            </p>
            <p style={body}>
                <strong>Check before choosing:</strong> {check}
            </p>
            <p style={{ ...body, margin: 0 }}>
                {customClosing}
            </p>
        </article>
    );
}

function GlanceTable({ isMobile }: { isMobile: boolean }) {
    if (isMobile) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {glanceRows.map((row) => (
                    <a key={row.id} href={`#${row.id}`} style={{ display: "block", background: row.id === "iaudit" ? "#f3faf6" : "#ffffff", border: row.id === "iaudit" ? "1px solid #cce3d8" : "1px solid #e5e7eb", borderRadius: "14px", padding: "1rem 1.1rem", textDecoration: "none" }}>
                        <p style={{ margin: "0 0 0.35rem", fontWeight: 650, color: "#00472f" }}>{row.software}</p>
                        <p style={{ margin: "0 0 0.35rem", fontSize: "0.88rem", fontWeight: 600, color: "#006644" }}>{row.requirement}</p>
                        <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.55, fontSize: "0.92rem" }}>{row.capabilities}</p>
                    </a>
                ))}
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflowX: "auto", boxShadow: "0 8px 24px rgba(17, 24, 39, 0.04)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: PP_NEUE_MONTREAL }}>
                <thead>
                    <tr style={{ background: "#f8faf9" }}>
                        {["Software", "Main requirement it addresses", "Capabilities to assess"].map((heading) => (
                            <th key={heading} style={{ textAlign: "left", padding: "0.95rem 1.15rem", borderBottom: "1px solid #e5e7eb", color: "#111827", fontWeight: 650, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {glanceRows.map((row) => (
                        <tr key={row.id} style={{ background: row.id === "iaudit" ? "#f3faf6" : "#ffffff", borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "1rem 1.15rem", fontWeight: 650, verticalAlign: "top", width: "20%" }}>
                                <a href={`#${row.id}`} style={{ color: "#00472f", textDecoration: "none" }}>{row.software}</a>
                            </td>
                            <td style={{ padding: "1rem 1.15rem", color: "#111827", fontWeight: 500, verticalAlign: "top", width: "32%" }}>{row.requirement}</td>
                            <td style={{ padding: "1rem 1.15rem", color: "#4b5563", lineHeight: 1.6, verticalAlign: "top" }}>{row.capabilities}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
