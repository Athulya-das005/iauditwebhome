import type { Metadata } from "next";
import PdcaIso27001BlogContent from "./PdcaIso27001BlogContent";

const pageUrl = "https://www.iaudit.global/blog/pdca-cycle-in-iso-27001";
const ogImage = "https://www.iaudit.global/images/blog-ai-transform.webp";
const title = "PDCA Cycle in ISO 27001: How to Make Your ISMS Actually Work";
const description =
    "How the PDCA cycle in ISO 27001 turns certification into a living ISMS — Plan, Do, Check, Act in practice, common mistakes, and making PDCA part of daily work.";

export const metadata: Metadata = {
    title,
    description,
    robots: {
        index: true,
        follow: true,
    },
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
                "https://www.twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "BlogPosting",
            "@id": pageUrl,
            headline: title,
            description,
            image: ogImage,
            author: {
                "@type": "Person",
                name: "Mathew Chiweda",
            },
            publisher: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
            },
            datePublished: "2026-04-17",
            dateModified: "2026-04-17",
            keywords:
                "PDCA cycle in ISO 27001, plan do check act ISO 27001, ISMS, information security management system, ISO 27001 internal audit",
            url: pageUrl,
            articleSection: "ISO Audit Management",
            inLanguage: "en",
            wordCount: 2200,
            potentialAction: {
                "@type": "ReadAction",
                target: pageUrl,
            },
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is the PDCA cycle in ISO 27001 optional?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. ISO 27001 is built around a management system model that uses PDCA. You will not always see the words on every page, but the structure of the clauses and Annex A assumes a plan do check act approach.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should we complete one PDCA cycle in ISO 27001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "In practice, parts of the cycle run continuously. Risk assessments may be updated annually or when major changes occur. Internal audits are usually spread across the year. Management reviews are often held at least once a year. The important point is that all four phases happen regularly, not just before certification.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do small companies really need the full PDCA cycle in ISO 27001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Smaller organisations can keep the documentation lighter, but the logic of PDCA still applies. Even a simple ISMS benefits from planning, implementation, checking and improvement. Skipping parts of the PDCA cycle in ISO 27001 tends to create more work later when issues pile up.",
                    },
                },
            ],
        },
    ],
};

export default function PdcaIso27001BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PdcaIso27001BlogContent />
        </>
    );
}
