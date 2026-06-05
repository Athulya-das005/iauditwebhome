import type { Metadata } from "next";
import IndustriesDirectory from "@/components/IndustriesDirectory";

export const metadata: Metadata = {
    title: "Industries | iAudit Global",
    description:
        "ISO audit management software for retail, manufacturing, construction, healthcare, logistics, hospitality and more. Explore industry-specific solutions from iAudit Global.",
};

export default function IndustriesPage() {
    return <IndustriesDirectory />;
}
