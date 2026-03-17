

## Plan: Eliminar etiquetas HTML de la descripción en las tarjetas de proyectos

**Problema**: En `/proyectos`, la descripción del job se muestra con las etiquetas HTML crudas (`<p>Diseño&nbsp;de&nbsp;interfaz&n`) porque se renderiza como texto plano.

**Solución**: Crear una función `stripHtml` que elimine las etiquetas HTML y decodifique entidades como `&nbsp;`, y usarla en `src/pages/Jobs.tsx` para la vista previa de la descripción en las tarjetas.

**Archivos a editar**:
- `src/pages/Jobs.tsx` — agregar función helper `stripHtml` y aplicarla en la línea donde se muestra `job.description` (línea ~97):
  ```tsx
  // De:
  {job.description}
  // A:
  {stripHtml(job.description)}
  ```

