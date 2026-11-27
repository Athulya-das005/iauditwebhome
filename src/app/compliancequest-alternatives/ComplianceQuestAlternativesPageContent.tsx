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
        id: "mastercontrol",
        software: "MasterControl",
        requirement: "Connected quality processes in regulated organisations",
        capabilities: "Documents, training, audits, risk and quality events",
    },
    {
        id: "octave",
        software: "Octave Reliance",
        requirement: "Configurable quality management across sites",
        capabilities: "Audits, CAPA, documents, training and supplier quality",
    },
    {
        id: "trackwise",
        software: "TrackWise Digital",
        requirement: "Integrated quality workflows",
        capabilities: "Audit management, CAPA, supplier quality and system integrations",
    },
    {
        id: "qualityze",
        software: "Qualityze",
        requirement: "Salesforce-native quality management",
        capabilities: "Audit planning, execution and connections with wider quality processes",
    },
    {
        id: "qualio",
        software: "Qualio",
        requirement: "Quality management for life sciences teams",
        capabilities: "Documents, quality events, audits and supplier management",
    },
    {
        id: "ideagen",
        software: "Ideagen Quality Management",
        requirement: "Connected audit and quality processes",
        capabilities: "Audits, document control, CAPA, training and supplier quality",
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
        question: "Which ComplianceQuest alternatives should I consider?",
        answer: (
            <span>
                iAudit, MasterControl, Octave Reliance, TrackWise Digital, Qualityze, Qualio and Ideagen Quality Management are relevant options for different requirements. iAudit focuses on ISO audit programmes, while the other platforms provide broader quality management capabilities. Choose according to the processes your replacement needs to support.
            </span>
        ),
    },
    {
        question: "Is iAudit a suitable alternative to ComplianceQuest?",
        answer: (
            <span>
                iAudit is worth considering when your main requirement is managing ISO 9001, ISO 14001 and ISO 45001 audits. It supports planning, evidence, findings, reporting and corrective-action follow-up. If your current setup also handles training, document approvals or other quality processes, assess those requirements separately.
            </span>
        ),
    },
    {
        question: "Can iAudit replace a complete quality management system?",
        answer: (
            <span>
                That depends on the scope you need. iAudit’s documented focus is ISO audit management. It should not be assumed to replace every document-control, training, supplier or product-related function in a broader QMS. Map your essential processes and confirm how each would be supported before choosing.
            </span>
        ),
    },
    {
        question: "Which ComplianceQuest alternatives are built on Salesforce?",
        answer: (
            <span>
                TrackWise Digital and Qualityze use Salesforce technology. Qualityze describes its platform as Salesforce-native, while TrackWise Digital documents Salesforce-based integration capabilities. A shared technology platform does not guarantee direct migration, so confirm how your records, configurations and permissions would be handled.
            </span>
        ),
    },
    {
        question: "What should we check before migrating ComplianceQuest records?",
        answer: (
            <span>
                Confirm export and import options, attachment handling, historical audit trails, approvals and relationships between records. Include open actions as well as completed work in a sample transfer. Agree how archived information will remain accessible and verify the results before withdrawing access to the previous system.
            </span>
        ),
    },
    {
        question: "Can iAudit support ISO audits across multiple sites?",
        answer: (
            <span>
                Yes. Relevant iAudit plans include multi-site audits and dashboards. Its industry offering includes{" "}
                <Link href="/industries/manufacturing-iso-audit-software" style={linkStyle}>manufacturing ISO audit management</Link>,{" "}
                <Link href="/industries/construction-iso-audit-software" style={linkStyle}>construction ISO audits</Link> and other sectors. Confirm the standards and site allowances in your chosen plan.
            </span>
        ),
    },
    {
        question: "Does iAudit offer a free trial?",
        answer: (
            <span>
                Yes. You can{" "}
                <Link href="/pricing" style={linkStyle}>try iAudit free for 14 days</Link> without providing credit card details. Use the trial to assess audit planning, evidence capture, findings and corrective-action follow-up against your organisation’s requirements.
            </span>
        ),
    },
];

export default function ComplianceQuestAlternativesPageContent() {
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
                        <SectionTag isMobile={isMobile}>ComplianceQuest alternatives</SectionTag>
                    </div>
                    <h1 style={{ ...comparisonType.heroH1(isMobile), margin: "0 0 1.5rem" }}>
                        7 ComplianceQuest Alternatives for ISO Audits and Quality Management
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
                            Looking for ComplianceQuest alternatives? Start with the processes your organisation needs to manage. Planning ISO audits and following up findings requires a different scope from replacing document control, training, supplier records and product-related quality processes together.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            If ISO audit management is your priority, iAudit connects planning, evidence, findings and corrective actions in one platform. You can assess the workflow with a 14-day free trial, with no credit card required.
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
                            ComplianceQuest offers connected quality processes alongside wider product, supplier and safety capabilities. These seven alternatives address different parts of that scope, helping you build a shortlist around the work your team actually performs.
                        </p>
                    </div>
                </div>
            </section>

            {/* At a glance */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="glance" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        ComplianceQuest alternatives at a glance
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
                        , check how evidence, findings and corrective actions remain connected throughout the audit cycle. A completed report should make the next steps clear, including who owns each action and how closure will be reviewed.
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
                            iAudit is designed for teams managing ISO 9001, ISO 14001 and ISO 45001 audit programmes. It brings audit preparation, evidence collection, findings and follow-up into a shared workflow, helping auditors and managers work from the same records.
                        </p>
                        <p style={body}>
                            Developed by{" "}
                            <Link href="/about" style={linkStyle}>certified ISO auditors and consultants</Link>, the platform reflects the practical steps involved in defining audit criteria, assessing evidence and verifying corrective actions. This makes it relevant when your main reason for considering ComplianceQuest alternatives is improving how ISO audits are managed.
                        </p>

                        <div style={{ background: "#f8faf9", border: "1px solid #e5e7eb", borderRadius: "14px", padding: isMobile ? "1.25rem" : "1.75rem", margin: "1.25rem 0" }}>
                            <h3 style={{ ...comparisonType.cardH2(isMobile), fontSize: "1.2rem", margin: "0 0 0.85rem", color: "#00472f" }}>
                                What your team can do
                            </h3>
                            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Plan audits around clear criteria.</strong> Define scope, schedule work and assign auditors across relevant sites and standards.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Keep evidence connected to audit questions.</strong> Record photographs, notes and documents alongside the checks they support.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Give findings a clear follow-up process.</strong> Assign action owners and deadlines, track progress and verify effectiveness.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Review results across the programme.</strong> Use reports and dashboards to identify patterns and support management reviews.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Use findings to inform future work.</strong> A <Link href="/pdca-cycle-audit-software" style={linkStyle}>PDCA-based audit workflow</Link> connects planning, execution, review and improvement.</span>
                                </li>
                            </ul>
                        </div>

                        <p style={body}>
                            For organisations assessing{" "}
                            <Link href="/audit-management-software-built-by-auditors" style={linkStyle}>
                                audit management software built by auditors
                            </Link>
                            , iAudit provides a focused way to organise the audit cycle.
                        </p>

                        <p style={body}>
                            <strong>Consider iAudit if:</strong> you need structured ISO audit management with evidence, accountable action owners and follow-up through to verified closure.
                        </p>
                        <p style={body}>
                            <strong>Check before choosing:</strong> the standards, site allowances and user roles included in your chosen plan. If you also need document approval workflows, training administration or product lifecycle management, assess those requirements separately.
                        </p>

                        {/* Industries section */}
                        <div style={{ marginTop: "1.75rem", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 650, color: "#111827", margin: "0 0 0.5rem" }}>
                                Industries supported by iAudit
                            </h3>
                            <p style={{ ...body, margin: "0 0 1rem" }}>
                                iAudit supports ISO audit programmes across manufacturing, construction, healthcare and other sectors. Teams can define audit scope and collect evidence around their own processes, sites and operational priorities.
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "0.75rem", margin: "1rem 0 1.5rem" }}>
                                {industries.map((ind) => (
                                    <Link
                                        key={ind.label}
                                        href={ind.href}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            padding: "0.85rem 0.75rem",
                                            background: "#f8faf9",
                                            border: "1px solid #d1fae5",
                                            borderRadius: "10px",
                                            color: "#00472f",
                                            fontWeight: 600,
                                            fontSize: "0.88rem",
                                            textDecoration: "none",
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {ind.label}
                                    </Link>
                                ))}
                            </div>
                            <p style={{ ...body, margin: 0 }}>
                                <Link href="/pricing" style={linkStyle}>
                                    Explore iAudit plans and start your 14-day free trial
                                </Link>
                            </p>
                        </div>
                    </article>

                    {/* 2. MasterControl */}
                    <PlatformCard
                        id="mastercontrol"
                        title="2. MasterControl for connected quality processes in regulated organisations"
                        intro={[
                            "MasterControl connects audit management with documents, training, change control, risk and quality-event management. It is relevant when your replacement needs to support several quality processes, particularly in pharmaceutical and medical device environments.",
                            "Its audit functionality can connect findings with corrective and preventive action processes. Teams can therefore assess how an issue identified during an audit moves into investigation, action and review within the wider system.",
                        ]}
                        features={[
                            "Document control and change management.",
                            "Training management connected with quality processes.",
                            "Audit preparation, execution and follow-up.",
                            "Quality-event and CAPA workflows.",
                        ]}
                        consider="your requirements extend beyond audits to connected quality records and processes."
                        check="the modules, configuration, validation support and implementation services included in the proposal. Ask the vendor to demonstrate a finding that leads to a document change and a training requirement."
                        customClosing={
                            <>
                                <a href="https://www.mastercontrol.com/quality-management-system/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    MasterControl quality management software
                                </a>{" "}
                                provides a broader scope than a dedicated audit platform.
                            </>
                        }
                    />

                    {/* 3. Octave Reliance */}
                    <PlatformCard
                        id="octave"
                        title="3. Octave Reliance for configurable quality management across sites"
                        intro={[
                            "Octave Reliance, formerly ETQ Reliance, provides configurable quality management with more than 40 applications. Its offering includes audit management, CAPA, document control, training and supplier quality.",
                            "It is relevant when organisations need to represent different processes while maintaining consistent records across locations. Its application designer supports changes to forms, workflows and rules without writing code.",
                        ]}
                        features={[
                            "Audit planning, execution, approval and reporting.",
                            "Connected document, training and CAPA processes.",
                            "Configurable forms and workflows.",
                            "Integrations with enterprise systems such as ERP and PLM platforms.",
                        ]}
                        consider="you need a broad quality management system that can accommodate multiple sites and process variations."
                        check="the applications and integrations included, who will maintain the configuration and how changes will be reviewed after implementation."
                        customClosing={
                            <>
                                <a href="https://www.octave.com/reliance" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Octave Reliance
                                </a>{" "}
                                is the current name to use when researching products previously listed as ETQ Reliance.
                            </>
                        }
                    />

                    {/* 4. TrackWise Digital */}
                    <PlatformCard
                        id="trackwise"
                        title="4. TrackWise Digital for integrated quality workflows"
                        intro={[
                            "TrackWise Digital is a cloud-based quality management system with integrated modules for quality processes. Its audit offering connects with the wider quality suite, while CAPA functionality supports the investigation and resolution of issues.",
                            "Its Salesforce technology provides an additional reason to consider it when platform architecture and integration requirements influence your shortlist. Using related technology does not, however, establish that records or configurations can transfer directly from ComplianceQuest.",
                        ]}
                        features={[
                            "Audit lifecycle management within a connected quality suite.",
                            "CAPA processes linked with wider quality activities.",
                            "Supplier quality workflows, including supplier audits.",
                            "Integration capabilities for connecting operational and quality data.",
                        ]}
                        consider="you need configurable quality workflows and want to assess a Salesforce-based option."
                        check="process configuration, integration requirements and migration support. Use a representative audit finding to test how records remain connected through investigation and closure."
                        customClosing={
                            <>
                                <a href="https://www.spartasystems.com/resources/digital-audit-management-software/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    TrackWise Digital audit management
                                </a>{" "}
                                explains its role within the wider quality suite.
                            </>
                        }
                    />

                    {/* 5. Qualityze */}
                    <PlatformCard
                        id="qualityze"
                        title="5. Qualityze for Salesforce-native quality management"
                        intro={[
                            "Qualityze provides Salesforce-native enterprise quality management software. Its audit module supports planning, scheduling and execution, including online and offline audits.",
                            "The audit offering connects with wider supplier, safety, compliance and product quality processes. This makes it relevant when you need to assess how audit activity fits into a broader quality system.",
                        ]}
                        features={[
                            "Audit planning and scheduling.",
                            "Online and offline audit execution.",
                            "Connections with wider quality and supplier processes.",
                            "Salesforce-native architecture.",
                        ]}
                        consider="you want to assess audit management within a broader Salesforce-based quality platform."
                        check="which modules are needed to complete your process and how findings connect with corrective actions and supporting records. Test offline functions on your team’s devices, and confirm what administration and configuration the proposed setup requires."
                        customClosing={
                            <>
                                <a href="https://www.qualityze.com/audit-management" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Qualityze audit management software
                                </a>{" "}
                                documents the capabilities available for planning and conducting audits.
                            </>
                        }
                    />

                    {/* 6. Qualio */}
                    <PlatformCard
                        id="qualio"
                        title="6. Qualio for quality management for life sciences teams"
                        intro={[
                            "Qualio provides quality management software for life sciences teams, including pharmaceutical, biotechnology and medical device organisations. Its offering covers documents, quality events, audits and supplier management.",
                            "It is relevant when audit preparation depends on records maintained throughout the quality system. The evaluation should establish how those records can be assembled, reviewed and connected with any findings raised.",
                        ]}
                        features={[
                            "Document management for quality records.",
                            "Quality-event and CAPA processes.",
                            "Audit management within the wider platform.",
                            "Supplier management and related oversight.",
                        ]}
                        consider="your organisation needs quality management suited to life sciences processes and records."
                        check="how the proposed package fits your products, required workflows and reporting. Ask for a demonstration that follows an issue from an audit finding through corrective action and effectiveness review."
                        customClosing={
                            <>
                                <a href="https://www.qualio.com/compliance-platform/quality" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Qualio’s quality management platform
                                </a>{" "}
                                brings together functions that may be important when replacing a broader QMS.
                            </>
                        }
                    />

                    {/* 7. Ideagen Quality Management */}
                    <PlatformCard
                        id="ideagen"
                        title="7. Ideagen Quality Management for connected audit and quality processes"
                        intro={[
                            "Ideagen Quality Management connects audits with document control, CAPA, training and supplier quality. It is relevant to organisations that need to retain several quality processes when moving from ComplianceQuest.",
                            "The breadth of its offering makes the proposed package important. Teams should establish which functions are included and how information passes between the modules used by auditors, quality managers and other employees.",
                        ]}
                        features={[
                            "Audit management and reporting.",
                            "Document control linked with quality processes.",
                            "Corrective and preventive action management.",
                            "Training and supplier quality capabilities.",
                        ]}
                        consider="you need an alternative covering audits and connected quality functions."
                        check="the edition, modules and implementation scope proposed for your organisation. Test document approvals, action reviews and training-related workflows using your own examples."
                        customClosing={
                            <>
                                <a href="https://www.ideagen.com/solutions/quality/quality-management" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Ideagen Quality Management
                                </a>{" "}
                                provides a wider QMS option for teams whose requirements extend beyond audit management.
                            </>
                        }
                    />
                </div>
            </section>

            {/* How to choose a ComplianceQuest alternative */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="how-to-choose" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 1rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        How to choose a ComplianceQuest alternative
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 2rem", maxWidth: "780px" }}>
                        A useful evaluation starts with the processes and records you need to retain. Replacing audit management is a different project from replacing a system that also handles training, supplier records, product information and quality events.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Define the scope before comparing products</h3>
                            <p style={body}>
                                List the functions your team actively uses and identify who owns each process. Include audits, CAPA, non-conformance, documents, training and any supplier, product or safety functions that form part of your setup.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                For a focused ISO audit programme, prioritise criteria, evidence, findings, action ownership and verification. For a broader replacement, map the connections between quality processes before arranging demonstrations.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Follow the relationships between records</h3>
                            <p style={body}>
                                Use an example that involves more than one process. An audit finding might lead to an investigation, a revised procedure and additional training.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Ask each vendor to demonstrate how these records remain connected. Check whether a reviewer can understand the history of the issue without searching across unrelated screens or exported files.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Review platform and integration requirements</h3>
                            <p style={body}>
                                Identify the systems that exchange information with your current setup, including any Salesforce-related dependencies.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Confirm which integrations are available, which require configuration and who will maintain them. Moving between platforms built on Salesforce does not automatically preserve workflows, permissions or data relationships.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Test migration with representative records</h3>
                            <p style={body}>
                                Include completed audits, open actions, attachments, approvals and historical records in a sample migration. Confirm which information can be imported and what may need a readable archive.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Check the relationships between records as well as the files themselves. An attachment may transfer successfully while its connection to the original finding needs separate work.
                            </p>
                        </div>

                        <div style={{ ...adviceCard, ...(isMobile ? {} : { gridColumn: "1 / -1", maxWidth: "600px", margin: "0 auto", width: "100%" }) }}>
                            <h3 style={adviceCardTitle}>Compare the full cost and administration</h3>
                            <p style={body}>
                                Assess subscriptions alongside modules, configuration, migration, integrations, training and support. Establish who will manage access, update workflows and maintain reporting after launch.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Use trials and demonstrations to assess regular tasks from the perspective of auditors, action owners and reviewers. The right system should fit the process your people need to carry out.
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
                        If ISO audit management is your priority, use iAudit’s 14-day free trial to assess the workflow with a representative audit.
                    </p>
                    <p style={{ margin: "0 auto 1.25rem", maxWidth: "740px", fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
                        Define the scope, organise the checklist, capture evidence and review how findings move into corrective actions. Involve the people responsible for follow-up so you can assess ownership, deadlines and review requirements together. Choose from{" "}
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
