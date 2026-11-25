import type { GapClauseDef } from "@/data/gap-analysis-clauses";

/** ISO 9001:2026 Gap Analysis — clauses 4 to 10 */
export const ISO_9001_GAP_SESSION_KEY = "iaudit-iso-9001-gap-analysis-session";

export const iso9001GapAnalysisClauses: GapClauseDef[] = [
    {
        id: "qms-clause-4-context",
        clauseNumber: "4",
        title: "Context of the Organisation",
        label: "Clause 4: Context of the Organisation",
        questions: [
            {
                id: "qms-q4-1",
                code: "Q4.1",
                title: "Internal and external issues",
                text: "Has the organisation determined the internal and external issues that are relevant to its purpose and that affect its ability to achieve the intended results of the quality management system?",
                prompts: [
                    "Market, customer, legal, technological and competitive issues",
                    "Internal capability, culture and process performance",
                    "Climate change, where it is relevant to the organisation",
                ],
            },
            {
                id: "qms-q4-2",
                code: "Q4.2",
                title: "Interested parties and their requirements",
                text: "Has the organisation determined the interested parties that are relevant to the quality management system, and their relevant requirements?",
                prompts: [
                    "Customers, regulators, employees, owners, suppliers and other relevant parties",
                    "Which requirements the organisation chooses to address through the QMS",
                ],
            },
            {
                id: "qms-q4-3",
                code: "Q4.3",
                title: "Scope of the quality management system",
                text: "Is the scope of the quality management system determined, available as documented information, and clear about the products, services and boundaries it covers?",
            },
            {
                id: "qms-q4-4",
                code: "Q4.4",
                title: "Processes and their interactions",
                text: "Has the organisation determined the processes needed for the quality management system, including their sequence, interaction, inputs, outputs, criteria and responsibilities?",
            },
            {
                id: "qms-q4-5",
                code: "Q4.5",
                title: "Process performance and resources",
                text: "Are resources, methods and monitoring in place so these processes are operated, controlled and improved, and is documented information kept where the organisation needs it?",
            },
        ],
    },
    {
        id: "qms-clause-5-leadership",
        clauseNumber: "5",
        title: "Leadership",
        label: "Clause 5: Leadership",
        questions: [
            {
                id: "qms-q5-1",
                code: "Q5.1",
                title: "Leadership and commitment",
                text: "Does top management demonstrate leadership and commitment to the quality management system, including accountability for its effectiveness and the integration of quality requirements into business processes?",
            },
            {
                id: "qms-q5-2",
                code: "Q5.2",
                title: "Customer focus",
                text: "Does top management ensure that customer and applicable statutory and regulatory requirements are determined, understood and consistently met, and that risks and opportunities that can affect conformity and customer satisfaction are addressed?",
            },
            {
                id: "qms-q5-3",
                code: "Q5.3",
                title: "Quality culture and ethical behaviour",
                text: "Does leadership promote a quality culture and ethical behaviour that support the intended results of the quality management system?",
                is2026: true,
                prompts: [
                    "How leaders set expectations for quality and ethical conduct",
                    "Whether people can raise quality concerns without penalty",
                ],
            },
            {
                id: "qms-q5-4",
                code: "Q5.4",
                title: "Quality policy",
                text: "Is there a quality policy that is appropriate to the organisation, includes commitments to satisfy applicable requirements and to continual improvement, and provides a framework for quality objectives?",
            },
            {
                id: "qms-q5-5",
                code: "Q5.5",
                title: "Communicating the quality policy",
                text: "Is the quality policy available as documented information, communicated, understood and applied, and available to relevant interested parties?",
            },
            {
                id: "qms-q5-6",
                code: "Q5.6",
                title: "Roles, responsibilities and authorities",
                text: "Has top management assigned and communicated responsibilities and authorities for the quality management system, including reporting on its performance and promoting customer focus?",
            },
            {
                id: "qms-q5-7",
                code: "Q5.7",
                title: "Alignment with organisational direction",
                text: "Is the quality management system aligned with the organisation’s purpose, strategic direction and the context determined in Clause 4?",
                is2026: true,
            },
        ],
    },
    {
        id: "qms-clause-6-planning",
        clauseNumber: "6",
        title: "Planning",
        label: "Clause 6: Planning",
        questions: [
            {
                id: "qms-q6-1",
                code: "Q6.1",
                title: "Risks that could affect intended results",
                text: "Has the organisation determined the risks that need to be addressed to give assurance that the quality management system can achieve its intended results, prevent or reduce undesired effects, and achieve improvement?",
            },
            {
                id: "qms-q6-2",
                code: "Q6.2",
                title: "Opportunities kept distinct from risks",
                text: "Has the organisation also determined opportunities that could improve performance, customer outcomes or the effectiveness of the quality management system, and kept those distinct from risks?",
                is2026: true,
            },
            {
                id: "qms-q6-3",
                code: "Q6.3",
                title: "Actions for risks and opportunities",
                text: "Are actions to address risks and opportunities planned, integrated into QMS processes, and evaluated for effectiveness?",
            },
            {
                id: "qms-q6-4",
                code: "Q6.4",
                title: "Quality objectives",
                text: "Are quality objectives established at relevant functions and levels, consistent with the quality policy, measurable, monitored, communicated and updated?",
            },
            {
                id: "qms-q6-5",
                code: "Q6.5",
                title: "Planning to achieve objectives",
                text: "When planning how to achieve quality objectives, does the organisation determine what will be done, what resources are required, who is responsible, when it will be completed and how results will be evaluated?",
            },
            {
                id: "qms-q6-6",
                code: "Q6.6",
                title: "Planning of changes",
                text: "Are changes to the quality management system carried out in a planned manner, considering the purpose of the change, potential consequences, the integrity of the QMS, resources and the allocation of responsibilities?",
            },
        ],
    },
    {
        id: "qms-clause-7-support",
        clauseNumber: "7",
        title: "Support",
        label: "Clause 7: Support",
        questions: [
            {
                id: "qms-q7-1",
                code: "Q7.1",
                title: "People, infrastructure and environment",
                text: "Does the organisation determine and provide the people, infrastructure and environment needed for the operation of its processes and to achieve conformity of products and services?",
            },
            {
                id: "qms-q7-2",
                code: "Q7.2",
                title: "Monitoring and measuring resources",
                text: "Where monitoring or measuring is used to verify conformity, are suitable resources provided, maintained and, where relevant, calibrated or verified against traceable standards?",
            },
            {
                id: "qms-q7-3",
                code: "Q7.3",
                title: "Organisational knowledge",
                text: "Does the organisation determine, maintain and make available the knowledge needed to operate its processes and achieve conformity, including knowledge gained from experience and changes in needs?",
            },
            {
                id: "qms-q7-4",
                code: "Q7.4",
                title: "Competence",
                text: "Are people who affect quality performance competent on the basis of education, training or experience, and are actions taken and evaluated where competence gaps are found?",
            },
            {
                id: "qms-q7-5",
                code: "Q7.5",
                title: "Awareness",
                text: "Are people aware of the quality policy, relevant quality objectives, their contribution to the effectiveness of the QMS, and the implications of not conforming?",
                is2026: true,
                prompts: ["Awareness of quality culture and ethical expectations, where these apply"],
            },
            {
                id: "qms-q7-6",
                code: "Q7.6",
                title: "Communication",
                text: "Has the organisation determined the internal and external communications relevant to the quality management system, including what, when, with whom and how to communicate?",
            },
            {
                id: "qms-q7-7",
                code: "Q7.7",
                title: "Documented information",
                text: "Is documented information required by ISO 9001 and by the organisation itself identified, available, suitable, and controlled for distribution, access, retrieval, use, storage, preservation, change control and retention?",
            },
        ],
    },
    {
        id: "qms-clause-8-operation",
        clauseNumber: "8",
        title: "Operation",
        label: "Clause 8: Operation",
        questions: [
            {
                id: "qms-q8-1",
                code: "Q8.1",
                title: "Operational planning and control",
                text: "Does the organisation plan, implement and control the processes needed to meet requirements for products and services, including criteria, resources, controls and documented information?",
            },
            {
                id: "qms-q8-2",
                code: "Q8.2",
                title: "Requirements for products and services",
                text: "Are customer, statutory and regulatory requirements determined, reviewed before commitment, and communicated, including changes and the handling of requirements that cannot be met?",
            },
            {
                id: "qms-q8-3",
                code: "Q8.3",
                title: "Design and development",
                text: "Where design and development applies, is it planned and controlled, with inputs, controls, outputs, changes and retained documented information appropriate to the products and services?",
            },
            {
                id: "qms-q8-4",
                code: "Q8.4",
                title: "Externally provided processes, products and services",
                text: "Are externally provided processes, products and services controlled so they conform to requirements, including selection, evaluation, monitoring and the information given to external providers?",
            },
            {
                id: "qms-q8-5",
                code: "Q8.5",
                title: "Production and service provision",
                text: "Is production and service provision carried out under controlled conditions, including work instructions where needed, suitable infrastructure, monitoring, competent people, and control of changes?",
            },
            {
                id: "qms-q8-6",
                code: "Q8.6",
                title: "Identification, traceability and customer or external property",
                text: "Where relevant, are outputs identified and traced, and is property belonging to customers or external providers identified, verified, protected and safeguarded?",
            },
            {
                id: "qms-q8-7",
                code: "Q8.7",
                title: "Release of products and services",
                text: "Are planned arrangements completed before products and services are released, and is documented information retained to show evidence of conformity and who authorised release?",
            },
            {
                id: "qms-q8-8",
                code: "Q8.8",
                title: "Control of nonconforming outputs",
                text: "Are outputs that do not conform to requirements identified and controlled to prevent unintended use or delivery, including correction, segregation, informing the customer or obtaining authorisation where needed?",
            },
        ],
    },
    {
        id: "qms-clause-9-performance",
        clauseNumber: "9",
        title: "Performance Evaluation",
        label: "Clause 9: Performance Evaluation",
        questions: [
            {
                id: "qms-q9-1",
                code: "Q9.1",
                title: "Monitoring, measurement, analysis and evaluation",
                text: "Does the organisation determine what needs to be monitored and measured, the methods, when it will be done, and when results will be analysed and evaluated?",
            },
            {
                id: "qms-q9-2",
                code: "Q9.2",
                title: "Customer satisfaction",
                text: "Does the organisation monitor customers’ perceptions of the degree to which their needs and expectations have been fulfilled, and use that information to evaluate QMS performance?",
            },
            {
                id: "qms-q9-3",
                code: "Q9.3",
                title: "Analysis and evaluation",
                text: "Are results analysed and evaluated to show conformity, customer satisfaction, QMS performance and effectiveness, whether planning has been effective, the performance of external providers, and the need for improvement?",
            },
            {
                id: "qms-q9-4",
                code: "Q9.4",
                title: "Internal audit programme",
                text: "Is there an internal audit programme that considers the importance of the processes, changes affecting the organisation, and the results of previous audits?",
                is2026: true,
            },
            {
                id: "qms-q9-5",
                code: "Q9.5",
                title: "Audit objectivity and competence",
                text: "Are internal audits conducted by competent people who are objective and impartial, and do the audits check whether the QMS conforms to ISO 9001 and to the organisation’s own requirements?",
            },
            {
                id: "qms-q9-6",
                code: "Q9.6",
                title: "Audit results and follow-up",
                text: "Are audit results reported to relevant management, and are corrections and corrective actions taken without undue delay, including a check that actions were effective?",
            },
            {
                id: "qms-q9-7",
                code: "Q9.7",
                title: "Management review",
                text: "Does top management review the quality management system at planned intervals, using the required inputs, and record decisions on improvement, change and resource needs?",
            },
        ],
    },
    {
        id: "qms-clause-10-improvement",
        clauseNumber: "10",
        title: "Improvement",
        label: "Clause 10: Improvement",
        questions: [
            {
                id: "qms-q10-1",
                code: "Q10.1",
                title: "Opportunities for improvement",
                text: "Does the organisation determine and select opportunities for improvement, including improving products and services, correcting or preventing undesired effects, and improving QMS performance?",
            },
            {
                id: "qms-q10-2",
                code: "Q10.2",
                title: "Nonconformity and corrective action",
                text: "When a nonconformity occurs, does the organisation react, evaluate the need for action to eliminate the cause, implement the action, and review whether it was effective?",
            },
            {
                id: "qms-q10-3",
                code: "Q10.3",
                title: "Extent and recurrence",
                text: "Does the organisation consider whether similar nonconformities exist or could occur elsewhere, and update risks, opportunities or the QMS where needed?",
            },
            {
                id: "qms-q10-4",
                code: "Q10.4",
                title: "Records of nonconformity and action",
                text: "Is documented information retained as evidence of the nature of nonconformities, the actions taken and the results of corrective action?",
            },
            {
                id: "qms-q10-5",
                code: "Q10.5",
                title: "Continual improvement",
                text: "Does the organisation continually improve the suitability, adequacy and effectiveness of the quality management system, using analysis, audit results, management review and other performance information?",
            },
        ],
    },
];

export const ISO_9001_GAP_TOTAL_QUESTIONS = iso9001GapAnalysisClauses.reduce(
    (total, clause) => total + clause.questions.length,
    0
);
