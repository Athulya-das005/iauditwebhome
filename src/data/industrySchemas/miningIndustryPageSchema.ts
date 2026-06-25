const pageUrl = "https://www.iaudit.global/industries/mining-compliance-software";
const ogImage = "https://www.iaudit.global/assets/images/mining-software-og.jpg";

export const miningIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/industries/mining-compliance-software#breadcrumb",
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
                    name: "Mining Compliance Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/industries/mining-compliance-software#software",
            name: "iAudit",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            softwareVersion: "latest",
            description:
                "Mining compliance software for ISO 9001, 14001 and 45001. Audit TSFs, grade control and safety across remote sites with clear evidence and follow-up.",
            offers: {
                "@type": "Offer",
                url: "https://www.iaudit.global/industries/mining-compliance-software#signup",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                eligibleRegion: {
                    "@type": "Country",
                    name: "Global",
                },
            },
            featureList: [
                "ISO 9001, 14001, 45001 audit support",
                "TSF monitoring and environmental oversight",
                "Ground control and blasting safety",
                "Contractor compliance management",
                "Offline mobile audit mode",
                "PDCA-based continuous improvement",
            ],
        },
        {
            "@type": "Product",
            "@id": "https://www.iaudit.global/industries/mining-compliance-software#product",
            name: "iAudit Mining Compliance Software",
            description:
                "Structured software to manage mining audits, TSF monitoring, contractor compliance and ISO standards with clear evidence and follow-up.",
            brand: {
                "@type": "Organization",
                name: "iAudit",
                url: "https://www.iaudit.global/",
            },
            url: pageUrl,
            image: ogImage,
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "12",
            },
            offers: {
                "@type": "Offer",
                url: "https://www.iaudit.global/industries/mining-compliance-software#signup",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
            },
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/industries/mining-compliance-software#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is mining compliance software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Mining compliance software helps mine operators manage audits, evidence and corrective actions across quality, environmental and safety requirements. It replaces fragmented spreadsheets and site folders with a structured audit trail that supports ISO 9001, ISO 14001 and ISO 45001.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does mining compliance software support ISO 45001 critical risks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It helps teams audit high-risk controls consistently, including ground control checks, mobile plant risks, PPE use, contractor inductions and incident follow-up. The key benefit is traceable evidence and visible actions, not just a completed checklist.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are common ISO 14001 audit findings in mining?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Common findings include generic aspects registers that ignore site-specific chemistry, missing evidence for dust and spill controls, weak water compliance documentation, and gaps in tailings monitoring records or follow-up actions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help with TSF and environmental audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit supports structured checklists and central evidence capture for TSF monitoring, TARPs, water controls, dust management and spill readiness. Findings link to actions with owners and deadlines so environmental risks do not sit unresolved.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit help manage contractor compliance on remote sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can audit contractor onboarding, competence and compliance against your site rules and ISO requirements. iAudit also helps you track repeat contractor issues across sites so performance improves over time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What does Audit Mate do for mining teams?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Audit Mate helps create clause-aligned templates and prompts for mining controls such as ground control plans, TSF checks, dust controls, sampling and calibration records. It reduces planning time and keeps audits consistent across sites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we try iAudit before committing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can start a 14-day free trial with no credit card required. You can run audits, capture evidence, track findings and actions, and see whether mining compliance software fits your operations.",
                    },
                },
            ],
        },
    ],
};
