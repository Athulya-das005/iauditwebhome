import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import Footer from "@/components/Footer";

const pageUrl = "https://www.iaudit.global/privacy-policy";
const title = "Privacy Policy | iAudit Global";
const description =
    "Learn how iAudit Global collects, uses and protects your personal information when you visit https://www.iaudit.global/.";

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

export default function PrivacyPolicyPage() {
    return (
        <>
            <PrivacyPolicyContent />
            <Footer />
        </>
    );
}
