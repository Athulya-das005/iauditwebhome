import { promises as fs } from "fs";
import path from "path";
import type { ChecklistLead } from "@/types/checklist-lead";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
    appendChecklistLeadToSheet,
    deleteChecklistLeadFromSheet,
    readChecklistLeadsFromSheet,
    updateChecklistLeadEmailSentInSheet,
} from "@/lib/checklist-leads-sheets";
import { sendContactNotificationEmail } from "@/lib/send-contact-email";

const DATA_FILE = path.join(process.cwd(), "data", "checklist-leads.json");
const GITHUB_FILE_PATH = "data/checklist-leads.json";

function githubConfig() {
    return {
        token: process.env.GITHUB_TOKEN,
        repo: process.env.GITHUB_REPO,
        branch: process.env.GITHUB_BRANCH ?? "main",
    };
}

function serializeLeads(leads: ChecklistLead[]) {
    return `${JSON.stringify(leads, null, 2)}\n`;
}

async function readLocalLeads(): Promise<ChecklistLead[]> {
    try {
        const raw = await fs.readFile(DATA_FILE, "utf8");
        const parsed = JSON.parse(raw) as ChecklistLead[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

async function readFromGitHub(): Promise<{ leads: ChecklistLead[]; sha?: string } | null> {
    const { token, repo, branch } = githubConfig();
    if (!token || !repo) return null;

    try {
        const res = await fetch(
            `https://api.github.com/repos/${repo}/contents/${GITHUB_FILE_PATH}?ref=${branch}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                },
                cache: "no-store",
            }
        );

        if (res.status === 404) {
            return { leads: [] };
        }

        if (!res.ok) {
            console.warn(`GitHub read returned status ${res.status}`);
            return null;
        }

        const file = (await res.json()) as { content?: string; encoding?: string; sha?: string };
        if (file.encoding !== "base64" || !file.content) {
            return { leads: [], sha: file.sha };
        }

        const raw = Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
        const parsed = JSON.parse(raw) as ChecklistLead[];
        return {
            leads: Array.isArray(parsed) ? parsed : [],
            sha: file.sha,
        };
    } catch (err) {
        console.warn("Failed to read checklist leads from GitHub:", err);
        return null;
    }
}

async function writeLocalLeads(leads: ChecklistLead[]) {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, serializeLeads(leads), "utf8");
}

async function publishToGitHub(leads: ChecklistLead[], message: string, sha?: string) {
    const { token, repo, branch } = githubConfig();
    if (!token || !repo) {
        return { publishedToGitHub: false as const };
    }

    try {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/json",
        };

        let fileSha = sha;
        if (!fileSha) {
            const existing = await readFromGitHub();
            fileSha = existing?.sha;
        }

        const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${GITHUB_FILE_PATH}`, {
            method: "PUT",
            headers,
            body: JSON.stringify({
                message,
                content: Buffer.from(serializeLeads(leads), "utf8").toString("base64"),
                branch,
                ...(fileSha ? { sha: fileSha } : {}),
            }),
        });

        if (!putRes.ok) {
            const error = await putRes.text();
            console.warn(`GitHub checklist lead publish failed (${putRes.status}):`, error);
            return { publishedToGitHub: false as const, error };
        }

        return { publishedToGitHub: true as const };
    } catch (err) {
        console.warn("GitHub checklist lead publish exception:", err);
        return { publishedToGitHub: false as const };
    }
}

export async function readChecklistLeads(): Promise<ChecklistLead[]> {
    // 1. Prefer Google Sheets if configured
    if (isGoogleSheetsConfigured()) {
        try {
            const sheetLeads = await readChecklistLeadsFromSheet();
            if (sheetLeads.length > 0) {
                return sheetLeads.sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
            }
        } catch (error) {
            console.error("Checklist leads sheet read failed:", error);
        }
    }

    // 2. Try GitHub if on Vercel
    if (process.env.VERCEL) {
        const fromGitHub = await readFromGitHub();
        if (fromGitHub && fromGitHub.leads.length > 0) {
            return [...fromGitHub.leads].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
    }

    // 3. Fallback to local leads
    const local = await readLocalLeads();
    return [...local].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export async function addChecklistLead(lead: ChecklistLead) {
    let savedToSheet = false;
    let savedLocally = false;
    let publishedToGitHub = false;

    // 1. Save to Google Sheets if configured (durable & shared across serverless deployments)
    if (isGoogleSheetsConfigured()) {
        try {
            savedToSheet = await appendChecklistLeadToSheet(lead);
        } catch (error) {
            console.error("Checklist lead Google Sheet append failed:", error);
        }
    }

    // 2. Save locally for dev environments & local backups
    try {
        const existing = await readLocalLeads();
        const next = [lead, ...existing];
        await writeLocalLeads(next);
        savedLocally = true;
    } catch (error) {
        const code = (error as NodeJS.ErrnoException).code;
        if (code !== "EROFS" && code !== "EPERM") {
            console.warn("Checklist lead local write warning:", error);
        }
    }

    // 3. Send email notification to info@iaudit.global so team can deliver checklist
    try {
        await sendContactNotificationEmail(
            {
                firstName: lead.fullName,
                lastName: "",
                phone: lead.phone || "—",
                email: lead.email,
                subject: `Checklist Request: ${lead.checklistName}`,
                message: `A visitor requested an ISO checklist on the website.\n\nChecklist: ${lead.checklistName}\nIndustry: ${lead.industryTitle || lead.industrySlug || "—"}\nFull Name: ${lead.fullName}\nEmail: ${lead.email}\nRequested At: ${new Date(lead.createdAt).toUTCString()}`,
            },
            {
                tag: "Checklist Request",
                label: lead.industrySlug ? `Industry page (/industries/${lead.industrySlug})` : "Checklist Download",
                subject: `Checklist Request: ${lead.checklistName} (${lead.fullName})`,
                heading: "New ISO Checklist Download Request",
                extraFields: [
                    { label: "Checklist Name", value: lead.checklistName },
                    { label: "Industry", value: lead.industryTitle || lead.industrySlug || "—" },
                ],
            }
        );
    } catch (error) {
        console.warn("Checklist notification email failed:", error);
    }

    // 4. Optionally commit to GitHub repository (does not throw if token expired)
    try {
        const existing = (await readFromGitHub()) ?? { leads: [] };
        const next = [lead, ...existing.leads];
        const gh = await publishToGitHub(
            next,
            `Add checklist lead: ${lead.fullName} (${lead.checklistName})`,
            existing.sha
        );
        publishedToGitHub = gh.publishedToGitHub;
    } catch (error) {
        console.warn("Checklist lead GitHub publish failed:", error);
    }

    return { lead, publishedToGitHub, savedToSheet, savedLocally };
}

export async function deleteChecklistLead(id: string) {
    let deletedFromSheet = false;

    if (isGoogleSheetsConfigured()) {
        try {
            deletedFromSheet = await deleteChecklistLeadFromSheet(id);
        } catch (error) {
            console.error("Checklist lead sheet delete failed:", error);
        }
    }

    const existing = await readLocalLeads();
    const next = existing.filter((lead) => lead.id !== id);
    try {
        await writeLocalLeads(next);
    } catch (error) {
        const code = (error as NodeJS.ErrnoException).code;
        if (code !== "EROFS" && code !== "EPERM") {
            console.warn("Checklist lead local delete warning:", error);
        }
    }

    let publishedToGitHub = false;
    try {
        const gh = await readFromGitHub();
        if (gh) {
            const ghNext = gh.leads.filter((lead) => lead.id !== id);
            const res = await publishToGitHub(ghNext, `Delete checklist lead ${id}`, gh.sha);
            publishedToGitHub = res.publishedToGitHub;
        }
    } catch (error) {
        console.warn("Checklist lead GitHub delete failed:", error);
    }

    return { publishedToGitHub, deletedFromSheet };
}

export async function setChecklistLeadEmailSent(id: string, emailSent: boolean) {
    const emailSentAt = emailSent ? new Date().toISOString() : null;
    let updatedLead: ChecklistLead | null = null;

    if (isGoogleSheetsConfigured()) {
        try {
            updatedLead = await updateChecklistLeadEmailSentInSheet(id, emailSent);
        } catch (error) {
            console.error("Checklist lead sheet email sent update failed:", error);
        }
    }

    const existing = await readLocalLeads();
    const index = existing.findIndex((lead) => lead.id === id);
    if (index !== -1) {
        existing[index] = { ...existing[index], emailSentAt };
        try {
            await writeLocalLeads(existing);
        } catch (error) {
            const code = (error as NodeJS.ErrnoException).code;
            if (code !== "EROFS" && code !== "EPERM") {
                console.warn("Checklist lead local email sent update warning:", error);
            }
        }
        if (!updatedLead) updatedLead = existing[index];
    }

    let publishedToGitHub = false;
    try {
        const gh = await readFromGitHub();
        if (gh) {
            const ghIndex = gh.leads.findIndex((lead) => lead.id === id);
            if (ghIndex !== -1) {
                const ghNext = gh.leads.map((lead) =>
                    lead.id === id ? { ...lead, emailSentAt } : lead
                );
                const res = await publishToGitHub(
                    ghNext,
                    emailSent ? `Mark checklist lead emailed: ${id}` : `Mark checklist lead not emailed: ${id}`,
                    gh.sha
                );
                publishedToGitHub = res.publishedToGitHub;
                if (!updatedLead) updatedLead = ghNext[ghIndex];
            }
        }
    } catch (error) {
        console.warn("Checklist lead GitHub email sent update failed:", error);
    }

    return {
        lead: updatedLead ?? ({ id, emailSentAt } as unknown as ChecklistLead),
        publishedToGitHub,
    };
}
