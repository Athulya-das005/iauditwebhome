"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";

const FONT = '"Pp Neue Montreal", sans-serif';

function InlineLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            style={{
                color: "#006644",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                wordBreak: "break-word",
            }}
        >
            {children}
        </a>
    );
}

function BulletList({ items }: { items: ReactNode[] }) {
    return (
        <ul
            style={{
                margin: "0.75rem 0 1.25rem",
                paddingLeft: "1.25rem",
                color: "#374151",
                lineHeight: 1.75,
            }}
        >
            {items.map((item, i) => (
                <li key={i} style={{ marginBottom: "0.45rem" }}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

function Section({
    number,
    title,
    children,
    h2,
}: {
    number: number;
    title: string;
    children: ReactNode;
    h2: CSSProperties;
}) {
    return (
        <section id={`section-${number}`} style={{ scrollMarginTop: "100px" }}>
            <h2 style={h2}>
                {number}. {title}
            </h2>
            {children}
        </section>
    );
}

export default function TermsAndConditionsContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const h2: CSSProperties = {
        fontSize: isMobile ? "1.15rem" : "1.35rem",
        fontWeight: 700,
        color: "#111827",
        margin: "2.25rem 0 0.85rem",
        lineHeight: 1.3,
        letterSpacing: "-0.015em",
    };

    const para: CSSProperties = {
        margin: "0 0 1rem",
        fontSize: isMobile ? "0.95rem" : "1rem",
        color: "#374151",
        lineHeight: 1.8,
    };

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
                        Terms and Conditions
                    </h1>
                    <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? "0.92rem" : "1rem" }}>
                        Last updated: September 23, 2026
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
                <p style={para}>
                    These Terms and Conditions govern your access to and use of the iAudit Global website and software
                    services provided by iAudit Global Limited.
                </p>
                <p style={para}>
                    By creating an account, starting a free trial, purchasing a subscription or using the iAudit Global
                    services, you agree to these Terms and Conditions. If you do not agree to these Terms, you should
                    not use the services.
                </p>

                <Section number={1} title="About iAudit Global" h2={h2}>
                    <p style={para}>iAudit Global Limited provides cloud-based ISO audit management software.</p>
                    <div
                        style={{
                            background: "#fff",
                            border: "1px solid #e8e4df",
                            borderRadius: "1rem",
                            padding: isMobile ? "1.15rem" : "1.35rem 1.5rem",
                            margin: "0.5rem 0 1.25rem",
                        }}
                    >
                        <p style={{ ...para, marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#111827" }}>Company:</strong> iAudit Global Limited
                        </p>
                        <p style={{ ...para, marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#111827" }}>Registered address:</strong> Unit 17f, The Lansbury
                            Estates, Surrey, England, United Kingdom
                        </p>
                        <p style={{ ...para, marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#111827" }}>Website:</strong>{" "}
                            <InlineLink href="https://www.iaudit.global">https://www.iaudit.global</InlineLink>
                        </p>
                        <p style={{ ...para, marginBottom: 0 }}>
                            <strong style={{ color: "#111827" }}>Email:</strong>{" "}
                            <InlineLink href="mailto:info@iaudit.global">info@iaudit.global</InlineLink>
                        </p>
                    </div>
                </Section>

                <Section number={2} title="Our Services" h2={h2}>
                    <p style={para}>
                        iAudit Global provides cloud-based software designed to help organisations plan, conduct,
                        manage and report on ISO management system audits.
                    </p>
                    <p style={para}>The services may include:</p>
                    <BulletList
                        items={[
                            "audit programme planning and management",
                            "audit scheduling and assignment",
                            "audit checklists and templates",
                            "evidence capture and management",
                            "findings and non-conformity management",
                            "corrective action tracking",
                            "audit reporting",
                            "dashboards and audit performance information",
                            "self-assessments and gap analyses",
                            "multi-site audit management",
                            "user and role management",
                            "AI-assisted audit preparation and management",
                            "other features made available through the platform from time to time",
                        ]}
                    />
                    <p style={para}>
                        The services are designed to support audits relating to standards including ISO 9001, ISO 14001
                        and ISO 45001.
                    </p>
                    <p style={para}>
                        iAudit Global is a software provider. Use of the platform does not itself constitute
                        certification, accreditation, legal advice, professional auditing services or a guarantee that
                        an organisation will achieve or maintain certification against any ISO standard.
                    </p>
                </Section>

                <Section number={3} title="Eligibility and Authority" h2={h2}>
                    <p style={para}>You must be legally capable of entering into a binding agreement to use the services.</p>
                    <p style={para}>
                        If you use the services on behalf of a company, organisation or other legal entity, you confirm
                        that you have authority to enter into these Terms on its behalf.
                    </p>
                    <p style={para}>
                        You are responsible for ensuring that all users accessing the account through your organisation
                        are authorised to do so.
                    </p>
                </Section>

                <Section number={4} title="Creating an Account" h2={h2}>
                    <p style={para}>Some features require you to create an account.</p>
                    <p style={para}>
                        You must provide accurate and complete information when creating an account and keep that
                        information up to date.
                    </p>
                    <p style={para}>
                        You are responsible for maintaining the confidentiality of your login credentials and for
                        activities carried out through your account.
                    </p>
                    <p style={para}>
                        You must notify us promptly if you believe that your account has been accessed without
                        authorisation.
                    </p>
                    <p style={para}>
                        You must not share account credentials in a way that allows unauthorised individuals to access
                        the services.
                    </p>
                </Section>

                <Section number={5} title="Free Trial" h2={h2}>
                    <p style={para}>We may offer a free trial for certain services or subscription plans.</p>
                    <p style={para}>
                        The duration and features available during a free trial will be stated when the trial is
                        offered.
                    </p>
                    <p style={para}>
                        Unless otherwise stated, a free trial does not require payment during the trial period.
                    </p>
                    <p style={para}>
                        We may limit, modify or discontinue a free trial at any time. Where a free trial is subject to
                        conversion into a paid subscription, the applicable pricing and billing terms will be presented
                        before payment is required.
                    </p>
                </Section>

                <Section number={6} title="Subscriptions and Fees" h2={h2}>
                    <p style={para}>Certain features and services require a paid subscription.</p>
                    <p style={para}>
                        Current pricing is available at:{" "}
                        <InlineLink href="https://www.iaudit.global/pricing">
                            https://www.iaudit.global/pricing
                        </InlineLink>
                    </p>
                    <p style={para}>
                        The applicable subscription, pricing, billing frequency and features will be shown when you
                        purchase or upgrade a subscription.
                    </p>
                    <p style={para}>
                        Unless otherwise stated, subscription fees are charged in advance for the applicable billing
                        period.
                    </p>
                    <p style={para}>
                        You are responsible for providing accurate billing information and ensuring that payments can
                        be processed successfully.
                    </p>
                    <p style={para}>
                        We may use third-party payment providers to process payments. Payment information may be
                        handled by those providers in accordance with their own terms and privacy policies.
                    </p>
                </Section>

                <Section number={7} title="Changes to Pricing" h2={h2}>
                    <p style={para}>We may change our subscription prices from time to time.</p>
                    <p style={para}>
                        Where a price change affects an existing subscription, we will provide reasonable notice before
                        the new price applies to the relevant renewal or billing period.
                    </p>
                    <p style={para}>
                        A price change will not affect a billing period that has already been paid for unless otherwise
                        agreed.
                    </p>
                </Section>

                <Section number={8} title="Renewal and Cancellation" h2={h2}>
                    <p style={para}>Subscriptions may renew automatically where this is stated at the time of purchase.</p>
                    <p style={para}>
                        You may cancel your subscription in accordance with the cancellation process made available
                        through the service or by contacting us.
                    </p>
                    <p style={para}>
                        Cancellation will normally take effect at the end of the current paid billing period unless
                        otherwise stated.
                    </p>
                    <p style={para}>
                        Unless required by law or expressly agreed by us, cancellation does not automatically entitle
                        you to a refund for a period that has already been paid for.
                    </p>
                </Section>

                <Section number={9} title="Your Responsibilities" h2={h2}>
                    <p style={para}>You are responsible for:</p>
                    <BulletList
                        items={[
                            "using the services in accordance with these Terms",
                            "ensuring that your users comply with these Terms",
                            "maintaining appropriate access controls for your account",
                            "ensuring that information entered into the platform is accurate and appropriate for your purposes",
                            "maintaining appropriate backups or copies of information where necessary for your organisation",
                            "ensuring that your use of the services complies with applicable laws and regulations",
                        ]}
                    />
                    <p style={para}>You must not use the services to:</p>
                    <BulletList
                        items={[
                            "break the law or facilitate unlawful activity",
                            "gain unauthorised access to the platform or another user's account",
                            "interfere with the operation or security of the services",
                            "introduce malicious code, malware or other harmful material",
                            "attempt to bypass security or access controls",
                            "copy, reproduce, modify or commercially exploit the platform except as permitted by these Terms",
                            "use the platform to develop a competing product or service",
                            "misuse or overload the platform or its infrastructure",
                        ]}
                    />
                </Section>

                <Section number={10} title="Your Data" h2={h2}>
                    <p style={para}>
                        You retain ownership of the information, records, documents, evidence and other content that you
                        submit to the platform.
                    </p>
                    <p style={para}>
                        You grant iAudit Global the limited rights necessary to host, process, transmit, display and
                        otherwise handle your content solely to provide and operate the services.
                    </p>
                    <p style={para}>
                        We will handle personal data in accordance with our Privacy Policy and any applicable data
                        protection agreement.
                    </p>
                    <p style={para}>
                        Our Privacy Policy is available at:{" "}
                        <InlineLink href="https://www.iaudit.global/privacy-policy">
                            https://www.iaudit.global/privacy-policy
                        </InlineLink>
                    </p>
                    <p style={para}>
                        You are responsible for ensuring that you have the necessary rights and permissions to upload
                        personal data, documents and other information to the platform.
                    </p>
                </Section>

                <Section number={11} title="Security" h2={h2}>
                    <p style={para}>
                        We take reasonable technical and organisational measures to protect information processed
                        through the services.
                    </p>
                    <p style={para}>
                        Our security measures may include encryption, access controls, authentication measures, backups
                        and security logging.
                    </p>
                    <p style={para}>
                        No online service can be guaranteed to be completely secure. You remain responsible for
                        maintaining appropriate security practices within your organisation, including protecting
                        account credentials and controlling user access.
                    </p>
                    <p style={para}>
                        Further information about our security measures may be provided through the website or upon
                        request.
                    </p>
                </Section>

                <Section number={12} title="Intellectual Property" h2={h2}>
                    <p style={para}>
                        The iAudit Global software, website, design, branding, documentation, templates, interfaces,
                        software code and other materials provided by us remain the property of iAudit Global Limited
                        or our licensors.
                    </p>
                    <p style={para}>
                        Except for the limited right to use the services during your subscription, these Terms do not
                        transfer ownership of our intellectual property to you.
                    </p>
                    <p style={para}>
                        You must not copy, modify, distribute, sell, licence, reverse engineer or otherwise exploit our
                        intellectual property except where expressly permitted by law or these Terms.
                    </p>
                    <p style={para}>You retain ownership of content that you submit to the platform.</p>
                </Section>

                <Section number={13} title="Audit Templates and Guidance" h2={h2}>
                    <p style={para}>
                        The platform may provide audit templates, checklists, suggested questions, guidance and other
                        materials.
                    </p>
                    <p style={para}>
                        These materials are provided to support your audit activities. They do not replace professional
                        judgement, applicable ISO standards, legal requirements, regulatory requirements or the advice
                        of a suitably qualified professional.
                    </p>
                    <p style={para}>
                        You are responsible for determining whether a particular audit approach, evidence requirement,
                        finding or corrective action is appropriate for your organisation.
                    </p>
                </Section>

                <Section number={14} title="AI Features" h2={h2}>
                    <p style={para}>
                        Some iAudit Global features may use artificial intelligence to assist with audit preparation,
                        analysis, content generation or other tasks.
                    </p>
                    <p style={para}>
                        AI-generated outputs may contain errors, omissions or inaccuracies and should be reviewed by an
                        appropriately qualified person before being relied upon.
                    </p>
                    <p style={para}>
                        AI features are provided as an aid to your work and do not replace professional judgement or
                        independent assessment.
                    </p>
                    <p style={para}>
                        You remain responsible for reviewing and verifying AI-generated content before using it in an
                        audit, report, compliance decision or other business process.
                    </p>
                </Section>

                <Section number={15} title="Availability and Support" h2={h2}>
                    <p style={para}>We will use reasonable efforts to keep the services available and operational.</p>
                    <p style={para}>
                        However, we do not guarantee that the services will always be available, uninterrupted or
                        error-free.
                    </p>
                    <p style={para}>
                        The services may occasionally be unavailable because of maintenance, updates, security measures,
                        technical issues, third-party services or circumstances outside our reasonable control.
                    </p>
                    <p style={para}>
                        Customer support is available by email, chat and phone, subject to the support arrangements
                        applicable to your subscription.
                    </p>
                    <p style={para}>
                        Unless a separate written agreement states otherwise, we do not provide a guaranteed service
                        level or response time.
                    </p>
                </Section>

                <Section number={16} title="Third-Party Services" h2={h2}>
                    <p style={para}>The platform may integrate with or depend on third-party services.</p>
                    <p style={para}>Third-party services may be subject to separate terms and privacy policies.</p>
                    <p style={para}>
                        We are not responsible for the availability, security, performance or content of third-party
                        services that are outside our control.
                    </p>
                </Section>

                <Section number={17} title="Confidentiality" h2={h2}>
                    <p style={para}>
                        Each party may receive confidential information belonging to the other party in connection with
                        the services.
                    </p>
                    <p style={para}>
                        Each party agrees to use reasonable measures to protect confidential information and not
                        disclose it to third parties except where disclosure is required by law, necessary to provide
                        the services, or otherwise permitted by these Terms.
                    </p>
                    <p style={para}>
                        Information that is already publicly available, independently developed or lawfully obtained
                        from another source is not confidential information for the purposes of this section.
                    </p>
                </Section>

                <Section number={18} title="Suspension" h2={h2}>
                    <p style={para}>We may suspend access to all or part of the services where reasonably necessary to:</p>
                    <BulletList
                        items={[
                            "protect the security or integrity of the platform",
                            "prevent misuse or unlawful activity",
                            "address a security threat",
                            "comply with a legal or regulatory requirement",
                            "address a failure to pay applicable fees",
                            "address a material breach of these Terms",
                        ]}
                    />
                    <p style={para}>Where reasonably practicable, we will provide notice before suspending access.</p>
                </Section>

                <Section number={19} title="Termination" h2={h2}>
                    <p style={para}>Either party may terminate the agreement in accordance with these Terms.</p>
                    <p style={para}>
                        We may terminate or suspend your access where you materially breach these Terms and, where the
                        breach can be remedied, fail to remedy it within a reasonable period after receiving notice.
                    </p>
                    <p style={para}>
                        We may also terminate the services where required by law or where continued provision of the
                        services is no longer reasonably practicable.
                    </p>
                    <p style={para}>
                        On termination, your right to access and use the services will end unless otherwise agreed.
                    </p>
                    <p style={para}>
                        Where appropriate, we will provide a reasonable opportunity for you to retrieve your data before
                        account deletion, subject to applicable legal, technical and security requirements.
                    </p>
                </Section>

                <Section number={20} title="Consequences of Termination" h2={h2}>
                    <p style={para}>Termination does not affect rights or obligations that arose before termination.</p>
                    <p style={para}>
                        Any provisions that by their nature should continue after termination will remain in effect,
                        including provisions relating to intellectual property, confidentiality, liability, payment
                        obligations and dispute resolution.
                    </p>
                </Section>

                <Section number={21} title="Warranties and Disclaimers" h2={h2}>
                    <p style={para}>We will provide the services with reasonable care and skill.</p>
                    <p style={para}>
                        Except where expressly stated in these Terms or required by law, the services are provided
                        without additional warranties or guarantees.
                    </p>
                    <p style={para}>We do not guarantee that use of the platform will result in:</p>
                    <BulletList
                        items={[
                            "ISO certification",
                            "successful completion of an external audit",
                            "compliance with every applicable legal or regulatory requirement",
                            "a particular audit result",
                            "a particular commercial outcome",
                        ]}
                    />
                    <p style={para}>
                        The platform is a software tool designed to support audit and management system activities.
                        Responsibility for decisions made using information produced by the platform remains with the
                        user.
                    </p>
                </Section>

                <Section number={22} title="Limitation of Liability" h2={h2}>
                    <p style={para}>
                        Nothing in these Terms limits or excludes liability where it would be unlawful to do so.
                    </p>
                    <p style={para}>
                        This includes liability for death or personal injury caused by negligence, fraud or fraudulent
                        misrepresentation, or any other liability that cannot legally be excluded or limited.
                    </p>
                    <p style={para}>
                        Subject to the above, iAudit Global Limited will not be liable for indirect, incidental,
                        special or consequential loss, or for loss of profits, revenue, business opportunity, goodwill
                        or anticipated savings, to the extent permitted by law.
                    </p>
                    <p style={para}>
                        Subject to the above, our total liability arising out of or in connection with these Terms will
                        not exceed the amount you paid to us for the services during the 12 months immediately preceding
                        the event giving rise to the relevant claim.
                    </p>
                    <p style={para}>
                        Nothing in this section affects any liability or obligation that cannot legally be limited or
                        excluded.
                    </p>
                </Section>

                <Section number={23} title="Events Outside Our Control" h2={h2}>
                    <p style={para}>
                        We will not be responsible for a failure or delay in performing our obligations where that
                        failure or delay results from circumstances outside our reasonable control.
                    </p>
                    <p style={para}>
                        This may include major technical failures, internet or telecommunications failures, cyber
                        incidents, natural disasters, fire, flood, war, civil unrest, industrial action, government
                        action, changes in law or failures of third-party infrastructure.
                    </p>
                    <p style={para}>
                        We will take reasonable steps to minimise the effect of such circumstances where possible.
                    </p>
                </Section>

                <Section number={24} title="Changes to the Services" h2={h2}>
                    <p style={para}>
                        We may update, improve, modify or discontinue features of the services from time to time.
                    </p>
                    <p style={para}>
                        Where a material change substantially reduces the core functionality of a paid service, we will
                        take reasonable steps to notify affected customers where appropriate.
                    </p>
                    <p style={para}>We are not required to maintain every feature indefinitely.</p>
                </Section>

                <Section number={25} title="Changes to These Terms" h2={h2}>
                    <p style={para}>We may update these Terms from time to time.</p>
                    <p style={para}>
                        Where changes are material, we will take reasonable steps to notify users before the updated
                        Terms take effect.
                    </p>
                    <p style={para}>
                        The updated Terms will apply from the effective date stated in the revised Terms.
                    </p>
                    <p style={para}>
                        Your continued use of the services after the effective date constitutes acceptance of the
                        updated Terms, to the extent permitted by law.
                    </p>
                </Section>

                <Section number={26} title="Notices" h2={h2}>
                    <p style={para}>Formal notices to iAudit Global Limited should be sent by email to:</p>
                    <p style={para}>
                        <InlineLink href="mailto:info@iaudit.global">info@iaudit.global</InlineLink>
                    </p>
                    <p style={para}>or by post to:</p>
                    <p style={{ ...para, whiteSpace: "pre-line" }}>
                        {`iAudit Global Limited
Unit 17f, The Lansbury Estates
Surrey
England
United Kingdom`}
                    </p>
                    <p style={para}>
                        A notice sent by email or post will be considered received 5 days after it is sent, unless the
                        sender receives confirmation that it was not delivered.
                    </p>
                </Section>

                <Section number={27} title="Dispute Resolution" h2={h2}>
                    <p style={para}>
                        If a dispute arises between you and iAudit Global Limited in connection with these Terms, the
                        parties will first try to resolve the matter through good-faith discussions.
                    </p>
                    <p style={para}>
                        If the dispute cannot be resolved through those discussions, either party may refer the dispute
                        to mediation.
                    </p>
                    <p style={para}>
                        The mediation will be conducted in accordance with the Centre for Effective Dispute Resolution
                        (CEDR) Model Mediation Procedure, as amended from time to time.
                    </p>
                    <p style={para}>
                        The mediation will be conducted in English and will take place in England and Wales, unless the
                        parties agree to conduct the mediation remotely or at another location.
                    </p>
                    <p style={para}>
                        The parties will allow 60 days for the mediation process before either party proceeds with court
                        proceedings, unless:
                    </p>
                    <BulletList
                        items={[
                            "the parties agree otherwise",
                            "urgent court action is reasonably required to protect a legal right",
                            "a limitation period or other legal requirement means that court proceedings must be commenced sooner",
                            "the law otherwise permits or requires earlier proceedings",
                        ]}
                    />
                    <p style={para}>
                        If the dispute has not been resolved through mediation within the applicable period, either
                        party may bring court proceedings.
                    </p>
                </Section>

                <Section number={28} title="Governing Law and Jurisdiction" h2={h2}>
                    <p style={para}>
                        These Terms and any dispute or claim arising out of or in connection with them are governed by
                        the laws of England and Wales.
                    </p>
                    <p style={para}>
                        Subject to the dispute resolution provisions above, the courts of England and Wales will have
                        exclusive jurisdiction over disputes arising out of or in connection with these Terms.
                    </p>
                </Section>

                <Section number={29} title="Waiver" h2={h2}>
                    <p style={para}>
                        A failure or delay by either party to exercise a right or remedy under these Terms will not
                        constitute a waiver of that right or remedy.
                    </p>
                    <p style={para}>
                        A waiver is only effective where it is given expressly and applies only to the specific
                        circumstance for which it is given.
                    </p>
                </Section>

                <Section number={30} title="Assignment" h2={h2}>
                    <p style={para}>
                        You may not transfer or assign your rights or obligations under these Terms without our prior
                        written consent, except where permitted by law.
                    </p>
                    <p style={para}>
                        We may transfer or assign our rights and obligations under these Terms as part of a merger,
                        acquisition, corporate restructuring, sale of assets or similar transaction, provided this does
                        not materially reduce your rights under the agreement.
                    </p>
                </Section>

                <Section number={31} title="Severability" h2={h2}>
                    <p style={para}>
                        If any provision of these Terms is found to be unlawful, invalid or unenforceable, that
                        provision will be interpreted or modified to the minimum extent necessary to make it enforceable
                        where legally possible.
                    </p>
                    <p style={para}>The remaining provisions will continue in full effect.</p>
                </Section>

                <Section number={32} title="Entire Agreement" h2={h2}>
                    <p style={para}>
                        These Terms, together with any applicable order, subscription agreement, pricing information,
                        Privacy Policy and other documents expressly incorporated into the agreement, constitute the
                        agreement between you and iAudit Global Limited concerning the services.
                    </p>
                    <p style={para}>
                        They replace any previous agreements or understandings relating to the same subject matter,
                        except where the parties have expressly agreed otherwise in writing.
                    </p>
                </Section>

                <Section number={33} title="No Partnership or Agency" h2={h2}>
                    <p style={para}>
                        Nothing in these Terms creates a partnership, joint venture, employment relationship or agency
                        relationship between you and iAudit Global Limited.
                    </p>
                    <p style={para}>
                        Neither party has authority to act on behalf of the other unless expressly agreed in writing.
                    </p>
                </Section>

                <Section number={34} title="Third-Party Rights" h2={h2}>
                    <p style={para}>
                        Unless expressly stated otherwise, these Terms do not give any third party the right to enforce
                        any provision of them under the Contracts (Rights of Third Parties) Act 1999.
                    </p>
                </Section>

                <Section number={35} title="Contact Us" h2={h2}>
                    <p style={para}>
                        If you have questions about these Terms or the iAudit Global services, please contact:
                    </p>
                    <div
                        style={{
                            background: "#fff",
                            border: "1px solid #e8e4df",
                            borderRadius: "1rem",
                            padding: isMobile ? "1.15rem" : "1.35rem 1.5rem",
                            margin: "0.5rem 0 1.5rem",
                        }}
                    >
                        <p style={{ ...para, marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#111827" }}>iAudit Global Limited</strong>
                        </p>
                        <p style={{ ...para, marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#111827" }}>Email:</strong>{" "}
                            <InlineLink href="mailto:info@iaudit.global">info@iaudit.global</InlineLink>
                        </p>
                        <p style={{ ...para, marginBottom: 0 }}>
                            <strong style={{ color: "#111827" }}>Website:</strong>{" "}
                            <InlineLink href="https://www.iaudit.global">https://www.iaudit.global</InlineLink>
                        </p>
                    </div>
                </Section>

                <p
                    style={{
                        margin: "2rem 0 0",
                        paddingTop: "1.5rem",
                        borderTop: "1px solid #ebe6df",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem 1.25rem",
                    }}
                >
                    <Link
                        href="/privacy-policy"
                        style={{ color: "#006644", fontWeight: 600, textDecoration: "none", fontSize: "0.92rem" }}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/cookie-policy"
                        style={{ color: "#006644", fontWeight: 600, textDecoration: "none", fontSize: "0.92rem" }}
                    >
                        Cookie Policy
                    </Link>
                    <Link
                        href="/"
                        style={{ color: "#006644", fontWeight: 600, textDecoration: "none", fontSize: "0.92rem" }}
                    >
                        ← Back to home
                    </Link>
                </p>
            </article>
        </div>
    );
}
