import type { Metadata } from "next";
import MittiAlternativesPageContent from "./MittiAlternativesPageContent";

const pageUrl = "https://iaudit.global/mitti-by-safetyculture-alternatives";
const title = "7 Mitti by SafetyCulture Alternatives | iAudit";
const description =
    "Explore 7 Mitti by SafetyCulture alternatives for audits and inspections. Manage ISO audits with iAudit and start your 14-day free trial.";

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
            name: "7 Mitti by SafetyCulture Alternatives for Audits and Inspections",
            numberOfItems: 7,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "iAudit" },
                { "@type": "ListItem", position: 2, name: "GoAudits" },
                { "@type": "ListItem", position: 3, name: "Lumiform" },
                { "@type": "ListItem", position: 4, name: "Xenia" },
                { "@type": "ListItem", position: 5, name: "GoCanvas" },
                { "@type": "ListItem", position: 6, name: "Fulcrum" },
                { "@type": "ListItem", position: 7, name: "isoTracker" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is Mitti the same as SafetyCulture?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Mitti is the new name for the SafetyCulture platform. Its offering includes inspections, actions and other workplace operations tools. If you are researching SafetyCulture alternatives, check the current Mitti product information to understand which functions your replacement needs to cover.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which Mitti by SafetyCulture alternatives should I consider for ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit and isoTracker are relevant starting points for teams focused on audit management. iAudit supports ISO 9001, ISO 14001 and ISO 45001 audit workflows, while isoTracker offers audit management with optional connected quality modules. Assess how each handles your criteria, evidence, findings and corrective actions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which alternatives support offline inspections?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Lumiform, GoCanvas and Fulcrum document offline data capture, while Xenia describes offline capture of audit photos and videos. Offline coverage varies by function, so test the exact checklist, evidence and synchronisation process your team needs before choosing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should I check before switching from Mitti?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Review the functions your team uses, required reporting, access permissions, offline requirements and integrations. Then test a complete audit or inspection, including action follow-up. Confirm the total cost and how you will retain existing records before making the change.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I transfer existing inspection records to another platform?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "That depends on the export options in your current system and the import capabilities of the replacement. Ask both vendors about checklists, responses, photographs, attachments and action histories. Test a small sample first, and do not assume every part of a historical record will transfer automatically.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit support audits across multiple sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit offers multi-site audit and dashboard features on relevant plans. Check the current pricing page for the standards and site allowances included, and discuss requirements that extend beyond the listed options.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I try iAudit for free?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit offers a 14-day free trial with no credit card required. Visit the pricing page to get started and review the available plans.",
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
        "Mitti alternatives",
        "Mitti by SafetyCulture alternatives",
        "SafetyCulture alternatives",
        "iAuditor alternatives",
        "inspection software",
        "ISO audit software",
        "field inspection software",
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

export default function MittiAlternativesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <MittiAlternativesPageContent />
        </>
    );
}
