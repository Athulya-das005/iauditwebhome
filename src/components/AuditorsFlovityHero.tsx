"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PP_NEUE_MONTREAL, aboutType } from "@/constants/typography";
import { useIndustriesBreakpoints } from "@/hooks/useIndustriesBreakpoints";

const float = (duration: number, delay = 0) => ({
    animate: { y: [0, -10, 0] },
    transition: { repeat: Infinity, duration, ease: "easeInOut" as const, delay },
});

export default function AuditorsFlovityHero() {
    const { isMobile } = useIndustriesBreakpoints();

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .auditors-hero-container { padding: 2rem 2rem; }
                .auditors-hero-right { text-align: left; align-items: flex-start; display: flex; flex-direction: column; }
                .auditors-hero-left { transform: scale(0.82); transform-origin: center left; min-height: 420px; }
                .auditors-hero-title { font-size: clamp(2rem, 3.5vw, 2.85rem); letter-spacing: -0.02em; }
                @media (max-width: 1024px) {
                    .auditors-hero-left { transform: scale(0.72); transform-origin: center center; min-height: 380px; }
                }
                @media (max-width: 768px) {
                    .auditors-hero-container { padding: 7rem 1.25rem 2.5rem; }
                    .auditors-hero-right { text-align: center; align-items: center; width: 100%; order: 1; }
                    .auditors-hero-left { order: 2; transform: scale(0.58); transform-origin: top center; min-height: 240px;
                        margin-top: 1.5rem; width: 100%; display: flex; justify-content: center; }
                    .auditors-hero-btn-row { justify-content: center !important; }
                    .auditors-hero-title { font-size: 2.15rem; line-height: 1.12; }
                    .auditors-hero-desc { font-size: 1rem; margin-bottom: 2rem; }
                }
                @media (max-width: 480px) {
                    .auditors-hero-left { transform: scale(0.48); min-height: 200px; }
                }
            `,
                }}
            />

            <section
                className="auditors-hero-container"
                style={{
                    width: "100%",
                    position: "relative",
                    minHeight: isMobile ? "auto" : "calc(100vh - 80px)",
                    background: "linear-gradient(225deg, #f0fdf7 0%, #ffffff 45%, #ffffff 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    fontFamily: PP_NEUE_MONTREAL,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-10%",
                        right: "-5%",
                        width: "40vw",
                        height: "40vw",
                        background:
                            "radial-gradient(circle, rgba(5,140,66,0.07) 0%, rgba(255,255,255,0) 70%)",
                        borderRadius: "50%",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-20%",
                        left: "-10%",
                        width: "55vw",
                        height: "55vw",
                        background:
                            "radial-gradient(circle, rgba(0,62,58,0.05) 0%, rgba(255,255,255,0) 70%)",
                        borderRadius: "50%",
                        zIndex: 0,
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        maxWidth: "1260px",
                        width: "100%",
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: isMobile ? "2rem" : "3rem",
                    }}
                >
                    {/* Left — Flovity-style card stack */}
                    <div
                        className="auditors-hero-left"
                        style={{
                            flex: "1 1 520px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.85, delay: 0.15 }}
                            style={{
                                position: "relative",
                                width: "560px",
                                height: "420px",
                            }}
                        >
                            {/* Main dashboard card */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-58%, -48%)",
                                    width: "520px",
                                    height: "340px",
                                    background: "#f8fafc",
                                    borderRadius: "20px",
                                    border: "1px solid #e2e8f0",
                                    boxShadow: "0 24px 80px -24px rgba(5, 140, 66, 0.28)",
                                    overflow: "hidden",
                                    zIndex: 1,
                                }}
                            >
                                <div
                                    style={{
                                        height: "28px",
                                        borderBottom: "1px solid #e2e8f0",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 14px",
                                        gap: "5px",
                                        background: "#f1f5f9",
                                    }}
                                >
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: "7px",
                                                height: "7px",
                                                borderRadius: "50%",
                                                background: "#cbd5e1",
                                            }}
                                        />
                                    ))}
                                </div>

                                <div style={{ padding: "20px 22px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        <div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    marginBottom: "6px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "22px",
                                                        height: "22px",
                                                        borderRadius: "6px",
                                                        background: "#003E3A",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeWidth="2.5"
                                                    >
                                                        <path d="M9 11l3 3L22 4" />
                                                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                                                    </svg>
                                                </div>
                                                <span
                                                    style={{
                                                        fontSize: "0.72rem",
                                                        fontWeight: 600,
                                                        color: "#334155",
                                                    }}
                                                >
                                                    Lead auditor programme view
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "0.65rem",
                                                    color: "#64748b",
                                                    maxWidth: "220px",
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                24 internal audits scheduled · evidence linked
                                                across all findings
                                            </div>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <div
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "5px",
                                                    fontSize: "0.65rem",
                                                    color: "#058c42",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        width: "6px",
                                                        height: "6px",
                                                        borderRadius: "50%",
                                                        background: "#058c42",
                                                    }}
                                                />
                                                ISO 19011 aligned
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            position: "relative",
                                            height: "140px",
                                            marginTop: "8px",
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 400 120"
                                            style={{ width: "100%", height: "100%" }}
                                            preserveAspectRatio="none"
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="auditorLineGrad"
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        stopColor="#003E3A"
                                                        stopOpacity="0.2"
                                                    />
                                                    <stop
                                                        offset="100%"
                                                        stopColor="#003E3A"
                                                        stopOpacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <motion.path
                                                d="M0,95 L50,88 L100,72 L150,78 L200,52 L250,48 L300,38 L350,28 L400,22"
                                                fill="none"
                                                stroke="#003E3A"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{ duration: 1.8, delay: 0.4 }}
                                            />
                                            <motion.path
                                                d="M0,95 L50,88 L100,72 L150,78 L200,52 L250,48 L300,38 L350,28 L400,22 L400,120 L0,120 Z"
                                                fill="url(#auditorLineGrad)"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1.2, delay: 0.8 }}
                                            />
                                        </svg>
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "0.6rem",
                                                color: "#94a3b8",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {["Q1", "Q2", "Q3"].map((m) => (
                                                <span key={m}>{m}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            marginTop: "10px",
                                            fontSize: "0.65rem",
                                            fontWeight: 600,
                                            color: "#003E3A",
                                            background: "#ecfdf5",
                                            padding: "3px 8px",
                                            borderRadius: "6px",
                                        }}
                                    >
                                        Findings closed with verified evidence ↑
                                    </div>
                                </div>
                            </div>

                            {/* Card 1 — Finding with evidence */}
                            <motion.div
                                {...float(4.5, 0.2)}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "-20px",
                                    width: "230px",
                                    background: "rgba(255,255,255,0.92)",
                                    backdropFilter: "blur(12px)",
                                    WebkitBackdropFilter: "blur(12px)",
                                    borderRadius: "16px",
                                    padding: "16px",
                                    boxShadow:
                                        "0 20px 40px -15px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5)",
                                    zIndex: 4,
                                    border: "1px solid rgba(255,255,255,0.5)",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            color: "#111827",
                                        }}
                                    >
                                        Finding NC-047
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.58rem",
                                            padding: "2px 6px",
                                            borderRadius: "8px",
                                            background: "#fef2f2",
                                            color: "#dc2626",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Major
                                    </span>
                                </div>
                                {[
                                    "Root cause documented",
                                    "3 evidence files attached",
                                    "Owner assigned",
                                ].map((t) => (
                                    <div
                                        key={t}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            fontSize: "0.6rem",
                                            color: "#334155",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        <span style={{ color: "#058c42" }}>✓</span>
                                        {t}
                                    </div>
                                ))}
                            </motion.div>

                            {/* Card 2 — CAPA closure */}
                            <motion.div
                                {...float(3.8, 0.6)}
                                style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "-30px",
                                    width: "240px",
                                    background: "rgba(255,255,255,0.92)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                    borderRadius: "14px",
                                    padding: "16px 18px",
                                    boxShadow:
                                        "0 18px 36px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5)",
                                    zIndex: 3,
                                    border: "1px solid rgba(255,255,255,0.5)",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "0.72rem",
                                        fontWeight: 600,
                                        color: "#111827",
                                        marginBottom: "12px",
                                        lineHeight: 1.35,
                                    }}
                                >
                                    Corrective actions that actually solve problems
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "space-between",
                                        height: "72px",
                                        gap: "6px",
                                    }}
                                >
                                    {[38, 52, 68, 85, 94].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.5 + i * 0.08,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            style={{
                                                flex: 1,
                                                background:
                                                    i === 4 ? "#058c42" : "rgba(5,140,66,0.2)",
                                                borderRadius: "4px 4px 0 0",
                                                minHeight: "4px",
                                            }}
                                        />
                                    ))}
                                </div>
                                <div
                                    style={{
                                        marginTop: "8px",
                                        fontSize: "0.75rem",
                                        fontWeight: 700,
                                        color: "#058c42",
                                    }}
                                >
                                    94% verified effective
                                </div>
                            </motion.div>

                            {/* Card 3 — Auditor checklist */}
                            <motion.div
                                {...float(5, 1)}
                                style={{
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "-40px",
                                    width: "210px",
                                    background: "rgba(255,255,255,0.92)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                    borderRadius: "14px",
                                    padding: "14px 16px",
                                    boxShadow:
                                        "0 22px 44px -14px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5)",
                                    zIndex: 5,
                                    border: "1px solid rgba(255,255,255,0.5)",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "0.72rem",
                                        fontWeight: 600,
                                        color: "#111827",
                                        marginBottom: "12px",
                                    }}
                                >
                                    Clause 8.5.1 — process controls
                                </div>
                                {[
                                    { label: "Interview notes", pct: 100 },
                                    { label: "Objective evidence", pct: 86 },
                                ].map((row) => (
                                    <div key={row.label} style={{ marginBottom: "10px" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "0.6rem",
                                                color: "#64748b",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            <span>{row.label}</span>
                                            <span>{row.pct}%</span>
                                        </div>
                                        <div
                                            style={{
                                                height: "5px",
                                                background: "#e2e8f0",
                                                borderRadius: "3px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${row.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                style={{
                                                    height: "100%",
                                                    background: "#003E3A",
                                                    borderRadius: "3px",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Card 4 — Evidence link pill */}
                            <motion.div
                                {...float(4, 1.4)}
                                style={{
                                    position: "absolute",
                                    top: "180px",
                                    left: "10px",
                                    width: "230px",
                                    background: "rgba(255,255,255,0.9)",
                                    backdropFilter: "blur(8px)",
                                    WebkitBackdropFilter: "blur(8px)",
                                    borderRadius: "12px",
                                    padding: "12px 14px",
                                    boxShadow:
                                        "0 12px 28px -8px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    zIndex: 3,
                                    border: "1px solid rgba(255,255,255,0.5)",
                                }}
                            >
                                <div
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "8px",
                                        background: "#f0fdf4",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#058c42",
                                        flexShrink: 0,
                                    }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                    </svg>
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div
                                        style={{
                                            fontSize: "0.62rem",
                                            color: "#64748b",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Auditor workflow
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.78rem",
                                            fontWeight: 600,
                                            color: "#0f172a",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        Evidence connected to findings
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                flex: 1,
                                                height: "5px",
                                                background: "#e2e8f0",
                                                borderRadius: "3px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <motion.div
                                                animate={{ width: ["70%", "92%", "92%"] }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    repeatDelay: 2,
                                                }}
                                                style={{
                                                    height: "100%",
                                                    background: "#058c42",
                                                    borderRadius: "3px",
                                                }}
                                            />
                                        </div>
                                        <span
                                            style={{
                                                fontSize: "0.7rem",
                                                fontWeight: 700,
                                                color: "#058c42",
                                            }}
                                        >
                                            92%
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut",
                                    delay: 0.8,
                                }}
                                style={{
                                    position: "absolute",
                                    bottom: "50px",
                                    left: "60px",
                                    background: "#003E3A",
                                    color: "#fff",
                                    fontSize: "0.58rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    zIndex: 6,
                                    boxShadow: "0 8px 20px rgba(0,62,58,0.35)",
                                }}
                            >
                                AUDITOR VIEW
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right — copy */}
                    <div
                        className="auditors-hero-right"
                        style={{ flex: "1 1 480px", maxWidth: "580px", zIndex: 2 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                alignItems: "inherit",
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "#058c42",
                                    fontWeight: 500,
                                    fontSize: "0.95rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                <span>✦</span>
                                Audit management software by certified auditors
                                <span>✦</span>
                            </div>

                            <h1
                                className="auditors-hero-title"
                                style={{
                                    ...aboutType.heroH1(),
                                    margin: "0 0 1.25rem 0",
                                    lineHeight: isMobile ? 1.12 : 1.08,
                                }}
                            >
                                ISO audit software that actually thinks like an auditor
                            </h1>

                            <p
                                className="auditors-hero-desc"
                                style={{
                                    ...aboutType.heroLead(),
                                    marginBottom: "2rem",
                                    maxWidth: "95%",
                                }}
                            >
                                Audit management software built by certified ISO auditors to
                                streamline internal audits, connect evidence, and ensure
                                corrective actions actually solve problems.
                            </p>

                            <div
                                className="auditors-hero-btn-row"
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    flexWrap: "wrap",
                                    width: "100%",
                                }}
                            >
                                <Link
                                    href="https://apps.iaudit.global"
                                    className="btn-animate"
                                    style={{
                                        padding: "12px 28px",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                        ...aboutType.ctaButton(),
                                        width: isMobile ? "100%" : "auto",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        display: "inline-flex",
                                    }}
                                >
                                    <span>Get started free</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="btn-outline-animate"
                                    style={{
                                        padding: "12px 28px",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                        border: "1px solid #d1d5db",
                                        ...aboutType.ctaButton(),
                                        width: isMobile ? "100%" : "auto",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        display: "inline-flex",
                                    }}
                                >
                                    <span>Book a demo</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
