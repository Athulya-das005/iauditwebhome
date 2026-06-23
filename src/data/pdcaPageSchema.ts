export const pdcaPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            logo: "https://www.iaudit.global/logo.png",
            email: "info@iaudit.global",
            telephone: "+44 7944 829129",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressLocality: "Surrey",
                addressCountry: "England",
            },
            foundingDate: "2024",
            description:
                "ISO audit management software built by certified auditors to run PDCA-driven audits with evidence, actions and reporting in one platform.",
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/pdca-cycle-audit-software/#software",
            name: "iAudit Global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.iaudit.global/pdca-cycle-audit-software",
            description:
                "PDCA cycle audit software for ISO audits. Plan, Do, Check, Act in one connected workflow with evidence, dashboards and corrective actions.",
            creator: {
                "@id": "https://www.iaudit.global/#organization",
            },
            featureList: [
                "PDCA audit workflow",
                "ISO 9001, 14001, 45001 support",
                "Audit evidence management",
                "Corrective action tracking",
                "Real-time dashboards",
                "Clause-linked checklists",
            ],
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "14-day free trial",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/pdca-cycle-audit-software/#breadcrumb",
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
                    name: "PDCA Cycle Audit Software",
                    item: "https://www.iaudit.global/pdca-cycle-audit-software",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/pdca-cycle-audit-software/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is PDCA cycle audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "PDCA cycle audit software is a digital platform designed to manage the entire ISO audit process, from planning to corrective action. It connects every stage of the Plan Do Check Act methodology, ensuring a clear, unbroken audit trail and driving continual improvement.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does software enforce the Plan Do Check Act cycle better than spreadsheets?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Spreadsheets create fragmented workflows where information gets lost. Purpose-built software links audit plans to checklists, findings to corrective actions, and actions to verification. This provides real-time visibility and ensures the audit cycle is consistently completed.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help with corrective action CAPA management?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit creates a closed loop system for the Act phase. When a non conformity is found, the software allows you to assign an owner, set a deadline, and track the action plan. The finding cannot be closed until the effectiveness of the action is verified, preventing repeat issues.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is this PDCA cycle audit software suitable for small businesses?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Cloud-based audit software like iAudit is scalable and suitable for businesses of all sizes. It provides structure, visibility, and efficiency, helping small teams manage compliance without needing a dedicated quality department.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit handle audits for multiple ISO standards?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit is designed for integrated management systems. You can manage ISO 9001, ISO 14001, and ISO 45001 audits within the same platform using a consistent PDCA workflow.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is our audit data secure in the iAudit platform?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit operates a strict zero access policy, meaning your audit findings remain private to your organisation. All data is encrypted and securely stored, and is not accessed or used by the platform provider.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can I try the software before buying?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can start a 14 day free trial of iAudit Global with no credit card required. This provides full access to all features including audit planning, mobile checklists, real time dashboards, and the complete PDCA corrective action workflow.",
                    },
                },
            ],
        },
    ],
};
