import type { Metadata } from "next";
import OctaveRelianceAlternativesPageContent from "./OctaveRelianceAlternativesPageContent";

const pageUrl = "https://iaudit.global/octave-reliance-alternatives";
const title = "7 Octave Reliance Alternatives for ISO Audits | iAudit";
const description =
    "Explore 7 Octave Reliance alternatives for ISO audits and quality management. Plan audits and track corrective actions with iAudit’s 14-day free trial.";

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
            name: "7 Octave Reliance Alternatives for ISO Audits and Quality Management",
            numberOfItems: 7,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "iAudit" },
                { "@type": "ListItem", position: 2, name: "MasterControl" },
                { "@type": "ListItem", position: 3, name: "ComplianceQuest" },
                { "@type": "ListItem", position: 4, name: "Ideagen Quality Management" },
                { "@type": "ListItem", position: 5, name: "Qualio" },
                { "@type": "ListItem", position: 6, name: "Intellect" },
                { "@type": "ListItem", position: 7, name: "Arena" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Octave Reliance the same as ETQ Reliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Octave Reliance is the current name for the product formerly known as ETQ Reliance. If you are researching ETQ Reliance alternatives, check the current Octave product information and the specific applications used in your organisation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Octave Reliance alternatives should I consider?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit, MasterControl, ComplianceQuest, Ideagen Quality Management, Qualio, Intellect and Arena address different requirements. iAudit focuses on ISO audit programmes, while the other options offer broader quality management or product-related capabilities. Choose according to the workflows and records you need to retain.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is iAudit a suitable alternative to Octave Reliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit is worth considering when your main requirement is managing ISO 9001, ISO 14001 and ISO 45001 audits. It supports planning, evidence, findings and corrective-action follow-up. If your current setup also manages documents, training, supplier quality or product processes, assess those requirements separately.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Octave Reliance already support audits and corrective actions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Octave Reliance documents audit planning, execution, approval and reporting, with investigations and corrective actions initiated from findings. Choosing an alternative should therefore focus on fit, workflow and scope rather than assuming those capabilities are missing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should we check before migrating from ETQ or Octave Reliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Review your applications, configured fields, approval stages, integrations and historical records. Confirm what the replacement can import and test a sample that includes attachments and open actions. Agree how archived records will remain accessible before withdrawing access to the previous system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support ISO audits across multiple sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Relevant plans include multi-site audits and dashboards. Its industry offering includes manufacturing ISO audit management, construction ISO audits and other sectors. Confirm the standards and site allowances included in your selected plan.",
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

export default function OctaveRelianceAlternativesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <OctaveRelianceAlternativesPageContent />
        </>
    );
}
