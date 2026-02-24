"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const resources = [
    {
        id: 1,
        title: "Internal Audit Best Practices for Small Businesses",
        date: "November 20, 2025",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500",
        link: "#"
    },
    {
        id: 2,
        title: "Empowering a Culture of Continuous Improvement through Audit",
        date: "November 20, 2025",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=500",
        link: "#"
    },
    {
        id: 3,
        title: "How to Train and Motivate Internal Auditors Without Burning Them Out",
        date: "November 20, 2025",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=500",
        link: "#"
    }
];

export default function Resources() {
    return (
        <section id="resources" style={{
            padding: "100px 0 160px",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
                {/* Section Header */}
                <div style={{ marginBottom: '64px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            color: '#00A651',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            marginBottom: '1.2rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        ✦ Resources ✦
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                            fontWeight: 500,
                            color: '#111827',
                            letterSpacing: '-0.03em',
                            margin: 0,
                            maxWidth: "800px",
                            lineHeight: 1.1,
                            fontFamily: '"Pp Neue Montreal", sans-serif'
                        }}
                    >
                        Insights for smarter audit programmes
                    </motion.h2>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '24px'
                }}>
                    {resources.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '32px',
                                border: '1px solid #F3F4F6',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
                                borderColor: '#E5E7EB'
                            }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                />
                            </div>
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: 500 }}>
                                        {item.date}
                                    </span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 500,
                                    color: '#111827',
                                    marginBottom: '32px',
                                    lineHeight: 1.3,
                                    letterSpacing: '-0.02em',
                                    fontFamily: '"Pp Neue Montreal", sans-serif'
                                }}>
                                    {item.title}
                                </h3>
                                <div style={{ marginTop: 'auto', borderTop: '1px solid #F3F4F6', paddingTop: '24px' }}>
                                    <Link
                                        href={item.link}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: '#0d9488',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            transition: 'gap 0.2s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.gap = '12px'}
                                        onMouseOut={(e) => e.currentTarget.style.gap = '8px'}
                                    >
                                        Learn more
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
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
