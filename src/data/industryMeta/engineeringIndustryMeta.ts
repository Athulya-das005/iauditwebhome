import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/engineering-iso-audit-software";
const ogImage = "https://www.iaudit.global/images/engineering-audit-software.jpg";

export const engineeringIndustryMetadata: Metadata = {
    title: "Engineering ISO Audit Software for Technical Control | iAudit",
    description:
        "Stop managing engineering audits in spreadsheets. Use our engineering ISO audit software to track design, site safety and supply chain risks in one secure place.",
    keywords: [
        "engineering ISO audit software",
        "ISO 9001 engineering audits",
        "ISO 14001 audits",
        "ISO 45001 safety audits",
        "engineering compliance software",
        "audit management system",
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
        title: "Engineering ISO Audit Software for Technical Control",
        description:
            "Plan, manage and report ISO audits across engineering teams, projects and subcontractors with one secure platform.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Engineering ISO Audit Software for Technical Control",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Engineering ISO Audit Software for Technical Control",
        description:
            "Track design, safety and supplier audits with structured reporting, evidence capture and full visibility across engineering projects.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
