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
        capabilities: "Documents, training, audits, change control and quality events",
    },
    {
        id: "compliancequest",
        software: "ComplianceQuest",
        requirement: "Quality management on Salesforce",
        capabilities: "Audits, CAPA, non-conformance, documents and training",
    },
    {
        id: "ideagen",
        software: "Ideagen Quality Management",
        requirement: "Audits within a broader quality system",
        capabilities: "Document control, CAPA, training and supplier quality",
    },
    {
        id: "qualio",
        software: "Qualio",
        requirement: "Quality management for life sciences teams",
        capabilities: "Documents, quality events, audits and supplier management",
    },
    {
        id: "intellect",
        software: "Intellect",
        requirement: "Connected quality processes and manufacturing operations",
        capabilities: "Audits, non-conformance, CAPA and training",
    },
    {
        id: "arena",
        software: "Arena",
        requirement: "Quality management connected to product records",
        capabilities: "CAPA, product changes, documents and quality histories",
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
        question: "Is Octave Reliance the same as ETQ Reliance?",
        answer: (
            <span>
                Octave Reliance is the current name for the product formerly known as ETQ Reliance. If you are researching ETQ Reliance alternatives, check the current Octave product information and the specific applications used in your organisation.
            </span>
        ),
    },
    {
        question: "Which Octave Reliance alternatives should I consider?",
        answer: (
            <span>
                iAudit, MasterControl, ComplianceQuest, Ideagen Quality Management, Qualio, Intellect and Arena address different requirements. iAudit focuses on ISO audit programmes, while the other options offer broader quality management or product-related capabilities. Choose according to the workflows and records you need to retain.
            </span>
        ),
    },
    {
        question: "Is iAudit a suitable alternative to Octave Reliance?",
        answer: (
            <span>
                iAudit is worth considering when your main requirement is managing ISO 9001, ISO 14001 and ISO 45001 audits. It supports planning, evidence, findings and corrective-action follow-up. If your current setup also manages documents, training, supplier quality or product processes, assess those requirements separately.
            </span>
        ),
    },
    {
        question: "Does Octave Reliance already support audits and corrective actions?",
        answer: (
            <span>
                Yes. Octave Reliance documents audit planning, execution, approval and reporting, with investigations and corrective actions initiated from findings. Choosing an alternative should therefore focus on fit, workflow and scope rather than assuming those capabilities are missing.
            </span>
        ),
    },
    {
        question: "What should we check before migrating from ETQ or Octave Reliance?",
        answer: (
            <span>
                Review your applications, configured fields, approval stages, integrations and historical records. Confirm what the replacement can import and test a sample that includes attachments and open actions. Agree how archived records will remain accessible before withdrawing access to the previous system.
            </span>
        ),
    },
    {
        question: "Can iAudit support ISO audits across multiple sites?",
        answer: (
            <span>
                Yes. Relevant plans include multi-site audits and dashboards. Its industry offering includes{" "}
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
                <Link href="/pricing" style={linkStyle}>try iAudit free for 14 days</Link> without providing credit card details. Use the trial to assess audit planning, evidence capture, findings and corrective-action follow-up against your organisation’s requirements.
            </span>
        ),
    },
];

export default function OctaveRelianceAlternativesPageContent() {
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
                        <SectionTag isMobile={isMobile}>Octave Reliance alternatives</SectionTag>
                    </div>
                    <h1 style={{ ...comparisonType.heroH1(isMobile), margin: "0 0 1.5rem" }}>
                        7 Octave Reliance Alternatives for ISO Audits and Quality Management
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
                            Looking for Octave Reliance alternatives? The right choice depends on which parts of your quality system you need to retain. An ISO audit programme may need planning, evidence and corrective-action follow-up, while a broader replacement may also need document control, training, supplier records and product information.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            If ISO audits are your priority, iAudit connects the audit cycle in one platform. You can assess its workflow with a 14-day free trial, with no credit card required.
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
                            Octave Reliance, formerly ETQ Reliance, is a configurable quality management system with applications covering audits, CAPA, documents, training and supplier quality. The seven alternatives below offer different approaches to managing these requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* At a glance */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="glance" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        Octave Reliance alternatives at a glance
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
                        , test how each platform connects audit evidence, findings and corrective actions through to verified closure. If you are replacing a wider QMS, include the records and workflows that sit around those audits.
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
                            iAudit supports ISO 9001, ISO 14001 and ISO 45001 audit programmes. It brings planning, evidence collection, findings and follow-up into a shared workflow, helping auditors record their work and managers review the results.
                        </p>
                        <p style={body}>
                            Developed by{" "}
                            <Link href="/about" style={linkStyle}>certified ISO auditors and consultants</Link>, the platform focuses on the practical stages of an audit. Teams can define scope and criteria, record supporting evidence and verify whether corrective actions have addressed the issues identified.
                        </p>

                        <div style={{ background: "#f8faf9", border: "1px solid #e5e7eb", borderRadius: "14px", padding: isMobile ? "1.25rem" : "1.75rem", margin: "1.25rem 0" }}>
                            <h3 style={{ ...comparisonType.cardH2(isMobile), fontSize: "1.2rem", margin: "0 0 0.85rem", color: "#00472f" }}>
                                What your team can do
                            </h3>
                            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Plan audits with clear responsibilities.</strong> Define scope, schedule work and assign auditors across relevant sites and standards.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Record evidence against audit questions.</strong> Keep photographs, notes and documents connected to the checks they support.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Give findings an accountable owner.</strong> Assign corrective actions with deadlines and track progress through review.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Check whether actions have worked.</strong> Verify effectiveness as part of the follow-up process.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Use results to inform future audits.</strong> A <Link href="/pdca-cycle-audit-software" style={linkStyle}>PDCA-based audit workflow</Link> connects planning, execution, review and improvement.</span>
                                </li>
                            </ul>
                        </div>

                        <p style={body}>
                            For organisations assessing{" "}
                            <Link href="/audit-management-software-built-by-auditors" style={linkStyle}>
                                audit management software built by auditors
                            </Link>
                            , iAudit offers a focused way to organise ISO audit work.
                        </p>

                        <p style={body}>
                            <strong>Consider iAudit if:</strong> you need an audit programme with structured evidence, clear action ownership and follow-up through to verified closure.
                        </p>
                        <p style={body}>
                            <strong>Check before choosing:</strong> the standards, site allowances and user roles included in your chosen plan. If your Reliance setup also manages document approvals, employee training or supplier quality, assess those requirements separately.
                        </p>

                        {/* Industries section */}
                        <div style={{ marginTop: "1.75rem", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 650, color: "#111827", margin: "0 0 0.5rem" }}>
                                Industries supported by iAudit
                            </h3>
                            <p style={{ ...body, margin: "0 0 1rem" }}>
                                iAudit supports ISO audit programmes across manufacturing, construction, healthcare and other sectors. Teams can organise audit scope, evidence and actions around their locations and operational processes.
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
                            "MasterControl connects audit management with document control, training, change control, risk and quality-event management. It is relevant when your replacement needs to support several quality processes, particularly in pharmaceutical and medical device environments.",
                            "Its audit functionality can connect findings with corrective and preventive action processes. This allows teams to assess how issues move from an audit into investigation, action and review within the wider quality system.",
                        ]}
                        features={[
                            "Document and change control.",
                            "Training management connected with quality processes.",
                            "Audit preparation, execution and follow-up.",
                            "Quality-event and CAPA workflows.",
                        ]}
                        consider="you need to retain connected quality records and processes beyond audit management."
                        check="the modules, configuration, validation support and implementation services included. Ask the vendor to demonstrate how an audit finding leads to a revised procedure and any resulting training."
                        customClosing={
                            <>
                                <a href="https://www.mastercontrol.com/quality-management-system/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    MasterControl quality management software
                                </a>{" "}
                                provides a broad QMS option for organisations with these requirements.
                            </>
                        }
                    />

                    {/* 3. ComplianceQuest */}
                    <PlatformCard
                        id="compliancequest"
                        title="3. ComplianceQuest for quality management on Salesforce"
                        intro={[
                            "ComplianceQuest provides a Salesforce-based platform with quality management functions covering audits, CAPA, non-conformance, documents, training, change and risk. Its wider offering includes supplier and product processes.",
                            "It is relevant when replacing Reliance involves maintaining connections between several quality functions. The proposed module scope and platform requirements should therefore form part of the evaluation.",
                        ]}
                        features={[
                            "Audit management alongside CAPA and non-conformance.",
                            "Document and training management.",
                            "Change and risk processes.",
                            "Wider supplier and product capabilities.",
                        ]}
                        consider="you need connected quality workflows and want to assess a Salesforce-based platform."
                        check="which functions are included, how the platform will connect with existing systems and who will maintain the configuration. Follow a representative finding from audit through investigation and action review."
                        customClosing={
                            <>
                                <a href="https://www.compliancequest.com/quality-quest/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    ComplianceQuest’s QualityQuest offering
                                </a>{" "}
                                brings together functions that may be important when replacing a wider quality management system.
                            </>
                        }
                    />

                    {/* 4. Ideagen Quality Management */}
                    <PlatformCard
                        id="ideagen"
                        title="4. Ideagen Quality Management for audits within a broader quality system"
                        intro={[
                            "Ideagen Quality Management combines audits with document control, CAPA, training and supplier quality. It is relevant when audit evidence and follow-up depend on records held across the quality system.",
                            "The scope of the proposed package matters. Teams should establish how their auditors, quality managers and other employees would access and update the records used in each process.",
                        ]}
                        features={[
                            "Audit management and reporting.",
                            "Document control connected with quality processes.",
                            "Corrective and preventive action management.",
                            "Training and supplier quality capabilities.",
                        ]}
                        consider="you need audits to remain connected with wider quality functions."
                        check="the edition, modules and implementation scope included in the proposal. Test approval stages, action reviews and cross-site reporting using examples from your current process."
                        customClosing={
                            <>
                                <a href="https://www.ideagen.com/solutions/quality/quality-management" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Ideagen Quality Management
                                </a>{" "}
                                is a broader option for organisations whose requirements extend beyond scheduling and conducting audits.
                            </>
                        }
                    />

                    {/* 5. Qualio */}
                    <PlatformCard
                        id="qualio"
                        title="5. Qualio for quality management for life sciences teams"
                        intro={[
                            "Qualio provides quality management software for life sciences teams, including pharmaceutical, biotechnology and medical device organisations. Its offering covers documents, quality events, audits and supplier management.",
                            "It is worth considering when audit preparation depends on the accessibility and traceability of quality records. Evaluating how those records connect can help establish whether the platform fits your required review and follow-up processes.",
                        ]}
                        features={[
                            "Document management for quality records.",
                            "Quality-event and CAPA processes.",
                            "Audit management within the wider platform.",
                            "Supplier management and oversight.",
                        ]}
                        consider="your organisation needs quality management suited to life sciences processes and records."
                        check="how the proposed package fits your products, workflows and reporting requirements. Ask for a demonstration involving an audit finding, supporting records and the resulting corrective action."
                        customClosing={
                            <>
                                <a href="https://www.qualio.com/compliance-platform/quality" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Qualio’s quality management platform
                                </a>{" "}
                                provides a distinct option for teams evaluating sector-focused QMS software.
                            </>
                        }
                    />

                    {/* 6. Intellect */}
                    <PlatformCard
                        id="intellect"
                        title="6. Intellect for connected quality processes and manufacturing operations"
                        intro={[
                            "Intellect connects audit management with non-conformance, CAPA, training and wider manufacturing processes. Its documented audit capabilities include planning, scheduling, execution and tracking of internal and external audits.",
                            "This makes it relevant when the replacement needs to connect audit activity with the issues identified during daily operations. Teams should assess how findings and actions remain visible as work passes between functions.",
                        ]}
                        features={[
                            "Internal and external audit management.",
                            "Connections between non-conformance and CAPA.",
                            "Audit findings linked with wider quality processes.",
                            "Connections with training and operational checks.",
                        ]}
                        consider="you need audit management within a connected manufacturing quality system."
                        check="how your processes would be configured, who would maintain them and how auditors review the history of an issue. Test whether reporting preserves the detail needed across sites and departments."
                        customClosing={
                            <>
                                <a href="https://intellect.com/platform/quality-management" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Intellect quality management software
                                </a>{" "}
                                documents the relationship between audits, quality events and follow-up activities.
                            </>
                        }
                    />

                    {/* 7. Arena */}
                    <PlatformCard
                        id="arena"
                        title="7. Arena for quality management connected to product records"
                        intro={[
                            "Arena connects quality management with product records, including parts, bills of materials, drawings and documents. Its approach is relevant when a quality issue needs to be assessed in the context of the affected product or engineering change.",
                            "Its documented capabilities include CAPA, quality histories and configurable approval processes. This makes it a different type of alternative from software focused primarily on running an ISO audit programme.",
                        ]}
                        features={[
                            "Quality processes linked to product records.",
                            "CAPA and non-conformance histories.",
                            "Connections with engineering changes.",
                            "Configurable approvals and collaboration with internal teams and suppliers.",
                        ]}
                        consider="you need quality management closely connected with product development and manufacturing information."
                        check="how product changes, supplier records and quality actions remain connected. If audit scheduling and execution are essential, ask the vendor to demonstrate those requirements explicitly."
                        customClosing={
                            <>
                                <a href="https://www.arenasolutions.com/solutions/quality-management/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Arena quality management software
                                </a>{" "}
                                is designed around the relationship between product information and quality processes.
                            </>
                        }
                    />
                </div>
            </section>

            {/* How to choose an Octave Reliance alternative */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="how-to-choose" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 1rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        How to choose an Octave Reliance alternative
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 2rem", maxWidth: "780px" }}>
                        Replacing a configurable QMS involves more than matching a feature list. The important question is which workflows, records and integrations your organisation needs to retain.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Review the applications you actually use</h3>
                            <p style={body}>
                                List the Reliance applications used by each team. Include audits, CAPA, documents, training, supplier records and any other processes within your setup.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Identify which are essential to the replacement and which could remain in another system. If the requirement is limited to ISO audit management, concentrate on the audit cycle rather than evaluating every possible QMS function.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Map configured workflows</h3>
                            <p style={body}>
                                Document custom fields, approval stages, notifications, permissions and site-specific variations. These details may shape the work required to introduce a new platform.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Ask vendors to demonstrate one of your actual workflows. Check what can be configured directly, what requires additional work and who will maintain it after launch.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Follow connected records</h3>
                            <p style={body}>
                                Use an example that crosses several processes. A finding may lead to a corrective action, a document revision and a training assignment.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Check whether the replacement can preserve the history and relationships your team needs. Auditors should be able to understand why a change occurred and what happened afterwards.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Assess integrations and migration</h3>
                            <p style={body}>
                                Identify connections with ERP, PLM and other operational systems. Confirm which integrations are available and what needs to be rebuilt.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Test migration with representative audits, attachments, approvals and open actions. Check that links between records survive, rather than assessing only whether individual files have transferred.
                            </p>
                        </div>

                        <div style={{ ...adviceCard, ...(isMobile ? {} : { gridColumn: "1 / -1", maxWidth: "600px", margin: "0 auto", width: "100%" }) }}>
                            <h3 style={adviceCardTitle}>Compare the full implementation scope</h3>
                            <p style={body}>
                                Include configuration, data migration, integrations, training, support and ongoing administration alongside subscription costs.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                For a focused ISO audit programme, use a trial to assess the work auditors and action owners perform regularly. For a wider QMS replacement, involve the people responsible for each connected process before selecting a platform.
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
                        Define the scope, organise the checklist, capture evidence and review how findings move into corrective actions. Involve action owners and reviewers so you can assess the process from each role. Choose from{" "}
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
