export const iso14001PageSchema = {
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
            "@id": "https://www.iaudit.global/standards/iso-14001-audit-management-software/#webpage",
            url: "https://www.iaudit.global/standards/iso-14001-audit-management-software",
            name: "ISO 14001 Audit Management Software Built for Environmental Performance",
            description:
                "Manage environmental audits, capture evidence, and close PDCA actions with ISO 14001:2026-ready tools.",
            isPartOf: {
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/standards/iso-14001-audit-management-software/#software",
            name: "iAudit Global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "ISO 14001 audit management software for planning, executing, and tracking environmental audits with PDCA workflows, evidence capture, dashboards, and ISO 14001:2026 transition tools.",
            url: "https://www.iaudit.global/standards/iso-14001-audit-management-software",
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
                "Evidence-based environmental auditing",
                "PDCA workflow management",
                "ISO 14001:2026 transition tools",
                "Audit dashboards and reporting",
                "Nonconformity tracking and corrective actions",
                "Multi-site audit management",
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/standards/iso-14001-audit-management-software/#breadcrumb",
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
                    name: "ISO 14001 Audit Management Software",
                    item: "https://www.iaudit.global/standards/iso-14001-audit-management-software",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/standards/iso-14001-audit-management-software/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is ISO 14001 audit management software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It is a digital platform designed to help organisations plan, execute, and track environmental audits. It replaces manual spreadsheets by centralising findings, evidence, and corrective actions, ensuring your environmental management system remains compliant and effective.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help with the ISO 14001:2026 transition?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We provide dedicated tools and expert-led checklists specifically for the ISO 14001:2026 update. Our platform helps you conduct gap analyses and update your audit programme smoothly, ensuring you meet the new requirements long before certification deadlines.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I capture on-site evidence like photos of spill kits or bunding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Our software is built for mobile use. Auditors can take photos of physical controls, attach notes, and link them directly to specific audit clauses while on-site.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does the software support Integrated Management Systems?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit supports ISO 14001 alongside ISO 9001 and ISO 45001, enabling integrated audits and a unified view of quality, safety, and environmental performance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How secure is our environmental audit data?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We operate a strict zero-access policy. Your audit findings and environmental data are encrypted and accessible only to authorised users within your organisation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you offer a free review of our current ISO programme?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. We offer a free ISO programme review for a limited number of companies. Our auditors assess your current audit structure and identify priority gaps.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I try iAudit Global before committing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can start a 14-day free trial with no credit card required, including access to gap analysis tools, dashboards, and report downloads.",
                    },
                },
            ],
        },
    ],
};
