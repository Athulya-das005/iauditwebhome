"use client";

import Image from "next/image";

export default function HeroDashboard1() {
    return (
        <Image
            src="/scrollstack/hero-dashboard-1.png"
            alt="iAudit Global dashboard showing audit overview, finding distribution, and assessment scores"
            width={1920}
            height={1080}
            quality={100}
            sizes="(max-width: 980px) 100vw, 980px"
            style={{
                width: "100%",
                height: "auto",
                display: "block",
            }}
            priority
        />
    );
}
