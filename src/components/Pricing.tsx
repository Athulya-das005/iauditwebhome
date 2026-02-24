"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Currency = "USD" | "GBP";

export default function Pricing() {
    const [currency, setCurrency] = useState<Currency>("USD");

    const plans = [
        {
            name: "Starter",
            prices: { USD: 29, GBP: 22 },
            features: [
                "Priority email support",
                "Data export (CSV/PDF)",
                "Advanced reporting",
                "All Free Trial features",
                "Custom audit templates"
            ]
        },
        {
            name: "Professional",
            prices: { USD: 99, GBP: 75 },
            features: [
                "Phone support",
                "All Starter features",
                "Team collaboration tools",
                "Custom workflows",
                "Multiple companies",
                "White-label reports",
                "API access"
            ],
            highlight: true
        },
        {
            name: "Enterprise",
            prices: { USD: 299, GBP: 225 },
            features: [
                "Advanced security features",
                "Priority feature requests",
                "Training sessions",
                "SLA guarantee (99.9% uptime)",
                "Custom integrations",
                "Dedicated account manager",
                "Unlimited sites",
                "Unlimited audits",
                "Unlimited users",
                "Unlimited companies",
                "All Professional features"
            ]
        }
    ];

    return (
        <section id="pricing" style={{
            padding: "120px 0 40px",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            color: '#00A651',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            display: 'block',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        Pricing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                            fontWeight: 500,
                            color: '#000',
                            letterSpacing: '-0.04em',
                            marginBottom: '1.5rem',
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
                            fontSize: '1.25rem',
                            color: '#6B7280',
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontWeight: 400,
                            lineHeight: 1.5,
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Start with a 14-day free trial. No credit card required. Upgrade or downgrade anytime.
                    </motion.p>

                    {/* Currency Switcher */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            marginTop: '40px',
                            display: 'inline-flex',
                            backgroundColor: '#F8F9FA',
                            padding: '6px',
                            borderRadius: '0.75rem',
                            border: '1px solid #E5E7EB'
                        }}
                    >
                        <button
                            onClick={() => setCurrency("USD")}
                            style={{
                                padding: '10px 24px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                borderRadius: '0.5rem',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                backgroundColor: currency === "USD" ? "#00A651" : "transparent",
                                color: currency === "USD" ? "#fff" : "#94A3B8",
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            $ USD
                        </button>
                        <button
                            onClick={() => setCurrency("GBP")}
                            style={{
                                padding: '10px 24px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                borderRadius: '0.5rem',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                backgroundColor: currency === "GBP" ? "#00A651" : "transparent",
                                color: currency === "GBP" ? "#fff" : "#94A3B8",
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            £ GBP
                        </button>
                    </motion.div>
                </div>

                {/* Pricing Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px'
                }}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                padding: '48px',
                                borderRadius: '2rem',
                                border: '1px solid #E5E7EB',
                                backgroundColor: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                boxShadow: plan.highlight ? '0 30px 60px -15px rgba(0,0,0,0.05)' : 'none'
                            }}
                            whileHover={{
                                y: -12,
                                borderColor: '#00A651',
                                boxShadow: '0 40px 80px -20px rgba(0, 166, 81, 0.1)'
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: 500,
                                marginBottom: '1.5rem',
                                color: '#111827',
                                letterSpacing: '-0.02em'
                            }}>
                                {plan.name}
                            </h3>

                            <div style={{
                                fontSize: '1.1rem',
                                color: '#6B7280',
                                marginBottom: '2.5rem',
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '4px'
                            }}>
                                <span style={{
                                    fontSize: '3rem',
                                    fontWeight: 500,
                                    color: '#111827',
                                    marginTop: '0.5rem',
                                    letterSpacing: '-0.03em'
                                }}>
                                    {currency === "USD" ? "$" : "£"}{plan.prices[currency]}
                                </span>
                                <span style={{ opacity: 0.7 }}>/ per month</span>
                            </div>

                            <Link
                                href="#"
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    textAlign: 'center',
                                    borderRadius: '0.75rem',
                                    border: '1px solid #E5E7EB',
                                    fontSize: '1.05rem',
                                    fontWeight: 500,
                                    color: '#111827',
                                    marginBottom: '3rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = '#00A651';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = '#00A651';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#111827';
                                    e.currentTarget.style.borderColor = '#E5E7EB';
                                }}
                            >
                                Get Started
                            </Link>

                            <ul style={{
                                marginTop: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem'
                            }}>
                                {plan.features.map((feature) => (
                                    <li key={feature} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        fontSize: '1rem',
                                        color: '#4B5563',
                                        fontWeight: 400
                                    }}>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(0, 166, 81, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span>{feature}</span>
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
                        marginTop: '40px',
                        fontSize: '0.95rem',
                        color: '#94A3B8',
                        fontWeight: 400
                    }}
                >
                    All plans include audit templates, findings management, and compliance tracking
                </motion.p>
            </div>
        </section>
    );
}
