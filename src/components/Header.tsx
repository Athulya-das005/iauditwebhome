"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (buttonRef.current && arrowRef.current) {
            const button = buttonRef.current;
            const arrow = arrowRef.current;

            const handleMouseEnter = () => {
                gsap.to(arrow, {
                    x: 5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(arrow, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.03)'
        }}>
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 'var(--header-height)',
                padding: '0 2rem',
                position: 'relative'
            }}>
                {/* Logo - aligned to left */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', zIndex: 10 }}>
                    <Image
                        src="/iAudit Global-01.png"
                        alt="iAudit Global"
                        width={140}
                        height={45}
                        style={{ height: 'auto' }}
                    />
                </Link>

                {/* Center Navigation */}
                <nav style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10
                }}>
                    <Link href="/" className="text-muted" style={{ fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }}>Home</Link>
                    <Link href="#features" className="text-muted" style={{ fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }}>Features</Link>
                    <Link href="#pricing" className="text-muted" style={{ fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }}>Pricing</Link>
                    <Link href="#testimonials" className="text-muted" style={{ fontWeight: 500, fontSize: '1.1rem', transition: 'color 0.2s' }}>Testimonials</Link>
                </nav>

                {/* Right CTA */}
                <div style={{ zIndex: 10 }}>
                    <button
                        ref={buttonRef}
                        className="btn btn-primary"
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.8rem 1.75rem',
                            fontSize: '1.1rem'
                        }}
                    >
                        Get started
                        <span ref={arrowRef} style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}
