export const iso45001PageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: "https://www.iaudit.global/iaudit-logo-new.png",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.iaudit.global/standards/iso-45001-audit-management-software/#webpage",
            url: "https://www.iaudit.global/standards/iso-45001-audit-management-software",
            name: "ISO 45001 Audit Management Software Built for Worker Safety",
            description:
                "Manage occupational health, safety risks, and proactive hazard identification in one secure, auditor-led PDCA platform.",
            isPartOf: {
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/standards/iso-45001-audit-management-software/#software",
            name: "iAudit Global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "ISO 45001 audit management software for managing occupational health and safety audits, tracking hazards, capturing evidence, and ensuring corrective actions are verified through a PDCA workflow.",
            url: "https://www.iaudit.global/standards/iso-45001-audit-management-software",
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
                "Risk-based safety audit planning",
                "Real-time hazard evidence capture",
                "Corrective action tracking and verification",
                "Hazard identification and assessment",
                "Emergency preparedness auditing",
                "Legal and regulatory compliance tracking",
                "Mobile-first audit execution",
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/standards/iso-45001-audit-management-software/#breadcrumb",
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
                    name: "ISO 45001 Audit Management Software",
                    item: "https://www.iaudit.global/standards/iso-45001-audit-management-software",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/standards/iso-45001-audit-management-software/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is ISO 45001 audit management software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It is a digital tool designed to help organisations plan, execute, and track health and safety audits. It replaces manual forms and spreadsheets with a centralised system for capturing evidence, managing nonconformities, and tracking corrective actions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I use this for on-site safety inspections?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit is built for field use. Auditors can conduct live safety inspections on mobile devices, capture photos of hazards, and assign actions immediately on-site.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does the software handle safety nonconformities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It creates a closed-loop workflow where safety issues are assigned, tracked, and verified through to closure, ensuring accountability and continuous improvement.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit support incident and near-miss auditing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The platform allows you to audit root causes of incidents and near-misses using structured checklists and ensures corrective actions are implemented to prevent recurrence.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is my company's sensitive safety data secure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit operates a strict zero-access policy. Your safety data is encrypted and accessible only to authorised users within your organisation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you offer a free review of our current safety programme?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. We offer a free ISO programme review for a limited number of companies, providing an independent assessment of your audit structure and identifying key safety gaps.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I try iAudit Global before buying?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can start a 14-day free trial with full access to gap analysis tools, self-assessments, and safety findings dashboards.",
                    },
                },
            ],
        },
    ],
};
