import { NextResponse } from "next/server";
import {
    assertCanSendOtp,
    generateAssessmentOtp,
    isValidAssessmentEmail,
    normalizeAssessmentEmail,
} from "@/lib/assessment-email-otp";
import { isAssessmentOtpMailConfigured, sendAssessmentOtpEmail } from "@/lib/send-assessment-otp-email";

export async function POST(request: Request) {
    try {
        if (!isAssessmentOtpMailConfigured()) {
            return NextResponse.json(
                { error: "Email verification is temporarily unavailable. Please try again later." },
                { status: 503 }
            );
        }

        const body = (await request.json()) as { email?: string };
        const email = normalizeAssessmentEmail(body.email ?? "");
        if (!email || !isValidAssessmentEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        try {
            assertCanSendOtp(email);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Please wait before requesting another code.";
            return NextResponse.json({ error: message }, { status: 429 });
        }

        const code = generateAssessmentOtp(email);
        await sendAssessmentOtpEmail(email, code);

        return NextResponse.json({
            ok: true,
            message: "Verification code sent. Check your inbox (and spam folder).",
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to send verification code.";
        console.error("assessment-email-otp/send:", error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
