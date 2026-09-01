import { promises as fs } from "fs";
import os from "os";
import path from "path";

const TTL_MS = 30 * 60 * 1000;
const LOG_FILE = process.env.VERCEL
    ? path.join(os.tmpdir(), "iaudit-report-sends.json")
    : path.join(process.cwd(), "data", "report-send-log.json");

type SendLog = Record<string, number>;

const pendingClaims = new Set<string>();

async function readLog(): Promise<SendLog> {
    try {
        const raw = await fs.readFile(LOG_FILE, "utf8");
        const parsed = JSON.parse(raw) as SendLog;
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
        return {};
    }
}

async function writeLog(log: SendLog) {
    const now = Date.now();
    const pruned: SendLog = {};
    for (const [key, sentAt] of Object.entries(log)) {
        if (now - sentAt < TTL_MS) pruned[key] = sentAt;
    }
    await fs.mkdir(path.dirname(LOG_FILE), { recursive: true });
    await fs.writeFile(LOG_FILE, JSON.stringify(pruned), "utf8");
}

/** Returns true when this send should proceed; false when a recent duplicate was already sent. */
export async function claimReportEmailSend(key: string) {
    const normalized = key.trim();
    if (!normalized) return true;
    if (pendingClaims.has(normalized)) return false;

    pendingClaims.add(normalized);
    try {
        const log = await readLog();
        const lastSentAt = log[normalized];
        if (lastSentAt && Date.now() - lastSentAt < TTL_MS) return false;
        log[normalized] = Date.now();
        await writeLog(log);
        return true;
    } finally {
        pendingClaims.delete(normalized);
    }
}

export async function releaseReportEmailSend(key: string) {
    const normalized = key.trim();
    if (!normalized) return;

    pendingClaims.delete(normalized);
    const log = await readLog();
    delete log[normalized];
    await writeLog(log);
}
