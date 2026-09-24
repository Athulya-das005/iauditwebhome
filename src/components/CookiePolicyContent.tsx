"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const FONT = '"Pp Neue Montreal", sans-serif';
const COOKIE_POLICY_SCRIPT =
    "https://cdn-cookieyes.com/client_data/0e52d59590f655b78410117c77315021/cookie-policy/script.js";

export default function CookiePolicyContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const container = document.getElementById("cookieyes-policy-root");
        if (!container) return;

        // CookieYes inserts the policy HTML after the script tag with id="cky-cookie-policy"
        let script = document.getElementById("cky-cookie-policy") as HTMLScriptElement | null;

        const markReady = () => {
            // Give CookieYes a moment to insert #cky-policy-container
            window.setTimeout(() => {
                if (document.getElementById("cky-policy-container")) {
                    setStatus("ready");
                } else {
                    setStatus("error");
                }
            }, 400);
        };

        const runCookieYesHandler = () => {
            // CookieYes registers windowLoadHandler on 'load'. If the page already
            // loaded before this script was injected, that event never fires — so we
            // re-dispatch it once the script is ready.
            if (document.getElementById("cky-policy-container")) {
                setStatus("ready");
                return;
            }
            if (document.readyState === "complete") {
                window.dispatchEvent(new Event("load"));
            }
            markReady();
        };

        if (!script) {
            script = document.createElement("script");
            script.id = "cky-cookie-policy";
            script.type = "text/javascript";
            // Hide CookieYes H1 — page already has our own title
            script.setAttribute("title", "false");
            script.src = COOKIE_POLICY_SCRIPT;
            script.onload = runCookieYesHandler;
            script.onerror = () => setStatus("error");
            container.appendChild(script);
        } else {
            runCookieYesHandler();
        }
    }, []);

    return (
        <div
            style={{
                background: "#f9f7f4",
                minHeight: "100vh",
                fontFamily: FONT,
                width: "100%",
            }}
        >
            <section
                style={{
                    paddingTop: "var(--page-top-offset)",
                    paddingBottom: isMobile ? "2.5rem" : "3.5rem",
                    borderBottom: "1px solid #ebe6df",
                    background:
                        "radial-gradient(ellipse 55% 70% at 0% 0%, rgba(0,102,68,0.08) 0%, transparent 70%), #f9f7f4",
                }}
            >
                <div
                    style={{
                        maxWidth: "820px",
                        margin: "0 auto",
                        padding: isMobile ? "2rem 1.25rem 0" : "3rem 2rem 0",
                    }}
                >
                    <p
                        style={{
                            margin: "0 0 0.75rem",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#006644",
                        }}
                    >
                        Legal
                    </p>
                    <h1
                        style={{
                            margin: "0 0 0.75rem",
                            fontSize: isMobile ? "2rem" : "2.75rem",
                            fontWeight: 600,
                            color: "#111827",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.15,
                        }}
                    >
                        Cookie Policy
                    </h1>
                    <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? "0.92rem" : "1rem", lineHeight: 1.6 }}>
                        This page explains how cookies and similar technologies are used on iAudit Global.
                    </p>
                </div>
            </section>

            <article
                style={{
                    maxWidth: "820px",
                    margin: "0 auto",
                    padding: isMobile ? "2rem 1.25rem 3.5rem" : "2.75rem 2rem 5rem",
                }}
            >
                <div
                    style={{
                        background: "#fff",
                        border: "1px solid #e8e4df",
                        borderRadius: "1rem",
                        padding: isMobile ? "1.25rem" : "1.75rem 2rem",
                        boxShadow: "0 4px 18px rgba(0,0,0,0.03)",
                        overflow: "hidden",
                        minWidth: 0,
                        wordBreak: "break-word",
                    }}
                >
                    {status === "loading" ? (
                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.95rem" }}>Loading cookie policy…</p>
                    ) : null}
                    {status === "error" ? (
                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            The cookie policy could not be loaded. Please refresh the page, or try again shortly.
                        </p>
                    ) : null}
                    {/* Start CookieYes cookie policy */}
                    <div id="cookieyes-policy-root" />
                    {/* End CookieYes cookie policy */}
                </div>

                <p
                    style={{
                        margin: "1.75rem 0 0",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem 1.25rem",
                        alignItems: "center",
                    }}
                >
                    <Link
                        href="/privacy-policy"
                        style={{
                            color: "#006644",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontSize: "0.92rem",
                        }}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/"
                        style={{
                            color: "#006644",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontSize: "0.92rem",
                        }}
                    >
                        ← Back to home
                    </Link>
                </p>
            </article>
        </div>
    );
}
