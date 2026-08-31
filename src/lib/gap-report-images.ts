export function parseDataImage(dataUrl: string): { mime: string; bytes: Buffer } | null {
    const match = dataUrl.match(/^data:image\/([a-zA-Z0-9.+-]+);base64,([\s\S]+)$/);
    if (!match) return null;
    return {
        mime: match[1].toLowerCase(),
        bytes: Buffer.from(match[2], "base64"),
    };
}

/** Normalise any uploaded evidence image to JPEG bytes for reliable PDF/Word embedding. */
export async function normalizeEvidenceImage(dataUrl: string): Promise<Buffer | null> {
    const parsed = parseDataImage(dataUrl);
    if (!parsed) return null;
    try {
        const { default: sharp } = await import("sharp");
        return await sharp(parsed.bytes).rotate().jpeg({ quality: 72 }).toBuffer();
    } catch {
        return null;
    }
}
