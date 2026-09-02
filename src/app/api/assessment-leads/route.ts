import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import {
    addAssessmentLead,
    deleteAssessmentLead,
    readAssessmentLeads,
    setAssessmentLeadEmailSent,
} from "@/lib/assessment-leads-store";
import type { AssessmentLead, AssessmentType } from "@/types/assessment-lead";

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const allowedTypes: AssessmentType[] = ["self-assessment", "gap-analysis"];

export async function GET() {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    const leads = await readAssessmentLeads();
    return NextResponse.json({ leads });
}

export async function DELETE(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    try {
        const body = (await request.json()) as { id?: string };
        const id = body.id?.trim();
        if (!id) return NextResponse.json({ error: "Lead id is required." }, { status: 400 });
        await deleteAssessmentLead(id);
        return NextResponse.json({ ok: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to delete lead.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    try {
        const body = (await request.json()) as { id?: string; emailSent?: boolean };
        const id = body.id?.trim();
        if (!id) return NextResponse.json({ error: "Lead id is required." }, { status: 400 });
        if (typeof body.emailSent !== "boolean") {
            return NextResponse.json({ error: "emailSent must be true or false." }, { status: 400 });
        }
        const result = await setAssessmentLeadEmailSent(id, body.emailSent);
        return NextResponse.json({ ok: true, lead: result.lead });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to update lead.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<AssessmentLead>;
        const email = body.email?.trim().toLowerCase() ?? "";
        const fullName =
            body.fullName?.trim() ||
            email.split("@")[0]?.replace(/[._-]+/g, " ").trim() ||
            "Assessment user";
        const assessmentType = body.assessmentType;
        const assessmentTitle = body.assessmentTitle?.trim() ?? "";
        const pagePath = body.pagePath?.trim() ?? "";
        const company = body.company?.trim() ?? "";
        const firstName = body.firstName?.trim() ?? "";
        const lastName = body.lastName?.trim() ?? "";
        const industry = body.industry?.trim() ?? "";
        const organisationSize = body.organisationSize?.trim() ?? "";
        const department = body.department?.trim() ?? "";
        const existingCustomer = body.existingCustomer?.trim() ?? "";
        const isoStandard = body.isoStandard?.trim() ?? "";
        const auditScope = body.auditScope?.trim() ?? "";
        const emailOptIn = Boolean(body.emailOptIn);

        if (!email || !assessmentType || !assessmentTitle) {
            return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
        }
        if (!allowedTypes.includes(assessmentType)) {
            return NextResponse.json({ error: "Invalid assessment type." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        const lead: AssessmentLead = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            createdAt: new Date().toISOString(),
            assessmentType,
            assessmentTitle,
            pagePath,
            fullName,
            firstName,
            lastName,
            email,
            company,
            industry,
            organisationSize,
            department,
            existingCustomer,
            isoStandard,
            auditScope,
            emailOptIn,
        };

        const result = await addAssessmentLead(lead);
        if (process.env.VERCEL && !result.saved) {
            return NextResponse.json(
                {
                    error:
                        "We could not save your details right now. Please check Google Sheets / GitHub admin settings and try again.",
                },
                { status: 503 }
            );
        }
        return NextResponse.json({ ok: true, lead: result.lead });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to save your details.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
