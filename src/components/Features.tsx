"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const pdcaSteps = [
    {
        tag: "Step 01",
        title: "Plan",
        subtitle: "Build Risk-Based Audit Programmes In Minutes",
        description: "Define audit objectives, scope, and criteria aligned with ISO requirements and internal priorities. Create multi-year audit programmes that focus on high-risk processes and strategic goals. Schedule audits, assign auditors, and set timelines without the spreadsheet chaos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        ),
        color: "#4f46e5"
    },
    {
        tag: "Step 02",
        title: "Do",
        subtitle: "Execute Audits With Structure And Consistency",
        description: "Conduct audits using structured checklists, guided interviews, and proper sampling techniques. Collect evidence digitally, capture good practices, and document nonconformities as you go. Works for on-site and remote audits, following the latest ISO guidance.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
        ),
        color: "#10b981"
    },
    {
        tag: "Step 03",
        title: "Check",
        subtitle: "Analyse Findings And Spot What Matters",
        description: "Review audit results, identify trends, and assess process effectiveness across your organisation. Generate clear, actionable reports that highlight key risks, systemic issues, and their impact on your objectives. No more hours spent formatting Word documents.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        ),
        color: "#f59e0b"
    },
    {
        tag: "Step 04",
        title: "Act",
        subtitle: "Close The Loop On Every Finding",
        description: "Link findings to corrective actions with assigned owners and deadlines. Track progress, verify effectiveness, and ensure nothing falls through the cracks. Embed lessons learned into procedures, training, and controls for lasting improvement.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><polyline points="21 3 21 8 16 8"></polyline></svg>
        ),
        color: "#ef4444"
    }
];

export default function Features() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="features" className="section" style={{
            background: '#fcfcfc',
            borderTop: '1px solid rgba(0,0,0,0.03)',
            padding: isMobile ? '3.5rem 0' : '5rem 0',
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
                <div style={{ marginBottom: isMobile ? '2.5rem' : '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            color: '#006644',
                            fontWeight: 500,
                            fontSize: isMobile ? '0.75rem' : '0.8rem',
                            letterSpacing: '0.01em',
                            marginBottom: '0.75rem'
                        }}>
                        <span style={{ fontSize: '1rem' }}>✦</span>
                        The PDCA Framework
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>
                    <h2 className="h2" style={{
                        fontSize: isMobile ? '1.85rem' : '2.8rem',
                        fontWeight: 500,
                        marginBottom: '1.5rem',
                        color: '#111827',
                        lineHeight: isMobile ? 1.25 : 1.1,
                        letterSpacing: '-0.02em',
                        maxWidth: '800px'
                    }}>
                        One Platform For Every Stage Of <br className="hidden-mobile" />
                        Your <span style={{ color: 'var(--primary)' }}>Audit Programme</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: isMobile ? '1.25rem' : '2rem'
                }}>
                    {pdcaSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: isMobile ? 50 : 100, scale: isMobile ? 0.95 : 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: isMobile ? 0 : index * 0.1
                            }}
                            whileHover={!isMobile ? {
                                y: -15,
                                scale: 1.05,
                                borderColor: step.color,
                                boxShadow: `0 20px 40px ${step.color}15`,
                                transition: { duration: 0.2 }
                            } : {}}
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                padding: isMobile ? '1.75rem 1.5rem' : '2rem 1.75rem',
                                borderRadius: isMobile ? '24px' : '32px',
                                border: '1px solid rgba(0,0,0,0.04)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.2s ease',
                                height: '100%',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <motion.div
                                    whileHover={!isMobile ? { scale: 1.1, rotate: 5 } : {}}
                                    style={{
                                        width: isMobile ? '3rem' : '3.5rem',
                                        height: isMobile ? '3rem' : '3.5rem',
                                        background: `${step.color}15`,
                                        color: step.color,
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: `0 8px 16px ${step.color}10`
                                    }}
                                >
                                    {step.icon}
                                </motion.div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    color: '#9ca3af',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    {step.tag}
                                </span>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 500, color: step.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                                    {step.title}
                                </h3>
                                <h4 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', fontWeight: 500, color: '#111827', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                                    {step.subtitle}
                                </h4>
                                <p style={{ marginBottom: '1.5rem', fontSize: isMobile ? '0.9rem' : '0.95rem', lineHeight: 1.6, color: '#6b7280' }}>
                                    {step.description}
                                </p>
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <Link
                                    href="https://apps.iaudit.global"
                                    className="btn-link"
                                    style={{
                                        color: 'var(--primary)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem',
                                        fontWeight: 500
                                    }}
                                >
                                    Get started
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
