import type { SelfAssessmentQuestion, SelfAssessmentClause } from "@/data/self-assessment-clauses";

export const ISO_9001_SELF_SESSION_KEY = "iaudit-iso-9001-self-assessment-session";

function q(number: number, text: string, tags?: { is2026?: boolean }): SelfAssessmentQuestion {
    return { number, text, ...tags };
}

/** ISO 9001:2026 self-assessment — Yes/No questions across clauses 4 to 10 */
export const iso9001SelfAssessmentClauses: SelfAssessmentClause[] = [
    {
        label: "Clause 4: Context of the Organisation",
        questions: [
            q(1, "Have the internal and external issues that affect the quality management system and its intended results been identified?"),
            q(2, "Have the interested parties relevant to the quality management system, and their relevant requirements, been determined?"),
            q(3, "Has the organisation decided which of those requirements it will address through the quality management system?"),
            q(4, "Is the scope of the quality management system defined, available as documented information, and clear about the products, services and boundaries it covers?"),
            q(5, "Have the processes needed for the quality management system been determined, including their sequence, interaction, inputs, outputs and responsibilities?"),
            q(6, "Are those processes monitored, and is documented information kept where the organisation needs it to operate them?"),
        ],
    },
    {
        label: "Clause 5: Leadership",
        questions: [
            q(7, "Does top management take accountability for the effectiveness of the quality management system and for integrating its requirements into the business?"),
            q(8, "Does top management ensure customer and applicable statutory and regulatory requirements are understood and met?"),
            q(9, "Does leadership promote a quality culture and ethical behaviour that support the intended results of the quality management system?", { is2026: true }),
            q(10, "Is there a quality policy that fits the organisation, commits to meeting requirements and continual improvement, and provides a framework for quality objectives?"),
            q(11, "Is the quality policy available as documented information, communicated, understood and applied?"),
            q(12, "Have responsibilities and authorities for the quality management system been assigned and communicated?"),
            q(13, "Is the quality management system aligned with the organisation’s purpose and strategic direction?", { is2026: true }),
        ],
    },
    {
        label: "Clause 6: Planning",
        questions: [
            q(14, "Have risks that could affect the intended results of the quality management system been determined?"),
            q(15, "Have opportunities to improve performance or customer outcomes been determined separately from risks?", { is2026: true }),
            q(16, "Are actions to address risks and opportunities planned, put into the QMS processes, and checked for effectiveness?"),
            q(17, "Are quality objectives set at relevant functions and levels, and are they measurable, monitored and communicated?"),
            q(18, "When planning how to achieve those objectives, are the actions, resources, owners, timing and evaluation method defined?"),
            q(19, "Are changes to the quality management system planned, including their purpose, consequences, resources and responsibilities?"),
        ],
    },
    {
        label: "Clause 7: Support",
        questions: [
            q(20, "Are the people, infrastructure and working environment needed to achieve conformity of products and services provided?"),
            q(21, "Where monitoring or measuring is used to verify conformity, are the resources suitable and, where needed, calibrated or verified?"),
            q(22, "Is the knowledge needed to operate the processes determined, maintained and made available?"),
            q(23, "Are people who affect quality performance competent, and are competence gaps addressed?"),
            q(24, "Are people aware of the quality policy, relevant objectives, their contribution to the QMS, and what happens if requirements are not met?", { is2026: true }),
            q(25, "Has the organisation determined what quality-related information is communicated, when, with whom and how?"),
            q(26, "Is documented information required by the standard and by the organisation controlled so it is available, suitable and protected?"),
        ],
    },
    {
        label: "Clause 8: Operation",
        questions: [
            q(27, "Are the processes needed to meet product and service requirements planned, implemented and controlled?"),
            q(28, "Are customer, statutory and regulatory requirements determined and reviewed before the organisation commits to supply?"),
            q(29, "Where design and development applies, is it planned and controlled, including inputs, outputs and changes?"),
            q(30, "Are externally provided processes, products and services selected, controlled and monitored so they meet requirements?"),
            q(31, "Is production and service provision carried out under controlled conditions, including changes to those processes?"),
            q(32, "Where needed, are outputs identified and traced, and is customer or external provider property protected?"),
            q(33, "Are planned checks completed, and release authorised, before products and services are released?"),
            q(34, "Are outputs that do not conform identified and controlled so they are not used or delivered by mistake?"),
        ],
    },
    {
        label: "Clause 9: Performance Evaluation",
        questions: [
            q(35, "Has the organisation decided what to monitor and measure, how, when, and when the results will be evaluated?"),
            q(36, "Are customers’ views on whether their needs and expectations have been met monitored and used?"),
            q(37, "Are results analysed to show conformity, customer satisfaction, process performance and the need for improvement?"),
            q(38, "Is there an internal audit programme that considers process importance, changes affecting the organisation and previous audit results?", { is2026: true }),
            q(39, "Are internal audits carried out by competent people who can audit objectively?"),
            q(40, "Are audit results reported to relevant management, and are actions taken and checked for effectiveness?"),
            q(41, "Does top management review the quality management system at planned intervals and record decisions on improvement, change and resources?"),
        ],
    },
    {
        label: "Clause 10: Improvement",
        questions: [
            q(42, "Does the organisation look for opportunities to improve products, services and the quality management system?"),
            q(43, "When a nonconformity occurs, does the organisation correct it, deal with the cause, and check that the action worked?"),
            q(44, "Does the organisation consider whether the same nonconformity exists, or could occur, elsewhere?"),
            q(45, "Are records kept of nonconformities, the actions taken and the results?"),
            q(46, "Is the quality management system continually improved using audit results, analysis, management review and other performance information?"),
        ],
    },
];

export const ISO_9001_SELF_TOTAL_QUESTIONS = iso9001SelfAssessmentClauses.reduce(
    (total, clause) => total + clause.questions.length,
    0
);
