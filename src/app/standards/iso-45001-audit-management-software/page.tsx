import type { Metadata } from "next";
import Iso45001Content from "@/components/Iso45001Content";
import Iso45001PageJsonLd from "@/components/seo/Iso45001PageJsonLd";

const pageUrl = "https://www.iaudit.global/standards/iso-45001-audit-management-software";
const ogImage = "https://www.iaudit.global/assets/iso-45001-cover.jpg";

export const metadata: Metadata = {
    title: "ISO 45001 Audit Management Software | iAudit Global",
    description:
        "Manage safety risks and hazards with purpose-built ISO 45001 audit management software. Track corrective actions and try it free for 14 days.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "ISO 45001 Audit Management Software Built for Worker Safety",
        description:
            "Manage occupational health, safety risks, and proactive hazard identification in one secure, auditor-led PDCA platform.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "ISO 45001 Audit Management Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ISO 45001 Audit Management Software Built for Worker Safety",
        description:
            "Track hazards, capture evidence, manage corrective actions, and improve workplace safety with ISO 45001 audit software.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function Iso45001Page() {
    return (
        <>
            <Iso45001PageJsonLd />
            <Iso45001Content />
        </>
    );
}
