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
            "Ensure product consistency, manage supplier quality, and maintain critical process controls.",
        slug: "manufacturing-iso-audit-software",
        bgImage: "/images/manufacturing-bg.jpg",
    },
    {
        title: "Construction",
        description:
            "Manage project quality, control documentation, and ensure compliance across complex jobsites.",
        slug: "construction-iso-audit-software",
        bgImage: "/images/construction-bg.jpg",
    },
    {
        title: "Logistics & Transport",
        description:
            "Standardize service delivery, track customer requirements, and ensure consistent on-time performance.",
        slug: "transport-and-logistics-iso-audit-software",
        bgImage: "/images/logistics-bg.jpg",
    },
    {
        title: "Engineering Services",
        description:
            "Guarantee service quality, manage project documentation, and meet precise technical specifications.",
        slug: "engineering-iso-audit-software",
        bgImage: "/images/engineering-bg.jpg",
    },
    {
        title: "Healthcare",
        description:
            "Improve patient safety by standardizing clinical, lab, and administrative process controls.",
        slug: "healthcare-compliance-software",
        bgImage: "/images/healthcare-bg.png",
    },
    {
        title: "Hospitality",
        description:
            "Deliver consistent guest experiences by standardizing service, housekeeping, and F&B quality.",
        slug: "hospitality-iso-audit-software",
        bgImage: "/images/hospitality-bg.jpg",
    },
];

export default function Iso9001IndustriesSection() {
    const { isMobile, isTablet } = useIndustriesBreakpoints();
    const cols = isMobile ? 1 : isTablet ? 2 : 3;

    return (
        <section
            style={{
                padding: isMobile ? "3rem 0" : "5rem 0",
                background: `
                    radial-gradient(ellipse 80% 60% at 10% 100%, rgba(5,140,66,0.06) 0%, transparent 55%),
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
                        <SectionTag isMobile={isMobile}>PROVEN IN YOUR INDUSTRY</SectionTag>
                    </div>
                    <h2
                        style={{
                            ...aboutType.sectionH2(),
                            fontWeight: 600,
                            maxWidth: "820px",
                            margin: "0 auto",
                            lineHeight: isMobile ? 1.2 : 1.1,
                        }}
                    >
                        Industries We Empower with Smarter ISO 9001 Audits
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gap: isMobile ? "1.25rem" : "1.5rem",
                    }}
                >
                    {industryItems.map((item, i) => (
                        <motion.article
                            key={item.slug}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{
                                duration: 0.55,
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
                                    border: "1px solid #eef0f3",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    textDecoration: "none",
                                    color: "inherit",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(5, 140, 66, 0.1)";
                                    e.currentTarget.style.borderColor = "#bbf7d0";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                                    e.currentTarget.style.borderColor = "#eef0f3";
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        height: isMobile ? "140px" : "160px",
                                        overflow: "hidden",
                                        background: "#e5e7eb",
                                    }}
                                >
                                    <Image
                                        src={item.bgImage}
                                        alt={`${item.title} industry for ISO 9001 audit management software`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: "cover", transition: "transform 0.45s ease" }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)",
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: isMobile ? "1.25rem" : "1.5rem",
                                    }}
                                >
                                    <h3
                                        style={{
                                            ...aboutType.cardH3(isMobile),
                                            fontWeight: 500,
                                            marginBottom: "0.5rem",
                                            lineHeight: 1.3,
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
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: isMobile ? "2.5rem" : "3rem",
                    }}
                >
                    <Link
                        href="/industries"
                        className="btn-outline-animate"
                        style={{
                            padding: "0.75rem 1.6rem",
                            fontSize: "0.9rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        <span>
                            View More Industries
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
