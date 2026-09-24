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
                borderTop: "1px solid #f0f2f4",
                paddingTop: isMobile ? "2rem" : isStacked ? "2.25rem" : "2.5rem",
                paddingBottom: isMobile ? "2.25rem" : isStacked ? "2.75rem" : "3.25rem",
                fontFamily: PP_NEUE_MONTREAL,
            }}
        >
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    margin: "0 auto 1.75rem",
                    maxWidth: "640px",
                    padding: isMobile ? "0 1.25rem" : 0,
                    fontSize: isMobile ? "0.92rem" : "1.02rem",
                    fontWeight: 500,
                    color: "#4b5563",
                    letterSpacing: "0.01em",
                    lineHeight: 1.5,
                    textAlign: "center",
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                Trusted by ISO professionals across 18+ sectors
            </motion.p>

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
                    logoHeight={isMobile ? 40 : isStacked ? 52 : 64}
                    gap={isMobile ? 72 : isStacked ? 100 : 140}
                    scaleOnHover
                    ariaLabel="Trusted client brands"
                />
            </motion.div>
        </section>
    );
}
