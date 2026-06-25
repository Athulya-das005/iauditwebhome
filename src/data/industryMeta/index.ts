import type { Metadata } from "next";
import { retailIndustryMetadata } from "@/data/industryMeta/retailIndustryMeta";
import { transportLogisticsIndustryMetadata } from "@/data/industryMeta/transportLogisticsIndustryMeta";
import { constructionIndustryMetadata } from "@/data/industryMeta/constructionIndustryMeta";
import { manufacturingIndustryMetadata } from "@/data/industryMeta/manufacturingIndustryMeta";
import { healthcareIndustryMetadata } from "@/data/industryMeta/healthcareIndustryMeta";
import { foodAndBeverageIndustryMetadata } from "@/data/industryMeta/foodAndBeverageIndustryMeta";
import { hospitalityIndustryMetadata } from "@/data/industryMeta/hospitalityIndustryMeta";
import { facilitiesManagementIndustryMetadata } from "@/data/industryMeta/facilitiesManagementIndustryMeta";
import { healthAndSafetyIndustryMetadata } from "@/data/industryMeta/healthAndSafetyIndustryMeta";
import { miningIndustryMetadata } from "@/data/industryMeta/miningIndustryMeta";
import { pharmaceuticalIndustryMetadata } from "@/data/industryMeta/pharmaceuticalIndustryMeta";
import { aerospaceIndustryMetadata } from "@/data/industryMeta/aerospaceIndustryMeta";
import { basicMetalsFabricationIndustryMetadata } from "@/data/industryMeta/basicMetalsFabricationIndustryMeta";
import { machineryEquipmentIndustryMetadata } from "@/data/industryMeta/machineryEquipmentIndustryMeta";
import { electricalOpticalEquipmentIndustryMetadata } from "@/data/industryMeta/electricalOpticalEquipmentIndustryMeta";
import { engineeringIndustryMetadata } from "@/data/industryMeta/engineeringIndustryMeta";

const industryMetadataBySlug: Record<string, Metadata> = {
    "retail-iso-audit-software": retailIndustryMetadata,
    "transport-and-logistics-iso-audit-software": transportLogisticsIndustryMetadata,
    "construction-iso-audit-software": constructionIndustryMetadata,
    "manufacturing-iso-audit-software": manufacturingIndustryMetadata,
    "healthcare-compliance-software": healthcareIndustryMetadata,
    "food-and-beverage-iso-audit-software": foodAndBeverageIndustryMetadata,
    "hospitality-iso-audit-software": hospitalityIndustryMetadata,
    "facilities-management-iso-audit-software": facilitiesManagementIndustryMetadata,
    "health-and-safety-iso-audit-software": healthAndSafetyIndustryMetadata,
    "mining-compliance-software": miningIndustryMetadata,
    "pharmaceutical-compliance-audit-software": pharmaceuticalIndustryMetadata,
    "aerospace-iso-audit-software": aerospaceIndustryMetadata,
    "basic-metals-and-fabrication-iso-audit-software": basicMetalsFabricationIndustryMetadata,
    "machinery-and-equipment-iso-audit-software": machineryEquipmentIndustryMetadata,
    "electrical-and-optical-equipment-iso-audit-software": electricalOpticalEquipmentIndustryMetadata,
    "engineering-iso-audit-software": engineeringIndustryMetadata,
};

export function getIndustryPageMetadata(slug: string): Metadata | undefined {
    return industryMetadataBySlug[slug];
}
