"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { COUNTRIES } from "@/data/countries";

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

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
    return (
        <label htmlFor={htmlFor} className="cy-field">
            <span className="cy-field__label">
                {label}
                <span className="cy-field__req">*</span>
            </span>
            {children}
        </label>
    );
}

export default function CyphersQuoteForm() {
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

    if (status.type === "success") {
        return (
            <div id="cyphers-quote-form" className="cy-form">
                <div role="status" className="cy-form__success">
                    <FiCheckCircle size={22} aria-hidden />
                    <div>
                        <strong>Request received</strong>
                        <p>{status.message}</p>
                        <button type="button" className="cy-form__reset" onClick={() => setStatus({ type: "idle" })}>
                            Send another request
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form id="cyphers-quote-form" className="cy-form" onSubmit={handleSubmit}>
            <div className="cy-form__row">
                <Field label="First name" htmlFor="cyq-first">
                    <input
                        id="cyq-first"
                        className="cy-input"
                        required
                        autoComplete="given-name"
                        value={values.firstName}
                        onChange={(e) => update("firstName")(e.target.value)}
                    />
                </Field>
                <Field label="Last name" htmlFor="cyq-last">
                    <input
                        id="cyq-last"
                        className="cy-input"
                        required
                        autoComplete="family-name"
                        value={values.lastName}
                        onChange={(e) => update("lastName")(e.target.value)}
                    />
                </Field>
            </div>

            <div className="cy-form__row">
                <Field label="Business email address" htmlFor="cyq-email">
                    <input
                        id="cyq-email"
                        className="cy-input"
                        type="email"
                        required
                        autoComplete="email"
                        value={values.email}
                        onChange={(e) => update("email")(e.target.value)}
                    />
                </Field>
                <Field label="Phone number" htmlFor="cyq-phone">
                    <input
                        id="cyq-phone"
                        className="cy-input"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(e) => update("phone")(e.target.value)}
                    />
                </Field>
            </div>

            <div className="cy-form__row">
                <Field label="Company" htmlFor="cyq-company">
                    <input
                        id="cyq-company"
                        className="cy-input"
                        required
                        autoComplete="organization"
                        value={values.company}
                        onChange={(e) => update("company")(e.target.value)}
                    />
                </Field>
                <Field label="Country" htmlFor="cyq-country">
                    <select
                        id="cyq-country"
                        className={`cy-input cy-select${values.country ? "" : " cy-select--empty"}`}
                        required
                        value={values.country}
                        onChange={(e) => update("country")(e.target.value)}
                    >
                        <option value="" disabled>
                            -- Select Country --
                        </option>
                        {COUNTRIES.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </Field>
            </div>

            <Field label="How can we help you?" htmlFor="cyq-message">
                <textarea
                    id="cyq-message"
                    className="cy-input cy-textarea"
                    required
                    rows={4}
                    value={values.message}
                    onChange={(e) => update("message")(e.target.value)}
                />
            </Field>

            {status.type === "error" && (
                <p role="alert" className="cy-form__error">
                    {status.message}
                </p>
            )}

            <div className="cy-form__footer">
                <button type="submit" className="cy-btn" disabled={submitting}>
                    <span className="cy-btn__clip">
                        <span className="cy-btn__text">{submitting ? "Sending…" : "Submit"}</span>
                        <span className="cy-btn__text cy-btn__text--bottom" aria-hidden>
                            {submitting ? "Sending…" : "Submit"}
                        </span>
                    </span>
                </button>
                <p className="cy-form__note">
                    By submitting this form you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.
                </p>
            </div>
        </form>
    );
}
