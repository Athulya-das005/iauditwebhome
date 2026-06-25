const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/aerospace-iso-audit-software";

export const aerospaceIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: logoUrl,
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "1234567899",
                contactType: "customer support",
                email: "info@iaudit.global",
            },
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressRegion: "Surrey",
                addressCountry: "England",
            },
        },
        {
            "@type": "SoftwareApplication",
            name: "iAudit Global",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web-based",
            description:
                "Plan, execute, and report ISO 9001, 14001, 45001, and 27001 audits in one PDCA-driven platform. Built by certified auditors. Aligned to ISO 19011.",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Start with a 14-day free trial. No credit card required.",
            },
            creator: {
                "@type": "Organization",
                name: "iAudit Global",
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
                    name: "Aerospace ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What standards does iAudit Global support?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global supports ISO 9001, 14001, 45001, and 27001 management system audits.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit Global help manage audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The platform allows users to plan, execute, and report audits using a structured PDCA-driven approach aligned with ISO 19011 principles.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can audits be conducted across multiple sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, iAudit Global supports multi-site, multi-language audit programmes across locations, countries, and teams in one platform.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is audit data secure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, iAudit Global follows a zero access policy. Audit data is encrypted and only accessible to authorised users.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does iAudit Global support corrective action tracking?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, findings are linked to corrective actions with assigned owners, deadlines, and verification to ensure issues are fully resolved.",
                    },
                },
            ],
        },
    ],
};
