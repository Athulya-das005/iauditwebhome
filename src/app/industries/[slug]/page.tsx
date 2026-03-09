import { notFound } from 'next/navigation';
import { industries } from '@/components/Industries';
import IndustryContent from './IndustryContent';

export function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
    // Find the current industry based on the URL slug
    const industry = industries.find((ind) => ind.slug === params.slug);

    if (!industry) {
        // Automatically render the local or root 404 page if slug isn't found
        notFound();
    }

    return <IndustryContent industry={industry} />;
}
