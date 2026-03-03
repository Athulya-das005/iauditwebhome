"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const buttonRef = useRef<HTMLAnchorElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Testimonials", href: "/#testimonials" },
        { label: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        if (buttonRef.current && arrowRef.current) {
            const button = buttonRef.current;
            const arrow = arrowRef.current;

            const handleMouseEnter = () => {
                gsap.to(arrow, { x: 4, y: -4, duration: 0.3, ease: "power2.out" });
                gsap.to(button, { scale: 1.05, duration: 0.25, ease: "power2.out" });
            };
            const handleMouseLeave = () => {
                gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(button, { scale: 1, duration: 0.25, ease: "power2.out" });
            };

            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                button.removeEventListener("mouseenter", handleMouseEnter);
                button.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <header style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            fontFamily: '"Pp Neue Montreal", sans-serif',
        }}>
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "80px",
                padding: isMobile ? "0 1.25rem" : "0 2rem",
                position: "relative",
            }}>
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", zIndex: 10 }}>
                    <Image
                        src="/iAudit Global-01.png"
                        alt="iAudit Global"
                        width={isMobile ? 100 : 125}
                        height={isMobile ? 32 : 40}
                        style={{ height: "auto", objectFit: "contain" }}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden-mobile" style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            style={{
                                fontWeight: 600,
                                fontSize: "0.92rem",
                                color: "#111827",
                                letterSpacing: "0.01em",
                                transition: "all 0.25s ease-in-out",
                                fontFamily: '"Pp Neue Montreal", sans-serif',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#058c42")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#111827")}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right CTA Button (Desktop) */}
                <div className="hidden-mobile">
                    <Link
                        href="https://apps.iaudit.global"
                        ref={buttonRef}
                        className="btn-animate"
                        style={{
                            gap: "0.45rem",
                            padding: "0.75rem 1.6rem",
                            borderRadius: "6px",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            letterSpacing: "0.01em",
                            willChange: "transform",
                        }}
                    >
                        <span>
                            Get Started
                            <span ref={arrowRef} style={{ display: "inline-flex", alignItems: "center" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="only-mobile"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0.5rem",
                        zIndex: 1100,
                        position: "relative"
                    }}
                >
                    <div style={{
                        width: "24px",
                        height: "18px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <motion.span
                            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                            style={{ width: "100%", height: "2px", backgroundColor: "#111827", borderRadius: "10px" }}
                        />
                        <motion.span
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                            style={{ width: "100%", height: "2px", backgroundColor: "#111827", borderRadius: "10px" }}
                        />
                        <motion.span
                            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                            style={{ width: "100%", height: "2px", backgroundColor: "#111827", borderRadius: "10px" }}
                        />
                    </div>
                </button>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                width: "100%",
                                height: "100vh",
                                backgroundColor: "#fff",
                                zIndex: 1050,
                                padding: "80px 2rem 2rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                                boxShadow: "-10px 0 30px rgba(0,0,0,0.1)"
                            }}
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: 600,
                                            color: "#111827",
                                            display: "block",
                                            padding: "0.5rem 0",
                                            borderBottom: "1px solid #f1f5f9"
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                style={{ marginTop: "auto" }}
                            >
                                <Link
                                    href="https://apps.iaudit.global"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="btn-animate"
                                    style={{
                                        width: "100%",
                                        padding: "1rem",
                                        borderRadius: "8px",
                                        fontSize: "1.1rem",
                                        fontWeight: 600
                                    }}
                                >
                                    <span>Get Started</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
