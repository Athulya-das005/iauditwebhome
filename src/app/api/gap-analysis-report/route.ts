import { NextResponse } from "next/server";
import { buildGapReportData, reportFileName } from "@/lib/gap-report-data";
import { buildGapPdf } from "@/lib/gap-report-pdf";
import { buildGapDocx } from "@/lib/gap-report-docx";
import { sendGapReportEmail } from "@/lib/send-gap-report-email";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";
import type { GapFinding } from "@/data/gap-analysis-clauses";

type Payload = {
    format?: "pdf" | "word";
    sendEmail?: boolean;
    session?: GapAnalysisSession;
    clauses?: { label: string; questions: { text: string; finding: GapFinding | ""; actionPlan: string; evidence: string }[] }[];
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Payload;
        if (body.format !== "pdf" && body.format !== "word") {
            return NextResponse.json({ error: "Please choose PDF or Word." }, { status: 400 });
        }
        if (!body.session?.email || !body.clauses?.length) {
            return NextResponse.json({ error: "Missing report details." }, { status: 400 });
        }

        const data = buildGapReportData(body.session, body.clauses);
        const filename = reportFileName(data, body.format);
        const content =
            body.format === "pdf" ? await buildGapPdf(data) : Buffer.from(await buildGapDocx(data));
        const contentType =
            body.format === "pdf"
                ? "application/pdf"
                : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

        const fileBase64 = content.toString("base64");
        let emailed = false;
        let warning = "";

        if (body.sendEmail !== false) {
            try {
                await sendGapReportEmail({ data, filename, content, contentType });
                emailed = true;
            } catch (error) {
                warning = error instanceof Error ? error.message : "Unable to send email.";
                console.error("Gap analysis report email failed:", warning);
            }
        }

        return NextResponse.json({
            ok: true,
            emailed,
            filename,
            contentType,
            fileBase64,
            warning: warning || undefined,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to build the report.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
