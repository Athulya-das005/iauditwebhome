import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/facilities-management-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const facilitiesManagementIndustryMetadata: Metadata = {
    title: "Facilities Management ISO Audit Software | iAudit Global",
    description:
        "Manage building compliance with facilities management iso audit software. Standardise ISO 9001, 14001 and 45001 audits across your entire site portfolio.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Facilities Management ISO Audit Software | iAudit Global",
        description:
            "Manage building compliance with facilities management iso audit software. Standardise ISO 9001, 14001 and 45001 audits across your entire site portfolio.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Facilities Management ISO Audit Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Facilities Management ISO Audit Software | iAudit Global",
        description:
            "Standardise ISO 9001, 14001 and 45001 audits across building portfolios with structured checklists, evidence and action tracking.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
