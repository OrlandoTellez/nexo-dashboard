interface Props {
  totalPatients: number;
  avgOverallWait: string;
}

export const FlowHeader = ({ totalPatients, avgOverallWait }: Props) => (
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Flujo de Pacientes</h1>
      <p className="text-gray-500 mt-1">Monitoreo en tiempo real del flujo hospitalario</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="text-right">
        <p className="text-2xl font-bold text-blue-600">{totalPatients}</p>
        <p className="text-sm text-gray-500">Pacientes totales</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-yellow-600">{avgOverallWait}</p>
        <p className="text-sm text-gray-500">Tiempo promedio</p>
      </div>
    </div>
  </div>
);
