export const SECURITY_EMAIL = "security@iaudit.global";

export const SECURITY_REPORT_SUBJECT = "[VDP] Security Vulnerability Report";

export function getSecurityMailtoUrl(subject = SECURITY_REPORT_SUBJECT) {
    return `mailto:${SECURITY_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function openSecurityEmail(subject = SECURITY_REPORT_SUBJECT) {
    window.location.href = getSecurityMailtoUrl(subject);
}
