import type { Metadata } from "next";
import Iso140012026InternalAuditChecklistBlogContent from "./Iso140012026InternalAuditChecklistBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-14001-2026-internal-audit-checklist";
const ogImage = "https://www.iaudit.global/images/blog/iso-14001-2026-internal-audit-checklist.jpg";
const title = "ISO 14001:2026 Internal Audit Checklist: What to Check";
const description =
    "Use this ISO 14001:2026 internal audit checklist to understand what auditors should check, what evidence to collect and how to identify findings.";
const headline = "ISO 14001:2026 Internal Audit Checklist: What Should Auditors Check?";
const keywords = [
    "ISO 14001:2026 internal audit checklist",
    "ISO 14001 internal audit checklist",
    "ISO 14001:2026 audit checklist",
    "ISO 14001 internal audit",
    "environmental management system audit",
    "EMS internal audit",
    "ISO 14001 audit evidence",
];

export const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: "Mathew Chiweda", url: "https://www.iaudit.global/author/mathew-chiweda" }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "article",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [{ url: ogImage, alt: title }],
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

const faqJsonLd = [
    {
        q: "What is an ISO 14001:2026 internal audit checklist?",
        a: "An ISO 14001:2026 internal audit checklist is a structured set of audit questions and checkpoints used to assess whether an organisation's Environmental Management System meets the requirements of ISO 14001:2026 and is effectively implemented. It should cover the relevant clauses while also reflecting the organisation's environmental aspects, risks, processes and operational controls.",
    },
    {
        q: "What should an ISO 14001:2026 internal audit check?",
        a: "An internal audit should examine areas including organisational context, leadership, environmental aspects, compliance obligations, risks and opportunities, objectives, competence, operational controls, environmental performance, internal auditing, management review and improvement. Auditors should also consider evidence from documents, interviews and observations rather than relying solely on documented procedures.",
    },
    {
        q: "What evidence should auditors collect during an ISO 14001 internal audit?",
        a: "Auditors can collect evidence from documents and records, employee interviews and direct observation. Typical evidence includes environmental policies, aspects registers, compliance evaluations, monitoring results, training records, operational controls, emergency exercises, audit reports, management reviews and corrective-action records.",
    },
    {
        q: "How is an ISO 14001:2026 internal audit different from a gap analysis?",
        a: "A gap analysis identifies where an organisation's existing EMS differs from the requirements of ISO 14001:2026. An internal audit goes further by assessing whether the management system is implemented, maintained and effective. A gap analysis can therefore help an organisation prepare for a more focused internal audit.",
    },
    {
        q: "Do organisations need to update their ISO 14001 audit checklist for 2026?",
        a: "Organisations transitioning to ISO 14001:2026 should review their existing audit checklists rather than simply continue using an unchanged 2015 checklist. Areas such as environmental context, climate change, biodiversity, lifecycle thinking, planning of changes, external providers and internal audit objectives may require closer consideration under the 2026 edition.",
    },
    {
        q: "How often should an ISO 14001 internal audit be conducted?",
        a: "ISO 14001 does not mean that every part of the EMS has to be audited at the same frequency. The internal audit programme should be planned with consideration of the organisation's processes, environmental significance, changes, previous audit results and other relevant factors. Higher-risk or frequently changing areas may warrant greater audit attention.",
    },
    {
        q: "What happens after an ISO 14001 internal audit?",
        a: "After an internal audit, the organisation should review the evidence and findings, address nonconformities where necessary, determine appropriate corrective actions and verify their effectiveness. The results can also feed into management review and continual improvement of the Environmental Management System.",
    },
    {
        q: "Where can I find an ISO 14001:2026 internal audit checklist?",
        a: "iAudit Global provides an ISO 14001:2026 checklist that organisations can use to review their environmental management system against the updated requirements. It can help auditors and EMS teams identify areas that need further attention before an internal or certification audit.",
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            url: pageUrl,
            headline,
            description,
            image: { "@type": "ImageObject", url: ogImage },
            keywords,
            articleSection: "ISO 14001",
            inLanguage: "en-GB",
            datePublished: "2026-10-01",
            dateModified: "2026-10-01",
            author: { "@id": "https://www.iaudit.global/author/mathew-chiweda#person" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: headline,
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
            about: { "@type": "Thing", name: "ISO 14001:2026 internal audit checklist" },
        },
        {
            "@type": "Person",
            "@id": "https://www.iaudit.global/author/mathew-chiweda#person",
            name: "Mathew Chiweda",
            jobTitle: "Co-founder & Managing Director",
            description:
                "Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global, with more than 20 years of experience in quality, health and safety, environmental management and ISO management systems. He specialises in ISO 9001, ISO 14001 and ISO 45001, with experience across internal auditing, implementation, training, consultancy and site inspections.",
            url: "https://www.iaudit.global/author/mathew-chiweda",
            worksFor: { "@id": "https://www.iaudit.global/#organization" },
            knowsAbout: [
                "ISO 9001",
                "ISO 14001",
                "ISO 45001",
                "Internal auditing",
                "PDCA audit workflows",
                "ISO management systems",
            ],
        },
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            description:
                "ISO audit management software built by auditors for ISO 9001, ISO 14001 and ISO 45001 audit programmes.",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressRegion: "Surrey",
                addressCountry: "GB",
            },
            email: "info@iaudit.global",
            telephone: "+44 7944 829129",
        },
        {
            "@type": "WebSite",
            "@id": "https://www.iaudit.global/#website",
            url: "https://www.iaudit.global/",
            name: "iAudit Global",
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            inLanguage: "en-GB",
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog/" },
                { "@type": "ListItem", position: 3, name: headline, item: pageUrl },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: faqJsonLd.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
            })),
        },
    ],
};

export default function Iso140012026InternalAuditChecklistPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Iso140012026InternalAuditChecklistBlogContent />
        </>
    );
}
