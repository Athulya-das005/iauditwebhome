"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollStack, { ScrollStackItem } from "./ScrollStack/ScrollStack";
import LogoLoop from "./LogoLoop/LogoLoop";
import HeroDashboard1 from "./HeroDashboard1";
import HeroDashboard2 from "./HeroDashboard2";
import { SiSiemens, SiSchneiderelectric, SiSap, SiBmw, SiMercedes, SiVolkswagen } from "react-icons/si";


export default function Hero() {
    const primaryBtnRef = useRef<HTMLAnchorElement>(null);
    const primaryArrowRef = useRef<HTMLSpanElement>(null);
    const outlineBtnRef = useRef<HTMLAnchorElement>(null);
    const outlineArrowRef = useRef<HTMLSpanElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    const partnerLogos = [
        { node: <SiSiemens />, title: "Siemens" },
        { node: <SiSchneiderelectric />, title: "Schneider Electric" },
        { node: <SiSap />, title: "SAP" },
        { node: <SiBmw />, title: "BMW" },
        { node: <SiMercedes />, title: "Mercedes" },
        { node: <SiVolkswagen />, title: "Volkswagen" },
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const pairs = [
            { btn: primaryBtnRef.current, arrow: primaryArrowRef.current },
            { btn: outlineBtnRef.current, arrow: outlineArrowRef.current },
        ];

        pairs.forEach(({ btn, arrow }) => {
            if (!btn || !arrow) return;
            const handleEnter = () => {
                gsap.to(arrow, { x: 4, y: -4, duration: 0.3, ease: "power2.out" });
                gsap.to(btn, { y: -2, duration: 0.25, ease: "power2.out" });
            };
            const handleLeave = () => {
                gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(btn, { y: 0, duration: 0.25, ease: "power2.out" });
            };
            btn.addEventListener("mouseenter", handleEnter);
            btn.addEventListener("mouseleave", handleLeave);
        });

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section style={{
            background: `
                radial-gradient(ellipse 50% 60% at 0% 0%, rgba(0,166,81,0.15) 0%, transparent 100%),
                radial-gradient(ellipse 50% 60% at 100% 0%, rgba(0,166,81,0.15) 0%, transparent 100%)
            `,
            paddingTop: isMobile ? "60px" : "100px",
            paddingBottom: "0",
            textAlign: "center",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", sans-serif',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>

            {/* ── Hero Text Block ── */}
            <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem", paddingTop: isMobile ? "24px" : "44px", paddingBottom: "0" }}>

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.41rem",
                        fontSize: isMobile ? "0.75rem" : "0.82rem",
                        fontWeight: 500,
                        color: "#1a7a5e",
                        marginBottom: "16px",
                        letterSpacing: "0.015em",
                        fontFamily: '"Pp Neue Montreal", sans-serif',
                    }}
                >
                    <span>✦</span>
                    Built by Auditors, For ISO Audits
                    <span>✦</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    style={{
                        fontSize: isMobile ? "2.2rem" : "clamp(2.1rem, 4.2vw, 3.2rem)",
                        fontWeight: 500,
                        lineHeight: isMobile ? 1.2 : 1.1,
                        letterSpacing: "-0.03em",
                        color: "#0d1117",
                        maxWidth: "100%",
                        margin: "0 auto 1.4rem",
                        fontFamily: '"Pp Neue Montreal", sans-serif',
                        whiteSpace: isMobile ? "normal" : "nowrap",
                        textAlign: "center"
                    }}
                >
                    Still Running ISO Audits In{" "}
                    <span style={{ color: "#058c42" }}>Word, Excel, And Email?</span>
                </motion.h1>

                {/* Sub-description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.17 }}
                    style={{
                        fontSize: isMobile ? "0.95rem" : "1rem",
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: "#6b7280",
                        maxWidth: "600px",
                        margin: isMobile ? "0 auto 2.5rem" : "0 auto 4rem",
                        fontFamily: '"Pp Neue Montreal", sans-serif',
                        textAlign: "center"
                    }}
                >
                    Plan, execute, and report ISO 9001, 14001, 45001, and 27001 audits in one PDCA-driven platform. Built by certified auditors. Aligned to ISO 19011. Ready in minutes, not months.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.26 }}
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: "stretch",
                        justifyContent: "center",
                        gap: isMobile ? "10px" : "12px",
                        padding: isMobile ? "0 10%" : "0",
                    }}
                >
                    {/* Primary */}
                    <Link
                        href="https://apps.iaudit.global"
                        ref={primaryBtnRef}
                        className="btn-animate"
                        style={{
                            padding: "13px 24px",
                            borderRadius: "6px",
                            fontWeight: 600,
                            fontSize: "0.925rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            letterSpacing: "0.01em",
                            willChange: "transform",
                            boxShadow: "0 2px 12px rgba(5,140,66,0.22)",
                        }}
                    >
                        <span>
                            Get started free
                            <span ref={primaryArrowRef} style={{ display: "inline-flex", alignItems: "center" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </span>
                    </Link>

                    {/* Outline */}
                    <Link
                        href="#demo"
                        ref={outlineBtnRef}
                        className="btn-outline-animate"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "13px 24px",
                            fontWeight: 600,
                            fontSize: "0.925rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            letterSpacing: "0.01em",
                            willChange: "transform",
                        }}
                    >
                        <span>
                            Book a demo
                            <span ref={outlineArrowRef} style={{ display: "inline-flex", alignItems: "center" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </span>
                    </Link>
                </motion.div>
            </div>

            {/* ── Card area — desktop only ── */}
            {!isMobile ? (
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
                    style={{
                        width: "100%",
                        maxWidth: "1300px",
                        margin: "72px auto 0",
                        padding: "0 1rem",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <ScrollStack
                        itemDistance={80}
                        itemStackDistance={10}
                        baseScale={0.9}
                        itemScale={0.03}
                        useWindowScroll={true}
                    >
                        <ScrollStackItem>
                            <div style={{ maxWidth: "760px", margin: "0 auto", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px -10px rgba(5, 140, 66, 0.3), 0 8px 24px -6px rgba(5, 140, 66, 0.15)" }}>
                                <HeroDashboard1 />
                            </div>
                        </ScrollStackItem>
                        <ScrollStackItem>
                            <div style={{ maxWidth: "1200px", margin: "0 auto", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px -10px rgba(5, 140, 66, 0.3), 0 8px 24px -6px rgba(5, 140, 66, 0.15)" }}>
                                <HeroDashboard2 />
                            </div>
                        </ScrollStackItem>
                    </ScrollStack>
                </motion.div>
            ) : (
                <div style={{ height: "48px" }} />
            )}

            {/* ── Trusted By / Logo Loop ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                    width: "100%",
                    marginTop: isMobile ? "6rem" : "14rem",
                    paddingBottom: isMobile ? "3rem" : "2rem",
                    position: "relative",
                    zIndex: 10,
                    background: "#fff"
                }}
            >
                <motion.p
                    className="branding-label"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: isMobile ? "2.5rem" : "4rem", fontSize: isMobile ? "0.85rem" : "inherit" }}
                >
                    Trusted by global organisations. Preferred by lead auditors.
                </motion.p>

                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0" }}>
                    <LogoLoop
                        logos={partnerLogos}
                        speed={isMobile ? 30 : 50}
                        direction="left"
                        logoHeight={isMobile ? 30 : 45}
                        gap={isMobile ? 60 : 100}
                        scaleOnHover
                        ariaLabel="Our trusted partners"
                    />
                </div>
            </motion.div>
        </section>
    );
}
