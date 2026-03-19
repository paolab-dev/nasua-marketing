

## Plan: Google Analytics + Sitemap Dinámico (sin vacantes)

### 1. Google Analytics — Inserción directa en `index.html`

Ya tienes el script de GA4, así que lo insertamos directamente en el `<head>` de `index.html`. Sin tabla de Supabase ni panel admin — simplemente pegas tu código de gtag ahí.

### 2. Sitemap Dinámico — Vercel Serverless Function

Crear `api/sitemap.ts` que genere el XML al vuelo con:

**Rutas estáticas** (prioridad fija):
- `/` (1.0), `/adn-nasua`, `/ecommerce`, `/landing-page`, `/sitio-corporativo`, `/estrategia`, `/quienes-somos`, `/contacto`, `/blog` (0.8 cada una)

**Entradas del blog** (dinámicas desde Supabase):
- Consulta posts publicados → genera `/blog/{slug}` con prioridad 0.6

**Excluidas**: `/proyectos`, `/proyectos/:slug`, `/login`, `/admin-NM/*`, `/politica-privacidad`, `/terminos-condiciones`

### 3. robots.txt

Agregar `Sitemap: https://nasua.marketing/sitemap.xml` y bloquear `/proyectos/`, `/admin-NM/`, `/login`.

### 4. vercel.json

Agregar rewrite: `/sitemap.xml` → `/api/sitemap`

### 5. Eliminar `sitemap.xml` estático

Se reemplaza por la función serverless.

### Resumen de archivos

| Acción | Archivo |
|--------|---------|
| Editar | `index.html` (agregar script GA4) |
| Crear | `api/sitemap.ts` |
| Editar | `vercel.json` (rewrite sitemap) |
| Editar | `public/robots.txt` (Sitemap + Disallow) |
| Eliminar | `sitemap.xml` |

