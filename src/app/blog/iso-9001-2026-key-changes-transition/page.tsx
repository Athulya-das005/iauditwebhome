import type { Metadata } from "next";
import Iso90012026KeyChangesBlogContent from "./Iso90012026KeyChangesBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-9001-2026-key-changes-transition";
const ogImage =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=90&fm=webp";
const title = "ISO 9001:2026: Key Changes and Transition Guide";
const description =
    "Explore ISO 9001:2026 key changes, transition requirements and practical steps organisations can take to prepare for the new standard.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 9001:2026",
        "ISO 9001:2026 key changes",
        "ISO 9001:2026 transition",
        "ISO 9001:2015 vs ISO 9001:2026",
        "ISO 9001 transition guide",
        "Quality Management System 2026",
        "ISO 9001 gap assessment",
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
            headline: "ISO 9001:2026: Key Changes, Transition and What Organisations Need to Do",
            description,
            image: { "@type": "ImageObject", url: ogImage },
            keywords: [
                "ISO 9001:2026",
                "ISO 9001:2026 key changes",
                "ISO 9001:2026 transition",
                "ISO 9001:2015 vs ISO 9001:2026",
                "ISO 9001 transition guide",
                "Quality Management System 2026",
                "ISO 9001 gap assessment",
            ],
            articleSection: "ISO 9001",
            inLanguage: "en-GB",
            datePublished: "2026-09-23",
            dateModified: "2026-09-23",
            author: { "@id": "https://www.iaudit.global/author/mathew-chiweda#person" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "ISO 9001:2026: Key Changes, Transition and What Organisations Need to Do",
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
            about: { "@type": "Thing", name: "ISO 9001:2026 key changes and transition" },
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
                    name: "ISO 9001:2026: Key Changes, Transition and What Organisations Need to Do",
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
                    name: "What is ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 9001:2026 is the sixth edition of the international standard for Quality Management Systems. It was published on 16 September 2026 and replaces ISO 9001:2015. The revised edition keeps the familiar QMS framework while introducing targeted changes to improve clarity, usability and relevance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the key changes in ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Key changes include a stronger focus on leadership, quality culture and ethical behaviour, clearer treatment of risks and opportunities, updated considerations around organisational context and improved alignment with other ISO management system standards. The revised standard also includes additional guidance to help organisations understand its requirements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does ISO 9001:2026 replace ISO 9001:2015?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. ISO 9001:2026 replaces ISO 9001:2015 as the current edition of the standard. Organisations certified to the previous edition will need to plan their transition according to the requirements and timeline set by their certification body.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When do organisations need to transition to ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The transition period runs after publication of the revised standard, with the applicable deadline depending on accreditation and certification arrangements. Under the current UKAS transition arrangements, certification bodies are required to transition certified customers by 30 September 2029. Organisations should confirm the specific transition requirements with their certification body.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should organisations prepare for ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A good starting point is a gap assessment against the revised standard. Organisations should then review affected processes, documented information, responsibilities and internal audit programmes. Any identified actions should be tracked through to completion, with evidence that changes have been implemented and are effective.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Will internal audits need to change for ISO 9001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Internal audit programmes should be reviewed to ensure they address the revised requirements and relevant areas of the organisation's QMS. Auditors should consider audit criteria, evidence, findings and corrective actions rather than simply updating checklists. The focus should remain on whether requirements are understood, implemented and effective.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit help with the ISO 9001:2026 transition?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit is built by auditors, for ISO audits, and provides tools for audit planning, ISO-focused checklists, evidence capture, findings management, corrective actions and reporting. Organisations preparing for ISO 9001:2026 can use a structured audit process to identify gaps, document evidence and track actions throughout the transition. iAudit also offers a free consultation to discuss your transition and audit requirements.",
                    },
                },
            ],
        },
    ],
};

export default function Iso90012026KeyChangesPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Iso90012026KeyChangesBlogContent />
        </>
    );
}
