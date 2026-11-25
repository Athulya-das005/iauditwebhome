import type { Metadata } from "next";
import Iso90012026GapAnalysisContent from "./Iso90012026GapAnalysisContent";

const pageUrl = "https://iaudit.global/iso-9001-2026-gap-analysis";
const title = "Free ISO 9001:2026 Gap Analysis | iAudit Global";
const description =
    "Identify gaps in your quality management system with iAudit’s free ISO 9001:2026 gap analysis. Review your current practices and plan your next steps.";
const ogImage = "https://iaudit.global/images/blog/iso-9001-2026-key-changes-transition.jpg";

export const metadata: Metadata = {
    title: { absolute: title },
    description,
    keywords: [
        "ISO 9001:2026 gap analysis",
        "Free ISO 9001 gap analysis",
        "ISO 9001 gap analysis",
        "ISO 9001:2026",
        "QMS gap analysis",
        "quality management system gap analysis",
        "ISO 9001 checklist",
        "ISO 9001 internal audit",
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "website",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [{ url: ogImage, alt: "Free ISO 9001:2026 Gap Analysis | iAudit Global" }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
        site: "@iAuditGlobal",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://iaudit.global/#website" },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        },
        {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Free ISO 9001:2026 Gap Analysis",
            description,
            serviceType: "ISO 9001 Gap Analysis",
            provider: {
                "@type": "Organization",
                "@id": "https://iaudit.global/#organization",
                name: "iAudit Global",
                url: "https://iaudit.global",
            },
            areaServed: "Worldwide",
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://iaudit.global" },
                { "@type": "ListItem", position: 2, name: "ISO 9001:2026 Gap Analysis", item: pageUrl },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is an ISO 9001 gap analysis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An ISO 9001 gap analysis compares your organisation’s current quality management practices with the standard’s requirements. It helps identify missing processes, incomplete implementation and areas where supporting evidence needs further review.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is iAudit’s ISO 9001 gap analysis free?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can use iAudit’s free gap analysis to review your quality management system and identify areas requiring attention.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who should complete the gap analysis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Quality managers, internal auditors, operations managers and people responsible for ISO 9001 implementation can complete it. Involving colleagues who manage the relevant processes helps ensure the answers reflect how the organisation operates.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What information should I have available?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Useful information includes your quality policy, objectives, process documentation, training records, supplier evaluations, customer feedback, audit findings and management review records. The evidence needed will depend on your organisation’s activities and the scope of its quality management system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How is a gap analysis different from an internal audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A gap analysis helps identify differences between your current arrangements and specified requirements, often during implementation or transition preparation. An internal audit is a planned, systematic evaluation of conformity and effective implementation. A gap analysis does not automatically fulfil your internal audit requirements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can an organisation certified to ISO 9001:2015 use it?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. An organisation working to ISO 9001:2015 can use an assessment against ISO 9001:2026 to identify areas requiring review. Your team should also examine the updated standard and agree transition arrangements with its certification body.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does completing the gap analysis confirm ISO 9001 compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Results depend on the accuracy and completeness of the information supplied. They support preparation and further investigation, but do not confirm conformity or guarantee certification. Findings should be checked against actual processes and supporting evidence.",
                    },
                },
            ],
        },
    ],
};

export default function Iso9001GapAnalysisPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Iso90012026GapAnalysisContent />
        </>
    );
}

