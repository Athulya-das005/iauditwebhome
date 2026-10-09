import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { meridianCaseStudy } from "@/data/caseStudies";

const pageUrl = "https://www.iaudit.global/case-studies/meridian-infrastructure";

export const metadata: Metadata = {
    title: "Meridian Infrastructure Case Study | 70% Faster Safety Reports | iAudit Global",
    description:
        "Learn how Meridian Infrastructure unified ISO 45001 safety audits across 12 project sites, reduced reporting time by 70%, and eliminated paperwork with iAudit Global.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Meridian Infrastructure Case Study | 70% Faster Safety Reports | iAudit Global",
        description:
            "Learn how Meridian Infrastructure unified ISO 45001 safety audits across 12 project sites, reduced reporting time by 70%, and eliminated paperwork with iAudit Global.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function MeridianInfrastructureCaseStudyPage() {
    return <CaseStudyPageContent data={meridianCaseStudy} />;
}
