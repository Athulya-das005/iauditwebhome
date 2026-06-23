import { industriesPageSchema } from "@/data/industriesPageSchema";

export default function IndustriesPageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesPageSchema) }}
        />
    );
}
