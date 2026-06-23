import { iso45001PageSchema } from "@/data/iso45001PageSchema";

export default function Iso45001PageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(iso45001PageSchema) }}
        />
    );
}
