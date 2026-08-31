import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import type { GapReportData } from "@/lib/gap-report-data";

const CONTACT_URL = "https://www.iaudit.global/contact";
const LOGO_URL = "https://www.iaudit.global/iaudit-logo-nav.png";
const FROM_NAME = "iAudit Global";
const REPORT_SENDER = "noreply@iaudit.global";
const REPORT_FROM = `${FROM_NAME} <${REPORT_SENDER}>`;
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
            "add SMTP_HOST, SMTP_USER, SMTP_PASS (and optional SMTP_PORT), or RESEND_API_KEY, then redeploy."
        );
    }
    return (
        "Mail is not configured. Add SMTP_HOST, SMTP_USER and SMTP_PASS (Gmail App Password) in .env.local, then restart npm run dev."
    );
}

export function gapReportEmailHtml(data: GapReportData, kind: ReportKind = "gap-analysis", logoSource = LOGO_URL) {
    const firstName = data.session.firstName || "there";
    const standard = data.session.isoStandard;
    const product = kind === "self-assessment" ? "self assessment" : "gap analysis";
    return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f3f8f5;font-family:Arial,Helvetica,sans-serif;color:#17251f;">
  <div style="max-width:640px;margin:24px auto;background:#ffffff;border:1px solid #dcebe1;border-radius:14px;overflow:hidden;box-shadow:0 8px 24px rgba(0,70,42,.08);">
    <div style="padding:22px 28px;background:linear-gradient(135deg,#003d2b 0%,#006644 68%,#19b681 100%);">
      <img src="${logoSource}" alt="iAudit Global" width="142" style="display:block;width:142px;height:auto;background:#ffffff;border-radius:8px;padding:7px;">
    </div>
    <div style="height:5px;background:#f49c1c;"></div>
    <div style="padding:30px 28px 34px;">
      <p style="margin:0 0 16px;font-size:16px;">Dear ${escapeHtml(firstName)},</p>
      <h1 style="margin:0 0 14px;font-size:25px;line-height:1.25;color:#006644;">Your ${escapeHtml(standard)} results are ready</h1>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.65;">Thank you for taking the ${escapeHtml(standard)} ${product}. Your results show how ready your organisation’s management system is against the selected ISO standard, highlight strengths, and pinpoint opportunities for improvement.</p>
      <div style="margin:22px 0;padding:17px 18px;background:#f0fdf4;border:1px solid #bbf7d0;border-left:5px solid #19b681;border-radius:8px;">
        <p style="margin:0;color:#14532d;font-size:15px;line-height:1.55;"><strong>Your detailed report is attached.</strong><br>Download it below to review the score, clause breakdown and recommended next steps.</p>
      </div>
      <p style="margin:0 0 25px;">
        <a href="cid:report-attachment" style="display:inline-block;background:#006644;color:#ffffff;text-decoration:none;padding:13px 23px;font-weight:700;border-radius:7px;box-shadow:0 4px 10px rgba(0,102,68,.2);">Download attached report</a>
      </p>
      <p style="margin:0 0 10px;font-size:16px;line-height:1.6;">If you would like to discuss your ${product} results, our team would be happy to help.</p>
      <p style="margin:0 0 16px;"><a href="${CONTACT_URL}" style="color:#006644;font-weight:700;">Contact iAudit Global</a></p>
      <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">Questions? Email <a href="mailto:${IAUDIT_INBOX}" style="color:#006644;font-weight:700;">${IAUDIT_INBOX}</a>.</p>
      <p style="margin:0 0 4px;font-size:16px;">Yours sincerely,</p>
      <p style="margin:0;color:#006644;font-weight:700;font-size:16px;">The iAudit Global Team</p>
    </div>
    <div style="padding:15px 28px;background:#f7faf8;border-top:1px solid #e5eee8;color:#6b7280;font-size:12px;">iAudit Global · Practical ISO audit management for continual improvement</div>
  </div>
</body>
</html>`;
}

async function getLogoAttachment() {
    try {
        const content = await fs.readFile(path.join(process.cwd(), "public", "iaudit-logo-nav.png"));
        return {
            filename: "iaudit-logo-nav.png",
            content,
            contentType: "image/png",
        };
    } catch {
        return null;
    }
}

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char] ?? char));
}

function emailText(data: GapReportData, kind: ReportKind = "gap-analysis") {
    const product = kind === "self-assessment" ? "self assessment" : "gap analysis";
    return `Dear ${data.session.firstName || "there"},

Thank you for taking the ${data.session.isoStandard} ${product}.

Your results are ready. They show how ready your organisation’s management system is against the selected ISO standard, highlight your strengths, and pinpoint opportunities for improvement so that you can plan the next actions with confidence.

Your detailed report is attached to this email. Open the attached report to view your results.

If you have any questions, please send an email to ${IAUDIT_INBOX} and we will be more than happy to help.

Yours sincerely,
The iAudit Global Team`;
}

function mailSubject(data: GapReportData, kind: ReportKind = "gap-analysis") {
    return kind === "self-assessment"
        ? `Your ${data.session.isoStandard} Self Assessment Results`
        : `Your ${data.session.isoStandard} Gap Analysis Results`;
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
    const logo = await getLogoAttachment();

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: REPORT_FROM,
            to: [options.data.session.email.trim()],
            subject: mailSubject(options.data, kind),
            html: gapReportEmailHtml(options.data, kind, logo ? "cid:iaudit-logo" : LOGO_URL),
            text: emailText(options.data, kind),
            attachments: [
                ...(logo
                    ? [
                          {
                              filename: logo.filename,
                              content: logo.content.toString("base64"),
                              contentType: logo.contentType,
                              content_id: "iaudit-logo",
                          },
                      ]
                    : []),
                {
                    filename: options.filename,
                    content: options.content.toString("base64"),
                    contentType: options.contentType,
                    content_id: "report-attachment",
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
    if (!host || !user || !pass) return false;
    const kind = options.kind ?? "gap-analysis";
    const logo = await getLogoAttachment();

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
        from: REPORT_FROM,
        to: options.data.session.email.trim(),
        replyTo: IAUDIT_INBOX,
        subject: mailSubject(options.data, kind),
        html: gapReportEmailHtml(options.data, kind, logo ? "cid:iaudit-logo" : LOGO_URL),
        text: emailText(options.data, kind),
        attachments: [
            ...(logo
                ? [
                      {
                          filename: logo.filename,
                          content: logo.content,
                          contentType: logo.contentType,
                          cid: "iaudit-logo",
                          contentDisposition: "inline" as const,
                      },
                  ]
                : []),
            {
                filename: options.filename,
                content: options.content,
                contentType: options.contentType,
                cid: "report-attachment",
                contentDisposition: "inline",
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
