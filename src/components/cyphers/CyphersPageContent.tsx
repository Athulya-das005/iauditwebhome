"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyphersQuoteForm from "@/components/cyphers/CyphersQuoteForm";
import "./cyphers.css";

const FONT_STYLESHEET =
    "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700&f[]=general-sans@400,500,600&display=swap";

const LINKS = {
    assessment: "#contact",
};

const VALUES = [
    {
        num: "01",
        title: "Find",
        body: "Identify vulnerabilities across applications, APIs and digital products through focused security testing.",
    },
    {
        num: "02",
        title: "Validate",
        body: "Go beyond automated findings with manual testing, exploitation and vulnerability validation.",
    },
    {
        num: "03",
        title: "Remediate",
        body: "Understand the business impact and what needs to change to reduce your exposure.",
    },
];

const ABOUT_ITEMS = [
    {
        num: "01",
        title: "Part of iAudit Global",
        body: "Cyphers is the cybersecurity division of iAudit Global, combining security expertise with experience building digital products.",
    },
    {
        num: "02",
        title: "Human-Led Testing",
        body: "We combine security tools with manual testing to investigate vulnerabilities, test real attack paths and reduce false positives.",
    },
    {
        num: "03",
        title: "Business Context",
        body: "We consider your product, users and workflows to understand how technical weaknesses could affect your business.",
    },
    {
        num: "04",
        title: "Actionable Outcomes",
        body: "You receive clear findings, practical remediation guidance and prioritised risks that help your team decide what to fix first.",
    },
];

const CLIENT_LOGOS = [
    { src: "/images/Cypher-Logos/Siemens%20logo.png", alt: "Siemens" },
    { src: "/images/Cypher-Logos/Panasonic%20logo.png", alt: "Panasonic" },
    { src: "/images/Cypher-Logos/Gea%20logo.png", alt: "GEA" },
    { src: "/images/Cypher-Logos/Latvian%20Govt%20logo.png", alt: "Latvian Government" },
    { src: "/images/Cypher-Logos/Sweethawk%20logo.png", alt: "SweetHawk" },
];

interface HallOfFameEntry {
    num: string;
    organization: string;
    status: string;
    badgeType: "green" | "blue" | "amber";
    link?: string;
    linkLabel?: string;
    note?: string;
    logo?: string;
}

const HALL_OF_FAME_LIST: HallOfFameEntry[] = [
    {
        num: "01",
        organization: "Gea",
        status: "GOT HALL OF FAME",
        badgeType: "green",
        link: "https://www.gea.com/en/about-us/information-security/products/responsible-disclosure-of-security-issues/hall-of-fame/",
        linkLabel: "View Hall of Fame",
        logo: "/images/Cypher-Logos/Gea%20logo.png",
    },
    {
        num: "02",
        organization: "PANASONIC",
        status: "GOT LETTER",
        badgeType: "blue",
        note: "Official Letter of Appreciation",
        logo: "/images/Cypher-Logos/Panasonic%20logo.png",
    },
    {
        num: "03",
        organization: "Siemens",
        status: "HOF CONFIRMED, NOT LISTED YET",
        badgeType: "amber",
        note: "Confirmed by Security Team",
        logo: "/images/Cypher-Logos/Siemens%20logo.png",
    },
    {
        num: "04",
        organization: "Shell Orbit",
        status: "GOT HOF",
        badgeType: "green",
        link: "https://shellorbit.com/legal/hall-of-fame/",
        linkLabel: "View Hall of Fame",
    },
    {
        num: "05",
        organization: "Sweethawk",
        status: "GOT HOF",
        badgeType: "green",
        link: "https://sweethawk.com/responsible-disclosure",
        linkLabel: "View Hall of Fame",
        logo: "/images/Cypher-Logos/Sweethawk%20logo.png",
    },
    {
        num: "06",
        organization: "Latvian Government",
        status: "GOT LETTER",
        badgeType: "blue",
        note: "Official Recognition Letter",
        logo: "/images/Cypher-Logos/Latvian%20Govt%20logo.png",
    },
    {
        num: "07",
        organization: "WHO",
        status: "HOF CONFIRMED, NOT LISTED YET",
        badgeType: "amber",
        note: "Confirmed by Security Team",
    },
    {
        num: "08",
        organization: "Pipefy",
        status: "HOF CONFIRMED, NOT LISTED YET",
        badgeType: "amber",
        note: "Confirmed by Security Team",
    },
];

type TextPart = string | { grey: string };

/** Words wrapped in masks so each can slide up into view (line-reveal effect). */
function RevealWords({ parts }: { parts: TextPart[] }) {
    const nodes: ReactNode[] = [];
    parts.forEach((part, partIndex) => {
        const grey = typeof part !== "string";
        const text = typeof part === "string" ? part : part.grey;
        text.split(/(\s+)/).forEach((token, i) => {
            if (!token) return;
            if (/^\s+$/.test(token)) {
                nodes.push(" ");
                return;
            }
            nodes.push(
                <span key={`${partIndex}-${i}`} className="cy-word-mask">
                    <span className={`cy-word-inner${grey ? " cy-grey" : ""}`}>{token}</span>
                </span>
            );
        });
    });
    return <>{nodes}</>;
}

/** Characters split so opacity can be scrubbed with scroll. Words stay unbroken. */
function ScrubText({ text }: { text: string }) {
    return (
        <>
            {text.split(" ").map((word, wi, words) => (
                <span key={wi}>
                    <span className="cy-scrub-word">
                        {Array.from(word).map((char, ci) => (
                            <span key={ci} className="cy-scrub-char">
                                {char}
                            </span>
                        ))}
                    </span>
                    {wi < words.length - 1 ? " " : null}
                </span>
            ))}
        </>
    );
}

function Button({ href, children, variant = "primary" }: { href: string; children: string; variant?: "primary" | "secondary" }) {
    return (
        <a href={href} className={`cy-btn${variant === "secondary" ? " cy-btn--secondary" : ""}`}>
            <span className="cy-btn__clip">
                <span className="cy-btn__text">{children}</span>
                <span className="cy-btn__text cy-btn__text--bottom" aria-hidden>
                    {children}
                </span>
            </span>
        </a>
    );
}

function SecurityCore({ id, blurred }: { id: string; blurred?: boolean }) {
    const g = (name: string) => `${id}-${name}`;
    const shield = "M260 150 L342 182 V256 C342 312 306 352 260 372 C214 352 178 312 178 256 V182 Z";
    return (
        <div className={`cy-core${blurred ? " cy-core--blur" : ""}`} aria-hidden>
            <svg viewBox="0 0 520 520" fill="none">
                <defs>
                    <linearGradient id={g("blue")} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#058c42" />
                        <stop offset="1" stopColor="#7fd3a3" />
                    </linearGradient>
                    <linearGradient id={g("warm")} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#7fd3a3" />
                        <stop offset="0.5" stopColor="#058c42" />
                        <stop offset="1" stopColor="#003e3a" />
                    </linearGradient>
                    <radialGradient id={g("glow")}>
                        <stop offset="0" stopColor="#7fd3a3" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#7fd3a3" stopOpacity="0" />
                    </radialGradient>
                    <clipPath id={g("clip")}>
                        <path d={shield} />
                    </clipPath>
                </defs>

                <circle className="cy-pulse" cx="260" cy="260" r="245" fill={`url(#${g("glow")})`} />

                <g className="cy-spin-slow">
                    <circle cx="260" cy="260" r="222" stroke="#058c42" strokeOpacity="0.3" strokeDasharray="2 12" />
                    {[0, 90, 180, 270].map((deg) => (
                        <circle
                            key={deg}
                            cx={260 + 222 * Math.cos((deg * Math.PI) / 180)}
                            cy={260 + 222 * Math.sin((deg * Math.PI) / 180)}
                            r="5"
                            fill="#058c42"
                        />
                    ))}
                </g>

                <g className="cy-spin-mid">
                    <circle cx="260" cy="260" r="180" stroke={`url(#${g("blue")})`} strokeWidth="2" strokeDasharray="130 36 18 36" strokeLinecap="round" />
                    <circle cx="440" cy="260" r="7" fill="#003e3a" />
                </g>

                <g className="cy-spin-fast">
                    <rect x="146" y="146" width="228" height="228" rx="60" stroke={`url(#${g("warm")})`} strokeOpacity="0.75" strokeWidth="1.5" />
                </g>

                <g className="cy-float">
                    <path d={shield} fill={`url(#${g("blue")})`} />
                    <path d={shield} stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
                    <g clipPath={`url(#${g("clip")})`}>
                        <rect className="cy-scan" x="170" y="258" width="180" height="3" fill="#ffffff" opacity="0.85" />
                    </g>
                    <path d="M244 252 V240 a16 16 0 0 1 32 0 V252" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                    <rect x="232" y="250" width="56" height="44" rx="10" fill="#ffffff" />
                    <circle cx="260" cy="268" r="6" fill="#058c42" />
                    <rect x="257.5" y="270" width="5" height="12" rx="2.5" fill="#058c42" />
                </g>

                {[
                    [120, 150],
                    [402, 120],
                    [428, 372],
                    [96, 360],
                    [300, 452],
                ].map(([cx, cy], i) => (
                    <circle
                        key={i}
                        className="cy-blink"
                        style={{ animationDelay: `${i * 0.45}s` }}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill={i % 2 ? "#003e3a" : "#058c42"}
                    />
                ))}
            </svg>
        </div>
    );
}

function Radar() {
    const blips = [
        { top: "28%", left: "64%", alt: false, delay: "0s" },
        { top: "66%", left: "30%", alt: true, delay: "0.9s" },
        { top: "72%", left: "70%", alt: false, delay: "1.6s" },
        { top: "36%", left: "24%", alt: false, delay: "2.2s" },
    ];
    return (
        <div className="cy-radar" aria-hidden>
            <div className="cy-radar__sweep" />
            {blips.map((b, i) => (
                <span
                    key={i}
                    className={`cy-radar__blip${b.alt ? " cy-radar__blip--alt" : ""}`}
                    style={{ top: b.top, left: b.left, animationDelay: b.delay }}
                />
            ))}
            <div className="cy-radar__core" />
        </div>
    );
}

const CIRCUIT_LINES = [
    "M-5 20 H62 L231 135 V164 L273 192 H540",
    "M540 49 H442 L357 106 V135 L188 249 H-5",
    "M-5 278 H231 L441 135 V106 L485 78 H540",
    "M-5 78 H62 L147 135 V192 L231 249 H540",
    "M-5 306 H290 L352 264 H540",
];
const CIRCUIT_HIGHLIGHT = "M-5 106 H147 L188 135 V163 L273 221 H540";

function CircuitLines() {
    return (
        <svg className="cy-circuit" viewBox="0 0 535 344" fill="none" aria-hidden>
            {CIRCUIT_LINES.map((d) => (
                <path key={d} className="cy-circuit__line" d={d} pathLength={1} />
            ))}
            <path className="cy-circuit__line cy-circuit__line--highlight" d={CIRCUIT_HIGHLIGHT} pathLength={1} />
            <path className="cy-circuit__pulse" d={CIRCUIT_HIGHLIGHT} pathLength={1} />
            <path className="cy-circuit__pulse cy-circuit__pulse--alt" d={CIRCUIT_LINES[2]} pathLength={1} />
            <path className="cy-circuit__pulse cy-circuit__pulse--late" d={CIRCUIT_LINES[1]} pathLength={1} />
        </svg>
    );
}

function LogoMarquee({ reverse }: { reverse?: boolean }) {
    const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
    return (
        <div className={`cy-marquee${reverse ? " cy-marquee--reverse" : ""}`}>
            <div className="cy-marquee__cover" />
            <div className="cy-marquee__track">
                {[...logos, ...logos].map((logo, i) => (
                    <div key={i} className="cy-logo-tile" aria-hidden={i >= CLIENT_LOGOS.length ? true : undefined}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={logo.src} alt={i < CLIENT_LOGOS.length ? `${logo.alt} logo` : ""} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CyphersPageContent() {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            anchors: { offset: -96 },
        });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        const ctx = gsap.context(() => {
            const heroCard = root.querySelector(".cy-hero .cy-card");
            if (heroCard) {
                gsap.from(heroCard, {
                    rotateX: 28,
                    yPercent: 14,
                    scale: 0.94,
                    opacity: 0,
                    duration: 1.6,
                    ease: "expo.out",
                    delay: 0.1,
                });
            }
            gsap.from(root.querySelectorAll(".cy-hero [data-cy-lines] .cy-word-inner"), {
                yPercent: 110,
                duration: 0.9,
                ease: "power4.out",
                stagger: { amount: 0.5 },
                delay: 0.45,
            });
            gsap.from(root.querySelectorAll(".cy-hero .cy-btn"), {
                y: 24,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1,
                delay: 0.95,
            });
            gsap.to(root.querySelectorAll(".cy-hero .cy-core"), {
                yPercent: -8,
                ease: "none",
                scrollTrigger: { trigger: ".cy-hero", start: "top top", end: "bottom top", scrub: true },
            });

            root.querySelectorAll<HTMLElement>("[data-cy-lines]").forEach((el) => {
                if (el.closest(".cy-hero")) return;
                gsap.fromTo(
                    el.querySelectorAll(".cy-word-inner"),
                    { yPercent: 110 },
                    {
                        yPercent: 0,
                        duration: 0.6,
                        ease: "power4.out",
                        stagger: { amount: 0.4 },
                        scrollTrigger: { trigger: el, start: "top 90%" },
                    }
                );
            });

            root.querySelectorAll<HTMLElement>("[data-cy-scrub]").forEach((el) => {
                gsap.from(el.querySelectorAll(".cy-scrub-char"), {
                    opacity: 0.2,
                    stagger: 0.1,
                    scrollTrigger: { trigger: el, start: "top 80%", end: "top 20%", scrub: true },
                });
            });

            root.querySelectorAll<HTMLElement>("[data-cy-tilt]").forEach((el) => {
                gsap.from(el, {
                    rotateX: 20,
                    y: 90,
                    opacity: 0,
                    duration: 1.3,
                    ease: "expo.out",
                    scrollTrigger: { trigger: el, start: "top 88%" },
                });
            });

            const circuit = root.querySelector(".cy-circuit");
            if (circuit) {
                const tl = gsap.timeline({ scrollTrigger: { trigger: circuit, start: "top 85%" } });
                tl.fromTo(
                    circuit.querySelectorAll(".cy-circuit__line"),
                    { strokeDashoffset: 1 },
                    { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut", stagger: 0.15 }
                ).fromTo(circuit.querySelectorAll(".cy-circuit__pulse"), { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.4");
            }

            const values = root.querySelectorAll(".cy-value");
            if (values.length) {
                gsap.from(values, {
                    rotateX: 28,
                    y: 80,
                    opacity: 0,
                    duration: 1.2,
                    ease: "expo.out",
                    stagger: 0.12,
                    scrollTrigger: { trigger: ".cy-grid-3", start: "top 85%" },
                });
            }
        }, root);

        return () => {
            ctx.revert();
            gsap.ticker.remove(tick);
            gsap.ticker.lagSmoothing(500, 33);
            lenis.destroy();
        };
    }, []);

    return (
        <div ref={rootRef} className="cy-root">
            <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
            <link rel="stylesheet" href={FONT_STYLESHEET} precedence="default" />

            {/* Hero */}
            <section className="cy-hero" id="overview">
                <div className="cy-container cy-perspective">
                    <div className="cy-card">
                        <div className="cy-hero__visual">
                            <SecurityCore id="cy-core-blur" blurred />
                            <SecurityCore id="cy-core" />
                        </div>
                        <div className="cy-hero__content">
                            <div className="cy-hero__copy">
                                <p className="cy-tag cy-tag--as-written" data-cy-lines>
                                    <RevealWords parts={["Cyphers by iAudit Global"]} />
                                </p>
                                <h1 className="cy-h1" data-cy-lines>
                                    <RevealWords parts={["Test. ", { grey: "Expose." }, " Secure."]} />
                                </h1>
                                <p className="cy-lead" data-cy-lines>
                                    <RevealWords parts={["Practical security testing for applications, APIs and digital products."]} />
                                </p>
                            </div>
                            <div className="cy-btn-group">
                                <Button href={LINKS.assessment}>Book a Security Assessment</Button>
                                <Button href={LINKS.assessment} variant="secondary">
                                    Get Fee Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Testing With Purpose */}
            <section className="cy-section" id="services">
                <div className="cy-container">
                    <div className="cy-title-wrap">
                        <h2 className="cy-h2" data-cy-scrub style={{ gridColumn: "1 / -1", maxWidth: "16ch" }}>
                            <ScrubText text="Security Testing With Purpose" />
                        </h2>
                    </div>
                    <div className="cy-grid-3">
                        {VALUES.map((value) => (
                            <article key={value.num} className="cy-value">
                                <div className="cy-value__top">
                                    <span className="cy-value__dot" aria-hidden />
                                    {value.num}
                                </div>
                                <div className="cy-value__bottom">
                                    <h3 className="cy-value__title" data-cy-lines>
                                        <RevealWords parts={[value.title]} />
                                    </h3>
                                    <p className="cy-value__body" data-cy-lines>
                                        <RevealWords parts={[value.body]} />
                                    </p>
                                </div>
                                <div className="cy-value__orb" aria-hidden />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beyond Automated Scans */}
            <section className="cy-section">
                <div className="cy-container">
                    <div className="cy-title-wrap cy-title-wrap--flush">
                        <h2 className="cy-tag" data-cy-lines>
                            <RevealWords parts={["Beyond Automated Scans"]} />
                        </h2>
                        <p className="cy-h4 cy-h4--light" data-cy-scrub>
                            <ScrubText text="We examine applications, APIs and critical user journeys to uncover weaknesses that automated tools can miss." />
                        </p>
                    </div>
                </div>
            </section>

            {/* Understand Your Security Risk */}
            <section className="cy-section">
                <div className="cy-container cy-perspective">
                    <div className="cy-card" data-cy-tilt>
                        <div className="cy-cta__content">
                            <p className="cy-tag" data-cy-lines>
                                <RevealWords parts={["Take the First Step"]} />
                            </p>
                            <div className="cy-cta__copy">
                                <h2 className="cy-h3" data-cy-lines>
                                    <RevealWords parts={["Understand Your ", { grey: "Security Risk" }]} />
                                </h2>
                                <p className="cy-lead" data-cy-lines>
                                    <RevealWords
                                        parts={[
                                            "Get a clear view of your security exposure, understand what needs attention, and make informed decisions about protecting your applications and digital products.",
                                        ]}
                                    />
                                </p>
                                <div className="cy-btn-group">
                                    <Button href={LINKS.assessment}>Book a Security Assessment</Button>
                                </div>
                            </div>
                        </div>
                        <div className="cy-cta__visual">
                            <Radar />
                        </div>
                    </div>
                </div>
            </section>

            {/* Built on Experience */}
            <section className="cy-section" id="experience">
                <div className="cy-container cy-partners">
                    <div className="cy-partners__intro">
                        <p className="cy-tag" data-cy-lines>
                            <RevealWords parts={["Built on Experience"]} />
                        </p>
                        <h2 className="cy-h4" data-cy-scrub>
                            <ScrubText text="Backed by experience, client trust and recognition across the technology industry" />
                        </h2>
                    </div>
                    <div className="cy-marquee-stack">
                        <LogoMarquee />
                        <LogoMarquee reverse />
                    </div>
                </div>
            </section>

            {/* Cyphers by iAudit */}
            <section className="cy-section" id="about">
                <div className="cy-container cy-perspective">
                    <div className="cy-card cy-about" data-cy-tilt>
                        <div className="cy-about__left">
                            <div className="cy-about__title">
                                <h2 className="cy-h2" data-cy-lines>
                                    <RevealWords parts={["CYPHERS ", { grey: "by iAUDIT" }]} />
                                </h2>
                            </div>
                            <CircuitLines />
                        </div>
                        <div className="cy-about__right">
                            {ABOUT_ITEMS.map((item) => (
                                <div key={item.num} className="cy-about__item">
                                    <div className="cy-about__num">
                                        <span className="cy-value__dot" aria-hidden />
                                        {item.num}
                                    </div>
                                    <p className="cy-about__text" data-cy-lines>
                                        <strong>
                                            <RevealWords parts={[`${item.title}.`]} />
                                        </strong>{" "}
                                        <RevealWords parts={[item.body]} />
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Hall of Fame Recognition */}
            <section className="cy-section cy-recognition" id="recognition">
                <div className="cy-container cy-perspective">
                    <div className="cy-recognition__header">
                        <p className="cy-tag" data-cy-lines>
                            <RevealWords parts={["Recognition & Trust"]} />
                        </p>
                        <h2 className="cy-h2" data-cy-lines>
                            <RevealWords parts={["Our Hall of Fame ", { grey: "Recognition" }]} />
                        </h2>
                        <p className="cy-lead" style={{ maxWidth: "48rem", marginTop: "1rem" }} data-cy-lines>
                            <RevealWords
                                parts={[
                                    "Our vulnerability research has earned recognition from leading technology companies.",
                                ]}
                            />
                        </p>
                    </div>

                    <div className="cy-recognition__card" data-cy-tilt>
                        <div className="cy-recognition__meta">
                            <div className="cy-recognition__meta-tags">
                                <span className="cy-recognition__stat-pill">
                                    <span className="cy-recognition__stat-pill-dot" />
                                    8 Verified Recognitions
                                </span>
                                <span className="cy-recognition__stat-pill">
                                    <span className="cy-recognition__stat-pill-dot" style={{ backgroundColor: "#2e90fa" }} />
                                    Global Industry Leaders
                                </span>
                                <span className="cy-recognition__stat-pill">
                                    <span className="cy-recognition__stat-pill-dot" style={{ backgroundColor: "#f79009" }} />
                                    Responsible Disclosure
                                </span>
                            </div>
                        </div>

                        <div className="cy-table-wrapper">
                            <table className="cy-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: "60px" }}>#</th>
                                        <th style={{ width: "240px" }}>Organization</th>
                                        <th style={{ width: "260px" }}>Recognition Status</th>
                                        <th>Verification & Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {HALL_OF_FAME_LIST.map((item) => (
                                        <tr key={item.num}>
                                            <td>
                                                <span className="cy-entity-index">{item.num}</span>
                                            </td>
                                            <td>
                                                <div className="cy-entity-cell">
                                                    {item.logo ? (
                                                        <span
                                                            style={{
                                                                width: "36px",
                                                                height: "36px",
                                                                borderRadius: "8px",
                                                                background: "#f8fafc",
                                                                border: "1px solid #e2e8f0",
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                padding: "4px",
                                                                flexShrink: 0,
                                                            }}
                                                        >
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img
                                                                src={item.logo}
                                                                alt={item.organization}
                                                                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                            />
                                                        </span>
                                                    ) : (
                                                        <span
                                                            style={{
                                                                width: "36px",
                                                                height: "36px",
                                                                borderRadius: "8px",
                                                                background: "#f1f5f9",
                                                                border: "1px solid #e2e8f0",
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontWeight: 700,
                                                                fontSize: "0.8rem",
                                                                color: "#475569",
                                                                flexShrink: 0,
                                                            }}
                                                        >
                                                            {item.organization.slice(0, 2).toUpperCase()}
                                                        </span>
                                                    )}
                                                    <span className="cy-entity-name">{item.organization}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`cy-badge cy-badge--${item.badgeType}`}>
                                                    <span className="cy-badge-dot" />
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="cy-ref-link"
                                                    >
                                                        <span>{item.linkLabel || "View Hall of Fame"}</span>
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                            <line x1="7" y1="17" x2="17" y2="7" />
                                                            <polyline points="7 7 17 7 17 17" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    <span className="cy-ref-muted">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                            <polyline points="14 2 14 8 20 8" />
                                                            <line x1="16" y1="13" x2="8" y2="13" />
                                                            <line x1="16" y1="17" x2="8" y2="17" />
                                                        </svg>
                                                        {item.note}
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA + form */}
            <section className="cy-section" id="contact">
                <div className="cy-container cy-perspective">
                    <div className="cy-card cy-final" data-cy-tilt>
                        <div className="cy-final__copy">
                            <h2 className="cy-h3" data-cy-lines>
                                <RevealWords parts={["Find The Weaknesses ", { grey: "Before Attackers Do" }]} />
                            </h2>
                            <p className="cy-lead" data-cy-lines>
                                <RevealWords
                                    parts={[
                                        "Tell us about your application or API, and we’ll help identify the right security assessment for you.",
                                    ]}
                                />
                            </p>
                        </div>
                        <CyphersQuoteForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
