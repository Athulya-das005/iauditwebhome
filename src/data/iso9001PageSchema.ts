export const iso9001PageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: "https://www.iaudit.global/assets/logo.png",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.iaudit.global/standards/iso-9001-audit-management-software/#webpage",
            url: "https://www.iaudit.global/standards/iso-9001-audit-management-software",
            name: "ISO 9001 Software Built for Quality Management Audits",
            description:
                "Stop managing ISO 9001 audits in spreadsheets. Use purpose-built software with clause-level traceability and automated actions.",
            isPartOf: {
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/standards/iso-9001-audit-management-software/#software",
            name: "iAudit Global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "ISO 9001 audit management software for risk-based planning, clause traceability, evidence capture, CAPA tracking and automated reporting to support quality management systems.",
            url: "https://www.iaudit.global/standards/iso-9001-audit-management-software",
            publisher: {
                "@id": "https://www.iaudit.global/#organization",
            },
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "14-day free trial with no credit card required",
            },
            featureList: [
                "Risk-based audit planning",
                "Clause-level traceability",
                "Centralized findings management",
                "Corrective action (CAPA) tracking",
                "Automated audit reporting",
                "Evidence capture with photos",
                "Integrated management system support",
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/standards/iso-9001-audit-management-software/#breadcrumb",
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
                    name: "Standards",
                    item: "https://www.iaudit.global/standards/iso-9001-audit-management-software",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "ISO 9001 Audit Management Software",
                    item: "https://www.iaudit.global/standards/iso-9001-audit-management-software",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/standards/iso-9001-audit-management-software/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What does ISO 9001 software do?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 9001 software centralizes your entire audit process. It helps plan audits, conduct them with clause-aligned checklists, manage non-conformities and corrective actions, and generate reports for management review in one place.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I just use Excel for my ISO 9001 audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While possible, Excel is inefficient for ISO audits. It lacks automated workflows, audit trails, and real-time visibility. Purpose-built software reduces manual work and minimizes errors.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does software help with ISO 9001 corrective actions (CAPA)?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It creates a closed-loop system where non-conformities are assigned, tracked, and verified. Automated reminders ensure corrective actions are completed and effectiveness is confirmed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is ISO 9001 software suitable for small businesses?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Cloud-based ISO 9001 software is scalable and affordable, helping small teams manage compliance efficiently with structured audit processes.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How is iAudit different from general QMS software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit is purpose-built for the audit process, aligned with ISO 19011 guidelines. It focuses on planning, execution, and follow-up using the PDCA cycle.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can this software handle other standards like ISO 14001 or 45001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit supports integrated management systems, allowing you to manage ISO 9001, ISO 14001, and ISO 45001 audits within one platform.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is my company's audit data secure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit uses enterprise-grade security, including encryption and role-based access controls. Your audit data remains secure and under your control.",
                    },
                },
            ],
        },
    ],
};
