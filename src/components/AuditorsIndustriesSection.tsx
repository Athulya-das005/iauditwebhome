"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";
import type { ReactNode } from "react";

type IndustryCard = {
    title: string;
    description: string;
    slug: string;
    icon: ReactNode;
};

function GearIcon() {
    return (
        <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#006644"
            strokeWidth="1.8"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
        >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </motion.svg>
    );
}

function MetalIcon() {
    return (
        <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#006644"
            strokeWidth="1.8"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
            <path d="M6 20h12l2-8H4l2 8z" />
            <path d="M8 12V8a4 4 0 018 0v4" />
            <motion.path
                d="M10 16h4"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        </motion.svg>
    );
}

function ConstructionIcon() {
    return (
        <motion.svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="1.8">
            <motion.path
                d="M2 20h20M5 20V9l7-5 7 5v11"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <rect x="9" y="13" width="6" height="7" />
        </motion.svg>
    );
}

function LogisticsIcon() {
    return (
        <motion.svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="1.8">
            <motion.g
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <rect x="1" y="8" width="15" height="10" rx="1" />
                <path d="M16 11h4l2 3v4h-6v-7z" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
            </motion.g>
        </motion.svg>
    );
}

function HealthcareIcon() {
    return (
        <motion.svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="1.8">
            <motion.path
                d="M12 5v14M5 12h14"
                animate={{ scaleY: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
            />
            <rect x="3" y="3" width="18" height="18" rx="4" />
        </motion.svg>
    );
}

function EngineeringIcon() {
    return (
        <motion.svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="1.8">
            <motion.circle
                cx="12"
                cy="12"
                r="3"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "12px 12px" }}
            />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </motion.svg>
    );
}

const industries: IndustryCard[] = [
    {
        title: "Manufacturing",
        description:
            "Manage ISO 9001 and 14001 while tracking production quality and maintenance across every shift.",
        slug: "manufacturing-iso-audit-software",
        icon: <GearIcon />,
    },
    {
        title: "Basic Metal & Fabrication",
        description:
            "Reduce scrap and rework by standardising welding audits and material traceability across the workshop.",
        slug: "basic-metals-and-fabrication-iso-audit-software",
        icon: <MetalIcon />,
    },
    {
        title: "Construction",
        description:
            "Track site compliance and safety across multiple projects with mobile evidence and risk-based scheduling.",
        slug: "construction-iso-audit-software",
        icon: <ConstructionIcon />,
    },
    {
        title: "Logistics & Transport",
        description:
            "Maintain fleet safety and warehouse standards with structured checklists for multi-site operational excellence.",
        slug: "transport-and-logistics-iso-audit-software",
        icon: <LogisticsIcon />,
    },
    {
        title: "Healthcare",
        description:
            "Ensure patient safety and compliance with digitised audits for clinical standards and facility management.",
        slug: "healthcare-compliance-software",
        icon: <HealthcareIcon />,
    },
    {
        title: "Engineering Services",
        description:
            "Standardise service quality and project delivery while maintaining clear audit trails for client reviews.",
        slug: "engineering-iso-audit-software",
        icon: <EngineeringIcon />,
    },
];

export default function AuditorsIndustriesSection() {
    const { isMobile, isTablet } = useIndustriesBreakpoints();
    const cols = isMobile ? 1 : isTablet ? 2 : 3;

    return (
        <section
            id="auditors-industries"
            style={{
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                background: "#fafafa",
                fontFamily: PP_NEUE_MONTREAL,
                borderTop: "1px solid #f0f0f0",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        ...aboutType.sectionH2(),
                        fontSize: isMobile
                            ? "clamp(1.75rem, 5vw, 2.1rem)"
                            : "clamp(2rem, 3.5vw, 2.75rem)",
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        textAlign: "center",
                        maxWidth: "720px",
                        margin: "0 auto 2.5rem",
                    }}
                >
                    Audit Management software designed for key industries
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gap: isMobile ? "1rem" : "1.25rem",
                    }}
                >
                    {industries.map((item, i) => (
                        <motion.article
                            key={item.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{
                                duration: 0.5,
                                delay: (i % cols) * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -4 }}
                            style={{ height: "100%" }}
                        >
                            <Link
                                href={`/industries/${item.slug}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    background: "#fff",
                                    border: "1px solid #e8e8e8",
                                    borderRadius: "16px",
                                    padding: isMobile ? "1.35rem 1.25rem" : "1.5rem 1.4rem",
                                    textDecoration: "none",
                                    color: "inherit",
                                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 12px 32px rgba(5,140,66,0.1)";
                                    e.currentTarget.style.borderColor = "#bbf7d0";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 1px 3px rgba(0,0,0,0.04)";
                                    e.currentTarget.style.borderColor = "#e8e8e8";
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "12px",
                                        background: "#f0fdf4",
                                        border: "1px solid #dcfce7",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.1rem",
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <h3
                                    style={{
                                        fontSize: isMobile ? "1.05rem" : "1.12rem",
                                        fontWeight: 600,
                                        color: "#111827",
                                        margin: "0 0 0.6rem 0",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: isMobile ? "0.88rem" : "0.92rem",
                                        color: "#6b7280",
                                        lineHeight: 1.65,
                                        margin: "0 0 1.25rem 0",
                                        flex: 1,
                                    }}
                                >
                                    {item.description}
                                </p>

                                <span
                                    className="btn-green-first-animate"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "0.55rem 1rem",
                                        fontSize: "0.82rem",
                                        fontWeight: 600,
                                        borderRadius: "8px",
                                        width: "100%",
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    <span>Learn more</span>
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: isMobile ? "2rem" : "2.5rem",
                    }}
                >
                    <Link
                        href="/industries"
                        className="btn-outline-animate"
                        style={{
                            padding: "0.75rem 1.75rem",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontFamily: PP_NEUE_MONTREAL,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "8px",
                            width: isMobile ? "100%" : "auto",
                            maxWidth: isMobile ? "340px" : "none",
                            justifyContent: "center",
                        }}
                    >
                        <span>
                            View more
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ marginLeft: "6px", verticalAlign: "middle" }}
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
