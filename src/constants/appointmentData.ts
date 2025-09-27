export const appointments = [
  { 
    id: 1, time: "08:00", patient: "María Elena González", 
    cedula: "001-123456-0001A", type: "Consulta General", 
    doctor: "Dr. Roberto Pérez", status: "pending", 
    phone: "8765-4321", age: 45 
  },
  { 
    id: 2, time: "08:30", patient: "Carlos Antonio Mendoza", 
    cedula: "001-234567-0002B", type: "Cardiología", 
    doctor: "Dra. Ana Martínez", status: "confirmed", 
    phone: "8876-5432", age: 58 
  },
  { 
    id: 3, time: "09:00", patient: "Ana Patricia Pérez", 
    cedula: "001-345678-0003C", type: "Pediatría", 
    doctor: "Dr. Luis Hernández", status: "in-progress", 
    phone: "8987-6543", age: 8 
  },
  { 
    id: 4, time: "09:30", patient: "José Miguel Rivera", 
    cedula: "001-456789-0004D", type: "Traumatología", 
    doctor: "Dr. Carmen López", status: "pending", 
    phone: "8098-7654", age: 34 
  },
  { 
    id: 5, time: "10:00", patient: "Esperanza del Carmen Silva", 
    cedula: "001-567890-0005E", type: "Ginecología", 
    doctor: "Dra. Patricia Morales", status: "completed", 
    phone: "8109-8765", age: 29 
  },
];

export const statusConfig = {
  pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-700" },
  confirmed: { label: "Confirmada", color: "bg-blue-100 text-blue-700" },
  "in-progress": { label: "En Curso", color: "bg-green-100 text-green-700" },
  completed: { label: "Completada", color: "bg-gray-100 text-gray-700" },
  cancelled: { label: "Cancelada", color: "bg-red-100 text-red-700" },
};


export const doctors = [
  "Dr. Roberto Pérez",
  "Dra. Ana Martínez",
  "Dr. Luis Hernández",
  "Dr. Carmen López",
  "Dra. Patricia Morales",
];

export const specialties = [
  "Consulta General",
  "Cardiología",
  "Pediatría",
  "Traumatología",
  "Ginecología",
  "Neurología",
  "Dermatología",
];

export const timeSlots = [
  "08:00","08:30","09:00","09:30","10:00","10:30",
  "11:00","11:30","12:00","12:30","13:00","13:30",
  "14:00","14:30","15:00","15:30","16:00","16:30"
];

