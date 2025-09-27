import { AlertCircle, Activity } from "lucide-react";

interface Patient {
  id: number;
  name: string;
  condition: string;
  room: string;
  priority: "Alta" | "Media";
}

interface Props {
  patients: Patient[];
}

export const CriticalPatients = ({ patients }: Props) => (
  <div className="bg-white rounded-xl border shadow-sm">
    <div className="p-4 border-b bg-[#E65F5C] rounded-t-lg">
      <h3 className="flex items-center space-x-2 text-xl font-bold text-white">
        <AlertCircle className="h-5 w-5 text-white" />
        <span>Pacientes Críticos</span>
      </h3>
      <p className="text-sm text-muted-foreground text-white">Requieren atención prioritaria</p>
    </div>
    <div className="p-4 space-y-4">
      {patients.map(p => (
        <div key={p.id} className="flex items-center justify-between p-3 bg-background rounded-lg border">
          <div className="flex items-center space-x-3">
            <Activity className="h-4 w-4 text-medical-red" />
            <div>
              <p className="font-medium text-foreground">{p.name}</p>
              <p className="text-sm text-muted-foreground">{p.condition}</p>
            </div>
          </div>
          <div className="text-right">
            <span className={`px-2 py-1 rounded text-xs font-bold ${p.priority === "Alta" ? "bg-[#E55F5C] text-white" : "bg-#[FFBC3A] text-white"}`}>
              {p.priority}
            </span>
            <p className="text-xs text-muted-foreground mt-1">Sala {p.room}</p>
          </div>
        </div>
      ))}
      <button className="w-full px-3 py-2 text-sm border border-[#DF3D39] bg-[#F9D7D6] rounded-md hover:bg-accent transition">
        Ver Todos los Pacientes
      </button>
    </div>
  </div>
);
