import { promises as fs } from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb, type PDFPage, type RGB } from "pdf-lib";
import type { GapReportData } from "@/lib/gap-report-data";
import { findingLabel } from "@/lib/gap-report-data";
import { buildFindingMixDonutPng, buildGapClauseBarPng } from "@/lib/gap-report-charts";
import { parseDataImage } from "@/lib/gap-report-images";

const GREEN = rgb(0, 0.4, 0.266);
const COMPLY = rgb(0.098, 0.714, 0.506);
const OFI = rgb(0.957, 0.612, 0.11);
const NC = rgb(0.937, 0.306, 0.306);
const TEXT = rgb(0.067, 0.094, 0.153);
const MUTED = rgb(0.42, 0.45, 0.5);
const LINE = rgb(0.898, 0.906, 0.922);
const FILL = rgb(0.953, 0.957, 0.965);
const WHITE = rgb(1, 1, 1);

const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN = 42;
const CONTENT_W = PAGE_W - MARGIN * 2;
const BOTTOM = 48;

/** Helvetica / WinAnsi cannot encode ★ and some Unicode punctuation used in the checklist. */
function pdfSafeText(value: string) {
    return String(value ?? "")
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .replace(/★/g, "*")
        .replace(/☑/g, "[Yes]")
        .replace(/⭕/g, "[OFI]")
        .replace(/✕|✖|✗/g, "[X]")
        .replace(/[–—]/g, "-")
        .replace(/[‘’]/g, "'")
        .replace(/[“”]/g, '"')
        .replace(/÷/g, "/")
        .replace(/×/g, "x")
        .replace(/…/g, "...")
        .replace(/•/g, "-")
        .replace(/[^\x09\x0A\x20-\x7E]/g, "?");
}

function findingColor(finding: GapReportData["questions"][number]["finding"]): RGB {
    if (finding === "comply") return COMPLY;
    if (finding === "ofi") return OFI;
    if (finding === "nc") return NC;
    return MUTED;
}

function clauseBarColor(percent: number): RGB {
    if (percent >= 75) return COMPLY;
    if (percent >= 50) return OFI;
    return NC;
}

function wrapText(text: string, font: { widthOfTextAtSize: (t: string, s: number) => number }, size: number, maxWidth: number) {
    const paragraphs = pdfSafeText(text).split("\n");
    const lines: string[] = [];
    paragraphs.forEach((paragraph) => {
        const words = paragraph.split(/\s+/).filter(Boolean);
        if (words.length === 0) return;
        let current = "";
        words.forEach((word) => {
            const next = current ? `${current} ${word}` : word;
            if (font.widthOfTextAtSize(next, size) > maxWidth && current) {
                lines.push(current);
                current = word;
            } else {
                current = next;
            }
        });
        if (current) lines.push(current);
    });
    return lines;
}

async function embedLogo(pdf: PDFDocument) {
    const candidates = ["iaudit-logo-nav.png", "iAudit Global-01.png"];
    for (const name of candidates) {
        try {
            const bytes = await fs.readFile(path.join(process.cwd(), "public", name));
            try {
                return await pdf.embedPng(bytes);
            } catch {
                return await pdf.embedJpg(bytes);
            }
        } catch {
            // try next
        }
    }
    return null;
}

type Font = Awaited<ReturnType<PDFDocument["embedFont"]>>;

class PdfLayout {
    page: PDFPage;
    y = PAGE_H - MARGIN;

    constructor(
        private pdf: PDFDocument,
        private regular: Font,
        private bold: Font,
        private italic: Font
    ) {
        this.page = pdf.addPage([PAGE_W, PAGE_H]);
    }

    newPage() {
        this.page = this.pdf.addPage([PAGE_W, PAGE_H]);
        this.y = PAGE_H - MARGIN;
    }

    ensure(height: number) {
        if (this.y - height < BOTTOM) this.newPage();
    }

    gap(amount: number) {
        this.y -= amount;
    }

    text(
        value: string,
        opts: { size: number; font?: Font; color?: RGB; x?: number; bold?: boolean }
    ) {
        const font = opts.font ?? (opts.bold ? this.bold : this.regular);
        const color = opts.color ?? TEXT;
        this.page.drawText(pdfSafeText(value).replace(/\n/g, " "), {
            x: opts.x ?? MARGIN,
            y: this.y,
            size: opts.size,
            font,
            color,
        });
    }

    paragraph(
        value: string,
        opts: { size?: number; font?: Font; color?: RGB; bold?: boolean; lineGap?: number; maxLines?: number }
    ) {
        const size = opts.size ?? 10;
        const font = opts.font ?? (opts.bold ? this.bold : this.regular);
        const color = opts.color ?? TEXT;
        const lineGap = opts.lineGap ?? 13;
        const lines = wrapText(value, font, size, CONTENT_W);
        const limited = opts.maxLines ? lines.slice(0, opts.maxLines) : lines;
        limited.forEach((line) => {
            this.ensure(lineGap + 4);
            this.text(line, { size, font, color });
            this.y -= lineGap;
        });
    }

    heading(value: string, size = 16) {
        this.ensure(28);
        this.text(value, { size, bold: true });
        this.y -= 22;
    }

    subheading(value: string) {
        this.ensure(22);
        this.text(value, { size: 13, bold: true, color: GREEN });
        this.y -= 18;
    }

    image(img: Awaited<ReturnType<PDFDocument["embedPng"]>>, width: number, height: number, centered = true) {
        this.ensure(height + 16);
        const x = centered ? MARGIN + (CONTENT_W - width) / 2 : MARGIN;
        this.page.drawImage(img, { x, y: this.y - height, width, height });
        this.y -= height + 16;
    }

    tableRow(values: string[], widths: number[], opts?: { header?: boolean; colors?: RGB[] }) {
        const rowH = 18;
        this.ensure(rowH + 8);
        let x = MARGIN;
        values.forEach((value, i) => {
            if (opts?.header) {
                this.page.drawRectangle({ x, y: this.y - 5, width: widths[i], height: rowH, color: GREEN });
                this.page.drawText(pdfSafeText(value), {
                    x: x + 4,
                    y: this.y,
                    size: 8,
                    font: this.bold,
                    color: WHITE,
                });
            } else {
                this.page.drawRectangle({ x, y: this.y - 5, width: widths[i], height: rowH, borderColor: LINE, borderWidth: 0.5 });
                this.page.drawText(pdfSafeText(value).slice(0, i === 0 ? 34 : 10), {
                    x: x + 4,
                    y: this.y,
                    size: 8,
                    font: this.regular,
                    color: opts?.colors?.[i] ?? TEXT,
                });
            }
            x += widths[i];
        });
        this.y -= rowH;
    }
}

export async function buildGapPdf(data: GapReportData) {
    const pdf = await PDFDocument.create();
    pdf.setTitle("Gap Analysis Report");
    pdf.setAuthor("iAudit Global");
    const regular = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
    const layout = new PdfLayout(pdf, regular, bold, italic);

    const [donutPng, barPng] = await Promise.all([
        buildFindingMixDonutPng(data.comply, data.ofi, data.nc),
        buildGapClauseBarPng(data.clauses),
    ]);
    const donutImage = await pdf.embedPng(donutPng);
    const barImage = await pdf.embedPng(barPng);

    const logo = await embedLogo(pdf);
    if (logo) {
        const logoH = 48;
        const logoW = Math.min((logo.width / logo.height) * logoH, 160);
        layout.ensure(logoH + 12);
        layout.page.drawImage(logo, { x: MARGIN, y: layout.y - logoH + 8, width: logoW, height: logoH });
        layout.y -= logoH + 18;
    } else {
        layout.text("iAudit Global", { size: 13, bold: true, color: GREEN });
        layout.y -= 28;
    }

    const cover = [
        ["Name of Company", data.session.organisation],
        ["Audit Date", data.auditDate],
        ["ISO Standard", data.session.isoStandard],
        ["Location of Audit", data.session.industry || "-"],
        ["Company Representatives", `${data.session.firstName} ${data.session.lastName}`.trim() || "-"],
        ["Name of Auditor", `${data.session.firstName} ${data.session.lastName}`.trim() || "-"],
        ["Contact email", data.session.email],
        ["Scope of Audit", data.session.auditScope || "-"],
    ];
    layout.heading("Assessment Details", 14);
    const detailsBoxHeight = cover.length * 22 + 12;
    layout.ensure(detailsBoxHeight + 8);
    const detailsTop = layout.y;
    layout.page.drawRectangle({
        x: MARGIN,
        y: detailsTop - detailsBoxHeight,
        width: CONTENT_W,
        height: detailsBoxHeight,
        color: rgb(0.94, 0.99, 0.96),
        borderColor: COMPLY,
        borderWidth: 0.8,
    });
    cover.forEach(([label, value]) => {
        layout.ensure(24);
        layout.page.drawRectangle({ x: MARGIN, y: layout.y - 6, width: 160, height: 20, color: FILL });
        layout.page.drawRectangle({ x: MARGIN, y: layout.y - 6, width: CONTENT_W, height: 20, borderColor: LINE, borderWidth: 0.6 });
        layout.text(label, { size: 9, bold: true, x: MARGIN + 6 });
        layout.text((value || "-").slice(0, 78), { size: 9, x: MARGIN + 170 });
        layout.y -= 22;
    });

    layout.gap(12);
    layout.heading("Gap Analysis Report", 22);
    layout.heading("Scoring Summary");
    layout.text(`Compliance Percentage: (${data.comply} / ${data.totalQuestions}) x 100 = ${data.overall}%`, {
        size: 12,
        bold: true,
    });
    layout.y -= 20;

    layout.ensure(18);
    layout.page.drawRectangle({ x: MARGIN, y: layout.y - 4, width: 10, height: 10, color: COMPLY });
    layout.text(`Comply: ${data.comply}`, { size: 11, bold: true, color: COMPLY, x: MARGIN + 14 });
    layout.page.drawRectangle({ x: MARGIN + 118, y: layout.y - 4, width: 10, height: 10, color: OFI });
    layout.text(`OFI: ${data.ofi}`, { size: 11, bold: true, color: OFI, x: MARGIN + 132 });
    layout.page.drawRectangle({ x: MARGIN + 210, y: layout.y - 4, width: 10, height: 10, color: NC });
    layout.text(`NC: ${data.nc}`, { size: 11, bold: true, color: NC, x: MARGIN + 224 });
    layout.y -= 22;

    layout.paragraph(
        `Maturity Level: ${data.maturity.stage} (${data.maturity.percentLabel}) - ${data.maturity.status}. ${data.maturity.action}. Timeline: ${data.maturity.timeline}`,
        { size: 10, color: MUTED, lineGap: 12 }
    );
    layout.gap(6);
    layout.paragraph(
        `Certification Readiness: ${data.readiness.label} (${data.readiness.ncLabel}). ${data.readiness.action}. Timeline: ${data.readiness.timeline}`,
        { size: 10, color: MUTED, lineGap: 12 }
    );
    layout.gap(12);

    // Charts on a fresh page so the pie chart is never clipped or missing.
    layout.newPage();
    layout.subheading("Finding mix");
    layout.image(donutImage, 240, 250);

    const mixWidths = [CONTENT_W / 3, CONTENT_W / 3, CONTENT_W / 3];
    layout.ensure(44);
    let mixX = MARGIN;
    ["Comply", "OFI", "NC"].forEach((label, i) => {
        const fill = [COMPLY, OFI, NC][i];
        layout.page.drawRectangle({ x: mixX, y: layout.y - 5, width: mixWidths[i], height: 18, color: fill });
        layout.page.drawText(pdfSafeText(label), {
            x: mixX + 6,
            y: layout.y,
            size: 9,
            font: bold,
            color: WHITE,
        });
        mixX += mixWidths[i];
    });
    layout.y -= 18;
    layout.tableRow([String(data.comply), String(data.ofi), String(data.nc)], mixWidths);
    layout.gap(16);

    layout.subheading("Clause-wise Compliance");
    layout.image(barImage, CONTENT_W, 210);

    const clauseWidths = [CONTENT_W * 0.46, CONTENT_W * 0.36, CONTENT_W * 0.18];
    layout.tableRow(["Clause", "Compliance", "%"], clauseWidths, { header: true });
    data.clauses.forEach((clause) => {
        layout.ensure(20);
        let x = MARGIN;
        layout.page.drawRectangle({ x, y: layout.y - 5, width: clauseWidths[0], height: 18, borderColor: LINE, borderWidth: 0.5 });
        layout.text(clause.label.slice(0, 42), { size: 8, x: x + 4 });
        x += clauseWidths[0];
        const barInnerW = clauseWidths[1] - 8;
        const fillW = Math.max(2, (clause.percent / 100) * barInnerW);
        layout.page.drawRectangle({ x: x + 4, y: layout.y - 3, width: barInnerW, height: 10, color: FILL });
        layout.page.drawRectangle({ x: x + 4, y: layout.y - 3, width: fillW, height: 10, color: clauseBarColor(clause.percent) });
        x += clauseWidths[1];
        layout.page.drawRectangle({ x, y: layout.y - 5, width: clauseWidths[2], height: 18, borderColor: LINE, borderWidth: 0.5 });
        layout.text(`${clause.percent}%`, { size: 8, x: x + 4 });
        layout.y -= 18;
    });

    layout.gap(16);
    layout.subheading("Detailed Scorecard");
    const scoreWidths = [190, 55, 65, 55, 55, 91];
    layout.tableRow(["Clause", "Total", "Comply", "OFI", "NC", "Score"], scoreWidths, { header: true });
    data.clauses.forEach((clause) => {
        layout.tableRow(
            [clause.label, String(clause.total), String(clause.comply), String(clause.ofi), String(clause.nc), `${clause.percent}%`],
            scoreWidths,
            { colors: [TEXT, TEXT, COMPLY, OFI, NC, TEXT] }
        );
    });

    layout.gap(16);
    layout.heading("Detailed Audit Findings");

    for (let index = 0; index < data.questions.length; index++) {
        const question = data.questions[index];
        layout.ensure(80);
        layout.gap(8);
        layout.paragraph(`${index + 1}. ${question.clauseLabel}`, { size: 10, bold: true, color: GREEN, lineGap: 13, maxLines: 2 });
        layout.paragraph(question.text, { size: 9, lineGap: 12 });

        layout.ensure(16);
        const findingPrefix = "Finding: ";
        layout.text(findingPrefix, { size: 9, bold: true, color: MUTED });
        layout.text(findingLabel(question.finding), {
            size: 9,
            bold: true,
            color: findingColor(question.finding),
            x: MARGIN + bold.widthOfTextAtSize(findingPrefix, 9),
        });
        layout.y -= 16;

        if (question.evidence?.trim()) {
            layout.paragraph(`Evidence: ${question.evidence}`, { size: 9, color: MUTED, lineGap: 12, maxLines: 6 });
        }

        if (question.actionPlan?.trim()) {
            layout.text("Action plan:", { size: 9, bold: true, color: MUTED });
            layout.y -= 14;
            question.actionPlan
                .split(/\n+/)
                .map((line) => line.trim())
                .filter(Boolean)
                .forEach((line) => {
                    layout.paragraph(line, { size: 9, color: MUTED, lineGap: 12, maxLines: 4 });
                });
        }

        if (question.evidenceImage) {
            const parsedImage = parseDataImage(question.evidenceImage);
            if (parsedImage && ["jpeg", "jpg", "png"].includes(parsedImage.mime)) {
                try {
                    const image =
                        parsedImage.mime === "png"
                            ? await pdf.embedPng(parsedImage.bytes)
                            : await pdf.embedJpg(parsedImage.bytes);
                    const maxW = 260;
                    const maxH = 170;
                    const scale = Math.min(maxW / image.width, maxH / image.height, 1);
                    const w = image.width * scale;
                    const h = image.height * scale;
                    layout.text("Evidence image:", { size: 9, bold: true, color: MUTED });
                    layout.y -= 12;
                    layout.image(image, w, h, false);
                } catch {
                    // skip broken image
                }
            }
        }

        layout.gap(10);
    }

    layout.ensure(24);
    layout.gap(8);
    layout.text("Built with iAudit Global", { size: 9, font: italic, color: MUTED });

    return Buffer.from(await pdf.save());
}
