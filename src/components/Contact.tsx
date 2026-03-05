"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        subject: "General Question",
        email: "",
        message: "",
        agreed: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, lastName, phone, subject, email, message, agreed } = formData;

        if (!agreed) {
            alert("Please agree to the terms and conditions.");
            return;
        }

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@iaudit.global", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: `${firstName} ${lastName}`,
                    email: email,
                    phone: phone,
                    subject: subject,
                    message: message,
                    _subject: `New iAudit Contact: ${subject}`
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("Something went wrong. Please try again or email us directly at info@iaudit.global");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Submission failed. Please check your internet connection and try again.");
        }
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid #E5E7EB",
        backgroundColor: "#F9FAF8",
        fontSize: "0.95rem",
        color: "#111827",
        outline: "none",
        fontFamily: '"Pp Neue Montreal", sans-serif',
        transition: "border-color 0.2s ease",
    };

    const labelStyle: React.CSSProperties = {
        fontSize: "0.9rem",
        fontWeight: 500,
        color: "#111827",
        marginBottom: "8px",
        display: "block",
    };

    return (
        <section id="contact" style={{
            padding: isMobile ? "4rem 0" : "6rem 0",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif',
            overflow: "hidden"
        }}>
            <div className="container" style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? "3rem" : "5rem",
                    alignItems: "flex-start"
                }}>

                    {/* Left Column: Content */}
                    <div style={{ paddingRight: isMobile ? "0" : "2rem" }}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                fontSize: isMobile ? "2.2rem" : "2.8rem",
                                fontWeight: 500,
                                color: "#111827",
                                lineHeight: 1.1,
                                marginBottom: "1.5rem",
                                letterSpacing: "-0.03em"
                            }}
                        >
                            Have Questions?<br />
                            Our Team Is Here For You
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                fontSize: "1.05rem",
                                color: "#4B5563",
                                lineHeight: 1.6,
                                marginBottom: "3rem",
                                maxWidth: "500px"
                            }}
                        >
                            Our team of ISO auditors and product specialists can answer questions, discuss your audit challenges, or arrange a walkthrough of iAudit.
                        </motion.p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                            {/* Contact Item: Location */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                style={{ display: "flex", gap: "1.25rem" }}
                            >
                                <div style={{ color: "#006644", marginTop: "4px" }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>Find Us On</h4>
                                    <p style={{ color: "#4B5563", lineHeight: 1.5, fontSize: "0.95rem" }}>
                                        Unit 17f, The Lansbury Estates, Surrey,<br />
                                        England, United Kingdom
                                    </p>
                                </div>
                            </motion.div>

                            {/* Contact Item: Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                style={{ display: "flex", gap: "1.25rem" }}
                            >
                                <div style={{ color: "#006644", marginTop: "4px" }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>Email</h4>
                                    <p style={{ color: "#4B5563", fontSize: "0.95rem" }}>info@iaudit.global</p>
                                </div>
                            </motion.div>

                            {/* Contact Item: Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={{ display: "flex", gap: "1.25rem" }}
                            >
                                <div style={{ color: "#006644", marginTop: "4px" }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", marginBottom: "0.5rem" }}>Let Your Work Speak For Itself</h4>
                                    <p style={{ color: "#4B5563", fontSize: "0.95rem" }}>+44 1233 456 789</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
                            {[
                                { name: "Instagram", href: "https://www.instagram.com/iauditglobal/?hl=en", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                                { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61578820557173", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                                { name: "LinkedIn", href: "https://www.linkedin.com/company/iaudit-global/", icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> }
                            ].map((social) => (
                                <motion.a
                                    key={social.name}
                                    whileHover={{ y: -3 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#9CA3AF",
                                        transition: "color 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.color = "#006644"}
                                    onMouseOut={(e) => e.currentTarget.style.color = "#9CA3AF"}
                                >
                                    {social.icon({ width: 20, height: 20 })}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form Card or Success Message */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "1.5rem",
                            padding: isMobile ? "2rem" : "3rem",
                            boxShadow: "0 40px 100px rgba(0, 102, 68, 0.25)",
                            border: "1px solid #F3F4F6",
                            position: "relative",
                            zIndex: 2,
                            minHeight: isMobile ? "auto" : "500px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{
                                    backgroundColor: "#004433",
                                    color: "#fff",
                                    padding: isMobile ? "1.5rem 1rem" : "2rem 3rem",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    width: "100%",
                                    maxWidth: "500px"
                                }}
                            >
                                <h3 style={{
                                    fontSize: isMobile ? "0.9rem" : "1rem",
                                    fontWeight: 500,
                                    margin: 0,
                                    whiteSpace: isMobile ? "normal" : "nowrap"
                                }}>
                                    Thank you! Your submission has been received!
                                </h3>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem", width: "100%" }}>
                                <div style={{ gridColumn: isMobile ? "auto" : "span 1" }}>
                                    <label htmlFor="firstName" style={labelStyle}>First Name*</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Enter your first name"
                                        required
                                        style={inputStyle}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{ gridColumn: isMobile ? "auto" : "span 1" }}>
                                    <label htmlFor="lastName" style={labelStyle}>Last Name*</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter your last name"
                                        required
                                        style={inputStyle}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{ gridColumn: isMobile ? "auto" : "span 1" }}>
                                    <label htmlFor="phone" style={labelStyle}>Phone*</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your number"
                                        required
                                        style={inputStyle}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{ gridColumn: isMobile ? "auto" : "span 1" }}>
                                    <label htmlFor="subject" style={labelStyle}>Subject*</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option value="Support Request">Support Request</option>
                                        <option value="Product Demo">Product Demo</option>
                                        <option value="Technical Issue">Technical Issue</option>
                                        <option value="General Question">General Question</option>
                                    </select>
                                </div>
                                <div style={{ gridColumn: "span " + (isMobile ? "1" : "2") }}>
                                    <label htmlFor="email" style={labelStyle}>Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        style={inputStyle}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{ gridColumn: "span " + (isMobile ? "1" : "2") }}>
                                    <label htmlFor="message" style={labelStyle}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Type your message"
                                        rows={4}
                                        style={{ ...inputStyle, resize: "none" }}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{ gridColumn: "span " + (isMobile ? "1" : "2"), display: "flex", alignItems: "center", gap: "10px", marginTop: "0.5rem" }}>
                                    <input
                                        type="checkbox"
                                        id="agreed"
                                        name="agreed"
                                        required
                                        checked={formData.agreed}
                                        onChange={handleChange}
                                        style={{ width: "18px", height: "18px", cursor: "pointer", accentColor: "#006644" }}
                                    />
                                    <label htmlFor="agreed" style={{ fontSize: "0.85rem", color: "#6B7280", cursor: "pointer" }}>
                                        I understand and agree to the terms and conditions
                                    </label>
                                </div>
                                <div style={{ gridColumn: "span " + (isMobile ? "1" : "2"), marginTop: "1rem" }}>
                                    <button
                                        type="submit"
                                        className="btn-animate"
                                        style={{
                                            width: "100%",
                                            padding: "1rem",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            fontSize: "0.95rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "8px",
                                        }}
                                    >
                                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            Sent Message
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
