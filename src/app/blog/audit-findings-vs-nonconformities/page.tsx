import type { Metadata } from "next";
import AuditFindingsVsNonconformitiesBlogContent from "./AuditFindingsVsNonconformitiesBlogContent";

const pageUrl = "https://iaudit.global/blog/audit-findings-vs-nonconformities";
const ogImage = "https://iaudit.global/images/blog/audit-findings-vs-nonconformities.jpg";
const title = "Audit Findings vs Nonconformities: What Is the Difference?";
const description =
    "Learn how to classify ISO internal audit findings, distinguish nonconformities from opportunities for improvement and document the evidence behind each decision.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "audit findings vs nonconformities",
        "difference between audit finding and nonconformity",
        "ISO audit findings",
        "ISO 9001 nonconformity",
        "opportunity for improvement ISO",
        "audit observation vs nonconformity",
        "major vs minor nonconformity",
        "documenting a nonconformity",
        "ISO 19011 audit findings",
        "corrective action verification",
    ],
    authors: [{ name: "Mathew Chiweda" }, { name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "article",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        images: [{ url: ogImage, width: 1200, height: 675, alt: "Audit Findings vs Nonconformities: What Is the Difference?" }],
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
        site: "@iAuditGlobal",
        creator: "@iAuditGlobal",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://iaudit.global/",
            logo: { "@type": "ImageObject", url: "https://iaudit.global/iaudit-logo-new.png" },
            description: "iAudit Global is an ISO audit management platform built by certified auditors.",
            sameAs: ["https://www.linkedin.com/company/iaudit-global", "https://twitter.com/iauditglobal"],
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://iaudit.global/#organization" },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://iaudit.global" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://iaudit.global/blog" },
                    { "@type": "ListItem", position: 3, name: title, item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: title,
            alternativeHeadline: "Audit Findings vs Nonconformities: What Is the Difference?",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: {
                "@type": "Person",
                name: "Mathew Chiweda",
                url: "https://iaudit.global/author/mathew-chiweda",
            },
            publisher: { "@id": "https://iaudit.global/#organization" },
            datePublished: "2026-11-24",
            dateModified: "2026-11-24",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "audit findings vs nonconformities",
                "ISO audit findings",
                "nonconformity vs OFI",
                "ISO 19011",
                "major nonconformity",
                "minor nonconformity",
                "corrective actions",
            ],
            articleSection: "Internal Auditing",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the difference between an audit finding and a nonconformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An audit finding is the result of comparing evidence with audit criteria. It can show that a process met a requirement or that it fell short. I record a nonconformity when I can identify the applicable requirement and show how the evidence establishes that it was missed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a missing record be an ISO audit nonconformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, if an applicable requirement says the organisation must retain that record and the evidence confirms it is missing. The wording matters. A missing approval reference can establish a recordkeeping failure. To conclude that an order was placed before approval, I would also check the approval history against the order date.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When should I record an opportunity for improvement?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "I record an opportunity for improvement when I can explain how a process that meets its requirements could work better. For example, linking purchase orders to existing approvals could save staff time. If the purchasing procedure already requires that link and it is missing, I would document the unmet requirement.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is an audit observation the same as a minor nonconformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. An observation may describe something the auditor noticed, or it may be a reporting category defined by the organisation. A minor nonconformity means the auditor has established that a requirement was missed and has graded the finding under the applicable rules. I check the audit programme’s definitions before using either label.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do repeated findings automatically become a major nonconformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The number of exceptions alone cannot determine the grade. Two orders released before supplier approval may point to a wider control failure. I would check how the orders went through, whether the same weakness exists elsewhere and how it affects the process before applying the audit programme’s grading criteria.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should I include when writing a nonconformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "I include the specific requirement, the evidence I checked and a clear statement of the gap. Dates, transaction references and sample details help the process owner locate the issue. Those details also make it easier to write an ISO internal audit report the process owner can act on.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I need to know the root cause before raising a nonconformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. If the records establish that two orders preceded mandatory supplier approval, I can report that finding. The process owner can then investigate why it happened, check whether other orders were affected and use the results to agree a corrective action and verify its effectiveness.",
                    },
                },
            ],
        },
    ],
};

export default function AuditFindingsVsNonconformitiesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <AuditFindingsVsNonconformitiesBlogContent />
        </>
    );
}

