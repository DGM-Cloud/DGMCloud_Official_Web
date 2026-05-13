# DGM CLOUD - Guía de Customización

## 🎨 Cambiar la Paleta de Colores

Para cambiar el esquema de colores "Midnight" a otro tema, edita `/app/globals.css`:

### Opción 1: Modo Claro
```css
:root {
  --background: #FFFFFF;
  --foreground: #0A0A0E;
  --card: #F5F5F7;
  --primary: #00EEFF;
  --border: #E5E5E7;
  /* ... etc */
}
```

### Opción 2: Tema Sunset (Naranja/Dorado)
```css
:root {
  --background: #1A0F0A;
  --foreground: #FFF8F5;
  --primary: #FF6B35;        /* Naranja vibrante */
  --card: #2A1810;
  --border: #4A2820;
  /* ... etc */
}
```

### Opción 3: Tema Océano (Azul)
```css
:root {
  --background: #0A1428;
  --foreground: #E8F4F8;
  --primary: #00D9FF;        /* Cian océano */
  --card: #1A2540;
  --border: #2A3555;
  /* ... etc */
}
```

## 📝 Cambiar Textos y Contenido

### Hero Section
Archivo: `/components/hero.tsx`

```tsx
{/* Tagline */}
<p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
  Tu tagline aquí
</p>

{/* Main Title */}
<h1>
  <span>Tu</span>
  <span>Marca</span>
</h1>

{/* Subtitle */}
<p>Tu descripción de valor</p>
```

### Bento Grid Items
Archivo: `/components/bento-grid.tsx`

Modifica el array `bentoItems`:
```tsx
const bentoItems: BentoItem[] = [
  {
    id: 'custom-1',
    title: 'Tu Servicio',
    description: 'Descripción del servicio',
    icon: '🆕',
    color: 'from-blue-500 to-cyan-400',
    size: 'normal',
  },
  // ... más items
];
```

### Tech Stack
Archivo: `/components/tech-stack.tsx`

Modifica el array `technologies`:
```tsx
const technologies: TechItem[] = [
  { name: 'Mi Tecnología', icon: '📡', category: 'Backend' },
  // ... más tecnologías
];
```

## 🎬 Modificar Animaciones

Archivo: `/lib/animations.ts`

Ejemplo: Hacer animaciones más lentas
```tsx
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,  // Aumentado de 0.8
      ease: 'easeOut',
    },
  },
};
```

Ejemplo: Cambiar stagger delay
```tsx
containerVariants: {
  visible: {
    transition: {
      staggerChildren: 0.15,  // Aumentado de 0.1
      delayChildren: 0.2,
    },
  },
}
```

## 🖼️ Agregar Imágenes de Fondo

En `/components/hero.tsx`, agregar fondo:

```tsx
<section 
  className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-20"
  style={{
    backgroundImage: 'url(/images/hero-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Content con overlay */}
  <div className="absolute inset-0 bg-black/40" />
  {/* ... resto del contenido */}
</section>
```

## 🔤 Cambiar Tipografías

En `/app/layout.tsx`:

```tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

// En tailwind.config.ts:
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
}
```

## 📱 Responsive Breakpoints

Todos los componentes usan Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Ejemplo: Cambiar grid en bento-grid
```tsx
className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
```

## ✨ Glassmorphism Personalización

En `/app/globals.css`:

```css
.glassmorphism {
  @apply backdrop-blur-md bg-card/40 border border-border/20 rounded-lg;
}

/* Aumentar blur */
.glassmorphism {
  @apply backdrop-blur-xl bg-card/30 border border-border/30 rounded-lg;
}
```

## 🎯 Custom Cursor Personalización

En `/components/custom-cursor.tsx`:

```tsx
{/* Main cursor - cambiar tamaño/color */}
<motion.div
  className="pointer-events-none fixed w-6 h-6 rounded-full border-3 border-primary z-50"
  // ...
/>

{/* Trail cursor - cambiar color de trail */}
<motion.div
  className="pointer-events-none fixed w-3 h-3 rounded-full bg-primary/60 z-40"
  // ...
/>
```

## 🔗 Conectar Formulario a Backend

En `/components/contact-form.tsx`, reemplazar la función `handleSubmit`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', project: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }

  setTimeout(() => setStatus('idle'), 3000);
};
```

Crear `/app/api/contact/route.ts`:
```ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, project, message } = await request.json();

  // Tu lógica aquí: enviar email, guardar BD, etc.
  console.log({ name, email, project, message });

  return NextResponse.json({ success: true });
}
```

## 🎨 Agregar Secciones Nuevas

Template para nueva sección:

```tsx
'use client';

import { motion } from 'framer-motion';

export function MyNewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Tu contenido */}
        </motion.div>
      </div>
    </section>
  );
}
```

Luego agregar a `/app/page.tsx`:
```tsx
import { MyNewSection } from '@/components/my-new-section';

export default function Home() {
  return (
    <main>
      {/* ... otros componentes */}
      <MyNewSection />
    </main>
  );
}
```

## 🚀 Deployment Recomendaciones

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Variables de Entorno**
   - Agregar en Vercel Dashboard si conectas API
   - Archivo `.env.local` para desarrollo

3. **Optimizaciones Predeployment**
   ```bash
   pnpm build
   pnpm start
   ```

## 📊 Performance Tips

1. **Imágenes**: Usar Next.js Image component
   ```tsx
   import Image from 'next/image';
   
   <Image src="/my-image.jpg" alt="desc" width={800} height={600} />
   ```

2. **Lazy Loading**: Componentes heavy
   ```tsx
   const HeavyComponent = dynamic(() => import('@/components/heavy'), {
     loading: () => <div>Cargando...</div>,
   });
   ```

3. **Font Optimization**: Ya hecho en layout.tsx (Geist preload)

---

¿Necesitas ayuda con alguna customización específica? Revisa los archivos correspondientes y ajusta según tus necesidades. 🚀
