import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { readHallOfFameResearchers } from "@/lib/hall-of-fame-store";

export async function GET() {
    const researchers = await readHallOfFameResearchers();
    return NextResponse.json({ researchers });
}

export async function POST(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    try {
        const body = (await request.json()) as {
            researchers?: unknown;
            message?: string;
        };

        if (!Array.isArray(body.researchers)) {
            return NextResponse.json({ error: "Invalid researchers payload." }, { status: 400 });
        }

        const researchers = body.researchers.map((item) => {
            const record = item as {
                id?: string;
                name?: string;
                linkedIn?: string;
                reportCount?: number;
                flagIcon?: string;
            };

            if (!record.id || !record.name?.trim() || !record.linkedIn?.trim()) {
                throw new Error("Each researcher needs id, name, and LinkedIn URL.");
            }

            const reportCount = Number(record.reportCount);
            if (!Number.isFinite(reportCount) || reportCount < 1) {
                throw new Error("Report count must be at least 1.");
            }

            return {
                id: record.id,
                name: record.name.trim(),
                linkedIn: record.linkedIn.trim(),
                reportCount,
                ...(record.flagIcon?.trim() ? { flagIcon: record.flagIcon.trim() } : {}),
            };
        });

        const { saveHallOfFameResearchers } = await import("@/lib/hall-of-fame-store");
        const result = await saveHallOfFameResearchers(
            researchers,
            body.message?.trim() || "Update Hall of Fame researchers via admin panel."
        );

        return NextResponse.json({
            ok: true,
            researchers,
            publishedToGitHub: result.publishedToGitHub,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Publish failed.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
