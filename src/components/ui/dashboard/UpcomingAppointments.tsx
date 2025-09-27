import { Clock } from "lucide-react";

interface Appointment {
  id: number;
  time: string;
  patient: string;
  type: string;
  status: "pending" | "in-progress" | "completed";
}

interface Props {
  appointments: Appointment[];
}

export const UpcomingAppointments = ({ appointments }: Props) => (
  <div className="bg-white rounded-xl border rounded-xl">
    <div className="p-4 border rounded-t-lg bg-[#007DE4]">
      <h3 className="flex items-center space-x-2 text-white text-xl font-bold ">
        <Clock className="h-5 w-5 text-white" />
        <span>Próximas Citas</span>
      </h3>
      <p className="text-sm text-white text-muted-foreground">Citas programadas para hoy</p>
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
          <span className={`px-2 py-1 rounded text-xs font-bold ${a.status === "in-progress" ? "bg-medical-blue text-white" : "bg-[#EC592999] text-[#933D04]"}`}>
            {a.status === "in-progress" ? "En curso" : "Pendiente"}
          </span>
        </div>
      ))}
      <button className="w-full px-3 py-2 text-sm border border-[#006DC7]  bg-[#DCEFFF]  rounded-md hover:bg-accent transition">
        Ver Todas las Citas
      </button>
    </div>
  </div>
);
