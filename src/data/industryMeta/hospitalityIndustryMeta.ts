import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/hospitality-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const hospitalityIndustryMetadata: Metadata = {
    title: "Hospitality Audit Software Built by ISO Auditors | iAudit Global",
    description:
        "Manage ISO 9001, 14001, and 45001 audits across hotels, restaurants, and venues. Use hospitality audit software to standardise checks and track findings.",
    keywords: [
        "hospitality audit software",
        "hotel audit software",
        "restaurant audit software",
        "ISO 9001 hospitality audit",
        "ISO 14001 hospitality compliance",
        "ISO 45001 hospitality audits",
        "hospitality compliance software",
        "hotel quality audit software",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Hospitality Audit Software Built by ISO Auditors | iAudit Global",
        description:
            "Run ISO 9001, 14001 and 45001 audits across hotels, restaurants and venues using structured hospitality audit software with real-time visibility.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Hospitality Audit Software Built by ISO Auditors | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hospitality Audit Software Built by ISO Auditors | iAudit Global",
        description:
            "Manage ISO audits across hotels, restaurants and venues using hospitality audit software built by ISO auditors.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
