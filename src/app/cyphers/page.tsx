import type { Metadata } from "next";
import CyphersPageContent from "@/components/cyphers/CyphersPageContent";
import Footer from "@/components/Footer";

const pageUrl = "https://www.iaudit.global/cyphers";
const title = "Penetration Testing & Cyber Security Testing UK | Cyphers";
const description =
    "Cyphers by iAudit Global provides penetration testing and cyber security testing for web applications, APIs and digital products across the UK.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        "penetration testing UK",
        "cyber security testing",
        "web application penetration testing",
        "API security testing",
        "security assessment",
        "Cyphers",
        "iAudit Global",
    ],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title,
        description,
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@iauditglobal",
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Penetration Testing & Cyber Security Testing",
    serviceType: "Penetration testing",
    url: pageUrl,
    description,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    provider: {
        "@type": "Organization",
        name: "Cyphers by iAudit Global",
        url: "https://www.iaudit.global",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cybersecurity Services",
        itemListElement: [
            "Web Application Penetration Testing",
            "API Security Testing",
            "Security Assessments",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
};

export default function CyphersPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <CyphersPageContent />
            <Footer />
        </>
    );
}
