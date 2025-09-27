
import { useState } from "react";
import { AppointmentsHeader } from "../components/ui/appointments/AppointmentsHeader";
import { Stats } from "../components/ui/appointments/Stats";
import { Filters } from "../components/ui/appointments/Filters";
import { AppointmentTable } from "../components/ui/appointments/AppointmentTable";
import { AppointmentModal } from "../components/modals/AppointmentModal";
import { appointments, statusConfig } from "../constants/appointmentData";

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

  const stats = appointments.reduce(
    (acc, apt) => {
      acc.total++;
      acc[apt.status] = (acc[apt.status] || 0) + 1;
      return acc;
    },
    { total: 0, pending: 0, confirmed: 0, "in-progress": 0, completed: 0 }
  );

  return (
    <div>
      <AppointmentsHeader onNewAppointment={handleNewAppointment} />
      {
        openModal && <AppointmentModal open={openModal} onOpenChange={handleCloseModal} mode={"create"} />
      }
      <Stats stats={stats} />
      <Filters
        filter={filter}
        searchTerm={searchTerm}
        onFilterChange={setFilter}
        onSearchChange={setSearchTerm}
      />
      <AppointmentTable appointments={filteredAppointments} statusConfig={statusConfig} />
    </div>
  );
};
