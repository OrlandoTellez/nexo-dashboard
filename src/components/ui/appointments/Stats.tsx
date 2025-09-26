import { Calendar, Clock, Check, User } from "lucide-react";

interface Stats {
  total: number;
  pending: number;
  confirmed: number;
  "in-progress": number;
  completed: number;
}

interface Props {
  stats: Stats;
}

export const Stats = ({ stats }: Props) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <Calendar className="h-5 w-5 text-blue-600" />
      <div>
        <p className="text-2xl font-bold">{stats.total}</p>
        <p className="text-sm text-gray-500">Total</p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <Clock className="h-5 w-5 text-yellow-600" />
      <div>
        <p className="text-2xl font-bold">{stats.pending}</p>
        <p className="text-sm text-gray-500">Pendientes</p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <Check className="h-5 w-5 text-blue-600" />
      <div>
        <p className="text-2xl font-bold">{stats.confirmed}</p>
        <p className="text-sm text-gray-500">Confirmadas</p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <User className="h-5 w-5 text-green-600" />
      <div>
        <p className="text-2xl font-bold">{stats["in-progress"]}</p>
        <p className="text-sm text-gray-500">En Curso</p>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-2">
      <Check className="h-5 w-5 text-gray-600" />
      <div>
        <p className="text-2xl font-bold">{stats.completed}</p>
        <p className="text-sm text-gray-500">Completadas</p>
      </div>
    </div>
  </div>
);
