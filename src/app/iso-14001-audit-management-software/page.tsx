import type { Metadata } from "next";
import Iso14001Content from "@/components/Iso14001Content";

export const metadata: Metadata = {
    title: "ISO 14001 Audit Management Software | iAudit Global",
    description:
        "Stop managing ISO 14001 audits in spreadsheets. Purpose-built software with clause-level traceability and automated actions for environmental management audits.",
};

export default function Iso14001Page() {
    return <Iso14001Content />;
}
