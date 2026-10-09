import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { grandviewCaseStudy } from "@/data/caseStudies";

const pageUrl = "https://www.iaudit.global/case-studies/grandview-hotels";

export const metadata: Metadata = {
    title: "Grandview Hotels & Resorts Case Study | 40% Reduction in Repeat Nonconformities | iAudit Global",
    description:
        "How Grandview Hotels & Resorts standardised brand standards and ISO 14001 waste management across 15 luxury properties with iAudit Global.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Grandview Hotels & Resorts Case Study | 40% Reduction in Repeat Nonconformities | iAudit Global",
        description:
            "How Grandview Hotels & Resorts standardised brand standards and ISO 14001 waste management across 15 luxury properties with iAudit Global.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function GrandviewHotelsCaseStudyPage() {
    return <CaseStudyPageContent data={grandviewCaseStudy} />;
}
