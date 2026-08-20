"use client";

import { useEffect, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import {
    assessmentIndustries,
    departmentOptions,
    isoStandardOptions,
    organisationSizeOptions,
    yesNoOptions,
    type IsoStandardValue,
} from "@/data/assessment-form-options";
import { GAP_SESSION_KEY } from "@/data/gap-analysis-clauses";
import type { AssessmentStartConfig } from "@/data/self-assessment-clauses";
import { SELF_SESSION_KEY } from "@/data/self-assessment-clauses";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

const font = '"Pp Neue Montreal", sans-serif';

const gapConfig: AssessmentStartConfig = {
    assessmentType: "gap-analysis",
    assessmentTitle: "ISO Gap Analysis",
    pagePath: "/iso-audit-assessments/gap-analysis",
    workspacePath: "/iso-audit-assessments/gap-analysis/workspace",
    sessionKey: GAP_SESSION_KEY,
    eyebrow: "Clause-by-clause review",
    title: "ISO Gap Analysis",
    description:
        "Enter your details to start a structured gap analysis against ISO 9001, 14001 or 45001. Record findings, evidence and actions clause by clause.",
    cta: "Start gap analysis",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "ISO Gap Analysis",
};

export const selfAssessmentStartConfig: AssessmentStartConfig = {
    assessmentType: "self-assessment",
    assessmentTitle: "ISO Self Assessment",
    pagePath: "/iso-audit-assessments/self-assessment",
    workspacePath: "/iso-audit-assessments/self-assessment/workspace",
    sessionKey: SELF_SESSION_KEY,
    eyebrow: "Yes / No readiness check",
    title: "ISO Self Assessment",
    description:
        "Enter your details to start a fast self assessment against ISO 9001, 14001 or 45001. Answer Yes or No clause by clause, add your own questions, and track progress as you go.",
    cta: "Start self assessment",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "ISO Self Assessment",
};

export default function GapAnalysisStart({ config = gapConfig }: { config?: AssessmentStartConfig }) {
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
    const [isoStandard, setIsoStandard] = useState<IsoStandardValue | "">("");
    const [auditScope, setAuditScope] = useState("");
    const [emailOptIn, setEmailOptIn] = useState(false);
    const [standardOpen, setStandardOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isMobile, setIsMobile] = useState(false);

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

    async function handleStart(event: FormEvent) {
        event.preventDefault();
        if (!isoStandard) {
            setError("Please select an ISO standard.");
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
                <Link href="/iso-audit-assessments" style={{ color: "#006644", textDecoration: "none", fontWeight: 600, fontSize: "0.88rem" }}>
                    ← Back to assessments
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
                        alignItems: "flex-start",
                        justifyContent: "center",
                        padding: "calc(var(--page-top-offset) + 0.5rem) 1.25rem 1.5rem",
                        overflow: "auto",
                    }}
                >
                    <div
                        onClick={(event) => event.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: "920px",
                            background: "#fff",
                            borderRadius: "1.15rem",
                            padding: isMobile ? "1.15rem 1.1rem 1.15rem" : "1.35rem 1.6rem 1.3rem",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
                            marginBottom: "1rem",
                        }}
                    >
                        <h2 id="gap-modal-title" style={{ margin: "0 0 1rem", color: "#4b5563", fontSize: "1.12rem", fontWeight: 600, lineHeight: 1.4 }}>
                            Enter your details below to start the scorecard
                        </h2>
                        <form onSubmit={handleStart} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.7rem 1rem" }}>
                            <Field label="First name*">
                                <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
                            </Field>
                            <Field label="Last name*">
                                <input required value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
                            </Field>
                            <Field label="Email*">
                                <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                            </Field>
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
                                            {isoStandardOptions.map((option) => {
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
                            <button type="submit" disabled={loading} style={{ ...primaryBtn, width: "100%", gridColumn: isMobile ? "auto" : "1 / -1", opacity: loading ? 0.75 : 1, cursor: loading ? "wait" : "pointer" }}>
                                {loading ? "Starting..." : "Start"}
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

const inputStyle: CSSProperties = {
    width: "100%",
    padding: "0.65rem 0.85rem",
    borderRadius: "0.65rem",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
    fontFamily: font,
    boxSizing: "border-box",
    background: "#fff",
    color: "#111827",
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
