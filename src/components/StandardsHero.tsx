"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

export interface StandardsHeroProps {
    tag: string;
    title: string;
    description: string;
    primaryCta?: { text: string; href: string };
    secondaryCta?: { text: string; href: string };
}

export default function StandardsHero({
    tag,
    title,
    description,
    primaryCta = { text: "Get started free", href: "https://apps.iaudit.global" },
    secondaryCta = { text: "Book a demo", href: "/contact" },
}: StandardsHeroProps) {
    const { isMobile } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                background: `
                    radial-gradient(ellipse 60% 50% at 20% 0%, rgba(5,140,66,0.12) 0%, transparent 70%),
                    radial-gradient(ellipse 60% 50% at 80% 0%, rgba(0,77,64,0.10) 0%, transparent 70%),
                    #fafffe
                `,
                padding: isMobile ? "60px 1.25rem 48px" : "100px 2rem 72px",
                textAlign: "center",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}
                >
                    <SectionTag isMobile={isMobile}>{tag}</SectionTag>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    style={{
                        ...aboutType.heroH1(isMobile),
                        marginBottom: "1.25rem",
                    }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.16 }}
                    style={{
                        ...aboutType.heroLead(),
                        fontSize: isMobile ? "0.97rem" : "1.05rem",
                        maxWidth: "720px",
                        margin: "0 auto 2.5rem",
                        padding: isMobile ? "0 0.25rem" : 0,
                        lineHeight: isMobile ? 1.65 : 1.6,
                    }}
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.24 }}
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: "0.75rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        width: isMobile ? "100%" : "auto",
                        maxWidth: isMobile ? "340px" : "none",
                        margin: "0 auto",
                    }}
                >
                    <Link
                        href={primaryCta.href}
                        className="btn-animate"
                        style={{
                            padding: "14px 28px",
                            borderRadius: "8px",
                            width: isMobile ? "100%" : "auto",
                            textAlign: "center",
                            ...aboutType.ctaButton(),
                        }}
                    >
                        <span>{primaryCta.text} →</span>
                    </Link>
                    <Link
                        href={secondaryCta.href}
                        className="btn-outline-animate"
                        style={{
                            padding: "14px 28px",
                            borderRadius: "8px",
                            width: isMobile ? "100%" : "auto",
                            textAlign: "center",
                            ...aboutType.ctaButton(),
                        }}
                    >
                        <span>{secondaryCta.text}</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
