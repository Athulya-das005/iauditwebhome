import nodemailer from "nodemailer";
import type { ContactSheetRow } from "@/lib/google-sheets";

const FROM_NAME = "iAudit Global Website";
const DEFAULT_NOTIFY_EMAIL = "info@iaudit.global";

/** Where an enquiry came from — shown in the email subject and body so the team can classify it. */
export type ContactEmailSource = {
    /** Short tag prefixed to the subject line, e.g. "Cyphers Page Form". */
    tag: string;
    /** Human-readable origin shown in the email body, e.g. "Cyphers page (/cyphers) – Get a Pen Test Quote form". */
    label: string;
    /** Subject line after the tag. */
    subject: string;
    heading: string;
    extraFields?: { label: string; value: string }[];
};

const DEFAULT_SOURCE: Omit<ContactEmailSource, "subject"> = {
    tag: "Contact Page Form",
    label: "Contact page (/contact)",
    heading: "New contact form submission",
};

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export function isContactMailConfigured() {
    return Boolean(
        process.env.RESEND_API_KEY?.trim() ||
            (process.env.SMTP_HOST?.trim() && process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim())
    );
}

function getNotifyEmail() {
    return process.env.CONTACT_NOTIFY_EMAIL?.trim() || DEFAULT_NOTIFY_EMAIL;
}

function resolveSource(row: ContactSheetRow, source?: ContactEmailSource): ContactEmailSource {
    return source ?? { ...DEFAULT_SOURCE, subject: `New iAudit Contact: ${row.subject}` };
}

function emailSubject(source: ContactEmailSource) {
    return `[${source.tag}] ${source.subject}`;
}

function emailFields(row: ContactSheetRow, source: ContactEmailSource) {
    return [
        { label: "Source", value: source.label },
        { label: "Name", value: `${row.firstName} ${row.lastName}`.trim() },
        { label: "Email", value: row.email },
        { label: "Phone", value: row.phone },
        ...(source.extraFields ?? []),
        { label: "Subject", value: row.subject },
    ];
}

function contactEmailHtml(row: ContactSheetRow, source: ContactEmailSource) {
    const rows = emailFields(row, source)
        .map(({ label, value }) => {
            const cell =
                label === "Email"
                    ? `<a href="mailto:${escapeHtml(value)}">${escapeHtml(value)}</a>`
                    : label === "Source"
                      ? `<strong>${escapeHtml(value)}</strong>`
                      : escapeHtml(value);
            return `      <tr><td style="padding:8px 0;font-weight:700;width:140px;">${escapeHtml(label)}</td><td style="padding:8px 0;">${cell}</td></tr>`;
        })
        .join("\n");

    return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#222;">
  <div style="max-width:640px;margin:0 auto;padding:28px 24px 40px;">
    <p style="display:inline-block;margin:0 0 12px;padding:4px 10px;border-radius:999px;background:#e3f0ea;color:#0d4a38;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">${escapeHtml(source.tag)}</p>
    <h2 style="margin:0 0 16px;font-size:20px;color:#006644;">${escapeHtml(source.heading)}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
${rows}
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;">Message</td><td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(row.message || "—")}</td></tr>
    </table>
  </div>
</body>
</html>`;
}

function contactEmailText(row: ContactSheetRow, source: ContactEmailSource) {
    return [
        source.heading,
        "",
        ...emailFields(row, source).map(({ label, value }) => `${label}: ${value}`),
        `Message: ${row.message || "—"}`,
    ].join("\n");
}

async function sendWithResend(row: ContactSheetRow, source: ContactEmailSource) {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) return false;

    const from = process.env.RESEND_FROM?.trim() || process.env.SMTP_FROM?.trim() || `${FROM_NAME} <${getNotifyEmail()}>`;
    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from,
            to: [getNotifyEmail()],
            replyTo: row.email,
            subject: emailSubject(source),
            html: contactEmailHtml(row, source),
            text: contactEmailText(row, source),
        }),
    });

    if (!response.ok) {
        const detail = await response.text();
        throw new Error(`Resend could not send the contact notification. ${detail.slice(0, 300)}`);
    }
    return true;
}

async function sendWithSmtp(row: ContactSheetRow, source: ContactEmailSource) {
    const host = process.env.SMTP_HOST?.trim();
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
    const fromAddress = process.env.SMTP_FROM?.trim() || user;
    if (!host || !user || !pass || !fromAddress) return false;

    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        connectionTimeout: 12_000,
        greetingTimeout: 12_000,
        socketTimeout: 25_000,
        tls: { minVersion: "TLSv1.2" },
        requireTLS: !secure && port === 587,
    });

    await transporter.sendMail({
        from: fromAddress.includes("<") ? fromAddress : `"${FROM_NAME}" <${fromAddress}>`,
        to: getNotifyEmail(),
        replyTo: row.email,
        subject: emailSubject(source),
        html: contactEmailHtml(row, source),
        text: contactEmailText(row, source),
    });
    return true;
}

export async function sendContactNotificationEmail(row: ContactSheetRow, source?: ContactEmailSource) {
    if (!isContactMailConfigured()) {
        console.warn("Contact notification email skipped — mail is not configured.");
        return false;
    }

    const resolved = resolveSource(row, source);

    try {
        if (await sendWithResend(row, resolved)) return true;
    } catch (error) {
        console.error("Contact email (Resend) failed:", error);
    }

    try {
        if (await sendWithSmtp(row, resolved)) return true;
    } catch (error) {
        console.error("Contact email (SMTP) failed:", error);
    }

    return false;
}
