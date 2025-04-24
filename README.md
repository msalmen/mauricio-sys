# 🧠 mauricio.sys

**CV interactivo con estética sci-fi / retro-futurista**  
Diseñado como una terminal navegable tipo sistema operativo. Cada módulo representa una parte del perfil profesional de Mauricio.

---

## 🎮 Características principales

- ✅ Navegación por consola con estética pixel CRT
- ✅ Fondo animado tipo espacio con caracteres ASCII
- ✅ Marcos visuales estilo dispositivo retro-espacial
- ✅ Información dividida en módulos interactivos
- ✅ Efectos visuales dinámicos coherentes con la temática
- ✅ Modo historia progresivo desbloqueando secciones

---

## 🧱 Estructura de componentes

| Componente            | Descripción                                                                 |
|------------------------|------------------------------------------------------------------------------|
| `DeviceShell`          | Marco visual externo del dispositivo estilo consola                         |
| `VisualSceneWrapper`   | Componente maestro que integra fondo de estrellas + overlay + layout        |
| `AsciiStars`           | Generador de estrellas en ASCII con animación de intensidad                 |
| `CrtOverlay`           | Gradiente radial verde sutil hacia adentro (efecto CRT controlado)          |
| `TerminalContent`      | Contenedor principal de texto dentro del dispositivo                        |
| `ConsoleNav`           | Botón TOGGLE NAV y menú flotante para navegar entre módulos                 |
| `pagesContent.js`      | Toda la narrativa centralizada para fácil edición y traducción              |

---

## 🛠 Módulos activos

- `BootSequence`
- `CoreIdentity`
- `SkillModules`
- `ExpLog`
- `Missions`
- `UplinkChannel`
- `UnlockDebug`

---

## 🧪 Convención de tags

[vX.Y]-[bloque]-[descripción]

Ejemplos:

- `v1.0-core-glitch`
- `v0.9-layout-stable`
- `v1.3-uplink-enhance`

---

## 📜 Historial de versiones

### 🔖 `v1.0-core-glitch`
- 🧠 Eliminado efecto typewriter en el módulo `CoreIdentity`
- ✨ Agregado efecto visual `glitch-flash` por línea
- 📏 Ajuste de espaciado inferior para evitar duplicación visual
- 🔒 Exclusivo del módulo de identidad

---

### 🔖 `v0.9-layout-stable`
- 🖼 Implementación completa del sistema visual retro:
  - `DeviceShell`, `VisualSceneWrapper`, `AsciiStars`, `CrtOverlay`, `TerminalContent`
- 🌌 Fondo generativo de estrellas ASCII
- 🟩 CRT halo orientado al interior del marco
- ✅ Todos los módulos actualizados a esta arquitectura

---

### 🔖 `v1.0-docs-update`
- 📝 Documentación estructurada en `README.md`
- 📌 Establecida convención de tags para futuras versiones
- 📦 Descripción completa de la arquitectura y diseño
- 🔁 Módulos y versiones alineados con historial de cambios

---

### 🔖 `v1.1-layout-stabilized`

- 🧱 Refactor completo del sistema de layout visual
- 🖼 Se introdujo `WindowFrame` como contenedor central visual
- 📦 Se reestructuró `SystemScreen`, `TerminalContent` y el orden de capas
- 🧩 `ConsoleNav` fue desacoplado del overlay flotante y embebido correctamente
- 🛠 Se eliminó lógica duplicada y errores visuales por múltiples montajes
- 💡 Preparado para diseño responsivo y futuras mejoras por tamaño de pantalla

---

### 🔖 `v1.3.1`

- 🐛 Corrección: la animación de apertura de `WindowFrame` ya no se reproduce al cambiar de ruta
- 🎯 Ahora se ejecuta solo una vez por sesión, la primera vez que se monta
- ✔️ Mejora la sensación de continuidad entre pantallas

---

### 🔖 `v1.4-skillmodules-polish`

- 🎮 Los módulos de habilidades ahora se cargan uno por uno como entradas de log
- 👆 Cada módulo muestra solo el título inicialmente y se expande al tocar o hacer clic
- ✅ Una vez abiertos, los módulos no se pueden cerrar, reforzando la sensación de desbloqueo
- 🔘 Se implementó un ícono de toggle retro: `[>]` → `[v]`
- 🎨 Se eliminó el recuadro visual para cada módulo, mejorando la limpieza y legibilidad
- ✨ El botón de continuar aparece solo al final y permanece visible
- 📐 Se ajustó el margen inferior global (`TerminalContent`) para lograr proporción visual con el margen superior

---

## 🚀 Cómo correr el proyecto

```bash
npm install
npm run dev


📦 Plan futuro

💾 Opción de exportar CV como archivo descargable

🧩 Métricas de navegación por sección

🔍 Modo unlock_debug expandible con mini easter eggs
