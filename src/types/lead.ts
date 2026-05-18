export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "REQUIREMENT_DISCUSSED"
  | "QUOTATION_SENT"
  | "CONVERTED"
  | "LOST"
  | "INVALID"
  | "DUPLICATE"
  | "FUTURE_REQUIREMENT";

export type LeadPriority = "HOT" | "WARM" | "COLD";

export type RequirementType =
  | "LAPTOP_RENTAL"
  | "DESKTOP_RENTAL"
  | "SERVER_RENTAL"
  | "WORKSTATION_RENTAL"
  | "BULK_IT_RENTAL"
  | "CORPORATE_LEASING"
  | "EVENT_IT_SETUP"
  | "CUSTOMER_ONBOARDING"
  | "OTHER";

export type PreferredBrand =
  | "ANY_BRAND"
  | "DELL"
  | "HP"
  | "LENOVO"
  | "APPLE"
  | "ACER"
  | "ASUS"
  | "OTHER";

export type Lead = {
  id: number;
  leadId: string;
  fullName: string;
  companyName: string;
  mobileNumber: string;
  workEmail: string;
  city: string;
  requirementType: RequirementType;
  preferredBrand: PreferredBrand;
  numberOfDevices: number;
  rentalDuration: string;
  requiredStartDate: string;
  decisionTimeline: string;
  urgentRequirement: boolean;
  requirementMessage: string;
  leadStatus: LeadStatus;
  leadPriority: LeadPriority;
  leadSource: string;
  remarks: string | null;
  createdAt: string;
  updatedAt: string;
};