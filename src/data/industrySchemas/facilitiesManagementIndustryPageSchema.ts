const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/facilities-management-iso-audit-software";

export const facilitiesManagementIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            name: "iAudit Global",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "Facilities management ISO audit software for ISO 9001, ISO 14001 and ISO 45001 compliance. Manage statutory PPM, subcontractor competence, multi-site portfolios and building safety audits from one platform.",
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
            name: "Facilities Management ISO Audit Software",
            image: logoUrl,
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            description:
                "ISO audit management software designed for facilities management teams to standardise building compliance, statutory maintenance and safety audits across entire site portfolios.",
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
                    name: "Facilities Management ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is facilities management iso audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It is a digital platform designed to manage ISO 9001, 14001 and 45001 audits across building portfolios. It replaces manual spreadsheets with structured checklists for building services and safety.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does the software support statutory PPM?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our facilities management iso audit software provides checklists for fire, gas and electrical safety, allowing you to attach certificates and photos as evidence that statutory checks were completed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit track subcontractor engineer competence?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can audit subcontractor inductions, verify their professional registrations like Gas Safe or NICEIC, and track their performance across different sites from one dashboard.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does the system support energy and F gas monitoring?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. iAudit includes specific checklists for energy monitoring, F gas leak checks and waste segregation, helping you gather the evidence needed for ISO 14001 and Net Zero reporting.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can building managers perform audits on mobile devices?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit is mobile first and works offline. Managers can complete audits in plant rooms or basements and the data syncs automatically as soon as they are back in range.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Audit Mate help with building inspections?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit Mate AI can instantly draft checklists for specific building risks like asbestos, fire safety or water hygiene, providing clause guidance to ensure your audits are technically robust.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is our client and building documentation secure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We operate a zero access policy. Your findings, statutory records and site data belong entirely to you and are never viewed or mined by our team. Your data stays private and secure.",
                    },
                },
            ],
        },
        {
            "@type": "Review",
            reviewBody:
                "We used to spend days chasing statutory certificates from different contractors. Now everything sits with the finding, and follow-up is much clearer.",
            author: {
                "@type": "Person",
                name: "Liam Parker",
            },
            itemReviewed: {
                "@type": "Product",
                name: "Facilities Management ISO Audit Software",
            },
        },
    ],
};
