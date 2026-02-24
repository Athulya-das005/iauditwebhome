"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollStack, { ScrollStackItem } from "./ScrollStack/ScrollStack";
import LogoLoop from "./LogoLoop/LogoLoop";
import { SiSiemens, SiSchneiderelectric, SiSap, SiBmw, SiMercedes, SiVolkswagen } from 'react-icons/si';

export default function Hero() {
    const primaryArrowRef = useRef<HTMLSpanElement>(null);
    const outlineArrowRef = useRef<HTMLSpanElement>(null);

    const partnerLogos = [
        { node: <SiSiemens />, title: "Siemens" },
        { node: <SiSchneiderelectric />, title: "Schneider Electric" },
        { node: <SiSap />, title: "SAP" },
        { node: <SiBmw />, title: "BMW" },
        { node: <SiMercedes />, title: "Mercedes" },
        { node: <SiVolkswagen />, title: "Volkswagen" },
    ];

    useEffect(() => {
        // ... existing useEffect content
        const arrows = [
            { btn: 'primary', arrow: primaryArrowRef.current },
            { btn: 'outline', arrow: outlineArrowRef.current }
        ];

        arrows.forEach(({ arrow }) => {
            if (arrow) {
                const parent = arrow.closest('a');
                if (parent) {
                    const handleMouseEnter = () => {
                        gsap.to(arrow, {
                            x: 5,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    };

                    const handleMouseLeave = () => {
                        gsap.to(arrow, {
                            x: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    };

                    parent.addEventListener('mouseenter', handleMouseEnter);
                    parent.addEventListener('mouseleave', handleMouseLeave);
                }
            }
        });
    }, []);

    return (
        <section className="section" style={{
            paddingTop: '8rem',
            paddingBottom: '2rem',
            textAlign: 'center',
            background: 'radial-gradient(circle at center, rgba(0, 166, 81, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
            overflow: 'hidden',
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'rgba(0, 166, 81, 0.1)',
                            color: 'var(--primary)',
                            borderRadius: '2rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem'
                        }}>
                        Built by Auditors, For ISO Audits
                    </motion.div>

                    <motion.h1
                        className="h1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ marginBottom: '1rem' }}
                    >
                        Still running ISO audits in <span style={{ color: 'var(--primary)' }}>Word, Excel, and email?</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-muted"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}
                    >
                        Plan, execute, and report ISO 9001, 14001, 45001, and 27001 audits in one PDCA-driven platform. Built by certified auditors. Aligned to ISO 19011. Ready in minutes, not months.
                    </motion.p>

                    <motion.div
                        className="flex"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}
                    >
                        <Link
                            href="#contact"
                            className="btn btn-primary"
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '1.125rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            Get started free
                            <span ref={primaryArrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </Link>
                        <Link
                            href="#demo"
                            className="btn btn-outline"
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '1.125rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            Book a demo
                            <span ref={outlineArrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Stack Animation - iAudit Dashboard Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    style={{ marginTop: '2rem' }}
                >
                    <ScrollStack
                        itemDistance={120} /* Higher distance for smoother staggered triggers */
                        itemStackDistance={35}
                        baseScale={0.88} /* Tighter stack */
                        itemScale={0.04} /* Subtler scaling */
                        useWindowScroll={true}
                    >
                        <ScrollStackItem>
                            <div style={{ position: 'relative', width: '100%', borderRadius: '2.5rem' }}>
                                <img
                                    src="/hero-dashboard-planning.png"
                                    alt="Audit Planning Dashboard"
                                    style={{ width: '100%', display: 'block', borderRadius: '2.5rem' }}
                                />
                            </div>
                        </ScrollStackItem>
                        <ScrollStackItem>
                            <div style={{ position: 'relative', width: '100%', borderRadius: '2.5rem' }}>
                                <img
                                    src="/hero-dashboard-collection.png"
                                    alt="Evidence Collection Dashboard"
                                    style={{ width: '100%', display: 'block', borderRadius: '2.5rem' }}
                                />
                            </div>
                        </ScrollStackItem>
                    </ScrollStack>
                </motion.div>

                {/* NEW: Trusted by Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '18rem', paddingBottom: '1rem' }}
                >
                    <motion.h2
                        className="branding-label"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Trusted by global organisations. Preferred by lead auditors.
                    </motion.h2>

                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <LogoLoop
                            logos={partnerLogos}
                            speed={50} // Faster for energetic feel
                            direction="left"
                            logoHeight={45} // Slightly larger
                            gap={100} // More breathing room
                            scaleOnHover
                            ariaLabel="Our trusted partners"
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
