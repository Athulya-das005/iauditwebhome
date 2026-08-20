import { promises as fs } from "fs";
import path from "path";
import { LineCapStyle, PDFDocument, StandardFonts, rgb, type PDFPage, type RGB } from "pdf-lib";
import type { SelfReportData } from "@/lib/self-report-data";

const GREEN = rgb(0, 0.4, 0.266);
const TEXT = rgb(0.07, 0.09, 0.15);
const MUTED = rgb(0.42, 0.45, 0.5);
const LINE = rgb(0.9, 0.91, 0.92);
const ORANGE = rgb(0.96, 0.62, 0.11);
const GREY = rgb(0.78, 0.8, 0.82);
const YES = rgb(0.09, 0.64, 0.29);
const NO = rgb(0.94, 0.27, 0.27);
const FILL = rgb(0.94, 0.98, 0.95);

function polar(cx: number, cy: number, r: number, angle: number) {
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function drawArcRing(
    page: PDFPage,
    cx: number,
    cy: number,
    rMid: number,
    thickness: number,
    start: number,
    sweep: number,
    color: RGB
) {
    const steps = Math.max(28, Math.ceil(Math.abs(sweep) / 0.04));
    for (let i = 0; i < steps; i++) {
        const a1 = start - (sweep * i) / steps;
        const a2 = start - (sweep * (i + 1)) / steps;
        const p1 = polar(cx, cy, rMid, a1);
        const p2 = polar(cx, cy, rMid, a2);
        page.drawLine({
            start: p1,
            end: p2,
            thickness,
            color,
            lineCap: LineCapStyle.Round,
        });
    }
}

function drawDonut(page: PDFPage, cx: number, cy: number, rOut: number, rIn: number, segments: { value: number; color: RGB }[]) {
    const thickness = rOut - rIn;
    const rMid = (rOut + rIn) / 2;
    const sum = segments.reduce((acc, item) => acc + item.value, 0);

    page.drawCircle({ x: cx, y: cy, size: rMid, borderColor: GREY, borderWidth: thickness });

    if (sum <= 0) {
        page.drawCircle({ x: cx, y: cy, size: rIn - 2, color: rgb(1, 1, 1) });
        return;
    }

    let angle = Math.PI / 2;
    segments.forEach((item) => {
        if (item.value <= 0) return;
        const sweep = (item.value / sum) * Math.PI * 2;
        drawArcRing(page, cx, cy, rMid, thickness, angle, sweep, item.color);
        angle -= sweep;
    });
    page.drawCircle({ x: cx, y: cy, size: rIn - 1, color: rgb(1, 1, 1) });
}

async function embedLogo(pdf: PDFDocument) {
    try {
        const bytes = await fs.readFile(path.join(process.cwd(), "public", "iaudit-logo-nav.png"));
        return await pdf.embedPng(bytes);
    } catch {
        return null;
    }
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
    return lines;
}

export async function buildSelfPdf(data: SelfReportData) {
    const pdf = await PDFDocument.create();
    pdf.setTitle("Self Assessment Report");
    pdf.setAuthor("iAudit Global");
    const regular = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    let page = pdf.addPage([595, 842]);
    const margin = 42;
    let y = 800;

    const ensure = (need: number) => {
        if (y - need < 48) {
            page = pdf.addPage([595, 842]);
            y = 800;
        }
    };

    const logo = await embedLogo(pdf);
    if (logo) {
        const h = 42;
        const w = Math.min((logo.width / logo.height) * h, 150);
        page.drawImage(logo, { x: margin, y: y - h + 8, width: w, height: h });
        y -= h + 16;
    }

    page.drawRectangle({ x: margin, y: y - 52, width: 511, height: 62, color: FILL, borderColor: rgb(0.78, 0.9, 0.82), borderWidth: 0.8 });
    page.drawText("Maturity Assessment Result", { x: margin + 14, y: y - 8, size: 16, font: bold, color: TEXT });
    page.drawText(`${data.session.isoStandard}  |  ${data.session.organisation}  |  ${data.auditDate}`, {
        x: margin + 14,
        y: y - 26,
        size: 9,
        font: regular,
        color: MUTED,
    });
    page.drawText(`${data.yes} / ${data.total}`, { x: margin + 400, y: y - 14, size: 18, font: bold, color: GREEN });
    y -= 86;

    page.drawText("Total Score", { x: margin, y, size: 13, font: bold, color: TEXT });
    y -= 12;
    const cx = 297;
    const cy = y - 78;
    drawDonut(page, cx, cy, 70, 42, [
        { value: data.yes, color: ORANGE },
        { value: Math.max(data.total - data.yes, 0), color: GREY },
    ]);
    const score = `${data.yes} / ${data.total}`;
    page.drawText(score, { x: cx - bold.widthOfTextAtSize(score, 12) / 2, y: cy + 4, size: 12, font: bold, color: TEXT });
    page.drawText(`${data.yes} questions yes`, { x: cx - regular.widthOfTextAtSize(`${data.yes} questions yes`, 8) / 2, y: cy - 10, size: 8, font: regular, color: MUTED });
    const stageLabel = data.maturity.stage.toUpperCase();
    page.drawText(stageLabel, { x: cx - bold.widthOfTextAtSize(stageLabel, 8) / 2, y: cy - 102, size: 8, font: bold, color: MUTED });
    page.drawRectangle({ x: cx - 70, y: cy - 124, width: 8, height: 8, color: ORANGE });
    page.drawText("Yes", { x: cx - 58, y: cy - 123, size: 8, font: regular, color: TEXT });
    page.drawRectangle({ x: cx + 8, y: cy - 124, width: 8, height: 8, color: GREY });
    page.drawText("Remaining", { x: cx + 20, y: cy - 123, size: 8, font: regular, color: TEXT });
    y = cy - 148;

    ensure(80);
    page.drawText(`Your Position: ${data.maturity.stage}`, { x: margin, y, size: 13, font: bold, color: TEXT });
    y -= 16;
    wrapText(data.maturity.description, regular, 10, 511).forEach((line) => {
        ensure(14);
        page.drawText(line, { x: margin, y, size: 10, font: regular, color: MUTED });
        y -= 13;
    });
    y -= 8;
    page.drawText("RECOMMENDED ACTIONS:", { x: margin, y, size: 10, font: bold, color: TEXT });
    y -= 16;
    data.maturity.actions.forEach((action, index) => {
        const lines = wrapText(action, regular, 9, 488);
        ensure(lines.length * 12 + 6);
        page.drawCircle({ x: margin + 6, y: y + 3, size: 6, color: YES });
        page.drawText(String(index + 1), { x: margin + 3.5, y: y, size: 7, font: bold, color: rgb(1, 1, 1) });
        lines.forEach((line, lineIndex) => {
            page.drawText(line, { x: margin + 18, y, size: 9, font: regular, color: TEXT });
            if (lineIndex < lines.length - 1) y -= 12;
        });
        y -= 16;
    });
    ensure(20);
    page.drawText(`Timeline: ${data.maturity.timeline}`, { x: margin, y, size: 9, font: bold, color: MUTED });
    y -= 28;

    ensure(40);
    page.drawText("Final Score Calculation", { x: margin, y, size: 13, font: bold, color: TEXT });
    y -= 18;
    const cols = [280, 115, 115];
    const drawScoreRow = (values: string[], header: boolean) => {
        ensure(18);
        let x = margin;
        values.forEach((value, i) => {
            if (header) {
                page.drawRectangle({ x, y: y - 4, width: cols[i], height: 16, color: GREEN });
                page.drawText(value, { x: x + 6, y, size: 8, font: bold, color: rgb(1, 1, 1) });
            } else {
                page.drawRectangle({ x, y: y - 4, width: cols[i], height: 16, borderColor: LINE, borderWidth: 0.5 });
                page.drawText(value.slice(0, 42), { x: x + 6, y, size: 8, font: regular, color: TEXT });
            }
            x += cols[i];
        });
        y -= 16;
    };
    drawScoreRow(["Clause", "Subtotal", "Max"], true);
    data.clauses.forEach((clause) => drawScoreRow([clause.label, String(clause.yes), String(clause.total)], false));
    drawScoreRow(["TOTAL SCORE", String(data.yes), String(data.total)], true);

    y -= 22;
    ensure(160);
    page.drawText("Score by Clause", { x: margin, y, size: 13, font: bold, color: TEXT });
    y -= 10;
    const plotH = 110;
    const plotW = 510;
    const ticks = [0, 15, 30, 45, 60];
    ticks.forEach((tick) => {
        const ty = y - plotH + (tick / 60) * plotH;
        page.drawLine({ start: { x: margin + 24, y: ty }, end: { x: margin + plotW, y: ty }, thickness: 0.5, color: LINE, dashArray: [3, 3] });
        page.drawText(String(tick), { x: margin, y: ty - 3, size: 7, font: regular, color: MUTED });
    });
    const gap = plotW / Math.max(data.clauses.length, 1);
    const barW = gap * 0.45;
    data.clauses.forEach((clause, index) => {
        const mapped = (clause.percent / 100) * 60;
        const h = (mapped / 60) * plotH;
        const bx = margin + 24 + gap * index + (gap - barW) / 2;
        page.drawRectangle({ x: bx, y: y - plotH, width: barW, height: Math.max(h, 1), color: ORANGE });
        page.drawText(`Cl. ${clause.label.split(".")[0]}`, { x: bx - 4, y: y - plotH - 12, size: 7, font: regular, color: MUTED });
        page.drawText(`${clause.yes}/${clause.total}  ${clause.percent}%`, { x: bx - 6, y: y - plotH - 22, size: 6, font: regular, color: TEXT });
    });
    y -= plotH + 40;

    data.clauses.forEach((clause) => {
        ensure(28);
        page.drawRectangle({ x: margin, y: y - 6, width: 511, height: 18, color: FILL });
        page.drawText(clause.label, { x: margin + 8, y, size: 11, font: bold, color: TEXT });
        y -= 24;
        clause.questions.forEach((question) => {
            const lines = wrapText(question.text, regular, 9, 470);
            ensure(lines.length * 12 + 18);
            const compliant = question.answer === "yes";
            const color = compliant ? YES : NO;
            page.drawCircle({ x: margin + 8, y: y + 3, size: 5, color });
            lines.forEach((line) => {
                page.drawText(line, { x: margin + 20, y, size: 9, font: regular, color: TEXT });
                y -= 12;
            });
            page.drawText(compliant ? "COMPLIANT" : "NON-COMPLIANT", { x: margin + 20, y, size: 8, font: bold, color });
            y -= 16;
        });
        y -= 8;
    });

    return Buffer.from(await pdf.save());
}
