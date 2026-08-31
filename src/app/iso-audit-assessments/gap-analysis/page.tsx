import type { Metadata } from "next";
import GapAnalysisStart from "@/components/gap-analysis/GapAnalysisStart";
import GapAnalysisLanding from "@/components/gap-analysis/GapAnalysisLanding";
import { GAP_ANALYSIS_PAGE_URL, gapAnalysisPageSchema } from "@/data/gapAnalysisPageSchema";

const title = "Free ISO 14001:2026 Gap Analysis | iAudit Global";
const description =
    "Complete a free ISO 14001:2026 Gap Analysis to identify EMS gaps, assess transition readiness and plan the actions needed.";

export const metadata: Metadata = {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: GAP_ANALYSIS_PAGE_URL },
    openGraph: {
        type: "website",
        title,
        description,
        url: GAP_ANALYSIS_PAGE_URL,
        siteName: "iAudit Global",
        locale: "en_GB",
    },
};

export default function GapAnalysisPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(gapAnalysisPageSchema) }}
            />
            <GapAnalysisStart Landing={GapAnalysisLanding} />
        </>
    );
}
