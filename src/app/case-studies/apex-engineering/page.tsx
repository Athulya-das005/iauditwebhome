import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";

const pageUrl = "https://www.iaudit.global/case-studies/apex-engineering";

export const metadata: Metadata = {
    title: "How iAudit helped Apex Engineering secure 100% audit history continuity | iAudit Global",
    description:
        "How iAudit helped Apex Engineering & Fabrication secure 100% audit history continuity across three sites with unified ISO 9001 and ISO 14001 audit management.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "How iAudit helped Apex Engineering secure 100% audit history continuity | iAudit Global",
        description:
            "How iAudit helped Apex Engineering & Fabrication secure 100% audit history continuity across three sites with unified ISO 9001 and ISO 14001 audit management.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function ApexEngineeringCaseStudyPage() {
    return <CaseStudyPageContent />;
}
