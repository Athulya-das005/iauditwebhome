import type { Metadata } from "next";
import DocumentationIsoBlogContent from "./DocumentationIsoBlogContent";

const pageUrl = "https://www.iaudit.global/blog/why-documentation-is-important-for-iso-certification";
const ogImage = "https://www.iaudit.global/images/blog-process-automation.webp";
const title = "Why Documentation Is Important for ISO Certification";
const description =
    "Why documentation is important for ISO certification — what documented information really means, how auditors use it, common problems, and how to make it work for you.";

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
            datePublished: "2026-05-01",
            dateModified: "2026-05-01",
            keywords:
                "why documentation is important for ISO certification, ISO documented information, ISO 9001 documentation, ISO records and procedures, internal audit documentation",
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

export default function DocumentationIsoBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DocumentationIsoBlogContent />
        </>
    );
}
