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
                        text: "An ISO 9001 hospitality audit checks how well a hotel, restaurant or venue controls its key processes, such as reservations, housekeeping, food and beverage service, events and complaint handling. Auditors look at both documentation and real practice to see whether guest experience, service quality and supplier management are managed in a planned, repeatable way.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often should hospitality businesses run internal ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most hospitality organisations run a full internal audit cycle at least once a year, with more frequent focused audits on higher‑risk areas such as food safety, housekeeping and events. Multi‑property groups often use a rolling programme so each site and department is sampled several times between certification audits.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is iAudit Global for hospitality?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global is hospitality audit software built by ISO auditors for hotels, restaurants, venues and catering groups. It supports ISO 9001, 14001 and 45001 internal audits with standardised checklists, centralised findings and evidence, and PDCA‑driven follow up across all properties.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help multi‑property hotel and restaurant groups?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can run one audit programme across every site, push the same checklist to each property and use dashboards to compare scores, findings and actions. This makes it far easier to keep brand standards, guest experience and food safety controls consistent across your whole portfolio.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support food safety, allergen and Natasha's Law checks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. While your HACCP system remains the core of food safety, iAudit lets you audit HACCP controls, allergen management and Natasha's Law compliance alongside ISO 9001 requirements. You can attach photos of labels, temperature records and kitchen conditions, and track food safety corrective actions through to closure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does the software work for front‑of‑house and housekeeping teams on the floor?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our hospitality audit software is designed for real operations, not just offices. Auditors and supervisors can complete room inspections, service audits and kitchen checks on mobile devices, capture photos as evidence and, if needed, work offline in areas with poor connectivity, syncing data when they are back online.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How is our audit data kept secure and who owns it?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Your audit data always belongs to your organisation. iAudit Global uses encryption and role‑based access to protect your information, and we operate a strict zero‑access policy, meaning we do not view or mine your findings or evidence. You can export your data at any time if you ever decide to leave the platform.",
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
