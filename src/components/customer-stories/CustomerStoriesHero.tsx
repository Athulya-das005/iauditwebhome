"use client";

import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const TEAL = "#003E3A";
const GREEN = "#058c42";

const heroCards = [
    {
        id: "history",
        company: "Apex Engineering",
        metric: "100%",
        label: "AUDIT HISTORY CONTINUITY",
        tags: ["Quality", "Manufacturing"],
        theme: "history" as const,
    },
    {
        id: "reports",
        company: "Meridian Infrastructure",
        metric: "70%",
        label: "FASTER REPORT GENERATION",
        tags: ["Safety", "Infrastructure"],
        theme: "reports" as const,
        featured: true,
    },
    {
        id: "findings",
        company: "Grandview Hotels",
        metric: "40%",
        label: "REDUCTION IN REPEAT NONCONFORMITIES",
        tags: ["Hospitality", "Environment"],
        theme: "findings" as const,
    },
] as const;

function StarRow({ isMobile }: { isMobile?: boolean }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: isMobile ? "0.4rem" : "0.55rem",
                justifyContent: "center",
                flexWrap: "wrap",
                maxWidth: isMobile ? "100%" : undefined,
                rowGap: isMobile ? "0.45rem" : undefined,
                padding: isMobile ? "0 0.25rem" : 0,
            }}
            aria-label="Rated 4.9 out of 5"
        >
            <span
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                }}
            >
                <span
                    style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #058c42 0%, #003E3A 100%)",
                        color: "#fff",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                    aria-hidden
                >
                    iA
                </span>
                <span style={{ display: "inline-flex", gap: 2 }} aria-hidden>
                    {[0, 1, 2, 3].map((i) => (
                        <svg key={i} width={isMobile ? 14 : 16} height={isMobile ? 14 : 16} viewBox="0 0 24 24" fill="#F5A524">
                            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l7.1-1.01L12 2z" />
                        </svg>
                    ))}
                    <svg width={isMobile ? 14 : 16} height={isMobile ? 14 : 16} viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="csHalfStar" x1="0" x2="1">
                                <stop offset="50%" stopColor="#F5A524" />
                                <stop offset="50%" stopColor="#E5E7EB" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l7.1-1.01L12 2z"
                            fill="url(#csHalfStar)"
                        />
                    </svg>
                </span>
            </span>
            <span
                style={{
                    fontSize: isMobile ? "0.82rem" : "0.9rem",
                    fontWeight: 500,
                    color: "#4b5563",
                    letterSpacing: "0.01em",
                    lineHeight: 1.35,
                    textAlign: "center",
                    flexBasis: isMobile ? "100%" : "auto",
                }}
            >
                From ISO professionals across 18+ sectors
            </span>
        </div>
    );
}

function MiniWindowChrome() {
    return (
        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e2e8f0" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e2e8f0" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e2e8f0" }} />
        </div>
    );
}

function HistoryAnimation() {
    const sites = ["Site A", "Site B", "Site C"];
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", padding: "0.9rem 0.95rem" }}>
            <div
                style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.94)",
                    borderRadius: 16,
                    border: "1px solid rgba(5,140,66,0.12)",
                    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
                    padding: "0.9rem",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <MiniWindowChrome />
                <div
                    style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        color: "#64748b",
                        marginBottom: 10,
                        letterSpacing: "0.04em",
                    }}
                >
                    AUDIT TRAIL
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, justifyContent: "center" }}>
                    {sites.map((site, i) => (
                        <motion.div
                            key={site}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35 + i * 0.18, duration: 0.45 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "0.48rem 0.55rem",
                                borderRadius: 10,
                                background: "#f8fafc",
                                border: "1px solid #eef2f7",
                            }}
                        >
                            <motion.span
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: "50%",
                                    background: GREEN,
                                    color: "#fff",
                                    fontSize: 10,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                ✓
                            </motion.span>
                            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#334155", flex: 1 }}>{site}</span>
                            <motion.span
                                animate={{ opacity: [0.35, 1, 0.35] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                                style={{ width: 28, height: 3, borderRadius: 2, background: GREEN }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    right: 8,
                    bottom: 14,
                    background: GREEN,
                    color: "#fff",
                    borderRadius: 12,
                    padding: "0.5rem 0.7rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    boxShadow: "0 10px 24px rgba(5,140,66,0.35)",
                }}
            >
                100% linked
            </motion.div>
        </div>
    );
}

function ReportsAnimation() {
    const bars = [42, 58, 48, 72, 64, 88, 78, 96];
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", padding: "0.9rem 0.95rem" }}>
            <div
                style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.94)",
                    borderRadius: 16,
                    border: "1px solid rgba(5,140,66,0.12)",
                    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
                    padding: "0.9rem",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <MiniWindowChrome />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#64748b", letterSpacing: "0.04em" }}>
                        REPORT CYCLE
                    </div>
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: "0.62rem",
                            fontWeight: 600,
                            color: GREEN,
                        }}
                    >
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN }} />
                        Live
                    </motion.div>
                </div>

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "flex-end",
                        gap: 5,
                        padding: "0.35rem 0 0.15rem",
                    }}
                >
                    {bars.map((h, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [`${Math.max(18, h - 28)}%`, `${h}%`, `${Math.max(22, h - 12)}%`] }}
                            transition={{ duration: 2.4 + i * 0.08, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                            style={{
                                flex: 1,
                                borderRadius: 5,
                                background: i === bars.length - 1 ? GREEN : i % 2 === 0 ? "rgba(5,140,66,0.28)" : TEAL,
                                minHeight: 12,
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                style={{
                    position: "absolute",
                    left: 6,
                    top: 14,
                    background: "#fff",
                    borderRadius: 12,
                    padding: "0.55rem 0.75rem",
                    boxShadow: "0 12px 28px rgba(15,23,42,0.1)",
                    border: "1px solid #eef2f7",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: TEAL,
                }}
            >
                −70% time
            </motion.div>
        </div>
    );
}

function FindingsAnimation() {
    const items = [
        { label: "Housekeeping NC", done: true },
        { label: "Waste tracking", done: true },
        { label: "Repeat finding", done: false },
    ];
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", padding: "0.9rem 0.95rem" }}>
            <div
                style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.94)",
                    borderRadius: 16,
                    border: "1px solid rgba(5,140,66,0.12)",
                    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
                    padding: "0.9rem",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <MiniWindowChrome />
                <div
                    style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        color: "#64748b",
                        marginBottom: 10,
                        letterSpacing: "0.04em",
                    }}
                >
                    CORRECTIVE ACTIONS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                    {items.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "0.45rem 0.55rem",
                                borderRadius: 10,
                                background: item.done ? "rgba(5,140,66,0.06)" : "#f8fafc",
                                border: `1px solid ${item.done ? "rgba(5,140,66,0.18)" : "#eef2f7"}`,
                            }}
                        >
                            <motion.span
                                animate={item.done ? { scale: [1, 1.12, 1] } : { opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                style={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: "50%",
                                    background: item.done ? GREEN : "#e2e8f0",
                                    color: "#fff",
                                    fontSize: 9,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                {item.done ? "✓" : ""}
                            </motion.span>
                            <span
                                style={{
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    color: item.done ? "#166534" : "#64748b",
                                    textDecoration: item.done ? "line-through" : "none",
                                    flex: 1,
                                }}
                            >
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                        <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "#94a3b8" }}>Closure rate</span>
                        <span style={{ fontSize: "0.6rem", fontWeight: 700, color: GREEN }}>40% ↓ repeats</span>
                    </div>
                    <div style={{ height: 5, borderRadius: 99, background: "#e2e8f0", overflow: "hidden" }}>
                        <motion.div
                            animate={{ width: ["35%", "72%", "58%", "72%"] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ height: "100%", borderRadius: 99, background: GREEN }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function CardAnimation({ theme }: { theme: "history" | "reports" | "findings" }) {
    if (theme === "history") return <HistoryAnimation />;
    if (theme === "reports") return <ReportsAnimation />;
    return <FindingsAnimation />;
}

function HeroStoryCard({
    card,
    index,
    isMobile,
}: {
    card: (typeof heroCards)[number];
    index: number;
    isMobile: boolean;
}) {
    const featured = "featured" in card && card.featured;
    // Wider Synthesia-like portrait cards; mobile peeks next card
    const cardWidth = isMobile ? Math.min(300, typeof window !== "undefined" ? window.innerWidth * 0.78 : 300) : featured ? 400 : 380;
    const cardHeight = isMobile ? 400 : featured ? 540 : 500;

    return (
        <motion.article
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: featured && !isMobile ? -36 : 0 }}
            transition={{ duration: 0.55, delay: 0.18 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={isMobile ? undefined : { y: featured ? -44 : -10 }}
            style={{
                position: "relative",
                flex: isMobile ? "0 0 auto" : "1 1 0",
                width: isMobile ? cardWidth : undefined,
                minWidth: isMobile ? cardWidth : 0,
                maxWidth: isMobile ? cardWidth : cardWidth,
                height: cardHeight,
                borderRadius: isMobile ? 20 : 24,
                overflow: "hidden",
                background: `
                    radial-gradient(ellipse 80% 50% at 70% 10%, rgba(5,140,66,0.16) 0%, transparent 55%),
                    linear-gradient(165deg, #f3fbf6 0%, #e7f5ee 48%, #f8fafc 100%)
                `,
                border: "1.5px solid rgba(5,140,66,0.28)",
                outline: isMobile ? "2px solid rgba(5, 140, 66, 0.08)" : "4px solid rgba(5, 140, 66, 0.08)",
                boxShadow: featured
                    ? "0 28px 60px rgba(5, 140, 66, 0.14), 0 12px 28px rgba(15, 23, 42, 0.08)"
                    : "0 16px 40px rgba(5, 140, 66, 0.1), 0 8px 20px rgba(15, 23, 42, 0.06)",
                display: "flex",
                flexDirection: "column",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "1.05rem 1.1rem 0",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <span
                    style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#111827",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {card.company}
                </span>
                <span
                    aria-hidden
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(5,140,66,0.15)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 14px rgba(15,23,42,0.08)",
                    }}
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill={TEAL}>
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </div>

            <motion.div
                animate={{ y: [0, featured ? -6 : -4, 0] }}
                transition={{
                    duration: featured ? 5 : 4.2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.35,
                }}
                style={{
                    flex: 1,
                    minHeight: 0,
                    position: "relative",
                }}
            >
                <CardAnimation theme={card.theme} />
            </motion.div>

            <div
                style={{
                    padding: "0.65rem 1.15rem 1.25rem",
                    textAlign: "left",
                    background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.85) 22%, #fff 100%)",
                    borderTop: "1px solid rgba(5,140,66,0.08)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.45rem",
                        marginBottom: "0.35rem",
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.45 }}
                        style={{
                            fontSize: featured && !isMobile ? "3rem" : "2.55rem",
                            fontWeight: 700,
                            color: TEAL,
                            letterSpacing: "-0.05em",
                            lineHeight: 1,
                        }}
                    >
                        {card.metric}
                    </motion.span>
                </div>
                <p
                    style={{
                        margin: "0 0 0.75rem",
                        color: "#64748b",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                        lineHeight: 1.35,
                        textTransform: "uppercase",
                    }}
                >
                    {card.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {card.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                display: "inline-flex",
                                padding: "0.24rem 0.58rem",
                                borderRadius: 999,
                                background: "rgba(5,140,66,0.08)",
                                color: TEAL,
                                fontSize: "0.62rem",
                                fontWeight: 600,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

export default function CustomerStoriesHero() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: "var(--page-top-offset)",
                paddingLeft: isMobile ? "1.25rem" : "2rem",
                paddingRight: isMobile ? "1.25rem" : "2rem",
                paddingBottom: isMobile ? "2.25rem" : "3rem",
                textAlign: "center",
                fontFamily: PP_NEUE_MONTREAL,
                overflow: "hidden",
                background: `
                    radial-gradient(ellipse 55% 65% at 0% 0%, rgba(0,166,81,0.26) 0%, transparent 72%),
                    radial-gradient(ellipse 55% 65% at 100% 0%, rgba(0,166,81,0.24) 0%, transparent 72%),
                    radial-gradient(ellipse 50% 45% at 50% 100%, rgba(5,140,66,0.12) 0%, transparent 70%),
                    radial-gradient(ellipse 70% 50% at 50% 35%, rgba(5,140,66,0.08) 0%, transparent 65%),
                    #f5fbf7
                `,
            }}
        >
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse 45% 40% at 70% 25%, rgba(5,140,66,0.14) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 820,
                    margin: "0 auto",
                    width: "100%",
                    // Tighter under the nav — header sits higher like Synthesia
                    paddingTop: isMobile ? "0.85rem" : isStacked ? "1rem" : "1.15rem",
                    paddingBottom: isMobile ? "1.1rem" : "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.35rem 0.85rem",
                        borderRadius: 999,
                        background: "rgba(5,140,66,0.08)",
                        border: "1px solid rgba(5,140,66,0.14)",
                        color: GREEN,
                        fontSize: isMobile ? "0.78rem" : "0.85rem",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        marginBottom: "1rem",
                    }}
                >
                    <span aria-hidden>✦</span>
                    Case Studies
                    <span aria-hidden>✦</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    style={{
                        ...aboutType.heroH1(isMobile),
                        margin: "0 auto 0.85rem",
                        maxWidth: isMobile ? "100%" : 720,
                    }}
                >
                    Proven audit control
                    <br />
                    across industries
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        ...aboutType.heroLead(),
                        maxWidth: isMobile ? "100%" : 560,
                        margin: "0 auto 1.35rem",
                    }}
                >
                    See how quality, safety and compliance teams use iAudit to centralise audit
                    history, reduce repeat findings and strengthen multi‑site oversight.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.18 }}
                >
                    <StarRow isMobile={isMobile} />
                </motion.div>
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 3,
                    width: "100%",
                    maxWidth: 1280,
                    margin: "0 auto",
                    paddingTop: isMobile ? "0.35rem" : "0.85rem",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "0.85rem" : isStacked ? "1.25rem" : "1.5rem",
                        overflowX: isMobile ? "auto" : "visible",
                        width: isMobile ? "100vw" : "100%",
                        marginLeft: isMobile ? "calc(50% - 50vw)" : 0,
                        marginRight: isMobile ? "calc(50% - 50vw)" : 0,
                        paddingBottom: isMobile ? "1rem" : "2rem",
                        paddingTop: isMobile ? "0.35rem" : "2.25rem",
                        paddingLeft: isMobile ? "1.25rem" : 0,
                        paddingRight: isMobile ? "1.25rem" : 0,
                        scrollSnapType: isMobile ? "x mandatory" : undefined,
                        scrollPaddingLeft: isMobile ? "1.25rem" : undefined,
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                    }}
                    className="cs-hero-anim-row"
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `.cs-hero-anim-row::-webkit-scrollbar { display: none; }`,
                        }}
                    />
                    {heroCards.map((card, index) => (
                        <div
                            key={card.id}
                            style={{
                                scrollSnapAlign: isMobile ? "center" : undefined,
                                display: "flex",
                                justifyContent: "center",
                                flex: isMobile ? "0 0 auto" : "1 1 0",
                                minWidth: 0,
                                maxWidth: isMobile ? undefined : "featured" in card && card.featured ? 400 : 380,
                            }}
                        >
                            <HeroStoryCard card={card} index={index} isMobile={isMobile} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
