"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AuditMateChatCard from "@/components/AuditMateChatCard";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

export interface AuditMateShowcaseProps {
    title: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
    chatFirst?: boolean;
}

export default function AuditMateShowcase({
    title,
    description,
    ctaText = "Try Audit Mate",
    ctaHref = "https://apps.iaudit.global",
    chatFirst = true,
}: AuditMateShowcaseProps) {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                background: "#fff",
                padding: isMobile ? "3rem 0" : "5rem 0",
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
                    gridTemplateColumns: isStacked ? "1fr" : "minmax(0, 1.2fr) minmax(0, 1fr)",
                    gap: isStacked ? "2.5rem" : "3.75rem",
                    alignItems: "center",
                }}
            >
                <div style={{ order: isStacked ? (chatFirst ? 2 : 1) : chatFirst ? 1 : 2 }}>
                    <AuditMateChatCard isMobile={isMobile} />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        order: isStacked ? (chatFirst ? 1 : 2) : chatFirst ? 2 : 1,
                    }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            ...aboutType.sectionH2(),
                            margin: 0,
                            lineHeight: isMobile ? 1.2 : 1.1,
                        }}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18 }}
                        style={{
                            ...aboutType.heroLead(),
                            margin: 0,
                            paddingLeft: "16px",
                            borderLeft: "3px solid #058c42",
                        }}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.26 }}
                    >
                        <Link
                            href={ctaHref}
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
                                {ctaText}
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
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
