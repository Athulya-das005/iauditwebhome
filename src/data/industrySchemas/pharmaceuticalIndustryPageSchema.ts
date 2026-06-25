const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/pharmaceutical-compliance-audit-software";

export const pharmaceuticalIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            name: "iAudit Global",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "Pharmaceutical compliance audit software for ISO 9001, ISO 14001 and ISO 45001. Manage CAPA, data integrity, batch evidence and audit visibility across manufacturing, labs and distribution sites.",
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
            name: "Pharmaceutical Compliance Audit Software",
            image: logoUrl,
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            description:
                "ISO audit management software designed for pharmaceutical teams to manage data integrity, CAPA, environmental controls and safety audits across every site.",
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
                    name: "Pharmaceutical Compliance Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is pharmaceutical compliance audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pharmaceutical compliance audit software helps regulated teams manage ISO 9001, 14001 and 45001 audits across manufacturing, labs and distribution. It centralises findings, evidence and follow-up in one structured system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit support data integrity during audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit helps keep audit findings, supporting evidence and action history linked in one place. This makes it easier to review batch-related evidence and maintain a clearer, more traceable audit trail.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit help with CAPA and effectiveness checks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit links findings to corrective actions, owners and deadlines, then helps teams verify effectiveness before actions are closed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit support environmental audits in pharmaceutical settings?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. It supports ISO 14001 audits covering effluent, solvent handling, F-gas, waste controls and related environmental evidence.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help with occupational health and safety in pharma?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It helps teams track high-risk controls related to exposure, PPE, containment, contractor safety and other ISO 45001 requirements in one system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can Audit Mate help pharmaceutical teams plan audits faster?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Audit Mate helps generate clause-aligned checklists and prompts for batch records, CAPA, contamination controls and environmental evidence.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we try iAudit before committing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can start a 14-day free trial with no credit card required and explore templates, dashboards, evidence capture and reporting.",
                    },
                },
            ],
        },
        {
            "@type": "Review",
            reviewBody:
                "We were constantly pulling batch evidence from different systems before audits. Now the records sit with the finding, and follow-up is much clearer.",
            author: {
                "@type": "Person",
                name: "David Rossi",
            },
            itemReviewed: {
                "@type": "Product",
                name: "Pharmaceutical Compliance Audit Software",
            },
        },
    ],
};
