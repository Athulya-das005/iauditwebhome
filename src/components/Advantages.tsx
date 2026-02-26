"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const advantageTabs = [
    {
        id: "reporting",
        label: "Reporting",
        tag: "Core Advantages",
        title: "Cut reporting time by 60%",
        description: "Stop copy-pasting evidence into Word documents. Our automated report generator compiles your findings instantly.",
        image: "/advantages/reporting.webp", // Will generate
        color: "#6366f1"
    },
    {
        id: "compliance",
        label: "Compliance",
        tag: "Core Advantages",
        title: "92% Compliance Score",
        description: "Organisations using our structured frameworks consistently score higher during external surveillance audits.",
        image: "/advantages/compliance.webp", // Will generate
        color: "#1fbfe1"
    },
    {
        id: "setup",
        label: "Setup",
        tag: "Core Advantages",
        title: "Zero Implementation Time",
        description: "No complex setup required. Sign up, select your standard, and start your first audit in minutes.",
        image: "/advantages/setup.webp", // Will generate
        color: "#10b981"
    }
];

export default function Advantages() {
    const [activeTab, setActiveTab] = useState(advantageTabs[0]);

    return (
        <section id="advantages" className="section" style={{ background: '#fff', padding: '3.5rem 0', overflow: 'hidden', fontFamily: '"Pp Neue Montreal", sans-serif' }}>
            <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 2rem' }}>
                {/* Heading Shared Animation Style */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                            fontSize: '0.8rem',
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
                            fontSize: '2.8rem',
                            fontWeight: 500,
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            color: '#111827',
                            letterSpacing: '-0.02em',
                            maxWidth: '800px'
                        }}
                    >
                        Better oversight. <span style={{ color: 'var(--primary)' }}>Stronger results.</span>
                    </motion.h2>
                </div>

                {/* Interactive Toggle / Tabs */}
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '40px',
                        borderBottom: '1px solid #f3f4f6'
                    }}>
                        {advantageTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    color: activeTab.id === tab.id ? '#111827' : '#9ca3af',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    borderBottom: `2px solid ${activeTab.id === tab.id ? tab.color : 'transparent'}`,
                                    transition: 'all 0.3s ease',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    position: 'relative'
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

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
                                gap: '40px',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                padding: '32px',
                                borderRadius: '32px',
                                border: '1px solid #f1f5f9',
                                boxShadow: '0 20px 60px rgba(0, 166, 81, 0.08), 0 4px 12px rgba(0,0,0,0.02)'
                            }}
                        >
                            {/* Left: Image Card (Premium CSS Dashboard) */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '1.5rem',
                                    overflow: 'hidden',
                                    aspectRatio: '1.6/1',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
                                    background: '#fff',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '240px'
                                }}
                            >
                                {/* Dashboard Top Bar */}
                                <div style={{ height: '40px', background: '#f8fafc', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '6px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                                    <div style={{ flex: 1 }} />
                                    <div style={{ width: '60px', height: '6px', borderRadius: '3px', background: '#e2e8f0' }} />
                                </div>
                                <div style={{ flex: 1, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 }}
                                            style={{ flex: 1, height: '70px', borderRadius: '12px', border: '1px solid #f1f5f9', background: 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)', padding: '1rem' }}>
                                            <div style={{ width: '40%', height: '6px', background: '#e2e8f0', borderRadius: '3px', marginBottom: '8px' }} />
                                            <motion.div
                                                animate={{ width: ['40%', '70%', '60%'] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                style={{ height: '10px', background: activeTab.color, opacity: 0.2, borderRadius: '5px' }} />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 }}
                                            style={{ flex: 1, height: '70px', borderRadius: '12px', border: '1px solid #f1f5f9', background: 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)', padding: '1rem' }}>
                                            <div style={{ width: '40%', height: '6px', background: '#e2e8f0', borderRadius: '3px', marginBottom: '8px' }} />
                                            <motion.div
                                                animate={{ width: ['60%', '95%', '85%'] }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                                style={{ height: '10px', background: activeTab.color, opacity: 0.6, borderRadius: '5px' }} />
                                        </motion.div>
                                    </div>
                                    <div style={{ flex: 1, width: '100%', borderRadius: '12px', border: '1px solid #f1f5f9', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px', background: '#fcfcfc' }}>
                                        {[1, 2, 3].map(row => (
                                            <motion.div
                                                key={row}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (row * 0.1) }}
                                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ width: '20px', height: '20px', borderRadius: '5px', background: `${activeTab.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: activeTab.color, opacity: 0.4 }} />
                                                </div>
                                                <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px' }} />
                                                <div style={{ width: '50px', height: '6px', background: '#e2e8f0', borderRadius: '3px' }} />
                                            </motion.div>
                                        ))}
                                        <div style={{ flex: 1 }} />
                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            style={{ height: '40px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeTab.color, fontWeight: 500, fontSize: '1.1rem', opacity: 0.8 }}>
                                            {activeTab.id === 'reporting' ? 'Processing data...' : activeTab.id === 'compliance' ? 'Real-time score tracking' : 'One-click activation'}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Text Content */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: 500,
                                        color: '#111827',
                                        marginBottom: '1rem',
                                        lineHeight: 1.2
                                    }}>
                                        {activeTab.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                        color: '#4b5563',
                                        fontWeight: 400,
                                        marginBottom: '1rem'
                                    }}>
                                        {activeTab.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
