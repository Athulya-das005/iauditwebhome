export const pricingPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "@id": "https://iaudit.global/#software",
            name: "iAudit Global",
            url: "https://iaudit.global/",
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
                    url: "https://iaudit.global/pricing",
                },
                {
                    "@type": "Offer",
                    name: "Professional Plan",
                    price: "25.90",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://iaudit.global/pricing",
                },
                {
                    "@type": "Offer",
                    name: "Enterprise Plan",
                    price: "30.10",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://iaudit.global/pricing",
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
                "@id": "https://iaudit.global/#software",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://iaudit.global/pricing#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://iaudit.global/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Pricing",
                    item: "https://iaudit.global/pricing",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://iaudit.global/pricing#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is iAudit Global?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit Global is ISO audit management software built by auditors. It helps teams plan internal audits, capture evidence, report findings and track corrective actions for ISO 9001, ISO 14001 and ISO 45001.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is there a free plan, and what does it include?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The Free plan is an ongoing option at £0 or $0 per user. You can run gap analyses and self-assessments, review your findings and analytics summaries, and download reports. The Free plan is separate from the 14-day trial.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What can I do during the 14-day free trial?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can try iAudit with a real audit. Plan the audit, capture evidence, record findings and track follow-up actions to see how the workflow fits your team. You don’t need a credit card to start.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What happens when the free trial ends?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "At the end of the 14 days, you can choose a paid plan or end your trial without being charged. If you choose a paid plan, you’ll see the price and billing terms before payment is required.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What’s the difference between Free, Unos, Dos and Tres?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Free: Run gap analyses and self-assessments, review your results and download reports.\nUnos: Run unlimited audits against one ISO standard. Schedule audits, capture evidence, manage nonconformities and export reports in Excel, PDF or Word.\nDos: Manage audits against two ISO standards across multiple sites. Get all Unos features, plus dashboards for sites and nonconformities, and priority email support.\nTres: Manage audits against three ISO standards across up to 10 sites. Get all Dos features, plus custom checklists, audit performance analytics and a dedicated account manager.\nChoose based on how many standards and sites you audit, and what your team needs to manage the programme.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do the monthly prices and contract terms work?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The prices shown for Unos, Dos and Tres are per user, per month for the 1-, 3- or 6-year contract you select. Select a term to see its rate in GBP or USD. Your subscription details show the payment schedule before you purchase.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I upgrade, downgrade or cancel my plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can request a plan change or cancel your subscription. When a change takes effect depends on your agreement. Cancellation normally takes effect at the end of your current paid billing period, unless your agreement says otherwise.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who can see my audit data and findings?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Your organisation retains ownership of the records, evidence and documents it adds to iAudit. Paid plans include access controls so you can manage what authorised users can see and do based on their roles.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I reuse my existing Excel audit checklists?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can use your existing checklists as a starting point, and Audit Mate can help you draft questions. Tres includes custom checklists. If you need to import spreadsheet files or move historical audit records, ask us about migration options.",
                    },
                },
            ],
        },
    ],
};
