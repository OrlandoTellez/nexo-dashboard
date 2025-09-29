# Portal Médico - Sistema Hospitalario de Nicaragua

![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tauri](https://img.shields.io/badge/Tauri-2.0-FFC131)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)

Sistema de gestión hospitalaria desarrollado como aplicación de escritorio para la administración de pacientes, citas médicas y flujo hospitalario en tiempo real.

## Características Principales

### Módulos del Sistema
- **Dashboard Principal** - Métricas y resumen operativo
- **Gestión de Citas** - Programación y seguimiento de citas médicas
- **Gestión de Pacientes** - Expedientes médicos completos
- **Flujo de Pacientes** - Monitoreo en tiempo real del flujo hospitalario
- **Sistema de Autenticación** - Acceso seguro con roles de usuario

### Funcionalidades Destacadas
- Interfaz moderna con diseño responsivo
- Navegación con sidebar colapsable
- Modales para creación/edición de registros
- Búsqueda y filtrado avanzado
- Validación de datos en frontend y backend
- Gestión de estados y prioridades
- Reportes y métricas en tiempo real

## 🛠 Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **React Router DOM** - Navegación
- **React Query** - Gestión de estado del servidor
- **Lucide React** - Iconografía
- **date-fns** - Manipulación de fechas

### Backend & Desktop
- **Tauri 2.0** - Framework para aplicaciones de escritorio
- **Rust** - Backend nativo
- **API REST** - Comunicación con servicios externos

## Requisitos del Sistema

### Desarrollo
- Node.js 18+ 
- Rust 1.70+
- pnpm (recomendado) o npm

### Producción
- Windows 10+, macOS 10.15+, o Linux
- 4GB RAM mínimo
- 500MB espacio en disco

## Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/OrlandoTellez/nexo-dashboard.git
cd nexo-dashboard
```

### 2. Instalar Dependencias
```bash
pnpm install
# o
npm install
```

### 3. Configurar Variables de Entorno
Crear archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=http://localhost:3000
```

### 4. Ejecutar en Modo Desarrollo
```bash
# Solo frontend
pnpm dev

# Aplicación completa (Tauri + React)
pnpm tauri dev
```

### 5. Construir para Producción
```bash
# Build de producción
pnpm tauri build
```

## Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── auth/            # Autenticación
│   ├── layout/          # Layout principal
│   ├── modals/          # Modales de formularios
│   └── ui/              # Componentes de UI
├── context/             # Contextos de React
├── pages/               # Páginas de la aplicación
├── routes/              # Configuración de rutas
├── types/               # Definiciones TypeScript
├── constants/           # Datos y configuraciones
└── lib/                 # Utilidades
```

## Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo Vite
pnpm build        # Build de producción
pnpm preview      # Preview del build
pnpm tauri dev    # Desarrollo con Tauri
pnpm tauri build  # Build de la aplicación desktop
```

## Sistema de Autenticación

El sistema incluye autenticación basada en tokens con protección de rutas:

```typescript
<PrivateRoute>
  <Dashboard />  {/* Solo usuarios autenticados */}
</PrivateRoute>
```

## Validación de Datos

El sistema implementa múltiples capas de validación:

- **Validación HTML5** - Campos requeridos y tipos básicos
- **Validación TypeScript** - Tipado estático
- **Validación Backend** - APIs con esquemas de datos
- **Transformación** - Normalización de formatos

Para más detalles, consultar la [documentación de validación](./documentacion/VALIDATION_DATA.md).

## Módulos Específicos

### Gestión de Pacientes
- Registro completo de información médica
- Historial clínico y alergias
- Contactos de emergencia
- Priorización de atención

### Gestión de Citas
- Programación flexible con especialistas
- Slots de tiempo predefinidos
- Estados de cita (pendiente, confirmada, completada)
- Notas y observaciones médicas

### Flujo de Pacientes
- Monitoreo en tiempo real de 7 etapas
- Métricas de rendimiento
- Alertas del sistema
- Tiempos de espera

## Configuración Tauri

La aplicación está configurada para:
- Ventana principal de 800x600px
- Iconos multiplataforma
- Permisos de sistema de archivos
- Comunicación nativa con Rust

## Métricas y Reportes

- Eficiencia general del sistema
- Pacientes por hora
- Tiempos de espera promedio
- Niveles de satisfacción

## Solución de Problemas

### Problemas Comunes

1. **Error de compilación Rust**
   ```bash
   rustup update
   cargo clean
   ```

2. **Problemas de dependencias**
   ```bash
   pnpm install --force
   ```

3. **Error de API**
   - Verificar que el backend esté ejecutándose
   - Validar variables de entorno

## Contribución

1. Fork el proyecto
2. Crear una rama para la feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Certificaciones

Sistema certificado por el Ministerio de Salud de Nicaragua - Cumple con los estándares de seguridad y privacidad de datos médicos.

---

**Desarrollado para el Sistema Hospitalario de Nicaragua** 🩺🇳🇮