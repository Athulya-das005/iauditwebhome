import type { Metadata } from "next";
import ConstructionIso9001BlogContent from "./ConstructionIso9001BlogContent";

const pageUrl = "https://www.iaudit.global/blog/prepare-for-iso-9001-in-construction";
const ogImage = "https://www.iaudit.global/images/construction-bg.webp";
const title = "Prepare for ISO 9001 in Construction: What You Actually Need";
const description =
    "A practical guide to prepare for ISO 9001 in construction — scope, documentation, site checks, internal audits, common mistakes and a short checklist for audit day.";

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
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
            keywords:
                "prepare for ISO 9001 in construction, ISO 9001 construction, construction quality management system, internal audit construction, ISO audit construction",
            url: pageUrl,
            articleSection: "ISO Audit Management",
            inLanguage: "en",
            wordCount: 2000,
            potentialAction: {
                "@type": "ReadAction",
                target: pageUrl,
            },
        },
    ],
};

export default function ConstructionIso9001BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ConstructionIso9001BlogContent />
        </>
    );
}
