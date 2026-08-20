import type { Metadata } from "next";
import GapAnalysisStart, { selfAssessmentStartConfig } from "@/components/gap-analysis/GapAnalysisStart";
import SelfAssessmentLanding from "@/components/self-assessment/SelfAssessmentLanding";

const pageUrl = "https://www.iaudit.global/iso-audit-assessments/self-assessment";
const title = "ISO Self Assessment Tool for ISO 9001, 14001 and 45001";
const description =
    "Run a clause-based ISO Self Assessment across ISO 9001, 14001 and 45001. Identify compliance gaps and build a structured improvement plan before your next audit.";

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
