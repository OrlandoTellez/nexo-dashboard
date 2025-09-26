import { AlertCircle } from "lucide-react";

export const Alerts = () => (
  <div className="bg-white shadow rounded-lg p-4">
    <h2 className="font-semibold text-lg flex items-center mb-2"><AlertCircle className="h-5 w-5 text-red-600 mr-2"/>Alertas del Sistema</h2>
    <p className="text-xs text-gray-500 mb-4">Notificaciones y recomendaciones</p>
    <div className="space-y-3">
      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
        <p className="font-medium text-red-800 text-sm">Sala de Espera Saturada</p>
        <p className="text-red-600 text-xs">24 pacientes esperando. Tiempo promedio: 23 min</p>
      </div>
      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="font-medium text-yellow-800 text-sm">Laboratorio Ocupado</p>
        <p className="text-yellow-600 text-xs">Considerar habilitar segundo turno</p>
      </div>
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="font-medium text-blue-800 text-sm">Eficiencia del Día</p>
        <p className="text-blue-600 text-xs">8% mejor que ayer. Buen rendimiento general</p>
      </div>
    </div>
  </div>
);
