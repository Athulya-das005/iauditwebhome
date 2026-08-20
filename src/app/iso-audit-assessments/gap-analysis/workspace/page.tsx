import type { Metadata } from "next";
import GapAnalysisWorkspace from "@/components/gap-analysis/GapAnalysisWorkspace";

export const metadata: Metadata = {
    title: "Gap Analysis Workspace | iAudit Global",
    description: "Conduct detailed compliance checks against ISO standards.",
    robots: { index: false, follow: false },
};

export default function GapAnalysisWorkspacePage() {
    return <GapAnalysisWorkspace />;
}
