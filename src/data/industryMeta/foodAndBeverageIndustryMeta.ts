import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/food-and-beverage-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const foodAndBeverageIndustryMetadata: Metadata = {
    title: "Food and Beverage ISO Audit Software | iAudit Global",
    description:
        "Streamline compliance with food and beverage iso audit software. Manage ISO 9001, 14001 and 45001 audits, batch traceability and HACCP across every site.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Food and Beverage ISO Audit Software | iAudit Global",
        description:
            "Streamline compliance with food and beverage iso audit software. Manage ISO 9001, 14001 and 45001 audits, batch traceability and HACCP across every site.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Food and Beverage ISO Audit Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Food and Beverage ISO Audit Software | iAudit Global",
        description:
            "Manage ISO 9001, 14001 and 45001 audits, batch traceability and HACCP across every food and beverage site.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
