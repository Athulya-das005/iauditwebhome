const COMPLY = "#19B681";
const OFI = "#F49C1C";
const NC = "#EF4E4E";
const BAR = "#29ABE2";

function polar(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function slicePath(cx: number, cy: number, outer: number, inner: number, start: number, sweep: number) {
    const end = start + sweep;
    const large = sweep > 180 ? 1 : 0;
    const p1 = polar(cx, cy, outer, start);
    const p2 = polar(cx, cy, outer, end);
    const p3 = polar(cx, cy, inner, end);
    const p4 = polar(cx, cy, inner, start);
    if (sweep >= 359.99) {
        return `M ${cx} ${cy - outer} A ${outer} ${outer} 0 1 1 ${cx - 0.01} ${cy - outer} L ${cx - 0.01} ${cy - inner} A ${inner} ${inner} 0 1 0 ${cx} ${cy - inner} Z`;
    }
    return `M ${p1.x} ${p1.y} A ${outer} ${outer} 0 ${large} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${inner} ${inner} 0 ${large} 0 ${p4.x} ${p4.y} Z`;
}

export function renderDonutSvg(comply: number, ofi: number, nc: number) {
    const segments = [
        { value: comply, color: COMPLY, label: "Comply" },
        { value: ofi, color: OFI, label: "OFI" },
        { value: nc, color: NC, label: "NC" },
    ];
    const sum = segments.reduce((acc, item) => acc + item.value, 0);
    let angle = 0;
    const paths =
        sum === 0
            ? `<circle cx="160" cy="140" r="70" fill="none" stroke="#e5e7eb" stroke-width="36"/>`
            : segments
                  .filter((item) => item.value > 0)
                  .map((item) => {
                      const sweep = (item.value / sum) * 360;
                      const gap = Math.min(2, sweep / 2);
                      const d = slicePath(160, 140, 108, 72, angle + gap / 2, Math.max(sweep - gap, 0.01));
                      angle += sweep;
                      return `<path d="${d}" fill="${item.color}"/>`;
                  })
                  .join("");
    return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="280" viewBox="0 0 320 280">
      ${paths}
      <rect x="58" y="248" width="10" height="10" fill="${COMPLY}"/><text x="74" y="257" font-family="Calibri, Arial" font-size="13" fill="${COMPLY}">Comply</text>
      <rect x="140" y="248" width="10" height="10" fill="${OFI}"/><text x="156" y="257" font-family="Calibri, Arial" font-size="13" fill="${OFI}">OFI</text>
      <rect x="210" y="248" width="10" height="10" fill="${NC}"/><text x="226" y="257" font-family="Calibri, Arial" font-size="13" fill="${NC}">NC</text>
    </svg>`;
}

export function renderBarSvg(clauses: { label: string; percent: number }[]) {
    const width = 640;
    const height = 260;
    const padL = 40;
    const padR = 16;
    const padT = 16;
    const padB = 52;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const gap = plotW / Math.max(clauses.length, 1);
    const barW = gap * 0.48;
    const ticks = [0, 25, 50, 75, 100]
        .map((tick) => {
            const y = padT + plotH - (tick / 100) * plotH;
            return `<line x1="${padL}" x2="${width - padR}" y1="${y}" y2="${y}" stroke="#d1d5db" stroke-dasharray="4 4"/><text x="${padL - 8}" y="${y + 4}" text-anchor="end" font-size="11" font-family="Calibri, Arial" fill="#9ca3af">${tick}</text>`;
        })
        .join("");
    const bars = clauses
        .map((clause, index) => {
            const h = (clause.percent / 100) * plotH;
            const x = padL + gap * index + (gap - barW) / 2;
            const y = padT + plotH - h;
            const short = clause.label.replace(/^(\d+\.)\s*/, "$1 ");
            return `<rect x="${x}" y="${y}" width="${barW}" height="${Math.max(h, 1)}" fill="${BAR}"/><text x="${x + barW / 2}" y="${height - 14}" text-anchor="middle" font-size="10" font-family="Calibri, Arial" fill="#6b7280">${short}</text>`;
        })
        .join("");
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${ticks}${bars}</svg>`;
}
