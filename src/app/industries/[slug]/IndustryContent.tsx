"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Industry {
    id: string;
    slug: string;
    title: string;
    description: string;
    color: string;
    bgImage?: string;
}

export default function IndustryContent({ industry }: { industry: Industry }) {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Minimal Hero Header */}
            <div style={{
                width: '100%',
                position: 'relative',
                height: '40vh',
                minHeight: '300px',
                background: industry.bgImage ? `url(${industry.bgImage}) center/cover no-repeat` : `${industry.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {industry.bgImage && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)',
                        zIndex: 1
                    }} />
                )}

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '1200px',
                    width: '100%',
                    padding: '0 2rem',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Breadcrumbs/Back Link */}
                        <div style={{ marginBottom: '2rem' }}>
                            <Link href="/#industries" style={{
                                color: industry.bgImage ? 'rgba(255,255,255,0.7)' : 'var(--textSecondary)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                transition: 'color 0.2s',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = industry.bgImage ? '#fff' : 'var(--primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = industry.bgImage ? 'rgba(255,255,255,0.7)' : 'var(--textSecondary)'}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Back to Industries
                            </Link>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 600,
                            color: industry.bgImage ? '#ffffff' : 'var(--textPrimary)',
                            lineHeight: 1.1,
                            margin: '0 0 1rem 0'
                        }} >
                            {industry.title}
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: industry.bgImage ? 'rgba(255,255,255,0.9)' : 'var(--textSecondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: 1.6
                        }}>
                            {industry.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Body - Placeholder for future expansion */}
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                padding: '5rem 2rem',
                flex: 1
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 600,
                        color: 'var(--textPrimary)',
                        marginBottom: '1.5rem'
                    }}>
                        Comprehensive Audit Solutions for {industry.title}
                    </h2>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--textSecondary)',
                        lineHeight: 1.8,
                        marginBottom: '2rem'
                    }}>
                        Built specifically to address the unique regulatory and operational challenges of the {industry.title.toLowerCase()} sector. iAudit provides the digital tools you need to streamline inspections, track non-conformances in real-time, and guarantee a safer, more compliant environment.
                    </p>

                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 3rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {[
                            'Standardized digital checklists deployed field-wide',
                            'Real-time photo and video evidence capture',
                            'Automated corrective action workflows',
                            'Comprehensive automated reporting suited for compliance'
                        ].map((feature, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                fontSize: '1.05rem',
                                color: 'var(--textPrimary)',
                                fontWeight: 500
                            }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: `${industry.color}20`,
                                    color: industry.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link href="/contact" style={{
                        display: 'inline-flex',
                        padding: '14px 32px',
                        background: 'var(--primary)',
                        color: '#fff',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        Request a Demo
                    </Link>
                </div>
            </div>
        </main>
    );
}
