import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/electrical-and-optical-equipment-iso-audit-software";
const ogImage = "https://www.iaudit.global/images/electrical-optical-audit-software.jpg";

export const electricalOpticalEquipmentIndustryMetadata: Metadata = {
    title: "Electrical and Optical Equipment ISO Audit Software | iAudit",
    description:
        "Electrical and optical equipment ISO audit software for ISO 9001, 14001 and 45001. Plan audits, track findings and improve follow-up with iAudit.",
    keywords: [
        "electrical equipment audit software",
        "optical equipment ISO audits",
        "ISO 9001 manufacturing audits",
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
        title: "Electrical and Optical Equipment ISO Audit Software",
        description:
            "Standardise quality control, ensure electrical safety and simplify ISO audits across manufacturing with one structured platform.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Electrical and Optical Equipment ISO Audit Software",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Electrical and Optical Equipment ISO Audit Software",
        description:
            "Plan audits, track findings and improve corrective actions across electrical and optical equipment manufacturing environments.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
