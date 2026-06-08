import type { Metadata } from "next";
import StandardsPlaceholder from "@/components/StandardsPlaceholder";

export const metadata: Metadata = {
    title: "ISO 14001 Audit Management Software | iAudit Global",
    description:
        "Manage ISO 14001 environmental management system audits across sites with structured programmes, evidence and continual improvement.",
};

export default function Iso14001Page() {
    return (
        <StandardsPlaceholder
            title="ISO 14001 Software"
            description="Environmental management system audit software — page content coming soon."
        />
    );
}
