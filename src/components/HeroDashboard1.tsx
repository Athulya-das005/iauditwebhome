"use client";

export default function HeroDashboard1() {
    const navItems = [
        { label: "Dashboard", active: false },
        { label: "Audit Program", active: false },
        { label: "Audit Plan", active: false },
        { label: "Audit", active: false },
        { label: "Findings", active: true, icon: "alert" },
        { label: "Audit Reports", active: false },
    ];



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
                <div style={{ padding: "0 15px", fontSize: "10px", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.05em", marginBottom: "6px" }}>MANAGEMENT</div>
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
                        {item.icon === "alert" ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        )}
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", fontWeight: 700, color: "#111827" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            Audit Findings
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>All OFI, Minor N/C and Major N/C findings across every audit.</div>
                    </div>
                    <button style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "12px", fontWeight: 500, color: "#374151", cursor: "pointer" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 1 0 2-7l5-5"></path></svg>
                        Refresh
                    </button>
                </div>

                {/* Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    {[
                        { label: "OFI", value: "2", color: "#f59e0b" },
                        { label: "MINOR N/C", value: "1", color: "#111827" },
                        { label: "MAJOR N/C", value: "1", color: "#dc2626" },
                    ].map(card => (
                        <div key={card.label} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "12px 16px", background: "#fff", display: "flex", flexDirection: "column" }}>
                            <div style={{ fontSize: "11px", fontWeight: 700, color: card.color, marginBottom: "8px" }}>{card.label}</div>
                            <div style={{ fontSize: "28px", fontWeight: 700, color: card.color, lineHeight: 1 }}>{card.value}</div>
                            <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "4px" }}>findings</div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                        {[
                            { label: "All (4)", active: true },
                            { label: "OFI (2)", active: false },
                            { label: "Minor N/C (1)", active: false },
                            { label: "Major N/C (1)", active: false },
                        ].map(tab => (
                            <div key={tab.label} style={{
                                padding: "6px 14px",
                                borderRadius: "20px",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: tab.active ? "#fff" : "#4b5563",
                                background: tab.active ? "#1f2937" : "#fff",
                                border: tab.active ? "1px solid #1f2937" : "1px solid #e5e7eb",
                                cursor: "pointer"
                            }}>
                                {tab.label}
                            </div>
                        ))}
                    </div>
                    <div style={{ height: "32px", width: "200px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", display: "flex", alignItems: "center", paddingLeft: "10px", gap: "6px" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <span style={{ fontSize: "12px", color: "#9ca3af" }}>Search findings, audits, clauses...</span>
                    </div>
                </div>

                {/* Table */}
                <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden", marginTop: "4px", background: "#fff" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                        <thead>
                            <tr style={{ background: "#223544", color: "#fff" }}>
                                {["#", "Audit Name", "Clause / Item", "Type", "Finding Details", "Description", "Action By", "View"].map((th, i) => (
                                    <th key={th} style={{ padding: "10px 14px", fontSize: "11.5px", fontWeight: 500, borderBottom: "1px solid #e5e7eb", width: i === 0 ? "40px" : i === 7 ? "50px" : "auto" }}>{th}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 1, name: "ISO 9001:2015 QMS", clause: "Clause 7.1.5", type: "Major N/C", typeColor: "#dc2626", typeBg: "#fee2e2", detail: "Calibration records missing", desc: "Equipment not calibrated properly" },
                                { id: 2, name: "ISO 27001 ISMS", clause: "Clause 8.2", type: "OFI", typeColor: "#d97706", typeBg: "#fef3c7", detail: "Risk assessment update", desc: "Consider emerging threats" },
                                { id: 3, name: "ISO 14001 EMS", clause: "Clause 6.1.2", type: "Minor N/C", typeColor: "#ea580c", typeBg: "#ffedd5", detail: "Spill kit incomplete", desc: "Missing absorbent pads" },
                                { id: 4, name: "ISO 45001 OHSMS", clause: "Clause 10.2", type: "OFI", typeColor: "#d97706", typeBg: "#fef3c7", detail: "Incident reporting delay", desc: "Streamline reporting workflow" },
                            ].map((row, i) => (
                                <tr key={row.id} style={{ borderBottom: i === 3 ? "none" : "1px solid #e5e7eb" }}>
                                    <td style={{ padding: "12px 14px", fontSize: "11px", color: "#6b7280" }}>{row.id}</td>
                                    <td style={{ padding: "12px 14px", fontSize: "12px", fontWeight: 600, color: "#111827" }}>{row.name}</td>
                                    <td style={{ padding: "12px 14px", fontSize: "12px", color: "#6b7280" }}>{row.clause}</td>
                                    <td style={{ padding: "12px 14px" }}>
                                        <div style={{ display: "inline-block", padding: "4px 8px", borderRadius: "12px", fontSize: "10px", fontWeight: 600, color: row.typeColor, background: row.typeBg, textAlign: "center", lineHeight: 1.2 }}>
                                            {row.type}
                                        </div>
                                    </td>
                                    <td style={{ padding: "12px 14px", fontSize: "12px", color: "#4b5563" }}>{row.detail}</td>
                                    <td style={{ padding: "12px 14px", fontSize: "12px", color: "#4b5563" }}>{row.desc}</td>
                                    <td style={{ padding: "12px 14px", fontSize: "12px", color: "#6b7280" }}>—</td>
                                    <td style={{ padding: "12px 14px", color: "#9ca3af" }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
