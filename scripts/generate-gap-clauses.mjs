import fs from "fs";

const raw = fs.readFileSync(".tmp-gap-doc-lines.txt", "utf8");
const lines = raw.split("\n").map((line) => {
    const idx = line.indexOf(": ");
    return idx === -1 ? line : line.slice(idx + 2);
});

const start = lines.findIndex((l) => l.startsWith("ISO 14001:2026 Assessment Questions"));
const end = lines.findIndex((l) => l === "Scoring Summary");
const qlines = lines.slice(start + 1, end);

const skip = new Set([
    "Gap Analysis Findings",
    "Actions Plan to address Finding",
    "Comments / Feedback",
    "Compliance  ☑",
    "OFI  ⭕",
    "NC  ✕",
    "Corrective action required",
    "Improvement required",
    "Objective evidence notes",
]);

const clauseMap = {
    "CLAUSE 4: CONTEXT OF THE ORGANISATION": {
        id: "clause-4-context",
        clauseNumber: "4",
        title: "Context of the Organisation",
        label: "Clause 4: Context of the Organisation",
    },
    "CLAUSE 5: LEADERSHIP AND COMMITMENT": {
        id: "clause-5-leadership",
        clauseNumber: "5",
        title: "Leadership and Commitment",
        label: "Clause 5: Leadership and Commitment",
    },
    "CLAUSE 6: PLANNING": {
        id: "clause-6-planning",
        clauseNumber: "6",
        title: "Planning",
        label: "Clause 6: Planning",
    },
    "CLAUSE 7: SUPPORT (Competence, Awareness, Communication, Documentation)": {
        id: "clause-7-support",
        clauseNumber: "7",
        title: "Support (Competence, Awareness, Communication, Documentation)",
        label: "Clause 7: Support (Competence, Awareness, Communication, Documentation)",
    },
    "CLAUSE 8: OPERATION (Environmental Controls)": {
        id: "clause-8-operation",
        clauseNumber: "8",
        title: "Operation (Environmental Controls)",
        label: "Clause 8: Operation (Environmental Controls)",
    },
    "CLAUSE 9: PERFORMANCE EVALUATION (Monitoring, Measurement & Auditing)": {
        id: "clause-9-performance",
        clauseNumber: "9",
        title: "Performance Evaluation (Monitoring, Measurement & Auditing)",
        label: "Clause 9: Performance Evaluation (Monitoring, Measurement & Auditing)",
    },
    "CLAUSE 10: IMPROVEMENT (Nonconformities & Continual Improvement)": {
        id: "clause-10-improvement",
        clauseNumber: "10",
        title: "Improvement (Nonconformities & Continual Improvement)",
        label: "Clause 10: Improvement (Nonconformities & Continual Improvement)",
    },
};

/** Fix truncated titles in extract (encoding of ★) */
const titleFixes = {
    "Q6.7": "★ NEW Risks and opportunities — determination and documentation (NEW Clause 6.1.4)",
    "Q6.11": "★ NEW Planning and managing changes (NEW Clause 6.3)",
};

const clauses = [];
let currentClause = null;
let currentQ = null;

function flushQ() {
    if (!currentQ || !currentClause) return;
    if (!currentQ.text && currentQ.prompts.length) {
        currentQ.text = currentQ.prompts.shift();
    }
    currentClause.questions.push(currentQ);
    currentQ = null;
}

for (const line of qlines) {
    if (clauseMap[line]) {
        flushQ();
        currentClause = { ...clauseMap[line], questions: [] };
        clauses.push(currentClause);
        continue;
    }

    const m = line.match(/^(Q\d+\.\d+):\s*(.*)$/);
    if (m) {
        flushQ();
        const code = m[1];
        let title = titleFixes[code] || m[2];
        title = title.replace(/^\s*[?\uFFFD*]\s*NEW\s+/i, "★ NEW ").replace(/^\s*\?\s*/, "");
        const is2026 = /★|NEW Clause|2026/.test(title) || /NEW/.test(title);
        currentQ = {
            id: code.toLowerCase().replace(".", "-"),
            code,
            title: title.replace(/\s+/g, " ").trim(),
            text: "",
            prompts: [],
            is2026: Boolean(is2026 || titleFixes[code]),
        };
        continue;
    }

    if (!currentQ) continue;
    if (skip.has(line)) continue;

    if (!currentQ.text) {
        // Main question body: often ends with ? or starts a multi-line "Does/Is/Are/Has..."
        if (
            line.endsWith("?") ||
            /^(Has |Have |Does |Do |Is |Are |When |Can )/i.test(line) ||
            line.length > 80
        ) {
            currentQ.text = line;
            continue;
        }
    }

    currentQ.prompts.push(line);
}
flushQ();

const total = clauses.reduce((n, c) => n + c.questions.length, 0);
if (total !== 61) {
    console.error("Expected 61 questions, got", total);
    clauses.forEach((c) => console.error(c.label, c.questions.length, c.questions.map((q) => q.code).join(",")));
    process.exit(1);
}

function esc(s) {
    return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

let out = `export type GapFinding = "comply" | "ofi" | "nc";

export type GapQuestionDef = {
    id: string;
    code: string;
    title: string;
    text: string;
    prompts?: string[];
    is2026?: boolean;
    note?: string;
};

export type GapClauseDef = {
    id: string;
    clauseNumber: string;
    title: string;
    label: string;
    questions: GapQuestionDef[];
};

export const GAP_TOTAL_QUESTIONS = 61;

export const GAP_SESSION_KEY = "iaudit-gap-analysis-session";

/** ISO 14001:2026 Gap Analysis — 61 questions from iAudit ISO 14001:2026 Gap Analysis Checklist */
export const gapAnalysisClauses: GapClauseDef[] = [
`;

for (const clause of clauses) {
    out += `    {\n`;
    out += `        id: "${clause.id}",\n`;
    out += `        clauseNumber: "${clause.clauseNumber}",\n`;
    out += `        title: "${esc(clause.title)}",\n`;
    out += `        label: "${esc(clause.label)}",\n`;
    out += `        questions: [\n`;
    for (const q of clause.questions) {
        out += `            {\n`;
        out += `                id: "${q.id}",\n`;
        out += `                code: "${q.code}",\n`;
        out += `                title: \`${esc(q.title)}\`,\n`;
        out += `                text: \`${esc(q.text)}\`,\n`;
        if (q.prompts.length) {
            out += `                prompts: [\n`;
            for (const p of q.prompts) {
                out += `                    \`${esc(p)}\`,\n`;
            }
            out += `                ],\n`;
        }
        if (q.is2026) out += `                is2026: true,\n`;
        out += `            },\n`;
    }
    out += `        ],\n`;
    out += `    },\n`;
}
out += `];\n`;

fs.writeFileSync("src/data/gap-analysis-clauses.ts", out);
console.log("Wrote gap-analysis-clauses.ts with", total, "questions");
for (const c of clauses) {
    console.log(c.label, c.questions.length);
}
