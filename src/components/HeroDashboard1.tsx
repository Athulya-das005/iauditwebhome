"use client";

export default function HeroDashboard1() {
    const navItems = [
        { label: "Dashboard", active: true },
        { label: "Audits", active: false },
        { label: "Schedule", active: false },
        { label: "Documents", active: false },
        { label: "Reports", active: false },
        { label: "Settings", active: false },
    ];

    const upcomingAudits = [
        { name: "ISO 9001 — Internal", date: "28 Feb", dot: "#058c42" },
        { name: "ISO 14001 — Supplier", date: "05 Mar", dot: "#f59e0b" },
        { name: "ISO 45001 — Site", date: "12 Mar", dot: "#3b82f6" },
    ];

    const bars = [38, 55, 45, 60, 35, 70, 50];
    const barDays = ["M", "T", "W", "T", "F", "S", "S"];
    const barColors = ["#cbd5e1", "#058c42", "#cbd5e1", "#058c42", "#cbd5e1", "#f59e0b", "#cbd5e1"];

    const r = 30;
    const circ = 2 * Math.PI * r;
    const pct = 0.89;

    return (
        <div style={{
            background: "#fff",
            borderRadius: "20px",
            display: "flex",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", Inter, sans-serif',
            height: "100%",
            minHeight: "520px",
            userSelect: "none",
        }}>
            {/* Sidebar */}
            <div style={{
                width: "210px",
                flexShrink: 0,
                background: "#f9fafb",
                borderRight: "1px solid #f1f5f9",
                display: "flex",
                flexDirection: "column",
                padding: "22px 0",
            }}>
                {/* Logo */}
                <div style={{ padding: "0 20px 22px", display: "flex", alignItems: "center", gap: "9px" }}>
                    <div style={{ width: 32, height: 32, background: "#058c42", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: "16px", color: "#0a0d12", letterSpacing: "-0.02em" }}>iAudit</span>
                </div>

                {/* Nav */}
                {navItems.map((item) => (
                    <div key={item.label} style={{
                        padding: "9px 15px",
                        margin: "2px 10px",
                        borderRadius: "10px",
                        fontSize: "13.5px",
                        fontWeight: item.active ? 600 : 400,
                        color: item.active ? "#058c42" : "#6b7280",
                        background: item.active ? "rgba(0,166,81,0.09)" : "transparent",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.active ? "#058c42" : "#d1d5db", display: "inline-block", flexShrink: 0 }} />
                        {item.label}
                    </div>
                ))}

                {/* Avatar at bottom */}
                <div style={{ marginTop: "auto", padding: "12px 20px", display: "flex", alignItems: "center", gap: "9px" }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#058c42,#047a39)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#fff", fontWeight: 700 }}>RA</div>
                    <div>
                        <div style={{ fontSize: "12.5px", fontWeight: 600, color: "#374151" }}>R. Athulya</div>
                        <div style={{ fontSize: "11px", color: "#9ca3af" }}>Lead Auditor</div>
                    </div>
                </div>
            </div>

            {/* Main area */}
            <div style={{ flex: 1, padding: "20px 24px", overflow: "hidden", display: "flex", flexDirection: "column", gap: "14px" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ fontSize: "18px", fontWeight: 700, color: "#0a0d12" }}>Audit Dashboard</div>
                        <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>Q1 2025 Overview</div>
                    </div>
                    <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                        <div style={{ height: "32px", width: "145px", background: "#f1f5f9", borderRadius: "9px", display: "flex", alignItems: "center", paddingLeft: "10px", gap: "6px" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            <span style={{ fontSize: "12px", color: "#9ca3af" }}>Search…</span>
                        </div>
                        <div style={{ width: 32, height: 32, background: "#f1f5f9", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                        </div>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#058c42", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#fff", fontWeight: 700 }}>RA</div>
                    </div>
                </div>

                {/* KPI Row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    {[
                        { label: "Total Audits", value: "45", change: "+12%", up: true, bg: "#f0fdf4", border: "#bbf7d0", color: "#16a34a" },
                        { label: "Open NCRs", value: "12", change: "+3 new", up: false, bg: "#fff7ed", border: "#fed7aa", color: "#ea580c" },
                        { label: "Due This Month", value: "8", change: "3 urgent", up: false, bg: "#fffbeb", border: "#fde68a", color: "#d97706" },
                    ].map(kpi => (
                        <div key={kpi.label} style={{ background: kpi.bg, border: `1px solid ${kpi.border}`, borderRadius: "12px", padding: "13px 16px" }}>
                            <div style={{ fontSize: "11px", color: "#6b7280", marginBottom: "4px" }}>{kpi.label}</div>
                            <div style={{ fontSize: "24px", fontWeight: 800, color: "#0a0d12", lineHeight: 1 }}>{kpi.value}</div>
                            <div style={{ fontSize: "11px", color: kpi.color, marginTop: "4px", fontWeight: 500 }}>
                                {kpi.up ? "↑" : "●"} {kpi.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom 2-col */}
                <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "10px", flex: 1 }}>
                    {/* Left: Upcoming */}
                    <div style={{ background: "#f9fafb", borderRadius: "12px", padding: "15px" }}>
                        <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#374151", marginBottom: "10px" }}>Upcoming Audits</div>
                        {upcomingAudits.map(a => (
                            <div key={a.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "9px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.dot, flexShrink: 0 }} />
                                    <span style={{ fontSize: "12.5px", color: "#374151" }}>{a.name}</span>
                                </div>
                                <span style={{ fontSize: "11px", color: "#9ca3af", flexShrink: 0 }}>{a.date}</span>
                            </div>
                        ))}

                        {/* Mini bar chart */}
                        <div style={{ marginTop: "12px" }}>
                            <div style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "6px" }}>Weekly findings</div>
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "44px" }}>
                                {bars.map((h, i) => (
                                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                                        <div style={{ width: "100%", height: `${h}%`, background: barColors[i], borderRadius: "3px 3px 0 0", transition: "height 0.3s" }} />
                                        <div style={{ fontSize: "8.5px", color: "#9ca3af" }}>{barDays[i]}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Compliance donut */}
                    <div style={{ background: "#f9fafb", borderRadius: "12px", padding: "15px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#374151", marginBottom: "10px" }}>Compliance Rate</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", flex: 1 }}>
                            {/* SVG Donut */}
                            <div style={{ position: "relative", width: 84, height: 84, flexShrink: 0 }}>
                                <svg width="84" height="84" viewBox="0 0 84 84">
                                    <circle cx="42" cy="42" r="36" fill="none" stroke="#e5e7eb" strokeWidth="9" />
                                    <circle cx="42" cy="42" r="36" fill="none" stroke="#058c42" strokeWidth="9"
                                        strokeDasharray={`${pct * 2 * Math.PI * 36} ${2 * Math.PI * 36}`}
                                        strokeLinecap="round"
                                        transform="rotate(-90 42 42)" />
                                </svg>
                                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 800, color: "#0a0d12" }}>89%</div>
                            </div>
                            {/* Legend */}
                            <div style={{ fontSize: "11.5px", color: "#6b7280", display: "flex", flexDirection: "column", gap: "7px" }}>
                                {[
                                    { label: "Compliant", color: "#058c42" },
                                    { label: "Minor gap", color: "#f59e0b" },
                                    { label: "Non-conf.", color: "#ef4444" },
                                ].map(l => (
                                    <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <div style={{ width: 9, height: 9, borderRadius: "2px", background: l.color }} />
                                        {l.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Stats row */}
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #e5e7eb" }}>
                            {[{ v: "234", l: "Checks" }, { v: "98%", l: "ISO 9001" }, { v: "85%", l: "ISO 14001" }].map(s => (
                                <div key={s.l} style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#0a0d12" }}>{s.v}</div>
                                    <div style={{ fontSize: "10px", color: "#9ca3af" }}>{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
