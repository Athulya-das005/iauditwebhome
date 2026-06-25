import type { Metadata } from "next";

const pageUrl = "https://www.iaudit.global/industries/mining-compliance-software";
const ogImage = "https://www.iaudit.global/assets/images/mining-software-og.jpg";

export const miningIndustryMetadata: Metadata = {
    title: "Mining Compliance Software for ISO Audits | iAudit",
    description:
        "Mining compliance software for ISO 9001, 14001 and 45001. Audit TSFs, grade control and safety across remote sites with clear evidence and follow-up.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Mining Compliance Software for ISO Audits | iAudit",
        description:
            "Audit TSFs, grade control and workforce safety with mining compliance software for ISO 9001, 14001 and 45001. Clear evidence, follow-up and control across remote sites.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Mining Compliance Software for ISO Audits | iAudit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mining Compliance Software for ISO Audits | iAudit",
        description:
            "Audit TSFs, grade control and workforce safety with mining compliance software for ISO 9001, 14001 and 45001. Clear evidence, follow-up and control across remote sites.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};
