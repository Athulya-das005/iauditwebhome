import type { Metadata } from "next";
import PdcaCycleContent from "@/components/PdcaCycleContent";

export const metadata: Metadata = {
    title: "PDCA Cycle Audit Software for ISO Audits | iAudit Global",
    description:
        "Plan, run, report and close audits in one connected PDCA workflow with clear evidence and accountability. Start your 14-day free trial.",
};

export default function PdcaCyclePage() {
    return <PdcaCycleContent />;
}
