export function getClientReportSendKey(scope: string) {
    if (typeof window === "undefined") return "";
    const storageKey = `iaudit-report-send:${scope}`;
    const existing = sessionStorage.getItem(storageKey);
    if (existing) return existing;
    const created =
        typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem(storageKey, created);
    return created;
}
