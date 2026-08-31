export const GAP_ANALYSIS_PAGE_PATH = "/iso-audit-assessments/gap-analysis";
export const GAP_ANALYSIS_PAGE_URL = `https://www.iaudit.global${GAP_ANALYSIS_PAGE_PATH}`;

export const gapAnalysisFaqItems = [
    {
        question: "What is an ISO 14001:2026 Gap Analysis?",
        answer:
            "An ISO 14001:2026 Gap Analysis compares your existing environmental management system with the requirements of ISO 14001:2026. It helps identify areas that meet the requirements, areas needing attention and gaps that may require action before transition.",
    },
    {
        question: "Why should I conduct an ISO 14001:2026 Gap Analysis?",
        answer:
            "An ISO 14001:2026 Gap Analysis helps you understand how prepared your environmental management system is for the updated standard. It can highlight missing evidence, outdated processes and areas that may need to be addressed before an internal or certification audit.",
    },
    {
        question: "What does an ISO 14001:2026 Gap Analysis cover?",
        answer:
            "The assessment should consider the relevant requirements of ISO 14001:2026, including the organisation's context, environmental aspects, risks and opportunities, objectives, operational controls, compliance obligations, monitoring, internal auditing and continual improvement.",
    },
    {
        question: "Is an ISO 14001:2026 Gap Analysis the same as an internal audit?",
        answer:
            "No. A gap analysis compares your existing system against specific requirements to identify areas that may need attention. An internal audit goes further by evaluating whether the management system is implemented and effective in practice.",
    },
    {
        question: "When should I complete an ISO 14001:2026 Gap Analysis?",
        answer:
            "It is sensible to conduct your gap analysis early in the transition process. This gives your organisation time to understand the changes, prioritise actions, update processes and gather the necessary evidence before transition or certification activities.",
    },
    {
        question: "Can I complete an ISO 14001:2026 Gap Analysis with iAudit Global?",
        answer:
            "Yes. iAudit Global provides a structured assessment environment for identifying gaps, recording findings and managing follow-up actions. You can use the results to support your ISO 14001:2026 transition planning and wider internal audit programme.",
    },
    {
        question: "Is the ISO 14001:2026 Gap Analysis free?",
        answer:
            "Yes. iAudit Global offers a free ISO 14001:2026 Gap Analysis to help organisations assess their current environmental management system and identify areas that may need attention before transitioning to the updated standard.",
    },
];

const gapAnalysisHowToSteps = [
    {
        name: "Review Your Current EMS",
        text: "Work through structured questions covering the key areas of your existing environmental management system.",
    },
    {
        name: "Find Your Gaps",
        text: "Identify ISO 14001:2026 requirements that need attention, further evidence, process changes or additional controls.",
    },
    {
        name: "Plan Your Actions",
        text: "Turn identified gaps into clear actions so your team knows what needs attention first.",
    },
    {
        name: "Track Your Progress",
        text: "Monitor completed actions and use your assessment results to support ongoing improvement and ISO 14001:2026 transition preparation.",
    },
];

export const gapAnalysisPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${GAP_ANALYSIS_PAGE_URL}#webpage`,
            name: "Free ISO 14001:2026 Gap Analysis | iAudit Global",
            description:
                "Complete a free ISO 14001:2026 Gap Analysis to identify EMS gaps, assess transition readiness and plan the actions needed.",
            url: GAP_ANALYSIS_PAGE_URL,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
        },
        {
            "@type": "SoftwareApplication",
            "@id": `${GAP_ANALYSIS_PAGE_URL}#software`,
            name: "iAudit Global ISO 14001:2026 Gap Analysis",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "A structured ISO 14001:2026 Gap Analysis that helps organisations assess their environmental management system, identify gaps and plan actions for transition.",
            url: GAP_ANALYSIS_PAGE_URL,
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "GBP",
            },
            publisher: { "@id": "https://www.iaudit.global/#organization" },
        },
        {
            "@type": "HowTo",
            "@id": `${GAP_ANALYSIS_PAGE_URL}#howto`,
            name: "How the Free ISO 14001:2026 Gap Analysis Works",
            description:
                "A structured process for reviewing an environmental management system, identifying gaps and planning actions for ISO 14001:2026 transition.",
            step: gapAnalysisHowToSteps.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                ...step,
            })),
        },
        {
            "@type": "FAQPage",
            "@id": `${GAP_ANALYSIS_PAGE_URL}#faq`,
            mainEntity: gapAnalysisFaqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        },
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/logo.png",
            },
            description:
                "iAudit Global is ISO audit management software built by certified ISO auditors for ISO 9001, ISO 14001 and ISO 45001 internal audits.",
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://www.instagram.com/iauditglobal",
            ],
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "info@iaudit.global",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://www.iaudit.global/#website",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            publisher: { "@id": "https://www.iaudit.global/#organization" },
            inLanguage: "en-GB",
        },
    ],
};
