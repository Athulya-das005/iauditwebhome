import { PNG } from "pngjs";
import { maturityTone } from "@/lib/self-report-data";

type Color = [number, number, number, number];

const WHITE: Color = [255, 255, 255, 255];
const GREY: Color = [229, 231, 235, 255];
const MUTED: Color = [156, 163, 175, 255];
const ORANGE: Color = [245, 158, 11, 255];

function colorFromHex(hex: string): Color {
    const clean = hex.replace("#", "");
    return [
        Number.parseInt(clean.slice(0, 2), 16),
        Number.parseInt(clean.slice(2, 4), 16),
        Number.parseInt(clean.slice(4, 6), 16),
        255,
    ];
}

function image(width: number, height: number) {
    const png = new PNG({ width, height });
    for (let index = 0; index < png.data.length; index += 4) {
        png.data[index] = 255;
        png.data[index + 1] = 255;
        png.data[index + 2] = 255;
        png.data[index + 3] = 255;
    }
    return png;
}

function setPixel(png: PNG, x: number, y: number, color: Color) {
    if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
    const index = (png.width * y + x) << 2;
    png.data[index] = color[0];
    png.data[index + 1] = color[1];
    png.data[index + 2] = color[2];
    png.data[index + 3] = color[3];
}

function fillRect(png: PNG, x: number, y: number, width: number, height: number, color: Color) {
    for (let row = Math.max(0, y); row < Math.min(png.height, y + height); row += 1) {
        for (let column = Math.max(0, x); column < Math.min(png.width, x + width); column += 1) {
            setPixel(png, column, row, color);
        }
    }
}

function drawDonut(png: PNG, cx: number, cy: number, outer: number, inner: number, ratio: number, accent: Color) {
    const start = Math.max(0, Math.min(1, ratio)) * Math.PI * 2;
    for (let y = cy - outer; y <= cy + outer; y += 1) {
        for (let x = cx - outer; x <= cx + outer; x += 1) {
            const dx = x - cx;
            const dy = y - cy;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < inner || distance > outer) continue;
            const angle = (Math.atan2(dx, -dy) + Math.PI * 2) % (Math.PI * 2);
            setPixel(png, x, y, angle < start ? accent : GREY);
        }
    }
}

function encode(png: PNG) {
    return PNG.sync.write(png);
}

/** Donut matching on-screen / PDF Total Score chart (Yes = stage colour, Remaining = grey). */
export async function buildScoreDonutPng(yes: number, total: number, stage: string): Promise<Buffer> {
    const png = image(420, 460);
    const tone = maturityTone(stage);
    drawDonut(png, 210, 200, 130, 78, total > 0 ? yes / total : 0, colorFromHex(tone.accentHex));
    fillRect(png, 110, 358, 12, 12, colorFromHex(tone.accentHex));
    fillRect(png, 298, 358, 12, 12, GREY);
    return encode(png);
}

/** Vertical bar chart for Score by Clause (matches PDF orange bars). */
export async function buildClauseBarChartPng(
    clauses: { label: string; percent: number; yes: number; total: number }[]
): Promise<Buffer> {
    const png = image(720, 320);
    const padL = 48;
    const padR = 24;
    const padT = 24;
    const padB = 56;
    const plotW = png.width - padL - padR;
    const plotH = png.height - padT - padB;
    const gap = plotW / Math.max(clauses.length, 1);
    const barW = Math.max(8, Math.floor(gap * 0.48));

    [0, 15, 30, 45, 60].forEach((tick) => {
        const y = padT + plotH - Math.round((tick / 60) * plotH);
        fillRect(png, padL, y, plotW, 1, GREY);
    });

    clauses.forEach((clause, index) => {
        const height = Math.max(0, Math.round((Math.max(0, Math.min(100, clause.percent)) / 100) * plotH));
        const x = Math.round(padL + gap * index + (gap - barW) / 2);
        const y = padT + plotH - height;
        fillRect(png, x, y, barW, height, ORANGE);
        fillRect(png, x, png.height - 34, barW, 2, MUTED);
    });

    return encode(png);
}
