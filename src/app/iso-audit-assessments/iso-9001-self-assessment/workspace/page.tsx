import type { Metadata } from "next";
import SelfAssessmentWorkspace from "@/components/self-assessment/SelfAssessmentWorkspace";
import {
    ISO_9001_SELF_SESSION_KEY,
    iso9001SelfAssessmentClauses,
} from "@/data/iso-9001-self-assessment-clauses";

export const metadata: Metadata = {
    title: "ISO 9001:2026 Self Assessment",
    description: "Answer Yes or No across ISO 9001:2026 clauses 4 to 10 and email the report.",
    robots: { index: false, follow: false },
};

export default function Iso9001SelfAssessmentWorkspacePage() {
    return (
        <SelfAssessmentWorkspace
            sessionKey={ISO_9001_SELF_SESSION_KEY}
            setupPath="/iso-audit-assessments/iso-9001-self-assessment"
            clauses={iso9001SelfAssessmentClauses}
            subtitle="ISO 9001:2026 — Yes/No questions across clauses 4–10"
            backHref="/iso-audit-assessments/iso-9001-self-assessment"
        />
    );
}
