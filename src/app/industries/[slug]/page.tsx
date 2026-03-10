import { notFound } from 'next/navigation';
import { industries } from '@/data/industries';
import IndustryContent from './IndustryContent';

export function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find the current industry based on the URL slug
    const industry = industries.find((ind) => ind.slug === slug);

    if (!industry) {
        // Automatically render the local or root 404 page if slug isn't found
        notFound();
    }

    return <IndustryContent industry={industry} />;
}
