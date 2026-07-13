import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import {
    addChecklistLead,
    deleteChecklistLead,
    readChecklistLeads,
    setChecklistLeadEmailSent,
} from "@/lib/checklist-leads-store";
import type { ChecklistLead } from "@/types/checklist-lead";

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const leads = await readChecklistLeads();
    return NextResponse.json({ leads });
}

export async function DELETE(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    try {
        const body = (await request.json()) as { id?: string };
        const id = body.id?.trim();
        if (!id) {
            return NextResponse.json({ error: "Lead id is required." }, { status: 400 });
        }

        await deleteChecklistLead(id);
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
        if (!id) {
            return NextResponse.json({ error: "Lead id is required." }, { status: 400 });
        }
        if (typeof body.emailSent !== "boolean") {
            return NextResponse.json({ error: "emailSent must be true or false." }, { status: 400 });
        }

        const result = await setChecklistLeadEmailSent(id, body.emailSent);
        return NextResponse.json({ ok: true, lead: result.lead });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to update lead.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<ChecklistLead> & {
            fullName?: string;
            firstName?: string;
            lastName?: string;
        };

        const fullName =
            body.fullName?.trim() ||
            [body.firstName?.trim(), body.lastName?.trim()].filter(Boolean).join(" ").trim();
        const email = body.email?.trim().toLowerCase() ?? "";
        const checklistName = body.checklistName?.trim() ?? "";
        const industrySlug = body.industrySlug?.trim() ?? "";
        const industryTitle = body.industryTitle?.trim() ?? "";

        if (!fullName || !email || !checklistName) {
            return NextResponse.json(
                { error: "Please fill in your full name and work email." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        const lead: ChecklistLead = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            createdAt: new Date().toISOString(),
            checklistName,
            industrySlug,
            industryTitle,
            fullName,
            email,
        };

        const result = await addChecklistLead(lead);

        return NextResponse.json({
            ok: true,
            lead: result.lead,
            publishedToGitHub: result.publishedToGitHub,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to save your details.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
