import type { Metadata } from "next";
import GapAnalysisStart from "@/components/gap-analysis/GapAnalysisStart";
import { iso9001GapStandardOptions } from "@/data/assessment-form-options";
import { ISO_9001_GAP_SESSION_KEY, ISO_9001_GAP_TOTAL_QUESTIONS } from "@/data/iso-9001-gap-analysis-clauses";

const pageUrl = "https://iaudit.global/iso-audit-assessments/iso-9001-gap-analysis";
const title = "Start Your ISO 9001:2026 Gap Analysis";
const description =
    "Work through ISO 9001:2026 clauses, mark comply, opportunity for improvement or nonconformity, and email yourself the gap analysis report.";

const config = {
    assessmentType: "gap-analysis" as const,
    assessmentTitle: "ISO 9001:2026 Gap Analysis",
    pagePath: "/iso-audit-assessments/iso-9001-gap-analysis",
    workspacePath: "/iso-audit-assessments/iso-9001-gap-analysis/workspace",
    sessionKey: ISO_9001_GAP_SESSION_KEY,
    eyebrow: "ISO 9001:2026 · Comply / OFI / NC",
    title: "Start Your ISO 9001:2026 Gap Analysis",
    description: `Enter your details, then review ${ISO_9001_GAP_TOTAL_QUESTIONS} questions across clauses 4 to 10. Mark each one Comply, OFI or NC. When you finish, we email the report and download it on this device.`,
    cta: "Start free gap analysis",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "ISO 9001:2026 Gap Analysis",
    defaultIsoStandard: "ISO 9001:2026" as const,
    standardOptions: iso9001GapStandardOptions,
    openOnLoad: true,
    backHref: "/iso-9001-2026-gap-analysis",
    backLabel: "← Back to ISO 9001 gap analysis",
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

export default function Iso9001GapAnalysisPage() {
    return <GapAnalysisStart config={config} />;
}
