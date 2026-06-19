import type { Metadata } from "next";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";

export const metadata: Metadata = {
    title: "Case Studies | iAudit Global",
    description:
        "How Apex Engineering secured 100% audit history continuity across three production sites with iAudit Global.",
};

export default function CaseStudiesPage() {
    return <CaseStudyPageContent />;
}
