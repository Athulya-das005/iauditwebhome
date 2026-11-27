"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import LogoLoop from "@/components/LogoLoop/LogoLoop";

const pricingTestimonials = [
    {
        quote: "Our biggest issue was inconsistent audits across sites. Standardised checklists and dashboards finally gave us proper visibility and control.",
        author: "Priya Menon",
        role: "Head of Internal Audit",
        company: "Acme Manufacturing",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Verified Audit Expert",
    },
    {
        quote: "Writing reports used to take days. Now I capture evidence on-site and generate professional ISO-compliant reports instantly. A huge time saver.",
        author: "Daniel Gomez",
        role: "Compliance Manager",
        company: "FinTrust Bank",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Verified Auditor",
    },
    {
        quote: "We lost audit context when our consultant left. With iAudit our history stays with us. Zero vendor access means complete privacy.",
        author: "Amira El-Sayed",
        role: "QA Lead",
        company: "Global Pharma Co.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Certified Lead Auditor",
    },
    {
        quote: "We were drowning in Excel sheets. iAudit centralised everything into one PDCA workflow. It is a relief to have one source of truth.",
        author: "Rajesh Kapoor",
        role: "Operations Director",
        company: "NovaTech Solutions",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Verified Audit Expert",
    },
];

const pricingFaqs = [
    {
        question: "What is iAudit Global?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                iAudit Global is ISO audit management software built by auditors. It helps teams plan internal audits, capture evidence, report findings and track corrective actions for ISO 9001, ISO 14001 and ISO 45001.
            </p>
        ),
    },
    {
        question: "Is there a free plan, and what does it include?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Yes. The Free plan is an ongoing option at £0 or $0 per user. You can run gap analyses and self-assessments, review your findings and analytics summaries, and download reports. The Free plan is separate from the 14-day trial.
            </p>
        ),
    },
    {
        question: "What can I do during the 14-day free trial?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                You can try iAudit with a real audit. Plan the audit, capture evidence, record findings and track follow-up actions to see how the workflow fits your team. You don’t need a credit card to start.
            </p>
        ),
    },
    {
        question: "What happens when the free trial ends?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                At the end of the 14 days, you can choose a paid plan or end your trial without being charged. If you choose a paid plan, you’ll see the price and billing terms before payment is required.
            </p>
        ),
    },
    {
        question: "What’s the difference between Free, Unos, Dos and Tres?",
        answer: (
            <div>
                <div style={{ overflowX: "auto", marginBottom: "0.85rem" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.93rem", textAlign: "left" }}>
                        <thead>
                            <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                                <th style={{ padding: "0.5rem 0.75rem", color: "#111827", fontWeight: 600 }}>Plan</th>
                                <th style={{ padding: "0.5rem 0.75rem", color: "#111827", fontWeight: 600 }}>What you can do</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                                <td style={{ padding: "0.6rem 0.75rem", fontWeight: 600, color: "#006644", verticalAlign: "top" }}>Free</td>
                                <td style={{ padding: "0.6rem 0.75rem", color: "#4b5563", lineHeight: 1.5 }}>Run gap analyses and self-assessments, review your results and download reports.</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                                <td style={{ padding: "0.6rem 0.75rem", fontWeight: 600, color: "#006644", verticalAlign: "top" }}>Unos</td>
                                <td style={{ padding: "0.6rem 0.75rem", color: "#4b5563", lineHeight: 1.5 }}>Run unlimited audits against one ISO standard. Schedule audits, capture evidence, manage nonconformities and export reports in Excel, PDF or Word.</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                                <td style={{ padding: "0.6rem 0.75rem", fontWeight: 600, color: "#006644", verticalAlign: "top" }}>Dos</td>
                                <td style={{ padding: "0.6rem 0.75rem", color: "#4b5563", lineHeight: 1.5 }}>Manage audits against two ISO standards across multiple sites. Get all Unos features, plus dashboards for sites and nonconformities, and priority email support.</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                                <td style={{ padding: "0.6rem 0.75rem", fontWeight: 600, color: "#006644", verticalAlign: "top" }}>Tres</td>
                                <td style={{ padding: "0.6rem 0.75rem", color: "#4b5563", lineHeight: 1.5 }}>Manage audits against three ISO standards across up to 10 sites. Get all Dos features, plus custom checklists, audit performance analytics and a dedicated account manager.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.6 }}>
                    Choose based on how many standards and sites you audit, and what your team needs to manage the programme.
                </p>
            </div>
        ),
    },
    {
        question: "How do the monthly prices and contract terms work?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                The prices shown for Unos, Dos and Tres are per user, per month for the 1-, 3- or 6-year contract you select. Select a term to see its rate in GBP or USD. Your subscription details show the payment schedule before you purchase.
            </p>
        ),
    },
    {
        question: "Can I upgrade, downgrade or cancel my plan?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Yes. You can request a plan change or cancel your subscription. When a change takes effect depends on your agreement. Cancellation normally takes effect at the end of your current paid billing period, unless your agreement says otherwise.{" "}
                <Link href="/contact" style={{ color: "#006644", textDecoration: "underline", fontWeight: 500 }}>
                    Contact our team about a plan change
                </Link>.
            </p>
        ),
    },
    {
        question: "Who can see my audit data and findings?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Your organisation retains ownership of the records, evidence and documents it adds to iAudit. Paid plans include access controls so you can manage what authorised users can see and do based on their roles.
            </p>
        ),
    },
    {
        question: "Can I reuse my existing Excel audit checklists?",
        answer: (
            <p style={{ margin: 0, lineHeight: 1.7, color: "#4b5563" }}>
                Yes. You can use your existing checklists as a starting point, and Audit Mate can help you draft questions. Tres includes custom checklists. If you need to import spreadsheet files or move historical audit records,{" "}
                <Link href="/contact" style={{ color: "#006644", textDecoration: "underline", fontWeight: 500 }}>
                    ask us about migration options
                </Link>.
            </p>
        ),
    },
];

export default function PricingPageContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const partnerLogos = [
        { src: "/images/clients/stannah.png", alt: "Stannah client logo", title: "Stannah" },
        { src: "/images/clients/fujitec.png", alt: "Fujitec client logo", title: "Fujitec" },
        { src: "/images/clients/construct-lifts.png", alt: "Construct Lifts client logo", title: "Construct Lifts" },
        { src: "/images/clients/peerless.png", alt: "Peerless Lift Services client logo", title: "Peerless Lift Services" },
        { src: "/images/clients/adstone.png", alt: "Adstone Construction Limited client logo", title: "Adstone Construction Limited" },
    ];

    return (
        <>
            <Pricing isPageHero={true} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                    width: "100%",
                    marginTop: isMobile ? "1.5rem" : "3.5rem",
                    paddingBottom: isMobile ? "2rem" : "3.5rem",
                    position: "relative",
                    zIndex: 10,
                    backgroundColor: "#fff",
                    fontFamily: '"Pp Neue Montreal", sans-serif',
                }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                        marginBottom: isMobile ? "2.5rem" : "4rem",
                        fontSize: isMobile ? "0.85rem" : "1rem",
                        color: "rgba(0,0,0,0.6)",
                        padding: isMobile ? "0 1.5rem" : "0",
                        textAlign: "center",
                        lineHeight: 1.6,
                        fontWeight: 400,
                    }}
                >
                    {isMobile ? (
                        <>
                            Trusted by global organisations.
                            <br />
                            Preferred by lead auditors.
                        </>
                    ) : (
                        "Trusted by global organisations. Preferred by lead auditors."
                    )}
                </motion.p>

                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0" }}>
                    <LogoLoop
                        logos={partnerLogos}
                        speed={isMobile ? 30 : 50}
                        direction="left"
                        logoHeight={isMobile ? 45 : 70}
                        gap={isMobile ? 80 : 140}
                        scaleOnHover
                        ariaLabel="Our trusted partners"
                    />
                </div>
            </motion.div>

            <Testimonials items={pricingTestimonials} />

            <FAQAccordion items={pricingFaqs} heading="Frequently asked questions" sparkleText="Support" />

            <CTA backgroundColor="#f9fafb" />
            <Footer />
        </>
    );
}
