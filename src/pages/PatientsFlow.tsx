import { useState } from "react";
import { FlowHeader } from "../components/ui/patientFlow/FlowHeader";
import { FlowStageCard } from "../components/ui/patientFlow/FlowStageCard";
import { PatientQueue } from "../components/ui/patientFlow/PatientQueue";
import { Alerts } from "../components/ui/patientFlow/Alerts";
import { PerformanceMetrics } from "../components/ui/patientFlow/PerformanceMetrics";
import { Activity, Clock, Users, CheckCircle, Timer, AlertCircle, TrendingUp } from "lucide-react";

const currentFlow = {
  reception: { count: 8, avgWait: "5 min", status: "normal" },
  triage: { count: 12, avgWait: "15 min", status: "busy" },
  waiting: { count: 24, avgWait: "23 min", status: "critical" },
  consultation: { count: 16, avgWait: "8 min", status: "normal" },
  pharmacy: { count: 6, avgWait: "12 min", status: "normal" },
  laboratory: { count: 9, avgWait: "18 min", status: "busy" },
  discharge: { count: 3, avgWait: "3 min", status: "normal" }
};

const queueData = [
  { id: 1, patient: "María González", priority: "media", stage: "triage", waitTime: "15 min", estimatedTime: "10 min", condition: "Dolor abdominal" },
  { id: 2, patient: "Carlos Mendoza", priority: "alta", stage: "waiting", waitTime: "45 min", estimatedTime: "5 min", condition: "Dolor torácico" },
  { id: 3, patient: "Ana Pérez", priority: "baja", stage: "consultation", waitTime: "0 min", estimatedTime: "30 min", condition: "Control rutinario" },
  { id: 4, patient: "José Rivera", priority: "media", stage: "laboratory", waitTime: "20 min", estimatedTime: "15 min", condition: "Análisis de sangre" },
  { id: 5, patient: "Esperanza Silva", priority: "baja", stage: "pharmacy", waitTime: "8 min", estimatedTime: "5 min", condition: "Receta médica" }
];

const stages = [
  { id: "reception", name: "Recepción", icon: Users, color: "blue" },
  { id: "triage", name: "Triaje", icon: Activity, color: "yellow" },
  { id: "waiting", name: "Sala de Espera", icon: Clock, color: "orange" },
  { id: "consultation", name: "Consulta", icon: CheckCircle, color: "green" },
  { id: "laboratory", name: "Laboratorio", icon: Timer, color: "purple" },
  { id: "pharmacy", name: "Farmacia", icon: AlertCircle, color: "indigo" },
  { id: "discharge", name: "Alta", icon: TrendingUp, color: "emerald" }
];

const priorityConfig: Record<string, string> = {
  alta: "bg-red-100 text-red-800",
  media: "bg-yellow-100 text-yellow-800",
  baja: "bg-green-100 text-green-800"
};

export const PatientsFlow = () => {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const totalPatients = Object.values(currentFlow).reduce((sum, stage) => sum + stage.count, 0);
  const avgOverallWait = "18 min";
  const maxCount = Math.max(...Object.values(currentFlow).map(s => s.count));

  return (
    <div className="space-y-6">
      <FlowHeader totalPatients={totalPatients} avgOverallWait={avgOverallWait} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {stages.map((stage, idx) => (
          <FlowStageCard
            key={stage.id}
            stage={stage}
            stageData={currentFlow[stage.id as keyof typeof currentFlow]}
            maxCount={maxCount}
            index={idx}
            totalStages={stages.length}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PatientQueue
          queueData={queueData}
          stages={stages}
          priorityConfig={priorityConfig}
          onSelectPatient={setSelectedPatient}
        />
        <Alerts />
      </div>

      <PerformanceMetrics />
    </div>
  );
};
