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
        color: "#058c42",
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
            x: direction > 0 ? (isMobile ? 100 : 200) : (isMobile ? -100 : -200),
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
            x: direction < 0 ? (isMobile ? 100 : 200) : (isMobile ? -100 : -200),
            opacity: 0,
            scale: 0.98
        })
    };

    return (
        <section id="testimonials" style={{
            padding: isMobile ? "3rem 0" : "3.5rem 0 4rem",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif',
            overflow: "hidden",
            position: "relative"
        }}>
            {/* Side Masks (Breaking Bars) - Hidden/Reduced on Mobile */}
            {!isMobile && (
                <>
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "15%",
                        height: "100%",
                        background: "linear-gradient(to right, #fff 20%, transparent 100%)",
                        zIndex: 15,
                        pointerEvents: "none"
                    }} />
                    <div style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "15%",
                        height: "100%",
                        background: "linear-gradient(to left, #fff 20%, transparent 100%)",
                        zIndex: 15,
                        pointerEvents: "none"
                    }} />
                </>
            )}

            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem", position: "relative" }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '3.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            color: '#006644',
                            fontSize: isMobile ? '0.75rem' : '0.82rem',
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                            marginBottom: '0.75rem'
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>✦</span>
                        Testimonials
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: isMobile ? '1.85rem' : '2.8rem',
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
                        Trusted By ISO Audit Professionals
                    </motion.h2>
                </div>

                <div style={{ position: "relative", minHeight: isMobile ? "440px" : "520px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* Background Avatars - Reduced and repositioned on mobile */}
                    <div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
                        <motion.img
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120&h=120"
                            style={{
                                position: "absolute",
                                left: isMobile ? "5%" : "2%",
                                top: isMobile ? "0%" : "5%",
                                width: isMobile ? "60px" : "90px",
                                height: isMobile ? "60px" : "90px",
                                borderRadius: "50%",
                                border: "1px solid #f3f4f6",
                                boxShadow: "0 8px 16px rgba(0,0,0,0.06)",
                                opacity: isMobile ? 0.4 : 1
                            }}
                        />
                        <motion.img
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100"
                            style={{
                                position: "absolute",
                                right: isMobile ? "5%" : "2%",
                                top: isMobile ? "5%" : "15%",
                                width: isMobile ? "54px" : "80px",
                                height: isMobile ? "54px" : "80px",
                                borderRadius: "50%",
                                border: "1px solid #f3f4f6",
                                boxShadow: "0 8px 16px rgba(0,0,0,0.06)",
                                opacity: isMobile ? 0.4 : 1
                            }}
                        />
                        {!isMobile && (
                            <>
                                <motion.img
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=90&h=90"
                                    style={{ position: "absolute", left: "6%", bottom: "5%", width: "70px", height: "70px", borderRadius: "50%", border: "1px solid #f3f4f6", boxShadow: "0 8px 16px rgba(0,0,0,0.06)" }}
                                />
                                <motion.img
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=95&h=95"
                                    style={{ position: "absolute", right: "4%", bottom: "10%", width: "75px", height: "75px", borderRadius: "50%", border: "1px solid #f3f4f6", boxShadow: "0 8px 16px rgba(0,0,0,0.06)" }}
                                />
                            </>
                        )}
                    </div>

                    {/* Navigation Arrows - Better positioned on mobile */}
                    <div style={{
                        position: "absolute",
                        bottom: isMobile ? "-20px" : "auto",
                        width: isMobile ? "120px" : "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        zIndex: 25
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevStep}
                            style={{
                                position: isMobile ? "static" : "absolute",
                                left: isMobile ? "auto" : "-1rem",
                                background: "#fff",
                                border: "1px solid #E5E7EB",
                                width: isMobile ? "44px" : "48px",
                                height: isMobile ? "44px" : "48px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                transition: "all 0.2s ease"
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextStep}
                            style={{
                                position: isMobile ? "static" : "absolute",
                                right: isMobile ? "auto" : "-1rem",
                                background: "#fff",
                                border: "1px solid #E5E7EB",
                                width: isMobile ? "44px" : "48px",
                                height: isMobile ? "44px" : "48px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                transition: "all 0.2s ease"
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </motion.button>
                    </div>

                    {/* Central Testimonial Slider Area */}
                    <div style={{ position: "relative", width: "100%", maxWidth: "800px", overflow: "hidden" }}>
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
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.5 }
                                }}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    width: "100%",
                                    padding: isMobile ? "1rem 0.5rem" : "2rem 1rem"
                                }}
                            >
                                <div style={{
                                    width: isMobile ? "90px" : "120px",
                                    height: isMobile ? "90px" : "120px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    marginBottom: isMobile ? "1rem" : "1.5rem",
                                    border: `6px solid #f9fafb`,
                                    outline: `1px solid #e5e7eb`,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                                    background: "#fff"
                                }}>
                                    <img
                                        src={testimonials[index].avatar}
                                        alt={testimonials[index].author}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>

                                <div style={{ display: "flex", gap: "0.2rem", marginBottom: isMobile ? "1rem" : "1.5rem" }}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="#006644" style={{ opacity: 0.85 }}>
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>

                                <p style={{
                                    fontSize: isMobile ? "1rem" : "1.25rem",
                                    color: "#374151",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    marginBottom: isMobile ? "1.5rem" : "2rem",
                                    letterSpacing: "-0.01em",
                                    maxWidth: "640px",
                                    padding: isMobile ? "0 10px" : "0"
                                }}>
                                    "{testimonials[index].quote}"
                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ fontSize: isMobile ? "1rem" : "1.1rem", fontWeight: 500, color: "#111827", margin: 0 }}>
                                        {testimonials[index].author}
                                    </h4>
                                    <p style={{ fontSize: "0.85rem", color: "#6B7280", margin: 0, fontWeight: 400 }}>
                                        {testimonials[index].role} • {testimonials[index].company}
                                    </p>
                                    <p style={{ fontSize: "0.7rem", color: "#9CA3AF", margin: "4px 0 0 0", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.04em" }}>
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
