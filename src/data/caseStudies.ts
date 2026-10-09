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
    href?: string;
};

export type CaseStudyData = {
    slug: string;
    breadcrumb: string;
    title: string;
    insightsFrom: {
        name: string;
        role: string;
        avatar: string;
    };
    useCases: string[];
    departments: string[];
    company: {
        name: string;
        logoText: string;
        description: string;
        tags: string[];
    };
    keyResults: CaseStudyMetric[];
    summaryParagraph?: string;
    challenge: {
        heading: string;
        intro: string;
        points: { num: string; title: string; text: string }[];
        quote: { text: string; author: string; role: string };
        image: string;
    };
    solution: {
        heading: string;
        intro: string;
        highlights: { num: string; title: string; text: string }[];
        image: string;
    };
    results: {
        heading: string;
        intro: string;
        points: { num: string; title: string; text: string }[];
        quote: { text: string; author: string; role: string };
    };
};

export const apexCaseStudy: CaseStudyData = {
    slug: "apex-engineering",
    breadcrumb: "Apex Engineering & Fabrication",
    title: "How iAudit helped Apex Engineering secure 100% audit history continuity across three sites",
    insightsFrom: {
        name: "Mathew Chiweda",
        role: "Quality & Compliance Manager",
        avatar: "/images/mathew-chiweda.webp",
    },
    useCases: ["ISO 9001 & 14001 Internal Audits"],
    departments: ["Operations & Quality Assurance"],
    summaryParagraph:
        "Apex Engineering unified ISO 9001 and ISO 14001 audits across three production sites with iAudit Global — protecting audit history, accelerating reporting, and giving leadership real-time visibility of corrective actions.",
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
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=640&fit=crop&q=80&fm=webp",
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
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=640&fit=crop&q=80&fm=webp",
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

export const meridianCaseStudy: CaseStudyData = {
    slug: "meridian-infrastructure",
    breadcrumb: "Meridian Infrastructure",
    title: "Meridian Infrastructure: 70 per cent faster safety report generation across 12 project sites",
    insightsFrom: {
        name: "Marcus Vance",
        role: "Head of Health & Safety",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80&fm=webp",
    },
    useCases: ["ISO 45001 Safety Audits", "Mobile Evidence Capture"],
    departments: ["Health, Safety & Environment (HSE)", "Site Operations"],
    company: {
        name: "Meridian Infrastructure",
        logoText: "meridian",
        description:
            "Meridian Infrastructure is a main contractor managing 12 active project sites. Specialising in civil engineering and commercial construction, they required a centralised digital system to standardise ISO 45001 safety audits, eliminate paper logs, and protect their workforce with real-time risk visibility.",
        tags: ["Main Contractor: 12 Sites", "Civil & Construction", "United Kingdom"],
    },
    keyResults: [
        { value: "12 Sites", label: "unified under one safety programme" },
        { value: "70%", label: "reduction in report generation time" },
        { value: "55%", label: "faster closure of safety non-conformities" },
        { value: "0", label: "manual spreadsheets required for safety tracking" },
    ],
    summaryParagraph:
        "Meridian Infrastructure is a main contractor managing 12 active sites. Like many firms in the construction sector, they struggled to maintain a consistent safety audit programme while relying on manual spreadsheets and paper records. This case study demonstrates how moving to a digital platform unified their safety oversight and removed the administrative reporting bottleneck.",
    challenge: {
        heading: "The Challenge: Fragmented Safety Data and Slow Feedback Loops Across 12 Project Sites",
        intro: `Before adopting iAudit Global, Meridian relied on site managers capturing safety observations on paper and emailing photos separately to the central office. This led to several operational bottlenecks that compromised site safety and compliance tracking:`,
        points: [
            {
                num: "01",
                title: "Reporting Bottlenecks",
                text: "Safety managers spent approximately five hours writing a single report after a two hour site audit.",
            },
            {
                num: "02",
                title: "Lack of Visibility",
                text: "The head of safety could not see real time trends across all 12 sites, making it difficult to spot recurring hazards early.",
            },
            {
                num: "03",
                title: "Delayed Actions",
                text: "High risk findings often sat in email inboxes for days before being assigned as corrective actions.",
            },
            {
                num: "04",
                title: "Inconsistent Evidence",
                text: "Photo evidence was often poor quality and not linked to specific safety controls.",
            },
        ],
        quote: {
            text: "We were spending more time consolidating spreadsheets and chasing photos than actually managing safety risks on site. Chasing paper logs across 12 projects was unsustainable.",
            author: "Marcus Vance",
            role: "Head of Health & Safety",
        },
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    solution: {
        heading: "The Solution: Centralised ISO 45001 Safety Audits with Mobile Evidence Capture",
        intro: `Meridian replaced their manual logs with iAudit Global. They focused on three areas of the PDCA cycle to improve their results across all 12 active construction sites:`,
        highlights: [
            {
                num: "01",
                title: "Mobile Site Audits",
                text: "Auditors stopped using clipboards. They used the iAudit mobile app to conduct safety walks. This allowed them to capture photos of site conditions and link them directly to ISO 45001 safety controls in real time.",
            },
            {
                num: "02",
                title: "Automated Report Generation",
                text: "The manual process of re-typing notes and formatting documents was removed. iAudit generated professional safety reports the moment the auditor finished the site walk.",
            },
            {
                num: "03",
                title: "Closed Loop Accountability",
                text: "Non-conformities were assigned to site supervisors immediately. The central safety team tracked the progress of every finding across all 12 sites from a single dashboard.",
            },
        ],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=640&fit=crop&q=85&fm=webp",
    },
    results: {
        heading: "The Results: 70 Per Cent Reduction in Administrative Time and Proactive Project Control",
        intro: `By digitalising their safety audits, Meridian Infrastructure moved from reactive reporting to proactive project control across their entire project portfolio:`,
        points: [
            {
                num: "01",
                title: "70 per cent faster reporting",
                text: "The time taken to produce a final audit report dropped from five hours to less than 45 minutes.",
            },
            {
                num: "02",
                title: "100 per cent audit visibility",
                text: "The leadership team gained a real time view of safety performance across every active site.",
            },
            {
                num: "03",
                title: "Faster risk mitigation",
                text: "The time taken to close out high risk safety findings improved by 55 per cent.",
            },
            {
                num: "04",
                title: "Audit consistency",
                text: "All 12 sites now follow the same structured safety checklists.",
            },
        ],
        quote: {
            text: "iAudit Global removed the paperwork barrier. We no longer spend days writing reports. We spend our time on site where the safety risks actually are. The 70 per cent time saving on admin has allowed our safety team to be 100 per cent more present on our projects.",
            author: "Marcus Vance",
            role: "Head of Health & Safety, Meridian Infrastructure",
        },
    },
};

export const grandviewCaseStudy: CaseStudyData = {
    slug: "grandview-hotels",
    breadcrumb: "Grandview Hotels & Resorts",
    title: "Grandview Hotels & Resorts: 40 per cent reduction in repeat nonconformities across 15 properties",
    insightsFrom: {
        name: "Group Operations Director",
        role: "Grandview Hotels & Resorts",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80&fm=webp",
    },
    useCases: ["Brand Standards & Housekeeping", "ISO 14001 Waste Tracking"],
    departments: ["Group Operations", "Housekeeping & Facilities"],
    company: {
        name: "Grandview Hotels & Resorts",
        logoText: "grandview",
        description:
            "Grandview Hotels & Resorts operates 15 luxury properties. Maintaining consistent brand standards and environmental compliance across multiple locations was a significant challenge while using different manual systems.",
        tags: ["Luxury Hospitality: 15 Properties", "Hotels & Resorts", "United Kingdom"],
    },
    keyResults: [
        { value: "15 Properties", label: "unified under one quality programme" },
        { value: "40%", label: "reduction in repeat audit findings" },
        { value: "60%", label: "improvement in corrective action closure speed" },
        { value: "100%", label: "digital traceability for ISO 14001 waste management" },
    ],
    summaryParagraph:
        "Grandview Hotels & Resorts operates 15 luxury properties. Maintaining consistent brand standards and environmental compliance across multiple locations was a significant challenge while using different manual systems. This case study shows how the group standardised their audit programme to improve housekeeping quality and ISO 14001 waste management tracking.",
    challenge: {
        heading: "The Challenge: Inconsistent Brand Standards and Recurring Environmental Gaps",
        intro: `Before implementing iAudit Global, each of the 15 hotels managed its own inspections. This fragmented approach led to several operational issues:`,
        points: [
            {
                num: "01",
                title: "Brand Inconsistency",
                text: "Housekeeping standards varied between properties because there was no unified inspection checklist.",
            },
            {
                num: "02",
                title: "Repeat Findings",
                text: "Maintenance issues and safety gaps were identified but often not fixed. The same nonconformities appeared in every audit cycle.",
            },
            {
                num: "03",
                title: "Manual Waste Tracking",
                text: "ISO 14001 data for energy and waste was recorded on paper, making it impossible for the group to track environmental performance accurately.",
            },
            {
                num: "04",
                title: "Delayed Oversight",
                text: "The head office received audit results weeks late, meaning they could not react to declining standards in real time.",
            },
        ],
        quote: {
            text: "Managing inspections on paper meant issues were documented but rarely resolved. By the time head office saw the reports, weeks had passed and the same guest-facing defects had recurred.",
            author: "Group Operations Director",
            role: "Grandview Hotels & Resorts",
        },
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    solution: {
        heading: "The Solution: Standardised Hospitality Audit Programme with Centralised PDCA Tracking",
        intro: `Grandview Hotels moved all 15 properties onto the iAudit Global platform to create a single, group-wide quality and environmental management system.`,
        highlights: [
            {
                num: "01",
                title: "Unified Housekeeping Inspections",
                text: "The group created one master housekeeping checklist for all properties. Supervisors used mobile devices to conduct room inspections, attaching photos of defects or standard deviations directly to the audit questions.",
            },
            {
                num: "02",
                title: "ISO 14001 Digital Workflows",
                text: "Paper waste logs were replaced with digital evidence capture. Maintenance teams recorded waste segregation and energy data directly into iAudit, providing a live digital thread of environmental compliance for the entire group.",
            },
            {
                num: "03",
                title: "Closed Loop Nonconformity Tracking",
                text: "Every issue found during an inspection was automatically logged in the nonconformity register. Corrective actions were assigned to department heads with strict deadlines, ensuring that problems were fixed, not just documented.",
            },
        ],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    results: {
        heading: "The Results: 40 Per Cent Fewer Recurring Quality and Environmental Issues",
        intro: `By centralising their audit data and enforcing accountability, Grandview Hotels significantly improved their operational performance:`,
        points: [
            {
                num: "01",
                title: "40 per cent reduction in repeat nonconformities",
                text: "The closed loop tracking system ensured that once a problem was found, the root cause was addressed.",
            },
            {
                num: "02",
                title: "100 per cent brand alignment",
                text: "Standardised checklists ensured every hotel in the group followed the exact same housekeeping and service protocols.",
            },
            {
                num: "03",
                title: "Real time environmental oversight",
                text: "The group head office gained instant visibility of waste and energy performance across all 15 sites.",
            },
            {
                num: "04",
                title: "Faster reporting cycles",
                text: "Management reports that previously took days to compile were generated instantly upon audit completion.",
            },
        ],
        quote: {
            text: "iAudit Global gave us the visibility we were missing. We can now see exactly which properties are struggling and why. The 40 per cent drop in repeat issues proves that our teams are finally fixing problems rather than just ticking boxes on a page. Our brand standards have never been more consistent.",
            author: "Group Operations Director",
            role: "Grandview Hotels & Resorts",
        },
    },
};

export const urbanRetailCaseStudy: CaseStudyData = {
    slug: "urban-retail",
    breadcrumb: "Urban Retail Group",
    title: "Urban Retail Group: Total visibility of audit history across every store",
    insightsFrom: {
        name: "Sarah Jenkins",
        role: "Group Compliance Director",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80&fm=webp",
    },
    useCases: ["ISO 9001 & ISO 45001 Audits", "Retail & Distribution Oversight"],
    departments: ["Compliance & Quality", "Retail Operations"],
    company: {
        name: "Urban Retail Group",
        logoText: "urban retail",
        description:
            "Urban Retail Group operates a national network of retail outlets and distribution centres. Managing a consistent ISO 9001 and ISO 45001 audit programme across dispersed locations was a significant administrative burden before moving to iAudit Global.",
        tags: ["National Retail Network", "Retail & Distribution", "United Kingdom"],
    },
    keyResults: [
        { value: "Nationwide", label: "store and warehouse network unified" },
        { value: "90%", label: "reduction in time spent gathering audit data" },
        { value: "100%", label: "visibility of audit history for every location" },
        { value: "45%", label: "faster closure of site safety findings" },
    ],
    summaryParagraph:
        "Urban Retail Group operates a national network of retail outlets and distribution centres. Managing a consistent ISO 9001 and ISO 45001 audit programme across dispersed locations was a significant administrative burden. This case study shows how the group moved from site specific spreadsheets to a centralised digital platform to regain control of their compliance history.",
    challenge: {
        heading: "The Challenge: Information Silos and Lost Audit History Across a Dispersed Store Network",
        intro: `Before adopting iAudit Global, Urban Retail Group lacked a central view of their compliance status. Each store manager maintained their own audit records, leading to several risks:`,
        points: [
            {
                num: "01",
                title: "The Spreadsheet Hunt",
                text: "The central compliance team spent weeks every quarter manually gathering spreadsheets from different stores to prepare for management reviews.",
            },
            {
                num: "02",
                title: "Missing Evidence",
                text: "Findings were often logged without supporting photos or documents, making it difficult to verify if a store was actually compliant.",
            },
            {
                num: "03",
                title: "Loss of Context",
                text: "When a store manager left, their audit history and local spreadsheets often disappeared, leaving the organisation with significant data gaps.",
            },
            {
                num: "04",
                title: "Ineffective Follow-up",
                text: "There was no central way to track if a safety finding in one store had been addressed or if the same risk existed in other locations.",
            },
        ],
        quote: {
            text: "We used to hunt through site specific spreadsheets for weeks. Now we have total visibility of our audit history across every store. iAudit Global has turned our compliance data from a hidden burden into a strategic asset. We finally know exactly where we stand.",
            author: "Sarah Jenkins",
            role: "Group Compliance Director, Urban Retail Group",
        },
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    solution: {
        heading: "The Solution: A Unified Digital Command Centre for Retail Compliance",
        intro: `Urban Retail Group replaced their scattered spreadsheets with the iAudit Global platform to provide one single source of truth for the entire organisation.`,
        highlights: [
            {
                num: "01",
                title: "Centralised Audit Programme",
                text: "The compliance director now schedules and assigns audits for every store from a central dashboard. Store managers receive notifications and conduct audits using standardised mobile checklists, ensuring consistency across the country.",
            },
            {
                num: "02",
                title: "Instant Evidence Capture",
                text: "Auditors use their phones to take photos of store conditions, fire exits and warehouse racking during the audit. These images are automatically linked to the specific audit question, providing an immutable record of evidence.",
            },
            {
                num: "03",
                title: "Real Time Performance Dashboards",
                text: "All audit data flows into a central reporting suite. The leadership team can see compliance scores, open nonconformities and audit trends for every store at a glance, without needing to request a single file.",
            },
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    results: {
        heading: "The Results: 100 Per Cent Visibility and Significantly Faster Management Reviews",
        intro: `By centralising their audit records, Urban Retail Group transformed their compliance culture from reactive to proactive:`,
        points: [
            {
                num: "01",
                title: "90 per cent faster data aggregation",
                text: "The weeks spent hunting for spreadsheets were eliminated. Management reports are now generated in minutes.",
            },
            {
                num: "02",
                title: "Total audit traceability",
                text: "Every store now has a complete, searchable digital history of every audit, finding and corrective action.",
            },
            {
                num: "03",
                title: "Improved safety accountability",
                text: "The speed of closing safety related nonconformities improved by 45 per cent across the group.",
            },
            {
                num: "04",
                title: "Reduced certification risk",
                text: "The organisation can now prove a consistent audit trail to external certification bodies with confidence.",
            },
        ],
        quote: {
            text: "We used to hunt through site specific spreadsheets for weeks. Now we have total visibility of our audit history across every store. iAudit Global has turned our compliance data from a hidden burden into a strategic asset. We finally know exactly where we stand.",
            author: "Sarah Jenkins",
            role: "Group Compliance Director | Urban Retail Group",
        },
    },
};

export const buildCoreCaseStudy: CaseStudyData = {
    slug: "buildcore",
    breadcrumb: "BuildCore Civil Engineering",
    title: "BuildCore Civil Engineering: 5x faster site inspection reporting with real time evidence capture",
    insightsFrom: {
        name: "Operations Manager",
        role: "Operations Manager",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80&fm=webp",
    },
    useCases: ["Site Safety & Quality Inspections", "Civil Infrastructure Oversight"],
    departments: ["Operations & Site Safety", "Civil Engineering"],
    company: {
        name: "BuildCore Civil Engineering",
        logoText: "BUILDCORE",
        description:
            "BuildCore Civil Engineering manages large scale infrastructure and civil works. Their site safety and quality inspections were traditionally recorded on paper before adopting iAudit Global.",
        tags: ["Civil Engineering", "Infrastructure Projects", "Site Safety"],
    },
    keyResults: [
        { value: "5x", label: "Increase in reporting speed" },
        { value: "80%", label: "Reduction in administrative documentation time" },
        { value: "60%", label: "Improvement in time to close high risk findings" },
        { value: "100%", label: "Real time visibility for project directors" },
    ],
    summaryParagraph:
        "BuildCore Civil Engineering manages large scale infrastructure and civil works. Their site safety and quality inspections were traditionally recorded on paper. This led to significant administrative lag and delayed reporting. This case study shows how BuildCore moved to digital evidence capture to improve site visibility and accelerate their reporting cycle.",
    challenge: {
        heading: "The Challenge: Administrative Lag and Disconnected Site Data",
        intro: `Before adopting iAudit Global, BuildCore engineers conducted site walks with notebooks and digital cameras. The process was slow and created several bottlenecks:`,
        points: [
            {
                num: "01",
                title: "The Reporting Gap",
                text: "For every two hour site inspection, engineers spent an additional five hours re-typing notes and formatting photos into a report.",
            },
            {
                num: "02",
                title: "Delayed Safety Visibility",
                text: "Critical safety findings often remained in paper notebooks for several days before being formally logged.",
            },
            {
                num: "03",
                title: "Traceability Issues",
                text: "It was difficult to link specific photos to exact locations or ISO clauses once the engineer had returned to the office.",
            },
            {
                num: "04",
                title: "Manual Follow-up",
                text: "Corrective actions were tracked via email, meaning many minor quality issues were overlooked or forgotten.",
            },
        ],
        quote: {
            text: "iAudit Global changed the way we work on site. We no longer spend our evenings re-typing notes and fighting with Word documents. Our reports are 5x faster and our safety visibility has never been better. We are finally auditing the work, not just the paperwork.",
            author: "Operations Manager",
            role: "Operations Manager, BuildCore Civil Engineering",
        },
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    solution: {
        heading: "The Solution: Real Time Digital Site Walks with Integrated Photo Capture",
        intro: `BuildCore replaced their paper based system with iAudit Global. They focused on moving the entire reporting process to the point of inspection.`,
        highlights: [
            {
                num: "01",
                title: "Mobile Site Inspections",
                text: "Engineers now use tablets to conduct site walks. As they find an issue, they capture a photo and link it directly to the relevant safety or quality control. The report is built as they walk the site.",
            },
            {
                num: "02",
                title: "Instant Digital Evidence",
                text: "Every photo is time stamped and geo-tagged within the iAudit platform. This provides an immutable digital thread of evidence that is far more robust than manual photo folders.",
            },
            {
                num: "03",
                title: "Live Corrective Action Tracking",
                text: "Nonconformities are raised and assigned to supervisors before the engineer even leaves the site. This removes the days of delay between finding a problem and starting the fix.",
            },
        ],
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    results: {
        heading: "The Results: 5x Faster Reporting and 80 Per Cent Less Admin",
        intro: `By moving to a digital system, BuildCore transformed their site inspection efficiency:`,
        points: [
            {
                num: "01",
                title: "5x faster reporting",
                text: "The time taken to finalise and distribute a site inspection report dropped from five hours to just one hour.",
            },
            {
                num: "02",
                title: "80 per cent reduction in admin",
                text: "Engineers reclaimed four hours of administrative time for every single site walk they performed.",
            },
            {
                num: "03",
                title: "60 per cent faster action closure",
                text: "High risk safety findings are now addressed 60 per cent faster due to immediate notification and tracking.",
            },
            {
                num: "04",
                title: "Total visibility",
                text: "The central management team has a live view of safety and quality performance across all active civil projects.",
            },
        ],
        quote: {
            text: "iAudit Global changed the way we work on site. We no longer spend our evenings re-typing notes and fighting with Word documents. Our reports are 5x faster and our safety visibility has never been better. We are finally auditing the work, not just the paperwork.",
            author: "Operations Manager",
            role: "Operations Manager | BuildCore Civil Engineering",
        },
    },
};

export const sterlingFoodBeverageCaseStudy: CaseStudyData = {
    slug: "sterling-food-beverage",
    breadcrumb: "Sterling Food & Beverage",
    title: "Sterling Food & Beverage: Closing the accountability gap in quality assurance",
    insightsFrom: {
        name: "Mark Thompson",
        role: "Head of Quality Assurance",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80&fm=webp",
    },
    useCases: ["ISO 9001 & Food Safety Protocols", "Corrective Action & PDCA Management"],
    departments: ["Quality Assurance", "Food Production & Operations"],
    company: {
        name: "Sterling Food & Beverage",
        logoText: "STERLING",
        description:
            "Sterling Food & Beverage operates high volume production lines and a complex distribution network. Maintaining ISO 9001 quality standards and food safety protocols requires absolute precision.",
        tags: ["Food & Beverage", "High-Volume Production", "ISO 9001 Quality"],
    },
    keyResults: [
        { value: "50%", label: "Reduction in time to close audit findings" },
        { value: "95%", label: "Rate of corrective actions completed on time" },
        { value: "45%", label: "Decrease in re-occurrence of quality issues" },
        { value: "100%", label: "Evidence based verification for every closed finding" },
    ],
    summaryParagraph:
        "Sterling Food & Beverage operates high volume production lines and a complex distribution network. Maintaining ISO 9001 quality standards and food safety protocols requires absolute precision. This case study shows how the organisation moved from fragmented tracking to a centralised system to ensure every audit finding results in a verified action.",
    challenge: {
        heading: "The Challenge: The Accountability Gap Between Findings and Actions",
        intro: `Before implementing iAudit Global, Sterling identified non-conformities during their internal audits but struggled to ensure they were actually fixed. Their process suffered from several weaknesses:`,
        points: [
            {
                num: "01",
                title: "Disconnected Tracking",
                text: "Audit findings were logged in one document, while corrective actions were managed in separate spreadsheets or via email.",
            },
            {
                num: "02",
                title: "Lack of Ownership",
                text: "It was often unclear who was responsible for closing a finding. Deadlines were frequently missed because there was no central reminder system.",
            },
            {
                num: "03",
                title: "The Verification Problem",
                text: "Actions were often marked as closed without any evidence being provided to prove the root cause had been addressed.",
            },
            {
                num: "04",
                title: "Recurring Issues",
                text: "Because the \"Act\" part of the PDCA cycle was weak, the same hygiene and quality issues appeared in every audit cycle.",
            },
        ],
        quote: {
            text: "iAudit has finally closed the gap between our audit findings and our corrective actions. Accountability is now part of the process. We no longer have to chase people for updates. The system does it for us, and the results are visible to everyone.",
            author: "Mark Thompson",
            role: "Head of Quality Assurance, Sterling Food & Beverage",
        },
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    solution: {
        heading: "The Solution: A Structured PDCA Workflow for Closed Loop Accountability",
        intro: `Sterling adopted iAudit Global to unify their quality management and ensure that every audit finding followed a strict path to verified closure.`,
        highlights: [
            {
                num: "01",
                title: "Centralised Non-Conformity (NC) Register",
                text: "Every finding from an audit is now automatically pushed to a central register. This eliminates the need for manual data entry and ensures that no finding is ever lost or forgotten.",
            },
            {
                num: "02",
                title: "Automated Action Ownership",
                text: "Each corrective action is assigned to a specific owner with a clear deadline. The platform sends automated reminders to the responsible person, ensuring accountability is built into the process from the start.",
            },
            {
                num: "03",
                title: "Mandatory Verification Evidence",
                text: "Owners cannot close an action without attaching evidence. This might be a photo of a repaired machine or a new training record. This ensures that the head of quality can verify the fix before the finding is officially closed.",
            },
        ],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=640&fit=crop&q=80&fm=webp",
    },
    results: {
        heading: "The Results: 50 Per Cent Faster Closure of Corrective Actions",
        intro: `By enforcing accountability through the iAudit platform, Sterling Food & Beverage significantly improved their compliance culture:`,
        points: [
            {
                num: "01",
                title: "50 per cent faster action closure",
                text: "The time taken to resolve audit findings dropped from weeks to just a few days.",
            },
            {
                num: "02",
                title: "95 per cent on-time completion",
                text: "The automated reminder system ensured that nearly all corrective actions were completed by their assigned deadline.",
            },
            {
                num: "03",
                title: "45 per cent reduction in recurring issues",
                text: "By verifying the effectiveness of every fix, the organisation stopped the cycle of repeat findings.",
            },
            {
                num: "04",
                title: "Total management oversight",
                text: "The leadership team now has a live view of all open actions across every production facility.",
            },
        ],
        quote: {
            text: "iAudit has finally closed the gap between our audit findings and our corrective actions. Accountability is now part of the process. We no longer have to chase people for updates. The system does it for us, and the results are visible to everyone.",
            author: "Mark Thompson",
            role: "Head of Quality Assurance | Sterling Food & Beverage",
        },
    },
};

export const moreCaseStudies: CaseStudyCard[] = [
    {
        slug: "apex-engineering",
        title: "How iAudit helped Apex Engineering secure 100% audit history continuity across three sites",
        excerpt: "Learn how a multi-site manufacturer replaced spreadsheets with a unified ISO audit trail.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80&fm=webp",
        logoText: "APEX",
        href: "/case-studies/apex-engineering",
    },
    {
        slug: "meridian-infrastructure",
        title: "Meridian Infrastructure: 70% faster safety report generation across 12 project sites",
        excerpt: "Discover how a main contractor unified ISO 45001 safety audits and eliminated spreadsheets.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&q=80&fm=webp",
        logoText: "MERIDIAN",
        href: "/case-studies/meridian-infrastructure",
    },
    {
        slug: "grandview-hotels",
        title: "How Grandview Hotels standardised brand and environmental audits across 15 properties",
        excerpt: "See how this hospitality group unified housekeeping inspections and ISO 14001 waste tracking.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop&q=80&fm=webp",
        logoText: "GRANDVIEW",
        href: "/case-studies/grandview-hotels",
    },
    {
        slug: "urban-retail",
        title: "Urban Retail Group: Total visibility of audit history across every store",
        excerpt: "Discover how a nationwide retail and warehouse network unified ISO 9001 and ISO 45001 audits.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=500&fit=crop&q=80&fm=webp",
        logoText: "URBAN RETAIL",
        href: "/case-studies/urban-retail",
    },
    {
        slug: "buildcore",
        title: "BuildCore Civil Engineering: 5x faster site inspection reporting with real time evidence capture",
        excerpt: "Learn how this engineering firm replaced paper site walks with digital evidence capture and reduced admin by 80%.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=80&fm=webp",
        logoText: "BUILDCORE",
        href: "/case-studies/buildcore",
    },
    {
        slug: "sterling-food-beverage",
        title: "Sterling Food & Beverage: Closing the accountability gap in quality assurance",
        excerpt: "See how a high-volume food producer closed the gap between audit findings and verified actions with automated PDCA workflows.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop&q=80&fm=webp",
        logoText: "STERLING",
        href: "/case-studies/sterling-food-beverage",
    },
];
