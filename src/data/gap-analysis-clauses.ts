export type GapFinding = "comply" | "ofi" | "nc";

export type GapQuestionDef = {
    id: string;
    text: string;
    note?: string;
};

export type GapClauseDef = {
    id: string;
    clauseNumber: string;
    title: string;
    questions: GapQuestionDef[];
};

export const gapAnalysisClauses: GapClauseDef[] = [
    {
        id: "clause-4-context",
        clauseNumber: "4",
        title: "Context",
        questions: [
            {
                id: "q-4-1",
                text: "Has the organization determined external and internal issues relevant to its purpose?",
                note: "Please see Document reference: Context of the Organization",
            },
            {
                id: "q-4-2",
                text: "Does the organization monitor and review information about these external and internal issues?",
            },
            {
                id: "q-4-3",
                text: "Have the interested parties relevant to the QMS been determined?",
            },
            {
                id: "q-4-4",
                text: "Have the requirements of these interested parties been determined?",
            },
            {
                id: "q-4-5",
                text: "Does the organization monitor and review information about these interested parties and their requirements?",
            },
            {
                id: "q-4-6",
                text: "Has the scope of the QMS been determined and documented?",
            },
            {
                id: "q-4-7",
                text: "Does the scope state the types of products and services covered?",
            },
            {
                id: "q-4-8",
                text: "Are the processes needed for the QMS and their application determined?",
            },
            {
                id: "q-4-9",
                text: "Are the criteria and methods (including monitoring, measurements and related performance indicators) needed to ensure the effective operation and control of these processes determined?",
            },
        ],
    },
    {
        id: "clause-5-leadership",
        clauseNumber: "5",
        title: "Leadership",
        questions: [
            {
                id: "q-5-1",
                text: "Does top management demonstrate leadership and commitment with respect to the QMS?",
            },
            {
                id: "q-5-2",
                text: "Is the quality policy and objectives established for the QMS and are they compatible with the context and strategic direction of the organization?",
            },
            {
                id: "q-5-3",
                text: "Are the integration of the QMS requirements into the organization’s business processes ensured?",
            },
            {
                id: "q-5-4",
                text: "Is the use of the process approach and risk-based thinking promoted?",
            },
            {
                id: "q-5-5",
                text: "Is the quality policy established, implemented and maintained?",
            },
            {
                id: "q-5-6",
                text: "Is the quality policy available and maintained as documented information?",
            },
            {
                id: "q-5-7",
                text: "Is the quality policy communicated, understood and applied within the organization?",
            },
            {
                id: "q-5-8",
                text: "Are the responsibilities and authorities for relevant roles assigned, communicated and understood?",
            },
            {
                id: "q-5-9",
                text: "Has top management assigned the responsibility and authority for ensuring that the QMS conforms to the requirements of this International Standard?",
            },
            {
                id: "q-5-10",
                text: "Has top management assigned the responsibility and authority for reporting on the performance of the QMS and on opportunities for improvement?",
            },
        ],
    },
    {
        id: "clause-6-planning",
        clauseNumber: "6",
        title: "Planning",
        questions: [
            {
                id: "q-6-1",
                text: "Has the organization determined the risks and opportunities that need to be addressed to give assurance that the QMS can achieve its intended result(s)?",
            },
            {
                id: "q-6-2",
                text: "Has the organization planned actions to address these risks and opportunities?",
            },
            {
                id: "q-6-3",
                text: "Has the organization planned how to integrate and implement the actions into its QMS processes?",
            },
            {
                id: "q-6-4",
                text: "Has the organization planned how to evaluate the effectiveness of these actions?",
            },
            {
                id: "q-6-5",
                text: "Are the quality objectives established at relevant functions, levels and processes needed for the QMS?",
            },
            {
                id: "q-6-6",
                text: "Are the quality objectives consistent with the quality policy?",
            },
            {
                id: "q-6-7",
                text: "Are the quality objectives measurable?",
            },
            {
                id: "q-6-8",
                text: "Are the quality objectives monitored, communicated and updated as appropriate?",
            },
            {
                id: "q-6-9",
                text: "Are changes to the QMS carried out in a planned manner?",
            },
            {
                id: "q-6-10",
                text: "Does the organization consider the purpose of the changes and their potential consequences?",
            },
        ],
    },
    {
        id: "clause-7-support",
        clauseNumber: "7",
        title: "Support",
        questions: [
            {
                id: "q-7-1",
                text: "Has the organization determined and provided the resources needed for the establishment, implementation, maintenance and continual improvement of the QMS?",
            },
            {
                id: "q-7-2",
                text: "Has the organization determined and provided the people necessary for the effective implementation of its QMS and for the operation and control of its processes?",
            },
            {
                id: "q-7-3",
                text: "Is the infrastructure necessary for the operation of its processes and to achieve conformity of products and services determined, provided and maintained?",
            },
            {
                id: "q-7-4",
                text: "Is the environment for the operation of its processes determined, provided and maintained?",
            },
            {
                id: "q-7-5",
                text: "Are the resources suitable and fit for their purpose?",
            },
            {
                id: "q-7-6",
                text: "Has the organization determined the necessary competence of person(s) doing work under its control that affects the performance and effectiveness of the QMS?",
            },
            {
                id: "q-7-7",
                text: "Are these persons competent on the basis of appropriate education, training, or experience?",
            },
            {
                id: "q-7-8",
                text: "Are persons doing work under the organization’s control aware of the quality policy and relevant quality objectives?",
            },
            {
                id: "q-7-9",
                text: "Has the organization determined the internal and external communications relevant to the QMS?",
            },
            {
                id: "q-7-10",
                text: "Does the organization’s QMS include documented information required by this International Standard?",
            },
        ],
    },
    {
        id: "clause-8-operation",
        clauseNumber: "8",
        title: "Operation",
        questions: [
            {
                id: "q-8-1",
                text: "Does the organization plan, implement and control the processes needed to meet the requirements for the provision of products and services?",
            },
            {
                id: "q-8-2",
                text: "Are the requirements for products and services defined?",
            },
            {
                id: "q-8-3",
                text: "Can the organization meet the claims for the products and services it offers?",
            },
            {
                id: "q-8-4",
                text: "Is a design and development process established, implemented and maintained?",
            },
            {
                id: "q-8-5",
                text: "Does the organization ensure that externally provided processes, products and services conform to requirements?",
            },
            {
                id: "q-8-6",
                text: "Is the provision of products and services implemented under controlled conditions?",
            },
            {
                id: "q-8-7",
                text: "Is the identification and traceability ensured?",
            },
            {
                id: "q-8-8",
                text: "Is property belonging to customers or external providers cared for?",
            },
            {
                id: "q-8-9",
                text: "Is the release of products and services verified?",
            },
            {
                id: "q-8-10",
                text: "Are outputs that do not conform to their requirements identified and controlled?",
            },
        ],
    },
    {
        id: "clause-9-performance",
        clauseNumber: "9",
        title: "Performance",
        questions: [
            {
                id: "q-9-1",
                text: "Does the organization determine what needs to be monitored and measured?",
            },
            {
                id: "q-9-2",
                text: "Are the methods for monitoring, measurement, analysis and evaluation determined?",
            },
            {
                id: "q-9-3",
                text: "Does the organization monitor customers' perceptions of the degree to which their needs and expectations have been fulfilled?",
            },
            {
                id: "q-9-4",
                text: "Are internal audits conducted at planned intervals?",
            },
            {
                id: "q-9-5",
                text: "Is an audit program planned, established, implemented and maintained?",
            },
            {
                id: "q-9-6",
                text: "Are the results of audits reported to relevant management?",
            },
            {
                id: "q-9-7",
                text: "Does top management review the organization's QMS at planned intervals?",
            },
            {
                id: "q-9-8",
                text: "Does the management review include inputs such as status of actions from previous management reviews?",
            },
            {
                id: "q-9-9",
                text: "Does the management review include inputs such as changes in external and internal issues?",
            },
            {
                id: "q-9-10",
                text: "Does the management review include information on the performance and effectiveness of the QMS?",
            },
        ],
    },
    {
        id: "clause-10-improvement",
        clauseNumber: "10",
        title: "Improvement",
        questions: [
            {
                id: "q-10-1",
                text: "Does the organization determine and select opportunities for improvement?",
            },
            {
                id: "q-10-2",
                text: "Does the organization implement any necessary actions to meet customer requirements and enhance customer satisfaction?",
            },
            {
                id: "q-10-3",
                text: "When a nonconformity occurs, does the organization react to the nonconformity and take action to control and correct it?",
            },
            {
                id: "q-10-4",
                text: "Does the organization evaluate the need for action to eliminate the cause(s) of the nonconformity?",
            },
            {
                id: "q-10-5",
                text: "Does the organization implement any action needed?",
            },
            {
                id: "q-10-6",
                text: "Does the organization review the effectiveness of any corrective action taken?",
            },
            {
                id: "q-10-7",
                text: "Is documented information retained as evidence of the nature of the nonconformities and any subsequent actions taken?",
            },
            {
                id: "q-10-8",
                text: "Does the organization continually improve the suitability, adequacy and effectiveness of the QMS?",
            },
            {
                id: "q-10-9",
                text: "Does the organization consider the results of analysis and evaluation, and the outputs from management review?",
            },
            {
                id: "q-10-10",
                text: "Are needs or opportunities addressed as part of continual improvement?",
            },
        ],
    },
];

export const GAP_SESSION_KEY = "iaudit-gap-analysis-session";
