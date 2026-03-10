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

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        /*
        {
            label: "Solutions",
            href: "/#solutions",
            megamenu: [
                {
                    title: "By Industry",
                    items: [
                        { label: "Manufacturing", href: "/industries/manufacturing" },
                        { label: "Health & Safety", href: "/industries/health-safety" },
                        { label: "Construction", href: "/industries/construction" },
                        { label: "Retail", href: "/industries/retail" },
                        { label: "Hospitality", href: "/industries/hospitality" },
                    ]
                },
                {
                    title: "By Business Need",
                    items: [
                        { label: "ISO 9001 (Quality)", href: "/solutions/iso-9001" },
                        { label: "ISO 14001 (Env)", href: "/solutions/iso-14001" },
                        { label: "ISO 45001 (S&H)", href: "/solutions/iso-45001" },
                        { label: "ISO 27001 (InfoSec)", href: "/solutions/iso-27001" },
                        { label: "Internal Audits", href: "/solutions/internal-audits" },
                    ]
                },
                {
                    title: "Specialized",
                    items: [
                        { label: "Supplier Audits", href: "/solutions/supplier-audits" },
                        { label: "Process Audits", href: "/solutions/process-audits" },
                        { label: "Custom Checklists", href: "/solutions/custom-checklists" },
                        { label: "Gap Analysis", href: "/solutions/gap-analysis" },
                    ]
                }
            ]
        },
        {
            label: "Customers",
            href: "/#customers",
            megamenu: [
                {
                    title: "Resources",
                    items: [
                        { label: "Case Studies", href: "/customers/case-studies" },
                        { label: "Testimonials", href: "/#testimonials" },
                        { label: "Customer Stories", href: "/customers/stories" },
                    ]
                },
                {
                    title: "Support",
                    items: [
                        { label: "Help Center", href: "https://support.iaudit.global" },
                        { label: "Documentation", href: "/docs" },
                        { label: "API Reference", href: "/api-docs" },
                    ]
                }
            ]
        },
        */
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
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
        <header
            onMouseLeave={() => setHoveredItem(null)}
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                backgroundColor: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                fontFamily: '"Pp Neue Montreal", sans-serif',
            }}
        >
            <div style={{
                maxWidth: "1440px",
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
                        src="/iaudit-logo-new.png"
                        alt="iAudit Global"
                        width={isMobile ? 100 : 130}
                        height={isMobile ? 100 : 130}
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
                        <div
                            key={item.label}
                            onMouseEnter={() => setHoveredItem(item.megamenu ? item.label : null)}
                            style={{ position: "relative", padding: "1rem 0" }}
                        >
                            <Link
                                href={item.href}
                                style={{
                                    fontWeight: 500,
                                    fontSize: "0.92rem",
                                    color: hoveredItem === item.label ? "#058c42" : "#111827",
                                    letterSpacing: "0.01em",
                                    transition: "all 0.25s ease-in-out",
                                    fontFamily: '"Pp Neue Montreal", sans-serif',
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px"
                                }}
                            >
                                {item.label}
                                {item.megamenu && (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{
                                        transition: "transform 0.3s",
                                        transform: hoveredItem === item.label ? "rotate(180deg)" : "rotate(0deg)"
                                    }}>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                )}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* Right Actions (Desktop) */}
                <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Link
                        href="https://apps.iaudit.global/login"
                        className="btn-animate"
                        style={{
                            padding: "0.55rem 1.2rem",
                            borderRadius: "6px",
                            fontWeight: 500,
                            fontSize: "0.85rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            letterSpacing: "0.01em",
                        }}
                    >
                        <span>Login</span>
                    </Link>
                    <Link
                        href="https://apps.iaudit.global"
                        ref={buttonRef}
                        className="btn-animate"
                        style={{
                            gap: "0.4rem",
                            padding: "0.55rem 1.35rem",
                            borderRadius: "6px",
                            fontWeight: 500,
                            fontSize: "0.85rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            letterSpacing: "0.01em",
                            willChange: "transform",
                        }}
                    >
                        <span>
                            Get started free
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
            </div>

            {/* Desktop Megamenu Popup - Full Width */}
            <AnimatePresence>
                {hoveredItem && navItems.find(n => n.label === hoveredItem)?.megamenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            top: "80px",
                            left: 0,
                            width: "100%",
                            backgroundColor: "#fff",
                            borderBottom: "1px solid rgba(0,0,0,0.06)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            padding: "3rem 0",
                            zIndex: 5,
                        }}
                    >
                        <div style={{
                            maxWidth: "1440px",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "4rem",
                            padding: "0 2rem"
                        }}>
                            {navItems.find(n => n.label === hoveredItem)?.megamenu?.map((section, sIdx) => (
                                <div key={sIdx}>
                                    <h4 style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 700,
                                        color: "#6b7280",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        marginBottom: "1.25rem",
                                        fontFamily: '"Pp Neue Montreal", sans-serif',
                                    }}>
                                        {section.title}
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                        {section.items.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link
                                                    href={link.href}
                                                    style={{
                                                        fontSize: "0.95rem",
                                                        color: "#111827",
                                                        textDecoration: "none",
                                                        transition: "all 0.2s",
                                                        fontWeight: 400,
                                                        display: "block",
                                                        padding: "4px 0"
                                                    }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#058c42")}
                                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111827")}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            height: "100dvh",
                            backgroundColor: "#fff",
                            zIndex: 1050,
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
                        }}
                    >
                        {/* Close button row */}
                        <div style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 1.5rem", flexShrink: 0 }}>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
                                aria-label="Close menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Nav items — scrollable middle */}
                        <div style={{ flex: 1, overflowY: "auto", padding: "0 2rem" }}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div style={{ borderBottom: "1px solid #f1f5f9" }}>
                                        <div
                                            onClick={() => {
                                                if (item.megamenu) {
                                                    setExpandedItem(expandedItem === item.label ? null : item.label);
                                                } else {
                                                    setIsMenuOpen(false);
                                                }
                                            }}
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: 600,
                                                color: "#111827",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "1.25rem 0",
                                                cursor: "pointer"
                                            }}
                                        >
                                            {item.megamenu ? (
                                                <>
                                                    {item.label}
                                                    <svg
                                                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                                        style={{
                                                            transition: "transform 0.3s",
                                                            transform: expandedItem === item.label ? "rotate(180deg)" : "rotate(0deg)",
                                                            color: "#9ca3af"
                                                        }}
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    style={{ color: "inherit", textDecoration: "none", width: "100%" }}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {item.megamenu && expandedItem === item.label && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <div style={{ padding: "0 0 1.5rem 1rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                                        {item.megamenu.map((section, sIdx) => (
                                                            <div key={sIdx}>
                                                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>{section.title}</span>
                                                                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "0.75rem" }}>
                                                                    {section.items.map((link, lIdx) => (
                                                                        <Link
                                                                            key={lIdx}
                                                                            href={link.href}
                                                                            onClick={() => setIsMenuOpen(false)}
                                                                            style={{ fontSize: "1rem", color: "#4b5563", fontWeight: 400 }}
                                                                        >
                                                                            {link.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom CTA buttons — always visible, never cut off */}
                        <div style={{
                            flexShrink: 0,
                            padding: "1.25rem 2rem 2rem",
                            backgroundColor: "#f9fafb",
                            borderTop: "1px solid #f1f5f9",
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <Link
                                    href="https://apps.iaudit.global/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="btn-animate"
                                    style={{
                                        width: "100%",
                                        padding: "0.85rem",
                                        borderRadius: "8px",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        textAlign: "center",
                                        justifyContent: "center",
                                        backgroundColor: "white",
                                        border: "1px solid #e5e7eb",
                                        display: "flex",
                                        boxSizing: "border-box",
                                    }}
                                >
                                    <span>Log in</span>
                                </Link>
                                <Link
                                    href="https://apps.iaudit.global"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="btn-animate"
                                    style={{
                                        width: "100%",
                                        padding: "0.85rem",
                                        borderRadius: "8px",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        textAlign: "center",
                                        justifyContent: "center",
                                        display: "flex",
                                        boxSizing: "border-box",
                                    }}
                                >
                                    <span>Sign up for free</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
