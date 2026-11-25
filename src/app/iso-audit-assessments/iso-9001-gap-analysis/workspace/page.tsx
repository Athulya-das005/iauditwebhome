import type { Metadata } from "next";
import GapAnalysisWorkspace from "@/components/gap-analysis/GapAnalysisWorkspace";
import {
    ISO_9001_GAP_SESSION_KEY,
    ISO_9001_GAP_TOTAL_QUESTIONS,
    iso9001GapAnalysisClauses,
} from "@/data/iso-9001-gap-analysis-clauses";

export const metadata: Metadata = {
    title: "ISO 9001:2026 Gap Analysis",
    description: "Conduct a clause-by-clause ISO 9001:2026 gap analysis and email the report.",
    robots: { index: false, follow: false },
};

export default function Iso9001GapAnalysisWorkspacePage() {
    return (
        <GapAnalysisWorkspace
            clauses={iso9001GapAnalysisClauses}
            sessionKey={ISO_9001_GAP_SESSION_KEY}
            setupPath="/iso-audit-assessments/iso-9001-gap-analysis"
            title="ISO 9001:2026 Gap Analysis"
            resultNote={`Compliance % = (Total Comply ÷ ${ISO_9001_GAP_TOTAL_QUESTIONS}) × 100. Review maturity and certification readiness from your ISO 9001:2026 answers across clauses 4 to 10.`}
        />
    );
}
