import type { Metadata } from "next";
import IsotrackerAlternativesPageContent from "./IsotrackerAlternativesPageContent";

const pageUrl = "https://iaudit.global/isotracker-alternatives";
const title = "7 isoTracker Alternatives for ISO Audit Management";
const description =
    "Compare seven isoTracker alternatives for ISO audit management. See when a dedicated audit platform fits, and what to check if you also use documents, training or complaints.";

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
            name: `${title} | iAudit Global`,
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
            name: title,
            numberOfItems: 7,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "iAudit Global" },
                { "@type": "ListItem", position: 2, name: "GoAudits" },
                { "@type": "ListItem", position: 3, name: "Mitti by SafetyCulture" },
                { "@type": "ListItem", position: 4, name: "Ideagen Quality Management" },
                { "@type": "ListItem", position: 5, name: "Intelex" },
                { "@type": "ListItem", position: 6, name: "ComplianceQuest" },
                { "@type": "ListItem", position: 7, name: "Octave Reliance" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which isoTracker alternative supports ISO 9001, ISO 14001 and ISO 45001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global supports quality, environmental and occupational health and safety audits. If your programme covers all three standards, its Tres plan includes all three and supports up to ten sites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we replace isoTracker’s audit module and keep its document control module?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "isoTracker offers its modules individually. Check your licence terms and test how a finding in the new audit platform will refer to a controlled document retained in isoTracker. Use a document with more than one revision so you can verify that the reference identifies the version the auditor examined.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which alternative is suitable for auditors working offline?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "GoAudits supports offline inspections on mobile devices. Try completing a checklist with photographs in an area with poor connectivity, then review what appears in the finished report.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Will our audit history transfer automatically?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Transfer options depend on the records you can export and the formats the receiving system accepts. Ask the provider to demonstrate what happens to attachments, approvals and dates using one of your completed audits.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should we evaluate a platform for several sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Give a site manager and a group auditor separate tasks. The site manager should be able to find their own overdue actions. The group auditor should be able to identify repeat findings across sites. Check the permissions and plan both people would need.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What costs should we include when switching?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Alongside the subscription, include setup, data migration, staff training and any period when both products will be in use. Ask how the price changes if you add another site or ISO standard.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we try iAudit Global before choosing a plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The 14-day free trial requires no credit card.",
                    },
                },
            ],
        },
    ],
};

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "isoTracker alternatives",
        "isoTracker alternative",
        "ISO audit management software",
        "ISO 9001 audit software",
        "ISO 14001 audit software",
        "ISO 45001 audit software",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "website",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@iAuditGlobal",
    },
};

export default function IsotrackerAlternativesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <IsotrackerAlternativesPageContent />
        </>
    );
}
