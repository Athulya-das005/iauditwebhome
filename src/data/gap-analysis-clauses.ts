export type GapFinding = "comply" | "ofi" | "nc";

export type GapQuestionDef = {
    id: string;
    code: string;
    title: string;
    text: string;
    prompts?: string[];
    is2026?: boolean;
    note?: string;
};

export type GapClauseDef = {
    id: string;
    clauseNumber: string;
    title: string;
    label: string;
    questions: GapQuestionDef[];
};

export const GAP_TOTAL_QUESTIONS = 61;

export const GAP_SESSION_KEY = "iaudit-gap-analysis-session";

/** Uppercase clause heading, keep parentheses text as in the document (title case). */
export function formatClauseHeading(text: string) {
    return text.replace(/([^(]*)(\([^)]*\))?/g, (_match, before: string, paren?: string) => {
        return `${(before ?? "").toUpperCase()}${paren ?? ""}`;
    });
}

/** ISO 14001:2026 Gap Analysis — 61 questions from iAudit ISO 14001:2026 Gap Analysis Checklist */
export const gapAnalysisClauses: GapClauseDef[] = [
    {
        id: "clause-4-context",
        clauseNumber: "4",
        title: "Context of the Organisation",
        label: "Clause 4: Context of the Organisation",
        questions: [
            {
                id: "q4-1",
                code: "Q4.1",
                title: `Understanding internal, external issues and environmental conditions`,
                text: `Has the organisation determined external and internal issues relevant to environmental management, including explicit consideration of local and regional environmental conditions such as biodiversity, ecosystem health, pollution levels, water availability, and climate change impacts?`,
                prompts: [
                    `Market, legal, competitive, social, environmental, technological issues`,
                    `Biodiversity baselines and ecosystem status`,
                    `Climate change physical and transition risks`,
                    `Water stress and local pollution levels`,
                ],
            },
            {
                id: "q4-2",
                code: "Q4.2",
                title: `Understanding interested parties and their needs`,
                text: `Does the organisation determine interested parties (employees, regulators, community, customers, suppliers, neighbours, shareholders) and their relevant environmental needs and expectations, including climate-related expectations where applicable?`,
                prompts: [
                    `Compliance obligations link: needs/expectations identified here must be cross-referenced to Clause 6.1.3`,
                    `Environmental conditions relevant to each stakeholder group must be considered`,
                ],
            },
            {
                id: "q4-3",
                code: "Q4.3",
                title: `Determining the scope of the environmental management system`,
                text: `Has the organisation determined the scope of its EMS including all workplaces, activities, facilities, products, services and organisational boundaries, with explicit consideration of the lifecycle perspective and the organisation's authority and ability to influence?`,
            },
            {
                id: "q4-4",
                code: "Q4.4",
                title: `Scope documentation and availability`,
                text: `Is the EMS scope documented and made available as documented information (note: 2026 update changes 'maintained as documented information' to 'available as documented information')? Does it account for organisational changes and external factors affecting the EMS?`,
            },
            {
                id: "q4-5",
                code: "Q4.5",
                title: `Understanding relevant issues, environmental requirements and EMS integration`,
                text: `Has the organisation analysed how relevant issues and environmental requirements affect its EMS design, implementation and performance? Is the EMS integrated into the organisation's business processes?`,
            },
        ],
    },
    {
        id: "clause-5-leadership",
        clauseNumber: "5",
        title: "Leadership and Commitment",
        label: "Clause 5: Leadership and Commitment",
        questions: [
            {
                id: "q5-1",
                code: "Q5.1",
                title: `Leadership and commitment for environmental management`,
                text: `Does top management demonstrate leadership and commitment to the EMS by establishing vision, values and strategic direction for environmental performance, and by supporting roles across all functions (not just management roles)?`,
                prompts: [
                    `Evidence: Policy, resource allocation, visible leadership actions, performance monitoring, decision-making prioritising environment`,
                ],
            },
            {
                id: "q5-2",
                code: "Q5.2",
                title: `Management accountability for environment`,
                text: `Are environmental responsibilities clearly assigned to managers and individuals at all levels? Are they held accountable for environmental performance and compliance?`,
            },
            {
                id: "q5-3",
                code: "Q5.3",
                title: `Environmental policy documentation`,
                text: `Is there a documented environmental policy that:`,
                prompts: [
                    `Includes commitment to meet (not just 'fulfil') compliance obligations?`,
                    `Includes commitment to pollution prevention, protection of biodiversity, preservation of natural resources, and ecosystem protection?`,
                    `Includes commitment to continual improvement?`,
                    `Is appropriate to organisational context and environmental aspects?`,
                    `Is communicated and understood by all workers?`,
                    `Is made available to interested parties?`,
                ],
            },
            {
                id: "q5-4",
                code: "Q5.4",
                title: `Environmental policy communication`,
                text: `Is the environmental policy effectively communicated throughout the organisation? Do workers understand the organisation's environmental commitments, including biodiversity and ecosystem protection?`,
            },
            {
                id: "q5-5",
                code: "Q5.5",
                title: `Organisational roles, responsibilities and authorities`,
                text: `Are environmental roles, responsibilities and authorities clearly defined and communicated throughout the organisation? Does this extend to all relevant roles (not only management roles) as required by the 2026 revision?`,
            },
            {
                id: "q5-6",
                code: "Q5.6",
                title: `Environmental management resources`,
                text: `Does management ensure appropriate resources are provided for environmental management including:`,
                prompts: [
                    `Personnel with required competence?`,
                    `Infrastructure and technology?`,
                    `Financial resources?`,
                    `Environmental expertise?`,
                    `Monitoring and measuring equipment?`,
                ],
            },
        ],
    },
    {
        id: "clause-6-planning",
        clauseNumber: "6",
        title: "Planning",
        label: "Clause 6: Planning",
        questions: [
            {
                id: "q6-1",
                code: "Q6.1",
                title: `Planning processes — general (Clause 6.1.1)`,
                text: `Has the organisation established and maintained the processes needed to meet clauses 6.1.2 to 6.1.5? Are these clearly defined and integrated into the EMS?`,
                prompts: [
                    `Note: Clause 6.1.1 has been restructured in 2026 — it now focuses solely on process establishment; other content has been moved to new sub-clauses.`,
                ],
            },
            {
                id: "q6-2",
                code: "Q6.2",
                title: `Identification of environmental aspects including emergency situations`,
                text: `Does the organisation identify environmental aspects associated with:`,
                prompts: [
                    `All work areas, facilities, activities, products and services?`,
                    `All normal and abnormal operating conditions?`,
                    `Potential emergency situations (now separately determined from abnormal conditions — 2026 update)?`,
                    `Lifecycle stages including upstream and downstream activities?`,
                    `Previous environmental incidents?`,
                ],
            },
            {
                id: "q6-3",
                code: "Q6.3",
                title: `Evaluation of environmental impacts`,
                text: `Does the organisation evaluate environmental impacts associated with identified aspects considering:`,
                prompts: [
                    `Severity and consequence including scale, persistence and reversibility?`,
                    `Probability and frequency?`,
                    `Sensitivity of affected environment including biodiversity and ecosystem?`,
                    `Cross-boundary environmental impacts?`,
                ],
            },
            {
                id: "q6-4",
                code: "Q6.4",
                title: `Environmental aspects register`,
                text: `Is a comprehensive environmental aspects register documented and maintained as available documented information? Does it include:`,
                prompts: [
                    `All identified aspects and impacts?`,
                    `Significant aspects clearly identified?`,
                    `Emergency situations separately identified (2026 requirement)?`,
                    `Control measures and responsibilities?`,
                    `Regular review dates and updates when operations change?`,
                ],
            },
            {
                id: "q6-5",
                code: "Q6.5",
                title: `Identification and availability of compliance obligations (Clause 6.1.3)`,
                text: `Has the organisation identified and made available as documented information all compliance obligations relevant to its EMS including:`,
                prompts: [
                    `All applicable environmental laws and regulations?`,
                    `All regulatory permits and licences?`,
                    `Other environmental requirements (codes of practice, voluntary standards, contractual obligations)?`,
                    `Note: 2026 update changes wording from 'maintain' to 'available as documented information'.`,
                ],
            },
            {
                id: "q6-6",
                code: "Q6.6",
                title: `Compliance obligations matrix and tracking`,
                text: `Is a matrix of compliance obligations maintained? Does it include:`,
                prompts: [
                    `Specific obligation and source?`,
                    `Applicable facilities and processes?`,
                    `Compliance responsibility assignment?`,
                    `Compliance status and evidence?`,
                    `Link to interested party needs and expectations (cross-reference to Clause 4.2)?`,
                ],
            },
            {
                id: "q6-7",
                code: "Q6.7",
                title: `★ NEW Risks and opportunities — determination and documentation (NEW Clause 6.1.4)`,
                text: `Does the organisation determine and document risks and opportunities considering:`,
                prompts: [
                    `Context of the organisation (Clause 4.1)?`,
                    `Needs and expectations of interested parties (Clause 4.2)?`,
                    `EMS scope (Clause 4.3)?`,
                    `Significant environmental aspects?`,
                    `Compliance obligations?`,
                    `Note: This is a newly numbered, standalone clause in 2026 (formerly embedded in 6.1.1) with an explicit documentation requirement.`,
                ],
                is2026: true,
            },
            {
                id: "q6-8",
                code: "Q6.8",
                title: `Actions to address environmental aspects, compliance obligations, risks and opportunities (Clause 6.1.5)`,
                text: `Has the organisation planned and implemented actions to address environmental aspects, compliance obligations, and risks and opportunities? Are these actions integrated into EMS and business processes?`,
                prompts: [
                    `Note: Clause renumbered from 6.1.4 (2015) to 6.1.5 (2026). Language clarified on integration with business processes.`,
                ],
            },
            {
                id: "q6-9",
                code: "Q6.9",
                title: `Environmental objectives establishment (Clause 6.2.1)`,
                text: `Are measurable environmental objectives established and made available as documented information that:`,
                prompts: [
                    `Address significant aspects and associated impacts?`,
                    `Achieve pollution prevention or continual improvement?`,
                    `Align with environmental policy including biodiversity and ecosystem commitments?`,
                    `Consider legal compliance requirements?`,
                    `Include responsibility assignments and timelines?`,
                    `Note: 2026 update changes documentation language to 'available as documented information'.`,
                ],
            },
            {
                id: "q6-10",
                code: "Q6.10",
                title: `Planning to achieve environmental objectives (Clause 6.2.2)`,
                text: `Is a documented plan for achieving environmental objectives in place including:`,
                prompts: [
                    `What will be done to achieve each objective?`,
                    `What resources are needed?`,
                    `Who is responsible?`,
                    `Timeline for completion?`,
                    `How achievement will be evaluated and monitored?`,
                    `Note: No material change from 2015 for this sub-clause.`,
                ],
            },
            {
                id: "q6-11",
                code: "Q6.11",
                title: `★ NEW Planning and managing changes (NEW Clause 6.3)`,
                text: `Does the organisation manage planned and unplanned changes to the EMS through a documented process that assesses:`,
                prompts: [
                    `Environmental implications before implementing changes?`,
                    `New or modified environmental aspects?`,
                    `Applicable compliance obligations?`,
                    `Risk of environmental incidents?`,
                    `Updated controls and mitigation measures?`,
                    `Note: ENTIRELY NEW subclause in 2026. Introduces a formal requirement to manage change impacting the EMS.`,
                ],
                is2026: true,
            },
        ],
    },
    {
        id: "clause-7-support",
        clauseNumber: "7",
        title: "Support (Competence, Awareness, Communication, Documentation)",
        label: "Clause 7: Support (Competence, Awareness, Communication, Documentation)",
        questions: [
            {
                id: "q7-1",
                code: "Q7.1",
                title: `Determination of competence requirements`,
                text: `Does the organisation determine competence requirements for personnel involved in environmental management including:`,
                prompts: [
                    `Environmental awareness and knowledge?`,
                    `Specific environmental responsibilities?`,
                    `Control operation and maintenance?`,
                    `Incident response and emergency procedures?`,
                ],
            },
            {
                id: "q7-2",
                code: "Q7.2",
                title: `Environmental training and competence`,
                text: `Does the organisation ensure personnel are competent to meet (not just 'fulfil') their environmental obligations by providing:`,
                prompts: [
                    `Initial environmental training and orientation?`,
                    `Job-specific environmental training?`,
                    `Refresher training at appropriate intervals?`,
                    `Competency assessments and verification?`,
                    `Documentation of training records available as documented information?`,
                    `Note: 2026 update changes 'fulfil' to 'meet' compliance obligations throughout.`,
                ],
            },
            {
                id: "q7-3",
                code: "Q7.3",
                title: `Worker awareness of environmental responsibilities`,
                text: `Are workers aware of:`,
                prompts: [
                    `Environmental policy and objectives including biodiversity and ecosystem commitments?`,
                    `Their roles and responsibilities for environmental management?`,
                    `Significant environmental aspects in their work areas?`,
                    `Procedures for responding to environmental incidents?`,
                    `Potential consequences of not meeting (not 'fulfilling') compliance obligations?`,
                ],
            },
            {
                id: "q7-4",
                code: "Q7.4",
                title: `Environmental information communication — general (Clause 7.4.1)`,
                text: `Does the organisation determine what, when, how and with whom to communicate on the EMS? Is evidence of communication available as documented information?`,
                prompts: [
                    `Note: 2026 update changes 'retain' to 'available as documented information'.`,
                ],
            },
            {
                id: "q7-5",
                code: "Q7.5",
                title: `Internal communication and worker contribution (Clause 7.4.2)`,
                text: `Do internal communication processes enable workers to contribute to continual improvement of the EMS?`,
                prompts: [
                    `Note: Minor 2026 clarification — 'to contribute' changed to 'contribute'.`,
                ],
            },
            {
                id: "q7-6",
                code: "Q7.6",
                title: `Response to environmental communications`,
                text: `Are processes in place to:`,
                prompts: [
                    `Receive and document worker concerns about environmental issues?`,
                    `Respond to interested party enquiries about environmental matters?`,
                    `Address environmental complaints or concerns?`,
                    `Provide feedback on actions taken?`,
                    `Track and verify resolution?`,
                ],
            },
            {
                id: "q7-7",
                code: "Q7.7",
                title: `Documented information — general (Clause 7.5.1)`,
                text: `Is documented information required by ISO 14001 maintained, controlled and made available where required? Is appropriate access provided to relevant interested parties?`,
                prompts: [
                    `Note: 2026 update clarifies 'available as documented information' and its accessibility to interested parties.`,
                ],
            },
            {
                id: "q7-8",
                code: "Q7.8",
                title: `Creating and updating documented information (Clause 7.5.2)`,
                text: `Are documented information and records controlled to ensure:`,
                prompts: [
                    `Proper identification, format and version control?`,
                    `Secure storage and protection from damage?`,
                    `Appropriate retention periods are defined?`,
                    `Access is controlled appropriately?`,
                    `Digital records are backed up and recoverable?`,
                    `Note: Clause title updated in 2026 to explicitly mention 'documented information'.`,
                ],
            },
        ],
    },
    {
        id: "clause-8-operation",
        clauseNumber: "8",
        title: "Operation (Environmental Controls)",
        label: "Clause 8: Operation (Environmental Controls)",
        questions: [
            {
                id: "q8-1",
                code: "Q8.1",
                title: `Operational planning and control (Clause 8.1)`,
                text: `Has the organisation implemented controls for processes associated with significant environmental aspects and compliance obligations including externally provided processes (contractors, outsourced activities)?`,
                prompts: [
                    `Operational procedures and work instructions?`,
                    `Defined criteria for acceptable environmental performance?`,
                    `Monitoring and control mechanisms?`,
                    `Note: 2026 strengthens emphasis on 'externally provided' processes — contractors and outsourced activities.`,
                ],
            },
            {
                id: "q8-2",
                code: "Q8.2",
                title: `Control of significant environmental aspects`,
                text: `Are significant environmental aspects controlled through documented procedures that:`,
                prompts: [
                    `Address all identified significant aspects?`,
                    `Implement practical control measures?`,
                    `Monitor and measure effectiveness?`,
                    `Are communicated to relevant personnel?`,
                    `Are maintained and reviewed regularly?`,
                ],
            },
            {
                id: "q8-3",
                code: "Q8.3",
                title: `Energy management and efficiency`,
                text: `Energy audit and baseline establishment?`,
                prompts: [
                    `If applicable: Does the organisation manage energy consumption through:`,
                    `Energy efficiency objectives and targets?`,
                    `Monitoring and measuring energy use?`,
                    `Regular review and improvement of efficiency?`,
                    `Staff awareness and behaviour change programmes?`,
                ],
            },
            {
                id: "q8-4",
                code: "Q8.4",
                title: `Water management and conservation`,
                text: `Water consumption assessment and baseline?`,
                prompts: [
                    `If applicable: Does the organisation manage water use through:`,
                    `Conservation and efficiency measures?`,
                    `Monitoring and metering of water use?`,
                    `Wastewater management and discharge controls?`,
                    `Regular review of consumption trends?`,
                ],
            },
            {
                id: "q8-5",
                code: "Q8.5",
                title: `Waste management and minimisation`,
                text: `Does the organisation manage waste through documented procedures that:`,
                prompts: [
                    `Identify all waste streams generated?`,
                    `Implement waste reduction and prevention measures?`,
                    `Segregate waste for proper handling and disposal?`,
                    `Track waste volumes and types?`,
                    `Use authorised waste disposal contractors?`,
                ],
            },
            {
                id: "q8-6",
                code: "Q8.6",
                title: `Hazardous materials management`,
                text: `Inventory of all hazardous substances?`,
                prompts: [
                    `If applicable: Does the organisation manage hazardous materials through:`,
                    `Safety data sheets (SDS) availability?`,
                    `Proper labelling and storage requirements?`,
                    `Staff training on hazardous material handling?`,
                    `Spill prevention and response procedures?`,
                    `Waste disposal per regulatory requirements?`,
                ],
            },
            {
                id: "q8-7",
                code: "Q8.7",
                title: `Air emissions management`,
                text: `Identification of all emission sources?`,
                prompts: [
                    `If applicable: Does the organisation control air emissions through:`,
                    `Equipment maintenance and monitoring?`,
                    `Compliance with emission standards?`,
                    `Regular monitoring and testing?`,
                    `Permit compliance and reporting?`,
                ],
            },
            {
                id: "q8-8",
                code: "Q8.8",
                title: `Wastewater and water discharge management`,
                text: `Treatment systems if required?`,
                prompts: [
                    `If applicable: Does the organisation manage wastewater through:`,
                    `Monitoring and testing of discharge quality?`,
                    `Compliance with discharge permits and standards?`,
                    `Regular maintenance of treatment systems?`,
                    `Spill prevention measures?`,
                ],
            },
            {
                id: "q8-9",
                code: "Q8.9",
                title: `Noise, vibration and light pollution control`,
                text: `If applicable: Does the organisation control noise, vibration and light pollution through:`,
                prompts: [
                    `Assessment of noise/vibration/light levels?`,
                    `Engineering controls and equipment maintenance?`,
                    `Monitoring of compliance with limits?`,
                    `Community impact assessment?`,
                    `Response to complaints and concerns?`,
                ],
            },
            {
                id: "q8-10",
                code: "Q8.10",
                title: `Contractor and supplier environmental management`,
                text: `Does the organisation ensure contractors and suppliers:`,
                prompts: [
                    `Understand and comply with environmental requirements?`,
                    `Provide evidence of environmental competence?`,
                    `Are assessed for environmental capability before engagement?`,
                    `Are monitored during work execution?`,
                    `Note: 2026 strengthens requirements on externally provided processes and outsourced activities.`,
                ],
            },
            {
                id: "q8-11",
                code: "Q8.11",
                title: `Procurement and lifecycle controls`,
                text: `Are procurement processes documented to ensure purchased goods and services meet environmental requirements? Does the organisation apply lifecycle thinking to procurement decisions including upstream and downstream environmental impacts?`,
            },
            {
                id: "q8-12",
                code: "Q8.12",
                title: `Design and development environmental considerations`,
                text: `If applicable: When designing new products or facilities, are environmental considerations included:`,
                prompts: [
                    `Assessment of environmental impacts during design phase?`,
                    `Incorporation of pollution prevention in design?`,
                    `Consideration of lifecycle environmental impacts?`,
                    `Compliance with environmental regulations?`,
                    `Selection of environmentally preferred materials?`,
                ],
            },
            {
                id: "q8-13",
                code: "Q8.13",
                title: `Emergency preparedness procedures (Clause 8.2)`,
                text: `Are emergency preparedness and response plans documented and linked to emergency situations determined in Clause 6.1.2? Do they include:`,
                prompts: [
                    `Spill response plans with containment procedures?`,
                    `Emergency contact procedures and escalation?`,
                    `Emergency equipment available and maintained?`,
                    `Designated response team with training?`,
                    `Recovery and remediation procedures?`,
                    `Note: 2026 requires explicit link to emergency situations determined in 6.1.2.`,
                ],
            },
            {
                id: "q8-14",
                code: "Q8.14",
                title: `Emergency drills and testing`,
                text: `Are emergency procedures:`,
                prompts: [
                    `Tested through drills and exercises at planned intervals?`,
                    `Results documented and reviewed?`,
                    `Procedures updated based on findings?`,
                    `All relevant personnel involved in drills?`,
                    `Plans revised following actual emergency incidents?`,
                ],
            },
        ],
    },
    {
        id: "clause-9-performance",
        clauseNumber: "9",
        title: "Performance Evaluation (Monitoring, Measurement & Auditing)",
        label: "Clause 9: Performance Evaluation (Monitoring, Measurement & Auditing)",
        questions: [
            {
                id: "q9-1",
                code: "Q9.1",
                title: `Environmental performance monitoring, measurement, analysis and evaluation (Clause 9.1.1)`,
                text: `Does the organisation monitor, measure, analyse and evaluate EMS performance and effectiveness? Is appropriate documented information available?`,
                prompts: [
                    `Note: 2026 emphasises 'evaluate' (not just 'monitor') and updates documentation language.`,
                ],
            },
            {
                id: "q9-2",
                code: "Q9.2",
                title: `Environmental performance metrics and KPIs`,
                text: `Are environmental key performance indicators:`,
                prompts: [
                    `Defined and documented?`,
                    `Tracked regularly (daily, weekly, monthly)?`,
                    `Compared to targets and objectives?`,
                    `Reported to management?`,
                    `Used to identify improvement opportunities?`,
                ],
            },
            {
                id: "q9-3",
                code: "Q9.3",
                title: `Monitoring equipment and calibration`,
                text: `Are monitoring and measurement equipment:`,
                prompts: [
                    `Properly maintained and calibrated?`,
                    `Calibration performed by accredited providers?`,
                    `Records of calibration maintained?`,
                    `Equipment suitable for intended use?`,
                ],
            },
            {
                id: "q9-4",
                code: "Q9.4",
                title: `Environmental incident reporting and investigation`,
                text: `Are environmental incidents:`,
                prompts: [
                    `Promptly reported through documented procedures?`,
                    `Investigated to determine root causes?`,
                    `Corrective actions developed and implemented?`,
                    `Effectiveness of actions verified?`,
                    `Lessons learned communicated?`,
                ],
            },
            {
                id: "q9-5",
                code: "Q9.5",
                title: `Environmental incident documentation and classification`,
                text: `Are environmental incidents:`,
                prompts: [
                    `Classified appropriately (spill, emission, compliance breach, etc.)?`,
                    `Documented with complete details?`,
                    `Recorded in an accessible system?`,
                    `Reported to management and regulators as required?`,
                    `Analysed for trends?`,
                ],
            },
            {
                id: "q9-6",
                code: "Q9.6",
                title: `Evaluation of compliance with compliance obligations (Clause 9.1.2)`,
                text: `Does the organisation evaluate whether it meets (not just 'fulfils') its compliance obligations and retain appropriate evidence?`,
                prompts: [
                    `Compliance with all applicable legal requirements?`,
                    `Status of permits and licences?`,
                    `Changes in legal requirements?`,
                    `Non-compliances or violations?`,
                    `Prompt action on identified non-compliances?`,
                    `Note: 2026 changes 'fulfilment' to 'meeting' compliance obligations.`,
                ],
            },
            {
                id: "q9-7",
                code: "Q9.7",
                title: `Internal audit objectives, programme and scope (Clause 9.2.2)`,
                text: `Does the organisation conduct internal EMS audits with defined objectives, scope and criteria?`,
                prompts: [
                    `At planned intervals (at least annually)?`,
                    `Covering all clauses and processes?`,
                    `Based on risk assessment and compliance status?`,
                    `Conducted by impartial and objective auditors?`,
                    `Results retained as documented information?`,
                    `Note: 2026 adds 'objectives' as an explicit audit programme requirement.`,
                ],
            },
            {
                id: "q9-8",
                code: "Q9.8",
                title: `Internal audit finding follow-up`,
                text: `Are internal audit findings:`,
                prompts: [
                    `Communicated to management and responsible parties?`,
                    `Root causes determined?`,
                    `Corrective actions assigned with timelines?`,
                    `Implementation tracked and verified?`,
                    `Effectiveness assessed?`,
                ],
            },
            {
                id: "q9-9",
                code: "Q9.9",
                title: `Management review structure and inputs (Clauses 9.3.1 & 9.3.2)`,
                text: `Are management reviews conducted at planned intervals to review EMS performance?`,
                prompts: [
                    `9.3.1 — Context inputs: changes in external/internal issues; interested party needs; climate change relevance`,
                    `9.3.2 — Performance inputs: status of previous actions; environmental performance vs objectives; compliance obligations status; audit results; significant aspects and risks; nonconformities and corrective actions; monitoring results; improvement opportunities`,
                    `Note: 2026 restructures management review into subclauses 9.3.1–9.3.3.`,
                ],
            },
            {
                id: "q9-10",
                code: "Q9.10",
                title: `Management review results, decisions and documentation (Clause 9.3.3)`,
                text: `Are management review results (replacing 'outputs' — 2026 update) documented and include:`,
                prompts: [
                    `Conclusions on EMS suitability, adequacy and effectiveness?`,
                    `Decisions on continual improvement opportunities?`,
                    `Changes needed to the EMS (link to Clause 6.3)?`,
                    `Resources required?`,
                    `Actions arising with owner and target date?`,
                    `Note: 2026 replaces 'outputs' with 'results' throughout Clause 9.3.`,
                ],
            },
            {
                id: "q9-11",
                code: "Q9.11",
                title: `Environmental communication to interested parties`,
                text: `Does the organisation communicate environmental information externally:`,
                prompts: [
                    `Environmental performance and progress?`,
                    `Environmental incidents and responses?`,
                    `Compliance with regulations?`,
                    `Sustainability reports and disclosures?`,
                    `Response to stakeholder enquiries?`,
                ],
            },
        ],
    },
    {
        id: "clause-10-improvement",
        clauseNumber: "10",
        title: "Improvement (Nonconformities & Continual Improvement)",
        label: "Clause 10: Improvement (Nonconformities & Continual Improvement)",
        questions: [
            {
                id: "q10-1",
                code: "Q10.1",
                title: `Identification of environmental nonconformities (Clause 10.1 — formerly 10.2)`,
                text: `Does the organisation identify nonconformities including:`,
                prompts: [
                    `Work that does not meet environmental requirements?`,
                    `Audit findings and recommendations?`,
                    `Regulatory violations or non-compliance?`,
                    `Interested party concerns or complaints?`,
                    `Deviation from environmental procedures or situations that can potentially occur?`,
                    `Note: Clause renumbered to 10.1 in 2026. 'Can potentially occur' replaces 'could potentially occur'.`,
                ],
            },
            {
                id: "q10-2",
                code: "Q10.2",
                title: `Corrective action procedures and implementation`,
                text: `When nonconformities are identified, are corrective actions:`,
                prompts: [
                    `Promptly documented and planned?`,
                    `Root causes thoroughly investigated?`,
                    `Preventive actions developed addressing underlying causes?`,
                    `Responsibilities clearly assigned?`,
                    `Implemented as planned and verified effective?`,
                    `Relevant documented information made available?`,
                ],
            },
            {
                id: "q10-3",
                code: "Q10.3",
                title: `Corrective action effectiveness verification`,
                text: `Are corrective actions:`,
                prompts: [
                    `Reviewed for effectiveness after implementation?`,
                    `Results monitored over time for sustainability?`,
                    `Verified to address root causes?`,
                    `Adjusted if ineffective or inadequate?`,
                ],
            },
            {
                id: "q10-4",
                code: "Q10.4",
                title: `Continual improvement commitment and opportunities (Clause 10.2 — formerly 10.3)`,
                text: `Does the organisation proactively identify and act on opportunities for improvement to achieve the intended outcomes of the EMS?`,
                prompts: [
                    `Are improvement opportunities identified from Clause 9 findings (monitoring, audit results, compliance evaluation, management review)?`,
                    `Are improvements linked to achieving EMS intended outcomes?`,
                    `Are workers engaged in improvement activities?`,
                    `Note: 2026 expands this clause to require formal identification of opportunities and explicit link to Clause 9 outputs.`,
                ],
            },
            {
                id: "q10-5",
                code: "Q10.5",
                title: `Continual improvement initiatives and culture`,
                text: `Does the organisation initiate environmental improvements based on:`,
                prompts: [
                    `Trend analysis of environmental data?`,
                    `Worker suggestions and ideas?`,
                    `Best practice research and benchmarking?`,
                    `Changes in legal or regulatory requirements?`,
                    `Technology advances and innovations?`,
                    `Lifecycle assessment findings?`,
                    `Stakeholder feedback and requests?`,
                ],
            },
            {
                id: "q10-6",
                code: "Q10.6",
                title: `Environmental system effectiveness and optimisation`,
                text: `Does the organisation evaluate whether the EMS is:`,
                prompts: [
                    `Achieving its intended environmental protection purpose?`,
                    `Effectively reducing significant environmental impacts?`,
                    `Supporting pollution prevention and biodiversity protection?`,
                    `Achieving stated environmental objectives?`,
                    `Meeting stakeholder needs and expectations?`,
                ],
            },
        ],
    },
];
