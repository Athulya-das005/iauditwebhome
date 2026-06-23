import type { Metadata } from "next";
import Iso9001Content from "@/components/Iso9001Content";
import Iso9001PageJsonLd from "@/components/seo/Iso9001PageJsonLd";

const pageUrl = "https://www.iaudit.global/standards/iso-9001-audit-management-software";
const ogImage = "https://www.iaudit.global/assets/iso-9001-cover.jpg";

export const metadata: Metadata = {
    title: "ISO 9001 Audit Management Software | iAudit Global",
    description:
        "ISO 9001 audit management software for risk-based planning, clause traceability, evidence capture, CAPA tracking and fast reporting. Try free.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "ISO 9001 Software Built for Quality Management Audits",
        description:
            "Stop managing ISO 9001 audits in spreadsheets. Use purpose-built software with clause-level traceability and automated actions.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "ISO 9001 Audit Management Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ISO 9001 Software Built for Quality Management Audits",
        description:
            "Plan risk-based audits, track CAPA, capture evidence, and generate reports instantly with ISO 9001 audit software.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function Iso9001Page() {
    return (
        <>
            <Iso9001PageJsonLd />
            <Iso9001Content />
        </>
    );
}
