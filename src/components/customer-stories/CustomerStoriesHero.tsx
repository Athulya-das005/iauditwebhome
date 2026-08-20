"use client";

import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

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
                    paddingBottom: isMobile ? "1.25rem" : "1.75rem",
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

            {/* Hill line in the empty space after the description */}
            <div
                aria-hidden
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    marginTop: isMobile ? "2rem" : "2.75rem",
                    lineHeight: 0,
                }}
            >
                <svg
                    viewBox="0 0 1440 220"
                    preserveAspectRatio="none"
                    style={{
                        display: "block",
                        width: "100%",
                        height: isMobile ? "120px" : isStacked ? "155px" : "190px",
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
