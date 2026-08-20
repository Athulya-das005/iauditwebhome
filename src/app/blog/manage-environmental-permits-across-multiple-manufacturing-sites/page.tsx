import type { Metadata } from "next";
import EnvironmentalPermitsBlogContent from "./EnvironmentalPermitsBlogContent";

const pageUrl =
    "https://www.iaudit.global/blog/manage-environmental-permits-across-multiple-manufacturing-sites";
const ogImage = "https://www.iaudit.global/images/manufacturing-bg.webp";
const title = "How to Manage Environmental Permits Across Multiple Manufacturing Sites";
const description =
    "Learn how to manage environmental permits across multiple manufacturing sites using structured compliance processes, ISO 14001 audits and central permit registers.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "environmental permits manufacturing",
        "multi site environmental compliance",
        "manufacturing permit register",
        "ISO 14001 environmental audit",
        "environmental permit tracking",
        "environmental compliance software",
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
                        name: "Manage Environmental Permits Across Manufacturing Sites",
                        item: pageUrl,
                    },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            headline: title,
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
                "environmental permits manufacturing",
                "multi site environmental compliance",
                "ISO 14001",
                "environmental permit register",
            ],
            articleSection: "ISO 14001 Environmental Compliance",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is multi site environmental compliance in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Multi site environmental compliance in manufacturing refers to managing environmental permits, reporting obligations and regulatory requirements across more than one production facility. It involves maintaining visibility of permit conditions, renewal dates, monitoring activities and compliance performance at both site and corporate level.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do you manage environmental permits across multiple manufacturing sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "To manage environmental permits across multiple manufacturing sites, organisations should maintain a centralised permit register, assign clear ownership, implement a compliance calendar, standardise procedures and conduct regular internal audits. Corporate oversight combined with site level accountability reduces the risk of missed obligations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should be included in a manufacturing environmental permit register?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A manufacturing environmental permit register should include permit numbers, issuing authorities, expiry and renewal dates, emission or discharge limits, monitoring requirements, reporting deadlines, responsible personnel and evidence of compliance. This ensures all obligations are visible and traceable.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does ISO 14001 support environmental permit management in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 14001 requires organisations to identify and comply with legal and other environmental requirements. In manufacturing, this includes maintaining an up to date legal register, evaluating compliance regularly and taking corrective action where gaps are identified. Internal audits play a key role in verifying permit compliance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should environmental permits be audited in manufacturing facilities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Environmental permit compliance should be reviewed at planned intervals. Many manufacturers conduct site level checks monthly or quarterly, with annual corporate audits. The frequency should reflect the level of environmental risk, regulatory exposure and operational complexity.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the risks of poor environmental permit tracking in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Poor environmental permit tracking in manufacturing can lead to missed renewals, late regulatory reports, unapproved operational changes and potential fines or enforcement action. It can also weaken ISO 14001 certification if compliance obligations are not properly controlled and documented.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can software help manage environmental permits across multiple manufacturing sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Environmental compliance software can centralise permit registers, track deadlines, store evidence, manage corrective actions and provide dashboards across sites. Platforms such as iAudit support ISO 14001 internal audits, link findings to actions and maintain a structured audit history across multiple manufacturing facilities.",
                    },
                },
            ],
        },
    ],
};

export default function EnvironmentalPermitsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EnvironmentalPermitsBlogContent />
        </>
    );
}
