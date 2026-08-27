import { matthewChiwedaPageSchema } from "@/data/matthewChiwedaPageSchema";

export default function MatthewChiwedaPageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(matthewChiwedaPageSchema) }}
        />
    );
}
