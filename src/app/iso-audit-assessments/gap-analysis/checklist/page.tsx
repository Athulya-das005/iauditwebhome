import type { Metadata } from "next";
import GapAnalysisChecklistViewer from "@/components/gap-analysis/GapAnalysisChecklistViewer";

const pageUrl = "https://www.iaudit.global/iso-audit-assessments/gap-analysis/checklist";
const title = "ISO 14001:2026 Gap Analysis Checklist | iAudit Global";
const description =
    "Interactive ISO 14001:2026 Gap Analysis Checklist with 61 questions. Mark Comply, OFI or NC, see compliance %, maturity and certification readiness before starting the full assessment.";

export const metadata: Metadata = {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "website",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
    },
};

export default function GapAnalysisChecklistPage() {
    return <GapAnalysisChecklistViewer />;
}
