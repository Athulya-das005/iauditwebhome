"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section id="cta" style={{
            padding: "80px 0 120px",
            backgroundColor: "#fff",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        backgroundColor: "#003E3A",
                        borderRadius: "40px",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns: "1.05fr 0.95fr",
                        minHeight: "560px",
                        position: "relative",
                        color: "#fff"
                    }}
                >
                    {/* Left Content */}
                    <div style={{
                        padding: "80px 60px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        zIndex: 10
                    }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                                fontWeight: 500,
                                lineHeight: 1.05,
                                marginBottom: "28px",
                                letterSpacing: "-0.04em"
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
                                fontSize: "1.2rem",
                                fontWeight: 400,
                                opacity: 0.8,
                                marginBottom: "44px",
                                lineHeight: 1.6,
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
                            style={{
                                backgroundColor: "#fff",
                                color: "#003E3A",
                                padding: "18px 48px",
                                borderRadius: "14px",
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                border: "none",
                                cursor: "pointer",
                                width: "fit-content",
                                marginBottom: "48px",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            Start Free Trial
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={{ display: "flex", gap: "28px", alignItems: "center" }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{
                                    width: "20px", height: "20px", borderRadius: "50%",
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span style={{ fontSize: "0.95rem", fontWeight: 500, opacity: 0.9 }}>Get 14 days free trial</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{
                                    width: "20px", height: "20px", borderRadius: "50%",
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span style={{ fontSize: "0.95rem", fontWeight: 500, opacity: 0.9 }}>No hidden fees</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Mockup (High-Fidelity) */}
                    <div style={{ position: "relative", backgroundColor: "rgba(255,255,255,0.03)" }}>
                        <motion.div
                            initial={{ opacity: 0, x: 80, y: 40 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            style={{
                                position: "absolute",
                                top: "40px",
                                left: "20px",
                                width: "680px",
                                height: "600px",
                                backgroundColor: "#fff",
                                borderRadius: "24px 0 0 0",
                                boxShadow: "-40px 40px 100px rgba(0,0,0,0.4)",
                                padding: "0",
                                color: "#111827",
                                display: "flex"
                            }}
                        >
                            {/* Sidebar */}
                            <div style={{ width: "180px", borderRight: "1px solid #F3F4F6", padding: "32px 16px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px", paddingLeft: "8px" }}>
                                    <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "linear-gradient(135deg, #00A651, #004D40)" }} />
                                    <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>iAudit</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    {["Dashboard", "Products", "Category", "Site overview", "Message", "Settings"].map((item, idx) => (
                                        <div key={item} style={{
                                            display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px",
                                            borderRadius: "10px", fontSize: "0.85rem", fontWeight: 500,
                                            backgroundColor: idx === 0 ? "rgba(0,166,81,0.08)" : "transparent",
                                            color: idx === 0 ? "#00A651" : "#6B7280"
                                        }}>
                                            <div style={{ width: "16px", height: "16px", borderRadius: "4px", backgroundColor: idx === 0 ? "#00A651" : "#E5E7EB" }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div style={{ flex: 1, padding: "32px 40px", backgroundColor: "#F9FAFB" }}>
                                {/* Nav */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0 }}>Dashboard</h3>
                                    <div style={{
                                        width: "200px", height: "40px", borderRadius: "20px",
                                        backgroundColor: "#fff", border: "1px solid #E5E7EB",
                                        display: "flex", alignItems: "center", padding: "0 16px"
                                    }}>
                                        <span style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>Search</span>
                                    </div>
                                </div>

                                {/* Dash Grid */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr", gap: "20px" }}>
                                    {/* Analytics Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "24px", border: "1px solid #E5E7EB" }}>
                                        <div style={{ marginBottom: "20px" }}>
                                            <div style={{ fontSize: "0.75rem", color: "#6B7280", marginBottom: "4px" }}>Analytics</div>
                                            <div style={{ fontSize: "1.6rem", fontWeight: 800 }}>$ 320,52</div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "flex-end", height: "100px", gap: "8px" }}>
                                            {[40, 60, 45, 80, 55].map((h, i) => (
                                                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                                                    <div style={{
                                                        width: "100%", height: `${h}px`,
                                                        backgroundColor: i === 3 ? "#00A651" : "#111827",
                                                        borderRadius: "6px"
                                                    }} />
                                                    <div style={{ fontSize: "0.6rem", color: "#9CA3AF" }}>{["Mon", "Tue", "Wed", "Thu", "Fri"][i]}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Meeting Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "20px", border: "1px solid #F3F4F6", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                        <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#111827", lineHeight: 1.3, marginBottom: "12px" }}>
                                            Upcoming<br />today meeting
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#FF7A50", border: "2px solid #fff" }} />
                                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#00A651", border: "2px solid #fff", marginLeft: "-8px" }} />
                                            <div style={{ fontSize: "0.65rem", color: "#6B7280", fontWeight: 500 }}>+ Join meeting</div>
                                        </div>
                                    </div>

                                    {/* Receiver Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "20px", border: "1px solid #F3F4F6" }}>
                                        <div style={{ fontSize: "0.7rem", color: "#6B7280", marginBottom: "12px" }}>Receiver</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#E5E7EB", overflow: "hidden" }}>
                                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="" style={{ width: "100%" }} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "0.75rem", fontWeight: 700 }}>Andre fadel</div>
                                                <div style={{ fontSize: "0.6rem", color: "#9CA3AF" }}>+880 456 7890</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Growth Stats Card */}
                                    <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "24px", border: "1px solid #E5E7EB", gridColumn: "span 2" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <div>
                                                <div style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "4px" }}>75.9K</div>
                                                <div style={{ fontSize: "0.75rem", color: "#00A651", fontWeight: 600 }}>+58.3% this year growth</div>
                                            </div>
                                            <div style={{ width: "100px", height: "8px", borderRadius: "4px", backgroundColor: "#F3F4F6", position: "relative" }}>
                                                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "70%", backgroundColor: "#FFD700", borderRadius: "4px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Ornament Background Elements */}
                        <div style={{
                            position: "absolute", bottom: "40px", left: "-60px",
                            display: "grid", gridTemplateColumns: "repeat(4, 24px)", gap: "8px", opacity: 0.1
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
