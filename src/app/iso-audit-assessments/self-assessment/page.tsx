import type { Metadata } from "next";
import GapAnalysisStart, { selfAssessmentStartConfig } from "@/components/gap-analysis/GapAnalysisStart";

export const metadata: Metadata = {
    title: "ISO Self Assessment | iAudit Global",
    description: "Start your free ISO self assessment against ISO 9001, 14001 or 45001. Answer Yes or No clause by clause.",
    robots: { index: false, follow: true },
};

export default function SelfAssessmentPage() {
    return <GapAnalysisStart config={selfAssessmentStartConfig} />;
}
