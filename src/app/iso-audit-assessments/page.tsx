import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SELF_ASSESSMENT_PAGE_PATH, SELF_ASSESSMENT_PAGE_URL } from "@/data/selfAssessmentPageSchema";

// Original assessments hub page is temporarily disabled.
// Landing content now lives on /iso-14001-2026-self-assessment-tool.
/*
import AssessmentsLanding from "./AssessmentsLanding";

const pageUrl = "https://www.iaudit.global/iso-audit-assessments";
const title = "ISO Self Assessment & Gap Analysis | iAudit Global";
const description =
    "Run a free ISO self assessment or gap analysis. Identify strengths, gaps and next actions across ISO 9001, 14001 and 45001 in minutes.";

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

export default function IsoAuditAssessmentsPage() {
    return <AssessmentsLanding />;
}
*/

const pageUrl = SELF_ASSESSMENT_PAGE_URL;

export const metadata: Metadata = {
    title: "ISO 14001:2026 Self Assessment Tool | iAudit Global",
    description:
        "Use the free ISO 14001:2026 Self Assessment Tool to check your EMS readiness, identify areas for attention and plan your next steps.",
    robots: { index: false, follow: true },
    alternates: { canonical: pageUrl },
};

export default function IsoAuditAssessmentsPage() {
    redirect(SELF_ASSESSMENT_PAGE_PATH);
}
