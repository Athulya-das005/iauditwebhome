"use client";

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import { Industry } from '../../../data/industries';

export default function IndustryContent({ industry }: { industry: Industry }) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Refs for button animations matching Header.tsx
    const primaryBtnRef = useRef<HTMLAnchorElement>(null);
    const primaryArrowRef = useRef<HTMLSpanElement>(null);
    const secondaryBtnRef = useRef<HTMLAnchorElement>(null);
    const secondaryArrowRef = useRef<HTMLSpanElement>(null);

    // CTA Section Refs
    const ctaPrimaryBtnRef = useRef<HTMLAnchorElement>(null);
    const ctaPrimaryArrowRef = useRef<HTMLSpanElement>(null);
    const ctaSecondaryBtnRef = useRef<HTMLAnchorElement>(null);
    const ctaSecondaryArrowRef = useRef<HTMLSpanElement>(null);

    // Case Study Ref
    const caseStudyBtnRef = useRef<any>(null);
    const caseStudyArrowRef = useRef<any>(null);

    useEffect(() => {
        // Function for Primary Buttons (Green/Dark) logic
        const setupPrimaryAnimations = (btn: any, arrow: any) => {
            if (!btn || !arrow) return { enter: () => {}, leave: () => {} };
            
            const handleEnter = () => {
                gsap.to(arrow, { x: 4, y: -4, duration: 0.3, ease: "power2.out" });
                gsap.to(btn, { scale: 1.05, duration: 0.25, ease: "power2.out" });
            };
            const handleLeave = () => {
                gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(btn, { scale: 1, duration: 0.25, ease: "power2.out" });
            };

            btn.addEventListener("mouseenter", handleEnter);
            btn.addEventListener("mouseleave", handleLeave);
            
            return { enter: handleEnter, leave: handleLeave };
        };

        // Function for Secondary/Outline Buttons logic
        const setupSecondaryAnimations = (btn: any) => {
            if (!btn) return { enter: () => {}, leave: () => {} };
            
            const handleEnter = () => gsap.to(btn, { scale: 1.05, duration: 0.25, ease: "power2.out" });
            const handleLeave = () => gsap.to(btn, { scale: 1, duration: 0.25, ease: "power2.out" });

            btn.addEventListener("mouseenter", handleEnter);
            btn.addEventListener("mouseleave", handleLeave);
            
            return { enter: handleEnter, leave: handleLeave };
        };

        // Initial setup
        const primaryCleanup = [
            { btn: primaryBtnRef.current, arrow: primaryArrowRef.current },
            { btn: secondaryBtnRef.current, arrow: secondaryArrowRef.current },
            { btn: ctaPrimaryBtnRef.current, arrow: ctaPrimaryArrowRef.current },
            { btn: ctaSecondaryBtnRef.current, arrow: ctaSecondaryArrowRef.current },
            { btn: caseStudyBtnRef.current, arrow: caseStudyArrowRef.current }
        ].map(({ btn, arrow }) => ({ btn, ...setupPrimaryAnimations(btn, arrow) }));

        const secondaryCleanup = [
            // No secondary-only scale animations currently, all primary/secondary actions are now scale+arrow
        ].map((btn: any) => ({ btn, ...setupSecondaryAnimations(btn) }));

        return () => {
            primaryCleanup.forEach(({ btn, enter, leave }) => {
                if (btn) {
                    btn.removeEventListener("mouseenter", enter);
                    btn.removeEventListener("mouseleave", leave);
                    gsap.killTweensOf(btn);
                }
            });
            secondaryCleanup.forEach(({ btn, enter, leave }) => {
                if (btn) {
                    btn.removeEventListener("mouseenter", enter);
                    btn.removeEventListener("mouseleave", leave);
                    gsap.killTweensOf(btn);
                }
            });
        };
    }, [industry, isMobile]);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* New Flovity-Inspired Hero */}
            <style dangerouslySetInnerHTML={{__html: `
                .flovity-hero-container {
                    padding: 2rem 2rem;
                }
                .flovity-hero-left {
                    text-align: left;
                    align-items: flex-start;
                    display: flex;
                    flex-direction: column;
                }
                .flovity-hero-right {
                    transform: scale(0.8);
                    transform-origin: center right;
                    min-height: 400px;
                }
                .flovity-hero-title {
                    font-size: clamp(2rem, 3.5vw, 2.75rem);
                    letter-spacing: -0.02em;
                }
                @media (max-width: 1024px) {
                    .flovity-hero-right {
                        transform: scale(0.7);
                        transform-origin: center center;
                        min-height: 380px;
                    }
                }
                @media (max-width: 768px) {
                    .flovity-hero-container {
                        padding: 7rem 1.5rem 0rem;
                    }
                    .flovity-hero-left {
                        text-align: center;
                        align-items: center;
                        width: 100%;
                    }
                    .hero-btn-container {
                        justify-content: center !important;
                    }
                    .flovity-hero-title {
                        font-size: 2.5rem;
                        line-height: 1.2;
                    }
                    .flovity-hero-desc {
                        font-size: 1rem;
                        margin-bottom: 2rem;
                    }
                    .flovity-hero-right {
                        transform: scale(0.65);
                        transform-origin: top center;
                        min-height: 220px;
                        margin-top: 1rem;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                }
                @media (max-width: 480px) {
                    .flovity-hero-right {
                        transform: scale(0.5);
                        min-height: 180px;
                        margin-top: 1rem;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                }
            `}} />
            <div className="flovity-hero-container" style={{
                width: '100%',
                position: 'relative',
                minHeight: isMobile ? 'auto' : 'calc(100vh - 80px)',
                background: 'linear-gradient(135deg, #f0fdf7 0%, #ffffff 40%, #ffffff 100%)', // Very light green/cyan to white
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                fontFamily: '"Pp Neue Montreal", sans-serif'
            }}>
                {/* Background decorative blurry circles, similar to Flovity */}
                <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }} />
                <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }} />

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '1260px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '4rem',
                    flexWrap: 'wrap'
                }}>
                    
                    {/* Left Column - Content */}
                    <div className="flovity-hero-left" style={{ flex: '1 1 500px', maxWidth: '600px', zIndex: 2 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'inherit' }}
                        >
                            <Link href="/#industries" style={{
                                color: 'var(--textSecondary)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                marginBottom: '1.5rem',
                                transition: 'color 0.2s',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--textSecondary)'}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Back to Industries
                            </Link>

                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--primary)',
                                fontWeight: 500,
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                padding: '4px 0'
                            }}>
                                <span style={{ fontSize: '1rem' }}>✦</span>
                                {industry.heroSparkleText || `${industry.title} audit software by iAudit`}
                                <span style={{ fontSize: '1rem' }}>✦</span>
                            </div>

                            <h1 className="flovity-hero-title" style={{
                                fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                                fontWeight: 500,
                                color: '#111827',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                                margin: '0 0 1.5rem 0'
                            }}>
                                {industry.heroHeading || `Streamline your workflows with ${industry.title} safety checks`}
                            </h1>

                            <p className="flovity-hero-desc" style={{
                                fontSize: '1rem',
                                color: '#4b5563',
                                lineHeight: 1.5,
                                marginBottom: '2rem',
                                maxWidth: '95%'
                            }}>
                                {industry.description}
                            </p>

                            <div className="hero-btn-container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: '1rem', width: '100%' }}>
                                <Link
                                    href="https://apps.iaudit.global"
                                    ref={primaryBtnRef}
                                    className="btn-animate"
                                    style={{
                                        gap: '8px',
                                        padding: '12px 28px',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        backgroundColor: '#111827', // Base color for btn-animate
                                        willChange: 'transform'
                                    }}
                                >
                                    <span>
                                        Get started free
                                        <span ref={primaryArrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </span>
                                    </span>
                                </Link>

                                <Link
                                    href="/contact"
                                    ref={secondaryBtnRef}
                                    className="btn-outline-animate"
                                    style={{
                                        padding: '12px 28px',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        border: '1px solid #d1d5db',
                                        willChange: 'transform'
                                    }}
                                >
                                    <span>
                                        Book a demo
                                        <span ref={secondaryArrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Graphical UI Elements */}
                    <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }} className="flovity-hero-right">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative', width: isMobile ? '340px' : '550px', height: isMobile ? '260px' : '400px' }}
                        >
                            {/* Background wireframe/mock window */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-40%, -50%)',
                                width: isMobile ? '340px' : '550px',
                                height: isMobile ? '250px' : '380px',
                                background: '#f8fafc',
                                borderRadius: '20px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 20px 80px -20px rgba(5, 140, 66, 0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                zIndex: 1
                            }}>
                                {/* Desktop top bar */}
                                <div style={{ height: '32px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '6px', background: '#f1f5f9' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
                                </div>
                                <div style={{ padding: '24px', flex: 1, position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '24px', right: '24px', width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(5, 140, 66, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#058c42' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <div style={{ width: '180px', height: '14px', background: '#e2e8f0', borderRadius: '4px' }} />
                                        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>Grand Hotel Audit</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '80%' }}>
                                            <div style={{ height: '60px', background: 'white', border: '1px solid #f1f5f9', borderRadius: '10px' }} />
                                            <div style={{ height: '60px', background: 'white', border: '1px solid #f1f5f9', borderRadius: '10px' }} />
                                            <div style={{ height: '60px', background: 'white', border: '1px solid #f1f5f9', borderRadius: '10px' }} />
                                            <div style={{ height: '60px', background: 'white', border: '1px solid #f1f5f9', borderRadius: '10px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating UI Card 1: Multi-site Audit (Top Left) */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '-40px',
                                    width: '320px',
                                    background: 'rgba(255, 255, 255, 0.85)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.4)',
                                    zIndex: 2,
                                    border: '1px solid rgba(255, 255, 255, 0.4)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827' }}>Multi-site Audit Progress</div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#058c42' }} />
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#058c42', opacity: 0.6 }} />
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#058c42', opacity: 0.3 }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{ flex: 1, background: 'rgba(240, 253, 244, 0.7)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(5, 140, 66, 0.1)' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '4px' }}>Audits Completed</div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#058c42' }}>18</div>
                                    </div>
                                    <div style={{ flex: 1, background: 'rgba(239, 246, 255, 0.7)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '4px' }}>Critical NCRs</div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ef4444' }}>2</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {[
                                        { num: 'H1', title: 'Grand Hotel & Spa', status: 'Audit Live', color: '#058c42', bg: '#dcfce7' },
                                        { num: 'R1', title: 'Urban Table Bistro', status: 'Completed', color: '#64748b', bg: '#f1f5f9' },
                                        { num: 'V1', title: 'Riverside Venue', status: 'In Review', color: '#058c42', bg: '#dcfce7' }
                                    ].map((site, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: `1px solid #058c42`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#058c42', fontWeight: 600 }}>{site.num}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#334155' }}>{site.title}</div>
                                            </div>
                                            <div style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', background: site.bg, color: site.color, fontWeight: 500 }}>{site.status}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating UI Card 2: Room Inspection (Bottom Left) */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: '-10px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                    borderRadius: '12px',
                                    padding: '16px 20px',
                                    boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.4)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '12px',
                                    zIndex: 3,
                                    border: '1px solid rgba(255, 255, 255, 0.4)'
                                }}
                            >
                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#dcfce7', color: '#058c42', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111827' }}>Room 402 Inspected</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', maxWidth: '160px', lineHeight: 1.4 }}>
                                    Housekeeping checklist complete. 100% compliance met.
                                </div>
                            </motion.div>                            {/* Floating UI Card 3: Departmental Performance (Bottom Right) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-40px',
                                    right: '-50px',
                                    width: '280px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.4)',
                                    zIndex: 4,
                                    border: '1px solid rgba(255, 255, 255, 0.4)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: '#334155', marginBottom: '16px' }}>
                                    <div>Departmental Insights</div>
                                    <div style={{ color: '#94a3b8' }}>Trends</div>
                                </div>
                                
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                                    <div style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '4px', alignItems: 'center', background: 'white' }}>
                                        Monthly <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '120px', position: 'relative', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
                                    {[60, 85, 45, 95, 70, 55, 90, 65].map((h, i) => (
                                        <div key={i} style={{ 
                                            width: '6px', 
                                            height: `${h}%`, 
                                            background: i % 2 === 0 ? '#058c42' : '#e2e8f0', 
                                            borderRadius: '4px 4px 0 0',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', color: '#94a3b8', fontSize: '0.65rem', fontWeight: 500 }}>
                                    <span>F&B</span><span>HK</span><span>FO</span><span>MT</span><span>HR</span><span>SEC</span><span>IT</span><span>KIT</span>
                                </div>
                            </motion.div>

                            {/* Floating UI Card 4: Food Safety Progress (Middle right) */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.5 }}
                                style={{
                                    position: 'absolute',
                                    top: '200px',
                                    right: '0px',
                                    width: '260px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: '12px',
                                    padding: '12px 16px',
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    zIndex: 3,
                                    border: '1px solid rgba(255, 255, 255, 0.4)'
                                }}
                            >
                                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#058c42' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Kitchen Audit</div>
                                    <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600, marginBottom: '6px' }}>Food Safety Score</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ flex: 1, height: '6px', background: '#e2e8f0', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
                                            <motion.div 
                                                animate={{ width: ['70%', '85%', '85%'] }}
                                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                                style={{ height: '100%', background: '#058c42', borderRadius: '3px' }} 
                                            />
                                        </div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#058c42' }}>85%</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>


            {/* Challenges Section (Flovity Reference Style) */}
            {industry.challengesCards && industry.challengesCards.length > 0 && (
                <div style={{
                    width: '100%',
                    padding: isMobile ? '0rem 1.25rem 3rem' : '0.75rem 2rem 3rem',
                    background: '#ffffff',
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        style={{
                            maxWidth: '1200px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            textAlign: 'center',
                            marginBottom: '4rem'
                        }}>
                        {industry.challengesSparkleText && (
                            <motion.div 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'var(--primary)',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    marginBottom: '1rem',
                                    padding: '4px 0'
                                }}
                            >
                                <span style={{ fontSize: '1rem' }}>✦</span>
                                {industry.challengesSparkleText}
                                <span style={{ fontSize: '1rem' }}>✦</span>
                            </motion.div>
                        )}
                        
                        {industry.challengesHeading && (
                            <motion.h2 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                                    fontWeight: 500, // Explicitly requesting 500 weight but the font itself will render it slightly bolder if it's the requested visual
                                    color: '#111827',
                                    letterSpacing: '-0.02em',
                                    margin: '0 auto 1rem auto',
                                    maxWidth: '800px',
                                    lineHeight: 1.15,
                                    fontFamily: '"Pp Neue Montreal", sans-serif',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                {/* Inverted triangle layout handling 'Need A' split */}
                                {/need a/i.test(industry.challengesHeading) ? (
                                    <>
                                        <span>{industry.challengesHeading.split(/need a/i)[0]}Need A</span>
                                        <span>{industry.challengesHeading.split(/need a/i)[1]}</span>
                                    </>
                                ) : (
                                    <span>{industry.challengesHeading}</span>
                                )}
                            </motion.h2>
                        )}
                    </div>

                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {industry.challengesCards?.map((card: any, idx: number) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                whileHover="hover"
                                style={{
                                    background: '#ffffff',
                                    borderRadius: '24px',
                                    padding: '3.5rem 2.5rem',
                                    boxShadow: '0 12px 35px -10px rgba(0, 133, 96, 0.2), 0 0 0 1px rgba(0, 133, 96, 0.1)', // More prominent default green shadow
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'background-color 0.4s ease'
                                }}
                            >
                                <motion.div 
                                    variants={{
                                        hover: { backgroundColor: '#d1fae5', color: '#008560', transition: { duration: 0.3 } } // Light green bg, dark green icon on hover
                                    }}
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '16px',
                                        backgroundColor: '#f8fafc', // Light gray background by default
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '2rem',
                                        color: '#334155' // Dark slate icon color by default
                                    }}
                                >
                                    {idx === 0 && ( /* Globe/Experience Icon */
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                        </svg>
                                    )}
                                    {idx === 1 && ( /* People/Turnover Icon */
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    )}
                                    {idx === 2 && ( /* Multi-property/Building Icon */
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                                            <path d="M9 22v-4h6v4"></path>
                                            <path d="M8 6h.01"></path>
                                            <path d="M16 6h.01"></path>
                                            <path d="M12 6h.01"></path>
                                            <path d="M12 10h.01"></path>
                                            <path d="M12 14h.01"></path>
                                            <path d="M16 10h.01"></path>
                                            <path d="M16 14h.01"></path>
                                            <path d="M8 10h.01"></path>
                                            <path d="M8 14h.01"></path>
                                        </svg>
                                    )}
                                </motion.div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: '#111827',
                                    marginBottom: '1rem',
                                    letterSpacing: '-0.01em'
                                }}>
                                    {card.title}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#4b5563',
                                    lineHeight: 1.6
                                }}>
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    </motion.div>
                </div>
            )}

            {/* "How iAudit supports ISO audits" Section (Flovity "home-three" AI Agents clone) */}
            {industry.supportHeading && industry.supportItems && (
                <div style={{
                    width: '100%',
                    padding: '3rem 2rem 4rem',
                    background: '#ffffff',
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        style={{
                            maxWidth: '1200px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Header flex container (Left: Tag/Heading, Right: Text/Button) */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            marginBottom: '4rem'
                        }}>
                            {/* Left Side: Tag & Heading */}
                            <div style={{ flex: '1 1 min(100%, 500px)', maxWidth: '600px' }}>
                                {industry.supportSparkleText && (
                                    <motion.div 
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                        }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: 'var(--primary)',
                                            fontWeight: 500,
                                            fontSize: '1rem',
                                            marginBottom: '1rem'
                                        }}
                                    >
                                        <span style={{ fontSize: '1rem' }}>✦</span>
                                        {industry.supportSparkleText}
                                        <span style={{ fontSize: '1rem' }}>✦</span>
                                    </motion.div>
                                )}
                                
                                <motion.h2 
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                                        fontWeight: 500,
                                        color: '#111827',
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.15,
                                        margin: 0,
                                        fontFamily: '"Pp Neue Montreal", sans-serif'
                                    }}
                                >
                                    {industry.supportHeading}
                                </motion.h2>
                            </div>
                        </div>

                        {/* 5-Card Bento Grid (Flovity style) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: '2rem',
                            width: '100%'
                        }}>
                            {/* Row 1 / First 2 Cards (wider) */}
                            {industry.supportItems.slice(0, 2).map((item: any, idx: number) => (
                                <motion.div
                                    key={`top-${idx}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        background: '#fafafa', // Light Flovity grey
                                        borderRadius: '32px',
                                        padding: isMobile ? '24px' : '32px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '24px',
                                        minHeight: isMobile ? 'auto' : '380px',
                                        border: '1px solid #f0f0f0',
                                        boxShadow: '0 10px 40px rgba(0, 77, 64, 0.08)',
                                        // Attempting to force span 2 columns on desktop for only these two using grid-column logic
                                        // Note: inline styles for grid spans require media queries to be fully responsive safely, 
                                        // but since the parent uses an auto-fit minmax, letting them wrap naturally is safer for inline.
                                    }}
                                >
                                    {/* Icon & Title */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: '#004d40', // Dark teal icon bg
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            {idx === 0 ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                                            )}
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#111827', margin: 0, lineHeight: 1.3 }}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    
                                    <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                                        {item.description}
                                    </p>
                                    
                                    {/* Bullets disguised as checkmark list inside the card */}
                                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        {item.bullets && item.bullets.length > 0 && (
                                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                {item.bullets.map((bullet: string, bIdx: number) => (
                                                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#64748b' }}>
                                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#e6f4f1', color: '#008560', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                                            {idx === 0 ? (
                                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                            ) : (
                                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
                                                            )}
                                                        </div>
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Flovity Visuals */}
                                        <div style={{ flex: 1, position: 'relative', marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                            {idx === 0 ? (
                                                /* Card 1 Visual: High-Fidelity Performance Recreations */
                                                <>
                                                    {/* Top Pills Row */}
                                                    <div style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: '8px', justifyContent: 'center', marginBottom: '12px' }}>
                                                        {[
                                                            { text: '98% compliance score', icon: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 18V12M12 12L15 9M12 12L9 9', color: '#6366f1' },
                                                            { text: '35% reduction in NCRs', icon: 'M13 2L3 14H12V22L22 10H13V2', color: '#10b981' },
                                                            { text: '500+ audits syncing', icon: 'M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z', color: '#f59e0b' }
                                                        ].map((pill, i) => (
                                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: 'white', border: '1px solid #f0f0f0', borderRadius: '100px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={pill.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={pill.icon} /></svg>
                                                                <span style={{ fontSize: '0.65rem', fontWeight: 500, color: '#4b5563', whiteSpace: 'nowrap' }}>{pill.text}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Dual Widget Layout */}
                                                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px', alignItems: isMobile ? 'stretch' : 'flex-end', height: isMobile ? 'auto' : '200px' }}>
                                                        {/* Left Widget: Graph Card (Property performance) */}
                                                        <motion.div 
                                                            initial={{ y: 20, opacity: 0 }}
                                                            whileInView={{ y: 0, opacity: 1 }}
                                                            transition={{ duration: 0.8 }}
                                                            style={{ flex: isMobile ? 'none' : 1.2, height: isMobile ? '180px' : '100%', background: 'white', borderRadius: '20px', padding: '16px 20px', position: 'relative', border: '1px solid #f0f0f0', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}
                                                        >
                                                            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                                                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#111827' }}>Location Performance</span>
                                                            </div>
                                                            <div style={{ position: 'relative', flex: 1 }}>
                                                                <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                                                                <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                                                                    <defs>
                                                                        <linearGradient id="tealGradHosp" x1="0" y1="0" x2="0" y2="1">
                                                                            <stop offset="0%" stopColor="#004d40" stopOpacity="0.4" />
                                                                            <stop offset="100%" stopColor="#004d40" stopOpacity="0" />
                                                                        </linearGradient>
                                                                    </defs>
                                                                    <motion.path
                                                                        d="M0 100 L0 80 C20 75 40 85 60 40 C80 15 100 25 120 50 C140 70 160 30 180 50 C190 60 200 85 200 80 L200 100 Z"
                                                                        fill="url(#tealGradHosp)"
                                                                        initial={{ opacity: 0, scaleY: 0, originY: 1 }}
                                                                        whileInView={{ opacity: 1, scaleY: 1, originY: 1 }}
                                                                        transition={{ duration: 1, ease: 'easeOut' }}
                                                                    />
                                                                    <motion.path
                                                                        d="M0 80 C20 75 40 85 60 40 C80 15 100 25 120 50 C140 70 160 30 180 50 C190 60 200 85 200 80"
                                                                        fill="none"
                                                                        stroke="#004d40"
                                                                        strokeWidth="3"
                                                                        strokeLinecap="round"
                                                                        initial={{ pathLength: 0 }}
                                                                        whileInView={{ pathLength: 1 }}
                                                                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                                                                <span style={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 500 }}>Real-time score across 5 sites</span>
                                                            </div>
                                                        </motion.div>

                                                        {/* Right Widget: Checklist Sync Card */}
                                                        <motion.div 
                                                            initial={{ x: 30, opacity: 0 }}
                                                            whileInView={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 0.8, delay: 0.2 }}
                                                            style={{ flex: isMobile ? 'none' : 1, height: isMobile ? '160px' : '100%', background: 'white', borderRadius: '20px', padding: '16px', border: '1px solid #f0f0f0', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                                                        >
                                                            <div style={{ border: '1px solid #e2e8f0', borderRadius: '100px', padding: '6px 10px 6px 12px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                                                                <span style={{ fontSize: '0.6rem', color: '#4b5563', flex: 1 }}>Sync hospitality checklists</span>
                                                                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ff7e67', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"/></svg>
                                                                </div>
                                                            </div>

                                                            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #f1f5f9' }}>
                                                                <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#004d40', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                                                </div>
                                                                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#111827' }}>Global Standardize</span>
                                                            </div>

                                                            <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                                <div style={{ height: '10px', borderRadius: '5px', background: '#f1f5f9', width: '100%' }} />
                                                                <div style={{ height: '10px', borderRadius: '5px', background: '#f1f5f9', width: '80%' }} />
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </>
                                            ) : idx === 1 ? (
                                                /* Card 2 Visual: Food Safety & Allergen Support */
                                                <>
                                                    {/* Top Pills Row */}
                                                    <div style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: '8px', justifyContent: 'center', marginBottom: '12px' }}>
                                                        {[
                                                            { text: '99% compliance', icon: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 18V12M12 12L15 9M12 12L9 9', color: '#10b981' },
                                                            { text: 'Live monitoring', icon: 'M13 2L3 14H12V22L22 10H13V2', color: '#6366f1' },
                                                            { text: '24/7 visibility', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z', color: '#f59e0b' }
                                                        ].map((pill, i) => (
                                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'white', border: '1px solid #f0f0f0', borderRadius: '100px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={pill.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={pill.icon} /></svg>
                                                                <span style={{ fontSize: '0.65rem', fontWeight: 500, color: '#4b5563', whiteSpace: 'nowrap' }}>{pill.text}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Dual Widget Layout */}
                                                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px', alignItems: isMobile ? 'stretch' : 'flex-end', height: isMobile ? 'auto' : '200px' }}>
                                                        {/* Left Widget: Temperature Log Feed */}
                                                        <motion.div 
                                                            initial={{ y: 20, opacity: 0 }}
                                                            whileInView={{ y: 0, opacity: 1 }}
                                                            transition={{ duration: 0.8 }}
                                                            style={{ flex: isMobile ? 'none' : 1.1, height: isMobile ? 'auto' : '100%', background: 'white', borderRadius: '20px', padding: '16px', border: '1px solid #f0f0f0', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '8px' }}
                                                        >
                                                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>Temp Monitoring</div>
                                                            {[
                                                                { site: 'Main Kitchen', temp: '3.2°C', status: 'Optimal' },
                                                                { site: 'Cold Storage', temp: '-18.5°C', status: 'Optimal' }
                                                            ].map((log, i) => (
                                                                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                        <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{log.site}</span>
                                                                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#004d40' }}>{log.temp}</span>
                                                                    </div>
                                                                    <div style={{ padding: '2px 6px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px', fontSize: '0.55rem', color: '#10b981', fontWeight: 600 }}>{log.status}</div>
                                                                </div>
                                                            ))}
                                                        </motion.div>

                                                        {/* Right Widget: Checklist/Action Card */}
                                                        <motion.div 
                                                            initial={{ x: 20, opacity: 0 }}
                                                            whileInView={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 0.8, delay: 0.2 }}
                                                            style={{ flex: isMobile ? 'none' : 1, height: isMobile ? 'auto' : '100%', background: 'white', borderRadius: '20px', padding: '16px', border: '1px solid #f0f0f0', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '10px' }}
                                                        >
                                                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                            </div>
                                                            {[
                                                                { label: 'Kitchen Check', checked: true },
                                                                { label: 'Staff Hygiene', checked: true },
                                                                { label: 'Stock Control', checked: true }
                                                            ].map((item, i) => (
                                                                <motion.div 
                                                                    key={i}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.4 + i * 0.1 }}
                                                                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                                                                >
                                                                    <div style={{ width: '14px', height: '14px', borderRadius: '3px', border: '1px solid #10b981', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                                    </div>
                                                                    <span style={{ fontSize: '0.7rem', color: '#111827', fontWeight: 500 }}>{item.label}</span>
                                                                </motion.div>
                                                            ))}
                                                            <div style={{ marginTop: '4px', height: '8px', background: '#f1f5f9', borderRadius: '4px', width: '60%' }} />
                                                        </motion.div>
                                                    </div>
                                                </>
                                            ) : (
                                                /* Subsequent Cards (idx > 1) */
                                                <div style={{ width: '100%', position: 'relative' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                        {[1, 2, 3].map(i => (
                                                            <div key={i} style={{ height: '12px', background: '#f1f5f9', borderRadius: '6px', width: i === 1 ? '100%' : i === 2 ? '80%' : '60%' }} />
                                                        ))}
                                                    </div>
                                                    <motion.div
                                                        initial={{ x: 20, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: 0.3 }}
                                                        style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'white', borderRadius: '12px', padding: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0', width: '160px' }}
                                                    >
                                                        {['Kitchen Check', 'Staff Hygiene', 'Stock Control'].map((t, i) => (
                                                            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px', background: i === 2 ? '#f0fdf4' : 'transparent', borderRadius: '6px' }}>
                                                                <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: '1px solid #e2e8f0', background: i === 2 ? '#058c42' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    {i === 2 && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                                                                </div>
                                                                <span style={{ fontSize: '0.75rem', fontWeight: 500, color: i === 2 ? '#058c42' : '#64748b' }}>{t}</span>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Row 2 / Last 3 Cards (narrower) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: '2rem',
                            width: '100%',
                            marginTop: '2rem'
                        }}>
                            {industry.supportItems.slice(2).map((item: any, idx: number) => (
                                <motion.div
                                    key={`bottom-${idx}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        background: '#fafafa',
                                        borderRadius: '32px',
                                        padding: '40px 32px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px',
                                        border: '1px solid #f0f0f0',
                                        minHeight: '400px',
                                        boxShadow: '0 10px 40px rgba(0, 77, 64, 0.08)',
                                    }}
                                >
                                     {/* Header layout stack instead of row for smaller cards */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: '#004d40', 
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            {idx === 0 ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v4"/><path d="M12 15h.01"/></svg>
                                            ) : idx === 1 ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                            )}
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#111827', margin: 0, lineHeight: 1.3 }}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    
                                    <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                                        {item.description}
                                    </p>
                                    
                                    {/* Bullets and Visuals */}
                                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '24px' }}>
                                        {item.bullets && item.bullets.length > 0 && (
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                {item.bullets.map((bullet: string, bIdx: number) => (
                                                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: '#64748b' }}>
                                                        <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#e6f4f1', color: '#008560', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                                            {idx === 0 ? (
                                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
                                                            ) : idx === 1 ? (
                                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/></svg>
                                                            ) : (
                                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                            )}
                                                        </div>
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div style={{ flex: 1, position: 'relative', minHeight: '160px', marginTop: 'auto', background: 'white', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            {idx === 0 ? (
                                                /* Card 3 Visual: Status Log */
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>NCR Status Log</div>
                                                    {[
                                                        { label: 'Room 501 leak', status: 'In Progress', color: '#f59e0b' },
                                                        { label: 'Oven calibrated', status: 'Resolved', color: '#058c42' },
                                                        { label: 'New fire drill', status: 'Pending', color: '#ef4444' }
                                                    ].map((log, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ x: -10, opacity: 0 }}
                                                            whileInView={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 + i * 0.1 }}
                                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px' }}
                                                        >
                                                            <span style={{ fontSize: '0.7rem', color: '#475569' }}>{log.label}</span>
                                                            <span style={{ fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', background: log.color + '15', color: log.color, fontWeight: 600 }}>{log.status}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            ) : idx === 1 ? (
                                                /* Card 4 Visual: Timeline Analysis */
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                    <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '60px' }}>
                                                        {[30, 50, 80].map((h, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ height: 0 }}
                                                                whileInView={{ height: `${h}%` }}
                                                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                                                style={{ flex: 1, background: i === 2 ? '#058c42' : '#e2e8f0', borderRadius: '4px 4px 0 0', position: 'relative' }}
                                                            >
                                                                <span style={{ position: 'absolute', top: '-15px', left: '0', fontSize: '0.6rem', color: '#94a3b8' }}>{2023 + i}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                    <div style={{ padding: '10px', borderTop: '1px solid #f1f5f9', fontSize: '0.7rem', color: '#4b5563' }}>
                                                        98% compliance trend achieved
                                                    </div>
                                                </div>
                                            ) : (
                                                /* Card 5 Visual: Weekly Bars */
                                                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '100px' }}>
                                                    {[20, 40, 30, 60, 45, 80, 55].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h}%` }}
                                                            transition={{ duration: 0.8, delay: i * 0.05 }}
                                                            style={{
                                                                flex: 1,
                                                                background: i === 5 ? '#004d40' : '#e2e8f0',
                                                                borderRadius: '3px 3px 0 0'
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Audit Mate Section (Flovity "Automation tools" clone) */}
            {industry.auditMateHeading && (
                <div style={{
                    width: '100%',
                    padding: '3rem 2rem 2rem',
                    background: '#ffffff',
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        style={{
                            maxWidth: '1200px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        {/* Heading Area */}
                        <div style={{
                            width: '100%',
                            textAlign: 'center',
                            marginBottom: '4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            {industry.auditMateSparkle && (
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: 'var(--primary)',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        marginBottom: '1rem',
                                        padding: '4px 0'
                                    }}
                                >
                                    <span style={{ fontSize: '1rem' }}>✦</span>
                                    {industry.auditMateSparkle}
                                    <span style={{ fontSize: '1rem' }}>✦</span>
                                </motion.div>
                            )}
                            
                            {industry.auditMateHeading && (
                                <motion.h2 
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                                        fontWeight: 500,
                                        color: '#111827',
                                        letterSpacing: '-0.02em',
                                        margin: '0 auto 1.5rem auto',
                                        maxWidth: '700px',
                                        lineHeight: 1.15,
                                        fontFamily: '"Pp Neue Montreal", sans-serif'
                                    }}
                                >
                                    {industry.auditMateHeading}
                                </motion.h2>
                            )}

                            {industry.auditMateDescription && (
                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        fontSize: '1.1rem',
                                        color: '#4b5563',
                                        maxWidth: '600px',
                                        lineHeight: 1.6,
                                        margin: '0 auto'
                                    }}
                                >
                                    {industry.auditMateDescription}
                                </motion.p>
                            )}
                        </div>

                        {/* Flovity Animated Cards Container */}
                        <div style={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '280px' : '350px'}, 1fr))`,
                            gap: '2rem',
                            position: 'relative',
                            maxWidth: '960px',
                            margin: '0 auto'
                        }}>
                            
                            {/* Left Panel - Performance Score */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    background: '#004d40', // Deep hospitality teal/green from reference
                                    borderRadius: '32px',
                                    padding: isMobile ? '1.5rem' : '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    minHeight: '560px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 50px rgba(0, 77, 64, 0.15)'
                                }}
                            >
                                {/* Reference-themed header */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                        <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', padding: '2px' }}>
                                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#f8fafc', overflow: 'hidden' }}>
                                                {/* Representing the profile image from reference */}
                                                <svg viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#e2e8f0"/><circle cx="50" cy="35" r="20" fill="#94a3b8"/><path d="M15 85c0-12 15-22 35-22s35 10 35 22" stroke="#94a3b8" strokeWidth="10"/></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Audit Mate</div>
                                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>AI agent</div>
                                        </div>
                                    </div>
                                    <div style={{ color: 'rgba(255,255,255,0.4)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </div>
                                </div>

                                {/* Chat Bubbles */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        style={{ background: '#ffffff', borderRadius: '12px 12px 12px 2px', padding: '16px 20px', maxWidth: '85%', alignSelf: 'flex-start', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#111827', fontWeight: 600, fontSize: '0.8rem', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '1rem' }}>✦</span> Audit Mate
                                        </div>
                                        <div style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                            Welcome to iAudit! How can I assist you today?
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 }}
                                        style={{ background: '#f87171', borderRadius: '12px 12px 2px 12px', padding: '16px 20px', maxWidth: '85%', alignSelf: 'flex-end', boxShadow: '0 8px 16px rgba(248, 113, 113, 0.2)' }}
                                    >
                                        <div style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                            Can you help me automate non-conformity tracking?
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.4 }}
                                        style={{ background: '#ffffff', borderRadius: '12px 12px 12px 2px', padding: '16px 20px', maxWidth: '85%', alignSelf: 'flex-start', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#111827', fontWeight: 600, fontSize: '0.8rem', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '1rem' }}>✦</span> Audit Mate
                                        </div>
                                        <div style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                            Absolutely! Let me fetch your current audit findings...
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Syncing Status */}
                                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.2)', borderTopColor: '#ffffff', borderRadius: '50%' }}
                                    />
                                    <div style={{ color: '#ffffff', fontSize: '0.9rem', opacity: 0.8 }}>Syncing ISO records...</div>
                                </div>
                            </motion.div>

                            {/* Right Panel - Agent Services */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    background: '#fafafa',
                                    borderRadius: '32px',
                                    padding: isMobile ? '1.5rem 1rem' : '2.5rem 1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    minHeight: '520px',
                                    position: 'relative',
                                    border: '1px solid #f0f0f0',
                                    boxShadow: '0 20px 60px rgba(0, 30, 25, 0.4)' // Very dark green shadow
                                }}
                            >
                                <div style={{ position: 'relative', width: isMobile ? '100%' : '320px', maxWidth: '320px', display: 'flex', flexDirection: 'column', marginTop: '1rem', zIndex: 1 }}>
                                    
                                    {/* Inner White Card Background */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '0px', 
                                        bottom: '-40px',
                                        left: '-20px',
                                        right: '-20px',
                                        background: '#ffffff',
                                        borderRadius: '24px',
                                        boxShadow: '0 20px 40px -15px rgba(0, 77, 64, 0.1), 0 0 0 1px rgba(0, 77, 64, 0.05)',
                                        zIndex: 0
                                    }} />
                                    
                                    {/* Primary Title Card */}
                                    <div style={{
                                        background: '#004d40',
                                        borderRadius: '16px',
                                        padding: isMobile ? '16px' : '24px',
                                        color: '#ffffff',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        boxShadow: '0 10px 25px -5px rgba(0, 77, 64, 0.3)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 500 }}>Generated Audit Checklists</div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                    </div>

                                    {/* Featured Item: Food Safety */}
                                    <motion.div 
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                        style={{
                                            background: '#ffffff',
                                            borderRadius: '16px',
                                            padding: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.02)',
                                            position: 'relative',
                                            top: '-16px',
                                            left: isMobile ? '10px' : '30px',
                                            width: isMobile ? 'calc(100% - 20px)' : '100%',
                                            zIndex: 2
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#e0f2f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#004d40' }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Food Safety Audit</div>
                                                <div style={{ fontSize: '0.75rem', color: '#004d40', fontWeight: 500 }}>Clause 8.5 Mapped</div>
                                            </div>
                                        </div>
                                        <div style={{ background: '#e0f2f1', color: '#004d40', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>Ready</div>
                                    </motion.div>

                                    {/* List items */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px 10px', marginTop: '10px', zIndex: 1 }}>
                                        {/* Room Inspection */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155' }}>
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Room 402 Inspection</div>
                                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>ISO 9001 Section 7</div>
                                                </div>
                                            </div>
                                            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#004d40' }}>100%</div>
                                        </div>

                                        {/* Guest Complaints */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', border: '1px solid #e2e8f0' }}>
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Guest Complaints Log</div>
                                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Clause 10.2 NCR</div>
                                                </div>
                                            </div>
                                            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#004d40' }}>Ready</div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', zIndex: 1 }}>
                                        <Link href="/contact" style={{
                                            background: '#f87171',
                                            color: '#ffffff',
                                            padding: '12px 32px',
                                            borderRadius: '30px',
                                            fontWeight: 500,
                                            fontSize: '1rem',
                                            textDecoration: 'none',
                                            boxShadow: '0 8px 16px -4px rgba(248, 113, 113, 0.4)',
                                            transition: 'transform 0.2s',
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        >
                                            Try Audit Mate
                                        </Link>
                                    </div>

                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            )}


            {/* Standards We Support Section (Flovity "AI-driven tools" clone) */}
            {industry.standardsHeading && industry.standardsItems && (
                <div style={{
                    width: '100%',
                    padding: isMobile ? '3rem 1.25rem' : '4rem 2rem',
                    background: '#ffffff',
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        style={{
                            maxWidth: '1200px',
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))',
                            gap: '4rem',
                            alignItems: 'center'
                        }}
                    >
                        {/* Left Column: Text and Checklist */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* Small Sparkle Badge */}
                            <motion.div 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'var(--primary)',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    marginBottom: '1rem',
                                    alignSelf: 'flex-start'
                                }}
                            >
                                <span style={{ fontSize: '1rem' }}>✦</span>
                                {industry.standardsSparkleText || "Standards and Compliance"}
                                <span style={{ fontSize: '1rem' }}>✦</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h2 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    fontSize: 'clamp(2.5rem, 4vw, 3rem)',
                                    fontWeight: 500,
                                    color: '#111827',
                                    letterSpacing: '-0.02em',
                                    marginBottom: isMobile ? '2rem' : '3rem',
                                    lineHeight: 1.15,
                                    fontFamily: '"Pp Neue Montreal", sans-serif'
                                }}
                            >
                                {industry.standardsHeading}
                            </motion.h2>

                            {industry.standardsDescription && (
                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                                    }}
                                    style={{
                                        fontSize: '1.05rem',
                                        color: '#4b5563',
                                        lineHeight: 1.6,
                                        marginBottom: '2.5rem',
                                        maxWidth: '90%',
                                        fontFamily: '"Pp Neue Montreal", sans-serif'
                                    }}
                                >
                                    {industry.standardsDescription}
                                </motion.p>
                            )}

                            {/* Checklist Items */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                {industry.standardsItems?.map((item: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, x: -30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                        }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            {/* Green checkmark circle */}
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: '#E6F4F1',
                                                color: '#008560',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#111827', margin: 0 }}>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p style={{
                                            fontSize: '1.05rem',
                                            color: '#64748b',
                                            lineHeight: 1.6,
                                            margin: 0,
                                            paddingLeft: '36px' // Indent to align with text, bypassing checkmark
                                        }}>
                                            {item.description}
                                        </p>
                                        
                                        {/* Divider line except for last item */}
                                        {idx < (industry.standardsItems?.length || 0) - 1 && (
                                            <div style={{ height: '1px', background: '#e2e8f0', width: '100%', marginTop: '1.5rem' }} />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Animated Phone Mockup */}
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            style={{
                                background: '#fafafa',
                                borderRadius: '32px',
                                padding: isMobile ? '2rem 1rem 0 1rem' : '3rem 2rem 0 2rem', // No bottom padding so phone touches bottom
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-end', // Align phone to bottom
                                minHeight: isMobile ? '450px' : '600px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Floating integration success tag (Flovity "Yay!" popup) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    top: '120px',
                                    left: '10px',
                                    background: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '12px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.02)',
                                    zIndex: 10,
                                    width: isMobile ? 'calc(100% - 20px)' : 'max-content',
                                    maxWidth: '280px'
                                }}
                            >
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#334155', lineHeight: 1.2 }}>
                                    Yay! Integration Software<br/>Dashboard!
                                </div>
                            </motion.div>

                            {/* Phone Mockup Frame */}
                            <div style={{
                                width: isMobile ? '280px' : '360px',
                                height: isMobile ? '480px' : '620px', 
                                background: '#111827',
                                borderRadius: '54px',
                                padding: '18px', // Balanced padding all around
                                position: 'relative',
                                zIndex: 5,
                                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)',
                                border: '4px solid #1f2937'
                            }}>
                                {/* Side Buttons - Left (Volume) */}
                                <div style={{ position: 'absolute', left: '-6px', top: '100px', width: '6px', height: '40px', background: '#1f2937', borderRadius: '4px 0 0 4px' }} />
                                <div style={{ position: 'absolute', left: '-6px', top: '150px', width: '6px', height: '40px', background: '#1f2937', borderRadius: '4px 0 0 4px' }} />
                                
                                {/* Side Buttons - Right (Power) */}
                                <div style={{ position: 'absolute', right: '-6px', top: '130px', width: '6px', height: '60px', background: '#1f2937', borderRadius: '0 4px 4px 0' }} />

                                {/* Phone Notch area (Dynamic Island style) */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '30px', 
                                    left: '50%', 
                                    transform: 'translateX(-50%)', 
                                    width: isMobile ? '80px' : '110px', 
                                    height: isMobile ? '24px' : '32px', 
                                    background: '#000', 
                                    borderRadius: '20px', 
                                    zIndex: 10,
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}></div>
                                
                                {/* Inner Phone Screen */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: '#f8fafc',
                                    borderRadius: '36px', // Rounded bottom
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
                                }}>
                                    {/* Mock Status Bar */}
                                    <div style={{ padding: '16px 20px 10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: '#111827' }}>
                                        <span>09:45</span>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><line x1="22" y1="11" x2="22" y2="13"></line><line x1="4" y1="10" x2="6" y2="10"></line><line x1="4" y1="14" x2="8" y2="14"></line></svg>
                                        </div>
                                    </div>

                                    {/* Screen Header */}
                                    <div style={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>Standards</h4>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                        </div>
                                    </div>

                                    {/* Chart Card */}
                                    <div style={{ margin: '10px 20px', padding: '20px', background: '#ffffff', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>ISO 9001 Compliance</div>
                                            <div style={{ fontSize: '0.65rem', color: '#008560', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2px 8px', display: 'flex', alignItems: 'center', gap: '4px', background: '#f0fdf4' }}>
                                                Active <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                                            </div>
                                        </div>
                                        <div style={{ fontSize: '1.75rem', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>98.4%</div>
                                        <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 500, marginBottom: '20px' }}>+2.4% vs last audit</div>
                                        
                                        {/* Simplified SVG Chart Lines */}
                                        <div style={{ height: '80px', position: 'relative', marginTop: '10px' }}>
                                            {/* Y Axis markings */}
                                            <div style={{ position: 'absolute', left: '-5px', top: '0', bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '0.55rem', color: '#94a3b8' }}>
                                                <span>100</span><span>50</span><span>10</span><span>0</span>
                                            </div>
                                            
                                            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 250 100" style={{ marginLeft: '10px' }}>
                                                {/* Orange line */}
                                                <path d="M0,80 C30,80 50,20 100,60 C150,100 200,40 250,70" fill="none" stroke="#f97316" strokeWidth="2.5"></path>
                                                {/* Green line */}
                                                <path d="M0,90 C40,90 70,50 120,30 C170,10 200,60 250,40" fill="none" stroke="#10b981" strokeWidth="2.5"></path>
                                                
                                                {/* Highlight dot on green line at peak */}
                                                <circle cx="120" cy="30" r="4.5" fill="#008560"></circle>
                                            </svg>
                                            
                                            {/* Tooltip on peak */}
                                            <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#008560', color: 'white', padding: '4px 8px', borderRadius: '8px', fontSize: '0.6rem', fontWeight: 500 }}>
                                                98%, Compliant
                                            </div>
                                        </div>
                                        
                                        {/* Chart X Axis */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.55rem', color: '#94a3b8', marginTop: '10px', marginLeft: '15px' }}>
                                            <span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span>
                                        </div>

                                        {/* Legend */}
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px', fontSize: '0.55rem', fontWeight: 500, color: '#334155' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <div style={{ width: '8px', height: '8px', background: '#008560', borderRadius: '2px' }}></div>
                                                Audit Quality
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <div style={{ width: '8px', height: '8px', background: '#f87171', borderRadius: '2px' }}></div>
                                                NCR Issues
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile Footer Card (Lead Auditor) */}
                                    <div style={{ margin: '10px 20px', padding: '12px 16px', background: '#ffffff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fef3c7', overflow: 'hidden' }}>
                                                <img 
                                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" 
                                                    alt="Auditor"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#111827' }}>Elena Rossi</div>
                                                <div style={{ fontSize: '0.65rem', color: '#64748b' }}>ISO Lead Auditor</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#003E3A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                        </div>
                                    </div>

                                    {/* Bottom label */}
                                    <div style={{ margin: '0 25px 20px', fontSize: '0.8rem', fontWeight: 600, color: '#111827' }}>
                                        Security Patch (ISO 27001)
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}

            {/* Ready-made Checklists Section (GoAudits style) */}
            {industry.checklistsHeading && industry.checklistsItems && (
                <div style={{
                    width: '100%',
                    padding: '4rem 2rem 6rem',
                    background: '#f8fafc', // Light gray background
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                textAlign: 'center',
                                maxWidth: '800px',
                                marginBottom: '4rem'
                            }}
                        >
                            {industry.checklistsTag && (
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: 'var(--primary)',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        marginBottom: '1rem',
                                        padding: '4px 0'
                                    }}
                                >
                                    <span style={{ fontSize: '1rem' }}>✦</span>
                                    {industry.checklistsTag}
                                    <span style={{ fontSize: '1rem' }}>✦</span>
                                </motion.div>
                            )}
                            
                            <h2 style={{
                                fontSize: 'clamp(2.2rem, 4vw, 2.75rem)',
                                fontWeight: 500,
                                color: '#111827',
                                marginBottom: '1.5rem',
                                lineHeight: 1.2,
                                letterSpacing: '-0.02em',
                                fontFamily: '"Pp Neue Montreal", sans-serif'
                            }}>
                                {industry.checklistsHeading}
                            </h2>
                            
                            {industry.checklistsDescription && (
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#64748b',
                                    lineHeight: 1.6,
                                    margin: 0
                                }}>
                                    {industry.checklistsDescription}
                                </p>
                            )}
                        </motion.div>

                        {/* Checklists Grid */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '280px' : '300px'}, 1fr))`,
                                gap: '2rem',
                                width: '100%',
                                maxWidth: '1100px'
                            }}
                        >
                            {industry.checklistsItems.map((item: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                    }}
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: '8px',
                                        padding: '2.5rem 2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    {/* Animated checkmark container */}
                                    <div style={{
                                        marginBottom: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '40px'
                                    }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                            <motion.path
                                                d="M9.54992 18.0001L3.84991 12.3001C3.4357 11.8859 3.4357 11.2141 3.84991 10.7999C4.26413 10.3857 4.9359 10.3857 5.35012 10.7999L9.54992 14.9997L18.6499 5.89975C19.0641 5.48554 19.7359 5.48554 20.1501 5.89975C20.5643 6.31396 20.5643 6.98574 20.1501 7.39995L9.54992 18.0001Z"
                                                fill="#479F84" // Darker green matching the reference
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1), type: "spring", stiffness: 200, damping: 15 }}
                                            />
                                        </svg>
                                    </div>
                                    
                                    <h3 style={{
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        color: '#334155',
                                        margin: 0,
                                        lineHeight: 1.4
                                    }}>
                                        {item}
                                    </h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}


            {/* CTA Section (Flovity-style with floating angled cards) */}
            {industry.ctaHeading && (
                <div style={{
                    width: '100%',
                    padding: isMobile ? '4rem 1.5rem' : '5rem 2rem', // Reduced padding to decrease overall height
                    background: '#003E3A', // Match "Ready to upgrade" card color
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Background faint dotted world map pattern (simulated with radial dots) */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 10px 10px',
                        zIndex: 0,
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                    }} />

                    {/* Left Floating Card (Angled backwards) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -15, y: [0, -10, 0] }}
                        viewport={{ once: true }}
                        transition={{ 
                            opacity: { duration: 0.8 }, 
                            x: { duration: 0.8 },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{
                            position: 'absolute',
                            left: '5%',
                            top: '25%',
                            width: '240px', // Scaled down from 280px
                            background: '#ffffff',
                            borderRadius: '16px',
                            padding: '12px', // Scaled down
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                            zIndex: 1,
                            transformOrigin: 'center center',
                            display: isMobile ? 'none' : 'block'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#334155' }}>AI agent performance</div>
                            <div style={{ fontSize: '0.55rem', color: '#94a3b8' }}>Activity</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '100px', marginTop: '12px' }}>
                            {/* Bar chart bars */}
                            {[
                                { val: 32, label: 'May', color: '#94a3b8', name: 'Efficiency boost' },
                                { val: 22, label: 'Apr', color: '#94a3b8', name: 'Learning rate' },
                                { val: 38, label: 'May', color: '#94a3b8', name: 'Automation success' },
                                { val: 78, label: 'Jun', color: '#f87171', name: 'Task accuracy' }, // Coral highlight
                                { val: 56, label: 'Jul', color: '#94a3b8', name: 'Delivered quality' }
                            ].map((bar, i) => (
                                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ fontSize: '0.4rem', color: '#cbd5e1', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '40px', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap' }}>{bar.name}</div>
                                    <div style={{ width: '100%', height: '100%', background: '#f1f5f9', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: `${bar.val}%`, background: bar.color }} />
                                    </div>
                                    <div style={{ fontSize: '0.5rem', fontWeight: 600, color: '#334155', position: 'absolute', bottom: '24px' }}>{bar.val}%</div>
                                    <div style={{ fontSize: '0.5rem', color: '#64748b' }}>{bar.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Floating Card (Angled backwards) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 15 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 15, y: [0, -8, 0] }}
                        viewport={{ once: true }}
                        transition={{ 
                            opacity: { duration: 0.8, delay: 0.2 }, 
                            x: { duration: 0.8, delay: 0.2 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                        }}
                        style={{
                            position: 'absolute',
                            right: '5%',
                            top: '35%',
                            width: '260px', // Scaled down from 320px
                            background: '#ffffff',
                            borderRadius: '16px',
                            padding: '16px', // Scaled down
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                            zIndex: 1,
                            transformOrigin: 'center center',
                            display: isMobile ? 'none' : 'block'
                        }}
                    >
                        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#334155', marginBottom: '12px' }}>Data point (2.2k)</div>
                        
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {/* Line Chart Area */}
                            <div style={{ flex: 2, position: 'relative', height: '80px' }}> {/* Scaled down */}
                                {/* Y-axis labels */}
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '0.4rem', color: '#94a3b8' }}>
                                    <span>4k</span><span>3k</span><span>2k</span><span>1k</span><span>0</span>
                                </div>
                                {/* X-axis labels */}
                                <div style={{ position: 'absolute', left: '20px', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', fontSize: '0.4rem', color: '#94a3b8' }}>
                                    <span>Mon</span><span>Thu</span><span>Sun</span>
                                </div>
                                {/* Chart Area */}
                                <svg width="100%" height="80px" viewBox="0 0 100 80" preserveAspectRatio="none" style={{ position: 'absolute', left: '20px', width: 'calc(100% - 20px)', height: 'calc(100% - 20px)' }}>
                                    <path d="M0 60 Q 20 20, 40 40 T 80 50 T 100 20 L 100 80 L 0 80 Z" fill="url(#blueGrad)" opacity="0.3"/>
                                    <path d="M0 60 Q 20 20, 40 40 T 80 50 T 100 20" fill="none" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="40" cy="40" r="4" fill="#0f766e" stroke="#ffffff" strokeWidth="2" />
                                    {/* Data popup */}
                                    <rect x="30" y="15" width="28" height="14" rx="4" fill="#1e293b" />
                                    <text x="44" y="24" fill="white" fontSize="6" textAnchor="middle" fontWeight="600">2.2k</text>
                                    <polygon points="40,29 44,29 42,32" fill="#1e293b" />
                                    <defs>
                                        <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0f766e" />
                                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Stats */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ padding: '6px', borderRadius: '8px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.45rem', color: '#64748b' }}>Efficiency</div>
                                        <div style={{ fontSize: '0.55rem', fontWeight: 600, color: '#10b981' }}>+ 5%</div>
                                    </div>
                                </div>
                                <div style={{ padding: '6px', borderRadius: '8px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#fef2f2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.45rem', color: '#64748b' }}>Error rate</div>
                                        <div style={{ fontSize: '0.55rem', fontWeight: 600, color: '#ef4444' }}>- 2%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Content */}
                    <div style={{
                        maxWidth: '800px',
                        width: '100%',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 2, // Above the background and side cards
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                                fontWeight: 500,
                                color: '#ffffff',
                                letterSpacing: '-0.02em',
                                lineHeight: 1.15,
                                marginBottom: '1.5rem',
                                maxWidth: '750px'
                            }}
                        >
                            {industry.ctaHeading}
                        </motion.h2>

                        {industry.ctaDescription && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    fontSize: '1.25rem',
                                    color: '#e2e8f0', // Light slate
                                    lineHeight: 1.6,
                                    maxWidth: '600px',
                                    marginBottom: '3rem'
                                }}
                            >
                                {industry.ctaDescription}
                            </motion.p>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Primary Button (Dark Grey) */}
                            <Link 
                                href="https://apps.iaudit.global" 
                                ref={ctaPrimaryBtnRef}
                                className="btn-animate"
                                style={{
                                    gap: '8px',
                                    padding: '12px 28px',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    backgroundColor: '#111827', // Base color for btn-animate
                                    willChange: 'transform'
                                }}
                            >
                                <span>
                                    {industry.ctaPrimaryButton || 'Sign up free'}
                                    <span ref={ctaPrimaryArrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </span>
                                </span>
                            </Link>

                            {/* Secondary Button (White/Outline) */}
                            <Link 
                                href="/contact" 
                                ref={ctaSecondaryBtnRef}
                                className="btn-outline-animate"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 28px',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    border: '1px solid #d1d5db',
                                    willChange: 'transform'
                                }}
                            >
                                <span>
                                    {industry.ctaSecondaryButton || 'Watch demo'}
                                    <span ref={ctaSecondaryArrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            )}



            {/* Case Study Section - SafetyCulture Style */}
            {industry.caseStudyHeading && (
                <div style={{
                    width: '100%',
                    padding: isMobile ? '4.5rem 1.25rem 3.5rem' : '7.5rem 2rem 5.5rem',
                    background: '#ffffff',
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 0.8fr',
                        gap: '6rem',
                        alignItems: 'center'
                    }} className="case-study-grid">
                        <style jsx>{`
                            @media (max-width: 991px) {
                                .case-study-grid {
                                    grid-template-columns: 1fr !important;
                                    gap: 3rem !important;
                                }
                                .case-study-content {
                                    align-items: center !important;
                                    text-align: center !important;
                                }
                                .case-study-sparkle {
                                    justify-content: center !important;
                                }
                            }
                            @media (max-width: 640px) {
                                .hero-btn-container {
                                    flex-direction: column;
                                    align-items: center;
                                }
                            }
                        `}</style>
                        {/* Left Column: Content */}
                        <motion.div
                            className="case-study-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            {industry.caseStudySparkle && (
                                <motion.div
                                    className="case-study-sparkle"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: 'var(--primary)',
                                        fontSize: '1.15rem',
                                        fontWeight: 500,
                                        marginBottom: isMobile ? '1rem' : '1.5rem'
                                    }}
                                >
                                    <span style={{ fontSize: '1.15rem' }}>✦</span>
                                    {industry.caseStudySparkle}
                                    <span style={{ fontSize: '1.15rem' }}>✦</span>
                                </motion.div>
                            )}

                            <motion.h2
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                                    fontWeight: 500,
                                    color: '#111827',
                                    lineHeight: 1.1,
                                    marginBottom: isMobile ? '1rem' : '1.5rem',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                {industry.caseStudyHeading}
                            </motion.h2>

                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    fontSize: '1.15rem',
                                    color: '#4b5563',
                                    lineHeight: 1.6,
                                    marginBottom: isMobile ? '2rem' : '2.5rem'
                                }}
                            >
                                {industry.caseStudyDescription}
                            </motion.p>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    display: 'flex',
                                    justifyContent: isMobile ? 'center' : 'inherit',
                                    width: '100%'
                                }}
                            >
                                 <div
                                    ref={caseStudyBtnRef}
                                    className="btn-animate"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px', // Slightly tighter gap to match navbar
                                        padding: '14px 28px',
                                        borderRadius: '8px',
                                        // Removed explicit green background to allow btn-animate (green-to-dark-grey) swipe to work
                                        color: '#ffffff',
                                        fontSize: '1.05rem',
                                        fontWeight: 500,
                                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                                        willChange: 'transform' // Performance optimization matching navbar
                                    }}
                                >
                                    <span>
                                        {industry.caseStudyButton}
                                        <span ref={caseStudyArrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                width: '100%',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{
                                borderRadius: '32px',
                                overflow: 'hidden',
                                boxShadow: '0 40px 100px -10px rgba(5, 140, 66, 0.4)', // More visible dark green shadow
                                lineHeight: 0,
                                width: '100%',
                                maxWidth: '480px' // Constrain the image size
                            }}>
                                <img
                                    src={industry.caseStudyImage}
                                    alt={industry.caseStudyHeading}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        transform: 'scale(1.02)'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}

            {industry.testimonials && industry.testimonials.length > 0 && (
                <Testimonials 
                    backgroundColor="#F0FDF4" 
                    items={industry.testimonials} 
                />
            )}

            {/* FAQ Section - Flovity Style Accordion */}
            {industry.faqItems && industry.faqItems.length > 0 && (
                <div style={{
                    width: '100%',
                    padding: isMobile ? '3rem 1.25rem' : '5rem 2rem',
                    background: '#ffffff',
                    fontFamily: '"Pp Neue Montreal", sans-serif'
                }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        {/* Sparkle Text */}
                        {industry.faqSparkleText && (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: 'var(--primary)',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    marginBottom: '1rem'
                                }}
                            >
                                <span style={{ fontSize: '1rem' }}>✦</span>
                                {industry.faqSparkleText}
                                <span style={{ fontSize: '1rem' }}>✦</span>
                            </motion.div>
                        )}

                        {/* Heading */}
                        {industry.faqHeading && (
                            <motion.h2
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                style={{
                                    fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                                    fontWeight: 500,
                                    color: '#111827',
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1.15,
                                    margin: '0 0 3.5rem 0',
                                    textAlign: 'center',
                                    fontFamily: '"Pp Neue Montreal", sans-serif'
                                }}
                            >
                                {industry.faqHeading}
                            </motion.h2>
                        )}

                        {/* FAQ Accordion Items */}
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {industry.faqItems.map((item: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                                        boxShadow: openFaqIndex === idx 
                                            ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
                                            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        transform: openFaqIndex === idx ? 'translateY(-2px)' : 'translateY(0)'
                                    }}
                                >
                                    {/* Question Row */}
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '28px 32px',
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            fontFamily: '"Pp Neue Montreal", sans-serif'
                                        }}
                                    >
                                        <span style={{
                                            fontSize: '1.15rem',
                                            fontWeight: 500,
                                            color: '#111827',
                                            letterSpacing: '-0.01em',
                                            lineHeight: 1.4,
                                            paddingRight: '2rem'
                                        }}>
                                            {item.question}
                                        </span>
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            transition: 'transform 0.3s ease'
                                        }}>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#111827"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                style={{
                                                    transition: 'transform 0.3s ease',
                                                    transform: openFaqIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)'
                                                }}
                                            >
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Answer Content with smooth animation */}
                                    <AnimatePresence initial={false}>
                                        {openFaqIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div style={{
                                                    borderTop: '1px solid #e5e7eb',
                                                    margin: '0 32px',
                                                    padding: '20px 0 28px 0'
                                                }}>
                                                    <p style={{
                                                        fontSize: '1.05rem',
                                                        color: '#6b7280',
                                                        lineHeight: 1.7,
                                                        margin: 0,
                                                        fontFamily: '"Pp Neue Montreal", sans-serif'
                                                    }}>
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}

            <CTA backgroundColor="#F0FDF4" />
            <Footer />
        </main>
    );
}
