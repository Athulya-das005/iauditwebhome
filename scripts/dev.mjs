import { spawn } from "child_process";
import { existsSync, unlinkSync } from "fs";
import { createConnection } from "net";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const lockPath = path.join(root, ".next", "dev", "lock");
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
        console.error(`Could not remove ${lockPath}. Run: npm run dev:restart`);
        process.exit(1);
    }
}

function startDev() {
    removeStaleLock();
    const child = spawn("npx", ["next", "dev", "--webpack", "-p", String(port)], {
        cwd: root,
        stdio: "inherit",
        shell: true,
    });
    child.on("exit", (code) => process.exit(code ?? 0));
}

async function main() {
    const running = await portOpen(port);
    if (running) {
        console.log("");
        console.log(`Port ${port} is already in use — the dev server is likely already running.`);
        console.log(`Open http://localhost:${port} in your browser.`);
        console.log("Do not run npm run dev again in another terminal.");
        console.log("To stop and restart cleanly: npm run dev:restart");
        console.log("");
        process.exit(0);
    }

    if (existsSync(lockPath)) {
        console.log("Found a leftover dev lock file from a crashed session. Cleaning it up...");
    }

    startDev();
}

main();
