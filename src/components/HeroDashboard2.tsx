"use client";

import Image from "next/image";

export default function HeroDashboard2() {
    return (
        <Image
            src="/scrollstack/hero-dashboard-2.png"
            alt="iAudit Global users page for managing system users, roles, and access status"
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
