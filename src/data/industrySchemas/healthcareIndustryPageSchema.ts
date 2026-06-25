const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/healthcare-compliance-software";

export const healthcareIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            name: "iAudit Global",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "Healthcare compliance software for ISO 9001, ISO 14001 and ISO 45001 audits. Manage clinical governance, patient safety, environmental controls and workforce safety across hospitals, clinics and support services.",
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
            name: "Healthcare Compliance Software",
            image: logoUrl,
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            description:
                "Healthcare compliance software designed for clinical, operational and governance teams to manage ISO 9001, ISO 14001 and ISO 45001 audits with structured checklists, evidence and corrective actions.",
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
                    name: "Healthcare Compliance Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is healthcare compliance software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Healthcare compliance software helps hospitals, clinics and care providers manage audits, evidence, actions and reporting in one place. It supports teams responsible for quality, environmental and safety compliance by replacing spreadsheets and paper checklists with a structured digital audit system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does healthcare compliance software help with ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Healthcare compliance software supports ISO audits by giving teams standardised checklists, centralised evidence, corrective action tracking and real-time visibility of findings. This makes it easier to manage ISO 9001, ISO 14001 and ISO 45001 across clinical, operational and estates functions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the biggest compliance challenges in healthcare audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The biggest challenges usually include patient safety risks, training and competence gaps, environmental controls, and fragmented records spread across departments. Healthcare teams also have to manage overlapping requirements from regulators, governance teams and ISO standards at the same time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can healthcare compliance software improve patient safety audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Healthcare compliance software can improve patient safety audits by making it easier to check medication processes, handovers, infection control, consent, incident follow-up and other high-risk activities. It helps organisations capture evidence properly and track actions until they are actually resolved.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ISO standards are most relevant for healthcare organisations?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For most healthcare organisations, the most relevant standards are ISO 9001 for quality management, ISO 14001 for environmental management and ISO 45001 for occupational health and safety. These standards support patient care quality, estates and waste controls, and staff safety across healthcare settings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit support healthcare compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit is healthcare compliance software built to support ISO 9001, ISO 14001 and ISO 45001 audits in hospitals, clinics and support services. It helps teams plan audits, capture evidence, track nonconformities, manage corrective actions and monitor compliance from one central platform.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit help healthcare teams manage audits across multiple sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit helps healthcare groups manage audits across hospitals, clinics and support locations using one system. Teams can use standardised checklists, dashboards and role-based access to compare findings, track actions and keep audit evidence visible across all sites.",
                    },
                },
            ],
        },
    ],
};
