# Roomy — Landing

Landing page de Roomy, la app para dividir la cuenta del bar/restaurante sin discusiones.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** con paleta personalizada de Roomy
- **framer-motion** para animaciones
- **lucide-react** para iconos
- i18n ligero ES/EN (sin librerías, diccionario en `lib/i18n.ts`)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel

1. Ve a [vercel.com/new](https://vercel.com/new) y conecta tu cuenta de GitHub.
2. Importa el repo `Roomy-web`.
3. Framework: **Next.js** (auto-detectado).
4. Build command: `next build` (por defecto).
5. Deploy.

No hay variables de entorno necesarias.

## Estructura

```
app/
  layout.tsx        # Root + fuentes + LocaleProvider
  page.tsx          # Composición de la home
  globals.css       # Estilos globales + utilidades
components/
  navbar.tsx
  phone-mockup.tsx  # Mockup iPhone con pantalla "Room"
  roomy-logo.tsx
  store-badges.tsx  # Botones App Store / Play Store
  sections/
    hero.tsx
    how-it-works.tsx
    features.tsx
    showcase.tsx
    faq.tsx
    cta-download.tsx
    footer.tsx
lib/
  i18n.ts           # Diccionario ES/EN
  locale-context.tsx
```

## Personalización rápida

- **Copy / textos**: editar `lib/i18n.ts` (dos bloques: `es` y `en`).
- **Colores de marca**: editar `tailwind.config.js` → `theme.extend.colors.roomy`.
- **Mockups**: `components/phone-mockup.tsx` y `components/sections/showcase.tsx`.
- **Links de stores**: ahora son botones deshabilitados con "Próximamente". Cuando tengas las URLs, edita `components/store-badges.tsx` y cambia el `<button disabled>` por un `<a href={...}>`.
