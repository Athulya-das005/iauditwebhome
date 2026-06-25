import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/aerospace-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const aerospaceIndustryMetadata: Metadata = {
    title: "Aerospace ISO Audit Software for Smarter Internal Audits",
    description:
        "Aerospace ISO audit software for ISO 9001, 14001 and 45001. Plan, track and report audits with better control and clearer oversight.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Aerospace ISO Audit Software for Smarter Internal Audits",
        description:
            "Aerospace ISO audit software for ISO 9001, 14001 and 45001. Plan, track and report audits with better control and clearer oversight.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Aerospace ISO Audit Software for Smarter Internal Audits",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aerospace ISO Audit Software for Smarter Internal Audits",
        description:
            "Aerospace ISO audit software for ISO 9001, 14001 and 45001. Plan, track and report audits with better control and clearer oversight.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
