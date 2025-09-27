
import { useState } from "react";
import { AppointmentsHeader } from "../components/ui/appointments/AppointmentsHeader";
import { Stats } from "../components/ui/appointments/Stats";
import { Filters } from "../components/ui/appointments/Filters";
import { AppointmentTable } from "../components/ui/appointments/AppointmentTable";
import { AppointmentModal } from "../components/modals/AppointmentModal";
import { appointments, statusConfig } from "../constants/appointmentData";
import { Calendar, Clock, Check, User } from "lucide-react";


export const Appointments = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesFilter = filter === "all" || appointment.status === filter;
    const matchesSearch =
      appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.cedula.includes(searchTerm) ||
      appointment.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });


  const handleNewAppointment = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <AppointmentsHeader onNewAppointment={handleNewAppointment} />
      {
        openModal && <AppointmentModal open={openModal} onOpenChange={handleCloseModal} mode={"create"} />
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 pt-6">
        <Stats 
        title="Citas del Día"
        total={12}
        icon={<Calendar className="h-5 w-5 text-white" />}
        color="#007DE4"
        />

        <Stats 
        title="Pacientes en Fila"
        total={12}
        icon={<User className="h-5 w-5 text-white" />}
        color="#E55F5C"
        />

        <Stats 
        title="Citas Pendientes"
        total={12}
        icon={<Clock className="h-5 w-5 text-white" />}
        color="#99C81899"
        />

        <Stats 
        title="Citas Confirmadas"
        total={12}
        icon={<Check className="h-5 w-5 text-white" />}
        color="#FFBC3A"
        />
      </div>
      <div className="pb-6">

        <Filters
          filter={filter}
          searchTerm={searchTerm}
          onFilterChange={setFilter}
          onSearchChange={setSearchTerm}
        />
      </div>
      <AppointmentTable appointments={filteredAppointments} statusConfig={statusConfig} />
    </div>
  );
};
