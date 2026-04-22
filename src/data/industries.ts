export interface Industry {
    id: string;
    slug: string;
    title: string;
    description: string;
    color: string;
    bgImage?: string;
    heroSparkleText?: string;
    heroHeading?: string;
    challengesSparkleText?: string;
    challengesHeading?: string;
    challengesCards?: { title: string, description: string }[];
    supportSparkleText?: string;
    supportHeading?: string;
    supportItems?: {
        title: string;
        description: string;
        bullets: string[];
    }[];
    auditMateSparkle?: string;
    auditMateHeading?: string;
    auditMateDescription?: string;
    standardsSparkleText?: string;
    standardsHeading?: string;
    standardsDescription?: string;
    standardsItems?: {
        title: string;
        description: string;
    }[];
    checklistsTag?: string;
    checklistsHeading?: string;
    checklistsDescription?: string;
    checklistsItems?: string[];
    ctaHeading?: string;
    ctaDescription?: string;
    ctaPrimaryButton?: string;
    ctaSecondaryButton?: string;
    caseStudySparkle?: string;
    caseStudyHeading?: string;
    caseStudyDescription?: string;
    caseStudyButton?: string;
    caseStudyImage?: string;
    faqSparkleText?: string;
    faqHeading?: string;
    faqItems?: {
        question: string;
        answer: string;
    }[];
    testimonialsHeading?: string;
    testimonials?: {
        quote: string;
        author: string;
        role: string;
        company: string;
        avatar: string;
        batch: string;
    }[];
}

export const industries: Industry[] = [
    {
        id: "01",
        slug: "retail",
        title: "Retail",
        description: "Maintain quality and safety standards across stores, warehouses, and supply chains.",
        color: "#10b981",
        bgImage: "/images/retail-bg.jpg",
    },
    {
        id: "02",
        slug: "logistics",
        title: "Logistics",
        description: "Keep warehouses, transport, and distribution networks compliant with structured audits.",
        color: "#f59e0b",
        bgImage: "/images/logistics-bg.jpg",
    },
    {
        id: "03",
        slug: "transport",
        title: "Transport",
        description: "Ensure fleet safety and regulatory compliance across supply chains and distribution networks.",
        color: "#64748b",
        bgImage: "/images/transport-bg.jpg",
    },
    {
        id: "04",
        slug: "construction-iso-audit-software",
        title: "Construction",
        description: "Move beyond spreadsheets with construction audit software for ISO 9001, 14001, 45001 and 27001 across every active project.",
        color: "#84cc16",
        bgImage: "/images/construction-bg.jpg",
        heroSparkleText: "Construction ISO audit software",
        heroHeading: "Construction Audit Software for ISO Compliance",
        challengesSparkleText: "Construction audit challenges",
        challengesHeading: "Why generic audit tools fail on construction sites",
        challengesCards: [
            {
                title: "Temporary and mobile sites",
                description: "Projects are temporary and constantly changing. Your construction audit software must track compliance across dynamic, high-risk environments, not just head offices."
            },
            {
                title: "Complex supply chains",
                description: "Managing subcontractor quality and competence is difficult. Audits must ensure standards flow down to every tier of the supply chain on site."
            },
            {
                title: "Overlapping site risks",
                description: "Quality, safety and environmental risks overlap daily. Sites need integrated audits covering Inspection and Test Plans (ITPs), CEMPs and safety regulations."
            }
        ],
        supportSparkleText: "ISO software for construction",
        supportHeading: "Built to audit sites, not just head office paperwork",
        supportItems: [
            {
                title: "Multi-site project visibility",
                description: "",
                bullets: [
                    "View findings and actions across all live projects centrally",
                    "Compare sites to spot patterns and recurring risks early"
                ]
            },
            {
                title: "Inspection and Test Plans (ITP)",
                description: "",
                bullets: [
                    "Capture hidden works and hold point evidence on site",
                    "Track NCRs and defects through to verified closure"
                ]
            },
            {
                title: "Environmental and CEMP controls",
                description: "",
                bullets: [
                    "Capture drain, bund and waste control evidence instantly",
                    "Link incidents to root causes and preventive actions"
                ]
            },
            {
                title: "Subcontractor and workforce competence",
                description: "",
                bullets: [
                    "Flag expired qualifications before workers reach site",
                    "Check subcontractor quality and safety during routine audits"
                ]
            },
            {
                title: "PDCA for project improvement",
                description: "",
                bullets: [
                    "Plan audits around project risk, value and phase",
                    "Verify corrective actions to stop repeat defects recurring"
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for construction",
        auditMateHeading: "Your AI assistant for construction audit planning",
        auditMateDescription: "Use Audit Mate to generate ISO checklists for site inspections, ITPs, subcontractors and environmental controls.",
        standardsSparkleText: "ISO standards for construction",
        standardsHeading: "ISO standards we support for construction projects",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 controls ITPs and defect reduction while ISO 14001 manages site waste and pollution prevention."
            },
            {
                title: "Safety and information security",
                description: "ISO 45001 manages site safety and hazard tracking while ISO 27001 protects project data and models."
            }
        ],
        testimonials: [],
        checklistsTag: "Free construction audit checklists",
        checklistsHeading: "Start your next construction audit with a ready‑made checklist",
        checklistsDescription: "Download free ISO audit checklists for construction teams, covering project quality, site conditions, subcontractors, environment, NCRs and handover.",
        checklistsItems: [
            "Project Quality Plan and ITP Audit Checklist",
            "Site Housekeeping and Safety‑Critical Quality Checklist",
            "Subcontractor and Supply Chain Quality Audit Checklist",
            "Environmental Controls and Legal Compliance Audit Checklist",
            "NCR, Corrective Action and Lessons Learned Checklist",
            "Pre‑Handover Documentation and As‑Built Records Checklist"
        ],
        ctaHeading: "Upgrade how you manage ISO audits in construction",
        ctaDescription: "Book a personalised demo or start a free trial to see how our construction audit software simplifies ISO compliance.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Construction case study",
        caseStudyHeading: "See how civil engineers run better site audits",
        caseStudyDescription: "Read how a regional contractor replaced scattered spreadsheets with our construction audit software to standardise ITPs, improve CEMP evidence, and pass external surveillance audits without the panic.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/construction-bg.jpg",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "How do you audit an Inspection and Test Plan (ITP) effectively?",
                answer: "To audit an ITP effectively, you must move beyond checking that the document exists. A strong internal audit verifies that the ITP is actively used on site, that hold points have been signed off by the correct authority before works are covered, and that physical Inspection and Test Records (ITRs) match the plan. iAudit Global allows you to attach photos and signatures directly to these checks as irrefutable evidence."
            },
            {
                question: "What is the biggest challenge when auditing ISO 14001 on a construction site?",
                answer: "The biggest challenge is ensuring that the Construction Environmental Management Plan (CEMP) reflects the physical reality of the site. Often, CEMPs are generic documents left in the site office. Auditors frequently find failures in waste segregation, missing drain guards, or inadequate fuel bunding. Our construction audit software prompts auditors to physically verify these controls with mobile checklists."
            },
            {
                question: "Can iAudit help us manage subcontractor compliance?",
                answer: "Yes. In construction, up to 80% of work is delivered by external providers, making supply chain control critical for ISO 9001 and ISO 45001. You can use iAudit to run specific subcontractor audits, verify worker competence (like CSCS cards), and track non-conformances (NCRs) by trade to identify systemic issues across your projects."
            },
            {
                question: "How does iAudit handle audits across multiple temporary worksites?",
                answer: "iAudit is built for multi-site and mobile operations. You can schedule audits across all active projects from one central dashboard. Instead of site managers emailing spreadsheets back to head office, all findings, evidence, and corrective actions sync to one secure workspace, giving directors real-time visibility of project compliance."
            },
            {
                question: "Is it possible to conduct integrated audits (QHSE) using this software?",
                answer: "Absolutely. Many principal contractors run Integrated Management Systems (IMS). With iAudit, you can build custom checklists that cover quality (ISO 9001), environment (ISO 14001), and safety (ISO 45001) in a single site walkthrough, saving time and preventing audit fatigue for your site managers."
            },
            {
                question: "What happens if a site has no internet connection during an audit?",
                answer: "Construction sites often have poor connectivity, especially during groundworks or in basements. iAudit supports offline auditing. You can complete your checklists, capture photographic evidence, and log findings without an internet connection. The app automatically syncs the data to the cloud as soon as your device reconnects."
            },
            {
                question: "How do we track construction defects and non-conformances (NCRs)?",
                answer: "Generic tools often treat NCRs as a simple checklist item. iAudit treats them as a process. You log the defect, assign an owner and deadline, and require root cause analysis. Crucially, the finding remains \"open\" until effectiveness is verified, ensuring that a recurring defect on one site is fixed permanently across the business."
            }
        ]
    },
    {
        id: "05",
        slug: "manufacturing-iso-audit-software",
        title: "Manufacturing",
        description: "Manage high‑volume production, supply chain risks and environmental compliance across sites with one structured ISO audit management platform.",
        color: "#0d9488",
        bgImage: "/images/manufacturing-bg.jpg",
        heroSparkleText: "Manufacturing ISO audit software by iAudit",
        heroHeading: "Manufacturing Audit Software for ISO Compliance",
        challengesSparkleText: "Manufacturing compliance challenges",
        challengesHeading: "Why manufacturing audits break down on the shopfloor",
        challengesCards: [
            {
                title: "Process variability risk",
                description: "High‑volume production and multi‑shift setups make it difficult to track defects and tool wear consistently across sites."
            },
            {
                title: "Complex supply chains",
                description: "Audits must ensure that quality and safety standards flow down to every supplier to maintain full batch traceability."
            },
            {
                title: "Hazardous operational risks",
                description: "Protecting workers from machinery and chemical hazards requires rigorous, evidenced checks that go beyond basic head office paperwork."
            }
        ],
        supportSparkleText: "iAudit for manufacturing",
        supportHeading: "Make manufacturing ISO audits consistent everywhere",
        supportItems: [
            {
                title: "Floor‑level process and batch control",
                description: "",
                bullets: [
                    "Capture real‑time evidence of gauge calibrations and material batch codes directly at the production line.",
                    "Trace process deviations back to specific machines or batches to ensure full ISO 9001 compliance."
                ]
            },
            {
                title: "Multi‑shift and multi‑site dashboards",
                description: "",
                bullets: [
                    "Compare audit scores across different production lines and factory locations from one central view.",
                    "Identify which shifts or sites are leading in compliance and which need targeted support or training."
                ]
            },
            {
                title: "Environmental permit and emissions tracking",
                description: "",
                bullets: [
                    "Use structured checklists to audit waste segregation, spill controls and emissions against ISO 14001 requirements.",
                    "Maintain accurate legal registers for REACH and environmental permits with all evidence stored centrally."
                ]
            },
            {
                title: "Machinery safety and hazard identification",
                description: "",
                bullets: [
                    "Manage ISO 45001 compliance by tracking machinery guarding, ergonomic risks and PPE usage across the plant.",
                    "Verify safety inductions for seasonal or agency workers before they begin safety‑critical tasks on the floor."
                ]
            },
            {
                title: "Supply chain and subcontractor quality",
                description: "",
                bullets: [
                    "Audit external providers against your quality and safety standards to maintain integrity across the supply chain.",
                    "Track subcontractor non‑conformances and performance trends to ensure consistent material and service quality."
                ]
            }
        ],
        auditMateSparkle: "AI for manufacturing audits",
        auditMateHeading: "Your AI co‑pilot for production audit planning",
        auditMateDescription: "Use Audit Mate to draft specific checklists for FMEAs, tool wear and batch traceability records.",
        standardsSparkleText: "Standards for manufacturing",
        standardsHeading: "ISO standards supported for your factory floor",
        standardsDescription: "Our manufacturing audit software provides deep support for the standards that matter most to production and operational teams.",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 manages process control and defects. ISO 14001 handles waste, emissions and legal permit compliance across your sites."
            },
            {
                title: "Occupational health and safety",
                description: "ISO 45001 supports machinery safety, hazard identification and staff wellbeing to ensure a safe, productive working environment."
            }
        ],
        testimonials: [
            {
                quote: "We used to spend half a shift chasing calibration certificates and batch records. Now the evidence sits with the finding, and follow-up is clear. Our internal audits feel tighter, and surveillance audits are far less stressful.",
                author: "Priya Menon",
                role: "Head of Internal Audit",
                company: "Acme Manufacturing",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Audit Expert"
            },
            {
                quote: "Our biggest issue was repeat NCRs across different lines. iAudit made it obvious where the same causes were showing up. Actions have owners, deadlines and evidence, so we are actually seeing defects reduce over time.",
                author: "Daniel Gomez",
                role: "Compliance Manager",
                company: "FinTrust Bank",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Auditor"
            },
            {
                quote: "Multi-site reporting was a mess in spreadsheets. With one dashboard, we can compare sites, shifts and processes properly. It has improved consistency, and managers can see what is overdue without asking for yet another update.",
                author: "Amira El-Sayed",
                role: "QA Lead",
                company: "Global Pharma Co.",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        testimonialsHeading: "Trusted by manufacturing audit teams",
        checklistsTag: "Free manufacturing audit checklists",
        checklistsHeading: "Start your next audit with manufacturing checklists",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 manufacturing checklists for traceability, calibration, safety controls, waste, and corrective actions.",
        checklistsItems: [
            "Calibration and Measuring Equipment Control Checklist (ISO 9001)",
            "Batch Traceability and Identification Checklist (ISO 9001)",
            "Supplier Approval and Incoming Quality Checklist (ISO 9001)",
            "Waste, Emissions and Spill Controls Checklist (ISO 14001)",
            "Machine Guarding and LOTO Readiness Checklist (ISO 45001)",
            "Incident, NCR and Corrective Action Effectiveness Checklist (ISO 9001 and 45001)"
        ],
        ctaHeading: "Upgrade how you manage manufacturing audits",
        ctaDescription: "Start free or book a demo to run faster audits with clearer evidence and follow-up.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Manufacturing case study",
        caseStudyHeading: "How a component specialist cut audit admin by 60%",
        caseStudyDescription: "A high‑volume manufacturer was struggling with scattered evidence and inconsistent NCR follow‑up across three production sites. By implementing our manufacturing audit software, they centralised their findings, automated their report generation and reduced the time spent on audit admin by 60%.",
        caseStudyButton: "Read Case Study",
        caseStudyImage: "/images/manufacturing-bg.jpg",
        faqSparkleText: "Manufacturing audit help",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is manufacturing audit software?",
                answer: "Manufacturing audit software helps teams plan, run and report internal audits across production, quality, environment and safety. It centralises findings, evidence and corrective actions so audits stay consistent and results are easier to track across lines, shifts and sites."
            },
            {
                question: "What are the most common ISO 9001 nonconformities in manufacturing?",
                answer: "Common findings include missing calibration evidence, weak batch traceability, unapproved supplier use, incomplete inspection records, uncontrolled process changes, and corrective actions closed without proof of effectiveness. These often lead to repeat defects and recurring NCRs."
            },
            {
                question: "How do you audit calibration and measurement control in manufacturing?",
                answer: "A good audit checks more than the calibration certificate. It verifies that gauges are in-date, identified, used in the correct locations, protected from damage, and removed from use when expired. It should also confirm actions taken when an out-of-tolerance result occurs."
            },
            {
                question: "How do you audit traceability in batch or serial production?",
                answer: "You audit traceability by sampling a finished product or batch and tracing it back to raw materials, key process steps, inspections and approvals. In manufacturing, auditors look for clear identification, correct labelling, controlled records and the ability to complete a trace quickly and confidently."
            },
            {
                question: "Can iAudit help manage audits across multiple sites and shifts?",
                answer: "Yes. iAudit provides multi-site dashboards and role-based access so auditors, managers and auditees can work in one system. You can compare sites, lines and shifts, track repeat NCRs, and keep evidence linked to findings for better oversight."
            },
            {
                question: "How does iAudit support ISO 14001 and ISO 45001 audits in manufacturing?",
                answer: "iAudit helps teams audit environmental and safety controls with structured checklists and central evidence capture. That includes waste segregation, spill readiness, storage areas, guarding, PPE, manual handling and chemical controls, with actions tracked through to verified closure."
            },
            {
                question: "Can we try iAudit before committing to a plan?",
                answer: "Yes. You can start a 14-day free trial with no credit card required. During the trial, you can run audits, use templates, capture evidence, track findings and actions, and generate reports to see how it fits your manufacturing audit programme."
            }
        ]
    },
    {
        id: "06",
        slug: "healthcare-compliance-software",
        title: "Healthcare",
        description: "Manage ISO 9001, 14001, 45001 and 27001 audits with healthcare compliance software built for clinical, operational and governance teams.",
        color: "#0284c7",
        bgImage: "/images/healthcare-bg.png",
        heroSparkleText: "Healthcare Compliance Software",
        heroHeading: "Healthcare Compliance Software for ISO Audits",
        challengesSparkleText: "Healthcare compliance challenges",
        challengesHeading: "Why generic tools miss healthcare safety risks",
        challengesCards: [
            {
                title: "Clinical safety risks",
                description: "Audits must catch issues like medication errors, infection risks, consent gaps and unsafe handovers before patient harm occurs."
            },
            {
                title: "Constant regulatory pressure",
                description: "Healthcare teams must balance ISO audits with CQC, MHRA, HSE and internal governance requirements across services and sites."
            },
            {
                title: "Fragmented systems and data",
                description: "Evidence often sits across logs, spreadsheets and departments, making trends, follow-up and audit visibility far harder."
            }
        ],
        supportSparkleText: "iAudit for healthcare",
        supportHeading: "How iAudit supports healthcare compliance audits",
        supportItems: [
            {
                title: "Clinical and patient safety audits",
                description: "",
                bullets: [
                    "Capture evidence for medication checks, handovers, infection control and consent processes",
                    "Track findings and actions across wards, departments and clinical services"
                ]
            },
            {
                title: "Workforce competence and training",
                description: "",
                bullets: [
                    "Flag expired registrations, mandatory training gaps and missing inductions",
                    "Check agency and temporary staff before they work unsupervised"
                ]
            },
            {
                title: "Environmental and estates controls",
                description: "",
                bullets: [
                    "Audit waste segregation, spill response and site-specific environmental risks",
                    "Capture evidence for estates, storage areas and HTM-related checks"
                ]
            },
            {
                title: "Findings, actions and governance",
                description: "",
                bullets: [
                    "Assign owners and deadlines to every finding in one place",
                    "Track trends and overdue actions for governance and management review"
                ]
            },
            {
                title: "Integrated ISO audits across healthcare",
                description: "",
                bullets: [
                    "Run ISO 9001, 14001, 45001 and 27001 audits in one system",
                    "Reduce duplicate effort across clinical, operational and support teams"
                ]
            }
        ],
        auditMateSparkle: "Healthcare audit assistant",
        auditMateHeading: "Your AI assistant for healthcare audit planning",
        auditMateDescription: "Generate healthcare-specific ISO checklists for patient safety, training, incidents and environmental controls instantly.",
        standardsSparkleText: "ISO standards for healthcare",
        standardsHeading: "ISO standards supported for healthcare providers",
        standardsDescription: "Use our healthcare compliance software to manage clinical quality, environmental impact and worker safety standards effectively.",
        standardsItems: [
            {
                title: "Patient safety and quality",
                description: "ISO 9001 manages clinical protocols, medication safety, handover processes and supplier traceability across hospital departments."
            },
            {
                title: "Environment and worker safety",
                description: "ISO 14001 controls clinical waste and emissions, while ISO 45001 tracks sharps safety and wellbeing."
            }
        ],
        testimonials: [],
        checklistsTag: "Free healthcare audit checklists",
        checklistsHeading: "Professional ISO audit checklists designed specifically for healthcare providers",
        checklistsDescription: "Download our ISO 9001, 14001 and 45001 checklists to streamline clinical, environmental and worker safety audits within your healthcare compliance software.",
        checklistsItems: [
            "ISO 9001:2015 Quality Management Systems – Healthcare Audit Checklist",
            "ISO 14001:2015 Environmental Management Systems – Healthcare Audit Checklist",
            "ISO 45001:2018 Occupational Health and Safety – Healthcare Audit Checklist"
        ],
        ctaHeading: "Achieve 100% clinical compliance confidence today",
        ctaDescription: "Start free or book a demo to simplify healthcare audits, actions, evidence and compliance in one place.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Healthcare case study",
        caseStudyHeading: "See how healthcare teams run better audits",
        caseStudyDescription: "Learn how this healthcare provider used our healthcare compliance software to standardise ward level audits, reducing medication errors by 25% while achieving consistent ISO 9001 and ISO 45001 certification readiness.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/healthcare-bg.png",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is healthcare compliance software?",
                answer: "Healthcare compliance software helps hospitals, clinics and care providers manage audits, evidence, actions and reporting in one place. It supports teams responsible for quality, environmental and safety compliance by replacing spreadsheets and paper checklists with a structured digital audit system."
            },
            {
                question: "How does healthcare compliance software help with ISO audits?",
                answer: "Healthcare compliance software supports ISO audits by giving teams standardised checklists, centralised evidence, corrective action tracking and real-time visibility of findings. This makes it easier to manage ISO 9001, ISO 14001 and ISO 45001 across clinical, operational and estates functions."
            },
            {
                question: "What are the biggest compliance challenges in healthcare audits?",
                answer: "The biggest challenges usually include patient safety risks, training and competence gaps, environmental controls, and fragmented records spread across departments. Healthcare teams also have to manage overlapping requirements from regulators, governance teams and ISO standards at the same time."
            },
            {
                question: "Can healthcare compliance software improve patient safety audits?",
                answer: "Yes. Healthcare compliance software can improve patient safety audits by making it easier to check medication processes, handovers, infection control, consent, incident follow-up and other high-risk activities. It helps organisations capture evidence properly and track actions until they are actually resolved."
            },
            {
                question: "Which ISO standards are most relevant for healthcare organisations?",
                answer: "For most healthcare organisations, the most relevant standards are ISO 9001 for quality management, ISO 14001 for environmental management and ISO 45001 for occupational health and safety. These standards support patient care quality, estates and waste controls, and staff safety across healthcare settings."
            },
            {
                question: "How does iAudit support healthcare compliance?",
                answer: "iAudit is healthcare compliance software built to support ISO 9001, ISO 14001 and ISO 45001 audits in hospitals, clinics and support services. It helps teams plan audits, capture evidence, track nonconformities, manage corrective actions and monitor compliance from one central platform."
            },
            {
                question: "Can iAudit help healthcare teams manage audits across multiple sites?",
                answer: "Yes. iAudit helps healthcare groups manage audits across hospitals, clinics and support locations using one system. Teams can use standardised checklists, dashboards and role-based access to compare findings, track actions and keep audit evidence visible across all sites."
            }
        ]
    },
    {
        id: "07",
        slug: "food-beverage",
        title: "Food & Beverage",
        description: "Support food safety and quality management with audits that meet ISO requirements.",
        color: "#0891b2",
        bgImage: "/images/food-beverage-bg.jpg",
    },
    {
        id: "08",
        slug: "hospitality",
        title: "Hospitality",
        description: "Manage ISO 9001, 14001 and 45001 audits across sites with standardised checklists, real time visibility and central control.",
        color: "#f97316",
        bgImage: "/images/hospitality-bg.jpg",
        heroSparkleText: "Hospitality audit software by iAudit",
        heroHeading: "Hospitality Audit Software for ISO Compliance",
        challengesSparkleText: "Hospitality audit challenges",
        challengesHeading: "Why Hospitality Audits Need A Different Approach",
        challengesCards: [
            {
                title: "Guest experience quality",
                description: "Service failures cannot be recalled. Your hospitality audit software must track quality at every guest touchpoint."
            },
            {
                title: "People and turnover",
                description: "High turnover and seasonal staff make training records, competence tracking and audit consistency harder to manage."
            },
            {
                title: "Multi-property consistency",
                description: "Franchise models and dispersed locations require audits that benchmark standards across every property."
            }
        ],
        supportSparkleText: "iAudit for hospitality",
        supportHeading: "How iAudit Supports ISO Audits In Hospitality",
        supportItems: [
            {
                title: "Standardised checklists across all properties",
                description: "",
                bullets: [
                    "Central visibility of findings and corrective actions across all locations",
                    "Compare property performance side by side to identify weak areas"
                ]
            },
            {
                title: "Food safety and allergen audit support",
                description: "",
                bullets: [
                    "Attach photos of labelling, temperature records and kitchen conditions",
                    "Track food safety corrective actions through closure with clear accountability"
                ]
            },
            {
                title: "Guest complaint and NCR tracking",
                description: "",
                bullets: [
                    "Analyse complaint trends by department, property or complaint type easily",
                    "Feed complaint data into management review for continuous service improvement"
                ]
            },
            {
                title: "Seasonal workforce competence",
                description: "",
                bullets: [
                    "Automatically flag expired certifications so staff never work without qualifications",
                    "Ensure seasonal and agency staff approved before performing guest-facing duties"
                ]
            },
            {
                title: "PDCA for hospitality improvement",
                description: "",
                bullets: [
                    "Plan audit programmes by department and property ensuring full coverage",
                    "Execute audits using structured clause aligned checklists across every site"
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for hospitality",
        auditMateHeading: "Your AI Assistant For Hospitality Audit Planning",
        auditMateDescription: "Let Audit Mate instantly generate clause-mapped checklists for food safety, room inspections, and guest complaints.",
        standardsHeading: "Standards We Support For Hospitality",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 supports guest experience and service quality, while ISO 14001 manages waste, energy use and impact."
            },
            {
                title: "Safety and information security",
                description: "ISO 45001 supports workplace safety. ISO 27001 protects guest data, PMS security and GDPR compliance."
            }
        ],
        testimonials: [
            {
                quote: "iAudit gave us a single view of audit findings across five hotels. Housekeeping, F&B and maintenance issues are now tracked in one place, and our external ISO 9001 audits have become far more predictable.",
                author: "Sarah Jenkins",
                role: "Group Operations Director",
                company: "Luxury Stay Hotels",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Hospitality Expert"
            },
            {
                quote: "Before iAudit, each restaurant in our group ran its own checks in different formats. With this hospitality audit software, we finally have consistent food safety and service audits across all sites and can see issues early.",
                author: "Mark Thompson",
                role: "Food Safety Lead",
                company: "Urban Table Group",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Specialist"
            },
            {
                quote: "As a venue and events operator, we needed a way to audit every event from brief to delivery. iAudit’s clause‑mapped templates and photo evidence have made our ISO audits and client reviews much easier to handle.",
                author: "Elena Rossi",
                role: "Events Compliance Manager",
                company: "Grand Venue Co.",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free hospitality audit checklists",
        checklistsHeading: "Start Your Next Hospitality Audit With A Ready‑Made Checklist",
        checklistsDescription: "Download free ISO audit checklists built for hospitality teams, covering quality, food safety, housekeeping, events, guest complaints and supplier management.",
        checklistsItems: [
            "Housekeeping and Room Quality Inspection Checklist",
            "Food Safety and Allergen Management Audit Checklist",
            "Guest Complaint and Service Recovery Audit Checklist",
            "Supplier Quality and Food Provenance Audit Checklist",
            "Event and Banqueting Quality Audit Checklist",
            "Seasonal Staff Competence and Training Audit Checklist"
        ],
        ctaHeading: "Your ISO Hospitality Audit Transformation Starts Here",
        ctaDescription: "Book a personalised demo or try iAudit free to see how our hospitality audit software simplifies ISO audits across your operations, ensuring consistency, visibility and certification readiness.",
        ctaPrimaryButton: "Sign up free",
        ctaSecondaryButton: "Watch demo",
        caseStudySparkle: "Hospitality case study",
        caseStudyHeading: "See How Hospitality Teams Run Better Audits",
        caseStudyDescription: "Read how hotel groups and catering companies moved away from scattered spreadsheets to achieve multi-property ISO compliance with our hospitality audit software.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/hospitality-case-study.png",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is an ISO 9001 hospitality audit?",
                answer: "An ISO 9001 hospitality audit checks how well a hotel, restaurant or venue controls its key processes, such as reservations, housekeeping, food and beverage service, events and complaint handling. Auditors look at both documentation and real practice to see whether guest experience, service quality and supplier management are managed in a planned, repeatable way."
            },
            {
                question: "How often should hospitality businesses run internal ISO audits?",
                answer: "Most hospitality organisations run a full internal audit cycle at least once a year, with more frequent focused audits on higher‑risk areas such as food safety, housekeeping and events. Multi‑property groups often use a rolling programme so each site and department is sampled several times between certification audits."
            },
            {
                question: "What is iAudit Global for hospitality?",
                answer: "iAudit Global is hospitality audit software built by ISO auditors for hotels, restaurants, venues and catering groups. It supports ISO 9001, 14001, 45001 and 27001 internal audits with standardised checklists, centralised findings and evidence, and PDCA‑driven follow up across all properties."
            },
            {
                question: "How does iAudit help multi‑property hotel and restaurant groups?",
                answer: "You can run one audit programme across every site, push the same checklist to each property and use dashboards to compare scores, findings and actions. This makes it far easier to keep brand standards, guest experience and food safety controls consistent across your whole portfolio."
            },
            {
                question: "Can iAudit support food safety, allergen and Natasha's Law checks?",
                answer: "Yes. While your HACCP system remains the core of food safety, iAudit lets you audit HACCP controls, allergen management and Natasha's Law compliance alongside ISO 9001 requirements. You can attach photos of labels, temperature records and kitchen conditions, and track food safety corrective actions through to closure."
            },
            {
                question: "Does the software work for front‑of‑house and housekeeping teams on the floor?",
                answer: "Our hospitality audit software is designed for real operations, not just offices. Auditors and supervisors can complete room inspections, service audits and kitchen checks on mobile devices, capture photos as evidence and, if needed, work offline in areas with poor connectivity, syncing data when they are back online."
            },
            {
                question: "How is our audit data kept secure and who owns it?",
                answer: "Your audit data always belongs to your organisation. iAudit Global uses encryption and role‑based access to protect your information, and we operate a strict zero‑access policy, meaning we do not view or mine your findings or evidence. You can export your data at any time if you ever decide to leave the platform."
            }
        ]
    },
    {
        id: "09",
        slug: "facilities-management",
        title: "Facilities Management",
        description: "Audit environmental controls, health and safety across multiple sites from one platform.",
        color: "#7c3aed",
        bgImage: "/images/facilities-bg.jpg",
    },
    {
        id: "10",
        slug: "health-safety",
        title: "Health & Safety",
        description: "Purpose-built for ISO 45001. Track hazards, verify controls, and close corrective actions.",
        color: "#ef4444",
        bgImage: "/images/health-safety-bg.jpg",
    },
    {
        id: "11",
        slug: "mining-compliance-software",
        title: "Mining",
        description: "Manage remote mining operations, tailings storage facility integrity and workforce safety with one structured mining compliance software platform built for control.",
        color: "#eab308",
        bgImage: "/images/mining-bg.jpg",
        heroSparkleText: "Mining compliance software by iAudit",
        heroHeading: "Mining Compliance Software for ISO Standards",
        challengesSparkleText: "Mining compliance challenges",
        challengesHeading: "Why mining compliance is harder to manage",
        challengesCards: [
            {
                title: "Ore variability risk",
                description: "Fluctuating grades and assay gaps lead to dilution and shipment penalties. Audits must ensure QA and QC protocols are followed from pit to port."
            },
            {
                title: "Critical environmental liability",
                description: "Managing Tailings Storage Facility (TSF) integrity and acid mine drainage requires constant, evidenced monitoring to prevent catastrophic failures."
            },
            {
                title: "High stakes safety risks",
                description: "Falls of ground and explosives management demand rigorous on site verification. Remote sites often suffer from poor visibility and inconsistent inspections."
            }
        ],
        supportSparkleText: "iAudit for mining",
        supportHeading: "A structured approach to ISO audits in the mining sector",
        supportItems: [
            {
                title: "Grade control and assay traceability",
                description: "",
                bullets: [
                    "Capture digital evidence of weightometer calibrations and blast hole assays directly at the source to ensure ISO 9001 quality compliance.",
                    "Verify metallurgical accounting and sampling accuracy to meet off take specifications and avoid costly shipment penalties."
                ]
            },
            {
                title: "TSF and environmental oversight",
                description: "",
                bullets: [
                    "Audit Tailings Storage Facility integrity against GISTM requirements with structured checklists and piezometer data attachments.",
                    "Track acid mine drainage and water licence compliance across multiple remote sites from one central mining compliance software dashboard."
                ]
            },
            {
                title: "Ground control and blasting safety",
                description: "",
                bullets: [
                    "Manage ISO 45001 compliance by tracking ground control management plans and proximity detection system audits.",
                    "Verify shotfirer competencies and pre entry inspection records to ensure critical safety controls are active on every shift."
                ]
            },
            {
                title: "Multi site and contractor visibility",
                description: "",
                bullets: [
                    "Standardise audit programmes across dispersed locations to ensure consistent quality and safety standards regardless of the region.",
                    "Monitor contractor compliance and safety inductions in real time to reduce the risk of third party incidents on site."
                ]
            },
            {
                title: "Offline audits for remote locations",
                description: "",
                bullets: [
                    "Conduct full ISO audits in pits or underground areas without a Wi-Fi connection using our mobile offline mode.",
                    "Sync findings, photos and signatures to the cloud automatically once the device returns to a connected area."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for mining compliance",
        auditMateHeading: "AI assistant for your mining audit planning",
        auditMateDescription: "Generate mining checklists for ground control, TSF monitoring, dust risks, contractors and calibration instantly.",
        standardsSparkleText: "ISO standards for mining",
        standardsHeading: "ISO standards supported for mining operations",
        standardsDescription: "Use mining compliance software to manage quality, environmental and safety audits with clearer evidence and control.",
        standardsItems: [
            {
                title: "Quality and operational control",
                description: "ISO 9001 supports sampling accuracy, calibration, traceability and contractor quality across mining and processing."
            },
            {
                title: "Environment and worker safety",
                description: "ISO 14001 covers water, TSF and emissions. ISO 45001 supports critical risk and worker protection."
            }
        ],
        testimonialsHeading: "Trusted by mining and heavy industry teams",
        testimonials: [
            {
                quote: "Our biggest issue was evidence scattered across shifts and contractors. With iAudit, findings, photos and actions sit together. We have fewer repeat issues and far less time wasted rebuilding audit packs before surveillance.",
                author: "Sarah Jenkins",
                role: "Group Operations Director",
                company: "Luxury Stay Hotels",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Hospitality Expert"
            },
            {
                quote: "Environmental checks were inconsistent across sites, especially around water and tailings controls. Now we run the same structured audits everywhere and track actions properly. It is easier to see where risk is building and act early.",
                author: "Mark Thompson",
                role: "Food Safety Lead",
                company: "Urban Table Group",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Specialist"
            },
            {
                quote: "We used to close actions because the spreadsheet needed to look tidy. Now we verify effectiveness before closure. That has changed the conversation from compliance reporting to control, which is what management actually needs.",
                author: "Elena Rossi",
                role: "Events Compliance Manager",
                company: "Grand Venue Co.",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free mining audit checklists",
        checklistsHeading: "Start your next audit with mining checklists",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 mining checklists for field controls, contractors, environment, incidents and corrective actions.",
        checklistsItems: [
            "Ground Control and Pre-Entry Inspection Checklist (ISO 45001)",
            "Explosives and Shotfirer Compliance Checklist (ISO 45001)",
            "Sampling, Assay QA/QC and Calibration Register Checklist (ISO 9001)",
            "TSF Monitoring, TARPs and Seepage Controls Checklist (ISO 14001)",
            "Water, Dust and Spill Response Compliance Checklist (ISO 14001)",
            "Incident, NCR and Corrective Action Effectiveness Checklist (ISO 9001 and 45001)"
        ],
        ctaHeading: "Take control of your mining ISO audits",
        ctaDescription: "Start free or book a demo to run faster audits with stronger evidence and follow-up.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Mining case study",
        caseStudyHeading: "How a mine improved audit follow-up",
        caseStudyDescription: "Read how a multi-site mining operator replaced spreadsheets with mining compliance software, improved TSF and safety evidence, reduced repeat findings, and gave leadership clear visibility across remote sites.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/mining-bg.jpg",
        faqSparkleText: "Mining compliance FAQs",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is mining compliance software?",
                answer: "Mining compliance software helps mine operators manage audits, evidence and corrective actions across quality, environmental and safety requirements. It replaces fragmented spreadsheets and site folders with a structured audit trail that supports ISO 9001, ISO 14001 and ISO 45001."
            },
            {
                question: "How does mining compliance software support ISO 45001 critical risks?",
                answer: "It helps teams audit high-risk controls consistently, including ground control checks, mobile plant risks, PPE use, contractor inductions and incident follow-up. The key benefit is traceable evidence and visible actions, not just a completed checklist."
            },
            {
                question: "What are common ISO 14001 audit findings in mining?",
                answer: "Common findings include generic aspects registers that ignore site-specific chemistry, missing evidence for dust and spill controls, weak water compliance documentation, and gaps in tailings monitoring records or follow-up actions."
            },
            {
                question: "How does iAudit help with TSF and environmental audits?",
                answer: "iAudit supports structured checklists and central evidence capture for TSF monitoring, TARPs, water controls, dust management and spill readiness. Findings link to actions with owners and deadlines so environmental risks do not sit unresolved."
            },
            {
                question: "Can iAudit help manage contractor compliance on remote sites?",
                answer: "Yes. You can audit contractor onboarding, competence and compliance against your site rules and ISO requirements. iAudit also helps you track repeat contractor issues across sites so performance improves over time."
            },
            {
                question: "What does Audit Mate do for mining teams?",
                answer: "Audit Mate helps create clause-aligned templates and prompts for mining controls such as ground control plans, TSF checks, dust controls, sampling and calibration records. It reduces planning time and keeps audits consistent across sites."
            },
            {
                question: "Can we try iAudit before committing?",
                answer: "Yes. You can start a 14-day free trial with no credit card required. You can run audits, capture evidence, track findings and actions, and see whether mining compliance software fits your operations."
            }
        ]
    },
    {
        id: "12",
        slug: "pharmaceutical",
        title: "Pharmaceutical",
        description: "Maintain strict compliance with GMP and FDA regulations while streamlining clinical and laboratory audits.",
        color: "#3b82f6",
        bgImage: "/images/pharmaceutical-bg.jpg",
    },
    {
        id: "13",
        slug: "aerospace",
        title: "Aerospace",
        description: "Ensure rigorous quality control, safety compliance, and AS9100 adherence across all manufacturing phases.",
        color: "#0369a1",
        bgImage: "/images/aerospace-bg.jpg",
    },
    {
        id: "14",
        slug: "metal-fabrication",
        title: "Basic Metal & Fabrication",
        description: "Maintain workplace safety and structural integrity standards in high-risk fabrication environments.",
        color: "#57534e",
        bgImage: "/images/metal-fabrication-bg.jpg",
    },
    {
        id: "15",
        slug: "wholesale-retail",
        title: "Wholesale & Retail Trade",
        description: "Audit expansive supply chains, warehouse operations, and retail outlets for efficiency and compliance.",
        color: "#d97706",
        bgImage: "/images/wholesale-retail-bg.jpg",
    },
    {
        id: "16",
        slug: "machinery",
        title: "Machinery & Equipment",
        description: "Ensure ISO compliance, safety, and rigorous quality tracking across heavy machinery manufacturing.",
        color: "#334155",
        bgImage: "/images/machinery-bg.jpg",
    },
    {
        id: "17",
        slug: "electrical-optical",
        title: "Electrical & Optical Equipment",
        description: "Maintain strict calibration, quality control, and safety standard adherence in high-tech component production.",
        color: "#8b5cf6",
        bgImage: "/images/electrical-bg.jpg",
    },
    {
        id: "18",
        slug: "engineering-service",
        title: "Engineering Service",
        description: "Audit complex project lifecycles, structural safety standards, and contracting compliance efficiently.",
        color: "#0284c7",
        bgImage: "/images/engineering-bg.jpg",
    },
];
