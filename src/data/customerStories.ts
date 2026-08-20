export type StoryCardType = "quote" | "metric" | "cta-quote";

/** Visual layout inspired by Synthesia’s mixed masonry cards */
export type StoryCardLayout =
    | "quote-bleed" // full-bleed photo + quote overlay (Moody’s style)
    | "split-metric" // image+metric top, white title bottom (Carlsberg/SAP style)
    | "metric-portrait" // dark metric + portrait (ERGO style)
    | "image-logo"; // full-bleed photo + logo only (YoungLife style)

export type CustomerStoryCard = {
    id: string;
    type: StoryCardType;
    company: string;
    industry: string;
    standards: string[];
    image: string;
    layout?: StoryCardLayout;
    /** Grid span on desktop: narrow ~4–5, mid ~6, wide ~7–8 */
    span?: "narrow" | "mid" | "wide";
    href?: string;
    quote?: string;
    name?: string;
    role?: string;
    metric?: string;
    statDescription?: string;
    title?: string;
    summary?: string;
};

export const storyIndustries = [
    "All industries",
    "Manufacturing",
    "Engineering",
    "Food & Beverage",
    "Infrastructure",
    "Hospitality",
    "Retail",
] as const;

export const storyStandards = [
    "All standards",
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
] as const;

export const customerStoryCards: CustomerStoryCard[] = [
    {
        id: "apex-engineering",
        type: "quote",
        layout: "quote-bleed",
        span: "wide",
        company: "Apex Engineering",
        industry: "Manufacturing",
        standards: ["ISO 9001", "ISO 14001"],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&h=1600&fit=crop&q=85&fm=webp",
        href: "/case-studies",
        quote:
            "Our audit history belongs to the company now, not just an individual. We pull up evidence in seconds.",
        name: "DAVID HARRISON",
        role: "Quality & Compliance Manager",
    },
    {
        id: "meridian-infrastructure",
        type: "metric",
        layout: "split-metric",
        span: "narrow",
        company: "Meridian Infrastructure",
        industry: "Infrastructure",
        standards: ["ISO 45001", "ISO 9001"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=900&fit=crop&q=85&fm=webp",
        metric: "70%",
        statDescription: "FASTER REPORT GENERATION",
        title: "How Meridian Infrastructure unified safety audits across 12 project sites",
        summary: "Centralised multi-site safety audits with shared evidence and faster reporting.",
    },
    {
        id: "grandview-hotels",
        type: "metric",
        layout: "metric-portrait",
        span: "mid",
        company: "Grandview Hotels & Resorts",
        industry: "Hospitality",
        standards: ["ISO 14001", "ISO 9001"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=1400&fit=crop&q=85&fm=webp",
        metric: "40%",
        statDescription: "REDUCTION IN REPEAT NONCONFORMITIES",
        title: "How Grandview Hotels standardised brand and environmental audits across 15 properties",
        summary:
            "See how this hospitality group unified housekeeping inspections and ISO 14001 waste tracking.",
    },
    {
        id: "urban-retail",
        type: "quote",
        layout: "quote-bleed",
        span: "mid",
        company: "Urban Retail Group",
        industry: "Retail",
        standards: ["ISO 9001", "ISO 14001"],
        image: "https://images.unsplash.com/photo-1573497019940-1cfe4cfcdeba?w=1400&h=1600&fit=crop&q=85&fm=webp",
        quote:
            "We used to hunt through site-specific spreadsheets for weeks. Now we have total visibility of our audit history across every store.",
        name: "SARAH JENKINS",
        role: "Group Compliance Director",
    },
    {
        id: "buildcore",
        type: "metric",
        layout: "split-metric",
        span: "narrow",
        company: "BuildCore Civil Engineering",
        industry: "Engineering",
        standards: ["ISO 45001", "ISO 9001"],
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=900&fit=crop&q=85&fm=webp",
        metric: "5x",
        statDescription: "FASTER SITE INSPECTION REPORTING",
        title: "How BuildCore moved from paper site walks to real-time digital evidence capture",
        summary: "Learn how this engineering firm cut administrative lag and improved site safety visibility.",
    },
    {
        id: "sterling-fb",
        type: "quote",
        layout: "quote-bleed",
        span: "wide",
        company: "Sterling Food & Beverage",
        industry: "Food & Beverage",
        standards: ["ISO 9001", "ISO 14001", "ISO 45001"],
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1400&h=1600&fit=crop&q=85&fm=webp",
        quote:
            "iAudit has finally closed the gap between our audit findings and our corrective actions. Accountability is now part of the process.",
        name: "MARK THOMPSON",
        role: "Head of Quality Assurance",
    },
    {
        id: "david-harrison-cta",
        type: "cta-quote",
        company: "Apex Engineering",
        industry: "Manufacturing",
        standards: ["ISO 9001", "ISO 14001"],
        image: "",
        quote:
            "If you're considering moving beyond spreadsheets, don't wait for the next audit cycle. Get started.",
        name: "David Harrison",
        role: "Quality & Compliance Manager",
        href: "https://apps.iaudit.global",
    },
];
