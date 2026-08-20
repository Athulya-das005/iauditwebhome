import type { GapFinding } from "@/data/gap-analysis-clauses";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

export type GapReportQuestion = {
    clauseLabel: string;
    text: string;
    finding: GapFinding | "";
    actionPlan: string;
    evidence: string;
};

export type GapReportClause = {
    label: string;
    total: number;
    comply: number;
    ofi: number;
    nc: number;
    percent: number;
};

export type GapReportData = {
    session: GapAnalysisSession;
    auditDate: string;
    overall: number;
    status: "Pass" | "Fail";
    comply: number;
    ofi: number;
    nc: number;
    clauses: GapReportClause[];
    questions: GapReportQuestion[];
};

export function findingLabel(finding: GapFinding | "") {
    if (finding === "comply") return "Comply";
    if (finding === "ofi") return "OFI";
    if (finding === "nc") return "NC";
    return "Not answered";
}

export function buildGapReportData(
    session: GapAnalysisSession,
    clauses: { label: string; questions: { text: string; finding: GapFinding | ""; actionPlan: string; evidence: string }[] }[]
): GapReportData {
    let comply = 0;
    let ofi = 0;
    let nc = 0;
    const questions: GapReportQuestion[] = [];
    const clauseRows: GapReportClause[] = clauses.map((clause) => {
        const clauseComply = clause.questions.filter((item) => item.finding === "comply").length;
        const clauseOfi = clause.questions.filter((item) => item.finding === "ofi").length;
        const clauseNc = clause.questions.filter((item) => item.finding === "nc").length;
        const total = clause.questions.length;
        comply += clauseComply;
        ofi += clauseOfi;
        nc += clauseNc;
        clause.questions.forEach((item) => {
            questions.push({
                clauseLabel: clause.label,
                text: item.text,
                finding: item.finding,
                actionPlan: item.actionPlan,
                evidence: item.evidence,
            });
        });
        return {
            label: clause.label,
            total,
            comply: clauseComply,
            ofi: clauseOfi,
            nc: clauseNc,
            percent: total === 0 ? 0 : Math.round((clauseComply / total) * 100),
        };
    });
    const answered = comply + ofi + nc;
    const overall = answered === 0 ? 0 : Math.round((comply / answered) * 100);
    return {
        session,
        auditDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        overall,
        status: overall >= 80 ? "Pass" : "Fail",
        comply,
        ofi,
        nc,
        clauses: clauseRows,
        questions,
    };
}

export function reportFileName(data: GapReportData, format: "pdf" | "word") {
    const slug = (data.session.organisation || "organisation").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "organisation";
    return `gap-analysis-report-${slug}.${format === "pdf" ? "pdf" : "docx"}`;
}
