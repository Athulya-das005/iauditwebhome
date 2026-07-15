"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import IndustriesCommonChallenges from "@/components/IndustriesCommonChallenges";
import IndustriesSmarterSection from "@/components/IndustriesSmarterSection";
import IndustriesPlatformSection from "@/components/IndustriesPlatformSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { industriesTestimonials } from "@/data/industriesTestimonials";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

export default function IndustriesDirectory() {
    const { isMobile } = useIndustriesBreakpoints();

    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden" }}>
            {/* Hero */}
            <section
                style={{
                    background: `
                        radial-gradient(ellipse 60% 50% at 20% 0%, rgba(5,140,66,0.12) 0%, transparent 70%),
                        radial-gradient(ellipse 60% 50% at 80% 0%, rgba(0,77,64,0.10) 0%, transparent 70%),
                        #fafffe
                    `,
                    paddingTop: "var(--page-top-offset)",
                    paddingLeft: isMobile ? "1.25rem" : "2rem",
                    paddingRight: isMobile ? "1.25rem" : "2rem",
                    paddingBottom: isMobile ? "48px" : "72px",
                    textAlign: "center",
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}
                    >
                        <SectionTag isMobile={isMobile}>Industries We Serve</SectionTag>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        style={{
                            ...aboutType.heroH1(isMobile),
                            marginBottom: "1.25rem",
                        }}
                    >
                        ISO audits across every industry, in one connected platform
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.16 }}
                        style={{
                            ...aboutType.heroLead(),
                            maxWidth: "720px",
                            margin: "0 auto 2.5rem",
                            padding: isMobile ? "0 0.25rem" : 0,
                        }}
                    >
                        Run ISO 9001, ISO 14001 and ISO 45001 audits across any sector with standardised checklists,
                        on-site evidence capture, dashboards and corrective actions, built around PDCA.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.24 }}
                        style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "0.75rem",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            width: isMobile ? "100%" : "auto",
                            maxWidth: isMobile ? "340px" : "none",
                            margin: "0 auto",
                        }}
                    >
                        <Link
                            href="https://apps.iaudit.global"
                            className="btn-animate"
                            style={{
                                padding: "14px 28px",
                                borderRadius: "8px",
                                width: isMobile ? "100%" : "auto",
                                textAlign: "center",
                                ...aboutType.ctaButton(),
                            }}
                        >
                            <span>Start 14-day free trial →</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-outline-animate"
                            style={{
                                padding: "14px 28px",
                                borderRadius: "8px",
                                width: isMobile ? "100%" : "auto",
                                textAlign: "center",
                                ...aboutType.ctaButton(),
                            }}
                        >
                            <span>Book a demo</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <IndustriesCommonChallenges />

            <IndustriesSmarterSection />

            <IndustriesPlatformSection />

            <Testimonials
                title="Trusted by Leaders Across Industries"
                sparkleText="Testimonials"
                items={industriesTestimonials}
            />

            <CTA
                backgroundColor="#f8fafc"
                title="Ready to See How iAudit Fits Your Industry?"
                description="Stop chasing spreadsheets. Start building a smarter, evidence-based audit programme tailored for your specific operational and compliance risks."
                buttonText="Start 14-Day Free Trial"
                secondaryButtonText="Book a Demo"
            />
            <Footer />
        </div>
    );
}
