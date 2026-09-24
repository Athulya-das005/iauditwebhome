"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";

const FONT = '"Pp Neue Montreal", sans-serif';
const SITE_URL = "https://www.iaudit.global/";
const CONTACT_URL = "https://www.iaudit.global/contact";
const GDPR_OBJECT = "https://gdpr-info.eu/art-21-gdpr/";
const GDPR_RESTRICT = "https://gdpr-info.eu/art-18-gdpr/";
const COOKIEYES_GENERATOR =
    "https://www.freeprivacypolicy.ai/?utm_source=PPG&utm_medium=footer&utm_campaign=UW";

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

function LetterList({
    items,
}: {
    items: { letter: string; title: string; body: ReactNode }[];
}) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", margin: "1rem 0 1.5rem" }}>
            {items.map((item) => (
                <div key={item.letter}>
                    <p
                        style={{
                            margin: "0 0 0.4rem",
                            fontWeight: 700,
                            color: "#111827",
                            fontSize: "1rem",
                            lineHeight: 1.45,
                        }}
                    >
                        {item.letter}. {item.title}
                    </p>
                    <p style={{ margin: 0, color: "#374151", lineHeight: 1.75, fontSize: "0.98rem" }}>{item.body}</p>
                </div>
            ))}
        </div>
    );
}

export default function PrivacyPolicyContent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const h2: CSSProperties = {
        fontSize: isMobile ? "1.2rem" : "1.4rem",
        fontWeight: 700,
        color: "#111827",
        margin: "2.25rem 0 0.85rem",
        lineHeight: 1.3,
        letterSpacing: "-0.015em",
        scrollMarginTop: "100px",
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
                        Privacy Policy
                    </h1>
                    <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? "0.92rem" : "1rem" }}>
                        Effective Date: September 23, 2026
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
                    This privacy policy for iAudit Global (&quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;) tells you how we may
                    collect, use and share your information when you visit our website{" "}
                    <InlineLink href={SITE_URL}>{SITE_URL}</InlineLink>.
                </p>
                <p style={para}>
                    We appreciate your decision to use our website{" "}
                    <InlineLink href={SITE_URL}>{SITE_URL}</InlineLink> and to trust us with your valuable personal
                    information. In this document, we seek to explain in the clearest terms possible our privacy
                    practices. We strongly encourage you to read this document (and any other related documents)
                    carefully before using the website. If there are any terms or conditions in this document that you
                    do not agree with, please do not use the website, or in case you are already using it, please
                    discontinue the use immediately. By using the website, you are accepting and consenting to the
                    practices described in this Privacy Policy.
                </p>

                <h2 style={h2}>What information do we collect about you?</h2>
                <p style={para}>
                    When we collect information, we do so to ensure that you get to experience our service seamlessly.
                    For that, we collect the following information. Some are your personal information and some are
                    your sensitive personal information.
                </p>
                <p style={para}>The personal information that we collect about you are the following:</p>
                <BulletList
                    items={[
                        "Name",
                        "Address",
                        "Email address",
                        "Identification number",
                        "Location data",
                        "Professional or employment related information",
                        "Educational information that is not publicly available",
                    ]}
                />
                <p style={para}>
                    Sometimes, we also collect sensitive personal information from you, which includes the following:
                </p>
                <BulletList items={["Genetic information"]} />

                <h2 style={h2}>How do we collect such information?</h2>
                <p style={para}>We may use any of the following three ways to get information about you.</p>
                <BulletList
                    items={[
                        "The information that you give us",
                        "The information that we automatically collect from you",
                        "Information that we collect from third parties",
                    ]}
                />
                <p style={para}>
                    Before going into the reasons why we collect the information that we do, we want you to understand
                    what the above three terms mean.
                </p>
                <LetterList
                    items={[
                        {
                            letter: "a",
                            title: "The information that you give us",
                            body: "When you sign up for an account to use our service/product we will ask you certain questions like your name or email address. These are the information that you give us. This may not be limited to what we have mentioned and can change according to the nature of the service/product that we provide.",
                        },
                        {
                            letter: "b",
                            title: "The information that we automatically collect from you",
                            body: "When you access our service from a device, we may automatically collect information from your device, such as through the use of cookies. You will know more about automatic collection of personal information in the next section.",
                        },
                        {
                            letter: "c",
                            title: "Information that we collect from third parties",
                            body: "These third parties can be data aggregators, online directories, data marketplaces or exchanges, etc from where we may collect information about you.",
                        },
                    ]}
                />

                <h2 style={h2}>Cookies and similar technologies</h2>
                <p style={para}>
                    Cookies are small packets of information that are placed on your device, so that we can retrieve
                    the information about you, such as your login information, your choices on our websites and other
                    information.
                </p>
                <p style={para}>However, we do not use cookies or similar technologies on our website.</p>

                <h2 style={h2}>Do not track requests</h2>
                <p style={para}>We respond to &quot;do not track&quot; requests in the following manner:</p>
                <p style={para}>
                    Our website does not currently respond to Do Not Track (DNT) signals sent by web browsers. You can
                    manage your cookie preferences through our cookie consent banner or cookie settings.
                </p>

                <h2 style={h2}>Why do we collect information about you?</h2>
                <p style={para}>
                    We collect information about you for a variety of reasons. It helps us, among other things, to
                    serve you better. The following are the ways in which we use the information that we collect about
                    you.
                </p>
                <BulletList
                    items={[
                        "To provide and maintain service",
                        "To manage your account",
                        "To perform a contract with us",
                        "To contact the user",
                        "To send marketing and promotional communications",
                        "To evaluate and improve our products/services",
                        "To examine the usage trends",
                        "To manage user requests related to business transfers, such as when our business is acquired, amalgamated, merged, restructured, or otherwise sold or transferred to another entity, in whole or in part",
                    ]}
                />

                <h2 style={h2}>How long do we retain your information?</h2>
                <p style={para}>
                    We will only keep your personal information for 12 months, unless a longer retention period is
                    required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in
                    this notice requires us to retain your personal information for longer than the period during which
                    users have an account with us.
                </p>
                <p style={para}>
                    When we have no ongoing legitimate business need to process your personal information, we will
                    either delete or anonymise such information, or, if this is not possible (for example, because your
                    personal information has been stored in backup archives), then we will securely store your personal
                    information and isolate it from any further processing until deletion is possible.
                </p>

                <h2 style={h2}>Do we share your information?</h2>
                <p style={para}>We may share your information with third parties in the following ways:</p>
                <p style={para}>
                    <strong style={{ color: "#111827" }}>Sharing with your consent:</strong> When you give consent, we
                    may share your information with third parties for the purposes that are mentioned in the consent
                    notification.
                </p>
                <p style={para}>
                    <strong style={{ color: "#111827" }}>Legal Obligations:</strong> We may disclose information where
                    we are legally required to do so in order to comply with applicable law, governmental requests, a
                    judicial proceeding, court order, or legal process, such as in response to a court order or a
                    subpoena (including in response to public authorities to meet national security or law enforcement
                    requirements).
                </p>
                <p style={para}>
                    <strong style={{ color: "#111827" }}>For business transfers:</strong> We may share your personal
                    information in connection with, or during the course of negotiations regarding merger, sale of
                    business assets, financing or acquisition of all or a part of our business by another entity.
                </p>

                <h2 style={h2}>Sale/sharing of information</h2>
                <p style={para}>We do not sell or share the information we collect from our users.</p>

                <h2 style={h2}>Disclosure of personally sensitive information</h2>
                <p style={para}>
                    We do not disclose personally sensitive information for purposes other than the following:
                </p>
                <BulletList
                    items={[
                        "To perform services or deliver goods.",
                        "To prevent, detect, and investigate security incidents that compromise the availability, authenticity, integrity, or confidentiality of stored or transmitted personal information.",
                        "To resist malicious, deceptive, fraudulent, or illegal actions directed at the business and to prosecute those responsible for those actions.",
                        "To ensure safety of natural persons.",
                        "For short-term, transient use, including, but not limited to, non personalised advertising shown as part of a consumer's current interaction with the business.",
                        "To perform services on behalf of the business",
                        "To verify or maintain the quality or safety of a product, service, or device and to improve or upgrade them.",
                        "To collect or process sensitive personal information where such collection or processing is not for the purpose of inferring characteristics about a consumer.",
                    ]}
                />

                <h2 style={h2}>GDPR Disclosures</h2>

                <h3
                    style={{
                        fontSize: isMobile ? "1.05rem" : "1.15rem",
                        fontWeight: 700,
                        color: "#111827",
                        margin: "1.5rem 0 0.75rem",
                        lineHeight: 1.35,
                    }}
                >
                    Automatic processing of data
                </h3>
                <p style={para}>We do not use any automated processing of the personal information we collect.</p>

                <h3
                    style={{
                        fontSize: isMobile ? "1.05rem" : "1.15rem",
                        fontWeight: 700,
                        color: "#111827",
                        margin: "1.5rem 0 0.75rem",
                        lineHeight: 1.35,
                    }}
                >
                    Legal basis for the collection
                </h3>
                <p style={para}>
                    The General Data Protection Regulation requires us to identify and set out the legal basis, or in
                    other words, the legal justification, for processing your personal information. The following are
                    the legal bases on which we process your personal data.
                </p>
                <p style={para}>
                    <strong style={{ color: "#111827" }}>Consent:</strong> We may process your personal information for
                    the purposes described in this Privacy Policy with your consent.
                </p>

                <h2 style={h2}>Your rights</h2>
                <p style={para}>
                    In accordance with Articles 12 to 23 of the General Data Protection Regulation, the data subject,
                    that is you, has the following rights.
                </p>
                <ol
                    style={{
                        margin: "0.75rem 0 1.25rem",
                        paddingLeft: "1.25rem",
                        color: "#374151",
                        lineHeight: 1.75,
                    }}
                >
                    <li style={{ marginBottom: "0.65rem" }}>
                        Right to object to the processing of personal data in certain circumstances. See{" "}
                        <InlineLink href={GDPR_OBJECT} external>
                            here
                        </InlineLink>{" "}
                        for details.
                    </li>
                    <li style={{ marginBottom: "0.65rem" }}>
                        Right to request access to the data we have collected about you and to receive a copy of it in
                        an accessible format.
                    </li>
                    <li style={{ marginBottom: "0.65rem" }}>
                        Right to restrict the processing of your personal data for a limited period, under certain
                        circumstances. See{" "}
                        <InlineLink href={GDPR_RESTRICT} external>
                            here
                        </InlineLink>{" "}
                        for details.
                    </li>
                    <li style={{ marginBottom: "0.65rem" }}>
                        Right to rectify or modify personal information that you consider obsolete, incomplete, or
                        inaccurate.
                    </li>
                    <li style={{ marginBottom: "0.65rem" }}>
                        Right to opt out of automated processing of your personal data.
                    </li>
                    <li style={{ marginBottom: "0.65rem" }}>
                        Right to erasure of your personal information, also known as the right to be forgotten.
                    </li>
                </ol>
                <p style={para}>
                    To exercise any of the rights mentioned above, you may use the contact details provided in this
                    Privacy Policy.
                </p>

                <h2 style={h2}>Consequences of non-consent</h2>
                <p style={para}>
                    We require your consent to collect information in order to provide our services to you seamlessly.
                    However, you may refuse consent. Please note that refusing consent may have consequences, including
                    limited access to our services and reduced features on the website.
                </p>

                <h2 style={h2}>Privacy of children</h2>
                <p style={para}>
                    We do not knowingly provide our services to children. If you are a parent or legal guardian and
                    believe that your child has provided us with information without your consent, please contact us.
                    Upon verification that we have collected such information without parental consent, we will remove
                    the information from our database.
                </p>

                <h2 style={h2}>Security of your personal information</h2>
                <p style={para}>
                    We take reasonable measures to ensure that the information we collect from you is stored securely
                    and protected to the best extent possible. However, no method of internet transmission or digital
                    storage is completely secure, and we cannot guarantee absolute security. While we use commercially
                    reasonable and appropriate security measures to protect your information, we cannot promise that it
                    will be 100% secure.
                </p>

                <h2 style={h2}>Links to other websites or apps</h2>
                <p style={para}>
                    On our website, we may provide links to external websites, apps, or services. These are not operated
                    by us and therefore are not governed by our Privacy Policy or practices. We strongly recommend that
                    you review the privacy policies of such websites or services before engaging with them to ensure
                    that you do not provide personal information that you do not wish to share.
                </p>

                <h2 style={h2}>Changes to this privacy policy</h2>
                <p style={para}>
                    We may update this Privacy Policy from time to time to reflect changes in the law or our privacy
                    practices. We recommend that you review this privacy policy periodically to ensure it remains in
                    line with your expectations.
                </p>
                <p style={para}>The privacy policy will be effective from the date it is posted on this page.</p>

                <h2 style={h2}>Contact us</h2>
                <p style={para}>
                    For any questions or concerns regarding your privacy, or to exercise any of your rights, you may
                    contact us using the following details:
                </p>
                <div
                    style={{
                        background: "#fff",
                        border: "1px solid #e8e4df",
                        borderRadius: "1rem",
                        padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                        margin: "1rem 0 1.5rem",
                    }}
                >
                    <p style={{ ...para, marginBottom: "0.65rem" }}>
                        <strong style={{ color: "#111827" }}>Address:</strong> Unit 17f, The Lansbury Estates, Surrey,
                        England, United Kingdom
                    </p>
                    <p style={{ ...para, marginBottom: "0.65rem" }}>
                        <strong style={{ color: "#111827" }}>Email address:</strong>{" "}
                        <InlineLink href="mailto:info@iaudit.global">info@iaudit.global</InlineLink>
                    </p>
                    <p style={{ ...para, marginBottom: 0 }}>
                        <strong style={{ color: "#111827" }}>Link to our contact page:</strong>{" "}
                        <InlineLink href={CONTACT_URL}>{CONTACT_URL}</InlineLink>
                    </p>
                </div>

                <p
                    style={{
                        margin: "2rem 0 0",
                        paddingTop: "1.5rem",
                        borderTop: "1px solid #ebe6df",
                        fontSize: "0.9rem",
                        color: "#6b7280",
                        lineHeight: 1.7,
                    }}
                >
                    Privacy Policy generated by{" "}
                    <InlineLink href={COOKIEYES_GENERATOR} external>
                        CookieYes - Privacy Policy Generator
                    </InlineLink>
                </p>

                <p style={{ margin: "1.5rem 0 0" }}>
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
