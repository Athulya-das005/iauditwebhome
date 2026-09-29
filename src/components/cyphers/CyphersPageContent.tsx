"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
    FiActivity,
    FiArrowRight,
    FiAward,
    FiBookOpen,
    FiBox,
    FiCalendar,
    FiCheck,
    FiChevronDown,
    FiCode,
    FiCompass,
    FiCreditCard,
    FiDatabase,
    FiDollarSign,
    FiFileText,
    FiGlobe,
    FiHeart,
    FiLayers,
    FiRefreshCw,
    FiSearch,
    FiShield,
    FiShoppingCart,
    FiSmartphone,
    FiTarget,
    FiTool,
    FiTrendingUp,
    FiTruck,
    FiUsers,
    FiZap,
} from "react-icons/fi";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import CyphersQuoteForm from "@/components/cyphers/CyphersQuoteForm";

const DARK = "#06110c";
const DARK_CARD = "rgba(255,255,255,0.04)";
const DARK_BORDER = "rgba(255,255,255,0.1)";
const GREEN = "#058c42";
const GREEN_DEEP = "#03624c";
const MINT = "#3ddc84";
const INK = "#0d1117";
const BODY = "#4b5563";
const MUTED = "#6b7280";
const BORDER = "#e6e9ec";
const SOFT = "#f5f7f6";
const ON_DARK_BODY = "rgba(255,255,255,0.72)";

/** Planned Cyphers sub-pages (see site structure: iaudit.global/cyphers/...) */
const LINKS = {
    quote: "#contact",
    web: "/cyphers/web-application-penetration-testing",
    api: "/cyphers/api-security-testing",
    mobile: "/cyphers/mobile-application-security-testing",
    assessments: "/cyphers/security-assessments",
    hallOfFame: "/cyphers/hall-of-fame",
    methodology: "/cyphers/methodology",
    methodologySection: "#methodology",
    contact: "/contact",
};

/** Sub-pages not built yet — CTAs pointing here render without a link so they never lead to a 404. */
const PENDING_PAGES = new Set<string>([
    LINKS.web,
    LINKS.api,
    LINKS.mobile,
    LINKS.assessments,
    LINKS.hallOfFame,
    LINKS.methodology,
]);

const SERVICES: { icon: IconType; title: string; body: string; cta: string; href: string }[] = [
    {
        icon: FiGlobe,
        title: "Web Application Penetration Testing",
        body: "Identify vulnerabilities across your web applications, including authentication, session management, access controls, business logic, file uploads and other critical functionality.",
        cta: "Explore Web Application Penetration Testing",
        href: LINKS.web,
    },
    {
        icon: FiCode,
        title: "API Security Testing",
        body: "Assess REST and GraphQL APIs for vulnerabilities involving authentication, authorisation, access control, data exposure, rate limiting and other common API security risks.",
        cta: "Explore API Security Testing",
        href: LINKS.api,
    },
    {
        icon: FiSmartphone,
        title: "Mobile Application Security Testing",
        body: "Assess mobile applications and their supporting services for vulnerabilities that could affect users, data and business operations.",
        cta: "Explore Mobile Application Security Testing",
        href: LINKS.mobile,
    },
    {
        icon: FiShield,
        title: "Security Assessments",
        body: "Gain a clearer understanding of your security exposure through a structured assessment based on your technology, business environment and security requirements.",
        cta: "Explore Security Assessments",
        href: LINKS.assessments,
    },
];

const RECOGNISED_BY = ["Microsoft", "Apple", "OpenAI", "Sony"];

const TEST_GROUPS: { icon: IconType; title: string; items: string[] }[] = [
    {
        icon: FiGlobe,
        title: "Web Application Security",
        items: [
            "Authentication",
            "Session management",
            "Access control",
            "Admin panel security",
            "File upload functionality",
            "Payment gateway security",
            "Business logic",
            "Privilege escalation",
        ],
    },
    {
        icon: FiCode,
        title: "API Security",
        items: [
            "Authentication",
            "Authorisation",
            "Broken Object Level Authorisation (BOLA)",
            "Token security",
            "Rate limiting",
            "Mass assignment",
            "Excessive data exposure",
            "Injection vulnerabilities",
        ],
    },
    {
        icon: FiZap,
        title: "Common Security Vulnerabilities",
        items: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Insecure Direct Object References (IDOR)",
            "Server-Side Request Forgery (SSRF)",
            "Broken Access Control",
            "Injection flaws",
            "Authentication weaknesses",
            "Authorisation weaknesses",
        ],
    },
];

const RISKS: { icon: IconType; title: string; body: string }[] = [
    {
        icon: FiDatabase,
        title: "Data Exposure",
        body: "Vulnerabilities can expose customer, employee or business information to unauthorised users.",
    },
    {
        icon: FiActivity,
        title: "Operational Disruption",
        body: "A security incident can affect applications, services and day-to-day business operations.",
    },
    {
        icon: FiDollarSign,
        title: "Financial Impact",
        body: "Security incidents can result in investigation, recovery, legal and operational costs.",
    },
    {
        icon: FiUsers,
        title: "Trust and Compliance",
        body: "Security requirements increasingly form part of customer, partner, supplier and compliance assessments.",
    },
];

const AUDIENCE = [
    "Store or process customer data",
    "Handle financial transactions",
    "Operate customer accounts or user portals",
    "Expose APIs",
    "Develop or operate web applications",
    "Are preparing for security or compliance requirements",
    "Work with enterprise customers or technology partners",
    "Are scaling a digital product",
    "Have introduced significant changes to an application",
    "Have never completed a security assessment",
];

const STEPS: { icon: IconType; title: string; body: string }[] = [
    {
        icon: FiCompass,
        title: "Scope",
        body: "We understand your application, APIs, technology, business processes and assessment requirements.",
    },
    {
        icon: FiSearch,
        title: "Reconnaissance",
        body: "We map the attack surface and identify potential entry points, technologies and areas requiring further investigation.",
    },
    {
        icon: FiTarget,
        title: "Active Testing",
        body: "We combine manual security testing with carefully selected tools and techniques to investigate potential vulnerabilities.",
    },
    {
        icon: FiCheck,
        title: "Validation",
        body: "Potential findings are manually reviewed to confirm their validity, exploitability and potential impact.",
    },
    {
        icon: FiFileText,
        title: "Reporting",
        body: "You receive a clear report containing prioritised findings, severity ratings, evidence and practical remediation guidance.",
    },
    {
        icon: FiRefreshCw,
        title: "Retesting",
        body: "Where included within the engagement, we verify that identified vulnerabilities have been addressed correctly.",
    },
];

const METHODS = [
    "OWASP Web Security Testing Guide (WSTG)",
    "OWASP Top 10",
    "OWASP API Security Top 10",
    "CVSS risk scoring",
    "Manual security validation",
    "Proof of Concept (PoC) verification",
    "Business logic testing",
    "Authentication and access control testing",
];

const DELIVERABLES: { icon: IconType; title: string; body: string }[] = [
    {
        icon: FiLayers,
        title: "Prioritised Findings",
        body: "Security issues categorised by severity so your team can focus on the areas requiring attention.",
    },
    {
        icon: FiFileText,
        title: "Technical Evidence",
        body: "Screenshots, affected areas and proof of concept information where appropriate.",
    },
    {
        icon: FiTrendingUp,
        title: "Business Impact",
        body: "An explanation of how an identified vulnerability could affect your application, users or business.",
    },
    {
        icon: FiTool,
        title: "Remediation Guidance",
        body: "Practical recommendations to help technical teams understand how identified issues can be addressed.",
    },
    {
        icon: FiRefreshCw,
        title: "Retesting",
        body: "Validation of fixes following remediation, where included within the agreed scope.",
    },
];

const INDUSTRIES: { icon: IconType; label: string }[] = [
    { icon: FiLayers, label: "SaaS" },
    { icon: FiShoppingCart, label: "E-commerce" },
    { icon: FiCreditCard, label: "FinTech" },
    { icon: FiHeart, label: "HealthTech" },
    { icon: FiBookOpen, label: "EdTech" },
    { icon: FiTruck, label: "Logistics" },
    { icon: FiCalendar, label: "Booking Platforms" },
    { icon: FiBox, label: "Marketplaces" },
];

const SAMPLE_FINDINGS = [
    { severity: "Critical", color: "#ef4444", title: "Broken Object Level Authorisation", area: "GET /api/v1/orders/{id}" },
    { severity: "High", color: "#f97316", title: "Stored XSS via file upload", area: "Profile › Documents" },
    { severity: "Medium", color: "#eab308", title: "No rate limiting on login", area: "POST /auth/login" },
    { severity: "Low", color: "#60a5fa", title: "Verbose error messages", area: "Checkout service" },
];

function useViewport() {
    const [width, setWidth] = useState(1280);
    useEffect(() => {
        const update = () => setWidth(window.innerWidth);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return { isMobile: width < 768, isTablet: width < 1024 };
}

function Reveal({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
            style={style}
        >
            {children}
        </motion.div>
    );
}

function Section({
    id,
    tone = "light",
    isMobile,
    children,
}: {
    id?: string;
    tone?: "light" | "soft" | "dark";
    isMobile: boolean;
    children: ReactNode;
}) {
    const background = tone === "dark" ? DARK : tone === "soft" ? SOFT : "#fff";
    return (
        <section
            id={id}
            style={{
                position: "relative",
                overflow: "hidden",
                background,
                color: tone === "dark" ? "#fff" : INK,
                padding: isMobile ? "4rem 1.25rem" : "6rem 2rem",
                scrollMarginTop: "var(--sticky-under-nav)",
            }}
        >
            {tone === "dark" && <GridBackdrop />}
            <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>{children}</div>
        </section>
    );
}

function GridBackdrop({ glow = "10% 0%" }: { glow?: string }) {
    return (
        <>
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                    maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 100%)",
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse 55% 45% at ${glow}, rgba(5,140,66,0.32), transparent 70%)`,
                    pointerEvents: "none",
                }}
            />
        </>
    );
}

function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
    return (
        <p
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                margin: "0 0 1rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: dark ? MINT : GREEN,
            }}
        >
            <span
                aria-hidden
                style={{ width: "18px", height: "2px", borderRadius: "2px", background: dark ? MINT : GREEN }}
            />
            {children}
        </p>
    );
}

function H2({ children, dark, isMobile, center }: { children: ReactNode; dark?: boolean; isMobile: boolean; center?: boolean }) {
    return (
        <h2
            style={{
                margin: "0 0 1.1rem",
                fontSize: isMobile ? "2rem" : "clamp(2.2rem, 3.6vw, 2.9rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: dark ? "#fff" : INK,
                textAlign: center ? "center" : "left",
            }}
        >
            {children}
        </h2>
    );
}

function Lead({ children, dark, center, style }: { children: ReactNode; dark?: boolean; center?: boolean; style?: CSSProperties }) {
    return (
        <p
            style={{
                margin: "0 0 1rem",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: dark ? ON_DARK_BODY : BODY,
                textAlign: center ? "center" : "left",
                ...style,
            }}
        >
            {children}
        </p>
    );
}

function CtaLink({
    href,
    children,
    variant = "primary",
    dark,
    fullWidth,
}: {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "text";
    dark?: boolean;
    fullWidth?: boolean;
}) {
    const [hover, setHover] = useState(false);

    const base: CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        fontFamily: PP_NEUE_MONTREAL,
        fontWeight: 600,
        fontSize: "0.95rem",
        textDecoration: "none",
        transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
        width: fullWidth ? "100%" : undefined,
        boxSizing: "border-box",
    };

    let style: CSSProperties;
    if (variant === "primary") {
        style = {
            ...base,
            padding: "0.9rem 1.6rem",
            borderRadius: "999px",
            background: hover ? GREEN_DEEP : GREEN,
            color: "#fff",
            border: "1px solid transparent",
            transform: hover ? "translateY(-1px)" : "none",
            boxShadow: dark ? "0 10px 30px -10px rgba(61,220,132,0.45)" : "0 10px 24px -12px rgba(5,140,66,0.6)",
        };
    } else if (variant === "secondary") {
        style = {
            ...base,
            padding: "0.9rem 1.6rem",
            borderRadius: "999px",
            background: dark ? (hover ? "rgba(255,255,255,0.12)" : "transparent") : hover ? "#f0f7f3" : "#fff",
            color: dark ? "#fff" : INK,
            border: `1px solid ${dark ? "rgba(255,255,255,0.3)" : "#cfd6db"}`,
            transform: hover ? "translateY(-1px)" : "none",
        };
    } else {
        style = {
            ...base,
            padding: 0,
            justifyContent: "flex-start",
            color: dark ? MINT : GREEN,
            textDecoration: hover ? "underline" : "none",
            textUnderlineOffset: "4px",
        };
    }

    const content = (
        <>
            <span>{children}</span>
            <FiArrowRight
                size={16}
                style={{ flexShrink: 0, transition: "transform 0.2s ease", transform: hover ? "translateX(3px)" : "none" }}
            />
        </>
    );

    const handlers = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };

    if (PENDING_PAGES.has(href)) {
        return (
            <span style={{ ...style, cursor: "pointer" }} {...handlers}>
                {content}
            </span>
        );
    }

    return href.startsWith("#") ? (
        <a href={href} style={style} {...handlers}>
            {content}
        </a>
    ) : (
        <Link href={href} style={style} {...handlers}>
            {content}
        </Link>
    );
}

function IconBadge({ icon: Icon, dark, size = 46 }: { icon: IconType; dark?: boolean; size?: number }) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "12px",
                flexShrink: 0,
                background: dark ? "rgba(61,220,132,0.12)" : "#e9f6ef",
                color: dark ? MINT : GREEN,
                border: dark ? "1px solid rgba(61,220,132,0.25)" : "1px solid #d3eddf",
            }}
        >
            <Icon size={Math.round(size * 0.45)} />
        </span>
    );
}

function CheckItem({ children, dark }: { children: ReactNode; dark?: boolean }) {
    return (
        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", lineHeight: 1.5 }}>
            <span
                aria-hidden
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    marginTop: "1px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: dark ? "rgba(61,220,132,0.16)" : "#e3f4ea",
                    color: dark ? MINT : GREEN,
                }}
            >
                <FiCheck size={12} strokeWidth={3} />
            </span>
            <span style={{ color: dark ? "rgba(255,255,255,0.86)" : "#374151", fontSize: "0.96rem" }}>{children}</span>
        </li>
    );
}

function HoverCard({ children, dark, style }: { children: ReactNode; dark?: boolean; style?: CSSProperties }) {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                height: "100%",
                boxSizing: "border-box",
                borderRadius: "18px",
                padding: "1.75rem",
                background: dark ? DARK_CARD : "#fff",
                border: `1px solid ${hover ? (dark ? "rgba(61,220,132,0.45)" : "#9fd8b8") : dark ? DARK_BORDER : BORDER}`,
                boxShadow: hover
                    ? dark
                        ? "0 20px 50px -25px rgba(61,220,132,0.4)"
                        : "0 22px 45px -28px rgba(5,90,50,0.35)"
                    : "none",
                transform: hover ? "translateY(-3px)" : "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function CardTitle({ children, dark }: { children: ReactNode; dark?: boolean }) {
    return (
        <h3
            style={{
                margin: "1.1rem 0 0.6rem",
                fontSize: "1.2rem",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: dark ? "#fff" : INK,
            }}
        >
            {children}
        </h3>
    );
}

function CardBody({ children, dark }: { children: ReactNode; dark?: boolean }) {
    return (
        <p style={{ margin: 0, fontSize: "0.96rem", lineHeight: 1.65, color: dark ? ON_DARK_BODY : BODY }}>{children}</p>
    );
}

function Wordmark({ name, dark }: { name: string; dark?: boolean }) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "68px",
                padding: "0 1rem",
                borderRadius: "14px",
                background: dark ? "rgba(255,255,255,0.05)" : "#fff",
                border: `1px solid ${dark ? DARK_BORDER : BORDER}`,
                color: dark ? "#fff" : INK,
                fontSize: "1.2rem",
                fontWeight: 600,
                letterSpacing: name === "Sony" ? "0.18em" : "-0.01em",
                textTransform: name === "Sony" ? "uppercase" : "none",
            }}
        >
            {name}
        </span>
    );
}

function ReportPreview({ isMobile }: { isMobile: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
                position: "relative",
                borderRadius: "20px",
                background: "linear-gradient(180deg, rgba(18,32,25,0.95), rgba(9,20,15,0.95))",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 40px 90px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(61,220,132,0.06)",
                overflow: "hidden",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.85rem 1.1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                }}
            >
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                ))}
                <span
                    style={{
                        marginLeft: "0.6rem",
                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                        fontSize: "0.76rem",
                        color: "rgba(255,255,255,0.55)",
                    }}
                >
                    cyphers / assessment-summary
                </span>
            </div>

            <div style={{ padding: isMobile ? "1.1rem" : "1.4rem 1.4rem 1.2rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                        <p style={{ margin: 0, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                            Sample report preview
                        </p>
                        <p style={{ margin: "0.3rem 0 0", fontSize: "1.05rem", fontWeight: 600, color: "#fff" }}>
                            Web application &amp; API test
                        </p>
                    </div>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.35rem 0.7rem",
                            borderRadius: "999px",
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: MINT,
                            background: "rgba(61,220,132,0.12)",
                            border: "1px solid rgba(61,220,132,0.3)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <motion.span
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.6, repeat: Infinity }}
                            style={{ width: "6px", height: "6px", borderRadius: "50%", background: MINT }}
                        />
                        Manually validated
                    </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", margin: "1.1rem 0" }}>
                    {SAMPLE_FINDINGS.map((f) => (
                        <div
                            key={f.severity}
                            style={{
                                padding: "0.6rem 0.5rem",
                                borderRadius: "10px",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                textAlign: "center",
                            }}
                        >
                            <span style={{ display: "block", height: "3px", borderRadius: "3px", background: f.color, marginBottom: "0.45rem" }} />
                            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.65)" }}>{f.severity}</span>
                        </div>
                    ))}
                </div>

                <div style={{ display: "grid", gap: "0.55rem" }}>
                    {SAMPLE_FINDINGS.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, delay: 0.55 + i * 0.15 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: "0.7rem 0.8rem",
                                borderRadius: "12px",
                                background: "rgba(255,255,255,0.035)",
                                border: "1px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            <span
                                style={{
                                    padding: "0.2rem 0.5rem",
                                    borderRadius: "6px",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    color: f.color,
                                    background: `${f.color}1f`,
                                    minWidth: "58px",
                                    textAlign: "center",
                                    flexShrink: 0,
                                }}
                            >
                                {f.severity}
                            </span>
                            <span style={{ minWidth: 0, flex: 1 }}>
                                <span style={{ display: "block", fontSize: "0.86rem", fontWeight: 600, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {f.title}
                                </span>
                                <span
                                    style={{
                                        display: "block",
                                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                                        fontSize: "0.72rem",
                                        color: "rgba(255,255,255,0.5)",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {f.area}
                                </span>
                            </span>
                            <FiCheck size={16} color={MINT} style={{ flexShrink: 0 }} aria-label="Validated" />
                        </motion.div>
                    ))}
                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginTop: "1rem",
                        paddingTop: "1rem",
                        borderTop: "1px dashed rgba(255,255,255,0.12)",
                    }}
                >
                    {["Evidence & PoC", "Business impact", "Remediation guidance"].map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: "0.3rem 0.65rem",
                                borderRadius: "999px",
                                fontSize: "0.72rem",
                                color: "rgba(255,255,255,0.75)",
                                border: "1px solid rgba(255,255,255,0.14)",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <motion.div
                aria-hidden
                initial={{ top: "-20%" }}
                animate={{ top: "110%" }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "70px",
                    background: "linear-gradient(180deg, transparent, rgba(61,220,132,0.1), transparent)",
                    pointerEvents: "none",
                }}
            />
        </motion.div>
    );
}

function CertificateCard({ company }: { company: string }) {
    return (
        <div
            style={{
                position: "relative",
                borderRadius: "16px",
                padding: "1.5rem 1.25rem",
                background: "linear-gradient(160deg, #ffffff, #f3f8f5)",
                color: INK,
                textAlign: "center",
                boxShadow: "0 18px 40px -22px rgba(0,0,0,0.6)",
            }}
        >
            <div
                aria-hidden
                style={{ position: "absolute", inset: "8px", borderRadius: "11px", border: "1px solid #cfe6d9", pointerEvents: "none" }}
            />
            <FiAward size={26} color={GREEN} />
            <p style={{ margin: "0.6rem 0 0.2rem", fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>
                Security acknowledgement
            </p>
            <p style={{ margin: 0, fontSize: "1.3rem", fontWeight: 700, letterSpacing: company === "Sony" ? "0.16em" : "-0.01em" }}>
                {company === "Sony" ? "SONY" : company}
            </p>
            <p style={{ margin: "0.55rem 0 0", fontSize: "0.8rem", lineHeight: 1.5, color: BODY }}>
                Responsible vulnerability disclosure
            </p>
        </div>
    );
}

export default function CyphersPageContent() {
    const { isMobile, isTablet } = useViewport();
    const [showCertificates, setShowCertificates] = useState(false);

    return (
        <article style={{ fontFamily: PP_NEUE_MONTREAL, background: "#fff" }}>
            {/* Hero */}
            <section
                style={{
                    position: "relative",
                    overflow: "hidden",
                    background: DARK,
                    color: "#fff",
                    paddingTop: isMobile ? "calc(var(--page-top-offset) + 2.5rem)" : "calc(var(--page-top-offset) + 4rem)",
                    paddingBottom: isMobile ? "4rem" : "6rem",
                    paddingLeft: isMobile ? "1.25rem" : "2rem",
                    paddingRight: isMobile ? "1.25rem" : "2rem",
                }}
            >
                <GridBackdrop glow="85% 20%" />
                <div
                    style={{
                        position: "relative",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: isTablet ? "1fr" : "1.1fr 0.9fr",
                        gap: isTablet ? "3rem" : "4rem",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.4rem 0.85rem",
                                    borderRadius: "999px",
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: MINT,
                                    background: "rgba(61,220,132,0.1)",
                                    border: "1px solid rgba(61,220,132,0.28)",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                <FiShield size={14} />
                                Cyphers at iAudit Global
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.08 }}
                            style={{
                                margin: "0 0 1.25rem",
                                fontSize: isMobile ? "2.3rem" : "clamp(2.6rem, 4.6vw, 3.9rem)",
                                fontWeight: 600,
                                lineHeight: 1.06,
                                letterSpacing: "-0.035em",
                                color: "#fff",
                            }}
                        >
                            Cybersecurity Testing for Web Applications, APIs and Digital Products
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.16 }}
                            style={{
                                margin: "0 0 1rem",
                                fontSize: isMobile ? "1.2rem" : "1.35rem",
                                fontWeight: 500,
                                color: MINT,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Find vulnerabilities before attackers do.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.22 }}
                            style={{ margin: "0 0 2rem", maxWidth: "560px", fontSize: "1.05rem", lineHeight: 1.7, color: ON_DARK_BODY }}
                        >
                            Cyphers is the cybersecurity wing of iAudit Global, providing penetration testing and security
                            assessments for businesses that rely on web applications, APIs and digital platforms.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.3 }}
                            style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "0.85rem" }}
                        >
                            <CtaLink href={LINKS.quote} dark fullWidth={isMobile}>
                                Book a Security Assessment
                            </CtaLink>
                            <CtaLink href={LINKS.quote} variant="secondary" dark fullWidth={isMobile}>
                                Get Fee Quote
                            </CtaLink>
                        </motion.div>
                    </div>

                    <ReportPreview isMobile={isMobile} />
                </div>
            </section>

            {/* Security Testing Built Around Real Risk */}
            <Section isMobile={isMobile}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isTablet ? "1fr" : "0.95fr 1.05fr",
                        gap: isTablet ? "2rem" : "4.5rem",
                        alignItems: "start",
                    }}
                >
                    <Reveal>
                        <Eyebrow>Our approach</Eyebrow>
                        <H2 isMobile={isMobile}>Security Testing Built Around Real Risk</H2>
                        <Lead style={{ fontSize: "1.15rem", color: "#374151" }}>
                            A vulnerability is only part of the picture. The important questions are what can be exploited,
                            what could be affected and how the risk should be addressed.
                        </Lead>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Lead>
                            Cyphers takes a practical approach to penetration testing and security assessments. We examine
                            your technology, authentication processes, access controls, APIs, business logic and other
                            potential attack surfaces to identify genuine security weaknesses.
                        </Lead>
                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                alignItems: "flex-start",
                                margin: "1.5rem 0",
                                padding: "1.25rem 1.35rem",
                                borderRadius: "16px",
                                background: "#eef8f2",
                                borderLeft: `4px solid ${GREEN}`,
                            }}
                        >
                            <IconBadge icon={FiShield} size={40} />
                            <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6, fontWeight: 500, color: INK }}>
                                Every finding is manually reviewed and validated before it is included in the final report.
                            </p>
                        </div>
                        <Lead style={{ marginBottom: 0 }}>
                            Our aim is to give your team clear, prioritised information that can support effective
                            remediation.
                        </Lead>
                    </Reveal>
                </div>
            </Section>

            {/* Our Cybersecurity Services */}
            <Section tone="soft" isMobile={isMobile}>
                <Reveal style={{ maxWidth: "720px", marginBottom: isMobile ? "2.25rem" : "3rem" }}>
                    <Eyebrow>Services</Eyebrow>
                    <H2 isMobile={isMobile}>Our Cybersecurity Services</H2>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.25rem" }}>
                    {SERVICES.map((service, i) => (
                        <Reveal key={service.title} delay={i * 0.06}>
                            <HoverCard style={{ display: "flex", flexDirection: "column", padding: isMobile ? "1.5rem" : "2rem" }}>
                                <IconBadge icon={service.icon} size={52} />
                                <CardTitle>{service.title}</CardTitle>
                                <CardBody>{service.body}</CardBody>
                                <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                                    <CtaLink href={service.href} variant="text">
                                        {service.cta}
                                    </CtaLink>
                                </div>
                            </HoverCard>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Recognised by Leading Technology Companies */}
            <Section tone="dark" isMobile={isMobile}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
                        gap: isTablet ? "2.25rem" : "4rem",
                        alignItems: "center",
                    }}
                >
                    <Reveal>
                        <Eyebrow dark>Recognition</Eyebrow>
                        <H2 dark isMobile={isMobile}>
                            Recognised by Leading Technology Companies
                        </H2>
                        <Lead dark>
                            Our researchers have responsibly identified and reported vulnerabilities recognised by leading
                            technology companies through their security programmes.
                        </Lead>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                gap: "0.85rem",
                                marginTop: "1.75rem",
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => setShowCertificates((v) => !v)}
                                aria-expanded={showCertificates}
                                aria-controls="cyphers-certificates"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                    padding: "0.9rem 1.6rem",
                                    borderRadius: "999px",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    background: showCertificates ? "rgba(255,255,255,0.12)" : "transparent",
                                    color: "#fff",
                                    fontFamily: PP_NEUE_MONTREAL,
                                    fontSize: "0.95rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "background 0.2s ease",
                                }}
                            >
                                <FiAward size={16} />
                                {showCertificates ? "Hide certificates" : "Show certificates"}
                                <FiChevronDown
                                    size={16}
                                    style={{ transition: "transform 0.25s ease", transform: showCertificates ? "rotate(180deg)" : "none" }}
                                />
                            </button>
                            <CtaLink href={LINKS.hallOfFame} dark fullWidth={isMobile}>
                                Explore the Cyphers Hall of Fame
                            </CtaLink>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
                            {RECOGNISED_BY.map((name) => (
                                <Wordmark key={name} name={name} dark />
                            ))}
                        </div>
                    </Reveal>
                </div>

                <AnimatePresence initial={false}>
                    {showCertificates && (
                        <motion.div
                            id="cyphers-certificates"
                            key="certificates"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                            style={{ overflow: "hidden" }}
                        >
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                                    gap: "1rem",
                                    paddingTop: "2.5rem",
                                }}
                            >
                                {RECOGNISED_BY.map((name) => (
                                    <CertificateCard key={name} company={name} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Section>

            {/* What Is Penetration Testing? */}
            <Section isMobile={isMobile}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isTablet ? "1fr" : "1.1fr 0.9fr",
                        gap: isTablet ? "2.25rem" : "4.5rem",
                        alignItems: "center",
                    }}
                >
                    <Reveal>
                        <Eyebrow>The fundamentals</Eyebrow>
                        <H2 isMobile={isMobile}>What Is Penetration Testing?</H2>
                        <Lead style={{ fontSize: "1.12rem", color: "#374151" }}>
                            Penetration testing is an authorised and controlled security assessment designed to identify and
                            validate exploitable vulnerabilities before they can be used by real attackers.
                        </Lead>
                        <Lead style={{ marginBottom: 0 }}>
                            Unlike vulnerability scanning alone, penetration testing involves human-led investigation, manual
                            testing and analysis of how different weaknesses could be combined or exploited within a real
                            application or environment.
                        </Lead>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "22px",
                                padding: isMobile ? "1.75rem 1.5rem" : "2.25rem",
                                background: DARK,
                                color: "#fff",
                            }}
                        >
                            <GridBackdrop glow="100% 0%" />
                            <div style={{ position: "relative" }}>
                                <div style={{ display: "grid", gap: "0.9rem", marginBottom: "1.5rem" }}>
                                    {[
                                        { icon: FiShield, label: "Tested with permission" },
                                        { icon: FiTarget, label: "Exploitability validated" },
                                        { icon: FiFileText, label: "Evidence provided" },
                                    ].map((item) => (
                                        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                                            <IconBadge icon={item.icon} dark size={40} />
                                            <span style={{ fontSize: "1rem", fontWeight: 600 }}>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ margin: "0 0 1rem", fontSize: "0.98rem", lineHeight: 1.65, color: ON_DARK_BODY }}>
                                    Cyphers tests with permission, validates what can actually be exploited and provides
                                    evidence to help your team understand the risk.
                                </p>
                                <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6, fontWeight: 500, color: "#fff" }}>
                                    The result is more than a list of potential vulnerabilities. It is a clearer picture of
                                    where your security needs attention.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>

            {/* What We Test */}
            <Section id="what-we-test" tone="soft" isMobile={isMobile}>
                <Reveal style={{ maxWidth: "760px", marginBottom: isMobile ? "2.25rem" : "3rem" }}>
                    <Eyebrow>Coverage</Eyebrow>
                    <H2 isMobile={isMobile}>What We Test</H2>
                    <Lead style={{ marginBottom: 0 }}>
                        A thorough penetration test looks beyond individual vulnerabilities. We examine how your
                        application, APIs and security controls work together.
                    </Lead>
                </Reveal>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {TEST_GROUPS.map((group, i) => (
                        <Reveal key={group.title} delay={i * 0.07}>
                            <HoverCard>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.35rem" }}>
                                    <IconBadge icon={group.icon} size={44} />
                                    <h3 style={{ margin: 0, fontSize: "1.12rem", fontWeight: 600, lineHeight: 1.3, color: INK }}>
                                        {group.title}
                                    </h3>
                                </div>
                                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.7rem" }}>
                                    {group.items.map((item) => (
                                        <CheckItem key={item}>{item}</CheckItem>
                                    ))}
                                </ul>
                            </HoverCard>
                        </Reveal>
                    ))}
                </div>
                <Reveal style={{ marginTop: "2.25rem" }}>
                    <CtaLink href={LINKS.methodologySection} variant="secondary" fullWidth={isMobile}>
                        Explore Our Testing Methodology
                    </CtaLink>
                </Reveal>
            </Section>

            {/* Why Security Testing Matters */}
            <Section isMobile={isMobile}>
                <Reveal style={{ maxWidth: "720px", marginBottom: isMobile ? "2.25rem" : "3rem" }}>
                    <Eyebrow>Business risk</Eyebrow>
                    <H2 isMobile={isMobile}>Why Security Testing Matters</H2>
                    <Lead style={{ marginBottom: 0 }}>
                        Security weaknesses can create risks well beyond the technology itself.
                    </Lead>
                </Reveal>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {RISKS.map((risk, i) => (
                        <Reveal key={risk.title} delay={i * 0.06}>
                            <HoverCard>
                                <IconBadge icon={risk.icon} />
                                <CardTitle>{risk.title}</CardTitle>
                                <CardBody>{risk.body}</CardBody>
                            </HoverCard>
                        </Reveal>
                    ))}
                </div>
                <Reveal style={{ marginTop: "2rem" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: isMobile ? "flex-start" : "center",
                            gap: "1rem",
                            padding: isMobile ? "1.25rem" : "1.4rem 1.75rem",
                            borderRadius: "16px",
                            background: "linear-gradient(90deg, #eaf7f0, #f6fbf8)",
                            border: "1px solid #d3eddf",
                        }}
                    >
                        <IconBadge icon={FiTarget} size={40} />
                        <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.6, fontWeight: 500, color: INK }}>
                            Penetration testing helps turn unknown security risks into identified issues that can be
                            prioritised and addressed.
                        </p>
                    </div>
                </Reveal>
            </Section>

            {/* Who Needs Penetration Testing? */}
            <Section tone="soft" isMobile={isMobile}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isTablet ? "1fr" : "0.85fr 1.15fr",
                        gap: isTablet ? "2rem" : "4rem",
                        alignItems: "start",
                    }}
                >
                    <Reveal>
                        <Eyebrow>Is it right for you?</Eyebrow>
                        <H2 isMobile={isMobile}>Who Needs Penetration Testing?</H2>
                        <Lead>Security testing can be particularly relevant to organisations that:</Lead>
                        {!isTablet && (
                            <>
                                <Lead style={{ marginTop: "1.5rem" }}>
                                    If you are unsure which type of security testing your organisation needs, we can help
                                    you identify an appropriate approach.
                                </Lead>
                                <div style={{ marginTop: "1.5rem" }}>
                                    <CtaLink href={LINKS.quote}>Discuss Your Security Requirements</CtaLink>
                                </div>
                            </>
                        )}
                    </Reveal>
                    <Reveal delay={0.1}>
                        <ul
                            style={{
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                gap: "0.75rem",
                            }}
                        >
                            {AUDIENCE.map((item) => (
                                <li
                                    key={item}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "0.7rem",
                                        padding: "1rem 1.1rem",
                                        borderRadius: "14px",
                                        background: "#fff",
                                        border: `1px solid ${BORDER}`,
                                        fontSize: "0.96rem",
                                        lineHeight: 1.5,
                                        color: "#374151",
                                    }}
                                >
                                    <span
                                        aria-hidden
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                            background: GREEN,
                                            color: "#fff",
                                        }}
                                    >
                                        <FiCheck size={13} strokeWidth={3} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    {isTablet && (
                        <Reveal>
                            <Lead>
                                If you are unsure which type of security testing your organisation needs, we can help you
                                identify an appropriate approach.
                            </Lead>
                            <div style={{ marginTop: "1.25rem" }}>
                                <CtaLink href={LINKS.quote} fullWidth={isMobile}>
                                    Discuss Your Security Requirements
                                </CtaLink>
                            </div>
                        </Reveal>
                    )}
                </div>
            </Section>

            {/* How We Work */}
            <Section isMobile={isMobile}>
                <Reveal style={{ maxWidth: "720px", marginBottom: isMobile ? "2.25rem" : "3.25rem" }}>
                    <Eyebrow>Process</Eyebrow>
                    <H2 isMobile={isMobile}>How We Work</H2>
                    <Lead style={{ marginBottom: 0 }}>
                        Every engagement is planned around your technology, business context and security objectives.
                    </Lead>
                </Reveal>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {STEPS.map((step, i) => (
                        <Reveal key={step.title} delay={(i % 3) * 0.07}>
                            <HoverCard style={{ position: "relative", overflow: "hidden" }}>
                                <span
                                    aria-hidden
                                    style={{
                                        position: "absolute",
                                        top: "0.6rem",
                                        right: "1.1rem",
                                        fontSize: "4rem",
                                        fontWeight: 700,
                                        lineHeight: 1,
                                        letterSpacing: "-0.04em",
                                        color: "#eef3f0",
                                        pointerEvents: "none",
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div style={{ position: "relative" }}>
                                    <IconBadge icon={step.icon} />
                                    <p style={{ margin: "1.1rem 0 0.2rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", color: GREEN }}>
                                        {String(i + 1).padStart(2, "0")}.
                                    </p>
                                    <h3 style={{ margin: "0 0 0.55rem", fontSize: "1.2rem", fontWeight: 600, color: INK }}>{step.title}</h3>
                                    <CardBody>{step.body}</CardBody>
                                </div>
                            </HoverCard>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Our Testing Methodology */}
            <Section id="methodology" tone="dark" isMobile={isMobile}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
                        gap: isTablet ? "2.25rem" : "4rem",
                        alignItems: "start",
                    }}
                >
                    <Reveal>
                        <Eyebrow dark>Methodology</Eyebrow>
                        <H2 dark isMobile={isMobile}>
                            Our Testing Methodology
                        </H2>
                        <Lead dark>
                            Cyphers uses recognised security testing methodologies and risk assessment practices to structure
                            our engagements.
                        </Lead>
                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                alignItems: "flex-start",
                                marginTop: "1.75rem",
                                padding: "1.25rem 1.35rem",
                                borderRadius: "16px",
                                background: "rgba(61,220,132,0.08)",
                                border: "1px solid rgba(61,220,132,0.25)",
                            }}
                        >
                            <IconBadge icon={FiSearch} dark size={40} />
                            <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.65, color: "rgba(255,255,255,0.88)" }}>
                                We do not rely solely on automated vulnerability scanners. Findings are manually assessed to
                                determine whether they represent genuine security risks.
                            </p>
                        </div>
                        <div style={{ marginTop: "1.75rem" }}>
                            <CtaLink href={LINKS.methodology} dark fullWidth={isMobile}>
                                Learn About Our Methodology
                            </CtaLink>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p style={{ margin: "0 0 1rem", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                            Our approach can include
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.75rem" }}>
                            {METHODS.map((method, i) => (
                                <div
                                    key={method}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "1rem 1.1rem",
                                        borderRadius: "14px",
                                        background: DARK_CARD,
                                        border: `1px solid ${DARK_BORDER}`,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                                            fontSize: "0.74rem",
                                            color: MINT,
                                            flexShrink: 0,
                                        }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span style={{ fontSize: "0.95rem", lineHeight: 1.4, color: "rgba(255,255,255,0.9)" }}>{method}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Section>

            {/* What You Receive */}
            <Section isMobile={isMobile}>
                <Reveal style={{ maxWidth: "760px", marginBottom: isMobile ? "2.25rem" : "3rem" }}>
                    <Eyebrow>Deliverables</Eyebrow>
                    <H2 isMobile={isMobile}>What You Receive</H2>
                    <Lead>A security assessment should give your team information they can act on.</Lead>
                    <Lead style={{ marginBottom: 0 }}>
                        Depending on the scope of the engagement, your report can include:
                    </Lead>
                </Reveal>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(6, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {DELIVERABLES.map((item, i) => (
                        <Reveal
                            key={item.title}
                            delay={(i % 3) * 0.07}
                            style={isMobile || isTablet ? undefined : { gridColumn: i < 3 ? "span 2" : "span 3" }}
                        >
                            <HoverCard>
                                <IconBadge icon={item.icon} />
                                <CardTitle>{item.title}</CardTitle>
                                <CardBody>{item.body}</CardBody>
                            </HoverCard>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Security Testing Across Digital Industries */}
            <Section tone="soft" isMobile={isMobile}>
                <Reveal style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Eyebrow>Industries</Eyebrow>
                    </div>
                    <H2 isMobile={isMobile} center>
                        Security Testing Across Digital Industries
                    </H2>
                    <Lead center>
                        Cyphers supports organisations operating digital products and services across a range of sectors,
                        including:
                    </Lead>
                </Reveal>
                <Reveal delay={0.08}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                            gap: "0.9rem",
                            maxWidth: "960px",
                            margin: "2.25rem auto 0",
                        }}
                    >
                        {INDUSTRIES.map(({ icon: Icon, label }) => (
                            <HoverCard
                                key={label}
                                style={{
                                    display: "flex",
                                    flexDirection: isMobile ? "column" : "row",
                                    alignItems: "center",
                                    justifyContent: isMobile ? "center" : "flex-start",
                                    gap: "0.75rem",
                                    padding: isMobile ? "1.1rem 0.75rem" : "1.1rem 1.25rem",
                                    textAlign: isMobile ? "center" : "left",
                                }}
                            >
                                <IconBadge icon={Icon} size={40} />
                                <span style={{ fontSize: "0.98rem", fontWeight: 600, color: INK }}>{label}</span>
                            </HoverCard>
                        ))}
                    </div>
                </Reveal>
                <Reveal delay={0.12}>
                    <Lead center style={{ maxWidth: "700px", margin: "2rem auto 0", fontSize: "0.98rem" }}>
                        The appropriate testing approach depends on the technology, data, functionality and risk profile of
                        each organisation.
                    </Lead>
                </Reveal>
            </Section>

            {/* Security Research Recognised by Leading Technology Companies */}
            <Section isMobile={isMobile}>
                <Reveal style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Eyebrow>Research</Eyebrow>
                    </div>
                    <H2 isMobile={isMobile} center>
                        Security Research Recognised by Leading Technology Companies
                    </H2>
                    <Lead center>Our work extends beyond individual security assessments.</Lead>
                    <Lead center>
                        Cyphers researchers have received recognition from technology companies and platforms for responsible
                        vulnerability research and disclosure.
                    </Lead>
                </Reveal>
                <Reveal delay={0.08}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
                            gap: "0.85rem",
                            maxWidth: "960px",
                            margin: "2.25rem auto",
                        }}
                    >
                        {RECOGNISED_BY.map((name) => (
                            <Wordmark key={name} name={name} />
                        ))}
                        <span
                            style={{
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.4rem",
                                minHeight: "68px",
                                borderRadius: "14px",
                                border: `1px dashed #9fd8b8`,
                                background: "#f3faf6",
                                color: GREEN,
                                fontSize: "1rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                gridColumn: isMobile ? "span 2" : undefined,
                            }}
                        >
                            + More
                        </span>
                    </div>
                </Reveal>
                <Reveal delay={0.12} style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
                    <Lead center>
                        Explore the vulnerabilities our researchers have responsibly reported and the organisations that
                        have recognised their work.
                    </Lead>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
                        <CtaLink href={LINKS.hallOfFame} fullWidth={isMobile}>
                            Visit the Cyphers Hall of Fame
                        </CtaLink>
                    </div>
                </Reveal>
            </Section>

            {/* Final CTA + quote form */}
            <Section id="contact" tone="dark" isMobile={isMobile}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
                        gap: isTablet ? "2.5rem" : "4.5rem",
                        alignItems: "center",
                    }}
                >
                    <Reveal>
                        <Eyebrow dark>Get started</Eyebrow>
                        <h2
                            style={{
                                margin: "0 0 1.1rem",
                                fontSize: isMobile ? "2.3rem" : "clamp(2.6rem, 4.2vw, 3.5rem)",
                                fontWeight: 600,
                                lineHeight: 1.06,
                                letterSpacing: "-0.035em",
                                color: "#fff",
                            }}
                        >
                            Find Vulnerabilities Before Attackers Do
                        </h2>
                        <Lead dark style={{ fontSize: "1.12rem" }}>
                            Identify security weaknesses before they become business risks.
                        </Lead>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                gap: "0.85rem",
                                marginTop: "1.75rem",
                            }}
                        >
                            <CtaLink href="#cyphers-quote-form" dark fullWidth={isMobile}>
                                Book a Security Assessment
                            </CtaLink>
                            <CtaLink href={LINKS.contact} variant="secondary" dark fullWidth={isMobile}>
                                Talk to Cyphers
                            </CtaLink>
                        </div>
                        <ul style={{ listStyle: "none", margin: "2.25rem 0 0", padding: 0, display: "grid", gap: "0.8rem" }}>
                            {[
                                "Scoped around your applications, APIs and business context",
                                "Manually validated findings with evidence",
                                "Clear, prioritised remediation guidance",
                            ].map((item) => (
                                <CheckItem key={item} dark>
                                    {item}
                                </CheckItem>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <CyphersQuoteForm isMobile={isMobile} />
                    </Reveal>
                </div>
            </Section>
        </article>
    );
}
