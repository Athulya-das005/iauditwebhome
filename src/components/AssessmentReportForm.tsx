"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import type { AssessmentType } from "@/types/assessment-lead";

type Props = {
    assessmentType: AssessmentType;
    assessmentTitle: string;
    pagePath: string;
};

export default function AssessmentReportForm({ assessmentType, assessmentTitle, pagePath }: Props) {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/assessment-leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email.trim().toLowerCase(),
                    fullName: fullName.trim(),
                    company: company.trim(),
                    assessmentType,
                    assessmentTitle,
                    pagePath,
                }),
            });
            const data = (await response.json()) as { error?: string };
            if (!response.ok) {
                setError(data.error ?? "Something went wrong. Please try again.");
                return;
            }
            setSubmitted(true);
        } catch {
            setError("Unable to submit right now. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (submitted) {
        return (
            <div style={{ background: "rgba(0,102,68,0.07)", border: "1px solid rgba(0,102,68,0.16)", borderRadius: "1rem", padding: "1.25rem 1.35rem" }}>
                <p style={{ margin: "0 0 0.4rem", fontWeight: 700, color: "#006644", fontSize: "1.05rem", fontFamily: font }}>Thank you. Your request is in.</p>
                <p style={{ margin: 0, color: "#374151", fontSize: "0.95rem", lineHeight: 1.7, fontFamily: font }}>
                    Our team will send your {assessmentTitle.toLowerCase()} report to <strong>{email}</strong>. Please allow up to 24 hours and check your spam folder if you do not see it.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem" }}>
            <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={inputStyle(font)}
            />
            <input
                type="text"
                placeholder="Company (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={inputStyle(font)}
            />
            <input
                type="email"
                required
                autoComplete="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle(font)}
            />
            {error ? <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.88rem", fontFamily: font }}>{error}</p> : null}
            <button
                type="submit"
                disabled={loading}
                style={{
                    background: "linear-gradient(135deg, #058c42 0%, #006644 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    padding: "0.9rem 1.4rem",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: loading ? "wait" : "pointer",
                    fontFamily: font,
                }}
            >
                {loading ? "Submitting..." : "Request your report"}
            </button>
        </form>
    );
}

function inputStyle(font: string): CSSProperties {
    return {
        width: "100%",
        padding: "0.85rem 1rem",
        borderRadius: "0.7rem",
        border: "1px solid #d1d5db",
        fontSize: "0.95rem",
        fontFamily: font,
        boxSizing: "border-box",
        background: "#fff",
    };
}
