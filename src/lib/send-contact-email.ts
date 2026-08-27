import nodemailer from "nodemailer";
import type { ContactSheetRow } from "@/lib/google-sheets";

const FROM_NAME = "iAudit Global Website";
const DEFAULT_NOTIFY_EMAIL = "info@iaudit.global";

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

function contactEmailHtml(row: ContactSheetRow) {
    const fullName = `${row.firstName} ${row.lastName}`.trim();
    return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#222;">
  <div style="max-width:640px;margin:0 auto;padding:28px 24px 40px;">
    <h2 style="margin:0 0 16px;font-size:20px;color:#006644;">New contact form submission</h2>
    <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
      <tr><td style="padding:8px 0;font-weight:700;width:140px;">Name</td><td style="padding:8px 0;">${escapeHtml(fullName)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:700;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(row.email)}">${escapeHtml(row.email)}</a></td></tr>
      <tr><td style="padding:8px 0;font-weight:700;">Phone</td><td style="padding:8px 0;">${escapeHtml(row.phone)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:700;">Subject</td><td style="padding:8px 0;">${escapeHtml(row.subject)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:700;vertical-align:top;">Message</td><td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(row.message || "—")}</td></tr>
    </table>
  </div>
</body>
</html>`;
}

function contactEmailText(row: ContactSheetRow) {
    const fullName = `${row.firstName} ${row.lastName}`.trim();
    return [
        "New contact form submission",
        "",
        `Name: ${fullName}`,
        `Email: ${row.email}`,
        `Phone: ${row.phone}`,
        `Subject: ${row.subject}`,
        `Message: ${row.message || "—"}`,
    ].join("\n");
}

async function sendWithResend(row: ContactSheetRow) {
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
            subject: `New iAudit Contact: ${row.subject}`,
            html: contactEmailHtml(row),
            text: contactEmailText(row),
        }),
    });

    if (!response.ok) {
        const detail = await response.text();
        throw new Error(`Resend could not send the contact notification. ${detail.slice(0, 300)}`);
    }
    return true;
}

async function sendWithSmtp(row: ContactSheetRow) {
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
        subject: `New iAudit Contact: ${row.subject}`,
        html: contactEmailHtml(row),
        text: contactEmailText(row),
    });
    return true;
}

export async function sendContactNotificationEmail(row: ContactSheetRow) {
    if (!isContactMailConfigured()) {
        console.warn("Contact notification email skipped — mail is not configured.");
        return false;
    }

    try {
        if (await sendWithResend(row)) return true;
    } catch (error) {
        console.error("Contact email (Resend) failed:", error);
    }

    try {
        if (await sendWithSmtp(row)) return true;
    } catch (error) {
        console.error("Contact email (SMTP) failed:", error);
    }

    return false;
}
