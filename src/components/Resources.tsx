"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const resources = [
    {
        id: 1,
        title: "Internal Audit Best Practices For Small Businesses",
        date: "November 20, 2025",
        image: "/images/blog-small-business.png",
        link: "/blog/internal-audit-best-practices-small-businesses"
    },
    {
        id: 2,
        title: "Empowering A Culture Of Continuous Improvement Through Audit",
        date: "November 20, 2025",
        image: "/images/blog-continuous-improvement.png",
        link: "/blog/empowering-culture-continuous-improvement"
    },
    {
        id: 3,
        title: "How To Train And Motivate Internal Auditors Without Burning Them Out",
        date: "November 20, 2025",
        image: "/images/blog-auditor-training.png",
        link: "/blog/train-motivate-internal-auditors"
    }
];

export default function Resources() {
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="resources" style={{
            padding: isMobile ? "3rem 0" : "3.5rem 0 4rem",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                {/* Section Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            color: '#006644',
                            fontSize: isMobile ? '0.9rem' : '1rem',
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                            marginBottom: '0.75rem'
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>✦</span>
                        Resources
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: isMobile ? '2.4rem' : '3.2rem',
                            fontWeight: 500,
                            color: '#111827',
                            letterSpacing: '-0.02em',
                            margin: 0,
                            maxWidth: "800px",
                            lineHeight: 1.1,
                            fontFamily: '"Pp Neue Montreal", sans-serif'
                        }}
                    >
                        Insights For Smarter Audit Programmes
                    </motion.h2>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: isMobile ? '1.5rem' : '2rem'
                }}>
                    {resources.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '1.5rem',
                                border: '1px solid #F3F4F6',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                boxShadow: hoveredId === item.id ? '0 25px 50px -12px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.03)',
                                transform: hoveredId === item.id ? 'translateY(-10px)' : 'translateY(0)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    animate={{ scale: hoveredId === item.id ? 1.08 : 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 400 }}>
                                        {item.date}
                                    </span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 500,
                                    color: '#111827',
                                    marginBottom: '2rem',
                                    lineHeight: 1.3,
                                    letterSpacing: '-0.02em',
                                    fontFamily: '"Pp Neue Montreal", sans-serif'
                                }}>
                                    {item.title}
                                </h3>
                                <div style={{ marginTop: 'auto' }}>
                                    {/* Thicker Horizontal Line */}
                                    <div style={{
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: '#F3F4F6',
                                        marginBottom: '1.25rem'
                                    }} />

                                    <Link
                                        href={item.link}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            color: '#006644',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            position: 'relative'
                                        }}
                                    >
                                        Learn more
                                        <motion.svg
                                            animate={{ x: hoveredId === item.id ? 6 : 0 }}
                                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </motion.svg>

                                        {/* Animated Underline */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: -2,
                                            left: 0,
                                            height: '2px',
                                            backgroundColor: '#006644',
                                            width: '100%',
                                            transform: hoveredId === item.id ? 'scaleX(1)' : 'scaleX(0)',
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease'
                                        }} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
