export type AssessmentType = "self-assessment" | "gap-analysis";

export type AssessmentLead = {
    id: string;
    createdAt: string;
    assessmentType: AssessmentType;
    assessmentTitle: string;
    pagePath: string;
    fullName: string;
    firstName?: string;
    lastName?: string;
    email: string;
    company?: string;
    industry?: string;
    organisationSize?: string;
    department?: string;
    existingCustomer?: string;
    isoStandard?: string;
    auditScope?: string;
    emailOptIn?: boolean;
    /** True when the user verified ownership of the email via OTP before starting */
    emailVerified?: boolean;
    /** ISO timestamp when the report was emailed manually; unset = not sent yet */
    emailSentAt?: string | null;
};
