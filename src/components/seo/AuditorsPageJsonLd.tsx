import { auditorsPageSchema } from "@/data/auditorsPageSchema";

export default function AuditorsPageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(auditorsPageSchema) }}
        />
    );
}
