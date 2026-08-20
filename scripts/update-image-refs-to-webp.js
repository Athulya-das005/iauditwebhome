/**
 * Update src references from .png/.jpg/.jpeg to .webp for converted assets.
 * Leaves kept logos/clients/flag/SVG and remote OG URLs untouched.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const srcRoot = path.join(root, "src");
const publicRoot = path.join(root, "public");

const KEEP_BASENAMES = new Set([
  "iaudit-logo-nav.png",
  "iAudit Global-01.png",
  "iaudit-logo-new.png",
  "audit-logo.png",
  "audit-logo-horizontal.jpg",
  "iaudit-global-logo.jpg",
  "india-flag.png",
  "adstone.png",
  "construct-lifts.png",
  "fujitec.png",
  "peerless.png",
  "stannah.png",
]);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(full, out);
    } else if (/\.(tsx?|jsx?|css|md|json)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function webpExistsFor(refPath) {
  // refPath like /images/foo.jpg
  const cleaned = refPath.split("?")[0];
  const local = path.join(publicRoot, cleaned.replace(/^\//, "").replace(/\//g, path.sep));
  const webp = local.replace(/\.(png|jpe?g)$/i, ".webp");
  return fs.existsSync(webp);
}

const files = walk(srcRoot);
// also scripts and any root md if needed — src is enough
let changedFiles = 0;
const replacements = [];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  const original = text;

  text = text.replace(
    /(["'`])(\/?[\w\-./ ]+\.(?:png|jpe?g))\1/gi,
    (match, quote, imgPath) => {
      const base = path.basename(imgPath);
      if (KEEP_BASENAMES.has(base)) return match;
      if (imgPath.includes("/clients/")) return match;
      if (imgPath.startsWith("http")) return match; // remote — handled separately for unsplash
      // Only rewrite if webp sibling exists
      const normalized = imgPath.startsWith("/") ? imgPath : `/${imgPath}`;
      if (!webpExistsFor(normalized.replace(/^\.\//, "/"))) {
        // try without leading logic for relative
        const relTry = imgPath.startsWith("/") ? imgPath : `/${imgPath}`;
        if (!webpExistsFor(relTry)) return match;
      }
      const next = imgPath.replace(/\.(png|jpe?g)$/i, ".webp");
      replacements.push({ file: path.relative(root, file), from: imgPath, to: next });
      return `${quote}${next}${quote}`;
    }
  );

  // Unsplash: prefer WebP via fm=webp when auto=format not present
  text = text.replace(
    /(https:\/\/images\.unsplash\.com\/[^"'`\s]+)/g,
    (url) => {
      if (/[?&]fm=/i.test(url)) return url;
      if (/[?&]auto=format/i.test(url)) {
        // auto=format already serves webp to supporting browsers
        return url;
      }
      return url.includes("?") ? `${url}&fm=webp` : `${url}?fm=webp`;
    }
  );

  if (text !== original) {
    fs.writeFileSync(file, text, "utf8");
    changedFiles++;
  }
}

console.log(JSON.stringify({ changedFiles, replacementCount: replacements.length, sample: replacements.slice(0, 40) }, null, 2));
