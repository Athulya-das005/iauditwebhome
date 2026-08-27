import sharp from "sharp";

const COMPLY = "#19B681";
const OFI = "#F49C1C";
const NC = "#EF4E4E";
const BAR = "#00AEEF";
const TEXT = "#111827";
const MUTED = "#6B7280";
const GREY = "#E5E7EB";

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

function shortClause(label: string) {
    const match = label.match(/Clause\s+(\d+)/i);
    return match ? `Cl. ${match[1]}` : label.slice(0, 8);
}

/** Finding-mix donut matching the on-screen Gap Analysis results chart. */
export async function buildFindingMixDonutPng(comply: number, ofi: number, nc: number): Promise<Buffer> {
    const width = 420;
    const height = 440;
    const cx = 210;
    const cy = 190;
    const outer = 120;
    const inner = 72;
    const segments = [
        { label: "Comply", value: comply, color: COMPLY },
        { label: "OFI", value: ofi, color: OFI },
        { label: "NC", value: nc, color: NC },
    ];
    const sum = segments.reduce((acc, item) => acc + item.value, 0) || 1;

    let angle = 0;
    const paths = segments
        .map((item) => {
            const sweep = (item.value / sum) * 360;
            const d = donutSlice(cx, cy, outer, inner, angle, sweep);
            angle += sweep;
            return d ? `<path d="${d}" fill="${item.color}"/>` : "";
        })
        .join("\n");

    const legendY = cy + outer + 36;
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  ${sum <= 0 || comply + ofi + nc === 0 ? `<circle cx="${cx}" cy="${cy}" r="${(outer + inner) / 2}" fill="none" stroke="${GREY}" stroke-width="${outer - inner}"/>` : paths}
  <text x="${cx}" y="${cy - 4}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="${TEXT}">${comply + ofi + nc}</text>
  <text x="${cx}" y="${cy + 18}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="${MUTED}">findings</text>
  <rect x="${cx - 120}" y="${legendY}" width="12" height="12" rx="2" fill="${COMPLY}"/>
  <text x="${cx - 102}" y="${legendY + 11}" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="${COMPLY}">Comply ${comply}</text>
  <rect x="${cx - 20}" y="${legendY}" width="12" height="12" rx="2" fill="${OFI}"/>
  <text x="${cx - 2}" y="${legendY + 11}" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="${OFI}">OFI ${ofi}</text>
  <rect x="${cx + 70}" y="${legendY}" width="12" height="12" rx="2" fill="${NC}"/>
  <text x="${cx + 88}" y="${legendY + 11}" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="${NC}">NC ${nc}</text>
</svg>`;

    return sharp(Buffer.from(svg)).png().toBuffer();
}

/** Clause compliance bar chart with short X-axis labels. */
export async function buildGapClauseBarPng(clauses: { label: string; percent: number }[]): Promise<Buffer> {
    const width = 720;
    const height = 300;
    const padL = 44;
    const padR = 20;
    const padT = 20;
    const padB = 40;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const gap = plotW / Math.max(clauses.length, 1);
    const barW = gap * 0.5;

    const grid = [0, 25, 50, 75, 100]
        .map((tick) => {
            const y = padT + plotH - (tick / 100) * plotH;
            return `
              <line x1="${padL}" x2="${width - padR}" y1="${y}" y2="${y}" stroke="#E5E7EB" stroke-dasharray="4 4"/>
              <text x="${padL - 8}" y="${y + 4}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="11" fill="#9CA3AF">${tick}</text>`;
        })
        .join("");

    const bars = clauses
        .map((clause, index) => {
            const h = Math.max((clause.percent / 100) * plotH, clause.percent > 0 ? 2 : 0);
            const x = padL + gap * index + (gap - barW) / 2;
            const y = padT + plotH - h;
            return `
              <rect x="${x}" y="${y}" width="${barW}" height="${h}" fill="${BAR}" rx="2"/>
              <text x="${x + barW / 2}" y="${height - 14}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="${MUTED}">${escapeXml(shortClause(clause.label))}</text>`;
        })
        .join("");

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  ${grid}
  ${bars}
</svg>`;

    return sharp(Buffer.from(svg)).png().toBuffer();
}
