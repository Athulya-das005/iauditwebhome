import type { Metadata } from "next";
import GapAnalysisStart from "@/components/gap-analysis/GapAnalysisStart";
import GapAnalysisLanding from "@/components/gap-analysis/GapAnalysisLanding";

const pageUrl = "https://www.iaudit.global/iso-audit-assessments/gap-analysis";
const title = "ISO 14001:2026 Gap Analysis | iAudit Global";
const description =
    "Run a clause-based ISO 14001:2026 Gap Analysis. Mark Comply, OFI or NC across 61 questions and capture evidence before your next audit.";

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

export default function GapAnalysisPage() {
    return <GapAnalysisStart Landing={GapAnalysisLanding} />;
}
