/**
 * Anti-spam protection utility for contact and lead forms.
 * Provides detection for:
 * 1. Honeypot traps (bots auto-filling hidden fields)
 * 2. Rapid automated submissions (scripts submitting in < 2 seconds)
 * 3. Disposable, temporary, and known bot email domains
 * 4. Content-based spam patterns (link spam, SEO solicitation, crypto scams)
 */

export const DISPOSABLE_EMAIL_DOMAINS = new Set([
    // Observed bot domains
    "gcervera.com",
    "itquoted.com",
    "imashr.com",
    "homvela.com",

    // Common temporary & disposable services
    "10minutemail.com",
    "10minutemail.net",
    "10minute.email",
    "armyspy.com",
    "burnermail.io",
    "crazymailing.com",
    "cuvox.de",
    "dayrep.com",
    "discard.email",
    "disposable.com",
    "disposablemail.com",
    "dispostable.com",
    "dropmail.me",
    "einrot.com",
    "emailondeck.com",
    "fakeinbox.com",
    "fakemailgenerator.com",
    "fleckens.hu",
    "generator.email",
    "getairmail.com",
    "getnada.com",
    "grr.la",
    "guerrillamail.biz",
    "guerrillamail.com",
    "guerrillamail.de",
    "guerrillamail.net",
    "guerrillamail.org",
    "guerrillamailblock.com",
    "gustr.com",
    "harakirimail.com",
    "inboxbear.com",
    "jetable.fr.nf",
    "jourrapide.com",
    "maildrop.cc",
    "mailinator.com",
    "mailinator.net",
    "mailinator2.com",
    "mailnesia.com",
    "mohmal.com",
    "mytrashmail.com",
    "mytemp.email",
    "mytempemail.com",
    "nada.ltd",
    "pookmail.com",
    "rhyta.com",
    "sharklasers.com",
    "spam4.me",
    "spambog.com",
    "spamgourmet.com",
    "superrito.com",
    "teleworm.us",
    "temp-mail.io",
    "temp-mail.org",
    "tempail.com",
    "tempinbox.com",
    "tempmail.com",
    "tempmail.net",
    "tempr.email",
    "throwaway.email",
    "throwawaymail.com",
    "trash-mail.com",
    "trashmail.com",
    "trashmail.me",
    "trashmail.net",
    "trashmail.org",
    "yopmail.com",
    "yopmail.fr",
    "yopmail.net",
]);

/**
 * Checks whether an email belongs to a known disposable or spam domain.
 */
export function isDisposableEmail(email: string): boolean {
    if (!email || typeof email !== "string") return false;
    const parts = email.trim().toLowerCase().split("@");
    if (parts.length !== 2) return false;

    const domain = parts[1];
    if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
        return true;
    }

    // Check for common temporary domain subdomains or patterns
    if (
        domain.endsWith(".mailinator.com") ||
        domain.endsWith(".yopmail.com") ||
        domain.endsWith(".guerrillamail.com") ||
        domain.includes("tempmail") ||
        domain.includes("disposable")
    ) {
        return true;
    }

    return false;
}

/**
 * Checks if a string contains excessive URLs (typical in link-building spam).
 */
export function hasExcessiveLinks(text: string, maxLinks = 2): boolean {
    if (!text) return false;
    const matches = text.match(/https?:\/\/|www\./gi);
    return Boolean(matches && matches.length > maxLinks);
}

/**
 * Checks for high-confidence spam markers in contact form messages.
 */
export function isCommonSpamContent(text: string): boolean {
    if (!text) return false;
    const lower = text.toLowerCase();

    // High-confidence spam phrases often submitted to contact forms
    const spamPatterns = [
        /\b(?:buy\s+backlinks|guest\s+post\s+outreach|seo\s+ranking\s+service)\b/i,
        /\b(?:crypto\s+recovery|funds\s+recovery|wallet\s+recovery)\b/i,
        /\b(?:online\s+casino|sports\s+betting|slot\s+machine)\b/i,
        /\b(?:telegram\s+channel\s*:\s*@|whatsapp\s*:\s*\+?\d{8,})\b/i,
    ];

    for (const pattern of spamPatterns) {
        if (pattern.test(lower)) return true;
    }

    // Cyrillic-only message body submitted into English corporate contact form
    const cyrillicChars = (text.match(/[\u0400-\u04FF]/g) || []).length;
    if (cyrillicChars > 20 && cyrillicChars / text.length > 0.5) {
        return true;
    }

    return false;
}

export type SpamCheckInput = {
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    message?: string;
    /** Honeypot field: must remain empty for legitimate users */
    honeypot?: string;
    /** Timestamp (epoch ms) when the user loaded the form */
    loadTime?: number | string;
};

export type SpamCheckResult = {
    isSpam: boolean;
    reason?: string;
    /**
     * If true, the handler should pretend the submission was successful
     * (HTTP 200) without performing side-effects (sending email, logging to sheet),
     * so that automated bots do not know they were filtered.
     */
    silentDrop: boolean;
};

/**
 * Master spam check function for forms.
 */
export function checkFormSpam(input: SpamCheckInput): SpamCheckResult {
    // 1. Honeypot check - bots auto-fill hidden fields
    if (input.honeypot && String(input.honeypot).trim() !== "") {
        return {
            isSpam: true,
            reason: "Honeypot triggered",
            silentDrop: true,
        };
    }

    // 2. Submission speed check - bots submit in under 2 seconds
    if (input.loadTime) {
        const loadEpoch = Number(input.loadTime);
        if (!Number.isNaN(loadEpoch) && loadEpoch > 0) {
            const elapsed = Date.now() - loadEpoch;
            // Less than 2 seconds is physically impossible for a real human filling 5+ fields
            if (elapsed < 2000) {
                return {
                    isSpam: true,
                    reason: "Automated rapid submission",
                    silentDrop: true,
                };
            }
        }
    }

    // 3. Disposable/spam email domain check
    if (isDisposableEmail(input.email)) {
        return {
            isSpam: true,
            reason: "Disposable or temporary email address not allowed",
            silentDrop: false,
        };
    }

    // 4. Content heuristics
    if (input.message) {
        if (hasExcessiveLinks(input.message, 2)) {
            return {
                isSpam: true,
                reason: "Message contains excessive links",
                silentDrop: true,
            };
        }
        if (isCommonSpamContent(input.message)) {
            return {
                isSpam: true,
                reason: "Spam content pattern detected",
                silentDrop: true,
            };
        }
    }

    return {
        isSpam: false,
        silentDrop: false,
    };
}

