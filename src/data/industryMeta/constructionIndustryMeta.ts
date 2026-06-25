import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/construction-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const constructionIndustryMetadata: Metadata = {
    title: "Construction Audit Software for ISO Compliance | iAudit Global",
    description:
        "Construction audit software for ISO 9001, 14001, 45001 and 27001. Replace spreadsheets with structured site audits, ITP tracking, NCR management and multi-site compliance visibility.",
    keywords: [
        "construction audit software",
        "ISO construction audits",
        "ISO 9001 construction audit software",
        "ISO 14001 construction audit software",
        "ISO 45001 construction audit software",
        "construction compliance software",
        "inspection and test plan audit software",
        "NCR tracking construction",
        "construction quality audit software",
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
        title: "Construction Audit Software for ISO Compliance | iAudit Global",
        description:
            "Run ISO 9001, 14001, 45001 and 27001 construction audits without spreadsheets. Manage ITPs, NCRs and site compliance across every project.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Construction Audit Software for ISO Compliance | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Construction Audit Software for ISO Compliance | iAudit Global",
        description:
            "Run ISO construction audits with structured checklists, ITP tracking and NCR management across every project site.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
