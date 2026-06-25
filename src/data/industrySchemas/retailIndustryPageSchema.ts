export const retailIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            logo: "https://www.iaudit.global/iaudit-logo-new.png",
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://twitter.com/iauditglobal",
            ],
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+441234567899",
                contactType: "Customer Support",
                email: "info@iaudit.global",
            },
        },
        {
            "@type": "SoftwareApplication",
            name: "Retail ISO Audit Software",
            url: "https://www.iaudit.global/industries/retail-iso-audit-software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            softwareVersion: "v2.4.0",
            description:
                "Manage ISO 9001, 14001 and 45001 audits across retail stores, warehouses and supply chains. Standardise checklists, track actions and improve compliance with iAudit.",
            offers: {
                "@type": "Offer",
                url: "https://www.iaudit.global/pricing",
                priceCurrency: "USD",
                price: "0",
                priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    price: "0",
                    eligibleQuantity: {
                        "@type": "QuantitativeValue",
                        value: 1,
                        unitCode: "C62",
                    },
                },
                availability: "https://schema.org/InStock",
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Retail ISO Audit Software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Retail ISO Audit Software helps retailers manage ISO 9001, ISO 14001 and ISO 45001 audits across stores, distribution centres and head office. It centralises findings, evidence and corrective actions so performance is visible across the whole estate.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit handle audits across stores and distribution centres?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can run one audit programme across stores and DCs, use standardised templates, and compare results by site, region or process.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help with customer complaints and returns?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can log complaints and service failures as nonconformities, link them to actions, and analyse trends by store, category or channel to prevent repeat issues.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit support supplier audits for retail and own-brand products?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can audit supplier controls, track approvals and performance, and monitor repeat supplier nonconformities over time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit support ISO 14001 in retail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It supports environmental audits covering waste, packaging, food waste, energy use and refrigeration controls, with evidence capture and action tracking in one place.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit support ISO 45001 in retail?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It supports safety audits for slips, manual handling, lone working, violence and warehouse hazards, with clear follow-up and effectiveness checks.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we try iAudit before committing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can start a 14-day free trial with no credit card required and run audits using templates, dashboards and report exports.",
                    },
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.iaudit.global",
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
                    name: "Retail ISO Audit Software",
                    item: "https://www.iaudit.global/industries/retail-iso-audit-software",
                },
            ],
        },
    ],
};
