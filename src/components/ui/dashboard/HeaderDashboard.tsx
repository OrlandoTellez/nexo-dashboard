import { Plus, Eye } from "lucide-react";

interface Props {
  currentDate: string;
  currentTime: string;
  onNewAppointment?: () => void;
  
}

export const HeaderDashboard = ({ currentDate, currentTime, onNewAppointment }: Props) => (
  <div className="flex items-center justify-between">
    <div className="bg-[#007DE3] px-9 py-2 border rounded-tl-lg rounded-br-lg text-white">
      <h1 className="text-3xl font-bold text-foreground">Panel Principal</h1>
      <p className="text-muted-foreground mt-1">{currentDate} • {currentTime}</p>
    </div>
    <div className="flex items-center space-x-3">
      <button className="flex items-center bg-white px-3 py-2 text-sm border rounded-md hover:bg-accent transition">
        <Eye className="w-4 h-4 mr-2" /> Ver Reportes
      </button>
      <button 
      onClick={onNewAppointment}
      className="flex items-center px-4 py-2 bg-[#007DE3] text-white rounded-lg hover:bg-blue-700">
        <Plus className="text-white w-4 h-4 mr-2" /> Nueva Cita
      </button> 
    </div>
  </div>
);
