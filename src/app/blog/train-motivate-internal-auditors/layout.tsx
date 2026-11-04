import type { Metadata } from "next";

const pageUrl = "https://iaudit.global/blog/train-motivate-internal-auditors";

export const metadata: Metadata = {
    title: "How to Train and Motivate Internal Auditors Without Burning Them Out",
    description: "Build auditor competence and energy with coaching, recognition and sustainable workloads.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "How to Train and Motivate Internal Auditors Without Burning Them Out",
        description: "Build auditor competence and energy with coaching, recognition and sustainable workloads.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function TrainMotivateLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

