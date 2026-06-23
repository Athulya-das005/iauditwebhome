import { pricingPageSchema } from "@/data/pricingPageSchema";

export default function PricingPageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingPageSchema) }}
        />
    );
}
