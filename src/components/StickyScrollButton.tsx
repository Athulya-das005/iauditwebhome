"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PP_NEUE_MONTREAL } from "@/constants/typography";

const TOP_THRESHOLD = 80;
const TRIAL_URL = "https://apps.iaudit.global";
const ARROW_HIDE_DELAY_MS = 900;

export default function StickyScrollButton() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const lastScrollY = useRef(0);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const onScroll = () => {
            const currentY = window.scrollY;
            const scrollingUp = currentY < lastScrollY.current;
            lastScrollY.current = currentY;

            if (hideTimer.current) {
                clearTimeout(hideTimer.current);
                hideTimer.current = null;
            }

            if (currentY <= TOP_THRESHOLD) {
                setShowScrollTop(false);
                return;
            }

            if (scrollingUp) {
                setShowScrollTop(true);
                hideTimer.current = setTimeout(() => {
                    setShowScrollTop(false);
                }, ARROW_HIDE_DELAY_MS);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (hideTimer.current) clearTimeout(hideTimer.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShowScrollTop(false);
    };

    return (
        <div
            style={{
                position: "fixed",
                right: "1.25rem",
                bottom: "1.25rem",
                zIndex: 999,
                pointerEvents: "none",
            }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {showScrollTop ? (
                    <motion.button
                        key="scroll-top"
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        initial={{ opacity: 0, scale: 0.85, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                            pointerEvents: "auto",
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            border: "2px solid #ffffff",
                            background: "var(--primary)",
                            color: "#ffffff",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 8px 24px rgba(5, 140, 66, 0.35)",
                            padding: 0,
                            fontFamily: PP_NEUE_MONTREAL,
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                        >
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </motion.button>
                ) : (
                    <motion.div
                        key="start-trial"
                        initial={{ opacity: 0, scale: 0.92, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ pointerEvents: "auto" }}
                    >
                        <Link
                            href={TRIAL_URL}
                            className="btn-animate btn-animate-pill"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0.8rem 1.35rem",
                                borderRadius: "999px",
                                fontWeight: 600,
                                fontSize: "0.92rem",
                                fontFamily: PP_NEUE_MONTREAL,
                                textDecoration: "none",
                                whiteSpace: "nowrap",
                                boxShadow: "0 8px 24px rgba(5, 140, 66, 0.28)",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: PP_NEUE_MONTREAL,
                                    fontWeight: 600,
                                }}
                            >
                                Start free trial
                            </span>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
