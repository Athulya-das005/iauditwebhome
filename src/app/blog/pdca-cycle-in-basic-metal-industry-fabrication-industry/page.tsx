import type { Metadata } from "next";
import PdcaBasicMetalBlogContent from "./PdcaBasicMetalBlogContent";

const pageUrl =
    "https://www.iaudit.global/blog/pdca-cycle-in-basic-metal-industry-fabrication-industry";
const ogImage = "https://www.iaudit.global/images/metal-fabrication-bg.webp";
const title =
    "Using the PDCA Cycle to Improve Performance in the Basic Metal and Fabrication Industry";
const description =
    "Discover how implementing PDCA in basic metal industry operations reduces rework and ensures ISO 9001 compliance. Move from reactive fixes to real growth.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "PDCA basic metal industry",
        "PDCA metal fabrication",
        "Plan Do Check Act manufacturing",
        "ISO 9001 continual improvement",
        "metal fabrication quality improvement",
        "PDCA cycle ISO 9001",
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
                        name: "PDCA Cycle in Basic Metal Industry",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: title,
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
            datePublished: "2026-04-17",
            dateModified: "2026-04-17",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "PDCA basic metal industry",
                "PDCA metal fabrication",
                "ISO 9001 continual improvement",
            ],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the main benefit of using PDCA in metal fabrication?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The biggest advantage is moving from reactive troubleshooting to systematic improvement. In an industry where raw material costs are high, PDCA helps reduce scrap and rework by identifying the root cause of defects, such as welding porosity or machining drift, before they affect an entire production run.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does the PDCA cycle support ISO 9001 compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'ISO 9001 requires organisations to demonstrate "continual improvement." PDCA provides the structured evidence auditors look for. By documenting your Plan, Do, Check, and Act stages, you create a clear audit trail that proves you are actively monitoring processes and taking effective corrective actions.',
                    },
                },
                {
                    "@type": "Question",
                    name: "Can PDCA be used for health and safety in the workshop?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. While often used for quality, the cycle is just as effective for ISO 45001 compliance. For example, if you identify a risk in your manual handling process, you can use PDCA to trial new lifting equipment (Plan/Do), assess its impact on staff safety (Check), and then update your safety procedures (Act).",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why do many fabrication businesses struggle to make PDCA work?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'Most failures happen because the "Check" or "Act" stages are rushed. Companies often implement a change but forget to measure the results over a long enough period, or they fail to update their standard operating procedures, which allows staff to drift back into old, inefficient habits.',
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global help manage the PDCA cycle?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global replaces scattered spreadsheets with a centralised platform built specifically for ISO standards. It allows your team to capture shop floor evidence like photos of weld joints or inspection logs directly onto a mobile device, linking those findings to specific ISO clauses and tracking every corrective action through to verified closure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do we need a dedicated quality manager to run PDCA cycles?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While having a quality lead helps, the most successful PDCA cycles involve the people doing the work. Machine operators and welders often have the best insights into why a process is failing. A structured system allows any supervisor or lead hand to start a cycle and document improvements as part of their daily routine.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should we run a PDCA cycle?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "PDCA is a continuous loop, not a one-off event. You should trigger a new cycle whenever a nonconformity is identified, a customer complaint is received, or when your data shows a trend of declining performance in areas like material waste or energy consumption.",
                    },
                },
            ],
        },
    ],
};

export default function PdcaBasicMetalBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PdcaBasicMetalBlogContent />
        </>
    );
}
