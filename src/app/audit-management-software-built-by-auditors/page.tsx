import type { Metadata } from "next";
import AuditorsPageContent from "@/components/AuditorsPageContent";

export const metadata: Metadata = {
    title: "Audit Management Software Built by Auditors | iAudit Global",
    description:
        "ISO audit software built by certified ISO auditors to streamline internal audits, connect evidence, and ensure corrective actions actually solve problems.",
};

export default function AuditorsBuiltPage() {
    return <AuditorsPageContent />;
}
