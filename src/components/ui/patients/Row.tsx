import { FileText, Eye, Calendar } from "lucide-react";

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
  patient: Patient;
  statusConfig: Record<string, string>;
  priorityConfig: Record<string, string>;
}

export const Row = ({ patient, statusConfig, priorityConfig }: Props) => (
  <tr className="border-b">
    <td className="p-3">
      <div>
        <p className="font-medium">{patient.name}</p>
        <p className="text-gray-500 text-xs">{patient.cedula}</p>
        <p className="text-gray-500 text-xs">{patient.age} años • {patient.gender}</p>
      </div>
    </td>
    <td className="p-3 space-y-1">
      <p className="text-sm">📞 {patient.phone}</p>
      <p className="text-sm text-gray-500">🩸 {patient.bloodType}</p>
      <p className="text-sm text-gray-500">📍 {patient.address}</p>
    </td>
    <td className="p-3">
      <p className="font-medium text-sm">{patient.condition}</p>
      <p className="text-sm text-gray-500">{patient.doctor}</p>
      <p className="text-xs text-gray-500">Última visita: {new Date(patient.lastVisit).toLocaleDateString('es-NI')}</p>
    </td>
    <td className="p-3">
      <span className={`px-2 py-1 rounded text-xs ${priorityConfig[patient.priority]}`}>{patient.priority}</span>
    </td>
    <td className="p-3">
      <span className={`px-2 py-1 rounded text-xs ${statusConfig[patient.status]}`}>{patient.status}</span>
    </td>
    <td className="p-3 flex space-x-2">
      <button className="p-2 border rounded hover:bg-gray-100" title="Ver Historial"><FileText className="h-4 w-4" /></button>
      <button className="p-2 border rounded hover:bg-gray-100" title="Ver Detalles"><Eye className="h-4 w-4" /></button>
      <button className="p-2 border rounded hover:bg-gray-100" title="Agendar Cita"><Calendar className="h-4 w-4" /></button>
    </td>
  </tr>
);
