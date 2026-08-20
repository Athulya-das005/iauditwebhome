"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import AssessmentReportForm from "@/components/AssessmentReportForm";
import type { AssessmentType } from "@/types/assessment-lead";

type Props = {
    type: AssessmentType;
    title: string;
    eyebrow: string;
    description: string;
    image: string;
};

export default function AssessmentPlaceholder({ type, title, eyebrow, description, image }: Props) {
    const font = '"Pp Neue Montreal", sans-serif';
    const pagePath = type === "self-assessment" ? "/iso-audit-assessments/self-assessment" : "/iso-audit-assessments/gap-analysis";

    return (
        <div style={{ minHeight: "100vh", background: "#f7f8f5", fontFamily: font }}>
            <div style={{ position: "relative", width: "100%", height: "42vh", minHeight: "280px", maxHeight: "460px", overflow: "hidden" }}>
                <Image src={image} alt={title} fill priority sizes="100vw" quality={90} style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,28,18,0.15), rgba(4,28,18,0.72))" }} />
                <div style={{ position: "absolute", left: "1.5rem", right: "1.5rem", bottom: "1.75rem", maxWidth: "1180px", margin: "0 auto" }}>
                    <p style={{ margin: "0 0 0.5rem", color: "#9fe3c0", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.75rem" }}>{eyebrow}</p>
                    <h1 style={{ margin: 0, color: "#fff", fontSize: "2.4rem", letterSpacing: "-0.03em" }}>{title}</h1>
                </div>
            </div>

            <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
                <Link href="/iso-audit-assessments/self-assessment" style={{ color: "#006644", textDecoration: "none", fontWeight: 600, fontSize: "0.88rem" }}>
                    ← Back to assessments
                </Link>
                <p style={{ margin: "1.25rem 0 1.75rem", color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8 }}>{description}</p>

                <div style={{ background: "#fff", border: "1px solid #e6ebe4", borderRadius: "1.2rem", padding: "1.5rem 1.4rem", boxShadow: "0 12px 32px rgba(16,47,32,0.06)" }}>
                    <p style={{ margin: "0 0 0.35rem", fontWeight: 700, color: "#143528", fontSize: "1.15rem" }}>Request your report</p>
                    <p style={{ margin: "0 0 1.1rem", color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.65 }}>
                        Enter your work email. We will collect this in the admin panel and send the report manually until the questions and automatic download are live.
                    </p>
                    <AssessmentReportForm assessmentType={type} assessmentTitle={title} pagePath={pagePath} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
