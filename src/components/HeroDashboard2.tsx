"use client";

import { motion } from "framer-motion";

export default function HeroDashboard2() {

    const kpis = [
        { label: "Companies", value: "12", desc: "from last month", trend: "↗ +12%", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M13 21V3l8 4v14" /><path d="M9 11v2" /><path d="M9 15v2" /><path d="M17 11v2" /><path d="M17 15v2" /></svg> },
        { label: "Sites", value: "34", desc: "from last month", trend: "↗ +5%", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg> },
        { label: "Departments", value: "87", desc: "from last month", trend: "↗ +15%", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
        { label: "Audit Programs", value: "9", desc: "from last month", trend: "↗ +8%", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 12l2 2 4-4" /></svg> },
        { label: "Total Audits", value: "46", desc: "from last month", trend: "↗ +3%", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const commonTransition = { duration: 0.6, ease: "easeOut" as const };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
                background: "#ffffff",
                borderRadius: "16px",
                display: "flex",
                overflow: "hidden",
                fontFamily: '"Pp Neue Montreal", Inter, sans-serif',
                height: "100%",
                minHeight: "440px",
                userSelect: "none",
                boxShadow: "0 8px 30px rgba(0,0,0,0.03)",
                border: "1px solid #f1f5f9"
            }}
        >
            <div style={{ flex: 1, background: "#f8fafb", padding: "28px 32px", display: "flex", flexDirection: "column", gap: "24px", overflow: "hidden" }}>
                {/* 5 KPIs */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
                    {kpis.map((kpi) => (
                        <motion.div
                            key={kpi.label}
                            variants={itemVariants}
                            transition={commonTransition}
                            whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.04)" }}
                            style={{
                                background: "#fff",
                                padding: "14px",
                                borderRadius: "12px",
                                border: "1px solid #f1f5f9",
                                display: "flex",
                                flexDirection: "column",
                                transition: "box-shadow 0.2s ease"
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                                <div style={{ width: 36, height: 36, background: "#ecfdf5", color: "#10b981", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {kpi.icon}
                                </div>
                                <div style={{
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    color: "#10b981",
                                    background: "#ecfdf5",
                                    padding: "2px 8px",
                                    borderRadius: "12px",
                                }}>
                                    {kpi.trend}
                                </div>
                            </div>
                            <div style={{ fontSize: "24px", fontWeight: 700, color: "#111827", lineHeight: 1 }}>{kpi.value}</div>
                            <div style={{ fontSize: "12px", fontWeight: 500, color: "#6b7280", marginTop: "4px" }}>{kpi.label}</div>
                            <div style={{ fontSize: "10.5px", color: "#9ca3af", marginTop: "2px" }}>{kpi.desc}</div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "2.8fr 1fr", gap: "14px", flex: 1, minHeight: 0 }}>
                    {/* Left: Audit Trend */}
                    <motion.div
                        variants={itemVariants}
                        transition={commonTransition}
                        style={{ background: "#fff", padding: "18px 20px", borderRadius: "12px", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", minHeight: 0 }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                            <div>
                                <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>Audit Trend</div>
                                <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px" }}>Scheduled vs completed audits</div>
                            </div>
                            <div style={{ fontSize: "20px", color: "#9ca3af", cursor: "pointer", lineHeight: 0.5 }}>...</div>
                        </div>

                        <div style={{ display: "flex", gap: "24px", marginBottom: "10px" }}>
                            <div>
                                <div style={{ fontSize: "11px", color: "#6b7280" }}>Total Scheduled</div>
                                <div style={{ fontSize: "20px", fontWeight: 700, color: "#111827" }}>38</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "11px", color: "#6b7280" }}>Total Completed</div>
                                <div style={{ fontSize: "20px", fontWeight: 700, color: "#111827" }}>27</div>
                            </div>
                        </div>

                        <div style={{ flex: 1, position: "relative", minHeight: "120px", marginTop: "10px" }}>
                            <svg width="100%" height="100%" viewBox="0 0 500 120" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="areaGradientCompact" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Grid lines */}
                                <line x1="20" y1="20" x2="500" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                                <text x="10" y="24" fontSize="10" fill="#9ca3af">8</text>
                                <line x1="20" y1="50" x2="500" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                                <text x="10" y="54" fontSize="10" fill="#9ca3af">6</text>
                                <line x1="20" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                                <text x="10" y="84" fontSize="10" fill="#9ca3af">4</text>
                                <line x1="20" y1="110" x2="500" y2="110" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                                <text x="10" y="114" fontSize="10" fill="#9ca3af">2</text>

                                {/* Scheduled Line (Green) */}
                                <motion.path
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.8 }}
                                    d="M 40 98 C 75 98, 75 68, 110 68 C 145 68, 145 88, 180 88 C 215 88, 215 38, 250 38 C 285 38, 285 8, 320 8 C 355 8, 355 110, 390 110 C 425 110, 425 77, 460 77 V 120 H 40 Z"
                                    fill="url(#areaGradientCompact)"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                                    d="M 40 98 C 75 98, 75 68, 110 68 C 145 68, 145 88, 180 88 C 215 88, 215 38, 250 38 C 285 38, 285 8, 320 8 C 355 8, 355 110, 390 110 C 425 110, 425 77, 460 77"
                                    fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"
                                />
                                {/* Dots for green */}
                                <circle cx="40" cy="98" r="4" fill="#10b981" stroke="#fff" strokeWidth="2" />
                                <circle cx="110" cy="68" r="4" fill="#10b981" stroke="#fff" strokeWidth="2" />
                                <circle cx="180" cy="88" r="4" fill="#10b981" stroke="#fff" strokeWidth="2" />
                                <circle cx="250" cy="38" r="4" fill="#10b981" stroke="#fff" strokeWidth="2" />
                                <circle cx="320" cy="8" r="4" fill="#10b981" stroke="#fff" strokeWidth="2" />
                                <circle cx="390" cy="110" r="4" fill="#10b981" stroke="#fff" strokeWidth="2" />
                                <circle cx="460" cy="77" r="4" fill="#10b981" stroke="#fff" strokeWidth="2" />

                                {/* Completed Line (Dark Blue) */}
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                                    d="M 40 110 C 75 110, 75 95, 110 95 C 145 95, 145 83, 180 83 C 215 83, 215 98, 250 98 C 285 98, 285 62, 320 62 C 355 62, 355 41, 390 41 C 425 41, 425 92, 460 92"
                                    fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round"
                                />
                                {/* Dots for dark */}
                                <circle cx="40" cy="110" r="4" fill="#374151" stroke="#fff" strokeWidth="2" />
                                <circle cx="110" cy="95" r="4" fill="#374151" stroke="#fff" strokeWidth="2" />
                                <circle cx="180" cy="83" r="4" fill="#374151" stroke="#fff" strokeWidth="2" />
                                <circle cx="250" cy="98" r="4" fill="#374151" stroke="#fff" strokeWidth="2" />
                                <circle cx="320" cy="62" r="4" fill="#374151" stroke="#fff" strokeWidth="2" />
                                <circle cx="390" cy="41" r="4" fill="#374151" stroke="#fff" strokeWidth="2" />
                                <circle cx="460" cy="92" r="4" fill="#374151" stroke="#fff" strokeWidth="2" />
                            </svg>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", marginLeft: "40px", marginRight: "10px", fontSize: "10px", color: "#6b7280" }}>
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "16px", marginTop: "16px", fontSize: "11px", color: "#6b7280", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} /> Scheduled</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#374151" }} /> Completed</div>
                        </div>
                    </motion.div>

                    {/* Right: Finding Distribution */}
                    <motion.div
                        variants={itemVariants}
                        transition={commonTransition}
                        style={{ background: "#fff", padding: "18px 20px", borderRadius: "12px", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", minHeight: 0 }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                            <div>
                                <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>Finding Distribution</div>
                                <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px" }}>Audit non-conformances</div>
                            </div>
                            <div style={{ fontSize: "20px", color: "#9ca3af", cursor: "pointer", lineHeight: 0.5 }}>...</div>
                        </div>

                        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ position: "relative", width: 140, height: 140 }}>
                                <svg width="140" height="140" viewBox="0 0 160 160">
                                    <circle cx="80" cy="80" r="55" fill="none" stroke="#f1f5f9" strokeWidth="20" />
                                    {/* Yellow (OFI) 50% = 188 length around */}
                                    <motion.circle initial={{ strokeDasharray: "0 345" }} animate={{ strokeDasharray: "172.5 345" }} transition={{ duration: 1.2, delay: 0.5 }} cx="80" cy="80" r="55" fill="none" stroke="#eab308" strokeWidth="20" strokeLinecap="butt" transform="rotate(-90 80 80)" />
                                    {/* Orange (Minor) 25% = 86 length */}
                                    <motion.circle initial={{ strokeDasharray: "0 345" }} animate={{ strokeDasharray: "86 345" }} transition={{ duration: 1.2, delay: 0.7 }} cx="80" cy="80" r="55" fill="none" stroke="#f97316" strokeWidth="20" strokeLinecap="butt" transform="rotate(90 80 80)" />
                                    {/* Red (Major) 25% = 86 length */}
                                    <motion.circle initial={{ strokeDasharray: "0 345" }} animate={{ strokeDasharray: "86 345" }} transition={{ duration: 1.2, delay: 0.9 }} cx="80" cy="80" r="55" fill="none" stroke="#ef4444" strokeWidth="20" strokeLinecap="butt" transform="rotate(180 80 80)" />
                                    {/* Separators */}
                                    <line x1="80" y1="20" x2="80" y2="30" stroke="#fff" strokeWidth="4"></line>
                                    <line x1="140" y1="80" x2="130" y2="80" stroke="#fff" strokeWidth="4"></line>
                                    <line x1="80" y1="140" x2="80" y2="130" stroke="#fff" strokeWidth="4"></line>
                                </svg>
                                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ fontSize: "11px", color: "#6b7280" }}>Total</div>
                                    <div style={{ fontSize: "24px", fontWeight: 700, color: "#111827", lineHeight: 1, marginTop: "2px" }}>4</div>
                                </div>
                            </div>

                            <div style={{ width: "100%", marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                {[
                                    { color: "#eab308", label: "OFI", val: "2", pct: "50%" },
                                    { color: "#f97316", label: "Minor N/C", val: "1", pct: "25%" },
                                    { color: "#ef4444", label: "Major N/C", val: "1", pct: "25%" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6b7280", fontWeight: 500 }}>
                                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                                            {item.label}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                            <span style={{ fontWeight: 700, color: "#111827" }}>{item.val}</span>
                                            <span style={{ color: "#9ca3af", width: "25px", textAlign: "right" }}>{item.pct}</span>
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
