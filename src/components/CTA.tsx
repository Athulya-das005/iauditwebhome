"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA({ backgroundColor = "#fff" }: { backgroundColor?: string }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="cta" style={{
            padding: isMobile ? "3rem 0" : "5rem 0",
            backgroundColor: backgroundColor,
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        backgroundColor: "#003E3A",
                        borderRadius: isMobile ? "1rem" : "1.5rem",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
                        minHeight: isMobile ? "auto" : "480px",
                        position: "relative",
                        color: "#fff"
                    }}
                >
                    {/* Left Content */}
                    <div style={{
                        padding: isMobile ? "3rem 1.5rem" : "4rem 4rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        zIndex: 10,
                        textAlign: isMobile ? "center" : "left",
                        alignItems: isMobile ? "center" : "flex-start"
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
                                fontSize: isMobile ? "2rem" : "2.8rem",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                marginBottom: "1.5rem",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            {isMobile ? "Ready To Upgrade Your Audit Process?" : <>Ready To Upgrade Your<br /> Audit Process?</>}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{
                                fontSize: isMobile ? "1rem" : "1.1rem",
                                fontWeight: 400,
                                opacity: 0.8,
                                marginBottom: isMobile ? "2rem" : "2.5rem",
                                lineHeight: 1.5,
                                maxWidth: "520px"
                            }}
                        >
                            Join the global community of auditors who have moved beyond spreadsheets. Create oversight in days, not months.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ width: isMobile ? "100%" : "fit-content" }}
                        >
                            <Link
                                href="https://apps.iaudit.global"
                                className="btn-animate"
                                style={{
                                    padding: isMobile ? "0.8rem 2rem" : "1rem 3rem",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    width: "100%",
                                    marginBottom: isMobile ? "2rem" : "3rem",
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                <span>Start Free Trial</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={{
                                display: "flex",
                                gap: isMobile ? "1rem" : "2rem",
                                alignItems: "center",
                                flexDirection: isMobile ? "column" : "row"
                            }}
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
                                <span style={{ fontSize: "0.85rem", fontWeight: 400, opacity: 0.85 }}>Just pay what you see</span>
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
                    <div style={{
                        position: "relative",
                        backgroundColor: "rgba(255,255,255,0.02)",
                        height: isMobile ? "300px" : "auto",
                        overflow: "hidden"
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : 80, y: 40 }}
                            whileInView={{ opacity: 1, x: isMobile ? 20 : 0, y: isMobile ? 20 : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            style={{
                                position: "absolute",
                                top: isMobile ? "20px" : "40px",
                                left: "20px",
                                width: isMobile ? "100%" : "640px",
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
                            <div style={{ width: "160px", borderRight: "1px solid #F3F4F6", padding: "1.5rem 0", backgroundColor: "#fff" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem", padding: "0 1.5rem" }}>
                                    <div style={{ width: "20px", height: "20px", borderRadius: "5px", background: "linear-gradient(135deg, #058c42, #047a39)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ width: "4px", height: "4px", backgroundColor: "#fff", borderRadius: "50%", marginTop: "-6px" }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <span style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1 }}>iAudit</span>
                                        <span style={{ fontSize: "0.45rem", fontWeight: 500, color: "#6B7280", letterSpacing: "0.05em", marginTop: "2px" }}>GLOBAL</span>
                                    </div>
                                </div>

                                <div style={{ marginBottom: "1.5rem" }}>
                                    <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#9CA3AF", padding: "0 1.5rem", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>OVERVIEW</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.4rem 1.5rem", fontSize: "0.8rem", color: "#6B7280" }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> Dashboard
                                    </div>
                                </div>

                                <div>
                                    <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#9CA3AF", padding: "0 1.5rem", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>MANAGEMENT</div>
                                    {[
                                        { name: "Company", active: false, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> },
                                        { name: "Users", active: false, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> },
                                        { name: "Self Assessment", active: false, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg> },
                                        { name: "Gap Analysis", active: true, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
                                        { name: "Audit Program", active: false, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> },
                                        { name: "Findings", active: false, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> },
                                    ].map(item => (
                                        <div key={item.name} style={{
                                            display: "flex", alignItems: "center", gap: "0.6rem",
                                            padding: "0.45rem 1.5rem", fontSize: "0.75rem",
                                            fontWeight: item.active ? 600 : 400,
                                            backgroundColor: item.active ? "rgba(5,140,66,0.06)" : "transparent",
                                            color: item.active ? "#058c42" : "#4B5563",
                                            position: "relative"
                                        }}>
                                            {item.icon}
                                            {item.name}
                                            {item.active && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", backgroundColor: "#058c42" }} />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div style={{ flex: 1, padding: "2rem", backgroundColor: "#FDFDFD", display: "flex", gap: "1.2rem", overflow: "hidden" }}>

                                {/* Audit Summary Column */}
                                <div style={{ flex: "1", backgroundColor: "#fff", borderRadius: "8px", padding: "1.5rem", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                                    <div style={{ width: "100%", marginBottom: "2rem" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "0 0 2px 0", color: "#111827" }}>Audit Summary</h3>
                                        <p style={{ fontSize: "0.7rem", color: "#6B7280", margin: 0 }}>Overall compliance status</p>
                                    </div>

                                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                                        <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#111827", lineHeight: 1, letterSpacing: "-0.02em" }}>49%</div>
                                        <div style={{
                                            display: "inline-block", backgroundColor: "#FEF2F2", color: "#EF4444",
                                            padding: "4px 10px", borderRadius: "20px", fontSize: "0.65rem",
                                            fontWeight: 600, marginTop: "10px"
                                        }}>
                                            Requires Improvement
                                        </div>
                                    </div>

                                    {/* Donut Chart */}
                                    <div style={{ position: "relative", width: "140px", height: "140px", marginBottom: "2rem" }}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            style={{
                                                width: "100%", height: "100%", borderRadius: "50%",
                                                background: "conic-gradient(#058c42 0% 176deg, #EF4444 176deg 260deg, #F59E0B 260deg 360deg)"
                                            }}
                                        />
                                        <div style={{ position: "absolute", top: "25%", left: "25%", width: "50%", height: "50%", backgroundColor: "#fff", borderRadius: "50%" }} />

                                        {/* Chart Segment Spacers */}
                                        <svg width="140" height="140" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                                            <line x1="70" y1="70" x2="70" y2="0" stroke="#fff" strokeWidth="6" />
                                            <line x1="70" y1="70" x2="139" y2="82" stroke="#fff" strokeWidth="6" />
                                            <line x1="70" y1="70" x2="5" y2="92" stroke="#fff" strokeWidth="6" />
                                        </svg>
                                    </div>

                                    <div style={{ display: "flex", gap: "0.8rem", fontSize: "0.7rem", color: "#6B7280", fontWeight: 500, marginTop: "auto" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}><div style={{ width: "8px", height: "8px", backgroundColor: "#058c42" }} /> Comply</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}><div style={{ width: "8px", height: "8px", backgroundColor: "#F59E0B" }} /> OFI</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}><div style={{ width: "8px", height: "8px", backgroundColor: "#EF4444" }} /> NC</div>
                                    </div>
                                </div>

                                {/* Clause Breakdown Column */}
                                <div style={{ flex: "1.2", backgroundColor: "#fff", borderRadius: "8px", padding: "1.5rem", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                                    <div style={{ marginBottom: "2rem" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "0 0 2px 0", color: "#111827" }}>Clause Breakdown</h3>
                                        <p style={{ fontSize: "0.7rem", color: "#6B7280", margin: 0 }}>Compliance by ISO clause</p>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", flex: 1, justifyContent: "center" }}>
                                        {[
                                            { clause: "4. Context", val: "11%", width: "11%" },
                                            { clause: "5. Leadership", val: "90%", width: "90%" },
                                            { clause: "6. Planning", val: "33%", width: "33%" },
                                            { clause: "7. Support", val: "0%", width: "0%" },
                                            { clause: "8. Operation", val: "50%", width: "50%" },
                                            { clause: "9. Performance", val: "50%", width: "50%" },
                                            { clause: "10. Improvement", val: "60%", width: "60%" },
                                        ].map((item, i) => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                                                <div style={{ width: "70px", fontSize: "0.65rem", color: "#4B5563", fontWeight: 500, lineHeight: 1.1 }}>{item.clause}</div>
                                                <div style={{ flex: 1, height: "6px", backgroundColor: "#1F2937", borderRadius: "3px", position: "relative", overflow: "hidden" }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: item.width }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                                        style={{ position: "absolute", top: 0, left: 0, height: "100%", backgroundColor: "#058c42", borderRadius: "3px" }}
                                                    />
                                                </div>
                                                <div style={{ width: "24px", fontSize: "0.65rem", fontWeight: 700, color: "#111827", textAlign: "right" }}>{item.val}</div>
                                            </div>
                                        ))}
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
