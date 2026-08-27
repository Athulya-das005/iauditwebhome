import fs from "fs";

const xml = fs.readFileSync(".tmp-docx-extract/word/document.xml", "utf8");
const text = xml
  .replace(/<w:tab[^/]*\/>/g, "\t")
  .replace(/<\/w:p>/g, "\n")
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">");
const lines = text
  .split("\n")
  .map((l) => l.trim())
  .filter(Boolean);

fs.writeFileSync(".tmp-doc-lines.txt", lines.map((l, i) => `${i}: ${l}`).join("\n"));
console.log("wrote", lines.length, "lines");
console.log(lines.slice(0, 100).join("\n"));
