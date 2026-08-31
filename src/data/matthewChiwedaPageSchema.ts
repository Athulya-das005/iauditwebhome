export const MATTHEW_CHIWEDA_PAGE_PATH = "/author/mathew-chiweda";
export const MATTHEW_CHIWEDA_PAGE_URL = `https://www.iaudit.global${MATTHEW_CHIWEDA_PAGE_PATH}`;

export const matthewChiwedaPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "@id": `${MATTHEW_CHIWEDA_PAGE_URL}/#profilepage`,
            url: `${MATTHEW_CHIWEDA_PAGE_URL}/`,
            name: "Mathew Chiweda | Co-founder iAudit Global",
            description:
                "Meet Mathew Chiweda, Co-founder of iAudit Global and ISO audit specialist with 20+ years of experience in quality, HSE and management systems.",
            isPartOf: {
                "@id": "https://www.iaudit.global/#website",
            },
            mainEntity: {
                "@id": `${MATTHEW_CHIWEDA_PAGE_URL}/#person`,
            },
            breadcrumb: {
                "@id": `${MATTHEW_CHIWEDA_PAGE_URL}/#breadcrumb`,
            },
        },
        {
            "@type": "Person",
            "@id": `${MATTHEW_CHIWEDA_PAGE_URL}/#person`,
            name: "Mathew Chiweda",
            url: `${MATTHEW_CHIWEDA_PAGE_URL}/`,
            jobTitle: "Co-founder & Managing Director",
            description:
                "Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global, with more than 20 years of experience across quality, health and safety, environmental management and ISO management systems.",
            image: "https://www.iaudit.global/images/mathew-chiweda.webp",
            sameAs: ["https://www.linkedin.com/in/mathew-chiweda/"],
            worksFor: {
                "@id": "https://www.iaudit.global/#organization",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://www.iaudit.global/#organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global/",
            logo: {
                "@type": "ImageObject",
                url: "https://www.iaudit.global/iaudit-logo-new.png",
            },
            email: "info@iaudit.global",
            telephone: "+44 7944 829129",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressRegion: "Surrey",
                addressCountry: "GB",
            },
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
            "@type": "BreadcrumbList",
            "@id": `${MATTHEW_CHIWEDA_PAGE_URL}/#breadcrumb`,
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
                    name: "Authors",
                    item: "https://www.iaudit.global/author/",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Mathew Chiweda",
                    item: `${MATTHEW_CHIWEDA_PAGE_URL}/`,
                },
            ],
        },
    ],
};
