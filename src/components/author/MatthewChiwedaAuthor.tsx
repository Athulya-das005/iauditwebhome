"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const font = '"Pp Neue Montreal", sans-serif';
const PHOTO = "/images/mathew-chiweda.webp";
const LINKEDIN_URL = "https://www.linkedin.com/in/mathew-chiweda/";
const TRIAL_URL = "https://apps.iaudit.global";
const CALENDLY_URL = "https://calendly.com/iauditgloballtd/30min";

const expertise = ["ISO 9001", "ISO 14001", "ISO 45001", "Internal auditing", "PDCA audit workflows"];

export default function MatthewChiwedaAuthor() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div style={{ background: "#f7f8f5", minHeight: "100vh", fontFamily: font }}>
            <section
                style={{
                    padding: isMobile ? "calc(var(--page-top-offset) + 1.5rem) 1.25rem 2.5rem" : "calc(var(--page-top-offset) + 2.5rem) 2rem 3.5rem",
                }}
            >
                <div style={{ maxWidth: "980px", margin: "0 auto" }}>
                    <nav aria-label="Breadcrumb" style={{ marginBottom: isMobile ? "1.25rem" : "1.75rem" }}>
                        <ol
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.45rem",
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                                color: "#6b7280",
                                fontSize: "0.88rem",
                            }}
                        >
                            <li>
                                <Link href="/" style={{ color: "#006644", textDecoration: "none", fontWeight: 600 }}>
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li>
                                <span>Authors</span>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li style={{ color: "#111827", fontWeight: 600 }}>Matthew Chiweda</li>
                        </ol>
                    </nav>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "280px 1fr",
                            gap: isMobile ? "1.5rem" : "2.5rem",
                            alignItems: "start",
                        }}
                    >
                        <div
                            style={{
                                background: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: "1.25rem",
                                padding: isMobile ? "1.25rem" : "1.5rem",
                                boxShadow: "0 14px 40px rgba(16,47,32,0.06)",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "1",
                                    borderRadius: "1rem",
                                    overflow: "hidden",
                                    marginBottom: "1.1rem",
                                    background: "linear-gradient(135deg, #002e1d, #006644)",
                                }}
                            >
                                <Image
                                    src={PHOTO}
                                    alt="Matthew Chiweda"
                                    fill
                                    priority
                                    sizes={isMobile ? "100vw" : "280px"}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <p style={{ margin: "0 0 0.25rem", fontSize: "1.35rem", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em" }}>
                                Matthew Chiweda
                            </p>
                            <p
                                style={{
                                    margin: "0 0 1rem",
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "#006644",
                                }}
                            >
                                Co-founder & Managing Director
                            </p>
                            <p style={{ margin: "0 0 1rem", color: "#4b5563", lineHeight: 1.65, fontSize: "0.95rem" }}>
                                PDCA ISO Audit Specialist with 20+ years across quality, HSE and management systems.
                            </p>
                            <Link
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={linkedinBtn}
                            >
                                View LinkedIn profile
                            </Link>
                        </div>

                        <div>
                            <p
                                style={{
                                    margin: "0 0 0.75rem",
                                    color: "#006644",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    fontSize: "0.75rem",
                                }}
                            >
                                Author profile
                            </p>
                            <h1
                                style={{
                                    margin: "0 0 1.25rem",
                                    fontSize: isMobile ? "2rem" : "2.75rem",
                                    lineHeight: 1.12,
                                    letterSpacing: "-0.03em",
                                    color: "#10291d",
                                    fontWeight: 600,
                                }}
                            >
                                About Matthew Chiweda
                            </h1>
                            <p style={{ margin: "0 0 1rem", color: "#374151", lineHeight: 1.8, fontSize: "1.05rem" }}>
                                Matthew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global, with more than 20 years
                                of experience in quality, health and safety, environmental management and ISO management systems. His
                                work spans consultancy, internal auditing, implementation, training and site inspections across
                                construction, engineering, manufacturing and other operational sectors.
                            </p>
                            <p style={{ margin: "0 0 1.5rem", color: "#374151", lineHeight: 1.8, fontSize: "1.05rem" }}>
                                Matthew specialises in ISO 9001, ISO 14001 and ISO 45001, helping organisations build practical
                                management systems and prepare for effective audits. At iAudit Global, he combines hands-on audit
                                experience with a practical approach to improving audit planning, evidence capture, findings management
                                and continual improvement.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.55rem",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                {expertise.map((item) => (
                                    <span key={item} style={tagStyle}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                style={{
                    padding: isMobile ? "0 1.25rem 3rem" : "0 2rem 4rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "980px",
                        margin: "0 auto",
                        background: "linear-gradient(135deg, #003e3a 0%, #006644 100%)",
                        borderRadius: "1.25rem",
                        padding: isMobile ? "2rem 1.35rem" : "2.75rem 2.5rem",
                        color: "#fff",
                        boxShadow: "0 18px 48px rgba(0,62,58,0.18)",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 0.75rem",
                            fontSize: isMobile ? "1.65rem" : "2rem",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.2,
                            fontWeight: 600,
                        }}
                    >
                        Ready to improve your audit process?
                    </h2>
                    <p style={{ margin: "0 0 1.5rem", color: "rgba(255,255,255,0.86)", lineHeight: 1.7, maxWidth: "640px", fontSize: "1.02rem" }}>
                        Try iAudit Global free and manage your ISO audits, findings, evidence and corrective actions in one platform.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "0.75rem",
                            marginBottom: "1.75rem",
                        }}
                    >
                        <Link href={TRIAL_URL} target="_blank" rel="noopener noreferrer" style={primaryCta}>
                            Start your free trial
                        </Link>
                    </div>
                    <p style={{ margin: "0 0 1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.65, fontSize: "0.98rem" }}>
                        Prefer to discuss your requirements first? Book a free consultation with the iAudit Global team.
                    </p>
                    <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={secondaryCta}>
                        Book a free consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

const tagStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    background: "#ecfdf3",
    color: "#166534",
    border: "1px solid #bbf7d0",
    borderRadius: "999px",
    padding: "0.35rem 0.8rem",
    fontSize: "0.82rem",
    fontWeight: 600,
};

const linkedinBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    background: "#0a66c2",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "0.65rem",
    padding: "0.8rem 1rem",
    fontWeight: 700,
    fontSize: "0.88rem",
};

const primaryCta: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    color: "#006644",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.9rem 1.45rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    minWidth: "220px",
};

const secondaryCta: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.85rem 1.35rem",
    fontWeight: 700,
    fontSize: "0.92rem",
    border: "1px solid rgba(255,255,255,0.45)",
};
