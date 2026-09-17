"use client";

import { useEffect, useRef, useState, type CSSProperties, type ComponentType, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import {
    assessmentIndustries,
    departmentOptions,
    gapIsoStandardOptions,
    isoStandardOptions,
    organisationSizeOptions,
    yesNoOptions,
    type IsoStandardValue,
} from "@/data/assessment-form-options";
import { GAP_SESSION_KEY } from "@/data/gap-analysis-clauses";
import type { AssessmentStartConfig } from "@/data/self-assessment-clauses";
import { SELF_SESSION_KEY } from "@/data/self-assessment-clauses";
import { SELF_ASSESSMENT_PAGE_PATH } from "@/data/selfAssessmentPageSchema";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

const font = '"Pp Neue Montreal", sans-serif';

const gapConfig: AssessmentStartConfig = {
    assessmentType: "gap-analysis",
    assessmentTitle: "ISO 14001:2026 Gap Analysis",
    pagePath: "/iso-audit-assessments/gap-analysis",
    workspacePath: "/iso-audit-assessments/gap-analysis/workspace",
    sessionKey: GAP_SESSION_KEY,
    eyebrow: "Comply / OFI / NC review",
    title: "Start Your ISO 14001:2026 Gap Analysis",
    description:
        "Complete a free ISO 14001:2026 Gap Analysis to identify EMS gaps, assess transition readiness and plan the actions needed.",
    cta: "Start free gap analysis",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "ISO 14001:2026 Gap Analysis",
};

export const selfAssessmentStartConfig: AssessmentStartConfig = {
    assessmentType: "self-assessment",
    assessmentTitle: "ISO 14001:2026 Self Assessment",
    pagePath: SELF_ASSESSMENT_PAGE_PATH,
    workspacePath: "/iso-audit-assessments/self-assessment/workspace",
    sessionKey: SELF_SESSION_KEY,
    eyebrow: "Yes / No readiness check",
    title: "ISO 14001:2026 Self Assessment",
    description:
        "Enter your details to start a fast self assessment against ISO 14001:2026. Answer Yes or No clause by clause and track progress as you go.",
    cta: "Start free assessment",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "ISO 14001:2026 Self Assessment",
};

export default function GapAnalysisStart({
    config = gapConfig,
    Landing,
}: {
    config?: AssessmentStartConfig;
    Landing?: ComponentType<{ onStart: () => void }>;
}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [industry, setIndustry] = useState("");
    const [organisationSize, setOrganisationSize] = useState("");
    const [department, setDepartment] = useState("");
    const [existingCustomer, setExistingCustomer] = useState("");
    const [isoStandard, setIsoStandard] = useState<IsoStandardValue | "">("ISO 14001:2026");
    const [auditScope, setAuditScope] = useState("");
    const [emailOptIn, setEmailOptIn] = useState(false);
    const [standardOpen, setStandardOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [otpInfo, setOtpInfo] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [otpSending, setOtpSending] = useState(false);
    const [otpVerifying, setOtpVerifying] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [emailVerificationToken, setEmailVerificationToken] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const standardOptions =
        config.assessmentType === "self-assessment" ? isoStandardOptions : gapIsoStandardOptions;
    const canStart = emailVerified && Boolean(emailVerificationToken) && !loading;

    function resetEmailVerification() {
        setOtpCode("");
        setOtpSent(false);
        setOtpInfo("");
        setEmailVerified(false);
        setEmailVerificationToken("");
    }

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 800);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        if (!open) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    async function handleSendOtp() {
        const normalized = email.trim().toLowerCase();
        if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
            setError("Enter a valid email address before verifying.");
            return;
        }
        // Show OTP UI immediately so it feels instant while the email is sending.
        setOtpSending(true);
        setError("");
        setOtpInfo("Sending code…");
        setOtpSent(true);
        setEmailVerified(false);
        setEmailVerificationToken("");
        setOtpCode("");
        try {
            const response = await fetch("/api/assessment-email-otp/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: normalized }),
            });
            const data = (await response.json()) as { error?: string; message?: string };
            if (!response.ok) {
                setError(data.error ?? "Unable to send verification code.");
                setOtpInfo("");
                return;
            }
            setOtpInfo("Code sent — check your inbox (and spam).");
        } catch {
            setError("Unable to send verification code. Please try again.");
            setOtpInfo("");
        } finally {
            setOtpSending(false);
        }
    }

    async function handleVerifyOtp(codeOverride?: string) {
        const normalized = email.trim().toLowerCase();
        const code = (codeOverride ?? otpCode).trim();
        if (!normalized) {
            setError("Enter your email address first.");
            return;
        }
        if (!/^\d{6}$/.test(code)) {
            setError("Enter the 6-digit code from your email.");
            return;
        }
        setOtpVerifying(true);
        setError("");
        setOtpInfo("");
        try {
            const response = await fetch("/api/assessment-email-otp/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: normalized, code }),
            });
            const data = (await response.json()) as {
                error?: string;
                emailVerificationToken?: string;
            };
            if (!response.ok || !data.emailVerificationToken) {
                setError(data.error ?? "Unable to verify that code.");
                setEmailVerified(false);
                setEmailVerificationToken("");
                return;
            }
            setEmailVerified(true);
            setEmailVerificationToken(data.emailVerificationToken);
            setOtpInfo("");
        } catch {
            setError("Unable to verify that code. Please try again.");
        } finally {
            setOtpVerifying(false);
        }
    }

    const autoVerifyRef = useRef(false);
    useEffect(() => {
        if (emailVerified || otpVerifying || !otpSent) {
            autoVerifyRef.current = false;
            return;
        }
        if (otpCode.trim().length === 6 && !autoVerifyRef.current) {
            autoVerifyRef.current = true;
            void handleVerifyOtp(otpCode);
        }
        if (otpCode.trim().length < 6) {
            autoVerifyRef.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only react to code length changes
    }, [otpCode, emailVerified, otpVerifying, otpSent]);

    async function handleStart(event: FormEvent) {
        event.preventDefault();
        if (!isoStandard) {
            setError("Please select an ISO standard.");
            return;
        }
        if (!emailVerified || !emailVerificationToken) {
            setError("Please verify your email before starting.");
            return;
        }
        setLoading(true);
        setError("");

        const session: GapAnalysisSession = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            organisation: organisation.trim(),
            industry,
            organisationSize,
            department,
            existingCustomer,
            isoStandard,
            auditScope: auditScope.trim(),
            emailOptIn,
            emailVerified: true,
        };

        try {
            const response = await fetch("/api/assessment-leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: session.email,
                    fullName: `${session.firstName} ${session.lastName}`.trim(),
                    firstName: session.firstName,
                    lastName: session.lastName,
                    company: session.organisation,
                    industry: session.industry,
                    organisationSize: session.organisationSize,
                    department: session.department,
                    existingCustomer: session.existingCustomer,
                    isoStandard: session.isoStandard,
                    auditScope: session.auditScope,
                    emailOptIn: session.emailOptIn,
                    emailVerificationToken,
                    assessmentType: config.assessmentType,
                    assessmentTitle: config.assessmentTitle,
                    pagePath: config.pagePath,
                }),
            });
            const data = (await response.json()) as { error?: string };
            if (!response.ok) {
                setError(data.error ?? "Something went wrong. Please try again.");
                return;
            }
            sessionStorage.setItem(config.sessionKey, JSON.stringify(session));
            router.push(config.workspacePath);
        } catch {
            setError("Unable to start right now. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ minHeight: "100vh", background: "#f7f8f5", fontFamily: font }}>
            {Landing ? (
                <Landing onStart={() => setOpen(true)} />
            ) : (
                <>
                    <div style={{ position: "relative", width: "100%", height: "42vh", minHeight: "280px", maxHeight: "460px", overflow: "hidden", paddingTop: "var(--page-top-offset)" }}>
                        <Image
                            src={config.image}
                            alt={config.imageAlt}
                            fill
                            priority
                            sizes="100vw"
                            quality={90}
                            style={{ objectFit: "cover" }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,28,18,0.15), rgba(4,28,18,0.72))" }} />
                        <div style={{ position: "absolute", left: "1.5rem", right: "1.5rem", bottom: "1.75rem", maxWidth: "1180px", margin: "0 auto" }}>
                            <p style={{ margin: "0 0 0.5rem", color: "#9fe3c0", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.75rem" }}>
                                {config.eyebrow}
                            </p>
                            <h1 style={{ margin: 0, color: "#fff", fontSize: "2.4rem", letterSpacing: "-0.03em" }}>{config.title}</h1>
                        </div>
                    </div>

                    <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
                        <Link href={config.pagePath} style={{ color: "#006644", textDecoration: "none", fontWeight: 600, fontSize: "0.88rem" }}>
                            ← Back to self assessment
                        </Link>
                        <p style={{ margin: "1.25rem 0 1.75rem", color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8 }}>
                            {config.description}
                        </p>
                        <div style={{ background: "#fff", border: "1px solid #e6ebe4", borderRadius: "1.2rem", padding: "1.5rem 1.4rem", boxShadow: "0 12px 32px rgba(16,47,32,0.06)" }}>
                            <p style={{ margin: "0 0 0.35rem", fontWeight: 700, color: "#143528", fontSize: "1.15rem" }}>Request your report</p>
                            <p style={{ margin: "0 0 1.1rem", color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.65 }}>
                                Complete a short form, then start the assessment. We will also save your details so we can send the report.
                            </p>
                            <button type="button" onClick={() => setOpen(true)} style={primaryBtn}>
                                {config.cta}
                            </button>
                        </div>
                    </div>
                    <Footer />
                </>
            )}

            {open ? (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="gap-modal-title"
                    onClick={() => setOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 2200,
                        background: "rgba(8, 18, 14, 0.62)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: isMobile ? "1rem" : "1.5rem",
                        overflow: "auto",
                    }}
                >
                    <div
                        onClick={(event) => event.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: "920px",
                            maxHeight: isMobile ? "calc(100dvh - 2rem)" : "calc(100dvh - 3rem)",
                            overflowY: "auto",
                            background: "#fff",
                            borderRadius: "1.15rem",
                            padding: isMobile ? "1.15rem 1.1rem 1.15rem" : "1.35rem 1.6rem 1.3rem",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
                            margin: "auto",
                        }}
                    >
                        <h2 id="gap-modal-title" style={{ margin: "0 0 1rem", color: "#4b5563", fontSize: isMobile ? "1rem" : "1.12rem", fontWeight: 600, lineHeight: 1.4 }}>
                            Enter your details below to start the scorecard
                        </h2>
                        <form onSubmit={handleStart} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "0.85rem" : "0.7rem 1rem" }}>
                            <Field label="First name*">
                                <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
                            </Field>
                            <Field label="Last name*">
                                <input required value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
                            </Field>
                            <div style={{ display: "grid", gap: "0.35rem" }}>
                                <span style={{ color: "#4b5563", fontSize: "0.86rem", fontWeight: 600 }}>Email*</span>
                                <div
                                    style={{
                                        display: "grid",
                                        gap: "0.55rem",
                                        padding: emailVerified || otpSent ? "0.7rem" : 0,
                                        borderRadius: "0.85rem",
                                        background: emailVerified ? "#eff6ff" : otpSent ? "#f8fafc" : "transparent",
                                        border: emailVerified
                                            ? "1px solid #bfdbfe"
                                            : otpSent
                                              ? "1px solid #e5e7eb"
                                              : "1px solid transparent",
                                        transition: "background 0.25s ease, border-color 0.25s ease",
                                    }}
                                >
                                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "stretch", flexWrap: isMobile ? "wrap" : "nowrap" }}>
                                        <input
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                resetEmailVerification();
                                            }}
                                            style={{
                                                ...inputStyle,
                                                flex: 1,
                                                minWidth: 0,
                                                borderColor: emailVerified ? "#93c5fd" : "#e5e7eb",
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleSendOtp}
                                            disabled={otpSending || emailVerified}
                                            style={{
                                                ...verifyBtn,
                                                opacity: otpSending || emailVerified ? 0.75 : 1,
                                                cursor: otpSending || emailVerified ? "not-allowed" : "pointer",
                                                width: isMobile ? "100%" : "auto",
                                                background: emailVerified ? "#16a34a" : "#2563eb",
                                            }}
                                        >
                                            {emailVerified ? (
                                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                                                    <AnimatedCheck small />
                                                    Verified
                                                </span>
                                            ) : otpSending ? (
                                                "Sending…"
                                            ) : otpSent ? (
                                                "Resend"
                                            ) : (
                                                "Verify"
                                            )}
                                        </button>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {emailVerified ? (
                                            <motion.div
                                                key="verified"
                                                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.28 }}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.65rem",
                                                    padding: "0.35rem 0.15rem 0.1rem",
                                                }}
                                            >
                                                <AnimatedCheck />
                                                <p style={{ margin: 0, color: "#1d4ed8", fontSize: "0.88rem", fontWeight: 600, lineHeight: 1.4 }}>
                                                    Email verified — you can start the assessment.
                                                </p>
                                            </motion.div>
                                        ) : otpSent ? (
                                            <motion.div
                                                key="otp"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.22 }}
                                                style={{ display: "grid", gap: "0.5rem" }}
                                            >
                                                <p style={{ margin: 0, color: "#4b5563", fontSize: "0.84rem", lineHeight: 1.45 }}>
                                                    {otpSending
                                                        ? "Sending your code now…"
                                                        : otpInfo || "Enter the 6-digit code from your email."}
                                                </p>
                                                <div style={{ display: "flex", gap: "0.5rem", flexWrap: isMobile ? "wrap" : "nowrap" }}>
                                                    <input
                                                        inputMode="numeric"
                                                        autoComplete="one-time-code"
                                                        pattern="[0-9]{6}"
                                                        maxLength={6}
                                                        placeholder="••••••"
                                                        value={otpCode}
                                                        onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                                        style={{
                                                            ...inputStyle,
                                                            flex: 1,
                                                            letterSpacing: "0.28em",
                                                            fontWeight: 700,
                                                            textAlign: "center",
                                                            borderColor: "#93c5fd",
                                                        }}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleVerifyOtp()}
                                                        disabled={otpVerifying || otpCode.trim().length !== 6 || otpSending}
                                                        style={{
                                                            ...verifyBtn,
                                                            background: "#1d4ed8",
                                                            opacity: otpVerifying || otpCode.trim().length !== 6 || otpSending ? 0.6 : 1,
                                                            cursor:
                                                                otpVerifying || otpCode.trim().length !== 6 || otpSending
                                                                    ? "not-allowed"
                                                                    : "pointer",
                                                            width: isMobile ? "100%" : "auto",
                                                        }}
                                                    >
                                                        {otpVerifying ? "Checking…" : "Confirm"}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.p
                                                key="hint"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                style={{ margin: 0, color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.45 }}
                                            >
                                                Verify your work email with a one-time code before starting.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                            <Field label="What is the name of your organisation?*">
                                <input required value={organisation} onChange={(e) => setOrganisation(e.target.value)} style={inputStyle} />
                            </Field>
                            <Field label="What industry/sector are you in?*">
                                <select required value={industry} onChange={(e) => setIndustry(e.target.value)} style={inputStyle}>
                                    <option value="">Select industry</option>
                                    {assessmentIndustries.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </Field>
                            <Field label="How many employees are in your organisation?*">
                                <select required value={organisationSize} onChange={(e) => setOrganisationSize(e.target.value)} style={inputStyle}>
                                    <option value="">Select size</option>
                                    {organisationSizeOptions.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </Field>
                            <Field label="What department/function are you in?*">
                                <select required value={department} onChange={(e) => setDepartment(e.target.value)} style={inputStyle}>
                                    <option value="">Select department</option>
                                    {departmentOptions.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </Field>
                            <Field label="Are you an existing iAudit customer?*">
                                <select required value={existingCustomer} onChange={(e) => setExistingCustomer(e.target.value)} style={inputStyle}>
                                    <option value="">Select</option>
                                    {yesNoOptions.map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </Field>
                            <Field label="ISO Standard *">
                                <div style={{ position: "relative" }}>
                                    <button type="button" onClick={() => setStandardOpen((v) => !v)} style={{ ...inputStyle, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ color: isoStandard ? "#111827" : "#9ca3af" }}>{isoStandard || "Select standard"}</span>
                                        <span aria-hidden>▾</span>
                                    </button>
                                    {standardOpen ? (
                                        <div style={{ position: "absolute", left: 0, right: 0, top: "calc(100% + 4px)", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.7rem", boxShadow: "0 12px 28px rgba(0,0,0,0.12)", zIndex: 2, overflow: "hidden" }}>
                                            {standardOptions.map((option) => {
                                                const selected = isoStandard === option.value;
                                                return (
                                                    <button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setIsoStandard(option.value);
                                                            setStandardOpen(false);
                                                        }}
                                                        style={{
                                                            width: "100%",
                                                            textAlign: "left",
                                                            border: "none",
                                                            background: selected ? "#ecfdf3" : "#fff",
                                                            color: selected ? "#006644" : "#111827",
                                                            padding: "0.75rem 0.9rem",
                                                            fontFamily: font,
                                                            fontSize: "0.95rem",
                                                            cursor: "pointer",
                                                            fontWeight: selected ? 700 : 500,
                                                        }}
                                                    >
                                                        {selected ? "✓ " : ""}{option.label}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    ) : null}
                                </div>
                            </Field>
                            <Field label="Scope of Audit*">
                                <textarea required value={auditScope} onChange={(e) => setAuditScope(e.target.value)} rows={2} placeholder="e.g. OH&S management system covering manufacturing operations at Site A" style={{ ...inputStyle, resize: "vertical", minHeight: "52px" }} />
                            </Field>
                            <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#374151", fontSize: "0.92rem", cursor: "pointer", gridColumn: isMobile ? "auto" : "1 / -1" }}>
                                <input type="checkbox" checked={emailOptIn} onChange={(e) => setEmailOptIn(e.target.checked)} />
                                Opt in to receive updates via email
                            </label>
                            {error ? <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.88rem", gridColumn: isMobile ? "auto" : "1 / -1" }}>{error}</p> : null}
                            <button
                                type="submit"
                                disabled={!canStart}
                                style={{
                                    ...primaryBtn,
                                    width: "100%",
                                    gridColumn: isMobile ? "auto" : "1 / -1",
                                    opacity: canStart ? 1 : 0.45,
                                    cursor: canStart ? "pointer" : "not-allowed",
                                }}
                            >
                                {loading ? "Starting..." : emailVerified ? "Start" : "Verify email to start"}
                            </button>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
    return (
        <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ color: "#4b5563", fontSize: "0.86rem", fontWeight: 600 }}>{label}</span>
            {children}
        </label>
    );
}

function AnimatedCheck({ small = false }: { small?: boolean }) {
    const size = small ? 16 : 22;
    return (
        <motion.span
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: small ? "rgba(255,255,255,0.22)" : "#2563eb",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: small ? "none" : "0 6px 14px rgba(37, 99, 235, 0.28)",
            }}
        >
            <motion.svg
                width={small ? 10 : 12}
                height={small ? 10 : 12}
                viewBox="0 0 24 24"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
            >
                <motion.path
                    d="M5 13l4 4L19 7"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
                />
            </motion.svg>
        </motion.span>
    );
}

const inputStyle: CSSProperties = {
    width: "100%",
    padding: "0.75rem 0.85rem",
    borderRadius: "0.65rem",
    border: "1px solid #e5e7eb",
    fontSize: "16px",
    fontFamily: font,
    color: "#111827",
    background: "#fff",
    boxSizing: "border-box",
    minHeight: "44px",
};

const primaryBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #07a34d 0%, #006644 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    padding: "0.95rem 1.45rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    cursor: "pointer",
    fontFamily: font,
};

const verifyBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "0.65rem",
    padding: "0 1rem",
    minHeight: "44px",
    fontWeight: 700,
    fontSize: "0.88rem",
    fontFamily: font,
    whiteSpace: "nowrap",
};
