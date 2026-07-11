export interface CRMRecord {
  created_at: string;
  name: string;
  email: string;
  country_code: string;
  mobile_without_country_code: string;
  company: string;
  city: string;
  state: string;
  country: string;
  lead_owner: string | null;
  crm_status: string;
  crm_note: string;
  data_source: string;
  possession_time: string | null;
  description: string | null;
}

export interface ImportResponse {
  success: boolean;
  totalRows: number;
  imported: number;
  skipped: number;
  records: CRMRecord[];
}