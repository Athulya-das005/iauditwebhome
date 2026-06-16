"use client";

import PdcaFlovityHero from "@/components/PdcaFlovityHero";
import PdcaBrokenCycle from "@/components/PdcaBrokenCycle";
import PdcaImplementation from "@/components/PdcaImplementation";
import PdcaWhyBest from "@/components/PdcaWhyBest";
import PdcaAboutTeaser from "@/components/PdcaAboutTeaser";
import PdcaAuditMateSection from "@/components/PdcaAuditMateSection";
import PdcaIndustriesSection from "@/components/PdcaIndustriesSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { pdcaFaqs } from "@/data/pdcaFaqs";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function PdcaCycleContent() {
    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden" }}>
            <PdcaFlovityHero />
            <PdcaBrokenCycle />
            <PdcaImplementation />
            <PdcaAboutTeaser />
            <PdcaWhyBest />
            <PdcaAuditMateSection />
            <PdcaIndustriesSection />
            <FAQAccordion
                items={pdcaFaqs}
                heading="Frequently Asked Questions"
                sparkleText="Support"
            />
            <CTA
                backgroundColor="#f0fdf7"
                title="Take Control of Your Audit Cycle"
                description="Stop managing audits in fragmented tools. Experience a truly connected Plan-Do-Check-Act workflow with a 14-day free trial of iAudit Global."
                buttonText="Start 14-day free trial"
                buttonHref="https://apps.iaudit.global"
                secondaryButtonText="Book a demo"
                secondaryButtonHref="/contact"
            />
            <Footer />
        </div>
    );
}
