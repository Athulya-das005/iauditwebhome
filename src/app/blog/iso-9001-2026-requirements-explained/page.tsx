import type { Metadata } from "next";
import Iso90012026RequirementsBlogContent from "./Iso90012026RequirementsBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-9001-2026-requirements-explained";
const ogImage = "https://www.iaudit.global/images/blog/iso-9001-2026-requirements-explained.jpg";
const title = "ISO 9001:2026 Requirements Explained: What to Review";
const description =
    "Understand ISO 9001:2026 requirements, what has changed, and what organisations should review across leadership, risk, audits and improvement.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO 9001:2026 requirements",
        "ISO 9001:2026 explained",
        "ISO 9001 review",
        "ISO 9001 quality culture",
        "ISO 9001 ethical behaviour",
        "ISO 9001 risks and opportunities",
        "ISO 9001:2026 transition",
        "Clause 4 to 10 ISO 9001",
        "Annex A ISO 9001",
        "internal audits ISO 9001:2026",
    ],
    authors: [{ name: "Mathew Chiweda" }, { name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "article",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        images: [{ url: ogImage, width: 1200, height: 675, alt: "ISO 9001:2026 Requirements Explained" }],
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
            url: "https://www.iaudit.global/",
            logo: { "@type": "ImageObject", url: "https://www.iaudit.global/iaudit-logo-new.png" },
            description: "iAudit Global is an ISO audit management platform built by certified auditors.",
            sameAs: ["https://www.linkedin.com/company/iaudit-global", "https://twitter.com/iauditglobal"],
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
                    { "@type": "ListItem", position: 3, name: "ISO 9001:2026 Requirements Explained", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: title,
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: {
                "@type": "Person",
                name: "Mathew Chiweda",
                url: "https://www.iaudit.global/author/mathew-chiweda",
            },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-10-19",
            dateModified: "2026-10-19",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "ISO 9001:2026 requirements",
                "ISO 9001 quality culture",
                "ISO 9001 transition",
                "internal audit review",
            ],
            articleSection: "ISO 9001",
        },
    ],
};

export default function Iso90012026RequirementsBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Iso90012026RequirementsBlogContent />
        </>
    );
}
