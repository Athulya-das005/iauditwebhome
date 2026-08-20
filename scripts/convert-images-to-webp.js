/**
 * Convert photo/content images under public/ to WebP.
 * Skips brand logos, client logos, flags, and SVG (kept intentionally).
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..", "public");

const KEEP_FILES = new Set([
  "iaudit-logo-nav.png",
  "iAudit Global-01.png",
  "iaudit-logo-new.png",
  "audit-logo.png",
  "audit-logo-horizontal.jpg",
  "iaudit-global-logo.jpg",
  "india-flag.png",
]);

const KEEP_DIR_PARTS = ["clients"]; // /images/clients logos

function shouldKeep(filePath) {
  const rel = path.relative(root, filePath).replace(/\\/g, "/");
  const base = path.basename(filePath);
  if (KEEP_FILES.has(base)) return true;
  if (KEEP_DIR_PARTS.some((p) => rel.includes(`/${p}/`) || rel.startsWith(`${p}/`))) return true;
  return false;
}

async function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

async function convertOne(file) {
  const ext = path.extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return null;
  if (shouldKeep(file)) return { skipped: true, file };

  const outPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const input = sharp(file);
  const meta = await input.metadata();
  const hasAlpha = Boolean(meta.hasAlpha);

  await input
    .webp({
      quality: 82,
      alphaQuality: 90,
      effort: 4,
    })
    .toFile(outPath);

  const before = fs.statSync(file).size;
  const after = fs.statSync(outPath).size;
  fs.unlinkSync(file); // remove original after successful convert
  return {
    skipped: false,
    file,
    outPath,
    before,
    after,
    hasAlpha,
  };
}

(async () => {
  const files = await walk(root);
  const results = [];
  for (const file of files) {
    try {
      const r = await convertOne(file);
      if (r) results.push(r);
    } catch (err) {
      console.error("FAIL", file, err.message);
      results.push({ error: true, file, message: err.message });
    }
  }

  const converted = results.filter((r) => r && !r.skipped && !r.error);
  const skipped = results.filter((r) => r && r.skipped);
  const failed = results.filter((r) => r && r.error);
  const beforeSum = converted.reduce((s, r) => s + r.before, 0);
  const afterSum = converted.reduce((s, r) => s + r.after, 0);

  console.log(JSON.stringify({
    converted: converted.length,
    skipped: skipped.length,
    failed: failed.length,
    beforeMB: +(beforeSum / 1e6).toFixed(2),
    afterMB: +(afterSum / 1e6).toFixed(2),
    savedMB: +((beforeSum - afterSum) / 1e6).toFixed(2),
    convertedFiles: converted.map((r) => path.relative(root, r.outPath).replace(/\\/g, "/")),
    skippedFiles: skipped.map((r) => path.relative(root, r.file).replace(/\\/g, "/")),
    failedFiles: failed.map((r) => ({ file: path.relative(root, r.file).replace(/\\/g, "/"), message: r.message })),
  }, null, 2));
})();
