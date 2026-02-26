"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (buttonRef.current && arrowRef.current) {
            const button = buttonRef.current;
            const arrow = arrowRef.current;

            const handleMouseEnter = () => {
                gsap.to(arrow, { x: 4, y: -4, duration: 0.3, ease: "power2.out" });
                gsap.to(button, { scale: 1.03, duration: 0.25, ease: "power2.out" });
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
                padding: "0 2rem",
                position: "relative",
            }}>
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", zIndex: 10 }}>
                    <Image
                        src="/iAudit Global-01.png"
                        alt="iAudit Global"
                        width={125}
                        height={40}
                        style={{ height: "auto", objectFit: "contain" }}
                        priority
                    />
                </Link>

                {/* Center Navigation */}
                <nav style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                }}>
                    {[
                        { label: "Home", href: "/" },
                        { label: "About", href: "/about" },
                        { label: "Features", href: "/#features" },
                        { label: "Pricing", href: "/#pricing" },
                        { label: "Testimonials", href: "/#testimonials" },
                    ].map((item) => (
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

                {/* Right CTA Button */}
                <Link
                    href="#contact"
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
                        Get started
                        <span ref={arrowRef} style={{ display: "inline-flex", alignItems: "center" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </span>
                    </span>
                </Link>
            </div>
        </header>
    );
}
