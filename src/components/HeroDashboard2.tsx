"use client";

import { motion } from "framer-motion";

export default function HeroDashboard2() {
    const sidebarItems = [
        { category: "OVERVIEW", items: ["Dashboard"] },
        { category: "MANAGEMENT", items: ["Company", "Users", "Self Assessment", "Gap Analysis", "Audit Program", "Audit Plan", "Audit", "Findings", "Audit Templates", "Audit Reports"] },
        { category: "BILLING", items: ["Subscription"] }
    ];

    const kpis = [
        { label: "Companies", value: "1", trend: "+12%", color: "#3b82f6", bg: "#eff6ff", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="21" x2="9" y2="9" /><line x1="3" y1="9" x2="21" y2="9" /></svg> },
        { label: "Sites", value: "2", trend: "+5%", color: "#f59e0b", bg: "#fffbeb", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg> },
        { label: "Audit Programs", value: "4", trend: "+8%", color: "#8b5cf6", bg: "#f5f3ff", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg> },
        { label: "Total Audits", value: "14", trend: "+2%", color: "#058c42", bg: "#f0fdf4", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                display: "flex",
                overflow: "hidden",
                fontFamily: '"Pp Neue Montreal", Inter, sans-serif',
                height: "100%",
                minHeight: "520px",
                userSelect: "none",
                boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                border: "1px solid #f1f5f9"
            }}
        >
            {/* Sidebar */}
            <div style={{
                width: "210px",
                flexShrink: 0,
                background: "#f8fafc",
                borderRight: "1px solid #f1f5f9",
                display: "flex",
                flexDirection: "column",
                padding: "24px 0",
            }}>
                {/* Logo Refined */}
                <div style={{ padding: "0 24px 28px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: 28, height: 28, background: "#058c42", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(5,140,66,0.15)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: "15px", color: "#058c42", letterSpacing: "-0.02em" }}>audit <span style={{ color: "#1f2937" }}>Global</span></span>
                </div>

                {/* Nav Groups Refined */}
                <div style={{ overflowY: "auto", flex: 1, padding: "0 12px" }}>
                    {sidebarItems.map((group) => (
                        <div key={group.category} style={{ marginBottom: "22px" }}>
                            <div style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", padding: "0 12px 10px", letterSpacing: "0.08em" }}>{group.category}</div>
                            {group.items.map(item => (
                                <div key={item} style={{
                                    padding: "9px 12px",
                                    borderRadius: "10px",
                                    fontSize: "13px",
                                    fontWeight: (item === "Dashboard" ? 600 : 500),
                                    color: (item === "Dashboard" ? "#058c42" : "#64748b"),
                                    background: (item === "Dashboard" ? "rgba(5, 140, 66, 0.06)" : "transparent"),
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "2px",
                                    cursor: "pointer",
                                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                                }}>
                                    <div style={{ width: 14, height: 14, opacity: (item === "Dashboard" ? 1 : 0.5), color: (item === "Dashboard" ? "#058c42" : "currentColor") }}>
                                        {item === "Dashboard" ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                        ) : (
                                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", margin: "auto" }} />
                                        )}
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* User Profile Hook */}
                <div style={{ padding: "16px 20px", borderTop: "1px solid #f1f5f9", marginTop: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#1f2937" }}>Adam Smith</div>
                        <div style={{ fontSize: "10px", color: "#94a3b8" }}>Lead Auditor</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, background: "#ffffff", padding: "28px", display: "flex", flexDirection: "column", gap: "28px", overflow: "hidden" }}>

                {/* Header Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", margin: 0 }}>Dashboard Overview</h2>
                        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "2px" }}>Welcome back, Adam. Here is your audit progress.</p>
                    </div>
                </div>

                {/* KPI Row - Center Aligned Cleanly */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                    {kpis.map((kpi) => (
                        <motion.div
                            key={kpi.label}
                            variants={itemVariants}
                            whileHover={{ y: -4, shadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                            style={{
                                background: "#fff",
                                padding: "24px 16px",
                                borderRadius: "16px",
                                border: "1px solid #f1f5f9",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                transition: "box-shadow 0.3s ease"
                            }}
                        >
                            <div style={{ width: 42, height: 42, background: kpi.bg, color: kpi.color, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                                {kpi.icon}
                            </div>
                            <div style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>{kpi.value}</div>
                            <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748b", marginTop: "8px" }}>{kpi.label}</div>
                            <div style={{
                                fontSize: "11px",
                                fontWeight: 700,
                                color: (kpi.trend.includes("+") ? "#10b981" : "#64748b"),
                                background: (kpi.trend.includes("+") ? "#f0fdf4" : "#f1f5f9"),
                                padding: "2px 8px",
                                borderRadius: "10px",
                                marginTop: "8px"
                            }}>
                                {kpi.trend} from last month
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Area Refined */}
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "24px", flex: 1 }}>

                    {/* Left: Audit Trend Premium */}
                    <motion.div
                        variants={itemVariants}
                        style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.01)" }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                            <div>
                                <div style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a" }}>Audit Performance</div>
                                <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "2px" }}>Audits scheduled vs. completed per month</div>
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#64748b", fontWeight: 600 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#058c42" }} /> Scheduled
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#64748b", fontWeight: 600 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1e293b" }} /> Completed
                                </div>
                            </div>
                        </div>

                        {/* Chart with Gradients and Clean Lines */}
                        <div style={{ flex: 1, position: "relative", marginTop: "10px" }}>
                            <svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#058c42" stopOpacity="0.12" />
                                        <stop offset="100%" stopColor="#058c42" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Subtle horizontal grid lines */}
                                {[0, 30, 60, 90, 120].map(y => (
                                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f8fafc" strokeWidth="1" />
                                ))}
                                {/* Area Fill Animation */}
                                <motion.path
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    d="M 0 100 Q 50 100, 100 20 T 200 100 L 400 100 V 120 H 0 Z"
                                    fill="url(#areaGradient)"
                                />
                                {/* Scheduled Path */}
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
                                    d="M 0 100 Q 50 100, 100 20 T 200 100 L 400 100"
                                    fill="none"
                                    stroke="#058c42"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                {/* Completed Path */}
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.8, ease: "easeInOut", delay: 0.8 }}
                                    d="M 0 100 Q 50 100, 100 85 T 200 100 L 400 100"
                                    fill="none"
                                    stroke="#1e293b"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                {/* Data Points */}
                                <motion.circle initial={{ r: 0 }} animate={{ r: 5 }} transition={{ delay: 1.4 }} cx="100" cy="20" fill="#058c42" stroke="#fff" strokeWidth="2" />
                                <motion.circle initial={{ r: 0 }} animate={{ r: 5 }} transition={{ delay: 1.7 }} cx="100" cy="85" fill="#1e293b" stroke="#fff" strokeWidth="2" />
                            </svg>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px", fontSize: "11px", color: "#94a3b8", fontWeight: 600 }}>
                                <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Finding Distribution Refined */}
                    <motion.div
                        variants={itemVariants}
                        style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.01)" }}
                    >
                        <div style={{ marginBottom: "24px" }}>
                            <div style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a" }}>Findings Breakdown</div>
                            <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "2px" }}>Total non-conformances</div>
                        </div>

                        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ position: "relative", width: 160, height: 160 }}>
                                <svg width="160" height="160" viewBox="0 0 160 160">
                                    <circle cx="80" cy="80" r="60" fill="none" stroke="#f1f5f9" strokeWidth="16" />
                                    {/* Major N/C - Red */}
                                    <motion.circle
                                        initial={{ strokeDasharray: "0 377" }}
                                        animate={{ strokeDasharray: "94 377" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        cx="80" cy="80" r="60" fill="none" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" transform="rotate(-90 80 80)" />
                                    {/* Minor N/C - Orange */}
                                    <motion.circle
                                        initial={{ strokeDasharray: "0 377" }}
                                        animate={{ strokeDasharray: "94 377" }}
                                        transition={{ duration: 1.5, delay: 0.8 }}
                                        cx="80" cy="80" r="60" fill="none" stroke="#f97316" strokeWidth="16" strokeLinecap="round" transform="rotate(0 80 80)" />
                                    {/* OFI - Gold */}
                                    <motion.circle
                                        initial={{ strokeDasharray: "0 377" }}
                                        animate={{ strokeDasharray: "188 377" }}
                                        transition={{ duration: 1.5, delay: 1.1 }}
                                        cx="80" cy="80" r="60" fill="none" stroke="#eab308" strokeWidth="16" strokeLinecap="round" transform="rotate(90 80 80)" />
                                </svg>
                                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase" }}>TOTAL</div>
                                    <div style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>04</div>
                                </div>
                            </div>

                            <div style={{ width: "100%", marginTop: "32px" }}>
                                {[
                                    { label: "OFI (Opportunity)", value: 2, pct: "50%", color: "#eab308" },
                                    { label: "Minor N/C", value: 1, pct: "25%", color: "#f97316" },
                                    { label: "Major N/C", value: 1, pct: "25%", color: "#ef4444" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", fontSize: "13px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#64748b", fontWeight: 500 }}>
                                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color }} />
                                            {item.label}
                                        </div>
                                        <div style={{ display: "flex", gap: "12px", fontWeight: 700, color: "#0f172a" }}>
                                            <span>{item.value}</span>
                                            <span style={{ color: "#94a3b8", fontWeight: 500 }}>{item.pct}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
