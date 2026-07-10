export type ChecklistLead = {
    id: string;
    createdAt: string;
    checklistName: string;
    industrySlug: string;
    industryTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    city?: string;
};

export type ChecklistLeadInput = Omit<ChecklistLead, "id" | "createdAt">;
