import type { Metadata } from "next";
import ComplianceQuestAlternativesPageContent from "./ComplianceQuestAlternativesPageContent";

const pageUrl = "https://iaudit.global/compliancequest-alternatives";
const title = "7 ComplianceQuest Alternatives for ISO Audits | iAudit";
const description =
    "Explore 7 ComplianceQuest alternatives for ISO audits and quality management. Plan audits and track corrective actions with iAudit’s 14-day free trial.";

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
            name: "7 ComplianceQuest Alternatives for ISO Audits and Quality Management",
            numberOfItems: 7,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "iAudit" },
                { "@type": "ListItem", position: 2, name: "MasterControl" },
                { "@type": "ListItem", position: 3, name: "Octave Reliance" },
                { "@type": "ListItem", position: 4, name: "TrackWise Digital" },
                { "@type": "ListItem", position: 5, name: "Qualityze" },
                { "@type": "ListItem", position: 6, name: "Qualio" },
                { "@type": "ListItem", position: 7, name: "Ideagen Quality Management" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which ComplianceQuest alternatives should I consider?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit, MasterControl, Octave Reliance, TrackWise Digital, Qualityze, Qualio and Ideagen Quality Management are relevant options for different requirements. iAudit focuses on ISO audit programmes, while the other platforms provide broader quality management capabilities. Choose according to the processes your replacement needs to support.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is iAudit a suitable alternative to ComplianceQuest?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit is worth considering when your main requirement is managing ISO 9001, ISO 14001 and ISO 45001 audits. It supports planning, evidence, findings, reporting and corrective-action follow-up. If your current setup also handles training, document approvals or other quality processes, assess those requirements separately.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit replace a complete quality management system?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "That depends on the scope you need. iAudit’s documented focus is ISO audit management. It should not be assumed to replace every document-control, training, supplier or product-related function in a broader QMS. Map your essential processes and confirm how each would be supported before choosing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ComplianceQuest alternatives are built on Salesforce?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "TrackWise Digital and Qualityze use Salesforce technology. Qualityze describes its platform as Salesforce-native, while TrackWise Digital documents Salesforce-based integration capabilities. A shared technology platform does not guarantee direct migration, so confirm how your records, configurations and permissions would be handled.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should we check before migrating ComplianceQuest records?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Confirm export and import options, attachment handling, historical audit trails, approvals and relationships between records. Include open actions as well as completed work in a sample transfer. Agree how archived information will remain accessible and verify the results before withdrawing access to the previous system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support ISO audits across multiple sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Relevant iAudit plans include multi-site audits and dashboards. Its industry offering includes manufacturing ISO audit management, construction ISO audits and other sectors. Confirm the standards and site allowances in your chosen plan.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit offer a free trial?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can try iAudit free for 14 days without providing credit card details. Use the trial to assess audit planning, evidence capture, findings and corrective-action follow-up against your organisation’s requirements.",
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

export default function ComplianceQuestAlternativesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ComplianceQuestAlternativesPageContent />
        </>
    );
}
