import type { Metadata } from "next";
import Iso90012026TransitionContent from "./Iso90012026TransitionContent";

const pageUrl = "https://www.iaudit.global/iso-9001-2026-transition";
const title = "ISO 9001:2026 Transition | Free Consultation | iAudit Global";
const description =
    "Transition from ISO 9001:2015 to ISO 9001:2026. Assess your QMS, identify gaps and plan your transition with certified ISO auditors. Book a free consultation.";
const ogImage = "https://www.iaudit.global/images/blog/iso-9001-2026-key-changes-transition.jpg";

export const metadata: Metadata = {
    title: { absolute: title },
    description,
    keywords: [
        "ISO 9001:2026 transition",
        "ISO 9001:2026",
        "ISO 9001:2015 to ISO 9001:2026",
        "ISO 9001 gap analysis",
        "ISO 9001 transition consultation",
        "QMS transition",
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "website",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [{ url: ogImage, alt: "ISO 9001:2026 transition" }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://www.iaudit.global/#website" },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        },
        {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Free ISO 9001:2026 transition consultation",
            description,
            serviceType: "ISO 9001:2026 transition consultation",
            provider: {
                "@type": "Organization",
                "@id": "https://www.iaudit.global/#organization",
                name: "iAudit Global",
                url: "https://www.iaudit.global",
            },
            areaServed: "Worldwide",
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iaudit.global" },
                { "@type": "ListItem", position: 2, name: "ISO 9001:2026 Transition", item: pageUrl },
            ],
        },
    ],
};

export default function Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Iso90012026TransitionContent />
        </>
    );
}
