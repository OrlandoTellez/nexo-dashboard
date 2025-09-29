# Documentación de Validación de Datos del Proyecto

## Resumen Ejecutivo

Este documento describe las estrategias y mecanismos de validación de datos implementados en el sistema de gestión hospitalaria. La validación se realiza tanto en el frontend como en el backend, con enfoques específicos para diferentes tipos de datos y formularios.

## Estrategias de Validación Implementadas

### 1. **Validación en el Frontend**

#### 1.1 Formulario de Login (`LoginForm.tsx`)
```typescript
// Validación básica de campos requeridos
if (!username || !password) {
  setError('Por favor ingrese email y contraseña');
  return;
}
```

**Características:**
- Validación de campos obligatorios
- Manejo de estados de carga
- Feedback visual al usuario
- Manejo de errores de autenticación

#### 1.2 Formularios de Modal (Appointment y Patient)

**Validación HTML5 nativa:**
```typescript
<Field
  label="Nombre del Paciente *"
  type="text"
  required  // Validación HTML5
/>
```

**Campos validados:**
- Campos requeridos (atributo `required`)
- Tipos de datos específicos (`email`, `number`, `date`)
- Validación de formato básico

### 2. **Validación de Tipos de Datos**

#### 2.1 Tipos TypeScript
```typescript
// En src/types/Patient.ts
export interface Patient {
  id_patient: number;
  first_name: string;
  identity_number: string;
  birthdate: string;
  // ... más campos con tipos definidos
}
```

#### 2.2 Enums y Opciones Predefinidas
```typescript
// Opciones validadas para campos de selección
const genders = ["M", "F", "O"];
const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const priorities = ["baja", "media", "alta"];
```

### 3. **Validación en el Backend (API)**

#### 3.1 Endpoint de Pacientes
```typescript
const payload = {
  identity_number: formData.cedula,
  first_name: formData.name,
  // Transformación y validación de datos
  phone: `+505${formData.phone}`, // Formato internacional
  birthdate: birthDate ? format(birthDate, "yyyy-MM-dd") : null, // Formato estándar
};
```

**Validaciones implementadas:**
- Formato de teléfono (+505)
- Formato de fecha (ISO)
- Campos requeridos del backend
- Manejo de errores HTTP

### 4. **Mecanismos Específicos por Formulario**

#### 4.1 Formulario de Citas Médicas (`AppointmentForm.tsx`)
**Campos validados:**
- Nombre del paciente (requerido)
- Cédula (requerido)
- Teléfono (requerido)
- Edad (numérico, requerido)
- Especialidad (selección validada)
- Médico (selección validada)
- Fecha (formato date)
- Hora (selección de slots predefinidos)

#### 4.2 Formulario de Pacientes (`PatientForm.tsx`)
**Campos validados:**
- Nombre completo (requerido)
- Cédula de identidad (requerido)
- Correo electrónico (tipo email)
- Fecha de nacimiento (formato date)
- Género (selección validada)
- Teléfono (requerido)
- Tipo de sangre (selección validada)
- Campos médicos (opcionales)

### 5. **Transformación de Datos**

#### 5.1 Normalización de Teléfonos
```typescript
phone: `+505${formData.phone}`,
emergency_contact_phone: `+505${formData.emergencyPhone}`
```

#### 5.2 Formato de Fechas
```typescript
birthdate: birthDate ? format(birthDate, "yyyy-MM-dd") : null
```

#### 5.3 Mapeo de Prioridades
```typescript
priority: formData.priority === "alta" ? 1 : 0
```

### 6. **Manejo de Errores**

#### 6.1 Captura de Errores de API
```typescript
try {
  const res = await fetch("http://localhost:3000/patients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || "Error creando paciente");
  }
  // Procesamiento exitoso
} catch (error) {
  console.error("Error:", error);
  alert(`Error al registrar paciente: ${error}`);
}
```

#### 6.2 Validación de Estado de Datos
```typescript
// En Row.tsx - Validación de datos existentes
<span className={`px-2 py-1 rounded text-xs`}>
  {patient.priority !== undefined && priorityConfig[patient.priority] 
    ? priorityConfig[patient.priority] 
    : 'N/A'
  }
</span>
```

### 7. **Validaciones de Seguridad**

#### 7.1 Autenticación
```typescript
const { login, isLoading } = useAuth();
// Validación de credenciales mediante contexto de autenticación
```

#### 7.2 Protección de Rutas
```typescript
<PrivateRoute>
  <Dashboard />
</PrivateRoute>
```

## Limitaciones Actuales y Áreas de Mejora

### **Validaciones Faltantes**

1. **Validación de formato de cédula**
2. **Validación de formato de email**
3. **Validación de rango de edades**
4. **Validación de formato de teléfono nicaragüense**
5. **Validación de fechas futuras/pasadas**

