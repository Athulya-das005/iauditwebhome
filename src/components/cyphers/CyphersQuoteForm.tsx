"use client";

import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import { COUNTRIES } from "@/data/countries";

const INK = "#0d1117";
const MUTED = "#6b7280";
const BORDER = "#d9dee3";
const GREEN = "#058c42";

type QuoteValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    country: string;
    message: string;
};

const INITIAL: QuoteValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
};

type Status =
    | { type: "idle" }
    | { type: "submitting" }
    | { type: "success"; message: string }
    | { type: "error"; message: string };

const inputStyle: CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.8rem 0.95rem",
    borderRadius: "10px",
    border: `1px solid ${BORDER}`,
    background: "#fff",
    fontFamily: PP_NEUE_MONTREAL,
    fontSize: "0.95rem",
    color: INK,
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
    return (
        <label htmlFor={htmlFor} style={{ display: "flex", flexDirection: "column", gap: "0.4rem", minWidth: 0 }}>
            <span style={{ fontSize: "0.83rem", fontWeight: 600, color: "#374151" }}>
                {label} <span style={{ color: "#dc2626" }}>*</span>
            </span>
            {children}
        </label>
    );
}

export default function CyphersQuoteForm({ isMobile }: { isMobile: boolean }) {
    const [values, setValues] = useState<QuoteValues>(INITIAL);
    const [status, setStatus] = useState<Status>({ type: "idle" });

    const update = (key: keyof QuoteValues) => (value: string) => setValues((prev) => ({ ...prev, [key]: value }));

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus({ type: "submitting" });
        try {
            const response = await fetch("/api/cyphers-quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
            if (!response.ok) {
                throw new Error(data.error || "Unable to send your request. Please try again.");
            }
            setStatus({
                type: "success",
                message: data.message || "Thank you. The Cyphers team will be in touch shortly.",
            });
            setValues(INITIAL);
        } catch (error) {
            setStatus({
                type: "error",
                message: error instanceof Error ? error.message : "Unable to send your request. Please try again.",
            });
        }
    }

    const submitting = status.type === "submitting";

    return (
        <div
            id="cyphers-quote-form"
            style={{
                background: "#fff",
                borderRadius: "20px",
                padding: isMobile ? "1.5rem 1.25rem" : "2.25rem 2.25rem 2rem",
                boxShadow: "0 30px 80px -30px rgba(0,0,0,0.55)",
                fontFamily: PP_NEUE_MONTREAL,
                scrollMarginTop: "var(--sticky-under-nav)",
            }}
        >
            <style>{`
                .cyq-input:focus { border-color: ${GREEN} !important; box-shadow: 0 0 0 3px rgba(5,140,66,0.14); }
                .cyq-input::placeholder { color: #9ca3af; }
            `}</style>

            <h3
                style={{
                    margin: "0 0 0.35rem",
                    fontSize: isMobile ? "1.45rem" : "1.7rem",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: INK,
                }}
            >
                Get a Pen Test Quote
            </h3>
            <p style={{ margin: "0 0 1.5rem", fontSize: "0.92rem", lineHeight: 1.6, color: MUTED }}>
                Tell us about your application, APIs or platform and we will come back to you with a scoped quote.
            </p>

            {status.type === "success" ? (
                <div
                    role="status"
                    style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                        padding: "1.25rem",
                        borderRadius: "14px",
                        background: "#ecfdf3",
                        border: "1px solid #bbf7d0",
                        color: "#065f46",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                    }}
                >
                    <FiCheckCircle size={22} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                        <strong style={{ display: "block", marginBottom: "0.25rem" }}>Request received</strong>
                        {status.message}
                        <button
                            type="button"
                            onClick={() => setStatus({ type: "idle" })}
                            style={{
                                display: "block",
                                marginTop: "0.75rem",
                                padding: 0,
                                border: "none",
                                background: "none",
                                color: GREEN,
                                fontWeight: 600,
                                fontFamily: PP_NEUE_MONTREAL,
                                cursor: "pointer",
                                textDecoration: "underline",
                                textUnderlineOffset: "3px",
                            }}
                        >
                            Send another request
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem" }}>
                        <Field label="First name" htmlFor="cyq-first">
                            <input
                                id="cyq-first"
                                className="cyq-input"
                                required
                                autoComplete="given-name"
                                value={values.firstName}
                                onChange={(e) => update("firstName")(e.target.value)}
                                style={inputStyle}
                            />
                        </Field>
                        <Field label="Last name" htmlFor="cyq-last">
                            <input
                                id="cyq-last"
                                className="cyq-input"
                                required
                                autoComplete="family-name"
                                value={values.lastName}
                                onChange={(e) => update("lastName")(e.target.value)}
                                style={inputStyle}
                            />
                        </Field>
                    </div>

                    <Field label="Business email address" htmlFor="cyq-email">
                        <input
                            id="cyq-email"
                            className="cyq-input"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="name@company.com"
                            value={values.email}
                            onChange={(e) => update("email")(e.target.value)}
                            style={inputStyle}
                        />
                    </Field>

                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem" }}>
                        <Field label="Phone number" htmlFor="cyq-phone">
                            <input
                                id="cyq-phone"
                                className="cyq-input"
                                type="tel"
                                required
                                autoComplete="tel"
                                value={values.phone}
                                onChange={(e) => update("phone")(e.target.value)}
                                style={inputStyle}
                            />
                        </Field>
                        <Field label="Company" htmlFor="cyq-company">
                            <input
                                id="cyq-company"
                                className="cyq-input"
                                required
                                autoComplete="organization"
                                value={values.company}
                                onChange={(e) => update("company")(e.target.value)}
                                style={inputStyle}
                            />
                        </Field>
                    </div>

                    <Field label="Country" htmlFor="cyq-country">
                        <select
                            id="cyq-country"
                            className="cyq-input"
                            required
                            value={values.country}
                            onChange={(e) => update("country")(e.target.value)}
                            style={{
                                ...inputStyle,
                                appearance: "none",
                                color: values.country ? INK : "#9ca3af",
                                backgroundImage:
                                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 0.95rem center",
                                paddingRight: "2.5rem",
                            }}
                        >
                            <option value="" disabled>
                                -- Select Country --
                            </option>
                            {COUNTRIES.map((country) => (
                                <option key={country} value={country} style={{ color: INK }}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </Field>

                    <Field label="How can we help you?" htmlFor="cyq-message">
                        <textarea
                            id="cyq-message"
                            className="cyq-input"
                            required
                            rows={4}
                            placeholder="e.g. Web application and API penetration test ahead of an enterprise customer security review"
                            value={values.message}
                            onChange={(e) => update("message")(e.target.value)}
                            style={{ ...inputStyle, resize: "vertical", minHeight: "110px", lineHeight: 1.55 }}
                        />
                    </Field>

                    {status.type === "error" && (
                        <p
                            role="alert"
                            style={{
                                margin: 0,
                                padding: "0.75rem 0.9rem",
                                borderRadius: "10px",
                                background: "#fef2f2",
                                border: "1px solid #fecaca",
                                color: "#b91c1c",
                                fontSize: "0.88rem",
                                lineHeight: 1.5,
                            }}
                        >
                            {status.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={submitting}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            width: "100%",
                            padding: "0.95rem 1.25rem",
                            border: "none",
                            borderRadius: "999px",
                            background: submitting ? "#6b9d80" : GREEN,
                            color: "#fff",
                            fontFamily: PP_NEUE_MONTREAL,
                            fontSize: "0.98rem",
                            fontWeight: 600,
                            cursor: submitting ? "wait" : "pointer",
                            transition: "background 0.2s ease, transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            if (!submitting) e.currentTarget.style.background = "#03624c";
                        }}
                        onMouseLeave={(e) => {
                            if (!submitting) e.currentTarget.style.background = GREEN;
                        }}
                    >
                        {submitting ? "Sending…" : "Request my quote"}
                        {!submitting && <FiArrowRight size={17} />}
                    </button>

                    <p style={{ margin: 0, fontSize: "0.78rem", lineHeight: 1.55, color: MUTED, textAlign: "center" }}>
                        By submitting this form you agree to our{" "}
                        <Link href="/privacy-policy" style={{ color: INK, textDecoration: "underline", textUnderlineOffset: "2px" }}>
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </form>
            )}
        </div>
    );
}
