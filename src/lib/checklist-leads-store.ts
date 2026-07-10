import { promises as fs } from "fs";
import path from "path";
import type { ChecklistLead } from "@/types/checklist-lead";

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

    if (!res.ok) return null;

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
        throw new Error(`GitHub lead save failed: ${error}`);
    }

    return { publishedToGitHub: true as const };
}

export async function readChecklistLeads(): Promise<ChecklistLead[]> {
    if (process.env.VERCEL) {
        const fromGitHub = await readFromGitHub();
        if (fromGitHub) {
            return [...fromGitHub.leads].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
    }

    const local = await readLocalLeads();
    return [...local].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export async function addChecklistLead(lead: ChecklistLead) {
    if (process.env.VERCEL) {
        const existing = (await readFromGitHub()) ?? { leads: [] };
        const next = [lead, ...existing.leads];
        await publishToGitHub(
            next,
            `Add checklist lead: ${lead.firstName} ${lead.lastName} (${lead.checklistName})`,
            existing.sha
        );
        return { lead, publishedToGitHub: true as const };
    }

    const existing = await readLocalLeads();
    const next = [lead, ...existing];

    try {
        await writeLocalLeads(next);
    } catch (error) {
        const code = (error as NodeJS.ErrnoException).code;
        if (code !== "EROFS" && code !== "EPERM") {
            throw error;
        }
    }

    const github = await publishToGitHub(
        next,
        `Add checklist lead: ${lead.firstName} ${lead.lastName} (${lead.checklistName})`
    );

    return { lead, publishedToGitHub: github.publishedToGitHub };
}
