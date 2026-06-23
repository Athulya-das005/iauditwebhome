import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";

export const metadata: Metadata = {
    title: "How iAudit helped Apex Engineering secure 100% audit history continuity | iAudit Global",
    description:
        "How iAudit helped Apex Engineering secure 100% audit history continuity across three sites with unified ISO 9001 and ISO 14001 audit management.",
};

export default function CaseStudiesPage() {
    return <CaseStudyPageContent />;
}
