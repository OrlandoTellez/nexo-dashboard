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
  <div className="bg-gradient-card rounded-xl border shadow-sm">
    <div className="p-4 border-b">
      <h3 className="flex items-center space-x-2 text-lg font-semibold">
        <AlertCircle className="h-5 w-5 text-medical-red" />
        <span>Pacientes Críticos</span>
      </h3>
      <p className="text-sm text-muted-foreground">Requieren atención prioritaria</p>
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
            <span className={`px-2 py-1 rounded text-xs font-medium ${p.priority === "Alta" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}>
              {p.priority}
            </span>
            <p className="text-xs text-muted-foreground mt-1">Sala {p.room}</p>
          </div>
        </div>
      ))}
      <button className="w-full px-3 py-2 text-sm border rounded-md hover:bg-accent transition">
        Ver Todos los Pacientes
      </button>
    </div>
  </div>
);
