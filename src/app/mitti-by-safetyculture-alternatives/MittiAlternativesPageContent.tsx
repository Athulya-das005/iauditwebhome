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
        mainUse: "ISO audit programmes",
        capabilities: "Audit planning, evidence, findings, corrective actions and PDCA workflows",
    },
    {
        id: "goaudits",
        software: "GoAudits",
        mainUse: "Regular operational audits",
        capabilities: "Mobile inspections, reports, task follow-up and dashboards",
    },
    {
        id: "lumiform",
        software: "Lumiform",
        mainUse: "Consistent checks across locations",
        capabilities: "Digital checklists, offline capture, corrective actions and reporting",
    },
    {
        id: "xenia",
        software: "Xenia",
        mainUse: "Location standards and inspection follow-up",
        capabilities: "Audit scoring, photographic evidence and linked corrective actions",
    },
    {
        id: "gocanvas",
        software: "GoCanvas",
        mainUse: "Custom inspection forms and field processes",
        capabilities: "Offline forms, photographs and automated hand-offs",
    },
    {
        id: "fulcrum",
        software: "Fulcrum",
        mainUse: "Location-based field inspections",
        capabilities: "Geotagged records, offline collection and task assignment",
    },
    {
        id: "isotracker",
        software: "isoTracker",
        mainUse: "Internal audits and quality processes",
        capabilities: "Audit management, CAPA, reminders and connected quality modules",
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
        question: "Is Mitti the same as SafetyCulture?",
        answer: (
            <span>
                Mitti is the new name for the SafetyCulture platform. Its offering includes inspections, actions and other workplace operations tools. If you are researching SafetyCulture alternatives, check the current Mitti product information to understand which functions your replacement needs to cover.
            </span>
        ),
    },
    {
        question: "Which Mitti by SafetyCulture alternatives should I consider for ISO audits?",
        answer: (
            <span>
                iAudit and isoTracker are relevant starting points for teams focused on audit management. iAudit supports ISO 9001, ISO 14001 and ISO 45001 audit workflows, while isoTracker offers audit management with optional connected quality modules. Assess how each handles your criteria, evidence, findings and corrective actions. Our{" "}
                <Link href="/top-iso-audit-management-software" style={linkStyle}>ISO audit software guide</Link> covers a broader shortlist.
            </span>
        ),
    },
    {
        question: "Which alternatives support offline inspections?",
        answer: (
            <span>
                Lumiform, GoCanvas and Fulcrum document offline data capture, while Xenia describes offline capture of audit photos and videos. Offline coverage varies by function, so test the exact checklist, evidence and synchronisation process your team needs before choosing.
            </span>
        ),
    },
    {
        question: "What should I check before switching from Mitti?",
        answer: (
            <span>
                Review the functions your team uses, required reporting, access permissions, offline requirements and integrations. Then test a complete audit or inspection, including action follow-up. Confirm the total cost and how you will retain existing records before making the change.
            </span>
        ),
    },
    {
        question: "Can I transfer existing inspection records to another platform?",
        answer: (
            <span>
                That depends on the export options in your current system and the import capabilities of the replacement. Ask both vendors about checklists, responses, photographs, attachments and action histories. Test a small sample first, and do not assume every part of a historical record will transfer automatically.
            </span>
        ),
    },
    {
        question: "Does iAudit support audits across multiple sites?",
        answer: (
            <span>
                Yes. iAudit offers multi-site audit and dashboard features on relevant plans. Check the{" "}
                <Link href="/pricing" style={linkStyle}>current pricing page</Link> for the standards and site allowances included, and discuss requirements that extend beyond the listed options.
            </span>
        ),
    },
    {
        question: "Can I try iAudit for free?",
        answer: (
            <span>
                Yes. iAudit offers a 14-day free trial with no credit card required. Visit the{" "}
                <Link href="/pricing" style={linkStyle}>pricing page</Link> to get started and review the available plans.
            </span>
        ),
    },
];

export default function MittiAlternativesPageContent() {
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
                        <SectionTag isMobile={isMobile}>Mitti alternatives</SectionTag>
                    </div>
                    <h1 style={{ ...comparisonType.heroH1(isMobile), margin: "0 0 1.5rem" }}>
                        7 Mitti by SafetyCulture Alternatives for Audits and Inspections
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
                            Looking for Mitti by SafetyCulture alternatives? Start with the work your team needs to manage. An ISO audit programme, a daily site inspection and an equipment check can involve different evidence, reporting and follow-up requirements.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            If ISO audits are your priority, iAudit brings planning, evidence, findings and corrective actions into a connected workflow. You can explore the platform with a 14-day free trial, with no credit card required.
                        </p>
                        <div style={{ marginTop: "0.35rem", paddingTop: "1rem", borderTop: "1px solid #f3f4f6", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                            <p style={{ ...comparisonType.body(), margin: 0, fontSize: "0.95rem", color: "#111827" }}>
                                Try iAudit free for 14 days. No credit card required.
                            </p>
                            <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.35rem", borderRadius: "9999px", backgroundColor: "#006644", color: "#ffffff", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                                Start your 14-day free trial
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <p style={{ ...comparisonType.body(), margin: "0.35rem 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
                            This guide covers seven alternatives, from dedicated audit management software to mobile inspection and field data tools. Mitti itself supports ISO audits and corrective actions, so the decision comes down to how well each platform fits your processes.
                        </p>
                    </div>
                </div>
            </section>

            {/* At a glance */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="glance" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        Mitti alternatives at a glance
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 1.5rem", maxWidth: "780px" }}>
                        Published by iAudit. This shortlist is based on publicly documented product capabilities, rather than hands-on testing or an independent ranking. Features and plan inclusions can change.
                    </p>
                    <GlanceTable isMobile={isMobile} />
                    <p style={{ ...comparisonType.body(), margin: "1.5rem 0 0", fontSize: "0.98rem" }}>
                        For a broader shortlist focused on management system audits, read our guide to{" "}
                        <Link href="/top-iso-audit-management-software" style={linkStyle}>
                            top ISO audit management software
                        </Link>.
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
                            iAudit is built for teams managing ISO 9001, ISO 14001 and ISO 45001 audits. It connects the stages of an audit programme, helping auditors organise their work and managers follow up the results.
                        </p>
                        <p style={body}>
                            Developed by certified ISO auditors and consultants, the platform reflects the practical requirements of planning audits, collecting evidence and reviewing findings. Learn more about the{" "}
                            <Link href="/about" style={linkStyle}>people behind iAudit</Link> and its{" "}
                            <Link href="/audit-management-software-built-by-auditors" style={linkStyle}>audit management software built by auditors</Link>.
                        </p>

                        <div style={{ background: "#f8faf9", border: "1px solid #e5e7eb", borderRadius: "14px", padding: isMobile ? "1.25rem" : "1.75rem", margin: "1.25rem 0" }}>
                            <h3 style={{ ...comparisonType.cardH2(isMobile), fontSize: "1.2rem", margin: "0 0 0.85rem", color: "#00472f" }}>
                                What your team can do
                            </h3>
                            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Plan audits with a clear scope.</strong> Define criteria, schedule work and assign auditors so responsibilities are established before the audit begins.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Keep evidence connected to findings.</strong> Record supporting information within the audit process, making results easier to review and explain.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Give corrective actions an owner.</strong> Assign responsibilities and deadlines, track progress and verify whether the action has been effective.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Review results across locations.</strong> Multi-site features on relevant plans help managers assess audit activity beyond an individual site.</span>
                                </li>
                                <li style={bulletItem}>
                                    <span style={bulletDot}>•</span>
                                    <span><strong>Use findings to inform future audits.</strong> The <Link href="/pdca-cycle-audit-software" style={linkStyle}>PDCA audit workflow</Link> connects planning, execution, review and improvement.</span>
                                </li>
                            </ul>
                        </div>

                        <p style={body}>
                            iAudit is worth considering if your main requirement is an organised ISO audit programme with clear evidence and follow-up. During evaluation, check how your standards, sites and user roles fit the available plans. If you also use Mitti for training or asset management, assess those requirements separately.
                        </p>

                        {/* Industry badges */}
                        <div style={{ marginTop: "1.25rem", marginBottom: "1.5rem" }}>
                            <p style={{ margin: "0 0 0.65rem", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#6b7280" }}>
                                Industry solutions
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

                    {/* 2. GoAudits */}
                    <PlatformCard
                        id="goaudits"
                        title="2. GoAudits for regular operational audits"
                        intro={[
                            "GoAudits is an audit and inspection platform for teams carrying out regular checks across sites. Its mobile auditing, reports and task workflows make it relevant when your Mitti usage centres on operational inspections.",
                            "Inspectors can record results on mobile devices, while managers review reports and dashboards to identify areas needing attention. Task follow-up helps connect inspection results with the work required afterwards.",
                        ]}
                        features={[
                            "Mobile auditing for checks carried out at the point of work.",
                            "Inspection reports for sharing findings with colleagues.",
                            "Tasks and workflows for assigning follow-up work.",
                            "Dashboards for reviewing results across locations.",
                        ]}
                        consider="your team conducts frequent site audits and needs a consistent way to report results and follow up issues."
                        check="whether its checklist structure, scoring and reporting match your audit requirements, including the depth of evidence you need to retain."
                        linkText="Explore GoAudits"
                        linkHref="https://goaudits.com/"
                    />

                    {/* 3. Lumiform */}
                    <PlatformCard
                        id="lumiform"
                        title="3. Lumiform for consistent checks across locations"
                        intro={[
                            "Lumiform supports digital inspections, checklists and corrective actions. Teams can complete forms on mobile devices, record photographs and signatures, and continue working offline before synchronising their data.",
                            "This makes it a relevant Mitti alternative for organisations that need consistent checks across several locations, including areas with unreliable connectivity. Managers can review results and follow up actions without relying on separate messages for every issue.",
                        ]}
                        features={[
                            "Mobile forms that adapt to responses.",
                            "Offline data capture for work in areas without a reliable connection.",
                            "Photographs and signatures to support inspection records.",
                            "Follow-up actions and reporting across locations.",
                        ]}
                        consider="your priority is standardising routine checks and making the resulting actions visible to supervisors."
                        check="how actions are assigned, reviewed and closed, and whether the reporting gives you the detail needed for your audit programme."
                        linkText="Explore Lumiform"
                        linkHref="https://lumiformapp.com/product/mobile-app"
                    />

                    {/* 4. Xenia */}
                    <PlatformCard
                        id="xenia"
                        title="4. Xenia for location standards and inspection follow-up"
                        intro={[
                            "Xenia combines inspections with location scoring and corrective-action follow-up. It is relevant for organisations that need to check whether the same standards are being followed across multiple premises.",
                            "Its inspection tools support weighted scores, photographic evidence and corrective actions linked to the original audit. Managers can review performance by location and track what happens after an inspection identifies a problem.",
                        ]}
                        features={[
                            "Configurable scoring to give critical checks greater weight.",
                            "Photo and video evidence, including offline capture.",
                            "Corrective-action tasks connected to their originating audits.",
                            "Reporting on action completion by location and timeframe.",
                        ]}
                        consider="your inspections focus on location standards and the follow-up work needed to maintain them."
                        check="whether your scoring model reflects the importance of individual findings. Also test how unresolved actions remain visible between inspections."
                        linkText="Explore Xenia"
                        linkHref="https://www.xenia.team/software/audits-inspections"
                    />

                    {/* 5. GoCanvas */}
                    <PlatformCard
                        id="gocanvas"
                        title="5. GoCanvas for custom inspection forms and field processes"
                        intro={[
                            "GoCanvas helps teams replace paper forms with digital records and connect fieldwork with office processes. It is relevant when your main requirement is collecting inspection information in a format that matches your existing work.",
                            "Teams can customise forms, capture photographs and enter data offline. Automated workflows support the transfer of information between people, reducing the need to re-enter inspection details into separate records.",
                        ]}
                        features={[
                            "Customisable forms for inspections, safety checks and operational records.",
                            "Offline entry for jobsites with limited connectivity.",
                            "Photo capture and annotation to explain findings.",
                            "Workflow hand-offs and integrations for sharing field information.",
                        ]}
                        consider="you need flexible digital forms that connect inspections with broader field and administrative processes."
                        check="how much configuration your audit workflow needs, particularly for findings, corrective-action review and historical reporting. Test a complete process, rather than the form alone."
                        linkText="Explore GoCanvas"
                        linkHref="https://www.gocanvas.com/faq"
                    />

                    {/* 6. Fulcrum */}
                    <PlatformCard
                        id="fulcrum"
                        title="6. Fulcrum for location-based field inspections"
                        intro={[
                            "Fulcrum is a field operations and data collection platform with location-based inspection capabilities. It is relevant when knowing exactly where a finding was recorded is central to the work.",
                            "Teams can collect geotagged inspection data, work offline and synchronise records when connectivity returns. Task scheduling and assignment support inspections, asset maintenance and follow-up work.",
                        ]}
                        features={[
                            "Geotagged records for connecting findings to a location.",
                            "Offline collection for remote sites.",
                            "Configurable field forms and workflows.",
                            "Scheduled tasks for inspections and subsequent work.",
                        ]}
                        consider="your inspections are organised around physical locations, infrastructure or assets, and you need field records that preserve that context."
                        check="how location data, photographs and task status appear in your reports. If ISO audit management is also required, assess how you would represent audit criteria, findings and action verification."
                        linkText="Explore Fulcrum"
                        linkHref="https://www.fulcrumapp.com/platform/"
                    />

                    {/* 7. isoTracker */}
                    <PlatformCard
                        id="isotracker"
                        title="7. isoTracker for internal audits and quality processes"
                        intro={[
                            "isoTracker provides audit management software that can be used independently or connected with other quality management modules. It is relevant for teams looking at Mitti alternatives primarily for internal audits and quality processes.",
                            "Its audit features cover preparation, execution and review, with corrective and preventive action functionality and automated reminders. Reports help teams document results and follow up issues raised during audits.",
                        ]}
                        features={[
                            "Internal audit planning and review.",
                            "CAPA functionality for addressing audit issues.",
                            "Automated reminders to support follow-up.",
                            "Audit reporting and optional connections to other quality modules.",
                        ]}
                        consider="you want an audit management tool with the option to connect additional quality processes."
                        check="which modules your workflow requires and how information moves between them. Confirm that the proposed package covers the full process you intend to use."
                        linkText="Explore isoTracker"
                        linkHref="https://www.isotracker.com/products/audit-management-software/"
                    />
                </div>
            </section>

            {/* How to choose a Mitti alternative */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="how-to-choose" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 1rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        How to choose a Mitti alternative
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 2rem", maxWidth: "780px" }}>
                        Start with a recent audit or inspection and follow it from preparation to final closure. Use that same example when assessing each platform so you can judge the work involved at every stage.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Identify the work you need to support</h3>
                            <p style={body}>
                                List the Mitti functions your team currently uses. Include inspections, actions, training, assets and documents where relevant. An alternative may suit your audit programme without replacing every operational tool your organisation uses.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                For ISO audits, assess scope, criteria, evidence, findings and corrective-action verification. For routine inspections, check mobile entry, scoring, reporting and supervisor follow-up.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Test what happens after a finding</h3>
                            <p style={{ ...body, margin: 0 }}>
                                Create a sample issue and assign it to someone. Check how they receive it, add evidence and submit it for review. Confirm whether the process supports your requirements for approving closure and checking effectiveness.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Check offline working and existing records</h3>
                            <p style={body}>
                                If your team works without reliable connectivity, test the relevant functions on the devices they use. Confirm what must be downloaded beforehand and how data synchronises afterwards.
                            </p>
                            <p style={{ ...body, margin: 0 }}>
                                Before moving historical records, check export formats and import support. Photographs, attachments, action histories and timestamps may need different handling from checklist responses. Keep a readable archive until you have verified the transfer.
                            </p>
                        </div>

                        <div style={adviceCard}>
                            <h3 style={adviceCardTitle}>Compare the complete cost</h3>
                            <p style={{ ...body, margin: 0 }}>
                                Check the users, sites, features and modules included in each proposal. Account for setup, training, integrations and support alongside subscription fees. Ask vendors to demonstrate the workflow you need using the plan you are considering.
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
                        If your priority is managing ISO audits, use iAudit's 14-day free trial to assess the platform against your own process.
                    </p>
                    <p style={{ margin: "0 auto 1.25rem", maxWidth: "740px", fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
                        Choose a representative audit and review how you would plan the work, record evidence, document findings and follow up corrective actions. Involve the people who will conduct audits and those responsible for reviewing the results. Compare the available plans against your standards, locations and user roles before deciding.
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
    linkText,
    linkHref,
}: {
    id: string;
    title: string;
    intro: string[];
    features: string[];
    consider: string;
    check: string;
    linkText: string;
    linkHref: string;
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
                <strong>Check during evaluation:</strong> {check}
            </p>
            <p style={{ ...body, margin: 0 }}>
                <a href={linkHref} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {linkText}
                </a>
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
                        <p style={{ margin: "0 0 0.35rem", fontSize: "0.88rem", fontWeight: 600, color: "#006644" }}>{row.mainUse}</p>
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
                        {["Software", "Main use to consider", "Relevant capabilities"].map((heading) => (
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
                            <td style={{ padding: "1rem 1.15rem", color: "#111827", fontWeight: 500, verticalAlign: "top", width: "32%" }}>{row.mainUse}</td>
                            <td style={{ padding: "1rem 1.15rem", color: "#4b5563", lineHeight: 1.6, verticalAlign: "top" }}>{row.capabilities}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
