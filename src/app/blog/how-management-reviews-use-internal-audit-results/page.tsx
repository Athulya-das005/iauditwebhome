import type { Metadata } from "next";
import ManagementReviewAuditResultsBlogContent from "./ManagementReviewAuditResultsBlogContent";

const pageUrl =
    "https://www.iaudit.global/blog/how-management-reviews-use-internal-audit-results";
const ogImage = "https://www.iaudit.global/images/blog-continuous-improvement.webp";
const title = "How Management Reviews Should Use Internal Audit Results";
const description =
    "Learn how management reviews should use internal audit results to identify recurring NCRs, analyse trends and drive ISO 9001 continual improvement.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "management review internal audit",
        "ISO 9001 clause 9.3",
        "internal audit results",
        "recurring NCRs",
        "continual improvement",
        "PDCA management review",
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
                        name: "Management Reviews and Internal Audit Results",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "How Management Reviews Should Use Internal Audit Results",
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
            datePublished: "2026-08-18",
            dateModified: "2026-08-18",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "management review internal audit",
                "ISO 9001 clause 9.3",
                "internal audit results",
                "continual improvement",
            ],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Why is it important for management reviews to look at internal audit results?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It is essential because internal audits are the early warning system for any organisation. If leadership teams only see high-level summaries, they miss the systemic risks and hotspots that lead to project failure or costly rework. A proper review ensures the business is improving, not just maintaining a certificate.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should management reviews use internal audit results to identify business risks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Rather than looking at individual reports, management should look for aggregated patterns. If the same type of nonconformity (NCR) is appearing across multiple sites or departments, it indicates a flaw in the central management system that requires a strategic, board-level decision to fix.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What does ISO 9001 require regarding audit results in management reviews?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'Clause 9.3 of ISO 9001 explicitly requires top management to review information on the performance and effectiveness of the quality management system, including "trends in audit results." The standard expects leadership to evaluate these results to decide on opportunities for improvement and any need for changes to the system.',
                    },
                },
                {
                    "@type": "Question",
                    name: "How can leadership distinguish between an administrative update and a strategic audit insight?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An administrative update focuses on activity, such as the percentage of audits completed. A strategic insight focuses on impact, such as identifying that a specific subcontractor trade is responsible for 40% of all site nonconformities. Management reviews should prioritise the latter to drive real change.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global help leadership teams use internal audit results effectively?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'iAudit Global centralises scattered audit data into real-time dashboards, allowing directors to move away from "spreadsheet theatre." The platform highlights recurring NCR categories, tracks corrective action effectiveness, and provides the trend visibility needed to make informed, data-driven decisions during management reviews.',
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the most common mistake made when reviewing audit data at the board level?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'The biggest mistake is "reporting in a silo." This happens when management reviews each audit as a standalone event rather than looking at cross-project trends. Without a unified view, the board cannot see the big picture of where the organisation\'s quality or safety standards are drifting.',
                    },
                },
                {
                    "@type": "Question",
                    name: "How do we prove to external auditors that management is using internal audit results?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'External auditors look for evidence of "Management Commitment." You can prove this by showing meeting minutes that link an internal audit finding to a specific board-level decision, such as a change in company policy, the purchase of new equipment, or the rollout of a new training programme.',
                    },
                },
            ],
        },
    ],
};

export default function ManagementReviewAuditResultsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ManagementReviewAuditResultsBlogContent />
        </>
    );
}
