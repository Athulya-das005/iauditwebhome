"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CaseStudyAuditAnimation from "@/components/case-study/CaseStudyAuditAnimation";
import { apexCaseStudy, moreCaseStudies } from "@/data/caseStudies";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

const ACCENT = "#006644";
const HEADER_BG = "#f1f6f3";
const GREEN_PILL_BG = "#e3f0ea";
const GREEN_PILL_TEXT = "#0d4a38";

function Pill({ children, variant = "green" }: { children: React.ReactNode; variant?: "green" | "blue" }) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.38rem 0.8rem",
                borderRadius: "999px",
                background: variant === "blue" ? "#e8eef8" : GREEN_PILL_BG,
                color: variant === "blue" ? "#1e3a5f" : GREEN_PILL_TEXT,
                fontSize: "0.82rem",
                fontWeight: 500,
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            {children}
        </span>
    );
}

function CompanyCard({ children, isMobile }: { children: React.ReactNode; isMobile: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
                background: "#fff",
                padding: isMobile ? "1.5rem" : "2rem",
                boxShadow: "0 16px 48px rgba(0, 102, 68, 0.08)",
                border: "1px solid #d4e8de",
                clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0 100%)",
                borderRadius: "4px",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            {children}
        </motion.div>
    );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 8.5",
                borderRadius: "16px",
                overflow: "hidden",
                marginTop: "2rem",
            }}
        >
            <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 70vw" />
        </motion.div>
    );
}

function BlockQuote({ text, author, role }: { text: string; author: string; role: string }) {
    return (
        <blockquote
            style={{
                margin: "2rem 0 0",
                paddingLeft: "1.25rem",
                borderLeft: `4px solid ${ACCENT}`,
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <p style={{ margin: "0 0 1rem", fontSize: "1.05rem", lineHeight: 1.7, color: "#111827", fontWeight: 500 }}>
                &ldquo;{text}&rdquo;
            </p>
            <footer style={{ fontSize: "0.92rem", color: "#6b7280" }}>
                — {author}, {role}
            </footer>
        </blockquote>
    );
}

export default function CaseStudyPageContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const data = apexCaseStudy;

    useEffect(() => {
        const check = () => {
            const w = window.innerWidth;
            setIsMobile(w < 768);
            setIsTablet(w < 1100);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const stacked = isTablet;

    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden", background: "#fff" }}>
            {/* Hero header */}
            <section style={{ background: HEADER_BG, padding: isMobile ? "2rem 1.25rem 2.5rem" : "2.5rem 2rem 3.5rem" }}>
                <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                    <nav style={{ fontSize: "0.88rem", color: "#6b7280", marginBottom: "1.5rem" }}>
                        <Link href="/case-studies" style={{ color: "#6b7280", textDecoration: "none" }}>
                            Case studies
                        </Link>
                        <span style={{ margin: "0 0.5rem" }}>&gt;</span>
                        <span style={{ color: "#111827" }}>{data.breadcrumb}</span>
                    </nav>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: stacked ? "1fr" : "1.15fr 0.85fr",
                            gap: stacked ? "2rem" : "3rem",
                            alignItems: "start",
                        }}
                    >
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    fontSize: isMobile ? "2.2rem" : "clamp(2.5rem, 4.6vw, 3.5rem)",
                                    fontWeight: 500,
                                    lineHeight: 1.12,
                                    letterSpacing: "-0.03em",
                                    color: "#111827",
                                    margin: "0 0 2rem",
                                    maxWidth: "760px",
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                {data.title}
                            </motion.h1>

                            <div style={{ marginBottom: "1.5rem" }}>
                                <div
                                    style={{
                                        fontSize: "0.72rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.08em",
                                        color: "#6b7280",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    INSIGHTS FROM
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                                    <div
                                        style={{
                                            width: "56px",
                                            height: "56px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            position: "relative",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Image src={data.insightsFrom.avatar} alt={data.insightsFrom.name} fill style={{ objectFit: "cover", objectPosition: "center 15%" }} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: PP_NEUE_MONTREAL }}>
                                            {data.insightsFrom.name.toUpperCase()}
                                        </div>
                                        <div style={{ fontSize: "0.88rem", color: "#6b7280", fontFamily: PP_NEUE_MONTREAL }}>{data.insightsFrom.role}</div>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                    gap: isMobile ? "1.25rem" : "2rem",
                                    maxWidth: "560px",
                                    alignItems: "start",
                                }}
                            >
                                <div style={{ borderRight: isMobile ? "none" : "1px solid #c5ddd2", paddingRight: isMobile ? 0 : "1.5rem" }}>
                                    <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: "#6b7280", marginBottom: "0.6rem", fontFamily: PP_NEUE_MONTREAL }}>
                                        USE CASES
                                    </div>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                        {data.useCases.map((item) => (
                                            <Pill key={item} variant="green">{item}</Pill>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: "#6b7280", marginBottom: "0.6rem", fontFamily: PP_NEUE_MONTREAL }}>
                                        DEPARTMENTS
                                    </div>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                        {data.departments.map((item) => (
                                            <Pill key={item} variant="green">{item}</Pill>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CompanyCard isMobile={isMobile}>
                            <div
                                style={{
                                    fontSize: "1.35rem",
                                    fontWeight: 700,
                                    color: "#111827",
                                    letterSpacing: "-0.02em",
                                    marginBottom: "1.25rem",
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                {data.company.logoText.toLowerCase()}
                            </div>
                            <p style={{ margin: "0 0 1.5rem", fontSize: "0.95rem", lineHeight: 1.75, color: "#4b5563", fontFamily: PP_NEUE_MONTREAL }}>
                                {data.company.description}
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
                                {data.company.tags.map((tag) => (
                                    <Pill key={tag} variant="green">{tag}</Pill>
                                ))}
                            </div>
                        </CompanyCard>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section style={{ padding: isMobile ? "2.5rem 1.25rem 4rem" : "3.5rem 2rem 5rem" }}>
                <div
                    style={{
                        maxWidth: "1180px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: stacked ? "1fr" : "280px 1fr",
                        gap: stacked ? "2.5rem" : "4rem",
                        alignItems: "start",
                    }}
                >
                    {/* Sticky sidebar */}
                    <aside style={{ position: stacked ? "static" : "sticky", top: "100px" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <h2 style={{ fontSize: "1.15rem", fontWeight: 600, margin: "0 0 1.25rem", color: "#111827" }}>
                                Key Results:
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {data.keyResults.map((item) => (
                                    <div key={item.label}>
                                        <div style={{ fontSize: "1.75rem", fontWeight: 600, color: ACCENT, lineHeight: 1.1 }}>
                                            {item.value}
                                        </div>
                                        <div style={{ fontSize: "0.92rem", color: "#4b5563", lineHeight: 1.5, marginTop: "0.25rem" }}>
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            style={{
                                background: "#f8faf9",
                                borderRadius: "14px",
                                padding: "1.35rem",
                                border: "1px solid #e8f0ec",
                            }}
                        >
                            <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: "0 0 1rem", lineHeight: 1.4, color: "#111827" }}>
                                See what iAudit Global can do for you
                            </h3>
                            <Link
                                href="https://apps.iaudit.global"
                                className="btn-animate"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    padding: "0.8rem 1rem",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    marginBottom: "0.85rem",
                                }}
                            >
                                <span>Get started free</span>
                            </Link>
                            <Link
                                href="/case-studies"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontSize: "0.88rem",
                                    fontWeight: 600,
                                    color: "#111827",
                                    textDecoration: "none",
                                }}
                            >
                                Or see more case studies
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </div>
                    </aside>

                    {/* Main column */}
                    <div>
                        <CaseStudyAuditAnimation />
                        <p style={{ margin: "1.25rem 0 0", fontSize: "0.92rem", lineHeight: 1.7, color: "#6b7280", fontStyle: "italic" }}>
                            Apex Engineering unified ISO 9001 and ISO 14001 audits across three production sites with iAudit Global — protecting audit history, accelerating reporting, and giving leadership real-time visibility of corrective actions.
                        </p>

                        {/* Challenge */}
                        <h2 style={{ fontSize: isMobile ? "1.65rem" : "2rem", fontWeight: 600, margin: "3rem 0 1.25rem", color: "#111827" }}>
                            The Challenge
                        </h2>
                        <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "#374151", whiteSpace: "pre-line" }}>
                            {data.challenge.intro}
                        </div>
                        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                            {data.challenge.points.map((point) => (
                                <div key={point.num} style={{ display: "grid", gridTemplateColumns: isMobile ? "48px 1fr" : "64px 1fr", gap: "1rem" }}>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#7dd3b0", lineHeight: 1 }}>{point.num}</div>
                                    <div>
                                        <p style={{ margin: "0 0 0.5rem", fontSize: "1rem", lineHeight: 1.75, color: "#374151" }}>
                                            <strong style={{ color: "#111827" }}>{point.title}:</strong> {point.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <BlockQuote {...data.challenge.quote} />
                        <SectionImage src={data.challenge.image} alt="Manufacturing facility audit challenge" />

                        {/* Solution */}
                        <h2 style={{ fontSize: isMobile ? "1.65rem" : "2rem", fontWeight: 600, margin: "3rem 0 1.25rem", color: "#111827" }}>
                            The Solution
                        </h2>
                        <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "#374151", whiteSpace: "pre-line" }}>
                            {data.solution.intro}
                        </div>
                        <p style={{ margin: "1.5rem 0 0", fontSize: "1rem", lineHeight: 1.8, color: "#374151" }}>
                            This is what the team appreciates most about iAudit Global:
                        </p>
                        <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {data.solution.highlights.map((item) => (
                                <p key={item.title} style={{ margin: 0, fontSize: "1rem", lineHeight: 1.8, color: "#374151" }}>
                                    <strong style={{ color: "#111827" }}>{item.title}:</strong> {item.text}
                                </p>
                            ))}
                        </div>
                        <SectionImage src={data.solution.image} alt="Unified audit platform across manufacturing sites" />

                        {/* Results */}
                        <h2 style={{ fontSize: isMobile ? "1.65rem" : "2rem", fontWeight: 600, margin: "3rem 0 1.25rem", color: "#111827" }}>
                            The Results
                        </h2>
                        <p style={{ margin: "0 0 1.25rem", fontSize: "1rem", lineHeight: 1.8, color: "#374151" }}>
                            {data.results.intro}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {data.results.points.map((item) => (
                                <p key={item.title} style={{ margin: 0, fontSize: "1rem", lineHeight: 1.8, color: "#374151" }}>
                                    <strong style={{ color: "#111827" }}>{item.title}:</strong> {item.text}
                                </p>
                            ))}
                        </div>
                        <BlockQuote {...data.results.quote} />
                    </div>
                </div>
            </section>

            {/* More case studies */}
            <section style={{ background: "#fafafa", padding: isMobile ? "3rem 1.25rem" : "4rem 2rem", borderTop: "1px solid #f0f0f0" }}>
                <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: isMobile ? "flex-start" : "center",
                            justifyContent: "space-between",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <h2 style={{ fontSize: isMobile ? "1.5rem" : "1.85rem", fontWeight: 600, margin: 0, color: "#111827" }}>
                            More Case Studies
                        </h2>
                        <Link
                            href="/case-studies"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "0.65rem 1rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                background: "#fff",
                                color: "#111827",
                                fontSize: "0.88rem",
                                fontWeight: 600,
                                textDecoration: "none",
                            }}
                        >
                            View More
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                            gap: "1.25rem",
                        }}
                    >
                        {moreCaseStudies.map((card, index) => (
                            <motion.article
                                key={card.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                style={{
                                    background: "#fff",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    border: "1px solid #ececec",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                                }}
                            >
                                <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
                                    <Image src={card.image} alt={card.logoText} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "rgba(0,0,0,0.28)",
                                        }}
                                    >
                                        <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.35rem", letterSpacing: "0.04em" }}>
                                            {card.logoText}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ padding: "1.25rem" }}>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.45, margin: "0 0 0.65rem", color: "#111827" }}>
                                        {card.title}
                                    </h3>
                                    <p style={{ margin: "0 0 1rem", fontSize: "0.88rem", lineHeight: 1.6, color: "#6b7280" }}>
                                        {card.excerpt}
                                    </p>
                                    <Link
                                        href="/case-studies"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            fontSize: "0.88rem",
                                            fontWeight: 600,
                                            color: ACCENT,
                                            textDecoration: "none",
                                        }}
                                    >
                                        Read case study
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <CTA backgroundColor="#fff" />

            <Footer />
        </div>
    );
}
