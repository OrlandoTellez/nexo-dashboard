import { useState } from "react";
import { FlowHeader } from "../components/ui/patientFlow/FlowHeader";
import { FlowStageCard } from "../components/ui/patientFlow/FlowStageCard";
import { PatientQueue } from "../components/ui/patientFlow/PatientQueue";
import { Alerts } from "../components/ui/patientFlow/Alerts";
import { PerformanceMetrics } from "../components/ui/patientFlow/PerformanceMetrics";
import { stages, currentFlow, queueData, priorityConfig } from "../constants/flowData";
 0
export const PatientsFlow = () => {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const totalPatients = Object.values(currentFlow).reduce((sum, stage) => sum + stage.count, 0);
  const avgOverallWait = "18 min";
  const maxCount = Math.max(...Object.values(currentFlow).map(s => s.count));

  const handlShowPatient = () => alert(selectedPatient);

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

      <button onClick={handlShowPatient}>Ver Paciente</button>
      

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
