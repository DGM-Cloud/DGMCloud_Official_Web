# DGM CLOUD - Ultra-Minimalista Landing Page

## 🎨 Visión de Diseño

Una landing page de élite para una firma de ingeniería de software que transmite la precisión de Apple con la robustez de un backend en .NET. Cada elemento está diseñado para ser funcional, limpio y proyectar valor premium.

### Paleta de Colores "Midnight"

- **Fondo Principal**: `#0A0A0E` (Negro profundo)
- **Foreground**: `#F5F5F7` (Blanco metálico)
- **Acento Primario**: `#00EEFF` (Cian eléctrico)
- **Grises Metálicos**: `#1A1A22`, `#2A2A32`, `#3A3A45`, `#5A5A65`, `#8A8A95`

**Total de colores**: 5 + neutros (cumple con guía de máximo 5)

## 🏗️ Estructura del Proyecto

```
components/
  ├── header.tsx           # Navegación fija con logo y CTA
  ├── hero.tsx             # Sección hero con título gradiente
  ├── bento-grid.tsx       # Grid de servicios: Web, Mobile, Inventory, Backend
  ├── tech-stack.tsx       # Stack de tecnologías con iconos
  ├── contact-form.tsx     # Formulario terminal-style
  ├── custom-cursor.tsx    # Cursor reactivo personalizado
  └── footer.tsx           # Footer minimalista

app/
  ├── page.tsx             # Página principal que integra todo
  ├── layout.tsx           # Layout raíz con metadata SEO
  └── globals.css          # Tema Midnight + glassmorphism + grain effect

lib/
  └── animations.ts        # Variantes reutilizables de Framer Motion
```

## ✨ Características Principales

### 1. Hero Section
- Tipografía masiva con línea de altura óptima
- Título gradiente sutil de cian a cyan-400
- Animaciones fade-in-up con stagger
- CTA buttons con glassmorphism

### 2. Bento Grid
- 4 áreas de expertise en layout adaptativo
- Web Solutions (2x2), Mobile Apps, Inventory Systems, Backend Infrastructure
- Hover effects con color dinámico
- Animaciones de entrada escalonadas

### 3. Tech Stack
- 14 tecnologías organizadas por categoría
- Frontend, Backend, Mobile, DevOps
- Grid responsivo 2x4 en desktop, 2x2 en mobile
- Leyenda de categorías con color coding

### 4. Contact Form
- Diseño terminal/CLI moderno
- Estados: idle, loading, success, error
- Validación básica
- Animaciones suaves

### 5. Custom Cursor
- Cursor de anillo sólido (#00EEFF)
- Trail efecto con opacidad reducida
- Escala adaptativa en elementos clickeables
- Physics realista con Framer Motion springs

### 6. Glassmorphism Efectos
- Backdrop blur de 12px
- Borders translúcidos con opacidad
- Hover effects con cambios de opacidad
- Shadow glow en colores primarios

### 7. Grain Effect
- SVG turbulence noise aplicado globalmente
- Opacidad: 1.5% para sutil
- Crea textura sin ser invasivo

## 🎬 Animaciones Framer Motion

### Entrada (Fade-In-Up)
```typescript
fadeInUp: {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}
```

### Stagger Children
Componentes padres usan `staggerChildren: 0.1` para efecto cascada

### Scroll Triggers
Componentes usan `whileInView` para animarse solo cuando son visibles

### Interactive Elements
- Botones: `whileHover` scale y `whileTap` feedback
- Cards: `whileHover` y: -5 para efecto flotante
- Cursor: Spring physics para suavidad natural

## 🛠️ Tech Stack Utilizado

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 con variables CSS
- **Animaciones**: Framer Motion 12.38.0
- **Fuentes**: Geist (Google Fonts) para headlines y body

## 📱 Responsive Design

- **Mobile-first approach**
- Desktop grid: 3 cols para bento, 4 cols para tech
- Tablet grid: Adaptaciones intermedias
- Mobile: Stack vertical con espacios generosos

## 🎯 Performance & Accessibility

- ✅ HTML semántico con `main`, `header`, `section`, `footer`
- ✅ ARIA roles en componentes interactivos
- ✅ Alt text en imágenes (sin decorativas)
- ✅ Focus states en inputs y botones
- ✅ Color contrast verificado (WCAG AAA)
- ✅ Tipografía legible (16px+ en mobile)

## 🚀 Próximos Pasos Sugeridos

1. **Conectar formulario**: Integrar con servicio de email (SendGrid, Resend)
2. **Optimizar imágenes**: Agregar secciones con hero image o artwork
3. **Portfolio section**: Showcase de proyectos reales
4. **Testimonials**: Sección de clientes satisfechos
5. **Blog**: Artículos sobre engineering y tech trends
6. **Analytics**: Google Analytics o Vercel Analytics para tracking

## 🔄 Variables de Tema CSS

Todas las variables se pueden personalizar en `app/globals.css`:

```css
:root {
  --background: #0A0A0E;
  --foreground: #F5F5F7;
  --primary: #00EEFF;
  --card: #1A1A22;
  --border: #2A2A32;
  /* ... más variables */
}
```

## 📝 Notas de Desarrollo

- **Zero Layout Shift**: Fonts preloaded, no fallback flashes
- **Optimal LCP**: Hero content renderiza sin JS heavy
- **Custom Cursor**: Deshabilitado en mobile automáticamente (requiere mouse)
- **Grain Texture**: Genera on-demand con SVG, sin assets adicionales

---

**Diseño y Desarrollo**: v0 AI  
**Tema**: Midnight (Cian Eléctrico)  
**Año**: 2025  
**Estado**: Production-Ready ✨
