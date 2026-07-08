import { NextResponse } from "next/server";
import { createAdminSession, verifyAdminCredentials } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as { email?: string; password?: string };
        const email = body.email?.trim() ?? "";
        const password = body.password ?? "";

        if (!email || !password || !verifyAdminCredentials(email, password)) {
            return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
        }

        await createAdminSession();
        return NextResponse.json({ ok: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Login failed.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
