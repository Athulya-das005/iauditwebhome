import type { Metadata } from "next";
import RiskBasedAuditingManufacturingBlogContent from "./RiskBasedAuditingManufacturingBlogContent";

const pageUrl = "https://www.iaudit.global/blog/risk-based-auditing-in-manufacturing";
const ogImage =
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop&q=80&fm=webp";
const title = "Risk-Based Auditing in Manufacturing | iAudit Global";
const description =
    "Move beyond the fixed audit calendar. Learn how risk-based auditing in manufacturing prioritises high-risk processes, shifts and suppliers to prevent quality failures and downtime.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "Risk-based auditing in manufacturing",
        "manufacturing internal audit",
        "ISO 9001 manufacturing audit",
        "risk-based audit programme",
        "manufacturing ISO audit software",
        "ISO 45001 manufacturing",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "article",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        images: [{ url: ogImage }],
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
            description:
                "iAudit Global is an ISO audit management platform built by certified auditors to help organisations manage ISO 9001, ISO 14001, ISO 45001, and ISO 27001 audits using PDCA-driven workflows.",
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
                    { "@type": "ListItem", position: 3, name: "Risk-Based Auditing in Manufacturing", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "Risk-Based Auditing in Manufacturing: Moving Beyond the Calendar",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: { "@type": "Organization", name: "iAudit Global" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-08-21",
            dateModified: "2026-08-21",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: ["Risk-based auditing in manufacturing", "ISO 9001 manufacturing", "internal audit programme"],
            articleSection: "Manufacturing Audits",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is risk-based auditing in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Risk-based auditing in manufacturing is the practice of prioritising audit time and resources toward the processes, shifts, and suppliers that represent the highest uncertainty to the business, rather than auditing every area with equal depth on a fixed calendar.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why does equal-depth annual auditing fail on the factory floor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Manufacturing risk is rarely distributed evenly. A rigid once-a-year schedule can create “Ghost Compliance,” where records look fine but the floor has changed through new shifts, calibration drift, or supplier process changes before the next scheduled audit.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which manufacturing areas should receive more audit attention?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "High-risk nodes typically include equipment calibration and maintenance on high-precision lines, supplier and batch traceability, and competence across shifts—especially night or agency teams with different compliance levels than the core day shift.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global support risk-based auditing in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global centralises audit data so teams can push high-intensity checklists to high-risk sites, spot patterns across shifts and locations on real-time dashboards, and link shop-floor findings to photos and evidence for clear corrective action.",
                    },
                },
            ],
        },
    ],
};

export default function RiskBasedAuditingManufacturingBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <RiskBasedAuditingManufacturingBlogContent />
        </>
    );
}
