import type { Metadata } from "next";
import AboutNew from "@/components/AboutNew";
import AboutPageJsonLd from "@/components/seo/AboutPageJsonLd";

const pageUrl = "https://www.iaudit.global/about";
const ogImage = "https://iaudit.global/logo.png";

export const metadata: Metadata = {
    title: "About iAudit Global | ISO Audit Management Software",
    description:
        "Founded by certified Lead Auditors, iAudit Global is ISO audit management software built for 9001, 14001, and 45001. Secure your audit history today.",
    keywords: [
        "iAudit Global",
        "ISO audit software",
        "ISO 9001",
        "ISO 14001",
        "ISO 45001",
        "internal audit software",
        "audit management platform",
        "PDCA audit software",
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
        title: "About iAudit Global | ISO Audit Management Software",
        description:
            "Learn how iAudit Global was created by certified ISO auditors to simplify ISO 9001, 14001, and 45001 audits with PDCA-driven workflows.",
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
        title: "About iAudit Global | ISO Audit Management Software",
        description:
            "Discover iAudit Global, built by certified ISO auditors to simplify 9001, 14001, 45001 audits with PDCA-aligned workflows.",
        images: [ogImage],
        site: "@iauditglobal",
    },
    other: {
        "revisit-after": "7 days",
    },
    themeColor: "#0a0a0a",
};

export default function AboutPage() {
    return (
        <>
            <AboutPageJsonLd />
            <AboutNew />
        </>
    );
}
