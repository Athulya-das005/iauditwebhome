"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
    blogHref,
    formatBlogDate,
    getMatthewChiwedaPosts,
    type BlogPost,
} from "@/data/blog-posts";

const font = '"Pp Neue Montreal", sans-serif';
const PHOTO = "/images/mathew-chiweda.webp";
const LINKEDIN_URL = "https://www.linkedin.com/in/mathew-chiweda/";
const TRIAL_URL = "https://apps.iaudit.global";
const CALENDLY_URL = "https://calendly.com/iauditgloballtd/30min";

const expertise = ["ISO 9001", "ISO 14001", "ISO 45001", "Internal auditing", "PDCA audit workflows"];

const fadeUp = {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5 },
};

const MotionLink = motion.create(Link);

function HeroActionButton({
    href,
    variant,
    children,
    external,
    fullWidth,
    delay = 0,
}: {
    href: string;
    variant: "primary" | "outline";
    children: ReactNode;
    external?: boolean;
    fullWidth?: boolean;
    delay?: number;
}) {
    const baseStyle = variant === "primary" ? linkedinBtn : outlineBtn;

    return (
        <MotionLink
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            style={{ ...baseStyle, ...(fullWidth ? fullWidthBtn : {}) }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={
                variant === "primary"
                    ? {
                          y: -4,
                          scale: 1.04,
                          boxShadow: "0 14px 32px rgba(0, 102, 68, 0.38)",
                      }
                    : {
                          y: -4,
                          scale: 1.04,
                          backgroundColor: "#f3faf6",
                          borderColor: "#006644",
                          color: "#006644",
                          boxShadow: "0 10px 24px rgba(0, 102, 68, 0.12)",
                      }
            }
            whileTap={{ scale: 0.97, y: 0 }}
        >
            {children}
        </MotionLink>
    );
}

function useViewport() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const check = () => setWidth(window.innerWidth);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return {
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isSmall: width < 400,
    };
}

export default function MatthewChiwedaAuthor() {
    const { isMobile, isTablet, isSmall } = useViewport();
    const publishedPosts = getMatthewChiwedaPosts();

    const articleCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)";
    const heroCols = isMobile ? "1fr" : "minmax(280px, 0.95fr) minmax(0, 1.15fr)";
    const sectionPadX = isMobile ? "1rem" : "2rem";

    return (
        <div
            style={{
                background: "#faf8f5",
                minHeight: "100vh",
                fontFamily: font,
                width: "100%",
                maxWidth: "100vw",
                overflowX: "hidden",
                boxSizing: "border-box",
            }}
        >
            {/* Hero */}
            <section
                style={{
                    padding: isMobile
                        ? `calc(var(--page-top-offset) + 1rem) ${sectionPadX} 2rem`
                        : "calc(var(--page-top-offset) + 2rem) 2rem 3.5rem",
                    borderBottom: "1px solid #ebe6df",
                }}
            >
                <div style={{ maxWidth: "1120px", margin: "0 auto", width: "100%", minWidth: 0 }}>
                    <nav aria-label="Breadcrumb" style={{ marginBottom: isMobile ? "1.25rem" : "2rem" }}>
                        <ol
                            style={{
                                ...breadcrumbList,
                                fontSize: isMobile ? "0.8rem" : "0.88rem",
                                justifyContent: isMobile ? "center" : "flex-start",
                            }}
                        >
                            <li>
                                <Link href="/" style={breadcrumbLink}>
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li>
                                <Link href="/blog" style={breadcrumbLink}>
                                    Blog
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li
                                style={{
                                    color: "#1f2937",
                                    fontWeight: 600,
                                    maxWidth: isSmall ? "120px" : undefined,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Matthew Chiweda
                            </li>
                        </ol>
                    </nav>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: heroCols,
                            gap: isMobile ? "1.75rem" : "3.5rem",
                            alignItems: "center",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.55 }}
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: isMobile ? "min(100%, 360px)" : "100%",
                                margin: isMobile ? "0 auto" : undefined,
                                minWidth: 0,
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: isMobile ? "4 / 5" : "3 / 4",
                                    maxHeight: isMobile ? "min(72vw, 400px)" : "560px",
                                    borderRadius: isMobile ? "1.25rem" : "1.5rem",
                                    overflow: "hidden",
                                    background: "#fff",
                                    border: "1px solid #e8e4df",
                                    boxShadow: "0 20px 50px rgba(0, 102, 68, 0.22), 0 8px 24px rgba(0, 102, 68, 0.12)",
                                }}
                            >
                                <Image
                                    src={PHOTO}
                                    alt="Matthew Chiweda — Co-founder of iAudit Global"
                                    fill
                                    priority
                                    sizes={isMobile ? "100vw" : "420px"}
                                    style={{ objectFit: "contain", objectPosition: "center top" }}
                                />
                            </div>
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    bottom: "-10px",
                                    right: isMobile ? "8px" : "-16px",
                                    width: isMobile ? "56px" : "96px",
                                    height: isMobile ? "56px" : "96px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #003e3a, #006644)",
                                    zIndex: -1,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                            style={{
                                textAlign: isMobile ? "center" : "left",
                                minWidth: 0,
                            }}
                        >
                            <p style={eyebrow}>Author &amp; ISO Specialist</p>
                            <h1
                                style={{
                                    margin: "0 0 0.5rem",
                                    fontSize: isMobile ? "clamp(1.85rem, 7.5vw, 2.35rem)" : "3.25rem",
                                    lineHeight: 1.08,
                                    letterSpacing: "-0.04em",
                                    color: "#10291d",
                                    fontWeight: 600,
                                }}
                            >
                                Matthew Chiweda
                            </h1>
                            <p
                                style={{
                                    ...roleLine,
                                    fontSize: isMobile ? "0.92rem" : "1.05rem",
                                    lineHeight: 1.5,
                                    padding: isMobile ? "0 0.25rem" : 0,
                                }}
                            >
                                Co-founder &amp; Managing Director, iAudit Global
                            </p>
                            <div
                                style={{
                                    width: "3rem",
                                    height: "2px",
                                    background: "#006644",
                                    margin: isMobile ? "1.15rem auto" : "1.35rem 0",
                                }}
                            />
                            <p
                                style={{
                                    margin: "0 auto 1.35rem",
                                    color: "#4b5563",
                                    lineHeight: 1.7,
                                    fontSize: isMobile ? "0.95rem" : "1.08rem",
                                    maxWidth: isMobile ? "100%" : "540px",
                                }}
                            >
                                PDCA ISO Audit Specialist with 20+ years across quality, HSE and management systems —
                                helping organisations build practical audit programmes and prepare for certification with
                                confidence.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: isMobile ? "column" : "row",
                                    flexWrap: "wrap",
                                    gap: "0.65rem",
                                    marginBottom: "1.5rem",
                                    justifyContent: isMobile ? "stretch" : "flex-start",
                                }}
                            >
                                <HeroActionButton
                                    href={LINKEDIN_URL}
                                    variant="primary"
                                    external
                                    fullWidth={isMobile}
                                    delay={0.15}
                                >
                                    LinkedIn
                                </HeroActionButton>
                                <HeroActionButton href="/blog" variant="outline" fullWidth={isMobile} delay={0.22}>
                                    All articles
                                </HeroActionButton>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: isMobile ? "0.5rem" : "2rem",
                                    maxWidth: isMobile ? "100%" : undefined,
                                    padding: isMobile ? "0.85rem 0" : 0,
                                    borderTop: isMobile ? "1px solid #ebe6df" : "none",
                                }}
                            >
                                <Stat value="20+" label="Years experience" compact={isMobile} />
                                <Stat value={String(publishedPosts.length)} label="Articles" compact={isMobile} />
                                <Stat value="3" label="ISO standards" compact={isMobile} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section
                style={{
                    padding: isMobile ? "2rem 1rem" : "4rem 2rem",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1120px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
                        gap: isMobile ? "1rem" : "3rem",
                        minWidth: 0,
                    }}
                >
                    <motion.div {...fadeUp} style={{ textAlign: isMobile ? "center" : "left" }}>
                        <p style={sectionEyebrow}>About</p>
                        <h2
                            style={{
                                margin: 0,
                                fontSize: isMobile ? "1.55rem" : "2.1rem",
                                lineHeight: 1.2,
                                letterSpacing: "-0.03em",
                                color: "#10291d",
                                fontWeight: 600,
                            }}
                        >
                            Practical audit expertise
                        </h2>
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }}>
                        <p style={{ ...bodyPara, fontSize: isMobile ? "0.95rem" : "1.02rem", lineHeight: 1.75 }}>
                            Matthew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global, with more
                            than 20 years of experience in quality, health and safety, environmental management and ISO
                            management systems. His work spans consultancy, internal auditing, implementation, training
                            and site inspections across construction, engineering, manufacturing and other operational
                            sectors.
                        </p>
                        <p
                            style={{
                                ...bodyPara,
                                marginBottom: "1.25rem",
                                fontSize: isMobile ? "0.95rem" : "1.02rem",
                                lineHeight: 1.75,
                            }}
                        >
                            Matthew specialises in ISO 9001, ISO 14001 and ISO 45001, helping organisations build
                            practical management systems and prepare for effective audits. At iAudit Global, he combines
                            hands-on audit experience with a practical approach to improving audit planning, evidence
                            capture, findings management and continual improvement.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.5rem",
                                justifyContent: isMobile ? "center" : "flex-start",
                            }}
                        >
                            {expertise.map((item) => (
                                <span key={item} style={{ ...tagStyle, fontSize: isMobile ? "0.78rem" : "0.82rem" }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Published articles */}
            <section
                style={{
                    padding: isMobile ? "2rem 1rem 2.5rem" : "4rem 2rem 4.5rem",
                    background: "#faf8f5",
                }}
            >
                <div style={{ maxWidth: "1120px", margin: "0 auto", minWidth: 0 }}>
                    <motion.div
                        {...fadeUp}
                        style={{
                            marginBottom: isMobile ? "1.35rem" : "2.5rem",
                            textAlign: isMobile ? "center" : "left",
                        }}
                    >
                        <p style={sectionEyebrow}>Published writing</p>
                        <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? "0.88rem" : "0.95rem" }}>
                            {publishedPosts.length} insights on ISO auditing &amp; compliance
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: articleCols,
                            gap: isMobile ? "1rem" : "1.5rem",
                            minWidth: 0,
                        }}
                    >
                        {publishedPosts.map((post, index) => (
                            <AuthorArticleCard key={post.slug} post={post} index={index} isMobile={isMobile} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: isMobile ? "0 1rem 2.5rem" : "0 2rem 4rem" }}>
                <div
                    style={{
                        maxWidth: "1120px",
                        margin: "0 auto",
                        background: "linear-gradient(135deg, #003e3a 0%, #006644 100%)",
                        borderRadius: isMobile ? "1rem" : "1.25rem",
                        padding: isMobile ? "1.75rem 1.15rem" : "2.75rem 2.5rem",
                        color: "#fff",
                        boxShadow: "0 18px 48px rgba(0,62,58,0.18)",
                        textAlign: isMobile ? "center" : "left",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 0.75rem",
                            fontSize: isMobile ? "1.45rem" : "2rem",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.25,
                            fontWeight: 600,
                        }}
                    >
                        Ready to improve your audit process?
                    </h2>
                    <p
                        style={{
                            margin: isMobile ? "0 auto 1.25rem" : "0 0 1.5rem",
                            color: "rgba(255,255,255,0.86)",
                            lineHeight: 1.65,
                            maxWidth: "640px",
                            fontSize: isMobile ? "0.92rem" : "1.02rem",
                        }}
                    >
                        Try iAudit Global free and manage your ISO audits, findings, evidence and corrective actions in one platform.
                    </p>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <Link
                            href={TRIAL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                ...primaryCta,
                                ...(isMobile ? { ...fullWidthBtn, minWidth: 0, width: "100%" } : {}),
                            }}
                        >
                            Start your free trial
                        </Link>
                    </div>
                    <p
                        style={{
                            margin: "0 0 1rem",
                            color: "rgba(255,255,255,0.82)",
                            lineHeight: 1.6,
                            fontSize: isMobile ? "0.9rem" : "0.98rem",
                        }}
                    >
                        Prefer to discuss your requirements first? Book a free consultation with the iAudit Global team.
                    </p>
                    <Link
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            ...secondaryCta,
                            ...(isMobile ? { ...fullWidthBtn, minWidth: 0, width: "100%" } : {}),
                        }}
                    >
                        Book a free consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function Stat({ value, label, compact }: { value: string; label: string; compact?: boolean }) {
    return (
        <div style={{ textAlign: "center", minWidth: 0 }}>
            <p
                style={{
                    margin: "0 0 0.15rem",
                    fontSize: compact ? "1.25rem" : "1.5rem",
                    fontWeight: 700,
                    color: "#10291d",
                    letterSpacing: "-0.02em",
                }}
            >
                {value}
            </p>
            <p
                style={{
                    margin: 0,
                    fontSize: compact ? "0.62rem" : "0.78rem",
                    color: "#6b7280",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    lineHeight: 1.35,
                }}
            >
                {label}
            </p>
        </div>
    );
}

function AuthorArticleCard({ post, index, isMobile }: { post: BlogPost; index: number; isMobile: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: isMobile ? 0 : Math.min(index % 6, 5) * 0.04 }}
            whileHover={isMobile ? undefined : { y: -5 }}
            style={{
                background: "#fff",
                borderRadius: isMobile ? "1rem" : "1.25rem",
                overflow: "hidden",
                border: "1px solid #e8e4df",
                boxShadow: hovered && !isMobile ? "0 20px 44px rgba(15, 23, 42, 0.12)" : "0 8px 24px rgba(15, 23, 42, 0.05)",
                height: "100%",
                transition: "box-shadow 0.35s ease",
                minWidth: 0,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link
                href={blogHref(post.slug)}
                style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}
            >
                <div
                    style={{
                        position: "relative",
                        aspectRatio: isMobile ? "16 / 9" : "16 / 10",
                        background: "#e8e4df",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={post.image}
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transform: hovered && !isMobile ? "scale(1.05)" : "scale(1)",
                            transition: "transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
                        }}
                    />
                </div>
                <div
                    style={{
                        padding: isMobile ? "1rem 1.05rem 1.15rem" : "1.15rem 1.25rem 1.35rem",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                    }}
                >
                    <p
                        style={{
                            margin: "0 0 0.45rem",
                            fontSize: isMobile ? "0.68rem" : "0.72rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#9ca3af",
                        }}
                    >
                        {formatBlogDate(post.datePublished)} · {post.readTime}
                    </p>
                    <h3
                        style={{
                            margin: "0 0 0.65rem",
                            fontSize: isMobile ? "1rem" : "1.05rem",
                            fontWeight: 600,
                            color: "#111827",
                            lineHeight: 1.35,
                            letterSpacing: "-0.015em",
                            flex: 1,
                        }}
                    >
                        {post.title}
                    </h3>
                    <p
                        style={{
                            margin: "0 0 0.85rem",
                            fontSize: isMobile ? "0.86rem" : "0.9rem",
                            color: "#6b7280",
                            lineHeight: 1.55,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {post.excerpt}
                    </p>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            color: "#006644",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        Read article
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </span>
                </div>
            </Link>
        </motion.article>
    );
}

const fullWidthBtn: CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
};

const breadcrumbList: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.45rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    color: "#6b7280",
};

const breadcrumbLink: CSSProperties = {
    color: "#006644",
    textDecoration: "none",
    fontWeight: 600,
};

const eyebrow: CSSProperties = {
    margin: "0 0 0.65rem",
    color: "#006644",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontSize: "0.72rem",
};

const roleLine: CSSProperties = {
    margin: 0,
    color: "#6b7280",
    fontWeight: 500,
    letterSpacing: "-0.01em",
};

const sectionEyebrow: CSSProperties = {
    margin: "0 0 0.5rem",
    color: "#006644",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontSize: "0.72rem",
};

const bodyPara: CSSProperties = {
    margin: "0 0 1rem",
    color: "#374151",
    lineHeight: 1.85,
    fontSize: "1.02rem",
};

const tagStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    background: "#f3faf6",
    color: "#166534",
    border: "1px solid #d1fae5",
    borderRadius: "999px",
    padding: "0.35rem 0.8rem",
    fontSize: "0.82rem",
    fontWeight: 600,
};

const linkedinBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #058c42 0%, #006644 100%)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.8rem 1.35rem",
    fontWeight: 700,
    fontSize: "0.88rem",
    boxShadow: "0 6px 20px rgba(0, 102, 68, 0.25)",
    transition: "background 0.25s ease, box-shadow 0.25s ease, color 0.25s ease, border-color 0.25s ease",
};

const outlineBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "#10291d",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.8rem 1.35rem",
    fontWeight: 700,
    fontSize: "0.88rem",
    border: "1px solid #d1d5db",
    transition: "background 0.25s ease, box-shadow 0.25s ease, color 0.25s ease, border-color 0.25s ease",
};

const primaryCta: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    color: "#006644",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.9rem 1.45rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    minWidth: "220px",
};

const secondaryCta: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.85rem 1.35rem",
    fontWeight: 700,
    fontSize: "0.92rem",
    border: "1px solid rgba(255,255,255,0.45)",
};
