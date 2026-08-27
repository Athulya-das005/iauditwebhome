import type { Metadata } from "next";
import GapAnalysisStart, { selfAssessmentStartConfig } from "@/components/gap-analysis/GapAnalysisStart";
import SelfAssessmentLanding from "@/components/self-assessment/SelfAssessmentLanding";
import SelfAssessmentPageJsonLd from "@/components/seo/SelfAssessmentPageJsonLd";
import { SELF_ASSESSMENT_PAGE_URL } from "@/data/selfAssessmentPageSchema";

const title = "ISO 14001:2026 Self Assessment Tool | iAudit Global";
const description =
    "Use the free ISO 14001:2026 Self Assessment Tool to check your EMS readiness, identify areas for attention and plan your next steps.";

export const metadata: Metadata = {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: SELF_ASSESSMENT_PAGE_URL },
    openGraph: {
        type: "website",
        title,
        description,
        url: SELF_ASSESSMENT_PAGE_URL,
        siteName: "iAudit Global",
        locale: "en_GB",
    },
};

export default function SelfAssessmentToolPage() {
    return (
        <>
            <SelfAssessmentPageJsonLd />
            <GapAnalysisStart config={selfAssessmentStartConfig} Landing={SelfAssessmentLanding} />
        </>
    );
}
