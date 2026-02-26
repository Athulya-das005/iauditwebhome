"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Instagram", href: "https://www.instagram.com/iauditglobal/?hl=en", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
        { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61578820557173", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/iaudit-global/", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> }
    ];

    return (
        <footer style={{
            backgroundColor: "#f9fdfb", // Subtle green shade background
            borderTop: "1px solid #e8f5ed",
            padding: "8rem 0 3rem",
            fontFamily: '"Pp Neue Montreal", sans-serif',
            color: "#111827"
        }}>
            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 2rem" }}>
                {/* Upper Footer Section (Flovity Style) */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '8rem',
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
                            marginBottom: "2.5rem"
                        }}
                    >
                        <Image
                            src="/iAudit Global-01.png"
                            alt="iAudit Global Logo"
                            width={110} // Increased size
                            height={110}
                            style={{ height: "auto", objectFit: "contain" }}
                        />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: "3.2rem",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em",
                            maxWidth: "800px"
                        }}
                    >
                        Empower your audit process with iAudit
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

                {/* Main Footer Content */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 0.6fr 0.6fr 0.8fr",
                    gap: "4rem",
                    marginBottom: "5rem"
                }}>
                    {/* Brand Column */}
                    <div>
                        <Link href="/" style={{
                            display: "inline-block",
                            marginBottom: "1.5rem",
                            textDecoration: "none"
                        }}>
                            <Image
                                src="/iAudit Global-01.png"
                                alt="iAudit Global Logo"
                                width={150} // Increased size
                                height={50}
                                style={{ height: "auto", objectFit: "contain" }}
                            />
                        </Link>
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.5,
                            color: "rgba(0,0,0,0.6)",
                            maxWidth: "280px",
                            fontWeight: 400
                        }}>
                            ISO audit management software built by auditors, for auditors.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "1.5rem" }}>Quick links</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            {["Home", "About iAudit", "Product", "Pricing", "Team"].map((item) => (
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
                                        {item === "Product" ? "Features" : item === "Team" ? "Testimonials" : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
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

                    {/* Contact & Social */}
                    <div>
                        <h4 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "1.5rem" }}>Contact</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(0,0,0,0.6)", fontSize: "0.95rem" }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>+880 456 7890</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(0,0,0,0.6)", fontSize: "0.95rem" }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>info@iauditglobal.org</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "1.25rem" }}>
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

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: "2.5rem",
                    borderTop: "1px solid #F3F4F6",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "2rem"
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <div style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.5)", fontWeight: 400 }}>
                            © {currentYear} iAudit Global. All rights reserved.
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.4)", fontWeight: 400, maxWidth: "600px" }}>
                            Reg. No. 15826012 (England & Wales) | Unit 17f, The Lansbury Estates, Surrey, England
                        </div>
                    </div>

                    <Link href="#cta" className="btn-animate" style={{
                        padding: "0.8rem 2.5rem",
                        borderRadius: "6px",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        textDecoration: "none",
                    }}>
                        <span>Get started ↗</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

