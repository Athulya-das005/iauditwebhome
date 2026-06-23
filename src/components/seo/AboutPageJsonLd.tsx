import { aboutPageSchema } from "@/data/aboutPageSchema";

export default function AboutPageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
    );
}
