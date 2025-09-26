import { ArrowRight, ArrowDown } from "lucide-react";

interface Stage {
  id: string;
  name: string;
  icon: any;
  color: string;
}

interface StageData {
  count: number;
  avgWait: string;
  status: string;
}

interface Props {
  stage: Stage;
  stageData: StageData;
  maxCount: number;
  index: number;
  totalStages: number;
}

const statusConfig: Record<string, string> = {
  normal: "bg-green-500",
  busy: "bg-yellow-500",
  critical: "bg-red-500"
};

export const FlowStageCard = ({ stage, stageData, maxCount, index, totalStages }: Props) => {
  const Icon = stage.icon;
  const progress = (stageData.count / maxCount) * 100;

  return (
    <div className="relative">
      <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-all">
        <div className="flex items-center justify-between mb-2">
          <Icon className={`h-5 w-5 text-${stage.color}-600`} />
          <div className={`w-3 h-3 rounded-full ${statusConfig[stageData.status]}`} />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-sm">{stage.name}</h3>
          <p className="text-2xl font-bold">{stageData.count}</p>
          <p className="text-xs text-gray-500">Espera: {stageData.avgWait}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="h-2 rounded-full bg-blue-600" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Flechas */}
      {index < totalStages - 1 && (
        <>
          <div className="hidden xl:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </div>
          <div className="xl:hidden flex justify-center mt-2">
            <ArrowDown className="h-4 w-4 text-gray-400" />
          </div>
        </>
      )}
    </div>
  );
};
