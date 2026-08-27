"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const HERO_IMAGE = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80";
const SNAPSHOT_IMAGE = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

const coreAreas = [
    {
        title: "Leadership, Policy and Governance",
        text: "Evaluate leadership commitment, management-system governance, and how well top management drives quality, safety and environmental priorities.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Context, Stakeholders and Scope",
        text: "Assess how your system identifies internal and external issues, interested parties and the real operating context of your organisation.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Planning, Risk and Change",
        text: "Check the maturity of risk identification, opportunity planning and how change is controlled before it becomes a finding.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Support and Documented Information",
        text: "Measure competence, communication and document control against ISO 9001, 14001 and 45001 requirements.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Operations and Process Control",
        text: "Review operational controls, supplier oversight and how consistently processes are followed on the floor or on site.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Performance Evaluation and Improvement",
        text: "Measure monitoring, internal audits, management review, corrective actions and continual improvement.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
];

export default function AssessmentsLanding() {
    const [isMobile, setIsMobile] = useState(false);
    const font = '"Pp Neue Montreal", sans-serif';

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div style={{ background: "#f7f8f5", minHeight: "100vh", fontFamily: font }}>
            <section style={{ position: "relative", minHeight: isMobile ? "78vh" : "88vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
                <Image src={HERO_IMAGE} alt="ISO audit self assessment and gap analysis" fill priority sizes="100vw" quality={90} style={{ objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,28,18,0.86) 0%, rgba(4,28,18,0.55) 55%, rgba(4,28,18,0.28) 100%)" }} />
                <div style={{ position: "relative", zIndex: 1, maxWidth: "1180px", margin: "0 auto", padding: isMobile ? "7rem 1.25rem 3.5rem" : "8.5rem 2rem 5rem", width: "100%" }}>
                    <p style={{ margin: "0 0 1rem", color: "#9fe3c0", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem" }}>Free ISO readiness tools</p>
                    <h1 style={{ margin: "0 0 1.1rem", color: "#fff", fontSize: isMobile ? "2.4rem" : "4.15rem", lineHeight: 1.08, letterSpacing: "-0.035em", fontWeight: 600, maxWidth: "920px" }}>
                        Are you ready for a stronger ISO audit programme?
                    </h1>
                    <p style={{ margin: "0 0 2rem", color: "rgba(255,255,255,0.88)", fontSize: isMobile ? "1.05rem" : "1.22rem", lineHeight: 1.7, maxWidth: "680px" }}>
                        Quickly assess your management system, identify strengths and gaps, and see where self assessment or a structured gap analysis will give you the clearest next step.
                    </p>
                    <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                        <Link href="#choose" style={primaryBtn}>Choose your assessment</Link>
                        <Link href="/iso-14001-2026-self-assessment-tool" style={ghostBtn}>Start self assessment</Link>
                    </div>
                </div>
            </section>

            <section style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "3.5rem 1.25rem" : "5.5rem 2rem", textAlign: "center" }}>
                <h2 style={{ margin: "0 0 1rem", fontSize: isMobile ? "1.85rem" : "2.6rem", color: "#143528", letterSpacing: "-0.03em", lineHeight: 1.2 }}>Get a clear ISO readiness snapshot</h2>
                <p style={{ margin: "0 auto 1.25rem", maxWidth: "760px", color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    Take a free ISO self assessment or gap analysis to benchmark your management system against the audit areas that matter most. In minutes, you will see where leadership, planning, operations and improvement are strong — and where evidence is missing.
                </p>
                <p style={{ margin: "0 auto 2rem", maxWidth: "760px", color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    Built by practising ISO auditors, these tools highlight common audit pitfalls so you can prioritise actions before your next internal or certification audit.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: isMobile ? "1rem" : "2.5rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
                    {["It takes just a few minutes", "It is completely free", "Request your report by email"].map((item) => (
                        <span key={item} style={{ color: "#006644", fontWeight: 700, fontSize: "0.95rem" }}>✓ {item}</span>
                    ))}
                </div>
                <div style={{ position: "relative", width: "100%", maxWidth: "920px", margin: "0 auto", borderRadius: "1.25rem", overflow: "hidden", boxShadow: "0 18px 50px rgba(16,47,32,0.12)", aspectRatio: "16 / 8" }}>
                    <Image src={SNAPSHOT_IMAGE} alt="Structured ISO audit readiness snapshot" fill sizes="920px" quality={90} style={{ objectFit: "cover" }} />
                </div>
            </section>

            <section id="choose" style={{ background: "#10291d", padding: isMobile ? "3.5rem 1.25rem" : "5rem 2rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <p style={{ margin: "0 0 0.6rem", color: "#9fe3c0", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.75rem", textAlign: "center" }}>Choose your path</p>
                    <h2 style={{ margin: "0 0 2.25rem", color: "#fff", fontSize: isMobile ? "1.85rem" : "2.5rem", textAlign: "center", letterSpacing: "-0.03em" }}>Self assessment or gap analysis</h2>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.25rem" }}>
                        <OptionCard
                            title="ISO Self Assessment"
                            text="A fast, clause-aligned check of how mature your management system is today. Ideal for quality, HSE and operations teams who want a first snapshot before a deeper review."
                            href="/iso-14001-2026-self-assessment-tool"
                            cta="Start self assessment"
                            image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
                        />
                        <OptionCard
                            title="ISO Gap Analysis"
                            text="A structured look at where current practice falls short of ISO 14001:2026. Mark Comply, OFI or NC across 61 questions to identify nonconformities, missing evidence and the actions that should come first."
                            href="/iso-audit-assessments/gap-analysis"
                            cta="Start gap analysis"
                            image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                        />
                    </div>
                </div>
            </section>

            <section style={{ maxWidth: "1180px", margin: "0 auto", padding: isMobile ? "3.5rem 1.25rem 4.5rem" : "5.5rem 2rem 6rem" }}>
                <h2 style={{ margin: "0 0 0.75rem", fontSize: isMobile ? "1.85rem" : "2.5rem", color: "#143528", letterSpacing: "-0.03em", textAlign: "center" }}>Your assessment covers these core areas</h2>
                <p style={{ margin: "0 auto 2.5rem", maxWidth: "680px", color: "#6b7280", textAlign: "center", lineHeight: 1.7 }}>
                    Both tools follow the same audit logic used by certified auditors: from leadership and context through operations, performance and improvement.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: "1.15rem" }}>
                    {coreAreas.map((area) => (
                        <article key={area.title} style={{ background: "#fff", borderRadius: "1.15rem", overflow: "hidden", border: "1px solid #e6ebe4", boxShadow: "0 10px 28px rgba(16,47,32,0.05)" }}>
                            <div style={{ position: "relative", height: "168px" }}>
                                <Image src={area.image} alt={area.title} fill sizes="380px" quality={90} style={{ objectFit: "cover" }} />
                            </div>
                            <div style={{ padding: "1.2rem 1.2rem 1.35rem" }}>
                                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.08rem", color: "#143528" }}>{area.title}</h3>
                                <p style={{ margin: 0, color: "#6b7280", fontSize: "0.92rem", lineHeight: 1.65 }}>{area.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <CTA
                title={<>Ready to see where you stand?</>}
                description="Start with a self assessment or gap analysis, then request your report. Questions will be added next — this first step gets the structure in place."
                buttonText="Start self assessment"
                buttonHref="/iso-14001-2026-self-assessment-tool"
                secondaryButtonText="Start gap analysis"
                secondaryButtonHref="/iso-audit-assessments/gap-analysis"
            />
            <Footer />
        </div>
    );
}

function OptionCard({ title, text, href, cta, image }: { title: string; text: string; href: string; cta: string; image: string }) {
    return (
        <article style={{ background: "#fff", borderRadius: "1.35rem", overflow: "hidden", display: "flex", flexDirection: "column", minHeight: "100%" }}>
            <div style={{ position: "relative", height: "220px" }}>
                <Image src={image} alt={title} fill sizes="540px" quality={90} style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "1.5rem 1.5rem 1.65rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ margin: "0 0 0.7rem", fontSize: "1.45rem", color: "#143528", letterSpacing: "-0.02em" }}>{title}</h3>
                <p style={{ margin: "0 0 1.35rem", color: "#4b5563", lineHeight: 1.7, flex: 1 }}>{text}</p>
                <Link href={href} style={{ ...primaryBtn, textAlign: "center" }}>{cta}</Link>
            </div>
        </article>
    );
}

const primaryBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #07a34d 0%, #006644 100%)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.95rem 1.45rem",
    fontWeight: 700,
    fontSize: "0.95rem",
};

const ghostBtn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "0.95rem 1.45rem",
    fontWeight: 700,
    fontSize: "0.95rem",
    border: "1px solid rgba(255,255,255,0.45)",
};
