"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import {
    industriesOverviewOrder,
    industriesOverviewCopy,
    type MasonryLayout,
    type ImageHeight,
} from "@/data/industriesOverview";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";
import "./IndustriesSmarterSection.css";

const industryMap = Object.fromEntries(industries.map((i) => [i.id, i]));

const DEFAULT_ISO = "ISO 9001 · 14001 · 45001";

const orderedIndustries = industriesOverviewOrder.map((id) => {
    const base = industryMap[id];
    const copy = industriesOverviewCopy[id];
    return {
        ...base,
        title: copy?.title ?? base.title,
        overviewDescription: copy?.description ?? base.description,
        layout: copy?.layout ?? "image-top",
        imageHeight: copy?.imageHeight ?? "medium",
        featured: copy?.featured ?? false,
        isoLabel: copy?.isoLabel ?? DEFAULT_ISO,
    };
});

function CardImage({
    src,
    alt,
    height,
    featured,
}: {
    src?: string;
    alt: string;
    height: ImageHeight;
    featured?: boolean;
}) {
    if (!src) return null;

    return (
        <div className={`industries-masonry-card-image industries-masonry-card-image--${height}`}>
            {featured && <span className="industries-masonry-card-ribbon" aria-hidden />}
            <Image src={src} alt={alt} fill sizes="(max-width: 600px) 100vw, 20vw" style={{ objectFit: "cover" }} />
        </div>
    );
}

function MasonryCardContent({
    industry,
    layout,
}: {
    industry: (typeof orderedIndustries)[number];
    layout: MasonryLayout;
}) {
    const meta = (
        <span className="industries-masonry-card-meta" style={{ fontFamily: PP_NEUE_MONTREAL }}>
            {industry.isoLabel}
        </span>
    );

    const title = (
        <h3 className="industries-masonry-card-title" style={{ fontFamily: PP_NEUE_MONTREAL }}>
            {industry.title}
        </h3>
    );

    const desc = (
        <p className="industries-masonry-card-desc" style={{ fontFamily: PP_NEUE_MONTREAL }}>
            {industry.overviewDescription}
        </p>
    );

    const footer = (
        <div className="industries-masonry-card-footer">
            <span className="industries-masonry-card-author" style={{ fontFamily: PP_NEUE_MONTREAL }}>
                View industry page
            </span>
            <div className="industries-masonry-card-icons" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
            </div>
        </div>
    );

    if (layout === "image-middle") {
        return (
            <div className="industries-masonry-card-body">
                {meta}
                {title}
                <CardImage
                    src={industry.bgImage}
                    alt={`${industry.title} industry for ISO audit management software`}
                    height={industry.imageHeight}
                    featured={industry.featured}
                />
                {desc}
                {footer}
            </div>
        );
    }

    return (
        <div className="industries-masonry-card-body">
            {meta}
            {title}
            {desc}
            {footer}
        </div>
    );
}

export default function IndustriesSmarterSection() {
    const { isMobile } = useIndustriesBreakpoints();

    return (
        <section
            style={{
                background: `
                    radial-gradient(ellipse 60% 50% at 20% 0%, rgba(5,140,66,0.12) 0%, transparent 70%),
                    radial-gradient(ellipse 60% 50% at 80% 100%, rgba(0,77,64,0.10) 0%, transparent 70%),
                    #f0fdf7
                `,
                padding: isMobile ? "3rem 0 0" : "5rem 0 0",
                fontFamily: PP_NEUE_MONTREAL,
                borderTop: "1px solid #dcfce7",
            }}
        >
            <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        textAlign: "center",
                        marginBottom: isMobile ? "2rem" : "2.5rem",
                    }}
                >
                    <h2
                        style={{
                            ...aboutType.sectionH2(),
                            margin: 0,
                            maxWidth: "820px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Smarter ISO Audits for{" "}
                        <span style={{ color: "#058c42" }}>Your Industry</span>
                    </h2>
                    <p
                        style={{
                            ...aboutType.sectionLeadCenter(),
                            marginTop: "1rem",
                            maxWidth: "560px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Helping organisations across sectors standardise audits, strengthen compliance and drive continual improvement.
                    </p>
                </motion.div>
            </div>

            <div className="industries-masonry-band">
                <div className="industries-masonry-band-inner">
                    <div className="industries-masonry">
                        {orderedIndustries.map((industry, idx) => (
                            <motion.div
                                key={industry.id}
                                className="industries-masonry-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{
                                    duration: 0.45,
                                    delay: (idx % 5) * 0.06,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                <Link
                                    href={`/industries/${industry.slug}`}
                                    className={`industries-masonry-card${industry.featured ? " is-featured" : ""}`}
                                    style={{ fontFamily: PP_NEUE_MONTREAL }}
                                >
                                    {industry.layout === "image-top" && (
                                        <CardImage
                                            src={industry.bgImage}
                                            alt={`${industry.title} industry for ISO audit management software`}
                                            height={industry.imageHeight}
                                            featured={industry.featured}
                                        />
                                    )}
                                    <MasonryCardContent industry={industry} layout={industry.layout} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
