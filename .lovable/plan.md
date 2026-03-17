

## Página de Contacto — Estructura Propuesta

Basándome en el ADN de Nasua (soberanía digital, financiación Wompi, entrega en 7 días, tres servicios), propongo esta estructura:

---

### A. Hero compacto
- **H1**: "Hablemos de tu proyecto digital"
- **Subtítulo**: "Cuéntanos qué necesitas y en menos de 24 horas un estratega de Nasua te contactará con una propuesta personalizada. Sin compromisos."

### B. Formulario de contacto (columna principal)
Campos:
1. **Nombre completo** (texto)
2. **WhatsApp o teléfono** (texto, con código +57 prefijado)
3. **Correo electrónico** (email)
4. **¿Qué servicio te interesa?** (select: Landing Page / Sitio Corporativo / Tienda Virtual / No estoy seguro)
5. **Cuéntanos brevemente tu proyecto** (textarea)
6. **¿Te interesa financiar con Wompi?** (checkbox: Sí, quiero conocer mis opciones de crédito)
7. **Botón CTA**: "Enviar mi solicitud" (naranja, estilo primario)
8. **Disclaimer**: "Nasua protege tus datos. No compartimos tu información con terceros."

### C. Columna lateral — Info de contacto rápido
- Ícono WhatsApp + número directo (link wa.me)
- Ícono correo + email de contacto
- Ícono ubicación + "Colombia 🇨🇴"
- Horario de atención

### D. Sección inferior — "¿Por qué elegirnos?"
Tres mini-cards reutilizando los diferenciadores:
1. **Entrega en 7 días** — Vibe Coding con IA
2. **Financiación Wompi** — Empieza sin descapitalizarte
3. **100% tuyo** — Código y dominio bajo tu propiedad

### Detalles técnicos
- **Ruta**: `/contacto`, con `id="contacto"` en la sección para que los CTAs existentes (`href="#contacto"`) funcionen desde el home.
- **Validación**: Zod schema para todos los campos del formulario con react-hook-form.
- **Envío**: Por ahora sin backend — mostrar toast de confirmación y loguear datos. Se puede conectar a Supabase o un webhook después.
- **Navegación**: Agregar "Contacto" al menú del Navbar (desktop y mobile).
- **Animaciones**: `framer-motion` fade-up consistente con las demás páginas.
- **Layout**: Grid de 2 columnas en desktop (formulario 2/3 + info 1/3), una columna en móvil.

