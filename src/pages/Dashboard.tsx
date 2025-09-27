import { HeaderDashboard } from "../components/ui/dashboard/HeaderDashboard";
import { MetricCard } from "../components/ui/dashboard/MetricCard";
import { CriticalPatients } from "../components/ui/dashboard/CriticalPatients";
import { PatientFlowSummary } from "../components/ui/dashboard/PatientFlowSummary";
import { Calendar, Users, CheckCircle, TrendingUp } from "lucide-react";
import { UpcomingAppointments } from "../components/ui/dashboard/UpcomingAppointments";
import { useState } from "react";
import { AppointmentModal } from "../components/modals/AppointmentModal";
import { todayMetrics, upcomingAppointments, criticalPatients } from "../constants/metricsData";
import { currentTime, currentDate } from "../lib/utils";

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleNewAppointment = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div >
      <HeaderDashboard currentDate={currentDate} currentTime={currentTime} onNewAppointment={handleNewAppointment} />
      {
        openModal && <AppointmentModal open={openModal} onOpenChange={handleCloseModal} mode={"create"} />
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 pt-6">
        <MetricCard type="appointments" icon={Calendar} title="Citas del Día" value={todayMetrics.appointments.total} description={`${todayMetrics.appointments.completed} completadas`} change="+12%" color="text-[#007DE4]" />
        <MetricCard type="patients" icon={Users} title="Pacientes en Fila" value={todayMetrics.patients.inQueue} description="Tiempo promedio: 23min" change="-5%" color="text-[#E55F5C]" />
        <MetricCard type="attended" icon={CheckCircle} title="Pacientes Atendidos" value={todayMetrics.patients.attended} description="Hoy hasta ahora" change="+8%" color="text-green-600" />
        <MetricCard type="satisfaction" icon={TrendingUp} title="Satisfacción" value={todayMetrics.satisfaction} description="Promedio mensual" change="+2%" color="text-[#FFBC3A]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        <UpcomingAppointments appointments={upcomingAppointments} />
        <CriticalPatients patients={criticalPatients} />
      </div>
      <PatientFlowSummary waiting={15} inConsultation={8} attended={32} critical={3} />
    </div>
  );
};
