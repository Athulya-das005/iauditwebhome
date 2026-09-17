import { createHmac, timingSafeEqual } from "crypto";

const OTP_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const VERIFY_TOKEN_TTL_MS = 45 * 60 * 1000; // 45 minutes after verify
const RESEND_COOLDOWN_MS = 45 * 1000;
const MAX_SENDS_PER_HOUR = 5;

type RateState = { lastSentAt: number; sends: number[]; };

const globalStore = globalThis as typeof globalThis & {
    __assessmentOtpRate?: Map<string, RateState>;
};

function rateMap() {
    if (!globalStore.__assessmentOtpRate) {
        globalStore.__assessmentOtpRate = new Map();
    }
    return globalStore.__assessmentOtpRate;
}

function getSecret() {
    const dedicated = process.env.ASSESSMENT_OTP_SECRET?.trim();
    if (dedicated) return dedicated;
    const fallback =
        process.env.ADMIN_PASSWORD?.trim() ||
        process.env.RESEND_API_KEY?.trim() ||
        process.env.SMTP_PASS?.trim() ||
        process.env.GITHUB_TOKEN?.trim();
    if (!fallback) {
        throw new Error("Email verification is not configured. Set ASSESSMENT_OTP_SECRET (or mail/admin secrets).");
    }
    return `iaudit-assessment-otp:${fallback}`;
}

function windowIndex(at = Date.now()) {
    return Math.floor(at / OTP_WINDOW_MS);
}

function otpForEmail(email: string, window: number) {
    const digest = createHmac("sha256", getSecret())
        .update(`otp:${email}:${window}`)
        .digest("hex");
    return String(parseInt(digest.slice(0, 8), 16) % 1_000_000).padStart(6, "0");
}

export function isValidAssessmentEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function normalizeAssessmentEmail(email: string) {
    return email.trim().toLowerCase();
}

export function generateAssessmentOtp(email: string) {
    return otpForEmail(normalizeAssessmentEmail(email), windowIndex());
}

export function checkAssessmentOtp(email: string, code: string) {
    const normalized = normalizeAssessmentEmail(email);
    const cleaned = code.replace(/\s+/g, "").trim();
    if (!/^\d{6}$/.test(cleaned)) return false;
    const current = windowIndex();
    for (const window of [current, current - 1]) {
        const expected = otpForEmail(normalized, window);
        try {
            const a = Buffer.from(expected, "utf8");
            const b = Buffer.from(cleaned, "utf8");
            if (a.length === b.length && timingSafeEqual(a, b)) return true;
        } catch {
            /* ignore */
        }
    }
    return false;
}

function b64url(input: string | Buffer) {
    return Buffer.from(input)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/g, "");
}

function fromB64url(input: string) {
    const padded = input.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((input.length + 3) % 4);
    return Buffer.from(padded, "base64").toString("utf8");
}

export function createEmailVerificationToken(email: string) {
    const payload = {
        email: normalizeAssessmentEmail(email),
        exp: Date.now() + VERIFY_TOKEN_TTL_MS,
        purpose: "assessment-email-verified",
    };
    const body = b64url(JSON.stringify(payload));
    const sig = createHmac("sha256", getSecret()).update(body).digest("base64url");
    return `${body}.${sig}`;
}

export function verifyEmailVerificationToken(token: string | undefined, email: string) {
    if (!token?.includes(".")) return false;
    const [body, sig] = token.split(".");
    if (!body || !sig) return false;
    const expected = createHmac("sha256", getSecret()).update(body).digest("base64url");
    try {
        const a = Buffer.from(sig);
        const b = Buffer.from(expected);
        if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
    } catch {
        return false;
    }
    try {
        const payload = JSON.parse(fromB64url(body)) as {
            email?: string;
            exp?: number;
            purpose?: string;
        };
        if (payload.purpose !== "assessment-email-verified") return false;
        if (!payload.exp || Date.now() > payload.exp) return false;
        return payload.email === normalizeAssessmentEmail(email);
    } catch {
        return false;
    }
}

export function assertCanSendOtp(email: string) {
    const key = normalizeAssessmentEmail(email);
    const now = Date.now();
    const map = rateMap();
    const state = map.get(key) ?? { lastSentAt: 0, sends: [] };
    const recent = state.sends.filter((t) => now - t < 60 * 60 * 1000);
    if (state.lastSentAt && now - state.lastSentAt < RESEND_COOLDOWN_MS) {
        const waitSec = Math.ceil((RESEND_COOLDOWN_MS - (now - state.lastSentAt)) / 1000);
        throw new Error(`Please wait ${waitSec}s before requesting another code.`);
    }
    if (recent.length >= MAX_SENDS_PER_HOUR) {
        throw new Error("Too many verification emails sent. Please try again in an hour.");
    }
    state.lastSentAt = now;
    state.sends = [...recent, now];
    map.set(key, state);
}

export const ASSESSMENT_OTP_TTL_MINUTES = Math.round(OTP_WINDOW_MS / 60000);
