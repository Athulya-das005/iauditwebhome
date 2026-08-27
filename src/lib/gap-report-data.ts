import { GAP_TOTAL_QUESTIONS, type GapFinding } from "@/data/gap-analysis-clauses";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";

export type GapReportQuestion = {
    clauseLabel: string;
    text: string;
    finding: GapFinding | "";
    actionPlan: string;
    evidence: string;
    /** Optional evidence image as a data URL (image/jpeg or image/png). */
    evidenceImage?: string;
};

export type GapReportClause = {
    label: string;
    total: number;
    comply: number;
    ofi: number;
    nc: number;
    percent: number;
};

/** Maturity levels from the ISO 14001:2026 Gap Analysis Checklist */
export type GapMaturityInfo = {
    id: "early" | "developing" | "managed" | "mature";
    stage: string;
    percentLabel: string;
    status: string;
    timeline: string;
    action: string;
    min: number;
    max: number;
};

/** Certification readiness by NC count from the checklist */
export type GapReadinessInfo = {
    id: "not-ready" | "near-ready" | "ready" | "fully-ready";
    label: string;
    ncLabel: string;
    timeline: string;
    action: string;
};

export type GapReportData = {
    session: GapAnalysisSession;
    auditDate: string;
    /** Compliance % = (Comply ÷ 61) × 100 */
    overall: number;
    status: "Pass" | "Fail";
    comply: number;
    ofi: number;
    nc: number;
    totalQuestions: number;
    maturity: GapMaturityInfo;
    readiness: GapReadinessInfo;
    clauses: GapReportClause[];
    questions: GapReportQuestion[];
};

export function findingLabel(finding: GapFinding | "") {
    if (finding === "comply") return "Comply";
    if (finding === "ofi") return "OFI";
    if (finding === "nc") return "NC";
    return "Not answered";
}

/** Compliance % = (Total Comply ÷ 61) × 100 */
export function compliancePercent(comply: number, total = GAP_TOTAL_QUESTIONS) {
    if (total <= 0) return 0;
    return Math.round((comply / total) * 100);
}

export function maturityForPercent(percent: number): GapMaturityInfo {
    if (percent <= 25) {
        return {
            id: "early",
            stage: "EARLY",
            percentLabel: "0–25%",
            status: "Not Ready",
            timeline: "6+ months",
            action: "Major environmental gaps, inadequate controls, exposure at risk",
            min: 0,
            max: 25,
        };
    }
    if (percent <= 50) {
        return {
            id: "developing",
            stage: "DEVELOPING",
            percentLabel: "26–50%",
            status: "Not Ready",
            timeline: "6+ months",
            action: "Inconsistent environmental practices, significant gaps, some controls",
            min: 26,
            max: 50,
        };
    }
    if (percent <= 75) {
        return {
            id: "managed",
            stage: "MANAGED",
            percentLabel: "51–75%",
            status: "Near Ready",
            timeline: "2–3 months",
            action: "Focus on NC findings, can audit within 2–3 months",
            min: 51,
            max: 75,
        };
    }
    return {
        id: "mature",
        stage: "MATURE",
        percentLabel: "76–100%",
        status: "Ready",
        timeline: "Ready now",
        action: "<5 NC, effective controls, schedule audit immediately",
        min: 76,
        max: 100,
    };
}

export function readinessForNcCount(nc: number): GapReadinessInfo {
    if (nc === 0) {
        return {
            id: "fully-ready",
            label: "FULLY READY",
            ncLabel: "0 NC",
            timeline: "Audit today",
            action: "Excellent environmental system, no blocking issues",
        };
    }
    if (nc < 5) {
        return {
            id: "ready",
            label: "READY",
            ncLabel: "<5 NC",
            timeline: "Immediate",
            action: "Schedule transition audit immediately, controls effective",
        };
    }
    if (nc <= 10) {
        return {
            id: "near-ready",
            label: "NEAR READY",
            ncLabel: "5–10 NC",
            timeline: "2–3 months",
            action: "Address priority findings and major gaps urgently",
        };
    }
    return {
        id: "not-ready",
        label: "NOT READY",
        ncLabel: ">10 NC",
        timeline: "6+ months",
        action: "Major remediation needed, including new 2026 clauses",
    };
}

export function maturityTone(stage: string) {
    const value = stage.toLowerCase();
    if (value.includes("early")) {
        return { accent: "#dc2626", softBg: "#fef2f2", softBorder: "#fecaca", text: "#991b1b", badgeBg: "#fee2e2", badgeText: "#b91c1c" };
    }
    if (value.includes("developing")) {
        return { accent: "#ea580c", softBg: "#fff7ed", softBorder: "#fed7aa", text: "#9a3412", badgeBg: "#ffedd5", badgeText: "#c2410c" };
    }
    if (value.includes("managed")) {
        return { accent: "#ca8a04", softBg: "#fefce8", softBorder: "#fde047", text: "#854d0e", badgeBg: "#fef9c3", badgeText: "#a16207" };
    }
    if (value.includes("mature")) {
        return { accent: "#16a34a", softBg: "#ecfdf3", softBorder: "#bbf7d0", text: "#166534", badgeBg: "#dcfce7", badgeText: "#15803d" };
    }
    return { accent: "#6b7280", softBg: "#f9fafb", softBorder: "#e5e7eb", text: "#374151", badgeBg: "#f3f4f6", badgeText: "#4b5563" };
}

export function findingColorHex(finding: GapFinding | "") {
    if (finding === "comply") return "#19B681";
    if (finding === "ofi") return "#F49C1C";
    if (finding === "nc") return "#EF4E4E";
    return "#6B7280";
}

export function buildGapReportData(
    session: GapAnalysisSession,
    clauses: {
        label: string;
        questions: {
            text: string;
            finding: GapFinding | "";
            actionPlan: string;
            evidence: string;
            evidenceImage?: string;
        }[];
    }[]
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
                evidenceImage: item.evidenceImage?.startsWith("data:image/") ? item.evidenceImage : undefined,
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

    const overall = compliancePercent(comply, GAP_TOTAL_QUESTIONS);
    const maturity = maturityForPercent(overall);
    const readiness = readinessForNcCount(nc);

    return {
        session,
        auditDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        overall,
        status: nc < 5 ? "Pass" : "Fail",
        comply,
        ofi,
        nc,
        totalQuestions: GAP_TOTAL_QUESTIONS,
        maturity,
        readiness,
        clauses: clauseRows,
        questions,
    };
}

export function reportFileName(data: GapReportData, format: "pdf" | "word") {
    const slug =
        (data.session.organisation || "organisation")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "") || "organisation";
    return `gap-analysis-report-${slug}.${format === "pdf" ? "pdf" : "docx"}`;
}
