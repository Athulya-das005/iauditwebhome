import { readFileSync } from "fs";
import { resolve } from "path";
import nodemailer from "nodemailer";

function loadLocalEnv() {
    const text = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of text.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const cut = trimmed.indexOf("=");
        if (cut <= 0) continue;
        const key = trimmed.slice(0, cut).trim();
        let value = trimmed.slice(cut + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        if (!process.env[key]) process.env[key] = value;
    }
}

loadLocalEnv();

const to = process.argv[2]?.trim();
if (!to) {
    console.error("Usage: npm run test:email -- you@example.com");
    process.exit(1);
}

const host = process.env.SMTP_HOST?.trim();
const user = process.env.SMTP_USER?.trim();
const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
const from = process.env.SMTP_FROM?.trim() || user;

if (!host || !user || !pass || !from) {
    console.error("Missing SMTP_HOST, SMTP_USER or SMTP_PASS in .env.local.");
    process.exit(1);
}

const port = Number(process.env.SMTP_PORT || 587);
const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
});

await transporter.verify();
await transporter.sendMail({
    from: from.includes("<") ? from : `"iAudit Global" <${from}>`,
    to,
    subject: "iAudit Global test email",
    text: "SMTP is working. Gap analysis reports can now be sent to this inbox.",
});

console.log(`Test email sent to ${to}`);
