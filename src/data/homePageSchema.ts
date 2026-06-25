export const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            logo: "https://www.iaudit.global/iaudit-logo-new.png",
            email: "info@iaudit.global",
            telephone: "+44 1233 456 789",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 17f, The Lansbury Estates",
                addressLocality: "Surrey",
                addressCountry: "United Kingdom",
            },
            sameAs: [
                "https://www.instagram.com/iauditglobal/?hl=en",
                "https://www.facebook.com/profile.php?id=61578820557173",
                "https://www.linkedin.com/company/iaudit-global/",
            ],
        },
        {
            "@type": "SoftwareApplication",
            name: "iAudit Global",
            url: "https://www.iaudit.global",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "ISO Audit Software",
            operatingSystem: "Web",
            description:
                "iAudit Global is a cloud-based ISO audit software designed for ISO 9001, ISO 14001, ISO 45001, audits. Plan, execute and report audits in one PDCA-driven platform aligned with ISO 19011.",
            publisher: {
                "@type": "Organization",
                name: "iAudit Global",
            },
            featureList: [
                "ISO audit planning and scheduling",
                "Digital audit checklists",
                "Nonconformity tracking",
                "Corrective action management",
                "Multi-site audit management",
                "Automated audit reporting",
                "AI-powered audit assistant",
                "Audit analytics dashboards",
            ],
        },
        {
            "@type": "Product",
            name: "iAudit Global",
            description:
                "Cloud-based ISO audit management platform built by auditors for ISO 9001, ISO 14001, and ISO 45001 audits.",
            brand: {
                "@type": "Brand",
                name: "iAudit Global",
            },
            url: "https://www.iaudit.global",
            offers: [
                {
                    "@type": "Offer",
                    name: "Free Plan",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://www.iaudit.global/pricing",
                },
                {
                    "@type": "Offer",
                    name: "Unos Plan",
                    price: "15.60",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://www.iaudit.global/pricing",
                },
                {
                    "@type": "Offer",
                    name: "Dos Plan",
                    price: "25.90",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: "https://www.iaudit.global/pricing",
                },
                {
                    "@type": "Offer",
                    name: "Tres Plan",
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
                name: "Amira El-Sayed",
            },
            reviewBody:
                "Templates and analytics gave us visibility we never had. Our audit cycle is both faster and better documented.",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
            publisher: {
                "@type": "Organization",
                name: "iAudit Global",
            },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.iaudit.global",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Features",
                    item: "https://www.iaudit.global/#features",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Pricing",
                    item: "https://www.iaudit.global/#pricing",
                },
            ],
        },
        {
            "@type": "BlogPosting",
            headline: "Continuous Improvement Through Internal Audits",
            url: "https://www.iaudit.global/continuous-improvement-through-internal-audits",
            publisher: {
                "@type": "Organization",
                name: "iAudit Global",
                logo: {
                    "@type": "ImageObject",
                    url: "https://www.iaudit.global/iaudit-logo-new.png",
                },
            },
        },
        {
            "@type": "BlogPosting",
            headline: "Train And Motivate Internal Auditors For Better Audit Results",
            url: "https://www.iaudit.global/train-and-motivate-internal-auditors-for-better-audit-results",
            publisher: {
                "@type": "Organization",
                name: "iAudit Global",
            },
        },
        {
            "@type": "BlogPosting",
            headline: "How To Manage ISO Audits Across Multiple Sites",
            url: "https://www.iaudit.global/how-to-manage-iso-audits-across-multiple-sites",
            publisher: {
                "@type": "Organization",
                name: "iAudit Global",
            },
        },
        {
            "@type": "BlogPosting",
            headline: "Internal Audit Best Practices For Small Businesses",
            url: "https://www.iaudit.global/internal-audit-best-practices-for-small-businesses",
            publisher: {
                "@type": "Organization",
                name: "iAudit Global",
            },
        },
    ],
};
