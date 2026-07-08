export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 2000,
                background: "#f8fafc",
                overflow: "auto",
            }}
        >
            {children}
        </div>
    );
}
