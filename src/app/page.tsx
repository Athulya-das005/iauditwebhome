import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IsoStandardsSection from "@/components/IsoStandardsSection";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Advantages from "@/components/Advantages";
import Benefits from "@/components/Benefits";
import Compliance from "@/components/Compliance";
import Security from "@/components/Security";
import AuditPerformanceSection from "@/components/AuditPerformanceSection";
import AssessmentsHomeSection from "@/components/AssessmentsHomeSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HomePageJsonLd from "@/components/seo/HomePageJsonLd";

const siteUrl = "https://iaudit.global/";
const ogImage = "https://iaudit.global/iaudit-logo-new.png";

export const metadata: Metadata = {
    title: "iAudit Global | ISO Audit Management Software",
    description:
        "iAudit Global helps organizations manage ISO audits, compliance, corrective actions, and integrated management systems.",
    keywords: [
        "ISO audit software",
        "ISO 9001 audit software",
        "ISO 14001 audit management",
        "ISO 45001 audit platform",
        "audit software",
        "audit management system",
        "internal audit software",
        "ISO compliance software",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        title: "iAudit Global | ISO Audit Management Software",
        description:
            "iAudit Global helps organizations manage ISO audits, compliance, corrective actions, and integrated management systems.",
        type: "website",
        url: siteUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: "iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "iAudit Global | ISO Audit Management Software",
        description:
            "iAudit Global helps organizations manage ISO audits, compliance, corrective actions, and integrated management systems.",
        images: [ogImage],
        site: "@iAuditGlobal",
        creator: "@iAuditGlobal",
    },
    other: {
        "revisit-after": "7 days",
    },
};

export default function Home() {
    return (
        <>
            <HomePageJsonLd />
            <Hero />
            <About />
            <IsoStandardsSection />
            <Features />
            <Industries />
            <Advantages />
            <Benefits />
            <Compliance />
            <Security />
            <AuditPerformanceSection />
            <AssessmentsHomeSection />
            <Pricing />
            <Testimonials />
            <Resources />
            <CTA />
            <Footer />
        </>
    );
}
