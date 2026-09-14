import type { Metadata } from "next";
import Iso140012026GapAnalysisBlogContent from "./Iso140012026GapAnalysisBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-14001-2026-gap-analysis";
const ogImage =
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop&q=90&fm=webp";
const title = "ISO 14001:2026 Gap Analysis: Identify & Close Gaps";
const description =
    "Learn how to conduct an ISO 14001:2026 gap analysis, identify compliance gaps, prioritise actions and prepare your environmental management system for transition.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 14001:2026 gap analysis",
        "ISO 14001 gap analysis",
        "ISO 14001:2026 gap assessment",
        "ISO 14001:2026 compliance gaps",
        "ISO 14001:2026 transition",
        "ISO 14001 gap analysis process",
        "ISO 14001:2026 readiness",
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
            headline: "ISO 14001:2026 Gap Analysis: How to Identify and Close Compliance Gaps",
            description,
            image: { "@type": "ImageObject", url: ogImage },
            keywords: [
                "ISO 14001:2026 gap analysis",
                "ISO 14001 gap analysis",
                "ISO 14001:2026 gap assessment",
                "ISO 14001:2026 compliance gaps",
                "ISO 14001:2026 transition",
                "ISO 14001 gap analysis process",
                "ISO 14001:2026 readiness",
            ],
            articleSection: "ISO 14001",
            inLanguage: "en-GB",
            datePublished: "2026-09-14",
            dateModified: "2026-09-14",
            author: { "@id": "https://www.iaudit.global/author/mathew-chiweda#person" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "ISO 14001:2026 Gap Analysis: How to Identify and Close Compliance Gaps",
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
            about: { "@type": "Thing", name: "ISO 14001:2026 gap analysis" },
        },
        {
            "@type": "Person",
            "@id": "https://www.iaudit.global/author/mathew-chiweda#person",
            name: "Mathew Chiweda",
            jobTitle: "Co-founder & Managing Director",
            description:
                "Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global, with more than 20 years of experience in quality, health and safety, environmental management and ISO management systems. He specialises in ISO 9001, ISO 14001 and ISO 45001, with experience across internal auditing, implementation, training, consultancy and site inspections.",
            url: "https://www.iaudit.global/author/mathew-chiweda",
            worksFor: { "@id": "https://www.iaudit.global/#organization" },
            knowsAbout: [
                "ISO 9001",
                "ISO 14001",
                "ISO 45001",
                "Internal auditing",
                "PDCA audit workflows",
                "ISO management systems",
            ],
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
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressRegion: "Surrey",
                addressCountry: "GB",
            },
            email: "info@iaudit.global",
            telephone: "+44 7944 829129",
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
                    name: "ISO 14001:2026 Gap Analysis: How to Identify and Close Compliance Gaps",
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
                    name: "What is an ISO 14001:2026 gap analysis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An ISO 14001:2026 gap analysis is a structured comparison between an organisation's existing Environmental Management System and the requirements of ISO 14001:2026. It helps identify requirements that are already addressed, areas needing improvement, missing evidence and actions required for transition.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why is an ISO 14001:2026 gap analysis important?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An ISO 14001:2026 gap analysis helps organisations understand what needs to change before transitioning to the revised standard. It provides a clear view of compliance gaps so teams can prioritise actions rather than making changes without first assessing their current EMS.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do you conduct an ISO 14001:2026 gap analysis?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Start by reviewing the existing EMS and comparing it with the requirements of ISO 14001:2026. Assess relevant processes, documented information and objective evidence, record any gaps, prioritise actions, assign responsibilities and verify that corrective actions have been effective.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What areas should an ISO 14001:2026 gap analysis cover?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A gap analysis should consider the requirements across clauses 4 to 10, including organisational context, leadership, environmental aspects, risks and opportunities, planning, support, operational controls, performance evaluation, internal auditing and improvement.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is an ISO 14001:2026 gap analysis the same as an ISO 14001 audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. A gap analysis is a readiness assessment used to identify areas that need attention. An ISO 14001 audit evaluates conformity and the effectiveness of the management system against defined audit criteria. A gap analysis does not result in ISO 14001 certification.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should compliance gaps identified during the assessment be prioritised?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Prioritise gaps according to factors such as environmental significance, compliance obligations, operational risk, potential impact on the EMS and the effort required to address them. Significant or high-risk gaps should generally be addressed before lower-priority improvements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I do an ISO 14001:2026 gap analysis for free?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit Global provides a free ISO 14001:2026 gap analysis covering 61 auditable questions across clauses 4 to 10. It can help you identify areas of compliance, opportunities for improvement and potential nonconformities before planning your transition actions.",
                    },
                },
            ],
        },
    ],
};

export default function Iso140012026GapAnalysisPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Iso140012026GapAnalysisBlogContent />
        </>
    );
}
