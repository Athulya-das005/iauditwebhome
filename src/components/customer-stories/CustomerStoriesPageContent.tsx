"use client";

import CustomerStoriesHero from "@/components/customer-stories/CustomerStoriesHero";
import CustomerStoriesLogoStrip from "@/components/customer-stories/CustomerStoriesLogoStrip";
import CustomerStoriesResults from "@/components/customer-stories/CustomerStoriesResults";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function CustomerStoriesPageContent() {
    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden", background: "#fff" }}>
            <CustomerStoriesHero />
            <CustomerStoriesLogoStrip />
            <CustomerStoriesResults />
            <CTA
                tag="Ready to upgrade?"
                description="Join the global community of auditors who have moved beyond spreadsheets. Create oversight in days, not months."
                buttonText="Start Free Trial"
                buttonHref="https://apps.iaudit.global"
            />
            <Footer />
        </div>
    );
}
