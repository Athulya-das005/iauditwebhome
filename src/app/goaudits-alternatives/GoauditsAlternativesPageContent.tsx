"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, comparisonType } from "@/constants/typography";

const glanceRows = [
    {
        id: "iaudit-global",
        platform: "iAudit Global",
        when: "You run formal ISO audits and need to show how findings were investigated, addressed and verified across sites.",
    },
    {
        id: "mitti",
        platform: "Mitti by SafetyCulture",
        when: "Site supervisors carry out frequent operational checks and follow up issues with frontline teams.",
    },
    {
        id: "isotracker",
        platform: "isoTracker",
        when: "You run recurring quality audits and want reusable checklists, corrective actions and the option to add other quality modules.",
    },
    {
        id: "ideagen",
        platform: "Ideagen Quality Management",
        when: "Findings often lead to revised procedures, document approvals or staff training.",
    },
    {
        id: "intelex",
        platform: "Intelex",
        when: "Environmental, health, safety and quality teams need to review audits alongside incidents and action plans.",
    },
    {
        id: "compliancequest",
        platform: "ComplianceQuest",
        when: "Audit findings involve suppliers, production issues and non-conformance records across manufacturing or life sciences operations.",
    },
    {
        id: "octave",
        platform: "Octave Reliance",
        when: "Several facilities share quality procedures but need different forms, responsibilities or approval routes.",
    },
];

const testRows = [
    {
        test: "Complete the inspection offline",
        lookFor: "If offline work is essential, disconnect the device, record a finding and attach a photograph. Reconnect and check the answer, photo and timestamps.",
    },
    {
        test: "Read the finished report",
        lookFor: "Can the manager identify the site, location, issue and next action without asking the inspector to explain?",
    },
    {
        test: "Transfer an open action",
        lookFor: "Check whether the owner, deadline, original observation and attachments survive a sample transfer. Establish which details need to be entered again.",
    },
    {
        test: "Investigate a repeat finding",
        lookFor: "Ask a group auditor to find related issues at two sites, review earlier actions and show what evidence would justify closure.",
    },
    {
        test: "Price the team that will use it",
        lookFor: "Request a quote covering inspectors, occasional action owners, managers and every required site. Include setup, training and migration costs.",
    },
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
        question: "Which GoAudits alternative supports ISO 9001, ISO 14001 and ISO 45001?",
        answer: (
            <span>
                iAudit Global supports all three standards. Its Tres plan covers three standards and up to ten sites.{" "}
                <Link href="/pricing" style={linkStyle}>Check iAudit’s current plan coverage</Link>.
            </span>
        ),
    },
    {
        question: "What should we test if our inspectors work offline?",
        answer: (
            <span>
                Try the device and conditions your inspectors use. Open a checklist, lose the connection partway through, add evidence and finish the inspection. After reconnecting, check what the manager receives and whether the inspector has to repeat any work.
            </span>
        ),
    },
    {
        question: "Can we reuse our existing GoAudits checklists?",
        answer: (
            <span>
                That depends on the export and import formats each platform supports. Ask the receiving provider to rebuild or import one representative checklist. Test scoring, required questions and any rules that change which questions appear.
            </span>
        ),
    },
    {
        question: "How can we retain historical reports and photographs?",
        answer: (
            <span>
                Confirm what you can export from GoAudits before changing subscriptions. Give a sample export to someone who did not conduct the inspection. They should be able to identify the site, date and finding and match each photograph to the correct observation.
            </span>
        ),
    },
    {
        question: "What is the difference between closing a task and verifying corrective action?",
        answer: (
            <span>
                Closing a task records that someone completed the assigned work. Verifying effectiveness checks whether the action addressed the cause. Replacing damaged stock completes a task. Reviewing later deliveries after a handling change helps establish whether the damage has stopped recurring.
            </span>
        ),
    },
    {
        question: "What should a multi-site team check during a demonstration?",
        answer: (
            <span>
                Ask a site supervisor to find their own outstanding actions. Then ask a group manager to find the same issue across locations. Use the permissions each person would have in practice.
            </span>
        ),
    },
    {
        question: "Can we try iAudit Global before choosing a plan?",
        answer: (
            <span>
                Yes. iAudit Global offers a 14-day free trial with no credit card required.{" "}
                <Link href="/pricing" style={linkStyle}>View trial details</Link>.
            </span>
        ),
    },
];

export default function GoauditsAlternativesPageContent() {
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
                        <SectionTag isMobile={isMobile}>GoAudits alternatives</SectionTag>
                    </div>
                    <h1 style={{ ...comparisonType.heroH1(isMobile), margin: "0 0 1.5rem" }}>
                        7 GoAudits Alternatives for ISO Audits and Site Inspections
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
                            Three depots record damaged stock in the same month. Each inspection report includes a photograph, and each supervisor marks the task complete once the stock is replaced. At the next ISO audit, the quality manager still has a question: did anyone find out why the damage kept happening?
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            If you’re looking for GoAudits alternatives, start with what your team needs to do with its findings. GoAudits offers mobile checklists, offline inspections, reports and follow-up tasks. You may need to retain those features, bring several sites into one ISO audit programme or connect findings to training, supplier records and controlled documents.{" "}
                            <a href="https://goaudits.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                Explore GoAudits’ inspection features
                            </a>.
                        </p>
                        <p style={{ ...comparisonType.body(), margin: 0, color: "#374151" }}>
                            For teams auditing to{" "}
                            <Link href="/standards/iso-9001-audit-management-software" style={linkStyle}>ISO 9001</Link>,{" "}
                            <Link href="/standards/iso-14001-audit-management-software" style={linkStyle}>ISO 14001</Link> or{" "}
                            <Link href="/standards/iso-45001-audit-management-software" style={linkStyle}>ISO 45001</Link>
                            , iAudit Global connects audit evidence with the person responsible for corrective action and the follow-up needed to verify it.
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

            {/* At a glance */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="glance" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        GoAudits alternatives at a glance
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 1.5rem", maxWidth: "740px" }}>
                        Published by iAudit Global. This shortlist includes our own platform and draws on each provider’s published product information.
                    </p>
                    <GlanceTable isMobile={isMobile} />
                </div>
            </section>

            {/* Platform deep dives */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0" }}>
                <div style={{ ...containerStyle, display: "flex", flexDirection: "column", gap: isMobile ? "2.75rem" : "3.5rem" }}>
                    {/* 1. iAudit Global */}
                    <article id="iaudit-global" style={{ scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        <h2 style={comparisonType.cardH2(isMobile)}>1. iAudit Global for ISO audits across sites</h2>
                        <p style={body}>
                            iAudit Global gives auditors one record of the audit scope, evidence, findings and corrective actions. It follows Plan, Do, Check, Act (PDCA) from scheduling an audit through to checking whether an action was effective. When someone reviews a closed finding months later, they can see the evidence behind the decision.{" "}
                            <Link href="/pdca-cycle-audit-software" style={linkStyle}>Explore the PDCA audit workflow</Link>.
                        </p>
                        <p style={body}>
                            Return to the three depots. An internal auditor could use the inspection reports to decide where to investigate. Stock damaged on arrival raises different questions from stock damaged during unloading. The auditor can record the evidence behind each finding, assign an owner and agree what to review after the action is taken. If a depot changes its unloading procedure, a later observation and a sample of damage records can help the auditor judge whether the change worked.
                        </p>
                        <p style={body}>
                            At management review, the quality manager can explain why one finding is ready to close and another still needs investigation. The{" "}
                            <Link href="/audit-management-software-built-by-auditors" style={linkStyle}>auditors who built iAudit</Link> designed the workflow around that decision.
                        </p>
                        <p style={body}>
                            Which plan fits your sites? Unos covers one ISO standard. Dos adds multi-site audits and dashboards for two standards. Tres covers three standards and up to ten sites, with custom checklists and audit performance analytics. If your inspectors depend on offline working, include an offline test in your evaluation.{" "}
                            <Link href="/pricing" style={linkStyle}>Check iAudit plans and pricing</Link>.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", marginTop: "1.25rem" }}>
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

                    {/* 2. Mitti by SafetyCulture */}
                    <Platform
                        id="mitti"
                        title="2. Mitti by SafetyCulture for routine site inspections"
                        paragraphs={[
                            "Mitti, the platform from SafetyCulture, is worth considering when the people completing daily checks also need to raise issues and track action on site. A retail supervisor, for example, may need to retrieve last Tuesday’s opening inspection, find the issue flagged by a colleague and see what happened afterwards.",
                        ]}
                        closing={
                            <>
                                Try that task with a supervisor during the demonstration. Then ask an area manager to find similar findings across stores. The two exercises show how the platform fits both the person doing the check and the person reviewing the pattern.{" "}
                                <a href="https://mitti.com/safety-and-compliance/iso-audit" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore Mitti’s ISO audit software</a>.
                            </>
                        }
                    />

                    {/* 3. isoTracker */}
                    <Platform
                        id="isotracker"
                        title="3. isoTracker for recurring audits and corrective actions"
                        paragraphs={[
                            "isoTracker allows teams to reuse checklists, schedule recurring audits and assign corrective actions against failed questions. The audit module can be used on its own. That gives a small quality team the option to introduce auditing first and assess document control or training separately.",
                        ]}
                        closing={
                            <>
                                For GoAudits users, the offline process is worth testing. isoTracker describes downloading a checklist to Excel for offline completion. Run one of your site checklists through that process, including its comments and supporting evidence, to see what the auditor will need to do back at the office.{" "}
                                <a href="https://www.isotracker.com/products/audit-management-software/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore isoTracker audit management</a>.
                            </>
                        }
                    />

                    {/* 4. Ideagen */}
                    <Platform
                        id="ideagen"
                        title="4. Ideagen Quality Management for findings that lead to procedure changes"
                        paragraphs={[
                            "A finding can generate work beyond the inspection itself. If a team has followed an obsolete procedure, the quality manager may need to approve a revision, withdraw the old document and establish who needs training. Ideagen brings audits, document control, corrective actions and training into its quality management system.",
                        ]}
                        closing={
                            <>
                                Take a recently revised procedure to the demonstration. Ask to follow the finding through to the approved document and the training record for an affected employee. Confirm which modules the quoted package includes.{" "}
                                <a href="https://www.ideagen.com/solutions/quality/quality-management" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore Ideagen Quality Management</a>.
                            </>
                        }
                    />

                    {/* 5. Intelex */}
                    <Platform
                        id="intelex"
                        title="5. Intelex for environmental, health, safety and quality teams"
                        paragraphs={[
                            "Intelex offers audit management alongside incident management, inspections, environmental compliance and action planning. It merits a place on the shortlist when different departments hold information about the same issue.",
                        ]}
                        closing={
                            <>
                                A leaking container, for example, may appear in a site inspection and an environmental incident record. Ask how the site team and environmental manager would locate both records, agree who owns the investigation and report progress. That exercise helps establish which Intelex applications you would need.{" "}
                                <a href="https://www.intelex.com/products/applications/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore Intelex applications</a>.
                            </>
                        }
                    />

                    {/* 6. ComplianceQuest */}
                    <Platform
                        id="compliancequest"
                        title="6. ComplianceQuest for manufacturing and supplier audits"
                        paragraphs={[
                            "ComplianceQuest supports audits alongside supplier quality, non-conformance reporting and corrective and preventive actions (CAPA). It is relevant when an inspection finding needs investigation beyond the site where it was recorded.",
                        ]}
                        closing={
                            <>
                                Consider a component defect found at goods-in. The receiving team may have a photograph, purchasing may hold the supplier response and a quality engineer may need to review the next delivery. Use that sequence to assess how each person would contribute evidence and who could approve closure.{" "}
                                <a href="https://www.compliancequest.com/manufacturing/audit-management-software/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore ComplianceQuest’s manufacturing audit software</a>.
                            </>
                        }
                    />

                    {/* 7. Octave Reliance */}
                    <Platform
                        id="octave"
                        title="7. Octave Reliance for configurable quality workflows"
                        paragraphs={[
                            "Octave Reliance, formerly ETQ Reliance, includes audit management, document control, training, CAPA and supplier quality. Its application designer lets organisations configure forms, rules and workflows.",
                        ]}
                        closing={
                            <>
                                That flexibility matters if a local manager can close an isolated finding but a recurring issue needs group approval. Ask the provider to demonstrate both routes using the same inspection form. Check who would maintain the rules if responsibilities changed after rollout.{" "}
                                <a href="https://www.octave.com/reliance" target="_blank" rel="noopener noreferrer" style={linkStyle}>Explore Octave Reliance</a>.
                            </>
                        }
                    />
                </div>
            </section>

            {/* What to test before switching */}
            <section style={{ padding: isMobile ? "2.75rem 0" : "4rem 0", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                <div style={containerStyle}>
                    <h2 id="before-switching" style={{ ...comparisonType.sectionH2(isMobile), margin: "0 0 0.75rem", scrollMarginTop: "calc(var(--page-top-offset) + 16px)" }}>
                        What to test before switching from GoAudits
                    </h2>
                    <p style={{ ...comparisonType.body(), margin: "0 0 1.5rem", maxWidth: "760px" }}>
                        Choose one inspection your team completed last week. Use the same checklist, photograph and follow-up task in each shortlisted platform. Involve the inspector who collected the evidence and the manager who received the report.
                    </p>
                    <TestTable isMobile={isMobile} />
                    <p style={{ ...comparisonType.body(), margin: "1.25rem 0 0", maxWidth: "760px" }}>
                        Before setting a changeover date, retrieve one historical GoAudits report from the proposed archive or replacement system. Open its attachments and check that a reviewer can still match each photograph to the right finding.
                    </p>
                </div>
            </section>

            {/* Bottom CTA */}
            <section style={{ background: "linear-gradient(160deg, #004d3d 0%, #006644 55%, #0b7a52 100%)", padding: isMobile ? "3rem 0" : "4.5rem 0" }}>
                <div style={{ ...containerStyle, textAlign: "center" }}>
                    <h2 style={{ ...comparisonType.sectionH2(isMobile), color: "#ffffff", margin: "0 0 1rem" }}>
                        Try iAudit with a finding from your last site inspection
                    </h2>
                    <p style={{ margin: "0 auto 1.75rem", maxWidth: "720px", fontSize: "1.02rem", lineHeight: 1.7, color: "rgba(255,255,255,0.92)" }}>
                        Bring a recent inspection report and a finding your team has seen more than once. Use the trial to explore how your auditor would record the evidence, assign responsibility and review the result. Ask the action owner to try their part too. Can they see exactly what needs doing and what evidence the auditor will need?
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
                        {["Platform", "When to shortlist it"].map((heading) => (
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

function TestTable({ isMobile }: { isMobile: boolean }) {
    if (isMobile) {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {testRows.map((row) => (
                    <div key={row.test} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "1rem 1.1rem" }}>
                        <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#006644" }}>Test</p>
                        <p style={{ margin: "0 0 0.75rem", fontWeight: 650, color: "#111827" }}>{row.test}</p>
                        <p style={{ margin: "0 0 0.35rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6b7280" }}>What to look for</p>
                        <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.55 }}>{row.lookFor}</p>
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
                        {["Test", "What to look for"].map((heading) => (
                            <th key={heading} style={{ textAlign: "left", padding: "0.95rem 1.15rem", borderBottom: "1px solid #e5e7eb", color: "#111827", fontWeight: 650, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {testRows.map((row, index) => (
                        <tr key={row.test} style={{ background: index % 2 === 1 ? "#fafafa" : "#ffffff", borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ padding: "1rem 1.15rem", fontWeight: 650, color: "#111827", verticalAlign: "top", width: "34%", lineHeight: 1.55 }}>{row.test}</td>
                            <td style={{ padding: "1rem 1.15rem", color: "#4b5563", verticalAlign: "top", lineHeight: 1.6 }}>{row.lookFor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
