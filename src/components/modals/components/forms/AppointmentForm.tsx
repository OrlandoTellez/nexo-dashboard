import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Field, SelectField } from "../Field";
import { doctors, specialties, timeSlots } from "../../../../constants/appointmentData";

interface FormProps {
  formData: any;
  setFormData: (data: any) => void;
  date: Date | undefined;
  setDate: (d: Date | undefined) => void;
  isReadOnly: boolean;
}

export const AppointmentForm = ({ formData, setFormData, date, setDate, isReadOnly }: FormProps) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field
        label="Nombre del Paciente *"
        type="text"
        value={formData.patientName}
        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
        disabled={isReadOnly}
        required
      />

      <Field
        label="Cédula *"
        type="text"
        value={formData.cedula}
        onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
        disabled={isReadOnly}
        required
      />

      <Field
        label="Teléfono *"
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        disabled={isReadOnly}
        required
      />

      <Field
        label="Edad *"
        type="number"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        disabled={isReadOnly}
        required
      />

      <SelectField
        label="Especialidad *"
        value={formData.specialty}
        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
        options={specialties}
        placeholder="Seleccionar especialidad"
        disabled={isReadOnly}
        required
      />

      <SelectField
        label="Médico *"
        value={formData.doctor}
        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
        options={doctors}
        placeholder="Seleccionar médico"
        disabled={isReadOnly}
        required
      />

      <div className="space-y-1">
        <label className="block text-sm font-medium">Fecha *</label>
        <div className="flex items-center border rounded px-3 py-2">
          <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
          <input
            type="date"
            className="flex-1 outline-none"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            onChange={(e) => setDate(e.target.value ? new Date(e.target.value) : undefined)}
            disabled={isReadOnly}
            required
          />
        </div>
      </div>

      <SelectField
        label="Hora *"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        options={timeSlots}
        placeholder="Seleccionar hora"
        disabled={isReadOnly}
        required
      />
    </div>

    {/* Notas */}
    <div className="space-y-1">
      <label className="block text-sm font-medium">Observaciones</label>
      <textarea
        className="w-full border rounded px-3 py-2"
        rows={3}
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        disabled={isReadOnly}
      />
    </div>
  </>
);
