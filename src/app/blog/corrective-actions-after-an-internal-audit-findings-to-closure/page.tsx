import type { Metadata } from "next";
import CorrectiveActionsBlogContent from "./CorrectiveActionsBlogContent";

const pageUrl = "https://www.iaudit.global/blog/corrective-actions-after-an-internal-audit-findings-to-closure";
const ogImage = "https://www.iaudit.global/images/blog-process-automation.webp";
const title = "Corrective Actions After an Internal Audit | iAudit Global";
const description = "Master corrective actions after an internal audit. Move from findings to verified closure using iAudit Global's structured ISO audit management software.";

export const metadata: Metadata = {
    title,
    description,
    keywords: ["corrective actions after internal audit", "ISO corrective action", "audit findings closure", "PDCA corrective action", "root cause analysis audit", "ISO 9001 corrective action"],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: { type: "article", title, description, url: pageUrl, siteName: "iAudit Global", images: [{ url: ogImage }], locale: "en_GB" },
    twitter: { card: "summary_large_image", title, description, images: [ogImage], site: "@iAuditGlobal", creator: "@iAuditGlobal" },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        { "@type": "Organization", "@id": "https://www.iaudit.global/#organization", name: "iAudit Global", url: "https://www.iaudit.global/", logo: { "@type": "ImageObject", url: "https://www.iaudit.global/iaudit-logo-new.png" }, description: "iAudit Global is an ISO audit management platform built by certified auditors to help organisations manage ISO 9001, ISO 14001, ISO 45001, and ISO 27001 audits using PDCA-driven workflows.", sameAs: ["https://www.linkedin.com/company/iaudit-global", "https://twitter.com/iauditglobal"] },
        { "@type": "SoftwareApplication", "@id": "https://www.iaudit.global/#product", name: "iAudit Global", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://www.iaudit.global/", description: "ISO audit management software for planning, executing, and reporting ISO 9001, 14001, 45001, and 27001 audits using PDCA-based workflows, dashboards, and automated reporting.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "14-day free trial available with no credit card required" }, publisher: { "@id": "https://www.iaudit.global/#organization" } },
        { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: title, description, inLanguage: "en-GB", isPartOf: { "@id": "https://www.iaudit.global/#organization" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog" }, { "@type": "ListItem", position: 3, name: "Corrective Actions After an Internal Audit", item: pageUrl }] } },
        { "@type": "BlogPosting", "@id": `${pageUrl}#blogposting`, headline: "Corrective Actions After an Internal Audit: From Findings to Closure", description, url: pageUrl, inLanguage: "en-GB", author: { "@type": "Organization", name: "iAudit Global" }, publisher: { "@id": "https://www.iaudit.global/#organization" }, datePublished: "2026-08-19", dateModified: "2026-08-19", mainEntityOfPage: { "@id": `${pageUrl}#webpage` }, image: ogImage, keywords: ["corrective actions after internal audit", "ISO corrective action", "root cause analysis"], articleSection: "ISO Audit Management" },
        { "@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: [
            { "@type": "Question", name: "What are corrective actions after an internal audit?", acceptedAnswer: { "@type": "Answer", text: "Corrective actions after an internal audit are structured steps taken to eliminate the root cause of a nonconformity. Unlike a simple correction, a corrective action prevents the issue from recurring and supports continual improvement under ISO standards." } },
            { "@type": "Question", name: "What is the difference between correction and corrective action?", acceptedAnswer: { "@type": "Answer", text: "A correction fixes the immediate issue, such as completing a missing record. A corrective action addresses the underlying cause, such as implementing a system to prevent records from expiring unnoticed." } },
            { "@type": "Question", name: "How do you write effective corrective actions after an internal audit?", acceptedAnswer: { "@type": "Answer", text: "Effective corrective actions should include a clear root cause, a defined action to eliminate that cause, a named owner, a deadline and a method for verifying effectiveness." } },
            { "@type": "Question", name: "Why do corrective actions fail in ISO audits?", acceptedAnswer: { "@type": "Answer", text: "Corrective actions often fail because root cause analysis is superficial, ownership is unclear, deadlines are not tracked or effectiveness is not verified." } },
            { "@type": "Question", name: "How should corrective action effectiveness be verified?", acceptedAnswer: { "@type": "Answer", text: "Effectiveness should be verified through follow-up audits, performance data review or sampling. A corrective action should only be closed when there is objective evidence that the issue will not recur." } },
            { "@type": "Question", name: "Can spreadsheets manage corrective actions after an internal audit?", acceptedAnswer: { "@type": "Answer", text: "Spreadsheets can list actions, but they struggle with deadline tracking, cross-site visibility and PDCA integration." } },
            { "@type": "Question", name: "How does iAudit Global help manage corrective actions after an internal audit?", acceptedAnswer: { "@type": "Answer", text: "iAudit Global centralises findings, assigns ownership, tracks deadlines and verifies effectiveness through structured PDCA workflows." } },
        ] },
    ],
};

export default function CorrectiveActionsAfterAuditBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <CorrectiveActionsBlogContent />
        </>
    );
}
