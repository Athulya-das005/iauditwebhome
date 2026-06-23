import { pdcaPageSchema } from "@/data/pdcaPageSchema";

export default function PdcaPageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(pdcaPageSchema) }}
        />
    );
}
