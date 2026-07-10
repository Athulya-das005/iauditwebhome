import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { addChecklistLead, readChecklistLeads } from "@/lib/checklist-leads-store";
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

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<ChecklistLead>;

        const firstName = body.firstName?.trim() ?? "";
        const lastName = body.lastName?.trim() ?? "";
        const email = body.email?.trim().toLowerCase() ?? "";
        const phone = body.phone?.trim() ?? "";
        const company = body.company?.trim() ?? "";
        const city = body.city?.trim() ?? "";
        const checklistName = body.checklistName?.trim() ?? "";
        const industrySlug = body.industrySlug?.trim() ?? "";
        const industryTitle = body.industryTitle?.trim() ?? "";

        if (!firstName || !lastName || !email || !phone || !company || !checklistName) {
            return NextResponse.json(
                { error: "Please fill in all required fields." },
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
            firstName,
            lastName,
            email,
            phone,
            company,
            ...(city ? { city } : {}),
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
