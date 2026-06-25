import { retailIndustryPageSchema } from "@/data/industrySchemas/retailIndustryPageSchema";
import { transportLogisticsIndustryPageSchema } from "@/data/industrySchemas/transportLogisticsIndustryPageSchema";
import { constructionIndustryPageSchema } from "@/data/industrySchemas/constructionIndustryPageSchema";
import { manufacturingIndustryPageSchema } from "@/data/industrySchemas/manufacturingIndustryPageSchema";
import { healthcareIndustryPageSchema } from "@/data/industrySchemas/healthcareIndustryPageSchema";
import { foodAndBeverageIndustryPageSchema } from "@/data/industrySchemas/foodAndBeverageIndustryPageSchema";
import { hospitalityIndustryPageSchema } from "@/data/industrySchemas/hospitalityIndustryPageSchema";
import { facilitiesManagementIndustryPageSchema } from "@/data/industrySchemas/facilitiesManagementIndustryPageSchema";
import { healthAndSafetyIndustryPageSchema } from "@/data/industrySchemas/healthAndSafetyIndustryPageSchema";
import { miningIndustryPageSchema } from "@/data/industrySchemas/miningIndustryPageSchema";
import { pharmaceuticalIndustryPageSchema } from "@/data/industrySchemas/pharmaceuticalIndustryPageSchema";
import { aerospaceIndustryPageSchema } from "@/data/industrySchemas/aerospaceIndustryPageSchema";
import { basicMetalsFabricationIndustryPageSchema } from "@/data/industrySchemas/basicMetalsFabricationIndustryPageSchema";
import { machineryEquipmentIndustryPageSchema } from "@/data/industrySchemas/machineryEquipmentIndustryPageSchema";
import { electricalOpticalEquipmentIndustryPageSchema } from "@/data/industrySchemas/electricalOpticalEquipmentIndustryPageSchema";
import { engineeringIndustryPageSchema } from "@/data/industrySchemas/engineeringIndustryPageSchema";

const industrySchemaBySlug: Record<string, object> = {
    "retail-iso-audit-software": retailIndustryPageSchema,
    "transport-and-logistics-iso-audit-software": transportLogisticsIndustryPageSchema,
    "construction-iso-audit-software": constructionIndustryPageSchema,
    "manufacturing-iso-audit-software": manufacturingIndustryPageSchema,
    "healthcare-compliance-software": healthcareIndustryPageSchema,
    "food-and-beverage-iso-audit-software": foodAndBeverageIndustryPageSchema,
    "hospitality-iso-audit-software": hospitalityIndustryPageSchema,
    "facilities-management-iso-audit-software": facilitiesManagementIndustryPageSchema,
    "health-and-safety-iso-audit-software": healthAndSafetyIndustryPageSchema,
    "mining-compliance-software": miningIndustryPageSchema,
    "pharmaceutical-compliance-audit-software": pharmaceuticalIndustryPageSchema,
    "aerospace-iso-audit-software": aerospaceIndustryPageSchema,
    "basic-metals-and-fabrication-iso-audit-software": basicMetalsFabricationIndustryPageSchema,
    "machinery-and-equipment-iso-audit-software": machineryEquipmentIndustryPageSchema,
    "electrical-and-optical-equipment-iso-audit-software": electricalOpticalEquipmentIndustryPageSchema,
    "engineering-iso-audit-software": engineeringIndustryPageSchema,
};

export function getIndustryPageSchema(slug: string): object | undefined {
    return industrySchemaBySlug[slug];
}
