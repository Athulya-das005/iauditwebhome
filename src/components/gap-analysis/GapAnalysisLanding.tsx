"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";
import { gapAnalysisFaqItems } from "@/data/gapAnalysisPageSchema";
import { checklistMeta } from "@/data/gap-analysis-checklist-content";

const HERO_IMAGE = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";
const SNAPSHOT_IMAGE = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";
const CALENDLY_URL = "https://calendly.com/iauditgloballtd/30min";
const CHECKLIST_HREF = "/iso-audit-assessments/gap-analysis/checklist";

const stepImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
];

const steps = [
    {
        step: "01",
        title: "Review Your Current EMS",
        text: "Work through structured questions covering the key areas of your existing environmental management system.",
        image: stepImages[0],
    },
    {
        step: "02",
        title: "Find Your Gaps",
        text: "Identify requirements that need attention, further evidence, process changes or additional controls.",
        image: stepImages[1],
    },
    {
        step: "03",
        title: "Plan Your Actions",
        text: "Turn identified gaps into clear actions so your team knows what needs attention first.",
        image: stepImages[2],
    },
    {
        step: "04",
        title: "Track Your Progress",
        text: "Monitor completed actions and use your assessment results to support ongoing improvement and transition preparation.",
        image: stepImages[3],
    },
];

type Props = {
    onStart: () => void;
};

export default function GapAnalysisLanding({ onStart }: Props) {
    const [isMobile, setIsMobile] = useState(false);
    const [isNarrow, setIsNarrow] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';

    useEffect(() => {
        const check = () => {
            const width = window.innerWidth;
            setIsMobile(width < 900);
            setIsNarrow(width < 480);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const ctaBtnStyle: CSSProperties = {
        ...primaryBtn,
        width: isMobile ? "100%" : "auto",
        minHeight: "48px",
        fontSize: isNarrow ? "0.9rem" : "0.95rem",
        padding: isNarrow ? "0.9rem 1.2rem" : "0.95rem 1.45rem",
    };

    const ghostCtaStyle: CSSProperties = {
        ...ghostBtn,
        width: isMobile ? "100%" : "auto",
        minHeight: "48px",
        fontSize: isNarrow ? "0.9rem" : "0.95rem",
        padding: isNarrow ? "0.9rem 1.2rem" : "0.95rem 1.45rem",
        boxSizing: "border-box",
    };

    return (
        <div
            style={{
                background: "#f7f8f5",
                minHeight: "100vh",
                fontFamily: font,
                overflowX: "hidden",
                width: "100%",
            }}
        >
            {/* 1 — Hero */}
            <section
                style={{
                    position: "relative",
                    minHeight: isMobile ? "auto" : "88vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={HERO_IMAGE}
                    alt="ISO 14001:2026 Gap Analysis"
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    style={{
                        objectFit: "cover",
                        objectPosition: isMobile ? "72% center" : "center",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: isMobile
                            ? "linear-gradient(180deg, rgba(4,28,18,0.78) 0%, rgba(4,28,18,0.88) 55%, rgba(4,28,18,0.94) 100%)"
                            : "linear-gradient(90deg, rgba(4,28,18,0.86) 0%, rgba(4,28,18,0.55) 55%, rgba(4,28,18,0.28) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        maxWidth: "1180px",
                        margin: "0 auto",
                        padding: isMobile
                            ? isNarrow
                                ? "7.5rem 1rem 2.75rem"
                                : "8rem 1.25rem 3.25rem"
                            : "10rem 2rem 5rem",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    <p
                        style={{
                            margin: "0 0 0.85rem",
                            color: "#9fe3c0",
                            fontWeight: 700,
                            letterSpacing: isNarrow ? "0.06em" : "0.12em",
                            textTransform: "uppercase",
                            fontSize: isNarrow ? "0.68rem" : "0.78rem",
                            lineHeight: 1.4,
                        }}
                    >
                        Free ISO 14001:2026 Gap Analysis by iAudit Global
                    </p>
                    <h1
                        style={{
                            margin: "0 0 0.5rem",
                            color: "#fff",
                            fontSize: isNarrow ? "1.85rem" : isMobile ? "2.25rem" : "4.15rem",
                            lineHeight: isMobile ? 1.15 : 1.08,
                            letterSpacing: "-0.035em",
                            fontWeight: 600,
                            maxWidth: "920px",
                            wordBreak: "break-word",
                        }}
                    >
                        Find the Gaps in Your Environmental Management System
                    </h1>
                    <p
                        style={{
                            margin: "0 0 1.75rem",
                            color: "rgba(255,255,255,0.88)",
                            fontSize: isNarrow ? "0.98rem" : isMobile ? "1.05rem" : "1.22rem",
                            lineHeight: 1.65,
                            maxWidth: "680px",
                        }}
                    >
                        Assess your environmental management system against ISO 14001:2026 requirements and identify gaps before your transition.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "0.75rem",
                            flexWrap: "wrap",
                            width: isMobile ? "100%" : "auto",
                        }}
                    >
                        <button type="button" onClick={onStart} style={ctaBtnStyle}>
                            Start free gap analysis
                        </button>
                        <Link
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={ghostCtaStyle}
                        >
                            Book a demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brochure-style View Checklist promo */}
            <section
                id="view-checklist"
                style={{
                    background: "linear-gradient(135deg, #eef8f1 0%, #f7f8f5 50%, #e8f4ec 100%)",
                    padding: isMobile
                        ? isNarrow
                            ? "2.75rem 1rem"
                            : "3.25rem 1.25rem"
                        : "4.5rem 2rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
                        gap: isMobile ? "1.5rem" : "2.75rem",
                        alignItems: "center",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: isMobile ? "16 / 11" : "4 / 5",
                            borderRadius: isMobile ? "1.1rem" : "1.35rem",
                            overflow: "hidden",
                            boxShadow: "0 18px 48px rgba(16,47,32,0.12)",
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                            alt={checklistMeta.title}
                            fill
                            sizes="(max-width: 900px) 100vw, 480px"
                            quality={90}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <p style={{ margin: "0 0 0.3rem", color: "#6b7280", fontSize: "0.85rem", fontWeight: 600 }}>Checklist</p>
                        <p style={{ margin: "0 0 0.85rem", color: "#6b7280", fontSize: "0.85rem", fontWeight: 600 }}>
                            {checklistMeta.subtitle} · ISO 14001:2026
                        </p>
                        <h2
                            style={{
                                margin: "0 0 1rem",
                                color: "#10291d",
                                fontSize: isNarrow ? "1.55rem" : isMobile ? "1.85rem" : "2.45rem",
                                lineHeight: 1.15,
                                letterSpacing: "-0.03em",
                                fontWeight: 700,
                                wordBreak: "break-word",
                            }}
                        >
                            {checklistMeta.title}
                        </h2>
                        <p
                            style={{
                                margin: "0 0 1.35rem",
                                color: "#4b5563",
                                fontSize: isNarrow ? "0.98rem" : "1.05rem",
                                lineHeight: 1.7,
                                maxWidth: "34rem",
                            }}
                        >
                            {checklistMeta.purpose}
                        </p>
                        <Link
                            href={CHECKLIST_HREF}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#1f2937",
                                color: "#fff",
                                textDecoration: "none",
                                borderRadius: "0.55rem",
                                padding: isNarrow ? "0.85rem 1.15rem" : "0.9rem 1.35rem",
                                fontWeight: 700,
                                fontSize: isNarrow ? "0.9rem" : "0.95rem",
                                minHeight: "48px",
                                width: isMobile ? "100%" : "auto",
                                boxSizing: "border-box",
                            }}
                        >
                            View the Checklist
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2 — About */}
            <section
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: isMobile
                        ? isNarrow
                            ? "2.75rem 1rem"
                            : "3.25rem 1.25rem"
                        : "5.5rem 2rem",
                    textAlign: "center",
                    boxSizing: "border-box",
                    width: "100%",
                }}
            >
                <p
                    style={{
                        margin: "0 0 0.75rem",
                        color: "#006644",
                        fontWeight: 700,
                        letterSpacing: isNarrow ? "0.06em" : "0.12em",
                        textTransform: "uppercase",
                        fontSize: isNarrow ? "0.68rem" : "0.75rem",
                        lineHeight: 1.4,
                    }}
                >
                    Understanding Gap Analysis
                </p>
                <h2
                    style={{
                        margin: "0 0 1rem",
                        fontSize: isNarrow ? "1.55rem" : isMobile ? "1.85rem" : "2.6rem",
                        color: "#143528",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                        wordBreak: "break-word",
                    }}
                >
                    What Is an ISO 14001:2026 Gap Analysis?
                </h2>
                <p
                    style={{
                        margin: "0 auto 1.75rem",
                        maxWidth: "760px",
                        color: "#4b5563",
                        fontSize: isNarrow ? "0.95rem" : "1.05rem",
                        lineHeight: 1.75,
                    }}
                >
                    An ISO 14001:2026 Gap Analysis compares your existing environmental management system with the requirements of the updated standard.
                </p>
                <p
                    style={{
                        margin: "0 auto 1.75rem",
                        maxWidth: "760px",
                        color: "#6b7280",
                        fontSize: isNarrow ? "0.9rem" : "0.98rem",
                        lineHeight: 1.65,
                    }}
                >
                    It helps you see what is already in place, where gaps exist and what may need to change before transition.
                </p>
                <p
                    style={{
                        margin: "0 auto 1.75rem",
                        maxWidth: isMobile ? "760px" : "1000px",
                        color: "#6b7280",
                        fontSize: isNarrow ? "0.9rem" : "0.98rem",
                        lineHeight: 1.65,
                        whiteSpace: isMobile ? "normal" : "nowrap",
                    }}
                >
                    Rather than treating every area as a problem, the assessment shows where your attention is actually needed.
                </p>
                <p
                    style={{
                        margin: "0 auto 1.75rem",
                        maxWidth: "760px",
                        color: "#6b7280",
                        fontSize: isNarrow ? "0.9rem" : "0.98rem",
                        lineHeight: 1.65,
                    }}
                >
                    It can also help you prioritise actions, prepare for internal audits and plan your transition with a clearer understanding of your current position.
                </p>
                <p
                    style={{
                        margin: "0 auto 1.75rem",
                        maxWidth: "760px",
                        color: "#6b7280",
                        fontSize: isNarrow ? "0.9rem" : "0.98rem",
                        lineHeight: 1.65,
                    }}
                >
                    The aim is simple: understand where your EMS stands today and what needs to happen next.
                </p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "2rem",
                        width: "100%",
                    }}
                >
                    <button
                        type="button"
                        onClick={onStart}
                        style={{
                            ...ctaBtnStyle,
                            maxWidth: isMobile ? "100%" : "320px",
                        }}
                    >
                        Start free gap analysis
                    </button>
                </div>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "920px",
                        margin: "0 auto",
                        borderRadius: isMobile ? "1rem" : "1.25rem",
                        overflow: "hidden",
                        boxShadow: "0 18px 50px rgba(16,47,32,0.12)",
                        aspectRatio: isMobile ? "16 / 10" : "16 / 8",
                    }}
                >
                    <Image
                        src={SNAPSHOT_IMAGE}
                        alt={checklistMeta.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 920px"
                        quality={90}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* 3 — How it works */}
            <section
                id="how-it-works"
                style={{
                    background: "#10291d",
                    padding: isMobile
                        ? isNarrow
                            ? "2.75rem 1rem"
                            : "3.25rem 1.25rem"
                        : "5rem 2rem",
                }}
            >
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
                    <p
                        style={{
                            margin: "0 0 0.6rem",
                            color: "#9fe3c0",
                            fontWeight: 700,
                            letterSpacing: isNarrow ? "0.06em" : "0.12em",
                            textTransform: "uppercase",
                            fontSize: isNarrow ? "0.68rem" : "0.75rem",
                            textAlign: "center",
                        }}
                    >
                        How It Works
                    </p>
                    <h2
                        style={{
                            margin: "0 0 1rem",
                            color: "#fff",
                            fontSize: isNarrow ? "1.55rem" : isMobile ? "1.85rem" : "2.5rem",
                            textAlign: "center",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.2,
                            wordBreak: "break-word",
                        }}
                    >
                        How the Free ISO 14001:2026 Gap Analysis Works
                    </h2>
                    <p
                        style={{
                            margin: "0 auto 2rem",
                            maxWidth: "720px",
                            color: "rgba(255,255,255,0.78)",
                            textAlign: "center",
                            lineHeight: 1.7,
                            fontSize: isNarrow ? "0.95rem" : "1.02rem",
                        }}
                    >
                        Work through the requirements, identify gaps, prioritise actions and build a clearer path towards ISO 14001:2026 transition.
                    </p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: isMobile ? "1rem" : "1.25rem",
                        }}
                    >
                        {steps.map((item) => (
                            <article
                                key={item.step}
                                style={{
                                    background: "#fff",
                                    borderRadius: isMobile ? "1.1rem" : "1.35rem",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    minHeight: "100%",
                                }}
                            >
                                <div style={{ position: "relative", height: isNarrow ? "150px" : "180px" }}>
                                    <Image
                                        src={item.image}
                                        alt={item.step}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 540px"
                                        quality={90}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: isNarrow ? "1.15rem 1.1rem 1.25rem" : "1.35rem 1.4rem 1.5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1,
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: "0 0 0.4rem",
                                            color: "#006644",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            fontSize: "0.72rem",
                                        }}
                                    >
                                        {item.step}
                                    </p>
                                    <h3
                                        style={{
                                            margin: "0 0 0.6rem",
                                            color: "#10291d",
                                            lineHeight: 1.3,
                                            fontSize: isNarrow ? "1rem" : "1.1rem",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{
                                            margin: 0,
                                            color: "#4b5563",
                                            lineHeight: 1.7,
                                            flex: 1,
                                            fontSize: isNarrow ? "0.92rem" : "1rem",
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: isMobile ? "1.75rem" : "2.25rem",
                            width: "100%",
                        }}
                    >
                        <button
                            type="button"
                            onClick={onStart}
                            style={{
                                ...ctaBtnStyle,
                                maxWidth: isMobile ? "100%" : "320px",
                            }}
                        >
                            Start free gap analysis
                        </button>
                    </div>
                </div>
            </section>

            <FAQAccordion items={gapAnalysisFaqItems} heading="Frequently Asked Questions" sparkleText="FAQ" />

            {/* 5 — Get started */}
            <CTA
                tag="Start Your Gap Analysis"
                title={<>Start Your ISO 14001:2026 Gap Analysis</>}
                description="Start your free ISO 14001:2026 Gap Analysis and see where your environmental management system needs attention."
                buttonText="Start free gap analysis"
                buttonHref="#start"
                secondaryButtonText="Book a demo"
                secondaryButtonHref={CALENDLY_URL}
            />
            <StartCtaBridge onStart={onStart} />
            <Footer />
        </div>
    );
}

/** Opens the assessment modal when the CTA primary link (#start) is clicked. */
function StartCtaBridge({ onStart }: { onStart: () => void }) {
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest?.('a[href="#start"]') as HTMLAnchorElement | null;
            if (!anchor) return;
            event.preventDefault();
            onStart();
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [onStart]);
    return null;
}

const primaryBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #07a34d 0%, #006644 100%)",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "999px",
    padding: "0.95rem 1.45rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    cursor: "pointer",
    fontFamily: '"Pp Neue Montreal", sans-serif',
    boxSizing: "border-box",
};

const ghostBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.95rem 1.45rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    border: "1px solid rgba(255,255,255,0.45)",
    boxSizing: "border-box",
};
