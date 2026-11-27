import type { Metadata } from "next";
import IntelexAlternativesPageContent from "./IntelexAlternativesPageContent";

const pageUrl = "https://iaudit.global/intelex-alternatives";
const title = "7 Intelex Alternatives for ISO Audits & EHS | iAudit";
const description =
    "Explore 7 Intelex alternatives for ISO audits and EHS management. Plan audits, track findings and manage corrective actions with iAudit’s 14-day free trial.";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://iaudit.global/",
            logo: "https://iaudit.global/iaudit-logo-new.png",
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://iaudit.global/#website" },
            publisher: { "@id": "https://iaudit.global/#organization" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://iaudit.global/" },
                { "@type": "ListItem", position: 2, name: title, item: pageUrl },
            ],
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}#platforms`,
            name: "7 Intelex Alternatives for ISO Audits and EHS Management",
            numberOfItems: 7,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "iAudit" },
                { "@type": "ListItem", position: 2, name: "Cority" },
                { "@type": "ListItem", position: 3, name: "VelocityEHS" },
                { "@type": "ListItem", position: 4, name: "EcoOnline" },
                { "@type": "ListItem", position: 5, name: "EHS Insight" },
                { "@type": "ListItem", position: 6, name: "Enablon" },
                { "@type": "ListItem", position: 7, name: "Benchmark Gensuite" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which Intelex alternatives should I consider?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit, Cority, VelocityEHS, EcoOnline, EHS Insight, Enablon and Benchmark Gensuite are relevant options for different requirements. iAudit focuses on ISO audit programmes, while the other platforms offer wider EHS or compliance capabilities. Choose according to the functions your team needs to retain.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is iAudit a suitable alternative to Intelex?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit is worth considering when your main requirement is managing ISO 9001, ISO 14001 and ISO 45001 audits. It supports planning, evidence, findings, reporting and corrective-action follow-up. Assess the wider functions you use in Intelex before deciding whether an audit-focused platform covers your replacement scope.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit replace an entire EHS management system?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Do not assume that an ISO audit platform replaces every EHS function. iAudit’s documented focus is audit management. If you also need incident reporting, occupational health, chemical management, training or environmental monitoring, assess those requirements separately and confirm the available capabilities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which alternatives support offline audits and inspections?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "EcoOnline and EHS Insight document offline audit or inspection capabilities. Benchmark Gensuite’s Audit Assistant also supports field auditing without connectivity. Offline coverage can differ by function, so test checklists, attachments and synchronisation on the devices your team uses.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should we check before migrating from Intelex?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Confirm your current export options and the replacement platform’s import capabilities. Include attachments, open actions, historical reports and relationships between records in the assessment. Test a sample migration, agree how archived information will remain accessible and verify results before withdrawing access to the previous system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support ISO audits across multiple sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Relevant iAudit plans include multi-site audits and dashboards. Its industry offering includes manufacturing ISO audit management, construction ISO audits and other sectors. Confirm the standards and site allowances included in your selected plan.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit offer a free trial?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can try iAudit free for 14 days without providing credit card details. Use the trial to assess planning, evidence capture, findings and corrective-action follow-up against your organisation’s requirements.",
                    },
                },
            ],
        },
    ],
};

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
};

export default function IntelexAlternativesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <IntelexAlternativesPageContent />
        </>
    );
}
