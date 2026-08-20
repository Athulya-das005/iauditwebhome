import type { Metadata } from "next";
import ManufacturingAuditsBlogContent from "./ManufacturingAuditsBlogContent";

const pageUrl = "https://www.iaudit.global/blog/why-internal-audits-are-critical-in-manufacturing";
const ogImage = "https://www.iaudit.global/images/blog-process-automation.webp";
const title = "Why Internal Audits Are Critical in Manufacturing";
const description =
    "Learn why internal audits are critical in manufacturing — from catching process gaps early to building continuous improvement, certification readiness and supply chain confidence.";

export const metadata: Metadata = {
    title,
    description,
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
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
            keywords:
                "internal audit in manufacturing, manufacturing audits, ISO 9001, continuous improvement, PDCA, process audits, quality management",
            url: pageUrl,
            articleSection: "ISO Audit Management",
            inLanguage: "en",
            wordCount: 1800,
            potentialAction: {
                "@type": "ReadAction",
                target: pageUrl,
            },
        },
    ],
};

export default function ManufacturingAuditsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ManufacturingAuditsBlogContent />
        </>
    );
}
