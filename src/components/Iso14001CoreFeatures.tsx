"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const features = [
    {
        num: "01",
        title: "Evidence-Based Aspect Auditing",
        description:
            "Capture on-site photos of spill kits and bunding directly against environmental aspect audit questions.",
        accent: "light" as const,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "44px", height: "44px" }}>
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Full PDCA Loop Closing",
        description:
            "Ensure environmental nonconformities lead to verified corrective actions, driving continuous improvement across every site.",
        accent: "dark" as const,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "44px", height: "44px" }}>
                <path d="M21 12a9 9 0 11-3.6-7.2" strokeLinecap="round" />
                <path d="M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "ISO 14001:2026 Transition Tools",
        description:
            "Switch to the 2026 edition easily using gap analysis tools and pre-built, clause-mapped checklists.",
        accent: "light" as const,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "44px", height: "44px" }}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

function FeaturePanel({
    feature,
    flip,
    isMobile,
}: {
    feature: (typeof features)[number];
    flip: boolean;
    isMobile: boolean;
}) {
    const isDark = feature.accent === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : flip ? 48 : -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "1rem" : "2.5rem",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    order: isMobile ? 2 : flip ? 2 : 1,
                    textAlign: isMobile ? "left" : flip ? "left" : "right",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#058c42",
                        letterSpacing: "0.08em",
                        marginBottom: "0.5rem",
                        fontFamily: PP_NEUE_MONTREAL,
                    }}
                >
                    STEP {feature.num}
                </span>
                <h3
                    style={{
                        ...aboutType.featureH3(),
                        fontSize: isMobile ? "1.2rem" : "1.35rem",
                        marginBottom: "0.65rem",
                    }}
                >
                    {feature.title}
                </h3>
                <p style={{ ...aboutType.body(), margin: 0 }}>{feature.description}</p>
            </div>

            <motion.div
                whileHover={{ scale: 1.04, rotate: flip ? -1 : 1 }}
                transition={{ duration: 0.25 }}
                style={{
                    order: isMobile ? 1 : flip ? 1 : 2,
                    display: "flex",
                    justifyContent: isMobile ? "flex-start" : flip ? "flex-end" : "flex-start",
                }}
            >
                <div
                    style={{
                        width: isMobile ? "100%" : "240px",
                        maxWidth: "100%",
                        padding: "1.75rem",
                        borderRadius: "20px",
                        background: isDark ? "#003E3A" : "#f0fdf7",
                        border: isDark ? "none" : "1px solid #dcfce7",
                        color: isDark ? "#fff" : "#058c42",
                        boxShadow: isDark
                            ? "0 20px 50px rgba(0, 62, 58, 0.18)"
                            : "0 8px 30px rgba(5, 140, 66, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        minHeight: "120px",
                    }}
                >
                    {feature.icon}
                    <span
                        style={{
                            fontSize: "2.75rem",
                            fontWeight: 600,
                            lineHeight: 1,
                            opacity: isDark ? 0.3 : 0.2,
                            letterSpacing: "-0.04em",
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        {feature.num}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Iso14001CoreFeatures() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                padding: isMobile ? "3rem 0" : "5.5rem 0",
                background: "#fff",
                fontFamily: PP_NEUE_MONTREAL,
                borderTop: "1px solid #f0f0f0",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                    display: "grid",
                    gridTemplateColumns: isStacked ? "1fr" : "minmax(260px, 360px) 1fr",
                    gap: isStacked ? "2.5rem" : "3.5rem",
                    alignItems: "start",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        position: isStacked ? "relative" : "sticky",
                        top: isStacked ? "auto" : "100px",
                        textAlign: isMobile ? "center" : "left",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: isMobile ? "center" : "flex-start",
                            marginBottom: "1.2rem",
                        }}
                    >
                        <SectionTag isMobile={isMobile}>WHAT TO LOOK FOR</SectionTag>
                    </div>

                    <h2
                        style={{
                            ...aboutType.sectionH2(),
                            fontWeight: 600,
                            marginBottom: "1rem",
                            lineHeight: isMobile ? 1.2 : 1.1,
                        }}
                    >
                        Core Features Your ISO 14001 Software Must Have
                    </h2>

                    {!isStacked && (
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{
                                width: "64px",
                                height: "4px",
                                background: "#058c42",
                                borderRadius: "2px",
                                transformOrigin: "left",
                                marginTop: "1.5rem",
                            }}
                        />
                    )}
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "2.5rem" : "3.5rem" }}>
                    {features.map((feature, i) => (
                        <FeaturePanel
                            key={feature.num}
                            feature={feature}
                            flip={i % 2 === 1}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
