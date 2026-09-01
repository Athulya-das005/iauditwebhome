import { PNG } from "pngjs";

type Color = [number, number, number, number];

const COMPLY: Color = [25, 182, 129, 255];
const OFI: Color = [244, 156, 28, 255];
const NC: Color = [239, 78, 78, 255];
const BAR: Color = [0, 174, 239, 255];
const GREY: Color = [229, 231, 235, 255];
const MUTED: Color = [156, 163, 175, 255];
const TEXT: Color = [17, 24, 39, 255];
const STAGE: Color = [245, 158, 11, 255];
const CLAUSE_GREEN: Color = [25, 182, 129, 255];
const CLAUSE_RED: Color = [239, 78, 78, 255];

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
    ":": ["00000", "00100", "00000", "00000", "00100", "00000", "00000"],
    "-": ["00000", "00000", "00000", "11111", "00000", "00000", "00000"],
    "%": ["11001", "11010", "00010", "00100", "01000", "01011", "10011"],
    A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
    C: ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
    D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
    E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
    F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
    G: ["01110", "10001", "10000", "10111", "10001", "10001", "01110"],
    I: ["01110", "00100", "00100", "00100", "00100", "00100", "01110"],
    L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    M: ["10001", "11011", "10101", "10001", "10001", "10001", "10001"],
    N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
    O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
    P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
    R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
    S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
    T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
    V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
    Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
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

function textWidth(text: string, scale = 1) {
    return text.length * 6 * scale;
}

function drawBitmapText(png: PNG, text: string, x: number, y: number, color: Color, scale = 1) {
    let cursor = x;
    for (const character of text.toUpperCase()) {
        const glyph = GLYPHS[character];
        if (!glyph) {
            cursor += 6 * scale;
            continue;
        }
        glyph.forEach((row, rowIndex) => {
            [...row].forEach((pixel, columnIndex) => {
                if (pixel === "1") fillRect(png, cursor + columnIndex * scale, y + rowIndex * scale, scale, scale, color);
            });
        });
        cursor += 6 * scale;
    }
}

function drawCenteredText(png: PNG, text: string, centerX: number, y: number, color: Color, scale = 1) {
    drawBitmapText(png, text, Math.round(centerX - textWidth(text, scale) / 2), y, color, scale);
}

function shortClauseLabel(label: string) {
    const match = label.match(/(?:Clause|Cl\.)\s*(\d+)/i);
    return match ? `Cl. ${match[1]}` : label.slice(0, 8);
}

function clauseBarColor(percent: number) {
    if (percent >= 75) return CLAUSE_GREEN;
    if (percent >= 50) return BAR;
    return CLAUSE_RED;
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

function drawLegendItem(png: PNG, x: number, y: number, color: Color, label: string) {
    fillRect(png, x, y, 12, 12, color);
    drawBitmapText(png, label, x + 18, y + 2, TEXT);
}

function encode(png: PNG) {
    return PNG.sync.write(png);
}

/** Finding-mix donut with compliance %, maturity stage, and labelled counts. */
export async function buildFindingMixDonutPng(
    comply: number,
    ofi: number,
    nc: number,
    overallPercent: number,
    stage: string
): Promise<Buffer> {
    const png = image(420, 500);
    const cx = 210;
    const cy = 205;
    drawDonut(png, cx, cy, 118, 72, [
        { value: comply, color: COMPLY },
        { value: ofi, color: OFI },
        { value: nc, color: NC },
    ]);

    const percentLabel = `${overallPercent}%`;
    drawCenteredText(png, percentLabel, cx, 176, TEXT, 2);
    drawCenteredText(png, stage.slice(0, 16), cx, 214, STAGE, 1);

    const legendY = 372;
    drawLegendItem(png, 36, legendY, COMPLY, `COMPLY ${comply}`);
    drawLegendItem(png, 156, legendY, OFI, `OFI ${ofi}`);
    drawLegendItem(png, 276, legendY, NC, `NC ${nc}`);

    return encode(png);
}

/** Clause compliance bar chart with short X-axis labels and percentages. */
export async function buildGapClauseBarPng(clauses: { label: string; percent: number }[]): Promise<Buffer> {
    const png = image(720, 340);
    const padL = 44;
    const padR = 20;
    const padT = 20;
    const padB = 58;
    const plotW = png.width - padL - padR;
    const plotH = png.height - padT - padB;
    const gap = plotW / Math.max(clauses.length, 1);
    const barW = Math.max(8, Math.floor(gap * 0.48));

    [0, 25, 50, 75, 100].forEach((tick) => {
        const y = padT + plotH - Math.round((tick / 100) * plotH);
        fillRect(png, padL, y, plotW, 1, GREY);
    });

    clauses.forEach((clause, index) => {
        const height = Math.max(0, Math.round((Math.max(0, Math.min(100, clause.percent)) / 100) * plotH));
        const x = Math.round(padL + gap * index + (gap - barW) / 2);
        const y = padT + plotH - height;
        fillRect(png, x, y, barW, height, clauseBarColor(clause.percent));
        fillRect(png, x, padT + plotH + 4, barW, 2, MUTED);
        const label = shortClauseLabel(clause.label);
        drawBitmapText(png, label, Math.round(x + barW / 2 - textWidth(label) / 2), padT + plotH + 12, MUTED);
        const percent = `${clause.percent}%`;
        drawBitmapText(png, percent, Math.round(x + barW / 2 - textWidth(percent) / 2), padT + plotH + 26, TEXT);
    });

    return encode(png);
}
