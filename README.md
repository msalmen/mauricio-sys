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

## 🔁 Últimos cambios

### 🔖 Tag: `v1.0-core-glitch`

- 🧠 Eliminado efecto `typewriter` en el módulo `CoreIdentity` (causaba duplicación visual)
- ✨ Agregado efecto `glitch-flash` animado en cada línea del texto
- ✅ Padding y espaciado inferior ajustado para evitar superposiciones ópticas
- ✅ Se mantuvo este efecto exclusivamente en el módulo de identidad

---

### 🔖 Tag: `v0.9-layout-stable`

- 🖼 Se implementó el layout modular `VisualSceneWrapper` con:
  - `DeviceShell`, `AsciiStars`, `CrtOverlay`, `TerminalContent`
- 🌌 Fondo de estrellas animadas en ASCII (parpadeo aleatorio)
- 🟩 CRT overlay centrado con brillo interior contenido
- 📦 Todos los módulos (`BootSequence`, `CoreIdentity`, `Skills`, `ExpLog`, `Missions`, `UplinkChannel`, `UnlockDebug`) actualizados a este sistema

---

## 🧪 Convención de tags

| Etiqueta             | Propósito                                  |
|----------------------|---------------------------------------------|
| `v1.0-core-glitch`   | Glitch animado activo solo en identidad     |
| `v0.9-layout-stable` | Base visual modular + CRT + navegación      |
| `vX.Y-modulo-...`    | Formato para iteraciones por bloque         |

---

## 🚀 Cómo correr el proyecto

```bash
npm install
npm run dev
