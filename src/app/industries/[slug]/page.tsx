import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { getIndustryPageMetadata } from "@/data/industryMeta";
import IndustryPageJsonLd from "@/components/seo/IndustryPageJsonLd";
import IndustryContent from "./IndustryContent";

export function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const industry = industries.find((ind) => ind.slug === slug);

    if (!industry) {
        return {};
    }

    const customMetadata = getIndustryPageMetadata(slug);
    if (customMetadata) {
        return customMetadata;
    }

    const pageUrl = `https://www.iaudit.global/industries/${slug}`;

    return {
        title: `${industry.title} ISO Audit Software | iAudit Global`,
        description: industry.description,
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: `${industry.title} ISO Audit Software | iAudit Global`,
            description: industry.description,
            type: "website",
            url: pageUrl,
            siteName: "iAudit Global",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const industry = industries.find((ind) => ind.slug === slug);

    if (!industry) {
        notFound();
    }

    return (
        <>
            <IndustryPageJsonLd slug={slug} />
            <IndustryContent industry={industry} />
        </>
    );
}
