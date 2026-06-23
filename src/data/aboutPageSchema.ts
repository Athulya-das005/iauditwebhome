export const aboutPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: "https://iaudit.global/logo.png",
            foundingDate: "2024",
            founders: [
                {
                    "@type": "Organization",
                    name: "Certified ISO Auditors",
                },
            ],
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressLocality: "Surrey",
                addressCountry: "United Kingdom",
            },
            email: "info@iaudit.global",
            telephone: "+44 1233 456 789",
            sameAs: [
                "https://www.linkedin.com/company/iaudit-global/",
                "https://www.facebook.com/profile.php?id=61578820557173",
                "https://www.instagram.com/iauditglobal/?hl=en",
            ],
        },
        {
            "@type": "AboutPage",
            "@id": "https://www.iaudit.global/about/#aboutpage",
            name: "About iAudit Global",
            url: "https://www.iaudit.global/about",
            mainEntity: {
                "@id": "https://www.iaudit.global/#organization",
            },
            breadcrumb: {
                "@id": "https://www.iaudit.global/about/#breadcrumb",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.iaudit.global/about/#breadcrumb",
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
                    name: "About iAudit Global",
                    item: "https://www.iaudit.global/about",
                },
            ],
        },
    ],
};
