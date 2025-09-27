import { Plus } from "lucide-react";

interface Props {
  onNewAppointment?: () => void;
}

export const AppointmentsHeader = ({ onNewAppointment }: Props) => (
  <div className="flex items-center justify-between">
    <div className="bg-[#007DE3] px-9 py-2 border rounded-tl-lg rounded-br-lg text-white">
      <h1 className="text-3xl font-bold ">Gestión de Citas</h1>
      <p className="mt-1">Administra las citas médicas del hospital</p>
    </div>
    <button
      onClick={onNewAppointment}
      className="flex items-center px-4 py-2 bg-[#007DE3] text-white rounded-lg hover:bg-blue-700"
    >
      <Plus className="w-4 h-4 mr-2" /> Nueva Cita
    </button>
  </div>
);
