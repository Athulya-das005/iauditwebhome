const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/electrical-and-optical-equipment-iso-audit-software";

export const electricalOpticalEquipmentIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: logoUrl,
            description:
                "ISO audit management software built by certified auditors for ISO 9001, 14001, 45001 and 27001 audits.",
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
            name: "Electrical and Optical Equipment ISO Audit Software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Mobile",
            url: pageUrl,
            description:
                "Electrical and optical equipment ISO audit software to plan audits, track findings and improve corrective actions across manufacturing operations aligned with ISO 9001, 14001 and 45001.",
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
                "ISO audit planning and scheduling",
                "Quality control and calibration tracking",
                "Electrical safety audit checklists",
                "Environmental compliance tracking",
                "Corrective action management",
                "Multi-site audit oversight",
                "Automated audit reporting",
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
                    name: "Electrical and Optical Equipment ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is electrical and optical equipment ISO audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Electrical and optical equipment ISO audit software helps businesses plan, conduct, track and report internal audits for ISO 9001, ISO 14001 and ISO 45001 within one structured system.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help manufacturers manage ISO audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit helps teams plan audit programmes, run audits, record findings, track corrective actions and monitor progress across sites with improved visibility and consistency.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Which ISO standards apply to electrical and optical equipment businesses?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ISO 9001 for quality management, ISO 14001 for environmental management and ISO 45001 for occupational health and safety are the most relevant standards.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why do companies need internal audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Internal audit software replaces spreadsheets and disconnected systems, improving audit consistency, evidence tracking, corrective action follow-up and reporting.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support multi-site audit programmes?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, iAudit supports audit planning and tracking across multiple sites, helping organisations maintain consistency and central oversight.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does audit software improve corrective action tracking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit software centralises findings, assigns owners, tracks deadlines and ensures corrective actions are completed and verified effectively.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is iAudit suitable for ISO 9001, 14001 and 45001 audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, iAudit is designed to support internal audits for ISO 9001, ISO 14001 and ISO 45001, covering planning, execution, reporting and follow-up.",
                    },
                },
            ],
        },
    ],
};
