"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { HallOfFameResearcher } from "@/types/hall-of-fame";

type FormState = {
    id?: string;
    name: string;
    linkedIn: string;
    reportCount: string;
    flagIcon: string;
};

const emptyForm: FormState = {
    name: "",
    linkedIn: "",
    reportCount: "1",
    flagIcon: "",
};

function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 48);
}

function createId(name: string, existing: HallOfFameResearcher[]) {
    const base = slugify(name) || "researcher";
    let candidate = base;
    let counter = 2;

    while (existing.some((item) => item.id === candidate)) {
        candidate = `${base}-${counter}`;
        counter += 1;
    }

    return candidate;
}

export default function HallOfFameAdminPage() {
    const router = useRouter();
    const [researchers, setResearchers] = useState<HallOfFameResearcher[]>([]);
    const [form, setForm] = useState<FormState>(emptyForm);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [publishing, setPublishing] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    const sortedResearchers = useMemo(
        () => [...researchers].sort((a, b) => b.reportCount - a.reportCount),
        [researchers]
    );

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        async function loadResearchers() {
            try {
                const response = await fetch("/api/hall-of-fame", { cache: "no-store" });
                const data = (await response.json()) as { researchers?: HallOfFameResearcher[] };
                setResearchers(data.researchers ?? []);
            } catch {
                setError("Unable to load Hall of Fame entries.");
            } finally {
                setLoading(false);
            }
        }

        loadResearchers();
    }, []);

    function resetForm() {
        setForm(emptyForm);
        setEditingId(null);
    }

    function handleEdit(researcher: HallOfFameResearcher) {
        setEditingId(researcher.id);
        setForm({
            id: researcher.id,
            name: researcher.name,
            linkedIn: researcher.linkedIn,
            reportCount: String(researcher.reportCount),
            flagIcon: researcher.flagIcon ?? "",
        });
        setMessage("");
        setError("");
    }

    function handleDelete(id: string) {
        setResearchers((current) => current.filter((item) => item.id !== id));
        if (editingId === id) resetForm();
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setError("");
        setMessage("");

        const reportCount = Number(form.reportCount);
        if (!form.name.trim() || !form.linkedIn.trim()) {
            setError("Name and LinkedIn URL are required.");
            return;
        }
        if (!Number.isFinite(reportCount) || reportCount < 1) {
            setError("Report count must be at least 1.");
            return;
        }

        const payload: HallOfFameResearcher = {
            id: editingId ?? createId(form.name, researchers),
            name: form.name.trim(),
            linkedIn: form.linkedIn.trim(),
            reportCount,
            ...(form.flagIcon.trim() ? { flagIcon: form.flagIcon.trim() } : {}),
        };

        setResearchers((current) => {
            const withoutCurrent = current.filter((item) => item.id !== payload.id);
            return [...withoutCurrent, payload];
        });
        resetForm();
        setMessage("Entry saved locally. Click Publish to push live.");
    }

    async function handlePublish() {
        setPublishing(true);
        setError("");
        setMessage("");

        try {
            const response = await fetch("/api/hall-of-fame", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    researchers,
                    message: "Update Hall of Fame researchers via admin panel.",
                }),
            });

            const data = (await response.json()) as {
                error?: string;
                publishedToGitHub?: boolean;
            };

            if (!response.ok) {
                setError(data.error ?? "Publish failed.");
                return;
            }

            if (data.publishedToGitHub) {
                setMessage("Published to GitHub. Vercel will redeploy in about 2-3 minutes.");
            } else {
                setMessage("Saved on this server. Add GITHUB_TOKEN and GITHUB_REPO to publish live from production.");
            }
        } catch {
            setError("Publish failed. Please try again.");
        } finally {
            setPublishing(false);
        }
    }

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.replace("/admin/login");
        router.refresh();
    }

    return (
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "2rem 1.25rem 3rem" }}>
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
                        Hall of Fame manager
                    </h1>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <Link href="/admin" style={{ ...secondaryButtonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                        Admin home
                    </Link>
                    <Link href="/admin/checklist-leads" style={{ ...secondaryButtonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                        Checklist leads
                    </Link>
                    <button
                        type="button"
                        onClick={handlePublish}
                        disabled={publishing || loading}
                        style={primaryButtonStyle}
                    >
                        {publishing ? "Publishing..." : "Publish changes"}
                    </button>
                    <button type="button" onClick={handleLogout} style={secondaryButtonStyle}>
                        Log out
                    </button>
                </div>
            </div>

            {message ? <Notice tone="success" text={message} /> : null}
            {error ? <Notice tone="error" text={error} /> : null}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "minmax(280px, 360px) 1fr",
                    gap: "1.25rem",
                    alignItems: "start",
                }}
            >
                <section style={panelStyle}>
                    <h2 style={sectionTitleStyle}>{editingId ? "Edit researcher" : "Add researcher"}</h2>
                    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.9rem" }}>
                        <Field label="Name">
                            <input
                                value={form.name}
                                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                                required
                                style={inputStyle}
                            />
                        </Field>
                        <Field label="LinkedIn URL">
                            <input
                                value={form.linkedIn}
                                onChange={(event) => setForm((current) => ({ ...current, linkedIn: event.target.value }))}
                                required
                                type="url"
                                placeholder="https://www.linkedin.com/in/..."
                                style={inputStyle}
                            />
                        </Field>
                        <Field label="Accepted reports">
                            <input
                                value={form.reportCount}
                                onChange={(event) => setForm((current) => ({ ...current, reportCount: event.target.value }))}
                                required
                                type="number"
                                min={1}
                                style={inputStyle}
                            />
                        </Field>
                        <Field label="Flag icon path (optional)">
                            <input
                                value={form.flagIcon}
                                onChange={(event) => setForm((current) => ({ ...current, flagIcon: event.target.value }))}
                                placeholder="/india-flag.png"
                                style={inputStyle}
                            />
                        </Field>
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            <button type="submit" style={primaryButtonStyle}>
                                {editingId ? "Update entry" : "Add entry"}
                            </button>
                            {editingId ? (
                                <button type="button" onClick={resetForm} style={secondaryButtonStyle}>
                                    Cancel
                                </button>
                            ) : null}
                        </div>
                    </form>
                </section>

                <section style={panelStyle}>
                    <h2 style={sectionTitleStyle}>Current list</h2>
                    {loading ? (
                        <p style={{ color: "#6b7280" }}>Loading researchers...</p>
                    ) : sortedResearchers.length === 0 ? (
                        <p style={{ color: "#6b7280" }}>No researchers yet.</p>
                    ) : (
                        <div style={{ display: "grid", gap: "0.75rem" }}>
                            {sortedResearchers.map((researcher) => (
                                <div
                                    key={researcher.id}
                                    style={{
                                        border: "1px solid #e5e7eb",
                                        borderRadius: "12px",
                                        padding: "1rem",
                                        display: "grid",
                                        gap: "0.45rem",
                                    }}
                                >
                                    <strong style={{ color: "#111827" }}>{researcher.name}</strong>
                                    <span style={{ color: "#6b7280", fontSize: "0.92rem" }}>{researcher.linkedIn}</span>
                                    <span style={{ color: "#111827", fontSize: "0.92rem" }}>
                                        Accepted reports: {researcher.reportCount}
                                    </span>
                                    <div style={{ display: "flex", gap: "0.65rem", marginTop: "0.35rem" }}>
                                        <button type="button" onClick={() => handleEdit(researcher)} style={secondaryButtonStyle}>
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(researcher.id)}
                                            style={dangerButtonStyle}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <label style={{ display: "grid", gap: "0.4rem" }}>
            <span style={{ fontWeight: 600, color: "#111827", fontSize: "0.92rem" }}>{label}</span>
            {children}
        </label>
    );
}

function Notice({ tone, text }: { tone: "success" | "error"; text: string }) {
    const styles =
        tone === "success"
            ? { background: "#ecfdf3", color: "#166534", border: "1px solid #bbf7d0" }
            : { background: "#fef2f2", color: "#991b1b", border: "1px solid #fecaca" };

    return (
        <p
            style={{
                ...styles,
                margin: "0 0 1rem",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                lineHeight: 1.5,
            }}
        >
            {text}
        </p>
    );
}

const panelStyle: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "1.25rem",
};

const sectionTitleStyle: React.CSSProperties = {
    margin: "0 0 1rem",
    fontSize: "1.1rem",
    color: "#111827",
};

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 0.85rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
};

const primaryButtonStyle: React.CSSProperties = {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#058c42",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
};

const secondaryButtonStyle: React.CSSProperties = {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    background: "#fff",
    color: "#111827",
    fontWeight: 600,
    cursor: "pointer",
};

const dangerButtonStyle: React.CSSProperties = {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #fecaca",
    background: "#fff",
    color: "#b91c1c",
    fontWeight: 600,
    cursor: "pointer",
};
