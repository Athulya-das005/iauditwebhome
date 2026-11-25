"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, comparisonType } from "@/constants/typography";

const glanceRows = [
    { id: "iaudit-global", platform: "iAudit Global", when: "Run internal ISO audits and verify whether corrective actions have worked across sites." },
    { id: "goaudits", platform: "GoAudits", when: "Carry out inspections offline and send a report with photographs from the visit." },
    { id: "mitti", platform: "Mitti by SafetyCulture", when: "Give operational teams one place to record routine inspections and follow up issues." },
    { id: "ideagen", platform: "Ideagen Quality Management", when: "Manage audit findings alongside controlled documents, training and supplier quality." },
    { id: "intelex", platform: "Intelex", when: "Oversee audits alongside environmental, health, safety and quality activities." },
    { id: "compliancequest", platform: "ComplianceQuest", when: "Manage manufacturing or life sciences audits alongside non-conformances and supplier records." },
    { id: "octave", platform: "Octave Reliance", when: "Configure quality workflows and approval rules for several facilities." },
];

const switchRows = [
    { take: "Closed audit with attachments", check: "Can a reviewer find the original report, supporting evidence, sign-off and closure date? If older records will stay in an archive, test retrieval there." },
    { take: "Open corrective action", check: "Can the owner see the finding, deadline, work completed and evidence still needed?" },
    { take: "Recurring audit schedule", check: "Are the next audit date, scope, location and assigned auditor correct?" },
    { take: "A finding linked to another module", check: "If a finding refers to a procedure or training record, can the reviewer still identify the correct version?" },
    { take: "Your actual user list", check: "Does the quote cover site managers and occasional action owners as well as full-time auditors?" },
];

const industryGroups: { label: string; href: string }[][] = [
    [
        { label: "Manufacturing", href: "/industries/manufacturing-iso-audit-software" },
        { label: "Construction", href: "/industries/construction-iso-audit-software" },
        { label: "Retail", href: "/industries/retail-iso-audit-software" },
        { label: "Transport and Logistics", href: "/industries/transport-and-logistics-iso-audit-software" },
    ],
    [
        { label: "Healthcare", href: "/industries/healthcare-compliance-software" },
        { label: "Pharmaceuticals", href: "/industries/pharmaceutical-compliance-audit-software" },
        { label: "Food and Beverage", href: "/industries/food-and-beverage-iso-audit-software" },
        { label: "Hospitality", href: "/industries/hospitality-iso-audit-software" },
    ],
    [
        { label: "Facilities Management", href: "/industries/facilities-management-iso-audit-software" },
        { label: "Health and Safety", href: "/industries/health-and-safety-iso-audit-software" },
        { label: "Mining", href: "/industries/mining-compliance-software" },
        { label: "Aerospace", href: "/industries/aerospace-iso-audit-software" },
    ],
    [
        { label: "Engineering Services", href: "/industries/engineering-iso-audit-software" },
        { label: "Basic Metals and Fabrication", href: "/industries/basic-metals-and-fabrication-iso-audit-software" },
        { label: "Machinery and Equipment", href: "/industries/machinery-and-equipment-iso-audit-software" },
        { label: "Electrical and Optical Equipment", href: "/industries/electrical-and-optical-equipment-iso-audit-software" },
    ],
];

const linkStyle: React.CSSProperties = {
    color: "#006644",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
};

const faqItems = [
    {
        question: "Which isoTracker alternative supports ISO 9001, ISO 14001 and ISO 45001?",
        answer: (
            <span>
                iAudit Global supports quality, environmental and occupational health and safety audits. If your programme covers all three standards, its Tres plan includes all three and supports up to ten sites.{" "}
                <Link href="/pricing" style={linkStyle}>Check iAudit plan coverage</Link>.
            </span>
        ),
    },
    {
        question: "Can we replace isoTracker’s audit module and keep its document control module?",
        answer: (
            <span>
                isoTracker offers its modules individually. Check your licence terms and test how a finding in the new audit platform will refer to a controlled document retained in isoTracker. Use a document with more than one revision so you can verify that the reference identifies the version the auditor examined.
            </span>
        ),
    },
    {
        question: "Which alternative is suitable for auditors working offline?",
        answer: (
            <span>
                GoAudits supports offline inspections on mobile devices. Try completing a checklist with photographs in an area with poor connectivity, then review what appears in the finished report.{" "}
                <a href="https://goaudits.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>See GoAudits’ mobile inspection features</a>.
            </span>
        ),
    },
    {
        question: "Will our audit history transfer automatically?",
        answer: (
            <span>
                Transfer options depend on the records you can export and the formats the receiving system accepts. Ask the provider to demonstrate what happens to attachments, approvals and dates using one of your completed audits.
            </span>
        ),
    },
    {
        question: "How should we evaluate a platform for several sites?",
        answer: (
            <span>
                Give a site manager and a group auditor separate tasks. The site manager should be able to find their own overdue actions. The group auditor should be able to identify repeat findings across sites. Check the permissions and plan both people would need.
            </span>
        ),
    },
    {
        question: "What costs should we include when switching?",
        answer: (
            <span>
                Alongside the subscription, include setup, data migration, staff training and any period when both products will be in use. Ask how the price changes if you add another site or ISO standard.
            </span>
        ),
    },
    {
        question: "Can we try iAudit Global before choosing a plan?",
        answer: (
            <span>
                Yes. The 14-day free trial requires no credit card.{" "}
                <Link href="/pricing" style={linkStyle}>View trial details</Link>.
            </span>
        ),
    },
];

export default function IsotrackerAlternativesPageContent() {
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
                        <SectionTag isMobile={isMobile}>isoTracker alternatives</SectionTag>
                    </div>
                    <h1 style={{ ...comparisonType.heroH1(isMobile), margin: "0 0 1.5rem" }}>
                        7 isoTracker Alternatives for ISO Audit Management
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
                            Which part of isoTracker are you looking to replace? If your team uses it to schedule internal audits and follow up findings, a dedicated ISO audit platform may cover what you need. If you also rely on it for document approvals, training records or complaints, those records belong on your shortlist of requirements too.{" "}
                            <a href="https://www.isotracker.com/products/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore isoTracker’s quality management modules</a>.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            For teams auditing to{" "}
                            <Link href="/standards/iso-9001-audit-management-software" style={linkStyle}>ISO 9001</Link>,{" "}
                            <Link href="/standards/iso-14001-audit-management-software" style={linkStyle}>ISO 14001</Link> and{" "}
                            <Link href="/standards/iso-45001-audit-management-software" style={linkStyle}>ISO 45001</Link>
                            , iAudit Global brings the audit plan, evidence, findings and corrective actions together. You can use a familiar checklist to see how the process fits your team.
                        </p>
                        <div style={{ marginTop: "0.35rem", paddingTop: "1rem", borderTop: "1px solid #f3f4f6", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                            <p style={{ ...comparisonType.body(), margin: 0, fontSize: "0.95rem", color: "#111827" }}>
                                Try iAudit Global free for 14 days. No credit card required.
                            </p>
                            <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.35rem", borderRadius: "9999px", backgroundColor: "#006644", color: "#ffffff", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                                Start your 14-day free trial
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="glance" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        isoTracker alternatives at a glance
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 1.5rem", maxWidth: "740px" }}>
                        This guide is published by iAudit Global and includes our own platform. Product details are drawn from each provider’s published information.
                    </p>
                    <GlanceTable isMobile={isMobile} />
                </div>
            </section>

            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0" }}>
                <div style={{ ...containerStyle, display: "flex", flexDirection: "column", gap: isMobile ? "2.75rem" : "3.5rem" }}>
                    <article id="iaudit-global" style={{ scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        <h2 style={comparisonType.cardH2(isMobile)}>1. iAudit Global for ISO audits and corrective action follow-up</h2>
                        <p style={body}>At your next management review, someone asks why a finding was closed. Can the auditor show what went wrong, who addressed it and what evidence showed the fix worked?</p>
                        <p style={body}>
                            Our platform follows Plan, Do, Check, Act (PDCA). Set the scope and criteria before the audit, capture evidence against the relevant question, review findings and assign corrective actions. Each action has an owner and a deadline, and the auditor can record an effectiveness check before closure.{" "}
                            <Link href="/pdca-cycle-audit-software" style={linkStyle}>See how the PDCA audit workflow works</Link>.
                        </p>
                        <p style={body}>Take an outdated work instruction found on a production line. Replacing the sheet fixes the immediate problem. The process owner still needs to establish how it remained in use. In iAudit, the auditor can keep the original observation, the owner’s corrective action and the result of a later spot check together. At management review, the team can see what changed and the evidence behind the closure decision.</p>
                        <p style={body}>
                            iAudit grew out of an internal tool used by practising auditors. Its emphasis on keeping evidence with the finding is part of that history.{" "}
                            <Link href="/audit-management-software-built-by-auditors" style={linkStyle}>Read why our auditors built iAudit</Link> or{" "}
                            <Link href="/about" style={linkStyle}>meet the team behind iAudit Global</Link>.
                        </p>
                        <p style={body}>
                            Which plan fits your audit programme? Unos covers one ISO standard. Dos covers two and adds multi-site dashboards. Tres covers three standards and up to ten sites, with custom checklists and audit performance analytics.{" "}
                            <Link href="/pricing" style={linkStyle}>View plans and pricing</Link>.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                            {industryGroups.map((group) => (
                                <p key={group[0].href} style={{ margin: 0, ...comparisonType.body(), color: "#374151" }}>
                                    {group.map((item, index) => (
                                        <React.Fragment key={item.href}>
                                            {index > 0 && <span style={{ color: "#9CA3AF" }}> · </span>}
                                            <Link href={item.href} style={linkStyle}>{item.label}</Link>
                                        </React.Fragment>
                                    ))}
                                </p>
                            ))}
                        </div>
                    </article>

                    <Platform
                        id="goaudits"
                        title="2. GoAudits for offline site inspections"
                        paragraphs={[
                            "A warehouse auditor can lose the connection halfway through a visit. GoAudits lets them continue working on a phone or tablet, photograph the issue and annotate the image while they are still on site. The inspection can then provide the basis for a report and a follow-up task.",
                        ]}
                        closing={
                            <>
                                This is a practical option if your auditors currently download isoTracker checklists to Excel for offline visits. Try one of those checklists on the mobile app and review the resulting report with the site manager. Can they tell which aisle, asset or process needs attention without calling the auditor?{" "}
                                <a href="https://goaudits.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore GoAudits</a>.
                            </>
                        }
                    />
                    <Platform
                        id="mitti"
                        title="3. Mitti by SafetyCulture for operational checks and audits"
                        paragraphs={[
                            "Mitti, the platform from SafetyCulture, is worth considering when the people carrying out daily safety or quality checks also contribute evidence to formal audits. Its inspection records, audit trails and action tracking give supervisors a way to document what happened and follow up with the person responsible.",
                        ]}
                        closing={
                            <>
                                For a retail team, a useful test is to find a missed check from a previous month. See whether a store supervisor can retrieve the original record and whether the lead auditor can review similar issues across stores.{" "}
                                <a href="https://mitti.com/safety-and-compliance/iso-audit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore Mitti’s ISO audit software</a>.
                            </>
                        }
                    />
                    <Platform
                        id="ideagen"
                        title="4. Ideagen Quality Management for document and training control"
                        paragraphs={[
                            "Ideagen is worth a closer look if an audit finding often leads to a revised procedure and staff training. Its quality management system covers audits, document control, corrective actions, training and supplier quality. That breadth matters if your team already uses several isoTracker modules.",
                        ]}
                        closing={
                            <>
                                Take a procedure you changed after an audit. Ask to see the approved version, the employees affected by the change and their training records. This gives your quality manager a concrete way to judge the configuration being quoted.{" "}
                                <a href="https://www.ideagen.com/solutions/quality/quality-management" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore Ideagen Quality Management</a>.
                            </>
                        }
                    />
                    <Platform
                        id="intelex"
                        title="5. Intelex for environmental, health, safety and quality teams"
                        paragraphs={[
                            "Intelex offers audit management alongside incident management, environmental compliance, inspections and action plans. Consider it when several departments need to investigate the same underlying issue.",
                        ]}
                        closing={
                            <>
                                For example, a spill might appear in an incident log and later in an environmental audit. During a demonstration, follow those two records from the site team to the group manager. Check which applications the team needs to identify the connection, assign responsibility and report progress.{" "}
                                <a href="https://www.intelex.com/products/applications/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore the Intelex applications</a>.
                            </>
                        }
                    />
                    <Platform
                        id="compliancequest"
                        title="6. ComplianceQuest for manufacturing and supplier quality"
                        paragraphs={[
                            "ComplianceQuest brings audits into a quality management system that also covers non-conformances, corrective and preventive actions (CAPA), documents and supplier quality. Its manufacturing and life sciences offerings make it relevant when an audit record needs to follow a component, supplier or production issue through several reviews.",
                        ]}
                        closing={
                            <>
                                Use a supplier finding to assess the fit. Have the provider show how a quality engineer would record the issue, review the supplier’s response and retrieve the evidence when another plant reports a similar problem.{" "}
                                <a href="https://www.compliancequest.com/audit-management/software/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore ComplianceQuest’s manufacturing audit software</a>.
                            </>
                        }
                    />
                    <Platform
                        id="octave"
                        title="7. Octave Reliance for configurable quality workflows"
                        paragraphs={[
                            "Octave Reliance, formerly ETQ Reliance, includes audit management, document control, training, CAPA and supplier quality. Its application designer lets organisations configure forms and approval rules. This can suit a group that wants a common audit process across facilities while retaining local responsibilities.",
                        ]}
                        closing={
                            <>
                                For instance, a local finding might need a site manager’s approval, while the same finding at three plants needs a group-level review. Ask to see how your team would set up those routes and who could amend them after launch.{" "}
                                <a href="https://www.octave.com/reliance" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore Octave Reliance</a>.
                            </>
                        }
                    />
                </div>
            </section>

            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="before-switching" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        What to check before switching from isoTracker
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 1.5rem", maxWidth: "760px" }}>
                        Start with one closed audit and one open corrective action. The closed audit tells you whether a reviewer can retrieve the evidence behind a past decision. The open action tells you whether the person taking it over has enough information to finish the job.
                    </p>
                    <SwitchTable isMobile={isMobile} />
                    <p style={{ ...comparisonType.body(), margin: "1.25rem 0 0", maxWidth: "760px" }}>
                        Ask both providers to confirm export formats, import options and any migration charges. Run the sample transfer before agreeing a changeover date.
                    </p>
                </div>
            </section>

            <section style={{ background: "linear-gradient(160deg, #004d3d 0%, #006644 55%, #0b7a52 100%)", padding: isMobile ? "3rem 0" : "4.5rem 0" }}>
                <div style={{ ...containerStyle, textAlign: "center" }}>
                    <h2 style={{ ...comparisonType.sectionH2(isMobile), color: "#ffffff", margin: "0 0 1rem" }}>
                        Try iAudit Global free for 14 days
                    </h2>
                    <p style={{ margin: "0 auto 1.75rem", maxWidth: "720px", fontSize: "1.02rem", lineHeight: 1.7, color: "rgba(255,255,255,0.92)" }}>
                        Take a finding from your last audit. Ask one colleague to record the evidence, another to take responsibility for the action and the lead auditor to review what they would need before closing it. By the end of the trial, each person can judge how well iAudit fits their part of the process.
                    </p>
                    <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.95rem 2rem", borderRadius: "9999px", backgroundColor: "#ffffff", color: "#004d3d", fontWeight: 600, fontSize: "0.98rem", textDecoration: "none" }}>
                        Start your 14-day free trial
                        <span aria-hidden="true">→</span>
                    </Link>
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

function Platform({ id, title, paragraphs, closing }: { id: string; title: string; paragraphs: string[]; closing: React.ReactNode }) {
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
            {paragraphs.map((text) => (
                <p key={text} style={body}>{text}</p>
            ))}
            <p style={{ ...body, margin: 0 }}>{closing}</p>
        </article>
    );
}

function GlanceTable({ isMobile }: { isMobile: boolean }) {
    if (isMobile) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {glanceRows.map((row) => (
                    <a key={row.id} href={`#${row.id}`} style={{ display: "block", background: row.id === "iaudit-global" ? "#f3faf6" : "#ffffff", border: row.id === "iaudit-global" ? "1px solid #cce3d8" : "1px solid #e5e7eb", borderRadius: "14px", padding: "1rem 1.1rem", textDecoration: "none" }}>
                        <p style={{ margin: "0 0 0.35rem", fontWeight: 650, color: "#00472f" }}>{row.platform}</p>
                        <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.55, fontSize: "0.95rem" }}>{row.when}</p>
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
                        {["Platform", "Shortlist it when you need to…"].map((heading) => (
                            <th key={heading} style={{ textAlign: "left", padding: "0.95rem 1.15rem", borderBottom: "1px solid #e5e7eb", color: "#111827", fontWeight: 650, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {glanceRows.map((row) => (
                        <tr key={row.id} style={{ background: row.id === "iaudit-global" ? "#f3faf6" : "#ffffff", borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "1rem 1.15rem", fontWeight: 650, verticalAlign: "top", width: "32%" }}>
                                <a href={`#${row.id}`} style={{ color: "#00472f", textDecoration: "none" }}>{row.platform}</a>
                            </td>
                            <td style={{ padding: "1rem 1.15rem", color: "#4b5563", lineHeight: 1.6, verticalAlign: "top" }}>{row.when}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function SwitchTable({ isMobile }: { isMobile: boolean }) {
    if (isMobile) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {switchRows.map((row) => (
                    <div key={row.take} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "1rem 1.1rem" }}>
                        <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#006644" }}>Take this from your current process</p>
                        <p style={{ margin: "0 0 0.75rem", fontWeight: 650, color: "#111827" }}>{row.take}</p>
                        <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6b7280" }}>Check it in the proposed setup</p>
                        <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.55 }}>{row.check}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflowX: "auto", boxShadow: "0 8px 24px rgba(17, 24, 39, 0.04)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: PP_NEUE_MONTREAL }}>
                <thead>
                    <tr style={{ background: "#f8faf9" }}>
                        {["Take this from your current process", "Check it in the proposed setup"].map((heading) => (
                            <th key={heading} style={{ textAlign: "left", padding: "0.95rem 1.15rem", borderBottom: "1px solid #e5e7eb", color: "#111827", fontWeight: 650, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {switchRows.map((row, index) => (
                        <tr key={row.take} style={{ background: index % 2 === 1 ? "#fafafa" : "#ffffff", borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "1rem 1.15rem", fontWeight: 650, color: "#111827", verticalAlign: "top", width: "34%", lineHeight: 1.55 }}>{row.take}</td>
                            <td style={{ padding: "1rem 1.15rem", color: "#4b5563", verticalAlign: "top", lineHeight: 1.6 }}>{row.check}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
