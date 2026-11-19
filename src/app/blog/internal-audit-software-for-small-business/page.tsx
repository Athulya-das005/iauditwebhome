import type { Metadata } from "next";
import InternalAuditSoftwareForSmallBusinessBlogContent from "./InternalAuditSoftwareForSmallBusinessBlogContent";

const pageUrl = "https://iaudit.global/blog/internal-audit-software-for-small-business";
const ogImage = "https://iaudit.global/images/blog/internal-audit-software-for-small-business.jpg";
const title = "Internal Audit Software for Small Businesses";
const description =
    "Learn what small businesses really need from internal audit software, including audit planning, findings, corrective actions, reporting and security.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "internal audit software for small business",
        "small business audit software",
        "ISO audit software small business",
        "ISO 9001 internal audit software",
        "audit management software for SMEs",
        "audit evidence software",
        "corrective actions software small business",
        "audit software vs spreadsheets",
        "ISO 19011 small business",
        "PDCA audit workflow",
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
        images: [{ url: ogImage, width: 1200, height: 675, alt: "Internal Audit Software for Small Businesses" }],
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
            alternativeHeadline: "Internal Audit Software for Small Businesses: What Do You Really Need?",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: {
                "@type": "Person",
                name: "Mathew Chiweda",
                url: "https://iaudit.global/author/mathew-chiweda",
            },
            publisher: { "@id": "https://iaudit.global/#organization" },
            datePublished: "2026-11-19",
            dateModified: "2026-11-19",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "internal audit software for small business",
                "small business audit software",
                "ISO audit software",
                "corrective actions software",
                "PDCA audit workflow",
                "ISO 19011",
            ],
            articleSection: "Audit Management Software",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Does a small business really need internal audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not always. If your audit programme is simple, findings are limited and one person can manage everything easily using spreadsheets, dedicated software may not be necessary yet. It becomes more useful when audit complexity, evidence, corrective actions and reporting become harder to control manually.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should internal audit software for a small business include?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A small business should look for the essentials: audit planning, structured audit execution, evidence capture, findings management, corrective actions, reporting and audit history. The goal should be to simplify the audit process rather than add more features than the team needs.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is internal audit software suitable for ISO 9001, ISO 14001 and ISO 45001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Internal audit software can support management system audits for standards such as ISO 9001, ISO 14001 and ISO 45001 by helping teams manage audit scope, evidence, findings, nonconformities, corrective actions and follow-up in one place.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can a small business use Excel instead of internal audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Excel can still work for smaller and less complex audit programmes. The limitation usually appears when more sites, standards, findings or users are involved and the team starts relying on several spreadsheets, folders and emails to keep the process together.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do I know when it is time to move from spreadsheets to audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Consider dedicated software when version control becomes difficult, evidence is scattered, corrective actions need constant chasing, reporting takes too much time or audit history is hard to retrieve. These are signs that the current process may be creating unnecessary administration.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much internal audit software does a small business actually need?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most small businesses do not need a large enterprise GRC platform. A simpler system that covers audit planning, evidence, findings, corrective actions, reporting and programme visibility may provide more value without the cost and complexity of features the team will rarely use.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can small businesses try iAudit Global before subscribing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit Global offers a 14-day free trial with no credit card required. Small teams can test audit planning, evidence capture, findings, corrective actions and reporting using their own audit process before deciding whether the platform is suitable.",
                    },
                },
            ],
        },
    ],
};

export default function InternalAuditSoftwareForSmallBusinessPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <InternalAuditSoftwareForSmallBusinessBlogContent />
        </>
    );
}

