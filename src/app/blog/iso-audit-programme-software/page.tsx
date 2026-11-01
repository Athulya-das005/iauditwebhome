import type { Metadata } from "next";
import IsoAuditProgrammeSoftwareBlogContent from "./IsoAuditProgrammeSoftwareBlogContent";

const pageUrl = "https://iaudit.global/blog/iso-audit-programme-software";
const ogImage = "https://iaudit.global/images/blog/iso-audit-programme-software.jpg";
const title = "ISO Audit Programme Software: What Should It Do?";
const description =
    "Learn what ISO audit programme software should manage, from planning and evidence to findings, corrective actions, reporting and audit history.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO audit programme software",
        "audit programme software",
        "audit programme vs audit plan",
        "ISO audit management software",
        "audit planning software",
        "audit evidence management",
        "corrective actions software",
        "internal audit programme",
        "multi-site audit management",
        "audit scheduling software",
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
        images: [{ url: ogImage, width: 1200, height: 675, alt: "ISO Audit Programme Software: What Should It Do?" }],
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
            "@id": "https://iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://iaudit.global/",
            logo: { "@type": "ImageObject", url: "https://iaudit.global/iaudit-logo-new.png" },
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
            isPartOf: { "@id": "https://iaudit.global/#organization" },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://iaudit.global" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://iaudit.global/blog" },
                    { "@type": "ListItem", position: 3, name: title, item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "What Is ISO Audit Programme Software and What Should It Actually Do?",
            alternativeHeadline: title,
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: {
                "@type": "Person",
                name: "Mathew Chiweda",
                url: "https://iaudit.global/author/mathew-chiweda",
            },
            publisher: { "@id": "https://iaudit.global/#organization" },
            datePublished: "2026-11-01",
            dateModified: "2026-11-01",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "ISO audit programme software",
                "audit programme software",
                "audit programme vs audit plan",
                "audit management software",
                "ISO internal audit programme",
                "corrective actions software",
                "audit planning software",
            ],
            articleSection: "Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is ISO audit programme software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO audit programme software is used to plan, organise, conduct, monitor and follow up management system audits across an organisation. It can bring together audit schedules, scope, evidence, findings, corrective actions, reporting and audit history in one structured system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between an audit programme and an audit plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An audit programme covers one or more audits over a defined period and sets wider objectives, priorities and resources. An audit plan focuses on the arrangements for one specific audit, including its scope, timing and activities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does ISO require organisations to use audit programme software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. ISO standards do not require organisations to use a particular type of software. Audit programmes can be managed using spreadsheets, documents or other systems, provided the organisation maintains suitable control, evidence and follow-up.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should ISO audit programme software include?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Useful ISO audit programme software should support audit planning, scheduling, scope and criteria, evidence capture, findings, corrective actions, reporting and audit history. It should also help users see programme progress and identify overdue or recurring issues.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does audit programme software help with corrective actions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit programme software can connect corrective actions directly to the relevant finding, assign owners and due dates, store completion evidence and support follow-up. This reduces the need to manage actions through separate spreadsheets, emails and reminders.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is audit programme software useful for multi-site organisations?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. It can be particularly useful where several sites, departments or standards are involved. A central system can provide better visibility of planned audits, findings, overdue actions and audit performance across the organisation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I try iAudit Global before changing my current audit process?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit Global offers a 14-day free trial with no credit card required. You can test audit planning, evidence, findings, corrective actions and reporting using your own audit process before deciding whether the platform suits your organisation. You can start the free trial on the iAudit Global pricing page.",
                    },
                },
            ],
        },
    ],
};

export default function IsoAuditProgrammeSoftwarePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <IsoAuditProgrammeSoftwareBlogContent />
        </>
    );
}

