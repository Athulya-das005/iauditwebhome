import type { Metadata } from "next";
import AuditRiskBasedThinkingBlogContent from "./AuditRiskBasedThinkingBlogContent";

const pageUrl = "https://www.iaudit.global/blog/how-to-audit-risk-based-thinking";
const ogImage = "https://www.iaudit.global/images/blog-auditor-training.webp";
const title = "How to Audit Risk‑based Thinking in ISO 9001 | iAudit";
const description =
    "Learn how to audit risk‑based thinking in ISO 9001. Discover what evidence to look for beyond the risk register and how to verify effectiveness properly.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "how to audit risk-based thinking",
        "ISO 9001 risk-based thinking audit",
        "ISO 9001 internal audit",
        "risk register audit evidence",
        "Clause 6.1 audit",
        "ISO 9001 audit management software",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
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
            logo: { "@type": "ImageObject", url: "https://www.iaudit.global/iaudit-logo-new.png" },
            description:
                "iAudit Global is an ISO audit management platform built by certified auditors to help organisations manage ISO 9001, ISO 14001, ISO 45001, and ISO 27001 audits using PDCA-driven workflows.",
            sameAs: ["https://www.linkedin.com/company/iaudit-global", "https://twitter.com/iauditglobal"],
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
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "14-day free trial available with no credit card required" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
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
                    { "@type": "ListItem", position: 3, name: "How to Audit Risk-based Thinking", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "How to Audit Risk-based Thinking in ISO 9001",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: { "@type": "Organization", name: "iAudit Global" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-08-19",
            dateModified: "2026-08-19",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: ["how to audit risk-based thinking", "ISO 9001 internal audit", "risk register"],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What does it mean to audit risk-based thinking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Knowing how to audit risk-based thinking involves looking for evidence of a proactive mindset rather than just a signed document. It is about verifying that an organisation identifies uncertainties and plans its processes to prevent failures before they happen.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Where should I look for evidence when auditing risk-based thinking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You should look across multiple sources. Evidence can be found in meeting minutes, operational decisions, process designs, resource allocation and supplier reviews.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a formal risk register required to pass an audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The standard does not explicitly mandate a formal risk register. You must look for proof that risk awareness is integrated into daily decisions and process planning.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ISO 9001 clauses are relevant to risk-based thinking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You must look beyond Clause 6.1. Risk awareness should also be visible in Clause 4, Clause 5, Clause 8 and Clause 10.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are good interview questions for auditing risk-based thinking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Effective questions are usually open ended. Ask why a specific control was introduced, or how the organisation decided which processes required the most frequent monitoring.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does the approach to risk-based thinking change for small businesses?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A small organisation needs a proportionate approach that fits its context, rather than a complex corporate risk framework.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do I verify if risk-based thinking is effective?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Check performance data. Look for evidence that the actions taken actually led to fewer incidents, reduced nonconformities or improved process stability over time.",
                    },
                },
            ],
        },
    ],
};

export default function AuditRiskBasedThinkingBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <AuditRiskBasedThinkingBlogContent />
        </>
    );
}
