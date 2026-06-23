import type { Metadata } from "next";
import PricingPageContent from "@/components/PricingPageContent";
import PricingPageJsonLd from "@/components/seo/PricingPageJsonLd";

const pageUrl = "https://www.iaudit.global/pricing";
const ogImage = "https://iaudit.global/logo.png";

export const metadata: Metadata = {
    title: "iAudit Global Pricing | ISO Audit Software Plans & Costs",
    description:
        "Compare iAudit Global pricing plans for ISO 9001, 14001, and 45001 audit management software. Start your free 14-day trial today. No credit card needed.",
    keywords: [
        "iAudit Global pricing",
        "ISO audit software pricing",
        "ISO 9001 audit software",
        "ISO 14001 audit software",
        "ISO 45001 audit software",
        "audit management platform",
        "internal audit software",
    ],
    authors: [{ name: "iAudit Global" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "iAudit Global Pricing | ISO Audit Software Plans & Costs",
        description:
            "Compare iAudit Global pricing plans for ISO 9001, 14001 and 45001 audit management software. Start your free 14-day trial today. No credit card needed.",
        type: "website",
        url: pageUrl,
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
        title: "iAudit Global Pricing | ISO Audit Software Plans & Costs",
        description:
            "Compare iAudit Global pricing plans for ISO 9001, 14001, and 45001 audit management software. Start your free 14-day trial today. No credit card needed.",
        images: [ogImage],
        site: "@iauditglobal",
    },
    other: {
        "revisit-after": "7 days",
    },
    themeColor: "#0a0a0a",
};

export default function PricingPage() {
    return (
        <>
            <PricingPageJsonLd />
            <PricingPageContent />
        </>
    );
}
