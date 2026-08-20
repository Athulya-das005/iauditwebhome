import type { Metadata } from "next";
import RemoteIsoAuditsBlogContent from "./RemoteIsoAuditsBlogContent";

const pageUrl = "https://www.iaudit.global/blog/remote-iso-internal-audits";
const ogImage = "https://www.iaudit.global/images/blog-complex-workflows.webp";
const title = "Remote ISO Internal Audits: A Practical Guide for Audit Teams";
const description =
    "A practical guide to remote ISO internal audits — when they work, where they fall short, how to plan them, collect evidence, and use PDCA without losing audit rigour.";

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
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            keywords:
                "remote ISO internal audits, remote auditing ISO 19011, virtual internal audit, ISO 9001 remote audit, ISO 27001 remote audit, hybrid internal audits",
            url: pageUrl,
            articleSection: "ISO Audit Management",
            inLanguage: "en",
            wordCount: 2100,
            potentialAction: {
                "@type": "ReadAction",
                target: pageUrl,
            },
        },
    ],
};

export default function RemoteIsoAuditsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RemoteIsoAuditsBlogContent />
        </>
    );
}
