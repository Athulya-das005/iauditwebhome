import { homePageSchema } from "@/data/homePageSchema";

export default function HomePageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
        />
    );
}
