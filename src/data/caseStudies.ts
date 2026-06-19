export type CaseStudyMetric = {
    value: string;
    label: string;
};

export type CaseStudyCard = {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    logoText: string;
};

export const apexCaseStudy = {
    slug: "apex-engineering-fabrication",
    breadcrumb: "Apex Engineering & Fabrication",
    title: "How Apex Engineering secured 100% audit history continuity across three production sites",
    insightsFrom: {
        name: "Mathew Chiweda",
        role: "Quality & Compliance Manager",
        avatar: "/images/mathew-chiweda.png",
    },
    useCases: ["ISO 9001 & 14001 Internal Audits"],
    departments: ["Operations & Quality Assurance"],
    company: {
        name: "Apex Engineering & Fabrication",
        logoText: "APEX",
        description:
            "Apex Engineering & Fabrication specialises in precision metalwork for the automotive and aerospace sectors. With three high-volume sites and a complex multi-standard audit programme, they required a structured system to protect their audit trail and ensure findings were never lost during staff transitions.",
        tags: ["SME: 150–250", "Manufacturing", "United Kingdom"],
    },
    keyResults: [
        { value: "5x faster", label: "audit report generation cycles" },
        { value: "100%", label: "visibility of corrective actions across sites" },
        { value: "Zero", label: "audit records lost during staff transitions" },
    ] as CaseStudyMetric[],
    challenge: {
        intro: `David Harrison's team oversees quality and environmental compliance across three manufacturing sites. A core part of their work is ensuring that the organisation remains audit-ready at all times to maintain their ISO 9001 and ISO 14001 certifications. However, maintaining a consistent audit trail across different locations using manual tools had become a significant operational risk.

To manage their programmes, the team relied on Excel trackers, Word templates and shared folders. While this functioned for a single site, scaling it across the group introduced several critical challenges.`,
        points: [
            {
                num: "01",
                title: "Audit data was siloed",
                text: "Plans, evidence and findings were stored in separate spreadsheets and personal folders. This made it difficult to get a real-time view of compliance status across the group or to compare performance between the three factories.",
            },
            {
                num: "02",
                title: "History was person-dependent",
                text: "Much of the context behind audit decisions and follow-up actions was held in individual inboxes. If a key team member moved on, the organisation stood to lose years of institutional knowledge and essential evidence required for recertification.",
            },
        ],
        quote: {
            text: "Our biggest fear was an external audit where we could not find the necessary evidence because it was buried in a former colleague's email. We needed a system where the audit history belonged to the company, not just an individual.",
            author: "David Harrison",
            role: "Quality & Compliance Manager",
        },
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=640&fit=crop&q=80",
    },
    solution: {
        intro: `By implementing iAudit Global, the team moved their entire audit programme from fragmented spreadsheets into a single, structured platform. They now manage all ISO 9001 and ISO 14001 audits through a shared interface, providing a unified view of every finding and piece of evidence across the group.

David's team utilised Audit Mate, the built-in AI assistant, to generate clause-specific checklists for shopfloor process controls and environmental waste segregation. These standardised templates were pushed to all three factories, ensuring that internal audits were conducted with the same level of rigour, regardless of which auditor was on-site.`,
        highlights: [
            {
                title: "Unified audit history",
                text: "Every audit plan, finding and photo of evidence is linked together in a permanent record. This has eliminated the need to hunt through old emails or shared folders, as the entire audit trail is searchable and accessible to the whole team.",
            },
            {
                title: "Automated report generation",
                text: "iAudit Global removes the administrative burden of manually formatting reports. Professional, ISO-compliant audit reports are now generated instantly upon completion, allowing the team to focus on resolving issues rather than performing data entry.",
            },
            {
                title: "Real-time site visibility",
                text: "Leadership can now monitor compliance trends across all three sites through a central dashboard. They can instantly see which factories have open non-conformities and track the progress of corrective actions through to closure.",
            },
        ],
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=640&fit=crop&q=80",
    },
    results: {
        intro: `Since centralising their audit programme on iAudit Global, Apex Engineering has achieved a more resilient compliance structure across their manufacturing operations. A review of their first full audit cycle showed significant improvements in both efficiency and data integrity:`,
        points: [
            {
                title: "Faster reporting cycles",
                text: "The team was able to generate ISO-compliant audit reports 5x faster than their previous manual process. This removed the administrative lag between completing a shopfloor inspection and issuing findings to department heads.",
            },
            {
                title: "Full visibility of corrective actions",
                text: "Since tracking non-conformities (NCRs) through the central dashboard, the organisation has maintained 100% visibility of open actions. Management can now see the status of every finding across all three sites, ensuring that issues are resolved rather than forgotten.",
            },
            {
                title: "Predictable external audits",
                text: "During their most recent ISO 9001 recertification, the external auditor was able to navigate the entire audit history instantly. Having every piece of evidence, plan and follow-up action linked in a single record removed the friction and stress usually associated with certification visits.",
            },
        ],
        quote: {
            text: "Moving away from scattered spreadsheets has given us much more confidence in our audit programme. The reports are consistent, the evidence is always findable, and our internal audits now feel like a tool for improvement rather than just a paperwork exercise.",
            author: "David Harrison",
            role: "Quality & Compliance Manager",
        },
    },
};

export const moreCaseStudies: CaseStudyCard[] = [
    {
        slug: "apex-engineering-fabrication",
        title: "How Apex Engineering secured 100% audit history continuity across three production sites",
        excerpt: "Learn how a multi-site manufacturer replaced spreadsheets with a unified ISO audit trail.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80",
        logoText: "APEX",
    },
    {
        slug: "stannah-lifts-compliance",
        title: "How Stannah standardised ISO 9001 audits across global service teams",
        excerpt: "See how structured checklists improved consistency across field and factory operations.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop&q=80",
        logoText: "Stannah",
    },
    {
        slug: "construct-lifts-safety",
        title: "How Construct Lifts cut corrective action closure time by 40%",
        excerpt: "Discover how real-time NCR tracking transformed their ISO 45001 programme.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop&q=80",
        logoText: "Construct",
    },
];
