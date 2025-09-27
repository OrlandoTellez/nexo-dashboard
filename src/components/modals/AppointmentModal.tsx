import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { AppointmentForm } from "./components/forms/AppointmentForm";
import { ModalHeader } from "./components/ModalHeader";
import { ModalFooter } from "./components/ModalFooter";

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointment?: any;
  mode: "create" | "edit" | "view";
}

export const AppointmentModal = ({ open, onOpenChange, appointment, mode }: AppointmentModalProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    patientName: appointment?.patient || "",
    cedula: appointment?.cedula || "",
    phone: appointment?.phone || "",
    age: appointment?.age || "",
    specialty: appointment?.type || "",
    doctor: appointment?.doctor || "",
    time: appointment?.time || "",
    notes: "",
  });

  const isReadOnly = mode === "view";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      mode === "create"
        ? `Cita creada para ${formData.patientName} el ${date ? format(date, "PPP", { locale: es }) : ""} a las ${formData.time}`
        : "Cita actualizada correctamente"
    );
    onOpenChange(false);
  };

  const titles = {
    create: "Nueva Cita Médica",
    edit: "Editar Cita",
    view: "Detalles de la Cita",
  };

  const descriptions = {
    create: "Complete los datos para programar una nueva cita médica",
    edit: "Modifique los datos de la cita médica",
    view: "Información detallada de la cita médica",
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
          <AppointmentForm
            formData={formData}
            setFormData={setFormData}
            date={date}
            setDate={setDate}
            isReadOnly={isReadOnly}
          />

          <ModalFooter
            onCancel={() => onOpenChange(false)}
            submitLabel={mode === "create" ? "Crear Cita" : "Guardar Cambios"}
            isReadOnly={isReadOnly}
          />
        </form>
      </div>
    </div>
  );
};
