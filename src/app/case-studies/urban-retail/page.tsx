import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { urbanRetailCaseStudy } from "@/data/caseStudies";

const pageUrl = "https://www.iaudit.global/case-studies/urban-retail";

export const metadata: Metadata = {
    title: "Urban Retail Group Case Study | Total Visibility Across Every Store | iAudit Global",
    description:
        "How Urban Retail Group unified ISO 9001 and ISO 45001 audit history across a nationwide store and warehouse network, reducing data gathering time by 90%.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Urban Retail Group Case Study | Total Visibility Across Every Store | iAudit Global",
        description:
            "How Urban Retail Group unified ISO 9001 and ISO 45001 audit history across a nationwide store and warehouse network, reducing data gathering time by 90%.",
        url: pageUrl,
        siteName: "iAudit Global",
        type: "article",
    },
};

export default function UrbanRetailCaseStudyPage() {
    return <CaseStudyPageContent data={urbanRetailCaseStudy} />;
}
