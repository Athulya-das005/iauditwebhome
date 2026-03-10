"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Industries.css";
import { industries } from "@/data/industries";

// Sketch-style SVG illustrations for each industry
const illustrations: Record<string, (color: string) => React.ReactNode> = {
    "01": (color) => ( // Retail – store / shopping cart
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="15" y="30" width="90" height="50" rx="4" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <path d="M15 45h90" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" />
            <rect x="45" y="55" width="30" height="25" rx="2" stroke={color} strokeOpacity="0.6" strokeWidth="2" />
            <path d="M10 30 L20 10 h80 l10 20" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="40" cy="82" r="4" stroke={color} strokeOpacity="0.8" strokeWidth="2" />
            <circle cx="80" cy="82" r="4" stroke={color} strokeOpacity="0.8" strokeWidth="2" />
            <path d="M38 36 h44" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
    ),
    "02": (color) => ( // Logistics – truck
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="5" y="25" width="70" height="45" rx="3" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <path d="M75 40 h30 l8 20 v10 h-38 V40z" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="25" cy="75" r="7" stroke={color} strokeOpacity="0.85" strokeWidth="2.5" />
            <circle cx="25" cy="75" r="2" fill={color} fillOpacity="0.5" />
            <circle cx="95" cy="75" r="7" stroke={color} strokeOpacity="0.85" strokeWidth="2.5" />
            <circle cx="95" cy="75" r="2" fill={color} fillOpacity="0.5" />
            <path d="M15 42 h40" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5 3" />
            <path d="M15 52 h30" stroke={color} strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="5 3" />
        </svg>
    ),
    "03": (color) => ( // Construction – crane + building
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="30" y="50" width="60" height="35" rx="2" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <rect x="42" y="58" width="15" height="12" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" />
            <rect x="63" y="58" width="15" height="12" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" />
            <rect x="50" y="70" width="20" height="15" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" />
            <line x1="20" y1="5" x2="20" y2="55" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <line x1="20" y1="10" x2="80" y2="10" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <line x1="80" y1="10" x2="80" y2="50" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" strokeDasharray="4 3" />
            <line x1="20" y1="5" x2="80" y2="5" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" />
        </svg>
    ),
    "04": (color) => ( // Manufacturing – gear + assembly line
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="55" cy="42" r="22" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <circle cx="55" cy="42" r="10" stroke={color} strokeOpacity="0.55" strokeWidth="2" />
            <path d="M55 15v6M55 63v6M28 42h-6M88 42h6M36 23l-4-4M78 65l-4-4M36 61l-4 4M78 19l-4 4" stroke={color} strokeOpacity="0.65" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="10" y1="78" x2="110" y2="78" stroke={color} strokeOpacity="0.4" strokeWidth="2" />
            <rect x="18" y="70" width="12" height="8" rx="1" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" />
            <rect x="90" y="70" width="12" height="8" rx="1" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" />
        </svg>
    ),
    "05": (color) => ( // Healthcare – cross + heartbeat
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="40" y="12" width="40" height="66" rx="20" stroke={color} strokeOpacity="0.65" strokeWidth="2.5" />
            <rect x="22" y="30" width="76" height="30" rx="15" stroke={color} strokeOpacity="0.65" strokeWidth="2.5" />
            <circle cx="60" cy="45" r="8" stroke={color} strokeOpacity="0.85" strokeWidth="2" />
            <path d="M10 55 h20 l8-18 10 28 8-20 6 10 h48" stroke={color} strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    "06": (color) => ( // Food & Beverage – fork, knife, plate
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="60" cy="45" r="30" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <circle cx="60" cy="45" r="20" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="25" y1="12" x2="25" y2="78" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M20 12 v20 a5 5 0 0 0 10 0 V12" stroke={color} strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
            <line x1="95" y1="12" x2="95" y2="35" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M89 12 h12 v18 a6 6 0 0 1-6 6 6 6 0 0 1-6-6 V12z" stroke={color} strokeOpacity="0.7" strokeWidth="2" />
            <line x1="95" y1="42" x2="95" y2="78" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    ),
    "07": (color) => ( // Hospitality – hotel / bell
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="20" y="28" width="80" height="55" rx="3" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <path d="M20 28 L60 8 L100 28" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="32" y="38" width="14" height="12" rx="1" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" />
            <rect x="53" y="38" width="14" height="12" rx="1" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" />
            <rect x="74" y="38" width="14" height="12" rx="1" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" />
            <rect x="44" y="60" width="32" height="23" rx="2" stroke={color} strokeOpacity="0.6" strokeWidth="2" />
            <line x1="60" y1="60" x2="60" y2="83" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" />
        </svg>
    ),
    "08": (color) => ( // Facilities Management – blueprint / building plan
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <rect x="12" y="12" width="96" height="66" rx="4" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" />
            <rect x="22" y="22" width="35" height="25" rx="2" stroke={color} strokeOpacity="0.6" strokeWidth="1.8" />
            <rect x="65" y="22" width="33" height="25" rx="2" stroke={color} strokeOpacity="0.6" strokeWidth="1.8" />
            <rect x="22" y="54" width="76" height="15" rx="2" stroke={color} strokeOpacity="0.5" strokeWidth="1.8" />
            <line x1="39" y1="22" x2="39" y2="47" stroke={color} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="22" y1="34" x2="57" y2="34" stroke={color} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="81" cy="34" r="6" stroke={color} strokeOpacity="0.55" strokeWidth="1.8" />
        </svg>
    ),
    "09": (color) => ( // Health & Safety – shield + helmet
        <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <path d="M60 10 L95 24 V50 C95 68 60 82 60 82 C60 82 25 68 25 50 V24 Z" stroke={color} strokeOpacity="0.7" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M45 45 l10 10 20-20" stroke={color} strokeOpacity="0.9" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38 30 Q60 18 82 30" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
    ),
};

// industries data is now imported from @/data/industries


const loopItems = [...industries, ...industries];

export default function Industries() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="industries" style={{
            background: "#fff",
            padding: isMobile ? "3.5rem 0" : "5rem 0",
            overflow: "hidden",
            fontFamily: '"Pp Neue Montreal", sans-serif'
        }}>
            <div className="container" style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>

                <div style={{ textAlign: "center", marginBottom: isMobile ? "2.5rem" : "4rem", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            color: '#006644',
                            fontWeight: 500,
                            fontSize: isMobile ? "0.9rem" : "1rem",
                            letterSpacing: '0.01em',
                            marginBottom: '0.75rem'
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>✦</span>
                        Industries We Serve
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: isMobile ? "2.4rem" : "3.4rem",
                            fontWeight: 500,
                            color: "#111827",
                            lineHeight: isMobile ? 1.2 : 1.1,
                            margin: 0,
                            letterSpacing: '-0.02em',
                            maxWidth: '900px'
                        }}
                    >
                        ISO audit management{" "}
                        <br className="only-mobile" />
                        <span style={{ color: "var(--primary)" }}>For Every Sector</span>
                    </motion.h2>
                </div>

                <div className="industries-marquee-outer">
                    <div className="industries-marquee-track">
                        {loopItems.map((item, idx) => (
                            <IndustryCard key={`${item.id}-${idx}`} item={item} isMobile={isMobile} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

/* (Commented Out) OLD VERSION WITH ICONS
function IndustryCardOld({ item, isMobile }: { item: any, isMobile: boolean }) {
    return (
        <motion.div
            className="industry-card"
            whileHover="hover"
            style={{
                background: `${item.color}18`,
                border: `1.5px solid ${item.color}33`,
            }}
        >
            <Link href={`/industries/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                <div style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "1.2rem",
                    boxSizing: "border-box",
                }}>
                    <div style={{
                        width: "100%",
                        height: isMobile ? "120px" : "140px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `${item.color}25`,
                        borderRadius: "14px",
                        padding: "16px",
                        boxSizing: "border-box",
                        border: `1px solid ${item.color}30`,
                        overflow: "hidden",
                    }}>
                        {illustrations[item.id](item.color)}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <h3 style={{
                                fontSize: "1.35rem",
                                fontWeight: 500,
                                color: "#111827",
                                lineHeight: 1.2,
                                margin: 0,
                            }}>
                                {item.title}
                            </h3>
                            <span style={{
                                fontSize: "1.2rem",
                                fontWeight: 600,
                                color: `${item.color}25`,
                                lineHeight: 1,
                                flexShrink: 0,
                                marginLeft: "8px",
                            }}>
                                {item.id}
                            </span>
                        </div>

                        <p style={{
                            fontSize: "0.9rem",
                            color: "#4b5563",
                            lineHeight: 1.5,
                            fontWeight: 400,
                            margin: 0,
                        }}>
                            {item.description}
                        </p>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--primary)",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        marginTop: "auto",
                        paddingTop: "0.5rem"
                    }}>
                        Learn More
                        <motion.span
                            variants={{
                                hover: { x: 5 }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </motion.span>
                    </div>
                </div>
            </Link>
        </motion.div >
    );
}
*/

// ACTIVE VERSION WITH FULL BACKGROUND IMAGES
function IndustryCard({ item, isMobile }: { item: any, isMobile: boolean }) {
    const hasBgImage = !!item.bgImage;

    return (
        <motion.div
            className="industry-card"
            whileHover="hover"
            style={{
                background: hasBgImage ? `url(${item.bgImage}) center/cover no-repeat` : `${item.color}18`,
                border: hasBgImage ? "none" : `1.5px solid ${item.color}33`,
            }}
        >
            <Link href={`/industries/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                {hasBgImage && (
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)",
                        zIndex: 0
                    }} />
                )}

                <div style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: hasBgImage ? "flex-end" : "flex-start",
                    gap: hasBgImage ? "0rem" : "1.2rem",
                    boxSizing: "border-box",
                }}>
                    {!hasBgImage && (
                        <div style={{
                            width: "100%",
                            height: isMobile ? "120px" : "140px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: `${item.color}25`,
                            borderRadius: "14px",
                            padding: "16px",
                            boxSizing: "border-box",
                            border: `1px solid ${item.color}30`,
                            overflow: "hidden",
                        }}>
                            {illustrations[item.id](item.color)}
                        </div>
                    )}

                    <div style={{ display: "flex", flexDirection: "column", gap: hasBgImage ? "0.5rem" : "0.8rem", flex: hasBgImage ? "none" : 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <h3 style={{
                                fontSize: "1.35rem",
                                fontWeight: 500,
                                color: hasBgImage ? "#ffffff" : "#111827",
                                lineHeight: 1.2,
                                margin: 0,
                            }}>
                                {item.title}
                            </h3>
                            {!hasBgImage && (
                                <span style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    color: `${item.color}25`,
                                    lineHeight: 1,
                                    flexShrink: 0,
                                    marginLeft: "8px",
                                }}>
                                    {item.id}
                                </span>
                            )}
                        </div>

                        <p style={{
                            fontSize: "0.9rem",
                            color: hasBgImage ? "rgba(255,255,255,0.85)" : "#4b5563",
                            lineHeight: 1.5,
                            fontWeight: 400,
                            margin: 0,
                        }}>
                            {item.description}
                        </p>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: hasBgImage ? "#ffffff" : "var(--primary)",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        marginTop: hasBgImage ? "1.2rem" : "auto",
                        paddingTop: "0.5rem"
                    }}>
                        Learn More
                        <motion.span
                            variants={{ hover: { x: 5 } }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </motion.span>
                    </div>
                </div>
            </Link>
        </motion.div >
    );
}

