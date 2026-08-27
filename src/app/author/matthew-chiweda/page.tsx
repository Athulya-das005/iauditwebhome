import type { Metadata } from "next";
import MatthewChiwedaAuthor from "@/components/author/MatthewChiwedaAuthor";
import MatthewChiwedaPageJsonLd from "@/components/seo/MatthewChiwedaPageJsonLd";
import { MATTHEW_CHIWEDA_PAGE_URL } from "@/data/matthewChiwedaPageSchema";

const title = "Matthew Chiweda | Co-founder iAudit Global";
const description =
    "Meet Matthew Chiweda, Co-founder of iAudit Global and ISO audit specialist with 20+ years of experience in quality, HSE and management systems.";
const ogImage = "https://www.iaudit.global/images/mathew-chiweda.webp";

export const metadata: Metadata = {
    title,
    description,
    authors: [{ name: "Matthew Chiweda" }],
    robots: { index: true, follow: true },
    alternates: { canonical: MATTHEW_CHIWEDA_PAGE_URL },
    openGraph: {
        type: "profile",
        title,
        description,
        url: MATTHEW_CHIWEDA_PAGE_URL,
        siteName: "iAudit Global",
        locale: "en_GB",
        images: [{ url: ogImage, alt: "Matthew Chiweda" }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
        site: "@iauditglobal",
    },
};

export default function MatthewChiwedaAuthorPage() {
    return (
        <>
            <MatthewChiwedaPageJsonLd />
            <MatthewChiwedaAuthor />
        </>
    );
}
