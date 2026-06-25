const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/construction-iso-audit-software";

export const constructionIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/industries/construction-iso-audit-software/#software",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "iAudit Global is construction audit software for ISO 9001, ISO 14001, ISO 45001 and ISO 27001. It helps organisations manage site audits, inspection and test plans, NCR tracking and multi-site compliance in one PDCA-driven platform.",
            image: logoUrl,
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://www.iaudit.global/pricing",
            },
        },
        {
            "@type": "Product",
            name: "iAudit Global Construction Audit Software",
            image: logoUrl,
            description:
                "Construction audit software built for ISO 9001, ISO 14001, ISO 45001 and ISO 27001 compliance. Centralise site findings, manage inspection and test plans and track non-conformances across construction projects.",
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            offers: {
                "@type": "Offer",
                url: "https://www.iaudit.global/pricing",
                priceCurrency: "USD",
                price: "0",
                availability: "https://schema.org/InStock",
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
                    name: "Construction Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How do you audit an Inspection and Test Plan (ITP) effectively?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "To audit an ITP effectively you must verify that the plan is actively used on site, that hold points are signed off before work is covered, and that inspection records match the documented plan. iAudit Global allows auditors to attach photos, evidence and signatures directly to these checks.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the biggest challenge when auditing ISO 14001 on a construction site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The biggest challenge is ensuring the Construction Environmental Management Plan reflects real site conditions. Auditors often find issues such as poor waste segregation, missing drain protection or fuel bunding failures. Structured mobile checklists help verify these controls physically on site.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit help manage subcontractor compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Construction projects rely heavily on subcontractors. iAudit allows organisations to audit subcontractors, verify workforce competence and track non-conformances across projects to identify recurring supply chain risks.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit handle audits across multiple temporary worksites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit supports multi-site audit programmes. Auditors can schedule audits across multiple construction projects while findings, evidence and corrective actions sync into one central dashboard for management visibility.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is it possible to conduct integrated audits for quality, safety and environment?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Many contractors run integrated management systems. iAudit allows auditors to combine ISO 9001, ISO 14001 and ISO 45001 checks into one integrated site audit checklist.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What happens if a site has no internet connection during an audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit supports offline auditing. Auditors can complete checklists, capture photos and log findings without internet access. The data automatically syncs when the device reconnects.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How are construction defects and NCRs tracked?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit allows teams to log non-conformances, assign corrective actions, track root causes and verify closure. Findings remain open until corrective actions are validated, ensuring defects are resolved across projects.",
                    },
                },
            ],
        },
    ],
};
