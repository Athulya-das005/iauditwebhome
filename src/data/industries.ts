export interface Industry {
    id: string;
    slug: string;
    title: string;
    description: string;
    color: string;
    bgImage?: string;
    heroSparkleText?: string;
    heroHeading?: string;
    heroPrimaryButton?: string;
    heroSecondaryButton?: string;
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
    testimonialsSparkleText?: string;
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
    heroVisuals?: {
        mainTitle?: string;
        sites?: { num: string; title: string; status: string; color: string; bg: string }[];
        inspectionTitle?: string;
        inspectionDesc?: string;
        departments?: string[];
        progressTitle?: string;
    };
    auditMateVisuals?: {
        card1Title?: string;
        card1Subtitle?: string;
        item1Title?: string;
        item1Subtitle?: string;
        item2Title?: string;
        item2Subtitle?: string;
        item3Title?: string;
        item3Subtitle?: string;
    };
    auditMateChat?: {
        welcomeMessage?: string;
        userMessage?: string;
        botReply?: string;
        syncingText?: string;
    };
}

export const industries: Industry[] = [
    {
        id: "01",
        slug: "retail-iso-audit-software",
        title: "Retail",
        description: "Manage ISO 9001, 14001 and 45001 audits across stores, warehouses and supply chains with one structured Retail ISO audit software platform built for scale.",
        color: "#10b981",
        bgImage: "/images/retail-bg.webp",
        heroSparkleText: "Retail ISO audit software by iAudit",
        heroHeading: "Structured ISO audits for Retail",
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
        supportHeading: "Stronger Retail Operations Through ISO Audits",
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
            "ISO 45001 Retail Audit Checklist",
            "ISO 9001 Retail Audit Checklist",
            "ISO 14001 Retail Audit Checklist",
        ],
        ctaHeading: "Move your retail ISO audits beyond the spreadsheet",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and actions across every location.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Retail case study",
        caseStudyHeading: "Driving store consistency through smarter auditing",
        caseStudyDescription: "Read how a multi-site retailer replaced spreadsheets with Retail iso Audit Software, improved store standards visibility, reduced repeat complaints, and sped up corrective action closure across regions.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/retail-bg.webp",
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
        slug: "transport-and-logistics-iso-audit-software",
        title: "Transport and Logistics",
        description: "Centralise fleet compliance, track driver safety and manage global supply chains across every depot with one structured transport and logistics iso audit software platform.",
        color: "#f59e0b",
        bgImage: "/images/logistics-bg.webp",
        heroSparkleText: "Transport and logistics iso audit software by iAudit",
        heroHeading: "Unified logistics ISO compliance",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Logistics compliance challenges",
        challengesHeading: "Why logistics audits are harder to manage",
        challengesCards: [
            {
                title: "Dispersed mobile fleets",
                description: "Tracking driver fatigue and vehicle safety across thousands of miles is difficult without real time digital evidence and centralised monitoring."
            },
            {
                title: "Subcontractor quality risk",
                description: "Reliance on third party carriers makes it hard to ensure your ISO 9001 standards are met outside your own direct operations."
            },
            {
                title: "Overlapping regulatory laws",
                description: "Balancing DVSA, ADR and LOLER requirements alongside ISO standards creates a heavy documentation and audit burden for busy transport teams."
            }
        ],
        supportSparkleText: "iAudit for logistics",
        supportHeading: "Logistics ISO Compliance in One System",
        supportItems: [
            {
                title: "Fleet and subcontractor verification",
                description: "",
                bullets: [
                    "Audit carriers against quality standards across your supply chain.",
                    "Centralise subcontractor operator licences, insurance and ADR compliance tracking."
                ]
            },
            {
                title: "Yard safety and pedestrian risk",
                description: "",
                bullets: [
                    "Track vehicle-pedestrian segregation and racking safety in one workspace.",
                    "Log near‑misses and accidents to identify high‑risk depots early."
                ]
            },
            {
                title: "Emissions and cold chain integrity",
                description: "",
                bullets: [
                    "Audit fleet fuel efficiency and depot waste for ISO 14001.",
                    "Capture digital evidence for temperature logs and calibration records."
                ]
            },
            {
                title: "Driver fatigue and competence tracking",
                description: "",
                bullets: [
                    "Track driver CPC records and tachograph analysis follow‑ups centrally.",
                    "Flag expired qualifications for permanent and agency drivers automatically."
                ]
            },
            {
                title: "Booking to POD traceability",
                description: "",
                bullets: [
                    "Verify booking accuracy, transit compliance and POD capture rates.",
                    "Monitor customer SLA and delivery targets using real‑time dashboards."
                ]
            }
        ],
        auditMateSparkle: "AI for logistics audits",
        auditMateHeading: "AI assistance for fleet audit planning",
        auditMateDescription: "Use Audit Mate to generate ADR checklists and driver fatigue risk assessments in seconds while keeping your data private.",
        standardsSparkleText: "ISO for transport and logistics",
        standardsHeading: "ISO standards for the logistics sector",
        standardsDescription: "Our transport and logistics iso audit software provides deep support for the standards that drive reliability and safety across your fleet.",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 manages service reliability and subcontractors. ISO 14001 handles fleet emissions, F gas and depot waste compliance."
            },
            {
                title: "Safety and information security",
                description: "ISO 45001 manages driver fatigue and yard safety. ISO 27001 protects TMS data, customs documents and track and trace history."
            }
        ],
        testimonialsHeading: "What transport and logistics teams say",
        testimonials: [
            {
                quote: "Managing subcontractor insurance and licences used to be a full time job in itself. iAudit has centralised our checks, meaning we actually know our partner carriers are compliant before they pick up a load.",
                author: "Michael Chen",
                role: "Operations Director",
                company: "Global Logistics Solutions",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Logistics Expert"
            },
            {
                quote: "We needed a way to track yard safety and driver fatigue beyond the tachograph. This transport and logistics iso audit software gives us the data to show we are managing real risks, not just legal minimums.",
                author: "David Roberts",
                role: "Fleet Safety Lead",
                company: "FastTrack Distribution",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Specialist"
            },
            {
                quote: "External audits are much smoother now that our POD evidence and NCR logs are in one place. We no longer spend weeks digging through depot folders to prove our ISO 9001 and 14001 compliance.",
                author: "Sofia Martinez",
                role: "Compliance Manager",
                company: "Port Side Logistics",
                avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free logistics audit checklists",
        checklistsHeading: "Download professional ISO checklists for your logistics operations",
        checklistsDescription: "Download professional ISO 9001, 14001 and 45001 checklists for your depots and fleet. Access ready to use transport and logistics templates today.",
        checklistsItems: [
            "ISO 45001 Transport and Logistics Audit Checklist",
            "ISO 9001 Transport and Logistics Audit Checklist",
            "ISO 14001 Transport and Logistics Audit Checklist",
        ],
        ctaHeading: "Start transforming your transport and logistics audits now",
        ctaDescription: "Start your free trial or book a demo to standardise audits, evidence and actions across every fleet and depot.",
        ctaPrimaryButton: "Sign up free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Logistics case study",
        caseStudyHeading: "From spreadsheet chaos to fleet audit control",
        caseStudyDescription: "A national logistics firm replaced inconsistent depot audits and missing subcontractor evidence with our transport and logistics iso audit software, centralising operator licence checks and NCR tracking across 15 sites.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/logistics-bg.webp",
        faqSparkleText: "Logistics audit FAQs",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is transport and logistics iso audit software?",
                answer: "It is a digital system designed to manage ISO 9001, 14001 and 45001 audits across fleets and warehouses. It replaces manual logs with structured checklists and real time dashboards for better oversight."
            },
            {
                question: "How does the software help with subcontractor management?",
                answer: "You can audit third party carriers against your specific quality and safety requirements. Our transport and logistics iso audit software tracks their operator licences, insurance and performance in one central log."
            },
            {
                question: "Can iAudit track driver CPC and training?",
                answer: "Yes. You can monitor driver competence and mandatory training dates. The system can flag upcoming expiries, ensuring your drivers always hold the required certifications for HGV or ADR work."
            },
            {
                question: "Does it support fleet emission monitoring for ISO 14001?",
                answer: "Absolutely. iAudit includes checklists for fuel efficiency and refrigerant leak checks for reefer trailers, helping you collect the evidence needed for ISO 14001 and carbon reporting."
            },
            {
                question: "How does Audit Mate AI assist with transport audits?",
                answer: "Audit Mate can instantly draft checklists for dangerous goods (ADR) or driver health assessments, providing clause guidance and interview prompts to reduce your audit preparation time."
            },
            {
                question: "Can auditors use the app in yards with poor signal?",
                answer: "Yes. iAudit is built for real world conditions. You can complete yard or warehouse inspections offline on a mobile device, and the data syncs to the dashboard as soon as you are back in range."
            },
            {
                question: "Is our transport and logistics audit data secure?",
                answer: "We operate a zero access policy. Your findings, driver records and subcontractor data belong strictly to you and are never accessed or mined by our team."
            }
        ]
    },

    {
        id: "03",
        slug: "construction-iso-audit-software",
        title: "Construction",
        description: "Move beyond spreadsheets with construction audit software for ISO 9001, 14001, and 45001 across every active project.",
        color: "#84cc16",
        bgImage: "/images/construction-bg.webp",
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
        auditMateChat: {
            welcomeMessage: "Welcome to iAudit! I can help you plan construction site audits across your projects.",
            userMessage: "Can you generate an ITP checklist for our active site?",
            botReply: "Absolutely! I'll create clause-mapped checklists for site inspections, ITPs, subcontractors and environmental controls.",
            syncingText: "Building construction audit templates...",
        },
        standardsSparkleText: "ISO standards for construction",
        standardsHeading: "ISO Standards for Construction Projects",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 controls ITPs and defect reduction while ISO 14001 manages site waste and pollution prevention."
            },
            {
                title: "Safety and information security",
                description: "ISO 45001 manages site safety and hazard tracking across every active project."
            }
        ],
        testimonials: [],
        checklistsTag: "Free construction audit checklists",
        checklistsHeading: "Start your next construction audit with a ready‑made checklist",
        checklistsDescription: "Download free ISO audit checklists for construction teams, covering project quality, site conditions, subcontractors, environment, NCRs and handover.",
        checklistsItems: [
            "ISO 14001 Construction Audit Checklist",
            "ISO 45001 Construction Audit Checklist",
            "ISO 9001 Construction Audit Checklist",
        ],
        ctaHeading: "Upgrade how you manage ISO audits in construction",
        ctaDescription: "Book a personalised demo or start a free trial to see how our construction audit software simplifies ISO compliance.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Construction case study",
        caseStudyHeading: "See how civil engineers run better site audits",
        caseStudyDescription: "Read how a regional contractor replaced scattered spreadsheets with our construction audit software to standardise ITPs, improve CEMP evidence, and pass external surveillance audits without the panic.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/construction-bg.webp",
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
        id: "04",
        slug: "manufacturing-iso-audit-software",
        title: "Manufacturing",
        description: "Manage high‑volume production, supply chain risks and environmental compliance across sites with one structured ISO audit management platform.",
        color: "#0d9488",
        bgImage: "/images/manufacturing-bg.webp",
        heroSparkleText: "Manufacturing ISO audit software by iAudit",
        heroHeading: "Manufacturing Audit Software for ISO Compliance",
        heroPrimaryButton: "Sign up free",
        heroSecondaryButton: "Book a demo",
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
        auditMateChat: {
            welcomeMessage: "Welcome to iAudit! I can help you plan manufacturing audits across your production lines.",
            userMessage: "Can you draft a checklist for batch traceability and tool wear?",
            botReply: "Absolutely! I'll draft specific checklists for FMEAs, tool wear and batch traceability records.",
            syncingText: "Building manufacturing audit templates...",
        },
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
            "ISO 9001 Manufacturing Audit Checklist",
            "ISO 14001 Manufacturing Audit Checklist",
            "ISO 45001 Manufacturing Audit Checklist",
        ],
        ctaHeading: "Upgrade how you manage manufacturing audits",
        ctaDescription: "Start free or book a demo to run faster audits with clearer evidence and follow-up.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Manufacturing case study",
        caseStudyHeading: "How a component specialist cut audit admin by 60%",
        caseStudyDescription: "A high‑volume manufacturer was struggling with scattered evidence and inconsistent NCR follow‑up across three production sites. By implementing our manufacturing audit software, they centralised their findings, automated their report generation and reduced the time spent on audit admin by 60%.",
        caseStudyButton: "Read Case Study",
        caseStudyImage: "/images/manufacturing-bg.webp",
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
        id: "05",
        slug: "healthcare-compliance-software",
        title: "Healthcare",
        description: "Manage ISO 9001, 14001 and 45001 audits with healthcare compliance software built for clinical, operational and governance teams.",
        color: "#0284c7",
        bgImage: "/images/healthcare-bg.webp",
        heroSparkleText: "Healthcare Compliance Software",
        heroHeading: "Healthcare ISO Audits, Under Control",
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
        supportHeading: "Healthcare ISO Audits Made Structured",
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
                    "Run ISO 9001, 14001 and 45001 audits in one system",
                    "Reduce duplicate effort across clinical, operational and support teams"
                ]
            }
        ],
        auditMateSparkle: "Healthcare audit assistant",
        auditMateHeading: "Your AI assistant for healthcare audit planning",
        auditMateDescription: "Generate healthcare-specific ISO checklists for patient safety, training, incidents and environmental controls instantly.",
        auditMateChat: {
            welcomeMessage: "Welcome to iAudit! I can help you plan healthcare audits across your clinical and support teams.",
            userMessage: "Can you generate a patient safety checklist for our ward audits?",
            botReply: "Absolutely! I'll create healthcare-specific ISO checklists for patient safety, training, incidents and environmental controls.",
            syncingText: "Building healthcare audit templates...",
        },
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
        testimonialsHeading: "What healthcare teams say about iAudit",
        testimonials: [
            {
                quote: "Before using iAudit healthcare compliance software, our audits lived in paper files and spreadsheets. Now we track findings, evidence and actions centrally across wards and support teams.",
                author: "Dr. Helen Marsh",
                role: "Clinical Governance Lead",
                company: "Regional NHS Trust",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Healthcare Expert"
            },
            {
                quote: "We needed a healthcare compliance software that understood ISO, not just generic forms. iAudit helped us standardise audits, improve follow-up and reduce repeat findings across sites.",
                author: "James Okonkwo",
                role: "Quality Manager",
                company: "Metro Health Group",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 9001 Specialist"
            },
            {
                quote: "Our biggest issue was delayed action tracking. With iAudit healthcare compliance software, governance teams now see audit trends earlier and close patient safety actions faster.",
                author: "Sarah Lindstrom",
                role: "Patient Safety Director",
                company: "Nordic Care Services",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            },
            {
                quote: "We used to prepare for ISO audits manually for weeks. iAudit Global gave us one healthcare compliance software platform for checklists, evidence, reporting and real visibility.",
                author: "Michael Torres",
                role: "Compliance Manager",
                company: "Unity Healthcare",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Healthcare Compliance Lead"
            }
        ],
        checklistsTag: "Free healthcare audit checklists",
        checklistsHeading: "Professional ISO Audit Checklists for Healthcare",
        checklistsDescription: "Download our ISO 9001, 14001 and 45001 checklists to streamline clinical, environmental and worker safety audits within your healthcare compliance software.",
        checklistsItems: [
            "ISO 9001 Healthcare Audit Checklist",
            "ISO 14001 Healthcare Audit Checklist",
            "ISO 45001 Healthcare Audit Checklist",
        ],
        ctaHeading: "Achieve 100% Clinical Compliance Today",
        ctaDescription: "Start free or book a demo to simplify healthcare audits, actions, evidence and compliance in one place.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Healthcare case study",
        caseStudyHeading: "See how healthcare teams run better audits",
        caseStudyDescription: "Learn how this healthcare provider used our healthcare compliance software to standardise ward level audits, reducing medication errors by 25% while achieving consistent ISO 9001 and ISO 45001 certification readiness.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/healthcare-bg.webp",
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
        id: "06",
        slug: "food-and-beverage-iso-audit-software",
        title: "Food & Beverage",
        description: "Manage ISO 9001, 14001 and 45001 audits across plants and distribution centres with one structured food and beverage iso audit software platform built for scale.",
        color: "#0891b2",
        bgImage: "/images/food-beverage-bg.webp",
        heroSparkleText: "Food and beverage iso audit software by iAudit",
        heroHeading: "Control Every Audit. Every Site. Every Batch.",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Food and beverage compliance challenges",
        challengesHeading: "Why Consistency Fails in Food Audits",
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
        supportHeading: "Unifying Food & Beverage ISO Compliance",
        supportItems: [
            {
                title: "Batch control and traceability",
                description: "",
                bullets: [
                    "Capture batch evidence directly on the production floor.",
                    "Execute trace-back audits in minutes using centralised history."
                ]
            },
            {
                title: "Multi‑site and distribution oversight",
                description: "",
                bullets: [
                    "Compare performance across all production plants and warehouses.",
                    "Identify high-risk sites before external audits occur."
                ]
            },
            {
                title: "Cold chain and storage evidence",
                description: "",
                bullets: [
                    "Audit temperature monitoring logs and calibration records.",
                    "Verify storage meets ISO 14001 and food safety protocols."
                ]
            },
            {
                title: "Staff hygiene and competence tracking",
                description: "",
                bullets: [
                    "Track hygiene certificates and allergen training centrally.",
                    "Automatically flag expired qualifications for all staff."
                ]
            },
            {
                title: "Verified corrective actions (CAPA)",
                description: "",
                bullets: [
                    "Link findings to root cause analysis and verified actions.",
                    "Standardise process improvements across the entire organisation."
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
        ],
        ctaHeading: "Upgrade how you manage food and beverage audits",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and actions across every site.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Food and beverage case study",
        caseStudyHeading: "How a food business improved audit consistency",
        caseStudyDescription: "Read how a multi-site food producer replaced spreadsheets with food and beverage iso audit software, improved traceability evidence, reduced repeat NCRs and gained clearer oversight across factories and warehouses.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/food-beverage-case-study.webp",
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
        id: "07",
        slug: "hospitality-iso-audit-software",
        title: "Hospitality",
        description: "Manage ISO 9001, 14001 and 45001 audits across sites with standardised checklists, real time visibility and central control.",
        color: "#f97316",
        bgImage: "/images/hospitality-bg.webp",
        heroSparkleText: "Hospitality audit software by iAudit",
        heroHeading: "Hospitality Audit Software for ISO Compliance",
        challengesSparkleText: "Hospitality audit challenges",
        challengesHeading: "Why hospitality audits need a different approach",
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
        auditMateHeading: "Your AI assistant for hospitality audit planning",
        auditMateDescription: "Let Audit Mate instantly generate clause-mapped checklists for food safety, room inspections, and guest complaints.",
        auditMateVisuals: {
            card1Title: "Food Safety Audit",
            card1Subtitle: "Clause 8.5 Mapped",
            item1Title: "Room 402 Inspection",
            item1Subtitle: "ISO 9001 Section 7",
            item2Title: "Guest Complaints Log",
            item2Subtitle: "Clause 10.2 NCR",
            item3Title: "Kitchen Checklist Ready",
            item3Subtitle: "Hospitality Template",
        },
        auditMateChat: {
            welcomeMessage: "Welcome to iAudit! I can help you plan hospitality audits across your properties.",
            userMessage: "Can you generate a food safety checklist for our hotel kitchen?",
            botReply: "Absolutely! I'll create clause-mapped checklists for food safety, room inspections, and guest complaints.",
            syncingText: "Building hospitality audit templates...",
        },
        standardsHeading: "Standards we support for hospitality",
        standardsItems: [
            {
                title: "Quality and environmental management",
                description: "ISO 9001 supports guest experience and service quality, while ISO 14001 manages waste, energy use and impact."
            },
            {
                title: "Occupational health and safety",
                description: "ISO 45001 manages kitchen safety, manual handling and staff wellbeing across all your hospitality properties."
            }
        ],
        testimonialsHeading: "What hospitality teams say about iAudit",
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
        checklistsHeading: "Start your next hospitality audit with a ready‑made checklist",
        checklistsDescription: "Download free ISO audit checklists built for hospitality teams, covering quality, food safety, housekeeping, events, guest complaints and supplier management.",
        checklistsItems: [
            "ISO 45001 Hospitality Audit Checklist",
            "ISO 9001 Hospitality Audit Checklist",
            "ISO 14001 Hospitality Audit Checklist",
        ],
        ctaHeading: "Your ISO hospitality audit transformation starts here",
        ctaDescription: "Book a personalised demo or try iAudit free to see how our hospitality audit software simplifies.",
        ctaPrimaryButton: "Sign up free",
        ctaSecondaryButton: "Watch demo",
        caseStudySparkle: "Hospitality case study",
        caseStudyHeading: "See how hospitality teams run better audits",
        caseStudyDescription: "Read how hotel groups and catering companies moved away from scattered spreadsheets to achieve multi-property ISO compliance with our hospitality audit software.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/hospitality-case-study.webp",
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
                answer: "iAudit Global is hospitality audit software built by ISO auditors for hotels, restaurants, venues and catering groups. It supports ISO 9001, 14001 and 45001 internal audits with standardised checklists, centralised findings and evidence, and PDCA‑driven follow up across all properties."
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
        id: "08",
        slug: "facilities-management-iso-audit-software",
        title: "Facilities Management",
        description: "Manage building services, statutory maintenance and ISO standards across your entire estate with one structured facilities management iso audit software platform.",
        color: "#7c3aed",
        bgImage: "/images/facilities-bg.webp",
        heroSparkleText: "Facilities management iso audit software by iAudit",
        heroHeading: "Take Control of Building Compliance",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Facilities management audit challenges",
        challengesHeading: "Why FM Audits Get Harder at Scale",
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
        supportHeading: "Unifying facilities management compliance",
        supportItems: [
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
        standardsHeading: "ISO Standards for Stronger FM",
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
            "ISO 9001 Facilities-Management Audit Checklist",
            "ISO 14001 Facilities-Management Audit Checklist",
            "ISO 45001 Facilities-Management Audit Checklist"
        ],
        ctaHeading: "Run smarter facilities management ISO audits",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and actions across your estate.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Facilities management case study",
        caseStudyHeading: "Strengthening compliance across complex building portfolios",
        caseStudyDescription: "This regional FM provider replaced manual trackers with a unified system to centralise statutory evidence. They now manage multi‑site compliance across healthcare and education with real‑time visibility and zero gaps.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/facilities-management-case-study.webp",
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
        id: "09",
        slug: "health-and-safety-iso-audit-software",
        title: "Health & Safety",
        description: "Replace paper checklists and scattered spreadsheets with a dedicated ISO 45001 workspace. Capture live hazards, track corrective actions, and protect your workforce in real time.",
        color: "#ef4444",
        bgImage: "/images/health-safety-bg.webp",
        heroSparkleText: "Health & Safety iso audit software by iAudit",
        heroHeading: "Stop Chasing Hazards. Start Controlling Them.",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Health & Safety compliance challenges",
        challengesHeading: "What Health & Safety Teams Miss",
        challengesCards: [
            {
                title: "Delayed hazard reporting",
                description: "Paper checklists and retyped notes leave live site hazards exposed for days before action happens."
            },
            {
                title: "Scattered safety records",
                description: "Photos on phones and actions in spreadsheets make it impossible to prove ISO 45001 compliance."
            },
            {
                title: "Unverified corrective actions",
                description: "Closing a safety task in an email does not prove the physical hazard was removed."
            }
        ],
        supportSparkleText: "iAudit for Health & Safety",
        supportHeading: "Take Control of Your Health & Safety Audit Programme",
        supportItems: [
            {
                title: "Structured ISO 45001 Audit Planning",
                description: "",
                bullets: [
                    "Plan ISO 45001 audits consistently across sites, teams and contractors with clear scope and ownership.",
                    "Use standard templates to keep health and safety audits aligned across every location."
                ]
            },
            {
                title: "Real-Time Site Evidence Capture",
                description: "",
                bullets: [
                    "Record findings, photos and notes directly during site walks instead of using paper forms.",
                    "Keep evidence linked to each audit so follow-up stays clear, complete and traceable."
                ]
            },
            {
                title: "Stronger Corrective Action Follow-Up",
                description: "",
                bullets: [
                    "Assign owners, set deadlines and verify effectiveness before safety issues are marked as closed.",
                    "Reduce repeated hazards by tracking actions properly across audit cycles and operational teams."
                ]
            },
            {
                title: "Better Contractor and Site Oversight",
                description: "",
                bullets: [
                    "Audit contractor performance more consistently across projects, locations and high-risk operational activities.",
                    "Make repeated contractor-related findings visible instead of treating each issue as isolated."
                ]
            },
            {
                title: "Faster Reporting and Clearer Visibility",
                description: "",
                bullets: [
                    "Generate structured audit reports quickly without rebuilding findings manually after each safety audit.",
                    "Give managers clearer visibility into open issues, site performance and overdue corrective actions."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for Health & Safety",
        auditMateHeading: "Audit Mate for Faster Safety Audit Preparation",
        auditMateDescription: "Create sharper safety checklists, targeted questions and evidence prompts before every site audit.",
        standardsSparkleText: "Standards and Compliance",
        standardsHeading: "Integrated QHSE Audit Support",
        standardsItems: [
            {
                title: "Core ISO 45001 Audit Management",
                description: "Plan and manage health and safety audits with better structure, evidence capture and action tracking."
            },
            {
                title: "Quality & Environmental Controls",
                description: "Support connected ISO 14001 and ISO 9001 audits where safety, environment and operations overlap."
            }
        ],
        testimonialsHeading: "What Changes After Switching to iAudit",
        testimonials: [
            {
                quote: "iAudit gave us a far clearer way to manage ISO 45001 audits across multiple sites. We now capture evidence faster, follow up actions properly, and spend much less time pulling reports together manually.",
                author: "Sarah Jenkins",
                role: "Director of HSE",
                company: "Global Construction Group",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified HSE Pro"
            },
            {
                quote: "Our biggest issue was repeated safety findings that looked closed on paper. iAudit helped us tighten ownership, track effectiveness properly, and give managers better visibility into what was actually changing on site.",
                author: "Mark Thompson",
                role: "Compliance Manager",
                company: "Infrastructure Ltd",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 45001 Expert"
            },
            {
                quote: "Before iAudit, contractor audit records were scattered across spreadsheets and email chains. Now our teams work from one platform, which has made site oversight more consistent and reporting much easier.",
                author: "Elena Rossi",
                role: "Quality & Safety Lead",
                company: "Urban Estates",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free Health & Safety audit checklists",
        checklistsHeading: "A Free ISO Audit Template for Health & Safety",
        checklistsDescription: "Stop starting from scratch. Use our free, clause-aligned template to structure your next ISO 45001 safety walk with confidence.",
        checklistsItems: [
            "ISO 45001 Health & Safety Internal Audit Checklist",
            "ISO 14001 Environmental Controls Internal Audit Checklist",
            "ISO 9001 Operational Quality Internal Audit Checklist"
        ],
        ctaHeading: "Ready to take control of your safety audits?",
        ctaDescription: "Replace paper, spreadsheets and slow follow-up with one platform built to plan, track and improve ISO safety audits across every site.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Health & Safety case study",
        caseStudyHeading: "How Real Teams Cut Safety Incidents",
        caseStudyDescription: "Discover how a multi-site construction firm used iAudit Global to replace delayed paper reports, centralise hazard tracking, and ensure corrective actions were actually completed.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/hospitality-case-study.webp",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "How does the software prevent tick-box safety inspections?",
                answer: "Generic checklist apps encourage users to simply click \"yes\" down a list without looking at real risks. iAudit is built around the ISO 45001 standard. It prompts your team to capture actual evidence, upload photos of live hazards, and link findings directly to root causes, ensuring your safety walks actually improve site control."
            },
            {
                question: "Can we use the platform to document worker participation?",
                answer: "Yes. ISO 45001 Clause 5.4 requires clear evidence that your workforce is actively involved in safety management. You can use iAudit to log shop floor interviews, record safety committee feedback, and prove to external auditors that safety is a shared culture rather than just a management policy."
            },
            {
                question: "Do our safety officers need a laptop to log hazards on site?",
                answer: "Not at all. iAudit Global is fully mobile responsive. Your safety team can walk a construction site or factory floor with a phone or tablet, snap photos of risks, and assign corrective actions immediately without waiting to return to the office."
            },
            {
                question: "How does the system handle open safety nonconformities?",
                answer: "Finding a hazard is only half the job. Our system forces a strict closed-loop process. When an issue is raised, it must be assigned to an owner with a clear deadline. Crucially, the task cannot be fully closed until evidence is uploaded to prove the physical hazard has been removed."
            },
            {
                question: "We run integrated QHSE audits. Does the software handle ISO 14001 and 9001 too?",
                answer: "Yes. Most health and safety teams also manage quality and environmental compliance. iAudit allows you to combine ISO 45001, ISO 14001, and ISO 9001 requirements into a single audit programme. This saves time and removes the need to juggle three disconnected systems."
            },
            {
                question: "How does the AI assistant help with hazard identification?",
                answer: "Audit Mate acts as a technical co-pilot for your safety team. If you are auditing a new manufacturing process or a high-risk area, you can ask it to draft a custom hazard checklist or suggest specific safety culture interview questions before you step onto the site."
            },
            {
                question: "Will this help us during our external ISO 45001 certification audit?",
                answer: "Absolutely. External auditors want to see a continuous audit trail from the moment a hazard is found to the moment it is verified as fixed. iAudit provides that complete history in one secure workspace, removing the panic of searching through old emails and spreadsheets before an external review."
            }
        ]
    },
    {
        id: "10",
        slug: "mining-compliance-software",
        title: "Mining",
        description: "Manage remote mining operations, tailings storage facility integrity and workforce safety with one structured mining compliance software platform built for control.",
        color: "#eab308",
        bgImage: "/images/mining-bg.webp",
        heroSparkleText: "Mining compliance software by iAudit",
        heroHeading: "Control Risk Across Every Mine Site",
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
        supportHeading: "Controlling Mining Risk Through ISO Audits",
        supportItems: [
            {
                title: "Grade control and assay traceability",
                description: "",
                bullets: [
                    "Capture calibration evidence at the source.",
                    "Verify sampling accuracy to avoid costly shipment penalties."
                ]
            },
            {
                title: "TSF and environmental oversight",
                description: "",
                bullets: [
                    "Audit TSF integrity against GISTM requirements.",
                    "Track water licence compliance across sites from one dashboard."
                ]
            },
            {
                title: "Ground control and blasting safety",
                description: "",
                bullets: [
                    "Track ground control plans and proximity audits.",
                    "Verify shotfirer competencies and safety controls on every shift."
                ]
            },
            {
                title: "Multi site and contractor visibility",
                description: "",
                bullets: [
                    "Standardise audit programmes across all remote locations.",
                    "Monitor contractor safety inductions and compliance in real time."
                ]
            },
            {
                title: "Offline audits for remote locations",
                description: "",
                bullets: [
                    "Conduct full audits underground or in pits without Wi-Fi.",
                    "Sync findings and evidence automatically once the device reconnects."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for mining compliance",
        auditMateHeading: "AI assistant for your mining audit planning",
        auditMateDescription: "Generate mining checklists for ground control, TSF monitoring, dust risks, contractors and calibration instantly.",
        auditMateChat: {
            welcomeMessage: "Welcome to iAudit! I can help you plan mining audits across your remote sites.",
            userMessage: "Can you generate a TSF monitoring checklist for our tailings facility?",
            botReply: "Absolutely! I'll generate mining checklists for ground control, TSF monitoring, dust risks, contractors and calibration.",
            syncingText: "Building mining audit templates...",
        },
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
                author: "David Okello",
                role: "Safety and Compliance Manager",
                company: "Northern Minerals Group",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Mining Expert"
            },
            {
                quote: "Environmental checks were inconsistent across sites, especially around water and tailings controls. Now we run the same structured audits everywhere and track actions properly. It is easier to see where risk is building and act early.",
                author: "Rachel Ng",
                role: "Environmental Superintendent",
                company: "Pacific Copper Operations",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 14001 Specialist"
            },
            {
                quote: "We used to close actions because the spreadsheet needed to look tidy. Now we verify effectiveness before closure. That has changed the conversation from compliance reporting to control, which is what management actually needs.",
                author: "Marcus Webb",
                role: "Head of Quality Assurance",
                company: "Iron Ridge Mining",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free mining audit checklists",
        checklistsHeading: "Start your next audit with mining checklists",
        checklistsDescription: "Download ISO 9001, 14001 and 45001 mining checklists for field controls, contractors, environment, incidents and corrective actions.",
        checklistsItems: [
            "ISO 14001 Mining Audit Checklist",
            "ISO 45001 Mining Audit Checklist",
            "ISO 9001 Mining Audit Checklist",
        ],
        ctaHeading: "Take control of your mining ISO audits",
        ctaDescription: "Start free or book a demo to run faster audits with stronger evidence and follow-up.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Mining case study",
        caseStudyHeading: "How a mine improved audit follow-up",
        caseStudyDescription: "Read how a multi-site mining operator replaced spreadsheets with mining compliance software, improved TSF and safety evidence, reduced repeat findings, and gave leadership clear visibility across remote sites.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/mining-bg.webp",
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
        id: "11",
        slug: "pharmaceutical-compliance-audit-software",
        title: "Pharmaceutical",
        description: "Replace manual spreadsheets with an auditor-built platform for ISO 9001, 14001 and 45001. Manage data integrity, sterile production and HPAPI containment in one secure workspace.",
        color: "#3b82f6",
        bgImage: "/images/pharmaceutical-bg.webp",
        heroSparkleText: "Pharmaceutical compliance audit software by iAudit",
        heroHeading: "Stop Repeat Findings. Strengthen Every Audit.",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
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
            "ISO 9001 Pharma Audit Checklist",
            "ISO 14001 Pharma Audit Checklist",
            "ISO 45001 Pharma Audit Checklist"
        ],
        ctaHeading: "Run smarter pharmaceutical ISO audits from one system",
        ctaDescription: "Start free or book a demo to standardise audits, evidence and CAPA across every site.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Pharmaceutical case study",
        caseStudyHeading: "How a pharmaceutical team improved CAPA visibility",
        caseStudyDescription: "Read how a multi-site pharmaceutical manufacturer replaced spreadsheets with pharmaceutical compliance audit software, improved data integrity evidence, reduced repeat CAPAs and gained clearer audit visibility across operations.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/pharmaceutical-case-study.webp",
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
        id: "12",
        slug: "aerospace-iso-audit-software",
        title: "Aerospace",
        description: "Plan, run and track ISO audits across aerospace operations with one structured platform for evidence, findings, corrective actions and reporting.",
        color: "#0369a1",
        bgImage: "/images/aerospace-bg.webp",
        heroSparkleText: "Aerospace iso audit software by iAudit",
        heroHeading: "Secure, Structured ISO Audits for Aerospace",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Aerospace compliance challenges",
        challengesHeading: "Common Aerospace Audit Gaps",
        challengesCards: [
            {
                title: "Scattered audit records",
                description: "Spreadsheets and emails hide systemic risks, making it impossible to see trends across multiple sites."
            },
            {
                title: "Weak supply chain visibility",
                description: "Relying on paper questionnaires leaves you blind to how subcontractors actually perform on live projects."
            },
            {
                title: "Unverified corrective actions",
                description: "Closing a task on paper never proves the underlying engineering or process fault is fixed."
            }
        ],
        supportSparkleText: "iAudit for Aerospace",
        supportHeading: "A Single Platform for Aerospace ISO Compliance",
        supportItems: [
            {
                title: "Quality and supply chain control",
                description: "",
                bullets: [
                    "Track live subcontractor performance.",
                    "Identify systemic quality risks to ensure zero-defect production."
                ]
            },
            {
                title: "Centralised safety management",
                description: "",
                bullets: [
                    "Conduct digital safety walks.",
                    "Verify that machinery guarding and PPE rules are enforced on-site."
                ]
            },
            {
                title: "Rigorous environmental oversight",
                description: "",
                bullets: [
                    "Monitor chemical and waste controls.",
                    "Gather clear lifecycle evidence across your entire supplier network."
                ]
            },
            {
                title: "Closed loop corrective actions",
                description: "",
                bullets: [
                    "Assign owners and verify effectiveness.",
                    "Turn isolated findings into permanent process improvements."
                ]
            },
            {
                title: "Absolute data sovereignty",
                description: "",
                bullets: [
                    "Secure, zero-access data hosting.",
                    "Your sensitive aerospace audit history remains entirely yours."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for Aerospace",
        auditMateHeading: "An Intelligent Assistant for Aerospace Auditors",
        auditMateDescription: "Draft technical checklists, clarify ISO clauses, and build targeted interview questions instantly. Your data stays entirely secure.",
        standardsSparkleText: "Standards and Compliance",
        standardsHeading: "Purpose-Built for Aerospace ISO Audits",
        standardsItems: [
            {
                title: "Quality Audit Support for Aerospace",
                description: "Run rigorous quality and supply chain audits that align perfectly with aerospace zero defect requirements."
            },
            {
                title: "Environmental and Safety Audit Support",
                description: "Verify environmental controls and shop floor safety practices across hangars, factories, and live projects."
            }
        ],
        testimonialsHeading: "What Teams Say About iAudit",
        testimonials: [
            {
                quote: "Before iAudit, managing our AS9100 internal audits across three manufacturing sites was a spreadsheet nightmare. Now, our reporting time is cut in half, and we actually have visibility over our corrective actions.",
                author: "Sarah Jenkins",
                role: "Quality Manager",
                company: "Aerospace Manufacturing",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Aerospace Expert"
            },
            {
                quote: "Tracking subcontractor performance used to mean chasing paper questionnaires. With iAudit, we finally have live data on how our Tier 2 suppliers are actually performing against our quality requirements on the shop floor.",
                author: "Mark Thompson",
                role: "Supplier Quality Lead",
                company: "Aviation Engineering",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "AS9100 Specialist"
            },
            {
                quote: "Security is everything in defence aviation. iAudit's zero access policy gave us the confidence to move our ISO compliance to the cloud. Finding a nonconformity is easy, iAudit ensures it actually gets fixed.",
                author: "Elena Rossi",
                role: "Compliance Director",
                company: "Defence Aerospace",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free Aerospace audit checklists",
        checklistsHeading: "Download Your Free Aerospace Audit Checklist",
        checklistsDescription: "Get a practical template designed for aerospace operations. Cover critical risks, supply chain controls, and operational safety with confidence.",
        checklistsItems: [
            "Aerospace ISO 9001 Internal Audit Checklist",
            "Aerospace ISO 14001 Internal Audit Checklist",
            "Aerospace ISO 45001 Internal Audit Checklist"
        ],
        ctaHeading: "Ready to run smarter aerospace audits?",
        ctaDescription: "Stop managing complex ISO compliance in spreadsheets. Move your ISO audit programmes into a secure, purpose-built workspace today.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Aerospace case study",
        caseStudyHeading: "How Aerospace Teams Control Supply Chain Risk",
        caseStudyDescription: "See how a Tier 1 supplier replaced scattered spreadsheets with iAudit Global, cutting nonconformities and gaining real-time visibility across their external providers.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/aerospace-bg.webp",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "Does iAudit Global support AS9100 internal audits?",
                answer: "Yes. Because AS9100 is built directly on the ISO 9001 framework, our platform handles aerospace quality audits seamlessly. You can build custom AS9100 checklists, track aerospace specific requirements, and manage your entire zero defect quality programme in one place."
            },
            {
                question: "How secure is our aerospace audit data on the platform?",
                answer: "Data security is a massive priority for aviation and defence companies. We operate a strict zero vendor access policy. We host the platform, but our team cannot view, mine, or access your sensitive audit findings, intellectual property, or corrective actions. Your data belongs entirely to you."
            },
            {
                question: "Can we use the software to manage aerospace supplier audits?",
                answer: "Yes. Managing complex, tiered supply chains is critical in this sector. You can use iAudit to run external provider audits, track subcontractor performance on live projects, and ensure your supply chain meets strict quality requirements under Clause 8.4."
            },
            {
                question: "How does Audit Mate help with complex aviation audits?",
                answer: "Audit Mate acts as an intelligent co-pilot for your audit team. It helps you instantly draft technical checklists, generate specific interview questions for shop floor engineers, and clarify complex ISO clauses without having to search through heavy PDF standards."
            },
            {
                question: "How does the system handle corrective actions (CAPA)?",
                answer: "We built iAudit around the Plan Do Check Act cycle. When you raise a nonconformity during a manufacturing or hangar audit, the system forces a closed loop process. You assign an owner, demand evidence of the fix, and verify effectiveness before the issue is ever marked as closed."
            },
            {
                question: "Can our quality inspectors use iAudit on the shop floor?",
                answer: "Absolutely. iAudit is cloud native and fully mobile responsive. Your engineers and quality managers can capture evidence, upload photos, and log findings directly from a tablet or mobile device while walking the manufacturing floor or inspecting a hangar."
            },
            {
                question: "Does the platform also cover environmental and safety standards?",
                answer: "Yes. Alongside quality, iAudit Global is purpose built for ISO 14001 environmental and ISO 45001 health and safety management systems. This allows aerospace companies to manage their entire QHSE audit programme from a single secure workspace."
            }
        ]
    },
    {
        id: "13",
        slug: "basic-metals-and-fabrication-iso-audit-software",
        title: "Basic Metal & Fabrication",
        description: "Centralise material traceability, manage welder continuity and track high‑risk safety controls across your plant with one structured basic metals and fabrication iso audit software platform.",
        color: "#57534e",
        bgImage: "/images/metal-fabrication-bg.webp",
        heroSparkleText: "Basic metals and fabrication iso audit software by iAudit",
        heroHeading: "Control traceability and workshop safety",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
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
        supportHeading: "Unify fabrication ISO audits",
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
            "ISO 9001 Basic Metals and Fabrication Audit Checklist",
            "ISO 14001 Basic Metals and Fabrication Audit Checklist",
            "ISO 45001 Basic Metals and Fabrication Audit Checklist",
        ],
        ctaHeading: "Upgrade how you manage fabrication audits",
        ctaDescription: "Start free or book a demo to improve traceability, reduce audit admin and keep actions moving.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Fabrication case study",
        caseStudyHeading: "How a steel fabricator improved audit visibility",
        caseStudyDescription: "Read how a multi-site fabrication business replaced spreadsheets with basic metals and fabrication iso audit software, improved weld traceability, reduced repeat NCRs and made external audits easier to manage.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/metal-fabrication-bg.webp",
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
        id: "14",
        slug: "machinery-and-equipment-iso-audit-software",
        title: "Machinery & Equipment",
        description: "Plan, run and track ISO audits across machinery and equipment operations with better control.",
        color: "#334155",
        bgImage: "/images/machinery-bg.webp",
        heroSparkleText: "Machinery & Equipment audit software by iAudit",
        heroHeading: "Centralised ISO audit oversight",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Machinery and Equipment audit challenges",
        challengesHeading: "Where audit processes break down",
        challengesCards: [
            {
                title: "Evidence Lost Across Systems",
                description: "Inspection logs, maintenance records, and calibration certificates sit in silos, slowing audits and decisions."
            },
            {
                title: "Safety Checks Become Tick Box Exercises",
                description: "Machine guarding, isolation, and lifting inspections are inconsistent, creating repeat findings and real risk."
            },
            {
                title: "Corrective Actions Drift Without Ownership",
                description: "Actions get buried in emails and spreadsheets, missing deadlines and failing effectiveness verification checks."
            }
        ],
        supportSparkleText: "iAudit for Machinery and Equipment",
        supportHeading: "ISO compliance across machinery operations",
        supportItems: [
            {
                title: "Plan Audits with Better Structure",
                description: "",
                bullets: [
                    "Build ISO audit programmes across sites and teams.",
                    "Schedule audits by risk, department or location."
                ]
            },
            {
                title: "Standardise Audit Execution",
                description: "",
                bullets: [
                    "Use consistent checklists across production and maintenance.",
                    "Capture clear evidence with structured audit reviews."
                ]
            },
            {
                title: "Keep Findings and Actions Moving",
                description: "",
                bullets: [
                    "Record findings and assign clear action owners.",
                    "Track deadlines and status across sites and teams."
                ]
            },
            {
                title: "Improve Evidence and Traceability",
                description: "",
                bullets: [
                    "Store notes, photos and records in one place.",
                    "Link evidence directly to findings and actions."
                ]
            },
            {
                title: "Strengthen Oversight Across Operations",
                description: "",
                bullets: [
                    "Give managers visibility into progress and overdue actions.",
                    "Report across ISO standards for clearer decision-making."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for machinery and equipment",
        auditMateHeading: "Get More Done With Audit Mate AI",
        auditMateDescription: "Draft better checklists, summarise evidence, and write clearer findings for machinery and equipment audits.",
        standardsSparkleText: "Standards and Compliance",
        standardsHeading: "Standards We Support for Machinery and Equipment",
        standardsItems: [
            {
                title: "Product Quality and Process Control",
                description: "Manage audits around process control, inspection, traceability, nonconformities and continual improvement across operations."
            },
            {
                title: "Environmental and Workplace Risk Control",
                description: "Support audits covering workplace risks, environmental impacts, legal duties and operational controls across sites."
            }
        ],
        testimonialsHeading: "What Machinery and Equipment Teams Say",
        testimonials: [
            {
                quote: "Before iAudit, our ISO 9001 audits were spread across spreadsheets and shared drives. Now evidence, findings, and actions sit in one place. Reporting is quicker, and we do not lose time chasing records.",
                author: "Sarah Jenkins",
                role: "QA Manager",
                company: "Machinery Manufacturer",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Industry Expert"
            },
            {
                quote: "We audit guarding, isolation, and lifting equipment every month. iAudit makes it easy to record what we saw on the shop floor and assign actions immediately. Follow ups are clear, and closure is properly evidenced.",
                author: "Mark Thompson",
                role: "HSE Lead",
                company: "Equipment Assembly Site",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 45001 Expert"
            },
            {
                quote: "Running audits across multiple workshops used to mean different templates and inconsistent results. With iAudit, our programme is standardised and management can see progress in real time. It has improved accountability across teams.",
                author: "Elena Rossi",
                role: "Operations Manager",
                company: "Industrial Equipment Group",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free Machinery and Equipment audit checklists",
        checklistsHeading: "Free ISO Audit Checklists for Machinery and Equipment",
        checklistsDescription: "Download practical checklists to review quality, environmental, and health and safety audit points across machinery and equipment operations.",
        checklistsItems: [
            "ISO 9001 Internal Audit Checklist for Machinery and Equipment",
            "ISO 14001 Internal Audit Checklist for Machinery and Equipment",
            "ISO 45001 Internal Audit Checklist for Machinery and Equipment"
        ],
        ctaHeading: "Start Auditing Smarter in Machinery and Equipment",
        ctaDescription: "Move faster with one platform for planning, tracking and closing ISO audits across machinery and equipment operations.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Machinery and Equipment case study",
        caseStudyHeading: "See How Teams Improve Audit Performance with iAudit",
        caseStudyDescription: "Explore how organisations use iAudit to streamline audit programmes, improve follow-up, increase visibility, and manage ISO audits more consistently across complex machinery and equipment operations.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/machinery-bg.webp",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is machinery and equipment ISO audit software?",
                answer: "Machinery and equipment ISO audit software helps businesses plan, conduct and track internal audits for ISO 9001, ISO 14001 and ISO 45001. It keeps audit schedules, findings, evidence and corrective actions organised in one platform."
            },
            {
                question: "How does iAudit help machinery and equipment companies manage ISO audits?",
                answer: "iAudit helps teams plan audit programmes, run internal audits, capture findings, assign corrective actions and monitor progress across sites. It supports machinery and equipment businesses working to improve audit consistency and control."
            },
            {
                question: "Which ISO standards does iAudit support for machinery and equipment?",
                answer: "iAudit primarily supports internal audits for ISO 9001, ISO 14001 and ISO 45001. This helps machinery and equipment organisations manage quality, environmental, and health and safety audit activity more effectively."
            },
            {
                question: "How does Audit Mate help machinery and equipment audit teams?",
                answer: "Audit Mate helps teams work faster by supporting audit preparation, clearer documentation and more consistent reporting. It can help auditors organise information, improve wording and keep audit activity aligned across different teams and sites."
            },
            {
                question: "Can iAudit support multi-site machinery and equipment audit programmes?",
                answer: "Yes. iAudit supports audit planning, execution and follow-up across multiple sites, departments and teams. This is useful for machinery and equipment businesses that need central visibility and consistent audit processes across operations."
            },
            {
                question: "How does iAudit improve corrective action tracking in machinery and equipment operations?",
                answer: "iAudit keeps findings, owners, deadlines and status updates in one place. This helps teams follow corrective actions through to closure, reduce missed follow-up and gain better visibility into recurring issues."
            },
            {
                question: "Is there a free trial for machinery and equipment teams using iAudit?",
                answer: "Yes. The 14-day free trial includes Gap Analysis, Self Assessment, Findings Dashboard, Data Analytics Summary, and Report Download features."
            }
        ],
        heroVisuals: {
            mainTitle: "Machinery Production Audit",
            sites: [
                { num: "P1", title: "Main Assembly Line", status: "Audit Live", color: "#058c42", bg: "#dcfce7" },
                { num: "M1", title: "Maintenance Workshop", status: "Completed", color: "#64748b", bg: "#f1f5f9" },
                { num: "Q1", title: "QC Testing Bay", status: "In Review", color: "#058c42", bg: "#dcfce7" }
            ],
            inspectionTitle: "Machine #802 Verified",
            inspectionDesc: "Guarding and isolation checks 100% compliant. Next service scheduled.",
            departments: ["PRD", "MNT", "QC", "HSE", "LOG", "ENV", "SFT", "ENG"],
            progressTitle: "Production Quality"
        },
        auditMateVisuals: {
            card1Title: "Safety Guarding Audit",
            card1Subtitle: "ISO 45001 Mapped",
            item1Title: "LOTO Verification",
            item1Subtitle: "Clause 8.1",
            item2Title: "Maintenance Logs",
            item2Subtitle: "Clause 7.1 NCR",
            item3Title: "Calibration Success",
            item3Subtitle: "System Verified"
        }
    },
    {
        id: "15",
        slug: "electrical-and-optical-equipment-iso-audit-software",
        title: "Electrical & Optical Equipment",
        description: "Standardise quality control, ensure electrical safety, and simplify ISO compliance across your entire manufacturing floor.",
        color: "#8b5cf6",
        bgImage: "/images/electrical-bg.webp",
        heroSparkleText: "Electrical & Optical Equipment audit software by iAudit",
        heroHeading: "Audit with precision and control",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Electrical and Optical Equipment audit challenges",
        challengesHeading: "Electronics audit complexity gaps",
        challengesCards: [
            {
                title: "Maintaining Strict Component Precision",
                description: "Tracking calibration and quality control for sensitive optical and electronic parts across multiple manufacturing sites."
            },
            {
                title: "Managing High Voltage Hazards",
                description: "Paper safety audits fail to capture immediate workplace risks during complex electrical equipment assembly processes."
            },
            {
                title: "Tracking Electronic Waste Compliance",
                description: "Monitoring hazardous materials and electronic waste disposal using outdated spreadsheets leads to costly compliance gaps."
            }
        ],
        supportSparkleText: "iAudit for Electrical and Optical Equipment",
        supportHeading: "Streamline electronics ISO compliance",
        supportItems: [
            {
                title: "Safeguard Manufacturing Quality",
                description: "",
                bullets: [
                    "Standardise quality audits across optical and electronic assembly lines.",
                    "Track calibration and resolve nonconformities with clearer precision control."
                ]
            },
            {
                title: "Strengthen Electrical Floor Safety",
                description: "",
                bullets: [
                    "Identify high voltage risks using mobile shop floor checklists.",
                    "Assign corrective actions to protect testing and assembly teams."
                ]
            },
            {
                title: "Simplify Environmental Compliance",
                description: "",
                bullets: [
                    "Monitor electronic waste and hazardous material handling centrally.",
                    "Generate reports to evidence environmental compliance quickly."
                ]
            },
            {
                title: "Drive Continual Improvement",
                description: "",
                bullets: [
                    "Embed PDCA into daily manufacturing audit cycles.",
                    "Turn findings into improvement plans with clear ownership."
                ]
            },
            {
                title: "Unify Global Oversight",
                description: "",
                bullets: [
                    "Compare compliance metrics across global manufacturing facilities.",
                    "Replace spreadsheets with one clear management dashboard."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for Electrical and Optical Equipment",
        auditMateHeading: "Accelerate Compliance with Audit Mate AI",
        auditMateDescription: "Get practical audit support that helps teams work faster, stay consistent and follow through confidently.",
        standardsSparkleText: "Standards and Compliance",
        standardsHeading: "Essential ISO Standards for Electrical and Optical Equipment",
        standardsItems: [
            {
                title: "Precision Quality Control",
                description: "Ensure flawless electronic component manufacturing and strict optical precision using streamlined quality control audit workflows."
            },
            {
                title: "Workplace Safety and Environmental Care",
                description: "Protect your factory workforce from electrical hazards while managing electronic waste and sustainability compliance effortlessly."
            }
        ],
        testimonialsHeading: "Trusted by Precision Equipment Manufacturers",
        testimonials: [
            {
                quote: "Before iAudit, we were managing audits across spreadsheets, emails and shared folders. Now everything is in one place, and it is much easier to keep findings, evidence and follow-up actions moving.",
                author: "Sarah Jenkins",
                role: "Quality Manager",
                company: "Optical Solutions Co.",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Industry Expert"
            },
            {
                quote: "iAudit helped us bring more structure to our ISO 9001 and 45001 audits. The team spends less time chasing updates, and managers get a much clearer view of progress.",
                author: "Mark Thompson",
                role: "Operations Lead",
                company: "Electronics Group",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO Specialist"
            },
            {
                quote: "We needed a simpler way to run audits across different sites and departments. iAudit gave us consistency, better visibility, and reports that are much easier to review and share.",
                author: "Elena Rossi",
                role: "Compliance Manager",
                company: "Precision Components PLC",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free Electrical and Optical Equipment audit checklists",
        checklistsHeading: "Free ISO Audit Checklist for Electrical and Optical Equipment",
        checklistsDescription: "Download a practical checklist to review quality, environmental, and health and safety audit points across electrical and optical equipment operations.",
        checklistsItems: [
            "ISO 9001 Internal Audit Checklist for Electrical and Optical Equipment",
            "ISO 14001 Internal Audit Checklist for Electrical and Optical Equipment",
            "ISO 45001 Internal Audit Checklist for Electrical and Optical Equipment"
        ],
        ctaHeading: "Take Control of ISO Audits in Electrical and Optical Equipment",
        ctaDescription: "Replace spreadsheets with one platform for ISO audits, clearer follow-up, faster action, and better control.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Electrical and Optical Equipment case study",
        caseStudyHeading: "See How Audit Teams Improve Performance with iAudit",
        caseStudyDescription: "Explore how organisations in complex operational environments use iAudit to improve audit consistency, speed up follow-up, strengthen visibility, and manage ISO audits more effectively.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/electrical-bg.webp",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "What is electrical and optical equipment ISO audit software?",
                answer: "Electrical and optical equipment ISO audit software helps businesses plan, conduct, track and report internal audits for ISO 9001, ISO 14001 and ISO 45001. It brings audit schedules, findings, evidence and corrective actions into one system."
            },
            {
                question: "How does iAudit help electrical and optical equipment manufacturers manage ISO audits?",
                answer: "iAudit helps teams manage audit programmes, run internal audits, record findings, track corrective actions and monitor progress across sites. It is designed to support ISO 9001, ISO 14001 and ISO 45001 audit activity more efficiently."
            },
            {
                question: "Which ISO standards are most relevant for electrical and optical equipment businesses?",
                answer: "The most common standards are ISO 9001 for quality management, ISO 14001 for environmental management and ISO 45001 for occupational health and safety. These standards help organisations manage quality, risk, compliance and continual improvement."
            },
            {
                question: "Why do electrical and optical equipment companies need internal audit software?",
                answer: "Internal audit software helps replace spreadsheets, emails and disconnected records with one structured system. This improves consistency, evidence tracking, action follow-up, reporting and oversight across production, quality, environmental and safety audits."
            },
            {
                question: "Can iAudit support multi-site electrical and optical equipment audit programmes?",
                answer: "Yes. iAudit can support audit planning and follow-up across multiple sites, teams and functions. This is useful for organisations that need consistent audit execution, central visibility and better control over findings and corrective actions."
            },
            {
                question: "How does audit software improve corrective action tracking in electrical and optical equipment operations?",
                answer: "Audit software keeps findings, owners, deadlines and status updates in one place. This helps teams follow corrective actions through to closure, reduce missed actions and identify recurring issues across quality, environmental and safety processes."
            },
            {
                question: "Is iAudit suitable for ISO 9001, ISO 14001 and ISO 45001 audits in electrical and optical equipment?",
                answer: "Yes. iAudit is built to support internal audits for ISO 9001, ISO 14001 and ISO 45001. It helps organisations manage audit planning, execution, reporting and follow-up within a single audit management platform."
            }
        ],
        heroVisuals: {
            mainTitle: "Electronic Component Audit",
            sites: [
                { num: "S1", title: "Shenzhen Assembly", status: "Audit Live", color: "#058c42", bg: "#dcfce7" },
                { num: "L1", title: "Leipzig Optics Lab", status: "Completed", color: "#64748b", bg: "#f1f5f9" },
                { num: "A1", title: "Austin Semi-Con", status: "In Review", color: "#058c42", bg: "#dcfce7" }
            ],
            inspectionTitle: "Unit #802 QC Passed",
            inspectionDesc: "Optical precision check 100% compliant. No aberrations detected.",
            departments: ["QC", "R&D", "OPS", "ENG", "LOG", "ENV", "SFT", "MNT"],
            progressTitle: "Assembly QC"
        },
        auditMateVisuals: {
            card1Title: "Optical Quality Audit",
            card1Subtitle: "Clause 8.1 Mapped",
            item1Title: "Lens Assembly Inspection",
            item1Subtitle: "ISO 9001 Section 8",
            item2Title: "Voltage Test Logs",
            item2Subtitle: "Clause 10.1 NCR",
            item3Title: "Calibration Success",
            item3Subtitle: "System Verified"
        }
    },
    {
        id: "16",
        slug: "engineering-iso-audit-software",
        title: "Engineering Service",
        description: "Plan, manage and report ISO audits across engineering teams, projects and subcontractors with one platform for evidence, findings and follow-up.",
        color: "#0284c7",
        bgImage: "/images/engineering-bg.webp",
        heroSparkleText: "Engineering ISO audit software by iAudit",
        heroHeading: "Stronger control across engineering audits",
        heroPrimaryButton: "Get started free",
        heroSecondaryButton: "Book a demo",
        challengesSparkleText: "Engineering audit challenges",
        challengesHeading: "Where Engineering Audits Lose Control",
        challengesCards: [
            {
                title: "Inconsistent project audits",
                description: "Different teams audit in different ways, making results hard to compare across projects and locations."
            },
            {
                title: "Disconnected evidence trails",
                description: "Audit notes, records and actions often sit across emails, folders and project-specific files."
            },
            {
                title: "Repeated issues with weak follow-up",
                description: "The same process failures return because actions are closed before effectiveness is properly checked."
            }
        ],
        supportSparkleText: "iAudit for Engineering",
        supportHeading: "A Better Way to Manage Engineering ISO Audits",
        supportItems: [
            {
                title: "Consistent audits across projects",
                description: "",
                bullets: [
                    "Use standard templates across engineering teams and projects.",
                    "Compare findings across projects instead of treating audits separately."
                ]
            },
            {
                title: "Stronger subcontractor and supplier control",
                description: "",
                bullets: [
                    "Track subcontractor findings across projects centrally.",
                    "Surface recurring supplier risks earlier."
                ]
            },
            {
                title: "Clearer evidence and audit trails",
                description: "",
                bullets: [
                    "Keep findings and evidence in one system.",
                    "Prevent records getting lost in emails or drives."
                ]
            },
            {
                title: "Better corrective action discipline",
                description: "",
                bullets: [
                    "Assign actions with clear owners and deadlines.",
                    "Verify effectiveness before marking issues closed."
                ]
            },
            {
                title: "Faster reporting and management visibility",
                description: "",
                bullets: [
                    "Generate reports without manual reformatting.",
                    "Give managers clear oversight of audit progress."
                ]
            }
        ],
        auditMateSparkle: "Audit Mate for Engineering",
        auditMateHeading: "An Intelligent Assistant for Technical Teams",
        auditMateDescription: "Draft technical checklists, build site-specific interview questions and clarify complex ISO clauses instantly. Your data stays entirely secure.",
        standardsSparkleText: "Standards and Compliance",
        standardsHeading: "Purpose-Built for Engineering ISO Audits",
        standardsItems: [
            {
                title: "ISO 9001 Quality & Design Audits",
                description: "Manage technical quality across design, development and project delivery with structured, clause-aligned audit oversight."
            },
            {
                title: "ISO 14001 and ISO 45001 Audits",
                description: "Support environmental and site safety audits across complex engineering projects with consistent tracking."
            }
        ],
        testimonialsSparkleText: "Engineering testimonials",
        testimonialsHeading: "What Engineering Leaders Say",
        testimonials: [
            {
                quote: "iAudit transformed how we handle design audits. We no longer chase emails for evidence; everything is linked directly to the ISO 9001 requirements in one place.",
                author: "Sarah Jenkins",
                role: "Technical Quality Lead",
                company: "Engineering Consultancy",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Verified Industry Expert"
            },
            {
                quote: "Managing site safety across five projects was a logistical nightmare with paper forms. iAudit gives us a live view of every hazard and corrective action instantly.",
                author: "Mark Thompson",
                role: "H&S Manager",
                company: "Civil Engineering Firm",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "ISO 45001 Expert"
            },
            {
                quote: "Security is vital for our technical projects. The zero-access policy made iAudit the only cloud solution we trusted for our highly sensitive internal audit data.",
                author: "Elena Rossi",
                role: "Operations Director",
                company: "Precision Engineering",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                batch: "Certified Lead Auditor"
            }
        ],
        checklistsTag: "Free engineering audit checklists",
        checklistsHeading: "Standardise Your Engineering Audits",
        checklistsDescription: "Download our free, clause-aligned checklists to bring structure and technical consistency to your next project review.",
        checklistsItems: [
            "Engineering ISO 9001 Quality Audit Checklist",
            "Engineering ISO 14001 Environmental Audit Checklist",
            "Engineering ISO 45001 Safety Audit Checklist"
        ],
        ctaHeading: "Ready for Smarter Engineering Audits?",
        ctaDescription: "Stop managing technical risks in disconnected spreadsheets. Move your engineering ISO audit programme into a secure workspace and gain total project visibility today.",
        ctaPrimaryButton: "Get started free",
        ctaSecondaryButton: "Book a demo",
        caseStudySparkle: "Engineering case study",
        caseStudyHeading: "How Technical Teams Gain Visibility",
        caseStudyDescription: "Learn how an engineering consultancy replaced manual reporting with iAudit Global, centralising their design reviews and site inspections while cutting reporting time significantly.",
        caseStudyButton: "Read more",
        caseStudyImage: "/images/engineering-bg.webp",
        faqSparkleText: "Common questions",
        faqHeading: "Frequently Asked Questions",
        faqItems: [
            {
                question: "Can we use iAudit to manage technical design reviews?",
                answer: "Yes. You can use the platform to audit Clause 8.3 (Design and Development) specifically. It allows your team to link evidence of design reviews, technical verifications, and validations directly to your audit findings, ensuring your design history is always audit-ready."
            },
            {
                question: "Do our field engineers need a laptop to log site audits?",
                answer: "Not at all. iAudit Global is fully mobile responsive. Your engineers can log site findings, snap photos of conditions, and assign corrective actions from their phones or tablets while they are out in the field. This removes the reporting gap between the site and the office."
            },
            {
                question: "How secure is our engineering intellectual property on the platform?",
                answer: "We operate a strict zero-access policy. While we host the platform, we cannot view, mine, or access your technical audit data, design findings, or strategic risks. Your intellectual property stays entirely under your control at all times."
            },
            {
                question: "Can the software handle subcontractor and specialist audits?",
                answer: "Yes. Clause 8.4 requires clear control of external providers. iAudit allows you to run specific audits on your specialist subcontractors and track their performance data across different projects. This moves you beyond basic approval lists and into real technical oversight."
            },
            {
                question: "Does it support ISO 45001 safety walks on active projects?",
                answer: "Absolutely. It is designed for live site safety management. You can document hazards, track worker participation, and ensure corrective actions are verified as fixed before a technical project moves to the next stage of delivery."
            },
            {
                question: "Can we generate professional audit reports for our clients?",
                answer: "Yes. iAudit generates professional, custom-branded PDF reports instantly. This removes the administrative burden of manual formatting and ensures your clients see clear, structured evidence of your quality and safety controls."
            },
            {
                question: "How does Audit Mate handle complex engineering clauses?",
                answer: "Audit Mate acts as a technical co-pilot for your audit team. It helps you draft technical checklists for complex processes and provides instant guidance on how specific ISO clauses apply to professional engineering and design services."
            }
        ]
    },
];
