import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/healthcare-compliance-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const healthcareIndustryMetadata: Metadata = {
    title: "Healthcare Compliance Software for ISO Audits | iAudit Global",
    description:
        "Manage ISO 9001, 14001 and 45001 audits with healthcare compliance software built for clinical governance. Track safety, patient risks and actions in one system.",
    keywords: [
        "healthcare compliance software",
        "healthcare ISO audit software",
        "ISO 9001 healthcare audits",
        "ISO 14001 healthcare compliance",
        "ISO 45001 healthcare safety audits",
        "clinical governance audit software",
        "patient safety audit software",
        "hospital compliance software",
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
        title: "Healthcare Compliance Software for ISO Audits | iAudit Global",
        description:
            "Manage ISO 9001, 14001 and 45001 audits with healthcare compliance software built for clinical governance. Track safety, patient risks and actions in one system.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Healthcare Compliance Software for ISO Audits | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Healthcare Compliance Software for ISO Audits | iAudit Global",
        description:
            "Streamline healthcare ISO audits across clinical, operational and governance teams with structured checklists, evidence and action tracking.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
