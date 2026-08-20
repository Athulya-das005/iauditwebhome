import { promises as fs } from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb, type PDFPage, type RGB } from "pdf-lib";
import type { GapReportData } from "@/lib/gap-report-data";
import { findingLabel } from "@/lib/gap-report-data";

const GREEN = rgb(0, 0.4, 0.266);
const COMPLY = rgb(0.098, 0.714, 0.506);
const OFI = rgb(0.957, 0.612, 0.11);
const NC = rgb(0.937, 0.306, 0.306);
const BAR = rgb(0.161, 0.671, 0.886);
const TEXT = rgb(0.067, 0.094, 0.153);
const MUTED = rgb(0.42, 0.45, 0.5);
const LINE = rgb(0.898, 0.906, 0.922);
const FILL = rgb(0.953, 0.957, 0.965);

function hexRgb(hex: string): RGB {
    const n = hex.replace("#", "");
    return rgb(parseInt(n.slice(0, 2), 16) / 255, parseInt(n.slice(2, 4), 16) / 255, parseInt(n.slice(4, 6), 16) / 255);
}

function polar(cx: number, cy: number, r: number, angle: number) {
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function drawDonut(
    page: PDFPage,
    cx: number,
    cy: number,
    rOut: number,
    rIn: number,
    segments: { value: number; color: RGB }[]
) {
    const sum = segments.reduce((acc, item) => acc + item.value, 0);
    if (sum <= 0) {
        page.drawCircle({ x: cx, y: cy, size: rOut, color: LINE });
        page.drawCircle({ x: cx, y: cy, size: rIn, color: rgb(1, 1, 1) });
        return;
    }

    let angle = Math.PI / 2;
    segments.forEach((item) => {
        if (item.value <= 0) return;
        const sweep = (item.value / sum) * Math.PI * 2;
        const steps = Math.max(16, Math.ceil(sweep / 0.08));
        const first = polar(cx, cy, rOut, angle);
        let d = `M ${cx} ${cy} L ${first.x} ${first.y}`;
        for (let i = 1; i <= steps; i++) {
            const a = angle - (sweep * i) / steps;
            const p = polar(cx, cy, rOut, a);
            d += ` L ${p.x} ${p.y}`;
        }
        d += " Z";
        page.drawSvgPath(d, { color: item.color });
        angle -= sweep;
    });
    page.drawCircle({ x: cx, y: cy, size: rIn, color: rgb(1, 1, 1) });
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
            // try the next logo file
        }
    }
    return null;
}

export async function buildGapPdf(data: GapReportData) {
    const pdf = await PDFDocument.create();
    pdf.setTitle("Gap Analysis Report");
    pdf.setAuthor("iAudit Global");
    const regular = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);

    let page = pdf.addPage([595, 842]);
    const margin = 42;
    let y = 800;

    const ensureSpace = (need: number) => {
        if (y - need < 48) {
            page = pdf.addPage([595, 842]);
            y = 800;
        }
    };

    const logo = await embedLogo(pdf);
    if (logo) {
        const logoH = 48;
        const logoW = Math.min((logo.width / logo.height) * logoH, 160);
        page.drawImage(logo, { x: margin, y: y - logoH + 8, width: logoW, height: logoH });
        y -= logoH + 18;
    } else {
        page.drawText("iAudit Global", { x: margin, y, size: 13, font: bold, color: GREEN });
        y -= 28;
    }
    page.drawText("Gap Analysis Report", { x: margin, y, size: 22, font: bold, color: TEXT });
    y -= 24;

    const cover = [
        ["Name of Company", data.session.organisation],
        ["Audit Date", data.auditDate],
        ["ISO Standard", data.session.isoStandard],
        ["Location of Audit", data.session.industry || "—"],
        ["Company Representatives", `${data.session.firstName} ${data.session.lastName}`.trim() || "—"],
        ["Name of Auditor", `${data.session.firstName} ${data.session.lastName}`.trim() || "—"],
        ["Contact email", data.session.email],
        ["Scope of Audit", data.session.auditScope || "—"],
    ];
    cover.forEach(([label, value]) => {
        page.drawRectangle({ x: margin, y: y - 6, width: 160, height: 20, color: FILL });
        page.drawRectangle({ x: margin, y: y - 6, width: 510, height: 20, borderColor: LINE, borderWidth: 0.6 });
        page.drawText(label, { x: margin + 6, y: y, size: 9, font: bold, color: TEXT });
        page.drawText((value || "—").slice(0, 78), { x: margin + 170, y, size: 9, font: regular, color: TEXT });
        y -= 20;
    });

    y -= 18;
    page.drawText("Audit Result Summary", { x: margin, y, size: 16, font: bold, color: TEXT });
    y -= 20;
    page.drawText(`Compliance Score: ${data.overall}%`, { x: margin, y, size: 13, font: bold, color: TEXT });
    y -= 16;
    page.drawText(`Status: ${data.status}`, {
        x: margin,
        y,
        size: 12,
        font: bold,
        color: data.status === "Pass" ? GREEN : hexRgb("#DC2626"),
    });
    y -= 24;
    page.drawText("Clause-wise Compliance", { x: margin, y, size: 13, font: bold, color: TEXT });
    y -= 18;

    const chartTop = y;
    const cx = 130;
    const cy = chartTop - 78;
    drawDonut(page, cx, cy, 70, 42, [
        { value: data.comply, color: COMPLY },
        { value: data.ofi, color: OFI },
        { value: data.nc, color: NC },
    ]);
    page.drawRectangle({ x: cx - 88, y: cy - 96, width: 8, height: 8, color: COMPLY });
    page.drawText("Comply", { x: cx - 76, y: cy - 95, size: 9, font: regular, color: COMPLY });
    page.drawRectangle({ x: cx - 16, y: cy - 96, width: 8, height: 8, color: OFI });
    page.drawText("OFI", { x: cx - 4, y: cy - 95, size: 9, font: regular, color: OFI });
    page.drawRectangle({ x: cx + 42, y: cy - 96, width: 8, height: 8, color: NC });
    page.drawText("NC", { x: cx + 54, y: cy - 95, size: 9, font: regular, color: NC });

    const barX = 250;
    const barW = 300;
    const barH = 140;
    const padL = 24;
    const plotW = barW - padL;
    const plotH = barH - 28;
    [0, 25, 50, 75, 100].forEach((tick) => {
        const ty = chartTop - 20 - plotH + (tick / 100) * plotH;
        page.drawLine({ start: { x: barX + padL, y: ty }, end: { x: barX + barW, y: ty }, thickness: 0.6, color: LINE, dashArray: [3, 3] });
        page.drawText(String(tick), { x: barX, y: ty - 3, size: 7, font: regular, color: MUTED });
    });
    const gap = plotW / Math.max(data.clauses.length, 1);
    const colW = gap * 0.45;
    data.clauses.forEach((clause, index) => {
        const h = (clause.percent / 100) * plotH;
        const bx = barX + padL + gap * index + (gap - colW) / 2;
        page.drawRectangle({ x: bx, y: chartTop - 20 - plotH, width: colW, height: Math.max(h, 1), color: BAR });
        page.drawText(clause.label.replace(/^(\d+)\.\s*/, "$1 "), { x: bx - 8, y: chartTop - 34 - plotH, size: 6, font: regular, color: MUTED });
    });

    y = chartTop - 190;
    ensureSpace(40);
    page.drawText("Detailed Scorecard", { x: margin, y, size: 13, font: bold, color: TEXT });
    y -= 18;
    const headers = ["Clause", "Total", "Comply", "OFI", "NC", "Score"];
    const widths = [150, 70, 70, 70, 70, 80];
    const rowH = 16;
    const drawRow = (values: string[], header: boolean) => {
        ensureSpace(rowH + 4);
        let x = margin;
        values.forEach((value, i) => {
            if (header) {
                page.drawRectangle({ x, y: y - 4, width: widths[i], height: rowH, color: GREEN });
                page.drawText(value, { x: x + 4, y, size: 8, font: bold, color: rgb(1, 1, 1) });
            } else {
                page.drawRectangle({ x, y: y - 4, width: widths[i], height: rowH, borderColor: LINE, borderWidth: 0.5 });
                page.drawText(value.slice(0, 28), { x: x + 4, y, size: 8, font: regular, color: TEXT });
            }
            x += widths[i];
        });
        y -= rowH;
    };
    drawRow(headers, true);
    data.clauses.forEach((clause) => {
        drawRow([clause.label, String(clause.total), String(clause.comply), String(clause.ofi), String(clause.nc), `${clause.percent}%`], false);
    });

    y -= 18;
    ensureSpace(24);
    page.drawText("Detailed Audit Findings", { x: margin, y, size: 16, font: bold, color: TEXT });
    y -= 18;
    data.questions.forEach((question, index) => {
        ensureSpace(56);
        page.drawText(`${index + 1}. ${question.clauseLabel}`.slice(0, 90), { x: margin, y, size: 9, font: bold, color: GREEN });
        y -= 13;
        const lines = wrapText(question.text, regular, 9, 510);
        lines.forEach((line) => {
            ensureSpace(14);
            page.drawText(line, { x: margin, y, size: 9, font: regular, color: TEXT });
            y -= 12;
        });
        page.drawText(`Finding: ${findingLabel(question.finding)}`, { x: margin, y, size: 9, font: regular, color: MUTED });
        y -= 12;
        if (question.evidence) {
            ensureSpace(14);
            page.drawText(`Evidence: ${question.evidence.slice(0, 110)}`, { x: margin, y, size: 9, font: regular, color: MUTED });
            y -= 12;
        }
        if (question.actionPlan) {
            ensureSpace(14);
            page.drawText(`Action plan: ${question.actionPlan.slice(0, 110)}`, { x: margin, y, size: 9, font: regular, color: MUTED });
            y -= 12;
        }
        y -= 6;
    });

    ensureSpace(20);
    page.drawText("Built with iAudit Global", { x: margin, y, size: 9, font: italic, color: MUTED });

    return Buffer.from(await pdf.save());
}

function wrapText(text: string, font: { widthOfTextAtSize: (t: string, s: number) => number }, size: number, maxWidth: number) {
    const words = text.split(/\s+/);
    const lines: string[] = [];
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
    return lines.slice(0, 6);
}
