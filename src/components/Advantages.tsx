"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const advantageTabs = [
    {
        id: "reporting",
        label: "Reporting",
        tag: "Core Advantages",
        title: "Cut Reporting Time By 60%",
        description: "Stop copy-pasting evidence into Word documents. Our automated report generator compiles your findings instantly.",
        image: "/advantages/reporting.webp",
        color: "#6366f1"
    },
    {
        id: "compliance",
        label: "Compliance",
        tag: "Core Advantages",
        title: "92% Compliance Score",
        description: "Organisations using our structured frameworks consistently score higher during external surveillance audits.",
        image: "/advantages/compliance.webp",
        color: "#1fbfe1"
    },
    {
        id: "setup",
        label: "Setup",
        tag: "Core Advantages",
        title: "Zero Implementation Time",
        description: "No complex setup required. Sign up, select your standard, and start your first audit in minutes.",
        image: "/advantages/setup.webp",
        color: "#10b981"
    }
];

// --- High-Fidelity "Ditto" Mockups ---

function ReportingMockup() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', perspective: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {/* Container that holds both absolutely-positioned cards, scaled to fit */}
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '280px' }}>
                {/* Back Card: Action Item List */}
                <motion.div
                    initial={{ x: -20, y: -20, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        width: '88%',
                        height: '190px',
                        background: '#fff',
                        borderRadius: '20px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                        border: '1px solid #f1f5f9',
                        padding: '24px',
                        zIndex: 1
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#004d33', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#374151' }}>Generate An Action Item List</div>
                        <div style={{ flex: 1 }} />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3l1.912 5.886L20 10.8l-4.5 4.386L16.5 21 12 17.114 7.5 21l1-5.814L4 10.8l6.088-1.914z" />
                                </svg>
                            </div>
                            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" y1="6" x2="20" y2="6" />
                                    <line x1="4" y1="12" x2="14" y2="12" />
                                    <line x1="4" y1="18" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '1px', background: '#f1f5f9', width: '100%', marginBottom: '20px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ height: '16px', background: '#f8fafc', borderRadius: '8px', width: i === 3 ? '45%' : '100%' }} />
                        ))}
                    </div>
                </motion.div>

                {/* Front Card: Area Chart */}
                <motion.div
                    initial={{ x: 60, y: 80, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: '90px',
                        right: '12px',
                        width: '75%',
                        height: '220px',
                        background: '#fff',
                        borderRadius: '24px',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1)',
                        border: '1px solid #f1f5f9',
                        padding: '24px',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>1200+ Projects</div>
                    </div>

                    <div style={{ flex: 1, position: 'relative' }}>
                        <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                            {[0, 25, 50, 75, 100].map(y => (
                                <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="3 3" />
                            ))}
                            <defs>
                                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#058c42" stopOpacity="0.45" />
                                    <stop offset="100%" stopColor="#058c42" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M0,80 Q20,70 40,55 T80,45 T120,20 T160,50 T200,80 L200,105 L0,105 Z"
                                fill="url(#areaGradient)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            />
                            <motion.path
                                d="M0,80 Q20,70 40,55 T80,45 T120,20 T160,50 T200,80"
                                fill="none"
                                stroke="#004d33"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                            />
                            {[
                                { x: 30, y: 62 }, { x: 55, y: 50 }, { x: 83, y: 44 }, { x: 105, y: 32 },
                                { x: 125, y: 22 }, { x: 142, y: 36 }, { x: 165, y: 53 }, { x: 188, y: 72 }
                            ].map((dot, i) => (
                                <motion.circle
                                    key={i}
                                    cx={dot.x}
                                    cy={dot.y}
                                    r="2.5"
                                    fill="#fff"
                                    stroke="#004d33"
                                    strokeWidth="1.5"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 + i * 0.1 }}
                                />
                            ))}
                            <motion.circle
                                cx="120"
                                cy="20"
                                r="4"
                                fill="#004d33"
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ delay: 1.8, duration: 0.4 }}
                            />

                            {/* X-Axis Labels */}
                            {[
                                { x: 10, label: '1' }, { x: 40, label: '2' }, { x: 70, label: '3' }, { x: 100, label: '4' },
                                { x: 125, label: '23' }, { x: 150, label: '31' }, { x: 175, label: '58' }, { x: 195, label: '212' }
                            ].map((label, i) => (
                                <text key={i} x={label.x} y="115" fontSize="6" fill="#9ca3af" textAnchor="middle">{label.label}</text>
                            ))}
                        </svg>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '24px', borderTop: '1px solid #f8fafc', paddingTop: '16px' }}>
                        <div style={{ width: '18px', height: '18px', color: '#004d33', background: '#004d3315', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                <polyline points="17 6 23 6 23 12" />
                            </svg>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#4b5563', fontWeight: 500 }}>Intelligence That Powers Real Digital Growth</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}



function ComplianceMockup() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: '220px',
                    background: '#fff',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0, 166, 81, 0.12)',
                    border: '1px solid #f1f5f9',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 600, color: '#111827' }}>Framework Compliance</div>
                    <div style={{ fontSize: '0.8rem', color: '#058c42', background: '#058c4215', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>Active</div>
                </div>

                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div style={{ width: '100px', height: '100px', position: 'relative' }}>
                        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                            <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="#058c42"
                                strokeWidth="8"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 25.1 }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827' }}>92%</div>
                            <div style={{ fontSize: '0.6rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Score</div>
                        </div>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { label: 'Documentation', val: '95%', color: '#058c42' },
                            { label: 'Implementation', val: '88%', color: '#f59e0b' },
                            { label: 'Surveillance', val: '92%', color: '#0284c7' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 500 }}>
                                    <span style={{ color: '#4b5563' }}>{item.label}</span>
                                    <span style={{ color: '#111827' }}>{item.val}</span>
                                </div>
                                <div style={{ width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: item.val }}
                                        transition={{ duration: 1.5, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                                        style={{ height: '100%', background: item.color, borderRadius: '3px' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function SetupMockup() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: '220px',
                    background: '#fff',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                    border: '1px solid #f1f5f9',
                    padding: '28px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px'
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>One-Click Audit Initiation</div>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Ready To Deploy Standards</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center', gap: '16px', position: 'relative' }}>
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: '60px', height: '60px', borderRadius: '18px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#058c42' }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                    </motion.div>

                    <div style={{ width: '60px', height: '2px', background: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ left: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, #058c42, transparent)' }}
                        />
                    </div>

                    <motion.div
                        initial={{ backgroundColor: '#f8fafc' }}
                        animate={{ backgroundColor: '#058c42', scale: [1, 1.1, 1] }}
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatDelay: 3 }}
                        style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 20px rgba(5,140,66,0.2)' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </motion.div>

                    <div style={{ width: '60px', height: '2px', background: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ left: ['-100%', '100%'] }}
                            transition={{ delay: 1, duration: 1.5, repeat: Infinity, ease: "linear" }}
                            style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, #058c42, transparent)' }}
                        />
                    </div>

                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                        style={{ width: '60px', height: '60px', borderRadius: '18px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Advantages() {
    const [activeTab, setActiveTab] = useState(advantageTabs[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const MockupRenderer = () => {
        switch (activeTab.id) {
            case 'reporting': return <ReportingMockup />;
            case 'compliance': return <ComplianceMockup />;
            case 'setup': return <SetupMockup />;
            default: return null;
        }
    };

    return (
        <section id="advantages" className="section" style={{
            background: '#fff',
            padding: isMobile ? '3.5rem 0' : '5rem 0',
            overflow: 'hidden',
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                            fontSize: isMobile ? '0.9rem' : '1rem',
                            letterSpacing: '0.01em',
                            marginBottom: '0.75rem'
                        }}>
                        <span style={{ fontSize: '1rem' }}>✦</span>
                        Core Advantages
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>
                    <motion.h2
                        className="h2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: isMobile ? '2.0rem' : '3.2rem',
                            fontWeight: 500,
                            marginBottom: '1.5rem',
                            lineHeight: isMobile ? 1.2 : 1.1,
                            color: '#111827',
                            letterSpacing: '-0.02em',
                            maxWidth: '800px'
                        }}
                    >
                        Better Oversight. <span style={{ color: 'var(--primary)' }}>Stronger Results.</span>
                    </motion.h2>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: isMobile ? 'flex-start' : 'center',
                        gap: isMobile ? '0.5rem' : '1rem',
                        marginBottom: isMobile ? '24px' : '40px',
                        borderBottom: '1px solid #f3f4f6',
                        overflowX: isMobile ? 'auto' : 'visible',
                        WebkitOverflowScrolling: 'touch',
                        paddingBottom: isMobile ? '4px' : '0'
                    }}>
                        {advantageTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: isMobile ? '0.6rem 1rem' : '0.75rem 1.5rem',
                                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                                    fontWeight: 500,
                                    color: activeTab.id === tab.id ? '#111827' : '#9ca3af',
                                    border: 'none',
                                    borderBottom: `2px solid ${activeTab.id === tab.id ? tab.color : 'transparent'}`,
                                    transition: 'all 0.3s ease',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {tab.label}
                                {activeTab.id === tab.id && (
                                    <motion.div
                                        layoutId="activeTabGlow"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-1px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: tab.color,
                                            boxShadow: `0 0 20px ${tab.color}40`
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.2fr) minmax(0, 1fr)',
                                gap: isMobile ? '24px' : '40px',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                padding: isMobile ? '20px' : '32px',
                                borderRadius: isMobile ? '24px' : '32px',
                                border: '1px solid #f1f5f9',
                                boxShadow: isMobile ? '0 20px 40px rgba(0, 77, 51, 0.1)' : '0 40px 80px rgba(0, 77, 51, 0.18), 0 15px 30px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 77, 51, 0.3)'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '1.25rem',
                                    overflow: 'hidden',
                                    aspectRatio: isMobile ? '1.4/1' : '1.6/1',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
                                    background: '#f8fafc',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: isMobile ? '220px' : '320px',
                                }}
                            >
                                {/* Scale wrapper for mobile so absolute-positioned mockups fit */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    transform: isMobile ? 'scale(0.72)' : 'scale(1)',
                                    transformOrigin: 'top left',
                                    ...(isMobile ? { width: '139%', height: '139%' } : {}),
                                }}>
                                    <MockupRenderer />
                                </div>
                            </motion.div>

                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 10 : 0 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 style={{
                                        fontSize: isMobile ? '1.5rem' : '2rem',
                                        fontWeight: 500,
                                        color: '#111827',
                                        marginBottom: isMobile ? '0.75rem' : '1rem',
                                        lineHeight: 1.2
                                    }}>
                                        {activeTab.title}
                                    </h3>
                                    <p style={{
                                        fontSize: isMobile ? '0.9rem' : '1rem',
                                        lineHeight: 1.6,
                                        color: '#4b5563',
                                        fontWeight: 400,
                                        marginBottom: isMobile ? '1rem' : '1.5rem'
                                    }}>
                                        {activeTab.description}
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {[
                                            activeTab.id === 'reporting' ? 'Automated Word/PDF generation' : activeTab.id === 'compliance' ? 'Real-time dashboard tracking' : 'Pre-built ISO 9001, 14001, 45001',
                                            activeTab.id === 'reporting' ? 'Custom branding for reports' : activeTab.id === 'compliance' ? 'Gap analysis and risk scoring' : 'Zero-config cloud deployment'
                                        ].map((feat, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: isMobile ? '0.85rem' : '0.9rem', color: '#374151', fontWeight: 500 }}>
                                                <div style={{ color: 'var(--primary)' }}>✔</div>
                                                {feat}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
