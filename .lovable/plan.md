

## Enviar formularios por email con Resend

### Arquitectura

```text
[Form Submit] → fetch("/api/send-lead") → [Vercel Serverless] → [Resend API] → pao@ + alex@
```

### Cambios

**1. Crear `api/send-lead.ts`** — Serverless function que:
- Recibe `POST` con `{ formType, data }` (tipo de formulario + campos)
- Valida los datos del lado del servidor
- Construye un email HTML con plantilla profesional según el `formType` (Landing, Corporativo, Ecommerce, Estrategia, Contacto)
- Envía a `pao@nasua.marketing` y `alex@nasua.marketing` vía Resend API
- El "from" será `leads@nasua.marketing` (o el dominio verificado en Resend)

**2. Agregar secret `RESEND_API_KEY`** — Variable de entorno en Vercel con la API key de Resend.

**3. Actualizar los 5 formularios** para enviar datos al endpoint:
- `LeadCaptureForm.tsx` — reemplazar `console.log` por `fetch("/api/send-lead")`
- `CorporateLeadForm.tsx` — igual
- `EcommerceLeadForm.tsx` — igual
- `StrategyLeadForm.tsx` — reemplazar `setTimeout` simulado
- `Contacto.tsx` — reemplazar toast-only

Cada formulario enviará su `formType` y todos los campos capturados. El endpoint construirá la plantilla HTML con los datos específicos de cada tipo.

**4. Plantilla de email** — HTML inline con:
- Header con logo/nombre Nasua
- Tipo de formulario como título
- Tabla con todos los campos capturados (label + valor)
- Timestamp de envío
- Footer con link al sitio

### Requisitos previos

Para que funcione necesitas:
1. **Cuenta en Resend** (resend.com) — plan gratuito permite 100 emails/día
2. **Verificar dominio** `nasua.marketing` en Resend (agregar registros DNS)
3. **Agregar `RESEND_API_KEY`** como variable de entorno en Vercel

### Dependencia nueva
- `resend` (npm package) para el serverless function

