const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/manufacturing-iso-audit-software";

export const manufacturingIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            name: "iAudit Global",
            url: pageUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "Manufacturing audit software for ISO 9001, 14001 and 45001 compliance. Manage production audits, checklists, evidence and corrective actions across multiple sites.",
            image: logoUrl,
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available",
                availability: "https://schema.org/InStock",
                url: "https://www.iaudit.global/pricing",
            },
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
        },
        {
            "@type": "Product",
            name: "Manufacturing Audit Software",
            image: logoUrl,
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            description:
                "ISO audit management software designed for manufacturing environments to manage quality, environmental and safety audits across production lines and sites.",
            category: "Audit Software",
            url: pageUrl,
            offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "0",
                availability: "https://schema.org/InStock",
                url: "https://www.iaudit.global/pricing",
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
                    name: "Manufacturing Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is manufacturing audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Manufacturing audit software helps teams plan, run and report internal audits across production, quality, environment and safety. It centralises findings, evidence and corrective actions so audits stay consistent and results are easier to track across lines, shifts and sites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the most common ISO 9001 nonconformities in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Common findings include missing calibration evidence, weak batch traceability, unapproved supplier use, incomplete inspection records, uncontrolled process changes, and corrective actions closed without proof of effectiveness. These often lead to repeat defects and recurring NCRs.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do you audit calibration and measurement control in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A good audit checks more than the calibration certificate. It verifies that gauges are in-date, identified, used in the correct locations, protected from damage, and removed from use when expired. It should also confirm actions taken when an out-of-tolerance result occurs.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How do you audit traceability in batch or serial production?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You audit traceability by sampling a finished product or batch and tracing it back to raw materials, key process steps, inspections and approvals. In manufacturing, auditors look for clear identification, correct labelling, controlled records and the ability to complete a trace quickly and confidently.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit help manage audits across multiple sites and shifts?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit provides multi-site dashboards and role-based access so auditors, managers and auditees can work in one system. You can compare sites, lines and shifts, track repeat NCRs, and keep evidence linked to findings for better oversight.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit support ISO 14001 and ISO 45001 audits in manufacturing?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "iAudit helps teams audit environmental and safety controls with structured checklists and central evidence capture. That includes waste segregation, spill readiness, storage areas, guarding, PPE, manual handling and chemical controls, with actions tracked through to verified closure.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we try iAudit before committing to a plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can start a 14-day free trial with no credit card required. During the trial, you can run audits, use templates, capture evidence, track findings and actions, and generate reports to see how it fits your manufacturing audit programme.",
                    },
                },
            ],
        },
        {
            "@type": "Review",
            reviewBody:
                "We used to spend half a shift chasing calibration certificates and batch records. Now the evidence sits with the finding, and follow-up is clear. Our internal audits feel tighter, and surveillance audits are far less stressful.",
            author: {
                "@type": "Person",
                name: "Verified Manufacturing Audit Professional",
            },
            itemReviewed: {
                "@type": "Product",
                name: "Manufacturing Audit Software",
            },
        },
    ],
};
