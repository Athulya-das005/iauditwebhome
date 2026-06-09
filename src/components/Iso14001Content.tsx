"use client";

import StandardsHero from "@/components/StandardsHero";
import Iso14001CoreFeatures from "@/components/Iso14001CoreFeatures";
import Iso14001ComplianceSupport from "@/components/Iso14001ComplianceSupport";
import Iso14001AuditMateSection from "@/components/Iso14001AuditMateSection";
import Iso14001ChoosingSoftware from "@/components/Iso14001ChoosingSoftware";
import Iso14001IndustriesSection from "@/components/Iso14001IndustriesSection";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { iso14001Testimonials } from "@/data/iso14001Testimonials";
import { iso14001Faqs } from "@/data/iso14001Faqs";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function Iso14001Content() {
    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden" }}>
            <StandardsHero
                tag="ISO 14001 Audit Management Software by iAudit"
                title="ISO 14001 Audit Management Software Built for Environmental Performance"
                description="Move beyond paperwork. Manage environmental aspects, impacts, and compliance audits with a structured PDCA workflow."
                primaryCta={{ text: "Get started free", href: "https://apps.iaudit.global" }}
                secondaryCta={{ text: "Book a demo", href: "/contact" }}
            />
            <Iso14001CoreFeatures />
            <Iso14001ComplianceSupport />
            <Iso14001AuditMateSection />
            <Iso14001ChoosingSoftware />
            <Iso14001IndustriesSection />
            <Testimonials
                title="What Environmental Professionals Say About iAudit"
                items={iso14001Testimonials}
            />
            <FAQAccordion
                items={iso14001Faqs}
                heading="Frequently Asked Questions"
                sparkleText="Support"
            />
            <CTA
                backgroundColor="#f9fafb"
                title="Take Control of Your ISO 14001 Audits Today"
                description="End the spreadsheet chaos and secure your ISO 14001:2026 transition with our world-class audit software."
                buttonText="Get started free"
                buttonHref="https://apps.iaudit.global"
                secondaryButtonText="Book a demo"
                secondaryButtonHref="/contact"
            />
            <Footer />
        </div>
    );
}
