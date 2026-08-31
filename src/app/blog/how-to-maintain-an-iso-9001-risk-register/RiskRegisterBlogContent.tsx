"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQAccordion from "@/components/FAQAccordion";
import { riskRegisterFaqs } from "@/data/riskRegisterFaqs";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=90&fm=webp";

const sectionImages: Record<string, string> = {
    requirements:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=480&fit=crop&q=80&fm=webp",
    updates:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=80&fm=webp",
    maintenance:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=480&fit=crop&q=80&fm=webp",
    spreadsheets:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=480&fit=crop&q=80&fm=webp",
    findings:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=480&fit=crop&q=80&fm=webp",
    live:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=480&fit=crop&q=80&fm=webp",
};

const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "tldr", label: "TL;DR" },
    { id: "requirements", label: "What ISO 9001 Requires" },
    { id: "updates", label: "When to Update the Register" },
    { id: "maintenance", label: "How to Maintain a Risk Register" },
    { id: "spreadsheets", label: "Why Spreadsheets Become Difficult" },
    { id: "findings", label: "Audit Findings and Risk" },
    { id: "well-maintained", label: "A Well-Maintained Register" },
    { id: "live", label: "From Risk Register to Live Risk Management" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "conclusion", label: "Conclusion" },
];

const faqAccordionItems = riskRegisterFaqs.map((faq, index) => ({
    question: faq.q,
    answer:
        index === riskRegisterFaqs.length - 1 ? (
            <>
                {faq.a} You can try{" "}
                <a
                    href="https://apps.iaudit.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#006644", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                    iAudit with a 14-day free trial
                </a>{" "}
                to see how it fits your ISO audit and risk-management workflow.
            </>
        ) : (
            faq.a
        ),
}));

function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div
            style={{
                width: "100%",
                borderRadius: "0.875rem",
                overflow: "hidden",
                margin: "1.5rem 0 2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "320px" }}
                onError={(event) => {
                    event.currentTarget.style.display = "none";
                    (event.currentTarget.parentElement as HTMLElement).style.display = "none";
                }}
            />
        </div>
    );
}

function AuthorCard({ mobile = false }: { mobile?: boolean }) {
    const size = mobile ? "72px" : "90px";
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "1.1rem",
                border: "1px solid #e8e4df",
                padding: mobile ? "1.75rem 1.5rem" : "2rem 1.5rem",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: mobile ? "0 auto 0.875rem" : "0 auto 1.1rem",
                    position: "relative",
                    background: "#e8e4df",
                }}
            >
                <Image
                    src="/images/mathew-chiweda.webp"
                    alt="Mathew Chiweda"
                    fill
                    sizes={size}
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                />
            </div>
            <p
                style={{
                    margin: "0 0 0.3rem",
                    fontWeight: 700,
                    color: "#111827",
                    fontSize: mobile ? "1rem" : "1.05rem",
                    fontFamily: fontFamily,
                }}
            >
                Mathew Chiweda
            </p>
            <p
                style={{
                    margin: mobile ? "0 0 1rem" : "0 0 1.1rem",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    fontFamily: fontFamily,
                }}
            >
                Author
            </p>
            {!mobile && <div style={{ height: "1px", background: "#f0ede8", margin: "0 0 1.1rem" }} />}
            <p
                style={{
                    margin: mobile ? "0 0 1.25rem" : "0 0 1.75rem",
                    fontSize: "0.875rem",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    fontFamily: fontFamily,
                }}
            >
                Mathew Chiweda is a PDCA ISO Audit Specialist and Co-founder of iAudit Global. With extensive
                experience across quality, health and safety, environmental management and auditing, he supports
                organisations in implementing practical management systems, conducting effective audits and improving
                performance across complex operational environments and multiple sectors.
            </p>
            <Link
                href="/contact"
                style={{
                    display: "block",
                    background: "#3d5a47",
                    color: "#fff",
                    padding: mobile ? "0.75rem 1rem" : "0.8rem 1rem",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: fontFamily,
                }}
            >
                Free consultation
            </Link>
        </div>
    );
}

const fontFamily = '"Pp Neue Montreal", sans-serif';

export default function RiskRegisterBlogContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("intro");
    const [tocOpen, setTocOpen] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            for (let index = tocItems.length - 1; index >= 0; index -= 1) {
                const element = document.getElementById(tocItems[index].id);
                if (element && element.getBoundingClientRect().top < 140) {
                    setActiveSection(tocItems[index].id);
                    return;
                }
            }
            setActiveSection(tocItems[0].id);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (isMobile) setTocOpen(false);
    };

    return (
        <div style={{ backgroundColor: "#f9f7f4", minHeight: "100vh", fontFamily: fontFamily }}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: isMobile ? "55vw" : "70vh",
                    minHeight: isMobile ? "240px" : "440px",
                    maxHeight: "700px",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={HERO_IMAGE}
                    alt="How to Maintain an ISO 9001 Risk Register"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.58) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: isMobile ? "1rem" : "2rem",
                        left: isMobile ? "1.25rem" : "2.5rem",
                        right: isMobile ? "1.25rem" : "2.5rem",
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            background: "rgba(255,255,255,0.18)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.35)",
                            color: "#fff",
                            borderRadius: "999px",
                            padding: "3px 14px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.09em",
                            textTransform: "uppercase",
                            marginBottom: "0.625rem",
                            fontFamily: fontFamily,
                        }}
                    >
                        Risk-Based Auditing
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={heroMetaStyle}>
                            <CalendarIcon />
                            August 31, 2026
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>●</span>
                        <span style={heroMetaStyle}>
                            <ClockIcon />
                            10 Min Read
                        </span>
                    </div>
                </div>
            </div>

            <div
                style={{
                    borderBottom: "1px solid #e8e4df",
                    backgroundColor: "#f9f7f4",
                    position: "sticky",
                    top: 0,
                    zIndex: 40,
                }}
            >
                <div
                    style={{
                        maxWidth: "1260px",
                        margin: "0 auto",
                        padding: "0 1.5rem",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Link
                        href="/blog"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            color: "#6B7280",
                            fontSize: "0.79rem",
                            fontWeight: 500,
                            textDecoration: "none",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            fontFamily: fontFamily,
                        }}
                    >
                        <BackIcon />
                        Back To Blog
                    </Link>
                    {isMobile && (
                        <button
                            onClick={() => setTocOpen((value) => !value)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                background: "none",
                                border: "1px solid #e8e4df",
                                borderRadius: "6px",
                                padding: "4px 10px",
                                cursor: "pointer",
                                color: "#374151",
                                fontSize: "0.79rem",
                                fontFamily: fontFamily,
                            }}
                        >
                            <MenuIcon />
                            Contents
                        </button>
                    )}
                </div>
                {isMobile && tocOpen && (
                    <div
                        style={{
                            background: "#fff",
                            borderBottom: "1px solid #e8e4df",
                            padding: "0.875rem 1.25rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1px",
                        }}
                    >
                        {tocItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                style={{
                                    textAlign: "left",
                                    background: activeSection === item.id ? "rgba(0,102,68,0.07)" : "transparent",
                                    border: "none",
                                    borderLeft: activeSection === item.id ? "3px solid #006644" : "3px solid transparent",
                                    padding: "0.45rem 0.75rem",
                                    borderRadius: "0 5px 5px 0",
                                    cursor: "pointer",
                                    fontSize: "0.84rem",
                                    color: activeSection === item.id ? "#006644" : "#6B7280",
                                    fontWeight: activeSection === item.id ? 600 : 400,
                                    fontFamily: fontFamily,
                                    lineHeight: 1.4,
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div
                style={{
                    maxWidth: "1260px",
                    margin: "0 auto",
                    padding: isMobile ? "2rem 1.25rem" : "3rem 1.5rem 5rem",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "210px 1fr 240px",
                    gap: isMobile ? "2rem" : "3rem",
                    alignItems: "start",
                }}
            >
                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <p style={contentsLabelStyle}>Contents</p>
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    left: "10px",
                                    top: 0,
                                    bottom: 0,
                                    width: "1px",
                                    background: "#e4e0db",
                                }}
                            />
                            <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                                {tocItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        style={{
                                            textAlign: "left",
                                            border: "none",
                                            padding: "0.48rem 0.625rem 0.48rem 1.5rem",
                                            cursor: "pointer",
                                            fontSize: "0.845rem",
                                            fontFamily: fontFamily,
                                            lineHeight: 1.38,
                                            color: activeSection === item.id ? "#006644" : "#6B7280",
                                            fontWeight: activeSection === item.id ? 600 : 400,
                                            background: activeSection === item.id ? "rgba(0,102,68,0.06)" : "transparent",
                                            borderRadius: "0 6px 6px 0",
                                            borderLeft: activeSection === item.id ? "2px solid #006644" : "2px solid transparent",
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>
                )}

                <article>
                    <h1 style={h1Style(isMobile)}>
                        How to Maintain an ISO 9001 Risk Register: Keeping Risk Management Current and Actionable
                    </h1>

                    <div id="tldr" style={{ scrollMarginTop: "58px", marginBottom: "2rem" }}>
                        <div
                            style={{
                                background: "rgba(0,102,68,0.05)",
                                border: "1px solid rgba(0,102,68,0.14)",
                                borderRadius: "0.875rem",
                                padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                            }}
                        >
                            <h2 style={{ ...h2Style(fontFamily), marginBottom: "0.75rem" }}>TL;DR</h2>
                            <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#374151", lineHeight: 1.75, fontSize: "0.95rem", fontFamily: fontFamily }}>
                                <li>Maintaining an ISO 9001 risk register means keeping risk information current, relevant and connected to the QMS, not simply updating a document.</li>
                                <li>Review the register when processes, suppliers, equipment, customer requirements, responsibilities or other significant conditions change.</li>
                                <li>Check that each risk still applies, controls remain effective, actions have been completed and ownership is still correct.</li>
                                <li>Use audit findings, nonconformities and corrective actions as evidence when reassessing risks and controls.</li>
                                <li>A spreadsheet can work for simple risk registers, but multiple files, manual updates and disconnected actions can make risk management difficult to maintain.</li>
                                <li>A well-maintained register should connect risks, actions, audits, evidence, findings and effectiveness reviews.</li>
                                <li>For complex audit programmes, iAudit connects evidence capture, findings and corrective-action tracking to make risk information more actionable.</li>
                            </ul>
                        </div>
                    </div>

                    <div id="intro" style={{ scrollMarginTop: "58px" }}>
                        <p style={paraStyle}>An ISO 9001 risk register can look perfectly complete on paper. Every risk has a score, an owner and an action. The problem is what happens after it has been completed.</p>
                        <p style={paraStyle}>Processes change. Suppliers change. People change. Customer requirements change. Audits uncover new problems. Corrective actions are raised. Yet the risk register can remain exactly as it was six months earlier.</p>
                        <p style={paraStyle}>That is why how to maintain an ISO 9001 risk register is more important than simply knowing how to create one.</p>
                        <p style={paraStyle}>A risk register should reflect what is actually happening in the organisation. If it becomes a document that is updated only before an audit, it can create the appearance of control without helping people manage risk.</p>
                    </div>

                    <div id="requirements" style={sectionStyle}>
                        <h2 style={h2Style(fontFamily)}>What Does ISO 9001 Require from a Risk Register?</h2>
                        <SectionImage src={sectionImages.requirements} alt="Team reviewing an ISO 9001 risk register" />
                        <p style={paraStyle}>ISO 9001:2015 does not require organisations to use a specific risk register, spreadsheet or software application.</p>
                        <p style={paraStyle}>Clause 6.1 requires organisations to determine the risks and opportunities that need to be addressed, plan actions to address them, integrate those actions into the management system processes and evaluate their effectiveness.</p>
                        <p style={paraStyle}>That distinction matters.</p>
                        <p style={paraStyle}>The requirement is not to maintain a particular type of document. It is to make risk-based thinking part of how the management system operates.</p>
                        <p style={paraStyle}>A register can help provide structure and documented information, but it should support decisions and actions rather than become the end result.</p>
                        <p style={paraStyle}>
                            This is where{" "}
                            <Link href="/blog/how-to-audit-risk-based-thinking" style={inlineLinkStyle}>
                                risk-based thinking in ISO 9001
                            </Link>{" "}
                            becomes important. Risk should influence how processes are planned, controlled, monitored and improved, rather than sitting separately in a table.
                        </p>
                    </div>

                    <div id="updates" style={sectionStyle}>
                        <h2 style={h2Style(fontFamily)}>When Should an ISO 9001 Risk Register Be Updated?</h2>
                        <SectionImage src={sectionImages.updates} alt="Risk and performance information being reviewed" />
                        <p style={paraStyle}>There is no single review interval that will suit every organisation. An annual review may be appropriate for some risks, but relying on an annual calendar alone can leave important changes unrecorded.</p>
                        <p style={paraStyle}>A risk register should be reviewed when something changes that could affect the organisation’s risks or the effectiveness of its controls.</p>
                        <p style={paraStyle}>For example:</p>
                        <BulletList
                            items={[
                                "A new product, service or process is introduced",
                                "Equipment, technology or facilities change",
                                "A significant supplier changes",
                                "Customer or regulatory requirements change",
                                "Responsibilities or resources change",
                                "Audit findings identify weaknesses",
                                "A nonconformity occurs repeatedly",
                                "A corrective action changes an existing control",
                                "Performance data shows that a control is not working as expected",
                                "A new internal or external issue affects the organisation",
                            ]}
                        />
                        <p style={paraStyle}>The point is not to update the register for the sake of updating it. The point is to make sure the organisation’s current understanding of risk reflects current conditions.</p>
                    </div>

                    <div id="maintenance" style={sectionStyle}>
                        <h2 style={h2Style(fontFamily)}>How to Maintain an ISO 9001 Risk Register</h2>
                        <SectionImage src={sectionImages.maintenance} alt="Management system review and risk register maintenance" />
                        <p style={paraStyle}>Maintaining the register involves more than changing risk scores. Each risk should be tested against what is actually happening.</p>
                        <NumberedStep number="1" title="Check whether the risk is still relevant">
                            Some risks become less significant. Others become more important. Ask whether the circumstances that created the original risk still exist. If they have changed, the risk description or assessment may need to change with them.
                        </NumberedStep>
                        <NumberedStep number="2" title="Review the controls">
                            A risk score should not remain unchanged simply because nobody has edited the spreadsheet. Look at the controls that are supposed to manage the risk. Are they still in place? Are they being followed? Are they producing the intended result?
                        </NumberedStep>
                        <NumberedStep number="3" title="Check whether actions were completed">
                            An action marked as “complete” is not necessarily an effective action. There should be evidence that the action was implemented and, where appropriate, that it achieved its intended result. This is particularly important when audit findings or corrective actions have been used to address a risk.
                        </NumberedStep>
                        <NumberedStep number="4" title="Confirm ownership">
                            People move roles. Responsibilities change. Departments are reorganised. A risk with an owner who no longer has responsibility for the relevant process is not properly managed, even if the register itself is up to date.
                        </NumberedStep>
                        <NumberedStep number="5" title="Look at what the audits are telling you">
                            Internal audits provide information that can change your understanding of risk. If the same weakness appears repeatedly, the organisation should question whether the existing risk assessment and controls are adequate.
                        </NumberedStep>
                        <p style={paraStyle}>
                            <Link href="/blog/why-audit-data-arrives-too-late-costing-control" style={inlineLinkStyle}>
                                Effective auditing risk-based thinking
                            </Link>{" "}
                            means looking beyond whether a risk register exists and asking whether risk-based decisions can actually be seen in the way processes are managed.
                        </p>
                    </div>

                    <div id="spreadsheets" style={sectionStyle}>
                        <h2 style={h2Style(fontFamily)}>Why Spreadsheets Can Make Risk-Register Maintenance Difficult</h2>
                        <SectionImage src={sectionImages.spreadsheets} alt="Risk information managed across spreadsheets and dashboards" />
                        <p style={paraStyle}>There is nothing inherently wrong with using Excel for a risk register. For a small organisation with a limited number of risks, it may be perfectly practical.</p>
                        <p style={paraStyle}>The difficulty comes when the spreadsheet becomes disconnected from everything around it.</p>
                        <p style={paraStyle}>The risk may be recorded in Excel. The action may be tracked in an email. Evidence may sit in a shared folder. An audit finding may be recorded somewhere else. Corrective action may have its own tracker.</p>
                        <p style={paraStyle}>The information exists, but the connection between it becomes difficult to follow.</p>
                        <p style={paraStyle}>This is where what could be called “ghost compliance” appears. The organisation has the records needed to show that risks have been considered, but those records are no longer driving action.</p>
                        <p style={paraStyle}>Version control can add another problem. Different sites or departments may maintain different copies of the same register. By the time someone brings them together for management review, the information may already be out of date.</p>
                        <p style={paraStyle}>The bigger issue is therefore not the spreadsheet itself. It is the gap between recording risk and actively managing risk.</p>
                    </div>

                    <div id="findings" style={sectionStyle}>
                        <h2 style={h2Style(fontFamily)}>Your Audit Findings Should Influence Your Risk Register</h2>
                        <SectionImage src={sectionImages.findings} alt="Manufacturing audit evidence informing risk management" />
                        <p style={paraStyle}>A maintained risk register should learn from what happens inside the management system.</p>
                        <p style={paraStyle}>Consider a manufacturing process where an internal audit identifies repeated problems with inspection records. If the finding is closed but the risk register remains unchanged, an opportunity has been missed.</p>
                        <p style={paraStyle}>The organisation should ask whether:</p>
                        <BulletList
                            items={[
                                "The original risk assessment was accurate",
                                "The existing control is effective",
                                "The action addressed the underlying cause",
                                "Additional resources are required",
                                "The process needs stronger controls",
                                "The risk level should be reassessed",
                            ]}
                        />
                        <p style={paraStyle}>
                            This is also why audit information needs to reach the people responsible for managing risk while it is still useful. When{" "}
                            <Link href="/blog/why-audit-data-arrives-too-late-costing-control" style={inlineLinkStyle}>
                                audit data arrives too late
                            </Link>
                            , findings can become historical information rather than input into current decisions.
                        </p>
                        <p style={paraStyle}>
                            In manufacturing environments, this becomes even more important because operational conditions can change quickly.{" "}
                            <Link href="/blog/risk-based-auditing-in-manufacturing" style={inlineLinkStyle}>
                                Risk-based auditing in manufacturing
                            </Link>{" "}
                            can help focus audit attention where changes, failures and operational risks are most significant.
                        </p>
                    </div>

                    <div id="well-maintained" style={sectionStyle}>
                        <h2 style={h2Style(fontFamily)}>What Does a Well-Maintained ISO 9001 Risk Register Look Like?</h2>
                        <p style={paraStyle}>A useful risk register should be current, owned and connected to the management system.</p>
                        <p style={paraStyle}>It should help answer straightforward questions:</p>
                        <BulletList
                            items={[
                                "What could go wrong?",
                                "What are we doing about it?",
                                "Who is responsible?",
                                "What evidence shows that the control is working?",
                                "What has changed?",
                                "What have our audits and performance data told us?",
                                "Does the risk need to be reassessed?",
                            ]}
                        />
                        <p style={paraStyle}>If answering these questions requires searching through several spreadsheets, emails and folders, the register may be documenting risk without really helping to manage it.</p>
                        <p style={paraStyle}>For organisations with multiple sites, larger audit programmes or significant numbers of corrective actions, a connected digital system can make these relationships easier to maintain.</p>
                    </div>

                    <div id="live" style={sectionStyle}>
                        <h2 style={h2Style(fontFamily)}>From a Risk Register to Live Risk Management</h2>
                        <SectionImage src={sectionImages.live} alt="Connected risk management and audit workflow" />
                        <p style={paraStyle}>The useful shift is not simply from Excel to software. It is from a static risk record to connected risk information.</p>
                        <p style={paraStyle}>A risk can lead to an action. An action can be checked through an audit. The audit can generate evidence and findings. Findings can lead to corrective actions. Those actions can then be reviewed for effectiveness, and the results can inform the next assessment of risk.</p>
                        <div style={flowCalloutStyle}>
                            <p style={{ margin: 0, fontSize: "1.05rem", color: "#111827", lineHeight: 1.75, fontWeight: 600, fontFamily: fontFamily, textAlign: "center" }}>
                                Risk → Action → Audit → Evidence → Finding → Corrective Action → Effectiveness → Review
                            </p>
                        </div>
                        <p style={paraStyle}>This is where a platform such as iAudit can support the process. Its findings dashboard, evidence capture and corrective-action tracking bring information that is often scattered across separate files into a more connected audit workflow.</p>
                        <p style={paraStyle}>The aim is not to create another place to store a risk register. It is to make the information around risk more visible and actionable.</p>
                        <p style={paraStyle}>
                            If your organisation is finding it difficult to keep risks, findings, evidence and corrective actions connected,{" "}
                            <a href="https://apps.iaudit.global/" target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>
                                you can try iAudit free for 14 days
                            </a>{" "}
                            and explore the workflow for yourself.
                        </p>
                    </div>

                    <div id="faq" style={{ scrollMarginTop: "58px", marginTop: "2.75rem" }}>
                        <FAQAccordion items={faqAccordionItems} heading="Frequently asked questions" sparkleText="Support" />
                    </div>

                    <div id="conclusion" style={{ scrollMarginTop: "58px", marginTop: "2.5rem" }}>
                        <div style={conclusionStyle}>
                            <div style={patternStyle} />
                            <h2 style={conclusionHeadingStyle(isMobile)}>Keep Risk Information Current and Connected</h2>
                            <p style={conclusionParagraphStyle}>An ISO 9001 risk register is most useful when it reflects current conditions and supports real decisions.</p>
                            <p style={conclusionParagraphStyle}>Review it when things change, test whether controls work, use audit evidence and make sure actions and ownership remain clear.</p>
                            <p style={conclusionParagraphStyle}>When risk information connects to audits, evidence, findings and corrective actions, it becomes part of an active management cycle rather than a document maintained for the next audit.</p>
                            <Link
                                href="https://apps.iaudit.global/"
                                style={{
                                    display: "inline-block",
                                    position: "relative",
                                    marginTop: "0.5rem",
                                    background: "#fff",
                                    color: "#006644",
                                    padding: "0.75rem 1.2rem",
                                    borderRadius: "999px",
                                    fontWeight: 700,
                                    fontSize: "0.78rem",
                                    textDecoration: "none",
                                    fontFamily: fontFamily,
                                }}
                            >
                                Try iAudit free for 14 days
                            </Link>
                        </div>
                    </div>
                </article>

                {!isMobile && (
                    <aside style={{ position: "sticky", top: "58px", alignSelf: "start" }}>
                        <AuthorCard />
                    </aside>
                )}
                {isMobile && <AuthorCard mobile />}
            </div>

            <CTA />
            <Footer />
        </div>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul style={{ margin: "0 0 1.25rem", paddingLeft: 0, listStyle: "none" }}>
            {items.map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem", fontFamily: fontFamily }}>
                    <span style={{ color: "#006644", flexShrink: 0, marginTop: "3px", fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: "0.975rem", color: "#374151", lineHeight: 1.7 }}>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function NumberedStep({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
    return (
        <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.1rem 1.4rem", marginBottom: "0.75rem", border: "1px solid #e8e4df", borderLeft: "4px solid #006644" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ minWidth: "25px", height: "25px", borderRadius: "50%", background: "rgba(0,102,68,0.1)", color: "#006644", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {number}
                </span>
                <div>
                    <h3 style={{ ...h3Style(fontFamily), marginBottom: "0.4rem" }}>{title}</h3>
                    <p style={{ ...paraStyle, marginBottom: 0 }}>{children}</p>
                </div>
            </div>
        </div>
    );
}

const sectionStyle: React.CSSProperties = { scrollMarginTop: "58px", marginTop: "2.25rem" };
const paraStyle: React.CSSProperties = { fontSize: "0.98rem", color: "#374151", lineHeight: 1.85, margin: "0 0 1rem", fontFamily: fontFamily };
const inlineLinkStyle: React.CSSProperties = { color: "#006644", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" };
const contentsLabelStyle: React.CSSProperties = { fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#374151", margin: "0 0 0.625rem", fontFamily: fontFamily };
const flowCalloutStyle: React.CSSProperties = { background: "rgba(0,102,68,0.05)", borderRadius: "0.875rem", border: "1px solid rgba(0,102,68,0.12)", padding: "1.25rem 1rem", margin: "1.25rem 0" };
const conclusionStyle: React.CSSProperties = { background: "linear-gradient(135deg, #002e1d 0%, #006644 100%)", borderRadius: "1.1rem", padding: "2.25rem", color: "#fff", position: "relative", overflow: "hidden" };
const patternStyle: React.CSSProperties = { position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.055) 1px, transparent 0)", backgroundSize: "24px 24px", pointerEvents: "none" };
const heroMetaStyle: React.CSSProperties = { color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "5px", fontFamily: fontFamily };
const conclusionParagraphStyle: React.CSSProperties = { color: "rgba(255,255,255,0.82)", fontSize: "0.975rem", lineHeight: 1.8, margin: "0 0 0.875rem", position: "relative", fontFamily: fontFamily };
const conclusionHeadingStyle = (mobile: boolean): React.CSSProperties => ({ fontSize: mobile ? "1.45rem" : "1.85rem", fontWeight: 600, color: "#fff", margin: "0 0 0.75rem", fontFamily: fontFamily, lineHeight: 1.25, position: "relative" });
const h1Style = (mobile: boolean): React.CSSProperties => ({ fontSize: mobile ? "2.15rem" : "2.85rem", fontWeight: 600, color: "#111827", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1rem", fontFamily: fontFamily });
const h2Style = (font: string): React.CSSProperties => ({ fontSize: "1.6rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.018em", lineHeight: 1.28, margin: "0 0 0.75rem", fontFamily: font });
const h3Style = (font: string): React.CSSProperties => ({ fontSize: "1.15rem", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", lineHeight: 1.3, margin: "0 0 0.625rem", fontFamily: font });

function CalendarIcon() {
    return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}

function ClockIcon() {
    return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}

function BackIcon() {
    return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
}

function MenuIcon() {
    return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /></svg>;
}

