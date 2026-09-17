import { NextResponse } from "next/server";
import {
    checkAssessmentOtp,
    createEmailVerificationToken,
    isValidAssessmentEmail,
    normalizeAssessmentEmail,
} from "@/lib/assessment-email-otp";

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as { email?: string; code?: string };
        const email = normalizeAssessmentEmail(body.email ?? "");
        const code = body.code?.trim() ?? "";

        if (!email || !isValidAssessmentEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }
        if (!/^\d{6}$/.test(code.replace(/\s+/g, ""))) {
            return NextResponse.json({ error: "Enter the 6-digit code from your email." }, { status: 400 });
        }

        if (!checkAssessmentOtp(email, code)) {
            return NextResponse.json(
                { error: "That code is invalid or expired. Request a new code and try again." },
                { status: 400 }
            );
        }

        const emailVerificationToken = createEmailVerificationToken(email);
        return NextResponse.json({
            ok: true,
            emailVerified: true,
            emailVerificationToken,
            message: "Email verified. You can start the assessment.",
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to verify code.";
        console.error("assessment-email-otp/verify:", error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
