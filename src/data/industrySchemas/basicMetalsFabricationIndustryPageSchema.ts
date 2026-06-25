const logoUrl = "https://www.iaudit.global/iaudit-logo-new.png";
const pageUrl = "https://www.iaudit.global/industries/basic-metals-and-fabrication-iso-audit-software";

export const basicMetalsFabricationIndustryPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: logoUrl,
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global",
                "https://twitter.com/iauditglobal",
            ],
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/industries/basic-metals-and-fabrication-iso-audit-software#software",
            name: "Basic Metals and Fabrication ISO Audit Software",
            url: pageUrl,
            description:
                "Basic metals and fabrication ISO audit software for ISO 9001, 14001 and 45001. Manage traceability, safety and environmental audits in one place.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web-based",
            author: {
                "@id": "https://www.iaudit.global/#organization",
            },
            offers: {
                "@type": "Offer",
                url: pageUrl,
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                category: "Free Trial",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/industries/basic-metals-and-fabrication-iso-audit-software#breadcrumb",
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
                    name: "Basic Metals and Fabrication ISO Audit Software",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.iaudit.global/industries/basic-metals-and-fabrication-iso-audit-software#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is basic metals and fabrication ISO audit software?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It is software designed to help fabrication, foundry and metalworking businesses manage ISO 9001, 14001 and 45001 audits in one system. It centralises findings, evidence and corrective actions so compliance is easier to monitor across workshops and sites.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does it help with heat number traceability?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It allows teams to capture evidence linked to material identification, weld records and inspection stages in one place, reducing the risk of broken traceability between operations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can iAudit support EN 1090 and welding-related audits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit helps teams manage audits around weld traceability, welder qualifications, WPQR checks and related quality evidence. Audit Mate can also help generate fabrication-specific checklists quickly.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit help with ISO 14001 in fabrication environments?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It supports audits for chemical storage, REACH controls, CrVI handling, effluents, hazardous waste and spill readiness, with evidence and actions tracked centrally.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can the system track workshop safety controls?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. iAudit supports audits covering welding fumes, LEV, guarding, LOLER, LOTO, PPE and other ISO 45001 controls across fabrication workshops and yards.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does iAudit reduce repeat NCRs?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It links findings to owners, deadlines and effectiveness checks so corrective actions are tracked properly. This helps stop recurring issues from being reopened every audit cycle.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can we try iAudit before committing to a plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can start a 14-day free trial with no credit card required. This lets you test templates, capture evidence, track findings and see if the platform fits your fabrication operations.",
                    },
                },
            ],
        },
    ],
};
