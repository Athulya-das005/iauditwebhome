import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { buildCoreCaseStudy } from "@/data/caseStudies";

const pageUrl = "https://www.iaudit.global/case-studies/buildcore";

export const metadata: Metadata = {
    title: "BuildCore Civil Engineering Case Study | 5x Faster Site Inspection Reporting | iAudit Global",
    description:
        "How BuildCore Civil Engineering moved from paper notebooks to real-time digital evidence capture with iAudit Global, cutting admin time by 80% and accelerating reporting by 5x.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "BuildCore Civil Engineering Case Study | 5x Faster Site Inspection Reporting | iAudit Global",
        description:
            "How BuildCore Civil Engineering moved from paper notebooks to real-time digital evidence capture with iAudit Global, cutting admin time by 80% and accelerating reporting by 5x.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function BuildCoreCaseStudyPage() {
    return <CaseStudyPageContent data={buildCoreCaseStudy} />;
}
