"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const arrowRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (arrowRef.current && containerRef.current) {
            const btn = containerRef.current.querySelector('.btn-about');
            const arrow = arrowRef.current;

            if (btn) {
                const handleMouseEnter = () => {
                    gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
                };
                const handleMouseLeave = () => {
                    gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
                };

                btn.addEventListener('mouseenter', handleMouseEnter);
                btn.addEventListener('mouseleave', handleMouseLeave);

                return () => {
                    btn.removeEventListener('mouseenter', handleMouseEnter);
                    btn.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        }
    }, []);

    const cards = [
        {
            title: "ISO Standards Focus",
            description: "Purpose-built for ISO 9001, 14001, 45001, and 27001 management system audits.",
            animation: (
                <div style={{ position: 'relative', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1rem',
                        transform: 'rotate(-10deg) scale(1.1)',
                        width: '120%'
                    }}>
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, i % 2 === 0 ? 2 : -2, 0]
                                }}
                                transition={{
                                    duration: 3 + (i % 3),
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'white',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                                    color: i % 3 === 0 ? 'var(--primary)' : '#6366f1',
                                    border: '1px solid rgba(0,0,0,0.02)'
                                }}
                            >
                                {i % 4 === 0 ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                                ) : i % 4 === 1 ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                                ) : i % 4 === 2 ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "Role-Based Access",
            description: "Auditors, auditees, managers, and corporate users work together securely.",
            animation: (
                <div style={{ position: 'relative', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {[
                        { text: "Lead Auditor", color: "#eef2ff", textColor: "#4f46e5", delay: 0, top: '20%', left: '15%' },
                        { text: "ISO 9001", color: "#ecfdf5", textColor: "#059669", delay: 0.5, top: '45%', left: '10%' },
                        { text: "Management", color: "#fff7ed", textColor: "#d97706", delay: 1, top: '15%', left: '55%' },
                        { text: "Auditee", color: "#f0f9ff", textColor: "#0284c7", delay: 1.5, top: '40%', left: '60%' },
                        { text: "ISO 27001", color: "#fdf2f8", textColor: "#db2777", delay: 2, top: '70%', left: '35%' },
                        { text: "Compliance", color: "#f5f3ff", textColor: "#7c3aed", delay: 2.5, top: '65%', left: '18%' }
                    ].map((tag, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, i % 2 === 0 ? -12 : 12, 0],
                                x: [0, i % 3 === 0 ? 8 : -8, 0],
                            }}
                            transition={{
                                duration: 5 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: tag.delay
                            }}
                            style={{
                                position: 'absolute',
                                padding: '0.7rem 1.4rem',
                                background: tag.color,
                                color: tag.textColor,
                                borderRadius: '2.5rem',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                boxShadow: '0 8px 15px rgba(0,0,0,0.04)',
                                top: tag.top,
                                left: tag.left,
                                whiteSpace: 'nowrap',
                                zIndex: 10 - i,
                                border: '1px solid rgba(0,0,0,0.02)'
                            }}
                        >
                            {tag.text}
                        </motion.div>
                    ))}
                </div>
            )
        },
        {
            title: "Multi-Site, Multi-Language",
            description: "Run audit programmes across locations, countries, and languages in one platform.",
            animation: (
                <div style={{ position: 'relative', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            width: '280px',
                            height: '160px',
                            background: 'white',
                            borderRadius: '20px',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                            padding: '1.5rem',
                            position: 'relative',
                            border: '1px solid rgba(0,0,0,0.03)',
                            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#111827' }}>Quick Scan</div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>View all</div>
                        </div>

                        <div style={{ display: 'flex', gap: '-0.5rem', marginBottom: '1.5rem' }}>
                            {[
                                { color: '#fbbf24', initials: 'VA' },
                                { color: '#60a5fa', initials: 'DJ' },
                                { color: '#34d399', initials: 'ML' },
                                { color: '#f87171', initials: 'ST' }
                            ].map((user, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: user.color,
                                        border: '2.5px solid white',
                                        marginLeft: i === 0 ? 0 : '-10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        color: 'white',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    {user.initials}
                                </motion.div>
                            ))}
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                border: '2px dashed #d1d5db',
                                marginLeft: '-10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem',
                                color: '#9ca3af'
                            }}>+</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ background: '#f3f4f6', padding: '0.4rem', borderRadius: '8px' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}
                            >
                                $<motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>2,760</motion.span>
                            </motion.div>
                        </div>

                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                right: '1.5rem',
                                width: '28px',
                                height: '28px',
                                background: 'rgba(0,166,81,0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }} />
                        </motion.div>
                    </motion.div>
                </div>
            )
        }
    ];

    return (
        <section id="about" className="section" style={{ background: '#ffffff', overflow: 'hidden', fontFamily: '"Pp Neue Montreal", sans-serif', padding: isMobile ? '3rem 0' : '4rem 0 3rem 0' }} ref={containerRef}>
            <div className="container" style={{ maxWidth: '1260px', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: isMobile ? '1.5rem' : '3rem',
                    marginBottom: isMobile ? '2.5rem' : '2rem',
                }}>
                    <div style={{ flex: '1 1 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                color: '#006644',
                                fontWeight: 500,
                                fontSize: isMobile ? '0.9rem' : '1rem',
                                letterSpacing: '0.01em',
                                marginBottom: '0.75rem'
                            }}
                        >
                            <span style={{ fontSize: '1rem' }}>✦</span>
                            About iAudit Global
                            <span style={{ fontSize: '1rem' }}>✦</span>
                        </motion.div>
                        <motion.h2
                            className="h2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: isMobile ? '2.4rem' : '3.2rem',
                                lineHeight: 1.1,
                                fontWeight: 500,
                                maxWidth: '650px',
                                letterSpacing: '-0.02em',
                                color: '#111827',
                                margin: isMobile ? '0 0 1rem 0' : '0'
                            }}
                        >
                            ISO Audit Management That Actually Works
                        </motion.h2>
                    </div>

                    <div style={{ flex: '1 1 auto', paddingTop: isMobile ? '0' : '0.8rem' }}>
                        <motion.p
                            className="text-lg text-muted"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ marginBottom: '1rem', lineHeight: 1.6, fontSize: '0.95rem', color: '#6b7280' }}
                        >
                            iAudit Global was created by certified ISO auditors and consultants who understand the real challenges of running effective audit programmes. Every feature is built around ISO 19011 principles and the PDCA cycle, giving you a structured, evidence-based approach to continual improvement.
                            <br /><br />
                            This is not a generic compliance tool. It is purpose-built for management system audits.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="https://apps.iaudit.global" className="btn-outline-animate" style={{
                                padding: '0.65rem 1.6rem',
                                fontSize: '0.925rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                borderRadius: '6px',
                                fontFamily: '"Pp Neue Montreal", sans-serif',
                                width: isMobile ? '100%' : 'fit-content',
                            }}>
                                <span>
                                    Get started
                                    <span ref={arrowRef} style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '4px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '1rem',
                                boxShadow: '0 20px 40px rgba(0, 166, 81, 0.12)',
                                border: 'none',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                background: '#f8f9fa',
                                borderRadius: '12px',
                                marginBottom: '1rem',
                                overflow: 'hidden'
                            }}>
                                {card.animation}
                            </div>
                            <div style={{ padding: '0 0.75rem 1rem 0.75rem', textAlign: 'center' }}>
                                <h3 className="h3" style={{ fontSize: '1.1rem', marginBottom: '0.4rem', fontWeight: 500, color: '#111827' }}>{card.title}</h3>
                                <p className="text-muted" style={{ lineHeight: 1.5, fontSize: '0.85rem', color: '#6b7280' }}>{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
