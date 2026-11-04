import type { Metadata } from "next";

const pageUrl = "https://iaudit.global/blog/empowering-culture-continuous-improvement";

export const metadata: Metadata = {
    title: "Empowering a Culture of Continuous Improvement Through Audit",
    description: "Use internal audits to strengthen psychological safety, PDCA habits and improvement that lasts.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Empowering a Culture of Continuous Improvement Through Audit",
        description: "Use internal audits to strengthen psychological safety, PDCA habits and improvement that lasts.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function EmpoweringCultureLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

