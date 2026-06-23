import type { Metadata } from "next";
import AuditorsPageContent from "@/components/AuditorsPageContent";
import AuditorsPageJsonLd from "@/components/seo/AuditorsPageJsonLd";

const pageUrl = "https://www.iaudit.global/audit-management-software-built-by-auditors";
const ogImage = "https://www.iaudit.global/og-image.jpg";

export const metadata: Metadata = {
    title: "Audit Management software built by Auditors | iAudit Global",
    description:
        "Streamline ISO compliance with Audit Management software built by auditors. Connect evidence, track PDCA cycles and eliminate spreadsheets. Start a free trial.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Audit Management software built by Auditors | iAudit Global",
        description:
            "Streamline ISO compliance with Audit Management software built by auditors. Connect evidence, track PDCA cycles and eliminate spreadsheets. Start a free trial.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Audit Management software built by Auditors | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Audit Management software built by Auditors | iAudit Global",
        description:
            "Streamline ISO compliance with Audit Management software built by auditors. Connect evidence, track PDCA cycles and eliminate spreadsheets. Start a free trial.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function AuditorsBuiltPage() {
    return (
        <>
            <AuditorsPageJsonLd />
            <AuditorsPageContent />
        </>
    );
}
