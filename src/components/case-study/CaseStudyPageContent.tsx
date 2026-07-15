"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CaseStudyAuditAnimation from "@/components/case-study/CaseStudyAuditAnimation";
import { apexCaseStudy, moreCaseStudies } from "@/data/caseStudies";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";

const ACCENT = "#006644";
const HEADER_BG = "#f1f6f3";
const GREEN_PILL_BG = "#e3f0ea";
const GREEN_PILL_TEXT = "#0d4a38";
const BODY_BG = "#f9f7f4";
const HEADER_HEIGHT = 110;
const SUBNAV_HEIGHT = 50;

const tocItems = [
    { id: "challenge", label: "The Challenge" },
    { id: "solution", label: "The Solution" },
    { id: "results", label: "The Results" },
];

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

function ContentsNav({
    activeSection,
    onNavigate,
}: {
    activeSection: string;
    onNavigate: (id: string) => void;
}) {
    return (
        <div>
            <p style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#374151",
                margin: "0 0 0.625rem",
                fontFamily: PP_NEUE_MONTREAL,
            }}>
                Contents
            </p>
            <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "10px", top: 0, bottom: 0, width: "1px", background: "#e4e0db" }} />
                <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    {tocItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => onNavigate(item.id)}
                                style={{
                                    textAlign: "left",
                                    border: "none",
                                    padding: "0.48rem 0.625rem 0.48rem 1.5rem",
                                    cursor: "pointer",
                                    fontSize: "0.845rem",
                                    fontFamily: PP_NEUE_MONTREAL,
                                    lineHeight: 1.38,
                                    color: isActive ? "#006644" : "#6B7280",
                                    fontWeight: isActive ? 600 : 400,
                                    background: isActive ? "rgba(0,102,68,0.06)" : "transparent",
                                    borderRadius: "0 6px 6px 0",
                                    borderLeft: isActive ? "2px solid #006644" : "2px solid transparent",
                                    transition: "color 0.25s ease, background 0.25s ease, border-color 0.25s ease",
                                }}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}

function SidebarPromoCard({
    activeSection,
    onNavigate,
}: {
    activeSection?: string;
    onNavigate?: (id: string) => void;
}) {
    return (
        <div style={{
            background: "#f8faf9",
            borderRadius: "14px",
            padding: "1.35rem",
            border: "1px solid #e8f0ec",
        }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: "0 0 1rem", lineHeight: 1.4, color: "#111827", fontFamily: PP_NEUE_MONTREAL }}>
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
                    marginBottom: "0.875rem",
                }}
            >
                <span>Get started free</span>
            </Link>
            <Link
                href="#more-case-studies"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: ACCENT,
                    textDecoration: "none",
                    marginBottom: "1.25rem",
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                Or see more case studies →
            </Link>
            {activeSection !== undefined && onNavigate && (
                <ContentsNav activeSection={activeSection} onNavigate={onNavigate} />
            )}
        </div>
    );
}

function KeyResultsBlock({ compact = false }: { compact?: boolean }) {
    const data = apexCaseStudy;
    return (
        <div style={{ marginBottom: compact ? 0 : "0" }}>
            <h2 style={{ fontSize: compact ? "1.05rem" : "1.15rem", fontWeight: 600, margin: "0 0 1.25rem", color: "#111827", fontFamily: PP_NEUE_MONTREAL }}>
                Key Results:
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: compact ? "1.25rem" : "1.5rem" }}>
                {data.keyResults.map((item) => (
                    <div key={item.label}>
                        <div style={{ fontSize: compact ? "1.5rem" : "1.75rem", fontWeight: 600, color: ACCENT, lineHeight: 1.1, fontFamily: PP_NEUE_MONTREAL }}>
                            {item.value}
                        </div>
                        <div style={{ fontSize: compact ? "0.88rem" : "0.92rem", color: "#4b5563", lineHeight: 1.5, marginTop: "0.25rem", fontFamily: PP_NEUE_MONTREAL }}>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CaseStudyPageContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [activeSection, setActiveSection] = useState("challenge");
    const [tocOpen, setTocOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const data = apexCaseStudy;

    useEffect(() => {
        const check = () => {
            const w = window.innerWidth;
            setIsMobile(w < 900);
            setIsTablet(w < 1100);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const stacked = isTablet;
    const stickySidebarTop = isMobile ? HEADER_HEIGHT + SUBNAV_HEIGHT : HEADER_HEIGHT;

    useEffect(() => {
        const onScroll = () => {
            setShowScrollTop(window.scrollY > 400);
            for (let i = tocItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(tocItems[i].id);
                if (el && el.getBoundingClientRect().top < stickySidebarTop + 60) {
                    setActiveSection(tocItems[i].id);
                    return;
                }
            }
            setActiveSection(tocItems[0].id);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [stickySidebarTop]);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (isMobile) setTocOpen(false);
    };

    const sectionH2 = (mobile: boolean): React.CSSProperties => ({
        fontSize: mobile ? "1.35rem" : "1.75rem",
        fontWeight: 700,
        margin: "0 0 1.25rem",
        color: "#111827",
        scrollMarginTop: `${stickySidebarTop}px`,
        lineHeight: 1.3,
    });

    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, background: "#fff" }}>
            {/* Hero header */}
            <section style={{
                background: HEADER_BG,
                paddingTop: "var(--page-top-offset)",
                paddingLeft: isMobile ? "1.25rem" : "2rem",
                paddingRight: isMobile ? "1.25rem" : "2rem",
                paddingBottom: isMobile ? "2.5rem" : "3.5rem",
            }}>
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
                                    ...aboutType.heroH1(isMobile),
                                    margin: "0 0 2rem",
                                    maxWidth: "760px",
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
                                        <Image src={data.insightsFrom.avatar} alt={`${data.insightsFrom.name}, ${data.insightsFrom.role}`} fill style={{ objectFit: "cover", objectPosition: "center 15%" }} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.95rem", fontFamily: PP_NEUE_MONTREAL }}>
                                            {data.insightsFrom.name}
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

            {/* Sticky sub-nav — mobile Contents toggle only */}
            {isMobile && (
            <div style={{
                borderBottom: "1px solid #e8e4df",
                backgroundColor: BODY_BG,
                position: "sticky",
                top: HEADER_HEIGHT,
                zIndex: 40,
            }}>
                <div style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    height: SUBNAV_HEIGHT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}>
                        <button
                            onClick={() => setTocOpen((v) => !v)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                background: "none",
                                border: "1px solid #e8e4df",
                                borderRadius: "6px",
                                padding: "4px 10px",
                                cursor: "pointer",
                                color: "#374151",
                                fontSize: "0.79rem",
                                fontFamily: PP_NEUE_MONTREAL,
                            }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="3" y1="15" x2="21" y2="15" />
                            </svg>
                            Contents
                        </button>
                </div>
                {tocOpen && (
                    <div style={{
                        background: "#fff",
                        borderBottom: "1px solid #e8e4df",
                        padding: "0.875rem 1.25rem",
                    }}>
                        <ContentsNav activeSection={activeSection} onNavigate={scrollTo} />
                    </div>
                )}
            </div>
            )}

            {/* Body — 3-column layout: sticky sidebars | scrollable center */}
            <section style={{ background: BODY_BG, padding: isMobile ? "2rem 1.25rem 4rem" : "0" }}>
                <div
                    style={{
                        maxWidth: "1260px",
                        margin: "0 auto",
                        padding: isMobile ? 0 : "3rem 1.5rem 5rem",
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "280px 1fr",
                        gap: isMobile ? "2rem" : "3rem",
                        alignItems: "start",
                    }}
                >
                    {/* LEFT: Contents + Key Results + promo — sticky */}
                    {!isMobile && (
                        <aside style={{ position: "sticky", top: stickySidebarTop, alignSelf: "start", display: "flex", flexDirection: "column", gap: "2rem" }}>
                            <KeyResultsBlock />
                            <SidebarPromoCard activeSection={activeSection} onNavigate={scrollTo} />
                        </aside>
                    )}

                    {/* CENTER: main content (only this column scrolls with the page) */}
                    <article>
                        <CaseStudyAuditAnimation />
                        <p style={{ margin: "1.25rem 0 0", fontSize: "0.92rem", lineHeight: 1.7, color: "#6b7280", fontStyle: "italic", fontFamily: PP_NEUE_MONTREAL }}>
                            Apex Engineering unified ISO 9001 and ISO 14001 audits across three production sites with iAudit Global — protecting audit history, accelerating reporting, and giving leadership real-time visibility of corrective actions.
                        </p>

                        <div id="challenge" style={{ scrollMarginTop: stickySidebarTop, marginTop: "2.5rem" }}>
                            <h2 style={sectionH2(isMobile)}>{data.challenge.heading}</h2>
                            <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "#374151", whiteSpace: "pre-line", fontFamily: PP_NEUE_MONTREAL }}>
                                {data.challenge.intro}
                            </div>
                            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                                {data.challenge.points.map((point) => (
                                    <div key={point.num} style={{ display: "grid", gridTemplateColumns: isMobile ? "48px 1fr" : "64px 1fr", gap: "1rem" }}>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#7dd3b0", lineHeight: 1 }}>{point.num}</div>
                                        <div>
                                            <p style={{ margin: "0 0 0.5rem", fontSize: "1rem", lineHeight: 1.75, color: "#374151", fontFamily: PP_NEUE_MONTREAL }}>
                                                <strong style={{ color: "#111827" }}>{point.title}:</strong> {point.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <BlockQuote {...data.challenge.quote} />
                            <SectionImage src={data.challenge.image} alt="Manufacturing facility audit challenge" />
                        </div>

                        <div id="solution" style={{ scrollMarginTop: stickySidebarTop, marginTop: "2.5rem" }}>
                            <h2 style={sectionH2(isMobile)}>{data.solution.heading}</h2>
                            <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "#374151", whiteSpace: "pre-line", fontFamily: PP_NEUE_MONTREAL }}>
                                {data.solution.intro}
                            </div>
                            <p style={{ margin: "1.5rem 0 0", fontSize: "1rem", lineHeight: 1.8, color: "#374151", fontFamily: PP_NEUE_MONTREAL }}>
                                This is what the team appreciates most about iAudit Global:
                            </p>
                            <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                                {data.solution.highlights.map((item) => (
                                    <div key={item.num} style={{ display: "grid", gridTemplateColumns: isMobile ? "48px 1fr" : "64px 1fr", gap: "1rem" }}>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#7dd3b0", lineHeight: 1 }}>{item.num}</div>
                                        <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.8, color: "#374151", fontFamily: PP_NEUE_MONTREAL }}>
                                            <strong style={{ color: "#111827" }}>{item.title}:</strong> {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <SectionImage src={data.solution.image} alt="Unified audit platform across manufacturing sites" />
                        </div>

                        <div id="results" style={{ scrollMarginTop: stickySidebarTop, marginTop: "2.5rem" }}>
                            <h2 style={sectionH2(isMobile)}>{data.results.heading}</h2>
                            <p style={{ margin: "0 0 1.25rem", fontSize: "1rem", lineHeight: 1.8, color: "#374151", whiteSpace: "pre-line", fontFamily: PP_NEUE_MONTREAL }}>
                                {data.results.intro}
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                                {data.results.points.map((item) => (
                                    <div key={item.num} style={{ display: "grid", gridTemplateColumns: isMobile ? "48px 1fr" : "64px 1fr", gap: "1rem" }}>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#7dd3b0", lineHeight: 1 }}>{item.num}</div>
                                        <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.8, color: "#374151", fontFamily: PP_NEUE_MONTREAL }}>
                                            <strong style={{ color: "#111827" }}>{item.title}:</strong> {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <BlockQuote {...data.results.quote} />
                        </div>
                    </article>

                    {/* Mobile: Key Results + promo below content */}
                    {isMobile && (
                        <aside>
                            <div style={{ marginBottom: "1.75rem", background: "#fff", borderRadius: "16px", padding: "1.5rem", border: "1px solid #e8e4df" }}>
                                <KeyResultsBlock compact />
                            </div>
                            <SidebarPromoCard activeSection={activeSection} onNavigate={scrollTo} />
                        </aside>
                    )}
                </div>
            </section>

            {/* More case studies */}
            <section id="more-case-studies" style={{ background: "#fafafa", padding: isMobile ? "3rem 1.25rem" : "4rem 2rem", borderTop: "1px solid #f0f0f0" }}>
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
                                    <Image src={card.image} alt={`${card.logoText} case study image`} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
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

            <CTA
                backgroundColor="#fff"
                buttonHref="/#:~:text=Ready%20To%20Upgrade%20Your"
            />

            <Footer />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "2rem",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#006644",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(0,102,68,0.4)",
                    opacity: showScrollTop ? 1 : 0,
                    pointerEvents: showScrollTop ? "auto" : "none",
                    transform: showScrollTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    zIndex: 50,
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>
        </div>
    );
}
