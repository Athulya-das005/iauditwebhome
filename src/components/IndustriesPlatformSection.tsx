"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const features = [
    {
        title: "A Connected PDCA Workflow",
        desc: "Every audit follows a structured Plan-Do-Check-Act cycle, from planning to verified corrective action closure.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "42px", height: "42px" }}>
                <path d="M3 16.5L10 9.5L14 13.5L21 6.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 6.5H21V11.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="18" width="4" height="2" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                <rect x="9" y="15" width="4" height="5" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                <rect x="15" y="12" width="4" height="8" rx="0.5" fill="currentColor" fillOpacity="0.1" />
            </svg>
        ),
    },
    {
        title: "Mobile Evidence Capture",
        desc: "Auditors can capture on-site photos and notes directly on the shop floor or project site.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "42px", height: "42px" }}>
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <circle cx="12" cy="18" r="1" fill="currentColor" />
                <path d="M9 6h6" strokeLinecap="round" />
                <path d="M10 10h4M10 13h4" strokeLinecap="round" strokeOpacity="0.6" />
                <circle cx="16" cy="8" r="3" strokeOpacity="0.5" />
                <path d="M15 8h2M16 7v2" strokeLinecap="round" strokeOpacity="0.5" />
            </svg>
        ),
    },
    {
        title: "Zero-Access Data Security",
        desc: "Your audit findings are yours alone. We operate a strict zero-access policy for total confidentiality.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "42px", height: "42px" }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function IndustriesPlatformSection() {
    const { isMobile } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                padding: isMobile ? "2.5rem 0 2rem" : "4rem 0 2.5rem",
                background: "#fff",
                position: "relative",
                overflow: "hidden",
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
                <div
                    style={{
                        marginBottom: isMobile ? "2rem" : "5rem",
                        maxWidth: "800px",
                        textAlign: isMobile ? "center" : "left",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                            style={{ marginBottom: "1.2rem", display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}
                    >
                        <SectionTag isMobile={isMobile}>One platform for all industries</SectionTag>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.07 }}
                        style={{
                            ...aboutType.sectionH2(),
                            marginBottom: "1.1rem",
                        }}
                    >
                        One Platform, Tailored for Every Environment
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.14 }}
                        style={{
                            ...aboutType.sectionLead(),
                            maxWidth: "600px",
                            margin: isMobile ? "0 auto" : undefined,
                        }}
                    >
                        Run consistent ISO audits across industries, adapting checklists and evidence capture to how
                        each environment works.
                    </motion.p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: isMobile ? "2.5rem" : "4rem",
                        marginTop: "2rem",
                    }}
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                            style={{
                                position: "relative",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            <motion.div
                                whileHover="hover"
                                initial="initial"
                                style={{
                                    cursor: "default",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: isMobile ? "center" : "flex-start",
                                }}
                            >
                                <motion.div
                                    variants={{
                                        initial: { background: "#f9fafb", scale: 1, color: "#111827" },
                                        hover: {
                                            background: "#fff",
                                            scale: 1.08,
                                            color: "#14664A",
                                            boxShadow: "0 15px 35px rgba(20, 102, 74, 0.12)",
                                        },
                                    }}
                                    style={{
                                        width: isMobile ? "72px" : "84px",
                                        height: isMobile ? "72px" : "84px",
                                        borderRadius: "18px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: isMobile ? "1.25rem" : "2rem",
                                        transition: "box-shadow 0.3s ease",
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3
                                    style={{
                                        ...aboutType.featureH3(),
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    {feature.title}
                                </h3>

                                <div style={{ position: "relative", paddingBottom: "1.5rem" }}>
                                    <p
                                        style={{
                                            ...aboutType.bodyMedium(),
                                            margin: 0,
                                        }}
                                    >
                                        {feature.desc}
                                    </p>

                                    <motion.div
                                        variants={{
                                            initial: { width: "0%", opacity: 0 },
                                            hover: { width: "100%", opacity: 1 },
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            height: "2px",
                                            background: "#14664A",
                                            borderRadius: "2px",
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
