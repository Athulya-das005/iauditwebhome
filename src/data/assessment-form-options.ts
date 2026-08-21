export const assessmentIndustries = [
    "Aerospace",
    "Basic Metals and Fabrication",
    "Construction",
    "Electrical and Optical Equipment",
    "Engineering",
    "Facilities Management",
    "Food and Beverage",
    "Health and Safety",
    "Healthcare",
    "Hospitality",
    "Machinery and Equipment",
    "Manufacturing",
    "Mining",
    "Pharmaceutical",
    "Retail",
    "Transport and Logistics",
    "Other",
] as const;

export const organisationSizeOptions = [
    "1-10",
    "11-50",
    "51-250",
    "251-500",
    "501-1000",
    "1000+",
] as const;

export const departmentOptions = [
    "Quality",
    "Health & Safety",
    "Environment / Sustainability",
    "Operations",
    "Senior Management",
    "Human Resources",
    "Finance",
    "Procurement / Supply Chain",
    "IT",
    "Facilities",
    "Other",
] as const;

export const yesNoOptions = ["Yes", "No"] as const;

/** Self Assessment — show standard name */
export const isoStandardOptions = [
    { value: "ISO 9001 - Quality Management", label: "ISO 9001 - Quality Management" },
    { value: "ISO 14001 - Environmental Management", label: "ISO 14001 - Environmental Management" },
    { value: "ISO 45001 - Occupational Health & Safety", label: "ISO 45001 - Occupational Health & Safety" },
] as const;

/** Gap Analysis — show standard year */
export const gapIsoStandardOptions = [
    { value: "ISO 9001:2015", label: "ISO 9001:2015" },
    { value: "ISO 14001:2015", label: "ISO 14001:2015" },
    { value: "ISO 45001:2018", label: "ISO 45001:2018" },
] as const;

export type IsoStandardValue =
    | (typeof isoStandardOptions)[number]["value"]
    | (typeof gapIsoStandardOptions)[number]["value"];
