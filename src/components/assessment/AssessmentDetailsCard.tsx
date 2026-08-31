import type { GapAnalysisSession } from "@/types/gap-analysis-session";

export default function AssessmentDetailsCard({
    session,
    auditDate,
}: {
    session: GapAnalysisSession;
    auditDate?: string;
}) {
    const details = [
        ["Name", `${session.firstName} ${session.lastName}`.trim()],
        ["Email", session.email],
        ["Organisation", session.organisation],
        ["Industry", session.industry],
        ["Organisation size", session.organisationSize],
        ["Department", session.department],
        ["ISO standard", session.isoStandard],
        ["Audit scope", session.auditScope],
        ["Assessment date", auditDate ?? new Date().toLocaleDateString("en-GB")],
    ];

    return (
        <section
            style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "1rem",
                padding: "1.1rem 1.25rem",
                marginBottom: "1rem",
            }}
        >
            <h2 style={{ margin: "0 0 0.85rem", fontSize: "1.05rem", color: "#166534" }}>Assessment details</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.65rem 1rem",
                }}
            >
                {details.map(([label, value]) => (
                    <div key={label} style={{ minWidth: 0 }}>
                        <div style={{ color: "#4b5563", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            {label}
                        </div>
                        <div style={{ color: "#111827", fontSize: "0.9rem", lineHeight: 1.45, overflowWrap: "anywhere" }}>
                            {value || "—"}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
