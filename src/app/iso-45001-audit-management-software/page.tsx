import type { Metadata } from "next";
import StandardsPlaceholder from "@/components/StandardsPlaceholder";

export const metadata: Metadata = {
    title: "ISO 45001 Audit Management Software | iAudit Global",
    description:
        "Run ISO 45001 occupational health and safety audits with hazard tracking, evidence capture and corrective action closure.",
};

export default function Iso45001Page() {
    return (
        <StandardsPlaceholder
            title="ISO 45001 Software"
            description="Occupational health and safety audit software — page content coming soon."
        />
    );
}
