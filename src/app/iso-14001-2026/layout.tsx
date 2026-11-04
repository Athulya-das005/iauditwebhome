import type { Metadata } from "next";

const pageUrl = "https://iaudit.global/iso-14001-2026";

export const metadata: Metadata = {
    title: "ISO 14001:2026 Transition & Audit Platform | iAudit Global",
    description: "Prepare your environmental management system for the ISO 14001:2026 revision with structured audits and gap analysis.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "ISO 14001:2026 Transition & Audit Platform | iAudit Global",
        description: "Prepare your environmental management system for the ISO 14001:2026 revision with structured audits and gap analysis.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "website",
    },
};

export default function ISO14001Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

