

## Diagnóstico del error 500 en formularios

El error en la consola muestra: **"body stream already read"** en `src/lib/send-lead.ts`. Esto ocurre porque:

1. Primero intentamos leer `res.json()` para obtener detalles del error
2. Si eso falla, caemos al `catch` e intentamos `res.text()` 
3. Pero el stream de la respuesta ya fue consumido por el primer intento

### Solución técnica

**Archivo: `src/lib/send-lead.ts`**

Modificar la función `sendLead` para clonar la respuesta antes de leerla, o reestructurar el manejo de errores:

```typescript
export async function sendLead(formType: string, data: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, data }),
    });

    if (!res.ok) {
      let details = "";
      
      // Clonamos la respuesta para poder leerla múltiples veces si es necesario
      const clonedRes = res.clone();
      
      try {
        const payload = await res.json();
        details = payload?.details || payload?.error || "";
      } catch {
        // Si JSON falla, usamos el clon para leer como texto
        try {
          details = await clonedRes.text();
        } catch {
          details = `HTTP ${res.status}`;
        }
      }

      console.error(`Error sending lead (${res.status}):`, details || "Unknown error");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending lead:", error);
    return false;
  }
}
```

También verificar que el backend en `api/send-lead.ts` maneje correctamente los errores de Resend y devuelva respuestas JSON válidas.

