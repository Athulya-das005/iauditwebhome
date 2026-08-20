import type { Metadata } from "next";
import Iso140012026UpdateBlogContent from "./Iso140012026UpdateBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-14001-2026-update";
const ogImage = "https://www.iaudit.global/images/blog-continuous-improvement.webp";
const title = "ISO 14001:2026 Update: What Is Changing and How to Prepare";
const description =
    "Learn what the ISO 14001:2026 update means for your environmental management system. Explore expected changes, transition timelines, and practical preparation steps.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 14001:2026 update",
        "ISO 14001 revision 2026",
        "ISO 14001 transition",
        "environmental management system",
        "ISO 14001 climate change",
        "ISO 14001 internal audit",
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
            url: "https://www.iaudit.global",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#software",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "iAudit Global is an ISO audit management platform built for ISO 9001, 14001, 45001, and 27001 audits. Plan, execute, and report audits in one PDCA-driven platform.",
            creator: {
                "@type": "Organization",
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
                    { "@type": "ListItem", position: 3, name: "ISO 14001:2026 Update", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogpost`,
            headline: title,
            description,
            author: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-04-01",
            dateModified: "2026-04-01",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            keywords:
                "ISO 14001:2026 update, ISO 14001 revision 2026, ISO 14001 transition, environmental management system",
            articleSection: "ISO Audit Management",
            inLanguage: "en-GB",
            url: pageUrl,
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is ISO 14001 being updated in 2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A formal revision of the ISO 14001 standard is currently underway, with publication expected in 2026. The update will ensure the standard remains relevant to modern environmental challenges.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Will organisations need to recertify immediately?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Whenever an ISO standard is updated, there is a formal transition period. This usually lasts for three years from the date of publication, giving organisations plenty of time to update their systems and complete a transition audit.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the main changes expected in ISO 14001:2026?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While the core structure remains the same, the update is expected to place greater emphasis on climate change risks, lifecycle perspective, sustainable procurement, and the accuracy of external environmental reporting.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can internal auditors prepare for the changes?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Internal audit teams should start by reviewing their organisation's environmental context and compliance obligations. It is also a good time to centralise audit records, clear outstanding nonconformities, and move away from manual spreadsheets to a dedicated ISO audit platform.",
                    },
                },
            ],
        },
    ],
};

export default function Iso140012026UpdateBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Iso140012026UpdateBlogContent />
        </>
    );
}
