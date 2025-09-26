import { Clock } from "lucide-react";

interface Appointment {
  id: number;
  time: string;
  patient: string;
  type: string;
  status: "pending" | "in-progress";
}

interface Props {
  appointments: Appointment[];
}

export const UpcomingAppointments = ({ appointments }: Props) => (
  <div className="bg-gradient-card rounded-xl border shadow-sm">
    <div className="p-4 border-b">
      <h3 className="flex items-center space-x-2 text-lg font-semibold">
        <Clock className="h-5 w-5 text-medical-blue" />
        <span>Próximas Citas</span>
      </h3>
      <p className="text-sm text-muted-foreground">Citas programadas para hoy</p>
    </div>
    <div className="p-4 space-y-4">
      {appointments.map(a => (
        <div key={a.id} className="flex items-center justify-between p-3 bg-background rounded-lg border">
          <div className="flex items-center space-x-3">
            <div className="text-sm font-semibold text-medical-blue">{a.time}</div>
            <div>
              <p className="font-medium text-foreground">{a.patient}</p>
              <p className="text-sm text-muted-foreground">{a.type}</p>
            </div>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium ${a.status === "in-progress" ? "bg-medical-blue text-white" : "bg-gray-200 text-gray-700"}`}>
            {a.status === "in-progress" ? "En curso" : "Pendiente"}
          </span>
        </div>
      ))}
      <button className="w-full px-3 py-2 text-sm border rounded-md hover:bg-accent transition">
        Ver Todas las Citas
      </button>
    </div>
  </div>
);
