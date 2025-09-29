interface Patientf {
  id: number;
  name: string;
  condition: string;
  room: string;
  priority: "Alta" | "Media";
}

export interface Patient {
  id_patient: number;
  first_name: string;
  second_name?: string;
  first_lastname: string;
  second_lastname?: string;
  identity_number: string;
  birthdate: string;
  gender?: string;
  blood_type?: string;
  phone?: string;
  email?: string;
  address?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  allergies?: string;
  current_medications?: string;
  medical_background?: string;
  priority?: number;
  status?: string;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}
