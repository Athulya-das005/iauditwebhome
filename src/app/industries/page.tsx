import { notFound } from "next/navigation";

// Industries directory is offline until ready to launch.
// Uncomment the block below (and remove notFound) when the page is finished.
/*
import type { Metadata } from "next";
import IndustriesDirectory from "@/components/IndustriesDirectory";
import IndustriesPageJsonLd from "@/components/seo/IndustriesPageJsonLd";

const pageUrl = "https://www.iaudit.global/industries";
const ogImage = "https://www.iaudit.global/og-industries.jpg";

export const metadata: Metadata = {
    title: "Industry-Specific ISO Audit Software | iAudit Global",
    description:
        "Manage ISO 9001, 14001, and 45001 audits with software built for your industry. Tailored for Manufacturing, Construction, Healthcare, and more.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Industry-Specific ISO Audit Software | iAudit Global",
        description:
            "Run ISO audits across any industry with structured workflows, evidence capture, dashboards, and corrective actions built around PDCA.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "Industry-Specific ISO Audit Software | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Industry-Specific ISO Audit Software | iAudit Global",
        description:
            "Manage ISO 9001, 14001, and 45001 audits across industries with a connected PDCA-driven platform.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function IndustriesPage() {
    return (
        <>
            <IndustriesPageJsonLd />
            <IndustriesDirectory />
        </>
    );
}
*/

export default function IndustriesPage() {
    notFound();
}
