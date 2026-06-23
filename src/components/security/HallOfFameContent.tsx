"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import { hallOfFameResearchers } from "@/data/hallOfFameResearchers";
import SecurityPageHero, { SECURITY_HERO_IMAGES } from "@/components/security/SecurityPageHero";
import { SecurityCopyEmailButton } from "@/components/security/SecurityMailLink";

const GREY_DARK = "#1f2937";
const GREY_BODY = "#4b5563";
const GREY_MUTED = "#6b7280";
const BORDER = "#e5e7eb";

function ResearcherEntry({
    name,
    linkedIn,
    twitter,
    report,
    date,
}: {
    name: string;
    linkedIn?: string;
    twitter?: string;
    report: string;
    date: string;
}) {
    const linkStyle = {
        color: GREY_DARK,
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        wordBreak: "break-all" as const,
    };

    return (
        <article
            style={{
                padding: "1.35rem 0",
                borderBottom: `1px solid ${BORDER}`,
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: GREY_BODY,
            }}
        >
            <p style={{ margin: "0 0 0.35rem", fontWeight: 700, color: GREY_DARK }}>
                Name: {name}
            </p>
            {linkedIn && (
                <p style={{ margin: "0 0 0.35rem" }}>
                    LinkedIn:{" "}
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {linkedIn}
                    </a>
                </p>
            )}
            {twitter && (
                <p style={{ margin: "0 0 0.35rem" }}>
                    X (Twitter):{" "}
                    <a href={twitter} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {twitter}
                    </a>
                </p>
            )}
            <p style={{ margin: "0 0 0.35rem" }}>{report}</p>
            <p style={{ margin: 0, color: GREY_MUTED, fontSize: "0.92rem" }}>{date}</p>
        </article>
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
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                    }}
                >
                    List of security researchers
                </h2>

                <hr style={{ border: "none", borderTop: `1px solid ${BORDER}`, margin: "0 0 0.5rem" }} />

                {hallOfFameResearchers.length > 0 ? (
                    <div>
                        {hallOfFameResearchers.map((researcher, index) => (
                            <ResearcherEntry key={`${researcher.name}-${researcher.date}-${index}`} {...researcher} />
                        ))}
                    </div>
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
