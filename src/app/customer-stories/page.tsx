import { notFound } from "next/navigation";

// Customer Stories page is incomplete — keep offline until ready to launch.
// Uncomment the block below (and remove notFound) when the page is finished.
/*
import type { Metadata } from "next";
import CustomerStoriesPageContent from "@/components/customer-stories/CustomerStoriesPageContent";

const pageUrl = "https://www.iaudit.global/customer-stories";

export const metadata: Metadata = {
    title: "Customer Stories | Proven Audit Control Across Industries | iAudit Global",
    description:
        "See how quality, safety and compliance teams use iAudit to centralise audit history, reduce repeat findings and strengthen multi-site oversight across 18+ sectors.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Customer Stories | Proven Audit Control Across Industries | iAudit Global",
        description:
            "See how quality, safety and compliance teams use iAudit to centralise audit history, reduce repeat findings and strengthen multi-site oversight.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "website",
    },
};

export default function CustomerStoriesPage() {
    return <CustomerStoriesPageContent />;
}
*/

export default function CustomerStoriesPage() {
    notFound();
}
