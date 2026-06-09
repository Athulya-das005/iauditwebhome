"use client";

import StandardsHero from "@/components/StandardsHero";
import Iso45001CoreFeatures from "@/components/Iso45001CoreFeatures";
import Iso45001ComplianceSupport from "@/components/Iso45001ComplianceSupport";
import Iso45001AuditMateSection from "@/components/Iso45001AuditMateSection";
import Iso45001ChoosingSoftware from "@/components/Iso45001ChoosingSoftware";
import Iso45001IndustriesSection from "@/components/Iso45001IndustriesSection";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { iso45001Testimonials } from "@/data/iso45001Testimonials";
import { iso45001Faqs } from "@/data/iso45001Faqs";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function Iso45001Content() {
    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden" }}>
            <StandardsHero
                tag="ISO 45001 Audit Management Software by iAudit"
                title="ISO 45001 Audit Management Software Built for Worker Safety"
                description="Manage occupational health, safety risks, and proactive hazard identification in one secure, auditor-led PDCA platform."
                primaryCta={{ text: "Get started free", href: "https://apps.iaudit.global" }}
                secondaryCta={{ text: "Book a demo", href: "/contact" }}
            />
            <Iso45001CoreFeatures />
            <Iso45001ComplianceSupport />
            <Iso45001AuditMateSection />
            <Iso45001ChoosingSoftware />
            <Iso45001IndustriesSection />
            <Testimonials
                title="What Health & Safety Leads Say About iAudit"
                items={iso45001Testimonials}
            />
            <FAQAccordion
                items={iso45001Faqs}
                heading="Frequently Asked Questions"
                sparkleText="Support"
            />
            <CTA
                backgroundColor="#f9fafb"
                title="Stop Reacting to Safety Risks. Start Predicting Them."
                description="End the safety spreadsheet chaos today and move toward a proactive, evidence-based culture of improvement."
                buttonText="Get started free"
                buttonHref="https://apps.iaudit.global"
                secondaryButtonText="Book a demo"
                secondaryButtonHref="/contact"
            />
            <Footer />
        </div>
    );
}
