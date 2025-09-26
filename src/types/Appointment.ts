export interface Appointment {
  id: number;
  time: string;
  patient: string;
  type: string;
  status: "pending" | "in-progress";
}