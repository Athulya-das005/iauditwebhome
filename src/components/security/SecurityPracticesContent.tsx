"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import SecurityPageHero, { SECURITY_HERO_IMAGES } from "@/components/security/SecurityPageHero";

/* ─── Design tokens ─────────────────────────────────────── */
const GREY_DARK   = "#1f2937";
const GREY_BODY   = "#4b5563";
const GREY_MUTED  = "#6b7280";
const BORDER      = "#e5e7eb";
const GREEN       = "#058c42";
const GREEN_LIGHT = "#f0faf4";
const NAVY        = "#1f2937";

/* ─── Section navigation items ──────────────────────────── */
const NAV_SECTIONS = [
    { id: "penetration-testing",       label: "Penetration Testing" },
    { id: "vulnerability-remediation", label: "Vulnerability Remediation" },
    { id: "phishing-simulations",      label: "Phishing Simulations" },
    { id: "vulnerability-scans",       label: "Vulnerability Scans" },
    { id: "disclosure-program",        label: "Disclosure Program" },
    { id: "access-control",            label: "Access Control" },
    { id: "certifications",            label: "Certifications" },
    { id: "ico-registration",          label: "ICO Registration" },
];

/* ─── Practice card data ─────────────────────────────────── */
const PRACTICES = [
    {
        id:      "penetration-testing",
        number:  "01",
        iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        iconType: "path" as const,
        title:   "Penetration Testing",
        body:    "iAudit Global maintains an in-house security analyst with two to three years of penetration testing experience and a strong track record. Full penetration tests are conducted every three months, with all findings and reports formally documented and retained in-house.",
        tags:    ["Quarterly", "In-house analyst", "Formally documented"],
        isTimeline: false,
        link:    null,
    },
    {
        id:      "vulnerability-remediation",
        number:  "02",
        iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        iconType: "clock" as const,
        title:   "Vulnerability Remediation",
        body:    "Once a vulnerability is identified, it is remediated according to its severity level. iAudit Global follows strict response timelines to ensure issues are resolved promptly.",
        tags:    [],
        isTimeline: true,
        link:    null,
    },
    {
        id:      "phishing-simulations",
        number:  "03",
        iconPath: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.29-1.29a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
        iconType: "path" as const,
        title:   "Phishing Simulation Exercises",
        body:    "The security team runs phishing simulation exercises one to two times every six months to test and reinforce employee awareness. Employees who interact with the simulated link receive targeted follow-up training on recognising and avoiding social engineering attacks.",
        tags:    ["1\u20132\u00d7 per 6 months", "Follow-up training", "Social engineering awareness"],
        isTimeline: false,
        link:    null,
    },
    {
        id:      "vulnerability-scans",
        number:  "04",
        iconPath: "",
        iconType: "search" as const,
        title:   "Ongoing Vulnerability Scans",
        body:    "Regular vulnerability scans are run across all company systems as an ongoing health check. These scans operate independently of the quarterly penetration tests, providing continuous coverage between scheduled assessments.",
        tags:    ["Continuous monitoring", "Entire company systems", "Independent of pen tests"],
        isTimeline: false,
        link:    null,
    },
    {
        id:      "disclosure-program",
        number:  "05",
        iconPath: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
        iconType: "path" as const,
        title:   "Public Vulnerability Disclosure Program",
        body:    "iAudit Global runs a public vulnerability disclosure program, allowing external security researchers to responsibly report issues they discover. We are committed to working collaboratively with the security research community.",
        tags:    ["Open to all researchers", "Responsible disclosure"],
        isTimeline: false,
        link:    { href: "/security/vulnerability-disclosure-policy", label: "View our disclosure policy \u2192" },
    },
    {
        id:      "access-control",
        number:  "06",
        iconPath: "M3 11h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V11zM7 11V7a5 5 0 0110 0v4",
        iconType: "lock" as const,
        title:   "Access Control Register",
        body:    "iAudit Global maintains a formal access control register covering every employee — whether permanent, temporary, or contracted — documenting exactly what systems and resources each person has access to. This register is reviewed and updated on a regular basis, and access is fully revoked whenever an employee leaves the company.",
        tags:    ["All employee types covered", "Regularly reviewed", "Immediate access revocation on departure"],
        isTimeline: false,
        link:    null,
    },
];

/* ─── Remediation severity rows ──────────────────────────── */
const REMEDIATION_ROWS = [
    { label: "Critical / High", sla: "2 business days", colour: "#dc2626" },
    { label: "Medium",          sla: "5 business days", colour: "#d97706" },
    { label: "Low",             sla: "7 business days", colour: "#2563eb" },
];

/* ─── Icon renderer ──────────────────────────────────────── */
function PracticeIcon({ type }: { type: string }) {
    const props = {
        width: "22", height: "22", viewBox: "0 0 24 24",
        fill: "none", stroke: "currentColor",
        strokeWidth: "1.8", strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    };

    switch (type) {
        case "clock":
            return (
                <svg {...props}>
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
            );
        case "search":
            return (
                <svg {...props}>
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            );
        case "lock":
            return (
                <svg {...props}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
            );
        case "path":
        default:
            return (
                <svg {...props}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            );
    }
}

/* ─── Main component ─────────────────────────────────────── */
export default function SecurityPracticesContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    /* ── Shared style atoms ── */
    const cardStyle: React.CSSProperties = {
        background: "#fff",
        border: `1px solid ${BORDER}`,
        borderRadius: "14px",
        padding: isMobile ? "1.5rem 1.25rem" : "2rem 2.25rem",
        position: "relative",
        height: "100%",
        boxSizing: "border-box",
    };

    const numberPill: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        background: GREEN,
        color: "#fff",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.02em",
        flexShrink: 0,
    };

    const tagStyle: React.CSSProperties = {
        display: "inline-block",
        padding: "0.28rem 0.7rem",
        borderRadius: "999px",
        background: GREEN_LIGHT,
        color: GREEN,
        fontSize: "0.78rem",
        fontWeight: 500,
        border: "1px solid #bbf0d1",
    };

    const sectionHeadingStyle: React.CSSProperties = {
        fontSize: isMobile ? "1rem" : "1.1rem",
        fontWeight: 700,
        color: GREY_DARK,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        margin: "0.35rem 0 0",
    };

    const bodyStyle: React.CSSProperties = {
        fontSize: "0.97rem",
        lineHeight: 1.75,
        color: GREY_BODY,
        margin: 0,
    };

    /* ── Render ── */
    return (
        <article style={{ fontFamily: PP_NEUE_MONTREAL, background: "#fff" }}>

            {/* ── Hero ── */}
            <SecurityPageHero
                isMobile={isMobile}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Trust & Security" },
                ]}
                eyebrow="Information Security"
                title="Trust & Security"
                subtitle="At iAudit Global, protecting our clients' data and our own systems is a core part of how we operate. Below is an overview of our security practices."
                imageSrc={SECURITY_HERO_IMAGES.disclosure}
                imageAlt="Cybersecurity professional reviewing system security on a monitor"
            />

            {/* ── Jump navigation ── */}
            <div
                style={{
                    borderBottom: `1px solid ${BORDER}`,
                    background: "#fff",
                    padding: isMobile ? "1rem 1.25rem" : "1.1rem 2rem",
                    position: "sticky",
                    top: "80px",
                    zIndex: 20,
                }}
            >
                <div
                    style={{
                        maxWidth: "960px",
                        margin: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: isMobile ? "0.5rem 0.65rem" : "0.5rem 0.85rem",
                        fontSize: "0.8rem",
                    }}
                >
                    {NAV_SECTIONS.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            style={{
                                color: GREY_DARK,
                                textDecoration: "none",
                                padding: "0.22rem 0.6rem",
                                border: `1px solid ${BORDER}`,
                                borderRadius: "4px",
                                background: "#fafafa",
                                fontWeight: 500,
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* ── Body ── */}
            <div
                style={{
                    maxWidth: "960px",
                    margin: "0 auto",
                    padding: isMobile ? "2.5rem 1.25rem 4rem" : "3.5rem 2rem 5rem",
                }}
            >

                {/* ─── Practice cards 01–06 ─── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: "1.25rem",
                        marginBottom: "1.25rem",
                    }}
                >
                    {PRACTICES.map((p) => (
                        <div
                            key={p.id}
                            id={p.id}
                            style={{ scrollMarginTop: "100px" }}
                        >
                            <div style={cardStyle}>
                                {/* Header row */}
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "1rem" }}>
                                    <div style={numberPill}>{p.number}</div>
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "10px",
                                            background: GREEN_LIGHT,
                                            color: GREEN,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <PracticeIcon type={p.iconType} />
                                    </div>
                                    <h2 style={sectionHeadingStyle}>{p.title}</h2>
                                </div>

                                {/* Body text */}
                                <p style={bodyStyle}>{p.body}</p>

                                {/* ── Remediation table (card 02 only) ── */}
                                {p.isTimeline && (
                                    <div
                                        style={{
                                            marginTop: "1.25rem",
                                            border: `1px solid ${BORDER}`,
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {REMEDIATION_ROWS.map((row, idx) => (
                                            <div
                                                key={row.label}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    padding: "0.7rem 1rem",
                                                    borderBottom: idx < REMEDIATION_ROWS.length - 1 ? `1px solid ${BORDER}` : "none",
                                                    background: idx % 2 === 0 ? "#fafafa" : "#fff",
                                                    gap: "1rem",
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                                                    <div
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                            borderRadius: "50%",
                                                            background: row.colour,
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: GREY_DARK }}>
                                                        {row.label}
                                                    </span>
                                                </div>
                                                <span
                                                    style={{
                                                        fontSize: "0.82rem",
                                                        fontWeight: 500,
                                                        color: GREY_MUTED,
                                                        background: "#f3f4f6",
                                                        padding: "0.2rem 0.65rem",
                                                        borderRadius: "999px",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {row.sla}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tags */}
                                {!p.isTimeline && p.tags.length > 0 && (
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1.1rem" }}>
                                        {p.tags.map((tag) => (
                                            <span key={tag} style={tagStyle}>{tag}</span>
                                        ))}
                                    </div>
                                )}

                                {/* Optional internal link */}
                                {p.link && (
                                    <div style={{ marginTop: "1rem" }}>
                                        <Link
                                            href={p.link.href}
                                            style={{
                                                color: GREEN,
                                                fontSize: "0.88rem",
                                                fontWeight: 600,
                                                textDecoration: "none",
                                                borderBottom: `1px solid ${GREEN}`,
                                                paddingBottom: "1px",
                                            }}
                                        >
                                            {p.link.label}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ─── Certifications ─── */}
                <div id="certifications" style={{ scrollMarginTop: "100px", marginBottom: "1.25rem" }}>
                    <div
                        style={{
                            ...cardStyle,
                            background: "#fafafa",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "1rem" }}>
                            <div style={numberPill}>07</div>
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    background: GREEN_LIGHT,
                                    color: GREEN,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6"/>
                                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                                </svg>
                            </div>
                            <h2 style={sectionHeadingStyle}>Certifications in Progress</h2>
                        </div>
                        <p style={bodyStyle}>
                            iAudit Global is currently working toward two widely recognised information security certifications, demonstrating our ongoing commitment to verified security excellence.
                        </p>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                gap: "1rem",
                                marginTop: "1.25rem",
                            }}
                        >
                            {[
                                {
                                    name: "Cyber Essentials",
                                    desc: "UK government-backed certification that helps protect organisations against the most common cyber threats.",
                                    status: "In Progress",
                                },
                                {
                                    name: "ISO 27001",
                                    desc: "International standard for information security management systems, recognised globally as the gold standard for information security.",
                                    status: "In Progress",
                                },
                            ].map((cert) => (
                                <div
                                    key={cert.name}
                                    style={{
                                        background: "#fff",
                                        border: `1px solid ${BORDER}`,
                                        borderRadius: "10px",
                                        padding: "1.1rem 1.25rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
                                        <span style={{ fontSize: "1rem", fontWeight: 700, color: GREY_DARK }}>{cert.name}</span>
                                        <span
                                            style={{
                                                fontSize: "0.72rem",
                                                fontWeight: 600,
                                                color: "#b45309",
                                                background: "#fffbeb",
                                                border: "1px solid #fde68a",
                                                borderRadius: "999px",
                                                padding: "0.2rem 0.6rem",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {cert.status}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: "0.88rem", color: GREY_MUTED, lineHeight: 1.65, margin: 0 }}>{cert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ─── ICO Registration ─── */}
                <div id="ico-registration" style={{ scrollMarginTop: "100px" }}>
                    <div
                        style={{
                            background: NAVY,
                            borderRadius: "14px",
                            padding: isMobile ? "2rem 1.25rem" : "2.5rem 2.5rem",
                            color: "#fff",
                        }}
                    >
                        {/* On mobile: badge centred at top, text below */}
                        {isMobile && (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem" }}>
                                <div style={{ width: "120px", height: "120px" }}>
                                    <Image
                                        src="/ico-logo.jpg"
                                        alt="ICO — Information Commissioner's Office registration badge"
                                        width={120}
                                        height={120}
                                        style={{ width: "100%", height: "auto", display: "block" }}
                                    />
                                </div>
                                <div style={{ textAlign: "center", fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>
                                    <div>Registered under UK GDPR</div>
                                    <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.75)", marginTop: "0.15rem" }}>Ref: ZB910189</div>
                                </div>
                            </div>
                        )}

                        <div
                            style={{
                                display: isMobile ? "block" : "grid",
                                gridTemplateColumns: "1fr auto",
                                gap: "2.5rem",
                                alignItems: "center",
                            }}
                        >
                            {/* Left: text */}
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1rem" }}>
                                    <div
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            background: "rgba(255,255,255,0.18)",
                                            color: "#fff",
                                            fontSize: "0.72rem",
                                            fontWeight: 700,
                                            flexShrink: 0,
                                        }}
                                    >
                                        08
                                    </div>
                                    <h2
                                        style={{
                                            fontSize: isMobile ? "1rem" : "1.1rem",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            color: "#fff",
                                            margin: 0,
                                        }}
                                    >
                                        ICO Data Protection Registration
                                    </h2>
                                </div>

                                <p
                                    style={{
                                        fontSize: "0.97rem",
                                        lineHeight: 1.75,
                                        color: "#d1d5db",
                                        margin: "0 0 1.5rem",
                                        maxWidth: "560px",
                                    }}
                                >
                                    IAuditGlobal Limited is registered with the Information Commissioner&apos;s Office (ICO) &mdash; the UK&apos;s independent body for data protection regulation &mdash; confirming our commitment to handling personal data lawfully, transparently, and securely in accordance with UK GDPR.
                                </p>

                                {/* Registration details grid */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, auto)",
                                        gap: isMobile ? "1.25rem" : "2.5rem",
                                        marginBottom: "1.75rem",
                                        justifyContent: isMobile ? "unset" : "start",
                                    }}
                                >
                                    {[
                                        { label: "Organisation",           value: "IAuditGlobal Limited" },
                                        { label: "Registration Reference", value: "ZB910189" },
                                        { label: "Date Registered",        value: "08 June 2025" },
                                        { label: "Expires",                value: "07 June 2027" },
                                    ].map((detail) => (
                                        <div key={detail.label}>
                                            <div
                                                style={{
                                                    fontSize: "0.68rem",
                                                    fontWeight: 600,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.08em",
                                                    color: "#9ca3af",
                                                    marginBottom: "0.25rem",
                                                }}
                                            >
                                                {detail.label}
                                            </div>
                                            <div style={{ fontSize: isMobile ? "0.88rem" : "0.95rem", fontWeight: 600, color: "#f9fafb" }}>
                                                {detail.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA button */}
                                <a
                                    href="https://ico.org.uk/ESDWebPages/Entry/ZB910189"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        background: "#fff",
                                        color: NAVY,
                                        fontWeight: 700,
                                        fontSize: isMobile ? "0.82rem" : "0.88rem",
                                        padding: isMobile ? "0.6rem 1rem" : "0.65rem 1.35rem",
                                        borderRadius: "999px",
                                        textDecoration: "none",
                                        fontFamily: PP_NEUE_MONTREAL,
                                        width: isMobile ? "100%" : "auto",
                                        justifyContent: isMobile ? "center" : "flex-start",
                                    }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                        <polyline points="15 3 21 3 21 9"/>
                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                    View ICO Registration Certificate
                                </a>
                            </div>

                            {/* Right: ICO badge — desktop only */}
                            {!isMobile && (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "160px",
                                        }}
                                    >
                                        <Image
                                            src="/ico-logo.jpg"
                                            alt="ICO — Information Commissioner's Office registration badge"
                                            width={160}
                                            height={160}
                                            style={{ width: "100%", height: "auto", display: "block" }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            textAlign: "center",
                                            fontSize: "0.7rem",
                                            color: "rgba(255,255,255,0.55)",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        <div>Registered under UK GDPR</div>
                                        <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.75)", marginTop: "0.15rem" }}>Ref: ZB910189</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ─── Footer strip ─── */}
                <div
                    style={{
                        marginTop: "2.5rem",
                        borderTop: `1px solid ${BORDER}`,
                        paddingTop: "1.75rem",
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: "1rem",
                    }}
                >
                    <p style={{ fontSize: "0.8rem", color: GREY_MUTED, lineHeight: 1.7, margin: 0 }}>
                        <strong style={{ color: GREY_DARK }}>IAuditGlobal Limited</strong><br />
                        Unit 17f, The Lansbury Estates, Lower Guildford Road, Knaphill, Woking, Surrey, GU21 2EP<br />
                        Registered with the Information Commissioner&apos;s Office &middot; ICO Registration No. ZB910189
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", flexShrink: 0 }}>
                        <Link
                            href="/security/vulnerability-disclosure-policy"
                            style={{
                                fontSize: "0.82rem",
                                fontWeight: 500,
                                color: GREEN,
                                textDecoration: "none",
                                borderBottom: `1px solid ${GREEN}`,
                                paddingBottom: "1px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Vulnerability Disclosure Policy
                        </Link>
                        <Link
                            href="/security/hall-of-fame"
                            style={{
                                fontSize: "0.82rem",
                                fontWeight: 500,
                                color: GREEN,
                                textDecoration: "none",
                                borderBottom: `1px solid ${GREEN}`,
                                paddingBottom: "1px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Hall of Fame
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
}
