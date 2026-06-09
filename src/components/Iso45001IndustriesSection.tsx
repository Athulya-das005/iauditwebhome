"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const industryItems = [
    {
        title: "Construction",
        description:
            "Manage site safety, monitor subcontractor compliance, and audit high-risk activities across multiple complex project locations.",
        slug: "construction-iso-audit-software",
        bgImage: "/images/construction-bg.jpg",
    },
    {
        title: "Manufacturing",
        description:
            "Audit machinery guarding, LOTO procedures, and manual handling risks while tracking safety nonconformities to closure.",
        slug: "manufacturing-iso-audit-software",
        bgImage: "/images/manufacturing-bg.jpg",
    },
    {
        title: "Healthcare",
        description:
            "Ensure staff safety by standardising audits for sharps handling, patient moving, and clinical environment risk controls.",
        slug: "healthcare-compliance-software",
        bgImage: "/images/healthcare-bg.png",
    },
    {
        title: "Logistics & Transport",
        description:
            "Audit warehouse safety, vehicle maintenance, and driver wellbeing across diverse distribution networks and terminal locations.",
        slug: "transport-and-logistics-iso-audit-software",
        bgImage: "/images/logistics-bg.jpg",
    },
    {
        title: "Oil & Gas",
        description:
            "Manage process safety, permit-to-work compliance, and emergency response readiness in high-hazard, regulated industrial environments.",
        slug: "mining-compliance-software",
        bgImage: "/images/mining-bg.jpg",
    },
    {
        title: "Basic Metals & Fabrication",
        description:
            "Audit welding fumes, lifting safety, and machinery hazards while tracking fabrication-specific safety risks to closure.",
        slug: "basic-metals-and-fabrication-iso-audit-software",
        bgImage: "/images/metal-fabrication-bg.jpg",
    },
];

export default function Iso45001IndustriesSection() {
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
                            maxWidth: "820px",
                            margin: "0 auto",
                            lineHeight: isMobile ? 1.2 : 1.1,
                            padding: isMobile ? "0 0.25rem" : 0,
                        }}
                    >
                        Industries We Empower with Smarter ISO 45001 Audits
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
                                        alt={item.title}
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
