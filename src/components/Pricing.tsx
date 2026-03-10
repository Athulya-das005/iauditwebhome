"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CorporateIllustration from './CorporateIllustration';

type Currency = "USD" | "GBP";
type BillingCycle = "monthly" | "contract";
type ContractLength = 1 | 3 | 6;

export default function Pricing() {
    const [currency, setCurrency] = useState<Currency>("USD");
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("contract");
    const [contractLength, setContractLength] = useState<ContractLength>(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const plans = [
        {
            name: "Free",
            isoPlans: 1,
            isFree: true,
            monthlyPrices: { USD: 0, GBP: 0 },
            contractPrices: {
                1: { USD: 0, GBP: 0 },
                3: { USD: 0, GBP: 0 },
                6: { USD: 0, GBP: 0 }
            },
            features: [
                "Gap Analysis",
                "Self Assessment",
                "Findings Dashboard",
                "Data Analytics Summary",
                "Report Download"
            ]
        },
        {
            name: "Unos",
            isoPlans: 1,
            monthlyPrices: { USD: 29, GBP: 22 },
            contractPrices: {
                1: { USD: 15.60, GBP: 12.60 },
                3: { USD: 11.60, GBP: 8.60 },
                6: { USD: 7.60, GBP: 5.60 }
            },
            features: [
                "NC Register",
                "Unlimited audits (1 ISO)",
                "Excel, PDF & Word Reports",
                "Role based accesses",
                "Schedule, track & manage audits",
                "Audit mate AI",
                "Audit Evidence Capture"
            ]
        },
        {
            name: "Dos",
            isoPlans: 2,
            monthlyPrices: { USD: 99, GBP: 75 },
            contractPrices: {
                1: { USD: 25.90, GBP: 20.90 },
                3: { USD: 22.90, GBP: 17.90 },
                6: { USD: 18.90, GBP: 14.90 }
            },
            features: [
                "All features of Starter",
                "Multi-site audits (2 ISO)",
                "NC Dashboards",
                "Priority Email Support",
                "Multi-site Dashboards"
            ],
            highlight: true
        },
        {
            name: "Tres",
            isoPlans: 3,
            monthlyPrices: { USD: 299, GBP: 225 },
            contractPrices: {
                1: { USD: 30.10, GBP: 25.10 },
                3: { USD: 25.10, GBP: 21.10 },
                6: { USD: 21.10, GBP: 17.10 }
            },
            features: [
                "AI features of Advanced",
                "Up to 10 sites (3 ISO)",
                "Audit Performance Analytics",
                "Custom Checklists",
                "Dedicated Account Manager"
            ]
        }
    ];

    return (
        <section id="pricing" style={{
            padding: isMobile ? "3.5rem 0" : "5rem 0",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif',
            overflow: "hidden"
        }}>
            <div className="container" style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3.5rem' }}>
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
                        Pricing
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: isMobile ? '2.2rem' : '3.2rem',
                            fontWeight: 500,
                            color: '#111827',
                            letterSpacing: '-0.02em',
                            marginBottom: '1rem',
                            lineHeight: 1.1
                        }}
                    >
                        Choose Your Perfect Plan
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            fontSize: isMobile ? '0.95rem' : '1.05rem',
                            color: '#4B5563',
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontWeight: 400,
                            lineHeight: 1.5,
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Start with a 14-day free trial. No credit card required. Upgrade or downgrade anytime.
                    </motion.p>

                    {/* Currency and Billing Selector */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '1rem' : '1.5rem', marginTop: isMobile ? '2rem' : '2.5rem' }}>
                        {/* Currency Toggle */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'inline-flex',
                                backgroundColor: '#F9FAF8',
                                padding: '4px',
                                borderRadius: '0.75rem',
                                border: '1px solid #E5E7EB'
                            }}
                        >
                            <button
                                onClick={() => setCurrency("USD")}
                                style={{
                                    padding: isMobile ? '6px 16px' : '8px 20px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    backgroundColor: currency === "USD" ? "#006644" : "transparent",
                                    color: currency === "USD" ? "#fff" : "#6B7280",
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                $ USD
                            </button>
                            <button
                                onClick={() => setCurrency("GBP")}
                                style={{
                                    padding: isMobile ? '6px 16px' : '8px 20px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    backgroundColor: currency === "GBP" ? "#006644" : "transparent",
                                    color: currency === "GBP" ? "#fff" : "#6B7280",
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                            >
                                £ GBP
                            </button>
                        </motion.div>

                        {/* Contract Selector Label */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            backgroundColor: 'rgba(0,102,68,0.05)',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            border: '1px solid rgba(0,102,68,0.1)'
                        }}>
                            <span style={{
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: '#006644'
                            }}>
                                Contract Billing
                            </span>
                        </div>

                        {/* Contract Length Selector */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                            }}
                        >
                            {[1, 3, 6].map((length) => (
                                <button
                                    key={length}
                                    onClick={() => setContractLength(length as ContractLength)}
                                    style={{
                                        padding: isMobile ? '6px 14px' : '8px 22px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        boxShadow: length === 6
                                            ? (contractLength === 6 ? '0 10px 25px rgba(255, 215, 0, 0.5)' : '0 8px 15px rgba(255, 215, 0, 0.3)')
                                            : (contractLength === length ? '0 10px 20px rgba(0, 102, 68, 0.15)' : 'none'),
                                        transform: contractLength === length ? 'scale(1.05)' : (length === 6 ? 'scale(1.02)' : 'none'),
                                        border: '2px solid',
                                        backgroundColor: contractLength === length ? '#006644' : (length === 6 ? '#FFFAEA' : '#fff'),
                                        color: contractLength === length ? '#fff' : (length === 6 ? '#B8860B' : '#6B7280'),
                                        borderColor: contractLength === length ? '#006644' : (length === 6 ? '#FFD700' : '#E5E7EB'),
                                    }}
                                >
                                    {length} Year{length > 1 ? 's' : ''}
                                </button>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
                    gap: isMobile ? '1.5rem' : '1.5rem'
                }}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: isMobile ? 0 : index * 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            style={{
                                padding: isMobile ? '2rem 1.25rem' : '2.5rem 1.5rem',
                                borderRadius: '1.5rem',
                                border: plan.highlight ? '2px solid #058c42' : '1px solid #E5E7EB',
                                backgroundColor: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                boxShadow: plan.highlight ? '0 20px 50px rgba(0, 102, 68, 0.05)' : 'none',
                                color: 'inherit'
                            }}
                            whileHover={!isMobile ? {
                                y: -8,
                                borderColor: plan.highlight ? '#058c42' : '#006644',
                                boxShadow: '0 30px 60px rgba(0, 102, 68, 0.08)'
                            } : {}}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 500,
                                    color: '#111827',
                                    letterSpacing: '-0.02em',
                                    margin: 0
                                }}>
                                    {plan.name}
                                </h3>
                            </div>

                            <div style={{
                                fontSize: '0.9rem',
                                color: '#6B7280',
                                marginBottom: '2rem',
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '4px'
                            }}>
                                <motion.span
                                    key={`${billingCycle}-${contractLength}-${currency}`}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        fontSize: '2.2rem',
                                        fontWeight: 500,
                                        color: '#111827',
                                        letterSpacing: '-0.03em'
                                    }}
                                >
                                    {currency === "USD" ? "$" : "£"}
                                    {plan.isFree ? "0" : plan.contractPrices[contractLength as ContractLength][currency].toFixed(2)}
                                </motion.span>
                                <span style={{ opacity: 0.7 }}>/mo per user</span>
                            </div>

                            <Link
                                href="https://apps.iaudit.global"
                                className={plan.highlight ? "btn-animate" : "btn-outline-animate"}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    marginBottom: '2.5rem',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span>{plan.isFree ? "Start for Free" : "Get Started"}</span>
                            </Link>

                            <ul style={{
                                marginTop: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.85rem',
                                padding: 0
                            }}>
                                {plan.features.map((feature) => (
                                    <li key={feature} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '10px',
                                        fontSize: '0.85rem',
                                        color: '#4B5563',
                                        fontWeight: 400
                                    }}>
                                        <div style={{
                                            width: '18px',
                                            height: '18px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(0, 102, 68, 0.08)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            marginTop: '2px'
                                        }}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span style={{ color: '#4B5563', lineHeight: 1.4 }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '3rem',
                        marginBottom: '3rem',
                        fontSize: '0.85rem',
                        color: '#6B7280',
                        fontWeight: 400
                    }}
                >
                    All plans include audit templates, findings management, and compliance tracking
                </motion.p>

                {/* Corporate or Consultant Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        padding: isMobile ? '2rem 1.25rem' : '2rem 3.5rem',
                        backgroundColor: '#F3F4F6',
                        borderRadius: '1.25rem',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: isMobile ? '2rem' : '3rem',
                        boxShadow: '0 25px 60px rgba(0, 102, 68, 0.2)',
                        border: '1px solid #E5E7EB',
                        maxWidth: '1020px',
                        margin: '0 auto'
                    }}
                    whileHover={{
                        boxShadow: '0 35px 70px rgba(0, 102, 68, 0.28)',
                    }}
                >
                    <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                        <h2 style={{
                            fontSize: isMobile ? '1.5rem' : '1.9rem',
                            fontWeight: 500,
                            color: '#111827',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                            whiteSpace: isMobile ? 'normal' : 'nowrap'
                        }}>
                            Are you a Corporate or Consultant?
                        </h2>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <Link
                                href="/contact"
                                className="btn-animate"
                                style={{
                                    padding: '0.85rem 2.25rem',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <span>Contact sales</span>
                            </Link>
                            <Link
                                href="/about"
                                className="btn-outline-animate"
                                style={{
                                    padding: '0.85rem 2.25rem',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <span>Know more</span>
                            </Link>
                        </div>
                    </div>
                    <div style={{
                        flex: isMobile ? 'none' : '0 1 350px',
                        width: isMobile ? '100%' : 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        minHeight: isMobile ? '200px' : '260px'
                    }}>
                        <CorporateIllustration isMobile={isMobile} />
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
