import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/health-and-safety-iso-audit-software";
const ogImage = "https://www.iaudit.global/images/health-safety-iso-audit-software.jpg";

export const healthAndSafetyIndustryMetadata: Metadata = {
    title: "Health & Safety ISO Audit Software for Better Control",
    description:
        "Health & Safety ISO audit software for ISO 45001, 14001 and 9001. Plan, track and improve audits across sites, teams and contractors.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Health & Safety ISO Audit Software for Better Control",
        description:
            "Health & Safety ISO audit software for ISO 45001, 14001 and 9001. Plan, track and improve audits across sites, teams and contractors.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: "Health & Safety ISO Audit Software for Better Control",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Health & Safety ISO Audit Software for Better Control",
        description:
            "Health & Safety ISO audit software for ISO 45001, 14001 and 9001. Plan, track and improve audits across sites, teams and contractors.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
