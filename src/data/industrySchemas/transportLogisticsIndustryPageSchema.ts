export const transportLogisticsIndustryPageSchema = {
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
            name: "Transport and Logistics ISO Audit Software",
            url: "https://www.iaudit.global/industries/transport-and-logistics-iso-audit-software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            softwareVersion: "v2.4.0",
            description:
                "Centralise fleet compliance, track driver safety and manage ISO 9001, 14001 and 45001 audits across depots and warehouses with iAudit.",
            offers: {
                "@type": "Offer",
                url: "https://www.iaudit.global/pricing",
                priceCurrency: "USD",
                price: "0",
                availability: "https://schema.org/InStock",
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is transport and logistics ISO audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It is a digital system designed to manage ISO 9001, 14001 and 45001 audits across fleets and warehouses. It replaces manual logs with structured checklists and real time dashboards for better oversight.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does the software help with subcontractor management?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can audit third party carriers against your specific quality and safety requirements. Our software tracks operator licences, insurance and performance in one central log.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit track driver CPC and training?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can monitor driver competence and mandatory training dates. The system can flag upcoming expiries to ensure drivers always hold required certifications.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does it support fleet emission monitoring for ISO 14001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit includes checklists for fuel efficiency and refrigerant leak checks for reefer trailers, helping collect evidence needed for ISO 14001 and carbon reporting.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Audit Mate AI assist with transport audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit Mate can instantly draft checklists for dangerous goods (ADR) or driver health assessments, providing clause guidance and interview prompts to reduce audit preparation time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can auditors use the app in yards with poor signal?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit is built for real world conditions. Yard or warehouse inspections can be completed offline on a mobile device and synced later.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is our transport and logistics audit data secure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit has a zero access policy. Your findings, driver records and subcontractor data are strictly yours and never accessed by our team.",
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
                    name: "Transport and Logistics ISO Audit Software",
                    item: "https://www.iaudit.global/industries/transport-and-logistics-iso-audit-software",
                },
            ],
        },
    ],
};
