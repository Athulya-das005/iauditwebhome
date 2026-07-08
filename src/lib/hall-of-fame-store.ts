import { promises as fs } from "fs";
import path from "path";
import type { HallOfFameResearcher } from "@/types/hall-of-fame";

const DATA_FILE = path.join(process.cwd(), "data", "hall-of-fame.json");
const GITHUB_FILE_PATH = "data/hall-of-fame.json";

function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 48);
}

export function createResearcherId(name: string, existing: HallOfFameResearcher[]) {
    const base = slugify(name) || "researcher";
    let candidate = base;
    let counter = 2;

    while (existing.some((item) => item.id === candidate)) {
        candidate = `${base}-${counter}`;
        counter += 1;
    }

    return candidate;
}

function serializeResearchers(researchers: HallOfFameResearcher[]) {
    return `${JSON.stringify(researchers, null, 2)}\n`;
}

function githubConfig() {
    return {
        token: process.env.GITHUB_TOKEN,
        repo: process.env.GITHUB_REPO,
        branch: process.env.GITHUB_BRANCH ?? "main",
    };
}

async function readFromGitHub(): Promise<HallOfFameResearcher[] | null> {
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

    if (!res.ok) return null;

    const file = (await res.json()) as { content?: string; encoding?: string };
    if (file.encoding !== "base64" || !file.content) return null;

    const raw = Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
    const parsed = JSON.parse(raw) as HallOfFameResearcher[];
    return Array.isArray(parsed) ? parsed : null;
}

export async function readHallOfFameResearchers(): Promise<HallOfFameResearcher[]> {
    if (process.env.VERCEL) {
        const fromGitHub = await readFromGitHub();
        if (fromGitHub) return fromGitHub;
    }

    try {
        const raw = await fs.readFile(DATA_FILE, "utf8");
        const parsed = JSON.parse(raw) as HallOfFameResearcher[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

async function writeLocalResearchers(content: string) {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, content, "utf8");
}

async function publishToGitHub(content: string, message: string) {
    const { token, repo, branch } = githubConfig();

    if (!token || !repo) {
        return { publishedToGitHub: false as const };
    }

    const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    };

    const getRes = await fetch(
        `https://api.github.com/repos/${repo}/contents/${GITHUB_FILE_PATH}?ref=${branch}`,
        { headers, cache: "no-store" }
    );

    let sha: string | undefined;
    if (getRes.ok) {
        const file = (await getRes.json()) as { sha?: string };
        sha = file.sha;
    } else if (getRes.status !== 404) {
        const error = await getRes.text();
        throw new Error(`GitHub read failed: ${error}`);
    }

    const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${GITHUB_FILE_PATH}`, {
        method: "PUT",
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message,
            content: Buffer.from(content, "utf8").toString("base64"),
            branch,
            ...(sha ? { sha } : {}),
        }),
    });

    if (!putRes.ok) {
        const error = await putRes.text();
        throw new Error(`GitHub publish failed: ${error}`);
    }

    return { publishedToGitHub: true as const };
}

export async function saveHallOfFameResearchers(
    researchers: HallOfFameResearcher[],
    commitMessage: string
) {
    const content = serializeResearchers(researchers);

    // Vercel/serverless filesystem is read-only — publish directly to GitHub.
    if (process.env.VERCEL) {
        const github = await publishToGitHub(content, commitMessage);
        if (!github.publishedToGitHub) {
            throw new Error(
                "GitHub publish is not configured. Add GITHUB_TOKEN and GITHUB_REPO in Vercel environment variables."
            );
        }
        return github;
    }

    try {
        await writeLocalResearchers(content);
    } catch (error) {
        const code = (error as NodeJS.ErrnoException).code;
        if (code !== "EROFS" && code !== "EPERM") {
            throw error;
        }
    }

    const github = await publishToGitHub(content, commitMessage);
    if (!github.publishedToGitHub) {
        return github;
    }

    return github;
}
