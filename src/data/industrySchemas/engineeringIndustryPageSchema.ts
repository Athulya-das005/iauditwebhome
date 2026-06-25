const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/engineering-iso-audit-software";

export const engineeringIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: logoUrl,
            description:
                "ISO audit management software built by certified auditors for ISO 9001, 14001, 45001 and 27001 audits.",
            foundingLocation: {
                "@type": "Place",
                name: "England",
            },
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressLocality: "Surrey",
                addressCountry: "England",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-1234567899",
                contactType: "customer support",
                email: "info@iaudit.global",
            },
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            name: "Engineering ISO Audit Software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Mobile",
            url: pageUrl,
            description:
                "Plan, manage and report ISO 9001, 14001 and 45001 engineering audits across teams, projects and subcontractors with structured evidence, findings and corrective actions.",
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available",
            },
            featureList: [
                "Audit planning and scheduling",
                "ISO clause-aligned checklists",
                "Evidence capture and audit trails",
                "Corrective action tracking",
                "Automated reporting",
                "Multi-site audit management",
                "AI-powered audit assistant",
            ],
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
                    name: "Engineering ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Can we use iAudit to manage technical design reviews?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The platform allows you to audit ISO 9001 Clause 8.3 design and development processes, linking evidence, technical reviews and validations directly to audit findings.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do field engineers need a laptop to log site audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. iAudit Global is mobile responsive, allowing engineers to log findings, capture photos and assign actions directly from phones or tablets on-site.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How secure is our engineering data on the platform?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit operates a strict zero-access policy. Your audit data is encrypted and only accessible to authorised users within your organisation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can the software handle subcontractor audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can audit subcontractors and track their performance across projects, ensuring better visibility and control beyond initial approvals.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does it support ISO 45001 safety audits on live sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The platform is designed for live site audits, allowing hazard tracking, worker engagement and verification of corrective actions in real time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we generate professional audit reports for clients?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit generates structured, branded PDF reports instantly, removing manual formatting and improving reporting efficiency.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Audit Mate help with complex ISO clauses?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit Mate acts as an AI assistant, helping draft checklists, explain ISO clauses and guide auditors through complex requirements instantly.",
                    },
                },
            ],
        },
    ],
};
