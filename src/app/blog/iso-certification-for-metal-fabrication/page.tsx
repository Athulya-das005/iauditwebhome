import type { Metadata } from "next";
import MetalFabricationIsoBlogContent from "./MetalFabricationIsoBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-certification-for-metal-fabrication";
const ogImage = "https://www.iaudit.global/images/metal-fabrication-bg.webp";
const title = "ISO Certification for Metal Fabrication: Audits & Gaps Guide";
const description =
    "Complete guide to ISO certification for metal fabrication. Covers ISO 9001, 45001, 14001 requirements, audit gaps, and traceability. Start free trial.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "ISO certification metal fabrication",
        "ISO 9001 fabrication",
        "ISO 14001 metal industry",
        "ISO 45001 welding safety",
        "fabrication audit gaps",
        "material traceability ISO",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: { index: true, follow: true },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        type: "article",
        title,
        description:
            "Learn ISO 9001, 45001 and 14001 requirements, common audit gaps, and how to improve traceability and compliance in metal fabrication.",
        url: pageUrl,
        siteName: "iAudit Global",
        images: [{ url: ogImage }],
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description:
            "Complete guide to ISO certification for metal fabrication, including requirements, audit gaps, and traceability best practices.",
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
            publisher: { "@id": "https://www.iaudit.global/#organization" },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "ISO Certification for Metal Fabrication: Requirements, Audits and Common Gaps",
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#organization" },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global/" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.iaudit.global/blog" },
                    { "@type": "ListItem", position: 3, name: "ISO Certification for Metal Fabrication", item: pageUrl },
                ],
            },
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#blogposting`,
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            headline: "ISO Certification for Metal Fabrication: Requirements, Audits and Common Gaps",
            alternativeHeadline: title,
            description:
                "Complete guide to ISO certification for metal fabrication covering ISO 9001, 14001, 45001 requirements, audit gaps, and traceability issues.",
            url: pageUrl,
            inLanguage: "en-GB",
            author: { "@id": "https://www.iaudit.global/#organization" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            datePublished: "2026-04-15",
            dateModified: "2026-04-15",
            image: ogImage,
            keywords: [
                "ISO certification metal fabrication",
                "ISO 9001 fabrication",
                "ISO 14001 metal industry",
                "ISO 45001 welding safety",
                "fabrication audit gaps",
                "material traceability ISO",
            ],
            articleSection: "ISO Audit Management",
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is ISO Certification for Metal Fabrication?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO Certification for Metal Fabrication is independent certification that a metal fabrication business follows an ISO management system (most commonly ISO 9001, ISO 14001 and/or ISO 45001) and can consistently control quality, safety and environmental risks in fabrication work.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ISO standards are most relevant to metal fabrication companies?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most metal fabrication companies use ISO 9001 for quality management, ISO 45001 for occupational health and safety, and ISO 14001 for environmental management. Many also run an integrated management system combining these standards.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What do auditors look for during an ISO 9001 audit in metal fabrication?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Auditors typically check material traceability (heat and cast numbers, mill certificates), welding control (WPS/WPQR and welder qualifications), inspection and test records (including NDT), calibration control, and how nonconformities are managed and prevented from recurring.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the most common nonconformities in ISO Certification for Metal Fabrication audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Common nonconformities include broken material traceability, expired welder qualifications, missing or unlinked NDT records, out-of-date calibration, incomplete safety controls (LEV, LOTO, lifting equipment), and corrective actions closed without verification of effectiveness.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should a metal fabrication business run internal ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most businesses run a full internal audit cycle at least annually, with more frequent targeted audits for high-risk areas such as traceability, welding quality, lifting equipment and welding fume controls. Multi-site organisations often use rolling audit programmes.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can metal fabricators improve traceability for ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Traceability can be improved by linking heat numbers and mill certificates to job packs, maintaining consistent material identification through all production stages, and auditing live jobs to ensure traceability is preserved from goods-in to final release.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can iAudit Global help with ISO Certification for Metal Fabrication?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global helps manage ISO 9001, 14001 and 45001 audits using digital checklists, evidence capture, centralised findings, corrective action tracking and dashboards. It also offers a free ISO programme review and a 14-day free trial.",
                    },
                },
            ],
        },
    ],
};

export default function MetalFabricationIsoBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MetalFabricationIsoBlogContent />
        </>
    );
}
