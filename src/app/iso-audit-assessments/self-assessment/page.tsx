import type { Metadata } from "next";
import GapAnalysisStart, { selfAssessmentStartConfig } from "@/components/gap-analysis/GapAnalysisStart";
import SelfAssessmentLanding from "@/components/self-assessment/SelfAssessmentLanding";

const pageUrl = "https://www.iaudit.global/iso-audit-assessments/self-assessment";
const title = "ISO 14001:2026 Self Assessment | iAudit Global";
const description =
    "Run a clause-based ISO 14001:2026 Self Assessment. Identify EMS compliance gaps and build a structured improvement plan before your next audit.";

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

export default function SelfAssessmentPage() {
    return <GapAnalysisStart config={selfAssessmentStartConfig} Landing={SelfAssessmentLanding} />;
}
