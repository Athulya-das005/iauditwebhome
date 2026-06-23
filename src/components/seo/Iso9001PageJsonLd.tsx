import { iso9001PageSchema } from "@/data/iso9001PageSchema";

export default function Iso9001PageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(iso9001PageSchema) }}
        />
    );
}
