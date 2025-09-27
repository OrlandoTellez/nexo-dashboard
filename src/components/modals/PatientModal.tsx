import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { PatientForm } from "./components/forms/PatientForm";
import { ModalHeader } from "./components/ModalHeader";
import { ModalFooter } from "./components/ModalFooter";

interface PatientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  patient?: any;
  mode: "create" | "edit" | "view";
}

export const PatientModal = ({ open, onOpenChange, patient, mode }: PatientModalProps) => {
  const [birthDate, setBirthDate] = useState<Date | undefined>(
    patient?.birthDate ? new Date(patient.birthDate) : undefined
  );

  const [formData, setFormData] = useState({
    name: patient?.name || "",
    cedula: patient?.cedula || "",
    phone: patient?.phone || "",
    gender: patient?.gender || "",
    bloodType: patient?.bloodType || "",
    address: patient?.address || "",
    emergencyContact: patient?.emergencyContact || "",
    emergencyPhone: patient?.emergencyPhone || "",
    allergies: patient?.allergies || "",
    currentMedications: patient?.currentMedications || "",
    medicalHistory: patient?.medicalHistory || "",
    priority: patient?.priority || "baja",
    status: patient?.status || "active",
  });

  const isReadOnly = mode === "view";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      mode === "create"
        ? `Paciente ${formData.name} registrado el ${birthDate ? format(birthDate, "PPP", { locale: es }) : ""}`
        : "Datos del paciente actualizados correctamente"
    );
    onOpenChange(false);
  };

  const titles = {
    create: "Nuevo Paciente",
    edit: "Editar Paciente",
    view: "Detalles del Paciente",
  };

  const descriptions = {
    create: "Complete los datos para registrar un nuevo paciente",
    edit: "Modifique los datos del paciente",
    view: "Información detallada del paciente",
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-6">
        
        <ModalHeader
          title={titles[mode]}
          description={descriptions[mode]}
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <PatientForm
            formData={formData}
            setFormData={setFormData}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            isReadOnly={isReadOnly}
          />

          <ModalFooter
            onCancel={() => onOpenChange(false)}
            submitLabel={mode === "create" ? "Registrar Paciente" : "Guardar Cambios"}
            isReadOnly={isReadOnly}
          />
        </form>
      </div>
    </div>
  );
};
