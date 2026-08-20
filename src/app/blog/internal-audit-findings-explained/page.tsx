import type { Metadata } from "next";
import InternalAuditFindingsBlogContent from "./InternalAuditFindingsBlogContent";

const pageUrl = "https://www.iaudit.global/blog/internal-audit-findings-explained";
const ogImage = "https://www.iaudit.global/images/blog-auditor-training.webp";
const title = "Internal Audit Findings Explained: NC, OFI & Observations";
const description =
    "Internal Audit Findings Explained: Learn the difference between NC, OFI, observations and positive findings in ISO 9001, 14001 and 45001 audits.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "internal audit findings",
        "nonconformity vs observation",
        "opportunity for improvement",
        "ISO audit findings",
        "positive audit findings",
        "ISO 9001 audit findings",
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
                        name: "Internal Audit Findings Explained",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "Internal Audit Findings Explained: NC, OFI, Observation & Positive Findings",
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
            datePublished: "2026-08-19",
            dateModified: "2026-08-19",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "internal audit findings",
                "nonconformity",
                "opportunity for improvement",
                "ISO audit observations",
            ],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What are the different types of internal audit findings?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Internal audit findings are usually categorised as nonconformities (NCs), observations, opportunities for improvement (OFIs), and positive findings. Each category communicates something different about the management system, from identifying failures against requirements to recognising good practices and improvement opportunities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between a nonconformity and an observation in an internal audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A nonconformity means objective evidence shows that a requirement has not been fulfilled. An observation does not identify a current failure but highlights a potential weakness that could become a problem if it is not addressed. The key difference is whether the requirement has already failed or whether there is a risk of future failure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is an Opportunity for Improvement (OFI) in an ISO audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An Opportunity for Improvement (OFI) identifies an area where a process already meets requirements but could become more effective, efficient or controlled. Unlike a nonconformity, an OFI does not require corrective action. It is used to encourage continual improvement within the management system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Should auditors always raise a nonconformity when they find an issue?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Not every issue identified during an audit is a nonconformity. Auditors should classify findings based on objective evidence. If a requirement has not been met, a nonconformity may be appropriate. If the process meets requirements but could improve, an OFI may be more suitable. The purpose of an audit is not to find as many nonconformities as possible. It is to provide an accurate picture of system performance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What information should be included in an ISO internal audit finding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A well-written audit finding should include the relevant ISO requirement or audit criteria, objective evidence collected during the audit, the area or process affected, a clear description of the finding, and any required follow-up actions where applicable. Good findings are factual, specific and easy for management to understand.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can organisations manage internal audit findings more effectively?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Organisations can manage findings more effectively by keeping evidence, findings, corrective actions and follow-up activities connected in one place. Audit management platforms such as iAudit Global help organisations manage ISO 9001, ISO 14001 and ISO 45001 audit findings by providing structured workflows for recording findings, tracking actions and monitoring audit performance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why are positive findings important in an internal audit report?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Positive findings are important because audits should provide a balanced view of the management system. Recognising effective processes, good practices and strong controls helps organisations understand what is working well and allows successful approaches to be shared across teams or locations.",
                    },
                },
            ],
        },
    ],
};

export default function InternalAuditFindingsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <InternalAuditFindingsBlogContent />
        </>
    );
}
