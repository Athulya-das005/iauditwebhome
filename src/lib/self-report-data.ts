import type { GapAnalysisSession } from "@/types/gap-analysis-session";
import type { SelfAnswer } from "@/data/self-assessment-clauses";

export type SelfReportQuestion = {
    text: string;
    answer: SelfAnswer;
};

export type SelfReportClause = {
    label: string;
    yes: number;
    no: number;
    unanswered: number;
    total: number;
    percent: number;
    questions: SelfReportQuestion[];
};

export type MaturityInfo = {
    stage: string;
    description: string;
    actions: string[];
    timeline: string;
};

export type SelfReportData = {
    session: GapAnalysisSession;
    auditDate: string;
    yes: number;
    no: number;
    unanswered: number;
    total: number;
    overall: number;
    maturity: MaturityInfo;
    clauses: SelfReportClause[];
};

export function maturityForScore(percent: number): MaturityInfo {
    if (percent >= 75) {
        return {
            stage: "Advanced Stage",
            description: "Your organisation has a well-established QMS. Most requirements are in place. Continue to refine evidence, monitoring and improvement so the system stays effective.",
            actions: [
                "Keep internal audits on a planned cycle and track actions to close-out.",
                "Use management review outputs to drive measurable improvement.",
                "Strengthen competence records for QMS-critical roles.",
                "Confirm change control when processes or the QMS are updated.",
            ],
            timeline: "1–3 months to close remaining gaps.",
        };
    }
    if (percent >= 50) {
        return {
            stage: "Moderate Stage",
            description: "Your organization has a basic QMS in place and is working toward maturity. Most requirements are addressed but need refinement.",
            actions: [
                "Engage BSI or certified gap assessment consultant to identify specific gaps.",
                "Implement corrective actions from gap assessment findings.",
                "Enhance internal audit capability and frequency.",
                "Strengthen management review process with data-driven decisions.",
                "Develop competence framework for QMS-critical roles.",
                "If climate is relevant: Integrate climate risks into your QMS risk register and monitoring plans.",
                "Enroll staff in auditor training (ISO 19011 principles).",
            ],
            timeline: "3–6 months with structured improvement.",
        };
    }
    if (percent >= 25) {
        return {
            stage: "Developing Stage",
            description: "Some QMS elements are in place, but several clauses still need documented practice and evidence before the system can be considered ready.",
            actions: [
                "Map missing processes against ISO clauses 4–10.",
                "Assign owners for policy, objectives, documented information and operations.",
                "Start a simple internal audit and corrective-action log.",
                "Plan a management review once monitoring data is available.",
            ],
            timeline: "6–12 months with dedicated ownership.",
        };
    }
    return {
        stage: "Initial Stage",
        description: "The QMS is at an early stage. Foundational requirements around context, leadership, planning and documented information still need to be established.",
        actions: [
            "Define the scope of the QMS and interested parties.",
            "Establish a quality policy and assign roles and authorities.",
            "Identify processes, risks and quality objectives.",
            "Provide resources and start controlling documented information.",
        ],
        timeline: "12+ months to build a complete system.",
    };
}

export function buildSelfReportData(
    session: GapAnalysisSession,
    clauses: { label: string; questions: { text: string; answer: SelfAnswer }[] }[]
): SelfReportData {
    let yes = 0;
    let no = 0;
    let unanswered = 0;
    const clauseRows: SelfReportClause[] = clauses.map((clause) => {
        const clauseYes = clause.questions.filter((item) => item.answer === "yes").length;
        const clauseNo = clause.questions.filter((item) => item.answer === "no").length;
        const clauseOpen = clause.questions.filter((item) => item.answer !== "yes" && item.answer !== "no").length;
        const total = clause.questions.length;
        yes += clauseYes;
        no += clauseNo;
        unanswered += clauseOpen;
        return {
            label: clause.label,
            yes: clauseYes,
            no: clauseNo,
            unanswered: clauseOpen,
            total,
            percent: total === 0 ? 0 : Math.round((clauseYes / total) * 100),
            questions: clause.questions,
        };
    });
    const total = yes + no + unanswered;
    const overall = total === 0 ? 0 : Math.round((yes / total) * 100);
    return {
        session,
        auditDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        yes,
        no,
        unanswered,
        total,
        overall,
        maturity: maturityForScore(overall),
        clauses: clauseRows,
    };
}

export function selfReportFileName(data: SelfReportData, format: "pdf" | "word") {
    const slug = (data.session.organisation || "organisation").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "organisation";
    return `self-assessment-report-${slug}.${format === "pdf" ? "pdf" : "docx"}`;
}
