import type { Metadata } from "next";
import TopIsoAuditSoftwarePageContent from "@/components/TopIsoAuditSoftwarePageContent";
import { topIsoAuditSoftwareSchema } from "@/data/topIsoAuditSoftwareSchema";

const pageUrl = "https://iaudit.global/top-iso-audit-management-software";
const ogImage = "https://iaudit.global/og-image.jpg";

export const metadata: Metadata = {
    title: {
        absolute: "Top ISO Audit Management Software | iAudit Global",
    },
    description:
        "Find ISO audit management software to plan audits, record evidence and track corrective actions across sites. Try iAudit Global free for 14 days.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Top ISO Audit Management Software | iAudit Global",
        description:
            "Find ISO audit management software to plan audits, record evidence and track corrective actions across sites. Try iAudit Global free for 14 days.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Top ISO Audit Management Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Top ISO Audit Management Software | iAudit Global",
        description:
            "Find ISO audit management software to plan audits, record evidence and track corrective actions across sites. Try iAudit Global free for 14 days.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function TopIsoAuditManagementSoftwarePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(topIsoAuditSoftwareSchema) }}
            />
            <TopIsoAuditSoftwarePageContent />
        </>
    );
}

