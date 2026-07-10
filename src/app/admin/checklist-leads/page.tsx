"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ChecklistLead } from "@/types/checklist-lead";

function formatDate(value: string) {
    try {
        return new Intl.DateTimeFormat("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
        }).format(new Date(value));
    } catch {
        return value;
    }
}

export default function ChecklistLeadsAdminPage() {
    const router = useRouter();
    const [leads, setLeads] = useState<ChecklistLead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadLeads() {
            try {
                const response = await fetch("/api/checklist-leads", { cache: "no-store" });
                const data = (await response.json()) as { leads?: ChecklistLead[]; error?: string };
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

    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.25rem 3rem" }}>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                }}
            >
                <div>
                    <p style={{ margin: 0, color: "#058c42", fontWeight: 700, fontSize: "0.85rem" }}>
                        iAudit Admin
                    </p>
                    <h1 style={{ margin: "0.25rem 0 0", fontSize: "1.9rem", color: "#111827" }}>
                        Checklist download leads
                    </h1>
                    <p style={{ margin: "0.5rem 0 0", color: "#6b7280", lineHeight: 1.5 }}>
                        These are people who requested a checklist. Email the file to them manually.
                    </p>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <Link
                        href="/admin"
                        style={{
                            padding: "0.75rem 1rem",
                            borderRadius: "8px",
                            border: "1px solid #d1d5db",
                            background: "#fff",
                            color: "#111827",
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Admin home
                    </Link>
                    <Link
                        href="/admin/hall-of-fame"
                        style={{
                            padding: "0.75rem 1rem",
                            borderRadius: "8px",
                            border: "1px solid #d1d5db",
                            background: "#fff",
                            color: "#111827",
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Hall of Fame
                    </Link>
                    <button
                        type="button"
                        onClick={handleLogout}
                        style={{
                            padding: "0.75rem 1rem",
                            borderRadius: "8px",
                            border: "1px solid #d1d5db",
                            background: "#fff",
                            color: "#111827",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Log out
                    </button>
                </div>
            </div>

            {loading ? <p style={{ color: "#6b7280" }}>Loading leads...</p> : null}
            {error ? <p style={{ color: "#b91c1c" }}>{error}</p> : null}

            {!loading && !error && leads.length === 0 ? (
                <div
                    style={{
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "16px",
                        padding: "1.5rem",
                        color: "#6b7280",
                    }}
                >
                    No checklist requests yet.
                </div>
            ) : null}

            <div style={{ display: "grid", gap: "0.85rem" }}>
                {leads.map((lead) => (
                    <article
                        key={lead.id}
                        style={{
                            background: "#fff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "14px",
                            padding: "1.15rem 1.25rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.5rem 1rem",
                                justifyContent: "space-between",
                                marginBottom: "0.75rem",
                            }}
                        >
                            <strong style={{ color: "#111827", fontSize: "1.05rem" }}>
                                {lead.firstName} {lead.lastName}
                            </strong>
                            <span style={{ color: "#6b7280", fontSize: "0.92rem" }}>
                                {formatDate(lead.createdAt)}
                            </span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gap: "0.35rem",
                                color: "#374151",
                                fontSize: "0.95rem",
                                lineHeight: 1.5,
                            }}
                        >
                            <div>
                                <strong>Email:</strong> {lead.email}
                            </div>
                            <div>
                                <strong>Phone:</strong> {lead.phone}
                            </div>
                            <div>
                                <strong>Company:</strong> {lead.company}
                            </div>
                            {lead.city ? (
                                <div>
                                    <strong>City:</strong> {lead.city}
                                </div>
                            ) : null}
                            <div>
                                <strong>Checklist:</strong> {lead.checklistName}
                            </div>
                            <div>
                                <strong>Industry:</strong> {lead.industryTitle || lead.industrySlug}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
