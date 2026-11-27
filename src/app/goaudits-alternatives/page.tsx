import type { Metadata } from "next";
import GoauditsAlternativesPageContent from "./GoauditsAlternativesPageContent";

const pageUrl = "https://iaudit.global/goaudits-alternatives";
const title = "7 GoAudits Alternatives for ISO Audits and Site Inspections";
const description =
    "Compare seven GoAudits alternatives for ISO audits and site inspections. See when to shortlist iAudit Global, Mitti, isoTracker, Ideagen, Intelex and more.";

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
                { "@type": "ListItem", position: 2, name: "Mitti by SafetyCulture" },
                { "@type": "ListItem", position: 3, name: "isoTracker" },
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
                    name: "Which GoAudits alternative supports ISO 9001, ISO 14001 and ISO 45001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global supports all three standards. Its Tres plan covers three standards and up to ten sites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should we test if our inspectors work offline?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Try the device and conditions your inspectors use. Open a checklist, lose the connection partway through, add evidence and finish the inspection. After reconnecting, check what the manager receives and whether the inspector has to repeat any work.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we reuse our existing GoAudits checklists?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "That depends on the export and import formats each platform supports. Ask the receiving provider to rebuild or import one representative checklist. Test scoring, required questions and any rules that change which questions appear.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can we retain historical reports and photographs?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Confirm what you can export from GoAudits before changing subscriptions. Give a sample export to someone who did not conduct the inspection. They should be able to identify the site, date and finding and match each photograph to the correct observation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between closing a task and verifying corrective action?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Closing a task records that someone completed the assigned work. Verifying effectiveness checks whether the action addressed the cause. Replacing damaged stock completes a task. Reviewing later deliveries after a handling change helps establish whether the damage has stopped recurring.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should a multi-site team check during a demonstration?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ask a site supervisor to find their own outstanding actions. Then ask a group manager to find the same issue across locations. Use the permissions each person would have in practice.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we try iAudit Global before choosing a plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit Global offers a 14-day free trial with no credit card required.",
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
        "GoAudits alternatives",
        "GoAudits alternative",
        "GoAudits competitors",
        "ISO audit management software",
        "site inspection software",
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

export default function GoauditsAlternativesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <GoauditsAlternativesPageContent />
        </>
    );
}
