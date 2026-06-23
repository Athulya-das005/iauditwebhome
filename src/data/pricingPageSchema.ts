export const pricingPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/#software",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "iAudit Global is ISO audit management software for ISO 9001, 14001, and 45001 internal audits. Plan, execute and track audits in one PDCA-driven platform aligned with ISO 19011.",
            offers: [
                {
                    "@type": "Offer",
                    name: "Starter Plan",
                    price: "15.60",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://www.iaudit.global/pricing",
                },
                {
                    "@type": "Offer",
                    name: "Professional Plan",
                    price: "25.90",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://www.iaudit.global/pricing",
                },
                {
                    "@type": "Offer",
                    name: "Enterprise Plan",
                    price: "30.10",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://www.iaudit.global/pricing",
                },
            ],
        },
        {
            "@type": "Review",
            author: {
                "@type": "Person",
                name: "iAudit Customer",
            },
            reviewBody:
                "Our biggest issue was inconsistent audits across sites. Standardised checklists and dashboards finally gave us proper visibility and control.",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
            itemReviewed: {
                "@id": "https://www.iaudit.global/#software",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/pricing#breadcrumb",
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
                    name: "Pricing",
                    item: "https://www.iaudit.global/pricing",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/pricing#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is iAudit Global?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global is ISO audit management software for internal audits. It is purpose built for ISO 9001, 14001, and 45001, following ISO 19011 and the PDCA cycle so organisations can plan, execute and track their audit programme in one place.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the 14 day free trial really free and do I need a credit card?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The 14 day trial is completely free and does not require a credit card. At the end of the trial you can choose a paid plan or stop without any charge.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How are the Starter, Professional and Enterprise plans different?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Starter is for small teams starting their audit journey with core features. Professional adds collaboration tools, multiple companies and API access for growing organisations. Enterprise is designed for large or complex programmes that require unlimited sites and users, advanced security, custom integrations and a dedicated account manager.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we upgrade, downgrade or cancel our plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can move between Starter, Professional and Enterprise or cancel your subscription. Changes take effect from the next billing period and there are no long-term contracts.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you offer annual billing or discounts for longer commitments?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Monthly billing is available as standard. If you prefer annual invoicing or have a larger programme and need a tailored quote, you can contact the iAudit team to discuss available options.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who actually has access to my audit data and findings?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Only you and your authorised users have access to your audit data. iAudit Global follows a zero-access policy, meaning findings, evidence and reports are encrypted and remain fully under your organisation's control.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I move my existing Excel checklists into iAudit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can recreate existing Excel audit checklists using the built-in checklist builder or use Audit Mate to help draft them. Enterprise customers can also receive hands-on migration support.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the Audit Mate AI assistant included in the monthly price?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Audit Mate is a core feature of the iAudit Global platform. It helps auditors create checklists, suggest interview questions and understand ISO requirements without additional fees.",
                    },
                },
            ],
        },
    ],
};
