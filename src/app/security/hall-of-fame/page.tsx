import type { Metadata } from "next";
import HallOfFameContent from "@/components/security/HallOfFameContent";
import Footer from "@/components/Footer";

const pageUrl = "https://www.iaudit.global/security/hall-of-fame";

export const metadata: Metadata = {
    title: "Security Hall of Fame | Vulnerability Researchers | iAudit Global",
    description:
        "We thank the security researchers who responsibly disclosed vulnerabilities through the iAudit Global Vulnerability Disclosure Program.",
    keywords: [
        "hall of fame",
        "security researchers",
        "ethical hackers",
        "vulnerability disclosure",
        "iAudit Global",
        "VDP",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Security Hall of Fame | iAudit Global",
        description:
            "Recognising security researchers who help strengthen iAudit Global through responsible disclosure.",
        type: "website",
        url: pageUrl,
        siteName: "iAudit Global",
        locale: "en_US",
    },
};

export default function SecurityHallOfFamePage() {
    return (
        <>
            <HallOfFameContent />
            <Footer />
        </>
    );
}
