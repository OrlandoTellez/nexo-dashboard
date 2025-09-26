import { HeaderDashboard } from "../components/ui/HeaderDashboard";
import { MetricCard } from "../components/ui/MetricCard";
import { CriticalPatients } from "../components/ui/CriticalPatients";
import { PatientFlowSummary } from "../components/ui/PatientFlowSummary";
import { Calendar, Users, CheckCircle, TrendingUp } from "lucide-react";
import { UpcomingAppointments } from "../components/ui/UpcomingAppointments";
import { Appointment } from "../types/Appointment";
import { Patient } from "../types/Patient";

export const Dashboard = () => {
  const todayMetrics = {
    appointments: { total: 45, completed: 28 },
    patients: { inQueue: 15, attended: 32 },
    satisfaction: "94%"
  };

  const upcomingAppointments: Appointment[] = [
    { id: 1, time: "09:30", patient: "María González", type: "Consulta General", status: "pending" },
    { id: 2, time: "10:00", patient: "Carlos Mendoza", type: "Cardiología", status: "in-progress" },
  ];

  const criticalPatients: Patient[] = [
    { id: 1, name: "Pedro Martínez", condition: "Hipertensión Severa", room: "203", priority: "Alta" },
    { id: 2, name: "Lucía Herrera", condition: "Diabetes Descompensada", room: "156", priority: "Media" },
  ];

  const currentTime = new Date().toLocaleTimeString("es-NI", { hour: "2-digit", minute: "2-digit" });
  const currentDate = new Date().toLocaleDateString("es-NI", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="space-y-6">
      <HeaderDashboard currentDate={currentDate} currentTime={currentTime} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard icon={Calendar} title="Citas del Día" value={todayMetrics.appointments.total} description={`${todayMetrics.appointments.completed} completadas`} change="+12%" color="text-medical-blue"/>
        <MetricCard icon={Users} title="Pacientes en Fila" value={todayMetrics.patients.inQueue} description="Tiempo promedio: 23min" change="-5%" color="text-yellow-600"/>
        <MetricCard icon={CheckCircle} title="Pacientes Atendidos" value={todayMetrics.patients.attended} description="Hoy hasta ahora" change="+8%" color="text-green-600"/>
        <MetricCard icon={TrendingUp} title="Satisfacción" value={todayMetrics.satisfaction} description="Promedio mensual" change="+2%" color="text-green-600"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingAppointments appointments={upcomingAppointments} />
        <CriticalPatients patients={criticalPatients} />
      </div>
      <PatientFlowSummary waiting={15} inConsultation={8} attended={32} critical={3} />
    </div>
  );
};
