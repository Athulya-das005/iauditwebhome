import type { Metadata } from "next";
import Iso14001Content from "@/components/Iso14001Content";
import Iso14001PageJsonLd from "@/components/seo/Iso14001PageJsonLd";

const pageUrl = "https://www.iaudit.global/standards/iso-14001-audit-management-software";
const ogImage = "https://www.iaudit.global/assets/iso-14001-cover.jpg";

export const metadata: Metadata = {
    title: "ISO 14001 Audit Management Software | iAudit Global",
    description:
        "ISO 14001 audit management software for evidence capture, PDCA actions, dashboards and ISO 14001:2026 transition tools. Start free today.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "ISO 14001 Audit Management Software Built for Environmental Performance",
        description:
            "Move beyond paperwork. Manage environmental aspects, impacts, and compliance audits with a structured PDCA workflow.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "ISO 14001 Audit Management Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ISO 14001 Audit Management Software Built for Environmental Performance",
        description:
            "Manage environmental audits, capture evidence, and close PDCA actions with ISO 14001:2026-ready tools.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function Iso14001Page() {
    return (
        <>
            <Iso14001PageJsonLd />
            <Iso14001Content />
        </>
    );
}
