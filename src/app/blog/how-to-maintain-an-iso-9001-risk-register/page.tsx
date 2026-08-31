import type { Metadata } from "next";
import RiskRegisterBlogContent from "./RiskRegisterBlogContent";
import { riskRegisterFaqs } from "@/data/riskRegisterFaqs";

const pageUrl = "https://www.iaudit.global/blog/how-to-maintain-an-iso-9001-risk-register";
const title = "How to Maintain an ISO 9001 Risk Register | iAudit Global";
const description =
    "Learn how to maintain an ISO 9001 risk register, keep risks current, review controls, track actions and use audit findings to improve risk-based thinking.";
const ogImage =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=90&fm=webp";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "how to maintain an ISO 9001 risk register",
        "ISO 9001 risk register",
        "ISO 9001 risk management",
        "risk-based thinking ISO 9001",
        "ISO audit findings",
    ],
    authors: [{ name: "Mathew Chiweda" }],
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "article",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [{ url: ogImage, alt: "How to Maintain an ISO 9001 Risk Register" }],
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
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Blog", item: "https://www.iaudit.global/blog" },
                { "@type": "ListItem", position: 2, name: title, item: pageUrl },
            ],
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#article`,
            headline: "How to Maintain an ISO 9001 Risk Register: Keeping Risk Management Current and Actionable",
            description,
            url: pageUrl,
            mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
            image: ogImage,
            author: { "@type": "Person", name: "Mathew Chiweda", url: "https://www.iaudit.global/author/mathew-chiweda" },
            publisher: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
                name: "iAudit Global",
                url: "https://www.iaudit.global",
                logo: { "@type": "ImageObject", url: "https://www.iaudit.global/iaudit-logo-new.png" },
            },
            datePublished: "2026-08-31",
            dateModified: "2026-08-31",
            articleSection: "Risk-Based Auditing",
            inLanguage: "en-GB",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: riskRegisterFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
        },
    ],
};

export default function RiskRegisterBlogPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <RiskRegisterBlogContent />
        </>
    );
}
