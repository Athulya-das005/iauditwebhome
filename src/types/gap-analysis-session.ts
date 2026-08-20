import type { IsoStandardValue } from "@/data/assessment-form-options";

export type GapAnalysisSession = {
    firstName: string;
    lastName: string;
    email: string;
    organisation: string;
    industry: string;
    organisationSize: string;
    department: string;
    existingCustomer: string;
    isoStandard: IsoStandardValue;
    auditScope: string;
    emailOptIn: boolean;
};
