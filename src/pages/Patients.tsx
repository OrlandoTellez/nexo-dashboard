import { useState, useEffect } from "react";
import { PatientHeader } from "../components/ui/patients/PatientHeader";
import { Filters } from "../components/ui/patients/Filters";
import { Stats } from "../components/ui/appointments/Stats";
import { PatientTable } from "../components/ui/patients/PatientTable";
import { PatientModal } from "../components/modals/PatientModal";
import { Users, Activity, AlertTriangle, Heart } from "lucide-react";
import { Patient } from "../types/Patient";

export const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleNewPatient = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/patients`) 
      .then(res => res.json())
      .then((data: Patient[]) => {
        console.log(data);
        setPatients(data);
      });
  }, []);

  const filteredPatients = patients.filter((patient) => {
    const matchesFilter = filter === "all" || patient.status === filter;
    const matchesSearch =
      patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.identity_number.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <PatientHeader onNewPatient={handleNewPatient} />
      {openModal && <PatientModal open={openModal} onOpenChange={handleCloseModal} mode="create" />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 pt-6">
        <Stats title="Total Pacientes" total={patients.length} icon={<Users className="h-5 w-5" />} color="#007DE4" />
        <Stats title="Activos" total={patients.filter(p => p.status === "active").length} icon={<Activity className="h-5 w-5" />} color="#E55F5C" />
        <Stats title="Críticos" total={patients.filter(p => p.priority && p.priority > 1).length} icon={<AlertTriangle className="h-5 w-5" />} color="#99C81899" />
        <Stats title="Inactivos" total={patients.filter(p => p.status !== "active").length} icon={<Heart className="h-5 w-5 text-black" />} color="#F1F1F1" />
      </div>

      <div className="pb-6">
        <Filters filter={filter} searchTerm={searchTerm} onFilterChange={setFilter} onSearchChange={setSearchTerm} />
      </div>

      <PatientTable patients={filteredPatients} statusConfig={{ active: "active", inactive: "inactive" }} priorityConfig={{ 0: "Normal", 1: "Media", 2: "Alta" }} />
    </div>
  );
};
