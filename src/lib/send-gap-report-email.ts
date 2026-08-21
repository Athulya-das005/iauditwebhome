import nodemailer from "nodemailer";
import type { GapReportData } from "@/lib/gap-report-data";

const CONTACT_URL = "https://www.iaudit.global/contact";
const FROM_NAME = "iAudit Global";
const IAUDIT_INBOX = "info@iaudit.global";

export type ReportKind = "gap-analysis" | "self-assessment";

function isProductionHost() {
    return Boolean(process.env.VERCEL || process.env.NODE_ENV === "production");
}

export function isMailConfigured() {
    return Boolean(
        process.env.RESEND_API_KEY?.trim() ||
            (process.env.SMTP_HOST?.trim() && process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim())
    );
}

function mailNotConfiguredMessage() {
    if (isProductionHost()) {
        return (
            "Mail is not configured on the live server. In Vercel → Project → Settings → Environment Variables, " +
            "add SMTP_HOST, SMTP_USER, SMTP_PASS (and optional SMTP_FROM / SMTP_PORT), or RESEND_API_KEY + RESEND_FROM, then redeploy."
        );
    }
    return (
        "Mail is not configured. Add SMTP_HOST, SMTP_USER and SMTP_PASS (Gmail App Password) in .env.local, then restart npm run dev."
    );
}

export function gapReportEmailHtml(data: GapReportData, kind: ReportKind = "gap-analysis") {
    const firstName = data.session.firstName || "there";
    const standard = data.session.isoStandard;
    const product = kind === "self-assessment" ? "self assessment" : "gap analysis";
    return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#222;">
  <div style="max-width:640px;margin:0 auto;padding:28px 24px 40px;">
    <p style="margin:0 0 16px;font-size:16px;">Dear ${escapeHtml(firstName)},</p>
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Thank you for taking the ${escapeHtml(standard)} ${product}.</p>
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Your results are ready. They show how ready your organisation’s management system is against the selected ISO standard, highlight your strengths, and pinpoint opportunities for improvement so that you can plan the next actions with confidence.</p>
    <p style="margin:0 0 18px;font-size:16px;line-height:1.6;">Your detailed report is attached to this email. You can also review next steps with our team:</p>
    <p style="margin:0 0 24px;">
      <a href="${CONTACT_URL}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:12px 22px;font-weight:700;border-radius:4px;">View Results</a>
    </p>
    <p style="margin:0 0 10px;font-size:16px;line-height:1.6;">If you want to contact our team to discuss your ${product} results, please contact us via the link below:</p>
    <p style="margin:0 0 16px;"><a href="${CONTACT_URL}" style="color:#2563eb;">iAudit Contact Us</a></p>
    <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">If you have any questions, please send an email to <a href="mailto:${IAUDIT_INBOX}" style="color:#2563eb;">${IAUDIT_INBOX}</a> and we will be more than happy to help.</p>
    <p style="margin:0 0 4px;font-size:16px;">Yours sincerely,</p>
    <p style="margin:0 0 28px;font-size:16px;">The iAudit Global Team</p>
    <p style="margin:0;color:#006644;font-weight:800;font-size:18px;">iAudit Global</p>
  </div>
</body>
</html>`;
}

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char] ?? char));
}

function emailText(data: GapReportData, kind: ReportKind = "gap-analysis") {
    const product = kind === "self-assessment" ? "self assessment" : "gap analysis";
    return `Dear ${data.session.firstName || "there"},

Thank you for taking the ${data.session.isoStandard} ${product}.

Your results are ready. They show how ready your organisation’s management system is against the selected ISO standard, highlight your strengths, and pinpoint opportunities for improvement so that you can plan the next actions with confidence.

Your detailed report is attached to this email.

If you have any questions, please send an email to ${IAUDIT_INBOX} and we will be more than happy to help.

Yours sincerely,
The iAudit Global Team`;
}

function mailSubject(data: GapReportData, kind: ReportKind = "gap-analysis") {
    return kind === "self-assessment"
        ? `${data.session.isoStandard} Self Assessment Report`
        : `${data.session.isoStandard} Gap Analysis Report`;
}

async function sendWithResend(options: {
    data: GapReportData;
    filename: string;
    content: Buffer;
    contentType: string;
    kind?: ReportKind;
}) {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) return false;
    const kind = options.kind ?? "gap-analysis";

    const from = process.env.RESEND_FROM?.trim() || process.env.SMTP_FROM?.trim() || `${FROM_NAME} <${IAUDIT_INBOX}>`;
    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from,
            to: [options.data.session.email.trim()],
            subject: mailSubject(options.data, kind),
            html: gapReportEmailHtml(options.data, kind),
            text: emailText(options.data, kind),
            attachments: [
                {
                    filename: options.filename,
                    content: options.content.toString("base64"),
                    contentType: options.contentType,
                },
            ],
        }),
    });

    if (!response.ok) {
        const detail = await response.text();
        throw new Error(`Resend could not send the report. ${detail.slice(0, 300)}`);
    }
    return true;
}

async function sendWithSmtp(options: {
    data: GapReportData;
    filename: string;
    content: Buffer;
    contentType: string;
    kind?: ReportKind;
}) {
    const host = process.env.SMTP_HOST?.trim();
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
    const fromAddress = process.env.SMTP_FROM?.trim() || user;
    if (!host || !user || !pass || !fromAddress) return false;
    const kind = options.kind ?? "gap-analysis";

    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        // Serverless hosts (Vercel) need short, explicit timeouts and no extra verify round-trip.
        connectionTimeout: 12_000,
        greetingTimeout: 12_000,
        socketTimeout: 25_000,
        tls: {
            minVersion: "TLSv1.2",
        },
        requireTLS: !secure && port === 587,
    });

    // Skip verify() in production — it often times out on serverless and is not required to send.
    if (!isProductionHost()) {
        await transporter.verify();
    }

    await transporter.sendMail({
        from: fromAddress.includes("<") ? fromAddress : `"${FROM_NAME}" <${fromAddress}>`,
        to: options.data.session.email.trim(),
        replyTo: IAUDIT_INBOX,
        subject: mailSubject(options.data, kind),
        html: gapReportEmailHtml(options.data, kind),
        text: emailText(options.data, kind),
        attachments: [
            {
                filename: options.filename,
                content: options.content,
                contentType: options.contentType,
            },
        ],
    });
    return true;
}

export async function sendGapReportEmail(options: {
    data: GapReportData;
    filename: string;
    content: Buffer;
    contentType: string;
    kind?: ReportKind;
}) {
    if (!isMailConfigured()) {
        throw new Error(mailNotConfiguredMessage());
    }

    const errors: string[] = [];

    try {
        const sentWithResend = await sendWithResend(options);
        if (sentWithResend) return;
    } catch (error) {
        const message = error instanceof Error ? error.message : "Resend failed.";
        errors.push(message);
        console.error("Report email (Resend) failed:", message);
    }

    try {
        const sentWithSmtp = await sendWithSmtp(options);
        if (sentWithSmtp) return;
    } catch (error) {
        const message = error instanceof Error ? error.message : "SMTP failed.";
        errors.push(message);
        console.error("Report email (SMTP) failed:", message);
    }

    if (errors.length) {
        throw new Error(errors.join(" | "));
    }

    throw new Error(mailNotConfiguredMessage());
}
