import { NextResponse } from "next/server";
import {
    appendContactSubmission,
    googleSheetsNotConfiguredMessage,
    isGoogleSheetsConfigured,
    type ContactSheetRow,
} from "@/lib/google-sheets";
import { sendContactNotificationEmail } from "@/lib/send-contact-email";

const ALLOWED_SUBJECTS = new Set([
    "Support Request",
    "Product Demo",
    "Technical Issue",
    "General Question",
]);

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown, maxLength: number) {
    return String(value ?? "")
        .trim()
        .slice(0, maxLength);
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<ContactSheetRow> & { agreed?: boolean };

        const firstName = clean(body.firstName, 80);
        const lastName = clean(body.lastName, 80);
        const phone = clean(body.phone, 40);
        const email = clean(body.email, 160).toLowerCase();
        const subject = clean(body.subject, 80);
        const message = clean(body.message, 4000);

        if (!firstName || !lastName || !phone || !email || !subject) {
            return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }
        if (!ALLOWED_SUBJECTS.has(subject)) {
            return NextResponse.json({ error: "Please choose a valid subject." }, { status: 400 });
        }
        if (!body.agreed) {
            return NextResponse.json({ error: "Please agree to the terms and conditions." }, { status: 400 });
        }

        const row: ContactSheetRow = { firstName, lastName, phone, email, subject, message };

        if (!isGoogleSheetsConfigured()) {
            return NextResponse.json({ error: googleSheetsNotConfiguredMessage() }, { status: 503 });
        }

        await appendContactSubmission(row);

        const emailSent = await sendContactNotificationEmail(row);

        return NextResponse.json({
            ok: true,
            emailSent,
            message: "Thank you! Your message has been received.",
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to submit your message.";
        console.error("Contact form submission failed:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
