import { promises as fs } from "fs";
import path from "path";
import { Document, ImageRun, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType, AlignmentType, HeadingLevel, BorderStyle } from "docx";
import { findingLabel, type GapReportData } from "@/lib/gap-report-data";

const GREEN = "006644";
const COMPLY = "19B681";
const OFI = "F49C1C";
const NC = "EF4E4E";
const BAR = "29ABE2";
const thin = { style: BorderStyle.SINGLE, size: 4, color: "E5E7EB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin };

function cell(text: string, opts?: { bold?: boolean; fill?: string; color?: string; width?: number }) {
    return new TableCell({
        borders,
        width: opts?.width ? { size: opts.width, type: WidthType.DXA } : undefined,
        shading: opts?.fill ? { fill: opts.fill } : undefined,
        children: [
            new Paragraph({
                children: [new TextRun({ text, bold: opts?.bold, color: opts?.color ?? "111827", font: "Calibri", size: 18 })],
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

    const scoreHeader = new TableRow({
        children: ["Clause", "Total Questions", "Comply", "OFI", "NC", "Score"].map((label) => cell(label, { bold: true, fill: GREEN, color: "FFFFFF" })),
    });
    const scoreRows = data.clauses.map((clause) =>
        new TableRow({
            children: [clause.label, String(clause.total), String(clause.comply), String(clause.ofi), String(clause.nc), `${clause.percent}%`].map((value) => cell(value)),
        })
    );

    const findingHeader = new TableRow({
        children: ["#", "Clause", "Question", "Finding", "Evidence", "Action Plan"].map((label) => cell(label, { bold: true, fill: GREEN, color: "FFFFFF" })),
    });
    const findingRows = data.questions.map((question, index) =>
        new TableRow({
            children: [
                String(index + 1),
                question.clauseLabel,
                question.text,
                findingLabel(question.finding),
                question.evidence,
                question.actionPlan,
            ].map((value) => cell(value)),
        })
    );

    const children: (Paragraph | Table)[] = [];

    try {
        const logoBytes = await fs.readFile(path.join(process.cwd(), "public", "iaudit-logo-nav.png"));
        children.push(
            new Paragraph({
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
        new Paragraph({ text: "Gap Analysis Report", heading: HeadingLevel.TITLE }),
        new Table({
            width: { size: 9360, type: WidthType.DXA },
            rows: cover.map(([label, value]) => new TableRow({ children: [cell(label, { bold: true, fill: "F3F4F6" }), cell(value)] })),
        }),
        new Paragraph({ text: "" }),
        new Paragraph({ text: "Audit Result Summary", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ children: [new TextRun({ text: `Compliance Score: ${data.overall}%`, bold: true, size: 28 })] }),
        new Paragraph({ children: [new TextRun({ text: `Status: ${data.status}`, bold: true, color: data.status === "Pass" ? GREEN : "DC2626" })] }),
        new Paragraph({ text: "Finding mix", heading: HeadingLevel.HEADING_2 }),
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
        new Paragraph({ text: "Clause-wise Compliance", heading: HeadingLevel.HEADING_2 }),
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
        new Paragraph({ text: "Detailed Scorecard", heading: HeadingLevel.HEADING_2 }),
        new Table({ width: { size: 9360, type: WidthType.DXA }, rows: [scoreHeader, ...scoreRows] }),
        new Paragraph({ text: "" }),
        new Paragraph({ text: "Detailed Audit Findings", heading: HeadingLevel.HEADING_1 }),
        new Table({ width: { size: 9360, type: WidthType.DXA }, rows: [findingHeader, ...findingRows] }),
        new Paragraph({ text: "" }),
        new Paragraph({ children: [new TextRun({ text: "Built with iAudit Global", italics: true, color: "6B7280", size: 16 })] })
    );

    const doc = new Document({
        creator: "iAudit Global",
        title: "Gap Analysis Report",
        sections: [{ properties: {}, children }],
    });

    return Packer.toBuffer(doc);
}
