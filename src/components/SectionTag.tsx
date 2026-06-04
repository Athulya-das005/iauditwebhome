"use client";

import type { CSSProperties, ReactNode } from "react";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

export default function SectionTag({
    children,
    isMobile,
    variant = "light",
    style,
}: {
    children: ReactNode;
    isMobile: boolean;
    variant?: "light" | "onDark";
    style?: CSSProperties;
}) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.41rem",
                fontSize: isMobile ? "0.9rem" : "1rem",
                fontWeight: 500,
                fontFamily: PP_NEUE_MONTREAL,
                color: variant === "onDark" ? "#6ee7b7" : "#1a7a5e",
                letterSpacing: "0.015em",
                ...style,
            }}
        >
            <span>✦</span>
            {children}
            <span>✦</span>
        </span>
    );
}
