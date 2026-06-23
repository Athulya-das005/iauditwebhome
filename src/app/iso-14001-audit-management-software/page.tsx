import type { Metadata } from "next";
import StandardsPage, { metadata as standardsMetadata } from "../standards/iso-14001-audit-management-software/page";

const canonicalUrl = "https://www.iaudit.global/standards/iso-14001-audit-management-software";

export const metadata: Metadata = {
    ...standardsMetadata,
    alternates: {
        canonical: canonicalUrl,
    },
};

export default StandardsPage;
