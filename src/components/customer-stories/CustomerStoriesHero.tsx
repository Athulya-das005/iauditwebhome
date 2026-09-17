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

function MiniWindowChrome() {
    return (
        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e2e8f0" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e2e8f0" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e2e8f0" }} />
        </div>
    );
}

/** Linked audit trail across sites */
function HistoryAnimation() {
    const sites = ["Site A", "Site B", "Site C"];
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", padding: "0.85rem 0.9rem" }}>
            <div
                style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.92)",
                    borderRadius: 16,
                    border: "1px solid rgba(5,140,66,0.12)",
                    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
                    padding: "0.85rem",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <MiniWindowChrome />
                <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#64748b", marginBottom: 10, letterSpacing: "0.04em" }}>
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
                                padding: "0.45rem 0.55rem",
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
                    right: 6,
                    bottom: 10,
                    background: GREEN,
                    color: "#fff",
                    borderRadius: 12,
                    padding: "0.45rem 0.65rem",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    boxShadow: "0 10px 24px rgba(5,140,66,0.35)",
                }}
            >
                100% linked
            </motion.div>
        </div>
    );
}

/** Report generation speeding up */
function ReportsAnimation() {
    const bars = [42, 58, 48, 72, 64, 88, 78, 96];
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", padding: "0.85rem 0.9rem" }}>
            <div
                style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.92)",
                    borderRadius: 16,
                    border: "1px solid rgba(5,140,66,0.12)",
                    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
                    padding: "0.85rem",
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
                    left: 4,
                    top: 12,
                    background: "#fff",
                    borderRadius: 12,
                    padding: "0.5rem 0.7rem",
                    boxShadow: "0 12px 28px rgba(15,23,42,0.1)",
                    border: "1px solid #eef2f7",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: TEAL,
                }}
            >
                −70% time
            </motion.div>
        </div>
    );
}

/** Closing repeat nonconformities */
function FindingsAnimation() {
    const items = [
        { label: "Housekeeping NC", done: true },
        { label: "Waste tracking", done: true },
        { label: "Repeat finding", done: false },
    ];
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", padding: "0.85rem 0.9rem" }}>
            <div
                style={{
                    height: "100%",
                    background: "rgba(255,255,255,0.92)",
                    borderRadius: 16,
                    border: "1px solid rgba(5,140,66,0.12)",
                    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
                    padding: "0.85rem",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <MiniWindowChrome />
                <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#64748b", marginBottom: 10, letterSpacing: "0.04em" }}>
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
                                padding: "0.42rem 0.5rem",
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
    const cardHeight = isMobile ? 360 : featured ? 430 : 390;

    return (
        <motion.article
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: featured && !isMobile ? -28 : 0 }}
            transition={{ duration: 0.55, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "relative",
                flex: isMobile ? "0 0 82%" : "1 1 0",
                maxWidth: isMobile ? 290 : featured ? 310 : 290,
                minWidth: isMobile ? 250 : 0,
                height: cardHeight,
                borderRadius: 24,
                overflow: "hidden",
                background: `
                    radial-gradient(ellipse 80% 50% at 70% 10%, rgba(5,140,66,0.14) 0%, transparent 55%),
                    linear-gradient(165deg, #f3fbf6 0%, #e7f5ee 48%, #f8fafc 100%)
                `,
                border: "1px solid rgba(5,140,66,0.14)",
                boxShadow: featured
                    ? "0 28px 60px rgba(15, 23, 42, 0.14)"
                    : "0 18px 44px rgba(15, 23, 42, 0.1)",
                display: "flex",
                flexDirection: "column",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
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
                    padding: "0.85rem 1.05rem 1.15rem",
                    textAlign: "left",
                    background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.72) 28%, #fff 100%)",
                    borderTop: "1px solid rgba(5,140,66,0.08)",
                }}
            >
                <div
                    style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: "0.35rem",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {card.company}
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.45rem",
                        marginBottom: "0.35rem",
                    }}
                >
                    <span
                        style={{
                            fontSize: featured && !isMobile ? "1.85rem" : "1.55rem",
                            fontWeight: 700,
                            color: TEAL,
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                        }}
                    >
                        {card.metric}
                    </span>
                </div>
                <p
                    style={{
                        margin: "0 0 0.7rem",
                        color: "#64748b",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
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
                                padding: "0.22rem 0.55rem",
                                borderRadius: 999,
                                background: "rgba(5,140,66,0.08)",
                                color: TEAL,
                                fontSize: "0.62rem",
                                fontWeight: 600,
                                letterSpacing: "0.03em",
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
                paddingBottom: 0,
                textAlign: "center",
                fontFamily: PP_NEUE_MONTREAL,
                overflow: "hidden",
                background: `
                    radial-gradient(ellipse 80% 60% at 78% 35%, rgba(5, 140, 66, 0.16) 0%, transparent 58%),
                    radial-gradient(ellipse 70% 55% at 12% 75%, rgba(5, 140, 66, 0.10) 0%, transparent 55%),
                    radial-gradient(ellipse 50% 40% at 50% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
                    linear-gradient(180deg, #f3fbf6 0%, #e8f7ef 45%, #f7fcf9 100%)
                `,
            }}
        >
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse 45% 35% at 62% 40%, rgba(5,140,66,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: isMobile ? "100%" : "880px",
                    margin: "0 auto",
                    width: "100%",
                    paddingTop: isMobile ? "3.25rem" : isStacked ? "4.5rem" : "5.75rem",
                    paddingBottom: isMobile ? "1.1rem" : "1.5rem",
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    style={{
                        ...aboutType.heroH1(isMobile),
                        margin: "0 auto 1.35rem",
                        maxWidth: isMobile ? "100%" : "760px",
                    }}
                >
                    Proven audit control
                    <br />
                    across industries
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        ...aboutType.heroLead(),
                        maxWidth: isMobile ? "100%" : "640px",
                        margin: "0 auto",
                        padding: isMobile ? "0 0.15rem" : 0,
                    }}
                >
                    See how quality, safety and compliance teams use iAudit to centralise audit
                    history, reduce repeat findings and strengthen multi‑site oversight.
                </motion.p>
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 3,
                    width: "100%",
                    maxWidth: 1000,
                    margin: "0 auto",
                    paddingTop: isMobile ? "1.25rem" : "1.75rem",
                    paddingBottom: isMobile ? "0.5rem" : "0.75rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "0.85rem" : isStacked ? "1rem" : "1.25rem",
                        overflowX: isMobile ? "auto" : "visible",
                        paddingBottom: isMobile ? "0.5rem" : "2.25rem",
                        scrollSnapType: isMobile ? "x mandatory" : undefined,
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {heroCards.map((card, index) => (
                        <div
                            key={card.id}
                            style={{
                                scrollSnapAlign: isMobile ? "center" : undefined,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <HeroStoryCard card={card} index={index} isMobile={isMobile} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                aria-hidden
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    marginTop: isMobile ? "-0.5rem" : "-1.25rem",
                    lineHeight: 0,
                }}
            >
                <svg
                    viewBox="0 0 1440 220"
                    preserveAspectRatio="none"
                    style={{
                        display: "block",
                        width: "100%",
                        height: isMobile ? "100px" : isStacked ? "130px" : "160px",
                    }}
                >
                    <defs>
                        <linearGradient id="cs-hill-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(5,140,66,0.10)" />
                            <stop offset="55%" stopColor="rgba(5,140,66,0.05)" />
                            <stop offset="100%" stopColor="rgba(5,140,66,0)" />
                        </linearGradient>
                        <linearGradient id="cs-hill-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(5,140,66,0)" />
                            <stop offset="18%" stopColor="rgba(5,140,66,0.35)" />
                            <stop offset="48%" stopColor="rgba(5,140,66,0.55)" />
                            <stop offset="78%" stopColor="rgba(5,140,66,0.28)" />
                            <stop offset="100%" stopColor="rgba(5,140,66,0)" />
                        </linearGradient>
                        <filter id="cs-hill-glow" x="-10%" y="-40%" width="120%" height="180%">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <path
                        d="M0 110
                           C 160 70, 280 35, 420 28
                           C 560 20, 660 75, 780 58
                           C 920 38, 1040 8, 1180 18
                           C 1280 26, 1360 52, 1440 72
                           L 1440 220 L 0 220 Z"
                        fill="url(#cs-hill-fill)"
                    />
                    <path
                        d="M -20 118
                           C 150 72, 270 38, 410 28
                           C 555 18, 655 72, 775 55
                           C 915 34, 1035 6, 1175 16
                           C 1285 24, 1370 50, 1460 75"
                        fill="none"
                        stroke="url(#cs-hill-stroke)"
                        strokeWidth={isMobile ? 1.4 : 1.8}
                        filter="url(#cs-hill-glow)"
                    />
                    <path
                        d="M -20 145
                           C 180 95, 320 70, 480 62
                           C 640 54, 760 95, 900 80
                           C 1060 60, 1200 40, 1460 78"
                        fill="none"
                        stroke="rgba(5,140,66,0.18)"
                        strokeWidth={isMobile ? 1 : 1.2}
                    />
                </svg>
            </div>
        </section>
    );
}
