import type { Metadata } from "next";
import IsoAuditReportTemplateBlogContent from "./IsoAuditReportTemplateBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-internal-audit-report-template-free-download";
const ogImage = "https://www.iaudit.global/images/blog-complex-workflows.webp";
const title = "ISO Internal Audit Report Template: Free Download & Tips";
const description =
    "Download your free ISO internal audit report template. Learn best practices for evidence capture, reporting, and driving improvement across your organisation.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO internal audit report template",
        "free audit report template",
        "ISO 9001 audit report",
        "ISO 14001 audit report",
        "ISO 45001 audit report",
        "audit report best practices",
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
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "14-day free trial available with no credit card required" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
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
                    { "@type": "ListItem", position: 3, name: "ISO Internal Audit Report Template", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "ISO Internal Audit Report Template: Free Download and Best Practices",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: { "@type": "Organization", name: "iAudit Global" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-08-19",
            dateModified: "2026-08-19",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: ["ISO internal audit report template", "audit report best practices", "free audit template"],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                { "@type": "Question", name: "What should be included in a professional ISO internal audit report?", acceptedAnswer: { "@type": "Answer", text: "An effective report must follow the principles of ISO 19011 and include the audit scope, objectives, and criteria. Beyond the basics, it should feature clear nonconformity statements, positive findings to reinforce good culture, and opportunities for improvement. Most importantly, every finding must be linked to a named owner and a specific deadline." } },
                { "@type": "Question", name: "How do I write a nonconformity statement that drives action?", acceptedAnswer: { "@type": "Answer", text: "A nonconformity statement should never be vague. We recommend the Requirement, Evidence, Gap model. First, state the specific requirement from your procedure or the standard. Second, provide the objective evidence found during the audit. Finally, explain the gap between the two." } },
                { "@type": "Question", name: "Why is it better to use audit software instead of a Word or Excel template?", acceptedAnswer: { "@type": "Answer", text: "While a template is a good starting point for a single audit, it often leads to a file management burden. Static documents create data silos where findings are hidden on local drives. Audit management software centralises your history, allowing you to perform trend analysis across sites and automatically chase overdue corrective actions." } },
                { "@type": "Question", name: "How soon should an internal audit report be issued after the site visit?", acceptedAnswer: { "@type": "Answer", text: "To maintain momentum, a report should be issued as soon as possible, ideally within a few days. The reporting lag is a common issue where the context of a finding is lost because the report takes weeks to format." } },
                { "@type": "Question", name: "What is the difference between a nonconformity and an opportunity for improvement?", acceptedAnswer: { "@type": "Answer", text: "A nonconformity is a verified failure to meet a requirement of the standard or your own internal procedures. An opportunity for improvement (OFI) is an area where you are technically compliant, but the process is inefficient or carries a future risk." } },
                { "@type": "Question", name: "Why is evidence capture so critical in manufacturing and logistics audits?", acceptedAnswer: { "@type": "Answer", text: "Evidence provides the proof of life for your audit. Without specific record IDs, photos of site conditions, or calibration dates, a report is just a collection of opinions. Structured evidence ensures your internal audits hold up under the scrutiny of an external certification body." } },
                { "@type": "Question", name: "How do I manage corrective actions once the audit report is finished?", acceptedAnswer: { "@type": "Answer", text: "The report is only the beginning. Every nonconformity must be assigned to an owner who is responsible for root cause analysis and implementing a fix. Using a centralised system allows you to monitor the status of these actions in real time, ensuring that improvements are verified and sustained across the entire organisation." } },
            ],
        },
    ],
};

export default function IsoAuditReportTemplateBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <IsoAuditReportTemplateBlogContent />
        </>
    );
}
