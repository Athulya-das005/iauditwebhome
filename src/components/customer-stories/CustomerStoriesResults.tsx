"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    customerStoryCards,
    storyIndustries,
    storyStandards,
    type CustomerStoryCard,
} from "@/data/customerStories";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const TEAL = "#003E3A";
const GREEN = "#058c42";

function FilterDropdown({
    label,
    value,
    options,
    placeholder,
    onChange,
    isOpen,
    onOpenChange,
    fullWidth,
}: {
    label: string;
    value: string;
    options: readonly string[];
    placeholder: string;
    onChange: (value: string) => void;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    fullWidth?: boolean;
}) {
    const rootRef = useRef<HTMLDivElement>(null);
    const displayLabel = value === options[0] ? placeholder : value;

    useEffect(() => {
        if (!isOpen) return;
        const onPointerDown = (e: MouseEvent | TouchEvent) => {
            if (!rootRef.current?.contains(e.target as Node)) onOpenChange(false);
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onOpenChange(false);
        };
        document.addEventListener("mousedown", onPointerDown);
        document.addEventListener("touchstart", onPointerDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onPointerDown);
            document.removeEventListener("touchstart", onPointerDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [isOpen, onOpenChange]);

    return (
        <div
            ref={rootRef}
            style={{
                position: "relative",
                flex: "1 1 150px",
                minWidth: fullWidth ? "100%" : 150,
                maxWidth: fullWidth ? "100%" : 210,
            }}
        >
            <button
                type="button"
                aria-label={label}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                onClick={() => onOpenChange(!isOpen)}
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    background: isOpen ? "#fff" : "#fff",
                    border: isOpen ? `1.5px solid ${GREEN}` : "1px solid #e5e7eb",
                    borderRadius: "999px",
                    padding: "0.72rem 0.95rem 0.72rem 1.1rem",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    color: value === options[0] ? "#6b7280" : "#111827",
                    fontFamily: PP_NEUE_MONTREAL,
                    cursor: "pointer",
                    boxShadow: isOpen ? "0 0 0 3px rgba(5,140,66,0.12)" : "0 1px 2px rgba(15,23,42,0.03)",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
            >
                <span
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {displayLabel}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "inline-flex", flexShrink: 0, color: isOpen ? GREEN : "#6b7280" }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen ? (
                    <motion.ul
                        role="listbox"
                        aria-label={label}
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: "calc(100% + 8px)",
                            zIndex: 120,
                            margin: 0,
                            padding: "0.4rem",
                            listStyle: "none",
                            background: "#fff",
                            borderRadius: 16,
                            border: "1px solid #e8eaed",
                            boxShadow: "0 18px 40px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(15, 23, 42, 0.06)",
                            maxHeight: 280,
                            overflowY: "auto",
                        }}
                    >
                        {options.map((option) => {
                            const selected = option === value;
                            return (
                                <li key={option} role="option" aria-selected={selected}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onChange(option);
                                            onOpenChange(false);
                                        }}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "0.5rem",
                                            textAlign: "left",
                                            border: "none",
                                            borderRadius: 12,
                                            padding: "0.7rem 0.85rem",
                                            background: selected ? "rgba(5,140,66,0.1)" : "transparent",
                                            color: selected ? TEAL : "#374151",
                                            fontSize: "0.9rem",
                                            fontWeight: selected ? 600 : 500,
                                            fontFamily: PP_NEUE_MONTREAL,
                                            cursor: "pointer",
                                            transition: "background 0.15s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!selected) e.currentTarget.style.background = "#f3fbf6";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = selected
                                                ? "rgba(5,140,66,0.1)"
                                                : "transparent";
                                        }}
                                    >
                                        <span>{option}</span>
                                        {selected ? (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        ) : null}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                ) : null}
            </AnimatePresence>
        </div>
    );
}

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
            className="cs-arrow"
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
                transition: "transform 0.3s ease, background 0.3s ease",
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
                boxShadow: "0 8px 28px rgba(5, 140, 66, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04)",
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.3s ease",
                width: "100%",
                border: "1.5px solid rgba(5, 140, 66, 0.22)",
                outline: "4px solid rgba(5, 140, 66, 0.07)",
                outlineOffset: "0px",
                boxSizing: "border-box",
            }}
        >
            {children}
        </article>
    );

    if (card.href) {
        return (
            <Link
                href={card.href}
                className="cs-card-link"
                style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
            >
                {body}
            </Link>
        );
    }
    return body;
}

function QuoteBleedCard({ card, expanded, isMobile }: { card: CustomerStoryCard; expanded?: boolean; isMobile?: boolean }) {
    const minH = isMobile ? 360 : expanded ? 320 : 440;
    return (
        <CardShell card={card} minHeight={minH}>
            <Image
                src={card.image}
                alt={card.company}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
            />
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
                    padding: isMobile ? "1.15rem 1.15rem 1.25rem" : expanded ? "1.5rem 2rem 1.75rem" : "1.35rem 1.4rem 1.5rem",
                    maxWidth: expanded && !isMobile ? 720 : undefined,
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
                            fontSize: isMobile ? "1.1rem" : "clamp(1.15rem, 1.6vw, 1.45rem)",
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
                        <div style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? "0.85rem" : "0.9rem" }}>{card.role}</div>
                    ) : null}
                </div>
            </div>
        </CardShell>
    );
}

function SplitMetricCard({ card, expanded, isMobile }: { card: CustomerStoryCard; expanded?: boolean; isMobile?: boolean }) {
    if (expanded && !isMobile) {
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
        <CardShell card={card} minHeight={isMobile ? 420 : 480}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: isMobile ? 420 : 480 }}>
                <div style={{ position: "relative", flex: "1 1 55%", minHeight: isMobile ? 200 : 240 }}>
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
                            padding: isMobile ? "1rem 1.05rem" : "1.15rem 1.2rem",
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
                                    fontSize: isMobile ? "2.35rem" : "clamp(2.4rem, 3.4vw, 3rem)",
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
                                    fontSize: isMobile ? "0.64rem" : "0.68rem",
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
                <div style={{ flex: "0 0 auto", padding: isMobile ? "1.1rem 1.15rem 1.25rem" : "1.25rem 1.3rem 1.4rem", background: "#fff" }}>
                    {card.title ? (
                        <h3
                            style={{
                                margin: "0 0 0.55rem",
                                fontSize: isMobile ? "1rem" : "1.05rem",
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
                        <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? "0.88rem" : "0.9rem", lineHeight: 1.45 }}>{card.summary}</p>
                    ) : null}
                </div>
            </div>
        </CardShell>
    );
}

function MetricPortraitCard({ card, expanded, isMobile }: { card: CustomerStoryCard; expanded?: boolean; isMobile?: boolean }) {
    if (expanded && !isMobile) {
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
                        <div
                            style={{
                                padding: "1.25rem 1.3rem",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
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

function StoryCard({ card, expanded, isMobile }: { card: CustomerStoryCard; expanded?: boolean; isMobile?: boolean }) {
    const layout = card.layout ?? (card.type === "quote" ? "quote-bleed" : "split-metric");
    if (layout === "split-metric") return <SplitMetricCard card={card} expanded={expanded} isMobile={isMobile} />;
    if (layout === "metric-portrait") return <MetricPortraitCard card={card} expanded={expanded} isMobile={isMobile} />;
    return <QuoteBleedCard card={card} expanded={expanded} isMobile={isMobile} />;
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
    const [openDropdown, setOpenDropdown] = useState<"industry" | "standard" | null>(null);
    const filterSentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = filterSentinelRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => setFilterStuck(!entry.isIntersecting), {
            threshold: 0,
            rootMargin: "-1px 0px 0px 0px",
        });
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
        setOpenDropdown(null);
    };

    const beforeQuote = featured.slice(0, 4);
    const afterQuote = featured.slice(4);

    return (
        <section
            style={{
                background: "#ffffff",
                padding: isMobile ? "2rem 0 3.25rem" : "3.25rem 0 5.5rem",
                fontFamily: PP_NEUE_MONTREAL,
                borderTop: "1px solid #f0f2f4",
            }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    .cs-masonry-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 20px 48px rgba(5, 140, 66, 0.14), 0 8px 20px rgba(15, 23, 42, 0.06);
                        border-color: rgba(5, 140, 66, 0.38);
                        outline-color: rgba(5, 140, 66, 0.12);
                    }
                    .cs-masonry-card:hover .cs-arrow { transform: translate(2px, -2px); }
                    .cs-filter-bar {
                        position: sticky;
                        top: calc(var(--header-height) - 8px);
                        z-index: 90;
                        overflow: visible;
                        transition: box-shadow 0.25s ease, background 0.25s ease, backdrop-filter 0.25s ease;
                    }
                    .cs-filter-bar.is-stuck {
                        background: rgba(255, 255, 255, 0.9);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                        box-shadow: 0 8px 28px rgba(15, 23, 42, 0.08);
                        border-bottom: 1px solid rgba(15,23,42,0.06);
                    }
                    .cs-masonry-grid {
                        display: grid;
                        grid-template-columns: repeat(12, 1fr);
                        gap: 1.35rem;
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
                    @media (max-width: 768px) {
                        .cs-masonry-grid { gap: 1rem; }
                        .cs-masonry-card {
                            border-radius: 18px !important;
                            outline-width: 2px !important;
                        }
                        .cs-masonry-card:hover {
                            transform: none;
                        }
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
                        fontSize: isMobile ? "1.85rem" : "clamp(2rem, 3.4vw, 2.75rem)",
                        margin: "0 0 1.5rem",
                    }}
                >
                    All Case Studies
                </motion.h2>
            </div>

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
                            padding: isMobile ? "0.75rem" : "0.7rem 0.85rem",
                            borderRadius: isMobile ? "18px" : "999px",
                            background: filterStuck ? "transparent" : "#f7f8fa",
                            border: filterStuck ? "1px solid transparent" : "1px solid #e8eaed",
                        }}
                    >
                        {!isMobile ? (
                            <span
                                style={{
                                    fontSize: "0.78rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.04em",
                                    color: "#6b7280",
                                    paddingLeft: "0.5rem",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Filter by
                            </span>
                        ) : null}

                        <FilterDropdown
                            label="Industry"
                            placeholder="Industry"
                            value={industry}
                            options={storyIndustries}
                            onChange={setIndustry}
                            isOpen={openDropdown === "industry"}
                            onOpenChange={(open) => setOpenDropdown(open ? "industry" : null)}
                            fullWidth={isMobile}
                        />

                        <FilterDropdown
                            label="Standards"
                            placeholder="Standards"
                            value={standard}
                            options={storyStandards}
                            onChange={setStandard}
                            isOpen={openDropdown === "standard"}
                            onOpenChange={(open) => setOpenDropdown(open ? "standard" : null)}
                            fullWidth={isMobile}
                        />

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
                                style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
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
                                    borderRadius: "999px",
                                    padding: "0.72rem 1rem 0.72rem 2.55rem",
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
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#374151"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                style={{
                    maxWidth: "1240px",
                    margin: "0 auto",
                    padding: isMobile ? "1.35rem 1.25rem 0" : "1.75rem 2rem 0",
                }}
            >
                {featured.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#6b7280", padding: "3rem 1rem" }}>
                        No stories match your filters. Try a different search or filter combination.
                    </p>
                ) : (
                    <>
                        <div className="cs-masonry-grid">
                            {beforeQuote.map((card, i) => {
                                const alone = beforeQuote.length === 1;
                                return (
                                    <motion.div
                                        key={card.id}
                                        className={spanClass(card.span, alone)}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.45, delay: i * 0.08 }}
                                    >
                                        <StoryCard card={card} expanded={alone} isMobile={isMobile} />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {ctaQuote && beforeQuote.length > 0 ? (
                            <motion.blockquote
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    margin: isMobile ? "2.75rem 0" : "4rem 0",
                                    padding: isMobile ? "0.5rem 0.25rem" : "0.75rem 1rem",
                                    textAlign: "center",
                                    border: "none",
                                    background: "transparent",
                                }}
                            >
                                <div
                                    style={{
                                        marginBottom: "1.15rem",
                                        fontSize: isMobile ? "0.95rem" : "1.05rem",
                                        fontWeight: 700,
                                        letterSpacing: "-0.02em",
                                        color: "#111827",
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    {ctaQuote.company}
                                </div>
                                <p
                                    style={{
                                        margin: "0 auto 1.5rem",
                                        maxWidth: 760,
                                        fontSize: isMobile ? "1.4rem" : "clamp(1.65rem, 2.6vw, 2.15rem)",
                                        fontWeight: 600,
                                        lineHeight: 1.3,
                                        letterSpacing: "-0.03em",
                                        color: "#0d1117",
                                        fontFamily: PP_NEUE_MONTREAL,
                                    }}
                                >
                                    “{ctaQuote.quote}”
                                </p>
                                <footer>
                                    <div
                                        style={{
                                            fontWeight: 700,
                                            color: "#111827",
                                            fontSize: "0.8rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            fontFamily: PP_NEUE_MONTREAL,
                                        }}
                                    >
                                        {ctaQuote.name?.toUpperCase()}
                                    </div>
                                    <div
                                        style={{
                                            color: "#6b7280",
                                            fontSize: "0.95rem",
                                            marginTop: "0.35rem",
                                            fontWeight: 400,
                                            fontFamily: PP_NEUE_MONTREAL,
                                        }}
                                    >
                                        {ctaQuote.role}
                                    </div>
                                </footer>
                            </motion.blockquote>
                        ) : null}

                        {afterQuote.length > 0 ? (
                            <div className="cs-masonry-grid">
                                {afterQuote.map((card, index) => {
                                    const alone =
                                        afterQuote.length === 1 ||
                                        (afterQuote.length % 2 === 1 && index === afterQuote.length - 1);
                                    return (
                                        <motion.div
                                            key={card.id}
                                            className={spanClass(card.span, alone)}
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.15 }}
                                            transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.28) }}
                                        >
                                            <StoryCard card={card} expanded={alone} isMobile={isMobile} />
                                        </motion.div>
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
