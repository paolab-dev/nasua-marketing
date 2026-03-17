

## Plan: Eliminar TL;DR de la vista pública del blog

**Cambio**: Remover el bloque visual del TL;DR en `src/pages/BlogPost.tsx`. El campo `summary_tldr` seguirá existiendo en la base de datos y en el admin (útil para SEO/meta tags internos), pero no se renderizará en la página pública del post.

**Archivo a editar**: `src/pages/BlogPost.tsx` — eliminar el bloque condicional `{post.summary_tldr && (...)}` (aproximadamente líneas 120-127).

