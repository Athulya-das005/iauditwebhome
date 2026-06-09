import type { Metadata } from "next";
import Iso45001Content from "@/components/Iso45001Content";

export const metadata: Metadata = {
    title: "ISO 45001 Audit Management Software | iAudit Global",
    description:
        "Run ISO 45001 occupational health and safety audits with hazard tracking, evidence capture and corrective action closure.",
};

export default function Iso45001Page() {
    return <Iso45001Content />;
}
