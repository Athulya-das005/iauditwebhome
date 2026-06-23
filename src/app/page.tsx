import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Advantages from "@/components/Advantages";
import Benefits from "@/components/Benefits";
import Compliance from "@/components/Compliance";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HomePageJsonLd from "@/components/seo/HomePageJsonLd";

const siteUrl = "https://iaudit.global";
const ogImage = `${siteUrl}/logo.png`;

export const metadata: Metadata = {
    title: "ISO Audit Software | ISO 9001, 14001, and 45001 Audit Platform",
    description:
        "ISO audit software for ISO 9001, ISO 14001, ISO 45001. Plan, execute and report audits in one PDCA-driven platform built by certified auditors.",
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
        title: "iAudit Global | ISO Audit Software for ISO 9001, 14001, 45001",
        description:
            "Plan, execute and report ISO audits in one platform built by certified auditors and aligned with ISO 19011. Replace spreadsheets with structured ISO audit management.",
        type: "website",
        url: siteUrl,
        siteName: "iAudit Global",
        locale: "en_US",
        images: [
            {
                url: ogImage,
                alt: "iAudit Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ISO Audit Software | iAudit Global",
        description:
            "Run ISO 9001, 14001, and 45001 audits in one PDCA-driven platform built by auditors.",
        images: [ogImage],
        site: "@iauditglobal",
    },
    other: {
        "revisit-after": "7 days",
    },
    themeColor: "#0a0a0a",
};

export default function Home() {
    return (
        <>
            <HomePageJsonLd />
            <Hero />
            <About />
            <Features />
            <Industries />
            <Advantages />
            <Benefits />
            <Compliance />
            <Security />
            <Pricing />
            <Testimonials />
            <Resources />
            <CTA />
            <Footer />
        </>
    );
}
