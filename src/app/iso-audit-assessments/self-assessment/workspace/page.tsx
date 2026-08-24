import type { Metadata } from "next";
import SelfAssessmentWorkspace from "@/components/self-assessment/SelfAssessmentWorkspace";

export const metadata: Metadata = {
    title: "Self Assessment Workspace | iAudit Global",
    description: "Work through the ISO 14001:2026 self assessment — 65 Yes/No questions across clauses 4–10.",
    robots: { index: false, follow: false },
};

export default function SelfAssessmentWorkspacePage() {
    return <SelfAssessmentWorkspace />;
}
