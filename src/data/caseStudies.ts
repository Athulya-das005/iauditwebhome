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
    title: "How iAudit helped Apex Engineering secure 100% audit history continuity across three sites",
    insightsFrom: {
        name: "Mathew Chiweda",
        role: "Quality & Compliance Manager",
        avatar: "/images/mathew-chiweda.png",
    },
    useCases: ["ISO 9001 & 14001 Internal Audits"],
    departments: ["Operations & Quality Assurance"],
    company: {
        name: "Apex Engineering & Fabrication",
        logoText: "apex",
        description:
            "Apex Engineering & Fabrication specialises in precision metalwork for the automotive and aerospace sectors. With three high-volume sites and a complex multi-standard audit programme, they required a structured system to protect their audit trail and ensure findings were never lost during staff transitions.",
        tags: ["SME: 150–250", "Manufacturing", "United Kingdom"],
    },
    keyResults: [
        { value: "5x faster", label: "audit report generation cycles" },
        { value: "100%", label: "visibility of corrective actions across sites" },
        { value: "0", label: "audit records lost during staff transitions" },
    ] as CaseStudyMetric[],
    challenge: {
        heading: "The Challenge: Fragmented ISO 9001 and ISO 14001 Audit Records Across Multiple Manufacturing Sites",
        intro: `David Harrison's team oversees quality and environmental compliance across three manufacturing sites with a combined workforce of 250 people. Their primary responsibility is ensuring the organisation remains audit‑ready for over 20 internal audits annually to maintain their ISO 9001 and ISO 14001 certifications. However, maintaining a consistent audit trail across different locations using manual tools had become a significant operational risk.

To manage these programmes, the team relied on 18 separate Excel trackers and over 200 Word templates stored across various shared folders. While this functioned for a single site, scaling it across the group introduced several critical challenges.`,
        points: [
            {
                num: "01",
                title: "Audit data was siloed",
                text: "Plans, evidence and findings were stored in separate spreadsheets. Consolidating this data from three locations for a single management review often required over 16 hours of manual admin time. This made it impossible to get a real‑time view of compliance status or to compare performance between the three factories.",
            },
            {
                num: "02",
                title: "History was person‑dependent",
                text: "Much of the context behind audit decisions and follow‑up actions was held in individual inboxes. With audit history spanning 5 years, the organisation stood to lose years of institutional knowledge and essential evidence if a key team member moved on.",
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
        heading: "The Solution: Standardising ISO 9001 and ISO 14001 Audits with iAudit Global",
        intro: `By implementing iAudit Global, the team moved their entire audit programme from 18 fragmented spreadsheets into a single, structured platform. They now manage all ISO 9001 and ISO 14001 audits through a shared interface, providing a unified view of every finding and piece of evidence across the group.

David's team utilised Audit Mate, the built-in AI assistant, to generate 12 clause‑specific checklists covering over 80 distinct process controls for shopfloor operations and environmental waste segregation. These standardised templates were pushed to all three factories, ensuring that internal audits were conducted with the same level of rigour, regardless of which auditor was on‑site.`,
        highlights: [
            {
                num: "01",
                title: "Unified audit history",
                text: "Every audit plan, finding and photo of evidence is linked together in a permanent record. This has eliminated the need to hunt through old emails or shared folders, as the entire audit trail, now spanning over 100 completed audits, is searchable and accessible to the whole team.",
            },
            {
                num: "02",
                title: "Automated report generation",
                text: "iAudit Global removes the administrative burden of manually formatting reports. Professional, ISO‑compliant audit reports are now generated instantly upon completion. This has reduced the time spent on post‑audit admin by approximately 4 hours per audit, allowing the team to focus on resolving issues rather than performing data entry.",
            },
            {
                num: "03",
                title: "Real‑time site visibility",
                text: "Leadership can now monitor compliance trends across all three sites through a central dashboard tracking over 50 open corrective actions. They can instantly see which factories have open non‑conformities and monitor the progress of actions through to closure, reducing the time required for management review preparation from 16 hours to less than 30 minutes.",
            },
        ],
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=640&fit=crop&q=80",
    },
    results: {
        heading: "The Results: Improving ISO 9001 and ISO 14001 Audit Efficiency for Apex Engineering",
        intro: `Since centralising their audit programme on iAudit Global, Apex Engineering has achieved a more resilient compliance structure across their manufacturing operations. A review of their first full audit cycle showed significant improvements in both efficiency and data integrity:`,
        points: [
            {
                num: "01",
                title: "Faster reporting cycles",
                text: "The team was able to generate ISO‑compliant audit reports 5x faster than their previous manual process. By removing the administrative lag between completing a shopfloor inspection and issuing findings, the team saved approximately 80 hours of administrative labour in the first year alone.",
            },
            {
                num: "02",
                title: "Full visibility of corrective actions",
                text: "Since tracking non‑conformities (NCRs) through the central dashboard, the organisation has maintained 100% visibility of open actions across all three sites. This transparency contributed to a 40% reduction in the average time taken to close out non‑conformities, ensuring that systemic issues were resolved rather than forgotten.",
            },
            {
                num: "03",
                title: "Predictable external audits",
                text: "During their most recent ISO 9001 recertification, the external auditor was able to navigate the entire five‑year audit history instantly. Having every piece of evidence, plan and follow‑up action linked in a single record removed the friction and stress usually associated with certification visits, resulting in zero findings related to document control or audit evidence.",
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
        title: "How iAudit helped Apex Engineering secure 100% audit history continuity across three sites",
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
