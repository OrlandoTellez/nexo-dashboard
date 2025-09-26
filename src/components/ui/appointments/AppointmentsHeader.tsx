import { Plus } from "lucide-react";

interface Props {
  onNewAppointment?: () => void;
}

export const AppointmentsHeader = ({ onNewAppointment }: Props) => (
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Gestión de Citas</h1>
      <p className="text-gray-500 mt-1">Administra las citas médicas del hospital</p>
    </div>
    <button
      onClick={onNewAppointment}
      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      <Plus className="w-4 h-4 mr-2" /> Nueva Cita
    </button>
  </div>
);
