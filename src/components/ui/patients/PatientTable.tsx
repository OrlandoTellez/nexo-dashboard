import { Row } from "./Row";

interface Patient {
  id: number;
  name: string;
  cedula: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  bloodType: string;
  condition: string;
  priority: string;
  status: string;
  lastVisit: string;
  doctor: string;
}

interface Props {
  patients: Patient[];
  statusConfig: Record<string, string>;
  priorityConfig: Record<string, string>;
}

export const PatientTable = ({ patients, statusConfig, priorityConfig }: Props) => (
  <div className="bg-white shadow rounded-lg overflow-x-auto">
    <div className="p-4 border-b">
      <h2 className="font-semibold text-lg">Registro de Pacientes</h2>
      <p className="text-sm text-gray-500">{patients.length} paciente(s) encontrado(s)</p>
    </div>
    <table className="min-w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left font-medium">Paciente</th>
          <th className="p-3 text-left font-medium">Información</th>
          <th className="p-3 text-left font-medium">Condición</th>
          <th className="p-3 text-left font-medium">Prioridad</th>
          <th className="p-3 text-left font-medium">Estado</th>
          <th className="p-3 text-left font-medium">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {patients.map(p => <Row key={p.id} patient={p} statusConfig={statusConfig} priorityConfig={priorityConfig} />)}
      </tbody>
    </table>
  </div>
);
