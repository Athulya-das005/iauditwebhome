import type { Metadata } from "next";
import CookiePolicyContent from "@/components/CookiePolicyContent";
import Footer from "@/components/Footer";

const pageUrl = "https://www.iaudit.global/cookie-policy";
const title = "Cookie Policy | iAudit Global";
const description =
    "Read the iAudit Global cookie policy to understand how cookies and similar technologies are used on our website.";

export const metadata: Metadata = {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
        type: "website",
        title,
        description,
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
    },
    twitter: {
        card: "summary",
        title,
        description,
        site: "@iAuditGlobal",
    },
};

export default function CookiePolicyPage() {
    return (
        <>
            <CookiePolicyContent />
            <Footer />
        </>
    );
}
