import type { AssessmentType } from "@/types/assessment-lead";

export const SELF_SESSION_KEY = "iaudit-self-assessment-session";

export type SelfAnswer = "yes" | "no" | "";

export type SelfAssessmentClause = {
    label: string;
    questions: string[];
};

export type SelfAssessmentStandardKey = "iso9001" | "iso14001" | "iso45001";

/** ISO 9001 — Quality Management (full set) */
const iso9001Clauses: SelfAssessmentClause[] = [
    {
        label: "4. Context of the Organization",
        questions: [
            "Has the organization determined external and internal issues that are relevant to its purpose and strategic direction?",
            "Are the needs and expectations of interested parties determined?",
            "Who are the interested parties that are relevant to the QMS?",
            "Is the scope of the quality management system determined and documented?",
            "Are processes needed for the QMS and their application throughout the organization determined?",
            "Are the inputs required and the outputs expected from these processes determined?",
            "Are the risks and opportunities determined?",
            "Is the QMS established, implemented, maintained and continually improved?",
        ],
    },
    {
        label: "5. Leadership",
        questions: [
            "Does top management demonstrate leadership and commitment with respect to the QMS?",
            "Is the quality policy established and communicated?",
            "Is the quality policy available and maintained as documented information?",
            "Are roles, responsibilities and authorities assigned, communicated and understood?",
            "Is customer focus promoted throughout the organization?",
            "Are organizational roles, responsibilities and authorities assigned?",
            "Does top management ensure that the requirements of the QMS are met?",
            "Is the integrity of the QMS maintained when changes are planned and implemented?",
        ],
    },
    {
        label: "6. Planning",
        questions: [
            "Are actions to address risks and opportunities planned?",
            "Are quality objectives established at relevant functions, levels and processes?",
            "Are the quality objectives measurable?",
            "Do the objectives take into account applicable requirements?",
            "Are the objectives relevant to conformity of products and services and to enhancement of customer satisfaction?",
            "Are the objectives monitored?",
            "Are the objectives communicated?",
            "Are changes to the QMS planned and carried out in a systematic manner?",
        ],
    },
    {
        label: "7. Support",
        questions: [
            "Are resources determined and provided for the establishment, implementation, maintenance and continual improvement of the QMS?",
            "Is documented information required by the QMS and International Standard controlled?",
            "Are the necessary persons determined and provided for the effective implementation of the QMS?",
            "Is the infrastructure necessary for the operation of processes determined, provided and maintained?",
            "Is the environment for the operation of processes determined, provided and maintained?",
            "Are resources for monitoring and measurement determined and provided?",
            "Is the organizational knowledge necessary for the operation of processes determined and maintained?",
            "Are persons doing work under the organization's control competent?",
        ],
    },
    {
        label: "8. Operation",
        questions: [
            "Are processes for the provision of products and services planned, implemented and controlled?",
            "Are requirements for products and services determined?",
            "Is communication with customers established?",
            "Are design and development of products and services established and implemented?",
            "Are externally provided processes, products and services controlled?",
            "Is production and service provision controlled?",
            "Is release of products and services ensured?",
            "Is control of nonconforming outputs ensured?",
        ],
    },
    {
        label: "9. Performance Evaluation",
        questions: [
            "Is customer satisfaction monitored?",
            "Are internal audits conducted at planned intervals?",
            "Is the performance and effectiveness of the QMS analyzed and evaluated?",
            "Does top management review the organization's QMS?",
            "Is management review conducted at planned intervals?",
            "Are the inputs to management review planned and carried out?",
            "Are the outputs of management review documented?",
            "Are results of analysis used to evaluate conformity of products and services?",
        ],
    },
    {
        label: "10. Improvement",
        questions: [
            "Does the organization determine and select opportunities for improvement?",
            "Are nonconformities and corrective actions managed appropriately?",
            "Are corrective actions taken to eliminate the causes of nonconformities?",
            "Is the effectiveness of any corrective action taken reviewed?",
            "Is the suitability, adequacy and effectiveness of the QMS continually improved?",
            "Are risks and opportunities updated during corrective actions if necessary?",
            "Are changes made to the QMS if necessary?",
            "Is documented information retained as evidence of the results of corrective actions?",
        ],
    },
];

/** ISO 14001 — Environmental Management (clauses 4–10 complete) */
const iso14001Clauses: SelfAssessmentClause[] = [
    {
        label: "4. Context of the Organization",
        questions: [
            "Have internal and external issues that affect the EMS and its intended outcomes been identified and documented?",
            "Has the organization determined whether climate change is a relevant issue for its EMS (e.g. transition risk, physical risk, regulation)?",
            "Is there a defined method to review and update internal and external issues, including climate-related issues where relevant, at planned intervals?",
            "Have environmental-relevant interested parties (regulators, neighbours, customers, NGOs, owners, workers) and their needs and expectations been determined and reviewed?",
            "Where interested parties have climate-related environmental requirements (e.g. net-zero, disclosure, adaptation), are these identified and considered?",
            "Has the scope of the EMS been defined, including organizational boundaries, activities, products, and services?",
            "Have environmental aspects and associated impacts been identified for activities, products, and services within scope?",
            "Are significant environmental aspects determined using defined criteria and kept under review?",
        ],
    },
    {
        label: "5. Leadership",
        questions: [
            "Does top management take accountability for the effectiveness of the EMS and for environmental performance?",
            "Is an environmental policy established that includes commitments to protection of the environment, compliance obligations, pollution prevention, and continual improvement?",
            "Is the environmental policy appropriate to the organization context and communicated within the organization and made available to interested parties?",
            "Are roles, responsibilities, and authorities related to the EMS defined and communicated?",
            "Is environmental performance considered in strategic decisions and business planning?",
            "Does leadership promote continual improvement and resource provision for the EMS?",
            "Are top management roles ensuring the integration of EMS requirements into business processes?",
            "Is the environmental policy communicated, understood, and applied within the organization?",
        ],
    },
    {
        label: "6. Planning",
        questions: [
            "Are environmental aspects, including those associated with new or modified activities, products, and services, determined and documented?",
            "Are potential environmental impacts (adverse and beneficial) associated with identified aspects evaluated and prioritized?",
            "Are compliance obligations (legal and other requirements) identified, accessed, and kept up to date?",
            "Are risks and opportunities related to environmental aspects, compliance obligations, and other issues determined and addressed?",
            "Are environmental objectives established at relevant functions and levels, consistent with the policy and measurable where practicable?",
            "Are plans in place for achieving environmental objectives, including responsibilities, resources, timeframes, and evaluation methods?",
            "Where climate change is relevant, are climate-related risks and opportunities integrated into environmental planning and objectives (e.g. emissions reduction, resilience, adaptation)?",
            "Are plans in place to address life-cycle environmental considerations where applicable (e.g. upstream/downstream impacts)?",
            "Are changes to the EMS planned and controlled to avoid unintended environmental impacts?",
        ],
    },
    {
        label: "7. Support",
        questions: [
            "Are resources adequate for establishing, implementing, maintaining, and improving the EMS?",
            "Is competence determined for persons doing work under the organization control that may cause significant environmental impacts, with training and evaluation as needed?",
            "Are persons aware of the environmental policy, significant aspects, relevant objectives, and the implications of not conforming?",
            "Are internal and external environmental communications (what, when, with whom, how, who communicates) determined and implemented?",
            "Is documented information required by ISO 14001 and necessary for EMS effectiveness appropriately created, updated, and controlled?",
            "Are systems in place to ensure access to up-to-date legal and other environmental requirements?",
            "Are environmental records (monitoring data, waste records, permits, incident records) retained and retrievable as required?",
            "Where climate change is relevant, is competence and awareness provided regarding climate-related environmental risks and obligations (e.g. emissions reporting, adaptation)?",
        ],
    },
    {
        label: "8. Operation",
        questions: [
            "Are operational controls implemented to manage significant environmental aspects and compliance obligations (procedures, work instructions, engineering controls)?",
            "Are outsourced processes and contractors controlled to ensure environmental requirements are met?",
            "Are design and development processes controlling environmental aspects of products and services?",
            "Are environmental requirements communicated to external providers regarding goods and services?",
            "Is there a process for emergency preparedness and response?",
            "Are potential emergency situations identified and response plans tested?",
            "Is documented information maintained to have confidence that processes have been carried out as planned?",
            "Are processes to control purchased products and services defined?",
        ],
    },
    {
        label: "9. Performance Evaluation",
        questions: [
            "Is environmental performance monitored, measured, analyzed, and evaluated?",
            "Is the evaluation of compliance with legal and other requirements conducted?",
            "Are internal audits conducted at planned intervals to provide information on the EMS?",
            "Is the internal audit program implemented and maintained?",
            "Does top management review the organization's EMS at planned intervals?",
            "Are the results of monitoring and measurement analyzed and evaluated?",
            "Are calibrated or verified monitoring and measurement equipment used and maintained?",
            "Is the status of compliance with legal requirements communicated to relevant interested parties?",
        ],
    },
    {
        label: "10. Improvement",
        questions: [
            "Are opportunities for improvement determined and actions selected?",
            "Are nonconformities and corrective actions managed properly?",
            "Is the root cause of nonconformities determined to prevent recurrence?",
            "Is the effectiveness of corrective actions reviewed?",
            "Is the EMS continually improved to enhance environmental performance?",
            "Are documented information retained as evidence of the nature of nonconformities?",
            "Are documented information retained as evidence of the results of corrective actions?",
            "Are results of analysis and evaluation used to correct nonconformities?",
        ],
    },
];

/** ISO 45001 — not populated yet */
const iso45001Clauses: SelfAssessmentClause[] = [
    { label: "4. Context of the Organization", questions: [] },
    { label: "5. Leadership", questions: [] },
    { label: "6. Planning", questions: [] },
    { label: "7. Support", questions: [] },
    { label: "8. Operation", questions: [] },
    { label: "9. Performance Evaluation", questions: [] },
    { label: "10. Improvement", questions: [] },
];

const clausesByStandard: Record<SelfAssessmentStandardKey, SelfAssessmentClause[]> = {
    iso9001: iso9001Clauses,
    iso14001: iso14001Clauses,
    iso45001: iso45001Clauses,
};

/** @deprecated Prefer getSelfAssessmentClauses(isoStandard) — kept for older ISO 9001-only imports */
export const selfAssessmentClauses = iso9001Clauses;

export function resolveSelfAssessmentStandardKey(isoStandard: string): SelfAssessmentStandardKey {
    const value = isoStandard.toLowerCase();
    if (value.includes("14001")) return "iso14001";
    if (value.includes("45001")) return "iso45001";
    return "iso9001";
}

export function getSelfAssessmentClauses(isoStandard: string): SelfAssessmentClause[] {
    return clausesByStandard[resolveSelfAssessmentStandardKey(isoStandard)];
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
