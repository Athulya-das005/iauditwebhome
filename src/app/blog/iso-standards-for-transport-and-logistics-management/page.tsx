import type { Metadata } from "next";
import TransportLogisticsBlogContent from "./TransportLogisticsBlogContent";

const pageUrl = "https://www.iaudit.global/blog/iso-standards-for-transport-and-logistics-management";
const ogImage = "https://www.iaudit.global/images/blog-complex-workflows.webp";
const title = "ISO Standards for Transport and Logistics Management | Guide";
const description =
    "Practical guide to ISO standards for transport and logistics management. Covers sub-contractors, driver compliance, cold chain and why most transport audits fail.";

export const metadata: Metadata = {
    title,
    description,
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
            url: "https://www.iaudit.global",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://www.twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#software",
            name: "iAudit Global",
            operatingSystem: "Web",
            applicationCategory: "BusinessApplication",
            url: "https://app.iaudit.global",
            description:
                "ISO audit management software for ISO 9001, 14001, 45001, and 27001. Plan, execute, and track multi-site audits with PDCA workflows and real-time dashboards.",
            creator: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "BlogPosting",
            "@id": pageUrl,
            headline: "ISO Standards for Reliable Transport and Logistics Operations",
            description,
            image: ogImage,
            author: {
                "@type": "Person",
                name: "Mathew Chiweda",
            },
            publisher: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
            },
            datePublished: "2026-03-20",
            dateModified: "2026-03-20",
            keywords:
                "ISO standards for transport and logistics management, ISO 9001 logistics, ISO 14001 transport, ISO 45001, sub-contractor management, cold chain, tachograph, ADR",
            url: pageUrl,
            articleSection: "ISO Audit Management",
            inLanguage: "en",
            wordCount: 2100,
            potentialAction: {
                "@type": "ReadAction",
                target: pageUrl,
            },
        },
        {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What are the main ISO standards for transport and logistics management?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The four core ISO standards for transport and logistics management are ISO 9001 (quality management), ISO 14001 (environmental management), ISO 45001 (health and safety), and ISO 27001 (information security). Together, they cover service reliability, fleet emissions, yard and driver safety, and protection of customer and shipment data.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why is sub-contractor management so important for ISO compliance in logistics?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Many transport companies sub-contract significant volumes to owner-drivers, partner carriers, and third-party warehouses. Under ISO 9001 Clause 8.4, you are responsible for the quality of externally provided services. If a sub-contractor fails to deliver on time, damages cargo, or breaches temperature requirements, auditors will treat it as your non-conformity.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do ISO standards for transport and logistics management overlap with UK transport regulations?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "In logistics, ISO compliance and legal compliance are closely linked. Your quality management system should actively manage operator licence obligations, tachograph downloads and infringement analysis, drivers' hours compliance, and dangerous goods (ADR) requirements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are common reasons transport and logistics companies fail ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Frequent non-conformities include quality objectives not linked to customer SLAs, driver CPC training records not tracked centrally, cargo damage claims resolved commercially without root cause analysis, and sub-contractors used without verifying their operator licence, insurance, or ADR compliance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does ISO 9001 apply to cold chain and pharmaceutical logistics?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cold chain operators must demonstrate temperature control throughout the transport process. This means calibrated data loggers, validated transport lanes, and documented breach investigation procedures. ISO 9001 provides the quality management framework, while Good Distribution Practice (GDP) sets the technical requirements for pharmaceutical freight.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should transport and logistics companies run internal ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most logistics organisations use a risk-based internal audit programme. High-volume depots, routes with performance issues, and sub-contractors with poor track records should be audited more frequently. The key is that your audit schedule reflects actual operational risk, not just a calendar tick.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can iAudit Global help manage ISO standards for transport and logistics management?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global centralises your audit programme across depots, fleets, and sub-contractors. You can track driver competence, manage sub-contractor approvals and performance, log non-conformances, and run internal audits from one platform.",
                    },
                },
            ],
        },
    ],
};

export default function TransportLogisticsBlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TransportLogisticsBlogContent />
        </>
    );
}
