import { Users, Activity, AlertTriangle, Heart } from "lucide-react";

interface Stats {
  total: number;
  active: number;
  critical: number;
  inactive: number;
}

interface Props {
  stats: Stats;
}

export const Stats = ({ stats }: Props) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <Users className="h-5 w-5 text-blue-600" />
      <div>
        <p className="text-2xl font-bold">{stats.total}</p>
        <p className="text-sm text-gray-500">Total Pacientes</p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <Activity className="h-5 w-5 text-green-600" />
      <div>
        <p className="text-2xl font-bold">{stats.active}</p>
        <p className="text-sm text-gray-500">Activos</p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <AlertTriangle className="h-5 w-5 text-red-600" />
      <div>
        <p className="text-2xl font-bold">{stats.critical}</p>
        <p className="text-sm text-gray-500">Críticos</p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <Heart className="h-5 w-5 text-gray-600" />
      <div>
        <p className="text-2xl font-bold">{stats.inactive}</p>
        <p className="text-sm text-gray-500">Inactivos</p>
      </div>
    </div>
  </div>
);
