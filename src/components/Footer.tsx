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

    type FooterLinkItem = { name: string; path?: string; external?: boolean };

    const footerColumns: { title: string; items: FooterLinkItem[] }[] = [
        {
            title: "Product",
            items: [
                { name: "PDCA Cycle Audit Software", path: "/pdca-cycle-audit-software" },
                { name: "Built by Auditors", path: "/audit-management-software-built-by-auditors" },
                { name: "Pricing", path: "/pricing" },
                { name: "Book a Demo", path: "https://calendly.com/iauditgloballtd/30min", external: true },
            ],
        },
        {
            title: "Standards",
            items: [
                { name: "ISO 9001 Software", path: "/standards/iso-9001-audit-management-software" },
                { name: "ISO 14001 Software", path: "/standards/iso-14001-audit-management-software" },
                { name: "ISO 45001 Software", path: "/standards/iso-45001-audit-management-software" },
                { name: "ISO 14001:2026 Update", path: "/ISO14001-2026" },
            ],
        },
        {
            title: "Compare",
            items: [
                { name: "SafetyCulture Alternative" },
                { name: "GoAudits Alternative" },
            ],
        },
        {
            title: "Resources & Company",
            items: [
                { name: "Vulnerability Disclosure", path: "/security/vulnerability-disclosure-policy" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Blog", path: "/blog" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
            ],
        },
    ];

    const linkStyle: React.CSSProperties = {
        fontSize: "0.95rem",
        color: "rgba(0,0,0,0.6)",
        textDecoration: "none",
        fontWeight: 400,
        transition: "color 0.2s ease",
    };

    const renderFooterItem = (item: FooterLinkItem) => {
        if (!item.path) {
            return (
                <span style={{ ...linkStyle, cursor: "default" }}>
                    {item.name}
                </span>
            );
        }

        if (item.external) {
            return (
                <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => { e.currentTarget.style.color = "#006644"; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = "rgba(0,0,0,0.6)"; }}
                >
                    {item.name}
                </a>
            );
        }

        return (
            <Link
                href={item.path}
                style={linkStyle}
                onMouseOver={(e) => { e.currentTarget.style.color = "#006644"; }}
                onMouseOut={(e) => { e.currentTarget.style.color = "rgba(0,0,0,0.6)"; }}
            >
                {item.name}
            </Link>
        );
    };

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
                                alt="iAudit Global company logo"
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
                        gridTemplateColumns: isMobile ? "1fr" : "1.3fr repeat(4, 1fr)",
                        gap: isMobile ? "2.5rem" : "2.5rem",
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
                                    alt="iAudit Global company logo"
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

                        {footerColumns.map((column) => (
                            <div
                                key={column.title}
                                style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}
                            >
                                <h4 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "1.5rem" }}>{column.title}</h4>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                                    {column.items.map((item) => (
                                        <li key={item.name}>
                                            {renderFooterItem(item)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
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

