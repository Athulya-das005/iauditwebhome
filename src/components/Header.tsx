"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "@/data/industries";

const industryNavItems = industries.map((industry) => ({
    label: industry.title,
    href: `/industries/${industry.slug}`,
}));

const standardsNavItems = [
    { label: "ISO 9001 Software", href: "/standards/iso-9001-audit-management-software" },
    { label: "ISO 14001 Software", href: "/standards/iso-14001-audit-management-software" },
    { label: "ISO 45001 Software", href: "/standards/iso-45001-audit-management-software" },
];

const industriesAndStandardsMegamenu = [
    {
        title: "By Industry",
        items: industryNavItems.slice(0, 6),
    },
    {
        title: "",
        items: industryNavItems.slice(6, 12),
    },
    {
        title: "",
        items: industryNavItems.slice(12, 16),
    },
    {
        title: "ISO Standards",
        items: standardsNavItems,
    },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Open Design–style condense with hysteresis (avoids jitter near threshold)
        const CONDENSE_ON = 64;
        const CONDENSE_OFF = 24;
        let condensed = false;
        let ticking = false;

        const apply = () => {
            ticking = false;
            const y = window.scrollY;
            if (!condensed && y > CONDENSE_ON) {
                condensed = true;
                setIsScrolled(true);
            } else if (condensed && y < CONDENSE_OFF) {
                condensed = false;
                setIsScrolled(false);
            }
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(apply);
        };

        condensed = window.scrollY > CONDENSE_ON;
        setIsScrolled(condensed);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const buttonRef = useRef<HTMLAnchorElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const closeMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const openMegamenu = (label: string | null) => {
        if (closeMenuTimeoutRef.current) {
            clearTimeout(closeMenuTimeoutRef.current);
            closeMenuTimeoutRef.current = null;
        }
        setHoveredItem(label);
    };

    const scheduleCloseMegamenu = () => {
        if (closeMenuTimeoutRef.current) clearTimeout(closeMenuTimeoutRef.current);
        closeMenuTimeoutRef.current = setTimeout(() => {
            setHoveredItem(null);
            closeMenuTimeoutRef.current = null;
        }, 180);
    };

    useEffect(() => {
        return () => {
            if (closeMenuTimeoutRef.current) clearTimeout(closeMenuTimeoutRef.current);
        };
    }, []);

    interface NavItem {
        label: string;
        href: string;
        megamenu?: {
            title: string;
            items: { label: string; href: string }[];
            card?: {
                title: string;
                description: string;
                href: string;
            };
        }[];
    }

    const navItems: NavItem[] = [
        {
            label: "Industries & Solutions",
            // href: "/industries", // offline until directory page is ready
            href: "#",
            megamenu: industriesAndStandardsMegamenu,
        },
        { label: "ISO 14001:2026", href: "/ISO14001-2026" },
        { label: "Pricing", href: "/pricing" },
        {
            label: "Resources",
            href: "/case-studies",
            megamenu: [
                {
                    title: "Resources",
                    items: [
                        { label: "Case Studies", href: "/case-studies" },
                        { label: "Blog", href: "/blog" },
                    ],
                },
            ],
        },
        {
            label: "Company",
            href: "/about",
            megamenu: [
                {
                    title: "Company",
                    items: [
                        { label: "About Us", href: "/about" },
                        { label: "Built by Auditors", href: "/audit-management-software-built-by-auditors" },
                        { label: "Contact", href: "/contact" },
                    ],
                },
            ],
        },
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

    // Floating capsule after scroll (or while mobile menu / megamenu is open)
    const isCondensed = isScrolled || isMenuOpen;
    // Hide-on-scroll only on the /blog listing page (not individual posts or other routes)
    const hideNavOnScroll = pathname === "/blog";
    const isHeaderVisible =
        !hideNavOnScroll || !isScrolled || isMenuOpen || Boolean(hoveredItem);

    return (
        <header
            className={`site-header-chrome${isHeaderVisible ? "" : " is-away"}`}
            style={{ fontFamily: '"Pp Neue Montreal", sans-serif' }}
            aria-hidden={!isHeaderVisible}
        >
            <div
                className={`site-header-nav${isCondensed ? " is-condensed" : ""}`}
                onMouseEnter={() => {
                    if (closeMenuTimeoutRef.current) {
                        clearTimeout(closeMenuTimeoutRef.current);
                        closeMenuTimeoutRef.current = null;
                    }
                }}
                onMouseLeave={scheduleCloseMegamenu}
                style={{ position: "relative" }}
            >
            <div className="site-header-nav-inner">
                {/* Left: Logo */}
                <div className="site-header-brand" style={{ display: "flex", alignItems: "center", minWidth: 0, zIndex: 10 }}>
                    <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                        <Image
                            src="/iaudit-logo-nav.png"
                            alt="iAudit Global company logo"
                            width={271}
                            height={200}
                            style={{
                                height: isMobile ? "44px" : isCondensed ? "48px" : "52px",
                                width: "auto",
                                objectFit: "contain",
                                display: "block",
                                transition: "height 420ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                            }}
                            priority
                        />
                    </Link>
                </div>

                {/* Center: Desktop Navigation */}
                <nav
                    className="hidden-mobile site-header-links"
                    style={{
                        display: "flex",
                        gap: "1.35rem",
                        alignItems: "center",
                        zIndex: 10,
                    }}
                >
                    {navItems.map((item) => {
                        const isIso2026 = item.label === "ISO 14001:2026";
                        return (
                        <div
                            key={item.label}
                            onMouseEnter={() => openMegamenu(item.megamenu ? item.label : null)}
                            style={{ position: "relative", padding: "1rem 0", flexShrink: 0 }}
                        >
                            <Link
                                href={item.href}
                                style={{
                                    fontWeight: 500,
                                    fontSize: isIso2026 ? "0.875rem" : "0.9375rem",
                                    color: hoveredItem === item.label ? "#058c42" : (isIso2026 ? "#03624c" : "#1f2937"),
                                    letterSpacing: "-0.01em",
                                    whiteSpace: "nowrap",
                                    transition: "color 0.2s ease",
                                    fontFamily: '"Pp Neue Montreal", sans-serif',
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
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
                        );
                    })}
                </nav>

                {/* Right Actions (Desktop) */}
                <div
                    className="hidden-mobile site-header-actions"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        zIndex: 10,
                    }}
                >
                    <Link
                        href="https://apps.iaudit.global/login"
                        className="btn-animate btn-animate-pill"
                        style={{
                            padding: "0.55rem 1.2rem",
                            borderRadius: "9999px",
                            fontWeight: 500,
                            fontSize: "0.88rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            letterSpacing: "0.01em",
                            backgroundColor: "#058c42",
                            border: "none",
                            boxShadow: "none",
                            isolation: "isolate",
                            transform: "translateZ(0)",
                        }}
                    >
                        <span>Login</span>
                    </Link>
                    <Link
                        href="https://apps.iaudit.global"
                        ref={buttonRef}
                        className="btn-animate btn-animate-pill"
                        style={{
                            gap: "0.4rem",
                            padding: "0.55rem 1.35rem",
                            borderRadius: "9999px",
                            fontWeight: 500,
                            fontSize: "0.88rem",
                            fontFamily: '"Pp Neue Montreal", sans-serif',
                            letterSpacing: "0.01em",
                            willChange: "transform",
                            backgroundColor: "#058c42",
                            border: "none",
                            boxShadow: "none",
                            isolation: "isolate",
                            transform: "translateZ(0)",
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
                        position: "relative",
                        visibility: isMenuOpen ? "hidden" : "visible",
                        flexShrink: 0,
                        marginLeft: "auto",
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

            {/* Desktop Megamenu Popup */}
            <AnimatePresence>
                {hoveredItem && navItems.find(n => n.label === hoveredItem)?.megamenu && (() => {
                    const activeMegamenu = navItems.find(n => n.label === hoveredItem)?.megamenu ?? [];
                    const isIndustriesMenu = hoveredItem === "Industries & Solutions";
                    const columnCount = Math.min(activeMegamenu.length, 4);
                    return (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        onMouseEnter={() => openMegamenu(hoveredItem)}
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            /* Keep a continuous hover bridge so the cursor can reach the panel */
                            paddingTop: "0.75rem",
                            backgroundColor: "transparent",
                            zIndex: 5,
                        }}
                    >
                    <div
                        style={{
                            backgroundColor: isIndustriesMenu
                                ? "rgba(244, 244, 245, 0.98)"
                                : "rgba(255, 255, 255, 0.98)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(15, 23, 42, 0.08)",
                            borderRadius: "28px",
                            boxShadow: "0 24px 48px rgba(15, 23, 42, 0.14)",
                            padding: isIndustriesMenu ? "2rem 0 2.25rem" : "2.5rem 0",
                            overflow: "hidden",
                        }}
                    >
                        <div style={{
                            maxWidth: "1240px",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: isIndustriesMenu
                                ? "1.1fr 1.1fr 1.1fr 0.85fr"
                                : `repeat(${columnCount}, 1fr)`,
                            gap: isIndustriesMenu ? "1rem" : "4rem",
                            padding: "0 2rem",
                            alignItems: "stretch",
                        }}>
                            {activeMegamenu.map((section, sIdx) => (
                                <div
                                    key={sIdx}
                                    style={isIndustriesMenu ? {
                                        background: "#fff",
                                        borderRadius: "16px",
                                        border: "1px solid #ececec",
                                        padding: "1.75rem 1.85rem",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                                        display: "flex",
                                        flexDirection: "column",
                                        minHeight: "100%",
                                    } : undefined}
                                >
                                    {section.title ? (
                                    <h4 style={{
                                        fontSize: isIndustriesMenu ? "0.95rem" : "0.8rem",
                                        fontWeight: isIndustriesMenu ? 600 : 700,
                                        color: isIndustriesMenu ? "#111827" : "#6b7280",
                                        textTransform: isIndustriesMenu ? "none" : "uppercase",
                                        letterSpacing: isIndustriesMenu ? "-0.01em" : "0.05em",
                                        marginBottom: "1.25rem",
                                        fontFamily: '"Pp Neue Montreal", sans-serif',
                                    }}>
                                        {section.title}
                                    </h4>
                                    ) : (
                                        <div style={{ height: isIndustriesMenu ? "1.95rem" : "1.25rem", marginBottom: "1.25rem" }} aria-hidden />
                                    )}
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: isIndustriesMenu ? "0.85rem" : "0.75rem", flex: 1 }}>
                                        {section.items.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link
                                                    href={link.href}
                                                    style={{
                                                        fontSize: "0.92rem",
                                                        color: "#111827",
                                                        textDecoration: "none",
                                                        transition: "all 0.2s",
                                                        fontWeight: 400,
                                                        display: "block",
                                                        padding: "2px 0",
                                                        lineHeight: 1.4,
                                                    }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#058c42")}
                                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111827")}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {section.card && (
                                        <Link
                                            href={section.card.href}
                                            style={{
                                                marginTop: "1.5rem",
                                                padding: "1.1rem 1.15rem",
                                                borderRadius: "12px",
                                                background: "#f8faf9",
                                                border: "1px solid #e8f0ec",
                                                textDecoration: "none",
                                                display: "block",
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = "#bbf7d0";
                                                e.currentTarget.style.background = "#f0fdf4";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = "#e8f0ec";
                                                e.currentTarget.style.background = "#f8faf9";
                                            }}
                                        >
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                gap: "0.75rem",
                                                marginBottom: "0.45rem",
                                            }}>
                                                <span style={{
                                                    fontSize: "0.92rem",
                                                    fontWeight: 600,
                                                    color: "#111827",
                                                    fontFamily: '"Pp Neue Montreal", sans-serif',
                                                }}>
                                                    {section.card.title}
                                                </span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#058c42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </div>
                                            <p style={{
                                                margin: 0,
                                                fontSize: "0.82rem",
                                                lineHeight: 1.55,
                                                color: "#6b7280",
                                                fontFamily: '"Pp Neue Montreal", sans-serif',
                                            }}>
                                                {section.card.description}
                                            </p>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    </motion.div>
                    );
                })()}
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
                            pointerEvents: "auto",
                        }}
                    >
                        {/* Close button row */}
                        <div style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 1.5rem", flexShrink: 0 }}>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "44px",
                                    height: "44px",
                                }}
                                aria-label="Close menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <line x1="5" y1="5" x2="19" y2="19" />
                                    <line x1="19" y1="5" x2="5" y2="19" />
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
                                                                {section.title ? (
                                                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>{section.title}</span>
                                                                ) : null}
                                                                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: section.title ? "0.75rem" : 0 }}>
                                                                    {section.items.map((link, lIdx) => (
                                                                        <Link
                                                                            key={lIdx}
                                                                            href={link.href}
                                                                            onClick={() => setIsMenuOpen(false)}
                                                                            style={{
                                                                                fontSize: "1rem",
                                                                                color: "#4b5563",
                                                                                fontWeight: 400,
                                                                            }}
                                                                        >
                                                                            {link.label}
                                                                        </Link>
                                                                    ))}
                                                                    {section.card && (
                                                                        <Link
                                                                            href={section.card.href}
                                                                            onClick={() => setIsMenuOpen(false)}
                                                                            style={{
                                                                                marginTop: "0.5rem",
                                                                                padding: "1rem",
                                                                                borderRadius: "12px",
                                                                                background: "#f8faf9",
                                                                                border: "1px solid #e8f0ec",
                                                                                textDecoration: "none",
                                                                            }}
                                                                        >
                                                                            <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111827", marginBottom: "0.35rem" }}>
                                                                                {section.card.title}
                                                                            </div>
                                                                            <div style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.5 }}>
                                                                                {section.card.description}
                                                                            </div>
                                                                        </Link>
                                                                    )}
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
            </div>
        </header>
    );
}
