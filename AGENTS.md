# Agents and AI Instructions

## 🏗 Arquitectura y Estándares del Proyecto

Este espacio de trabajo contiene aplicaciones Angular desarrolladas bajo una estricta **Arquitectura Hexagonal (Clean Architecture)**. A continuación, se detallan las reglas y convenciones que cualquier agente de IA (como GitHub Copilot) debe seguir al sugerir, refactorizar o crear código dentro del proyecto (`courses/projects/backoffice/src/app`).

### 1. Framework y Stack General

- **Framework:** Angular 21.
- **Control de Estado:** Uso de **Angular Signals** (`signal`, `computed`, `effect`) en lugar de RxJS/BehaviorSubjects para manejar y exponer el estado, especialmente en la capa de Aplicación.
- **Componentes:** Angular Standalone Components (evitar usar `NgModules` a menos que sea estrictamente necesario).
- **Inyección de Dependencias:** Uso de tokens (`InjectionToken`) para desacoplar interfaces (Ports) de sus implementaciones concretas (Adapters).

### 2. Estructura de Folders por Capas (Hexagonal Architecture)

Todo `feature` nuevo o existente debe dividir sus responsabilidades estrictamente en los siguientes directorios:

#### `domain/` (Dominio)

- **Responsabilidad:** Lógica core de negocio, entidades puras y Value Objects.
- **Regla:** **Cero dependencias externas.** No debe importar nada de `@angular/core`, de bibliotecas de terceros (librerías UI, HTTP, etc.) ni de otras capas que no sean el propio domino.
- **Formato:** Clases TypeScript puras que encapsulen estado y validación de negocio.

#### `ports/` (Puertos)

- **Responsabilidad:** Contratos/Interfaces que definen cómo el dominio (o la aplicación) se comunica con el mundo exterior (APIs, Base de Datos, Storage local).
- **Regla:** Definir interfaces limpias y el `InjectionToken` correspondiente.

#### `adapters/` (Adaptadores)

- **Responsabilidad:** Implementación concreta de los puertos definidos en `ports/`.
- **Regla:** Aquí residen los llamados HTTP (`HttpClient`), integración con librerías externas, acceso a `localStorage`, mocks de datos, etc. Las clases aquí implementan las interfaces del puerto.

#### `application/` (Casos de Uso / Aplicación)

- **Responsabilidad:** Orquestar los flujos de la aplicación. Conectar los componentes de la interfaz de usuario con los puertos y el dominio.
- **Regla:**
  - Son servicios Angular (`@Injectable`).
  - **Uso de Señales (Signals):** Mantener el estado de la aplicación utilizando señales privadas (`#state = signal(...)`) y exponerlas como señales de solo lectura (`public state = this.#state.asReadonly()`).
  - **Inyección:** Inyectar los puertos a través de sus `InjectionToken` correspondientes, NO inyectar los adaptadores directamente.

#### `presentation/` (Presentación)

- **Responsabilidad:** Componentes UI interactivos, vistas de página (`smart` y `dumb` components) y enrutamiento (ej: `courses.routes.ts`).
- **Regla:**
  - Los componentes de interfaz **solo deben depender de la capa `application`**. No deben inyectar directamente repositorios, HTTP clients ni adaptadores.
  - Consumir el estado desde los `Signals` del servicio de aplicación mediante enlazado en el template HTML o funciones computadas.

### 3. Buenas Prácticas Generales

- **Shared, Core & Layout:**
  - `core/`: Configuración global, interceptores, guards, y utilidades esenciales (ej. clases como `paginator-custom.ts`).
  - `shared/`: Componentes reutilizables a nivel UI (alertas, menús, tablas, paginadores), directivas y pipes transversales.
  - `layout/`: Estructura general de la pantalla (Header, Sidebar, Container).
- **Estilos:** Uso de **SCSS** para todos los estilos de los componentes.
- **Tipado Fuerte:** Evitar el uso de `any`. Crear interfaces y tipos específicos (`types/`, `interfaces/`).

---

> **Nota para los Agentes Copilot:** Cuando se pida crear un nuevo "Feature" (ej. `Products`), crea _toda_ la estructura de carpetas (`domain`, `ports`, `adapters`, `application`, `presentation`) y archivos respetando este contrato hexagonal.
