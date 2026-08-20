import type { Metadata } from "next";
import Iso9001ManufacturingNcBlogContent from "./Iso9001ManufacturingNcBlogContent";

const pageUrl = "https://www.iaudit.global/blog/common-iso-9001-nonconformities-manufacturing";
const ogImage = "https://www.iaudit.global/images/manufacturing-bg.webp";
const title = "Common ISO 9001 Nonconformities in Manufacturing | iAudit";
const description =
    "Discover common ISO 9001 nonconformities in manufacturing and learn how to prevent recurring findings through structured internal audits and trend analysis.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 9001 nonconformities manufacturing",
        "common ISO 9001 findings",
        "manufacturing internal audit",
        "ISO 9001 audit nonconformities",
        "corrective action tracking",
        "ISO 9001 compliance manufacturing",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        type: "article",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        images: [{ url: ogImage }],
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
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            description:
                "iAudit Global is an ISO audit management platform built by certified auditors to help organisations manage ISO 9001, ISO 14001, ISO 45001, and ISO 27001 audits using PDCA-driven workflows.",
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#product",
            name: "iAudit Global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.iaudit.global/",
            description:
                "ISO audit management software for planning, executing, and reporting ISO 9001, 14001, 45001, and 27001 audits using PDCA-based workflows, dashboards, and automated reporting.",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "14-day free trial available with no credit card required",
            },
            publisher: {
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
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Common ISO 9001 Nonconformities in Manufacturing",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "Common ISO 9001 Nonconformities in Manufacturing",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: {
                "@type": "Organization",
                name: "iAudit Global",
            },
            publisher: {
                "@id": "https://www.iaudit.global/#organization",
            },
            datePublished: "2026-08-19",
            dateModified: "2026-08-19",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "ISO 9001 nonconformities manufacturing",
                "common ISO 9001 findings",
                "manufacturing internal audit",
            ],
            articleSection: "ISO 9001 Quality Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What are the most common ISO 9001 nonconformities in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The most common findings usually relate to document control (outdated instructions on the shopfloor), equipment calibration failures, and incomplete traceability records. These often occur because production pressure leads to informal workarounds that bypass the formal quality management system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between a major and a minor nonconformity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A minor nonconformity is a single lapse or isolated incident that doesn't indicate a total system failure. A major nonconformity occurs when a specific requirement of the ISO 9001 standard is not being met at all, or when multiple minor nonconformities suggest a significant breakdown in process control.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why do the same ISO 9001 nonconformities keep appearing in every audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Nonconformities recur when corrective actions focus on fixing the immediate problem rather than addressing the root cause. If the organisation doesn't analyse audit trends across cycles, the same systemic weaknesses remain, leading to the same findings in subsequent audits.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can iAudit Global help reduce recurring nonconformities in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global centralises your audit history, making it easy to identify recurring patterns across different sites and shifts. By linking evidence directly to findings and using automated corrective action tracking, the platform ensures that root cause analysis is performed and verified, preventing the same issues from reappearing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should a manufacturer handle a nonconformity identified during an internal audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'Once identified, the nonconformity must be documented with clear evidence. The organisation should then implement an immediate correction (the "quick fix") followed by a formal corrective action process. This involves root cause analysis to understand why the gap occurred and a follow-up check to ensure the solution actually worked.',
                    },
                },
                {
                    "@type": "Question",
                    name: 'What is "document control" on a manufacturing shopfloor?',
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'Document control ensures that only the latest, approved versions of work instructions, drawings, and procedures are available to operators. A common audit finding is finding old or "unofficial" notes at a workstation, which can lead to production errors and inconsistent quality.',
                    },
                },
                {
                    "@type": "Question",
                    name: "Why is traceability so important for ISO 9001 compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Traceability allows a manufacturer to track a product from raw materials through to the final delivery. During an audit, you must be able to prove which batch of material went into which product. If these records are missing or incomplete, it is often raised as a major nonconformity because it impacts the ability to manage a product recall.",
                    },
                },
            ],
        },
    ],
};

export default function Iso9001ManufacturingNcBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Iso9001ManufacturingNcBlogContent />
        </>
    );
}
