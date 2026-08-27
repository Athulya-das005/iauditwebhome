import type { CSSProperties, ReactNode } from "react";

/** Shared colours for Gap Analysis findings — Comply / OFI / NC */
export const FINDING_COLORS = {
    comply: "#16a34a",
    ofi: "#ea580c",
    nc: "#dc2626",
} as const;

export type FindingKey = keyof typeof FINDING_COLORS;

export function findingColor(key: FindingKey | "COMPLY" | "OFI" | "NC" | "Comply") {
    const value = key.toLowerCase();
    if (value === "comply") return FINDING_COLORS.comply;
    if (value === "ofi") return FINDING_COLORS.ofi;
    if (value === "nc") return FINDING_COLORS.nc;
    return "#374151";
}

/** Colourise Comply / OFI / NC tokens inside plain text (keeps other words unchanged). */
export function colorizeFindingLabels(text: string): ReactNode {
    const parts = text.split(/(☑\s*Comply|⭕\s*OFI|✕\s*NC|\bCOMPLY\b|\bComply\b|\bOFI\b|\bNC\b)/g);
    return parts.map((part, index) => {
        if (!part) return null;
        if (/^(☑\s*)?Comply$/i.test(part) || part === "COMPLY") {
            return (
                <span key={index} style={{ color: FINDING_COLORS.comply, fontWeight: 700 }}>
                    {part}
                </span>
            );
        }
        if (/^(⭕\s*)?OFI$/i.test(part)) {
            return (
                <span key={index} style={{ color: FINDING_COLORS.ofi, fontWeight: 700 }}>
                    {part}
                </span>
            );
        }
        if (/^(✕\s*)?NC$/i.test(part)) {
            return (
                <span key={index} style={{ color: FINDING_COLORS.nc, fontWeight: 700 }}>
                    {part}
                </span>
            );
        }
        return <span key={index}>{part}</span>;
    });
}

export function findingLabelStyle(key: FindingKey): CSSProperties {
    return { color: FINDING_COLORS[key], fontWeight: 700 };
}
