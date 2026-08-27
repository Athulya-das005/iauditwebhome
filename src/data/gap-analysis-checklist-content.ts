/** Content from iAudit ISO 14001:2026 Gap Analysis Checklist — for View Checklist. */

export type GapMaturityBandInfo = {
    id: "early" | "developing" | "managed" | "mature";
    scoreLabel: string;
    min: number;
    max: number;
    stage: string;
    status: string;
    timeline: string;
    action: string;
};

export type GapReadinessBandInfo = {
    id: "not-ready" | "near-ready" | "ready" | "fully-ready";
    ncLabel: string;
    label: string;
    timeline: string;
    action: string;
};

export const checklistMeta = {
    title: "ISO 14001:2026 Gap Analysis Checklist",
    subtitle: "Environmental Management System",
    purpose:
        "This assessment evaluates your organisation's conformance to ISO 14001:2026 across 61 auditable questions covering all clauses 4–10. Questions marked ★ highlight new or significantly changed 2026 requirements, including the two entirely new clauses (6.1.4 and 6.3).",
    standard: "ISO 14001:2026 (DIS)",
    totalQuestions: 61,
    scoring: "Compliance % = (Total Comply ÷ 61) × 100",
    note2026: "Based on the Draft International Standard (DIS) | ★ marks new 2026 requirements",
};

export const quickStartGuide = [
    "Read the compliance level definitions below to understand Comply, OFI, and NC",
    "Review the key changes between ISO 14001:2015 and 2026 in the changes summary",
    "Note questions marked ★ — these address new or significantly changed 2026 requirements",
    "Work through each clause section systematically",
    "Mark each question: ☑ Comply, ⭕ OFI, or ✕ NC",
    "Document evidence for each finding (specific, dated, referenced)",
    "Calculate your compliance percentage and maturity level (61 total questions)",
    "Develop action plan for all NC and OFI items",
    "Determine your certification readiness and transition timeline",
];

export const whatThisAssesses = [
    "61 auditable questions across all ISO 14001:2026 clauses (4–10)",
    "Environmental context, stakeholder needs, and environmental conditions",
    "Environmental aspects and impacts including emergency situations",
    "Compliance obligations (legal and other requirements)",
    "Risks and opportunities — new standalone Clause 6.1.4",
    "Planning and managing of changes — new Clause 6.3",
    "Environmental objectives and action planning",
    "Competence, awareness, and communication",
    "Operational control including externally provided processes",
    "Emergency preparedness and response",
    "Environmental performance monitoring, measurement and evaluation",
    "Internal audit with defined objectives",
    "Management review — restructured 9.3.1 to 9.3.3",
    "Nonconformity, corrective action and continual improvement",
];

export const complianceLevels = [
    {
        label: "COMPLY",
        symbol: "☑",
        title: "Requirement Fully Met",
        definition:
            "The environmental requirement is fully implemented with documented evidence. Effective controls are in place and monitored.",
        indicators: [
            "Documentation exists, is current and available as documented information",
            "Staff describe practices consistently and accurately",
            "Records demonstrate conformance with requirements",
            "Controls are maintained and monitored regularly",
            "Performance data demonstrates effectiveness",
        ],
        example:
            "Environmental aspects register lists all significant aspects with control measures, responsible manager, and review date. Emergency situations separately identified. Compliance obligations register available to relevant parties. Risks and opportunities documented with reference to clauses 4.1, 4.2 and 4.3. Workers describe environmental aspects and controls in work areas.",
    },
    {
        label: "OFI",
        symbol: "⭕",
        title: "Opportunity for Improvement",
        definition:
            "The requirement is mostly implemented but has minor gaps. Will NOT block certification but prevents full effectiveness.",
        indicators: [
            "Some documentation exists but may lack detail or use legacy 2015 terminology",
            "Gaps or weaknesses present but not critical",
            "Not blocking certification",
            "Improvements would strengthen system effectiveness and align with 2026 requirements",
        ],
        example:
            "Risks and opportunities partially addressed but not in a standalone documented register as required by new Clause 6.1.4. Emergency response plans exist but not formally cross-referenced to emergency situations in the aspects register. Management review conducted but not structured to 9.3.1–9.3.3 subclauses.",
    },
    {
        label: "NC",
        symbol: "✕",
        title: "Nonconformity — Not Met",
        definition:
            "The requirement is NOT implemented or significantly deficient. WILL BLOCK CERTIFICATION. Environmental effectiveness at risk.",
        indicators: [
            "No documentation or severely inadequate",
            "No evidence of implementation or control",
            "Staff unaware of environmental requirements",
            "Significant environmental exposure or compliance risk",
            "New 2026 requirements (Clauses 6.1.4, 6.3) entirely absent",
        ],
        example:
            "No standalone Risks and Opportunities Register (new Clause 6.1.4). No EMS change management process (new Clause 6.3). Emergency situations not separately identified in aspects register. No environmental aspects identification conducted. URGENT: Address new 2026 requirements before transition audit.",
    },
];

export const maturityBands: GapMaturityBandInfo[] = [
    {
        id: "early",
        scoreLabel: "EARLY (0–25%)",
        min: 0,
        max: 25,
        stage: "EARLY",
        status: "Not Ready",
        timeline: "6+ months",
        action: "Major environmental gaps, inadequate controls, exposure at risk",
    },
    {
        id: "developing",
        scoreLabel: "DEVELOPING (26–50%)",
        min: 26,
        max: 50,
        stage: "DEVELOPING",
        status: "Not Ready",
        timeline: "6+ months",
        action: "Inconsistent environmental practices, significant gaps, some controls",
    },
    {
        id: "managed",
        scoreLabel: "MANAGED (51–75%)",
        min: 51,
        max: 75,
        stage: "MANAGED",
        status: "Near Ready",
        timeline: "2–3 months",
        action: "Focus on NC findings, can audit within 2–3 months",
    },
    {
        id: "mature",
        scoreLabel: "MATURE (76–100%)",
        min: 76,
        max: 100,
        stage: "MATURE",
        status: "Ready",
        timeline: "Ready now",
        action: "<5 NC, effective controls, schedule audit immediately",
    },
];

export const readinessBands: GapReadinessBandInfo[] = [
    {
        id: "not-ready",
        ncLabel: ">10 NC",
        label: "NOT READY",
        timeline: "6+ months",
        action: "Major remediation needed, including new 2026 clauses",
    },
    {
        id: "near-ready",
        ncLabel: "5–10 NC",
        label: "NEAR READY",
        timeline: "2–3 months",
        action: "Address priority findings and major gaps urgently",
    },
    {
        id: "ready",
        ncLabel: "<5 NC",
        label: "READY",
        timeline: "Immediate",
        action: "Schedule transition audit immediately, controls effective",
    },
    {
        id: "fully-ready",
        ncLabel: "0 NC",
        label: "FULLY READY",
        timeline: "Audit today",
        action: "Excellent environmental system, no blocking issues",
    },
];

export const keyChanges = [
    {
        clause: "6.1.4",
        changeType: "★ NEW CLAUSE",
        description:
            "Risks and Opportunities now a distinct, separately documented clause (formerly embedded in 6.1.1) with explicit cross-reference to 4.1, 4.2 and 4.3.",
    },
    {
        clause: "6.3",
        changeType: "★ NEW CLAUSE",
        description: "Entirely new requirement to plan and manage planned and unplanned changes affecting the EMS.",
    },
    {
        clause: "4.1",
        changeType: "REVISED",
        description:
            "Environmental conditions (biodiversity, ecosystem health, climate, water, pollution) now explicitly required in context assessment.",
    },
    {
        clause: "5.2",
        changeType: "REVISED",
        description:
            "Policy must now include commitments to biodiversity, natural resource preservation and ecosystem protection. 'Meet' replaces 'fulfil' compliance obligations.",
    },
    {
        clause: "6.1.2",
        changeType: "REVISED",
        description: "Emergency situations must be separately determined and documented, distinct from abnormal conditions.",
    },
    {
        clause: "6.1.3",
        changeType: "TERMINOLOGY",
        description: "'Maintain' changed to 'available as documented information'.",
    },
    {
        clause: "6.2.1",
        changeType: "TERMINOLOGY",
        description: "Documentation requirement changed to 'available as documented information'.",
    },
    {
        clause: "7.4.1",
        changeType: "TERMINOLOGY",
        description: "'Retain' changed to 'available as documented information'.",
    },
    {
        clause: "9.2.2",
        changeType: "REVISED",
        description: "'Objectives' added as an explicit required element of the internal audit programme.",
    },
    {
        clause: "9.3",
        changeType: "RESTRUCTURED",
        description:
            "Management review restructured into subclauses 9.3.1 (context), 9.3.2 (performance inputs), 9.3.3 (results/decisions). 'Outputs' replaced by 'results'.",
    },
    {
        clause: "10.1",
        changeType: "RENUMBERED",
        description:
            "Former Clause 10.1 General deleted — content merged into 10.1 (formerly 10.2 Nonconformity). Clause 10.3 renumbered to 10.2 (Continual Improvement).",
    },
    {
        clause: "10.2",
        changeType: "REVISED",
        description: "Expanded to require formal identification of improvement opportunities from Clause 9 findings.",
    },
    {
        clause: "ALL",
        changeType: "TERMINOLOGY",
        description: "'Fulfil/fulfilment' → 'meet/meeting' compliance obligations throughout the standard.",
    },
];

export const new2026ClauseReadiness = [
    "Clause 6.1.4 — Risks & Opportunities Register established and documented",
    "Clause 6.3 — EMS Change Management Procedure developed and implemented",
    "Clause 6.1.2 — Emergency situations separately identified in aspects register",
    "Clause 5.2 — Environmental policy updated to include biodiversity and ecosystem commitments",
    "Clause 9.3 — Management review restructured to 9.3.1–9.3.3 format",
    "ALL clauses — Terminology updated: 'meet/meeting' compliance obligations throughout",
];

export const nextSteps = [
    "Calculate your compliance percentage: Count Comply marks ÷ 61 questions",
    "Prioritise all NC findings — these must be resolved before the certification transition audit",
    "Address new Clause 6.1.4 (Risks & Opportunities) and Clause 6.3 (Change Management) as immediate actions if not already in place",
    "Create improvement plans for all OFI items with owners and target dates",
    "Update EMS terminology throughout all documents: 'fulfil' → 'meet' compliance obligations",
    "Update documentation language: 'maintain/retain as documented' → 'available as documented information'",
    "Revise management review procedure to align with new 9.3.1–9.3.3 structure",
    "Notify your certification body of your transition readiness and agree a transition audit date",
    "Conduct an internal audit against ISO 14001:2026 requirements before external certification audit",
];

export const clauseColors = ["#ecfdf3", "#eff6ff", "#fff7ed", "#fdf2f8", "#f5f3ff", "#ecfeff", "#fefce8"];

export function bandForPercent(percent: number): GapMaturityBandInfo {
    return maturityBands.find((band) => percent >= band.min && percent <= band.max) ?? maturityBands[0];
}
