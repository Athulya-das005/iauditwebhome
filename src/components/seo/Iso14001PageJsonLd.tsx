import { iso14001PageSchema } from "@/data/iso14001PageSchema";

export default function Iso14001PageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(iso14001PageSchema) }}
        />
    );
}
