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
        slug: "retail-iso-audit-software",
        title: "Retail",
        description: "Manage ISO 9001, 14001 and 45001 audits across stores, warehouses and supply chains with one structured Retail ISO audit software platform built for scale.",
        color: "#10b981",
        bgImage: "/images/retail-bg.jpg",
        heroSparkleText: "Retail ISO audit software by iAudit",
        heroHeading: "Retail ISO audit software for multi‑site consistency",
        challengesSparkleText: "Retail compliance challenges",
        challengesHeading: "Why retail compliance is harder to manage across sites",
        challengesCards: [
            {
                title: "Inconsistent customer experience",
                description: "Maintaining quality across hundreds of stores and franchises is difficult. Audits must ensure the same standards are met in every location."
            },
            {
                title: "Complex environmental footprints",
                description: "Tracking Scope 3 emissions and food waste across global supply chains requires precise data that goes beyond basic office records."
            },
            {
                title: "High‑density safety risks",
                description: "Public environments demand rigorous checks on manual handling, slips and workplace violence to protect both staff and customers daily."
            }
        ],
        supportSparkleText: "iAudit for retail",
        supportHeading: "Strengthening retail operations through smarter ISO auditing",
        supportItems: [
            {
                title: "Multi-site store and DC audits",
                description: "",
                bullets: [
                    "Run one audit programme across stores, DCs and head office",
                    "Compare results by site, region or process to spot patterns early"
                ]
            },
            {
                title: "Complaints, returns and service recovery",
                description: "",
                bullets: [
                    "Log high-volume complaints as nonconformities with clear evidence",
                    "Trend issues by store, category or channel to drive real corrective action"
                ]
            },
            {
                title: "Supplier and own-brand quality control",
                description: "",
                bullets: [
                    "Audit suppliers and product checks against defined criteria and approvals",
                    "Track supplier nonconformities and repeat issues with owners and deadlines"
                ]
            },
            {
                title: "ISO 14001 controls across the retail estate",
                description: "",
                bullets: [
                    "Audit waste, packaging, food waste, energy use and F-gas checks consistently",
                    "Keep evidence and follow-up actions linked for management review and reporting"
                ]
            },
            {
                title: "ISO 45001 retail safety checks that reflect reality",
                description: "",
                bullets: [
                    "Cover manual handling, slips, violence, lone working and work at height",
                    "Track corrective actions to verified closure, not just a tidy spreadsheet status"
                ]
            }
        ],
        auditMateSparkle: "AI for retail compliance",
        auditMateHeading: "AI assistant for your retail audit planning",
        auditMateDescription: "Use Audit Mate to generate checklists for manual handling, Scope 3 emissions and store standards.",
        standardsSparkleText: "Standards for retail",
        standardsHeading: "ISO standards supported for retail operations",
        standardsDescription: "Our Retail ISO audit software provides deep support for the standards that matter most to customer‑facing and logistics teams.",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 manages customer experience and supplier quality. ISO 14001 handles waste, energy and supply chain sustainability across your stores."
            },
            {
                title: "Occupational health and safety",
                description: "ISO 45001 supports staff safety, manual handling and workplace violence prevention to ensure a safe environment for teams and customers."
            }
        ],
        testimonialsHeading: "Trusted by retail audit teams",
        testimonials: [
            {
                quote: "We finally have consistent audits across stores. The same checklist, the same evidence, and clear actions. Head office can see what is overdue without chasing.",
                author: "Sarah Jenkins",
                role: "Group Operations Director",
                company: "Global Retail Brands",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Retail Expert"
            },
            {
                quote: "Complaints used to be handled one by one. Now we can see trends by site and category, and the actions actually get followed through.",
                author: "Mark Thompson",
                role: "Customer Quality Lead",
                company: "Retail Solutions Group",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Specialist"
            },
            {
                quote: "Environmental checks were patchy across the estate. With one system, waste and refrigeration controls are audited consistently and evidence is easy to find.",
                author: "Elena Rossi",
                role: "Estates Compliance Manager",
                company: "High Street Retailers",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free retail audit checklists",
        checklistsHeading: "Download ready-made retail ISO audit checklists",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 checklists for stores and DCs, covering quality, environment, safety and follow-up.",
        checklistsItems: [
            "Store Standards and Customer Experience Audit Checklist (ISO 9001)",
            "Complaints, Returns and Service Recovery Checklist (ISO 9001)",
            "Supplier and Own-Brand Quality Audit Checklist (ISO 9001)",
            "Waste, Packaging and Food Waste Controls Checklist (ISO 14001)",
            "Refrigeration, F-gas and Leak Check Compliance Checklist (ISO 14001)",
            "Slips, Manual Handling, Violence and Lone Working Checklist (ISO 45001)"
        ],
        ctaHeading: "Move your retail ISO audits beyond the spreadsheet",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and actions across every location.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Retail case study",
        caseStudyHeading: "Driving store consistency through smarter auditing",
        caseStudyDescription: "Read how a multi-site retailer replaced spreadsheets with Retail iso Audit Software, improved store standards visibility, reduced repeat complaints, and sped up corrective action closure across regions.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/retail-bg.jpg",
        faqSparkleText: "Retail audit FAQs",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is Retail iso Audit Software?",
                answer: "Retail iso Audit Software helps retailers manage ISO 9001, ISO 14001 and ISO 45001 audits across stores, distribution centres and head office. It centralises findings, evidence and corrective actions so performance is visible across the whole estate."
            },
            {
                question: "Can iAudit handle audits across stores and distribution centres?",
                answer: "Yes. You can run one audit programme across stores and DCs, use standardised templates, and compare results by site, region or process."
            },
            {
                question: "How does iAudit help with customer complaints and returns?",
                answer: "You can log complaints and service failures as nonconformities, link them to actions, and analyse trends by store, category or channel to prevent repeat issues."
            },
            {
                question: "Does iAudit support supplier audits for retail and own-brand products?",
                answer: "Yes. You can audit supplier controls, track approvals and performance, and monitor repeat supplier nonconformities over time."
            },
            {
                question: "How does iAudit support ISO 14001 in retail?",
                answer: "It supports environmental audits covering waste, packaging, food waste, energy use and refrigeration controls, with evidence capture and action tracking in one place."
            },
            {
                question: "How does iAudit support ISO 45001 in retail?",
                answer: "It supports safety audits for slips, manual handling, lone working, violence and warehouse hazards, with clear follow-up and effectiveness checks."
            },
            {
                question: "Can we try iAudit before committing?",
                answer: "Yes. You can start a 14-day free trial with no credit card required and run audits using templates, dashboards and report exports."
            }
        ]
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
        slug: "food-and-beverage-iso-audit-software",
        title: "Food & Beverage",
        description: "Manage ISO 9001, 14001 and 45001 audits across plants and distribution centres with one structured food and beverage iso audit software platform built for scale.",
        color: "#0891b2",
        bgImage: "/images/food-beverage-bg.jpg",
        heroSparkleText: "Food and beverage iso audit software by iAudit",
        heroHeading: "Food and Beverage ISO Audit Software for Brand Protection",
        challengesSparkleText: "Food and beverage audit challenges",
        challengesHeading: "Why food and beverage audits are hard to keep consistent",
        challengesCards: [
            {
                title: "Critical traceability gaps",
                description: "From \"farm to fork,\" proving batch integrity is difficult with manual logs. Audits must ensure every ingredient is evidenced and traceable instantly."
            },
            {
                title: "Complex regulatory burden",
                description: "Balancing Natasha’s Law, HACCP and ISO requirements creates a heavy paperwork load that often leads to missing evidence and audit findings."
            },
            {
                title: "Inconsistent hygiene standards",
                description: "Standards often drift between shifts or sites. You need a system that benchmarks hygiene and quality scores across every location in real time."
            }
        ],
        supportSparkleText: "iAudit for food and beverage",
        supportHeading: "How our food and beverage iso audit software unifies compliance",
        supportItems: [
            {
                title: "Batch control and traceability",
                description: "",
                bullets: [
                    "Capture digital evidence of batch codes, material origins and production logs directly on the floor.",
                    "Perform \"trace-back\" audits in minutes by accessing a centralised history of every check and sign-off."
                ]
            },
            {
                title: "HACCP and ISO integration",
                description: "",
                bullets: [
                    "Run audits that cover HACCP controls, cleaning schedules and allergen management alongside ISO 9001 requirements.",
                    "Attach photos of labels, sanitation standards and temperature records directly to your audit findings."
                ]
            },
            {
                title: "Multi‑site and distribution oversight",
                description: "",
                bullets: [
                    "Compare audit scores across different production plants and warehouses from one central dashboard.",
                    "Identify which sites are leading in compliance and which need targeted support before an external audit occurs."
                ]
            },
            {
                title: "Cold chain and storage evidence",
                description: "",
                bullets: [
                    "Audit temperature monitoring logs and calibration records for refrigeration and transport systems.",
                    "Verify that environmental and storage conditions meet strict ISO 14001 and food safety protocols."
                ]
            },
            {
                title: "Staff hygiene and competence tracking",
                description: "",
                bullets: [
                    "Track food hygiene certificates, allergen awareness training and safety inductions for all permanent and agency staff.",
                    "Automatically flag upcoming training expiries to ensure no one works without valid, up to date qualifications."
                ]
            }
        ],
        auditMateSparkle: "AI for food and beverage compliance",
        auditMateHeading: "Plan food and beverage audits faster with Audit Mate",
        auditMateDescription: "Use Audit Mate to generate checklists for HACCP integration, allergen controls and cold chain evidence in seconds.",
        standardsSparkleText: "ISO standards for food and beverage",
        standardsHeading: "ISO standards supported for your food and beverage operations",
        standardsDescription: "Our food and beverage iso audit software provides deep support for the standards that drive quality, safety and sustainability.",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 manages batch control and supplier quality. ISO 14001 handles waste, energy use and environmental permit compliance."
            },
            {
                title: "Occupational health and safety",
                description: "ISO 45001 manages manual handling, kitchen safety and staff wellbeing to ensure a safe, compliant environment for every team member."
            }
        ],
        testimonialsHeading: "Trusted by food and beverage audit teams",
        testimonials: [
            {
                quote: "We used to scramble for batch records and complaint evidence before every audit. Now everything sits in one place, and our mock recall checks are far more reliable.",
                author: "Sarah Thompson",
                role: "Quality Manager",
                company: "FreshFoods Ltd",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified F&B Pro"
            },
            {
                quote: "The biggest change for us was consistency. We now run the same audit structure across all sites, which has made follow-up and trend analysis much clearer.",
                author: "David Miller",
                role: "Operations Director",
                company: "Global Spirits",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Expert"
            },
            {
                quote: "Corrective actions used to disappear into email chains. With iAudit, owners, deadlines and evidence are visible, so we are actually reducing repeat issues.",
                author: "Elena Rodriguez",
                role: "Compliance Lead",
                company: "Premium Dairy",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Auditor"
            }
        ],
        checklistsTag: "Free food and beverage audit checklists",
        checklistsHeading: "Start your next audit with food and beverage checklists",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 checklists for traceability, hygiene, supplier control, waste, safety and follow-up.",
        checklistsItems: [
            "Batch Traceability and Recall Readiness Checklist (ISO 9001)",
            "Supplier Approval and Incoming Material Audit Checklist (ISO 9001)",
            "Hygiene, Cleaning and Process Control Checklist (ISO 9001)",
            "Waste, Water and Packaging Controls Checklist (ISO 14001)",
            "Slips, Manual Handling and Chemical Safety Checklist (ISO 45001)",
            "NCR, Complaint and Corrective Action Effectiveness Checklist (ISO 9001 and 45001)"
        ],
        ctaHeading: "Upgrade how you manage food and beverage audits",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and actions across every site.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Food and beverage case study",
        caseStudyHeading: "How a food business improved audit consistency",
        caseStudyDescription: "Read how a multi-site food producer replaced spreadsheets with food and beverage iso audit software, improved traceability evidence, reduced repeat NCRs and gained clearer oversight across factories and warehouses.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/food-beverage-case-study.png",
        faqSparkleText: "Food and beverage audit FAQs",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is food and beverage iso audit software?",
                answer: "It is a digital platform designed to manage ISO 9001, 14001 and 45001 audits across food production and distribution sites. It replaces manual logs with structured checklists and real time dashboards for better oversight."
            },
            {
                question: "How does iAudit help with batch traceability?",
                answer: "Our platform allows auditors to capture digital evidence of batch codes and production records at the point of inspection. This ensures a clear, traceable link from ingredients to the finished product, as required by ISO 9001."
            },
            {
                question: "Can the software support HACCP and food safety checks?",
                answer: "Yes. While HACCP is your core food safety system, iAudit lets you audit those controls alongside your ISO requirements. You can attach photos of sanitation standards and temperature records directly to your findings."
            },
            {
                question: "How does iAudit handle staff hygiene training?",
                answer: "You can monitor training records and mandatory certifications for all staff. The system flags upcoming expiries, ensuring your team always holds the required food safety and hygiene qualifications for their roles."
            },
            {
                question: "Does it support environmental waste monitoring for ISO 14001?",
                answer: "Absolutely. iAudit includes checklists for food waste, energy efficiency and packaging recycling, helping you gather the evidence needed for ISO 14001 and broader sustainability reporting."
            },
            {
                question: "Can auditors work offline in cold storage or remote plants?",
                answer: "Yes. iAudit is built for real world conditions. You can complete inspections offline on a mobile device, and the data syncs to the central dashboard as soon as you are back in range of a connection."
            },
            {
                question: "Is our food and beverage audit data secure?",
                answer: "We operate a strict zero access policy. Your findings, production data and evidence belong entirely to you and are never accessed or mined by our team. Your data stays private and secure."
            }
        ]
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
        slug: "facilities-management-iso-audit-software",
        title: "Facilities Management",
        description: "Manage building services, statutory maintenance and ISO standards across your entire estate with one structured facilities management iso audit software platform.",
        color: "#7c3aed",
        bgImage: "/images/facilities-bg.jpg",
        heroSparkleText: "Facilities management iso audit software by iAudit",
        heroHeading: "Facilities Management ISO Audit Software for Building Compliance",
        challengesSparkleText: "Facilities management audit challenges",
        challengesHeading: "Why Facilities Management audits become harder as portfolios grow",
        challengesCards: [
            {
                title: "Multi site asset scaling",
                description: "Managing consistent standards across thousands of buildings often leads to ghost assets and incomplete maintenance logs across your portfolio."
            },
            {
                title: "Subcontractor liability risks",
                description: "Relying on third party engineers makes it difficult to verify qualifications like Gas Safe or NICEIC without a clear digital trail."
            },
            {
                title: "Fragmented statutory records",
                description: "Disconnected systems hide overdue maintenance, leaving organisations exposed to legal, safety and quality failures that impact contract retention."
            }
        ],
        supportSparkleText: "iAudit for facilities management",
        supportHeading: "How our facilities management iso audit software unifies compliance",
        supportItems: [
            {
                title: "Statutory PPM and lifecycle audits",
                description: "",
                bullets: [
                    "Capture evidence for fire, gas and lift inspections instantly.",
                    "Verify that SFG20 maintenance schedules are followed on site."
                ]
            },
            {
                title: "Multi site portfolio visibility",
                description: "",
                bullets: [
                    "View compliance scores across every building in one dashboard.",
                    "Identify which sites or regions carry the highest risk."
                ]
            },
            {
                title: "Subcontractor and engineer competence",
                description: "",
                bullets: [
                    "Flag expired professional certifications and registrations automatically.",
                    "Audit subcontractor method statements and RAMS before work begins."
                ]
            },
            {
                title: "High risk hazard identification",
                description: "",
                bullets: [
                    "Track asbestos awareness, Legionella flushing and work at height.",
                    "Log near misses during maintenance tasks to improve safety culture."
                ]
            },
            {
                title: "Energy, waste and F gas tracking",
                description: "",
                bullets: [
                    "Audit refrigerant leak checks and energy use for ISO 14001.",
                    "Centralise waste transfer notes and cleaning chemical safety data."
                ]
            }
        ],
        auditMateSparkle: "AI for facilities management compliance",
        auditMateHeading: "Plan smarter Facilities Management audits with Audit Mate",
        auditMateDescription: "Use Audit Mate to generate checklists for statutory PPM, asbestos awareness and water hygiene controls in seconds.",
        standardsSparkleText: "ISO standards for building management",
        standardsHeading: "The ISO standards behind stronger FM performance",
        standardsDescription: "Use our facilities management iso audit software to manage quality, environmental impact and worker safety standards across portfolios.",
        standardsItems: [
            {
                title: "Service quality and environment",
                description: "ISO 9001 handles PPM completion and SLAs. ISO 14001 manages energy, waste and F gas compliance."
            },
            {
                title: "Safety and building security",
                description: "ISO 45001 tracks high risk maintenance hazards. ISO 27001 protects CAFM data and sensitive client building records."
            }
        ],
        testimonialsHeading: "Helping FM teams move beyond spreadsheets",
        testimonials: [
            {
                quote: "We used to spend days chasing statutory certificates from different contractors. Now everything sits with the finding, and follow-up is much clearer.",
                author: "Liam Parker",
                role: "Estates Director",
                company: "Metro Campus FM",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified FM Specialist"
            },
            {
                quote: "Our biggest issue was inconsistency between sites. iAudit gave us one structure for audits, so the data finally became comparable across the estate.",
                author: "Sarah Chen",
                role: "Operations Manager",
                company: "Regional Building Services",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO Expert"
            },
            {
                quote: "Permit to work and subcontractor checks were getting lost between CAFM notes and email chains. With iAudit, actions stay visible until they are properly closed.",
                author: "James Wilson",
                role: "Compliance Lead",
                company: "Estate Solutions",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Auditor"
            }
        ],
        checklistsTag: "Free facilities management audit checklists",
        checklistsHeading: "Free facilities management ISO audit checklists",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 checklists for statutory compliance, subcontractors, PTW, water, F-gas and corrective actions.",
        checklistsItems: [
            "Statutory PPM and Asset Compliance Checklist (ISO 9001)",
            "Subcontractor Competence and Certification Checklist (ISO 9001 / 45001)",
            "CAFM Accuracy and Site Evidence Verification Checklist (ISO 9001)",
            "F-Gas, Water and Waste Controls Checklist (ISO 14001)",
            "Permit to Work and High-Risk Activities Checklist (ISO 45001)",
            "NCR, Corrective Action and Effectiveness Checklist (ISO 9001 / 45001)"
        ],
        ctaHeading: "Run smarter facilities management ISO audits",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and actions across your estate.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Facilities management case study",
        caseStudyHeading: "Strengthening compliance across complex building portfolios",
        caseStudyDescription: "This regional FM provider replaced manual trackers with a unified system to centralise statutory evidence. They now manage multi‑site compliance across healthcare and education with real‑time visibility and zero gaps.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/facilities-management-case-study.png",
        faqSparkleText: "Facilities management audit help",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is facilities management iso audit software?",
                answer: "It is a digital platform designed to manage ISO 9001, 14001 and 45001 audits across building portfolios. It replaces manual spreadsheets with structured checklists for building services and safety."
            },
            {
                question: "How does the software support statutory PPM?",
                answer: "Our facilities management iso audit software provides checklists for fire, gas and electrical safety, allowing you to attach certificates and photos as evidence that statutory checks were completed."
            },
            {
                question: "Can iAudit track subcontractor engineer competence?",
                answer: "Yes. You can audit subcontractor inductions, verify their professional registrations like Gas Safe or NICEIC, and track their performance across different sites from one dashboard."
            },
            {
                question: "Does the system support energy and F gas monitoring?",
                answer: "Absolutely. iAudit includes specific checklists for energy monitoring, F gas leak checks and waste segregation, helping you gather the evidence needed for ISO 14001 and Net Zero reporting."
            },
            {
                question: "Can building managers perform audits on mobile devices?",
                answer: "Yes. iAudit is mobile first and works offline. Managers can complete audits in plant rooms or basements and the data syncs automatically as soon as they are back in range."
            },
            {
                question: "How does Audit Mate help with building inspections?",
                answer: "Audit Mate AI can instantly draft checklists for specific building risks like asbestos, fire safety or water hygiene, providing clause guidance to ensure your audits are technically robust."
            },
            {
                question: "Is our client and building documentation secure?",
                answer: "We operate a zero access policy. Your findings, statutory records and site data belong entirely to you and are never viewed or mined by our team. Your data stays private and secure."
            }
        ]
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
        slug: "pharmaceutical-compliance-audit-software",
        title: "Pharmaceutical",
        description: "Replace manual spreadsheets with an auditor-built platform for ISO 9001, 14001 and 45001. Manage data integrity, sterile production and HPAPI containment in one secure workspace.",
        color: "#3b82f6",
        bgImage: "/images/pharmaceutical-bg.jpg",
        heroSparkleText: "Pharmaceutical compliance audit software by iAudit",
        heroHeading: "Pharmaceutical Compliance Audit Software for ISO Standards",
        challengesSparkleText: "Pharmaceutical compliance challenges",
        challengesHeading: "Why pharmaceutical audits carry more risk",
        challengesCards: [
            {
                title: "Data integrity failures",
                description: "Audit trails, raw data and batch records must hold up under scrutiny. Weak control quickly turns into major findings and repeat deviations."
            },
            {
                title: "Containment and exposure controls",
                description: "HPAPI handling, gowning, solvents and biological risks demand more than paperwork. Audits must confirm controls are working in practice."
            },
            {
                title: "CAPA and environmental pressure",
                description: "Closed actions without proof, effluent gaps and solvent controls create repeat findings that damage audit readiness and trust."
            }
        ],
        supportSparkleText: "iAudit for pharmaceutical",
        supportHeading: "Bring more control to pharmaceutical ISO audits",
        supportItems: [
            {
                title: "Batch records and data integrity",
                description: "",
                bullets: [
                    "Capture evidence against batch records, logs and key review points",
                    "Keep a clear audit trail for findings, evidence and decisions"
                ]
            },
            {
                title: "CAPA and effectiveness tracking",
                description: "",
                bullets: [
                    "Link every nonconformity to owners, due dates and follow-up",
                    "Verify effectiveness before closure so repeat issues are easier to stop"
                ]
            },
            {
                title: "Multi-site and CDMO oversight",
                description: "",
                bullets: [
                    "Standardise audits across sites, labs and outsourced operations",
                    "Compare findings across locations to spot recurring compliance gaps early"
                ]
            },
            {
                title: "Environmental and utilities controls",
                description: "",
                bullets: [
                    "Audit effluent, solvent, F-gas and waste controls consistently",
                    "Keep environmental evidence linked to actions and management review"
                ]
            },
            {
                title: "Occupational health and high-hazard work",
                description: "",
                bullets: [
                    "Track exposure controls, PPE, contractor checks and health surveillance",
                    "Keep containment and safety findings visible until they are properly resolved"
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for pharmaceutical audits",
        auditMateHeading: "Plan pharmaceutical audits faster with Audit Mate",
        auditMateDescription: "Generate pharma checklists for batch records, CAPA, contamination controls and environmental evidence instantly.",
        standardsSparkleText: "ISO standards for pharma",
        standardsHeading: "ISO standards supported for production and labs",
        standardsDescription: "Use our pharmaceutical compliance audit software to manage clinical quality, environmental impact and worker safety standards effectively.",
        standardsItems: [
            {
                title: "Quality and environment",
                description: "ISO 9001 handles process validation and batch release. ISO 14001 manages solvent emissions and environmental impact."
            },
            {
                title: "Occupational health and safety",
                description: "ISO 45001 tracks machinery safety, HPAPI containment and worker participation."
            }
        ],
        testimonialsHeading: "Trusted by pharmaceutical audit teams",
        testimonials: [
            {
                quote: "We were constantly pulling batch evidence from different systems before audits. Now the records sit with the finding, and follow-up is much clearer.",
                author: "David Rossi",
                role: "Quality Director",
                company: "Global Pharma Labs",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Expert"
            },
            {
                quote: "The biggest improvement has been CAPA visibility. Actions no longer disappear once the report is issued, and repeat issues are far easier to spot.",
                author: "Claire Benson",
                role: "Compliance Lead",
                company: "BioTech Solutions",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Auditor"
            },
            {
                quote: "We needed better consistency across manufacturing and QC. iAudit helped us standardise audit structure and reduce the amount of time spent rebuilding reports.",
                author: "Robert Hughes",
                role: "Operations Manager",
                company: "Pharma Manufacturing Corp",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "GMP Specialist"
            }
        ],
        checklistsTag: "Free pharmaceutical audit checklists",
        checklistsHeading: "Download ISO aligned checklists for pharmaceutical operations",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 checklists for batch records, CAPA, waste, exposure controls and follow-up.",
        checklistsItems: [
            "Data Integrity and Batch Record Audit Checklist (ISO 9001)",
            "CAPA and Change Control Effectiveness Checklist (ISO 9001)",
            "Supplier Qualification and GMP Evidence Checklist (ISO 9001)",
            "Effluent, Solvent and F-Gas Compliance Checklist (ISO 14001)",
            "HPAPI, Containment and Exposure Control Checklist (ISO 45001)",
            "NCR, Incident and Effectiveness Verification Checklist (ISO 9001 and 45001)"
        ],
        ctaHeading: "Run smarter pharmaceutical ISO audits from one system",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and CAPA across every site.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Pharmaceutical case study",
        caseStudyHeading: "How a pharmaceutical team improved CAPA visibility",
        caseStudyDescription: "Read how a multi-site pharmaceutical manufacturer replaced spreadsheets with pharmaceutical compliance audit software, improved data integrity evidence, reduced repeat CAPAs and gained clearer audit visibility across operations.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/pharmaceutical-case-study.png",
        faqSparkleText: "Pharmaceutical audit help",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is pharmaceutical compliance audit software?",
                answer: "Pharmaceutical compliance audit software helps regulated teams manage ISO 9001, 14001 and 45001 audits across manufacturing, labs and distribution. It centralises findings, evidence and follow-up in one structured system."
            },
            {
                question: "How does iAudit support data integrity during audits?",
                answer: "iAudit helps keep audit findings, supporting evidence and action history linked in one place. This makes it easier to review batch-related evidence and maintain a clearer, more traceable audit trail."
            },
            {
                question: "Can iAudit help with CAPA and effectiveness checks?",
                answer: "Yes. iAudit links findings to corrective actions, owners and deadlines, then helps teams verify effectiveness before actions are closed."
            },
            {
                question: "Does iAudit support environmental audits in pharmaceutical settings?",
                answer: "Yes. It supports ISO 14001 audits covering effluent, solvent handling, F-gas, waste controls and related environmental evidence."
            },
            {
                question: "How does iAudit help with occupational health and safety in pharma?",
                answer: "It helps teams track high-risk controls related to exposure, PPE, containment, contractor safety and other ISO 45001 requirements in one system."
            },
            {
                question: "Can Audit Mate help pharmaceutical teams plan audits faster?",
                answer: "Yes. Audit Mate helps generate clause-aligned checklists and prompts for batch records, CAPA, contamination controls and environmental evidence."
            },
            {
                question: "Can we try iAudit before committing?",
                answer: "Yes. You can start a 14-day free trial with no credit card required and explore templates, dashboards, evidence capture and reporting."
            }
        ]
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
        slug: "basic-metals-and-fabrication-iso-audit-software",
        title: "Basic Metal & Fabrication",
        description: "Centralise material traceability, manage welder continuity and track high‑risk safety controls across your plant with one structured basic metals and fabrication iso audit software platform.",
        color: "#57534e",
        bgImage: "/images/metal-fabrication-bg.jpg",
        heroSparkleText: "Basic metals and fabrication iso audit software by iAudit",
        heroHeading: "Basic Metals and Fabrication ISO Audit Software",
        challengesSparkleText: "Fabrication compliance challenges",
        challengesHeading: "Why fabrication audits need a specific approach",
        challengesCards: [
            {
                title: "Broken material traceability",
                description: "Heat and cast numbers often get lost during cutting or welding stages. Audits must ensure material integrity is evidenced from receipt to final finish."
            },
            {
                title: "Lapsed specialist qualifications",
                description: "Tracking welder continuity per ISO 9606 and RWC qualifications is a constant struggle. Expired certificates create major risks during EN 1090 or AS9100 audits."
            },
            {
                title: "High‑risk operational hazards",
                description: "Molten metal, welding fumes and heavy lifting require physical verification of LEV systems, LOTO protocols and LOLER registers on the floor."
            }
        ],
        supportSparkleText: "iAudit for fabrication",
        supportHeading: "A tailored basic metals and fabrication iso audit software for ISO standards",
        supportItems: [
            {
                title: "Material traceability and heat numbers",
                description: "",
                bullets: [
                    "Capture heat and cast numbers directly on the shop floor.",
                    "Maintain a digital audit trail through every fabrication stage."
                ]
            },
            {
                title: "Welder and RWC qualification tracking",
                description: "",
                bullets: [
                    "Monitor welder continuity and ISO 9606 expiries in one system.",
                    "Flag missing Responsible Welding Coordinator (RWC) qualifications automatically."
                ]
            },
            {
                title: "NDT and weld integrity evidence",
                description: "",
                bullets: [
                    "Attach NDT reports and WPS/WPQR documents directly to findings.",
                    "Track weld repair rates and NDT non‑conformities by operator."
                ]
            },
            {
                title: "Emissions, effluents and REACH compliance",
                description: "",
                bullets: [
                    "Audit pH levels and heavy metal effluents for ISO 14001.",
                    "Track REACH CrVI authorisations and sunset dates across plating lines."
                ]
            },
            {
                title: "LEV systems and health surveillance",
                description: "",
                bullets: [
                    "Audit LEV capture velocity velocity and welding fume controls.",
                    "Track audiometry and health surveillance records for safety compliance."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for fabrication audits",
        auditMateHeading: "Meet your AI co‑pilot for fabrication audits",
        auditMateDescription: "Use Audit Mate to generate checklists for EN 1090, welder continuity and LEV checks.",
        standardsSparkleText: "ISO standards for fabrication",
        standardsHeading: "ISO standards supported for fabrication operations",
        standardsDescription: "Use basic metals and fabrication iso audit software to manage quality, environment and safety requirements with stronger evidence and follow-up.",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 supports traceability, calibration and weld quality. ISO 14001 covers chemicals, effluents, waste and permit compliance."
            },
            {
                title: "Occupational health and safety",
                description: "ISO 45001 supports safer workshops through welding fume controls, guarding, crane checks and worker protection."
            }
        ],
        testimonialsHeading: "Why metal and fabrication leads choose iAudit",
        testimonials: [
            {
                quote: "Proving material traceability from the original cast number through to the final weld was always a struggle. iAudit allows us to attach that evidence directly to the audit, making our EN 1090 audits much smoother.",
                author: "Sarah Jenkins",
                role: "Operations Director",
                company: "Steel Fabrication Group",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Industry Expert"
            },
            {
                quote: "We needed a way to track welder continuity and LEV checks across different bays and shifts. This basic metals and fabrication iso audit software gives us the visibility to ensure no one is working with expired certs.",
                author: "Mark Thompson",
                role: "Compliance Manager",
                company: "Heavy Metals Ltd",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Specialist"
            },
            {
                quote: "External audits are far less stressful now that our NDT records and NCR logs are centralised. We can spot high weld repair rates early and act before they become a customer complaint.",
                author: "Elena Rossi",
                role: "QA Lead",
                company: "Precision Engineering",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free fabrication audit checklists",
        checklistsHeading: "Build better fabrication audits with these templates",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 checklists for traceability, welding, calibration, chemicals, workshop safety and corrective actions.",
        checklistsItems: [
            "Heat Number Traceability and Material ID Checklist (ISO 9001)",
            "Welding Qualification and WPQR Verification Checklist (ISO 9001)",
            "Calibration and Inspection Equipment Control Checklist (ISO 9001)",
            "REACH, CrVI and Chemical Storage Checklist (ISO 14001)",
            "LEV, PPE and Welding Fume Control Checklist (ISO 45001)",
            "LOLER, LOTO and Workshop Safety Checklist (ISO 45001)"
        ],
        ctaHeading: "Upgrade how you manage fabrication audits",
        ctaDescription: "Start free or book a demo to improve traceability, reduce audit admin and keep actions moving.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Fabrication case study",
        caseStudyHeading: "How a steel fabricator improved audit visibility",
        caseStudyDescription: "Read how a multi-site fabrication business replaced spreadsheets with basic metals and fabrication iso audit software, improved weld traceability, reduced repeat NCRs and made external audits easier to manage.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/metal-fabrication-bg.jpg",
        faqSparkleText: "Fabrication audit FAQs",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is basic metals and fabrication iso audit software?",
                answer: "It is software designed to help fabrication, foundry and metalworking businesses manage ISO 9001, 14001 and 45001 audits in one system. It centralises findings, evidence and corrective actions so compliance is easier to monitor across workshops and sites."
            },
            {
                question: "How does it help with heat number traceability?",
                answer: "It allows teams to capture evidence linked to material identification, weld records and inspection stages in one place, reducing the risk of broken traceability between operations."
            },
            {
                question: "Can iAudit support EN 1090 and welding-related audits?",
                answer: "Yes. iAudit helps teams manage audits around weld traceability, welder qualifications, WPQR checks and related quality evidence. Audit Mate can also help generate fabrication-specific checklists quickly."
            },
            {
                question: "How does iAudit help with ISO 14001 in fabrication environments?",
                answer: "It supports audits for chemical storage, REACH controls, CrVI handling, effluents, hazardous waste and spill readiness, with evidence and actions tracked centrally."
            },
            {
                question: "Can the system track workshop safety controls?",
                answer: "Yes. iAudit supports audits covering welding fumes, LEV, guarding, LOLER, LOTO, PPE and other ISO 45001 controls across fabrication workshops and yards."
            },
            {
                question: "How does iAudit reduce repeat NCRs?",
                answer: "It links findings to owners, deadlines and effectiveness checks so corrective actions are tracked properly. This helps stop recurring issues from being reopened every audit cycle."
            },
            {
                question: "Can we try iAudit before committing to a plan?",
                answer: "Yes. You can start a 14-day free trial with no credit card required. This lets you test templates, capture evidence, track findings and see if the platform fits your fabrication operations."
            }
        ]
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
