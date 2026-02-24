"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        quote: "iAudit helped us standardize audit execution across 12 locations. Our reporting time dropped by 60%.",
        author: "Priya Menon",
        role: "Head of Internal Audit",
        company: "Acme Manufacturing",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        color: "#00A651",
        batch: "Verified Audit Expert"
    },
    {
        quote: "The findings workflow and corrective action tracking are game changers for our compliance team.",
        author: "Daniel Gomez",
        role: "Compliance Manager",
        company: "FinTrust Bank",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        color: "#0d9488",
        batch: "Verified Auditor"
    },
    {
        quote: "Templates and analytics gave us visibility we never had. Our audit cycle is both faster and better documented.",
        author: "Amira El-Sayed",
        role: "QA Lead",
        company: "Global Pharma Co.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        color: "#1e1b4b",
        batch: "Certified Lead Auditor"
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextStep = useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevStep = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextStep, 8000);
        return () => clearInterval(timer);
    }, [nextStep]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0,
            scale: 0.98
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 200 : -200,
            opacity: 0,
            scale: 0.98
        })
    };

    return (
        <section id="testimonials" style={{
            padding: "60px 0 160px",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif',
            overflow: "hidden",
            position: "relative"
        }}>
            {/* Side Masks (Breaking Bars) */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "20%",
                height: "100%",
                background: "linear-gradient(to right, #fff 20%, transparent 100%)",
                zIndex: 15,
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "20%",
                height: "100%",
                background: "linear-gradient(to left, #fff 20%, transparent 100%)",
                zIndex: 15,
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", position: "relative" }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            color: '#00A651',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            marginBottom: '1.2rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        ✦ Testimonials ✦
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
                            fontWeight: 500,
                            color: '#111827',
                            letterSpacing: '-0.02em',
                            margin: 0,
                            maxWidth: "800px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            lineHeight: 1.2
                        }}
                    >
                        Trusted by ISO audit professionals
                    </motion.h2>
                </div>

                <div style={{ position: "relative", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* Background Avatars (Clear and Sharp) */}
                    <div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
                        <motion.img
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120&h=120"
                            style={{ position: "absolute", left: "2%", top: "10%", width: "110px", height: "110px", borderRadius: "50%", border: "1px solid #e5e7eb", boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                        />
                        <motion.img
                            animate={{ y: [0, 18, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100"
                            style={{ position: "absolute", right: "4%", top: "25%", width: "100px", height: "100px", borderRadius: "50%", border: "1px solid #e5e7eb", boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                        />
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=90&h=90"
                            style={{ position: "absolute", left: "10%", bottom: "10%", width: "85px", height: "85px", borderRadius: "50%", border: "1px solid #e5e7eb", boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                        />
                        <motion.img
                            animate={{ y: [0, 22, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=95&h=95"
                            style={{ position: "absolute", right: "2%", bottom: "15%", width: "95px", height: "95px", borderRadius: "50%", border: "1px solid #e5e7eb", boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevStep}
                        style={{
                            position: "absolute",
                            left: "0",
                            zIndex: 20,
                            background: "#fff",
                            border: "1px solid #E5E7EB",
                            width: "56px",
                            height: "56px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            transition: "background-color 0.2s ease"
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextStep}
                        style={{
                            position: "absolute",
                            right: "0",
                            zIndex: 20,
                            background: "#fff",
                            border: "1px solid #E5E7EB",
                            width: "56px",
                            height: "56px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            transition: "background-color 0.2s ease"
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </motion.button>

                    {/* Central Testimonial Slider Area */}
                    <div style={{ position: "relative", width: "100%", maxWidth: "880px", overflow: "hidden" }}>
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 100, damping: 20 },
                                    opacity: { duration: 0.6 },
                                    scale: { duration: 0.6 }
                                }}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    width: "100%",
                                    padding: "40px 20px"
                                }}
                            >
                                <div style={{
                                    width: "140px",
                                    height: "140px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    marginBottom: "32px",
                                    border: `8px solid #f9fafb`,
                                    outline: `1px solid #e5e7eb`,
                                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
                                    background: "#fff"
                                }}>
                                    <img
                                        src={testimonials[index].avatar}
                                        alt={testimonials[index].author}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>

                                <div style={{ display: "flex", gap: "6px", marginBottom: "32px" }}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="#FF7A50">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>

                                <p style={{
                                    fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                                    color: "#374151",
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    marginBottom: "40px",
                                    fontStyle: "normal",
                                    letterSpacing: "-0.01em",
                                    maxWidth: "700px"
                                }}>
                                    "{testimonials[index].quote}"
                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827", margin: 0 }}>
                                        {testimonials[index].author}
                                    </h4>
                                    <p style={{ fontSize: "0.95rem", color: "#6B7280", margin: 0, fontWeight: 500 }}>
                                        {testimonials[index].role} • {testimonials[index].company}
                                    </p>
                                    <p style={{ fontSize: "0.85rem", color: "#9CA3AF", margin: "6px 0 0 0", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                        {testimonials[index].batch}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
