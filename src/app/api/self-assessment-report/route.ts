import { NextResponse } from "next/server";
import { buildSelfReportData, selfReportFileName } from "@/lib/self-report-data";
import { buildSelfPdf } from "@/lib/self-report-pdf";
import { buildSelfDocx } from "@/lib/self-report-docx";
import { sendGapReportEmail } from "@/lib/send-gap-report-email";
import { maturityForPercent, readinessForNcCount } from "@/lib/gap-report-data";
import type { GapAnalysisSession } from "@/types/gap-analysis-session";
import type { SelfAnswer } from "@/data/self-assessment-clauses";

export const maxDuration = 60;

type Payload = {
    format?: "pdf" | "word";
    sendEmail?: boolean;
    session?: GapAnalysisSession;
    clauses?: { label: string; questions: { text: string; answer: SelfAnswer; notes?: string }[] }[];
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

        const data = buildSelfReportData(body.session, body.clauses);
        const filename = selfReportFileName(data, body.format);
        const content = body.format === "pdf" ? await buildSelfPdf(data) : Buffer.from(await buildSelfDocx(data));
        const contentType =
            body.format === "pdf"
                ? "application/pdf"
                : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

        const fileBase64 = content.toString("base64");
        let emailed = false;
        let warning = "";

        if (body.sendEmail !== false) {
            try {
                const selfPercent = data.total === 0 ? 0 : Math.round((data.yes / data.total) * 100);
                await sendGapReportEmail({
                    data: {
                        session: data.session,
                        auditDate: data.auditDate,
                        overall: data.yes,
                        status: data.yes >= 44 ? "Pass" : "Fail",
                        comply: data.yes,
                        ofi: 0,
                        nc: data.no,
                        totalQuestions: data.total,
                        maturity: maturityForPercent(selfPercent),
                        readiness: readinessForNcCount(data.no),
                        clauses: data.clauses.map((clause) => ({
                            label: clause.label,
                            total: clause.total,
                            comply: clause.yes,
                            ofi: 0,
                            nc: clause.no,
                            percent: clause.percent,
                        })),
                        questions: [],
                    },
                    filename,
                    content,
                    contentType,
                    kind: "self-assessment",
                });
                emailed = true;
            } catch (error) {
                warning = error instanceof Error ? error.message : "Unable to send email.";
                console.error("Self assessment report email failed:", warning);
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
