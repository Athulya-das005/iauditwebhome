const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/machinery-and-equipment-iso-audit-software";

export const machineryEquipmentIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: logoUrl,
            description:
                "ISO audit management software built by certified auditors for ISO 9001, 14001 and 45001 audits.",
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
        },
        {
            "@type": "SoftwareApplication",
            name: "Machinery and Equipment ISO Audit Software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Mobile",
            url: pageUrl,
            description:
                "Machinery and equipment ISO audit software to plan audits, capture evidence, track findings and manage corrective actions across ISO 9001, 14001 and 45001 audit programmes.",
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "14-day free trial available",
            },
            featureList: [
                "Audit planning and scheduling",
                "Standardised audit checklists",
                "Evidence capture with photos and records",
                "Corrective action tracking",
                "Audit reporting and export",
                "Multi-site audit management",
                "ISO 9001, 14001 and 45001 support",
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
                    name: "Machinery and Equipment ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is machinery and equipment ISO audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Machinery and equipment ISO audit software helps businesses plan, conduct and track internal audits for ISO 9001, ISO 14001 and ISO 45001 within one structured platform.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help machinery and equipment companies manage ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit helps teams plan audit programmes, run audits, capture findings, assign corrective actions and monitor progress across sites with improved consistency and visibility.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ISO standards does iAudit support?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit supports ISO 9001, ISO 14001 and ISO 45001, helping organisations manage quality, environmental and health and safety audits effectively.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does Audit Mate help audit teams?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit Mate supports audit preparation, improves documentation quality and helps teams maintain consistency across audits, sites and departments.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support multi-site audit programmes?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, iAudit supports audit planning, execution and follow-up across multiple sites, teams and departments for better central oversight.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit improve corrective action tracking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit centralises findings, assigns ownership, tracks deadlines and ensures corrective actions are completed and verified effectively.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is there a free trial available?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, iAudit offers a 14-day free trial including features like gap analysis, self assessment, findings dashboard and report downloads.",
                    },
                },
            ],
        },
    ],
};
