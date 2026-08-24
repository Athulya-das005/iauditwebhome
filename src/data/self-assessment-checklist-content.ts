/** Content from iAudit ISO 14001:2026 Self-Assessment Checklist document — for View Checklist. */

export type MaturityBandInfo = {
    id: "early" | "moderate" | "mature";
    scoreLabel: string;
    min: number;
    max: number;
    stage: string;
    readiness: string;
    summary: string;
    description: string;
    timeline: string;
    actions: string[];
};

export const checklistMeta = {
    title: "ISO 14001:2026 Self-Assessment Checklist",
    subtitle: "with Climate Change & 2026 DIS Alignment",
    purpose:
        "Self-assessment to determine organisational EMS maturity and readiness for ISO 14001:2026 certification",
    totalQuestions: 65,
    scoring: "Yes/No (1 point per Yes answer)",
    duration: "45–90 minutes depending on organisational complexity",
    note2026:
        "Questions marked ★ 2026 address new or significantly changed requirements in ISO 14001:2026 (DIS). Questions marked [Climate] address the 2024 Annex SL climate change alignment.",
};

export const howToUseSteps = [
    "Complete the Assessment – Answer each question honestly based on current organisational practices",
    "Calculate Score – Count total \"Yes\" responses (0–65 points maximum)",
    "Determine Maturity Band – Match your score to the maturity stage below",
    "Plan Next Steps – Use recommended actions based on your maturity level",
];

export const scoringGuidance = [
    {
        label: '"Yes"',
        text: "Requirement is documented, implemented, and functioning effectively",
    },
    {
        label: '"No"',
        text: "Requirement is not in place, partial, or effectiveness is unclear",
    },
];

export const tagNotes = [
    {
        tag: "★ 2026",
        text: "Questions marked ★ 2026 address requirements that are new or significantly changed in ISO 14001:2026 (DIS). These include two entirely new clauses: Clause 6.1.4 (Risks and Opportunities — standalone documented register) and Clause 6.3 (Planning and managing of changes). Answer based on your current system against the 2026 standard.",
    },
    {
        tag: "[Climate]",
        text: "Questions marked [Climate] address the 2024 Annex SL alignment requiring organisations to determine whether climate change is a relevant environmental issue affecting their EMS. Answer based on your current assessment of climate relevance.",
    },
];

export const maturityBands: MaturityBandInfo[] = [
    {
        id: "early",
        scoreLabel: "Scored 0–21 points",
        min: 0,
        max: 21,
        stage: "Early Stage",
        readiness: "Foundation building",
        summary: "Baseline assessment, policy development, aspects identification, address new 2026 clauses 6.1.4 and 6.3",
        description:
            "Your organisation is at the foundation stage of EMS implementation. Environmental processes are emerging but require development and formal integration. Multiple new 2026 requirements are likely not yet in place.",
        timeline: "Timeline to Moderate Stage: 6–12 months with focused effort",
        actions: [
            "Conduct ISO 14001:2026 foundation and awareness training for leadership and relevant staff",
            "Complete comprehensive environmental aspects and impacts assessment (including emergency situations — Clause 6.1.2)",
            "Develop documented environmental policy aligned with 2026 requirements (include biodiversity, natural resources, ecosystem protection)",
            "Establish standalone Risks and Opportunities Register referencing Clauses 4.1, 4.2 and 4.3 (new Clause 6.1.4)",
            "Develop EMS Change Management Procedure for planned and unplanned changes (new Clause 6.3)",
            "Establish process for identifying and accessing compliance obligations as available documented information",
            "Define EMS roles, responsibilities and authorities across all relevant roles; communicate clearly",
            "Implement basic environmental monitoring and incident reporting system",
            "If climate is relevant: Complete climate change relevance determination and document the outcome",
        ],
    },
    {
        id: "moderate",
        scoreLabel: "Scored 22–43 points",
        min: 22,
        max: 43,
        stage: "Moderate Stage",
        readiness: "Approaching readiness",
        summary: "Gap assessment, objectives setting, stakeholder engagement, update terminology to 2026 standard",
        description:
            "Your organisation has a basic EMS in place and is working toward 2026 maturity. Most requirements are addressed but need refinement. New 2026 clauses may be partially addressed.",
        timeline: "Timeline to Mature Stage: 3–6 months with structured improvement",
        actions: [
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
        ],
    },
    {
        id: "mature",
        scoreLabel: "Scored 44–65 points",
        min: 44,
        max: 65,
        stage: "Mature Stage",
        readiness: "Ready for certification",
        summary: "ISO 14001:2026 certification audit, performance optimisation, transition from 2015",
        description:
            "Your organisation has a well-established, effective EMS aligned with ISO 14001:2026 requirements and is likely ready for certification or transition audit.",
        timeline:
            "Timeline to Certification: 2–4 months (dependent on certification body schedule and any outstanding transition requirements)",
        actions: [
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
        ],
    },
];

export const keyChanges = [
    {
        clause: "6.1.4",
        changeType: "★ NEW CLAUSE",
        description:
            "Risks and Opportunities now a distinct, standalone documented clause (formerly embedded in 6.1.1) with explicit cross-reference to clauses 4.1, 4.2 and 4.3.",
    },
    {
        clause: "6.3",
        changeType: "★ NEW CLAUSE",
        description:
            "Entirely new requirement to plan and manage changes — both planned and unplanned — affecting the EMS.",
    },
    {
        clause: "4.1",
        changeType: "REVISED",
        description:
            "Environmental conditions (biodiversity, ecosystem health, climate, water availability, pollution levels) now explicitly required in context assessment.",
    },
    {
        clause: "5.2",
        changeType: "REVISED",
        description:
            "Environmental policy must explicitly include commitments to biodiversity protection, natural resource preservation and ecosystem protection. 'Meet' replaces 'fulfil'.",
    },
    {
        clause: "6.1.2",
        changeType: "REVISED",
        description:
            "Emergency situations must be separately determined and documented — distinct from abnormal operating conditions.",
    },
    {
        clause: "6.1.3 / 6.2.1 / 7.4.1",
        changeType: "TERMINOLOGY",
        description:
            "Documentation wording updated to 'available as documented information' (replacing maintain/retain).",
    },
    {
        clause: "9.2.2",
        changeType: "REVISED",
        description:
            "Internal audit programme must now define audit objectives (in addition to scope and criteria) — objectives are a new explicit requirement.",
    },
    {
        clause: "9.3",
        changeType: "RESTRUCTURED",
        description:
            "Management review restructured into subclauses 9.3.1 (context inputs), 9.3.2 (performance inputs), 9.3.3 (decisions/results). 'Outputs' replaced by 'results' throughout.",
    },
    {
        clause: "10.1 / 10.2",
        changeType: "REVISED",
        description:
            "Former Clause 10.1 General deleted — merged into 10.1 (formerly 10.2). Continual improvement now requires formal identification of opportunities from Clause 9 outputs.",
    },
    {
        clause: "ALL",
        changeType: "TERMINOLOGY",
        description: "'Fulfil/fulfilment' replaced by 'meet/meeting' compliance obligations throughout the standard.",
    },
];

export const climateGuidance = {
    intro:
        "The 2024 Annex SL alignment brings climate change into ISO 14001, requiring organisations to determine whether climate change is a relevant environmental issue affecting their EMS and, if relevant, to address it throughout the system.",
    questionRefs: "Questions in this checklist addressing climate change: Q3, Q4, Q6, Q26, Q31, Q40, Q48, Q57, Q64 — plus contextual climate questions throughout.",
    ifYes: [
        "Document the assessment of climate relevance (transition risk, physical risk, regulatory) in your context-of-organisation documentation",
        "Identify climate-related environmental aspects and impacts (e.g. emissions, water use, resource dependency, facility flood vulnerability)",
        "Document climate-related risks and opportunities in the standalone Risks and Opportunities Register (new Clause 6.1.4)",
        "Set climate-related environmental objectives (e.g. emissions reduction, energy efficiency, climate resilience)",
        "Include climate performance indicators in monitoring and measurement (Clause 9.1.1)",
        "Train relevant persons on climate-related environmental requirements and obligations",
        "Review climate-related risks and opportunities in management review (Clause 9.3.2 inputs)",
        "Include climate emergency scenarios in emergency preparedness plans (Clause 8.2, linked to Clause 6.1.2)",
        "Consider public environmental communications and sustainability disclosure (e.g. GRI, CDP, TCFD)",
    ],
    ifNo: [
        "Clearly document your rationale for determining climate change is NOT a relevant environmental issue",
        "Record this decision in your context-of-the-organisation documentation (Clause 4.1)",
        "Plan a periodic review (e.g. annually) to reassess relevance as business and regulatory landscape evolves",
        "Be prepared to explain this determination to certification auditors",
    ],
};

export const nextSteps = [
    "Share Results – Present score and findings to top management and relevant stakeholders",
    "Identify Gaps – Prioritise improvement areas by clause and environmental/business impact; focus on ★ 2026 items first",
    "Address New Clauses – Ensure Clause 6.1.4 (Risks & Opportunities Register) and Clause 6.3 (Change Management) are in place as a priority",
    "Assign Ownership – Allocate responsibility for gap closure actions with specific timelines",
    "Resource Planning – Determine budget and personnel needed for 2026 transition improvements",
    "Track Progress – Monitor progress against plan; update assessment quarterly",
    "Update Documentation – Apply 2026 terminology updates throughout all EMS documents",
    "Notify Certification Body – Inform your current or prospective certification body of your transition readiness and agree a transition audit date",
    "Conduct Internal Audit – Complete an internal audit against ISO 14001:2026 requirements before the external certification transition audit",
    "Stakeholder Engagement – Involve interested parties in improvement planning where appropriate",
    "Pursue Certification – When mature stage is reached, initiate certification process with an accredited body",
];

export const clauseColors = [
    "#ecfdf3",
    "#eff6ff",
    "#fff7ed",
    "#f5f3ff",
    "#fef2f2",
    "#ecfeff",
    "#f0fdf4",
];

export function bandForScore(yes: number): MaturityBandInfo {
    if (yes >= 44) return maturityBands[2];
    if (yes >= 22) return maturityBands[1];
    return maturityBands[0];
}
