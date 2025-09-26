import { Users, ArrowRight } from "lucide-react";

interface QueuePatient {
  id: number;
  patient: string;
  priority: string;
  stage: string;
  waitTime: string;
  estimatedTime: string;
  condition: string;
}

interface Stage {
  id: string;
  name: string;
}

interface Props {
  queueData: QueuePatient[];
  stages: Stage[];
  priorityConfig: Record<string, string>;
  onSelectPatient: (patient: QueuePatient) => void;
}

export const PatientQueue = ({ queueData, stages, priorityConfig, onSelectPatient }: Props) => (
  <div className="bg-white shadow rounded-lg p-4">
    <h2 className="font-semibold text-lg flex items-center mb-2"><Users className="h-5 w-5 text-blue-600 mr-2"/>Cola de Pacientes</h2>
    <p className="text-xs text-gray-500 mb-4">Pacientes en el sistema por orden de llegada</p>
    <div className="space-y-3">
      {queueData.map(patient => (
        <div
          key={patient.id}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border hover:shadow-md transition-all cursor-pointer"
          onClick={() => onSelectPatient(patient)}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">
              {patient.id}
            </div>
            <div>
              <p className="font-medium text-sm">{patient.patient}</p>
              <p className="text-xs text-gray-500">{patient.condition}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded text-xs ${priorityConfig[patient.priority]}`}>{patient.priority}</span>
            <div className="text-right text-xs">
              <p>{stages.find(s => s.id === patient.stage)?.name}</p>
              <p className="text-gray-500">⏱️ {patient.waitTime}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400"/>
          </div>
        </div>
      ))}
    </div>
  </div>
);
