const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/food-and-beverage-iso-audit-software";

export const foodAndBeverageIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            name: "iAudit Global",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "Food and beverage ISO audit software for ISO 9001, ISO 14001 and ISO 45001 compliance. Manage batch traceability, HACCP controls, hygiene audits and corrective actions across production plants and distribution sites.",
            image: logoUrl,
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available",
                availability: "https://schema.org/InStock",
                url: "https://www.iaudit.global/pricing",
            },
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
        },
        {
            "@type": "Product",
            name: "Food and Beverage ISO Audit Software",
            image: logoUrl,
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            description:
                "ISO audit management software designed for food and beverage operations to manage quality, environmental and safety audits with batch traceability, HACCP integration and multi-site visibility.",
            category: "Audit Software",
            url: pageUrl,
            offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "0",
                availability: "https://schema.org/InStock",
                url: "https://www.iaudit.global/pricing",
            },
        },
        {
            "@type": "BreadcrumbList",
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
                    name: "Food and Beverage ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is food and beverage iso audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It is a digital platform designed to manage ISO 9001, 14001 and 45001 audits across food production and distribution sites. It replaces manual logs with structured checklists and real time dashboards for better oversight.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help with batch traceability?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our platform allows auditors to capture digital evidence of batch codes and production records at the point of inspection. This ensures a clear, traceable link from ingredients to the finished product, as required by ISO 9001.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can the software support HACCP and food safety checks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. While HACCP is your core food safety system, iAudit lets you audit those controls alongside your ISO requirements. You can attach photos of sanitation standards and temperature records directly to your findings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit handle staff hygiene training?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can monitor training records and mandatory certifications for all staff. The system flags upcoming expiries, ensuring your team always holds the required food safety and hygiene qualifications for their roles.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does it support environmental waste monitoring for ISO 14001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. iAudit includes checklists for food waste, energy efficiency and packaging recycling, helping you gather the evidence needed for ISO 14001 and broader sustainability reporting.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can auditors work offline in cold storage or remote plants?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit is built for real world conditions. You can complete inspections offline on a mobile device, and the data syncs to the central dashboard as soon as you are back in range of a connection.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is our food and beverage audit data secure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We operate a strict zero access policy. Your findings, production data and evidence belong entirely to you and are never accessed or mined by our team. Your data stays private and secure.",
                    },
                },
            ],
        },
        {
            "@type": "Review",
            reviewBody:
                "We used to scramble for batch records and complaint evidence before every audit. Now everything sits in one place, and our mock recall checks are far more reliable.",
            author: {
                "@type": "Person",
                name: "Sarah Thompson",
            },
            itemReviewed: {
                "@type": "Product",
                name: "Food and Beverage ISO Audit Software",
            },
        },
    ],
};
