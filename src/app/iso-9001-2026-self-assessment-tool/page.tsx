import type { Metadata } from "next";
import Iso90012026SelfAssessmentContent from "./Iso90012026SelfAssessmentContent";

const pageUrl = "https://iaudit.global/iso-9001-2026-self-assessment-tool";
const title = "Free ISO 9001:2026 Self-Assessment Tool | iAudit Global";
const description =
    "Review your quality management practices with iAudit’s free ISO 9001:2026 self-assessment tool. Identify areas that need attention before your next audit.";
const ogImage = "https://iaudit.global/images/blog/iso-9001-2026-key-changes-transition.jpg";

export const metadata: Metadata = {
    title: { absolute: title },
    description,
    keywords: [
        "ISO 9001:2026 self-assessment tool",
        "Free ISO 9001 self-assessment",
        "ISO 9001 self assessment",
        "ISO 9001:2026 readiness",
        "QMS self assessment",
        "quality management system assessment",
        "ISO 9001 audit preparation",
        "ISO 9001 internal audit tool",
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
        images: [{ url: ogImage, alt: "Free ISO 9001:2026 Self-Assessment Tool | iAudit Global" }],
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
            name: "Free ISO 9001:2026 Self-Assessment Tool",
            description,
            serviceType: "ISO 9001 Self-Assessment",
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
                { "@type": "ListItem", position: 2, name: "ISO 9001:2026 Self-Assessment Tool", item: pageUrl },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is an ISO 9001 self-assessment?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An ISO 9001 self-assessment is a review of your quality management practices against relevant areas of the standard. Your answers help you understand your current position and identify matters that may need further investigation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is iAudit’s ISO 9001 self-assessment free?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit offers a free self-assessment to help you review your quality management practices and identify areas requiring attention.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who should complete the self-assessment?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Anyone with a working understanding of the organisation’s quality management practices can contribute. Quality managers, business owners and operations managers may lead it, with input from colleagues responsible for individual processes.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we use it before implementing ISO 9001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. It can help you recognise existing practices that may support your quality management system and identify areas requiring development. You do not need to have completed implementation to begin reviewing your current position.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does self-assessment differ from gap analysis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Self-assessment describes reviewing your own organisation, while gap analysis focuses on identifying differences between current practice and requirements. The two can overlap. iAudit’s self-assessment provides an initial review, while its gap analysis is intended to support a closer examination of gaps.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does a good result mean we will pass a certification audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Self-assessment results reflect the answers provided and do not independently verify implementation or effectiveness. Certification involves an assessment by a certification body, including examination of relevant evidence.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should we do after completing the self-assessment?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Review uncertain answers with the relevant process owners, check supporting records and agree which areas need further investigation. Use the findings to guide improvements, a more detailed gap analysis or internal audit planning.",
                    },
                },
            ],
        },
    ],
};

export default function Iso9001SelfAssessmentPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Iso90012026SelfAssessmentContent />
        </>
    );
}
