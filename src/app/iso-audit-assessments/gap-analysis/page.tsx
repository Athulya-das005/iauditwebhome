import type { Metadata } from "next";
import GapAnalysisStart from "@/components/gap-analysis/GapAnalysisStart";

export const metadata: Metadata = {
    title: "ISO Gap Analysis | iAudit Global",
    description: "Start your free ISO gap analysis against ISO 9001, 14001 or 45001. Record findings, evidence and actions clause by clause.",
    robots: { index: false, follow: true },
};

export default function GapAnalysisPage() {
    return <GapAnalysisStart />;
}
