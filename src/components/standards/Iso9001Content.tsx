"use client";

import StandardsHero from "@/components/standards/StandardsHero";
import Footer from "@/components/Footer";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function Iso9001Content() {
    return (
        <div style={{ fontFamily: PP_NEUE_MONTREAL, overflowX: "hidden" }}>
            <StandardsHero
                tag="ISO 9001 Audit Management Software by iAudit"
                title="ISO 9001 Software Built for Quality Management Audits"
                description="Stop managing ISO 9001 audits in spreadsheets. Use purpose-built software with clause-level traceability and automated actions."
                primaryCtaText="Get started free"
                secondaryCtaText="Book a demo"
            />
            <Footer />
        </div>
    );
}
