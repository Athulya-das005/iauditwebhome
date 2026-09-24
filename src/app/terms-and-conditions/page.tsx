import type { Metadata } from "next";
import TermsAndConditionsContent from "@/components/TermsAndConditionsContent";
import Footer from "@/components/Footer";

const pageUrl = "https://www.iaudit.global/terms-and-conditions";
const title = "Terms and Conditions | iAudit Global";
const description =
    "Read the Terms and Conditions that govern your access to and use of the iAudit Global website and ISO audit management software.";

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

export default function TermsAndConditionsPage() {
    return (
        <>
            <TermsAndConditionsContent />
            <Footer />
        </>
    );
}
