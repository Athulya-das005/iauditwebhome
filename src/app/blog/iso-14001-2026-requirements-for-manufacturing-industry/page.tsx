import type { Metadata } from "next";
import Iso140012026ManufacturingBlogContent from "./Iso140012026ManufacturingBlogContent";

const pageUrl =
    "https://www.iaudit.global/blog/iso-14001-2026-requirements-for-manufacturing-industry";
const ogImage = "https://www.iaudit.global/images/manufacturing-bg.webp";
const title = "ISO 14001:2026 Requirements for Manufacturing Industry";
const description =
    "ISO 14001:2026 requirements for manufacturing industry explained. What changed, what auditors will test, and how to transition with evidence.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 14001:2026 manufacturing",
        "ISO 14001:2026 requirements",
        "ISO 14001 transition manufacturing",
        "environmental management manufacturing",
        "ISO 14001 audit evidence",
        "ISO 14001 value chain",
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
                        name: "ISO 14001:2026 Requirements for Manufacturing",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline:
                "ISO 14001:2026 requirements for manufacturing industry: what to review first (and how to transition)",
            alternativeHeadline: title,
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
            datePublished: "2026-04-15",
            dateModified: "2026-04-15",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "ISO 14001:2026 manufacturing",
                "ISO 14001 transition",
                "environmental management manufacturing",
                "ISO 14001 audit evidence",
            ],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What are the main changes in ISO 14001:2026 for manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The main changes focus on moving from environmental intent to measurable performance. For manufacturing, this means a stronger emphasis on data-backed evidence for controlling emissions, effluent, and waste; greater leadership accountability in management reviews; and considering environmental impacts across your entire value chain, including suppliers and contractors.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When does my manufacturing company need to transition to ISO 14001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Organisations have a three-year transition window from the publication date in April 2026. This means your manufacturing company must be certified to the new standard by April 2029. We recommend starting your transition planning now to avoid a last-minute scramble.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What evidence will auditors look for in ISO 14001:2026 manufacturing audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Auditors will look for measurable environmental objectives with supporting data, evidence that operational controls on the shop floor are working in practice (e.g., bunding integrity, spill kit availability), monitoring records that are analysed to drive improvement, and proof of how you manage environmental risks with key suppliers and contractors.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should I start my ISO 14001:2026 transition in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The best place to start is with a gap analysis. This will help you identify where your current environmental management system falls short of the 2026 requirements. Focus on your objectives, monitoring data, and value chain controls. We are currently offering a free ISO 14001:2026 transition consultation to help manufacturing teams build a clear and practical roadmap.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can audit software help with the ISO 14001:2026 transition?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Purpose-built audit software helps you conduct gap analyses with clause-mapped checklists, capture on-site evidence with mobile devices, track corrective actions to closure, and analyse environmental performance trends. This centralises your evidence and makes the transition process much smoother.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is iAudit Global and how does it support manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global is ISO audit management software built by certified auditors. It helps manufacturing teams move away from spreadsheets by providing a single platform to manage environmental audits. It centralises evidence for traceability, emissions, waste and safety controls, tracks findings to closure using a PDCA workflow, and gives you real-time visibility of performance across all your sites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit Global support integrated management systems?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit Global is designed for integrated management systems. You can manage your ISO 9001 (Quality), ISO 14001 (Environmental), and ISO 45001 (Health and Safety) audits all within the same platform, using specific checklists and workflows for each standard.",
                    },
                },
            ],
        },
    ],
};

export default function Iso140012026ManufacturingBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Iso140012026ManufacturingBlogContent />
        </>
    );
}
