"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const supportItems = [
    {
        num: "01",
        title: "Risk-Based Planning, Simplified",
        description:
            "Use the smart planner to schedule risk-based audits and ensure full QMS coverage.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "36px", height: "36px" }}>
                <path d="M12 20V10" strokeLinecap="round" />
                <path d="M18 20V4" strokeLinecap="round" />
                <path d="M6 20v-4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Capture Compliant Evidence",
        description:
            "Link findings and photos directly to ISO 9001 clauses for a clear audit trail.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "36px", height: "36px" }}>
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Automate Your Audit Reporting",
        description:
            "Generate professional reports and dashboards in minutes, ready for your next management review.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "36px", height: "36px" }}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" />
                <line x1="8" y1="17" x2="13" y2="17" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Close the Loop on Findings",
        description:
            "Our closed-loop workflow ensures every non-conformity is tracked from identification through to verification.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "36px", height: "36px" }}>
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
            </svg>
        ),
    },
];

export default function Iso9001ComplianceSupport() {
    const { isMobile, isTablet } = useIndustriesBreakpoints();
    const cols = isMobile ? 1 : isTablet ? 2 : 2;

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
                        <SectionTag isMobile={isMobile}>iAudit for ISO 9001 compliance</SectionTag>
                    </div>
                    <h2
                        style={{
                            ...aboutType.sectionH2(),
                            fontWeight: 600,
                            maxWidth: "820px",
                            margin: "0 auto",
                        }}
                    >
                        How iAudit ISO 9001 Software Supports Compliance
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gap: isMobile ? "1.25rem" : "1.5rem",
                    }}
                >
                    {supportItems.map((item, i) => (
                        <motion.article
                            key={item.num}
                            initial={{ opacity: 0, y: 32, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{
                                duration: 0.55,
                                delay: i * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -4 }}
                            style={{
                                display: "flex",
                                gap: isMobile ? "1rem" : "1.25rem",
                                alignItems: "flex-start",
                                background: "#fff",
                                border: "1px solid #eef0f3",
                                borderRadius: "16px",
                                padding: isMobile ? "1.35rem" : "1.75rem",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                                position: "relative",
                                overflow: "hidden",
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
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                                style={{
                                    flexShrink: 0,
                                    width: isMobile ? "52px" : "56px",
                                    height: isMobile ? "52px" : "56px",
                                    borderRadius: "12px",
                                    background: "linear-gradient(135deg, #f0fdf7 0%, #dcfce7 100%)",
                                    border: "1px solid #bbf7d0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#058c42",
                                }}
                            >
                                {item.icon}
                            </motion.div>

                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    <motion.span
                                        initial={{ opacity: 0, x: -8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        style={{
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            color: "#058c42",
                                            letterSpacing: "0.06em",
                                            fontFamily: PP_NEUE_MONTREAL,
                                        }}
                                    >
                                        {item.num}
                                    </motion.span>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "24px" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                                        style={{
                                            height: "2px",
                                            background: "#058c42",
                                            borderRadius: "1px",
                                            opacity: 0.5,
                                        }}
                                    />
                                </div>

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
                                        fontSize: isMobile ? "0.92rem" : "0.95rem",
                                    }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
