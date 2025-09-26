import { Row } from "./Row";

interface Appointment {
  id: number;
  time: string;
  patient: string;
  cedula: string;
  age: number;
  type: string;
  doctor: string;
  status: string;
  phone: string;
}

interface Props {
  appointments: Appointment[];
  statusConfig: Record<string, { label: string; color: string }>;
}

export const AppointmentTable = ({ appointments, statusConfig }: Props) => (
  <div className="bg-white shadow rounded-lg">
    <div className="p-4 border-b">
      <h2 className="font-semibold text-lg">Citas del Día</h2>
      <p className="text-sm text-gray-500">{appointments.length} cita(s) encontrada(s)</p>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left font-medium">Hora</th>
            <th className="p-3 text-left font-medium">Paciente</th>
            <th className="p-3 text-left font-medium">Especialidad</th>
            <th className="p-3 text-left font-medium">Médico</th>
            <th className="p-3 text-left font-medium">Estado</th>
            <th className="p-3 text-left font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(a => <Row key={a.id} appointment={a} statusConfig={statusConfig} />)}
        </tbody>
      </table>
    </div>
  </div>
);
