import type { Metadata } from "next";
import RiskBasedThinkingBlogContent from "./RiskBasedThinkingBlogContent";

const pageUrl = "https://www.iaudit.global/blog/risk-based-thinking-in-iso-9001";
const ogImage = "https://www.iaudit.global/images/blog-process-automation.webp";
const title = "Risk‑based Thinking in ISO 9001 | iAudit Global";
const description =
    "Learn how to implement Risk‑based Thinking in ISO 9001. Move beyond spreadsheets to structured risk control and meet Clause 6.1 requirements effectively.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "Risk-based thinking in ISO 9001",
        "ISO 9001 Clause 6.1",
        "ISO 9001 risk register",
        "ISO 9001 preventive action",
        "ISO 9001 audit management software",
        "PDCA risk-based thinking",
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
                    { "@type": "ListItem", position: 3, name: "Risk-based Thinking in ISO 9001", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: "Understanding Risk-based Thinking in ISO 9001:2015",
            description,
            url: pageUrl,
            inLanguage: "en-GB",
            author: { "@type": "Organization", name: "iAudit Global" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-08-19",
            dateModified: "2026-08-19",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            image: ogImage,
            keywords: ["Risk-based thinking in ISO 9001", "ISO 9001 Clause 6.1", "quality management risk"],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Risk-based Thinking in ISO 9001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Risk-based Thinking in ISO 9001 is a proactive approach to quality management that requires organisations to identify uncertainties that could affect their processes. It ensures that the management system is designed to prevent negative results and take advantage of positive opportunities rather than just reacting to mistakes after they occur.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is a formal risk register mandatory for Risk-based Thinking in ISO 9001 compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. While Clause 6.1 requires organisations to identify and address risks and opportunities, the standard does not explicitly mandate a formal Risk Register. However, you must be able to provide objective evidence that Risk-based Thinking in ISO 9001 has been considered and integrated into your management system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How did Risk-based Thinking in ISO 9001 change from the 2008 version of the standard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "In the previous ISO 9001:2008 version, Preventive Action was a standalone clause. In the 2015 update, this was replaced by Risk-based Thinking in ISO 9001 to ensure that prevention is not a separate activity but a continuous mindset embedded in every stage of the Plan-Do-Check-Act cycle.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the difference between a risk and an opportunity in Risk-based Thinking in ISO 9001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO defines risk as the effect of uncertainty. This effect can be negative, which we refer to as a risk, or positive, which we refer to as an opportunity. Risk-based Thinking in ISO 9001 requires organisations to manage both.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do internal auditors verify Risk-based Thinking in ISO 9001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Auditors look for evidence of risk-based decision making. This includes reviewing how resources are allocated, how suppliers are selected, and whether process changes have been made in response to identified risks.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the role of top management in promoting Risk-based Thinking in ISO 9001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Top management has a specific duty under Clause 5.1 to promote Risk-based Thinking in ISO 9001 across the organisation. Leadership must ensure that risk is considered during strategic planning and that the management system is supported with the resources necessary to address identified uncertainties.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global support Risk-based Thinking in ISO 9001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global moves risk management away from static files and into the live audit programme. By linking audit findings directly to corrective actions and real-time trend dashboards, the platform provides the objective evidence required to prove that Risk-based Thinking in ISO 9001 is being identified, managed and evaluated for effectiveness.",
                    },
                },
            ],
        },
    ],
};

export default function RiskBasedThinkingBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <RiskBasedThinkingBlogContent />
        </>
    );
}
