"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Instagram", href: "https://www.instagram.com/iauditglobal/?hl=en", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
        { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61578820557173", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/iaudit-global/", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> }
    ];

    return (
        <footer style={{
            fontFamily: '"Pp Neue Montreal", sans-serif',
            color: "#111827",
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid #d4ecd9",
            background: "linear-gradient(180deg, #d4ebd7 0%, #ffffff 800px)", // More prominent green shade fading into white further down
            backgroundColor: "#ffffff",
        }}>
            {/* Main Footer Area */}
            <div style={{
                padding: "3.5rem 0 2rem", // Keep logo after a standard space from footer top
            }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 2rem" }}>
                    {/* Upper Footer Section (Flovity Style) */}
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '4.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{
                                marginBottom: "-1.5rem", // Aggressive negative margin to swallow the image's invisible transparent boundary
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-end" // Anchors image to bottom
                            }}
                        >
                            <Image
                                src="/iAudit Global-01.png"
                                alt="iAudit Global Logo"
                                width={180} // Size increased a little bit more
                                height={68}
                                style={{ height: "auto", objectFit: "contain", objectPosition: "bottom" }}
                            />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                fontSize: isMobile ? "2.2rem" : "3.2rem",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                marginTop: "0",
                                marginBottom: "1rem", // Tight description spacing
                                letterSpacing: "-0.03em",
                                maxWidth: "800px"
                            }}
                        >
                            Empower Your Audit Process With iAudit
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: 400,
                                color: "rgba(0,0,0,0.6)",
                                maxWidth: "600px",
                                lineHeight: 1.5
                            }}
                        >
                            Enhance efficiency and innovation with our comprehensive ISO audit management software designed for precision and compliance.
                        </motion.p>
                    </div>

                    {/* Separator Line */}
                    <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(0,0,0,0.15)", marginBottom: "4rem" }} />

                    {/* Main Footer Content */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1.4fr 0.6fr 0.6fr 0.8fr",
                        gap: isMobile ? "2.5rem" : "4rem",
                        textAlign: isMobile ? "center" : "left"
                    }}>
                        {/* Brand Column */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}>
                            <Link href="/" style={{
                                display: "inline-block",
                                marginBottom: "1.5rem",
                                textDecoration: "none"
                            }}>
                                <Image
                                    src="/iAudit Global-01.png"
                                    alt="iAudit Global Logo"
                                    width={isMobile ? 120 : 150}
                                    height={isMobile ? 40 : 50}
                                    style={{ height: "auto", objectFit: "contain" }}
                                />
                            </Link>
                            <p style={{
                                fontSize: "1rem",
                                lineHeight: 1.5,
                                color: "rgba(0,0,0,0.6)",
                                maxWidth: isMobile ? "100%" : "280px",
                                fontWeight: 400,
                                marginBottom: "2.5rem"
                            }}>
                                ISO audit management software built by auditors, for auditors.
                            </p>
                            <Link href="https://apps.iaudit.global" className="btn-animate" style={{
                                padding: "0.8rem 2.5rem",
                                borderRadius: "6px",
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                textDecoration: "none",
                            }}>
                                <span>Get started ↗</span>
                            </Link>
                        </div>

                        {/* Company Links */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "1.5rem" }}>Company</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About iAudit", path: "/about" },
                                    { name: "Product", path: "#" },
                                    { name: "Pricing", path: "/#pricing" },
                                    { name: "Contact Us", path: "/contact" },
                                    { name: "Team", path: "#" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.path} style={{
                                            fontSize: "0.95rem",
                                            color: "rgba(0,0,0,0.6)",
                                            textDecoration: "none",
                                            fontWeight: 400,
                                            transition: "color 0.2s ease"
                                        }}
                                            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "#006644"}
                                            onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "rgba(0,0,0,0.6)"}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "1.5rem" }}>Resources</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                                {["Case Studies", "Blog & Insights", "FAQ"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" style={{
                                            fontSize: "0.95rem",
                                            color: "rgba(0,0,0,0.6)",
                                            textDecoration: "none",
                                            fontWeight: 400,
                                            transition: "color 0.2s ease"
                                        }}
                                            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "#006644"}
                                            onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "rgba(0,0,0,0.6)"}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "1.5rem" }}>Contact</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(0,0,0,0.6)", fontSize: "0.95rem" }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <span>1234567899</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(0,0,0,0.6)", fontSize: "0.95rem" }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    <span>info@iaudit.global</span>
                                </div>
                                <div style={{ display: "flex", alignItems: isMobile ? "center" : "flex-start", gap: "0.75rem", color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: isMobile ? "0" : "2px", flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <span>Unit 17f, The Lansbury Estates, Surrey, England <br /> Reg. No. 15826012 (England & Wales)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                padding: "1.5rem 0",
                width: "100%",
                borderTop: "1px solid rgba(0,0,0,0.06)"
            }}>
                <div style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: isMobile ? "0 1.25rem" : "0 2rem",
                    display: isMobile ? "flex" : "grid",
                    flexDirection: isMobile ? "column-reverse" : "row",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: isMobile ? "1.5rem" : "2rem"
                }}>
                    {!isMobile && <div></div>} {/* Empty column to balance grid */}

                    <div style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.5)", fontWeight: 400, textAlign: "center" }}>
                        © {currentYear} iAudit Global. All rights reserved.
                    </div>

                    <div style={{ display: "flex", gap: "1.25rem", justifyContent: isMobile ? "center" : "flex-end" }}>
                        {socialLinks.map((social) => (
                            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                                style={{
                                    color: "rgba(0,0,0,0.6)",
                                    transition: "color 0.2s ease"
                                }}
                                onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "#006644"}
                                onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "rgba(0,0,0,0.6)"}
                            >
                                <social.icon width="20" height="20" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

