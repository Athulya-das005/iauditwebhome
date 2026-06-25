const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/hospitality-iso-audit-software";

export const hospitalityIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/industries/hospitality-iso-audit-software#software",
            name: "iAudit Global",
            url: pageUrl,
            image: logoUrl,
            description:
                "Hospitality audit software to manage ISO 9001, 14001, and 45001 audits across hotels, restaurants, and venues. Standardised checklists, real-time visibility, and central control.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            softwareVersion: "v2.4.0",
            offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "0",
                url: "https://www.iaudit.global/pricing",
                priceValidUntil: "2026-12-31",
            },
        },
        {
            "@type": "Product",
            "@id": "https://www.iaudit.global/industries/hospitality-iso-audit-software#product",
            name: "iAudit Global Hospitality Audit Software",
            image: logoUrl,
            description:
                "ISO 9001, 14001 and 45001 audit management software for hotels, restaurants, and venues. Track findings, corrective actions and audits across all properties.",
            brand: {
                "@type": "Organization",
                name: "iAudit Global",
                url: "https://www.iaudit.global",
            },
            offers: {
                "@type": "Offer",
                url: "https://www.iaudit.global/pricing",
                priceCurrency: "USD",
                price: "0",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
            },
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/industries/hospitality-iso-audit-software#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is an ISO 9001 hospitality audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An ISO 9001 hospitality audit checks hotel, restaurant or venue processes such as reservations, housekeeping, food service, events and complaints to ensure quality and repeatable management.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should hospitality businesses run internal ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most hospitality organisations run a full internal audit at least once a year, with more frequent audits on higher-risk areas like food safety, housekeeping, and events.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is iAudit Global for hospitality?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global is hospitality audit software built by ISO auditors, supporting ISO 9001, 14001 and 45001 audits with standardised checklists, centralised findings, and PDCA-driven follow-up.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help multi-property hotel and restaurant groups?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It allows one audit programme across all sites, pushes checklists to every property, and uses dashboards to compare scores, findings, and actions, ensuring consistent standards and guest experience.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support food safety, allergen and Natasha's Law checks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, iAudit audits HACCP controls, allergen management, and Natasha's Law compliance alongside ISO 9001 requirements, capturing evidence and tracking corrective actions.",
                    },
                },
            ],
        },
        {
            "@type": "Review",
            "@id": "https://www.iaudit.global/industries/hospitality-iso-audit-software#reviews",
            itemReviewed: {
                "@type": "SoftwareApplication",
                name: "iAudit Global",
            },
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
            author: {
                "@type": "Organization",
                name: "Hotel & Restaurant Group Feedback",
            },
            reviewBody:
                "iAudit gave us a single view of audit findings across multiple hotels. Housekeeping, F&B and maintenance issues are now tracked in one place, and external ISO 9001 audits have become more predictable.",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/industries/hospitality-iso-audit-software#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.iaudit.global/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Industries",
                    item: "https://www.iaudit.global/industries",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Hospitality Audit Software",
                    item: pageUrl,
                },
            ],
        },
    ],
};
