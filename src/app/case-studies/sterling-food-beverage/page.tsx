import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { sterlingFoodBeverageCaseStudy } from "@/data/caseStudies";

const pageUrl = "https://www.iaudit.global/case-studies/sterling-food-beverage";

export const metadata: Metadata = {
    title: "Sterling Food & Beverage Case Study | Closing the Accountability Gap | iAudit Global",
    description:
        "How Sterling Food & Beverage achieved 50% faster closure of corrective actions and 95% on-time completion across high-volume food production with iAudit Global.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Sterling Food & Beverage Case Study | Closing the Accountability Gap | iAudit Global",
        description:
            "How Sterling Food & Beverage achieved 50% faster closure of corrective actions and 95% on-time completion across high-volume food production with iAudit Global.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function SterlingFoodBeverageCaseStudyPage() {
    return <CaseStudyPageContent data={sterlingFoodBeverageCaseStudy} />;
}
