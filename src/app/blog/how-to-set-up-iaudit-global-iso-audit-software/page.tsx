import type { Metadata } from "next";
import SetupGuideBlogContent from "./SetupGuideBlogContent";

const pageUrl = "https://www.iaudit.global/blog/how-to-set-up-iaudit-global-iso-audit-software";
const ogImage = "https://www.iaudit.global/images/blog-ai-transform.webp";
const title = "How to Set Up iAudit Global ISO Audit Software: 6 Steps";
const description = "Learn how to set up iAudit Global ISO audit software in 6 structured steps. Move from spreadsheets to digital audits, run gap analysis, and manage multi-site teams.";

export const metadata: Metadata = {
    title,
    description,
    keywords: ["set up iAudit Global", "ISO audit software setup", "iAudit onboarding", "ISO audit management", "digital audit setup", "PDCA audit software"],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: { type: "article", title, description, url: pageUrl, siteName: "iAudit Global", images: [{ url: ogImage }], locale: "en_GB" },
    twitter: { card: "summary_large_image", title, description, images: [ogImage], site: "@iAuditGlobal", creator: "@iAuditGlobal" },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        { "@type": "Organization", "@id": "https://www.iaudit.global/#organization", name: "iAudit Global", url: "https://www.iaudit.global/", logo: { "@type": "ImageObject", url: "https://www.iaudit.global/iaudit-logo-new.png" }, description: "iAudit Global is an ISO audit management platform built by certified auditors.", sameAs: ["https://www.linkedin.com/company/iaudit-global", "https://twitter.com/iauditglobal"] },
        { "@type": "SoftwareApplication", "@id": "https://www.iaudit.global/#product", name: "iAudit Global", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://www.iaudit.global/", description: "ISO audit management software for planning, executing, and reporting ISO audits using PDCA-based workflows.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "14-day free trial available" }, publisher: { "@id": "https://www.iaudit.global/#organization" } },
        { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: title, description, inLanguage: "en-GB", isPartOf: { "@id": "https://www.iaudit.global/#organization" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog" }, { "@type": "ListItem", position: 3, name: "How to Set Up iAudit Global", item: pageUrl }] } },
        { "@type": "BlogPosting", "@id": `${pageUrl}#blogposting`, headline: title, description, url: pageUrl, inLanguage: "en-GB", author: { "@type": "Organization", name: "iAudit Global" }, publisher: { "@id": "https://www.iaudit.global/#organization" }, datePublished: "2026-08-19", dateModified: "2026-08-19", mainEntityOfPage: { "@id": `${pageUrl}#webpage` }, image: ogImage, keywords: ["iAudit setup guide", "ISO audit software"], articleSection: "ISO Audit Management" },
    ],
};

export default function SetupGuideBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <SetupGuideBlogContent />
        </>
    );
}
