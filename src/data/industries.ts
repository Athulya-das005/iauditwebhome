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
    standardsHeading?: string;
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
        slug: "construction",
        title: "Construction",
        description: "Manage ISO audits across sites, subcontractors, and project phases without the paperwork.",
        color: "#84cc16",
        bgImage: "/images/construction-bg.jpg",
    },
    {
        id: "05",
        slug: "manufacturing",
        title: "Manufacturing",
        description: "Audit production processes, quality controls, and environmental compliance across plants.",
        color: "#0d9488",
        bgImage: "/images/manufacturing-bg.jpg",
    },
    {
        id: "06",
        slug: "healthcare",
        title: "Healthcare",
        description: "Run quality and safety audits across clinical and operational areas.",
        color: "#0284c7",
        bgImage: "/images/healthcare-bg.png",
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
        slug: "mining",
        title: "Mining",
        description: "Ensure health, safety, and environmental compliance across remote mining operations and heavy equipment sites.",
        color: "#eab308",
        bgImage: "/images/mining-bg.jpg",
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
