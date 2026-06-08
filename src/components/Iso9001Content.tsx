"use client";

import StandardsHero from "@/components/StandardsHero";
import Iso9001CoreFeatures from "@/components/Iso9001CoreFeatures";
import Iso9001ComplianceSupport from "@/components/Iso9001ComplianceSupport";
import Iso9001AuditMateSection from "@/components/Iso9001AuditMateSection";
import Iso9001ChoosingSoftware from "@/components/Iso9001ChoosingSoftware";
import Iso9001IndustriesSection from "@/components/Iso9001IndustriesSection";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { iso9001Testimonials } from "@/data/iso9001Testimonials";
import { iso9001Faqs } from "@/data/iso9001Faqs";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function Iso9001Content() {
    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden" }}>
            <StandardsHero
                tag="ISO 9001 Audit Management Software by iaudit"
                title="ISO 9001 Software Built for Quality Management Audits"
                description="Stop managing ISO 9001 audits in spreadsheets. Use purpose-built software with clause-level traceability and automated actions."
                primaryCta={{ text: "Get started free", href: "https://apps.iaudit.global" }}
                secondaryCta={{ text: "Book a demo", href: "/contact" }}
            />
            <Iso9001CoreFeatures />
            <Iso9001ComplianceSupport />
            <Iso9001AuditMateSection />
            <Iso9001ChoosingSoftware />
            <Iso9001IndustriesSection />
            <Testimonials
                title="Trusted by ISO 9001 Quality Professionals"
                items={iso9001Testimonials}
            />
            <FAQAccordion
                items={iso9001Faqs}
                heading="Frequently Asked Questions about ISO 9001 Software"
                sparkleText="Support"
            />
            <CTA
                backgroundColor="#f9fafb"
                title="Ready to Transform Your ISO 9001 Audits?"
                description="Move beyond spreadsheets today. See how iAudit simplifies compliance and drives real improvement."
                buttonText="Get started free"
                buttonHref="https://apps.iaudit.global"
                secondaryButtonText="Book a demo"
                secondaryButtonHref="/contact"
            />
            <Footer />
        </div>
    );
}
