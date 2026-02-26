"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section id="cta" style={{
            padding: "3.5rem 0 4rem",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 2rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        backgroundColor: "#003E3A",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns: "1.05fr 0.95fr",
                        minHeight: "480px",
                        position: "relative",
                        color: "#fff"
                    }}
                >
                    {/* Left Content */}
                    <div style={{
                        padding: "4rem 4rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        zIndex: 10
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.82rem',
                                fontWeight: 500,
                                letterSpacing: '0.01em',
                                marginBottom: '0.75rem'
                            }}
                        >
                            <span style={{ fontSize: '1rem' }}>✦</span>
                            Ready to upgrade?
                            <span style={{ fontSize: '1rem' }}>✦</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                fontSize: "2.8rem",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                marginBottom: "1.5rem",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            Ready to upgrade your<br /> audit process?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: 400,
                                opacity: 0.8,
                                marginBottom: "2.5rem",
                                lineHeight: 1.5,
                                maxWidth: "520px"
                            }}
                        >
                            Join the global community of auditors who have moved beyond spreadsheets. Create oversight in days, not months.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="btn-animate"
                            style={{
                                padding: "1rem 3rem",
                                borderRadius: "6px",
                                fontSize: "1rem",
                                fontWeight: 500,
                                width: "fit-content",
                                marginBottom: "3rem",
                            }}
                        >
                            <span>Start Free Trial</span>
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <div style={{
                                    width: "18px", height: "18px", borderRadius: "50%",
                                    backgroundColor: "rgba(255,255,255,0.12)",
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}>
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span style={{ fontSize: "0.85rem", fontWeight: 400, opacity: 0.85 }}>Get 14 days free trial</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <div style={{
                                    width: "18px", height: "18px", borderRadius: "50%",
                                    backgroundColor: "rgba(255,255,255,0.12)",
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}>
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span style={{ fontSize: "0.85rem", fontWeight: 400, opacity: 0.85 }}>No hidden fees</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Mockup (High-Fidelity) */}
                    <div style={{ position: "relative", backgroundColor: "rgba(255,255,255,0.02)" }}>
                        <motion.div
                            initial={{ opacity: 0, x: 80, y: 40 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            style={{
                                position: "absolute",
                                top: "40px",
                                left: "20px",
                                width: "640px",
                                height: "520px",
                                backgroundColor: "#fff",
                                borderRadius: "1.5rem 0 0 0",
                                boxShadow: "-40px 40px 100px rgba(0,0,0,0.3)",
                                padding: "0",
                                color: "#111827",
                                display: "flex",
                                overflow: "hidden"
                            }}
                        >
                            {/* Sidebar */}
                            <div style={{ width: "160px", borderRight: "1px solid #F3F4F6", padding: "2rem 1rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem", paddingLeft: "0.5rem" }}>
                                    <div style={{ width: "20px", height: "20px", borderRadius: "5px", background: "linear-gradient(135deg, #058c42, #047a39)" }} />
                                    <span style={{ fontSize: "1rem", fontWeight: 500 }}>iAudit</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    {["Dashboard", "Products", "Category", "Site overview", "Message", "Settings"].map((item, idx) => (
                                        <div key={item} style={{
                                            display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.6rem 0.75rem",
                                            borderRadius: "0.5rem", fontSize: "0.8rem", fontWeight: 400,
                                            backgroundColor: idx === 0 ? "rgba(5,140,66,0.08)" : "transparent",
                                            color: idx === 0 ? "#058c42" : "#6B7280"
                                        }}>
                                            <div style={{ width: "14px", height: "14px", borderRadius: "3px", backgroundColor: idx === 0 ? "#058c42" : "#E5E7EB" }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div style={{ flex: 1, padding: "2rem 2.5rem", backgroundColor: "#F9FAFB" }}>
                                {/* Nav */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 500, margin: 0 }}>Dashboard</h3>
                                    <div style={{
                                        width: "160px", height: "36px", borderRadius: "1.5rem",
                                        backgroundColor: "#fff", border: "1px solid #E5E7EB",
                                        display: "flex", alignItems: "center", padding: "0 12px"
                                    }}>
                                        <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>Search</span>
                                    </div>
                                </div>

                                {/* Dash Grid */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr", gap: "1.25rem" }}>
                                    {/* Analytics Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "1.25rem", padding: "1.5rem", border: "1px solid #E5E7EB" }}>
                                        <div style={{ marginBottom: "1.25rem" }}>
                                            <div style={{ fontSize: "0.7rem", color: "#6B7280", marginBottom: "2px" }}>Analytics</div>
                                            <div style={{ fontSize: "1.4rem", fontWeight: 500 }}>$ 320,52</div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "flex-end", height: "80px", gap: "6px" }}>
                                            {[40, 60, 45, 80, 55].map((h, i) => (
                                                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                                                    <div style={{
                                                        width: "100%", height: `${h * 0.8}px`,
                                                        backgroundColor: i === 3 ? "#058c42" : "#111827",
                                                        borderRadius: "4px"
                                                    }} />
                                                    <div style={{ fontSize: "0.55rem", color: "#9CA3AF" }}>{["Mon", "Tue", "Wed", "Thu", "Fri"][i]}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Meeting Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "1.25rem", padding: "1.25rem", border: "1px solid #F3F4F6", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                        <div style={{ fontSize: "0.7rem", fontWeight: 500, color: "#111827", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                                            Upcoming<br />today meeting
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#FF7A50", border: "2px solid #fff" }} />
                                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#058c42", border: "2px solid #fff", marginLeft: "-8px" }} />
                                            <div style={{ fontSize: "0.6rem", color: "#6B7280", fontWeight: 400 }}>+ Join meeting</div>
                                        </div>
                                    </div>

                                    {/* Receiver Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "1.25rem", padding: "1.25rem", border: "1px solid #F3F4F6" }}>
                                        <div style={{ fontSize: "0.7rem", color: "#6B7280", marginBottom: "0.75rem" }}>Receiver</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#E5E7EB", overflow: "hidden" }}>
                                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="" style={{ width: "100%" }} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "0.75rem", fontWeight: 500 }}>Andre fadel</div>
                                                <div style={{ fontSize: "0.6rem", color: "#9CA3AF" }}>+880 456 7890</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Growth Stats Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "1.25rem", padding: "1.5rem", border: "1px solid #E5E7EB", gridColumn: "span 2" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <div>
                                                <div style={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "2px" }}>75.9K</div>
                                                <div style={{ fontSize: "0.7rem", color: "#006644", fontWeight: 500 }}>+58.3% this year growth</div>
                                            </div>
                                            <div style={{ width: "80px", height: "6px", borderRadius: "3px", backgroundColor: "#F3F4F6", position: "relative" }}>
                                                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "70%", backgroundColor: "#058c42", borderRadius: "3px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Ornament Background Elements */}
                        <div style={{
                            position: "absolute", bottom: "40px", left: "-60px",
                            display: "grid", gridTemplateColumns: "repeat(4, 24px)", gap: "8px", opacity: 0.08
                        }}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                                <div key={i} style={{ width: "24px", height: "24px", backgroundColor: "#fff", borderRadius: i % 3 === 0 ? "4px" : "0" }} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
