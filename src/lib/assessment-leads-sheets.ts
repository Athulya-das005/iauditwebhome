import { google } from "googleapis";
import type { AssessmentLead } from "@/types/assessment-lead";
import { isGoogleSheetsConfigured, googleSheetsNotConfiguredMessage } from "@/lib/google-sheets";

const DEFAULT_SPREADSHEET_ID = "1Dsm6MJ0sESNThyKpRBhZn_Nsyw2CSKK91UN6HET6_p4";

const HEADERS = [
    "ID",
    "Created At",
    "Assessment Type",
    "Assessment Title",
    "Page Path",
    "Full Name",
    "First Name",
    "Last Name",
    "Email",
    "Company",
    "Industry",
    "Organisation Size",
    "Department",
    "Existing Customer",
    "ISO Standard",
    "Audit Scope",
    "Email Opt In",
    "Email Sent At",
];

function getSpreadsheetId() {
    return process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID;
}

function getTabName() {
    return process.env.GOOGLE_SHEETS_ASSESSMENT_LEADS_TAB_NAME?.trim() || "Assessment Leads";
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

function leadToRow(lead: AssessmentLead) {
    return [
        lead.id,
        lead.createdAt,
        lead.assessmentType,
        lead.assessmentTitle,
        lead.pagePath,
        lead.fullName,
        lead.firstName ?? "",
        lead.lastName ?? "",
        lead.email,
        lead.company ?? "",
        lead.industry ?? "",
        lead.organisationSize ?? "",
        lead.department ?? "",
        lead.existingCustomer ?? "",
        lead.isoStandard ?? "",
        lead.auditScope ?? "",
        lead.emailOptIn ? "TRUE" : "FALSE",
        lead.emailSentAt ?? "",
    ];
}

function rowToLead(row: string[]): AssessmentLead | null {
    if (!row[0]?.trim()) return null;
    return {
        id: row[0],
        createdAt: row[1] || new Date().toISOString(),
        assessmentType: row[2] === "gap-analysis" ? "gap-analysis" : "self-assessment",
        assessmentTitle: row[3] || "",
        pagePath: row[4] || "",
        fullName: row[5] || "",
        firstName: row[6] || undefined,
        lastName: row[7] || undefined,
        email: row[8] || "",
        company: row[9] || undefined,
        industry: row[10] || undefined,
        organisationSize: row[11] || undefined,
        department: row[12] || undefined,
        existingCustomer: row[13] || undefined,
        isoStandard: row[14] || undefined,
        auditScope: row[15] || undefined,
        emailOptIn: row[16] === "TRUE" || row[16] === "true",
        emailSentAt: row[17]?.trim() ? row[17] : null,
    };
}

async function ensureTabAndHeaders(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string, tabName: string) {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const existing = meta.data.sheets?.find((sheet) => sheet.properties?.title === tabName);
    if (!existing) {
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: { requests: [{ addSheet: { properties: { title: tabName } } }] },
        });
    }
    const headerRange = `'${tabName}'!A1:R1`;
    const headerRes = await sheets.spreadsheets.values.get({ spreadsheetId, range: headerRange });
    if (!headerRes.data.values?.[0]?.[0]) {
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: headerRange,
            valueInputOption: "RAW",
            requestBody: { values: [HEADERS] },
        });
    }
}

export async function readAssessmentLeadsFromSheet(): Promise<AssessmentLead[]> {
    if (!isGoogleSheetsConfigured()) return [];
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const tabName = getTabName();
    await ensureTabAndHeaders(sheets, spreadsheetId, tabName);
    const range = `'${tabName}'!A2:R`;
    const res = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    const rows = res.data.values ?? [];
    return rows
        .map((row) => rowToLead(row as string[]))
        .filter((lead): lead is AssessmentLead => Boolean(lead))
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function appendAssessmentLeadToSheet(lead: AssessmentLead) {
    if (!isGoogleSheetsConfigured()) return false;
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const tabName = getTabName();
    await ensureTabAndHeaders(sheets, spreadsheetId, tabName);
    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `'${tabName}'!A:R`,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [leadToRow(lead)] },
    });
    return true;
}

async function getSheetId(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string, tabName: string) {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = meta.data.sheets?.find((item) => item.properties?.title === tabName);
    if (sheet?.properties?.sheetId === undefined || sheet?.properties?.sheetId === null) {
        throw new Error(`Sheet tab "${tabName}" not found.`);
    }
    return sheet.properties.sheetId;
}

export async function updateAssessmentLeadEmailSentInSheet(id: string, emailSent: boolean) {
    if (!isGoogleSheetsConfigured()) return null;
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const tabName = getTabName();
    const leads = await readAssessmentLeadsFromSheet();
    const index = leads.findIndex((lead) => lead.id === id);
    if (index === -1) throw new Error("Lead not found.");
    const emailSentAt = emailSent ? new Date().toISOString() : "";
    const rowNumber = index + 2;
    await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `'${tabName}'!R${rowNumber}`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [[emailSentAt]] },
    });
    return { ...leads[index], emailSentAt: emailSent ? emailSentAt : null };
}

export async function deleteAssessmentLeadFromSheet(id: string) {
    if (!isGoogleSheetsConfigured()) return false;
    const sheets = getSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const tabName = getTabName();
    const range = `'${tabName}'!A2:A`;
    const res = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    const rows = res.data.values ?? [];
    const rowIndex = rows.findIndex((row) => row[0] === id);
    if (rowIndex === -1) throw new Error("Lead not found.");
    const sheetId = await getSheetId(sheets, spreadsheetId, tabName);
    await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
            requests: [
                {
                    deleteDimension: {
                        range: {
                            sheetId,
                            dimension: "ROWS",
                            startIndex: rowIndex + 1,
                            endIndex: rowIndex + 2,
                        },
                    },
                },
            ],
        },
    });
    return true;
}
