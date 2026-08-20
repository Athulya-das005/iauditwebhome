import type { Metadata } from "next";
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
