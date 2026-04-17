"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    heading?: string;
    sparkleText?: string;
}

export default function FAQAccordion({ 
    items, 
    heading = "Frequently Asked Questions", 
    sparkleText = "FAQ" 
}: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section style={{
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
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#006644',
                        fontWeight: 500,
                        fontSize: '1rem',
                        marginBottom: '1rem'
                    }}
                >
                    <span style={{ fontSize: '1rem' }}>✦</span>
                    {sparkleText}
                    <span style={{ fontSize: '1rem' }}>✦</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    style={{
                        fontSize: isMobile ? '2.2rem' : '3rem',
                        fontWeight: 500,
                        color: '#111827',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        margin: '0 0 3.5rem 0',
                        textAlign: 'center'
                    }}
                >
                    {heading}
                </motion.h2>

                {/* FAQ Accordion Items */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {items.map((item, idx) => (
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
                                boxShadow: openIndex === idx 
                                    ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
                                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                transform: openIndex === idx ? 'translateY(-2px)' : 'translateY(0)'
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
                                    padding: isMobile ? '24px 20px' : '28px 32px',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontFamily: '"Pp Neue Montreal", sans-serif'
                                }}
                            >
                                <span style={{
                                    fontSize: isMobile ? '1rem' : '1.15rem',
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
                                            transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)'
                                        }}
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </div>
                            </button>

                            {/* Answer Content with smooth animation */}
                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{
                                            borderTop: '1px solid #e5e7eb',
                                            margin: isMobile ? '0 20px' : '0 32px',
                                            padding: '20px 0 28px 0'
                                        }}>
                                            <p style={{
                                                fontSize: isMobile ? '0.95rem' : '1.05rem',
                                                color: '#6b7280',
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
    );
}
