"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "@/components/Footer";

export default function ISO14001() {
    const [isMobile, setIsMobile] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>

            <section style={{
                background: `
                    radial-gradient(ellipse 50% 60% at 0% 0%, rgba(0,166,81,0.15) 0%, transparent 100%),
                    radial-gradient(ellipse 50% 60% at 100% 0%, rgba(0,166,81,0.15) 0%, transparent 100%)
                `,
                paddingTop: isMobile ? "60px" : "100px",
                paddingBottom: isMobile ? "40px" : "80px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: '"Pp Neue Montreal", sans-serif',
            }}>
                <div style={{ maxWidth: "900px", width: "100%", margin: "0 auto", paddingLeft: "1.25rem", paddingRight: "1.25rem" }}>
                    
                    {/* Tag */}
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#1a7a5e",
                        marginBottom: "1.5rem",
                        letterSpacing: "0.015em",
                        backgroundColor: "rgba(26, 122, 94, 0.1)",
                        padding: "0.4rem 1rem",
                        borderRadius: "20px"
                    }}>
                        Gap analysis • Updated checklists • Audit planning
                    </div>

                    {/* Main Heading */}
                    <h1 style={{
                        fontSize: isMobile ? "2.2rem" : "3.2rem",
                        fontWeight: 500,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "#0d1117",
                        marginBottom: "1.5rem"
                    }}>
                        Transition to <span style={{ color: "#058c42" }}>ISO 14001:2026</span> with clarity and confidence
                    </h1>

                    {/* Description */}
                    <p style={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: "#4b5563",
                        maxWidth: "680px",
                        margin: "0 auto 3rem",
                    }}>
                        ISO 14001:2026 has been published. The three-year transition window is now open. Get a clear plan, reduce audit pressure, and stay ahead of the curve with expert support built by ISO auditors.
                    </p>

                    {/* CTA Buttons */}
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        marginBottom: "3rem"
                    }}>
                        {/* Primary */}
                        <Link
                            href="https://calendly.com/"
                            className="btn-animate"
                            style={{
                                padding: "14px 28px",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "1rem",
                            }}
                        >
                            <span>
                                Book free consultation →
                            </span>
                        </Link>

                        {/* Secondary */}
                        <Link
                            href="https://apps.iaudit.global"
                            className="btn-outline-animate"
                            style={{
                                padding: "14px 28px",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "1rem",
                            }}
                        >
                            <span>
                                Try iAudit free for 14 days
                            </span>
                        </Link>
                    </div>

                    {/* Footer note */}
                    <div style={{
                        fontSize: "0.95rem",
                        color: "#6b7280",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                        fontWeight: 500
                    }}>
                        <span>Built by certified ISO auditors</span>
                        <span style={{ color: "#d1d5db" }}>•</span>
                        <span>ISO 19011-aligned</span>
                        <span style={{ color: "#d1d5db" }}>•</span>
                        <span>Zero-access data policy</span>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: "#f0fdf4", padding: isMobile ? "3rem 1.25rem" : "5rem 1.25rem", borderTop: "1px solid #e2e8f0" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2 style={{
                            fontSize: isMobile ? "1.8rem" : "2.5rem",
                            fontWeight: 500,
                            color: "#0d1117",
                            marginBottom: "1rem",
                            letterSpacing: "-0.01em"
                        }}>
                            What you get from your free ISO 14001:2026 transition consultation
                        </h2>
                        <p style={{
                            fontSize: "1.1rem",
                            color: "#4b5563",
                            maxWidth: "750px",
                            margin: "0 auto",
                            lineHeight: 1.6
                        }}>
                            We offer a free 30-minute consultation to help you understand where you are now and what needs attention before your next certification or surveillance audit.
                        </p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "1.5rem",
                        marginBottom: "3rem"
                    }}>
                        {[
                            {
                                title: "ISO 14001:2026 readiness gap analysis",
                                desc: "We'll review your current approach and highlight where the 2026 edition introduces new or strengthened expectations."
                            },
                            {
                                title: "Updated audit checklist guidance",
                                desc: "We'll explain what to add, remove or refine in your internal audit checklists so they align with the new structure and clause changes."
                            },
                            {
                                title: "Transition audit plan recommendations",
                                desc: "We'll help you prioritise: what to audit first, which areas carry the most risk, and how to phase implementation without overwhelming your team."
                            },
                            {
                                title: "Evidence expectations clarified",
                                desc: "Understand what auditors will look for on-site vs what documentation you'll need to maintain, so you're not over-documenting or under-preparing."
                            }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                backgroundColor: "white",
                                padding: "2rem",
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 12px 20px -8px rgba(5, 140, 66, 0.2)";
                                e.currentTarget.style.borderColor = "#c6f6d5";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
                                e.currentTarget.style.borderColor = "#e5e7eb";
                            }}
                            >
                                <div style={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    width: "44px", 
                                    height: "44px", 
                                    borderRadius: "50%", 
                                    backgroundColor: "rgba(5, 140, 66, 0.1)", 
                                    color: "#058c42", 
                                    marginBottom: "1.25rem" 
                                }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#111827", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.5 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <Link
                            href="https://calendly.com/"
                            className="btn-animate"
                            style={{
                                padding: "14px 32px",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "1rem",
                            }}
                        >
                            <span>
                                Book your free consultation →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>



            <section style={{ padding: "5rem 1.25rem", backgroundColor: "white" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                        fontWeight: 500,
                        color: "#0d1117",
                        marginBottom: "2rem",
                        letterSpacing: "-0.01em",
                        textAlign: "center"
                    }}>
                        Audit software built by auditors who understand the standard
                    </h2>
                    
                    <p style={{
                        fontSize: "1.1rem",
                        color: "#4b5563",
                        lineHeight: 1.6,
                        marginBottom: "3rem",
                        textAlign: "center"
                    }}>
                        iAudit Global was built by certified ISO auditors with over 20 years of experience conducting environmental management system audits. We know what works in practice, and what doesn't.
                    </p>

                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#111827", marginBottom: "2rem", textAlign: "center" }}>
                        What makes us different:
                    </h3>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
                        <div>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#058c42", marginBottom: "0.5rem" }}>PDCA-driven audits</h4>
                            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.5 }}>
                                Audits aren't one-off events. iAudit follows Plan–Do–Check–Act so findings link to corrective actions, actions link to verification, and improvement is continuous.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#058c42", marginBottom: "0.5rem" }}>Evidence capture + dashboards</h4>
                            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.5 }}>
                                Capture audit evidence on-site (photos, notes, observations), track findings across sites and standards, and see trends before they become systemic problems.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#058c42", marginBottom: "0.5rem" }}>Multi-standard support</h4>
                            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.5 }}>
                                Run ISO 9001, ISO 14001 and ISO 45001 audits in one platform with consistent workflows, centralised findings and integrated reporting.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#058c42", marginBottom: "0.5rem" }}>Zero-access data policy</h4>
                            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.5 }}>
                                Your audit findings, evidence and reports stay with your organisation. We host the platform, but we cannot view, mine or inspect your data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "#0d1117", padding: isMobile ? "4rem 1.25rem" : "5rem 1.25rem", color: "white" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{
                        fontSize: isMobile ? "1.8rem" : "2.5rem",
                        fontWeight: 500,
                        marginBottom: "3rem",
                        letterSpacing: "-0.01em"
                    }}>
                        Three steps to transition clarity
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", marginBottom: "4rem", textAlign: "left" }}>
                        <div>
                            <div style={{ color: "#058c42", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "1rem", letterSpacing: "0.1em" }}>Step 1</div>
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem" }}>Book a free call</h3>
                            <p style={{ color: "#9ca3af", lineHeight: 1.6 }}>
                                Choose a time that works for you. The session takes 20–30 minutes.
                            </p>
                        </div>
                        <div>
                            <div style={{ color: "#058c42", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "1rem", letterSpacing: "0.1em" }}>Step 2</div>
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem" }}>Share your current setup</h3>
                            <p style={{ color: "#9ca3af", lineHeight: 1.6 }}>
                                If you'd like, send us your current audit plan or a recent audit report in advance. If not, we'll work from the conversation.
                            </p>
                        </div>
                        <div>
                            <div style={{ color: "#058c42", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "1rem", letterSpacing: "0.1em" }}>Step 3</div>
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem" }}>Get a clear transition plan</h3>
                            <p style={{ color: "#9ca3af", lineHeight: 1.6 }}>
                                Within 5 working days, you'll receive a written summary with priorities, recommended checklist updates, and next steps tailored to your organisation.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="https://calendly.com/"
                        className="btn-animate"
                        style={{
                            padding: "16px 36px",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "1.05rem",
                            display: "inline-block"
                        }}
                    >
                        <span>
                            Book your free consultation →
                        </span>
                    </Link>
                </div>
            </section>

            <section id="consultation" style={{ padding: isMobile ? "4rem 1.25rem" : "5rem 1.25rem", backgroundColor: "#f8fafc" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{
                        fontSize: isMobile ? "1.8rem" : "2.5rem",
                        fontWeight: 500,
                        color: "#0d1117",
                        marginBottom: "1.5rem",
                        letterSpacing: "-0.01em"
                    }}>
                        Book your free ISO 14001:2026 transition consultation
                    </h2>
                    <p style={{
                        fontSize: "1.1rem",
                        color: "#4b5563",
                        maxWidth: "700px",
                        margin: "0 auto 3rem",
                        lineHeight: 1.6
                    }}>
                        Select a convenient time below for a 30-minute call with our ISO auditors. We'll review your current setup, clarify what's changed in the 2026 edition, and give you a clear plan to stay ahead of the transition window.
                    </p>

                    <div style={{ textAlign: "center" }}>
                        <Link
                            href="https://calendly.com/"
                            className="btn-animate"
                            style={{
                                padding: "16px 40px",
                                borderRadius: "8px",
                                fontWeight: 600,
                                fontSize: "1.1rem",
                                display: "inline-block"
                            }}
                        >
                            <span>
                                Schedule your call on Calendly →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Audit Mate Section */}
            <section style={{
                width: '100%',
                padding: isMobile ? '4rem 1.25rem' : '5rem 2rem',
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
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#058c42',
                                fontWeight: 500,
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                padding: '4px 0'
                            }}
                        >
                            <span style={{ fontSize: '1rem' }}>✦</span>
                            Audit Mate for ISO 14001:2026
                            <span style={{ fontSize: '1rem' }}>✦</span>
                        </motion.div>
                        
                        <motion.h2 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            style={{
                                fontSize: isMobile ? '1.8rem' : '2.75rem',
                                fontWeight: 500,
                                color: '#111827',
                                letterSpacing: '-0.02em',
                                margin: '0 auto 1.5rem auto',
                                maxWidth: '800px',
                                lineHeight: 1.15
                            }}
                        >
                            Meet Audit Mate – Your AI Assistant for ISO 14001 Transition
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            style={{
                                fontSize: '1.1rem',
                                color: '#4b5563',
                                maxWidth: '700px',
                                lineHeight: 1.6,
                                margin: '0 auto'
                            }}
                        >
                            Generate clause-mapped ISO 14001:2026 checklists instantly. Audit faster. Stay consistent across sites.
                        </motion.p>
                    </div>

                    {/* Animated Cards Container */}
                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '280px' : '350px'}, 1fr))`,
                        gap: '2rem',
                        position: 'relative',
                        maxWidth: '960px',
                        margin: '0 auto'
                    }}>
                        
                        {/* Left Panel - Chat */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            style={{
                                background: '#004d40',
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
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', padding: '2px' }}>
                                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#f8fafc', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg viewBox="0 0 100 100" fill="none" width="100%" height="100%"><rect width="100" height="100" fill="#e2e8f0"/><circle cx="50" cy="35" r="20" fill="#94a3b8"/><path d="M15 85c0-12 15-22 35-22s35 10 35 22" stroke="#94a3b8" strokeWidth="10"/></svg>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Audit Mate</div>
                                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>AI transition agent</div>
                                    </div>
                                </div>
                                <div style={{ color: 'rgba(255,255,255,0.4)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                </div>
                            </div>

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
                                        Ready to transition your Environmental Management System to the 2026 edition. Where should we start?
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    style={{ background: '#f87171', borderRadius: '12px 12px 2px 12px', padding: '16px 20px', maxWidth: '85%', alignSelf: 'flex-end', boxShadow: '0 8px 16px rgba(248, 113, 113, 0.2)' }}
                                >
                                    <div style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                        Can you mapping my current Clause 4 goals to the 2026 requirements?
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
                                        Mapping complete. I've highlighted three gaps in your Context of the Organisation section.
                                    </div>
                                </motion.div>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.2)', borderTopColor: '#ffffff', borderRadius: '50%' }}
                                />
                                <div style={{ color: '#ffffff', fontSize: '0.9rem', opacity: 0.8 }}>Syncing environmental records...</div>
                            </div>
                        </motion.div>

                        {/* Right Panel - Checklists */}
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
                                boxShadow: '0 20px 60px rgba(0, 30, 25, 0.4)'
                            }}
                        >
                            <div style={{ position: 'relative', width: isMobile ? '100%' : '320px', maxWidth: '320px', display: 'flex', flexDirection: 'column', marginTop: '1rem', zIndex: 1 }}>
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
                                    <div style={{ fontSize: '1.05rem', fontWeight: 500 }}>Transition Checklists</div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                </div>

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
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>ISO 14001:2026 Checklist</div>
                                            <div style={{ fontSize: '0.75rem', color: '#004d40', fontWeight: 500 }}>All Clauses Mapped</div>
                                        </div>
                                    </div>
                                    <div style={{ background: '#e0f2f1', color: '#004d40', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>Ready</div>
                                </motion.div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px 10px', marginTop: '10px', zIndex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155' }}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Waste Management Audit</div>
                                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Updated Clause 8.1</div>
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#004d40' }}>100%</div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', border: '1px solid #e2e8f0' }}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Environmental Objectives</div>
                                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Clause 6.2 Review</div>
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#004d40' }}>Ready</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', zIndex: 1 }}>
                                    <Link href="https://apps.iaudit.global" className="btn-animate" style={{
                                        padding: '12px 32px',
                                        borderRadius: '30px',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        textDecoration: 'none',
                                    }}>
                                        <span>Try Audit Mate free</span>
                                    </Link>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </section>

            {/* Trial Section */}
            <section style={{ 
                padding: isMobile ? "4rem 1.25rem" : "6rem 1.25rem", 
                backgroundColor: "#f9fafb",
                borderTop: "1px solid #f3f4f6",
                fontFamily: '"Pp Neue Montreal", sans-serif'
            }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 style={{
                            fontSize: isMobile ? "1.8rem" : "2.75rem",
                            fontWeight: 500,
                            color: "#111827",
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.02em"
                        }}>
                            Prefer to start hands-on? Try iAudit free for 14 days
                        </h2>
                        <p style={{
                            fontSize: "1.15rem",
                            color: "#4b5563",
                            maxWidth: "700px",
                            margin: "0 auto 4rem",
                            lineHeight: 1.6
                        }}>
                            If you’d rather test the platform immediately, start a 14-day free trial (no card required). Experience how easy it is to manage your transition data.
                        </p>
                    </motion.div>

                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))", 
                        gap: "1.5rem", 
                        marginBottom: "4rem" 
                    }}>
                        {[
                            "Gap Analysis",
                            "Self Assessment",
                            "Findings Dashboard",
                            "Data Analytics Summary",
                            "Report Download"
                        ].map((item, idx) => (
                            <motion.div 
                                key={item}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                style={{
                                    background: "white",
                                    padding: "1.5rem",
                                    borderRadius: "16px",
                                    border: "1px solid #f3f4f6",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "0.75rem"
                                }}
                            >
                                <div style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    background: "rgba(5, 140, 66, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#058c42"
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#111827" }}>{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Link
                            href="https://apps.iaudit.global/"
                            className="btn-animate"
                            style={{
                                padding: "18px 48px",
                                borderRadius: "12px",
                                fontWeight: 600,
                                fontSize: "1.1rem",
                                display: "inline-block",
                                boxShadow: "0 15px 30px -10px rgba(5, 140, 66, 0.3)"
                            }}
                        >
                            <span>
                                Start 14-day free trial →
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section style={{
                width: '100%',
                padding: isMobile ? '4rem 1.25rem' : '6rem 2rem',
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
                    {/* Sparkle Tag */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#058c42',
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            marginBottom: '1rem'
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>✦</span>
                        Transition FAQ
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        style={{
                            fontSize: isMobile ? '1.8rem' : '3rem',
                            fontWeight: 500,
                            color: '#111827',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.15,
                            margin: '0 0 3.5rem 0',
                            textAlign: 'center'
                        }}
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    {/* FAQ Items */}
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            {
                                question: "What does the ISO 14001:2026 transition consultation include?",
                                answer: "A 30-minute call to review your current ISO 14001 audit approach, identify gaps against the 2026 edition, and provide practical recommendations for checklist updates, audit planning and evidence management. You'll receive a written summary within 5 working days."
                            },
                            {
                                question: "How long does transition preparation typically take?",
                                answer: "It depends on your current maturity and the size of your organisation. Most teams benefit from starting 12–18 months before their next certification audit. Early preparation reduces pressure and gives you time to embed changes across sites."
                            },
                            {
                                question: "Do you support integrated audits with ISO 9001 and ISO 45001?",
                                answer: "Yes. iAudit Global supports ISO 9001, ISO 14001 and ISO 45001 in one platform, so you can run integrated audits, track findings across standards, and manage multi-standard programmes without duplicating effort."
                            },
                            {
                                question: "What's changed in ISO 14001:2026?",
                                answer: "The 2026 edition strengthens expectations around leadership accountability, climate and biodiversity considerations, value chain impacts, and performance measurement. The structure is clearer, guidance is more practical, and alignment with other ISO management system standards is tighter."
                            },
                            {
                                question: "Do we need to change all our documentation immediately?",
                                answer: "No. You have a three-year transition window. The priority is understanding what's changed, updating your audit programme and internal checklists, and building competence across your team. Documentation updates can be phased."
                            },
                            {
                                question: "How is our audit data handled during the consultation?",
                                answer: "We operate a strict zero-access policy. Any information you share during the consultation remains confidential. If you use iAudit Global, your audit findings and evidence are encrypted and stored in your account – we cannot view, mine or inspect them."
                            },
                            {
                                question: "Is there any obligation after the free consultation?",
                                answer: "No. The consultation is genuinely free with no obligation. If you want ongoing support or to try iAudit Global, we'll explain the options – but there's no pressure."
                            }
                        ].map((item, idx) => (
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
                                    transform: openFaqIndex === idx ? 'translateY(-2px)' : 'translateY(0)',
                                    border: '1px solid #f3f4f6'
                                }}
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '24px 32px',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left'
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
                                        flexShrink: 0
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
                                                borderTop: '1px solid #f3f4f6',
                                                margin: '0 32px',
                                                padding: '20px 0 28px 0'
                                            }}>
                                                <p style={{
                                                    fontSize: '1.05rem',
                                                    color: '#4b5563',
                                                    lineHeight: 1.7,
                                                    margin: 0
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
            </section>
            <Footer />
        </>
    );
}
