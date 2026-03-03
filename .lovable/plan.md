

## Botón flotante de WhatsApp

Agregar un componente de botón flotante fijo en la esquina inferior derecha de todas las páginas, con el ícono de WhatsApp y enlace a `wa.me/{número}`.

### Detalles técnicos

- **Nuevo componente**: `src/components/WhatsAppButton.tsx` — botón circular fijo (`fixed bottom-6 right-6`), fondo verde WhatsApp (#25D366), ícono SVG de WhatsApp, enlace `<a href="https://wa.me/{NÚMERO}" target="_blank">`.
- **Integración**: Importar en `src/App.tsx` fuera del `<Routes>` para que aparezca en todas las páginas.
- **Animación**: Leve efecto `hover:scale-110` y sombra para que destaque.

Necesitaré el número de WhatsApp con código de país (ej: `573001234567`) para configurar el enlace. Si no lo proporcionas, lo dejaré como placeholder editable.

