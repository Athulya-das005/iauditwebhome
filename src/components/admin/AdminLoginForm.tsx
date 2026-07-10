"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = (await response.json()) as { error?: string };
            if (!response.ok) {
                setError(data.error ?? "Login failed.");
                return;
            }

            const next = searchParams.get("next") || "/admin";
            router.replace(next);
            router.refresh();
        } catch {
            setError("Unable to sign in. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
                }}
            >
                <p style={{ margin: "0 0 0.35rem", color: "#058c42", fontWeight: 700, fontSize: "0.85rem" }}>
                    iAudit Admin
                </p>
                <h1 style={{ margin: "0 0 0.5rem", fontSize: "1.6rem", color: "#111827" }}>
                    Admin login
                </h1>
                <p style={{ margin: "0 0 1.5rem", color: "#6b7280", lineHeight: 1.6 }}>
                    Sign in to manage the iAudit website admin tools, including checklist leads and Hall of Fame.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
                    <label style={{ display: "grid", gap: "0.45rem" }}>
                        <span style={{ fontWeight: 600, color: "#111827" }}>Email</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            autoComplete="username"
                            placeholder="admin@iaudit.global"
                            style={{
                                width: "100%",
                                padding: "0.8rem 0.9rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                            }}
                        />
                    </label>
                    <label style={{ display: "grid", gap: "0.45rem" }}>
                        <span style={{ fontWeight: 600, color: "#111827" }}>Password</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                            style={{
                                width: "100%",
                                padding: "0.8rem 0.9rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                            }}
                        />
                    </label>

                    {error ? (
                        <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.92rem" }}>{error}</p>
                    ) : null}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: "0.85rem 1rem",
                            borderRadius: "8px",
                            border: "none",
                            background: "#058c42",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: loading ? "wait" : "pointer",
                        }}
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </div>
        </div>
    );
}
