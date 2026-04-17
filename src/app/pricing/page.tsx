"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import LogoLoop from "@/components/LogoLoop/LogoLoop";
import { SiSiemens, SiSchneiderelectric, SiSap, SiBmw, SiMercedes, SiVolkswagen } from "react-icons/si";

const pricingTestimonials = [
    {
        quote: "Our biggest issue was inconsistent audits across sites. Standardised checklists and dashboards finally gave us proper visibility and control.",
        author: "Priya Menon",
        role: "Head of Internal Audit",
        company: "Acme Manufacturing",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Verified Audit Expert"
    },
    {
        quote: "Writing reports used to take days. Now I capture evidence on-site and generate professional ISO-compliant reports instantly. A huge time saver.",
        author: "Daniel Gomez",
        role: "Compliance Manager",
        company: "FinTrust Bank",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Verified Auditor"
    },
    {
        quote: "We lost audit context when our consultant left. With iAudit our history stays with us. Zero vendor access means complete privacy.",
        author: "Amira El-Sayed",
        role: "QA Lead",
        company: "Global Pharma Co.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Certified Lead Auditor"
    },
    {
        quote: "We were drowning in Excel sheets. iAudit centralised everything into one PDCA workflow. It is a relief to have one source of truth.",
        author: "Rajesh Kapoor",
        role: "Operations Director",
        company: "NovaTech Solutions",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
        batch: "Verified Audit Expert"
    }
];

const pricingFaqs = [
    {
        question: "What is iAudit Global?",
        answer: "iAudit Global is ISO audit management software for internal audits. It is purpose built for ISO 9001, 14001, 45001 and 27001, following ISO 19011 and the PDCA cycle so you can plan, execute and track your audit programme in one place."
    },
    {
        question: "Is the 14 day free trial really free and do I need a credit card?",
        answer: "Yes. The 14 day trial is completely free and does not require a credit card. At the end of the trial you can choose a paid plan or stop without any charge."
    },
    {
        question: "How are the Starter, Professional and Enterprise plans different?",
        answer: "Starter is for small teams starting their audit journey with core features. Professional adds collaboration tools, multiple companies and API access for growing organisations. Enterprise is for large or complex programmes that need unlimited sites and users, advanced security, custom integrations and a dedicated account manager."
    },
    {
        question: "Can we upgrade, downgrade or cancel our plan?",
        answer: "Yes. You can move between Starter, Professional and Enterprise or cancel your subscription. Changes take effect from the next billing period and you will not be tied into long contracts."
    },
    {
        question: "Do you offer annual billing or discounts for longer commitments?",
        answer: "Monthly billing is available as standard. If you prefer annual invoicing or have a larger programme and need a tailored quote, speak to us and we can discuss options."
    },
    {
        question: "Who actually has access to my audit data and findings?",
        answer: "Only you and your authorised users. We have a zero access policy, meaning your findings, evidence, and reports are encrypted and stay entirely within your control. We do not mine your data or view your reports for any reason."
    },
    {
        question: "Can I move my existing Excel checklists into iAudit?",
        answer: "Yes. You can easily recreate your current checklists using our intuitive builder or ask Audit Mate to help you draft them. For Enterprise clients, our team provides hands-on support to help migrate your audit history and templates into the platform."
    },
    {
        question: "Is the Audit Mate AI assistant included in the monthly price?",
        answer: "Yes. Audit Mate is a core feature of the iAudit Global platform. It is designed to help you build checklists, suggest interview questions, and provide ISO guidance without any hidden fees or separate subscriptions."
    }
];

export default function PricingPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const partnerLogos = [
        { node: <SiSiemens />, title: "Siemens" },
        { node: <SiSchneiderelectric />, title: "Schneider Electric" },
        { node: <SiSap />, title: "SAP" },
        { node: <SiBmw />, title: "BMW" },
        { node: <SiMercedes />, title: "Mercedes" },
        { node: <SiVolkswagen />, title: "Volkswagen" },
    ];

    return (
        <>
            <Pricing isPageHero={true} />
            
            {/* Logo Loop Section */}
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
                    fontFamily: '"Pp Neue Montreal", sans-serif'
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
                        fontWeight: 400
                    }}
                >
                    {isMobile ? (
                        <>
                            Trusted by global organisations.<br />
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
                        logoHeight={isMobile ? 30 : 45}
                        gap={isMobile ? 60 : 100}
                        scaleOnHover
                        ariaLabel="Our trusted partners"
                    />
                </div>
            </motion.div>

            {/* Testimonials Section */}
            <Testimonials items={pricingTestimonials} />

            {/* FAQ Section */}
            <FAQAccordion 
                items={pricingFaqs} 
                heading="Frequently asked questions" 
                sparkleText="Support"
            />

            <CTA backgroundColor="#f9fafb" />
            <Footer />
        </>
    );
}
