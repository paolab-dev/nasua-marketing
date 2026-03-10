

## Dónde agregar las meta tags Open Graph

En cada página ya tienes un bloque `<Helmet>` con `<title>` y `<meta name="description">`. Las meta tags OG van **dentro de ese mismo bloque `<Helmet>`**, justo después de las tags existentes.

### Ejemplo con Index.tsx (que aún no tiene Helmet)

```tsx
<Helmet>
  <title>Nasua – Páginas Web Profesionales en Colombia</title>
  <meta name="description" content="..." />
  {/* ↓ Agregar estas líneas ↓ */}
  <meta property="og:title" content="Nasua – Páginas Web Profesionales" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://nasua.co/Nasua-PaginasWebProfesionalesEnColombia.jpg" />
</Helmet>
```

### Ejemplo con una página que ya tiene Helmet (AdnNasua, Ecommerce, etc.)

En `PoliticaPrivacidad.tsx` por ejemplo, ya tienes:
```tsx
<Helmet>
  <title>Política de Privacidad | Nasua</title>
  <meta name="description" content="..." />
</Helmet>
```

Solo agregas las líneas OG adentro:
```tsx
<Helmet>
  <title>Política de Privacidad | Nasua</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="Política de Privacidad | Nasua" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="https://nasua.co/QuienesSomosNasua.jpg" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

### Mapeo imagen por página

| Página | Imagen OG |
|---|---|
| Index | `Nasua-PaginasWebProfesionalesEnColombia.jpg` |
| AdnNasua | `ADNNasua.jpg` |
| LandingPage | `LandingPageNasua.jpg` |
| SitioCorporativo | `SitioCorporativoNasua.jpg` |
| Ecommerce | `EmpezarProyectoNasua.jpg` |
| Estrategia | `EstrategiaNasua.jpg` |
| QuienesSomos | `QuienesSomosNasua.jpg` |
| Contacto | `EmpezarProyectoNasua.jpg` |
| Blog | `Nasua-PaginasWebProfesionalesEnColombia.jpg` |
| Privacidad/Términos | `Nasua-PaginasWebProfesionalesEnColombia.jpg` |

### Nota importante
Las URLs de `og:image` deben ser **absolutas** (con `https://tudominio.com/`). Rutas relativas como `/ADNNasua.jpg` no funcionan en redes sociales.

¿Quieres que implemente todas las meta tags en las 10 páginas con este mapeo?

