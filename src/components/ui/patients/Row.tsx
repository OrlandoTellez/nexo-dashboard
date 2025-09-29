import { Eye, Check, Edit, X } from "lucide-react";
import { Patient } from "../../../types/Patient";

interface Props {
  patient: Patient;
  statusConfig: Record<string, string>;
  priorityConfig: Record<number, string>;
}

export const Row = ({ patient, statusConfig, priorityConfig }: Props) => {

  // calcular edad del paciente
  const birthDate = new Date(patient.birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <tr className="border-b">
      <td className="p-3">
        <div>
          <p className="font-medium">{patient.first_name}</p>
          <p className="text-gray-500 text-xs">{patient.identity_number}</p>
          <p className="text-gray-500 text-xs">{age} años • {patient.gender}</p>
        </div>
      </td>
      <td className="p-3 space-y-1">
        <p className="text-sm">📞 {patient.phone}</p>
        <p className="text-sm text-gray-500">🩸 {patient.blood_type}</p>
        <p className="text-sm text-gray-500">📍 {patient.address}</p>
      </td>
      <td className="p-3">
        <span className={`px-2 py-1 rounded text-xs`}>{
          patient.priority !== undefined && priorityConfig[patient.priority] ? priorityConfig[patient.priority] : 'N/A'
        }
        </span>
      </td>
      <td className="p-3">
        <span className={`px-2 py-1 rounded text-xs`}>{patient.status}</span>
      </td>
      <td className="p-3 flex space-x-2">
        <button className="p-2 border rounded hover:bg-gray-100"><Eye className="h-4 w-4" /></button>
        <button className="p-2 border rounded hover:bg-gray-100"><Edit className="h-4 w-4" /></button>
        {patient.status === "pending" && (
          <>
            <button className="p-2 border rounded hover:bg-gray-100 text-green-600"><Check className="h-4 w-4" /></button>
            <button className="p-2 border rounded hover:bg-gray-100 text-red-600"><X className="h-4 w-4" /></button>
          </>
        )}
        {patient.status === "confirmed" && <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">Iniciar</button>}
        {patient.status === "in-progress" && <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">Completar</button>}
      </td>
    </tr>
  );
}