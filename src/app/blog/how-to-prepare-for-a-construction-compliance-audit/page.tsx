import type { Metadata } from "next";
import ConstructionComplianceAuditBlogContent from "./ConstructionComplianceAuditBlogContent";

const pageUrl =
    "https://www.iaudit.global/blog/how-to-prepare-for-a-construction-compliance-audit";
const ogImage = "https://www.iaudit.global/images/construction-bg.webp";
const title = "How to Prepare for a Construction Compliance Audit | iAudit";
const description =
    "Learn how to prepare for a construction compliance audit without the chaos. Centralise documentation and use PDCA to stay audit-ready every day with iAudit.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "construction compliance audit",
        "prepare for construction audit",
        "ISO 9001 construction",
        "ISO 45001 construction site",
        "construction ITP audit",
        "construction audit preparation",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
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
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            description:
                "iAudit Global is an ISO audit management platform built by certified auditors to help organisations manage ISO 9001, ISO 14001, ISO 45001, and ISO 27001 audits using PDCA-driven workflows.",
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#product",
            name: "iAudit Global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.iaudit.global/",
            description:
                "ISO audit management software for planning, executing, and reporting ISO 9001, 14001, 45001, and 27001 audits using PDCA-based workflows, dashboards, and automated reporting.",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "14-day free trial available with no credit card required",
            },
            publisher: {
                "@id": "https://www.iaudit.global/#organization",
            },
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
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Construction Compliance Audit Preparation",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "How to Prepare for a Construction Compliance Audit and Reduce Risk on Site",
            alternativeHeadline: title,
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: {
                "@type": "Organization",
                name: "iAudit Global",
            },
            publisher: {
                "@id": "https://www.iaudit.global/#organization",
            },
            datePublished: "2026-04-18",
            dateModified: "2026-04-18",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "construction compliance audit",
                "prepare for construction audit",
                "ISO 9001 construction",
                "construction audit preparation",
            ],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is a construction compliance audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A construction compliance audit is a structured review of whether a project complies with ISO standards, contractual requirements, safety regulations and approved specifications. It examines documentation, site controls, inspections, and nonconformities to confirm that systems are working in practice, not just on paper.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do I prepare for a construction compliance audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "To prepare for a construction compliance audit, centralise project documentation, review ITPs and inspection records, walk the site to verify physical controls, and analyse open nonconformities. Preparation should focus on demonstrating real operational control rather than last-minute paperwork organisation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What documents are required for a construction audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Common documents required during a construction audit include contracts and change orders, approved drawings, Inspection and Test Plans, subcontractor approvals, training and competence records, health and safety documentation, and evidence of corrective actions linked to nonconformities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should construction projects conduct internal audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Internal audits in construction should be risk-based rather than calendar-based. Higher-value or complex projects may require more frequent audits, especially where there are recurring NCRs, safety incidents or client-specific compliance requirements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the most common issues found in construction compliance audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Common findings include incomplete ITPs, poor traceability of inspections, outdated drawings on site, weak subcontractor documentation, ineffective corrective actions and repeated nonconformities across projects. These issues often stem from fragmented documentation or lack of supervision.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can digital tools improve construction audit preparation?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Digital audit tools help centralise documentation, capture site evidence in real time, track corrective actions and monitor trends across multiple projects. This reduces last-minute preparation and ensures compliance evidence is always accessible and up to date.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global help with construction compliance audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global is Audit Management software built by certified ISO auditors. It supports clause-mapped checklists for ISO 9001, 14001 and 45001, mobile evidence capture on site, corrective action tracking with effectiveness checks, and risk-based scheduling across multiple projects. This keeps construction teams audit-ready every day rather than reacting before external reviews.",
                    },
                },
            ],
        },
    ],
};

export default function ConstructionComplianceAuditBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ConstructionComplianceAuditBlogContent />
        </>
    );
}
