import { promises as fs } from "fs";
import path from "path";
import type { AssessmentLead } from "@/types/assessment-lead";

const DATA_FILE = path.join(process.cwd(), "data", "assessment-leads.json");
const GITHUB_FILE_PATH = "data/assessment-leads.json";

function githubConfig() {
    return {
        token: process.env.GITHUB_TOKEN,
        repo: process.env.GITHUB_REPO,
        branch: process.env.GITHUB_BRANCH ?? "main",
    };
}

function serializeLeads(leads: AssessmentLead[]) {
    return `${JSON.stringify(leads, null, 2)}\n`;
}

async function readLocalLeads(): Promise<AssessmentLead[]> {
    try {
        const raw = await fs.readFile(DATA_FILE, "utf8");
        const parsed = JSON.parse(raw) as AssessmentLead[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

async function readFromGitHub(): Promise<{ leads: AssessmentLead[]; sha?: string } | null> {
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

    if (res.status === 404) return { leads: [] };
    if (!res.ok) return null;

    const file = (await res.json()) as { content?: string; encoding?: string; sha?: string };
    if (file.encoding !== "base64" || !file.content) {
        return { leads: [], sha: file.sha };
    }

    const raw = Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
    const parsed = JSON.parse(raw) as AssessmentLead[];
    return { leads: Array.isArray(parsed) ? parsed : [], sha: file.sha };
}

async function writeLocalLeads(leads: AssessmentLead[]) {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, serializeLeads(leads), "utf8");
}

async function publishToGitHub(leads: AssessmentLead[], message: string, sha?: string) {
    const { token, repo, branch } = githubConfig();
    if (!token || !repo) return { publishedToGitHub: false as const };

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
        throw new Error(`GitHub assessment lead save failed: ${await putRes.text()}`);
    }

    return { publishedToGitHub: true as const };
}

export async function readAssessmentLeads(): Promise<AssessmentLead[]> {
    if (process.env.VERCEL) {
        const fromGitHub = await readFromGitHub();
        if (fromGitHub) {
            return [...fromGitHub.leads].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
    }

    const local = await readLocalLeads();
    return [...local].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function addAssessmentLead(lead: AssessmentLead) {
    if (process.env.VERCEL) {
        const existing = (await readFromGitHub()) ?? { leads: [] };
        const next = [lead, ...existing.leads];
        try {
            await publishToGitHub(next, `Add assessment lead: ${lead.email} (${lead.assessmentType})`, existing.sha);
            return { lead, publishedToGitHub: true as const };
        } catch {
            return { lead, publishedToGitHub: false as const };
        }
    }

    const existing = await readLocalLeads();
    const next = [lead, ...existing];

    try {
        await writeLocalLeads(next);
    } catch (error) {
        const code = (error as NodeJS.ErrnoException).code;
        if (code !== "EROFS" && code !== "EPERM") throw error;
    }

    let publishedToGitHub = false;
    try {
        const github = await publishToGitHub(next, `Add assessment lead: ${lead.email} (${lead.assessmentType})`);
        publishedToGitHub = github.publishedToGitHub;
    } catch {
        // optional
    }

    return { lead, publishedToGitHub };
}

export async function deleteAssessmentLead(id: string) {
    const existing = process.env.VERCEL ? ((await readFromGitHub()) ?? { leads: [] }) : { leads: await readLocalLeads(), sha: undefined };
    const next = existing.leads.filter((lead) => lead.id !== id);
    if (next.length === existing.leads.length) throw new Error("Lead not found.");

    if (!process.env.VERCEL) {
        try {
            await writeLocalLeads(next);
        } catch (error) {
            const code = (error as NodeJS.ErrnoException).code;
            if (code !== "EROFS" && code !== "EPERM") throw error;
        }
    }

    try {
        await publishToGitHub(next, `Delete assessment lead ${id}`, existing.sha);
    } catch {
        // optional locally
        if (process.env.VERCEL) throw new Error("Unable to delete lead.");
    }
}

export async function setAssessmentLeadEmailSent(id: string, emailSent: boolean) {
    const emailSentAt = emailSent ? new Date().toISOString() : null;
    const existing = process.env.VERCEL ? ((await readFromGitHub()) ?? { leads: [] }) : { leads: await readLocalLeads(), sha: undefined };
    const index = existing.leads.findIndex((lead) => lead.id === id);
    if (index === -1) throw new Error("Lead not found.");

    const next = existing.leads.map((lead) => (lead.id === id ? { ...lead, emailSentAt } : lead));

    if (!process.env.VERCEL) {
        try {
            await writeLocalLeads(next);
        } catch (error) {
            const code = (error as NodeJS.ErrnoException).code;
            if (code !== "EROFS" && code !== "EPERM") throw error;
        }
    }

    try {
        await publishToGitHub(
            next,
            emailSent ? `Mark assessment lead emailed: ${id}` : `Mark assessment lead not emailed: ${id}`,
            existing.sha
        );
    } catch {
        if (process.env.VERCEL) throw new Error("Unable to update lead.");
    }

    return { lead: next.find((lead) => lead.id === id)! };
}
