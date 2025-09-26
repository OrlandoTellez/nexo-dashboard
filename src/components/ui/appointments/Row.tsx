import { Clock, User, Eye, Edit, Check, X } from "lucide-react";

interface Appointment {
  id: number;
  time: string;
  patient: string;
  cedula: string;
  age: number;
  type: string;
  doctor: string;
  status: string;
  phone: string;
}

interface Props {
  appointment: Appointment;
  statusConfig: Record<string, { label: string; color: string }>;
}

export const Row = ({ appointment, statusConfig }: Props) => (
  <tr className="border-b">
    <td className="p-3">
      <div className="flex items-center space-x-2">
        <Clock className="h-4 w-4 text-blue-600" />
        <span>{appointment.time}</span>
      </div>
    </td>
    <td className="p-3">
      <p className="font-medium">{appointment.patient}</p>
      <p className="text-gray-500 text-xs">{appointment.cedula} • {appointment.age} años</p>
      <p className="text-gray-500 text-xs">📞 {appointment.phone}</p>
    </td>
    <td className="p-3">
      <span className="px-2 py-1 text-xs rounded border">{appointment.type}</span>
    </td>
    <td className="p-3 flex items-center space-x-2">
      <User className="h-4 w-4 text-gray-500" />
      <span>{appointment.doctor}</span>
    </td>
    <td className="p-3">
      <span className={`px-2 py-1 text-xs rounded ${statusConfig[appointment.status].color}`}>
        {statusConfig[appointment.status].label}
      </span>
    </td>
    <td className="p-3 flex space-x-2">
      <button className="p-2 border rounded hover:bg-gray-100"><Eye className="h-4 w-4" /></button>
      <button className="p-2 border rounded hover:bg-gray-100"><Edit className="h-4 w-4" /></button>
      {appointment.status === "pending" && (
        <>
          <button className="p-2 border rounded hover:bg-gray-100 text-green-600"><Check className="h-4 w-4" /></button>
          <button className="p-2 border rounded hover:bg-gray-100 text-red-600"><X className="h-4 w-4" /></button>
        </>
      )}
      {appointment.status === "confirmed" && <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">Iniciar</button>}
      {appointment.status === "in-progress" && <button className="px-2 py-1 text-xs border rounded hover:bg-gray-100">Completar</button>}
    </td>
  </tr>
);
