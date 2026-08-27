export const SELF_ASSESSMENT_PAGE_PATH = "/iso-14001-2026-self-assessment-tool";
export const SELF_ASSESSMENT_PAGE_URL = `https://www.iaudit.global${SELF_ASSESSMENT_PAGE_PATH}`;

export const selfAssessmentFaqItems = [
    {
        question: "What is an ISO 14001:2026 Self Assessment?",
        answer:
            "An ISO 14001:2026 Self Assessment is a structured review that helps you understand how your environmental management system aligns with key areas of the standard and identify areas that may require further attention.",
    },
    {
        question: "Is the ISO 14001:2026 Self Assessment free?",
        answer: "Yes. The iAudit Global ISO 14001:2026 Self Assessment is free to complete, and no credit card is required.",
    },
    {
        question: "Who should complete an ISO 14001:2026 Self Assessment?",
        answer:
            "The assessment can be useful for environmental managers, HSE teams, quality managers, internal auditors, compliance teams and organisations preparing for ISO 14001:2026.",
    },
    {
        question: "Does the self assessment confirm ISO 14001:2026 compliance?",
        answer:
            "No. A self assessment does not provide certification or formally confirm conformity. It gives your organisation an initial view of areas that may require further review.",
    },
    {
        question: "Can organisations certified to ISO 14001:2015 use the assessment?",
        answer:
            "Yes. Organisations currently working to ISO 14001:2015 can use the assessment to review their position and identify areas that may need attention as they prepare for ISO 14001:2026.",
    },
    {
        question: "What areas does the ISO 14001:2026 Self Assessment cover?",
        answer:
            "The assessment reviews key areas of an environmental management system, including organisational context, leadership, planning, operational controls, performance evaluation and improvement.",
    },
    {
        question: "What should I do after completing the self assessment?",
        answer:
            "Use your results to prioritise areas for further investigation. You may then carry out a detailed gap analysis, plan an internal audit or use iAudit Global to manage findings and corrective actions.",
    },
    {
        question: "Can I use iAudit Global after completing the assessment?",
        answer:
            "Yes. After completing the assessment, you can use iAudit Global to plan audits, capture evidence, manage findings and track corrective actions. Start with a free 14-day trial with no credit card required.",
    },
];

export const selfAssessmentPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${SELF_ASSESSMENT_PAGE_URL}/#webpage`,
            url: `${SELF_ASSESSMENT_PAGE_URL}/`,
            name: "ISO 14001:2026 Self Assessment Tool",
            description:
                "Check your environmental management system against ISO 14001:2026 with our free self assessment, and identify areas that may need attention before your next audit or transition review.",
            isPartOf: {
                "@id": "https://www.iaudit.global/#website",
            },
            publisher: {
                "@id": "https://www.iaudit.global/#organization",
            },
            breadcrumb: {
                "@id": `${SELF_ASSESSMENT_PAGE_URL}/#breadcrumb`,
            },
            about: {
                "@type": "Thing",
                name: "ISO 14001:2026",
            },
        },
        {
            "@type": "FAQPage",
            "@id": `${SELF_ASSESSMENT_PAGE_URL}/#faq`,
            url: `${SELF_ASSESSMENT_PAGE_URL}/`,
            mainEntity: selfAssessmentFaqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        },
        {
            "@type": "WebSite",
            "@id": "https://www.iaudit.global/#website",
            url: "https://www.iaudit.global/",
            name: "iAudit Global",
            publisher: {
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            email: "info@iaudit.global",
            telephone: "+44 7944 829129",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressRegion: "Surrey",
                addressCountry: "GB",
            },
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${SELF_ASSESSMENT_PAGE_URL}/#breadcrumb`,
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
                    name: "ISO 14001:2026 Self Assessment",
                    item: `${SELF_ASSESSMENT_PAGE_URL}/`,
                },
            ],
        },
    ],
};
