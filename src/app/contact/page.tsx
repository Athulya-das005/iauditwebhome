import type { Metadata } from "next";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const pageUrl = "https://iaudit.global/contact";

export const metadata: Metadata = {
    title: "Contact iAudit Global | Get in Touch",
    description: "Get in touch with the iAudit Global team for questions, product demonstrations, or technical support.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Contact iAudit Global | Get in Touch",
        description: "Get in touch with the iAudit Global team for questions, product demonstrations, or technical support.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            <Contact />
            <CTA />
            <Footer />
        </>
    );
}
