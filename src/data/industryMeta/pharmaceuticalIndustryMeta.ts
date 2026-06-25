import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/pharmaceutical-compliance-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const pharmaceuticalIndustryMetadata: Metadata = {
    title: "Pharmaceutical Compliance Audit Software | iAudit Global",
    description:
        "Pharmaceutical compliance audit software for ISO 9001, 14001 and 45001. Manage CAPA, data integrity, evidence and audit visibility across every site.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Pharmaceutical Compliance Audit Software | iAudit Global",
        description:
            "Pharmaceutical compliance audit software for ISO 9001, 14001 and 45001. Manage CAPA, data integrity, evidence and audit visibility across every site.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Pharmaceutical Compliance Audit Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pharmaceutical Compliance Audit Software | iAudit Global",
        description:
            "Manage CAPA, data integrity, evidence and ISO audit visibility across pharmaceutical manufacturing, labs and distribution sites.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
