"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const criteria = [
    {
        num: "01",
        title: "Look for Practitioner-Led Design",
        description:
            "Choose software built by ISO auditors to ensure your internal audits follow real-world environmental risks.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "36px", height: "36px" }}>
                <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Prioritise Absolute Data Sovereignty",
        description:
            "Ensure your environmental findings stay private with a strict zero-access policy for total data security.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "36px", height: "36px" }}>
                <path d="M21 12a9 9 0 11-3.6-7.2" strokeLinecap="round" />
                <path d="M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeOpacity="0.4" />
            </svg>
        ),
    },
];

export default function Iso14001ChoosingSoftware() {
    const { isMobile } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                padding: isMobile ? "3rem 0" : "5rem 0",
                background: `
                    radial-gradient(ellipse 70% 50% at 100% 0%, rgba(5,140,66,0.04) 0%, transparent 55%),
                    #fafafa
                `,
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
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        maxWidth: "760px",
                        margin: isMobile ? "0 auto" : undefined,
                        marginBottom: isMobile ? "2.5rem" : "3.5rem",
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
                        <SectionTag isMobile={isMobile}>Choosing ISO 14001 software</SectionTag>
                    </div>
                    <h2
                        style={{
                            ...aboutType.sectionH2(),
                            fontWeight: 600,
                            margin: 0,
                            lineHeight: isMobile ? 1.2 : 1.1,
                            padding: isMobile ? "0 0.25rem" : 0,
                        }}
                    >
                        How to Choose the Right ISO 14001 Audit Management Software
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: isMobile ? "1.25rem" : "1.5rem",
                    }}
                >
                    {criteria.map((item, i) => (
                        <motion.article
                            key={item.num}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{
                                duration: 0.55,
                                delay: i * 0.12,
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
                                initial={{ scale: 0.85, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
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
                                    <span
                                        style={{
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            color: "#058c42",
                                            letterSpacing: "0.06em",
                                            fontFamily: PP_NEUE_MONTREAL,
                                        }}
                                    >
                                        {item.num}
                                    </span>
                                    <div
                                        style={{
                                            height: "2px",
                                            width: "24px",
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
