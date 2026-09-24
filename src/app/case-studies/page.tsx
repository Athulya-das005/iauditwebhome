import type { Metadata } from "next";
import CustomerStoriesPageContent from "@/components/customer-stories/CustomerStoriesPageContent";

const pageUrl = "https://www.iaudit.global/case-studies";

export const metadata: Metadata = {
    title: "Case Studies | Proven Audit Control Across Industries | iAudit Global",
    description:
        "See how quality, safety and compliance teams use iAudit to centralise audit history, reduce repeat findings and strengthen multi-site oversight across 18+ sectors.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Case Studies | Proven Audit Control Across Industries | iAudit Global",
        description:
            "See how quality, safety and compliance teams use iAudit to centralise audit history, reduce repeat findings and strengthen multi-site oversight.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CaseStudiesPage() {
    return <CustomerStoriesPageContent />;
}
