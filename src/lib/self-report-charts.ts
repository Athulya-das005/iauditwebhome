import { maturityTone } from "@/lib/self-report-data";

const GREY = "#E5E7EB";
const TEXT = "#111827";
const MUTED = "#6B7280";
const ORANGE = "#F59E0B";

async function renderPng(svg: string) {
    const { default: sharp } = await import("sharp");
    return sharp(Buffer.from(svg)).png().toBuffer();
}

function polar(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutSlice(cx: number, cy: number, outer: number, inner: number, start: number, sweep: number) {
    if (sweep <= 0) return "";
    if (sweep >= 359.99) {
        return [
            `M ${cx} ${cy - outer}`,
            `A ${outer} ${outer} 0 1 1 ${cx - 0.01} ${cy - outer}`,
            `L ${cx - 0.01} ${cy - inner}`,
            `A ${inner} ${inner} 0 1 0 ${cx} ${cy - inner}`,
            "Z",
        ].join(" ");
    }
    const end = start + sweep;
    const large = sweep > 180 ? 1 : 0;
    const p1 = polar(cx, cy, outer, start);
    const p2 = polar(cx, cy, outer, end);
    const p3 = polar(cx, cy, inner, end);
    const p4 = polar(cx, cy, inner, start);
    return [
        `M ${p1.x} ${p1.y}`,
        `A ${outer} ${outer} 0 ${large} 1 ${p2.x} ${p2.y}`,
        `L ${p3.x} ${p3.y}`,
        `A ${inner} ${inner} 0 ${large} 0 ${p4.x} ${p4.y}`,
        "Z",
    ].join(" ");
}

function escapeXml(value: string) {
    return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char] ?? char));
}

/** Donut matching on-screen / PDF Total Score chart (Yes = stage colour, Remaining = grey). */
export async function buildScoreDonutPng(yes: number, total: number, stage: string): Promise<Buffer> {
    const rest = Math.max(total - yes, 0);
    const sum = Math.max(yes + rest, 1);
    const width = 420;
    const height = 460;
    const cx = 210;
    const cy = 200;
    const outer = 130;
    const inner = 78;
    const tone = maturityTone(stage);

    const yesSweep = (yes / sum) * 360;
    const restSweep = (rest / sum) * 360;
    const yesPath = donutSlice(cx, cy, outer, inner, 0, yesSweep);
    const restPath = donutSlice(cx, cy, outer, inner, yesSweep, restSweep);
    const score = `${yes} / ${total}`;
    const sub = `${yes} questions yes`;
    const stageLabel = stage.toUpperCase();

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  ${restPath ? `<path d="${restPath}" fill="${GREY}"/>` : ""}
  ${yesPath ? `<path d="${yesPath}" fill="${tone.accent}"/>` : ""}
  <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="${TEXT}">${escapeXml(score)}</text>
  <text x="${cx}" y="${cy + 22}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="${MUTED}">${escapeXml(sub)}</text>
  <rect x="${cx - 90}" y="${cy + outer + 28}" rx="14" ry="14" width="180" height="28" fill="${tone.badgeBg}" stroke="${tone.softBorder}"/>
  <text x="${cx}" y="${cy + outer + 47}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" fill="${tone.badgeText}">${escapeXml(stageLabel)}</text>
  <rect x="${cx - 78}" y="${cy + outer + 72}" width="12" height="12" fill="${tone.accent}" rx="2"/>
  <text x="${cx - 60}" y="${cy + outer + 82}" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="${TEXT}">Yes</text>
  <rect x="${cx + 10}" y="${cy + outer + 72}" width="12" height="12" fill="${GREY}" rx="2"/>
  <text x="${cx + 28}" y="${cy + outer + 82}" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="${TEXT}">Remaining</text>
</svg>`;

    return renderPng(svg);
}

/** Vertical bar chart for Score by Clause (matches PDF orange bars). */
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
    const barW = gap * 0.48;
    const maxTick = 60;

    const grid = [0, 15, 30, 45, 60]
        .map((tick) => {
            const y = padT + plotH - (tick / maxTick) * plotH;
            return `
              <line x1="${padL}" x2="${width - padR}" y1="${y}" y2="${y}" stroke="#E5E7EB" stroke-dasharray="4 4"/>
              <text x="${padL - 8}" y="${y + 4}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="#9CA3AF">${tick}</text>`;
        })
        .join("");

    const bars = clauses
        .map((clause, index) => {
            const mapped = (clause.percent / 100) * maxTick;
            const h = Math.max((mapped / maxTick) * plotH, clause.percent > 0 ? 2 : 0);
            const x = padL + gap * index + (gap - barW) / 2;
            const y = padT + plotH - h;
            const clauseNum = escapeXml(clause.label.split(".")[0] ?? String(index + 4));
            const meta = `${clause.yes}/${clause.total}  ${clause.percent}%`;
            return `
              <rect x="${x}" y="${y}" width="${barW}" height="${h}" fill="${ORANGE}" rx="2"/>
              <text x="${x + barW / 2}" y="${height - 28}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="${MUTED}">Cl. ${clauseNum}</text>
              <text x="${x + barW / 2}" y="${height - 12}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" fill="${TEXT}">${escapeXml(meta)}</text>`;
        })
        .join("");

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  ${grid}
  ${bars}
</svg>`;

    return renderPng(svg);
}
