"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    customerStoryCards,
    storyIndustries,
    storyStandards,
    type CustomerStoryCard,
} from "@/data/customerStories";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

function CompanyLogo({ company, light = false }: { company: string; light?: boolean }) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                maxWidth: "85%",
                color: light ? "#fff" : "#111827",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontFamily: PP_NEUE_MONTREAL,
                textShadow: light ? "0 1px 12px rgba(0,0,0,0.35)" : "none",
            }}
        >
            {company}
        </span>
    );
}

function ArrowChip({ light = false }: { light?: boolean }) {
    return (
        <span
            aria-hidden
            style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: light ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.18)",
                border: light ? "none" : "1px solid rgba(255,255,255,0.28)",
                backdropFilter: "blur(8px)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
            }}
        >
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={light ? "#111827" : "#fff"}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
            </svg>
        </span>
    );
}

function CardShell({
    card,
    children,
    className,
    minHeight,
}: {
    card: CustomerStoryCard;
    children: React.ReactNode;
    className?: string;
    minHeight?: number | string;
}) {
    const body = (
        <article
            className={`cs-masonry-card ${className ?? ""}`}
            style={{
                position: "relative",
                height: "100%",
                minHeight,
                borderRadius: "22px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 10px 36px rgba(15, 23, 42, 0.08)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                width: "100%",
            }}
        >
            {children}
        </article>
    );

    if (card.href) {
        return (
            <Link href={card.href} className="cs-card-link" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                {body}
            </Link>
        );
    }
    return body;
}

function QuoteBleedCard({ card, expanded }: { card: CustomerStoryCard; expanded?: boolean }) {
    const minH = expanded ? 320 : 440;
    return (
        <CardShell card={card} minHeight={minH}>
            <Image src={card.image} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(180deg, rgba(8,12,18,0.18) 0%, rgba(8,12,18,0.25) 35%, rgba(8,12,18,0.78) 68%, rgba(8,12,18,0.94) 100%)",
                }}
            />
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    minHeight: minH,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: expanded ? "1.5rem 2rem 1.75rem" : "1.35rem 1.4rem 1.5rem",
                    maxWidth: expanded ? 720 : undefined,
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CompanyLogo company={card.company} light />
                    <ArrowChip />
                </div>
                <div>
                    <p
                        style={{
                            margin: "0 0 1.1rem",
                            color: "#fff",
                            fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)",
                            fontWeight: 500,
                            lineHeight: 1.35,
                            letterSpacing: "-0.025em",
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        “{card.quote}”
                    </p>
                    {card.name ? (
                        <div
                            style={{
                                color: "#fff",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                marginBottom: "0.2rem",
                            }}
                        >
                            {card.name}
                        </div>
                    ) : null}
                    {card.role ? (
                        <div style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem" }}>{card.role}</div>
                    ) : null}
                </div>
            </div>
        </CardShell>
    );
}

function SplitMetricCard({ card, expanded }: { card: CustomerStoryCard; expanded?: boolean }) {
    if (expanded) {
        return (
            <CardShell card={card} minHeight={300} className="cs-card-long">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.15fr 1fr",
                        height: "100%",
                        minHeight: 300,
                    }}
                >
                    <div style={{ position: "relative", minHeight: 300 }}>
                        <Image src={card.image} alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(180deg, rgba(8,12,18,0.2) 0%, rgba(8,12,18,0.55) 100%)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                padding: "1.4rem 1.5rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                                <CompanyLogo company={card.company} light />
                                <ArrowChip />
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: "clamp(2.6rem, 4vw, 3.4rem)",
                                        fontWeight: 600,
                                        color: "#fff",
                                        letterSpacing: "-0.04em",
                                        lineHeight: 0.95,
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    {card.metric}
                                </div>
                                <div
                                    style={{
                                        marginTop: "0.4rem",
                                        fontSize: "0.72rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.82)",
                                    }}
                                >
                                    {card.statDescription}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            padding: "1.75rem 1.75rem 1.85rem",
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        {card.title ? (
                            <h3
                                style={{
                                    margin: "0 0 0.65rem",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                    letterSpacing: "-0.02em",
                                    color: "#0d1117",
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                {card.title}
                            </h3>
                        ) : null}
                        {card.summary ? (
                            <p style={{ margin: 0, color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                {card.summary}
                            </p>
                        ) : null}
                    </div>
                </div>
            </CardShell>
        );
    }

    return (
        <CardShell card={card} minHeight={480}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 480 }}>
                <div style={{ position: "relative", flex: "1 1 55%", minHeight: 240 }}>
                    <Image src={card.image} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(180deg, rgba(8,12,18,0.15) 0%, rgba(8,12,18,0.45) 55%, rgba(8,12,18,0.82) 100%)",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            padding: "1.15rem 1.2rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                            <CompanyLogo company={card.company} light />
                            <ArrowChip />
                        </div>
                        <div>
                            <div
                                style={{
                                    fontSize: "clamp(2.4rem, 3.4vw, 3rem)",
                                    fontWeight: 600,
                                    color: "#fff",
                                    letterSpacing: "-0.04em",
                                    lineHeight: 0.95,
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                {card.metric}
                            </div>
                            <div
                                style={{
                                    marginTop: "0.35rem",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.82)",
                                }}
                            >
                                {card.statDescription}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: "0 0 auto", padding: "1.25rem 1.3rem 1.4rem", background: "#fff" }}>
                    {card.title ? (
                        <h3
                            style={{
                                margin: "0 0 0.55rem",
                                fontSize: "1.05rem",
                                fontWeight: 600,
                                lineHeight: 1.3,
                                letterSpacing: "-0.02em",
                                color: "#0d1117",
                                fontFamily: PP_NEUE_MONTREAL,
                            }}
                        >
                            {card.title}
                        </h3>
                    ) : null}
                    {card.summary ? (
                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.45 }}>{card.summary}</p>
                    ) : null}
                </div>
            </div>
        </CardShell>
    );
}

function MetricPortraitCard({ card, expanded }: { card: CustomerStoryCard; expanded?: boolean }) {
    if (expanded) {
        return (
            <CardShell card={card} minHeight={300} className="cs-card-long">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.2fr 0.9fr",
                        height: "100%",
                        minHeight: 300,
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            background: "linear-gradient(120deg, #0b1a14 0%, #123226 55%, #0d1f18 100%)",
                            overflow: "hidden",
                            minHeight: 300,
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                zIndex: 2,
                                height: "100%",
                                padding: "1.5rem 1.75rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                maxWidth: "70%",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                                <CompanyLogo company={card.company} light />
                                <ArrowChip />
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontSize: "clamp(2.8rem, 4.2vw, 3.6rem)",
                                        fontWeight: 600,
                                        color: "#fff",
                                        letterSpacing: "-0.045em",
                                        lineHeight: 0.95,
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    {card.metric}
                                </div>
                                <div
                                    style={{
                                        marginTop: "0.45rem",
                                        fontSize: "0.75rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.78)",
                                    }}
                                >
                                    {card.statDescription}
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: "52%",
                                maskImage: "linear-gradient(90deg, transparent 0%, #000 32%)",
                                WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 32%)",
                            }}
                        >
                            <Image
                                src={card.image}
                                alt=""
                                fill
                                sizes="40vw"
                                style={{ objectFit: "cover", objectPosition: "center top" }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            padding: "1.75rem 1.85rem",
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        {card.title ? (
                            <h3
                                style={{
                                    margin: "0 0 0.65rem",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                    letterSpacing: "-0.02em",
                                    color: "#0d1117",
                                    fontFamily: PP_NEUE_MONTREAL,
                                }}
                            >
                                {card.title}
                            </h3>
                        ) : null}
                        {card.summary ? (
                            <p style={{ margin: 0, color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                {card.summary}
                            </p>
                        ) : null}
                    </div>
                </div>
            </CardShell>
        );
    }

    return (
        <CardShell card={card} minHeight={420}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 420 }}>
                <div
                    style={{
                        position: "relative",
                        flex: "1 1 auto",
                        minHeight: 260,
                        background: "linear-gradient(120deg, #0b1a14 0%, #123226 55%, #0d1f18 100%)",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ position: "absolute", inset: 0, right: "28%" }}>
                        <div style={{ padding: "1.25rem 1.3rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                                <CompanyLogo company={card.company} light />
                                <ArrowChip />
                            </div>
                            <div style={{ paddingBottom: "0.35rem" }}>
                                <div
                                    style={{
                                        fontSize: "clamp(2.5rem, 3.6vw, 3.2rem)",
                                        fontWeight: 600,
                                        color: "#fff",
                                        letterSpacing: "-0.045em",
                                        lineHeight: 0.95,
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    {card.metric}
                                </div>
                                <div
                                    style={{
                                        marginTop: "0.4rem",
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.78)",
                                        maxWidth: "12rem",
                                    }}
                                >
                                    {card.statDescription}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: "48%",
                            maskImage: "linear-gradient(90deg, transparent 0%, #000 28%)",
                            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 28%)",
                        }}
                    >
                        <Image src={card.image} alt="" fill sizes="40vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
                    </div>
                </div>
                <div style={{ padding: "1.2rem 1.3rem 1.35rem", background: "#fff" }}>
                    {card.title ? (
                        <h3
                            style={{
                                margin: "0 0 0.5rem",
                                fontSize: "1.02rem",
                                fontWeight: 600,
                                lineHeight: 1.3,
                                letterSpacing: "-0.02em",
                                color: "#0d1117",
                                fontFamily: PP_NEUE_MONTREAL,
                            }}
                        >
                            {card.title}
                        </h3>
                    ) : null}
                    {card.summary ? (
                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.45 }}>{card.summary}</p>
                    ) : null}
                </div>
            </div>
        </CardShell>
    );
}

function StoryCard({ card, expanded }: { card: CustomerStoryCard; expanded?: boolean }) {
    const layout = card.layout ?? (card.type === "quote" ? "quote-bleed" : "split-metric");
    if (layout === "split-metric") return <SplitMetricCard card={card} expanded={expanded} />;
    if (layout === "metric-portrait") return <MetricPortraitCard card={card} expanded={expanded} />;
    return <QuoteBleedCard card={card} expanded={expanded} />;
}

function spanClass(span?: CustomerStoryCard["span"], forceFull?: boolean) {
    if (forceFull) return "cs-span-full";
    if (span === "wide") return "cs-span-wide";
    if (span === "narrow") return "cs-span-narrow";
    return "cs-span-mid";
}

export default function CustomerStoriesResults() {
    const { isMobile } = useIndustriesBreakpoints();
    const [query, setQuery] = useState("");
    const [industry, setIndustry] = useState<string>(storyIndustries[0]);
    const [standard, setStandard] = useState<string>(storyStandards[0]);
    const [filterStuck, setFilterStuck] = useState(false);
    const filterSentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = filterSentinelRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setFilterStuck(!entry.isIntersecting),
            { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const { featured, ctaQuote } = useMemo(() => {
        const q = query.trim().toLowerCase();
        const list = customerStoryCards.filter((card) => {
            if (card.type === "cta-quote") return false;
            const matchesIndustry = industry === "All industries" || card.industry === industry;
            const matchesStandard = standard === "All standards" || card.standards.includes(standard);
            const haystack = [
                card.company,
                card.quote,
                card.title,
                card.summary,
                card.name,
                card.role,
                card.statDescription,
                ...card.standards,
                card.industry,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();
            return matchesIndustry && matchesStandard && (!q || haystack.includes(q));
        });
        return {
            featured: list,
            ctaQuote: customerStoryCards.find((c) => c.type === "cta-quote") ?? null,
        };
    }, [query, industry, standard]);

    const hasActiveFilters =
        query.trim() !== "" || industry !== "All industries" || standard !== "All standards";

    const resetFilters = () => {
        setQuery("");
        setIndustry(storyIndustries[0]);
        setStandard(storyStandards[0]);
    };

    const fieldStyle: React.CSSProperties = {
        width: "100%",
        appearance: "none",
        WebkitAppearance: "none",
        backgroundColor: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "0.72rem 2.2rem 0.72rem 0.95rem",
        fontSize: "0.78rem",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "#374151",
        fontFamily: PP_NEUE_MONTREAL,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0.85rem center",
        cursor: "pointer",
    };

    // Insert CTA quote after first 2 cards when enough results (Synthesia mid-feed quote)
    const beforeQuote = featured.slice(0, 2);
    const afterQuote = featured.slice(2);

    return (
        <section
            style={{
                background: "#f7f8fa",
                padding: isMobile ? "2.75rem 0 4rem" : "3.75rem 0 5.5rem",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    .cs-masonry-card:hover { transform: translateY(-4px); box-shadow: 0 18px 48px rgba(15, 23, 42, 0.14); }
                    .cs-filter-bar {
                        position: sticky;
                        top: calc(var(--header-height) - 8px);
                        z-index: 90;
                        transition: box-shadow 0.25s ease, background 0.25s ease, backdrop-filter 0.25s ease;
                    }
                    .cs-filter-bar.is-stuck {
                        background: rgba(255, 255, 255, 0.86);
                        backdrop-filter: blur(14px);
                        -webkit-backdrop-filter: blur(14px);
                        box-shadow: 0 8px 28px rgba(15, 23, 42, 0.08);
                    }
                    .cs-masonry-grid {
                        display: grid;
                        grid-template-columns: repeat(12, 1fr);
                        gap: 1.25rem;
                        align-items: stretch;
                    }
                    .cs-span-wide { grid-column: span 7; }
                    .cs-span-mid { grid-column: span 6; }
                    .cs-span-narrow { grid-column: span 5; }
                    .cs-span-full { grid-column: span 12; }
                    @media (max-width: 980px) {
                        .cs-span-wide,
                        .cs-span-mid,
                        .cs-span-narrow,
                        .cs-span-full { grid-column: span 12; }
                        .cs-filter-bar { top: calc(var(--header-height) - 18px); }
                        .cs-card-long > div { grid-template-columns: 1fr !important; }
                    }
                    @media (max-width: 640px) {
                        .cs-masonry-grid { gap: 1rem; }
                    }
                `,
                }}
            />

            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        ...aboutType.sectionH2(),
                        fontSize: isMobile ? "1.9rem" : "clamp(2.1rem, 3.6vw, 2.85rem)",
                        margin: "0 0 1.35rem",
                    }}
                >
                    Audit results in detail
                </motion.h2>
            </div>

            {/* Sentinel: when this leaves the viewport, filter is stuck */}
            <div ref={filterSentinelRef} aria-hidden style={{ height: 1, marginTop: -1 }} />

            <div className={`cs-filter-bar${filterStuck ? " is-stuck" : ""}`}>
                <div
                    style={{
                        maxWidth: "1240px",
                        margin: "0 auto",
                        padding: isMobile ? "0.85rem 1.25rem" : "0.95rem 2rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.65rem",
                            alignItems: "center",
                            padding: isMobile ? "0.75rem" : "0.75rem 0.85rem",
                            borderRadius: "16px",
                            background: filterStuck ? "transparent" : "#fff",
                            border: filterStuck ? "1px solid transparent" : "1px solid #e8eaed",
                            boxShadow: filterStuck ? "none" : "0 4px 18px rgba(15, 23, 42, 0.04)",
                        }}
                    >
                        {!isMobile ? (
                            <span
                                style={{
                                    fontSize: "0.78rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.04em",
                                    color: "#6b7280",
                                    paddingLeft: "0.25rem",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Filter by
                            </span>
                        ) : null}

                        <div style={{ flex: "1 1 150px", minWidth: isMobile ? "100%" : 150, maxWidth: isMobile ? "100%" : 200 }}>
                            <select
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                style={fieldStyle}
                                aria-label="Industry"
                            >
                                {storyIndustries.map((o) => (
                                    <option key={o} value={o}>
                                        {o === "All industries" ? "Industry" : o}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ flex: "1 1 150px", minWidth: isMobile ? "100%" : 150, maxWidth: isMobile ? "100%" : 200 }}>
                            <select
                                value={standard}
                                onChange={(e) => setStandard(e.target.value)}
                                style={fieldStyle}
                                aria-label="Standards"
                            >
                                {storyStandards.map((o) => (
                                    <option key={o} value={o}>
                                        {o === "All standards" ? "Standards" : o}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ position: "relative", flex: "1 1 240px", minWidth: isMobile ? "100%" : 200 }}>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#9ca3af"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)" }}
                            >
                                <circle cx="11" cy="11" r="7" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search brand or industry"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "12px",
                                    padding: "0.72rem 1rem 0.72rem 2.45rem",
                                    fontSize: "0.9rem",
                                    fontFamily: PP_NEUE_MONTREAL,
                                    background: "#fff",
                                    outline: "none",
                                    color: "#111827",
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            aria-label="Reset filters"
                            onClick={resetFilters}
                            disabled={!hasActiveFilters}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                border: "1px solid #e5e7eb",
                                background: "#fff",
                                cursor: hasActiveFilters ? "pointer" : "default",
                                opacity: hasActiveFilters ? 1 : 0.45,
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                            }}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: isMobile ? "1.35rem 1.25rem 0" : "1.75rem 2rem 0" }}>
                {featured.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#6b7280", padding: "3rem 1rem" }}>
                        No stories match your filters. Try a different search or filter combination.
                    </p>
                ) : (
                    <>
                        <div className="cs-masonry-grid">
                            {beforeQuote.map((card) => {
                                const alone = beforeQuote.length === 1;
                                return (
                                    <div key={card.id} className={spanClass(card.span, alone)}>
                                        <StoryCard card={card} expanded={alone} />
                                    </div>
                                );
                            })}
                        </div>

                        {ctaQuote && beforeQuote.length > 0 ? (
                            <motion.blockquote
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    margin: isMobile ? "2.25rem 0" : "3rem 0",
                                    padding: isMobile ? "1.75rem 1rem" : "2.75rem 2rem",
                                    textAlign: "center",
                                    border: "none",
                                }}
                            >
                                <div
                                    style={{
                                        marginBottom: "1rem",
                                        fontSize: "0.95rem",
                                        fontWeight: 700,
                                        letterSpacing: "-0.02em",
                                        color: "#111827",
                                    }}
                                >
                                    {ctaQuote.company}
                                </div>
                                <p
                                    style={{
                                        margin: "0 auto 1.25rem",
                                        maxWidth: 820,
                                        fontSize: isMobile ? "1.35rem" : "clamp(1.5rem, 2.4vw, 2rem)",
                                        fontWeight: 500,
                                        lineHeight: 1.35,
                                        letterSpacing: "-0.03em",
                                        color: "#0d1117",
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    “{ctaQuote.quote}”
                                </p>
                                <footer>
                                    <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                                        {ctaQuote.name?.toUpperCase()}
                                    </div>
                                    <div style={{ color: "#6b7280", fontSize: "0.92rem", marginTop: "0.25rem" }}>{ctaQuote.role}</div>
                                </footer>
                                {ctaQuote.href ? (
                                    <Link
                                        href={ctaQuote.href}
                                        className="btn-animate btn-animate-pill"
                                        style={{
                                            display: "inline-flex",
                                            marginTop: "1.5rem",
                                            padding: "0.8rem 1.4rem",
                                            borderRadius: "999px",
                                            fontWeight: 500,
                                            fontSize: "0.92rem",
                                        }}
                                    >
                                        <span>Get started</span>
                                    </Link>
                                ) : null}
                            </motion.blockquote>
                        ) : null}

                        {afterQuote.length > 0 ? (
                            <div className="cs-masonry-grid">
                                {afterQuote.map((card, index) => {
                                    const alone =
                                        afterQuote.length === 1 ||
                                        (afterQuote.length % 2 === 1 && index === afterQuote.length - 1);
                                    return (
                                        <div key={card.id} className={spanClass(card.span, alone)}>
                                            <StoryCard card={card} expanded={alone} />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                    </>
                )}
            </div>
        </section>
    );
}
