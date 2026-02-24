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
        <section id="advantages" className="section" style={{ background: '#fff', padding: '100px 0', overflow: 'hidden', fontFamily: '"Pp Neue Montreal", sans-serif' }}>
            <div className="container">
                {/* Heading Shared Animation Style */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.4rem 1.2rem',
                            backgroundColor: 'rgba(0, 166, 81, 0.08)',
                            color: 'var(--primary)',
                            borderRadius: '2rem',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            textTransform: 'uppercase'
                        }}>
                        {activeTab.tag}
                    </motion.div>
                    <motion.h2
                        className="h2"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            color: '#111827'
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
                        marginBottom: '60px',
                        borderBottom: '1px solid #f3f4f6'
                    }}>
                        {advantageTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '1rem 2rem',
                                    fontSize: '1rem',
                                    fontWeight: 600,
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
                                gridTemplateColumns: '1.2fr 1fr',
                                gap: '80px',
                                alignItems: 'center',
                                backgroundColor: '#f9fafb',
                                padding: '60px',
                                borderRadius: '2.5rem',
                                border: '2px solid var(--primary)',
                                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01), 0 30px 80px rgba(0, 166, 81, 0.2)'
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
                                    aspectRatio: '1.4/1',
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
                                    background: '#fff',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column'
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
                                <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ flex: 1, height: '80px', borderRadius: '0.75rem', border: '1px solid #f1f5f9', background: 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)', padding: '1rem' }}>
                                            <div style={{ width: '40%', height: '8px', background: '#e2e8f0', borderRadius: '4px', marginBottom: '12px' }} />
                                            <div style={{ width: '70%', height: '12px', background: activeTab.color, opacity: 0.2, borderRadius: '6px' }} />
                                        </div>
                                        <div style={{ flex: 1, height: '80px', borderRadius: '0.75rem', border: '1px solid #f1f5f9', background: 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)', padding: '1rem' }}>
                                            <div style={{ width: '40%', height: '8px', background: '#e2e8f0', borderRadius: '4px', marginBottom: '12px' }} />
                                            <div style={{ width: '90%', height: '12px', background: activeTab.color, opacity: 0.6, borderRadius: '6px' }} />
                                        </div>
                                    </div>
                                    <div style={{ flex: 1, width: '100%', borderRadius: '0.75rem', border: '1px solid #f1f5f9', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '12px', background: '#fcfcfc' }}>
                                        {[1, 2, 3, 4].map(row => (
                                            <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `${activeTab.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: activeTab.color, opacity: 0.4 }} />
                                                </div>
                                                <div style={{ flex: 1, height: '8px', background: '#f1f5f9', borderRadius: '4px' }} />
                                                <div style={{ width: '60px', height: '8px', background: '#e2e8f0', borderRadius: '4px' }} />
                                            </div>
                                        ))}
                                        <div style={{ flex: 1 }} />
                                        <div style={{ height: '60px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeTab.color, fontWeight: 700, fontSize: '1.25rem', opacity: 0.8 }}>
                                            {activeTab.id === 'reporting' ? '-60% Time' : activeTab.id === 'compliance' ? '92% Score' : 'Instant Setup'}
                                        </div>
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
                                        fontSize: '2.5rem',
                                        fontWeight: 800,
                                        color: '#111827',
                                        marginBottom: '1.5rem',
                                        lineHeight: 1.2
                                    }}>
                                        {activeTab.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.125rem',
                                        lineHeight: 1.6,
                                        color: '#4b5563',
                                        marginBottom: '0.5rem'
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
