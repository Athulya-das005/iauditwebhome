import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/basic-metals-and-fabrication-iso-audit-software";
const ogImage = "https://www.iaudit.global/assets/images/basic-metals-audit-banner.jpg";

export const basicMetalsFabricationIndustryMetadata: Metadata = {
    title: "Basic Metals and Fabrication ISO Audit Software | iAudit",
    description:
        "Basic metals and fabrication iso audit software for ISO 9001, 14001 and 45001. Manage traceability, safety and environmental audits in one place.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Basic Metals and Fabrication ISO Audit Software | iAudit",
        description:
            "Centralise material traceability, manage welder continuity and track high-risk safety controls with our fabrication ISO audit software platform.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Basic Metals and Fabrication ISO Audit Software | iAudit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Basic Metals and Fabrication ISO Audit Software | iAudit",
        description:
            "Centralise material traceability, manage welder continuity and track high-risk safety controls with our fabrication ISO audit software platform.",
        images: [ogImage],
        site: "@iAuditGlobal",
    },
};
