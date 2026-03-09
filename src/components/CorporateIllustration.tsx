'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CorporateIllustrationProps {
    isMobile?: boolean;
}

export default function CorporateIllustration({ isMobile = false }: CorporateIllustrationProps) {
    const scale = isMobile ? 0.75 : 1;

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: isMobile ? '300px' : '400px',
            aspectRatio: '16/10',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: isMobile ? '180px' : '260px'
        }}>
            {/* Main scaled container */}
            <div style={{
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                width: '400px',
                height: '260px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Background circular accent */}
                <svg style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: 0, overflow: 'visible' }} viewBox="0 0 500 350">
                    <circle cx="250" cy="175" r="140" fill="#F0F5F3" opacity="0.6" />

                    {/* Connecting lines for floating elements */}
                    <path d="M 140,70 L 220,70 L 220,90" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="140" cy="70" r="2.5" fill="#94A3B8" />
                    <circle cx="220" cy="90" r="2.5" fill="#94A3B8" />

                    <path d="M 360,90 L 300,90 L 300,110" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="360" cy="90" r="2.5" fill="#94A3B8" />
                </svg>

                {/* Laptop Base & Screen container */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    {/* Screen Bezel */}
                    <div style={{
                        width: '360px',
                        height: '220px',
                        backgroundColor: '#1E293B',
                        borderRadius: '8px 8px 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '10px 10px 0 10px',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                    }}>
                        {/* Webcam */}
                        <div style={{ width: '3px', height: '3px', backgroundColor: '#334155', borderRadius: '50%', marginBottom: '6px' }}></div>

                        {/* Inner Screen */}
                        <div style={{
                            width: '100%',
                            flex: 1,
                            backgroundColor: '#FFFFFF',
                            borderRadius: '3px 3px 0 0',
                            display: 'flex',
                            padding: '14px',
                            gap: '14px',
                            overflow: 'hidden'
                        }}>
                            {/* Left Content Column (Checklist) */}
                            <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                                {[0.2, 0.4, 0.6, 0.8].map((delay, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + delay, duration: 0.5 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                    >
                                        <div style={{
                                            width: '16px', height: '16px', backgroundColor: '#10B981', borderRadius: '3px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                        }}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
                                            <div style={{ height: '3px', width: i % 2 === 0 ? '70%' : '50%', backgroundColor: '#CBD5E1', borderRadius: '1.5px' }}></div>
                                            <div style={{ height: '3px', width: '90%', backgroundColor: '#F1F5F9', borderRadius: '1.5px' }}></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right Content Column (Chart) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
                            >
                                <svg width="110" height="110" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F1F5F9" strokeWidth="20" />
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8BA7BF" strokeWidth="20" strokeDasharray="100 151" strokeDashoffset="0" />
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#A7C9D9" strokeWidth="20" strokeDasharray="75 176" strokeDashoffset="-100" />
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="20" strokeDasharray="76 175" strokeDashoffset="-175" />
                                    <line x1="50" y1="50" x2="50" y2="10" stroke="white" strokeWidth="2" />
                                    <line x1="50" y1="50" x2="88" y2="62" stroke="white" strokeWidth="2" />
                                    <line x1="50" y1="50" x2="20" y2="80" stroke="white" strokeWidth="2" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>

                    {/* Laptop Base (Keyboard Deck) */}
                    <div style={{
                        position: 'relative',
                        width: '420px',
                        height: '14px',
                        backgroundColor: '#1E293B',
                        borderRadius: '0 0 10px 10px',
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: '0 8px 15px rgba(0,0,0,0.12)'
                    }}>
                        <div style={{ width: '60px', height: '3px', backgroundColor: '#334155', borderRadius: '0 0 3px 3px' }} />
                    </div>
                    {/* Bottom stand/shadow */}
                    <div style={{ width: '350px', height: '6px', backgroundColor: '#0F172A', borderRadius: '0 0 6px 6px' }} />
                </motion.div>


                {/* Floating External Elements */}

                {/* Top Left Document Card */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute', top: '25px', left: '30px', zIndex: 3,
                        backgroundColor: 'white', padding: '8px', borderRadius: '5px',
                        boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
                        display: 'flex', flexDirection: 'column', gap: '5px', width: '80px',
                        border: '1px solid #E2E8F0'
                    }}
                >
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        <div style={{ width: '10px', height: '10px', background: '#A7C9D9', borderRadius: '1.5px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                            <div style={{ height: '2px', width: '100%', backgroundColor: '#0F172A', borderRadius: '1px' }} />
                            <div style={{ height: '2px', width: '60%', backgroundColor: '#0F172A', borderRadius: '1px' }} />
                        </div>
                    </div>
                    <div style={{ height: '2px', width: '80%', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
                    <div style={{ height: '2px', width: '50%', backgroundColor: '#CBD5E1', borderRadius: '1px' }} />
                </motion.div>

                {/* Top Middle Shield */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ position: 'absolute', top: '-5px', left: '180px', zIndex: 4, filter: 'drop-shadow(0 10px 20px rgba(16, 185, 129, 0.2))' }}
                >
                    <div style={{ padding: '3px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#10B981">
                            <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                            <path d="M9 12l2 2 4-4" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Top Right Document Card */}
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    style={{
                        position: 'absolute', top: '20px', right: '20px', zIndex: 3,
                        backgroundColor: 'white', padding: '10px', borderRadius: '5px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                        display: 'flex', flexDirection: 'column', gap: '6px', width: '90px',
                        border: '1px solid #E2E8F0'
                    }}
                >
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div style={{ width: '14px', height: '14px', border: '1.5px solid #10B981', borderRadius: '2px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
                            <div style={{ height: '3px', width: '100%', backgroundColor: '#006644', borderRadius: '1.5px' }} />
                            <div style={{ height: '3px', width: '100%', backgroundColor: '#006644', borderRadius: '1.5px' }} />
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: '#E2E8F0', margin: '2px 0' }} />
                    <div style={{ height: '3px', width: '90%', backgroundColor: '#64748B', borderRadius: '1.5px' }} />
                    <div style={{ height: '3px', width: '60%', backgroundColor: '#64748B', borderRadius: '1.5px' }} />
                </motion.div>

                {/* Mid Right Small Document Card */}
                <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    style={{
                        position: 'absolute', top: '140px', right: '-15px', zIndex: 3,
                        backgroundColor: 'white', padding: '6px', borderRadius: '4px',
                        border: '1px solid #E2E8F0',
                        display: 'flex', flexDirection: 'column', gap: '4px', width: '65px',
                        boxShadow: '0 3px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '1.5px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                            <div style={{ height: '2px', width: '100%', backgroundColor: '#006644', borderRadius: '1px' }} />
                            <div style={{ height: '2px', width: '100%', backgroundColor: '#0F172A', borderRadius: '1px' }} />
                        </div>
                    </div>
                    <div style={{ height: '2px', width: '80%', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
                    <div style={{ height: '2px', width: '60%', backgroundColor: '#94A3B8', borderRadius: '1px' }} />
                </motion.div>

                {/* Bottom Right Shield */}
                <motion.div
                    animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    style={{ position: 'absolute', bottom: '50px', right: '60px', zIndex: 5 }}
                >
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        padding: '3px',
                        boxShadow: '0 8px 15px rgba(0,0,0,0.12)'
                    }}>
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="#10B981">
                            <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                            <path d="M9 12l2 3 4-4" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
