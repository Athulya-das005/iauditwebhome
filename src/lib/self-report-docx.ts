import { promises as fs } from "fs";
import path from "path";
import {
    AlignmentType,
    Document,
    ImageRun,
    Packer,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    TextRun,
    WidthType,
    BorderStyle,
    HeadingLevel,
} from "docx";
import type { SelfReportData } from "@/lib/self-report-data";
import { maturityTone } from "@/lib/self-report-data";
import { buildClauseBarChartPng, buildScoreDonutPng } from "@/lib/self-report-charts";

const GREEN = "006644";
const YES = "16A34A";
const NO = "EF4444";
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

export async function buildSelfDocx(data: SelfReportData) {
    const children: (Paragraph | Table)[] = [];
    const tone = maturityTone(data.maturity.stage);
    let donutPng: Buffer | null = null;
    let barPng: Buffer | null = null;
    try {
        [donutPng, barPng] = await Promise.all([
            buildScoreDonutPng(data.yes, data.total, data.maturity.stage),
            buildClauseBarChartPng(data.clauses),
        ]);
    } catch (error) {
        // Keep the report usable if native image rendering is unavailable.
        console.error("Self-assessment chart rendering skipped:", error);
    }
    const donutParagraph = donutPng
        ? new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { after: 120 },
              children: [
                  new ImageRun({
                      type: "png",
                      data: new Uint8Array(donutPng),
                      transformation: { width: 210, height: 230 },
                  }),
              ],
          })
        : new Paragraph({ children: [new TextRun({ text: "Score chart unavailable on this server.", color: "6B7280" })] });
    const barParagraph = barPng
        ? new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { after: 160 },
              children: [
                  new ImageRun({
                      type: "png",
                      data: new Uint8Array(barPng),
                      transformation: { width: 520, height: 231 },
                  }),
              ],
          })
        : new Paragraph({ children: [new TextRun({ text: "Clause chart unavailable on this server.", color: "6B7280" })] });

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

    const fullName = `${data.session.firstName} ${data.session.lastName}`.trim();
    const details = [
        ["Name", fullName],
        ["Email", data.session.email],
        ["Organisation", data.session.organisation],
        ["Industry", data.session.industry],
        ["Organisation size", data.session.organisationSize],
        ["Department", data.session.department],
        ["ISO standard", data.session.isoStandard],
        ["Audit scope", data.session.auditScope],
        ["Assessment date", data.auditDate],
        ["Existing customer", data.session.existingCustomer],
    ];
    const detailRows: TableRow[] = [];
    for (let index = 0; index < details.length; index += 2) {
        const left = details[index];
        const right = details[index + 1];
        detailRows.push(
            new TableRow({
                children: [
                    cell(`${left[0]}\n${left[1] || "—"}`, { fill: "F0FDF4" }),
                    right ? cell(`${right[0]}\n${right[1] || "—"}`, { fill: "F0FDF4" }) : cell("", { fill: "F0FDF4" }),
                ],
            })
        );
    }

    children.push(
        new Paragraph({ text: "Assessment Details", heading: HeadingLevel.HEADING_2 }),
        new Table({ width: { size: 9360, type: WidthType.DXA }, rows: detailRows }),
        new Paragraph({ spacing: { after: 120 }, children: [] }),
        new Paragraph({ text: "Maturity Assessment Result", heading: HeadingLevel.TITLE }),
        new Paragraph({
            children: [new TextRun({ text: `${data.session.isoStandard}  |  ${data.session.organisation}  |  ${data.auditDate}`, color: "6B7280" })],
        }),
        new Paragraph({ children: [new TextRun({ text: `Score: ${data.yes} / ${data.total}`, bold: true, color: tone.accentHex, size: 32 })] }),
        new Paragraph({ text: "Total Score", heading: HeadingLevel.HEADING_1 }),
        donutParagraph,
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
        new Paragraph({ children: [new TextRun({ text: data.maturity.stage.toUpperCase(), bold: true, color: tone.accentHex })] }),
        new Paragraph({
            children: [new TextRun({ text: `Your Position: ${data.maturity.stage}`, bold: true, color: tone.accentHex, size: 28 })],
        }),
        new Paragraph({ children: [new TextRun({ text: data.maturity.description })] }),
        new Paragraph({ children: [new TextRun({ text: "RECOMMENDED ACTIONS:", bold: true, color: tone.accentHex })] }),
        ...data.maturity.actions.map(
            (action, index) =>
                new Paragraph({
                    spacing: { after: 80 },
                    children: [
                        new TextRun({ text: `${index + 1}.  `, bold: true, color: tone.accentHex }),
                        new TextRun({ text: action }),
                    ],
                })
        ),
        new Paragraph({
            children: [
                new TextRun({ text: "Timeline: ", bold: true, color: tone.accentHex }),
                new TextRun({ text: data.maturity.timeline, color: tone.accentHex }),
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
                ...data.clauses.map((clause) => new TableRow({ children: [cell(clause.label), cell(String(clause.yes)), cell(String(clause.total))] })),
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
        barParagraph
    );

    data.clauses.forEach((clause) => {
        children.push(
            new Paragraph({
                text: `${clause.label} — Subtotal: ${clause.yes} / ${clause.total}`,
                heading: HeadingLevel.HEADING_2,
            })
        );
        clause.questions.forEach((question) => {
            const compliant = question.answer === "yes";
            const note = question.notes?.trim();
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
            if (note) {
                children.push(
                    new Paragraph({
                        spacing: { after: 120 },
                        children: [
                            new TextRun({ text: "Notes: ", bold: true, color: "6B7280", size: 18 }),
                            new TextRun({ text: note, color: "4B5563", size: 18 }),
                        ],
                    })
                );
            }
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
