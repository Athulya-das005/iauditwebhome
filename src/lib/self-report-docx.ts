import { promises as fs } from "fs";
import path from "path";
import { Document, ImageRun, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType, BorderStyle, HeadingLevel } from "docx";
import type { SelfReportData } from "@/lib/self-report-data";

const GREEN = "006644";
const YES = "16A34A";
const NO = "EF4444";
const BAR = "F59E0B";
const thin = { style: BorderStyle.SINGLE, size: 4, color: "E5E7EB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin };

function cell(text: string, opts?: { bold?: boolean; fill?: string; color?: string; width?: number }) {
    return new TableCell({
        borders,
        width: opts?.width ? { size: opts.width, type: WidthType.DXA } : undefined,
        shading: opts?.fill ? { fill: opts.fill } : undefined,
        children: [
            new Paragraph({
                children: [new TextRun({ text, bold: opts?.bold, color: opts?.color ?? "111827", font: "Calibri", size: 20 })],
            }),
        ],
    });
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
                                borders: {
                                    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                    left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                    right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                },
                                shading: { fill: BAR },
                                children: [new Paragraph({ children: [new TextRun({ text: " ", size: 16 })] })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

export async function buildSelfDocx(data: SelfReportData) {
    const children: (Paragraph | Table)[] = [];
    try {
        const logoBytes = await fs.readFile(path.join(process.cwd(), "public", "iaudit-logo-nav.png"));
        children.push(
            new Paragraph({
                children: [new ImageRun({ type: "png", data: new Uint8Array(logoBytes), transformation: { width: 110, height: 81 } })],
            })
        );
    } catch {
        children.push(new Paragraph({ children: [new TextRun({ text: "iAudit Global", bold: true, color: GREEN, size: 28 })] }));
    }

    children.push(
        new Paragraph({ text: "Maturity Assessment Result", heading: HeadingLevel.TITLE }),
        new Paragraph({ children: [new TextRun({ text: `${data.session.isoStandard}  |  ${data.session.organisation}  |  ${data.auditDate}`, color: "6B7280" })] }),
        new Paragraph({ children: [new TextRun({ text: `Score: ${data.yes} / ${data.total}`, bold: true, color: GREEN, size: 32 })] }),
        new Paragraph({ text: "Total Score", heading: HeadingLevel.HEADING_1 }),
        new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
                new TableRow({
                    children: [
                        cell("Yes (Compliant)", { bold: true, fill: YES, color: "FFFFFF" }),
                        cell("No (Non-compliant)", { bold: true, fill: NO, color: "FFFFFF" }),
                        cell("Unanswered", { bold: true, fill: "E5E7EB" }),
                    ],
                }),
                new TableRow({ children: [cell(String(data.yes)), cell(String(data.no)), cell(String(data.unanswered))] }),
            ],
        }),
        new Paragraph({ children: [new TextRun({ text: data.maturity.stage.toUpperCase(), bold: true, color: "6B7280" })] }),
        new Paragraph({ text: `Your Position: ${data.maturity.stage}`, heading: HeadingLevel.HEADING_2 }),
        new Paragraph({ children: [new TextRun({ text: data.maturity.description })] }),
        new Paragraph({ children: [new TextRun({ text: "RECOMMENDED ACTIONS:", bold: true })] }),
        ...data.maturity.actions.map(
            (action, index) =>
                new Paragraph({
                    spacing: { after: 80 },
                    children: [
                        new TextRun({ text: `${index + 1}.  `, bold: true, color: YES }),
                        new TextRun({ text: action }),
                    ],
                })
        ),
        new Paragraph({
            children: [
                new TextRun({ text: "Timeline: ", bold: true }),
                new TextRun({ text: data.maturity.timeline, color: "6B7280" }),
            ],
        }),
        new Paragraph({ text: "Final Score Calculation", heading: HeadingLevel.HEADING_1 }),
        new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
                new TableRow({
                    children: [
                        cell("Clause", { bold: true, fill: GREEN, color: "FFFFFF" }),
                        cell("Subtotal", { bold: true, fill: GREEN, color: "FFFFFF" }),
                        cell("Max", { bold: true, fill: GREEN, color: "FFFFFF" }),
                    ],
                }),
                ...data.clauses.map(
                    (clause) => new TableRow({ children: [cell(clause.label), cell(String(clause.yes)), cell(String(clause.total))] })
                ),
                new TableRow({
                    children: [
                        cell("TOTAL SCORE", { bold: true, fill: "ECFDF3" }),
                        cell(String(data.yes), { bold: true, color: YES }),
                        cell(String(data.total), { bold: true }),
                    ],
                }),
            ],
        }),
        new Paragraph({ text: "Score by Clause", heading: HeadingLevel.HEADING_1 }),
        new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: [
                new TableRow({
                    children: [
                        cell("Clause", { bold: true, fill: GREEN, color: "FFFFFF", width: 2800 }),
                        cell("Score", { bold: true, fill: GREEN, color: "FFFFFF", width: 5200 }),
                        cell("%", { bold: true, fill: GREEN, color: "FFFFFF", width: 1360 }),
                    ],
                }),
                ...data.clauses.map(
                    (clause) =>
                        new TableRow({
                            children: [
                                cell(`${clause.label} (${clause.yes}/${clause.total})`, { width: 2800 }),
                                barCell(clause.percent),
                                cell(`${clause.percent}%`, { width: 1360 }),
                            ],
                        })
                ),
            ],
        })
    );

    data.clauses.forEach((clause) => {
        children.push(new Paragraph({ text: clause.label, heading: HeadingLevel.HEADING_2 }));
        clause.questions.forEach((question) => {
            const compliant = question.answer === "yes";
            children.push(
                new Paragraph({ children: [new TextRun({ text: question.text })] }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: compliant ? "COMPLIANT" : "NON-COMPLIANT",
                            bold: true,
                            color: compliant ? YES : NO,
                            size: 18,
                        }),
                    ],
                })
            );
        });
    });

    children.push(new Paragraph({ children: [new TextRun({ text: "Built with iAudit Global", italics: true, color: "6B7280" })] }));

    const doc = new Document({
        creator: "iAudit Global",
        title: "Self Assessment Report",
        sections: [{ properties: {}, children }],
    });
    return Packer.toBuffer(doc);
}
