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
                "iAudit Global is construction audit software for ISO 9001, ISO 14001 and ISO 45001. It helps organisations manage site audits, inspection and test plans, NCR tracking and multi-site compliance in one PDCA-driven platform.",
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
                "Construction audit software built for ISO 9001, ISO 14001 and ISO 45001 compliance. Centralise site findings, manage inspection and test plans and track non-conformances across construction projects.",
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
                        text: "To audit an ITP effectively, you must move beyond checking that the document exists. A strong internal audit verifies that the ITP is actively used on site, that hold points have been signed off by the correct authority before works are covered, and that physical Inspection and Test Records (ITRs) match the plan. iAudit Global allows you to attach photos and signatures directly to these checks as irrefutable evidence.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the biggest challenge when auditing ISO 14001 on a construction site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The biggest challenge is ensuring that the Construction Environmental Management Plan (CEMP) reflects the physical reality of the site. Often, CEMPs are generic documents left in the site office. Auditors frequently find failures in waste segregation, missing drain guards, or inadequate fuel bunding. Our construction audit software prompts auditors to physically verify these controls with mobile checklists.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit help us manage subcontractor compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. In construction, up to 80% of work is delivered by external providers, making supply chain control critical for ISO 9001 and ISO 45001. You can use iAudit to run specific subcontractor audits, verify worker competence (like CSCS cards), and track non-conformances (NCRs) by trade to identify systemic issues across your projects.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit handle audits across multiple temporary worksites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit is built for multi-site and mobile operations. You can schedule audits across all active projects from one central dashboard. Instead of site managers emailing spreadsheets back to head office, all findings, evidence, and corrective actions sync to one secure workspace, giving directors real-time visibility of project compliance.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is it possible to conduct integrated audits (QHSE) using this software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely. Many principal contractors run Integrated Management Systems (IMS). With iAudit, you can build custom checklists that cover quality (ISO 9001), environment (ISO 14001), and safety (ISO 45001) in a single site walkthrough, saving time and preventing audit fatigue for your site managers.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What happens if a site has no internet connection during an audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Construction sites often have poor connectivity, especially during groundworks or in basements. iAudit supports offline auditing. You can complete your checklists, capture photographic evidence, and log findings without an internet connection. The app automatically syncs the data to the cloud as soon as your device reconnects.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do we track construction defects and non-conformances (NCRs)?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: 'Generic tools often treat NCRs as a simple checklist item. iAudit treats them as a process. You log the defect, assign an owner and deadline, and require root cause analysis. Crucially, the finding remains "open" until effectiveness is verified, ensuring that a recurring defect on one site is fixed permanently across the business.',
                    },
                },
            ],
        },
    ],
};
