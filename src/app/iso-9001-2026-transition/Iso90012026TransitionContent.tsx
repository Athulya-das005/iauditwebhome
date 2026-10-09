"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import Footer from "@/components/Footer";
import "./transition.css";

const CALENDLY_URL = "https://calendly.com/iauditgloballtd/30min";
const TRIAL_URL = "https://apps.iaudit.global";
const EASE = [0.22, 1, 0.36, 1] as const;

const consultationItems = [
    {
        title: "ISO 9001:2026 readiness gap analysis",
        desc: "Review your existing quality management system against the revised requirements and identify areas that may need attention.",
    },
    {
        title: "Updated internal audit checklist guidance",
        desc: "Understand which parts of your existing ISO 9001 audit checklists may need to be reviewed or updated for the 2026 edition.",
    },
    {
        title: "Transition planning recommendations",
        desc: "Prioritise what to review first, where your internal audit effort should focus and how to organise your transition work.",
    },
    {
        title: "Evidence and documentation guidance",
        desc: "Understand what your organisation should consider in relation to processes, documented information and objective evidence, without creating unnecessary paperwork.",
    },
];

const changes = [
    {
        title: "Leadership and quality culture",
        desc: "The revised standard places greater emphasis on leadership, accountability and the role of quality culture within the organisation.",
    },
    {
        title: "Risks and opportunities",
        desc: "ISO 9001:2026 provides greater clarity around risks and opportunities, including how both can support informed decision-making and continual improvement.",
    },
    {
        title: "Strategic alignment",
        desc: "The revised edition gives greater attention to how quality management connects with the organisation's strategic direction.",
    },
    {
        title: "Awareness and ethical behaviour",
        desc: "People's understanding of quality culture and ethical behaviour receives greater attention within the revised requirements.",
    },
    {
        title: "New Annex A",
        desc: "A new Annex A provides additional guidance on key concepts, terminology and the intent behind the requirements, helping organisations apply the standard more consistently.",
    },
];

const fundamentals = ["Customer focus", "The process approach", "Risk-based thinking", "Continual improvement"];

const planSteps = [
    { title: "Understand the changes" },
    { title: "Assess your current QMS" },
    { title: "Identify the gaps" },
    { title: "Update your QMS" },
    { title: "Verify the changes" },
    { title: "Plan your transition" },
];

const claritySteps = [
    { title: "Book a free call", desc: "Choose a convenient time for a 20 to 30-minute conversation with an ISO professional." },
    { title: "Share your current setup", desc: "If useful, share your current audit plan, QMS information or a recent audit report before the call." },
    { title: "Get clear next steps", desc: "Discuss the areas you should review and how you can approach your ISO 9001:2026 transition." },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

function Tick({ size = 12 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link href={href} className="btn-animate t9-btn">
            <span>{children}</span>
        </Link>
    );
}

function OutlineButton({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link href={href} className="btn-outline-animate t9-btn">
            <span>{children}</span>
        </Link>
    );
}

function SectionHead({ title, children }: { title: ReactNode; children?: ReactNode }) {
    return (
        <Reveal className={`t9-head${children ? "" : " t9-head--solo"}`}>
            <h2 className="t9-h2">{title}</h2>
            {children && <div className="t9-head__aside">{children}</div>}
        </Reveal>
    );
}

const DONE_STEPS = 2;

function PlanSheet() {
    const reduce = useReducedMotion();
    const [done, setDone] = useState(0);
    const shown = reduce ? DONE_STEPS : done;

    useEffect(() => {
        if (reduce || done >= DONE_STEPS) return;
        const t = setTimeout(() => setDone((d) => d + 1), done === 0 ? 900 : 700);
        return () => clearTimeout(t);
    }, [done, reduce]);

    return (
        <motion.div
            className="t9-sheet"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
            <div className="t9-sheet__head">
                <div>
                    <div className="t9-sheet__title">A practical ISO 9001:2026 transition plan</div>
                    <div className="t9-sheet__meta">
                        <s>ISO 9001:2015</s>
                        <span aria-hidden>→</span>
                        <b>ISO 9001:2026</b>
                    </div>
                </div>
                <div className="t9-sheet__count">
                    {shown}/{planSteps.length}
                </div>
            </div>

            <div className="t9-sheet__bar" aria-hidden>
                <motion.span animate={{ width: `${(shown / planSteps.length) * 100}%` }} transition={{ duration: 0.6, ease: EASE }} />
            </div>

            <ol className="t9-sheet__list">
                {planSteps.map((s, i) => {
                    const state = i < shown ? "done" : i === shown ? "current" : "todo";
                    return (
                        <li key={s.title} className={`t9-sheet__row is-${state}`}>
                            <span className="t9-sheet__box">{state === "done" && <Tick size={11} />}</span>
                            <span className="t9-sheet__label">{s.title}</span>
                            <span className="t9-sheet__num">{num(i)}</span>
                        </li>
                    );
                })}
            </ol>

            <div className="t9-sheet__foot">
                <span>Transition deadline</span>
                <strong>30 September 2029</strong>
            </div>
        </motion.div>
    );
}

export default function Iso90012026TransitionContent() {
    const calendlyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initCalendly = () => {
            const Calendly = (window as Window & {
                Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
            }).Calendly;

            if (Calendly && calendlyRef.current && calendlyRef.current.childElementCount === 0) {
                Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: calendlyRef.current });
            }
        };

        if ((window as Window & { Calendly?: unknown }).Calendly) {
            initCalendly();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = initCalendly;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <div className="t9">
                {/* Hero */}
                <section className="t9-hero">
                    <div className="t9-container t9-hero__grid">
                        <div>
                            <motion.p
                                className="t9-kicker"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                ISO 9001:2026 Transition
                            </motion.p>
                            <motion.h1
                                className="t9-h1"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.05, ease: EASE }}
                            >
                                Move to ISO 9001:2026 with a clear transition plan
                            </motion.h1>
                            <motion.p
                                className="t9-hero__sub"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
                            >
                                ISO 9001:2026 is here. Understand what has changed, assess your QMS, identify gaps and plan your transition with guidance from certified ISO auditors.
                            </motion.p>
                            <motion.div
                                className="t9-actions"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                            >
                                <PrimaryButton href={CALENDLY_URL}>Book a free consultation →</PrimaryButton>
                                <OutlineButton href={TRIAL_URL}>Try iAudit free for 14 days</OutlineButton>
                            </motion.div>
                            <motion.ul
                                className="t9-trust"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <li>Built by certified ISO auditors</li>
                                <li>ISO 19011-aligned</li>
                                <li>Zero-access data policy</li>
                            </motion.ul>
                        </div>

                        <PlanSheet />
                    </div>
                </section>

                {/* What you get */}
                <section className="t9-section">
                    <div className="t9-container">
                        <SectionHead title="What you get from your free ISO 9001:2026 transition consultation">
                            <p className="t9-lead">
                                We offer a free 30-minute consultation to help you understand how ISO 9001:2026 affects your existing QMS and what you should review before your transition.
                            </p>
                            <PrimaryButton href={CALENDLY_URL}>Book your free consultation →</PrimaryButton>
                        </SectionHead>

                        <div className="t9-cols t9-cols--4">
                            {consultationItems.map((item, i) => (
                                <Reveal key={item.title} delay={i * 0.06} className="t9-col">
                                    <span className="t9-index">{num(i)}</span>
                                    <h3 className="t9-h3">{item.title}</h3>
                                    <p className="t9-text">{item.desc}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What has changed */}
                <section className="t9-section t9-section--tint">
                    <div className="t9-container">
                        <SectionHead title="What has changed in ISO 9001:2026?">
                            <p className="t9-lead">
                                The 2026 edition introduces targeted updates designed to improve clarity, usability and relevance while retaining the familiar ISO 9001 framework.
                            </p>
                        </SectionHead>

                        <div className="t9-rows">
                            {changes.map((c, i) => (
                                <Reveal key={c.title} delay={i * 0.04} className="t9-row">
                                    <span className="t9-index">{num(i)}</span>
                                    <h3 className="t9-h3">{c.title}</h3>
                                    <p className="t9-text">{c.desc}</p>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal className="t9-same">
                            <div>
                                <h3 className="t9-h3">What has stayed the same?</h3>
                                <p className="t9-text">
                                    The fundamentals remain familiar. Customer focus, the process approach, risk-based thinking and continual improvement remain central to ISO 9001:2026.
                                </p>
                            </div>
                            <ul className="t9-same__list" aria-hidden>
                                {fundamentals.map((f) => (
                                    <li key={f}>
                                        <Tick size={12} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal className="t9-statement">
                            <p>The important question is not only what changed. It is where those changes affect your QMS.</p>
                            <PrimaryButton href={CALENDLY_URL}>Assess your transition →</PrimaryButton>
                        </Reveal>
                    </div>
                </section>

                {/* Three steps */}
                <section className="t9-section t9-dark">
                    <div className="t9-container">
                        <Reveal className="t9-head t9-head--dark">
                            <h2 className="t9-h2">Three steps to transition clarity</h2>
                            <div className="t9-head__aside">
                                <PrimaryButton href={CALENDLY_URL}>Book your free consultation →</PrimaryButton>
                            </div>
                        </Reveal>
                        <div className="t9-steps">
                            {claritySteps.map((s, i) => (
                                <Reveal key={s.title} delay={i * 0.08} className="t9-steps__item">
                                    <span className="t9-steps__num">{i + 1}</span>
                                    <h3 className="t9-h3">{s.title}</h3>
                                    <p>{s.desc}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultation booking */}
                <section id="consultation" className="t9-section">
                    <div className="t9-container t9-book">
                        <Reveal className="t9-book__text">
                            <h2 className="t9-h2">Book your free ISO 9001:2026 transition consultation</h2>
                            <p className="t9-book__q">Not sure how ISO 9001:2026 affects your current QMS?</p>
                            <p className="t9-lead">
                                Speak with a certified ISO auditor about the changes, the areas you may need to review and the next steps for your transition.
                            </p>
                            <PrimaryButton href={CALENDLY_URL}>Book your free consultation →</PrimaryButton>
                        </Reveal>
                        <Reveal delay={0.08} className="t9-calendly">
                            <div ref={calendlyRef} style={{ minWidth: "300px", height: "700px", width: "100%" }} />
                        </Reveal>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}
