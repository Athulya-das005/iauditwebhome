"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80";
const SNAPSHOT_IMAGE = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";
const CALENDLY_URL = "https://calendly.com/iauditgloballtd/30min";

const steps = [
    {
        step: "Step 1",
        title: "Select your standard and organisation",
        text: "Choose ISO 14001:2026. Select the site or department you are evaluating.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: "Step 2",
        title: "Work through each clause",
        text: "Answer structured Yes or No questions aligned to each ISO clause. Track your progress across the full standard in real time.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: "Step 3",
        title: "Identify your compliance gaps",
        text: "See clearly which clauses are strong, which carry risk and which require immediate attention before a formal audit.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
        step: "Step 4",
        title: "Build your improvement plan",
        text: "Use self assessment findings to prioritise corrective action, allocate resources and demonstrate continual improvement over time.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
];

type Props = {
    onStart: () => void;
};

export default function SelfAssessmentLanding({ onStart }: Props) {
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
                    alt="ISO 14001:2026 Self Assessment"
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
                                ? "6.5rem 1rem 2.75rem"
                                : "7rem 1.25rem 3.25rem"
                            : "8.5rem 2rem 5rem",
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
                        ISO Self Assessment by iAudit Global
                    </p>
                    <h1
                        style={{
                            margin: "0 0 1rem",
                            color: "#fff",
                            fontSize: isNarrow ? "1.85rem" : isMobile ? "2.25rem" : "4.15rem",
                            lineHeight: isMobile ? 1.15 : 1.08,
                            letterSpacing: "-0.035em",
                            fontWeight: 600,
                            maxWidth: "920px",
                            wordBreak: "break-word",
                        }}
                    >
                        Structured ISO Self Assessment for Compliance Excellence
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
                        Evaluate your environmental management system clause by clause against ISO 14001:2026.
                        Identify gaps, measure readiness and build a structured improvement plan before your next
                        audit.
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
                            Start free assessment
                        </button>
                        <Link href="/iso-audit-assessments/self-assessment/checklist" style={ghostCtaStyle}>
                            View the checklist
                        </Link>
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
                            alt="ISO 14001:2026 Self-Assessment Checklist"
                            fill
                            sizes="(max-width: 900px) 100vw, 480px"
                            quality={90}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <p style={{ margin: "0 0 0.3rem", color: "#6b7280", fontSize: "0.85rem", fontWeight: 600 }}>Checklist</p>
                        <p style={{ margin: "0 0 0.85rem", color: "#6b7280", fontSize: "0.85rem", fontWeight: 600 }}>Sustainability · ISO 14001:2026</p>
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
                            ISO 14001:2026 Self-Assessment Checklist
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
                            Preview how the assessment works before you start. Explore all 65 questions, tick Yes or No,
                            see your live score, and read maturity guidance, 2026 key changes and climate considerations
                            from our checklist.
                        </p>
                        <Link
                            href="/iso-audit-assessments/self-assessment/checklist"
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

            {/* 2 — Understanding */}
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
                    Understanding ISO Self Assessment
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
                    Know where your management system stands
                </h2>
                {[
                    "An ISO Self Assessment is a structured, clause-based evaluation of how well your organisation currently meets the requirements of an ISO standard.",
                    "It is not a formal audit.",
                    "It is a structured readiness check that gives you an honest picture of your compliance position before an internal or external auditor does.",
                    "Most organisations discover gaps reactively, during certification audits or surveillance visits. An ISO Self Assessment changes that by surfacing those gaps early, while there is still time to address them.",
                ].map((paragraph, index, list) => (
                    <p
                        key={paragraph}
                        style={{
                            margin: index === list.length - 1 ? "0 auto 1.75rem" : "0 auto 1.1rem",
                            maxWidth: "760px",
                            color: "#4b5563",
                            fontSize: isNarrow ? "0.95rem" : "1.05rem",
                            lineHeight: 1.75,
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
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
                        Start free assessment
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
                        alt="Structured ISO Self Assessment readiness check"
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
                        How it works
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
                        Structured ISO Self Assessment aligned to your standard
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
                        The iAudit ISO Self Assessment module follows the clause structure of your chosen standard.
                        Each clause is broken into structured questions that evaluate your current compliance position.
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
                                        alt={item.title}
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
                                            margin: "0 0 0.65rem",
                                            fontSize: isNarrow ? "1.1rem" : "1.25rem",
                                            color: "#143528",
                                            letterSpacing: "-0.02em",
                                            lineHeight: 1.3,
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
                            Start free assessment
                        </button>
                    </div>
                </div>
            </section>

            {/* 5 — Get started */}
            <CTA
                tag="Get started"
                title={<>Start your ISO Self Assessment today</>}
                description="Evaluate compliance, identify gaps and build a structured improvement plan before your next internal or certification audit. No credit card required."
                buttonText="Start free assessment"
                buttonHref="#start"
                secondaryButtonText="Book a demo"
                secondaryButtonHref={CALENDLY_URL}
                badges={["No credit card required", "Clause-based for ISO 14001:2026"]}
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
