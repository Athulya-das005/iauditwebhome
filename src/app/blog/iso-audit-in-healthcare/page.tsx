import type { Metadata } from "next";
import HealthcareIsoBlogContent from "./HealthcareIsoBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-audit-in-healthcare";
const ogImage = "https://www.iaudit.global/images/healthcare-bg.webp";
const title = "ISO Audit in Healthcare Is Not Like Other Audits. Here Is Why.";
const description =
    "Why ISO audit in healthcare is different from other industries — patient safety stakes, clinical workflows, ISO 9001, ISO 27001, and how PDCA makes audits drive real improvement.";

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
            datePublished: "2026-04-03",
            dateModified: "2026-04-03",
            keywords:
                "ISO audit in healthcare, ISO for healthcare industry, ISO 9001 healthcare, ISO 27001 healthcare, ISO certification healthcare, PDCA healthcare audits",
            url: pageUrl,
            articleSection: "ISO Audit Management",
            inLanguage: "en",
            wordCount: 1900,
            potentialAction: {
                "@type": "ReadAction",
                target: pageUrl,
            },
        },
    ],
};

export default function HealthcareIsoBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HealthcareIsoBlogContent />
        </>
    );
}
