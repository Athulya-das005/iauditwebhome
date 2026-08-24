export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    /** ISO date YYYY-MM-DD — used to pick Latest Post automatically */
    datePublished: string;
    readTime: string;
    image: string;
    author: string;
    categories: string[];
};

/** Single source of truth for the /blog listing. Add new posts here when published. */
export const blogPosts: BlogPost[] = [
    {
        slug: "risk-based-auditing-in-manufacturing",
        title: "Risk-Based Auditing in Manufacturing: Moving Beyond the Calendar",
        excerpt:
            "Shift from a fixed audit calendar to data-led priorities—focus limited audit time on the processes, shifts and suppliers with the highest uncertainty.",
        datePublished: "2026-08-21",
        readTime: "10 Min Read",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["Manufacturing", "Risk & Compliance", "Internal Auditing"],
    },
    {
        slug: "risk-based-thinking-in-iso-9001",
        title: "Understanding Risk-based Thinking in ISO 9001:2015",
        excerpt:
            "Move beyond the risk register spreadsheet and apply Clause 6.1 as a practical mindset across planning, operations and internal audit.",
        datePublished: "2026-08-19",
        readTime: "11 Min Read",
        image: "/images/blog-process-automation.webp",
        author: "Mathew Chiweda",
        categories: ["ISO 9001", "Risk & Compliance"],
    },
    {
        slug: "vulnerability-disclosure-programme-iaudit-global",
        title: "Inside iAudit Global’s Vulnerability Disclosure Programme and Security Reporting Process",
        excerpt:
            "How researchers can report security issues safely, what to include in a strong report, and how iAudit handles disclosure responsibly.",
        datePublished: "2026-08-19",
        readTime: "8 Min Read",
        image: "/images/blog-ai-transform.webp",
        author: "Mathew Chiweda",
        categories: ["Audit Management Software", "Compliance"],
    },
    {
        slug: "internal-audit-findings-explained",
        title: "Internal Audit Findings Explained: NC, OFI, Observation & Positive Findings",
        excerpt:
            "Clear definitions for major and minor NCs, OFIs and observations—so teams grade findings consistently and act with the right urgency.",
        datePublished: "2026-08-19",
        readTime: "9 Min Read",
        image: "/images/blog-complex-workflows.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Continuous Improvement"],
    },
    {
        slug: "how-to-write-an-iso-internal-audit-report-that-matters",
        title: "How to Write an ISO Internal Audit Report That Your Next Auditor Will Appreciate",
        excerpt:
            "Structure reports around evidence, risk and action—so management reviews and external auditors can use them with confidence.",
        datePublished: "2026-08-19",
        readTime: "10 Min Read",
        image: "/images/blog-1.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "ISO 9001"],
    },
    {
        slug: "iso-internal-audit-report-template-free-download",
        title: "ISO Internal Audit Report Template: Free Download and Best Practices",
        excerpt:
            "Use a practical template to capture scope, findings and actions without drowning the reader in admin.",
        datePublished: "2026-08-19",
        readTime: "8 Min Read",
        image: "/images/blog-2.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Continuous Improvement"],
    },
    {
        slug: "common-iso-9001-nonconformities-manufacturing",
        title: "Common ISO 9001 Nonconformities in Manufacturing",
        excerpt:
            "The manufacturing NCs that keep recurring—and how to close them with stronger process control and evidence.",
        datePublished: "2026-08-19",
        readTime: "9 Min Read",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["ISO 9001", "Manufacturing"],
    },
    {
        slug: "corrective-actions-after-an-internal-audit-findings-to-closure",
        title: "Corrective Actions After an Internal Audit: From Findings to Closure",
        excerpt:
            "Move findings from identification through root cause, action and effectiveness checks without losing ownership.",
        datePublished: "2026-08-19",
        readTime: "10 Min Read",
        image: "/images/blog-continuous-improvement.webp",
        author: "Mathew Chiweda",
        categories: ["Continuous Improvement", "Internal Auditing"],
    },
    {
        slug: "manage-environmental-permits-across-multiple-manufacturing-sites",
        title: "How to Manage Environmental Permits Across Multiple Manufacturing Sites",
        excerpt:
            "Keep legal registers, evidence and site accountability aligned when permits span multiple factories.",
        datePublished: "2026-08-19",
        readTime: "9 Min Read",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["ISO 14001", "Manufacturing"],
    },
    {
        slug: "how-to-set-up-iaudit-global-iso-audit-software",
        title: "How to Set Up iAudit Global ISO Audit Software: 6 Steps",
        excerpt:
            "A practical setup path from first login to live audits, checklists and findings workflows.",
        datePublished: "2026-08-19",
        readTime: "8 Min Read",
        image: "/images/blog-ai-transform.webp",
        author: "Mathew Chiweda",
        categories: ["Audit Management Software"],
    },
    {
        slug: "how-to-audit-risk-based-thinking",
        title: "How to Audit Risk-based Thinking in ISO 9001",
        excerpt:
            "Practical questions and evidence trails auditors use to verify that risk-based thinking is real—not paperwork.",
        datePublished: "2026-08-19",
        readTime: "10 Min Read",
        image: "/images/blog-process-automation.webp",
        author: "Mathew Chiweda",
        categories: ["ISO 9001", "Risk & Compliance", "Internal Auditing"],
    },
    {
        slug: "why-audit-data-arrives-too-late-costing-control",
        title: "Why Audit Data That Arrives Too Late Is Costing You Control",
        excerpt:
            "Late findings kill PDCA. See why delayed audit data weakens decisions—and how to keep evidence flowing in real time.",
        datePublished: "2026-08-19",
        readTime: "8 Min Read",
        image: "/images/blog-complex-workflows.webp",
        author: "Mathew Chiweda",
        categories: ["Audit Management Software", "Continuous Improvement"],
    },
    {
        slug: "how-management-reviews-use-internal-audit-results",
        title: "How Management Reviews Should Use Internal Audit Results",
        excerpt:
            "Turn audit outputs into management review inputs that drive decisions, resources and improvement priorities.",
        datePublished: "2026-08-18",
        readTime: "9 Min Read",
        image: "/images/blog-1.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Continuous Improvement"],
    },
    {
        slug: "how-to-schedule-an-effective-internal-audit-programme",
        title: "How to Schedule an Effective Internal Audit Programme",
        excerpt:
            "Build a risk-based programme calendar that covers the system without burning out the audit team.",
        datePublished: "2026-08-18",
        readTime: "9 Min Read",
        image: "/images/blog-2.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Risk & Compliance"],
    },
    {
        slug: "why-most-auditors-secretly-hate-internal-auditing",
        title: "Why Most Auditors Secretly Hate Internal Auditing",
        excerpt:
            "The admin friction, politics and spreadsheet fatigue behind auditor burnout—and what better systems change.",
        datePublished: "2026-08-18",
        readTime: "8 Min Read",
        image: "/images/blog-auditor-training.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Continuous Improvement"],
    },
    {
        slug: "why-documentation-is-important-for-iso-certification",
        title: "Why Documentation Is Important for ISO Certification",
        excerpt:
            "Documented information that supports control, evidence and improvement—without creating a paperwork mountain.",
        datePublished: "2026-05-01",
        readTime: "8 Min Read",
        image: "/images/blog-3.webp",
        author: "Mathew Chiweda",
        categories: ["Compliance", "ISO 9001"],
    },
    {
        slug: "remote-iso-internal-audits",
        title: "Remote ISO Internal Audits: A Practical Guide for Audit Teams",
        excerpt:
            "Plan remote and hybrid audits that still deliver objective evidence and credible findings.",
        datePublished: "2026-04-24",
        readTime: "9 Min Read",
        image: "/images/blog-ai-transform.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Audit Management Software"],
    },
    {
        slug: "how-to-prepare-for-a-construction-compliance-audit",
        title: "How to Prepare for a Construction Compliance Audit and Reduce Risk on Site",
        excerpt:
            "Site-ready prep for construction compliance audits—evidence, roles and common risk traps.",
        datePublished: "2026-04-18",
        readTime: "9 Min Read",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["Compliance", "ISO 9001"],
    },
    {
        slug: "pdca-cycle-in-iso-27001",
        title: "PDCA Cycle in ISO 27001: How to Make Your ISMS Actually Work",
        excerpt:
            "Apply Plan-Do-Check-Act so your information security management system improves instead of stalling.",
        datePublished: "2026-04-17",
        readTime: "9 Min Read",
        image: "/images/blog-process-automation.webp",
        author: "Mathew Chiweda",
        categories: ["Continuous Improvement", "Risk & Compliance"],
    },
    {
        slug: "pdca-cycle-in-basic-metal-industry-fabrication-industry",
        title: "PDCA Cycle in Basic Metal & Fabrication Industry",
        excerpt:
            "How fabrication and metal shops use PDCA to tighten process control, quality and audit readiness.",
        datePublished: "2026-04-17",
        readTime: "8 Min Read",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["Manufacturing", "Continuous Improvement"],
    },
    {
        slug: "iso-14001-2026-requirements-for-manufacturing-industry",
        title: "ISO 14001:2026 Requirements for Manufacturing Industry",
        excerpt:
            "What manufacturing teams should prepare for as ISO 14001 evolves—climate, lifecycle and operational control.",
        datePublished: "2026-04-15",
        readTime: "10 Min Read",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["ISO 14001", "Manufacturing"],
    },
    {
        slug: "iso-certification-for-metal-fabrication",
        title: "ISO Certification for Metal Fabrication: Requirements, Audits and Common Gaps",
        excerpt:
            "A practical path to ISO readiness for metal fabrication—audits, gaps and evidence that stands up.",
        datePublished: "2026-04-15",
        readTime: "10 Min Read",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["Manufacturing", "ISO 9001"],
    },
    {
        slug: "prepare-for-iso-9001-in-construction",
        title: "Prepare for ISO 9001 in Construction: What You Actually Need",
        excerpt:
            "Focus on the construction QMS essentials auditors expect—without generic template clutter.",
        datePublished: "2026-04-10",
        readTime: "9 Min Read",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["ISO 9001", "Compliance"],
    },
    {
        slug: "how-to-choose-iso-audit-management-software",
        title: "How to Choose ISO Audit Management Software",
        excerpt:
            "What to look for in purpose-built audit software versus generic tools and spreadsheets.",
        datePublished: "2026-04-08",
        readTime: "9 Min Read",
        image: "/images/blog-ai-transform.webp",
        author: "Mathew Chiweda",
        categories: ["Audit Management Software"],
    },
    {
        slug: "iso-audit-in-healthcare",
        title: "ISO Audit in Healthcare Is Not Like Other Audits. Here Is Why.",
        excerpt:
            "Why healthcare audits demand different evidence, risk sensitivity and stakeholder handling.",
        datePublished: "2026-04-03",
        readTime: "8 Min Read",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Compliance"],
    },
    {
        slug: "iso-14001-2026-update",
        title: "ISO 14001:2026 Update: What Is Changing and How to Prepare",
        excerpt:
            "A clear briefing on the ISO 14001:2026 direction and how EMS teams can prepare early.",
        datePublished: "2026-04-01",
        readTime: "9 Min Read",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=700&fit=crop&q=80&fm=webp",
        author: "Mathew Chiweda",
        categories: ["ISO 14001", "Compliance"],
    },
    {
        slug: "why-internal-audits-are-critical-in-manufacturing",
        title: "Why Internal Audits Are Critical in Manufacturing",
        excerpt:
            "How shop-floor audits protect quality, safety and delivery when production pressure is high.",
        datePublished: "2026-03-27",
        readTime: "8 Min Read",
        image: "/images/blog-process-automation.webp",
        author: "Mathew Chiweda",
        categories: ["Manufacturing", "Internal Auditing"],
    },
    {
        slug: "how-to-plan-hybrid-internal-audits",
        title: "How to Plan Hybrid Internal Audits: A Practical Guide for ISO Standards",
        excerpt:
            "Combine remote document review with on-site verification so hybrid audits stay credible.",
        datePublished: "2026-03-25",
        readTime: "9 Min Read",
        image: "/images/blog-complex-workflows.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Audit Management Software"],
    },
    {
        slug: "iso-standards-for-transport-and-logistics-management",
        title: "ISO Standards for Reliable Transport and Logistics Operations",
        excerpt:
            "Which ISO standards matter most for logistics reliability, safety and customer performance.",
        datePublished: "2026-03-20",
        readTime: "9 Min Read",
        image: "/images/blog-complex-workflows.webp",
        author: "Mathew Chiweda",
        categories: ["Compliance", "ISO 9001"],
    },
    {
        slug: "top-non-conformities-in-iso-9001",
        title: "Top Non-Conformities in ISO 9001 and How to Fix Them",
        excerpt:
            "The ISO 9001 findings that appear most often—and practical fixes that stick beyond the audit.",
        datePublished: "2026-03-18",
        readTime: "9 Min Read",
        image: "/images/blog-1.webp",
        author: "Mathew Chiweda",
        categories: ["ISO 9001", "Continuous Improvement"],
    },
    {
        slug: "how-to-manage-iso-audits-across-multiple-sites",
        title: "How to Manage ISO Audits Across Multiple Sites Without Losing Visibility",
        excerpt:
            "Standardise, centralise and sample intelligently so multi-site programmes stay visible and comparable.",
        datePublished: "2026-03-13",
        readTime: "9 Min Read",
        image: "/images/blog-ai-transform.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Audit Management Software"],
    },
    {
        slug: "empowering-culture-continuous-improvement",
        title: "Empowering a Culture of Continuous Improvement Through Audit",
        excerpt:
            "Use internal audits to strengthen psychological safety, PDCA habits and improvement that lasts.",
        datePublished: "2025-11-20",
        readTime: "10 Min Read",
        image: "/images/blog-continuous-improvement.webp",
        author: "Mathew Chiweda",
        categories: ["Continuous Improvement", "Internal Auditing"],
    },
    {
        slug: "train-motivate-internal-auditors",
        title: "How to Train and Motivate Internal Auditors Without Burning Them Out",
        excerpt:
            "Build auditor competence and energy with coaching, recognition and sustainable workloads.",
        datePublished: "2025-11-20",
        readTime: "8 Min Read",
        image: "/images/blog-auditor-training.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Continuous Improvement"],
    },
    {
        slug: "internal-audit-best-practices-small-businesses",
        title: "Internal Audit Best Practices for Small Businesses",
        excerpt:
            "Practical audit habits that help smaller teams stay compliant without heavy admin overhead.",
        datePublished: "2025-11-20",
        readTime: "9 Min Read",
        image: "/images/blog-small-business.webp",
        author: "Mathew Chiweda",
        categories: ["Internal Auditing", "Compliance"],
    },
];

/** Featured Posts order on /blog (fixed slots). */
export const FEATURED_SLUGS = [
    "vulnerability-disclosure-programme-iaudit-global",
    "empowering-culture-continuous-improvement",
    "train-motivate-internal-auditors",
] as const;

export type BlogSubcategory = {
    id: string;
    label: string;
    slugs: string[];
};

export type BlogCategoryGroup = {
    id: string;
    label: string;
    image: string;
    subs: BlogSubcategory[];
};

/** Category tree + post mapping for /blog filtering. */
export const blogTaxonomy: BlogCategoryGroup[] = [
    {
        id: "internal-auditing",
        label: "Internal Auditing",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&h=420&fit=crop&q=80&fm=webp",
        subs: [
            {
                id: "iso-internal-audits",
                label: "ISO Internal Audits",
                slugs: [
                    "empowering-culture-continuous-improvement",
                    "why-internal-audits-are-critical-in-manufacturing",
                    "remote-iso-internal-audits",
                    "how-to-plan-hybrid-internal-audits",
                ],
            },
            {
                id: "audit-planning",
                label: "Audit Planning",
                slugs: [
                    "how-to-schedule-an-effective-internal-audit-programme",
                    "how-to-manage-iso-audits-across-multiple-sites",
                ],
            },
            {
                id: "audit-findings",
                label: "Audit Findings",
                slugs: [
                    "internal-audit-findings-explained",
                    "how-to-write-an-iso-internal-audit-report-that-matters",
                    "iso-internal-audit-report-template-free-download",
                ],
            },
            {
                id: "corrective-actions",
                label: "Corrective Actions",
                slugs: [
                    "corrective-actions-after-an-internal-audit-findings-to-closure",
                    "top-non-conformities-in-iso-9001",
                ],
            },
            {
                id: "remote-hybrid-audits",
                label: "Remote & Hybrid Audits",
                slugs: ["remote-iso-internal-audits", "how-to-plan-hybrid-internal-audits"],
            },
            {
                id: "risk-based-auditing",
                label: "Risk-Based Auditing",
                slugs: ["risk-based-auditing-in-manufacturing", "how-to-audit-risk-based-thinking"],
            },
        ],
    },
    {
        id: "iso-9001",
        label: "ISO 9001",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=420&fit=crop&q=80&fm=webp",
        subs: [
            {
                id: "iso-9001-auditing",
                label: "ISO 9001 Auditing",
                slugs: [
                    "why-internal-audits-are-critical-in-manufacturing",
                    "how-to-audit-risk-based-thinking",
                    "common-iso-9001-nonconformities-manufacturing",
                ],
            },
            {
                id: "nonconformities",
                label: "Nonconformities",
                slugs: [
                    "top-non-conformities-in-iso-9001",
                    "common-iso-9001-nonconformities-manufacturing",
                    "corrective-actions-after-an-internal-audit-findings-to-closure",
                ],
            },
            {
                id: "risk-based-thinking",
                label: "Risk-Based Thinking",
                slugs: [
                    "risk-based-thinking-in-iso-9001",
                    "how-to-audit-risk-based-thinking",
                    "risk-based-auditing-in-manufacturing",
                ],
            },
            {
                id: "documentation",
                label: "Documentation",
                slugs: ["why-documentation-is-important-for-iso-certification"],
            },
            {
                id: "certification",
                label: "Certification",
                slugs: ["prepare-for-iso-9001-in-construction", "iso-certification-for-metal-fabrication"],
            },
        ],
    },
    {
        id: "iso-14001",
        label: "ISO 14001",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&h=420&fit=crop&q=80&fm=webp",
        subs: [
            {
                id: "iso-14001-2026",
                label: "ISO 14001:2026",
                slugs: ["iso-14001-2026-update", "iso-14001-2026-requirements-for-manufacturing-industry"],
            },
            {
                id: "environmental-auditing",
                label: "Environmental Auditing",
                slugs: ["manage-environmental-permits-across-multiple-manufacturing-sites"],
            },
            {
                id: "environmental-compliance",
                label: "Environmental Compliance",
                slugs: [
                    "manage-environmental-permits-across-multiple-manufacturing-sites",
                    "iso-14001-2026-requirements-for-manufacturing-industry",
                ],
            },
        ],
    },
    {
        id: "industries",
        label: "Industries",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=420&fit=crop&q=80&fm=webp",
        subs: [
            {
                id: "manufacturing",
                label: "Manufacturing",
                slugs: [
                    "why-internal-audits-are-critical-in-manufacturing",
                    "common-iso-9001-nonconformities-manufacturing",
                    "risk-based-auditing-in-manufacturing",
                    "iso-14001-2026-requirements-for-manufacturing-industry",
                    "manage-environmental-permits-across-multiple-manufacturing-sites",
                    "pdca-cycle-in-basic-metal-industry-fabrication-industry",
                ],
            },
            {
                id: "construction",
                label: "Construction",
                slugs: ["prepare-for-iso-9001-in-construction", "how-to-prepare-for-a-construction-compliance-audit"],
            },
            {
                id: "metal-fabrication",
                label: "Metal Fabrication",
                slugs: ["iso-certification-for-metal-fabrication", "pdca-cycle-in-basic-metal-industry-fabrication-industry"],
            },
            {
                id: "healthcare",
                label: "Healthcare",
                slugs: ["iso-audit-in-healthcare"],
            },
            {
                id: "transport-logistics",
                label: "Transport & Logistics",
                slugs: ["iso-standards-for-transport-and-logistics-management"],
            },
        ],
    },
    {
        id: "audit-management",
        label: "Audit Management",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=420&fit=crop&q=80&fm=webp",
        subs: [
            {
                id: "audit-management-software",
                label: "Audit Management Software",
                slugs: ["how-to-choose-iso-audit-management-software", "how-to-set-up-iaudit-global-iso-audit-software"],
            },
            {
                id: "multi-site-auditing",
                label: "Multi-Site Auditing",
                slugs: [
                    "how-to-manage-iso-audits-across-multiple-sites",
                    "manage-environmental-permits-across-multiple-manufacturing-sites",
                ],
            },
            {
                id: "audit-reporting",
                label: "Audit Reporting",
                slugs: [
                    "how-to-write-an-iso-internal-audit-report-that-matters",
                    "iso-internal-audit-report-template-free-download",
                    "why-audit-data-arrives-too-late-costing-control",
                ],
            },
            {
                id: "audit-data-analytics",
                label: "Audit Data & Analytics",
                slugs: ["why-audit-data-arrives-too-late-costing-control"],
            },
        ],
    },
    {
        id: "continuous-improvement",
        label: "Continuous Improvement",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=420&fit=crop&q=80&fm=webp",
        subs: [
            {
                id: "pdca",
                label: "PDCA",
                slugs: ["pdca-cycle-in-iso-27001", "pdca-cycle-in-basic-metal-industry-fabrication-industry"],
            },
            {
                id: "corrective-action",
                label: "Corrective Action",
                slugs: [
                    "corrective-actions-after-an-internal-audit-findings-to-closure",
                    "top-non-conformities-in-iso-9001",
                ],
            },
            {
                id: "management-review",
                label: "Management Review",
                slugs: ["how-management-reviews-use-internal-audit-results"],
            },
            {
                id: "quality-improvement",
                label: "Quality Improvement",
                slugs: [
                    "empowering-culture-continuous-improvement",
                    "why-most-auditors-secretly-hate-internal-auditing",
                    "train-motivate-internal-auditors",
                ],
            },
        ],
    },
    {
        id: "security-trust",
        label: "Security / Trust",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&h=420&fit=crop&q=80&fm=webp",
        subs: [
            {
                id: "vulnerability-disclosure",
                label: "Vulnerability Disclosure",
                slugs: ["vulnerability-disclosure-programme-iaudit-global"],
            },
        ],
    },
];

/** @deprecated Use blogTaxonomy */
export const blogCategories = blogTaxonomy.map(({ id, label, image }) => ({ id, label, image }));

export function blogHref(slug: string) {
    return `/blog/${slug}`;
}

export function formatBlogDate(iso: string) {
    const d = new Date(`${iso}T12:00:00`);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function getLatestPost(posts: BlogPost[] = blogPosts) {
    return [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))[0];
}

export function getFeaturedPosts(posts: BlogPost[] = blogPosts) {
    return FEATURED_SLUGS.map((slug) => posts.find((p) => p.slug === slug)).filter(Boolean) as BlogPost[];
}

export function getAllPostsSorted(posts: BlogPost[] = blogPosts) {
    return [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getTopPosts(limit = 5, posts: BlogPost[] = blogPosts) {
    const sorted = getAllPostsSorted(posts);
    // Mid-shelf picks — not the newest cluster, not the oldest archive
    const start = Math.max(0, Math.floor((sorted.length - limit) / 2));
    return sorted.slice(start, start + limit);
}

function postsFromSlugs(slugs: string[], posts: BlogPost[] = blogPosts) {
    const unique = [...new Set(slugs)];
    return unique
        .map((slug) => posts.find((p) => p.slug === slug))
        .filter(Boolean)
        .sort((a, b) => ((a as BlogPost).datePublished < (b as BlogPost).datePublished ? 1 : -1)) as BlogPost[];
}

export function getPostsForCategory(categoryId: string, posts: BlogPost[] = blogPosts) {
    const group = blogTaxonomy.find((c) => c.id === categoryId);
    if (!group) return [];
    return postsFromSlugs(group.subs.flatMap((s) => s.slugs), posts);
}

export function getPostsForSubcategory(categoryId: string, subId: string, posts: BlogPost[] = blogPosts) {
    const group = blogTaxonomy.find((c) => c.id === categoryId);
    const sub = group?.subs.find((s) => s.id === subId);
    if (!sub) return [];
    return postsFromSlugs(sub.slugs, posts);
}

