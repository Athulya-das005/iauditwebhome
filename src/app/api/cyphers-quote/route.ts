import { NextResponse } from "next/server";
import {
    appendContactSubmission,
    googleSheetsNotConfiguredMessage,
    isGoogleSheetsConfigured,
    type ContactSheetRow,
} from "@/lib/google-sheets";
import { sendContactNotificationEmail } from "@/lib/send-contact-email";
import { COUNTRIES } from "@/data/countries";

const SUBJECT = "Cyphers Page – Pen Test Quote";
const SOURCE_TAG = "Cyphers Page Form";
const SOURCE_LABEL = "Cyphers page (iaudit.global/cyphers) – Get a Pen Test Quote form";
const COUNTRY_SET = new Set(COUNTRIES);

type QuoteBody = {
    firstName?: unknown;
    lastName?: unknown;
    email?: unknown;
    phone?: unknown;
    company?: unknown;
    country?: unknown;
    message?: unknown;
};

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
        const body = (await request.json()) as QuoteBody;

        const firstName = clean(body.firstName, 80);
        const lastName = clean(body.lastName, 80);
        const email = clean(body.email, 160).toLowerCase();
        const phone = clean(body.phone, 40);
        const company = clean(body.company, 160);
        const country = clean(body.country, 80);
        const details = clean(body.message, 4000);

        if (!firstName || !lastName || !email || !phone || !company || !country || !details) {
            return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid business email address." }, { status: 400 });
        }
        if (!COUNTRY_SET.has(country)) {
            return NextResponse.json({ error: "Please select a valid country." }, { status: 400 });
        }

        if (!isGoogleSheetsConfigured()) {
            return NextResponse.json({ error: googleSheetsNotConfiguredMessage() }, { status: 503 });
        }

        const row: ContactSheetRow = {
            firstName,
            lastName,
            phone,
            email,
            subject: SUBJECT,
            message: [`Source: ${SOURCE_LABEL}`, `Company: ${company}`, `Country: ${country}`, "", details].join("\n"),
        };

        await appendContactSubmission(row);
        const emailSent = await sendContactNotificationEmail(
            { ...row, message: details },
            {
                tag: SOURCE_TAG,
                label: SOURCE_LABEL,
                subject: `New Pen Test Quote Request from ${firstName} ${lastName} (${company})`,
                heading: "New enquiry from the Cyphers page – Pen Test Quote",
                extraFields: [
                    { label: "Company", value: company },
                    { label: "Country", value: country },
                ],
            }
        );

        return NextResponse.json({
            ok: true,
            emailSent,
            message: "Thank you. The Cyphers team will be in touch about your security assessment shortly.",
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to submit your request.";
        console.error("Cyphers quote submission failed:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
