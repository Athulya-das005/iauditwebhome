import type { AssessmentType } from "@/types/assessment-lead";

export const SELF_SESSION_KEY = "iaudit-self-assessment-session";

export type SelfAnswer = "yes" | "no" | "";

export type SelfAssessmentQuestion = {
    number: number;
    text: string;
    is2026?: boolean;
    isClimate?: boolean;
};

export type SelfAssessmentClause = {
    label: string;
    questions: SelfAssessmentQuestion[];
};

function q(number: number, text: string, tags?: { is2026?: boolean; isClimate?: boolean }): SelfAssessmentQuestion {
    return { number, text, ...tags };
}

/** ISO 14001:2026 — 65 questions from iAudit ISO 14001:2026 Self-Assessment Checklist */
const iso14001Clauses: SelfAssessmentClause[] = [
    {
        label: "Clause 4: Context of the Organisation",
        questions: [
            q(
                1,
                "Have internal and external issues that affect the EMS and its intended outcomes been identified and documented, including explicit consideration of environmental conditions such as biodiversity, ecosystem health, water availability, and local pollution levels?"
            ),
            q(
                2,
                "Have local and regional environmental conditions (e.g. biodiversity baselines, climate risks, water stress, soil quality, ecosystem services) been explicitly assessed and documented as part of the context review?",
                { is2026: true }
            ),
            q(
                3,
                "Has the organisation determined whether climate change is a relevant issue for its EMS (e.g. physical risk, transition risk, regulatory obligations, stakeholder expectations)?",
                { isClimate: true }
            ),
            q(
                4,
                "Is there a defined method to review and update internal and external issues, including climate-related issues where relevant, at planned intervals?",
                { isClimate: true }
            ),
            q(
                5,
                "Have relevant interested parties (regulators, neighbours, customers, NGOs, owners, workers, investors) and their needs and expectations been determined and reviewed?"
            ),
            q(
                6,
                "Where interested parties have climate-related environmental requirements (e.g. net-zero, supply chain disclosure, physical adaptation), are these identified and linked to compliance obligations (Clause 6.1.3)?",
                { isClimate: true }
            ),
            q(
                7,
                "Has the scope of the EMS been defined with an explicit lifecycle perspective, including organisational boundaries, activities, products, services and the organisation's authority and ability to influence?"
            ),
            q(
                8,
                "Have environmental aspects and associated impacts been identified for activities, products and services within the EMS scope, including lifecycle stages?"
            ),
            q(
                9,
                "Are significant environmental aspects determined using defined criteria and kept under review at planned intervals?"
            ),
            q(
                10,
                "Is the EMS scope made available as documented information (note: 2026 updates wording from 'maintained as documented information' to 'available as documented information')?",
                { is2026: true }
            ),
        ],
    },
    {
        label: "Clause 5: Leadership",
        questions: [
            q(
                11,
                "Does top management take accountability for the effectiveness of the EMS and for environmental performance, including demonstrating leadership through culture and engagement across all roles (not only management roles)?"
            ),
            q(
                12,
                "Is an environmental policy established that explicitly includes commitments to: meeting (not just fulfilling) compliance obligations; pollution prevention; protection of biodiversity; preservation of natural resources; protection of ecosystem health; and continual improvement?",
                { is2026: true }
            ),
            q(
                13,
                "Is the environmental policy appropriate to the organisation context and communicated within the organisation and made available to interested parties?"
            ),
            q(
                14,
                "Are roles, responsibilities and authorities related to the EMS clearly defined and communicated across all relevant functions, including for achieving the EMS intended outcomes?"
            ),
            q(15, "Is environmental performance considered in strategic decisions and business planning?"),
            q(16, "Does leadership promote continual improvement and resource provision for the EMS?"),
            q(
                17,
                "Has top management ensured that environmental responsibilities are assigned to and understood by all relevant roles (not restricted to dedicated environmental management roles)?",
                { is2026: true }
            ),
        ],
    },
    {
        label: "Clause 6: Planning",
        questions: [
            q(18, "Have planning processes (Clause 6.1.1) been established and maintained to address clauses 6.1.2 through 6.1.5?"),
            q(
                19,
                "Are environmental aspects determined with explicit consideration of lifecycle stages AND with emergency situations determined separately from abnormal operating conditions (2026 update)?",
                { is2026: true }
            ),
            q(
                20,
                "Are environmental aspects, including those associated with new or modified activities, products and services, determined and documented?"
            ),
            q(
                21,
                "Are potential environmental impacts (adverse and beneficial) associated with identified aspects evaluated and prioritised?"
            ),
            q(
                22,
                "Are compliance obligations (legal and other requirements) identified, accessed, and made available as documented information (2026 terminology update)?"
            ),
            q(
                23,
                "Are compliance obligations linked to relevant interested party needs and expectations identified in Clause 4.2?"
            ),
            q(
                24,
                "Is a standalone Risks and Opportunities Register documented with explicit reference to context (4.1), interested parties (4.2), and EMS scope (4.3)? (NEW Clause 6.1.4 — previously embedded in 6.1.1)",
                { is2026: true }
            ),
            q(
                25,
                "Are actions planned and integrated into EMS and business processes to address environmental aspects, compliance obligations, and risks and opportunities (Clause 6.1.5)?"
            ),
            q(
                26,
                "Where climate change is relevant, are climate-related risks and opportunities documented in the Risks and Opportunities Register and integrated into environmental planning and objectives?",
                { isClimate: true }
            ),
            q(
                27,
                "Are environmental objectives established at relevant functions and levels, measurable where practicable, and made available as documented information (2026 terminology update)?"
            ),
            q(
                28,
                "Are plans in place for achieving environmental objectives, including responsibilities, resources, timeframes, and evaluation methods?"
            ),
            q(
                29,
                "Are plans in place to address life-cycle environmental considerations where applicable (e.g. upstream/downstream impacts, design, end-of-life)?"
            ),
            q(
                30,
                "Is there a documented process for planning and managing changes to the EMS — both planned and unplanned — to ensure intended outcomes are maintained? (NEW Clause 6.3)",
                { is2026: true }
            ),
            q(
                31,
                "Where climate change is relevant, are climate-related environmental risks and opportunities integrated into environmental planning and objectives (e.g. emissions reduction, resilience, adaptation)?",
                { isClimate: true }
            ),
        ],
    },
    {
        label: "Clause 7: Support",
        questions: [
            q(32, "Are resources adequate for establishing, implementing, maintaining and improving the EMS?"),
            q(
                33,
                "Is competence determined for persons doing work that may cause significant environmental impacts, with training provided to meet (not just fulfil) those competence needs? (terminology updated in 2026)",
                { is2026: true }
            ),
            q(
                34,
                "Are persons aware of the environmental policy, significant environmental aspects, relevant objectives, and the implications of not meeting compliance obligations?"
            ),
            q(
                35,
                "Are internal and external environmental communications (what, when, with whom, how, who communicates) determined, implemented, and evidenced as available documented information (2026 update)?"
            ),
            q(
                36,
                "Do internal communication processes enable workers to contribute to continual improvement of the EMS?",
                { is2026: true }
            ),
            q(
                37,
                "Is documented information required by ISO 14001:2026 and necessary for EMS effectiveness appropriately created, updated, controlled, and available to relevant interested parties?"
            ),
            q(38, "Are systems in place to ensure access to up-to-date legal and other environmental requirements?"),
            q(
                39,
                "Are environmental records (monitoring data, waste records, permits, incident records) retained and retrievable as required?"
            ),
            q(
                40,
                "Where climate change is relevant, is competence and awareness provided regarding climate-related environmental risks and obligations (e.g. emissions reporting, physical risk, adaptation)?",
                { isClimate: true }
            ),
        ],
    },
    {
        label: "Clause 8: Operation",
        questions: [
            q(
                41,
                "Are operational controls implemented for processes associated with significant environmental aspects, compliance obligations, and planned actions, with strengthened controls for externally provided processes (contractors, outsourced activities)?",
                { is2026: true }
            ),
            q(
                42,
                "Are outsourced processes and contractors controlled to ensure environmental requirements are met, with their performance monitored?"
            ),
            q(
                43,
                "Are procurement and design processes considering environmental requirements and significant environmental aspects (e.g. resource use, emissions, waste, lifecycle impacts)?"
            ),
            q(
                44,
                "Are processes established to prevent or control pollution (e.g. spills, emissions, discharges, noise, light, odour)?"
            ),
            q(
                45,
                "Are emergency preparedness and response plans documented, linked to emergency situations identified in Clause 6.1.2 (separately from abnormal conditions), and periodically tested?",
                { is2026: true }
            ),
            q(
                46,
                "Are changes in operations, materials or facilities evaluated for environmental impacts before implementation?"
            ),
            q(
                47,
                "Are controls applied across the life cycle where practicable (design, procurement, use, end-of-life) to manage environmental impacts?"
            ),
            q(
                48,
                "Where climate change is relevant, are operational controls and emergency plans adapted to address climate-driven environmental risks (e.g. flooding, water scarcity, extreme heat, supply chain disruption)?",
                { isClimate: true }
            ),
            q(49, "Are relevant suppliers and contractors informed of applicable environmental requirements?"),
            q(
                50,
                "Are EMS changes managed through the change management process established under Clause 6.3 to avoid unintended environmental impacts?",
                { is2026: true }
            ),
        ],
    },
    {
        label: "Clause 9: Performance Evaluation",
        questions: [
            q(
                51,
                "Are key environmental performance indicators and monitoring requirements defined, implemented, and results made available as documented information (2026 terminology update)?",
                { is2026: true }
            ),
            q(
                52,
                "Are monitoring and measurement results analysed and evaluated to assess EMS performance and effectiveness (not just collected)?"
            ),
            q(
                53,
                "Are compliance evaluations against compliance obligations conducted at planned intervals, with 'meeting' (not 'fulfilment' of) obligations evaluated and documented (2026 terminology update)?",
                { is2026: true }
            ),
            q(
                54,
                "Is an internal audit programme established with defined audit objectives, scope and criteria (objectives are a 2026 addition), and results retained as documented information?",
                { is2026: true }
            ),
            q(
                55,
                "Is management review conducted using the 9.3.1–9.3.3 structure: (9.3.1) context and strategic inputs; (9.3.2) EMS performance inputs including compliance status; (9.3.3) decisions and results (replacing 'outputs')?",
                { is2026: true }
            ),
            q(
                56,
                "Does management review include status of previous actions, environmental performance vs objectives, compliance status, significant aspects and risks?"
            ),
            q(
                57,
                "Where climate change is relevant, are monitoring, measurement, and management review inputs sufficient to evaluate climate-related environmental risks, opportunities and performance?",
                { isClimate: true }
            ),
            q(
                58,
                "Are internal audit findings communicated to relevant managers, with corrective actions assigned, tracked and verified for effectiveness?"
            ),
        ],
    },
    {
        label: "Clause 10: Improvement",
        questions: [
            q(
                59,
                "Are opportunities for improvement in environmental performance and the EMS proactively identified using Clause 9 outputs (monitoring results, audit findings, compliance evaluations, management review)? (Clause 10.2 expanded requirement in 2026)",
                { is2026: true }
            ),
            q(
                60,
                "Are nonconformities and environmental incidents reacted to appropriately, with root cause analysis conducted, corrective actions implemented and effectiveness evaluated?"
            ),
            q(
                61,
                "Is documented information on nonconformities and corrective actions available (not just retained) as required, using the 2026 corrective action clause (10.1, formerly 10.2)?",
                { is2026: true }
            ),
            q(
                62,
                "Are trends in environmental performance, incidents, complaints and audit findings reviewed to prevent recurrence and drive continual improvement?"
            ),
            q(63, "Are improvement actions linked to achieving the intended outcomes of the EMS?"),
            q(
                64,
                "Where climate-related environmental risks or events have been identified, are resulting changes and improvements controlled, implemented and reviewed for effectiveness?",
                { isClimate: true }
            ),
            q(
                65,
                "Does the continual improvement process include identifying and acting on opportunities linked specifically to findings from Clause 9 (monitoring, audit results, compliance evaluations and management review results)?",
                { is2026: true }
            ),
        ],
    },
];

export const selfAssessmentClauses = iso14001Clauses;

export function getSelfAssessmentClauses(_isoStandard?: string): SelfAssessmentClause[] {
    return iso14001Clauses;
}

export type AssessmentStartConfig = {
    assessmentType: AssessmentType;
    assessmentTitle: string;
    pagePath: string;
    workspacePath: string;
    sessionKey: string;
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    image: string;
    imageAlt: string;
};
