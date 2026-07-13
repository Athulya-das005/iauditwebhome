export type ChecklistLead = {
    id: string;
    createdAt: string;
    checklistName: string;
    industrySlug: string;
    industryTitle: string;
    fullName: string;
    email: string;
    /** ISO timestamp when the checklist was emailed manually; unset = not sent yet */
    emailSentAt?: string | null;
    /** Legacy fields kept for older saved leads */
    firstName?: string;
    lastName?: string;
    phone?: string;
    company?: string;
    city?: string;
};

export type ChecklistLeadInput = Omit<ChecklistLead, "id" | "createdAt">;
