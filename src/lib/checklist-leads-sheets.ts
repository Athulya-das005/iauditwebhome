import { google } from "googleapis";
import type { ChecklistLead } from "@/types/checklist-lead";
import { isGoogleSheetsConfigured, googleSheetsNotConfiguredMessage } from "@/lib/google-sheets";

/** Spreadsheet for checklist leads (falls back to main spreadsheet if not set). */
const DEFAULT_SPREADSHEET_ID = "1Dsm6MJ0sESNThyKpRBhZn_Nsyw2CSKK91UN6HET6_p4";
const DEFAULT_CHECKLIST_TAB = "Checklist Leads";

const HEADERS = [
    "ID",
    "Created At",
    "Checklist Name",
    "Industry",
    "Industry Slug",
    "Full Name",
    "Email",
    "Email Sent At",
    "Phone",
    "Company",
    "City",
];

function getSpreadsheetId() {
    return (
        process.env.GOOGLE_SHEETS_CHECKLIST_SPREADSHEET_ID?.trim() ||
        process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() ||
        DEFAULT_SPREADSHEET_ID
    );
}

function getChecklistTabName() {
    return process.env.GOOGLE_SHEETS_CHECKLIST_TAB_NAME?.trim() || DEFAULT_CHECKLIST_TAB;
}

function quoteSheetRange(tabName: string, a1: string) {
    const escaped = tabName.replace(/'/g, "''");
    return `'${escaped}'!${a1}`;
}

function getCredentials() {
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
        return { clientEmail, privateKey: privateKey.replace(/\\n/g, "\n") };
    }
    return null;
}

function getSheetsClient() {
    const credentials = getCredentials();
    if (!credentials) throw new Error(googleSheetsNotConfiguredMessage());
    const auth = new google.auth.JWT({
        email: credentials.clientEmail,
        key: credentials.privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return google.sheets({ version: "v4", auth });
}

function leadToRow(lead: ChecklistLead) {
    return [
        lead.id,
        lead.createdAt,
        lead.checklistName,
        lead.industryTitle || "",
        lead.industrySlug || "",
        lead.fullName,
        lead.email,
        lead.emailSentAt ?? "",
        lead.phone ?? "",
        lead.company ?? "",
        lead.city ?? "",
    ];
}

function rowToLead(row: string[]): ChecklistLead | null {
    if (!row[0]?.trim()) return null;
    return {
        id: row[0],
        createdAt: row[1] || new Date().toISOString(),
        checklistName: row[2] || "",
        industryTitle: row[3] || "",
        industrySlug: row[4] || "",
        fullName: row[5] || "",
        email: row[6] || "",
        emailSentAt: row[7]?.trim() ? row[7] : null,
        phone: row[8]?.trim() || undefined,
        company: row[9]?.trim() || undefined,
        city: row[10]?.trim() || undefined,
    };
}

async function listSheetTitles(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string) {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    return (meta.data.sheets ?? [])
        .map((sheet) => ({
            title: sheet.properties?.title ?? "",
            sheetId: sheet.properties?.sheetId,
        }))
        .filter((sheet) => sheet.title);
}

function resolveExactTabTitle(
    titles: { title: string; sheetId?: number | null }[],
    preferredName: string
) {
    const preferred = preferredName.trim().toLowerCase();
    const exact = titles.find((t) => t.title === preferredName);
    if (exact) return exact.title;
    const trimmed = titles.find((t) => t.title.trim().toLowerCase() === preferred);
    if (trimmed) return trimmed.title;
    return null;
}

async function ensureTabAndHeaders(
    sheets: ReturnType<typeof google.sheets>,
    spreadsheetId: string,
    preferredTabName: string
) {
    let titles = await listSheetTitles(sheets, spreadsheetId);
    let exactTitle = resolveExactTabTitle(titles, preferredTabName);

    if (!exactTitle) {
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: { requests: [{ addSheet: { properties: { title: preferredTabName } } }] },
        });
        titles = await listSheetTitles(sheets, spreadsheetId);
        exactTitle = resolveExactTabTitle(titles, preferredTabName) ?? preferredTabName;
    }

    const headerRange = quoteSheetRange(exactTitle, "A1:K1");
    const headerRes = await sheets.spreadsheets.values.get({ spreadsheetId, range: headerRange });
    const existingHeader = headerRes.data.values?.[0] ?? [];
    if (!existingHeader[0]) {
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: headerRange,
            valueInputOption: "RAW",
            requestBody: { values: [HEADERS] },
        });
    }

    return exactTitle;
}

export async function appendChecklistLeadToSheet(lead: ChecklistLead): Promise<boolean> {
    if (!isGoogleSheetsConfigured()) return false;
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const preferredTabName = getChecklistTabName();
    const tabName = await ensureTabAndHeaders(sheets, spreadsheetId, preferredTabName);

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: quoteSheetRange(tabName, "A:K"),
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
            values: [leadToRow(lead)],
        },
    });

    return true;
}

export async function readChecklistLeadsFromSheet(): Promise<ChecklistLead[]> {
    if (!isGoogleSheetsConfigured()) return [];
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const preferredTabName = getChecklistTabName();
    const tabName = await ensureTabAndHeaders(sheets, spreadsheetId, preferredTabName);

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: quoteSheetRange(tabName, "A2:K"),
    });

    const rows = res.data.values ?? [];
    return rows
        .map((row) => rowToLead(row as string[]))
        .filter((lead): lead is ChecklistLead => Boolean(lead));
}

export async function updateChecklistLeadEmailSentInSheet(
    id: string,
    emailSent: boolean
): Promise<ChecklistLead | null> {
    if (!isGoogleSheetsConfigured()) return null;
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const preferredTabName = getChecklistTabName();
    const tabName = await ensureTabAndHeaders(sheets, spreadsheetId, preferredTabName);

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: quoteSheetRange(tabName, "A2:K"),
    });
    const rows = res.data.values ?? [];
    const rowIndex = rows.findIndex((row) => row[0] === id);
    if (rowIndex === -1) return null;

    const emailSentAt = emailSent ? new Date().toISOString() : "";
    const sheetRowNumber = rowIndex + 2;

    await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: quoteSheetRange(tabName, `H${sheetRowNumber}`),
        valueInputOption: "RAW",
        requestBody: { values: [[emailSentAt]] },
    });

    const currentLead = rowToLead(rows[rowIndex] as string[]);
    if (!currentLead) return null;
    return { ...currentLead, emailSentAt: emailSent ? emailSentAt : null };
}

export async function deleteChecklistLeadFromSheet(id: string): Promise<boolean> {
    if (!isGoogleSheetsConfigured()) return false;
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const preferredTabName = getChecklistTabName();

    const titles = await listSheetTitles(sheets, spreadsheetId);
    const exactTitle = resolveExactTabTitle(titles, preferredTabName);
    if (!exactTitle) return false;

    const sheetMeta = titles.find((t) => t.title === exactTitle);
    const sheetId = sheetMeta?.sheetId;
    if (sheetId === undefined || sheetId === null) return false;

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: quoteSheetRange(exactTitle, "A2:A"),
    });
    const rows = res.data.values ?? [];
    const rowIndex = rows.findIndex((row) => row[0] === id);
    if (rowIndex === -1) return false;

    const startIndex = rowIndex + 1; // 0-indexed inclusive row in sheet (headers is 0)
    const endIndex = startIndex + 1;

    await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
            requests: [
                {
                    deleteDimension: {
                        range: {
                            sheetId,
                            dimension: "ROWS",
                            startIndex,
                            endIndex,
                        },
                    },
                },
            ],
        },
    });

    return true;
}
