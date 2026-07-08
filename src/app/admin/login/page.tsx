import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
    return (
        <Suspense
            fallback={
                <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", color: "#6b7280" }}>
                    Loading...
                </div>
            }
        >
            <AdminLoginForm />
        </Suspense>
    );
}
