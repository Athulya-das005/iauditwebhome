import { createHash } from "crypto";

export function buildReportIdempotencyKey(
    kind: "gap-analysis" | "self-assessment",
    input: {
        clientKey?: string;
        email?: string;
        format?: string;
        isoStandard?: string;
        organisation?: string;
        auditScope?: string;
        fingerprint?: string;
    }
) {
    if (input.clientKey?.trim()) return input.clientKey.trim();
    const base = JSON.stringify({
        kind,
        email: input.email?.trim().toLowerCase() ?? "",
        format: input.format ?? "",
        iso: input.isoStandard ?? "",
        org: input.organisation ?? "",
        scope: input.auditScope ?? "",
        fingerprint: input.fingerprint ?? "",
    });
    return createHash("sha256").update(base).digest("hex");
}

export function gapAnalysisFingerprint(clauses: { questions: { text: string; finding: string }[] }[]) {
    return clauses
        .map((clause) =>
            clause.questions.map((question) => `${question.finding}:${question.text.slice(0, 48)}`).join("|")
        )
        .join("||");
}

export function selfAssessmentFingerprint(clauses: { questions: { text: string; answer: string }[] }[]) {
    return clauses
        .map((clause) =>
            clause.questions.map((question) => `${question.answer}:${question.text.slice(0, 48)}`).join("|")
        )
        .join("||");
}
