
import { useState } from "react";
import { PatientHeader } from "../components/ui/patients/PatientHeader";
import { Stats } from "../components/ui/patients/Stats";
import { Filters } from "../components/ui/patients/Filters";
import { PatientTable } from "../components/ui/patients/PatientTable";
import { patients, statusConfig, priorityConfig } from "../constants/patientsData";

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
