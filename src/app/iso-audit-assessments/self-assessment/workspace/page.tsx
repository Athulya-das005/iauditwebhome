import type { Metadata } from "next";
import SelfAssessmentWorkspace from "@/components/self-assessment/SelfAssessmentWorkspace";

export const metadata: Metadata = {
    title: "Self Assessment Workspace | iAudit Global",
    description: "Evaluate your organisation’s compliance with ISO standards.",
    robots: { index: false, follow: false },
};

export default function SelfAssessmentWorkspacePage() {
    return <SelfAssessmentWorkspace />;
}
