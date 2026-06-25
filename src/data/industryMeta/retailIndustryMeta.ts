import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/retail-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const retailIndustryMetadata: Metadata = {
    title: "Retail ISO Audit Software for Multi-Site Consistency | iAudit Global",
    description:
        "Manage ISO 9001, 14001 and 45001 audits across retail stores, warehouses and supply chains. Standardise checklists, track actions and improve compliance with iAudit.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Retail ISO Audit Software for Multi-Site Consistency | iAudit Global",
        description:
            "Run retail ISO audits across every store and warehouse with one platform. Standardise audits, track nonconformities and improve performance at scale.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Retail ISO Audit Software for Multi-Site Consistency | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Retail ISO Audit Software for Multi-Site Consistency | iAudit Global",
        description:
            "Simplify retail ISO audits across stores, DCs and supply chains. Standardise processes and track actions in one platform.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
