import type { Metadata } from "next";
import MultiSiteBlogContent from "./MultiSiteBlogContent";

const pageUrl = "https://www.iaudit.global/blog/how-to-manage-iso-audits-across-multiple-sites";
const ogImage = "https://www.iaudit.global/assets/images/blog-multi-site-audits.jpg";
const title = "How to Manage ISO Audits Across Multiple Sites Effectively";
const description =
    "Learn how to manage ISO audits across multiple sites with centralised oversight, standardised checklists, and real-time visibility for better compliance.";

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
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#software",
            name: "iAudit Global",
            operatingSystem: "Web",
            applicationCategory: "BusinessApplication",
            url: "https://app.iaudit.global",
            description:
                "ISO audit management software for ISO 9001, 14001, 45001, and 27001. Plan, execute, and track multi-site audits with PDCA workflows and real-time dashboards.",
            creator: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
            },
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
            datePublished: "2026-03-13",
            dateModified: "2026-03-13",
            keywords:
                "How to Manage ISO Audits Across Multiple Sites, Multi-site ISO audit, ISO 9001, ISO 14001, ISO 45001, ISO 27001, audit management software",
            url: pageUrl,
            articleSection: "ISO Audit Management",
            inLanguage: "en",
            wordCount: 2200,
            potentialAction: {
                "@type": "ReadAction",
                target: pageUrl,
            },
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the biggest challenge when learning how to manage ISO audits across multiple sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The most common hurdle is inconsistency. When sites use different checklists, grading systems, or reporting formats, it is impossible for the central team to compare data or spot systemic risks. Standardisation of tools and criteria is the only way to gain true visibility across a multi-site organisation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does ISO require every site to be audited every year?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not necessarily. For organisations with a central function and similar processes across sites, you can often use a sampling approach. High-risk or poor-performing sites should always be audited more frequently.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the role of a central function in a multi-site ISO programme?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The central function acts as the owner of the management system. They set the audit schedule, define criteria, train auditors, and review results from all locations to ensure consistency across ISO standards.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can ISO audit management software help with remote site audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. ISO audit management software like iAudit Global allows auditors to review digital evidence and log findings in real time, improving remote auditing efficiency.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do you track corrective actions across multiple locations?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Tracking actions manually is inefficient. Using a central digital log lets all sites enter nonconformities and actions in one system, enabling effective monitoring and root cause analysis.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is it better to use local or central auditors for multi-site programmes?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A hybrid model works best. Local auditors provide site knowledge, while central auditors maintain independence and consistency. Software helps both work in a standardised system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can we ensure our multi-site audit data stays secure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Security requires enterprise-grade encryption and role-based access. iAudit Global also has a zero-access policy, meaning audit data belongs only to the organisation.",
                    },
                },
            ],
        },
    ],
};

export default function MultiSiteAuditsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MultiSiteBlogContent />
        </>
    );
}
