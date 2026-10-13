import type { Metadata } from "next";
import Iso90012015Vs2026BlogContent from "./Iso90012015Vs2026BlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-9001-2015-vs-iso-9001-2026";
const ogImage = "https://www.iaudit.global/images/blog/iso-9001-2015-vs-iso-9001-2026.jpg";
const title = "ISO 9001:2015 vs ISO 9001:2026: What Really Changed?";
const description =
    "Compare ISO 9001:2015 vs ISO 9001:2026. See the key changes, what remains the same, and what organisations should review in their QMS.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 9001:2015 vs ISO 9001:2026",
        "ISO 9001 2015 vs 2026 comparison",
        "ISO 9001:2026 key changes",
        "ISO 9001:2026 transition",
        "Quality Management System 2026",
        "QMS comparison",
        "ISO 9001 audit changes",
    ],
    authors: [{ name: "Mathew Chiweda", url: "https://www.iaudit.global/author/mathew-chiweda" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "article",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [{ url: ogImage, alt: title }],
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
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            url: pageUrl,
            headline: title,
            description,
            image: { "@type": "ImageObject", url: ogImage },
            keywords: [
                "ISO 9001:2015 vs ISO 9001:2026",
                "ISO 9001:2026 key changes",
                "ISO 9001 transition",
                "QMS review",
            ],
            articleSection: "ISO 9001",
            inLanguage: "en-GB",
            datePublished: "2026-10-12",
            dateModified: "2026-10-12",
            author: { "@id": "https://www.iaudit.global/author/mathew-chiweda#person" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
            about: { "@type": "Thing", name: "ISO 9001:2015 vs ISO 9001:2026 comparison" },
        },
        {
            "@type": "Person",
            "@id": "https://www.iaudit.global/author/mathew-chiweda#person",
            name: "Mathew Chiweda",
            jobTitle: "Co-founder & Managing Director",
            description:
                "Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global, with more than 20 years of experience in quality, health and safety, environmental management and ISO management systems. He specialises in ISO 9001, ISO 14001 and ISO 45001.",
            url: "https://www.iaudit.global/author/mathew-chiweda",
            worksFor: { "@id": "https://www.iaudit.global/#organization" },
        },
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            description:
                "ISO audit management software built by auditors for ISO 9001, ISO 14001 and ISO 45001 audit programmes.",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://www.iaudit.global/#website",
            url: "https://www.iaudit.global/",
            name: "iAudit Global",
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            inLanguage: "en-GB",
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog/" },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: title,
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the main difference between ISO 9001:2015 and ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The main difference is that ISO 9001:2026 builds on the existing 2015 framework while strengthening areas such as leadership, quality culture, ethical behaviour, strategic alignment, risks and opportunities, and employee awareness. Organisations can usually adapt their existing Quality Management System rather than rebuild it from scratch.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does ISO 9001:2026 replace ISO 9001:2015?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. ISO 9001:2026 is the current edition of the standard and replaces ISO 9001:2015. Organisations certified to the 2015 edition will need to transition to the 2026 version within the applicable transition period.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do organisations need to rewrite their QMS for ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not necessarily. Most organisations should begin by comparing their current QMS against the revised requirements, identifying genuine gaps and updating only the areas that need attention. Existing processes that remain effective and compliant may not need significant changes.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What new areas should organisations review for ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Key areas to review include leadership involvement, quality culture, ethical behaviour, alignment between quality and business strategy, the treatment of risks and opportunities, employee awareness and internal audit criteria.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How have risks and opportunities changed in ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 9001:2026 provides a clearer distinction between risks and opportunities. Organisations should not only consider what could prevent intended results, but also identify opportunities that could improve performance, customer outcomes or the effectiveness of the Quality Management System.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should internal audits change for ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Internal audits should be updated to reflect the revised requirements and areas of emphasis. Auditors may need to look more closely at leadership behaviour, quality culture, strategic alignment, risks and opportunities, employee awareness and the evidence showing how these are applied in practice.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When should organisations start preparing for ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Organisations should begin reviewing the differences between ISO 9001:2015 and ISO 9001:2026 as early as possible. Starting early gives teams more time to identify gaps, assign actions, update processes where necessary and use internal audits to confirm that changes are working before the transition deadline.",
                    },
                },
            ],
        },
    ],
};

export default function Iso90012015Vs2026Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Iso90012015Vs2026BlogContent />
        </>
    );
}
