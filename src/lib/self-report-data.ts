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

function systemLabel(isoStandard?: string) {
    const value = (isoStandard ?? "").toLowerCase();
    if (value.includes("14001")) return { short: "EMS", full: "environmental management system (EMS)", focus: "environmental" };
    if (value.includes("45001")) return { short: "OH&S MS", full: "OH&S management system", focus: "health and safety" };
    return { short: "QMS", full: "quality management system (QMS)", focus: "quality" };
}

export function maturityForScore(percent: number, isoStandard?: string): MaturityInfo {
    const sys = systemLabel(isoStandard);
    if (percent >= 75) {
        return {
            stage: "Advanced Stage",
            description: `Your organisation has a well-established ${sys.short}. Most requirements are in place. Continue to refine evidence, monitoring and improvement so the system stays effective.`,
            actions: [
                "Keep internal audits on a planned cycle and track actions to close-out.",
                "Use management review outputs to drive measurable improvement.",
                `Strengthen competence records for ${sys.short}-critical roles.`,
                `Confirm change control when processes or the ${sys.short} are updated.`,
            ],
            timeline: "1–3 months to close remaining gaps.",
        };
    }
    if (percent >= 50) {
        return {
            stage: "Moderate Stage",
            description: `Your organization has a basic ${sys.short} in place and is working toward maturity. Most requirements are addressed but need refinement.`,
            actions: [
                "Engage a certified gap assessment consultant to identify specific gaps.",
                "Implement corrective actions from gap assessment findings.",
                "Enhance internal audit capability and frequency.",
                "Strengthen management review process with data-driven decisions.",
                `Develop competence framework for ${sys.short}-critical roles.`,
                `Integrate ${sys.focus} risks into your ${sys.short} risk register and monitoring plans where relevant.`,
                "Enroll staff in auditor training (ISO 19011 principles).",
            ],
            timeline: "3–6 months with structured improvement.",
        };
    }
    if (percent >= 25) {
        return {
            stage: "Developing Stage",
            description: `Some ${sys.short} elements are in place, but several clauses still need documented practice and evidence before the system can be considered ready.`,
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
        stage: "Early Stage",
        description: `Your organization is at the foundation stage of ${sys.full} implementation. ${sys.focus.charAt(0).toUpperCase()}${sys.focus.slice(1)} processes are emerging but require development.`,
        actions: [
            `Define the scope of the ${sys.short} and interested parties.`,
            `Establish a ${sys.focus} policy and assign roles and authorities.`,
            `Identify processes, risks and ${sys.focus} objectives.`,
            "Provide resources and start controlling documented information.",
            "Map key processes and significant aspects or risks.",
            "Build competence and awareness for people whose work affects performance.",
        ],
        timeline: "6–12 months with focused effort",
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
        maturity: maturityForScore(overall, session.isoStandard),
        clauses: clauseRows,
    };
}

export function selfReportFileName(data: SelfReportData, format: "pdf" | "word") {
    const slug = (data.session.organisation || "organisation").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "organisation";
    return `self-assessment-report-${slug}.${format === "pdf" ? "pdf" : "docx"}`;
}
