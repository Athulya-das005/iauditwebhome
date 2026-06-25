import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/machinery-and-equipment-iso-audit-software";
const ogImage = "https://www.iaudit.global/images/machinery-equipment-audit-software.jpg";

export const machineryEquipmentIndustryMetadata: Metadata = {
    title: "Machinery and Equipment ISO Audit Software | iAudit",
    description:
        "Machinery and equipment ISO audit software for ISO 9001, 14001 and 45001. Plan audits, capture evidence, track actions, and download reports. 14 day free trial.",
    keywords: [
        "machinery audit software",
        "equipment ISO audits",
        "ISO 9001 audits manufacturing",
        "ISO 14001 environmental audits",
        "ISO 45001 safety audits",
        "audit management software",
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
        title: "Machinery and Equipment ISO Audit Software",
        description:
            "Plan, run and track ISO audits across machinery and equipment operations with better control, visibility and structured reporting.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Machinery and Equipment ISO Audit Software",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Machinery and Equipment ISO Audit Software",
        description:
            "Capture audit evidence, track corrective actions and improve ISO compliance across machinery and equipment operations.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
