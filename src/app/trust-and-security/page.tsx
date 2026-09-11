import type { Metadata } from "next";
import SecurityPracticesContent from "@/components/security/SecurityPracticesContent";
import Footer from "@/components/Footer";

const pageUrl = "https://www.iaudit.global/trust-and-security";

export const metadata: Metadata = {
    title: "Trust & Security | Security Practices | iAudit Global",
    description:
        "Learn how iAudit Global protects client data through quarterly penetration testing, vulnerability remediation SLAs, phishing simulations, access control registers, a public vulnerability disclosure program, and ICO data protection registration (ZB910189).",
    keywords: [
        "iAudit Global security",
        "information security practices",
        "penetration testing",
        "vulnerability disclosure",
        "ICO registration",
        "data protection",
        "Cyber Essentials",
        "ISO 27001",
        "phishing simulation",
        "access control",
        "UK GDPR",
        "ZB910189",
        "trust and security",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Trust & Security | iAudit Global",
        description:
            "iAudit Global's security practices: quarterly pen tests, strict remediation SLAs, phishing simulations, access control, and ICO-registered data protection.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_GB",
    },
};

export default function TrustAndSecurityPage() {
    return (
        <>
            <SecurityPracticesContent />
            <Footer />
        </>
    );
}
