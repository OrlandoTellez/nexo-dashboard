
import { useState } from "react";
import { PatientHeader } from "../components/ui/patients/PatientHeader";
import { Stats } from "../components/ui/patients/Stats";
import { Filters } from "../components/ui/patients/Filters";
import { PatientTable } from "../components/ui/patients/PatientTable";

const patients = [
  { id: 1, name: "María Elena González Ruiz", cedula: "001-123456-0001A", age: 45, gender: "Femenino", phone: "8765-4321", address: "Barrio Central, Managua", bloodType: "O+", status: "active", lastVisit: "2024-01-15", condition: "Hipertensión", priority: "media", doctor: "Dr. Roberto Pérez" },
  { id: 2, name: "Carlos Antonio Mendoza López", cedula: "001-234567-0002B", age: 58, gender: "Masculino", phone: "8876-5432", address: "Reparto San Juan, León", bloodType: "A+", status: "critical", lastVisit: "2024-01-18", condition: "Cardiopatía Isquémica", priority: "alta", doctor: "Dra. Ana Martínez" },
  { id: 3, name: "Ana Patricia Pérez Morales", cedula: "001-345678-0003C", age: 8, gender: "Femenino", phone: "8987-6543", address: "Colonia Centroamérica, Granada", bloodType: "B+", status: "active", lastVisit: "2024-01-10", condition: "Control de Crecimiento", priority: "baja", doctor: "Dr. Luis Hernández" },
  { id: 4, name: "José Miguel Rivera Silva", cedula: "001-456789-0004D", age: 34, gender: "Masculino", phone: "8098-7654", address: "Bo. San Sebastián, Masaya", bloodType: "AB+", status: "active", lastVisit: "2024-01-16", condition: "Fractura de Tibia", priority: "media", doctor: "Dr. Carmen López" },
  { id: 5, name: "Esperanza del Carmen Silva", cedula: "001-567890-0005E", age: 29, gender: "Femenino", phone: "8109-8765", address: "Reparto Schick, Managua", bloodType: "O-", status: "inactive", lastVisit: "2024-01-05", condition: "Control Prenatal", priority: "baja", doctor: "Dra. Patricia Morales" },
];

const statusConfig = {
  active: "bg-green-100 text-green-700",
  critical: "bg-red-100 text-red-700",
  inactive: "bg-gray-100 text-gray-700",
};

const priorityConfig = {
  alta: "bg-red-100 text-red-700",
  media: "bg-yellow-100 text-yellow-700",
  baja: "bg-green-100 text-green-700",
};

export const Patients = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) => {
    const matchesFilter = filter === "all" || patient.status === filter;
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.cedula.includes(searchTerm) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = patients.reduce(
    (acc, p) => {
      acc.total++;
      acc[p.status] = (acc[p.status] || 0) + 1;
      return acc;
    },
    { total: 0, active: 0, critical: 0, inactive: 0 }
  );

  return (
    <div className="space-y-6">
      <PatientHeader />
      <Stats stats={stats} />
      <Filters
        filter={filter}
        searchTerm={searchTerm}
        onFilterChange={setFilter}
        onSearchChange={setSearchTerm}
      />
      <PatientTable patients={filteredPatients} statusConfig={statusConfig} priorityConfig={priorityConfig} />
    </div>
  );
};
