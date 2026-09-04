import { google } from "googleapis";
import type { AssessmentLead, AssessmentType } from "@/types/assessment-lead";
import { isGoogleSheetsConfigured, googleSheetsNotConfiguredMessage } from "@/lib/google-sheets";

/** Dedicated spreadsheet for assessment leads (separate from contact form sheet). */
const DEFAULT_ASSESSMENT_SPREADSHEET_ID = "1J4VSaNrjbN0KnanRPd3irRqc6EDRWisn0_Fj2nWJnHc";

/** Preferred tab titles — matched with trim against live sheet tab names. */
const DEFAULT_SELF_ASSESSMENT_TAB = "Self Accessment";
const DEFAULT_GAP_ANALYSIS_TAB = "Gap Analysis";

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

function getAssessmentSpreadsheetId() {
    return (
        process.env.GOOGLE_SHEETS_ASSESSMENT_SPREADSHEET_ID?.trim() ||
        DEFAULT_ASSESSMENT_SPREADSHEET_ID
    );
}

function getSelfAssessmentTabName() {
    return process.env.GOOGLE_SHEETS_SELF_ASSESSMENT_TAB_NAME?.trim() || DEFAULT_SELF_ASSESSMENT_TAB;
}

function getGapAnalysisTabName() {
    return process.env.GOOGLE_SHEETS_GAP_ANALYSIS_TAB_NAME?.trim() || DEFAULT_GAP_ANALYSIS_TAB;
}

function getPreferredTabName(assessmentType: AssessmentType) {
    return assessmentType === "gap-analysis" ? getGapAnalysisTabName() : getSelfAssessmentTabName();
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

function rowToLead(row: string[], fallbackType?: AssessmentType): AssessmentLead | null {
    if (!row[0]?.trim()) return null;
    const typeFromRow =
        row[2] === "gap-analysis"
            ? "gap-analysis"
            : row[2] === "self-assessment"
              ? "self-assessment"
              : null;
    return {
        id: row[0],
        createdAt: row[1] || new Date().toISOString(),
        assessmentType: typeFromRow ?? fallbackType ?? "self-assessment",
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

async function listSheetTitles(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string) {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    return (meta.data.sheets ?? [])
        .map((sheet) => ({
            title: sheet.properties?.title ?? "",
            sheetId: sheet.properties?.sheetId,
        }))
        .filter((sheet) => sheet.title);
}

/** Resolve preferred name to the exact live tab title (handles trailing spaces). */
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

    const headerRange = quoteSheetRange(exactTitle, "A1:R1");
    const headerRes = await sheets.spreadsheets.values.get({ spreadsheetId, range: headerRange });
    if (!headerRes.data.values?.[0]?.[0]) {
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: headerRange,
            valueInputOption: "RAW",
            requestBody: { values: [HEADERS] },
        });
    }

    return exactTitle;
}

async function readLeadsFromTab(
    sheets: ReturnType<typeof google.sheets>,
    spreadsheetId: string,
    preferredTabName: string,
    fallbackType: AssessmentType
): Promise<AssessmentLead[]> {
    const tabName = await ensureTabAndHeaders(sheets, spreadsheetId, preferredTabName);
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: quoteSheetRange(tabName, "A2:R"),
    });
    const rows = res.data.values ?? [];
    return rows
        .map((row) => rowToLead(row as string[], fallbackType))
        .filter((lead): lead is AssessmentLead => Boolean(lead));
}

async function findLeadRow(
    sheets: ReturnType<typeof google.sheets>,
    spreadsheetId: string,
    id: string
): Promise<{ tabName: string; rowIndex: number; lead: AssessmentLead } | null> {
    for (const [preferred, fallbackType] of [
        [getSelfAssessmentTabName(), "self-assessment"],
        [getGapAnalysisTabName(), "gap-analysis"],
    ] as const) {
        const tabName = await ensureTabAndHeaders(sheets, spreadsheetId, preferred);
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: quoteSheetRange(tabName, "A2:R"),
        });
        const rows = res.data.values ?? [];
        const rowIndex = rows.findIndex((row) => row[0] === id);
        if (rowIndex === -1) continue;
        const lead = rowToLead(rows[rowIndex] as string[], fallbackType);
        if (!lead) continue;
        return { tabName, rowIndex, lead };
    }
    return null;
}

async function getNumericSheetId(
    sheets: ReturnType<typeof google.sheets>,
    spreadsheetId: string,
    tabName: string
) {
    const titles = await listSheetTitles(sheets, spreadsheetId);
    const match = titles.find((t) => t.title === tabName || t.title.trim() === tabName.trim());
    if (match?.sheetId === undefined || match?.sheetId === null) {
        throw new Error(`Sheet tab "${tabName}" not found.`);
    }
    return match.sheetId;
}

export async function readAssessmentLeadsFromSheet(): Promise<AssessmentLead[]> {
    if (!isGoogleSheetsConfigured()) return [];
    const sheets = getSheetsClient();
    const spreadsheetId = getAssessmentSpreadsheetId();

    const [selfLeads, gapLeads] = await Promise.all([
        readLeadsFromTab(sheets, spreadsheetId, getSelfAssessmentTabName(), "self-assessment"),
        readLeadsFromTab(sheets, spreadsheetId, getGapAnalysisTabName(), "gap-analysis"),
    ]);

    return [...selfLeads, ...gapLeads].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export async function appendAssessmentLeadToSheet(lead: AssessmentLead) {
    if (!isGoogleSheetsConfigured()) return false;
    const sheets = getSheetsClient();
    const spreadsheetId = getAssessmentSpreadsheetId();
    const preferred = getPreferredTabName(lead.assessmentType);
    const tabName = await ensureTabAndHeaders(sheets, spreadsheetId, preferred);
    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: quoteSheetRange(tabName, "A:R"),
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [leadToRow(lead)] },
    });
    return true;
}

export async function updateAssessmentLeadEmailSentInSheet(id: string, emailSent: boolean) {
    if (!isGoogleSheetsConfigured()) return null;
    const sheets = getSheetsClient();
    const spreadsheetId = getAssessmentSpreadsheetId();
    const found = await findLeadRow(sheets, spreadsheetId, id);
    if (!found) throw new Error("Lead not found.");

    const emailSentAt = emailSent ? new Date().toISOString() : "";
    const rowNumber = found.rowIndex + 2;
    await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: quoteSheetRange(found.tabName, `R${rowNumber}`),
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [[emailSentAt]] },
    });
    return { ...found.lead, emailSentAt: emailSent ? emailSentAt : null };
}

export async function deleteAssessmentLeadFromSheet(id: string) {
    if (!isGoogleSheetsConfigured()) return false;
    const sheets = getSheetsClient();
    const spreadsheetId = getAssessmentSpreadsheetId();
    const found = await findLeadRow(sheets, spreadsheetId, id);
    if (!found) throw new Error("Lead not found.");

    const sheetId = await getNumericSheetId(sheets, spreadsheetId, found.tabName);
    await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
            requests: [
                {
                    deleteDimension: {
                        range: {
                            sheetId,
                            dimension: "ROWS",
                            startIndex: found.rowIndex + 1,
                            endIndex: found.rowIndex + 2,
                        },
                    },
                },
            ],
        },
    });
    return true;
}

export function getAssessmentSheetsConfig() {
    return {
        spreadsheetId: getAssessmentSpreadsheetId(),
        selfAssessmentTab: getSelfAssessmentTabName(),
        gapAnalysisTab: getGapAnalysisTabName(),
    };
}
