export const auditorsPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            logo: "https://www.iaudit.global/logo.png",
            email: "info@iaudit.global",
            telephone: "+44 7944 829129",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressLocality: "Surrey",
                addressCountry: "England",
            },
            foundingDate: "2024",
            description:
                "ISO audit management software built by certified auditors to run PDCA-driven audits with evidence, actions and reporting in one platform.",
        },
        {
            "@type": "WebPage",
            "@id": "https://www.iaudit.global/audit-management-software-built-by-auditors/#webpage",
            url: "https://www.iaudit.global/audit-management-software-built-by-auditors",
            name: "Audit Management software built by Auditors | iAudit Global",
            description:
                "Streamline ISO compliance with Audit Management software built by auditors. Connect evidence, track PDCA cycles and eliminate spreadsheets.",
            isPartOf: {
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.iaudit.global/audit-management-software-built-by-auditors/#software",
            name: "iAudit Global",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.iaudit.global/audit-management-software-built-by-auditors",
            description:
                "Audit management software built by certified ISO auditors to streamline internal audits, connect evidence, track PDCA cycles, and ensure corrective actions solve problems.",
            creator: {
                "@id": "https://www.iaudit.global/#organization",
            },
            featureList: [
                "ISO audit planning and scheduling",
                "Evidence linked to findings",
                "PDCA-driven audit workflow",
                "Corrective action tracking",
                "ISO 9001, 14001, 45001 support",
                "Automated audit reporting",
                "Audit Mate AI assistant",
            ],
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "14-day free trial",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/audit-management-software-built-by-auditors/#breadcrumb",
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
                    name: "Audit Management Software Built by Auditors",
                    item: "https://www.iaudit.global/audit-management-software-built-by-auditors",
                },
            ],
        },
    ],
};
