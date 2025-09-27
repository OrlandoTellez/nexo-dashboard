import { Plus, Eye } from "lucide-react";

interface Props {
  currentDate: string;
  currentTime: string;
}

export const HeaderDashboard = ({ currentDate, currentTime }: Props) => (
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-3xl font-bold text-foreground">Panel Principal</h1>
      <p className="text-muted-foreground mt-1">{currentDate} • {currentTime}</p>
    </div>
    <div className="flex items-center space-x-3">
      <button className="flex items-center bg-white px-3 py-2 text-sm border rounded-md hover:bg-accent transition">
        <Eye className="w-4 h-4 mr-2" /> Ver Reportes
      </button>
      <button className="flex items-center bg-[#007DE3] font-bold px-3 py-2 text-sm text-white rounded-md">
        <Plus className="text-white" /> Nueva Cita
      </button> 
    </div>
  </div>
);
