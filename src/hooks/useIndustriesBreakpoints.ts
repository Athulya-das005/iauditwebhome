"use client";

import { useState, useEffect } from "react";

/** Shared breakpoints for industries page sections */
export function useIndustriesBreakpoints() {
    const [width, setWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 1024
    );

    useEffect(() => {
        const update = () => setWidth(window.innerWidth);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return {
        width,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        /** Stack two-column section layouts (challenges, etc.) */
        isStacked: width < 1024,
    };
}
