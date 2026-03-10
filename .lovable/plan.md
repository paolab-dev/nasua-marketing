

## Problema

Este es un problema clásico de las SPAs (Single Page Applications). Cuando WhatsApp, Facebook o LinkedIn rastrean una URL, **no ejecutan JavaScript**. Solo leen el HTML inicial que el servidor entrega, que siempre es `index.html`.

Las meta tags que pusimos con `react-helmet-async` solo se inyectan **después** de que React se ejecuta en el navegador. Los crawlers sociales nunca las ven — solo ven las meta tags hardcodeadas en `index.html` (líneas 12-21), que corresponden al Home.

### Solución

Hay dos opciones:

**Opción A — Vercel Edge Middleware (recomendada)**
Crear un middleware en Vercel que intercepte las peticiones de crawlers sociales (WhatsApp, Facebook, Twitter, LinkedIn) y devuelva HTML con las meta tags OG correctas según la ruta.

- Crear archivo `api/og.ts` o `vercel.json` rewrite + middleware
- Detectar el User-Agent del crawler
- Devolver HTML mínimo con las meta tags correctas por ruta
- Los usuarios normales siguen viendo la SPA sin cambios

**Opción B — Pre-rendering con `vercel.json` rewrites**
Configurar `vercel.json` para usar un servicio de pre-rendering (como prerender.io) que genera HTML estático para los crawlers.

### Plan de implementación (Opción A)

1. **Crear `api/og-meta.ts`** — Serverless function que mapea cada ruta a sus meta tags OG específicas y devuelve HTML mínimo con las tags correctas cuando detecta un crawler social.

2. **Actualizar `vercel.json`** — Agregar un middleware o rewrite que envíe las peticiones de crawlers a la función serverless antes del SPA.

3. **Mapa de rutas → meta tags:**
   - `/` → `Nasua-PaginasWebProfesionalesEnColombia.jpg`
   - `/adn-nasua` → `ADNNasua.jpg`
   - `/landing-page` → `LandingPageNasua.jpg`
   - `/sitio-corporativo` → `SitioCorporativoNasua.jpg`
   - `/ecommerce` → `EmpezarProyectoNasua.jpg`
   - `/estrategia` → `EstrategiaNasua.jpg`
   - `/quienes-somos` → `QuienesSomosNasua.jpg`
   - `/contacto` → `EmpezarProyectoNasua.jpg`
   - `/blog` → default
   - etc.

### Detalle técnico

La función serverless verificará el User-Agent contra patrones conocidos de crawlers (`facebookexternalhit`, `WhatsApp`, `Twitterbot`, `LinkedInBot`). Si es un crawler, responde con HTML mínimo con las meta tags. Si no, deja pasar la petición al SPA normalmente.

