/** Short overview copy for the industries directory "Smarter ISO Audits" section */
export const industriesOverviewOrder = [
    "01", // Retail
    "03", // Construction
    "04", // Manufacturing
    "05", // Healthcare
    "06", // Food & Beverage
    "07", // Hospitality
    "08", // Facilities Management
    "09", // Health & Safety
    "10", // Mining
    "11", // Pharmaceutical
    "12", // Aerospace
    "13", // Basic Metal & Fabrication
    "14", // Machinery & Equipment
    "15", // Electrical & Optical Equipment
    "16", // Engineering Services
    "02", // Transport & Logistics
] as const;

export type MasonryLayout = "image-top" | "image-middle" | "text-only";
export type ImageHeight = "short" | "medium" | "tall";

export const industriesOverviewCopy: Record<
    string,
    { title?: string; description: string; layout: MasonryLayout; imageHeight?: ImageHeight; featured?: boolean; isoLabel?: string }
> = {
    "01": {
        layout: "image-top",
        imageHeight: "tall",
        featured: true,
        description:
            "Manage ISO 9001, 14001 and 45001 audits across stores, warehouses and supply chains with a structured platform built for scale and consistency.",
    },
    "03": {
        layout: "text-only",
        description:
            "Replace spreadsheets with structured audit management for ISO 9001, 14001 and 45001 across active projects and sites.",
    },
    "04": {
        layout: "image-middle",
        imageHeight: "medium",
        description:
            "Manage high-volume production, supplier risks and environmental compliance across multiple sites with a unified ISO audit platform.",
    },
    "05": {
        layout: "image-top",
        imageHeight: "medium",
        description:
            "Support clinical, operational and governance teams with structured ISO audits designed to improve compliance and patient safety outcomes.",
    },
    "06": {
        layout: "text-only",
        description:
            "Run ISO audits across production plants and distribution centres with consistent workflows focused on quality, safety and compliance.",
    },
    "07": {
        layout: "image-top",
        imageHeight: "short",
        description:
            "Standardise audits across multiple locations with real-time visibility and central control over compliance processes.",
    },
    "08": {
        layout: "image-middle",
        imageHeight: "short",
        description:
            "Manage building services, maintenance requirements and ISO standards across your entire estate with one structured system.",
    },
    "09": {
        layout: "text-only",
        isoLabel: "ISO 45001",
        description:
            "Focused on ISO 45001, enabling teams to track hazards, verify controls and ensure corrective actions are properly closed.",
    },
    "10": {
        layout: "image-top",
        imageHeight: "tall",
        description:
            "Manage remote operations, workforce safety and critical infrastructure compliance with structured audit and risk management workflows.",
    },
    "11": {
        layout: "image-middle",
        imageHeight: "medium",
        description:
            "Ensure data integrity, sterile production standards and regulatory compliance within a secure, auditor-built audit management environment.",
    },
    "12": {
        layout: "text-only",
        isoLabel: "ISO 9001 · AS9100",
        description:
            "Maintain strict quality control, safety compliance and adherence to standards such as AS9100 across all manufacturing stages.",
    },
    "13": {
        layout: "image-top",
        imageHeight: "medium",
        description:
            "Track material traceability, manage welding standards and monitor high-risk safety controls with a centralised audit system.",
    },
    "14": {
        layout: "image-top",
        imageHeight: "tall",
        description:
            "Ensure ISO compliance, safety and quality tracking across heavy machinery production and engineering environments.",
    },
    "15": {
        layout: "image-middle",
        imageHeight: "tall",
        featured: true,
        description:
            "Maintain calibration accuracy, quality control and safety compliance in high-precision manufacturing processes.",
    },
    "16": {
        title: "Engineering Services",
        layout: "image-top",
        imageHeight: "short",
        description:
            "Audit complex project lifecycles, structural standards and contractual compliance with a structured, process-driven approach.",
    },
    "02": {
        title: "Transport & Logistics",
        layout: "image-middle",
        imageHeight: "medium",
        description:
            "Manage ISO 9001, 14001 and 45001 audits across fleets, warehouses and distribution networks with a structured platform built for consistency and traceability.",
    },
};
