import type { Metadata } from "next";
import InternalAuditProgrammeScheduleBlogContent from "./InternalAuditProgrammeScheduleBlogContent";

const pageUrl =
    "https://www.iaudit.global/blog/how-to-schedule-an-effective-internal-audit-programme";
const ogImage = "https://www.iaudit.global/images/blog-complex-workflows.webp";
const title = "How to Schedule an Effective Internal Audit Programme";
const description =
    "Learn how to move from static calendars to a risk-based internal audit programme schedule that drives ISO compliance and operational control.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "internal audit programme schedule",
        "risk-based internal audit",
        "ISO 19011 audit programme",
        "audit scheduling",
        "multi-site audit programme",
        "PDCA audit planning",
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
                        name: "How to Schedule an Effective Internal Audit Programme",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "How to Schedule an Effective Internal Audit Programme",
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
            datePublished: "2026-08-18",
            dateModified: "2026-08-18",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "internal audit programme schedule",
                "risk-based internal audit",
                "ISO 19011 audit programme",
                "audit scheduling",
            ],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is an internal audit programme schedule?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An internal audit programme schedule is a strategic roadmap that defines when, where, and how often audits will occur across an organisation. Unlike a simple calendar, a professional programme schedule is risk-based, meaning it prioritises high-risk processes and sites while considering the results of previous audits, as guided by ISO 19011.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should I schedule internal audits for ISO 9001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 9001 Clause 9.2 doesn't mandate a specific frequency, but it does require that the programme considers the importance of the processes and changes affecting the organisation. High-risk areas or those with a history of non-conformities should be scheduled more frequently (e.g., quarterly), while stable, low-risk areas might only need an annual review.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between an audit calendar and an audit programme?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A calendar is a static list of dates, often set once a year and rarely changed. An audit programme is a dynamic management tool that follows the PDCA (Plan-Do-Check-Act) cycle. It adapts to operational changes, spikes in NCRs, or new risks, ensuring the auditor's time is always spent where it provides the most value.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do I manage a multi-site audit programme schedule?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Managing multiple sites requires centralised visibility. Using spreadsheets often leads to version control issues and audit scrambles. Effective multi-site scheduling involves a bird's-eye view of all locations, allowing you to align audit dates with project milestones—like mobilisation or handover—and ensuring no single site is overlooked.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why is follow-up scheduling critical for ISO compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If you don't schedule an effectiveness check or follow-up audit after a major non-conformity is found, the PDCA loop remains open. Many organisations fail their certification audits because they closed the initial task but never scheduled a check to verify that the systemic problem was actually solved.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I use Excel to manage my internal audit programme schedule?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While many small organisations start with Excel, it quickly becomes an administrative burden as the business grows. Manual spreadsheets lack automated reminders, real-time sharing, and data linkage. Moving to a digital platform reduces admin and ensures your audit memory stays with the business even if a consultant or employee leaves.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global help with audit scheduling?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global replaces static spreadsheets with a dynamic dashboard for your entire internal audit programme schedule. Key features include Risk-Based Tagging to prioritise high-risk sites, Centralised Visibility to track overdue audits, and Automated Follow-ups to verify corrective actions. You can explore these features by starting a 14-day free trial at www.iaudit.global.",
                    },
                },
            ],
        },
    ],
};

export default function InternalAuditProgrammeScheduleBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <InternalAuditProgrammeScheduleBlogContent />
        </>
    );
}
