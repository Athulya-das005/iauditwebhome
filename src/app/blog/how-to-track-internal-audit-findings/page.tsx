import type { Metadata } from "next";
import HowToTrackInternalAuditFindingsBlogContent from "./HowToTrackInternalAuditFindingsBlogContent";

const pageUrl = "https://iaudit.global/blog/how-to-track-internal-audit-findings";
const ogImage = "https://iaudit.global/images/blog/how-to-track-internal-audit-findings.jpg";
const title = "How to Track ISO Internal Audit Findings and Follow-Ups";
const description =
    "Track ISO internal audit findings from report to closure. Assign owners, set follow-up dates, manage overdue actions and verify that corrective actions work.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "how to track internal audit findings",
        "ISO internal audit findings register",
        "audit finding follow-up",
        "corrective action tracking",
        "overdue audit actions",
        "effectiveness review",
        "ISO 9001 nonconformity closure",
        "internal audit findings spreadsheet",
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
        images: [{ url: ogImage, width: 1200, height: 675, alt: "How to Track ISO Internal Audit Findings and Follow-Ups" }],
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
            headline: title,
            alternativeHeadline: "How to Track Internal Audit Findings Without Losing Follow-Ups",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: {
                "@type": "Person",
                name: "Mathew Chiweda",
                url: "https://iaudit.global/author/mathew-chiweda",
            },
            publisher: { "@id": "https://iaudit.global/#organization" },
            datePublished: "2026-11-18",
            dateModified: "2026-11-18",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: [
                "internal audit findings",
                "audit follow-up",
                "corrective action verification",
                "ISO 9001",
                "findings register",
            ],
            articleSection: "Internal Auditing",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What should an internal audit findings register include?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Give each finding a reference and link it to the requirement, the evidence and the gap identified in the ISO internal audit report. For follow-up, record the agreed action, who acts next, the due date and the evidence needed for closure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who is responsible for following up on an audit finding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The process owner can remain accountable for resolving the finding while someone else handles the next step. For example, purchasing may own a supplier approval finding, IT may implement the change, and an auditor may verify it. Update the register at each handover so reminders reach the right person.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should you review open audit findings?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Set the review date according to the risk and the evidence you expect to see. A significant issue may need attention straight away. If a process runs monthly, schedule the effectiveness check after its next run and consider whether an interim check is needed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you track internal audit findings in Excel?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. A shared spreadsheet can work if each finding has a unique reference, a named owner, a next review date and a link to its evidence. The test is simple: can a colleague open the register, identify what is due today and follow it up without searching your inbox?",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should you do when a corrective action is overdue?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "First, establish what has slipped. The action owner may still owe the work, or the auditor may owe the review. If an extension is justified, keep the original deadline and record the reason, the revised date and who agreed it. Escalate any unresolved risk or decision that needs management attention.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What evidence is enough to close an ISO internal audit finding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Look for evidence that the change was implemented and that it addressed the original problem. For a supplier approval issue, a system test shows the new check operates. Comparing approval dates with subsequent purchase orders shows whether it works in practice. That distinction matters when verifying a corrective action before closure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global help teams track audit findings?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global keeps findings, actions and supporting evidence together in a shared audit history. Its nonconformity register, evidence capture and reporting features help teams follow an issue from the original audit through to review. You can compare plans and start a 14-day free trial with no credit card required.",
                    },
                },
            ],
        },
    ],
};

export default function HowToTrackInternalAuditFindingsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <HowToTrackInternalAuditFindingsBlogContent />
        </>
    );
}
