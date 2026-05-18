export type DashboardSummary = {
  totalLeads: number;
  newLeads: number;
  contactedLeads: number;
  convertedLeads: number;
  lostLeads: number;
  duplicateLeads: number;
  hotLeads: number;
  warmLeads: number;
  coldLeads: number;
};

export type ChartData = {
  label: string;
  value: number;
};