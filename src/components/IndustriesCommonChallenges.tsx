"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const challengeFeatures = [
    {
        title: "Fragmented Evidence & Broken Trails",
        description:
            "Audit data is scattered across spreadsheets, folders, and emails, making it impossible to follow.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
        ),
    },
    {
        title: "Weak Corrective Action Follow-Up",
        description:
            "Findings are logged, but actions are not tracked to closure, causing repeat non-conformities every year.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

const overviewItems = [
    { label: "Scattered audit evidence", color: "#058c42" },
    { label: "Broken finding trails", color: "#94a3b8" },
    { label: "Open corrective actions", color: "#e2e8f0" },
    { label: "Repeat nonconformities", color: "#f1f5f9" },
];

const statCards = [
    { count: "4+", text: "Disconnected Systems", x: 60, delay: 1.0 },
    { count: "62%", text: "Findings Without Closure", x: 0, delay: 1.2 },
    { count: "Repeat", text: "Annual Nonconformities", x: 100, delay: 1.4 },
    { count: "Broken", text: "PDCA Improvement Loop", x: 20, delay: 1.6 },
];

export default function IndustriesCommonChallenges() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                background: "#fff",
                padding: isMobile ? "3rem 0" : "5.5rem 0",
                overflow: "hidden",
                fontFamily: PP_NEUE_MONTREAL,
                borderTop: "1px solid #f0f0f0",
            }}
        >
            <div
                style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                    display: "grid",
                    gridTemplateColumns: isStacked ? "1fr" : "1fr 1fr",
                    gap: isStacked ? "50px" : "80px",
                    alignItems: "center",
                }}
            >
                {/* Left: Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: isMobile ? "1.25rem" : "1.5rem",
                        textAlign: isMobile ? "center" : "left",
                        alignItems: isMobile ? "center" : "flex-start",
                    }}
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: "0.75rem" }}
                        >
                            <SectionTag isMobile={isMobile}>Common challenges</SectionTag>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                ...aboutType.sectionH2(),
                                marginBottom: "1rem",
                            }}
                        >
                            The Universal Challenge Across All Industries
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            ...aboutType.sectionLead(),
                            maxWidth: isMobile ? "100%" : "540px",
                            marginBottom: "1rem",
                        }}
                    >
                        Internal ISO audits fail for the same reason in every sector: audit plans, evidence,
                        findings and actions are scattered. This breaks traceability, hides trends, and makes
                        continual improvement difficult to prove.
                    </motion.p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: isMobile ? "24px" : "30px",
                            marginTop: "0.5rem",
                            width: "100%",
                        }}
                    >
                        {challengeFeatures.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    alignItems: isMobile ? "center" : "flex-start",
                                    textAlign: isMobile ? "center" : "left",
                                }}
                            >
                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        background: "#f9fafb",
                                        borderRadius: "0.75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "1px solid #f3f4f6",
                                    }}
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    style={{
                                        ...aboutType.cardH3(isMobile),
                                        fontWeight: 500,
                                        margin: 0,
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        ...aboutType.body(),
                                        margin: 0,
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Visual mockup (Security-style ditto animation) */}
                <div
                    style={{
                        position: "relative",
                        transform: isMobile ? "scale(1)" : "scale(0.95)",
                        transformOrigin: isMobile ? "center" : "center right",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: isMobile ? "20px" : "0",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            background: "#fff",
                            borderRadius: "1.5rem",
                            padding: isMobile ? "20px" : "30px",
                            boxShadow: "0 40px 100px rgba(0,0,0,0.06)",
                            border: "1px solid #f3f4f6",
                            position: "relative",
                            zIndex: 2,
                            width: "100%",
                            maxWidth: isMobile ? "100%" : "540px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "24px",
                                flexDirection: isMobile ? "column" : "row",
                                gap: isMobile ? "12px" : "0",
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            <div
                                style={{
                                    ...aboutType.cardH3(isMobile),
                                    fontWeight: 500,
                                    color: "#111827",
                                }}
                            >
                                Audit Traceability Overview
                            </div>
                            <div
                                style={{
                                    background: "#058c42",
                                    color: "#fff",
                                    padding: "4px 12px",
                                    borderRadius: "30px",
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                At risk <span style={{ fontSize: "0.85rem" }}>↑</span>
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                gap: isMobile ? "24px" : "40px",
                                alignItems: "flex-end",
                                flexDirection: isMobile ? "column-reverse" : "row",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    flex: 1,
                                    width: "100%",
                                }}
                            >
                                {overviewItems.map((item, idx) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + idx * 0.15, duration: 0.8, ease: "easeOut" }}
                                        style={{ display: "flex", alignItems: "center", gap: "10px" }}
                                    >
                                        <div
                                            style={{
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                background: item.color,
                                            }}
                                        />
                                        <span
                                            style={{
                                                ...aboutType.caption(),
                                                color: "#4b5563",
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    gap: isMobile ? "8px" : "12px",
                                    justifyContent: "center",
                                    width: isMobile ? "100%" : "auto",
                                }}
                            >
                                {[
                                    { h: isMobile ? "60px" : "80px", c: "#058c42" },
                                    { h: isMobile ? "80px" : "110px", c: "#94a3b8" },
                                    { h: isMobile ? "100px" : "140px", c: "#058c42" },
                                    { h: isMobile ? "70px" : "90px", c: "#e2e8f0" },
                                    { h: isMobile ? "90px" : "120px", c: "#ef4444" },
                                ].map((bar, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: bar.h }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            width: isMobile ? "30px" : "24px",
                                            background: bar.c,
                                            borderRadius: "5px",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div
                        style={{
                            marginTop: "24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: isMobile ? "16px" : "20px",
                            position: "relative",
                            width: "100%",
                            alignItems: isMobile ? "center" : "flex-start",
                        }}
                    >
                        {!isStacked && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: "0",
                                    top: "0",
                                    width: "360px",
                                    height: "320px",
                                    borderLeft: "2px solid #f3f4f6",
                                    borderBottom: "2px solid #f9fafb",
                                    borderRadius: "0 0 0 50px",
                                    zIndex: 1,
                                    marginLeft: "-40px",
                                    marginTop: "-30px",
                                    pointerEvents: "none",
                                }}
                            />
                        )}

                        {statCards.map((card, idx) => (
                            <motion.div
                                key={card.text}
                                initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 20 : 0 }}
                                whileInView={{ opacity: 1, x: isStacked ? 0 : card.x, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: card.delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={!isStacked ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
                                style={{
                                    background: "#fff",
                                    padding: "12px 20px",
                                    borderRadius: "1.25rem",
                                    boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                                    border: "1px solid #f3f4f6",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    width: isMobile ? "100%" : "fit-content",
                                    zIndex: 2,
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background: "#f3f4f6",
                                        overflow: "hidden",
                                        border: "2px solid #fff",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                        flexShrink: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        color: "#058c42",
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    {idx + 1}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span
                                        style={{
                                            ...aboutType.bodyMedium(),
                                            fontWeight: 500,
                                            color: "#111827",
                                        }}
                                    >
                                        {card.count}
                                    </span>
                                    <span
                                        style={{
                                            ...aboutType.label(),
                                        }}
                                    >
                                        {card.text}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
