"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const sections = [
    {
        href: "/admin/hall-of-fame",
        title: "Hall of Fame",
        description:
            "Add, edit, or remove security researchers shown on the public Hall of Fame page, then publish changes live.",
    },
    {
        href: "/admin/checklist-leads",
        title: "Checklist Leads",
        description:
            "View people who requested ISO audit checklists. Use their details to email the checklist manually.",
    },
];

export default function AdminHomePage() {
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.replace("/admin/login");
        router.refresh();
    }

    return (
        <div style={{ maxWidth: "920px", margin: "0 auto", padding: "2.5rem 1.25rem 3rem" }}>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "2rem",
                }}
            >
                <div>
                    <p style={{ margin: 0, color: "#058c42", fontWeight: 700, fontSize: "0.85rem" }}>
                        iAudit Admin
                    </p>
                    <h1 style={{ margin: "0.35rem 0 0.5rem", fontSize: "1.9rem", color: "#111827" }}>
                        Choose a section
                    </h1>
                    <p style={{ margin: 0, color: "#6b7280", lineHeight: 1.6, maxWidth: "520px" }}>
                        Select what you want to manage. More admin tools can be added here later.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={handleLogout}
                    style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        background: "#fff",
                        color: "#111827",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                >
                    Log out
                </button>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                }}
            >
                {sections.map((section) => (
                    <Link
                        key={section.href}
                        href={section.href}
                        style={{
                            display: "block",
                            background: "#fff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            textDecoration: "none",
                            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
                            transition: "border-color 0.2s ease, transform 0.2s ease",
                        }}
                        onMouseEnter={(event) => {
                            event.currentTarget.style.borderColor = "#058c42";
                            event.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(event) => {
                            event.currentTarget.style.borderColor = "#e5e7eb";
                            event.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <h2 style={{ margin: "0 0 0.65rem", fontSize: "1.25rem", color: "#111827" }}>
                            {section.title}
                        </h2>
                        <p style={{ margin: "0 0 1.25rem", color: "#6b7280", lineHeight: 1.6 }}>
                            {section.description}
                        </p>
                        <span style={{ color: "#058c42", fontWeight: 600 }}>Open →</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
