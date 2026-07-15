"use client";

import Link from "next/link";
import Image from "next/image";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import { SecurityCopyEmailButton } from "@/components/security/SecurityMailLink";

const GREY_DARK = "#1f2937";
const GREY_LIGHT = "#d1d5db";

export type SecurityBreadcrumb = {
    label: string;
    href?: string;
};

type SecurityPageHeroProps = {
    isMobile: boolean;
    breadcrumbs: SecurityBreadcrumb[];
    eyebrow: string;
    title: string;
    subtitle?: string;
    cta?: boolean;
    imageSrc: string;
    imageAlt: string;
};

export default function SecurityPageHero({
    isMobile,
    breadcrumbs,
    eyebrow,
    title,
    subtitle,
    cta,
    imageSrc,
    imageAlt,
}: SecurityPageHeroProps) {
    return (
        <div
            style={{
                marginTop: "var(--page-top-offset)",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
                minHeight: isMobile ? "auto" : "400px",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <div
                style={{
                    background: GREY_DARK,
                    color: "#fff",
                    padding: isMobile ? "2rem 1.25rem 2.25rem" : "2.75rem 3rem 3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <nav
                    style={{
                        fontSize: "0.78rem",
                        color: GREY_LIGHT,
                        marginBottom: "1.25rem",
                        lineHeight: 1.6,
                    }}
                >
                    {breadcrumbs.map((crumb, index) => (
                        <span key={crumb.label}>
                            {crumb.href ? (
                                <Link href={crumb.href} style={{ color: GREY_LIGHT, textDecoration: "none" }}>
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span style={{ color: "#f9fafb" }}>{crumb.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <span style={{ margin: "0 0.35rem" }}> / </span>
                            )}
                        </span>
                    ))}
                </nav>

                <p
                    style={{
                        margin: "0 0 0.85rem",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#e5e7eb",
                    }}
                >
                    {eyebrow}
                </p>

                <h1
                    style={{
                        margin: "0 0 1.25rem",
                        fontSize: isMobile ? "1.75rem" : "2.35rem",
                        fontWeight: 700,
                        lineHeight: 1.12,
                        letterSpacing: "0.01em",
                        textTransform: "uppercase",
                        color: "#fff",
                        maxWidth: "520px",
                    }}
                >
                    {title}
                </h1>

                {subtitle && (
                    <p
                        style={{
                            margin: "0 0 1.5rem",
                            fontSize: "0.92rem",
                            lineHeight: 1.6,
                            color: "#d1d5db",
                            maxWidth: "480px",
                        }}
                    >
                        {subtitle}
                    </p>
                )}

                {cta && (
                    <SecurityCopyEmailButton
                        style={{
                            display: "inline-flex",
                            alignSelf: "flex-start",
                            justifyContent: "center",
                            padding: "0.7rem 1.35rem",
                            borderRadius: "999px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    />
                )}
            </div>

            <div
                style={{
                    position: "relative",
                    minHeight: isMobile ? "240px" : "100%",
                }}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
}

export const SECURITY_HERO_IMAGES = {
    disclosure:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=900&fit=crop&q=80",
    hallOfFame:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=900&fit=crop&q=80",
};
