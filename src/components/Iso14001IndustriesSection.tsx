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
            "Audit spill kits, waste segregation, and permit compliance across diverse project sites and environmental zones.",
        slug: "construction-iso-audit-software",
        bgImage: "/images/construction-bg.jpg",
    },
    {
        title: "Manufacturing",
        description:
            "Manage emissions, effluents, and resource efficiency while tracking ISO 14001 nonconformities through to verified closure.",
        slug: "manufacturing-iso-audit-software",
        bgImage: "/images/manufacturing-bg.jpg",
    },
    {
        title: "Logistics",
        description:
            "Track transport impacts, fuel efficiency, and spill readiness across warehouses and distribution networks in one place.",
        slug: "transport-and-logistics-iso-audit-software",
        bgImage: "/images/logistics-bg.jpg",
    },
    {
        title: "Chemicals & Pharmaceuticals",
        description:
            "Audit REACH compliance, hazardous waste streams, and chemical storage with secure, practitioner-led environmental checklists.",
        slug: "pharmaceutical-compliance-audit-software",
        bgImage: "/images/pharmaceutical-bg.jpg",
    },
    {
        title: "Food & Beverage",
        description:
            "Monitor water usage, effluent quality, and sustainable waste management while ensuring audit consistency across locations.",
        slug: "food-and-beverage-iso-audit-software",
        bgImage: "/images/food-beverage-bg.jpg",
    },
    {
        title: "Facilities Management",
        description:
            "Centralise energy audits, waste tracking, and environmental permit compliance for every property in your portfolio.",
        slug: "facilities-management-iso-audit-software",
        bgImage: "/images/facilities-bg.jpg",
    },
];

export default function Iso14001IndustriesSection() {
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
                            padding: isMobile ? "0 0.25rem" : 0,
                        }}
                    >
                        ISO 14001 Audit Management Software Across Every Sector
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
                                        alt={`${item.title} industry for ISO 14001 audit management software`}
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
