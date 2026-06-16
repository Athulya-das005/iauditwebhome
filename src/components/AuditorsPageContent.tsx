"use client";

import AuditorsFlovityHero from "@/components/AuditorsFlovityHero";
import AuditorsPainPoints from "@/components/AuditorsPainPoints";
import AuditorsFounderSection from "@/components/AuditorsFounderSection";
import AuditorsPlatformSection from "@/components/AuditorsPlatformSection";
import AuditorsCoreAdvantages from "@/components/AuditorsCoreAdvantages";
import AuditorsPdcaSection from "@/components/AuditorsPdcaSection";
import AuditorsDataOwnershipSection from "@/components/AuditorsDataOwnershipSection";
import AuditorsIndustriesSection from "@/components/AuditorsIndustriesSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { auditorsTestimonials } from "@/data/auditorsTestimonials";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function AuditorsPageContent() {
    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden" }}>
            <AuditorsFlovityHero />
            <AuditorsPainPoints />
            <AuditorsFounderSection />
            <AuditorsPlatformSection />
            <AuditorsCoreAdvantages />
            <AuditorsPdcaSection />
            <AuditorsDataOwnershipSection />
            <AuditorsIndustriesSection />
            <Testimonials items={auditorsTestimonials} />
            <CTA
                backgroundColor="#f9fafb"
                title="Ready to move your audits beyond spreadsheets?"
                description="Start your 14-day free trial today and see how iAudit Global simplifies your ISO compliance."
                buttonText="Get started free"
                buttonHref="https://apps.iaudit.global"
                secondaryButtonText="Book a demo"
                secondaryButtonHref="/contact"
            />
            <Footer />
        </div>
    );
}
