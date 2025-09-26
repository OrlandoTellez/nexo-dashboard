interface Metric {
  value: string;
  label: string;
  color: string;
  width: string;
}

const metrics: Metric[] = [
  { value: "89%", label: "Eficiencia General", color: "blue-600", width: "89%" },
  { value: "42", label: "Pacientes/Hora", color: "green-600", width: "70%" },
  { value: "18min", label: "Tiempo Promedio", color: "yellow-600", width: "60%" },
  { value: "94%", label: "Satisfacción", color: "green-600", width: "94%" },
];

export const PerformanceMetrics = () => (
  <div className="bg-white shadow rounded-lg p-4">
    <h2 className="font-semibold text-lg mb-4">Métricas de Rendimiento</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {metrics.map((m, i) => (
        <div key={i}>
          <p className={`text-3xl font-bold text-${m.color} mb-1`}>{m.value}</p>
          <p className="text-xs text-gray-500">{m.label}</p>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
            <div className={`h-2 rounded-full bg-${m.color}`} style={{ width: m.width }}/>
          </div>
        </div>
      ))}
    </div>
  </div>
);
