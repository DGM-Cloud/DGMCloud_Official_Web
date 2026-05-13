# 🎨 DGM CLOUD - Temas de Color Alternativos

Este archivo contiene paletas de colores alternativas que puedes usar reemplazando los valores en `/app/globals.css`.

---

## 1. 🌙 MIDNIGHT (Actual)
### Cian Eléctrico + Negro Profundo

```css
:root {
  --background: #0A0A0E;
  --foreground: #F5F5F7;
  --primary: #00EEFF;
  --card: #1A1A22;
  --border: #2A2A32;
  --muted: #3A3A45;
  --muted-foreground: #8A8A95;
}
```

**Uso**: Looks futurista, tech-forward, premium
**Mejor para**: SaaS, AI/ML, software engineering
**Vibe**: Apple meets Cyberpunk

---

## 2. 🌅 SUNSET BLAZE
### Naranja Vibrante + Dorado

```css
:root {
  --background: #1A0F0A;
  --foreground: #FFF8F5;
  --primary: #FF6B35;
  --card: #2A1810;
  --border: #4A2820;
  --muted: #6A4835;
  --muted-foreground: #D4A89A;
}
```

**Uso**: Warm, energetic, approachable
**Mejor para**: Creative agencies, startups, design firms
**Vibe**: Sunset gradient, creative confidence

---

## 3. 🌊 OCEAN DEEP
### Azul Océano + Cyan

```css
:root {
  --background: #0A1428;
  --foreground: #E8F4F8;
  --primary: #00D9FF;
  --card: #1A2540;
  --border: #2A3555;
  --muted: #4A5570;
  --muted-foreground: #8A95B0;
}
```

**Uso**: Calm, professional, trustworthy
**Mejor para**: Finance, healthcare, enterprise
**Vibe**: Ocean serenity, corporate elegance

---

## 4. 💚 EMERALD FOREST
### Verde Esmeralda + Tierra

```css
:root {
  --background: #0A1410;
  --foreground: #F0F8F5;
  --primary: #10B981;
  --card: #1A2415;
  --border: #2A3825;
  --muted: #4A5840;
  --muted-foreground: #8A9B80;
}
```

**Uso**: Natural, sustainable, growth-focused
**Mejor para**: Environmental, fintech, health tech
**Vibe**: Nature-inspired, growth potential

---

## 5. 💜 VIOLET MYSTIQUE
### Púrpura Vibrante + Lavanda

```css
:root {
  --background: #1A0D28;
  --foreground: #F5F0FF;
  --primary: #A78BFA;
  --card: #2A1A38;
  --border: #3A2A48;
  --muted: #5A4A68;
  --muted-foreground: #9A8AB5;
}
```

**Uso**: Creative, mystical, premium
**Mejor para**: Design studios, art platforms, luxury brands
**Vibe**: Artistic, sophisticated

---

## 6. ❤️ RUBY CRIMSON
### Rojo Profundo + Fucsia

```css
:root {
  --background: #1A0A10;
  --foreground: #FFE8ED;
  --primary: #EC4899;
  --card: #2A1418;
  --border: #4A2428;
  --muted: #6A4450;
  --muted-foreground: #CA9AB8;
}
```

**Uso**: Bold, energetic, passionate
**Mejor para**: Fashion, entertainment, gaming
**Vibe**: Confident, attention-grabbing

---

## 7. ⚡ NEON GLOW
### Lime Neon + Púrpura

```css
:root {
  --background: #0F0F1A;
  --foreground: #F0FFF0;
  --primary: #39FF14;
  --card: #1A1A2E;
  --border: #2A2A45;
  --muted: #4A4A65;
  --muted-foreground: #8A8A9F;
}
```

**Uso**: High-energy, futuristic, bold
**Mejor para**: Gaming, crypto, tech startups
**Vibe**: 90s retro meets modern neon

---

## 8. 🤎 WARM SAND
### Beige Caramelo + Marrón

```css
:root {
  --background: #1A1410;
  --foreground: #F5EFE5;
  --primary: #D4A574;
  --card: #2A2218;
  --border: #3A3028;
  --muted: #5A5045;
  --muted-foreground: #9A9085;
}
```

**Uso**: Warm, approachable, timeless
**Mejor para**: Luxury, lifestyle, boutique brands
**Vibe**: Premium neutral, comfortable elegance

---

## 9. 🔷 INDIGO DREAM
### Indigo Profundo + Azul Claro

```css
:root {
  --background: #0F0A1F;
  --foreground: #F0F5FF;
  --primary: #6366F1;
  --card: #1A1530;
  --border: #2A2045;
  --muted: #4A4060;
  --muted-foreground: #8A80A8;
}
```

**Uso**: Intellectual, calming, sophisticated
**Mejor para**: Education, research, professional services
**Vibe**: Thoughtful, reliable

---

## 10. 🌟 GOLD LUXURY
### Oro + Negro Profundo

```css
:root {
  --background: #0A0A0E;
  --foreground: #FFE8CC;
  --primary: #FFD700;
  --card: #1A1410;
  --border: #3A3020;
  --muted: #5A5040;
  --muted-foreground: #AAA080;
}
```

**Uso**: Luxury, premium, exclusive
**Mejor para**: Jewelry, finance, premium services
**Vibe**: Opulent, prestigious

---

## Cómo Aplicar Estos Temas

### Opción 1: Reemplazar en globals.css
```bash
# Copia los valores del tema que deseas
# Pégalos en :root de /app/globals.css
```

### Opción 2: Sistema de Múltiples Temas (Avanzado)
```tsx
// En app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="midnight">
      {/* data-theme puede ser: sunset, ocean, etc */}
      {children}
    </html>
  )
}
```

```css
/* En globals.css */
html[data-theme="midnight"] {
  --primary: #00EEFF;
}

html[data-theme="sunset"] {
  --primary: #FF6B35;
}

html[data-theme="ocean"] {
  --primary: #00D9FF;
}
```

### Opción 3: Theme Switcher (Recomendado)
```tsx
'use client';
import { useState } from 'react';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('midnight');

  const themes = ['midnight', 'sunset', 'ocean', 'emerald', 'violet'];

  return (
    <select value={theme} onChange={(e) => {
      setTheme(e.target.value);
      document.documentElement.setAttribute('data-theme', e.target.value);
    }}>
      {themes.map(t => <option key={t}>{t}</option>)}
    </select>
  );
}
```

---

## 🎨 Combinaciones Recomendadas

### Para Startups Tech
- **Primary**: #00EEFF (Midnight) o #39FF14 (Neon)
- **Background**: #0A0A0E
- **Mood**: Futurista, disruptiva

### Para Agencias de Diseño
- **Primary**: #FF6B35 (Sunset) o #A78BFA (Violet)
- **Background**: #1A0F0A o #1A0D28
- **Mood**: Creativa, premium

### Para Empresas Financieras
- **Primary**: #00D9FF (Ocean) o #6366F1 (Indigo)
- **Background**: #0A1428 o #0F0A1F
- **Mood**: Confiable, profesional

### Para Marcas de Lujo
- **Primary**: #FFD700 (Gold) o #D4A574 (Warm Sand)
- **Background**: #0A0A0E o #1A1410
- **Mood**: Exclusiva, sofisticada

---

## 📊 Consejos de Selección de Color

### Considera Tu Industria
- **Tech/SaaS**: Cian, Neon, Indigo
- **Creative**: Púrpura, Naranja, Rosa
- **Finance/Corporate**: Azul, Indigo, Oro
- **Health/Wellness**: Verde, Azul, Warm Sand
- **Entertainment**: Rosa, Púrpura, Neon

### Considera Tu Audiencia
- **B2B Enterprise**: Colores más neutrales
- **B2C Consumer**: Colores más vibrantes
- **Luxury**: Oro, Marrón, Neutral warmth
- **Startup**: Neon, Cian, Energético

### Accesibilidad
✅ Todos estos temas mantienen:
- Contraste texto/fondo > 7:1 (WCAG AAA)
- Suficiente saturación para atraer
- Suficiente neutralidad para no cansar

---

## 🔄 Transición Suave Entre Temas

Para transiciones suaves al cambiar temas:

```css
/* En globals.css */
:root {
  transition: background-color 0.3s ease, color 0.3s ease;
}

* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
```

---

## 💡 Pro Tips

1. **Mantén consistencia**: Una vez que elijas un tema, úsalo en todo el sitio
2. **Prueba en diferentes pantallas**: Los colores se ven diferente en distintos dispositivos
3. **Pide feedback**: Muestra a tu audiencia objetivo y recibe feedback
4. **Considera dark mode**: Todos estos temas incluyen `:root` oscuro
5. **Aplica a otros elementos**: El color primario se usa en links, botones, accents

---

**Recuerda**: El mejor tema es el que representa tu marca y resuena con tu audiencia. 🎨

¡Experimenta y encuentra el que más te gusta!
