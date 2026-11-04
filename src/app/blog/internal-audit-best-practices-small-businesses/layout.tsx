import type { Metadata } from "next";

const pageUrl = "https://iaudit.global/blog/internal-audit-best-practices-small-businesses";

export const metadata: Metadata = {
    title: "Internal Audit Best Practices for Small Businesses",
    description: "Practical audit habits that help smaller teams stay compliant without heavy admin overhead.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Internal Audit Best Practices for Small Businesses",
        description: "Practical audit habits that help smaller teams stay compliant without heavy admin overhead.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function SmallBusinessAuditLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

