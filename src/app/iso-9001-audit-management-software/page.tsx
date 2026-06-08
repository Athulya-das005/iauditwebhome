import type { Metadata } from "next";
import Iso9001Content from "@/components/Iso9001Content";

export const metadata: Metadata = {
    title: "ISO 9001 Audit Management Software | iAudit Global",
    description:
        "Stop managing ISO 9001 audits in spreadsheets. Purpose-built software with clause-level traceability and automated actions for quality management audits.",
};

export default function Iso9001Page() {
    return <Iso9001Content />;
}
