import { execSync } from "child_process";
import { existsSync, unlinkSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const lockPath = path.join(root, ".next", "dev", "lock");
const port = Number(process.env.PORT || 3000);

function killPort(p) {
    try {
        if (process.platform === "win32") {
            const output = execSync(`netstat -ano | findstr :${p}`, { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] });
            const pids = new Set();
            for (const line of output.split(/\r?\n/)) {
                if (!line.includes("LISTENING")) continue;
                const pid = line.trim().split(/\s+/).at(-1);
                if (pid && /^\d+$/.test(pid)) pids.add(pid);
            }
            for (const pid of pids) {
                try {
                    execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
                    console.log(`Stopped process ${pid} on port ${p}.`);
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

if (existsSync(lockPath)) {
    try {
        unlinkSync(lockPath);
        console.log("Removed Next.js dev lock file.");
    } catch {
        // ignore
    }
}

killPort(port);

const child = spawn("npx", ["next", "dev", "--webpack", "-p", String(port)], {
    cwd: root,
    stdio: "inherit",
    shell: true,
});
child.on("exit", (code) => process.exit(code ?? 0));
