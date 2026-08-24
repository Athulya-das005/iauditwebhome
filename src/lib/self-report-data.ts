import type { GapAnalysisSession } from "@/types/gap-analysis-session";
import type { SelfAnswer } from "@/data/self-assessment-clauses";

export type SelfReportQuestion = {
    text: string;
    answer: SelfAnswer;
    notes?: string;
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

/** Document colour bands: Early = red, Moderate = amber, Mature = green */
export type MaturityTone = {
    key: "early" | "moderate" | "mature" | "default";
    accent: string;
    accentHex: string;
    softBg: string;
    softBorder: string;
    text: string;
    badgeBg: string;
    badgeText: string;
};

export function maturityTone(stage: string): MaturityTone {
    const value = stage.toLowerCase();
    if (value.includes("early")) {
        return {
            key: "early",
            accent: "#dc2626",
            accentHex: "DC2626",
            softBg: "#fef2f2",
            softBorder: "#fecaca",
            text: "#991b1b",
            badgeBg: "#fee2e2",
            badgeText: "#b91c1c",
        };
    }
    if (value.includes("moderate")) {
        return {
            key: "moderate",
            accent: "#d97706",
            accentHex: "D97706",
            softBg: "#fffbeb",
            softBorder: "#fde68a",
            text: "#92400e",
            badgeBg: "#fef3c7",
            badgeText: "#b45309",
        };
    }
    if (value.includes("mature") || value.includes("advanced")) {
        return {
            key: "mature",
            accent: "#16a34a",
            accentHex: "16A34A",
            softBg: "#ecfdf3",
            softBorder: "#bbf7d0",
            text: "#166534",
            badgeBg: "#dcfce7",
            badgeText: "#15803d",
        };
    }
    return {
        key: "default",
        accent: "#6b7280",
        accentHex: "6B7280",
        softBg: "#f3f4f6",
        softBorder: "#e5e7eb",
        text: "#374151",
        badgeBg: "#eef2f6",
        badgeText: "#4b5563",
    };
}

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

const EARLY_ACTIONS = [
    "Conduct ISO 14001:2026 foundation and awareness training for leadership and relevant staff",
    "Complete comprehensive environmental aspects and impacts assessment (including emergency situations — Clause 6.1.2)",
    "Develop documented environmental policy aligned with 2026 requirements (include biodiversity, natural resources, ecosystem protection)",
    "Establish standalone Risks and Opportunities Register referencing Clauses 4.1, 4.2 and 4.3 (new Clause 6.1.4)",
    "Develop EMS Change Management Procedure for planned and unplanned changes (new Clause 6.3)",
    "Establish process for identifying and accessing compliance obligations as available documented information",
    "Define EMS roles, responsibilities and authorities across all relevant roles; communicate clearly",
    "Implement basic environmental monitoring and incident reporting system",
    "If climate is relevant: Complete climate change relevance determination and document the outcome",
];

const MODERATE_ACTIONS = [
    "Engage ISO 14001:2026 specialist or consultant for detailed gap assessment",
    "Establish or formalise the standalone Risks and Opportunities Register (new Clause 6.1.4) if not yet in place",
    "Develop and implement EMS Change Management Procedure (new Clause 6.3) if not yet in place",
    "Update environmental policy to include 2026 commitments: biodiversity, natural resources, ecosystem protection",
    "Revise aspects register to separately identify emergency situations from abnormal conditions",
    "Update all EMS documentation terminology: 'fulfil' to 'meet'; 'maintain/retain as documented information' to 'available as documented information'",
    "Strengthen environmental objectives and targets with measurable performance indicators",
    "Improve internal audit programme — add objectives field to audit plans (2026 requirement)",
    "Update management review process to align with 9.3.1–9.3.3 structure; replace 'outputs' with 'results'",
    "If climate is relevant: Integrate climate-related risks into the Risks and Opportunities Register and set emissions reduction or adaptation objectives",
];

const MATURE_ACTIONS = [
    "Schedule ISO 14001:2026 transition or initial certification audit with an accredited certification body",
    "Complete any minor gap closure items identified in this assessment",
    "Confirm new 2026 Clause 6.1.4 (Risks and Opportunities Register) and Clause 6.3 (Change Management) are fully documented",
    "Verify all terminology has been updated to 2026 standard throughout EMS documentation",
    "Implement advanced training on environmental leadership and internal auditor competence (ISO 19011)",
    "Establish comprehensive environmental performance dashboard for monitoring and management review",
    "If climate is relevant: Ensure climate-related risks are actively tracked; set science-based or net-zero targets if appropriate",
    "Plan for post-certification continual improvement and recertification readiness",
    "Consider integration with other management systems (ISO 9001, ISO 45001) for synergies",
    "Explore external environmental communications and sustainability reporting (e.g. GRI, CDP, TCFD)",
];

/** ISO 14001:2026 maturity bands — 1 point per Yes, max 65 (from self-assessment document). */
export function maturityForYesCount(yes: number, isoStandard?: string): MaturityInfo {
    const is14001 = (isoStandard ?? "").toLowerCase().includes("14001");

    if (is14001) {
        if (yes >= 44) {
            return {
                stage: "Mature Stage",
                description:
                    "Your organisation has a well-established, effective EMS aligned with ISO 14001:2026 requirements and is likely ready for certification or transition audit.",
                actions: MATURE_ACTIONS,
                timeline:
                    "Timeline to Certification: 2–4 months (dependent on certification body schedule and any outstanding transition requirements)",
            };
        }
        if (yes >= 22) {
            return {
                stage: "Moderate Stage",
                description:
                    "Your organisation has a basic EMS in place and is working toward 2026 maturity. Most requirements are addressed but need refinement. New 2026 clauses may be partially addressed.",
                actions: MODERATE_ACTIONS,
                timeline: "Timeline to Mature Stage: 3–6 months with structured improvement",
            };
        }
        return {
            stage: "Early Stage",
            description:
                "Your organisation is at the foundation stage of EMS implementation. Environmental processes are emerging but require development and formal integration. Multiple new 2026 requirements are likely not yet in place.",
            actions: EARLY_ACTIONS,
            timeline: "Timeline to Moderate Stage: 6–12 months with focused effort",
        };
    }

    // Fallback for legacy sessions
    const percent = yes;
    if (percent >= 75) {
        return {
            stage: "Advanced Stage",
            description: "Your organisation has a well-established management system. Most requirements are in place.",
            actions: ["Continue refining evidence, monitoring and improvement."],
            timeline: "1–3 months to close remaining gaps.",
        };
    }
    if (percent >= 50) {
        return {
            stage: "Moderate Stage",
            description: "Your organization has a basic management system in place and is working toward maturity.",
            actions: ["Engage a certified gap assessment consultant to identify specific gaps."],
            timeline: "3–6 months with structured improvement.",
        };
    }
    if (percent >= 25) {
        return {
            stage: "Developing Stage",
            description: "Some elements are in place, but several clauses still need documented practice and evidence.",
            actions: ["Map missing processes against ISO clauses 4–10."],
            timeline: "6–12 months with dedicated ownership.",
        };
    }
    return {
        stage: "Early Stage",
        description: "Your organization is at the foundation stage of implementation.",
        actions: ["Define the scope and interested parties."],
        timeline: "6–12 months with focused effort",
    };
}

/** @deprecated Use maturityForYesCount for ISO 14001:2026 self-assessment scoring. */
export function maturityForScore(percent: number, isoStandard?: string) {
    return maturityForYesCount(percent, isoStandard);
}

export function buildSelfReportData(
    session: GapAnalysisSession,
    clauses: { label: string; questions: { text: string; answer: SelfAnswer; notes?: string }[] }[]
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
            questions: clause.questions.map((item) => ({
                text: item.text,
                answer: item.answer,
                notes: item.notes?.trim() ? item.notes.trim() : undefined,
            })),
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
        maturity: maturityForYesCount(yes, session.isoStandard),
        clauses: clauseRows,
    };
}

export function selfReportFileName(data: SelfReportData, format: "pdf" | "word") {
    const slug = (data.session.organisation || "organisation").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "organisation";
    return `self-assessment-report-${slug}.${format === "pdf" ? "pdf" : "docx"}`;
}
