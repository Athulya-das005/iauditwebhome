import { google } from "googleapis";

export type ContactSheetRow = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
};

const SHEET_HEADERS = ["Timestamp", "First Name", "Last Name", "Phone", "Email", "Subject", "Message"];

const DEFAULT_SPREADSHEET_ID = "1Dsm6MJ0sESNThyKpRBhZn_Nsyw2CSKK91UN6HET6_p4";

function getSpreadsheetId() {
    return process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID;
}

function getSheetTabName() {
    return process.env.GOOGLE_SHEETS_TAB_NAME?.trim() || "Sheet1";
}

function getServiceAccountCredentials() {
    const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
    if (json) {
        try {
            const parsed = JSON.parse(json) as { client_email?: string; private_key?: string };
            if (parsed.client_email && parsed.private_key) {
                return { clientEmail: parsed.client_email, privateKey: parsed.private_key };
            }
        } catch {
            throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON.");
        }
    }

    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
    const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.trim();
    if (clientEmail && privateKey) {
        return {
            clientEmail,
            privateKey: privateKey.replace(/\\n/g, "\n"),
        };
    }

    return null;
}

export function isGoogleSheetsConfigured() {
    return Boolean(getServiceAccountCredentials());
}

export function googleSheetsNotConfiguredMessage() {
    return (
        "Google Sheets is not configured. Add GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY " +
        "(or GOOGLE_SERVICE_ACCOUNT_JSON) to .env.local, share the spreadsheet with the service account email as Editor, then restart the dev server."
    );
}

function getSheetsClient() {
    const credentials = getServiceAccountCredentials();
    if (!credentials) {
        throw new Error(googleSheetsNotConfiguredMessage());
    }

    const auth = new google.auth.JWT({
        email: credentials.clientEmail,
        key: credentials.privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return google.sheets({ version: "v4", auth });
}

async function ensureHeaders(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string, tabName: string) {
    const range = `${tabName}!A1:G1`;
    const existing = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    const firstCell = existing.data.values?.[0]?.[0]?.trim();

    if (!firstCell) {
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: "RAW",
            requestBody: { values: [SHEET_HEADERS] },
        });
    }
}

export async function appendContactSubmission(row: ContactSheetRow) {
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const tabName = getSheetTabName();

    await ensureHeaders(sheets, spreadsheetId, tabName);

    const values = [
        [
            new Date().toISOString(),
            row.firstName,
            row.lastName,
            row.phone,
            row.email,
            row.subject,
            row.message,
        ],
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${tabName}!A:G`,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values },
    });
}
