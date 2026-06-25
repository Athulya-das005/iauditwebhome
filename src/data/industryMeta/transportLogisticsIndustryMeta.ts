import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/transport-and-logistics-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const transportLogisticsIndustryMetadata: Metadata = {
    title: "Transport and Logistics ISO Audit Software | iAudit Global",
    description:
        "Centralise fleet compliance with transport and logistics ISO audit software. Manage ISO 9001, 14001 and 45001 audits across depots from one dashboard.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Transport and Logistics ISO Audit Software | iAudit Global",
        description:
            "Centralise fleet compliance, track driver safety, and manage ISO 9001, 14001 and 45001 audits across depots and warehouses with iAudit.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Transport and Logistics ISO Audit Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Transport and Logistics ISO Audit Software | iAudit Global",
        description:
            "Manage transport and logistics ISO audits across fleets, depots and warehouses with one platform. Standardise audits and track corrective actions centrally.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
