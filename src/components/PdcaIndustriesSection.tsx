"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const industryItems = [
    {
        title: "Manufacturing",
        description:
            "Use the PDCA cycle to find root causes for defects and verify process controls are working.",
        slug: "manufacturing-iso-audit-software",
        bgImage: "/images/manufacturing-bg.webp",
        accent: "#006644",
    },
    {
        title: "Basic Metal & Fabrication",
        description:
            "Apply the PDCA cycle to improve weld quality, material traceability, and critical safety controls.",
        slug: "basic-metals-and-fabrication-iso-audit-software",
        bgImage: "/images/metal-fabrication-bg.webp",
        accent: "#0d9488",
    },
    {
        title: "Construction",
        description:
            "Use PDCA to apply lessons learned from one project to the next, reducing on-site risk.",
        slug: "construction-iso-audit-software",
        bgImage: "/images/construction-bg.webp",
        accent: "#059669",
    },
    {
        title: "Logistics & Transport",
        description:
            "Standardise service delivery and drive operational efficiency with a consistent, data-backed PDCA workflow.",
        slug: "transport-and-logistics-iso-audit-software",
        bgImage: "/images/logistics-bg.webp",
        accent: "#047857",
    },
    {
        title: "Healthcare",
        description:
            "Improve patient safety and clinical outcomes by applying a structured PDCA process to audits.",
        slug: "healthcare-compliance-software",
        bgImage: "/images/healthcare-bg.webp",
        accent: "#006644",
    },
    {
        title: "Engineering Services",
        description:
            "Guarantee service quality and meet technical specifications with a PDCA cycle verifying every step.",
        slug: "engineering-iso-audit-software",
        bgImage: "/images/engineering-bg.webp",
        accent: "#0f766e",
    },
];

export default function PdcaIndustriesSection() {
    const { isMobile, isTablet } = useIndustriesBreakpoints();
    const cols = isMobile ? 1 : isTablet ? 2 : 3;

    return (
        <section
            id="pdca-industries"
            style={{
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                background: `
                    radial-gradient(ellipse 80% 60% at 10% 100%, rgba(5,140,66,0.07) 0%, transparent 55%),
                    radial-gradient(ellipse 70% 50% at 90% 0%, rgba(0,77,64,0.05) 0%, transparent 50%),
                    #f0fdf7
                `,
                fontFamily: PP_NEUE_MONTREAL,
                borderTop: "1px solid #dcfce7",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        textAlign: "center",
                        marginBottom: isMobile ? "2.5rem" : "3.5rem",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}>
                        <SectionTag isMobile={isMobile}>Industries we support</SectionTag>
                    </div>
                    <h2
                        style={{
                            ...aboutType.sectionH2(),
                            fontWeight: 700,
                            maxWidth: "780px",
                            margin: "0 auto",
                            lineHeight: isMobile ? 1.2 : 1.1,
                            padding: isMobile ? "0 0.25rem" : 0,
                        }}
                    >
                        Driving Continual Improvement Across Key Industries
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gap: isMobile ? "1.25rem" : "1.5rem",
                        padding: isMobile ? "0" : "0.5rem",
                    }}
                >
                    {industryItems.map((item, i) => (
                        <motion.article
                            key={item.slug}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.55,
                                delay: (i % cols) * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -6 }}
                            style={{ height: "100%" }}
                        >
                            <Link
                                href={`/industries/${item.slug}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    background: "#fff",
                                    border: "1px solid #eef0f3",
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                    textDecoration: "none",
                                    color: "inherit",
                                    boxShadow:
                                        "0 4px 16px rgba(5, 140, 66, 0.08), 0 12px 32px rgba(5, 140, 66, 0.06)",
                                    transition:
                                        "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 8px 28px rgba(5, 140, 66, 0.14), 0 20px 48px rgba(5, 140, 66, 0.12)";
                                    e.currentTarget.style.borderColor = "#bbf7d0";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 16px rgba(5, 140, 66, 0.08), 0 12px 32px rgba(5, 140, 66, 0.06)";
                                    e.currentTarget.style.borderColor = "#eef0f3";
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        height: isMobile ? "150px" : "168px",
                                        overflow: "hidden",
                                        background: "#e5e7eb",
                                    }}
                                >
                                    <Image
                                        src={item.bgImage}
                                        alt={`${item.title} industry for PDCA audit management software`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{
                                            objectFit: "cover",
                                            transition: "transform 0.5s ease",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,62,58,0.55) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
                                        }}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, x: -8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.05 }}
                                        style={{
                                            position: "absolute",
                                            bottom: "12px",
                                            left: "14px",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "5px",
                                            padding: "4px 10px",
                                            borderRadius: "6px",
                                            background: "rgba(255,255,255,0.92)",
                                            backdropFilter: "blur(6px)",
                                            fontSize: "0.62rem",
                                            fontWeight: 700,
                                            color: item.accent,
                                            letterSpacing: "0.04em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "6px",
                                                height: "6px",
                                                borderRadius: "50%",
                                                background: item.accent,
                                            }}
                                        />
                                        PDCA
                                    </motion.div>
                                </div>

                                <div
                                    style={{
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: isMobile ? "1.25rem" : "1.4rem 1.5rem 1.5rem",
                                    }}
                                >
                                    <h3
                                        style={{
                                            ...aboutType.cardH3(isMobile),
                                            fontWeight: 600,
                                            marginBottom: "0.55rem",
                                            lineHeight: 1.3,
                                            color: "#0d1117",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            ...aboutType.body(),
                                            margin: 0,
                                            flex: 1,
                                            fontSize: isMobile ? "0.92rem" : "0.95rem",
                                            lineHeight: 1.65,
                                        }}
                                    >
                                        {item.description}
                                    </p>

                                    <motion.span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            marginTop: "1rem",
                                            fontSize: "0.82rem",
                                            fontWeight: 600,
                                            color: "#006644",
                                        }}
                                        whileHover={{ x: 4 }}
                                    >
                                        Learn more
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </motion.span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: isMobile ? "2.5rem" : "3rem",
                    }}
                >
                    {/* Offline until /industries directory is live
                    <Link
                        href="/industries"
                        className="btn-outline-animate"
                        style={{
                            padding: "0.75rem 1.75rem",
                            fontSize: "0.9rem",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontFamily: PP_NEUE_MONTREAL,
                            width: isMobile ? "100%" : "auto",
                            maxWidth: isMobile ? "340px" : "none",
                        }}
                    >
                        <span>
                            View more industries
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
                    */}
                </motion.div>
            </div>
        </section>
    );
}
