"use client";

import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop/LogoLoop";
import { partnerLogos } from "@/data/partnerLogos";
import { PP_NEUE_MONTREAL } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

export default function CustomerStoriesLogoStrip() {
    const { isMobile, isStacked } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                background: "#ffffff",
                borderTop: "1px solid rgba(5, 140, 66, 0.08)",
                paddingTop: isMobile ? "1.5rem" : isStacked ? "1.75rem" : "2rem",
                paddingBottom: isMobile ? "2.5rem" : isStacked ? "3rem" : "3.5rem",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <p
                style={{
                    margin: "0 auto 2rem",
                    maxWidth: "640px",
                    padding: isMobile ? "0 1.25rem" : 0,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontWeight: 500,
                    color: "#374151",
                    letterSpacing: "0.01em",
                    lineHeight: 1.5,
                    textAlign: "center",
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                Trusted by ISO professionals across 18+ sectors
            </p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: isMobile ? "0 0.75rem" : isStacked ? "0 1.25rem" : "0",
                }}
            >
                <LogoLoop
                    logos={[...partnerLogos]}
                    speed={isMobile ? 30 : 50}
                    direction="left"
                    logoHeight={isMobile ? 42 : isStacked ? 56 : 70}
                    gap={isMobile ? 72 : isStacked ? 100 : 140}
                    scaleOnHover
                    ariaLabel="Trusted client brands"
                />
            </motion.div>
        </section>
    );
}
