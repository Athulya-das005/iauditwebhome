import { PNG } from "pngjs";

type Color = [number, number, number, number];

const COMPLY: Color = [25, 182, 129, 255];
const OFI: Color = [244, 156, 28, 255];
const NC: Color = [239, 78, 78, 255];
const BAR: Color = [0, 174, 239, 255];
const GREY: Color = [229, 231, 235, 255];
const MUTED: Color = [156, 163, 175, 255];

function image(width: number, height: number) {
    const png = new PNG({ width, height });
    png.data.fill(255);
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

const GLYPHS: Record<string, string[]> = {
    " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
    ".": ["00000", "00000", "00000", "00000", "00000", "00110", "00110"],
    C: ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
    L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    "0": ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
    "1": ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
    "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
    "3": ["11110", "00001", "00001", "01110", "00001", "00001", "11110"],
    "4": ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
    "5": ["11111", "10000", "10000", "11110", "00001", "00001", "11110"],
    "6": ["01110", "10000", "10000", "11110", "10001", "10001", "01110"],
    "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
    "8": ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
    "9": ["01110", "10001", "10001", "01111", "00001", "00001", "01110"],
};

function drawBitmapText(png: PNG, text: string, x: number, y: number, color: Color) {
    let cursor = x;
    for (const character of text.toUpperCase()) {
        const glyph = GLYPHS[character];
        if (!glyph) {
            cursor += 6;
            continue;
        }
        glyph.forEach((row, rowIndex) => {
            [...row].forEach((pixel, columnIndex) => {
                if (pixel === "1") setPixel(png, cursor + columnIndex, y + rowIndex, color);
            });
        });
        cursor += 6;
    }
}

function shortClauseLabel(label: string) {
    const match = label.match(/(?:Clause|Cl\.)\s*(\d+)/i);
    return match ? `Cl. ${match[1]}` : label.slice(0, 8);
}

function drawDonut(
    png: PNG,
    cx: number,
    cy: number,
    outer: number,
    inner: number,
    segments: { value: number; color: Color }[]
) {
    const total = segments.reduce((sum, segment) => sum + Math.max(segment.value, 0), 0);
    for (let y = cy - outer; y <= cy + outer; y += 1) {
        for (let x = cx - outer; x <= cx + outer; x += 1) {
            const dx = x - cx;
            const dy = y - cy;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < inner || distance > outer) continue;

            if (total === 0) {
                setPixel(png, x, y, GREY);
                continue;
            }

            const angle = ((Math.atan2(dx, -dy) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2);
            let boundary = 0;
            let color = GREY;
            for (const segment of segments) {
                boundary += Math.max(segment.value, 0) / total;
                if (angle < boundary) {
                    color = segment.color;
                    break;
                }
            }
            setPixel(png, x, y, color);
        }
    }
}

function encode(png: PNG) {
    return PNG.sync.write(png);
}

/** Finding-mix donut matching the on-screen Gap Analysis results chart. */
export async function buildFindingMixDonutPng(comply: number, ofi: number, nc: number): Promise<Buffer> {
    const png = image(420, 440);
    drawDonut(png, 210, 190, 120, 72, [
        { value: comply, color: COMPLY },
        { value: ofi, color: OFI },
        { value: nc, color: NC },
    ]);
    fillRect(png, 90, 346, 12, 12, COMPLY);
    fillRect(png, 200, 346, 12, 12, OFI);
    fillRect(png, 290, 346, 12, 12, NC);
    return encode(png);
}

/** Clause compliance bar chart with short X-axis labels. */
export async function buildGapClauseBarPng(clauses: { label: string; percent: number }[]): Promise<Buffer> {
    const png = image(720, 300);
    const padL = 44;
    const padR = 20;
    const padT = 20;
    const padB = 40;
    const plotW = png.width - padL - padR;
    const plotH = png.height - padT - padB;
    const gap = plotW / Math.max(clauses.length, 1);
    const barW = Math.max(8, Math.floor(gap * 0.5));

    [0, 25, 50, 75, 100].forEach((tick) => {
        const y = padT + plotH - Math.round((tick / 100) * plotH);
        fillRect(png, padL, y, plotW, 1, GREY);
    });

    clauses.forEach((clause, index) => {
        const height = Math.max(0, Math.round((Math.max(0, Math.min(100, clause.percent)) / 100) * plotH));
        const x = Math.round(padL + gap * index + (gap - barW) / 2);
        const y = padT + plotH - height;
        fillRect(png, x, y, barW, height, BAR);
        fillRect(png, x, png.height - 28, barW, 2, MUTED);
        const label = shortClauseLabel(clause.label);
        drawBitmapText(png, label, Math.round(x + barW / 2 - (label.length * 6) / 2), png.height - 22, MUTED);
    });

    return encode(png);
}
