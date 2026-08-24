import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";

const pageUrl = "https://www.iaudit.global/blog";
const title = "ISO Auditing & Compliance Blog | iAudit Global";
const headline = "ISO Auditing, Compliance & Continuous Improvement Insights";
const description =
    "Explore practical insights on ISO internal audits, ISO 9001, ISO 14001, audit management, compliance, risk-based thinking, corrective actions and continuous improvement.";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO auditing blog",
        "ISO internal audits",
        "ISO 9001",
        "ISO 14001",
        "audit management",
        "compliance",
        "risk-based thinking",
        "corrective actions",
        "continuous improvement",
        "ISO audit software",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "website",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [{ url: ogImage, alt: "iAudit Global" }],
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
            "@type": "CollectionPage",
            "@id": "https://www.iaudit.global/blog/#webpage",
            url: "https://www.iaudit.global/blog/",
            name: "ISO Auditing & Compliance Blog",
            headline,
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            about: { "@id": "https://www.iaudit.global/#organization" },
            breadcrumb: { "@id": "https://www.iaudit.global/blog/#breadcrumb" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/blog/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.iaudit.global/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://www.iaudit.global/blog/",
                },
            ],
        },
        {
            "@type": "WebSite",
            "@id": "https://www.iaudit.global/#website",
            url: "https://www.iaudit.global/",
            name: "iAudit Global",
            publisher: { "@id": "https://www.iaudit.global/#organization" },
        },
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
        },
    ],
};

export default function BlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <BlogListing />
        </>
    );
}
