import type { Metadata } from "next";
import PdcaCycleContent from "@/components/PdcaCycleContent";
import PdcaPageJsonLd from "@/components/seo/PdcaPageJsonLd";

const pageUrl = "https://www.iaudit.global/pdca-cycle-audit-software";
const ogImage = "https://www.iaudit.global/og-image.jpg";

export const metadata: Metadata = {
    title: "PDCA Cycle Audit Software for ISO Audits | iAudit Global",
    description:
        "PDCA cycle audit software for ISO audits. Plan, Do, Check, Act in one workflow with evidence, dashboards and corrective actions. Start a 14-day trial.",
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "PDCA Cycle Audit Software for ISO Audits | iAudit Global",
        description:
            "Plan, run, report and close audits in one connected PDCA workflow with clear evidence and accountability. Start your 14-day free trial.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "PDCA Cycle Audit Software for ISO Audits | iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PDCA Cycle Audit Software for ISO Audits | iAudit Global",
        description:
            "Plan, Do, Check, Act in one workflow with evidence, dashboards and corrective actions. Start a 14-day trial.",
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function PdcaCyclePage() {
    return (
        <>
            <PdcaPageJsonLd />
            <PdcaCycleContent />
        </>
    );
}
