"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { AssessmentLead } from "@/types/assessment-lead";

function formatDate(value: string) {
    try {
        return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
    } catch {
        return value;
    }
}

function isEmailSent(lead: AssessmentLead) {
    return Boolean(lead.emailSentAt);
}

function typeLabel(type: AssessmentLead["assessmentType"]) {
    return type === "gap-analysis" ? "Gap analysis" : "Self assessment";
}

export default function AssessmentLeadsAdminPage() {
    const router = useRouter();
    const [leads, setLeads] = useState<AssessmentLead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    useEffect(() => {
        async function loadLeads() {
            try {
                const response = await fetch("/api/assessment-leads", { cache: "no-store" });
                const data = (await response.json()) as { leads?: AssessmentLead[]; error?: string };
                if (!response.ok) {
                    setError(data.error ?? "Unable to load leads.");
                    return;
                }
                setLeads(data.leads ?? []);
            } catch {
                setError("Unable to load leads.");
            } finally {
                setLoading(false);
            }
        }
        loadLeads();
    }, []);

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.replace("/admin/login");
        router.refresh();
    }

    async function handleCopyEmail(lead: AssessmentLead) {
        try {
            await navigator.clipboard.writeText(lead.email);
            setCopiedId(lead.id);
            window.setTimeout(() => setCopiedId((current) => (current === lead.id ? null : current)), 1800);
        } catch {
            setError("Unable to copy email. Please copy it manually.");
        }
    }

    async function handleToggleEmailSent(lead: AssessmentLead) {
        const nextSent = !isEmailSent(lead);
        setUpdatingId(lead.id);
        setError("");
        try {
            const response = await fetch("/api/assessment-leads", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: lead.id, emailSent: nextSent }),
            });
            const data = (await response.json()) as { lead?: AssessmentLead; error?: string };
            if (!response.ok) {
                setError(data.error ?? "Unable to update email status.");
                return;
            }
            if (data.lead) {
                setLeads((current) => current.map((item) => (item.id === lead.id ? data.lead! : item)));
            }
        } catch {
            setError("Unable to update email status.");
        } finally {
            setUpdatingId(null);
        }
    }

    async function handleDelete(lead: AssessmentLead) {
        if (!window.confirm(`Delete lead for ${lead.fullName} (${lead.email})?`)) return;
        setDeletingId(lead.id);
        setError("");
        try {
            const response = await fetch("/api/assessment-leads", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: lead.id }),
            });
            const data = (await response.json()) as { error?: string };
            if (!response.ok) {
                setError(data.error ?? "Unable to delete lead.");
                return;
            }
            setLeads((current) => current.filter((item) => item.id !== lead.id));
        } catch {
            setError("Unable to delete lead.");
        } finally {
            setDeletingId(null);
        }
    }

    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.25rem 3rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div>
                    <p style={{ margin: 0, color: "#058c42", fontWeight: 700, fontSize: "0.85rem" }}>iAudit Admin</p>
                    <h1 style={{ margin: "0.25rem 0 0", fontSize: "1.9rem", color: "#111827" }}>Assessment report leads</h1>
                    <p style={{ margin: "0.5rem 0 0", color: "#6b7280", lineHeight: 1.5 }}>
                        People who requested a self assessment or gap analysis report. Email the report manually, then mark as emailed.
                    </p>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <Link href="/admin" style={navButtonStyle}>Admin home</Link>
                    <Link href="/admin/checklist-leads" style={navButtonStyle}>Checklist leads</Link>
                    <button type="button" onClick={handleLogout} style={navButtonAsButtonStyle}>Log out</button>
                </div>
            </div>

            {loading ? <p style={{ color: "#6b7280" }}>Loading leads...</p> : null}
            {error ? <p style={{ color: "#b91c1c" }}>{error}</p> : null}

            {!loading && !error && leads.length === 0 ? (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1.5rem", color: "#6b7280" }}>
                    No assessment report requests yet.
                </div>
            ) : null}

            <div style={{ display: "grid", gap: "0.85rem" }}>
                {leads.map((lead) => {
                    const sent = isEmailSent(lead);
                    return (
                        <article
                            key={lead.id}
                            style={{
                                background: sent ? "#f8faf8" : "#fff",
                                border: sent ? "1px solid #bbf7d0" : "1px solid #e5e7eb",
                                borderRadius: "14px",
                                padding: "1.15rem 1.25rem",
                            }}
                        >
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1rem", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                                <span style={{ display: "inline-flex", padding: "0.25rem 0.65rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700, background: sent ? "#dcfce7" : "#fef3c7", color: sent ? "#166534" : "#92400e" }}>
                                    {sent ? "Email sent" : "Pending"}
                                </span>
                                <span style={{ color: "#6b7280", fontSize: "0.92rem" }}>{formatDate(lead.createdAt)}</span>
                            </div>
                            <div style={{ display: "grid", gap: "0.5rem", color: "#374151", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                <div><strong>Full name:</strong> {lead.fullName || "—"}</div>
                                <div><strong>Email:</strong> {lead.email}</div>
                                {lead.company ? <div><strong>Company:</strong> {lead.company}</div> : null}
                                {lead.industry ? <div><strong>Industry:</strong> {lead.industry}</div> : null}
                                {lead.organisationSize ? <div><strong>Employees:</strong> {lead.organisationSize}</div> : null}
                                {lead.department ? <div><strong>Department:</strong> {lead.department}</div> : null}
                                {lead.existingCustomer ? <div><strong>Existing iAudit customer:</strong> {lead.existingCustomer}</div> : null}
                                {lead.isoStandard ? <div><strong>ISO standard:</strong> {lead.isoStandard}</div> : null}
                                {lead.auditScope ? <div><strong>Scope of audit:</strong> {lead.auditScope}</div> : null}
                                {typeof lead.emailOptIn === "boolean" ? <div><strong>Email updates:</strong> {lead.emailOptIn ? "Opted in" : "No"}</div> : null}
                                <div><strong>Type:</strong> {typeLabel(lead.assessmentType)}</div>
                                <div><strong>Report:</strong> {lead.assessmentTitle}</div>
                                <div><strong>Page:</strong> {lead.pagePath || "—"}</div>
                                {sent && lead.emailSentAt ? <div><strong>Sent on:</strong> {formatDate(lead.emailSentAt)}</div> : null}
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "1rem", paddingTop: "0.9rem", borderTop: "1px solid #f3f4f6" }}>
                                <button type="button" onClick={() => handleCopyEmail(lead)} style={copyButtonStyle}>
                                    {copiedId === lead.id ? "Copied!" : "Copy email"}
                                </button>
                                <button type="button" onClick={() => handleToggleEmailSent(lead)} disabled={updatingId === lead.id} style={sent ? undoSentButtonStyle : markSentButtonStyle}>
                                    {updatingId === lead.id ? "Updating..." : sent ? "Mark as not sent" : "Mark as emailed"}
                                </button>
                                <button type="button" onClick={() => handleDelete(lead)} disabled={deletingId === lead.id} style={deleteButtonStyle}>
                                    {deletingId === lead.id ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

const navButtonStyle: CSSProperties = {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    background: "#fff",
    color: "#111827",
    fontWeight: 600,
    textDecoration: "none",
};
const navButtonAsButtonStyle: CSSProperties = { ...navButtonStyle, cursor: "pointer" };
const copyButtonStyle: CSSProperties = { padding: "0.55rem 1rem", borderRadius: "8px", border: "1px solid #058c42", background: "#058c42", color: "#fff", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" };
const markSentButtonStyle: CSSProperties = { padding: "0.55rem 1rem", borderRadius: "8px", border: "1px solid #2563eb", background: "#fff", color: "#2563eb", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" };
const undoSentButtonStyle: CSSProperties = { padding: "0.55rem 1rem", borderRadius: "8px", border: "1px solid #9ca3af", background: "#fff", color: "#4b5563", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" };
const deleteButtonStyle: CSSProperties = { padding: "0.55rem 1rem", borderRadius: "8px", border: "1px solid #dc2626", background: "#fff", color: "#dc2626", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" };
