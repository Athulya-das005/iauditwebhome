export function parseDataImage(dataUrl: string): { mime: string; bytes: Buffer } | null {
    const match = dataUrl.match(/^data:image\/([a-zA-Z0-9.+-]+);base64,([\s\S]+)$/);
    if (!match) return null;
    return {
        mime: match[1].toLowerCase(),
        bytes: Buffer.from(match[2], "base64"),
    };
}

