"use client";

import { motion } from "framer-motion";
import FounderAuditFlowCard from "@/components/FounderAuditFlowCard";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1] as const,
        },
    }),
};

export default function AuditorsFounderSection() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                background: "#fff",
                padding: isMobile ? "3.5rem 0" : "5rem 0",
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
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isStacked ? "1fr" : "minmax(0, 1.2fr) minmax(0, 1fr)",
                        gap: isStacked ? "2.5rem" : "3.75rem",
                        alignItems: "center",
                    }}
                >
                    <div style={{ order: isStacked ? 2 : 1 }}>
                        <FounderAuditFlowCard isMobile={isMobile} />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            order: isStacked ? 1 : 2,
                            textAlign: isMobile ? "center" : "left",
                            alignItems: isMobile ? "center" : "flex-start",
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    color: "#006644",
                                    fontWeight: 500,
                                    fontSize: isMobile ? "0.75rem" : "0.8rem",
                                    letterSpacing: "0.01em",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                <span style={{ fontSize: "1rem" }}>✦</span>
                                Founder&apos;s Perspective
                                <span style={{ fontSize: "1rem" }}>✦</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                style={{
                                    ...aboutType.sectionH2(),
                                    fontWeight: 700,
                                    fontSize: isMobile ? "2rem" : "clamp(2rem, 3.5vw, 3.2rem)",
                                    margin: 0,
                                    lineHeight: isMobile ? 1.25 : 1.1,
                                    letterSpacing: "-0.02em",
                                    width: "100%",
                                }}
                            >
                                Why We Built iAudit Global
                            </motion.h2>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                                width: "100%",
                                maxWidth: isMobile ? "100%" : "520px",
                            }}
                        >
                            <motion.p
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                style={{
                                    fontSize: isMobile ? "0.95rem" : "1.05rem",
                                    color: "#4b5563",
                                    lineHeight: 1.65,
                                    margin: 0,
                                    fontWeight: 400,
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                Internal audits are meant to test one thing: does the system
                                actually work when people are busy and under pressure? Too often,
                                audit time is spent formatting reports, chasing evidence and
                                closing actions that do not truly reduce risk.
                            </motion.p>

                            <motion.p
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                style={{
                                    fontSize: isMobile ? "0.95rem" : "1.05rem",
                                    color: "#111827",
                                    lineHeight: 1.65,
                                    margin: 0,
                                    fontWeight: 400,
                                    fontFamily: PP_NEUE_MONTREAL,
                                    paddingLeft: isMobile ? 0 : "16px",
                                    borderLeft: isMobile ? "none" : "3px solid #058c42",
                                    textAlign: isMobile ? "center" : "left",
                                }}
                            >
                                We built iAudit Global to reconnect planning, evidence, findings
                                and verified closure in one structured flow. The goal was simple:
                                make audits easier to follow than they are to ignore.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
