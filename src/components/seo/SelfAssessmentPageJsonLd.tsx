import { selfAssessmentPageSchema } from "@/data/selfAssessmentPageSchema";

export default function SelfAssessmentPageJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(selfAssessmentPageSchema) }}
        />
    );
}
