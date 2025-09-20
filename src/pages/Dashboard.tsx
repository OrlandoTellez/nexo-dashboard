import { 
  Calendar, 
  Users, 
  Activity, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Plus,
  Eye
} from "lucide-react";

// Datos simulados para el dashboard
const todayMetrics = {
  appointments: { total: 45, completed: 28, pending: 12, cancelled: 5 },
  patients: { inQueue: 15, attended: 32, critical: 3 },
  avgWaitTime: "23 min",
  satisfaction: "94%"
};

const upcomingAppointments = [
  { id: 1, time: "09:30", patient: "María González", type: "Consulta General", status: "pending" },
  { id: 2, time: "10:00", patient: "Carlos Mendoza", type: "Cardiología", status: "in-progress" },
  { id: 3, time: "10:30", patient: "Ana Pérez", type: "Pediatría", status: "pending" },
  { id: 4, time: "11:00", patient: "José Rivera", type: "Traumatología", status: "pending" },
];

const criticalPatients = [
  { id: 1, name: "Pedro Martínez", condition: "Hipertensión Severa", room: "203", priority: "Alta" },
  { id: 2, name: "Lucía Herrera", condition: "Diabetes Descompensada", room: "156", priority: "Media" },
  { id: 3, name: "Roberto Silva", condition: "Insuficiencia Respiratoria", room: "301", priority: "Alta" },
];

export const Dashboard = () => {
  const currentTime = new Date().toLocaleTimeString('es-NI', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  const currentDate = new Date().toLocaleDateString('es-NI', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Panel Principal</h1>
          <p className="text-muted-foreground mt-1">
            {currentDate} • {currentTime}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-3 py-2 text-sm border rounded-md hover:bg-accent transition">
            <Eye className="w-4 h-4 mr-2" />
            Ver Reportes
          </button>

          <button className="flex items-center bg-blue-500 px-3 py-2 text-sm text-white rounded-md bg-blue">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Cita
          </button>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 rounded-xl bg-background border shadow-sm">
          <div className="flex items-center justify-between">
            <Calendar className="h-5 w-5 text-medical-blue" />
            <span className="text-xs text-green-600">+12%</span>
          </div>
          <h3 className="text-lg font-semibold mt-2">Citas del Día</h3>
          <p className="text-2xl font-bold">{todayMetrics.appointments.total}</p>
          <p className="text-sm text-muted-foreground">{todayMetrics.appointments.completed} completadas</p>
        </div>

        <div className="p-4 rounded-xl bg-background border shadow-sm">
          <div className="flex items-center justify-between">
            <Users className="h-5 w-5 text-yellow-600" />
            <span className="text-xs text-red-600">-5%</span>
          </div>
          <h3 className="text-lg font-semibold mt-2">Pacientes en Fila</h3>
          <p className="text-2xl font-bold">{todayMetrics.patients.inQueue}</p>
          <p className="text-sm text-muted-foreground">Tiempo promedio: 23min</p>
        </div>

        <div className="p-4 rounded-xl bg-background border shadow-sm">
          <div className="flex items-center justify-between">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-xs text-green-600">+8%</span>
          </div>
          <h3 className="text-lg font-semibold mt-2">Pacientes Atendidos</h3>
          <p className="text-2xl font-bold">{todayMetrics.patients.attended}</p>
          <p className="text-sm text-muted-foreground">Hoy hasta ahora</p>
        </div>

        <div className="p-4 rounded-xl bg-background border shadow-sm">
          <div className="flex items-center justify-between">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-xs text-green-600">+2%</span>
          </div>
          <h3 className="text-lg font-semibold mt-2">Satisfacción</h3>
          <p className="text-2xl font-bold">{todayMetrics.satisfaction}</p>
          <p className="text-sm text-muted-foreground">Promedio mensual</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Próximas Citas */}
        <div className="bg-gradient-card rounded-xl border shadow-sm">
          <div className="p-4 border-b">
            <h3 className="flex items-center space-x-2 text-lg font-semibold">
              <Clock className="h-5 w-5 text-medical-blue" />
              <span>Próximas Citas</span>
            </h3>
            <p className="text-sm text-muted-foreground">Citas programadas para hoy</p>
          </div>
          <div className="p-4 space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-semibold text-medical-blue">{appointment.time}</div>
                  <div>
                    <p className="font-medium text-foreground">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    appointment.status === "in-progress"
                      ? "bg-medical-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {appointment.status === "in-progress" ? "En curso" : "Pendiente"}
                </span>
              </div>
            ))}
            <button className="w-full px-3 py-2 text-sm border rounded-md hover:bg-accent transition">
              Ver Todas las Citas
            </button>
          </div>
        </div>

        {/* Pacientes Críticos */}
        <div className="bg-gradient-card rounded-xl border shadow-sm">
          <div className="p-4 border-b">
            <h3 className="flex items-center space-x-2 text-lg font-semibold">
              <AlertCircle className="h-5 w-5 text-medical-red" />
              <span>Pacientes Críticos</span>
            </h3>
            <p className="text-sm text-muted-foreground">Requieren atención prioritaria</p>
          </div>
          <div className="p-4 space-y-4">
            {criticalPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                <div className="flex items-center space-x-3">
                  <Activity className="h-4 w-4 text-medical-red" />
                  <div>
                    <p className="font-medium text-foreground">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">{patient.condition}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      patient.priority === "Alta"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {patient.priority}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">Sala {patient.room}</p>
                </div>
              </div>
            ))}
            <button className="w-full px-3 py-2 text-sm border rounded-md hover:bg-accent transition">
              Ver Todos los Pacientes
            </button>
          </div>
        </div>
      </div>

      {/* Gráfico de flujo rápido */}
      <div className="bg-gradient-card rounded-xl border shadow-sm">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Flujo de Pacientes - Hoy</h3>
          <p className="text-sm text-muted-foreground">Distribución por estado de atención</p>
        </div>
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-medical-light-blue rounded-lg">
            <div className="text-2xl font-bold text-medical-blue">15</div>
            <div className="text-sm text-muted-foreground">En Espera</div>
          </div>
          <div className="text-center p-4 bg-medical-light-yellow rounded-lg">
            <div className="text-2xl font-bold text-medical-yellow">8</div>
            <div className="text-sm text-muted-foreground">En Consulta</div>
          </div>
          <div className="text-center p-4 bg-medical-light-green rounded-lg">
            <div className="text-2xl font-bold text-medical-green">32</div>
            <div className="text-sm text-muted-foreground">Atendidos</div>
          </div>
          <div className="text-center p-4 bg-medical-light-red rounded-lg">
            <div className="text-2xl font-bold text-medical-red">3</div>
            <div className="text-sm text-muted-foreground">Críticos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
