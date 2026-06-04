import type { CSSProperties } from "react";

/** Site-wide brand font (matches globals.css --font-family) */
export const PP_NEUE_MONTREAL = '"Pp Neue Montreal", sans-serif';

/** Typography scale aligned with home Hero and site sections */
export const comparisonType = {
    heroH1: (isMobile: boolean): CSSProperties => ({
        fontSize: isMobile ? "2.4rem" : "clamp(2.3rem, 4.5vw, 3.5rem)",
        fontWeight: 500,
        lineHeight: isMobile ? 1.2 : 1.1,
        letterSpacing: "-0.03em",
        fontFamily: PP_NEUE_MONTREAL,
        color: "#0d1117",
    }),
    heroLead: (isMobile: boolean): CSSProperties => ({
        fontSize: isMobile ? "0.95rem" : "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
        fontFamily: PP_NEUE_MONTREAL,
        color: "#6b7280",
    }),
    sectionH2: (isMobile: boolean): CSSProperties => ({
        fontSize: isMobile ? "1.85rem" : "2.4rem",
        fontWeight: 500,
        fontFamily: PP_NEUE_MONTREAL,
        color: "#0d1117",
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
    }),
    cardH2: (isMobile: boolean): CSSProperties => ({
        fontSize: isMobile ? "1.35rem" : "1.55rem",
        fontWeight: 500,
        fontFamily: PP_NEUE_MONTREAL,
        color: "#0d1117",
        letterSpacing: "-0.02em",
        lineHeight: 1.25,
    }),
    body: (): CSSProperties => ({
        fontSize: "1rem",
        fontWeight: 400,
        fontFamily: PP_NEUE_MONTREAL,
        color: "#4b5563",
        lineHeight: 1.7,
    }),
    bodyLarge: (isMobile: boolean): CSSProperties => ({
        fontSize: isMobile ? "1.05rem" : "1.15rem",
        fontWeight: 400,
        fontFamily: PP_NEUE_MONTREAL,
        color: "#374151",
        lineHeight: 1.75,
    }),
    caption: (isMobile: boolean): CSSProperties => ({
        fontSize: isMobile ? "0.85rem" : "0.95rem",
        fontWeight: 500,
        fontFamily: PP_NEUE_MONTREAL,
        color: "#6b7280",
        letterSpacing: "0.01em",
    }),
    ctaButton: (): CSSProperties => ({
        fontFamily: PP_NEUE_MONTREAL,
        fontWeight: 600,
        fontSize: "0.925rem",
        letterSpacing: "0.01em",
    }),
    tableCell: (isMobile: boolean): CSSProperties => ({
        fontSize: isMobile ? "0.88rem" : "0.95rem",
        fontWeight: 400,
        fontFamily: PP_NEUE_MONTREAL,
        lineHeight: 1.6,
    }),
    stepH3: (): CSSProperties => ({
        fontSize: "1.2rem",
        fontWeight: 500,
        fontFamily: PP_NEUE_MONTREAL,
        lineHeight: 1.25,
    }),
    stepBody: (): CSSProperties => ({
        fontSize: "0.95rem",
        fontWeight: 400,
        fontFamily: PP_NEUE_MONTREAL,
        lineHeight: 1.65,
    }),
};
