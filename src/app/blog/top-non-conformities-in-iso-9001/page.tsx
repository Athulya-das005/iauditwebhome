import type { Metadata } from "next";
import Iso9001NonConformitiesBlogContent from "./Iso9001NonConformitiesBlogContent";

const pageUrl = "https://www.iaudit.global/blog/top-non-conformities-in-iso-9001";
const ogImage = "https://www.iaudit.global/images/blog-continuous-improvement.webp";
const title = "Top Non-Conformities in ISO 9001 and How to Fix Them";
const description =
    "Discover the top Non-Conformities in ISO 9001, why they repeat, and how to fix them using stronger audits, corrective action, and a proper PDCA approach.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 9001 nonconformities",
        "ISO audit findings",
        "ISO 9001 audit issues",
        "corrective action ISO",
        "PDCA ISO",
        "audit nonconformities",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        type: "article",
        title,
        description:
            "Learn why ISO 9001 non-conformities keep returning and how to stop them with better audits, corrective action and PDCA.",
        url: pageUrl,
        siteName: "iAudit Global",
        images: [{ url: ogImage }],
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description:
            "Stop repeat ISO 9001 findings with better audits, stronger follow-up and proper PDCA.",
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
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#software",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "ISO audit management software for ISO 9001, 14001, 45001, and 27001 audits, with PDCA-driven platform, AI Audit Mate assistant, and centralized compliance tracking.",
            creator: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#organization" },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog" },
                    { "@type": "ListItem", position: 3, name: "Top Non-Conformities in ISO 9001", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogpost`,
            headline: title,
            description:
                "Learn why ISO 9001 non-conformities keep returning and how to stop them with better audits, corrective action and PDCA.",
            author: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-03-18",
            dateModified: "2026-03-18",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            keywords:
                "ISO 9001 nonconformities, ISO audit findings, corrective action ISO, PDCA ISO, audit nonconformities",
            articleSection: "ISO Audit Management",
            inLanguage: "en-GB",
            url: pageUrl,
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What are the top Non-Conformities in ISO 9001 found during audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The most frequent findings usually involve Clause 7.5 (Control of Documented Information), Clause 9.2 (Internal Audits), and Clause 10.2 (Nonconformity and Corrective Action). These top Non-Conformities in ISO 9001 often occur because organisations rely on scattered spreadsheets and manual tracking, making it difficult to maintain version control or prove that corrective actions actually worked.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between a major and a minor non-conformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A major non-conformity is a systemic failure or a total absence of a required process that puts the management system at risk. A minor non-conformity is typically an isolated lapse that does not indicate a system-wide breakdown. While a minor non-conformity will not usually stop you from getting certified, a major one will require a follow-up audit before the certificate can be issued.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should an organisation respond to an ISO 9001 non-conformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best response follows the PDCA cycle. You must first contain the immediate issue, then perform a genuine root cause analysis to understand why it happened. Once the cause is identified, you implement a corrective action and, most importantly, perform an effectiveness check later to ensure the problem has not returned.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why do we keep getting the same non-conformities every year?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Recurring findings are usually a sign of paper closure. This happens when an organisation marks an action as closed just to tidy up a spreadsheet, without addressing the root cause or verifying the fix. Without a central system to track history, the same top Non-Conformities in ISO 9001 will keep appearing because the underlying process never truly changed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can internal audits help prevent external non-conformities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, provided they are rigorous and honest. The purpose of an internal audit is to find the top Non-Conformities in ISO 9001 yourself so you can fix them before an external auditor arrives. If your internal audits never find any issues, it is often a sign that your checking process is too shallow.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does ISO audit management software help reduce non-conformities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO audit management software like iAudit Global reduces non-conformities by centralising your audit programme. It provides clause-mapped checklists, automates follow-up reminders, and keeps all evidence in one place. By moving away from spreadsheets, you gain the visibility needed to spot trends and fix systemic weaknesses before they become audit findings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit Global have access to our non-conformity data?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. At iAudit Global, we operate a strict data sovereignty policy. Your findings, corrective actions, and evidence belong entirely to your organisation. We host the platform, but we have zero access to your data or reports. This ensures that your internal audit history and sensitive operational details remain private and secure.",
                    },
                },
            ],
        },
    ],
};

export default function TopNonConformitiesIso9001Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Iso9001NonConformitiesBlogContent />
        </>
    );
}
