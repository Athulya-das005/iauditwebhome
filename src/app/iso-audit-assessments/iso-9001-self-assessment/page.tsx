import type { Metadata } from "next";
import GapAnalysisStart from "@/components/gap-analysis/GapAnalysisStart";
import { iso9001GapStandardOptions } from "@/data/assessment-form-options";
import { ISO_9001_SELF_SESSION_KEY, ISO_9001_SELF_TOTAL_QUESTIONS } from "@/data/iso-9001-self-assessment-clauses";

const pageUrl = "https://iaudit.global/iso-audit-assessments/iso-9001-self-assessment";
const title = "Start Your ISO 9001:2026 Self Assessment";
const description =
    "Answer Yes or No across ISO 9001:2026 clauses 4 to 10, then email yourself the self-assessment report.";

const config = {
    assessmentType: "self-assessment" as const,
    assessmentTitle: "ISO 9001:2026 Self Assessment",
    pagePath: "/iso-audit-assessments/iso-9001-self-assessment",
    workspacePath: "/iso-audit-assessments/iso-9001-self-assessment/workspace",
    sessionKey: ISO_9001_SELF_SESSION_KEY,
    eyebrow: "ISO 9001:2026 · Yes / No",
    title: "Start Your ISO 9001:2026 Self Assessment",
    description: `Enter your details, then answer ${ISO_9001_SELF_TOTAL_QUESTIONS} Yes or No questions across clauses 4 to 10. When you finish, we email the report and download it on this device.`,
    cta: "Start free self-assessment",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "ISO 9001:2026 Self Assessment",
    defaultIsoStandard: "ISO 9001:2026" as const,
    standardOptions: iso9001GapStandardOptions,
    openOnLoad: true,
    backHref: "/iso-9001-2026-self-assessment-tool",
    backLabel: "← Back to ISO 9001 self-assessment",
};

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

export default function Iso9001SelfAssessmentPage() {
    return <GapAnalysisStart config={config} />;
}
