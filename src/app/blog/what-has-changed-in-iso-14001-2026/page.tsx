import type { Metadata } from "next";
import WhatHasChangedIso14001BlogContent from "./WhatHasChangedIso14001BlogContent";

const pageUrl = "https://www.iaudit.global/blog/what-has-changed-in-iso-14001-2026";
const ogImage =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&q=90&fm=webp";
const title = "What Has Changed in ISO 14001:2026? Key Changes Explained";
const description =
    "What has changed in ISO 14001:2026? Learn about the key changes from ISO 14001:2015, including climate change, biodiversity, lifecycle thinking and more.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 14001:2026",
        "ISO 14001:2026 changes",
        "What has changed in ISO 14001:2026",
        "ISO 14001:2015",
        "ISO 14001 transition",
        "Environmental Management System",
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
            "@type": "WebPage",
            "@id": `${pageUrl}/#webpage`,
            url: `${pageUrl}/`,
            name: "ISO 14001:2026 Changes: What Has Changed from ISO 14001:2015?",
            description,
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
            mainEntity: { "@id": `${pageUrl}/#article` },
            inLanguage: "en-GB",
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
            "@type": "BlogPosting",
            "@id": `${pageUrl}/#article`,
            url: `${pageUrl}/`,
            headline: "ISO 14001:2026 Changes: What Has Changed from ISO 14001:2015?",
            description,
            image: { "@type": "ImageObject", url: ogImage },
            author: { "@id": "https://www.iaudit.global/author/mathew-chiweda/#person" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            mainEntityOfPage: { "@id": `${pageUrl}/#webpage` },
            articleSection: "ISO 14001",
            keywords: [
                "ISO 14001:2026",
                "ISO 14001:2026 changes",
                "What has changed in ISO 14001:2026",
                "ISO 14001:2015",
                "ISO 14001 transition",
                "Environmental Management System",
            ],
            datePublished: "2026-09-02",
            dateModified: "2026-09-02",
            inLanguage: "en-GB",
        },
        {
            "@type": "Person",
            "@id": "https://www.iaudit.global/author/mathew-chiweda/#person",
            name: "Mathew Chiweda",
            url: "https://www.iaudit.global/author/mathew-chiweda/",
            jobTitle: "Co-founder",
            description:
                "Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global, with more than 20 years of experience in quality, health and safety, environmental management and ISO management systems.",
            worksFor: { "@id": "https://www.iaudit.global/#organization" },
            sameAs: ["https://www.linkedin.com/in/mathew-chiweda/"],
            knowsAbout: [
                "ISO 9001",
                "ISO 14001",
                "ISO 45001",
                "ISO auditing",
                "Environmental management",
                "Health and safety management",
                "Quality management systems",
                "Management systems auditing",
                "PDCA",
            ],
        },
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            description:
                "ISO audit management software built by auditors for ISO 9001, ISO 14001 and ISO 45001 audits.",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            email: "info@iaudit.global",
            telephone: "+44 7944 829129",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressRegion: "Surrey",
                addressCountry: "United Kingdom",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}/#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog/" },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "ISO 14001:2026 Changes",
                    item: `${pageUrl}/`,
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}/#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What has changed in ISO 14001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 14001:2026 introduces and clarifies several requirements compared with ISO 14001:2015. Key changes include broader consideration of environmental context, greater visibility of climate change and biodiversity, clearer lifecycle thinking, revised planning requirements, new Clause 6.3 on planning of changes, broader requirements for external providers, and clearer expectations around internal audits and management review.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is ISO 14001:2026 a completely new standard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. ISO 14001:2026 builds on the existing Environmental Management System framework rather than replacing it with a completely different approach. The PDCA cycle, continual improvement, environmental aspects, compliance obligations, risk-based thinking and lifecycle perspective remain important.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between ISO 14001:2015 and ISO 14001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The main difference is the clarification and strengthening of several areas of the Environmental Management System. ISO 14001:2026 gives greater attention to environmental context, climate change, biodiversity, natural resources, lifecycle considerations and change management. It also clarifies requirements relating to external providers, internal audits and management review.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When do organisations need to transition to ISO 14001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 14001:2015 certificates are subject to a transition period following publication of ISO 14001:2026. The transition period runs for three years, with 14 April 2029 communicated as the end of the transition period. Organisations should speak with their certification body to confirm the transition arrangements and timing that apply to their certificate.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does ISO 14001:2026 introduce new climate change requirements?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Climate change is not entirely new to ISO 14001. The 2024 Climate Action Amendment already required organisations to consider whether climate change is a relevant issue. ISO 14001:2026 incorporates those climate-related changes into the revised standard and places them within a broader environmental context.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can I check if my organisation is ready for ISO 14001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A gap analysis is a good starting point. Review your current Environmental Management System against the ISO 14001:2026 requirements, paying particular attention to context, environmental aspects, risks and opportunities, lifecycle thinking, change management, external providers and internal auditing. iAudit Global also provides a free ISO 14001:2026 self-assessment to help organisations get an initial view of their readiness.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do I need to update my ISO 14001 internal audit checklist for 2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Your internal audit programme and checklists should be reviewed against the revised requirements. Auditors should consider areas such as environmental context, climate change, lifecycle perspective, planning of changes, external providers and the revised expectations for audit objectives and evidence.",
                    },
                },
            ],
        },
    ],
};

export default function WhatHasChangedIso14001Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <WhatHasChangedIso14001BlogContent />
        </>
    );
}
