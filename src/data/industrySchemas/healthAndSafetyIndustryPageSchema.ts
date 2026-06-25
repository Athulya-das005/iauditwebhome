const pageUrl = "https://www.iaudit.global/industries/health-and-safety-iso-audit-software";

export const healthAndSafetyIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            email: "info@iaudit.global",
            telephone: "1234567899",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressRegion: "Surrey",
                addressCountry: "England",
            },
        },
        {
            "@type": "SoftwareApplication",
            name: "Health & Safety ISO Audit Software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web-based",
            url: pageUrl,
            description:
                "Health & Safety ISO audit software for ISO 45001, 14001 and 9001. Plan, track and improve audits across sites, teams and contractors.",
            creator: {
                "@type": "Organization",
                name: "iAudit Global",
            },
            featureList: [
                "Structured ISO 45001 audit planning",
                "Real-time site evidence capture",
                "Corrective action tracking and verification",
                "Contractor and site audit oversight",
                "Automated audit reporting and visibility",
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
                    name: "Health & Safety ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How does the software prevent tick-box safety inspections?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit is built around the ISO 45001 standard. It prompts users to capture evidence, upload photos of hazards, and link findings to root causes so safety audits improve real site control.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we use the platform to document worker participation?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can log interviews, record safety committee feedback, and demonstrate workforce involvement in safety management aligned with ISO 45001 requirements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do safety officers need a laptop to log hazards on site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. The platform is mobile responsive, allowing teams to capture photos, log hazards, and assign actions directly from phones or tablets during site audits.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does the system handle open safety nonconformities?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The system enforces a closed-loop process where each issue is assigned to an owner with a deadline and cannot be closed until evidence confirms the hazard has been resolved.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can the software handle ISO 14001 and ISO 9001 alongside ISO 45001?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The platform supports integrated QHSE audits by combining ISO 45001, ISO 14001, and ISO 9001 requirements into one audit programme.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does the AI assistant help with hazard identification?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit Mate helps generate hazard checklists, suggest audit questions, and prepare teams before site audits while keeping data secure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Will this help during an external ISO 45001 certification audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The platform provides a complete audit trail from hazard identification to verification, making it easier to demonstrate compliance during external audits.",
                    },
                },
            ],
        },
    ],
};
