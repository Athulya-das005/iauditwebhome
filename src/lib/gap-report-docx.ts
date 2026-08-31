import { promises as fs } from "fs";
import path from "path";
import {
    AlignmentType,
    BorderStyle,
    Document,
    HeadingLevel,
    ImageRun,
    Packer,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    TextRun,
    WidthType,
} from "docx";
import { findingColorHex, findingLabel, type GapReportData } from "@/lib/gap-report-data";
import { buildFindingMixDonutPng, buildGapClauseBarPng } from "@/lib/gap-report-charts";
import { parseDataImage } from "@/lib/gap-report-images";

const GREEN = "006644";
const COMPLY = "19B681";
const OFI = "F49C1C";
const NC = "EF4E4E";
const thin = { style: BorderStyle.SINGLE, size: 4, color: "E5E7EB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin };
const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: none, bottom: none, left: none, right: none };

function cell(text: string, opts?: { bold?: boolean; fill?: string; color?: string; width?: number }) {
    return new TableCell({
        borders,
        width: opts?.width ? { size: opts.width, type: WidthType.DXA } : undefined,
        shading: opts?.fill ? { fill: opts.fill } : undefined,
        children: [
            new Paragraph({
                spacing: { before: 60, after: 60 },
                children: [new TextRun({ text, bold: opts?.bold, color: opts?.color ?? "111827", font: "Calibri", size: 18 })],
            }),
        ],
    });
}

function clauseBarColor(percent: number) {
    if (percent >= 75) return COMPLY;
    if (percent >= 50) return OFI;
    return NC;
}

function barCell(percent: number) {
    const fillWidth = Math.max(200, Math.round((Math.min(Math.max(percent, 0), 100) / 100) * 3600));
    return new TableCell({
        borders,
        children: [
            new Table({
                width: { size: fillWidth, type: WidthType.DXA },
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                borders: noBorders,
                                shading: { fill: clauseBarColor(percent) },
                                children: [new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

function parseDataImageForDocx(dataUrl: string): { type: "png" | "jpg"; data: Uint8Array } | null {
    const parsed = parseDataImage(dataUrl);
    if (!parsed) return null;
    if (parsed.mime.includes("png")) return { type: "png", data: new Uint8Array(parsed.bytes) };
    if (parsed.mime.includes("jpeg") || parsed.mime.includes("jpg")) return { type: "jpg", data: new Uint8Array(parsed.bytes) };
    return { type: "png", data: new Uint8Array(parsed.bytes) };
}

function actionPlanParagraphs(actionPlan: string) {
    return actionPlan
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map(
            (line) =>
                new Paragraph({
                    spacing: { after: 60 },
                    children: [new TextRun({ text: line, color: "4B5563", size: 18 })],
                })
        );
}

export async function buildGapDocx(data: GapReportData) {
    const fullName = `${data.session.firstName} ${data.session.lastName}`.trim();
    const cover = [
        ["Name of Company", data.session.organisation],
        ["Audit Date", data.auditDate],
        ["ISO Standard", data.session.isoStandard],
        ["Location of Audit", data.session.industry || "—"],
        ["Company Representatives", fullName || "—"],
        ["Name of Auditor", fullName || "—"],
        ["Contact email", data.session.email],
        ["Scope of Audit", data.session.auditScope || "—"],
    ];

    const [donutPng, barPng] = await Promise.all([
        buildFindingMixDonutPng(data.comply, data.ofi, data.nc),
        buildGapClauseBarPng(data.clauses),
    ]);

    const scoreHeader = new TableRow({
        children: ["Clause", "Total Questions", "Comply", "OFI", "NC", "Score"].map((label) =>
            cell(label, { bold: true, fill: GREEN, color: "FFFFFF" })
        ),
    });
    const scoreRows = data.clauses.map(
        (clause) =>
            new TableRow({
                children: [
                    cell(clause.label),
                    cell(String(clause.total)),
                    cell(String(clause.comply), { color: COMPLY, bold: true }),
                    cell(String(clause.ofi), { color: OFI, bold: true }),
                    cell(String(clause.nc), { color: NC, bold: true }),
                    cell(`${clause.percent}%`),
                ],
            })
    );

    const children: (Paragraph | Table)[] = [];

    try {
        const logoBytes = await fs.readFile(path.join(process.cwd(), "public", "iaudit-logo-nav.png"));
        children.push(
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new ImageRun({
                        type: "png",
                        data: new Uint8Array(logoBytes),
                        transformation: { width: 110, height: 81 },
                    }),
                ],
            })
        );
    } catch {
        children.push(new Paragraph({ children: [new TextRun({ text: "iAudit Global", bold: true, color: GREEN, size: 28 })] }));
    }

    children.push(
        new Paragraph({ text: "Assessment Details", heading: HeadingLevel.HEADING_2 }),
        new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: cover.map(([label, value]) => new TableRow({ children: [cell(label, { bold: true, fill: "F0FDF4" }), cell(value, { fill: "F0FDF4" })] })),
        }),
        new Paragraph({ spacing: { before: 120, after: 120 }, children: [] }),
        new Paragraph({ text: "Gap Analysis Report", heading: HeadingLevel.TITLE }),
        new Paragraph({ spacing: { before: 200, after: 80 }, children: [] }),
        new Paragraph({ text: "Scoring Summary", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({
            spacing: { after: 120 },
            children: [
                new TextRun({
                    text: `Compliance Percentage: (${data.comply} ÷ ${data.totalQuestions}) × 100 = ${data.overall}%`,
                    bold: true,
                    size: 28,
                }),
            ],
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: `Comply: ${data.comply}`, bold: true, color: COMPLY }),
                new TextRun({ text: "   |   " }),
                new TextRun({ text: `OFI: ${data.ofi}`, bold: true, color: OFI }),
                new TextRun({ text: "   |   " }),
                new TextRun({ text: `NC: ${data.nc}`, bold: true, color: NC }),
            ],
        }),
        new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({
                    text: `Maturity Level: ${data.maturity.stage} (${data.maturity.percentLabel}) — ${data.maturity.status}. ${data.maturity.action}. Timeline: ${data.maturity.timeline}`,
                }),
            ],
        }),
        new Paragraph({
            spacing: { after: 160 },
            children: [
                new TextRun({
                    text: `Certification Readiness: ${data.readiness.label} (${data.readiness.ncLabel}). ${data.readiness.action}. Timeline: ${data.readiness.timeline}`,
                }),
            ],
        }),
        new Paragraph({
            spacing: { before: 120, after: 160 },
            children: [new TextRun({ text: "Finding mix", bold: true, size: 26, color: GREEN })],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
                new ImageRun({
                    type: "png",
                    data: new Uint8Array(donutPng),
                    transformation: { width: 240, height: 250 },
                }),
            ],
        }),
        new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
                new TableRow({
                    children: [
                        cell("Comply", { bold: true, fill: COMPLY, color: "FFFFFF" }),
                        cell("OFI", { bold: true, fill: OFI, color: "FFFFFF" }),
                        cell("NC", { bold: true, fill: NC, color: "FFFFFF" }),
                    ],
                }),
                new TableRow({
                    children: [cell(String(data.comply)), cell(String(data.ofi)), cell(String(data.nc))],
                }),
            ],
        }),
        new Paragraph({
            spacing: { before: 240, after: 120 },
            children: [new TextRun({ text: "Clause-wise Compliance", bold: true, size: 26, color: GREEN })],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 160 },
            children: [
                new ImageRun({
                    type: "png",
                    data: new Uint8Array(barPng),
                    transformation: { width: 500, height: 210 },
                }),
            ],
        }),
        new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
                new TableRow({
                    children: [
                        cell("Clause", { bold: true, fill: GREEN, color: "FFFFFF", width: 2800 }),
                        cell("Compliance", { bold: true, fill: GREEN, color: "FFFFFF", width: 5200 }),
                        cell("%", { bold: true, fill: GREEN, color: "FFFFFF", width: 1360 }),
                    ],
                }),
                ...data.clauses.map(
                    (clause) =>
                        new TableRow({
                            children: [cell(clause.label, { width: 2800 }), barCell(clause.percent), cell(`${clause.percent}%`, { width: 1360 })],
                        })
                ),
            ],
        }),
        new Paragraph({
            spacing: { before: 240, after: 120 },
            children: [new TextRun({ text: "Detailed Scorecard", bold: true, size: 26, color: GREEN })],
        }),
        new Table({ width: { size: 9360, type: WidthType.DXA }, rows: [scoreHeader, ...scoreRows] }),
        new Paragraph({ spacing: { before: 200 }, children: [] }),
        new Paragraph({ text: "Detailed Audit Findings", heading: HeadingLevel.HEADING_1 })
    );

    data.questions.forEach((question, index) => {
        children.push(
            new Paragraph({
                spacing: { before: 200, after: 60 },
                children: [
                    new TextRun({
                        text: `${index + 1}. ${question.clauseLabel}`,
                        bold: true,
                        color: GREEN,
                        size: 20,
                    }),
                ],
            }),
            new Paragraph({
                spacing: { after: 60 },
                children: [new TextRun({ text: question.text, size: 18 })],
            }),
            new Paragraph({
                spacing: { after: 60 },
                children: [
                    new TextRun({ text: "Finding: ", bold: true, color: "6B7280", size: 18 }),
                    new TextRun({
                        text: findingLabel(question.finding),
                        bold: true,
                        color: findingColorHex(question.finding).replace("#", ""),
                        size: 18,
                    }),
                ],
            })
        );

        if (question.evidence?.trim()) {
            children.push(
                new Paragraph({
                    spacing: { after: 60 },
                    children: [new TextRun({ text: `Evidence: ${question.evidence}`, color: "4B5563", size: 18 })],
                })
            );
        }

        if (question.actionPlan?.trim()) {
            children.push(
                new Paragraph({
                    spacing: { after: 40 },
                    children: [new TextRun({ text: "Action plan:", bold: true, color: "6B7280", size: 18 })],
                }),
                ...actionPlanParagraphs(question.actionPlan)
            );
        }

        if (question.evidenceImage) {
            const parsed = parseDataImageForDocx(question.evidenceImage);
            if (parsed) {
                children.push(
                    new Paragraph({
                        spacing: { before: 80, after: 60 },
                        children: [new TextRun({ text: "Evidence image:", bold: true, color: "6B7280", size: 18 })],
                    }),
                    new Paragraph({
                        spacing: { after: 120 },
                        children: [
                            new ImageRun({
                                type: parsed.type,
                                data: parsed.data,
                                transformation: { width: 280, height: 180 },
                            }),
                        ],
                    })
                );
            }
        }
    });

    children.push(
        new Paragraph({ spacing: { before: 280 }, children: [] }),
        new Paragraph({ children: [new TextRun({ text: "Built with iAudit Global", italics: true, color: "6B7280", size: 16 })] })
    );

    const doc = new Document({
        creator: "iAudit Global",
        title: "Gap Analysis Report",
        sections: [{ properties: {}, children }],
    });

    return Packer.toBuffer(doc);
}
