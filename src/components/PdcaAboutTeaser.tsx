"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const standards = ["ISO 9001", "ISO 14001", "ISO 45001"];
const pdcaSteps = ["Plan", "Do", "Check", "Act"];

export default function PdcaAboutTeaser() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            id="about-iaudit"
            style={{
                padding: isMobile ? "3.5rem 0" : "5rem 0",
                background: "#ffffff",
                fontFamily: PP_NEUE_MONTREAL,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "-5%",
                    width: "45vw",
                    height: "45vw",
                    maxWidth: "520px",
                    maxHeight: "520px",
                    background:
                        "radial-gradient(circle, rgba(5,140,66,0.07) 0%, rgba(255,255,255,0) 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "-10%",
                    left: "-8%",
                    width: "40vw",
                    height: "40vw",
                    maxWidth: "480px",
                    maxHeight: "480px",
                    background:
                        "radial-gradient(circle, rgba(0,62,58,0.05) 0%, rgba(255,255,255,0) 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: isStacked ? "1fr" : "1.05fr 0.95fr",
                        gap: isStacked ? "2.5rem" : "3.5rem",
                        alignItems: "center",
                        background:
                            "linear-gradient(135deg, #f0fdf7 0%, #ffffff 45%, #fafafa 100%)",
                        borderRadius: isMobile ? "20px" : "28px",
                        border: "1px solid #dcfce7",
                        boxShadow:
                            "0 4px 24px rgba(5, 140, 66, 0.08), 0 24px 64px rgba(5, 140, 66, 0.1)",
                        padding: isMobile ? "2rem 1.5rem" : "3rem 3.5rem",
                        overflow: "hidden",
                    }}
                >
                    {/* Left — copy */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                color: "#006644",
                                fontWeight: 500,
                                fontSize: "0.9rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <span>✦</span>
                            <span>Built by auditors</span>
                            <span>✦</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.15 }}
                            style={{
                                ...aboutType.sectionH2(),
                                margin: "0 0 1.25rem 0",
                                lineHeight: isMobile ? 1.15 : 1.1,
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            About iAudit Global
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.22 }}
                            style={{
                                ...aboutType.bodyMedium(),
                                margin: "0 0 1.75rem 0",
                                maxWidth: "520px",
                                textAlign: isMobile ? "center" : "left",
                                marginLeft: isMobile ? "auto" : undefined,
                                marginRight: isMobile ? "auto" : undefined,
                            }}
                        >
                            iAudit Global is ISO audit management software built by certified auditors.
                            It helps organisations run PDCA-driven ISO 9001, ISO 14001 and ISO 45001
                            audits with checklists, evidence, actions and reporting in one platform.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.3 }}
                            style={{
                                display: "flex",
                                justifyContent: isMobile ? "center" : "flex-start",
                            }}
                        >
                            <Link
                                href="/about"
                                className="btn-outline-animate"
                                style={{
                                    padding: "0.75rem 1.75rem",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    ...aboutType.ctaButton(),
                                    width: isMobile ? "100%" : "auto",
                                    justifyContent: "center",
                                    maxWidth: isMobile ? "340px" : "none",
                                }}
                            >
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                    Learn more about iAudit Global
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        style={{ display: "inline-flex" }}
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </motion.span>
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right — animated visual */}
                    <div
                        style={{
                            position: "relative",
                            minHeight: isMobile ? "280px" : "320px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: "400px",
                                margin: "0 auto",
                            }}
                        >
                            {/* Central platform card */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    background: "#fff",
                                    borderRadius: "20px",
                                    padding: "1.5rem",
                                    boxShadow: "0 20px 50px rgba(5, 140, 66, 0.15)",
                                    border: "1px solid #e5e7eb",
                                    position: "relative",
                                    zIndex: 2,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    <Image
                                        src="/iAudit Global-01.png"
                                        alt="iAudit Global"
                                        width={120}
                                        height={40}
                                        style={{ height: "auto", objectFit: "contain" }}
                                    />
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.45rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    {standards.map((std, i) => (
                                        <motion.span
                                            key={std}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + i * 0.1 }}
                                            style={{
                                                fontSize: "0.68rem",
                                                fontWeight: 600,
                                                padding: "0.35rem 0.65rem",
                                                borderRadius: "6px",
                                                background: "#f0fdf4",
                                                color: "#006644",
                                                border: "1px solid #bbf7d0",
                                            }}
                                        >
                                            {std}
                                        </motion.span>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(4, 1fr)",
                                        gap: "0.4rem",
                                    }}
                                >
                                    {pdcaSteps.map((step, i) => (
                                        <motion.div
                                            key={step}
                                            initial={{ opacity: 0, y: 8 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.55 + i * 0.08 }}
                                            style={{
                                                textAlign: "center",
                                                padding: "0.5rem 0.25rem",
                                                borderRadius: "8px",
                                                background:
                                                    i === 3 ? "#006644" : "#f9fafb",
                                                color: i === 3 ? "#fff" : "#374151",
                                                fontSize: "0.62rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.02em",
                                            }}
                                        >
                                            {step}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating badges */}
                            {[
                                {
                                    label: "Evidence",
                                    top: "-8%",
                                    left: "-6%",
                                    delay: 0.6,
                                },
                                {
                                    label: "Actions",
                                    top: "8%",
                                    right: "-10%",
                                    delay: 0.9,
                                },
                                {
                                    label: "Reporting",
                                    bottom: "5%",
                                    left: "-8%",
                                    delay: 1.1,
                                },
                            ].map((badge, bi) => (
                                <motion.div
                                    key={badge.label}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        opacity: { delay: badge.delay, type: "spring", stiffness: 200 },
                                        scale: { delay: badge.delay, type: "spring", stiffness: 200 },
                                        y: {
                                            duration: 3.5 + bi * 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: badge.delay,
                                        },
                                    }}
                                    style={{
                                        position: "absolute",
                                        top: badge.top,
                                        left: badge.left,
                                        right: badge.right,
                                        bottom: badge.bottom,
                                        background: "rgba(255,255,255,0.95)",
                                        backdropFilter: "blur(8px)",
                                        WebkitBackdropFilter: "blur(8px)",
                                        padding: "0.5rem 0.85rem",
                                        borderRadius: "10px",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                        border: "1px solid rgba(5,140,66,0.12)",
                                        fontSize: "0.72rem",
                                        fontWeight: 600,
                                        color: "#006644",
                                        zIndex: 3,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {badge.label}
                                </motion.div>
                            ))}

                            {/* Decorative ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: "340px",
                                    height: "340px",
                                    marginTop: "-170px",
                                    marginLeft: "-170px",
                                    borderRadius: "50%",
                                    border: "1px dashed rgba(5, 140, 66, 0.15)",
                                    pointerEvents: "none",
                                    zIndex: 0,
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
