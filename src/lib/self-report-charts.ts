import { PNG } from "pngjs";
import { maturityTone } from "@/lib/self-report-data";

type Color = readonly [number, number, number, number];

const WHITE: Color = [255, 255, 255, 255];
const GREY: Color = [229, 231, 235, 255];
const GRID: Color = [229, 231, 235, 255];
const ORANGE: Color = [245, 158, 11, 255];

function hexColor(hex: string): Color {
    const clean = hex.replace("#", "");
    return [
        parseInt(clean.slice(0, 2), 16),
        parseInt(clean.slice(2, 4), 16),
        parseInt(clean.slice(4, 6), 16),
        255,
    ];
}

function canvas(width: number, height: number) {
    const image = new PNG({ width, height });
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            setPixel(image, x, y, WHITE);
        }
    }
    return image;
}

function setPixel(image: PNG, x: number, y: number, color: Color) {
    if (x < 0 || y < 0 || x >= image.width || y >= image.height) return;
    const index = (image.width * y + x) << 2;
    image.data[index] = color[0];
    image.data[index + 1] = color[1];
    image.data[index + 2] = color[2];
    image.data[index + 3] = color[3];
}

function fillRect(image: PNG, x: number, y: number, width: number, height: number, color: Color) {
    for (let row = Math.max(0, y); row < Math.min(image.height, y + height); row++) {
        for (let column = Math.max(0, x); column < Math.min(image.width, x + width); column++) {
            setPixel(image, column, row, color);
        }
    }
}

function drawHorizontalLine(image: PNG, x1: number, x2: number, y: number, color: Color) {
    for (let x = x1; x <= x2; x++) setPixel(image, x, y, color);
}

function drawDonut(image: PNG, cx: number, cy: number, outer: number, inner: number, yesRatio: number, accent: Color) {
    const outerSquared = outer * outer;
    const innerSquared = inner * inner;
    const yesSweep = Math.max(0, Math.min(1, yesRatio)) * Math.PI * 2;

    for (let y = cy - outer; y <= cy + outer; y++) {
        for (let x = cx - outer; x <= cx + outer; x++) {
            const dx = x - cx;
            const dy = y - cy;
            const distanceSquared = dx * dx + dy * dy;
            if (distanceSquared < innerSquared || distanceSquared > outerSquared) continue;

            // Start at 12 o'clock and move clockwise.
            const angle = (Math.atan2(dy, dx) + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);
            setPixel(image, x, y, angle <= yesSweep ? accent : GREY);
        }
    }
}

/** Donut matching the on-screen / PDF Total Score chart. */
export async function buildScoreDonutPng(yes: number, total: number, stage: string): Promise<Buffer> {
    const image = canvas(420, 460);
    const accent = hexColor(maturityTone(stage).accent);
    drawDonut(image, 210, 190, 130, 78, total > 0 ? yes / total : 0, accent);
    fillRect(image, 120, 360, 14, 14, accent);
    fillRect(image, 286, 360, 14, 14, GREY);
    return PNG.sync.write(image);
}

/** Vertical bar chart for Score by Clause. */
export async function buildClauseBarChartPng(
    clauses: { label: string; percent: number; yes: number; total: number }[]
): Promise<Buffer> {
    const width = 720;
    const height = 320;
    const padL = 48;
    const padR = 24;
    const padT = 24;
    const padB = 56;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const gap = plotW / Math.max(clauses.length, 1);
    const barW = Math.max(8, Math.floor(gap * 0.48));
    const maxTick = 60;
    const image = canvas(width, height);

    [0, 15, 30, 45, 60].forEach((tick) => {
        const y = padT + plotH - (tick / maxTick) * plotH;
        drawHorizontalLine(image, padL, width - padR, Math.round(y), GRID);
    });

    clauses.forEach((clause, index) => {
        const heightForBar = Math.max((Math.max(0, clause.percent) / 100) * maxTick / maxTick * plotH, clause.percent > 0 ? 2 : 0);
        const x = Math.round(padL + gap * index + (gap - barW) / 2);
        const y = Math.round(padT + plotH - heightForBar);
        fillRect(image, x, y, barW, Math.max(1, Math.round(heightForBar)), ORANGE);
    });

    return PNG.sync.write(image);
}
