import { execSync, spawn } from "child_process";
import { existsSync, unlinkSync, rmSync } from "fs";
import { createConnection } from "net";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const lockPath = path.join(root, ".next", "dev", "lock");
const nextDir = path.join(root, ".next");
const port = Number(process.env.PORT || 3000);

function portOpen(p) {
    return new Promise((resolve) => {
        const socket = createConnection({ port: p, host: "127.0.0.1" });
        socket.once("connect", () => {
            socket.destroy();
            resolve(true);
        });
        socket.once("error", () => resolve(false));
    });
}

function removeStaleLock() {
    if (!existsSync(lockPath)) return;
    try {
        unlinkSync(lockPath);
        console.log("Removed stale Next.js dev lock file.");
    } catch {
        // lock may already be gone
    }
}

function killPort(p) {
    try {
        if (process.platform === "win32") {
            const output = execSync(`netstat -ano | findstr :${p}`, {
                encoding: "utf8",
                stdio: ["pipe", "pipe", "ignore"],
            });
            const pids = new Set();
            for (const line of output.split(/\r?\n/)) {
                if (!line.includes("LISTENING")) continue;
                const pid = line.trim().split(/\s+/).at(-1);
                if (pid && /^\d+$/.test(pid) && pid !== String(process.pid)) {
                    pids.add(pid);
                }
            }
            for (const pid of pids) {
                try {
                    execSync(`taskkill /PID ${pid} /F /T`, { stdio: "ignore" });
                    console.log(`Stopped old process ${pid} on port ${p}.`);
                } catch {
                    // process may already be gone
                }
            }
            return;
        }
        execSync(`lsof -ti:${p} | xargs kill -9`, { stdio: "ignore" });
    } catch {
        // nothing listening
    }
}

/** Only kill node processes that look like Next.js, never the current npm/dev parent tree. */
function killStrayNextProcesses() {
    if (process.platform !== "win32") return;
    const protectedPids = new Set([String(process.pid), String(process.ppid)]);
    try {
        const output = execSync(
            'wmic process where "name=\'node.exe\'" get ProcessId,CommandLine /FORMAT:CSV',
            { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }
        );
        for (const line of output.split(/\r?\n/)) {
            if (!/next/i.test(line)) continue;
            const parts = line.split(",");
            const pid = parts.at(-1)?.trim();
            if (!pid || !/^\d+$/.test(pid) || protectedPids.has(pid)) continue;
            try {
                execSync(`taskkill /PID ${pid} /F /T`, { stdio: "ignore" });
                console.log(`Stopped leftover Next.js process ${pid}.`);
            } catch {
                // already gone
            }
        }
    } catch {
        // wmic unavailable — port kill is enough
    }
}

function clearNextCacheIfRequested() {
    const shouldClear = process.env.CLEAR_NEXT === "1" || process.argv.includes("--clean");
    if (!shouldClear || !existsSync(nextDir)) return;
    try {
        rmSync(nextDir, { recursive: true, force: true });
        console.log("Cleared .next cache to free memory.");
    } catch (err) {
        console.warn("Could not clear .next cache:", err instanceof Error ? err.message : err);
    }
}

function startDev() {
    removeStaleLock();
    // Webpack is more stable on low-RAM Windows than Turbopack (avoids multi-worker OOM panics).
    const env = {
        ...process.env,
        NODE_OPTIONS: [process.env.NODE_OPTIONS, "--max-old-space-size=4096"].filter(Boolean).join(" "),
        UV_THREADPOOL_SIZE: process.env.UV_THREADPOOL_SIZE || "4",
    };
    const child = spawn("npx", ["next", "dev", "--webpack", "-p", String(port)], {
        cwd: root,
        stdio: "inherit",
        shell: true,
        env,
    });
    child.on("exit", (code) => process.exit(code ?? 0));
}

async function waitUntilPortFree(p, attempts = 24) {
    for (let i = 0; i < attempts; i++) {
        if (!(await portOpen(p))) return true;
        await new Promise((r) => setTimeout(r, 250));
    }
    return !(await portOpen(p));
}

async function main() {
    clearNextCacheIfRequested();

    if (await portOpen(port)) {
        console.log(`Port ${port} is busy — stopping the old server and starting a fresh one...`);
        killPort(port);
        await waitUntilPortFree(port);
    }

    killStrayNextProcesses();

    if (existsSync(lockPath)) {
        console.log("Cleaning leftover Next.js lock file...");
    }

    startDev();
}

main();
