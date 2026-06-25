"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import { hallOfFameResearchers, type HallOfFameResearcher } from "@/data/hallOfFameResearchers";
import SecurityPageHero, { SECURITY_HERO_IMAGES } from "@/components/security/SecurityPageHero";
import { SecurityCopyEmailButton } from "@/components/security/SecurityMailLink";

const GREY_DARK = "#1f2937";
const GREY_BODY = "#4b5563";
const GREY_MUTED = "#6b7280";
const BORDER = "#e5e7eb";
const LINK_BLUE = "#2563eb";

function LinkedInIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function ReporterTable({
    researchers,
    isMobile,
    yearLabel,
}: {
    researchers: HallOfFameResearcher[];
    isMobile: boolean;
    yearLabel: string;
}) {
    const sorted = [...researchers].sort((a, b) => b.reportCount - a.reportCount);

    const linkStyle = {
        color: LINK_BLUE,
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        fontWeight: 500,
    };

    return (
        <div style={{ marginTop: "0.5rem" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr auto" : "1fr 180px",
                    gap: isMobile ? "0.5rem 1rem" : "0",
                    padding: isMobile ? "0.85rem 0" : "0.9rem 0",
                    borderBottom: `1px solid ${BORDER}`,
                    fontWeight: 700,
                    color: GREY_DARK,
                    fontSize: "0.95rem",
                }}
            >
                <div>Reporter</div>
                <div style={{ textAlign: "right" }}>{yearLabel}</div>
            </div>

            {sorted.map((researcher) => (
                <div
                    key={researcher.linkedIn}
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr auto" : "1fr 180px",
                        gap: isMobile ? "0.5rem 1rem" : "0",
                        alignItems: "center",
                        padding: isMobile ? "0.85rem 0" : "0.9rem 0",
                        borderBottom: `1px solid ${BORDER}`,
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                        color: GREY_BODY,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.35rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: 600,
                                    color: GREY_DARK,
                                }}
                            >
                                {researcher.name}
                            </span>
                            <a
                                href={researcher.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${researcher.name} on LinkedIn`}
                                title={`${researcher.name} on LinkedIn`}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#0a66c2",
                                    textDecoration: "none",
                                    flexShrink: 0,
                                }}
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                        <a
                            href={researcher.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                ...linkStyle,
                                fontSize: "0.88rem",
                                wordBreak: "break-all",
                            }}
                        >
                            {researcher.linkedIn.replace(/^https?:\/\//, "")}
                        </a>
                    </div>
                    <div
                        style={{
                            textAlign: "right",
                            fontWeight: 500,
                            color: GREY_DARK,
                            fontVariantNumeric: "tabular-nums",
                        }}
                    >
                        {researcher.reportCount}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function HallOfFameContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const linkStyle = {
        color: GREY_DARK,
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        fontWeight: 500,
    };

    return (
        <article style={{ fontFamily: PP_NEUE_MONTREAL, background: "#fff" }}>
            <SecurityPageHero
                isMobile={isMobile}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Vulnerability Disclosure Policy", href: "/security/vulnerability-disclosure-policy" },
                    { label: "Hall of Fame" },
                ]}
                eyebrow="Information Security"
                title="Hall of Fame"
                cta
                imageSrc={SECURITY_HERO_IMAGES.hallOfFame}
                imageAlt="Team collaborating in a modern office environment"
            />

            {/* Researcher list */}
            <div
                style={{
                    maxWidth: "920px",
                    margin: "0 auto",
                    padding: isMobile ? "2rem 1.25rem 3rem" : "3rem 2rem 4rem",
                }}
            >
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: GREY_BODY, margin: "0 0 1rem" }}>
                    To continuously improve the security of our platform and protect our customers&apos; data,
                    iAudit Global encourages security researchers to responsibly disclose vulnerabilities in our
                    publicly accessible systems. Once a finding has been validated and remediated, researchers may
                    be acknowledged on this page with a brief description of their report and a link to their
                    LinkedIn or X (Twitter) profile, where provided.
                </p>

                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: GREY_BODY, margin: "0 0 1rem" }}>
                    <strong style={{ color: GREY_DARK }}>How to report a vulnerability?</strong>{" "}
                    Visit our{" "}
                    <Link href="/security/vulnerability-disclosure-policy" style={linkStyle}>
                        Vulnerability Disclosure Policy
                    </Link>{" "}
                    page for further details.
                </p>

                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: GREY_BODY, margin: "0 0 1rem" }}>
                    We&apos;re grateful to the security researchers listed below for responsibly disclosing
                    vulnerabilities through our Vulnerability Disclosure Program. Their findings help us strengthen
                    the security of our platform and protect our users. We appreciate the time, skill, and care they
                    put into making the digital ecosystem safer.
                </p>

                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: GREY_BODY, margin: "0 0 2.5rem", fontWeight: 500 }}>
                    Thank you for helping us stay secure.
                </p>

                <h2
                    style={{
                        fontSize: isMobile ? "1.2rem" : "1.4rem",
                        fontWeight: 700,
                        color: GREY_DARK,
                        margin: "0 0 1rem",
                        lineHeight: 1.3,
                    }}
                >
                    Security researchers
                </h2>

                {hallOfFameResearchers.length > 0 ? (
                    <ReporterTable
                        researchers={hallOfFameResearchers}
                        isMobile={isMobile}
                        yearLabel="Accepted reports"
                    />
                ) : (
                    <div
                        style={{
                            padding: isMobile ? "1.75rem 0" : "2.25rem 0",
                            borderBottom: `1px solid ${BORDER}`,
                        }}
                    >
                        <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.75, color: GREY_MUTED }}>
                            No public listings yet. Researchers with at least one accepted and validated report will
                            appear here. Submit a report through our{" "}
                            <Link href="/security/vulnerability-disclosure-policy" style={linkStyle}>
                                Vulnerability Disclosure Program
                            </Link>.
                        </p>
                    </div>
                )}
            </div>

            {/* Bottom CTA */}
            <div style={{ background: GREY_DARK, padding: isMobile ? "1.75rem 1.25rem" : "2rem 2rem" }}>
                <div
                    style={{
                        maxWidth: "920px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "stretch" : "center",
                        justifyContent: "space-between",
                        gap: "1.25rem",
                    }}
                >
                    <p style={{ margin: 0, color: "#f9fafb", fontSize: isMobile ? "1.05rem" : "1.1rem", fontWeight: 600 }}>
                        Report a security vulnerability to iAudit Global
                    </p>
                    <SecurityCopyEmailButton
                        style={{
                            display: "inline-flex",
                            justifyContent: "center",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "6px",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                        }}
                    />
                </div>
            </div>
        </article>
    );
}
