import type { Metadata } from "next";
import SelfAssessmentChecklistViewer from "@/components/self-assessment/SelfAssessmentChecklistViewer";

const pageUrl = "https://www.iaudit.global/iso-audit-assessments/self-assessment/checklist";
const title = "ISO 14001:2026 Self-Assessment Checklist | iAudit Global";
const description =
    "Interactive ISO 14001:2026 self-assessment checklist with climate and 2026 DIS alignment. Tick Yes/No, see your live score and maturity guidance before starting the full assessment.";

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

export default function SelfAssessmentChecklistPage() {
    return <SelfAssessmentChecklistViewer />;
}
