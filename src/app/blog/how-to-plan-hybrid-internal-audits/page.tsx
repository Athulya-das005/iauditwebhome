import type { Metadata } from "next";
import HybridInternalAuditsBlogContent from "./HybridInternalAuditsBlogContent";

const pageUrl = "https://www.iaudit.global/blog/how-to-plan-hybrid-internal-audits";
const ogImage = "https://www.iaudit.global/images/blog-complex-workflows.webp";
const title = "How to Plan Hybrid Internal Audits | ISO Guide";
const description =
    "Learn how to plan hybrid internal audits using remote and on-site methods. Get practical steps, evidence tips and ISO 19011 aligned planning guidance.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "hybrid internal audits",
        "how to plan hybrid internal audits",
        "ISO 19011 remote auditing",
        "remote and on-site internal audits",
        "ISO audit planning",
        "hybrid ISO audits",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        type: "article",
        title: "How to Plan Hybrid Internal Audits | ISO 19011 Practical Guide",
        description:
            "A practical guide to planning hybrid internal audits using remote and on-site methods. Learn risk-based planning, evidence management, and ISO 19011 aligned techniques.",
        url: pageUrl,
        siteName: "iAudit Global",
        images: [{ url: ogImage }],
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description:
            "Plan hybrid ISO audits with confidence. Learn how to combine remote and on-site audits using practical, ISO 19011 aligned methods.",
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
                "https://twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#software",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "ISO audit management software built for planning, executing and reporting ISO 9001, 14001, 45001 and 27001 audits using a PDCA-driven approach.",
            creator: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "How to Plan Hybrid Internal Audits: A Practical Guide for ISO Standards",
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#organization" },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog" },
                    { "@type": "ListItem", position: 3, name: "How to Plan Hybrid Internal Audits", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogpost`,
            headline: "How to Plan Hybrid Internal Audits: A Practical Guide for ISO Standards",
            description:
                "Learn how to plan hybrid internal audits using remote and on-site methods. Practical ISO 19011 guidance, risk-based planning tips and audit evidence management.",
            author: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-03-25",
            dateModified: "2026-03-25",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            keywords:
                "hybrid internal audits, how to plan hybrid internal audits, ISO 19011 remote auditing, remote and on-site internal audits",
            articleSection: "ISO Audit Management",
            inLanguage: "en-GB",
            url: pageUrl,
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What exactly is a hybrid internal audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A hybrid internal audit is a strategic combination of face to face site visits and remote digital reviews. It allows an organisation to be highly efficient by moving document-heavy tasks to a virtual setting while reserving physical site time for high-risk, operational observations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do I decide which processes to audit remotely versus on-site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The most important rule in how to plan hybrid internal audits is to let risk drive the decision. Processes that live in systems or documents, such as policy reviews or management meetings, are ideal for remote audits. Activities that require physical verification, such as safety culture, housekeeping, or machinery guarding, should remain on-site.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does ISO 19011 recognise remote and hybrid auditing techniques?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The ISO 19011:2018 guidelines explicitly recognise remote auditing as a valid method. The standard does not mandate a specific location for the auditor, provided that the evidence collected is objective, verifiable, and relevant to the audit criteria.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the biggest challenge when you plan hybrid internal audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The biggest hurdle is data fragmentation. When an audit is split between different locations and formats, findings and evidence often end up scattered across emails, notebooks, and shared drives. To make a hybrid model work, you need a central workspace like iAudit Global to keep the audit trail continuous and visible.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can we avoid video fatigue during the remote parts of an audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Virtual auditing is mentally taxing. A practical tip for how to plan hybrid internal audits is to break remote sessions into shorter, two-hour blocks rather than full-day video calls. This keeps both the auditor and the auditee focused and ensures that small details are not missed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can Audit Mate AI help with hybrid audit preparation?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit Mate acts as an intelligent co-pilot during the planning phase. It can instantly generate clause-aligned checklists for both on-site safety walks and remote document reviews. This ensures that your audit criteria remain consistent, regardless of where or how the evidence is being gathered.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why should I move away from spreadsheets for a hybrid audit programme?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spreadsheets were not designed to handle the complexity of a hybrid model. They lack a secure audit trail, make it difficult to attach live evidence like photos, and often result in version control chaos. iAudit Global unifies your entire hybrid programme into one PDCA-driven workspace, ensuring your audit history stays with your organisation.",
                    },
                },
            ],
        },
    ],
};

export default function HybridInternalAuditsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HybridInternalAuditsBlogContent />
        </>
    );
}
