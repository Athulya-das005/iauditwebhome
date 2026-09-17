import nodemailer from "nodemailer";
import { ASSESSMENT_OTP_TTL_MINUTES } from "@/lib/assessment-email-otp";

const FROM_NAME = "iAudit Global";

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export function isAssessmentOtpMailConfigured() {
    return Boolean(
        process.env.RESEND_API_KEY?.trim() ||
            (process.env.SMTP_HOST?.trim() && process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim())
    );
}

function otpEmailHtml(code: string) {
    return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <div style="max-width:520px;margin:0 auto;padding:24px 16px;">
    <div style="background:#ffffff;border-radius:14px;padding:22px 20px;border:1px solid #e5e7eb;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#2563eb;">iAudit Global</p>
      <h1 style="margin:0 0 10px;font-size:20px;line-height:1.3;color:#111827;">Your verification code</h1>
      <p style="margin:0 0 16px;font-size:14px;line-height:1.55;color:#4b5563;">
        Enter this code to verify your email and start the assessment.
      </p>
      <div style="margin:0 0 16px;padding:14px;border-radius:10px;background:#eff6ff;border:1px solid #bfdbfe;text-align:center;">
        <div style="font-size:30px;letter-spacing:0.28em;font-weight:700;color:#1d4ed8;">${escapeHtml(code)}</div>
      </div>
      <p style="margin:0;font-size:12px;line-height:1.5;color:#6b7280;">
        Expires in about ${ASSESSMENT_OTP_TTL_MINUTES} minutes. If you did not request this, ignore this email.
      </p>
    </div>
  </div>
</body>
</html>`;
}

function otpEmailText(code: string) {
    return `Your iAudit verification code is ${code}. It expires in about ${ASSESSMENT_OTP_TTL_MINUTES} minutes.`;
}

async function sendWithResend(to: string, code: string) {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) return false;
    const from =
        process.env.RESEND_FROM?.trim() ||
        process.env.SMTP_FROM?.trim() ||
        `${FROM_NAME} <${process.env.CONTACT_NOTIFY_EMAIL?.trim() || "info@iaudit.global"}>`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: [to],
                subject: `${code} is your iAudit verification code`,
                html: otpEmailHtml(code),
                text: otpEmailText(code),
            }),
            signal: controller.signal,
        });

        if (!response.ok) {
            const detail = await response.text();
            throw new Error(`Resend could not send the verification email. ${detail.slice(0, 300)}`);
        }
        return true;
    } finally {
        clearTimeout(timeout);
    }
}

async function sendWithSmtp(to: string, code: string) {
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
        // Keep OTP sends snappy — fail fast rather than hanging the modal.
        connectionTimeout: 6_000,
        greetingTimeout: 6_000,
        socketTimeout: 10_000,
        tls: { minVersion: "TLSv1.2" },
        requireTLS: !secure && port === 587,
        pool: false,
    });

    try {
        await transporter.sendMail({
            from: fromAddress.includes("<") ? fromAddress : `"${FROM_NAME}" <${fromAddress}>`,
            to,
            subject: `${code} is your iAudit verification code`,
            html: otpEmailHtml(code),
            text: otpEmailText(code),
        });
        return true;
    } finally {
        transporter.close();
    }
}

export async function sendAssessmentOtpEmail(to: string, code: string) {
    if (!isAssessmentOtpMailConfigured()) {
        throw new Error("Email sending is not configured. Please contact support.");
    }

    // Prefer Resend only when configured — avoids slow SMTP fallback after a Resend attempt.
    if (process.env.RESEND_API_KEY?.trim()) {
        await sendWithResend(to, code);
        return true;
    }

    if (await sendWithSmtp(to, code)) return true;
    throw new Error("We could not send the verification email. Please try again shortly.");
}
