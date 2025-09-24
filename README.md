# Paciente App Dashboard - Frontend

Aplicación de escritorio para la gestión de pacientes y citas médicas desarrollada con Tauri, React y TypeScript como parte del hackaton 2025 Nicaragua..

## 📋 Descripción

Dashboard médico para el sistema de gestión hospitalaria que permite a médicos y personal administrativo gestionar pacientes, citas médicas y flujos de atención en tiempo real. Desarrollada como solución frontend para el reto avanzado del hackaton.

## 🎯 Contexto del Reto

### Reto: Portal Paciente – “Paciente App” - Avanzado
**Descripción**: Automatizar los procesos de registro, seguimiento de pacientes y programación de citas médicas en los hospitales públicos de Nicaragua.

### Funcionalidades Implementadas

#### Para Personal Médico:
- ✅ **Gestión de citas médicas** y agendas de médicos
- ✅ **Registro y gestión de expedientes** clínicos electrónicos
- ✅ **Gestión de flujo de pacientes** en tiempo real
- ✅ **Dashboard administrativo** con métricas clave
- ✅ **Sistema de notificaciones** y recordatorios

#### Para Pacientes (pendiente de integración):
- 📋 Registro y gestión de perfiles
- 📋 Programación y gestión de citas médicas
- 📋 Acceso a historial clínico básico

## 🛠 Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **React Router DOM** - Navegación cliente
- **TanStack Query** - Gestión de estado del servidor
- **Lucide React** - Iconografía

### Desktop App
- **Tauri 2** - Framework para aplicaciones de escritorio
- **Rust** - Backend nativo para Tauri

### UI Components
- **Radix UI** - Componentes accesibles y sin estilos
- **Componentes personalizados** con Tailwind CSS

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── auth/            # Autenticación
│   │   └── LoginForm.tsx
│   ├── layout/          # Layout principal
│   │   ├── DashboardLayout.tsx
│   │   └── AppSidebar.tsx
│   └── ui/              # Componentes de UI base
│       ├── Input.tsx
│       └── ...
├── pages/               # Páginas de la aplicación
│   ├── Dashboard.tsx    # Panel principal
│   ├── Appointments.tsx # Gestión de citas
│   ├── Patients.tsx     # Gestión de pacientes
│   ├── PatientsFlow.tsx # Flujo de pacientes
│   └── NotFound.tsx     # Página 404
├── lib/                 # Utilidades y configuraciones
│   └── utils.ts         # Funciones auxiliares
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales

src-tauri/               # Backend de Tauri (Rust)
├── src/
│   ├── main.rs          # Punto de entrada de Tauri
│   └── lib.rs           # Lógica principal
├── Cargo.toml           # Dependencias de Rust
├── tauri.conf.json      # Configuración de Tauri
└── capabilities/        # Permisos de la aplicación
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18+ y npm/pnpm
- **Rust** y Cargo (para Tauri)
- **Tauri CLI** (`cargo install tauri-cli`)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/OrlandoTellez/paciente-app-dashboard.git
cd paciente-app-dashboard
```

2. **Instalar dependencias JavaScript**
```bash
pnpm install  # o npm install
```

3. **Instalar dependencias de Rust** (automático con Tauri)
```bash
cargo build
```

4. **Ejecutar en modo desarrollo**
```bash
pnpm tauri dev
```

## 📊 Scripts Disponibles

### Desarrollo
```bash
pnpm dev          # Ejecutar solo el frontend (Vite)
pnpm tauri dev    # Ejecutar aplicación completa (Tauri + React)
```

### Build
```bash
pnpm build        # Build del frontend
pnpm tauri build  # Build de la aplicación de escritorio
```

### Utilidades
```bash
pnpm preview      # Preview del build frontend
pnpm tauri        # Comandos adicionales de Tauri
```

## 🎨 Características de la Interfaz

### Sistema de Diseño
- **Paleta de colores médica**: Azules profesionales (#2977f5)
- **Diseño responsive**: Adaptable a diferentes tamaños de pantalla
- **Modo claro**: Optimizado para entornos médicos
- **Tipografía clara**: Legibilidad optimizada

### Componentes Principales

#### 🔐 Sistema de Autenticación
- **Login seguro** con validación de credenciales
- **Roles de usuario** (Médico, Administrativo, etc.)
- **Protección de rutas** basada en permisos

#### 📊 Dashboard Principal
- **Métricas en tiempo real**: Citas, pacientes, tiempos de espera
- **Vista rápida de citas** programadas para el día
- **Alertas de pacientes críticos**
- **Gráficos de flujo** de pacientes

#### 🧭 Navegación Intuitiva
- **Sidebar colapsable** para maximizar espacio
- **Navegación por pestañas** organizada por funcionalidad
- **Búsqueda global** de pacientes y citas
- **Accesos rápidos** a funciones frecuentes

## 🏥 Páginas y Funcionalidades

### 1. Dashboard (`/dashboard`)
- Resumen general de la jornada médica
- Métricas clave: citas del día, pacientes en fila, tiempos de espera
- Próximas citas y pacientes críticos
- Gráficos de flujo de pacientes

### 2. Gestión de Citas (`/appointments`)
- *Pendiente de implementación completa*
- Visualización de agenda médica
- Programación, modificación y cancelación de citas
- Estados de cita: pendiente, confirmada, completada, cancelada

### 3. Gestión de Pacientes (`/patients`)
- *Pendiente de implementación completa*
- Registro y edición de perfiles de pacientes
- Historial clínico básico
- Búsqueda y filtrado de pacientes

### 4. Flujo de Pacientes (`/patient-flow`)
- *Pendiente de implementación completa*
- Vista en tiempo real del flujo de atención
- Estados: en espera, en consulta, atendido, crítico
- Gestión de prioridades y alertas

## 🔧 Configuración de Tauri

### Archivos de Configuración Principal

#### `src-tauri/tauri.conf.json`
```json
{
  "windows": [{
    "title": "paciente-app-dashboard",
    "width": 800,
    "height": 600
  }],
  "bundle": {
    "active": true,
    "targets": "all"
  }
}
```

#### `src-tauri/capabilities/default.json`
Define los permisos de la aplicación para acceder a APIs del sistema.

## 🎯 Próximas Funcionalidades

### 🔄 Integración con Backend
- [ ] Conexión con API REST del backend Rust
- [ ] Sincronización en tiempo real
- [ ] Gestión de estado global con TanStack Query

### 📱 Mejoras de UI/UX
- [ ] Modo oscuro para diferentes ambientes
- [ ] Vista de calendario para citas
- [ ] Drag & drop para gestión de flujos
- [ ] Notificaciones del sistema operativo

### 🏥 Funcionalidades Médicas
- [ ] Historial clínico completo
- [ ] Sistema de turnos virtuales
- [ ] Integración con impresoras para recibos
- [ ] Reportes y estadísticas avanzadas

### 🔒 Seguridad
- [ ] Autenticación JWT con refresh tokens
- [ ] Encriptación de datos sensibles
- [ ] Roles y permisos granularizados

## 🐛 Solución de Problemas

### Problemas Comunes

**Error de compilación de Tauri**
```bash
# Limpiar cache de Rust
cargo clean
# Reinstalar dependencias
pnpm install && cargo build
```

**Problemas de permisos en Windows**
- Ejecutar como administrador si hay problemas de acceso a archivos

**Error de puerto en desarrollo**
```bash
# Verificar que el puerto 1420 esté libre
netstat -ano | findstr :1420
```

## 🤝 Contribución

Este proyecto fue desarrollado como parte de un hackaton. Para contribuir:

1. Asegurarse de tener todas las dependencias instaladas
2. Seguir las convenciones de código existentes
3. Probar tanto el frontend como la aplicación de escritorio
4. Documentar nuevos componentes y funcionalidades



