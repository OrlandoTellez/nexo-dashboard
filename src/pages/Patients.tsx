import { useState } from "react";
import { PatientHeader } from "../components/ui/patients/PatientHeader";
import { Filters } from "../components/ui/patients/Filters";
import { Stats } from "../components/ui/appointments/Stats";
import { PatientTable } from "../components/ui/patients/PatientTable";
import { patients, statusConfig, priorityConfig } from "../constants/patientsData";
import { PatientModal } from "../components/modals/PatientModal";
import { Users, Activity, AlertTriangle, Heart } from "lucide-react";

export const Patients = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);


  const handleNewAppointment = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const filteredPatients = patients.filter((patient) => {
    const matchesFilter = filter === "all" || patient.status === filter;
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.cedula.includes(searchTerm) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });


  return (
    <div>
      <PatientHeader onNewPatient={handleNewAppointment} />
      {
        openModal && <PatientModal open={openModal} onOpenChange={handleCloseModal} mode={"create"} />
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 pt-6">
        <Stats 
          title="Total Pacientes"
          total={21}
          icon={<Users className="h-5 w-5" />}
          color="#007DE4"
        />

        <Stats 
          title="Activos"
          total={12}
          icon={<Activity className="h-5 w-5" />}
          color="#E55F5C"
        />

        <Stats 
          title="Críticos"
          total={12}
          icon={<AlertTriangle className="h-5 w-5" />}
          color="#99C81899" 
        />

        <Stats 
          title="Inactivos"
          total={12}
          icon={<Heart className="h-5 w-5 text-black" />}
          color="#F1F1F1"
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
      <PatientTable patients={filteredPatients} statusConfig={statusConfig} priorityConfig={priorityConfig} />
    </div>
  );
};
