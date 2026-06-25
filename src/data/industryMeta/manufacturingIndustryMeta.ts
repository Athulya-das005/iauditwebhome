import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/manufacturing-iso-audit-software";
const ogImage = "https://www.iaudit.global/iaudit-logo-new.png";

export const manufacturingIndustryMetadata: Metadata = {
    title: "Manufacturing Audit Software for ISO Compliance | iAudit Global",
    description:
        "Streamline production audits with manufacturing audit software. Manage ISO 9001, 14001 & 45001 checklists, evidence and actions across every site.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Manufacturing Audit Software for ISO Compliance | iAudit Global",
        description:
            "Manage production audits, ISO checklists, evidence and corrective actions across every manufacturing site with one platform.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Manufacturing Audit Software for ISO Compliance | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Manufacturing Audit Software for ISO Compliance | iAudit Global",
        description:
            "Streamline ISO 9001, 14001 & 45001 manufacturing audits with structured checklists, evidence capture and action tracking.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
