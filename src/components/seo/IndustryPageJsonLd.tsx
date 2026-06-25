import { getIndustryPageSchema } from "@/data/industrySchemas";

type IndustryPageJsonLdProps = {
    slug: string;
};

export default function IndustryPageJsonLd({ slug }: IndustryPageJsonLdProps) {
    const schema = getIndustryPageSchema(slug);

    if (!schema) {
        return null;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
