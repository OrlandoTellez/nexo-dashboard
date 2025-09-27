import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Field, SelectField } from "../Field";

interface PatientFormProps {
  formData: any;
  setFormData: (data: any) => void;
  birthDate: Date | undefined;
  setBirthDate: (d: Date | undefined) => void;
  isReadOnly: boolean;
}

const genders = ["Masculino", "Femenino"];
const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const priorities = ["baja", "media", "alta"];
const statuses = ["active", "inactive", "critical"];

export const PatientForm = ({
  formData,
  setFormData,
  birthDate,
  setBirthDate,
  isReadOnly,
}: PatientFormProps) => (
  <>
    {/* Datos personales */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field
        label="Nombre Completo *"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        disabled={isReadOnly}
        required
      />

      <Field
        label="Cédula de Identidad *"
        type="text"
        value={formData.cedula}
        onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
        disabled={isReadOnly}
        required
      />

      {/* Fecha de Nacimiento */}
      <div className="space-y-1">
        <label className="block text-sm font-medium">Fecha de Nacimiento *</label>
        <div className="flex items-center border rounded px-3 py-2">
          <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
          <input
            type="date"
            className="flex-1 outline-none"
            value={birthDate ? format(birthDate, "yyyy-MM-dd") : ""}
            onChange={(e) => setBirthDate(e.target.value ? new Date(e.target.value) : undefined)}
            disabled={isReadOnly}
            required
          />
        </div>
      </div>

      <SelectField
        label="Género *"
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        options={genders}
        placeholder="Seleccionar género"
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

      <SelectField
        label="Tipo de Sangre"
        value={formData.bloodType}
        onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
        options={bloodTypes}
        placeholder="Seleccionar tipo de sangre"
        disabled={isReadOnly}
      />
    </div>

    {/* Dirección */}
    <div className="space-y-1">
      <label className="block text-sm font-medium">Dirección</label>
      <textarea
        className="w-full border rounded px-3 py-2"
        rows={2}
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        disabled={isReadOnly}
      />
    </div>

    {/* Contacto de Emergencia */}
    <h3 className="text-md font-semibold text-gray-800 mt-4">Contacto de Emergencia</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field
        label="Nombre del Contacto"
        type="text"
        value={formData.emergencyContact}
        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
        disabled={isReadOnly}
      />

      <Field
        label="Teléfono de Emergencia"
        type="text"
        value={formData.emergencyPhone}
        onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
        disabled={isReadOnly}
      />
    </div>

    {/* Información Médica */}
    <h3 className="text-md font-semibold text-gray-800 mt-4">Información Médica</h3>
    <div className="space-y-1">
      <label className="block text-sm font-medium">Alergias</label>
      <textarea
        className="w-full border rounded px-3 py-2"
        rows={2}
        value={formData.allergies}
        onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
        disabled={isReadOnly}
      />
    </div>

    <div className="space-y-1">
      <label className="block text-sm font-medium">Medicamentos Actuales</label>
      <textarea
        className="w-full border rounded px-3 py-2"
        rows={2}
        value={formData.currentMedications}
        onChange={(e) => setFormData({ ...formData, currentMedications: e.target.value })}
        disabled={isReadOnly}
      />
    </div>

    <div className="space-y-1">
      <label className="block text-sm font-medium">Historial Médico</label>
      <textarea
        className="w-full border rounded px-3 py-2"
        rows={3}
        value={formData.medicalHistory}
        onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
        disabled={isReadOnly}
      />
    </div>

    {/* Prioridad y Estado */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <SelectField
        label="Prioridad"
        value={formData.priority}
        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
        options={priorities}
        placeholder="Seleccionar prioridad"
        disabled={isReadOnly}
      />

      <SelectField
        label="Estado"
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        options={statuses}
        placeholder="Seleccionar estado"
        disabled={isReadOnly}
      />
    </div>
  </>
);
