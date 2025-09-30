# Documentación: Consumo de Servicios y APIs

## Descripción General
Este documento describe la implementación del consumo de servicios y APIs para soportar la lógica del sistema y garantizar la comunicación cliente-servidor en el dashboard.

## Arquitectura de Comunicación

### 1. Contexto de Autenticación (`AuthContext.tsx`)

#### Servicio de Login
```typescript
const login = async (username: string, password: string): Promise<boolean> => {
  setIsLoading(true);
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: username, password: password })
    });

    if (!res.ok) {
      setIsLoading(false);
      return false;
    }

    const data = await res.json();
    setUser(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));
    setIsLoading(false);
    return true;
  } catch (err) {
    console.error(err);
    setIsLoading(false);
    return false;
  }
};
```

**Características:**
- **Método:** POST
- **Headers:** `Content-Type: application/json`
- **Credenciales:** Incluidas (cookies)
- **Manejo de estado:** Loading durante la petición
- **Persistencia:** LocalStorage para mantener sesión
- **Manejo de errores:** Try-catch con retorno booleano

### 2. Gestión de Pacientes

#### Servicio de Creación de Pacientes (`PatientModal.tsx`)
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    identity_number: formData.cedula,
    first_name: formData.name,
    second_name: "asdf", 
    first_lastname: "asdf", 
    second_lastname: "asdf",
    gender: formData.gender,
    birthdate: birthDate ? format(birthDate, "yyyy-MM-dd") : null,
    blood_type: formData.bloodType,
    phone: `+505${formData.phone}`,
    email: formData.email, 
    address: formData.address,
    emergency_contact_name: formData.emergencyContact,
    emergency_contact_phone: `+505${formData.emergencyPhone}`,
    allergies: formData.allergies,
    current_medications: formData.currentMedications,
    medical_background: formData.medicalHistory,
    priority: formData.priority === "alta" ? 1 : 0,
    status: formData.status,
  };

  try {
    const res = await fetch("http://localhost:3000/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err || "Error creando paciente");
    }

    const newPatient = await res.json();
    console.log("Paciente creado:", newPatient);
    alert(`Paciente ${newPatient.first_name} creado con éxito`);
    onOpenChange(false);

  } catch (error) {
    console.error("Error:", error);
    alert(`Error al registrar paciente: ${error}`);
  }
};
```

#### Servicio de Obtención de Pacientes (`Patients.tsx`)
```typescript
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/patients`) 
    .then(res => res.json())
    .then((data: Patient[]) => {
      console.log(data);
      setPatients(data);
    });
}, []);
```

## Patrones de Implementación

### 1. Manejo de Estado de Carga
```typescript
const { login, isLoading } = useAuth();

// En componentes UI
{isLoading ? (
  <div className="flex items-center space-x-2 justify-center">
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
    <span>Verificando...</span>
  </div>
) : (
  // Contenido normal
)}
```

### 2. Manejo de Errores
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  try {
    const success = await login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Credenciales incorrectas');
    }
  } catch {
    setError('Error al iniciar sesión');
  }
};
```

### 3. Transformación de Datos
```typescript
// Transformación de datos del formulario al payload de la API
const payload = {
  identity_number: formData.cedula,
  first_name: formData.name,
  // Campos mapeados según estructura del backend
  phone: `+505${formData.phone}`,
  priority: formData.priority === "alta" ? 1 : 0,
};
```

## Configuración de APIs

### Variables de Entorno
```typescript
// En .env
VITE_API_URL=http://localhost:3000
```

### Endpoints Consumidos
| Endpoint | Método | Propósito |
|----------|--------|-----------|
| `/auth/login` | POST | Autenticación de usuarios |
| `/patients` | GET | Obtener lista de pacientes |
| `/patients` | POST | Crear nuevo paciente |

## Flujos de Comunicación

### 1. Flujo de Autenticación
```
Componente Login → AuthContext → API Backend → LocalStorage → Redirección
```

### 2. Flujo de Creación de Pacientes
```
Formulario Modal → Transformación de datos → API Backend → Feedback al usuario
```

### 3. Flujo de Obtención de Datos
```
Componente Mount → useEffect → API Backend → Actualización de estado → Renderizado
```

## Mejores Prácticas Implementadas

### 1. Separación de Responsabilidades
- Contexto para lógica de autenticación
- Componentes modales para operaciones CRUD
- Servicios separados por entidades

### 2. Manejo de Estado
- Estados de loading para feedback visual
- Estados de error para manejo de fallos
- Persistencia de sesión en localStorage

### 3. Seguridad
- Credenciales incluidas en requests
- Validación de respuestas del servidor
- Manejo seguro de errores

### 4. UX/UI
- Estados de carga durante operaciones asíncronas
- Mensajes de error descriptivos
- Confirmaciones de operaciones exitosas

## Consideraciones Técnicas

### 1. Formato de Datos
- Fechas: Formato `yyyy-MM-dd`
- Teléfonos: Prefijo `+505` para Nicaragua
- Prioridades: Conversión de string a número (0,1)

### 2. Performance
- Carga lazy de datos en componentes
- Actualización optimista del estado local
- Manejo eficiente de re-renderizados

### 3. Mantenibilidad
- Código modular y reutilizable
- Tipado TypeScript para seguridad de tipos
- Estructura consistente de peticiones

Esta implementación garantiza una comunicación robusta y eficiente entre el cliente y el servidor, proporcionando una experiencia de usuario fluida y manejo adecuado de los estados de la aplicación.