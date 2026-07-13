"use client";

import { FormEvent, useEffect, useState } from "react";

type ChecklistLeadModalProps = {
    open: boolean;
    checklistName: string;
    industrySlug: string;
    industryTitle: string;
    onClose: () => void;
};

type FormState = {
    fullName: string;
    email: string;
};

const emptyForm: FormState = {
    fullName: "",
    email: "",
};

export default function ChecklistLeadModal({
    open,
    checklistName,
    industrySlug,
    industryTitle,
    onClose,
}: ChecklistLeadModalProps) {
    const [form, setForm] = useState<FormState>(emptyForm);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        if (!open) return;

        setForm(emptyForm);
        setSubmitted(false);
        setError("");
        setLoading(false);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open, checklistName]);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/checklist-leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    checklistName,
                    industrySlug,
                    industryTitle,
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

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={submitted ? "Thank you" : "Request checklist"}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 3000,
                background: "rgba(15, 23, 42, 0.55)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: isMobile ? "0.85rem" : "1.5rem",
            }}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                style={{
                    width: "100%",
                    maxWidth: "960px",
                    background: "#fff",
                    borderRadius: "20px",
                    boxShadow: "0 28px 70px rgba(15, 23, 42, 0.28)",
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    overflow: "hidden",
                    position: "relative",
                    border: "1px solid rgba(229, 231, 235, 0.9)",
                }}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        zIndex: 2,
                        width: "38px",
                        height: "38px",
                        borderRadius: "999px",
                        border: "1px solid #e5e7eb",
                        background: "#fff",
                        fontSize: "1.3rem",
                        lineHeight: 1,
                        cursor: "pointer",
                        color: "#6b7280",
                        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.06)",
                    }}
                >
                    ×
                </button>

                {submitted ? (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.15fr",
                            minHeight: isMobile ? "auto" : "420px",
                        }}
                    >
                        <LeftPanel isMobile={isMobile}>
                            <BrandLogo isMobile={isMobile} />
                            <span style={eyebrowStyle}>Request received</span>
                            <h2 style={headingStyle(isMobile)}>Check your inbox for your download.</h2>
                            <p style={bodyStyle}>
                                We&apos;ve saved your details for{" "}
                                <strong style={{ color: "#03624c" }}>{checklistName}</strong>. Our team
                                will email the checklist to you shortly.
                            </p>
                            <div style={featureRowStyle}>
                                <FeatureDot text="Manual delivery" />
                                <FeatureDot text="No spam" />
                                <FeatureDot text="ISO ready" />
                            </div>
                        </LeftPanel>

                        <div
                            style={{
                                padding: isMobile ? "1.6rem 1.4rem 1.75rem" : "2.25rem 2.35rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: isMobile ? "stretch" : "flex-start",
                                gap: "1.1rem",
                                background:
                                    "radial-gradient(circle at top right, rgba(5,140,66,0.06), transparent 45%)",
                            }}
                        >
                            <div
                                style={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "18px",
                                    background: "linear-gradient(145deg, #e8f5ef, #d1fae5)",
                                    border: "1px solid #bbf7d0",
                                    display: "grid",
                                    placeItems: "center",
                                }}
                            >
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path
                                        d="M20 6L9 17l-5-5"
                                        stroke="#058c42"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3
                                    style={{
                                        margin: "0 0 0.55rem",
                                        fontSize: isMobile ? "1.35rem" : "1.55rem",
                                        color: "#111827",
                                        lineHeight: 1.25,
                                    }}
                                >
                                    Thank you — you&apos;re all set
                                </h3>
                                <p style={{ margin: 0, color: "#6b7280", lineHeight: 1.65, fontSize: "0.98rem" }}>
                                    Keep an eye on your inbox (and spam folder). You can keep browsing the site
                                    while we prepare your checklist.
                                </p>
                            </div>
                            <button type="button" onClick={onClose} style={primaryButtonStyle(isMobile)}>
                                Continue browsing
                            </button>
                        </div>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.15fr",
                            minHeight: isMobile ? "auto" : "440px",
                        }}
                    >
                        <LeftPanel isMobile={isMobile}>
                            <BrandLogo isMobile={isMobile} />
                            <span style={eyebrowStyle}>Free ISO checklist</span>
                            <h2 style={headingStyle(isMobile)}>Send me the checklist</h2>
                            <p style={bodyStyle}>
                                Access the{" "}
                                <strong style={{ color: "#03624c" }}>{checklistName}</strong> designed to
                                help your team prepare for ISO audits.
                            </p>
                            <div style={featureRowStyle}>
                                <FeatureDot text="Ready to use" />
                                <FeatureDot text="ISO aligned" />
                                <FeatureDot text="Emailed to you" />
                            </div>
                            <p style={{ margin: "0.35rem 0 0", color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.55 }}>
                                We&apos;ll use your details only to send this checklist. No third-party marketing.
                            </p>
                        </LeftPanel>

                        <div
                            style={{
                                padding: isMobile ? "1.35rem 1.35rem 1.55rem" : "1.85rem 2.2rem 2rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "0.9rem",
                            }}
                        >
                            <div style={{ display: "grid", gap: "0.85rem" }}>
                                <Field label="Full name *">
                                    <input
                                        type="text"
                                        required
                                        autoComplete="name"
                                        value={form.fullName}
                                        onChange={(event) =>
                                            setForm((current) => ({
                                                ...current,
                                                fullName: event.target.value,
                                            }))
                                        }
                                        style={inputStyle}
                                    />
                                </Field>
                                <Field label="Work email *">
                                    <input
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={(event) =>
                                            setForm((current) => ({ ...current, email: event.target.value }))
                                        }
                                        style={inputStyle}
                                    />
                                </Field>
                            </div>

                            {error ? (
                                <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.9rem" }}>{error}</p>
                            ) : null}

                            <button type="submit" disabled={loading} style={primaryButtonStyle(true)}>
                                {loading ? "Submitting..." : "Submit request"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

function BrandLogo({ isMobile }: { isMobile: boolean }) {
    return (
        <div
            style={{
                alignSelf: "flex-start",
                background: "#fff",
                borderRadius: "14px",
                padding: isMobile ? "0.7rem 0.9rem" : "0.85rem 1.1rem",
                border: "1px solid #dbe7e0",
                boxShadow: "0 8px 24px rgba(3, 98, 76, 0.08)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img
                src="/iaudit-logo-new.png"
                alt="iAudit Global"
                style={{
                    height: isMobile ? "48px" : "58px",
                    width: "auto",
                    maxWidth: isMobile ? "180px" : "220px",
                    display: "block",
                    objectFit: "contain",
                }}
            />
        </div>
    );
}

function LeftPanel({
    isMobile,
    children,
}: {
    isMobile: boolean;
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(165deg, #f4fbf7 0%, #e7f6ee 48%, #f8fafc 100%)",
                padding: isMobile ? "1.55rem 1.35rem 1.25rem" : "2.2rem 2.1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0.9rem",
                borderRight: isMobile ? "none" : "1px solid #e5e7eb",
                borderBottom: isMobile ? "1px solid #e5e7eb" : "none",
            }}
        >
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    background: "rgba(5, 140, 66, 0.08)",
                    top: "-50px",
                    right: "-40px",
                }}
            />
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    background: "rgba(3, 98, 76, 0.07)",
                    bottom: "24px",
                    left: "-30px",
                }}
            />
            <div style={{ position: "relative", zIndex: 1, display: "grid", gap: "0.9rem" }}>{children}</div>
        </div>
    );
}

function FeatureDot({ text }: { text: string }) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.35rem 0.7rem",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.85)",
                border: "1px solid #dbe7e0",
                color: "#03624c",
                fontSize: "0.78rem",
                fontWeight: 600,
            }}
        >
            <span
                style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#058c42",
                    display: "inline-block",
                }}
            />
            {text}
        </span>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <label style={{ display: "grid", gap: "0.3rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151" }}>{label}</span>
            {children}
        </label>
    );
}

const eyebrowStyle: React.CSSProperties = {
    display: "inline-flex",
    alignSelf: "flex-start",
    padding: "0.28rem 0.7rem",
    borderRadius: "999px",
    background: "#fff",
    border: "1px solid #dbe7e0",
    color: "#03624c",
    fontWeight: 700,
    fontSize: "0.78rem",
    letterSpacing: "0.02em",
};

const headingStyle = (isMobile: boolean): React.CSSProperties => ({
    margin: 0,
    fontSize: isMobile ? "1.5rem" : "1.85rem",
    color: "#111827",
    lineHeight: 1.18,
    fontWeight: 700,
    letterSpacing: "-0.02em",
});

const bodyStyle: React.CSSProperties = {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.6,
    fontSize: "0.98rem",
};

const featureRowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.45rem",
};

const primaryButtonStyle = (fullWidth: boolean): React.CSSProperties => ({
    marginTop: "0.15rem",
    width: fullWidth ? "100%" : "auto",
    alignSelf: fullWidth ? "stretch" : "flex-start",
    padding: "0.9rem 1.35rem",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #058c42 0%, #03624c 100%)",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(5, 140, 66, 0.25)",
});

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.72rem 0.85rem",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
    background: "#fff",
    boxSizing: "border-box",
};
