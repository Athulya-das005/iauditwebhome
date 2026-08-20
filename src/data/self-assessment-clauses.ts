import type { AssessmentType } from "@/types/assessment-lead";

export const SELF_SESSION_KEY = "iaudit-self-assessment-session";

export type SelfAnswer = "yes" | "no" | "";

export const selfAssessmentClauses = [
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
