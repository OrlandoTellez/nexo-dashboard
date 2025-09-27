import { Appointment } from "../types/Appointment";
import { Patient } from "../types/Patient";

export const todayMetrics = {
    appointments: { total: 45, completed: 28 },
    patients: { inQueue: 15, attended: 32 },
    satisfaction: "94%"
  };

export const upcomingAppointments: Appointment[] = [
    { id: 1, time: "09:30", patient: "María González", type: "Consulta General", status: "pending" },
    { id: 2, time: "10:00", patient: "Carlos Mendoza", type: "Cardiología", status: "in-progress" },
  ];

export const criticalPatients: Patient[] = [
    { id: 1, name: "Pedro Martínez", condition: "Hipertensión Severa", room: "203", priority: "Alta" },
    { id: 2, name: "Lucía Herrera", condition: "Diabetes Descompensada", room: "156", priority: "Media" },
  ];
